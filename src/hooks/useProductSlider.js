import { useState, useMemo } from "react";

export const useProductSlider = (slideVal, slideItems) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = useMemo(() => slideIndex * slideVal, [slideVal, slideIndex]);

  const moveLeft = (e) => {
    setSlideIndex(slideIndex - 1);
  };

  const moveRight = (e) => {
    setSlideIndex(slideIndex + 1);
  };

  return [slide, { moveLeft, moveRight }];
};
