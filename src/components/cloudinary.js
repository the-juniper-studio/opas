import PropTypes from "prop-types"
import React from "react"

const cloudinary = ({ url }) => {
  const splitString = url.split("upload");
  return (
    <picture>
      <source
        srcSet={`
          ${splitString[0]}upload/q_100,w_150${splitString[1].replace("jpg", "webp")} 150w,
          ${splitString[0]}upload/q_100,w_200${splitString[1].replace("jpg", "webp")} 200w,
          ${splitString[0]}upload/q_100,w_400${splitString[1].replace("jpg", "webp")} 400w,
          ${splitString[0]}upload/q_100,w_800${splitString[1].replace("jpg", "webp")} 800w `}
        sizes="(min-width: 1200px) calc(18vw - 30px), (min-width: 992px) calc(25vw - 30px), calc(50vw - 30px)"
        type="image/webp"
      />
      <source
        srcSet={`
          ${splitString[0]}upload/q_100,w_150${splitString[1]} 150w,
          ${splitString[0]}upload/q_100,w_200${splitString[1]} 200w,
          ${splitString[0]}upload/q_100,w_400${splitString[1]} 400w,
          ${splitString[0]}upload/q_100,w_800${splitString[1]} 800w `}
        sizes="(min-width: 1200px) calc(18vw - 30px), (min-width: 992px) calc(25vw - 30px), calc(50vw - 30px)"
        type="image/jpeg"
      />
      <img
        srcSet={`
          ${splitString[0]}upload/q_100,w_150${splitString[1]} 150w,
          ${splitString[0]}upload/q_100,w_200${splitString[1]} 200w,
          ${splitString[0]}upload/q_100,w_400${splitString[1]} 400w,
          ${splitString[0]}upload/q_100,w_800${splitString[1]} 800w `}
        src={`${splitString[0]}upload/q_100,w_400${splitString[1]}`}
        sizes="(min-width: 1200px) calc(18vw - 30px), (min-width: 992px) calc(25vw - 30px), calc(50vw - 30px)"
        alt=""
        loading="lazy"
        intrinsicsize="800 x 509"
        className='img-responsive'
      />
    </picture>
  )
}

cloudinary.propTypes = {
  url: PropTypes.string.isRequired,
}


export default cloudinary
