const ExampleController = require("../controllers/example.controller");


// path("/api/examples", views.index)

module.exports = app => {
    app.get("/api/examples", ExampleController.findAllExamples);
    app.post("/api/examples/create", ExampleController.createNewExample);
    app.get("/api/examples/:exampleId", ExampleController.findOneExample);
    app.put("/api/examples/update/:exampleId", ExampleController.updateExample);
    app.delete("/api/examples/destroy/:exampleId", ExampleController.deleteExample);

}

