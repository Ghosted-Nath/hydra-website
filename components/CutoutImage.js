"use client";

import { useEffect, useState } from "react";

function backgroundFromEdges(imageData, width, height) {
  const data = imageData.data;
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  const sample = (x, y) => {
    const index = (y * width + x) * 4;
    const alpha = data[index + 3];
    if (alpha < 10) return;
    r += data[index];
    g += data[index + 1];
    b += data[index + 2];
    count += 1;
  };

  const step = Math.max(4, Math.floor(Math.min(width, height) / 40));
  for (let x = 0; x < width; x += step) {
    sample(x, 0);
    sample(x, height - 1);
  }
  for (let y = 0; y < height; y += step) {
    sample(0, y);
    sample(width - 1, y);
  }

  if (!count) return { r: 235, g: 235, b: 235 };
  return { r: r / count, g: g / count, b: b / count };
}

export default function CutoutImage({ src, alt, className = "" }) {
  const [processedSrc, setProcessedSrc] = useState(src);

  useEffect(() => {
    let cancelled = false;
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = src;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d", { willReadFrequently: true });
      context.drawImage(image, 0, 0);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const background = backgroundFromEdges(imageData, canvas.width, canvas.height);
      const pixels = imageData.data;

      for (let index = 0; index < pixels.length; index += 4) {
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        if (alpha === 0) continue;

        const distance = Math.sqrt(
          (red - background.r) ** 2 +
          (green - background.g) ** 2 +
          (blue - background.b) ** 2
        );

        const maxChannel = Math.max(red, green, blue);
        const minChannel = Math.min(red, green, blue);
        const saturation = maxChannel - minChannel;
        const brightness = (red + green + blue) / 3;

        if (distance < 52 || (brightness > 200 && saturation < 26)) {
          pixels[index + 3] = Math.max(0, Math.floor((distance / 52) * 255) - 18);
        }
      }

      context.putImageData(imageData, 0, 0);
      if (!cancelled) setProcessedSrc(canvas.toDataURL("image/png"));
    };

    image.onerror = () => {
      if (!cancelled) setProcessedSrc(src);
    };

    return () => {
      cancelled = true;
    };
  }, [src]);

  return <img src={processedSrc} alt={alt} className={className} />;
}
