import { Box } from "@mui/joy";
import React from "react";

import Slider from "react-slick";

const settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  speed: 500,
};
const data = [
  {
    img: "./images/card.png",
  },
  {
    img: "./images/card.png",
  },
  {
    img: "./images/card.png",
  },
  {
    img: "./images/card.png",
  },
  {
    img: "./images/card.png",
  },
  {
    img: "./images/card.png",
  },
  {
    img: "./images/card.png",
  },
  {
    img: "./images/card.png",
  },
  {
    img: "./images/card.png",
  },
  {
    img: "./images/card.png",
  },
];

const SliderComp = () => {
  return (
    <>
      <Box
        sx={{
          width: "1443px",
          height: "612px",
          marginLeft: "210px",
          marginTop: "60px",
        }}
      >
        <Slider {...settings}>
          {data.map((e) => (
            <div style={{ display: "inline-flex" }}>
              <div style={{ display: "inline-flex" }}>
                {" "}
                <img src={e.img} alt="..." />
              </div>
            </div>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default SliderComp;
