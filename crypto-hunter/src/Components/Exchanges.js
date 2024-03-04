import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Baseurl } from "./baseUrl";
import Loader from "./Loader";
// import Coin from "./coin.png";
import './Exchanges.css'
const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchange, setExchange] = useState([]);
  // const url = "https://api.coingecko.com/api/v3/exchanges";
  useEffect(() => {
    const getExchangesData = async () => {
      const { data } = await axios.get(`${Baseurl}/exchanges`);
      console.log(data);
      // console.log(exchange);
      setExchange(data);
      setLoading(false);
    };
    getExchangesData();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div>
            {
              exchange.map((item, i) => {
                return (
                  <div key={i} className="ex-cards">
                    <div className="image">
                      <img height={"80px"} src={item.image} alt="" />

                    </div>
                    <div className="name"> {item.name}</div>
                    <div className="price">{item.trade_volume_24h_btc.toFixed(0)}</div>
                    <div className="rank">{item.trust_score_rank}</div>
                  </div>
                )
              })
            }


          </div>
        </>
      )}
    </>
  );
};

export default Exchanges;
