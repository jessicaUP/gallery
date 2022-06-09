import React from "react";


export default function PhotoTile({ photo }) {

  // CREATE onClick event to link artist page

  const linkArtist = (e) => {
    e.stopPropagation();
    window.open(
      photo.photographer_url, '_blank'
    )
  }

  // CREATE onClick event for image display

  const modal = (action) => {
    return () => {
      const modalDiv = document.getElementById(`modal-${photo.id}`);
      if (action === 'open') {
        modalDiv.style.display = 'flex';
      } else {
        modalDiv.style.display = 'none';
      }
    }
  };


  return (
    <>
      <div className="tile" key={photo.id} >
        <div className="button" onClick={linkArtist} style={{ backgroundColor: photo.avg_color }} >
          <h3 >{photo.photographer}</h3>
        </div>
        <img className='img' id={`img-${photo.id}`} src={photo.src.portrait} onClick={modal('open')} alt={photo.alt} />
        <div className="modal" id={`modal-${photo.id}`}  >
          <img className='open-img' id={`img-${photo.id}`} src={photo.src.medium} onClick={modal('close')} alt={photo.alt} />
        </div>
      </div> 
    </>
  );
}