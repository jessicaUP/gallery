import React, { useState } from "react";
import { createClient } from 'pexels';

import PhotoTile from "./photoTile";


export default function PhotoIndex({ photos }) {
  let photoList = photos.map((photo) => <PhotoTile key={photo.id} photo={photo} />)

  if (photoList.length === 0) {
    photoList = <h2 className="no-img"> ^ Try another search</h2>
  }

  return (
    <>
      <div className="photos">
        {photoList}
      </div>
    </>
  );
}