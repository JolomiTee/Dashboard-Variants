import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockDecrease from '../../../assets/Blok/images/arrow-down.svg';
import StockIncrease from '../../../assets/Blok/images/arrow-up.svg';

const RateValue = ({ crypto }) => {
  const [responseData, setResponseData] = useState([]);

  const apiFetch = async () => {
    let headersList = {
      "Accept": "*/*",
    };

    let reqOptions = {
      url: `https://api.coingecko.com/api/v3/coins/${crypto}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`,
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    setResponseData(response.data);
  };

  useEffect(() => {
    apiFetch();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      apiFetch();
    }, 120000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { market_data } = responseData;
  const priceChangePercentage = market_data?.price_change_percentage_24h;

  return (
    <div>
      <p
        className={`${priceChangePercentage > 0 ? 'text-blok-dark-green' : 'text-blok-red'} leading-[10px] flex items-center`}
      >
        <img src={priceChangePercentage > 0 ? StockIncrease : StockDecrease} alt="" />
        {priceChangePercentage?.toFixed(2) || 1.23}%
      </p>
    </div>
  );
};

export default RateValue;
