import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { clientContext } from "../contexts/ClientContext";
import { Button } from "@mui/material";
import Comment from "../components/Comments/Comment";
const DetailPage = () => {
  const { getDetails, productDetails } = useContext(clientContext);
  const params = useParams();
  useEffect(() => {
    getDetails(params.id);
  }, []);

  return (
    <div style={{ color: "white" }}>
      {productDetails ? (
        <>
          <div className="container">
            <div className="video">
              <iframe
                className="mt-5"
                src={productDetails.video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="detail-page">
            <div className="detail-image">
              <img src={productDetails.image} alt="phone" />
            </div>

            <div>
              <h2>{productDetails.name}</h2>
              <p>{productDetails.description}</p>
              <Button variant="contained" color="primary">
                Добавить в корзину
              </Button>
              <div>
                <h4>Описание:</h4>
                <ul className="character">
                  <li>
                    <strong>Цена:</strong>
                    <span>{productDetails.price}сом</span>
                  </li>
                  <li>
                    <strong>Категория:</strong>
                    <span>{productDetails.category}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Comment />
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailPage;
