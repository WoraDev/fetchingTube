import React from 'react'

const Videos = ({ videos }) => {
    return (
        <div>
            <ul>
                {videos.map((video, index) => (
                    <li key={index}></li>
                ))}
            </ul>
        </div>
    )
}

export default Videos