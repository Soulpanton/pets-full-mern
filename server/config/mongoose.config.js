const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/examples",{
    userNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("This is the DataBase"))
    .catch((err=> console.log("An ERROR OCCURRED DATABASE CONFIG", err)))