import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Banner = () => {

    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                        <StaticImage src="../images/binti-malu-FMNaianq0gg-unsplash.jpg" />
                    </div>
                    <div className="main-text">Live your passion</div>
                    <div className="main-image">
                        <StaticImage src="../images/bastien-nvs-9pe2UPqAfo8-unsplash.jpg" alt="Bastien Unsplash" />
                    </div>
                    <div className="side-image right">
                        <StaticImage src="../images/jack-dong-fFP8bPq_Mew-unsplash.jpg" />
                    </div>
                    <div className="other-image">
                        <StaticImage src="../images/moritz-mentges-WpCgNwpJsVY-unsplash.jpg" />
                    </div>
                </div>
                <div className="scroll">
                    Scroll down
                </div>
                <div className="fixed-misc">hernang.work@gmail.com</div>
            </div>
        </div>
    )
}

export default Banner