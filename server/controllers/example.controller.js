const Example = require("../models/example.model");


module.exports.findAllExamples = (req, res) => {
    console.log("im trying to find all the examples!!!");

    Example.find()
        .then((allExamples) => res.json({ results: allExamples }))
        .catch((err) => res.json(err));
};

module.exports.createNewExample = (req, res) => {
    console.log("im trying to create some examples here!!!!!");
    Example.create(req.body)
        .then((newExample) => res.json({ results: newExample }))
        .catch((err) => res.json(err));
};

module.exports.findOneExample = (req, res) => {
    console.log("example id to find", req.params.exampleId);
    Example.findOne({ _id: req.params.exampleId })
        .then((selectedExample) => res.json({ results: selectedExample }))
        .catch((err) => res.json(err));
};

module.exports.updateExample = (req, res) => {
    Example.findOneAndUpdate({ _id: req.params.exampleId }, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })
        .then((updatedExample) => res.json({ results: updatedExample }))
        .catch((err) => res.json(err));
};

module.exports.deleteExample = (req, res) => {
    Example.findByIdAndDelete(req.params.exampleId)
        .then((deletedExample) => res.json({ results: deletedExample }))
        .catch((err) => res.json(err));
};
