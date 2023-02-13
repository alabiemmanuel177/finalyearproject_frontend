import React from 'react'
import './css/resources.css'
import { MdOutlineAssignment } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";

const LecturerResources = () => {
  return (
    <div className='Resources'>
      <div className="resourcesContainer">
        <Resource />
        <Resource />
        <Resource />
        <Resource />
      </div>
    </div>
  )
}

const Resource = () => {
  return (
    <div className="resource">
      <div className="color1">
        <div className='flexRow'>
          <MdOutlineAssignment className='icon8' />
          <div className="resourceDetails">
            <h2>Lecture 1</h2>
            <h3>COSC 302: Data Structure And Algorithms</h3>
          </div>
        </div>
        <div className="date">Friday, 29 Jul 2022</div>
      </div>
      <div className="resourceContent">
        <h4>These are the lecture slides for week 1, 2 and 3 with their various exercises and practice questions. do well to download and study them.</h4>
        <div className="resourceFiles">
          <div className="files">
            <div className="file">
              <GrDocumentPdf className='icon8 red1' />
              <div className="filename">
                <h2>DSA Lecture Slides Week 1</h2>
                <h3>PDF</h3>
              </div>
            </div>
            <div className="file">
              <GrDocumentPdf className='icon8 red1' />
              <div className="filename">
                <h2>DSA Lecture Slides Week 1</h2>
                <h3>PDF</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default LecturerResources