
import './App.css';
import Main from './components/Main';
import { Router, Link } from "@reach/router";
import NewExample from './components/NewExample';
import ExampleInfo from './components/ExampleInfo';
import EditExample from './components/EditExample';


function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Link className="btn btn-primary m-1" to="/new">Add a pet to the shelter</Link>
      <Link className="btn btn-secondary m-1" to="/">Home</Link>


      <Router>

        <Main path="/"></Main>
        <NewExample path="/new"></NewExample>
        <ExampleInfo path="/examples/:exampleId"></ExampleInfo>
        <EditExample path="/examples/edit/:exampleId"></EditExample>



      </Router>

    </div>
  );
}

export default App;