import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";
const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Aşpezin sözi" />
        <h1 className="headtext__cormorant">Biz nämä ynanýarys</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="" />
            <p className="p__opensans">
              Biziň bişirýän süýji tagamlarymyz biziň müşderilermiziň göwnünden
              turmasy biziň esasy maksadymyzdyr
            </p>
          </div>
          <p className="p__opensans">
            Işiň talap edilip bilinjekdigini bilýärin, ýöne goşmaça ýoly geçmäge
            taýýardygyňyza ýokary baha berýärin. Müşderini elmydama birinji
            ýerde goýýarsyňyz, bu bolsa olaryň iýmitimizi gowy gorýänligini
            görkezýär. Şeýle zehinli we yhlasly topara eýe bolanym üçin özümi
            bagtly saýýaryn. Eden ähli işleriňiz üçin sag boluň.
          </p>
        </div>
        <div className="app__chef-sign">
          <p> Kevin Luo</p>
          <p className="p__opensans"> Baş aşpez</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
