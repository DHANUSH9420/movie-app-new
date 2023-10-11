import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import './index.css'

const SocialMedia = () => (
  <div className="footer-container ">
    <ul className="icon-container-footer">
      <li type="button" className="footer-button ">
        <FaGoogle size={27} color="#ffff" />
      </li>
      <li type="button" className="footer-button ">
        <FaTwitter size={27} color="#ffff" />
      </li>
      <li type="button" className="footer-button ">
        <FaInstagram size={27} color="#ffff" />
      </li>
      <li type="button" className="footer-button ">
        <FaYoutube size={27} color="#ffff" />
      </li>
    </ul>
    <p className="footer-contact">Contact us</p>
  </div>
)
export default SocialMedia
