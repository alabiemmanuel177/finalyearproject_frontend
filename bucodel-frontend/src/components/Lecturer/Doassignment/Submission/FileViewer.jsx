import React, { useState, useEffect } from 'react';
import ReactFileViewer from 'react-file-viewer';
import { getFileType } from 'file-type';

const FileViewer = ({ fileUrl }) => {
    const [fileType, setFileType] = useState(null);

    useEffect(() => {
        async function getFile() {
            const response = await fetch(fileUrl);
            const buffer = await response.arrayBuffer();
            const type = await getFileType(buffer);
            setFileType(type);
        }
        getFile();
    }, [fileUrl]);

    return (
        <div>
            {fileType ? (
                <ReactFileViewer fileType={fileType.mime} filePath={fileUrl} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default FileViewer;
