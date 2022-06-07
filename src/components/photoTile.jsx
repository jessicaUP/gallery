import React, { useState } from "react";


export default function PhotoTile({ photo }) {
  const [ clicked, setClicked ] = useState(false);

  const clickPhoto = (e) => {
    e.preventDefault();
    console.log(e)
    if (clicked) {
      e.target.src = photo.src.portrait;
      setClicked(false);
    } else {
      e.target.src = photo.src.original;
      setClicked(true);
    }
  }


  return (
    <>
      <div className="tile" key={photo.id} onClick={clickPhoto}>
        <div className="img-hover">
          <h3 style={{ color: photo.avg_color }}>{photo.photographer}</h3>
        </div>
        <img className='img' src={photo.src.portrait} alt={photo.alt} style={{ backgroundColor: photo.avg_color }}  />
      </div> 
    </>
  );
}