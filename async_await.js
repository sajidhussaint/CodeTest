const fetchData = async () => {
    try {
      const data = await fetchDataAsync(); // Asynchronous operation
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchDataAsync = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Some fetched data";
        if (data) {
          resolve(data);
        } else {
          reject("Error: Data not found");
        }
      }, 3000);
    });
  };
  
  fetchData();
  