import { useState, useEffect } from 'react'
import { BlokCoinOverview } from '../../../assets/Blok/data'
import StockIncrease from '../../../assets/Blok/images/arrow-up.svg'
import StockDecrease from '../../../assets/Blok/images/arrow-down.svg'
import axios from 'axios'

const CoinsOverview = () => {
    const [responseData, setResponseData] = useState([1, 2, 3]);
    const [overviewPercentage, setOverviewPercentage] = useState([])

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         const options = {
    //             method: 'GET',
    //             url: 'https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest',
    //             params: { period_id: '1SEC', },
    //             headers: {
    //                 Accept: 'application/json',
    //                 'X-CoinAPI-Key': '900E00D9-2608-4199-9390-109DE2CAEE54'
    //             }
    //         };

    //         axios.request(options).then(function (response) {
    //             console.log(response.data);
    //             setResponseData(response.data)
    //         }).catch(function (error) {
    //             console.error(error);
    //         });
    //     }, 10000);

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

    //     setOverviewPercentage(percentageChanges)

    //     console.log(overviewPercentage)

    //     const calculateAggregate = (percentageChanges) => {
    //         const sum = percentageChanges.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    //         const average = sum / percentageChanges.length;

    //         return average.toFixed(3);
    //     }

    //     const aggregate = calculateAggregate(percentageChanges)
    //     console.log(aggregate)

    // }, [responseData])

    // console.log('Response:', responseData, 'Overview:', overviewPercentage)







    return (
        <div className="flex flex-wrap lg:flex-nowrap lg:w-full gap-5 xl:gap-8 justify-center">
            {
                BlokCoinOverview.map((item, index) => (
                    <div key={index} className="border rounded-16 p-3 flex flex-col gap-2 xl:gap-4">
                        <div className='font-bold font-cabinet text-blok-dark dark:text-white'>
                            <p className='text-[20px] xl:text-24'>{item.amount}{item.cryptocurrency}</p>
                            <span className='text-14 leading-[19px]'>$4,9000</span>
                        </div>
                        <div className="">
                            <img src={item.graph} alt="" />
                        </div>
                        <div className="flex gap-2">
                            <div className="">
                                <img src={item.cryptocurrencyImage} alt="" className='w-[40px] h-[40px]' />
                            </div>
                            <div className="flex flex-col ">
                                <p className='font-bold font-cabinet text-blok-dark dark:text-white'>{item.pair}</p>
                                <p
                                    className={`leading-[10px] flex items-center
                                    ${item.determine ? 'text-blok-rate-green' : 'text-blok-rate-red'}`}
                                >
                                    {item.determine ?
                                        (<img src={StockIncrease} />) :
                                        (<img src={StockDecrease} />)
                                    }
                                    {item.stock}%
                                </p>
                            </div>
                        </div>
                    </div>

                ))
            }


        </div>
    )
}

export default CoinsOverview