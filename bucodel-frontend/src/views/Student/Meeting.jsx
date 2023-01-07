import React, { useState } from 'react'
import AgoraUIKit, { PropsInterface } from 'agora-react-uikit'

const Meeting = () => {
    const [videocall, setVideocall] = useState(true)
    const props: PropsInterface = {
        rtcProps: {
            appId: '6f7106470b124c94864c175d1d7eeeb6',
            channel: 'Test',
            token: "007eJxTYMjcY9ZkLZO9J5Drwi6Nt7ziKxSeHzukMucTb8B7W1WGOewKDGZp5oYGZibmBkmGRibJliYWZibJhuamKYYp5qmpqUlmZhzLkhsCGRkEd2kzMTJAIIjPwhCSWlzCwAAAd9Mb5g==", // pass in channel token if the app is in secure mode
        },
        callbacks: {
            EndCall: () => setVideocall(false)
        }
    }
    return (
        <div style={styles.container}>
            {videocall ? (
                <AgoraUIKit
                    rtcProps={props.rtcProps}
                    callbacks={props.callbacks} />
            ) : (
                null
            )}
        </div>
    )
}

const styles = {
    container: { width: '100vw', height: '100vh', display: 'flex', flex: 1 },
}

export default Meeting