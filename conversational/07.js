/**
 * Question 1
 */

function debounce(func, time) {
  let timerId;
  return function () {
    if (timerId) {
      clearTimeout(timerId);
    } 
      timerId = setTimeout(() => {
        func.apply(this, arguments);
      }, time);
  };
}

const bouncedLog = debounce(console.log, 1000);

bouncedLog("hello?")
bouncedLog('Hello!!!!!!')
bouncedLog('HELLLLOOOOOOO!!!!!!')
