import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const EditExample = (props) => {
    const [exampleDetails, setExampleDetails] = useState({
        firstName: "",
        lastName: "",
        points: ""
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/examples/${props.exampleId}`)
            .then(response => {
                console.log("RESPONSE FROM API CALL", response)
                setExampleDetails(response.data.results)
            })
            .catch()
    }, [])
    console.log("********", props.exampleId)

    const changeHandler = e => {
        console.log("ohhhhh you tryin to edit something huhhh")
        setExampleDetails({
            ...exampleDetails,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/examples/update/${props.exampleId}`, exampleDetails)
            .then(response => {
                console.log("JUST UPDATED SOMETHANGGG! HERE IS THE RESPONSE", response)
                if (response.data.results) {
                    navigate('/')
                }
                else {
                    setErrors(response.data.errors)
                }
            })
            .catch(err => console.log("ERROR ON TRYIN TO UPDATE", err))
    }

    return (
        <div>
            <h2>Edit {exampleDetails.name}</h2>
            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4">
                        <h3>Info</h3>
                        <h3>(required)</h3>
                        <div>
                            <div><label htmlFor="">Pet Name</label></div>

                            <div><input type="text" name="name" onChange={changeHandler} id="" value={exampleDetails.name} /></div>
                            <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
                        </div>
                        <div>
                            <div><label htmlFor="">Type</label></div>
                            <div><input type="text" name="type" onChange={changeHandler} id="" value={exampleDetails.type} /></div>
                            <span className="text-danger">{errors.type ? errors.type.message : ""}</span>
                        </div>
                        <div>
                            <div><label htmlFor="">Description</label></div>
                            <div><input type="text" name="description" onChange={changeHandler} id="" value={exampleDetails.description} /></div>
                            <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
                        </div>
                        <br />
                        <input style={{ backgroundColor: "blue" }} type="submit" value="    Add Pet    " />
                    </div>

                    <div className="col-4">
                        <h3>Skills</h3>
                        <h3>(optional):</h3>
                        <div>
                            <div><label htmlFor="">Skill 1:</label></div>
                            <div><input type="text" name="skill1" onChange={changeHandler} id="" value={exampleDetails.skill1} /></div>
                            <span className="text-danger">{errors.skill1 ? errors.skill1.message : ""}</span>
                        </div>
                        <div>
                            <div><label htmlFor="">Skill 2:</label></div>
                            <div><input type="text" name="skill2" onChange={changeHandler} id="" value={exampleDetails.skill2} /></div>
                            <span className="text-danger">{errors.skill2 ? errors.skill2.message : ""}</span>
                        </div>
                        <div>
                            <div><label htmlFor="">Skill 3:</label></div>
                            <div><input type="text" name="skill3" onChange={changeHandler} id="" value={exampleDetails.skill3} /></div>
                            <span className="text-danger">{errors.skill3 ? errors.skill3.message : ""}</span>
                        </div>
                        <div className="col-2"></div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditExample;