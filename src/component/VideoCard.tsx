import style from "./VideoCard.module.scss";

const VideoCard = ({info}: any) => {
    const { snippet, statistics} = info;
    const { thumbnails, channelTitle, title } = snippet;
    return (<div className={style.card}>
        <img src={thumbnails.medium.url} alt="img" />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>)
}

export default VideoCard;
