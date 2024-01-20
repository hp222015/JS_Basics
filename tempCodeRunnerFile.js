async function fetchUserData() {
      try {
        const response = await new Promise((resolve, reject) => {
          // Simulate a server request (replace with a real server request)
          setTimeout(() => {
            const userData = { name: "Bob Johnson", age: 35 };
            resolve(userData);
          }, 2000);
        });
    
        console.log("Fetched user data:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
    // Call the async function:
    fetchUserData();