import React from 'react'
import axios from "axios";



const SplineChart = () => {
    const apiFetch = async () => {
        const options = {
            method: 'GET',
            url: 'https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest',
            // the limit should correspond with the amount of points needed to set graph as defined in the data file
            params: { period_id: '1DAY', limit: '30' },
            headers: { 'X-CoinAPI-Key': '67CE7602-E47C-4E5B-AADF-AED1FD516B77', Accept: '*/*' }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }

    return (
        <div>SplineChart</div>
    )
}

export default SplineChart