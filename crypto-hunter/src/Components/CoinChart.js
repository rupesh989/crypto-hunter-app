import React, { useState, useEffect } from "react";
import axios from "axios";
import { Baseurl } from "./baseUrl";
import { useParams } from "react-router-dom";
const CoinChart = () => {
  const [chartData, SetChartData] = useState([]);
  const { id } = useParams();
  const CoinChartData = async () => {
    try {
      const { data } = await axios.get(
        `${Baseurl}/coins/${id}/market_chart?vs_currency=inr&days=365`
      );
      SetChartData(data.prices);
      console.log(data.prices);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    CoinChartData();
  }, []);
  return <div>CoinChart</div>;
};

export default CoinChart;

