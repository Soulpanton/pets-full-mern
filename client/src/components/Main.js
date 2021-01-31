import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from "@reach/router";


const Main = () => {
    //if i want it to run some function upon rendering of this component, i want to use useEffect
    const [allExamples, setAllExamples] = useState([])
    const [deleteClicked, setDeleteClicked] = useState(false)

    useEffect(() => {
        Axios.get("http://localhost:8000/api/examples")
            .then(response => {
                console.log("*************", response)
                response.data.results.sort(function (a, b) {
                    var typeA = a.type.toUpperCase();
                    var typeB = b.type.toUpperCase();
                    if (typeA < typeB) {
                        return -1;
                    }
                    if (typeA > typeB) {
                        return 1;
                    }
                    return 0;
                });
                setAllExamples(response.data.results)

            })
            .catch(err => console.log(err))

    }, [deleteClicked])

    const deleteClickHandler = (e, exampleId) => {
        console.log("Oh, YOU trying cut a example from the squaddd huhh", exampleId)
        Axios.delete(`http://localhost:8000/api/examples/destroy/${exampleId}`)
            .then(response => {
                console.log("JUST DELETED SOMEBODY!", response)
                setDeleteClicked(!deleteClicked)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>

            <table className="table table-danger col-8 mx-auto">
                <thead>
                    <tr>
                        <th><h3>Name</h3></th>
                        <th><h3>Type</h3></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allExamples.map((example, i) => {
                            return <tr key={i}>

                                <td><h5>{example.name}</h5></td>
                                <td><h5>{example.type}</h5></td>
                                <td>
                                    <Link className="btn btn-success m-1" to={`/examples/${example._id}`}>Details</Link>
                                    <Link className="btn btn-info m-1" to={`/examples/edit/${example._id}`}>Edit</Link>

                                    <button onClick={(e) => deleteClickHandler(e, example._id)} className="btn btn-danger m-1" >Adopt</button>
                                    {/* <button onClick={ (e) => onClickHandler(e, item) }>{ item }</button> */}



                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    );
};

export default Main;