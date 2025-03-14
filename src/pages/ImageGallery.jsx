import React, { useState, useEffect } from "react";
import ParallaxScrollSecond from "../components/ui/parallax-scroll-2";

export function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Directly reference images from public directory
    const importedImages = Array.from({ length: 30 }, (_, i) =>
      `/ImageGallery/${i + 1}.jpg`
    );
    setImages(importedImages);
  }, []);

  return <ParallaxScrollSecond images={images} />;
}

export default ImageGallery;


