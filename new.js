async function fetchAndDecode(url, description) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.blob();
    console.log("datsa==",data)
    return [data, description];
  }
  
  const coffee = fetchAndDecode("https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA", "Coffee");
  const tea = fetchAndDecode("https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA", "Tea");
  
  Promise.any([coffee, tea])
    .then(([blob, description]) => {
      const objectURL = URL.createObjectURL(blob);
      const image = document.createElement("img");
      image.src = objectURL;
      image.alt = description;
      document.body.appendChild(image);
    })
    .catch((e) => {
      console.error(e);
    });
  