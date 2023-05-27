import axios from "axios";
import React, { useState, useEffect } from "react";
import RateValue2 from "../sub components/RateValue2";

const SplineChart = () => {

    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    const filtered = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        const apiFetch = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }

            let reqOptions = {
                url: "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false",
                method: "GET",
                headers: headersList,
            }

            let response = await axios.request(reqOptions)
                .then(res => {
                    setCoins(res.data)
                    console.log(res.data);
                })
                .catch(function (error) {
                    console.error(error);
                })
        }
        apiFetch()

    }, [])

    const handleChange =(e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <div>
            <div className="coin-search">
                <form>
                    <input type="text" placeholder="Search" onSubmit={handleChange} onChange={handleChange} />
                </form>
            </div>
            {
                filtered.map(coin => {
                    return (
                        <RateValue2 key={coin.id} name={coin.main} image={coin.image} symbol={coin.symbol} volume={coin.market_cap} price={coin.current_price} priceChange={coin.price_change_percentage_24h}  />
                    )
                })
            }
        </div>
    )
}

export default SplineChart

