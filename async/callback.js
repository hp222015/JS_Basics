// Callback function

function greet(name, callback) {
      console.log("Hello, " + name + "!");
      callback();
    }
    
    function sayGoodbye() {
      console.log("Goodbye!");
    }
    
    // Using the callback function
    greet("John", sayGoodbye);

//asynchronous callback
function fetchData(callback) {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        callback(data);
      }, 2000);
    }
    
    function processData(data) {
      console.log(data.message);
    }
    
    // Using the asynchronous callback function
    fetchData(processData);