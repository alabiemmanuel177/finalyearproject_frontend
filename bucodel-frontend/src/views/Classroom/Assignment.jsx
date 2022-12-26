import React from 'react'
import './css/courses.css'
import {
    useState,
    // useEffect
} from "react";
import AssignmentList from '../../components/Classroom Student/AssignmentList';
import MissingList from '../../components/Classroom Student/MissingList';
import DoneList from '../../components/Classroom Student/DoneList';

const Assignment = () => {
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
    const [active2, setActive2] = useState("assigned");

    return (
        <div className="courses">
            <div className="title"><h3>Assignments</h3></div>
            <div className="headers" id='headers'>
                <div className="overview headerButton active1"
                    onClick={() => setActive2("assigned")}><h3>Assigned</h3>
                </div>
                <div className="overview headerButton"
                    onClick={() => setActive2("missing")}><h3>Missing</h3>
                </div>
                <div className="schedule headerButton"
                    onClick={() => setActive2("done")}><h3>Done</h3>
                </div>
            </div>
            <hr />
            {active2 === "assigned" && <AssignmentList />}
            {active2 === "missing" && <MissingList/>}
            {active2 === "done" && <DoneList/>}
        </div>
    )
}

export default Assignment