import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ProductCard from "../ProductCard"

import ArrowLeft from "../../../assets/icons/arrow-left.svg"
import ArrowRight from "../../../assets/icons/arrow-right.svg"

import {
  SliderContainer,
  SliderItem,
  SliderButton,
  BtnContainerLeft,
  BtnContainerRight,
} from "./styles"

export default function ProductCarousel({ products }) {
  const SliderEl = useRef()

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
    draggable: false,
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
      <BtnContainerLeft>
        <SliderButton onClick={slidePrev}>
          <ArrowLeft />
        </SliderButton>
      </BtnContainerLeft>
      <Slider {...settings} ref={SliderEl}>
        {products.map(({ frontmatter, id }) => (
          <SliderItem>
            <ProductCard product={frontmatter} />
          </SliderItem>
        ))}
      </Slider>
      <BtnContainerRight>
        <SliderButton onClick={slideNext}>
          <ArrowRight />
        </SliderButton>
      </BtnContainerRight>
    </SliderContainer>
  )
}
