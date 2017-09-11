import React from 'react'

const VideoDetail = ({video}) => {
  if(!video) return <div>Loading...</div> // check to see if we have any data to display a vid detail for

  const videoId = video.id.videoId;

  const URL = `https://www.youtube.com/embed/${videoId}` //  es6 string interpolation (shoving a string inside another string by using backtics and a jquery esque call to a js variable)

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={URL}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
