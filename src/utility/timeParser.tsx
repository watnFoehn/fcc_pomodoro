const timeParser = (time: number) => {
    let minutes, seconds;
    minutes = time / 60;
    seconds = time % 60;
    minutes = minutes < 10 ? "0" + Math.floor(minutes) : Math.floor(minutes);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  }

  export default timeParser;