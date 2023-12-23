const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulate an async operation
      setTimeout(() => {
        const data = "Some fetched data";
        if (data) {
          resolve(data); // Operation succeeded
        } else {
          reject("Error: Data not found"); // Operation failed
        }
      }, 3000);//after 3 sec
    });
  };
  
  fetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  