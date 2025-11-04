export function percentOf(num, percent) {
    return (num * percent) / 100;
  }
  
  export function addPercent(num, percent) {
    return num + percentOf(num, percent);
  }