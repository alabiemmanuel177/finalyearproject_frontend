import React, { useEffect, useState } from 'react'
import { MdOutlineAssignment } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import { FaFileWord, FaFilePowerpoint } from "react-icons/fa";
import { AiFillFileUnknown } from "react-icons/ai"
import moment from 'moment';
import axios from 'axios';
import config from '../../../config';
import EmptyResources from './EmptyResource';
import { Button } from '@mui/material';
import CreateResourceModal from '../modal/CreateResourceModal';

const LecturerResources = ({ resources, course, empty }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);

  return (
    <div className='Resources'>
      <div className="addResouces">
        <div className='main-assign-header'>
          <Button onClick={handleOpen} sx={{ p: '8px 20px', textTransform: 'none', fontWeight: 'bold' }} className='assign-create' variant='contained' >Add Resources</Button>
          <CreateResourceModal open={open} setOpen={setOpen} />
        </div>
      </div>
      {empty ? (<div className="resourcesContainer mxH2">
        {resources.map((p) => (
          <Resource resource={p} key={p._id} course={course} />
        ))}
      </div>
      ) : (<EmptyResources />)}
    </div>
  )
}

const Resource = ({ resource, course }) => {
  const formattedDate = moment(resource.createdAt).format("Do MMM, h:mm a");

  return (
    <>
      <div className="resource">
        <div className="color1">
          <div className='flexRow'>
            <MdOutlineAssignment className='icon8' />
            <div className="resourceDetails">
              <h2>{resource.title}</h2>
              <h3>{`${course.courseabrev}: ${course.title}`}</h3>
            </div>
          </div>
          <div className="date">{formattedDate}</div>
        </div>
        <div className="resourceContent">
          <h4>{resource.description}</h4>
          <div className="resourceFiles">
            <div className="files">
              {resource.files.map((p) => (
                <File file={p} key={p} id={resource._id} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

const File = ({ file, id }) => {
  //Get class resources
  const [fileDets, setFileDets] = useState(null)
  useEffect(() => {
    const fetchFileDets = async () => {
      const res = await axios.get(`${config.baseURL}/coursematerialfile/${file}/`);
      setFileDets(res.data);
    };
    fetchFileDets();
  }, [file]);

  const handleDownload = async () => {
    const fileUrl = fileDets.fileUrl
    const fileName = fileDets.fileName
    const res = await axios.get(fileUrl, {
      responseType: 'blob'
    });
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    const fileExt = fileUrl.substring(fileUrl.lastIndexOf('.') + 1);
    link.setAttribute('download', `${fileName}.${fileExt}`);
    document.body.appendChild(link);
    link.click();
  };

  const getFileIcon = (fileExt) => {
    switch (fileExt) {
      case "pdf":
        return <GrDocumentPdf className="icon8 " />;
      case "doc":
      case "docx":
        return <FaFileWord className="icon8 word" />;
      case "ppt":
      case "pptx":
        return <FaFilePowerpoint className="icon8 ppt" />;
      default:
        return <AiFillFileUnknown className="icon8 " />;
    }
  };
  return (
    <div className="file" onClick={handleDownload}>
      {fileDets && <>
        {getFileIcon(fileDets.fileUrl.substring(fileDets.fileUrl.lastIndexOf('.') + 1))}
        <div className="filename" >
          <h2 
        
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
           
          }}>{fileDets.fileName}</h2>
          <h3 style={{ textTransform: "uppercase" }}>{fileDets.fileUrl.substring(fileDets.fileUrl.lastIndexOf('.') + 1)}</h3>
        </div>
      </>}
    </div >
  )
}
export default LecturerResources