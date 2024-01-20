// Asynchronous Operation 
// using callback

function fetchUserData(callback) {
      // Simulate a server request (replace with a real server request in practice)
      setTimeout(() => {
        const userData = { name: "John Doe", age: 30 };
        callback(userData); // Call the callback with the fetched data
      }, 7000); // Delay of 2 seconds for demonstration
    }
    
    // Using the callback:
    fetchUserData((userData) => {
      
      console.log("Fetched user data:", userData);
    });
    
    
