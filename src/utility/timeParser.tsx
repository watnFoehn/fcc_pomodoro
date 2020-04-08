const timeParser = (time: number) => {
    let minutes, seconds;
    minutes = time / 60;
    seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return {
        timeToDisplay: minutes + ":" + seconds,
        timeToCalculate: time
    }
  }

  export default timeParser;