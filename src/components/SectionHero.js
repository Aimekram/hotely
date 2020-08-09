import React from 'react'

import SearchBox from "./SearchBox"

const Hero = ({ title, subheading, image}) => (
    <section style={{
        backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundPosition: `top left`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
        <div className="">
            <h1 className="" >{title}</h1>
            <h3 className="">{subheading} </h3>
        </div>
        <SearchBox />
        <div>Flying texts</div>
    </section>
)

export default Hero