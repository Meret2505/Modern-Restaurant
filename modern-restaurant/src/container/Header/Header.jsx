import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Täze tagamlaryň yzynda" />
        <h1 className="app__header-h1">Süýji tagamlaryň açary</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Hakykatdanam ýatdan çykmajak nahar iýmek tejribesini gözleýärsiňizmi?
          Soňra Soltandan başga zat gözleme. Bu ýokary derejeli restoran,
          naharlanmak we kanagatlanmak duýgusyny galdyrjak ýokary nahar
          tejribesini hödürleýär.
        </p>
        <button type="button" className="custom__button">
          Giňişleýin gör
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="" />
      </div>
    </div>
  );
};

export default Header;
