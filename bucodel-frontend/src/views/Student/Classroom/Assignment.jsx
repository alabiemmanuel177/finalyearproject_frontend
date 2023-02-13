import React, { useEffect } from 'react'
import './css/courses.css'
import {
    useState,
    // useEffect
} from "react";
import AssignmentList from '../../../components/Student/Classroom Student/AssignmentList';
import MissingList from '../../../components/Student/Classroom Student/MissingList';
import DoneList from '../../../components/Student/Classroom Student/DoneList';
import axios from 'axios';
import config from '../../../config';

const Assignment = ({ student }) => {
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

    const [assignedAssignments, setAssignedAssignments] = useState([])
    useEffect(() => {
        const fetchAssignedAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/class/classes/${student.class}/assigned-assignments`);
            setAssignedAssignments(res.data);
        };
        fetchAssignedAssignments();
    }, []);

    const [missingAssignments, setMissingAssignments] = useState([])
    useEffect(() => {
        const fetchMissingAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/class/classes/${student.class}/missing-assignments`);
            setMissingAssignments(res.data);
        };
        fetchMissingAssignments();
    }, []);

    const [doneAssignments, setDoneAssignments] = useState([])
    useEffect(() => {
        const fetchDoneAssignments = async () => {
            const res = await axios.get(`${config.baseURL}/class/classes/${student.class}/done-assignments`);
            setDoneAssignments(res.data);
        };
        fetchDoneAssignments();
    }, []);

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
            {active2 === "assigned" && <AssignmentList assignedAssignments={assignedAssignments} />}
            {active2 === "missing" && <MissingList missingAssignments={missingAssignments} />}
            {active2 === "done" && <DoneList doneAssignments={doneAssignments} />}
        </div>
    )
}

export default Assignment