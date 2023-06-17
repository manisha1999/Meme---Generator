import React, { useState, createRef, useParams } from 'react'
import Draggable from 'react-draggable'
import './component.css'
import { SketchPicker } from 'react-color';
import { exportComponentAsJPEG } from 'react-component-export-image'


import { Image } from 'cloudinary-react'
const host = 'http:/localhost:3001'

function EditImage(props) {
  const { closePopup } = props;
  const [toptext, settoptext] = useState("")
  const [bottomtext, setbottomtext] = useState("")
  const [color, setColor] = useState('#000');
  const [img, setImg] = useState("");
  const memeRef = createRef()


  return (

    <div className='popup-container'>

      <div className='home' style={{ maxWidth: " 600px" }}>
        <label style={{ color: "red" }}><h2>Add Top Text
          <input type="text" style={{ marginLeft: "140px", width: "300px" }} onChange={(e) => settoptext(e.target.value)}></input></h2></label>

        <label style={{ color: "red", marginLeft: "10px" }}><h2 >Add Bottom text
          <input type="text" style={{ marginLeft: "100px", width: "300px", marginRight: "10px" }} onChange={(e) => setbottomtext(e.target.value)}></input></h2></label>

        <div className='display image'>
          <div ref={memeRef} className='meme' >
            <div key={props.index} className="image" >
              <Draggable><div> <h2 style={{ color }}>{toptext}</h2></div></Draggable>
              <div className='memeimage'>
                <Image
                  key={props.index}
                  cloudName="donfky48j"
                  publicId={props.imgurl}
                  width="200"
                  height="200"
                />
              </div>
              <Draggable><div> <h2 style={{ color }}>{bottomtext}</h2></div></Draggable>


              <h1></h1>
            </div>
          </div>
          <SketchPicker color={color} onChange={(color) => { setColor(color.hex) }} />
          <div className='e-button'>  <button variant="success" onClick={(e) => { exportComponentAsJPEG(memeRef) }}>Download</button>
            <button onClick={closePopup}>close</button></div>
        </div>
      </div>

    </div>

  )
}

export default EditImage