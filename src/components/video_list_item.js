import React from 'react'

const VideoListItem = ({video}) => { // variable 'video' that = just the video prop of the larger video object, which we'll be mapping through and running the functional component on
  const imageURL = video.snippet.thumbnails.default.url

  return (
  <li className='list-group-item'>
    <div className='video-list media'>
      <div className = 'media-left'>
        <img className='media-object' src={imageURL}/>
      </div>
      <div className='media-body'>
        <div className='media-heading'>{ video.snippet.title }</div>
      </div>
    </div>
  </li>
  )
}

export default VideoListItem
