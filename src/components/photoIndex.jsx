import React from "react";

import PhotoTile from "./photoTile";


export default function PhotoIndex({ photos }) {
  let photoList = photos.map((photo) => <PhotoTile key={photo.id} photo={photo} />)

  return (
    <>
      <div className="photos">
        {photoList}
      </div>
    </>
  );
}