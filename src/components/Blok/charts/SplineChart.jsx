import React from 'react'
// import axios from "axios";
import {SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, ChartComponent, LineSeries} from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../../assets/Blok/data'
import { useBlokContext } from '../../../context/BlokContext'
const SplineChart = () => {
    const {appTheme} = useBlokContext()
    // const apiFetch = async () => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest',
    //         // the limit should correspond with the amount of points needed to set graph as defined in the data file
    //         params: { period_id: '1DAY', limit: '30' },
    //         headers: { 'X-CoinAPI-Key': '67CE7602-E47C-4E5B-AADF-AED1FD516B77', Accept: '*/*' }
    //     };

    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });

    // }
    return (
        <ChartComponent
                id='line-chart'
                height='420px'
                primaryXAxis={LinePrimaryXAxis}
                primaryYAxis={LinePrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={appTheme === 'dark' ? "#33373e" : 'white'}

            >
                <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
                <SeriesCollectionDirective>
                    {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                </SeriesCollectionDirective>

            </ChartComponent>
    )
}

export default SplineChart