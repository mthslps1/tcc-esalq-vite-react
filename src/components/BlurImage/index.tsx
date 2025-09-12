import React, { useState } from "react";

interface BlurImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt = "",
  width = 800,
  height = 500,
  className = "",
}) => {
  // Generate a low-res version of the image
  const lowResSrc = `${src}&w=32&q=10`;

  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <img
        src={lowResSrc}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 w-64 h-40 object-cover rounded-lg object-cover blur-lg scale-105 transition-opacity duration-500"
        style={{ opacity: loaded ? 0 : 1 }}
        draggable={false}
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="absolute inset-0 w-64 h-40  object-cover transition-opacity duration-500"
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};
