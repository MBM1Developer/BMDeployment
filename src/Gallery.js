import React from "react";
import Imgix from "react-imgix";

const images = Array.from({ length: 1054 }, (_, i) => i.toString());
console.log(images);


const buildURL = imagePath =>
  `https://nftstorage.link/ipfs/bafybeiav5srpxojpcqummxxeuf3riumqoubvjxvxz67iii6aly5exiwcpy/${imagePath}.png`;

  const Gallery = () => (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((imagePath, index) => (
          <div className="image-container" key={index}>
            <Imgix
              sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={buildURL(imagePath)}
              imgixParams={{
                fit: "crop",
                fm: "jpg"
              }}
              width="600"
              height="600"
              alt={`Image ${index + 1}`} // Provide unique alt text for each image
              className="gallery-img"
            />
            <span className="image-name">Token {imagePath}</span>
          </div>
        ))}
      </div>
    </div>
  );
  

export default Gallery;
