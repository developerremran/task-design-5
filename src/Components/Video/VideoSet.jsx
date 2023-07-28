import YouTube from 'react-youtube';

const VideoSet = () => {
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    
      const opts = {
        height: '390',
        width: '800',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
      return <YouTube videoId="kFII05-bhGU" opts={opts} onReady={_onReady} />;
};


export default VideoSet;