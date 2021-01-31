import React, { useState } from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const NewExample = () => {
    const [exampleInfo, setExampleInfo] = useState({
        firstName: "",
        lastName: "",
        points: 0
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        console.log("ohhhhh you typing on an input huh....", e.target.name)

        setExampleInfo({
            ...exampleInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log("OHHHHHHH, so you trynaa submit now huhhh, moving on up i seee")
        console.log(exampleInfo)
        Axios.post("http://localhost:8000/api/examples/create", exampleInfo)
            .then(res => {
                console.log("response after submitting the axios post request", res)
                if (res.data.results) {
                    navigate("/")
                }
                else {
                    console.log("you aint goinnn noo where till you fill this out properlayyy")
                    setErrors(res.data.errors)
                }

            })
            .catch(err => console.log("errors that came up from posting", err))

    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4">
                        <h3>Know a pet needing a home?</h3>
                        <div>
                            <div><label htmlFor="">Pet Name</label></div>
                            <div><input type="text" name="name" onChange={changeHandler} id="" /></div>
                            <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
                        </div>
                        <div>
                            <div><label htmlFor="">Type</label></div>
                            <div><input type="text" name="type" onChange={changeHandler} id="" /></div>
                            <span className="text-danger">{errors.type ? errors.type.message : ""}</span>
                        </div>
                        <div>
                            <div><label htmlFor="">Description</label></div>
                            <div><input type="text" name="description" onChange={changeHandler} id="" /></div>
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
                            <div><input type="text" name="skill1" onChange={changeHandler} id="" /></div>
                            <span className="text-danger">{errors.skill1 ? errors.skill1.message : ""}</span>
                        </div>
                        <div>
                            <div><label htmlFor="">Skill 2:</label></div>
                            <div><input type="text" name="skill2" onChange={changeHandler} id="" /></div>
                            <span className="text-danger">{errors.skill2 ? errors.skill2.message : ""}</span>
                        </div>
                        <div>
                            <div><label htmlFor="">Skill 3:</label></div>
                            <div><input type="text" name="skill3" onChange={changeHandler} id="" /></div>
                            <span className="text-danger">{errors.skill3 ? errors.skill3.message : ""}</span>
                        </div>
                        <div className="col-2"></div>

                    </div>
                </div>
            </form>
        </div>
    );
};


export default NewExample;