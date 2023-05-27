import { useState, useEffect } from 'react'
import axios from 'axios'
import StockDecrease from '../../../assets/Blok/images/arrow-down.svg'
import StockIncrease from '../../../assets/Blok/images/arrow-up.svg'
const RateValue = ({ crypto }) => {
    const [responseData, setResponseData] = useState([]);
    const [overviewPercentage, setOverviewPercentage] = useState(0.00)
    const [aggregate, setAggregate] = useState(0.0)

    const apiFetch = () => {
        const apiUrl = `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${crypto}_USD/latest`
        const options = {
            method: 'GET',
            url: apiUrl,
            params: { period_id: '10SEC', },
            headers: {
                Accept: 'application/json',
                'X-CoinAPI-Key': ''
            }
        };

        axios.request(options).then(function (response) {
            setResponseData(response.data)
        }).catch(function (error) {
            // console.error(error);
        });
    }


    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         apiFetch()
    //     }, 120000);

    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])



    // useEffect(() => {

    //     const calculateOverviewPercentage = (open, close) => {
    //         const initial = close - open;
    //         const percentageChange = (initial / open) * 100;
    //         return percentageChange.toFixed(3);
    //     }

    //     const calculatePercentageChanges = (responseData) => {
    //         const percentageChanges = [];

    //         for (let i = 0; i < responseData.length; i++) {
    //             const item = responseData[i]
    //             const percentageChange = calculateOverviewPercentage(item.price_open, item.price_close)
    //             percentageChanges.push(parseFloat(percentageChange))
    //         }
    //         return percentageChanges
    //     }
    //     const percentageChanges = calculatePercentageChanges(responseData)

    //     setOverviewPercentage(percentageChanges.length - 1)


    //     const calculateAggregate = (percentageChanges) => {
    //         const sum = percentageChanges.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    //         const average = sum / percentageChanges.length;

    //         return average.toFixed(5);
    //     }

    //     const aggregate = calculateAggregate(percentageChanges)
    //     setAggregate(aggregate)

    // }, [responseData])

    return (
        <div>
            <p
                className={`leading-[10px] flex items-center
                                    ${aggregate > 0.0001 ? 'text-blok-rate-green' : 'text-blok-rate-red'}`}
            >
                {aggregate > 0.0001 ?
                    (<img src={StockIncrease} />) :
                    (<img src={StockDecrease} />)
                }
                {aggregate}%
            </p>
        </div>
    )
}

export default RateValue