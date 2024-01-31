const failure = new Promise((resolve, reject) => {
    reject("Always fails");
  });
  
  Promise.any([failure]).catch((err) => {
    console.log(err);
  });

  