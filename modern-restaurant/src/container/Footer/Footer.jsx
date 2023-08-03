import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="app__footer section__padding" id="contact">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links">
          <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Biz bilen habarlaşyň</h1>
            <p className="p__opensans">
              Aşgabat ş. Atatürk köçesi Berkarar söwda merkezi 3nji gaty
            </p>
            <p className="p__opensans">+(99312) 46-84-44</p>
            <p className="p__opensans">+(993312) 46-88-44</p>
          </div>
          <div className="app__footer-links_logo">
            {/* <img src={images.gericht} alt="footer_logo" /> */}
            <h1>Soltan</h1>
            <p className="p__opensans">
              &quot;Özüňizi tapmagyň iň gowy usuly, başgalaryň hyzmatynda özüni
              ýitirmekdir.&quot;
            </p>
            <img
              src={images.spoon}
              className="spoon__img"
              style={{ marginTop: 15 }}
              alt=""
            />
            <div className="app__footer-links_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
          <div className="app__footer-links_work">
            <h1 className="app__footer-headtext">Iş sagatlary</h1>
            <p className="p__opensans">Duşenbe-Anna:</p>
            <p className="p__opensans">09:00 - 19:00 </p>
            <p className="p__opensans">Şenbe-Ýekşenbe:</p>
            <p className="p__opensans">09:00 am - 22:00 </p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2023 Soltan. Ähli hukuklar goralan.</p>
      </div>
    </div>
  );
};

export default Footer;
