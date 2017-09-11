import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem
      onVideoSelect={props.onVideoSelect} //passing props down from App
      key={video.etag}
      video={video} /> //  always add unique keys to list items, especially with React
  })

  return(
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList
