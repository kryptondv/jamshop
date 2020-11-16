import React, { useRef } from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"

import ProductCard from "../ProductCard"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {
  SliderContainer,
  SliderItem,
  SliderButton,
  ArrowLeft,
  ArrowRight,
  BtnContainerLeft,
  BtnContainerRight,
} from "./styles"

export default function ProductCarousel({ products }) {
  const SliderEl = useRef(null)

  // slide handlers use react-slick methods available on Slider component
  const slidePrev = () => {
    SliderEl.current.slickPrev()
  }

  const slideNext = () => {
    SliderEl.current.slickNext()
  }

  // react-slick settings object
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
        {products.map(({ childMarkdownRemark: { frontmatter, id } }) => (
          <SliderItem key={id}>
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

ProductCarousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
}
