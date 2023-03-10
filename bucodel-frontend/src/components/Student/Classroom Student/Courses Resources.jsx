import React from 'react'
import '../css/resources.css'
import { MdOutlineAssignment } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import moment from 'moment';
import axios from 'axios';
import config from '../../../config';

const Resources = ({ resources }) => {
  return (
    <div className='resources'>
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
  const [files, setFiles] = resource.files;

  return (
    <div className="resource">
      <div className="color1">
        <div className='flexRow'>
          <MdOutlineAssignment className='icon8' />
          <div className="resourceDetails">
            <h2>{resource.title}</h2>
            <h3>{`${resource.course.courseabrev}: ${resource.course.title}`}</h3>
          </div>
        </div>
        <div className="date">{formattedDate}</div>
      </div>
      <div className="resourceContent">
        <h4>{resource.description}</h4>
        <div className="resourceFiles">
          <div className="files">
            {resource.files.map((p) => (
              <File file={p} key={p._id} id={resource._id} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

const File = ({ file, id }) => {
  const handleDownload = async (file) => {
    try {
      const response = await axios.get(`${config.baseURL}/coursematerial/${id}/file/${file._id}`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', file.filename);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="file">
      <GrDocumentPdf className='icon8 red1' />
      <div className="filename" onClick={() => handleDownload(file)}>
        <h2>{file.filename}</h2>
        <h3>PDF</h3>
      </div>
    </div>
  )
}


export default Resources