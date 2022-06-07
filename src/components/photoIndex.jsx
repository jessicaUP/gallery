import React, { useState } from "react";
import { createClient } from 'pexels';

import PhotoTile from "./photoTile";


export default function PhotoIndex({ photos }) {
  const photoList = photos.map((photo) => <PhotoTile key={photo.id} photo={photo} />)

  return (
    <>
      <div className="photos">
        {photoList}
      </div>
    </>
  );
}