//Promise with a simple timeout
function delayMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Using the Promise
delayMessage("Hello after 2 seconds!", 2000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//  Promise with immediate resolution
function immediateResolution(value) {
      return Promise.resolve(value);
    }
    
    // Using the Promise
    immediateResolution("Resolved immediately")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

// Promise with immediate rejection
function immediateRejection(reason) {
      return Promise.reject(reason);
    }
    
    // Using the Promise
    immediateRejection("Rejected immediately")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });