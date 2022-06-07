import React, { useState } from "react";

const usePhotos = (query, pageNum) => {

  const [ photos, setPhotos ] = React.useState([]);

  React.useEffect(() => {
    async function fetchPhotos() {
      const fullResponse = await fetch(`https://api.pexels.com/v1/search/?page=${pageNum}&per_page=10&query=${query}`);
      const responseJson = await fullResponse.json();

      console.log(fullResponse, responseJson);
      setPhotos(responseJson.photos);
    }

    fetchPhotos();
  }, []);

  return [ photos, setPhotos ];
}

export default usePhotos;

