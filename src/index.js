import _ from 'lodash';
import React, { Component } from 'react'; // works with components
import ReactDOM from 'react-dom' // used when needing to render something DOM
import YTSearch from 'youtube-api-search'

import SearchBar from './components/Search_Bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDk96fjRPzZ4Ugidy0kmF8Ub0drHSbiOyw';

//create a new class based component so it can use state to keep track of videos
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('chillhop')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
      videos: videos,
      selectedVideo: videos[0]
    })
      // resolves as this.setState ({ videos: videos }) --> sets key and value to same value
    })
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo} ) }
          videos={this.state.videos} />
      </div>
  )}
}

// take component's generated HTML and display on page
ReactDOM.render(<App />, document.querySelector('.container'));
