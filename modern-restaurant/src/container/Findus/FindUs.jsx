import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Habarlaşmak" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Biziň salgymyz
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Aşgabat ş. Atatürk köçesi Berkarar söwda merkezi 3nji gaty
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#dcca87", margin: "2rem 0" }}
          >
            Işleýän sagatlarymyz
          </p>
          <p className="p__opensans">Duş - Anna 09:00 am - 19:00 am</p>
          <p className="p__opensans">Şen - Ýek 09:00 am - 22:00 am</p>
        </div>
        <button className="custom__button" style={{ marginTop: "2rem" }}>
          Bizi gör
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="" />
      </div>
    </div>
  );
};

export default FindUs;
