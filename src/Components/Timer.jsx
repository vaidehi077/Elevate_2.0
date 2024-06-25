import React,{useEffect, useState} from 'react'
import '../assets/css/timer.css'

const Timer = ({duration}) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
      setTimeout(()=>{
        setTime(time-1000)
      },1000)
    }, [time])

const getFormatedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds/1000));
    let total_min = parseInt(Math.floor(total_seconds/60));
    let total_hours = parseInt(Math.floor(total_min/60));
    let total_days = parseInt(Math.floor(total_hours/24));

    let second = parseInt(total_seconds % 60);
    let minutes = parseInt(total_min % 60);
    let hours = parseInt(total_hours % 24);

    return `Time To go => ${total_days}Days : ${hours}Hours : ${minutes}Minutes : ${second}Seconds`

}
    
  return (
    <div id='timer' style={{transform:'translateX(50%)'}}><div style={{transform:'translateX(-15%)'}}>{getFormatedTime(time)}</div></div>
  )
}

export default Timer