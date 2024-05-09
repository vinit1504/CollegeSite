import React, { useRef } from 'react'
import './Video.css'
import video from '../../assets/video.mp4'
const Video = ({ playstate, setplaystate }) => {

  const player = useRef(null)

  const closeplayer = (e) => {
    if (e.target === player.current) {
      setplaystate(false)
    }
  }
  return (
    <div className={`videoplayer ${playstate ? '' : 'hide'}`} ref={player} onClick={closeplayer}>
      <video src={video} autoPlay muted controls></video>

    </div>
  )
}

export default Video
