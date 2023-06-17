import React, { useState, useEffect, useCallback } from 'react'
import './component.css'
import Navbar from './Navbar'
import { Image } from 'cloudinary-react'
import EditImage from './Editimage'


function Mymemes() {
  const [imageIds, setImageIds] = useState();
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const [deleted, setDeleted] = useState(false);



  const deleteImage = async (imageID) => {
    console.log(imageID);
    try {

      const response = await fetch("http://localhost:3001/delete", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicId: imageID
        })

      })
      if (response.ok) {
        // Image deleted successfully
        console.log('Image deleted');
        setDeleted(true);
      } else {
        // Handle error response
        console.error('Failed to delete image');
      }

    } catch (error) {
      // Handle fetch error
      console.error('Failed to delete image', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3001/getmeme');
      const data = await res.json();
      setImageIds(data);
    }
    catch (err) {
      console.error(err);
    }
  }

  const handleEditClick = (imageID) => {
    setSelectedImageId(imageID);
    setShowPopup(true);
  };


  if (deleted) {
    return null;
  }

  return (
    <div style={{ background: "#f2f2f2" }}>
      <Navbar />
      <h1 style={{ color: "#f57542", textAlign: "center" }}> My Images </h1>
      <div className="memes-container">
        {imageIds &&
          imageIds.map((imageID, index) => (
            <div key={index} className="memes-data">
              <Image
                key={index}
                cloudName="donfky48j"
                publicId={imageID}
                width="200"
                height="200"

              />
              <div className='edit-button'> <button onClick={() => handleEditClick(imageID)} data-toggle="modal">Edit</button>
                <button data-toggle="modal" onClick={() => deleteImage(imageID)}>delete</button>

              </div>
              {showPopup && selectedImageId === imageID && (<EditImage imgId={imageID} imgurl={`https://res.cloudinary.com/donfky48j/image/upload/v1/${imageID}`} index={index} closePopup={() => setShowPopup(false)} />)}

            </div>

          ))}
      </div>
    </div>
  )
}

export default Mymemes