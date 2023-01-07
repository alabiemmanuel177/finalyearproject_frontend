import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './css/logoutmodal.css'
import { TbAlertOctagon } from "react-icons/tb";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 690,
    height: 823,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: 0
};
const AddToClassBoard = ({ open, setOpen }) => {
    const btnContainer = document.getElementById("headers");
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
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [active2, setActive2] = useState("assignment");
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="addclassboard">
                        <div className="title"><h3>Classboard</h3></div>
                        <div className="headers" id='headers'>
                            <div className="overview headerButton active1"
                                onClick={() => setActive2("assignment")}><h3>Assignment</h3></div>
                            <div className="schedule headerButton"
                                onClick={() => setActive2("password")}><h3>Resources</h3></div>
                            <div className="schedule headerButton"
                                onClick={() => setActive2("password")}><h3>Quiz</h3></div>
                        </div>
                        <hr />
                        {/* {active2 === "assignment" && }
                        {active2 === "resources" && }
                        {active2 === "resources" && } */}

                    </div>

                </Box>
            </Modal></div>
    )
}

export default LogOutModal