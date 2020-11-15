import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ProductCard from "../ProductCard"

import { SliderContainer, SliderItem } from "./styles"

export default function ProductCarousel({ products }) {
  const SliderEl = useRef();

  const slidePrev = () => {
    SliderEl.current.slickPrev()
  }

  const slideNext = () => {
    SliderEl.current.slickNext()
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <SliderContainer>
      <Slider {...settings} ref={SliderEl}>
        {products.map(({ frontmatter, id }) => (
          <SliderItem>
            <ProductCard product={frontmatter} />
          </SliderItem>
        ))}
      </Slider>
      <button onClick={slidePrev}>left</button>
      <button onClick={slideNext}>right</button>
    </SliderContainer>
  )
}
