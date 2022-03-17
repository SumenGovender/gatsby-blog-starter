import * as React from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                {/* <img src={props.img} class="card-image" /> */}
                <StaticImage class="card-image" src={`../../content/blog/baboon/baboon.jpg`}></StaticImage>
                    <p className="card-date">{props.date}</p>
                    <p  className="card-heading">{props.heading}</p>
                    <p className="card-description">{props.description}</p>                
            </div>
        </div>
    )
}

export default Card