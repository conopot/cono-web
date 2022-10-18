import Youtube from "react-youtube";

const VIDEO_ID = "F7t0RSRKyP4";

const opts = {
  height: "480",
  width: "720",
  playerVars: {
    autoplay: true,
  },
};

const YoutubePlayer = () => {
  return <Youtube videoId={VIDEO_ID} opts={opts} />;
};

export default YoutubePlayer;
