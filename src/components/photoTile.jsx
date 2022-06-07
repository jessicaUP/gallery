import React, { useState } from "react";


export default function PhotoTile({ photo }) {
  const [ clicked, setClicked ] = useState(false);

 

  // React.useEffect(() => {
  //   fetchPhotos();
  // }, [query, pageNum]);

  // const searchPhotos = (e) => {
  //   e.preventDefault();
  //   setQuery(typed);
  // }

  return (
    <>
      <div className="tile" key={photo.id}>
        <div className="img-hover">
          <h3 style={{ color: photo.avg_color }}>{photo.photographer}</h3>
        </div>
        <img src={photo.src.portrait} alt={photo.alt} style={{ backgroundColor: photo.avg_color }}  />
      </div> 
    </>
  );
}