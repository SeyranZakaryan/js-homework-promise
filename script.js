class Clock {

  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  start() {

    setInterval(() => {

      this.seconds++;

      if (this.seconds === 60) {
        this.minutes++;
        this.seconds = "00";
      }

      if (this.minutes === 60) {
        this.hours++;
        this.minutes = "00";
      }

      if (this.hours === 24) {
        this.hours = "00";
      }

      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);

    }, 1000);
  }

//   setAlert(alertHours, alertMinutes, alertSeconds) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (this.hours === alertHours && this.minutes === alertMinutes && this.seconds === alertSeconds) {
//           resolve(alertHours, alertMinutes, alertSeconds)
//         }
//       }, 0);
//     })
//   }
}

let clock = new Clock(19, 49, 57);
clock.start();

//  clock.setAlert(19, 50, 00).then((result) => {
//    console.log(`${result} "Gorci gnalu jamn e"`);
//  })