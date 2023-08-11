import { LoginForm } from "../LoginForm";
import { FaPhoneAlt } from 'react-icons/fa';
import {FaEnvelopeOpen} from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";


function Contact() {
    return(
        <footer>
            <section className="FooterClass">
                <i>Get Latest Updates</i>
                <h1 className="NewsletterHeader">Subscribe For Newsletter</h1>
                    <LoginForm/>
                <div className="Tel">
                   <span className="Call"><FaPhoneAlt className="Phone"/> 0123456789</span> 

                   <span className="Mail"><FaEnvelopeOpen className="Envelope"/> theophilusfrimpong17@gmail.com</span>
                   <FaFacebook className="Facebook"/>
                   <FaLinkedin className="LinkedIn"/>
                   <FaGlobe className="Globe"/>
                </div>
                 
                <div className="End">
                <div className="LastLine"></div>
                </div>

            </section>
        </footer>
    )
}

export default Contact;