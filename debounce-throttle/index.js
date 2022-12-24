input = document.querySelector("#input");
output = document.querySelector("#output");
debounceOutput = document.querySelector("#debounce-output");
throttleOutput = document.querySelector("#throttle-output");

input.addEventListener("input", (e) => {
  normalOutput(e.target.value);
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

function normalOutput(value) {
  output.innerText = value;
}

function debounce(cb, delay = 500) {
  let debounceTimeout;
  return (...args) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, delay = 500) {
  let shouldWait = false;
  let waitingArgs = null;
  timeoutFunction = () => {
    if (waitingArgs) {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunction, delay);
    } else {
      shouldWait = false;
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunction, delay);
  };
}

const updateDebounceText = debounce((value) => {
  debounceOutput.innerText = value;
}, 1000);

const updateThrottleText = throttle((value) => {
  throttleOutput.innerText = value;
});

// Usecase for throttle
const updateThrouttleCount = throttle(() => {
  count++;
  console.log(count);
}, 100);

let count = 0;

document.addEventListener("mousemove", () => {
  updateThrouttleCount();
});
