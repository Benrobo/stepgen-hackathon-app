import React from "react";
import Navbar from "../../comp/Navbar";

import "./style.css";

function Home() {
    return (
        <div id="home-cont">
            <Navbar />
            {false ? (
                <div className="head">
                    <p>You Have No Resume Created</p>
                    <br />
                    <button className="btn create-resume">Create Resume</button>
                </div>
            ) : (
                <AllResumeCreated />
            )}
        </div>
    );
}

export default Home;

function AllResumeCreated() {
    return (<div className="home-resume-cont">
        <div className="cont">
            <div className="box">
                <div className="top">
                    <p>Resume 1</p>
                </div>
                <div className="bottom">
                    <button className="btn btn-primary ">view</button>
                    <button className="btn btn-success ">edit</button>
                    <button className="btn btn-danger ">delete</button>
                </div>
            </div>
        </div>
    </div>)
}
