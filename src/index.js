import React, { Component } from 'react'; // works with components
import ReactDOM from 'react-dom' // used when needing to render something DOM
import YTSearch from 'youtube-api-search'

import SearchBar from './components/Search_Bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyDk96fjRPzZ4Ugidy0kmF8Ub0drHSbiOyw';

//create a new class based component so it can use state to keep track of videos
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({ key: API_KEY, term: 'chillhop' }, (videos) => {
      this.setState({ videos })
      // resolves as this.setState ({ videos: videos }) --> sets key and value to same value
    })
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
  )}
}

// take component's generated HTML and display on page
ReactDOM.render(<App />, document.querySelector('.container'));
