import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Banner = () => {
    const data = useStaticQuery(graphql`
        query {
            bastien: file(relativePath: { eq: "bastien-nvs-9pe2UPqAfo8-unsplash.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            jackdong: file(relativePath: { eq: "jack-dong-3_DJ9_6bZVU-unsplash.jpg"}){
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            jackdong2: file(relativePath: { eq: "jack-dong-fFP8bPq_Mew-unsplash.jpg"}){
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            moritz: file(relativePath: { eq: "moritz-mentges-WpCgNwpJsVY-unsplash.jpg"}){
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            
        }
    `)


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
            </div>
        </div>
    )
}

export default Banner