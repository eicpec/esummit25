import React, { useState, useEffect } from "react";
import ParallaxScrollSecond from "../components/ui/parallax-scroll-2";

export function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = await Promise.all(
        Array.from({ length: 30 }, (_, i) =>
          
          import(/* @vite-ignore */ `/ImageGallery/${i + 1}.jpg`).then((img) => img.default)
        )
      );
      setImages(importedImages);
    };

    loadImages();
  }, []);

  return <ParallaxScrollSecond images={images} />;
}

// Method 2 is static import ie 30 import statements, 30 elements in array