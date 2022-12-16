import './Footer.css'

const Footer = () => {
    return (  
        <div className="footer">
            <div className="footerContainer">
                <div className="footerText">
                    Copyright © {new Date().getFullYear()}
                    <span className="lo">Jewellery S</span>hop                
                </div>
            </div>
        </div>   
    ) 
}

export default Footer