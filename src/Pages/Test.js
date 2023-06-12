import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const Test = () => {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch all images from the server
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/uploads');
        setImages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:4000/uploads', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Image uploaded successfully!');
      setFile(null);
      // Fetch all images again to update the list
      const imagesResponse = await axios.get('http://localhost:4000/uploads');
      setImages(imagesResponse.data);
    } catch (error) {
      console.error(error);
      alert('Error uploading image.');
    }
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ width: 200, height: 200, border: '1px solid black' }}>
            <input {...getInputProps()} />
            {file ? (
              <img src={URL.createObjectURL(file)} alt="Uploaded" style={{ width: '100%', height: '100%' }} />
            ) : (
              'Drag and drop an image here.'
            )}
          </div>
        )}
      </Dropzone>
      {file && <button onClick={handleUpload}>Upload</button>}
      <h2>Uploaded Images</h2>
      <div style={{ display: 'flex' }}>
        {images.map((image) => (
          <div key={image._id} style={{ margin: 10 }}>
            <img src={image.imageUrl} alt="Uploaded" style={{ width: 200, height: 200 }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
