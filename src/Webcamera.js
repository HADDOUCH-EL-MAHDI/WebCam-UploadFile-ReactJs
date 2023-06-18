import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


const Webcamera = () => {
  const webcamRef = useRef(null);
  const [capturedPhotos, setCapturedPhotos] = useState([]);//pour stoker tous les photos dans un Array (state)

  const handleCapture = () => {
    //opération d'addition des photos dans Array 
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedPhotos((prevPhotos) => [...prevPhotos, imageSrc]);
  };

  const handleUpload = () => {
    capturedPhotos.forEach((photo) => {
         //pour creer une format blob ,et le stocker dans une base de données
      const formData = new FormData();
      formData.append('file', dataURItoBlob(photo));
     

      
    });
  };
//fonction  qui convertit une représentation de données en URI(photo) en un objet Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className="webcamera-container">
      <div>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        <Grid
  item
  xs={12}
  md={12}
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Button
    sx={{
      backgroundColor: "blue",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    size="small"
    variant="contained"
    onClick={handleCapture}
  >
    Capturer
  </Button>
</Grid>
      </div>
      <div>
        {
        //display les images capturés
        capturedPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Captured Photo ${index}`} />
        ))}
      </div>
      <button onClick={handleUpload}>Upload Photos</button>
    </div>
  );
};

export default Webcamera;
