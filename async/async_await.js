//async/await and a simple timeout
async function delayMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

// Using async/await
async function showMessage() {
  const message = await delayMessage("Hello after 2 seconds!", 2000);
  console.log(message);
}

showMessage();

// async/await and immediate resolution
async function immediateResolution(value) {
      return Promise.resolve(value);
    }
    
    // Using async/await
    async function printResult() {
      const result = await immediateResolution("Resolved immediately");
      console.log(result);
    }
    
    // Calling the async function
    printResult();

// async/await and immediate rejection
async function immediateRejection(reason) {
      return Promise.reject(reason);
    }
    
    // Using async/await
    async function handleError() {
      try {
        const result = await immediateRejection("Rejected immediately");
        console.log(result); // This line won't be reached
      } catch (error) {
        console.error("Error:", error);
      }
    }
    
    // Calling the async function
    handleError();