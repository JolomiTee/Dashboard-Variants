import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useBlokContext } from '../../../../context/BlokContext';

const ConversionRate = () => {
    const { selectedRecievableCoin } = useBlokContext();
    const [recievedRate, setRecievedRate] = useState();

    const { value, symbol } = selectedRecievableCoin;

    useEffect(() => {
        const fetchRate = async () => {
            try {
                let headersList = {
                    "Accept": "application/json",
                };
                const BASE_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${value}&vs_currencies=usd`;
                let reqOptions = {
                    url: BASE_URL,
                    method: "GET",
                    headers: headersList,
                };
                let response = await axios.request(reqOptions);
                setRecievedRate(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRate();
    }, [value]);

    let usd = 'N/A';
    if (recievedRate && recievedRate[value]) {
        usd = recievedRate[value].usd;
    }

    return (
        <span className='font-cabinet font-bold text-blok-grey mdl:absolute mdl:translate-y-[90px] lg:relative lg:translate-y-[0] xl:relative xl:translate-x-0'>
            {`1 ${symbol || 'Coin'} = $${usd.toLocaleString()}`}
        </span>
    );
};

export default ConversionRate;
