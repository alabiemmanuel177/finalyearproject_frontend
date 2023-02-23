import React from 'react'
import '../css/resources.css'
import { MdOutlineAssignment } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import moment from 'moment';


const Resources = ({ resources }) => {
  return (
    <div className='Resources'>
      <div className="resourcesContainer">
        {resources.map((p) => (
          <Resource resource={p} key={p._id} />
        ))}
      </div>
    </div>
  )
}

const Resource = ({ resource }) => {
  const formattedDate = moment(resource.createdAt).format("Do MMM, h:mm a");

  return (
    <div className="resource">
      <div className="color1">
        <div className='flexRow'>
          <MdOutlineAssignment className='icon8' />
          <div className="resourceDetails">
            <h2>{resource.title}</h2>
            <h3>COSC 302: Data Structure And Algorithms</h3>
          </div>
        </div>
        <div className="date">{formattedDate}</div>
      </div>
      <div className="resourceContent">
        <h4>{resource.description}</h4>
        <div className="resourceFiles">
          <div className="files">
            <div className="file">
              <GrDocumentPdf className='icon8 red1' />
              <div className="filename">
                <h2>{resource.file.originalname}</h2>
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

export default Resources