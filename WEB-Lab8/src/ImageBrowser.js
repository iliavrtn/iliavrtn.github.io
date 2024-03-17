// ImageBrowser.js
import React, { useState } from "react";
import "./imageBrowser.css"; // Assuming you'll create this CSS file based on the styles you provided

const ImageBrowser = () => {
  // Initialize images array
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    url: `https://picsum.photos/id/${i + 1}/350/350`,
    thumbnailUrl: `https://picsum.photos/id/${i + 1}/50/50`,
  }));

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(images[0].url);

  // Function to change selected image
  const selectImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="image-container">
      <div className="thumbnails">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.thumbnailUrl}
            alt="Thumbnail"
            onClick={() => selectImage(image.url)}
            className="thumbnail"
          />
        ))}
      </div>
      <div className="main-image">
        <img
          src={selectedImage}
          alt="Selected"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  );
};

export default ImageBrowser;
