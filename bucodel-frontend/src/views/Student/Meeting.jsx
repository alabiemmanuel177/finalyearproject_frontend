import React, { useEffect } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { useParams } from "react-router-dom";

export default function SMeeting({ student }) {
    const id = useParams()
    const studentName = `${student.lastname} ${student.firstname} ${student.middlename}`
    useEffect(() => {
        const config = {
            name: studentName,
            meetingId: id,
            apiKey: process.env.REACT_APP_VIDEOSDK_API,

            containerId: null,

            micEnabled: true,
            webcamEnabled: true,
            participantCanToggleSelfWebcam: true,
            participantCanToggleSelfMic: true,

            chatEnabled: true,
            screenShareEnabled: true,

            /*
      
           Other Feature Properties
            
            */
        };

        const meeting = new VideoSDKMeeting();
        meeting.init(config);
    }, []);

    return <div></div>;
}