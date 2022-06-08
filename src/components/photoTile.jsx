import React, { useState } from "react";


export default function PhotoTile({ photo }) {

  // const onPhoto = (e) => {
  //   const img = document.querySelector(`#img-${photo.id}`)
  //   img.src = photo.src.original;
  // }

  // const offPhoto = (e) => {
  //   const img = document.querySelector(`#img-${photo.id}`)
  //   img.src = photo.src.portrait;
  // }

  const linkArtist = (e) => {
    e.stopPropagation();
    window.open(
      photo.photographer_url, '_blank'
    )
  }


  return (
    <>
      <div className="tile" key={photo.id} >
        <div className="button" onClick={linkArtist} style={{ backgroundColor: photo.avg_color }} >
          <h3 >{photo.photographer}</h3>
        </div>
        <img className='img' id={`img-${photo.id}`} src={photo.src.portrait} alt={photo.alt} style={{ backgroundColor: photo.avg_color }}  />
      </div> 
    </>
  );
}