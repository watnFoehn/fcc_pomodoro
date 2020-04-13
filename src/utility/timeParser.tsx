const timeParser = (time: number) => {
    let minutes, seconds;
    minutes = time / 60;
    seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return Math.floor(minutes) + ":" + seconds.toString();
        
  }

  export default timeParser;