import React, { Fragment } from "react";
import "../Footer/Footer.css";
import instagram from "./img/instagram.svg";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <div className="mainFtr ">
        <div className="coMainFtr">
          <div className="bireki ">
            <h5>Покупателям</h5>
            <Link to="/order"></Link>
            <Link to="/cart">
              <a href="#">Оплата</a>
            </Link>
            <a href="#">Возврат товара</a>
            <a href="#">Личный кабинет</a>
          </div>
          <div className="bireki ">
            <h5>Информация</h5>
            <a href="#">О нас</a>
            <a href="#">FAQ</a>
            <a href="#">Блог</a>
            <a href="#">Контакты</a>
            <a href="#">Обратная связь</a>
          </div>
          <div className="">
            <h5>Мы на связи</h5>
            <span className="number">+996 222 53-53-84</span>
            <span className="number">+996 220 73-77-99</span>
            <a target="blank" href="https://www.instagram.com/rasha_._029/">
              <img style={{ width: 35, height: 35 }} src={instagram} />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default React.memo(Footer);
