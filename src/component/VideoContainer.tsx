import { useEffect } from "react";
import { YOU_TUBE_API } from "../constant";

const VideoContainer = () => {

  const fetchVideos = async () => {
    const response = await fetch(YOU_TUBE_API);
    const data = await response.json();
  }
  useEffect(() => {
    fetchVideos()
  }, []);
  return <div>
    VideoContainer
  </div>  
}

export default VideoContainer;