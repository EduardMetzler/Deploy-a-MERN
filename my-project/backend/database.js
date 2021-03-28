const mongoose = require('mongoose');
const connection = "mongodb+srv://eduard:eduard@cluster0.o9l6j.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));