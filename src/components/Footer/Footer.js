import * as React from "react"

// export default function Footer({children, ... restProps}) {
//     return <Container {...restProps}>{children}</Container>
// }

// Footer.Wrapper= function FooterWrapper({children, ... restProps}) {
//     return <Wrapper {...restProps}>{children} </Wrapper>
// }

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-container">
                <div className="row">
                    <div className="col">
                        <h4 className="footer-header">Wild Animals <sup>TM</sup></h4>
                        <ul className="list-unstyled">
                            <li className="small-footer-text"> © 2021 Teamgeek </li>
                        </ul>
                    </div>
                    {/* Column 1 */}
                    <div className="col">
                        <h4 className="footer-header">About Us</h4>
                        <ul className="list-unstyled">
                            <li>Locations </li>
                            <li>What we do </li>
                            <li>How we do it </li>
                            <li>Who we are </li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                        <h4 className="footer-header">Product</h4>
                        <ul className="list-unstyled">
                            <li>Prints </li>
                            <li>Lorem ipsum </li>
                            <li>This is dummy text </li>
                            <li>Hello </li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col">
                        <h4 className="footer-header">Contact us</h4>
                        <ul className="list-unstyled">
                            <li className="small-footer-text">work@teamgeek.io</li>
                            <li className="small-footer-text">+27 64 891 2008</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;