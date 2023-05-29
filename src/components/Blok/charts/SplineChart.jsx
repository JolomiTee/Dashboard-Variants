import React from 'react'
import axios from "axios";



const SplineChart = () => {
    const apiFetch = async () => {
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "X-CoinAPI-Key": "67CE7602-E47C-4E5B-AADF-AED1FD516B77"
        }

        let reqOptions = {
            url: "https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_USDT_USD/latest?period_id=30MIN",
            method: "GET",
            headers: headersList,
        }

        let response = await axios.request(reqOptions);
        console.log(response.data);

    }

    return (
        <div>SplineChart</div>
    )
}

export default SplineChart