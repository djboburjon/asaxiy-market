import React from "react";
import "./Home.css";
import Card from "../../components/card/Card";

function Home({ data }) {
  return (
    <div className="main">
      <div className="head container">
        <div className="head_left">
          <img src="./image/ad.png" alt="" />
        </div>
        <div className="head_right">
          <div className="head_right-top">
            <h1>Товары недели</h1>
            <div className="prev-next">
              <img src="./image/prev-weekly.png.png" alt="" />
              <img src="./image/next-weekly.png.png" alt="" />
            </div>
          </div>
          <div className="head_right-cards">
            <div className="card">
              <img src="./image/mi.png" alt="" />
              <h2>ТВ приставка Xiaomi Mi Box 4K 2nd GEN HDR…</h2>
              <div className="orig_price">
                <span className="line-price">720000</span>
                <span className="orig_price-sale">8%</span>
              </div>
              <div className="price">
                <span className="price_num">679000</span>
                <span className="price_rate">
                  <img src="./image/star.png" alt="" />5
                </span>
              </div>
              <button className="right_card-button">23.12.2023</button>
            </div>
            <div className="card">
              <img src="./image/washing.png" alt="" />
              <h2>Стиральная машина LG F2V3GS6W 8.5 Кг Stea…</h2>
              <div className="orig_price">
                <span className="line-price">6000000</span>
                <span className="orig_price-sale">9%</span>
              </div>
              <div className="price">
                <span className="price_num">5599000</span>
                <span className="price_rate">
                  <img src="./image/star.png" alt="" />5
                </span>
              </div>
              <button className="right_card-button">24.12.2023</button>
            </div>
            <div className="card">
              <img src="./image/headphones.png" alt="" />
              <h2>Беспроводные наушники JBL Tune 510BT Black</h2>
              <div className="orig_price">
                <span className="line-price">720000</span>
                <span className="orig_price-sale">8%</span>
              </div>
              <div className="price">
                <span className="price_num">679000</span>
                <span className="price_rate">
                  <img src="./image/star.png" alt="" />5
                </span>
              </div>
              <button className="right_card-button">23.12.2023</button>
            </div>
          </div>
        </div>
      </div>
      <Card data={data} />
    </div>
  );
}

export default Home;
