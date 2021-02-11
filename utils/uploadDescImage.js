const uploadDescImage = async file => {
  const imageArray = [file];
  const formData = new FormData();
  imageArray.map(image => {
    formData.append('file', image);
  });
  var link;
  await fetch('/api/uploadImage', { method: 'POST', body: formData })
    .then(response => response.json())
    .then(data => {
      link = data[0].location;
    });
  return await {
    success: 1,
    file: { url: link }
  };
};

module.exports = { uploadDescImage };
