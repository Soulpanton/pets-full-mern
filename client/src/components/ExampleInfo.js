import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { navigate } from "@reach/router";

const ExampleInfo = (props) => {

    const [deleteClicked, setDeleteClicked] = useState(false)


    const [exampleDetails, setExampleDetails] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",

    })

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/examples/${props.exampleId}`)
            .then(response => {
                console.log("got back the response from api to find one example", response)
                setExampleDetails(response.data.results)

            })
            .catch(err => console.log("ERRORORRR", err))

    }, [])

    const deleteClickHandler = (e, exampleId) => {
        console.log("Oh, YOU trying cut a example from the squaddd huhh", exampleId)
        Axios.delete(`http://localhost:8000/api/examples/destroy/${exampleId}`)
            .then(response => {
                console.log("JUST DELETED SOMEBODY!", response)
                setDeleteClicked(!deleteClicked)
                navigate("/")
            })
            .catch(err => console.log(err))
    }




    return (
        <div className="card" style={{ backgroundColor: "#03ecfc" }}>
            <div className="card-body">
                <h3>Details about {exampleDetails.name}:</h3>

                <h4>Pet Type: <span style={{ color: "#2003fc" }}> {exampleDetails.type}</span></h4>
                <h4>Description: <span style={{ color: "#2003fc" }}>{exampleDetails.description}</span></h4>
                <h4>Skill 1:<span style={{ color: "#2003fc" }}>{exampleDetails.skill1}</span></h4>
                <h4>Skills 2:<span style={{ color: "#2003fc" }}>{exampleDetails.skill2}</span></h4>
                <h4>Skills 3:<span style={{ color: "#2003fc" }}>{exampleDetails.skill3}</span></h4>

                <button onClick={(e) => deleteClickHandler(e, exampleDetails._id)} className="btn btn-danger m-1" >Adopt {exampleDetails.name}</button>



            </div>
        </div>
    );
};

export default ExampleInfo;