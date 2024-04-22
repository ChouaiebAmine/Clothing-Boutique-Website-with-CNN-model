import React from "react";
import './footer.css'

const Footer = () =>{
    return(
        <footer className="footer bg-dark text-white">
            <div className="container py-3">
                <p className="mb-0">&copy; {new Date().getFullYear} Fashion Website . All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;