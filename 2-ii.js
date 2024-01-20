function fetchUserData() {
      return new Promise((resolve, reject) => {
        // Simulate a server request (replace with a real server request)
        setTimeout(() => {
          const userData = { name: "Alice Smith", age: 25 };
          resolve(userData); // Resolve the promise with the fetched data
        }, 2000);
      });
    }
    
    // Using the promise:
    fetchUserData()
      .then((userData) => {
        console.log("Fetched user data:", userData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });