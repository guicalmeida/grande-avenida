"use client";

import Glider from "react-glider";
import "glider-js/glider.min.css";

export default function MainSlider() {
  return (
    <Glider className="h-[720px]" draggable hasArrows hasDots slidesToShow={2} slidesToScroll={1}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </Glider>
  );
}
