const { Decimal128 } = require("bson")
const mongoose = require("mongoose");
// const { string } = require("prop-types");

const ExampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet Name is required!"],
        minLength: [3, "Name must be at least three characters"]


    },
    type: {
        type: String,
        required: [true, "Pet Type is required!"],
        minLength: [3, "Last Name must be at least three characters"]

    },
    description: {
        type: String,
        required: [true, "A Pet Description is required"],
        minLength: [3, "Description must be at least three characters"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    }

})

const Example = mongoose.model("Example", ExampleSchema)

module.exports = Example;

