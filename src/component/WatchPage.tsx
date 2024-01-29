import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/slice/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const id = searchParam.get("v");
    console.log("-", searchParam.get("v"))
    useEffect(() => {
        dispatch(closeMenu())
    }, []);

    return (
        <div>
            <iframe
              width="1260"
              height="515"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>

              </iframe>
        </div>
    )
}

export default WatchPage;