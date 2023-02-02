import React, { useState, useEffect } from 'react'
import Password from '../../../components/Student/Classroom Student/Password';
import Profile from '../../../components/Student/Classroom Student/Profile';
import axios from 'axios';
import config from "../../../config";

const Settings = ({ student }) => {
    var btnContainer = document.getElementById("headers");
    if (btnContainer !== null) {
        var btns = btnContainer.getElementsByClassName("headerButton");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active1");
                current[0].className = current[0].className.replace("active1", "");
                this.className += " active1";
            });
        }
    }
    const [active2, setActive2] = useState("profile");
    
    

    const [department, setDepartment] = useState("");
    useEffect(() => {
        const fetchDepartment = async () => {
            const res = await axios.get(`${config.baseURL}/department/${student.department}`);
            setDepartment(res.data);
        };
        fetchDepartment();
    });
    return (
        <div className="courses">
            <div className="title"><h3>Settings</h3></div>
            <div className="headers" id='headers'>
                <div className="overview headerButton active1"
                    onClick={() => setActive2("profile")}><h3>Profile</h3></div>
                <div className="schedule headerButton"
                    onClick={() => setActive2("password")}><h3>Passwords</h3></div>
            </div>
            <hr />
            {active2 === "profile" && <Profile student={student} department={department} />}
            {active2 === "password" && <Password student={student} />}
            
        </div>

    )
}

export default Settings