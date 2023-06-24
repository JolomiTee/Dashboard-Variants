/**
 * Sample for Area series
 */
import * as React from 'react';
import { ChartComponent, SeriesCollectionDirective, Highlight, SeriesDirective, Inject, Tooltip, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';
import { HighReservationIndex, LowReservationIndex } from '../../../assets/HotelsNg/data';

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
/**
 * Area sample
 */
const ReservationChart = () => {
    const onChartLoad = (args) => {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    };
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    };
    return (
    <div className="control-pane">
            <style>{SAMPLE_CSS}</style>
            <div className="control-section">
                <ChartComponent id="charts" style={{ textAlign: 'center' }} primaryXAxis={{ valueType: 'DateTime', labelFormat: 'y', majorGridLines: { width: 0 }, intervalType: 'Years', minimum: new Date(2014, 0, 1), maximum: new Date(2023, 0, 1), edgeLabelPlacement: 'Shift' }} primaryYAxis={{ labelFormat: '{value}', lineStyle: { width: 0 }, maximum: 60000, interval: 10000, majorTickLines: { width: 0 }, minorTickLines: { width: 0 } }} load={load.bind(this)} width='100%' legendSettings={{ enableHighlight: true }} chartArea={{ border: { width: 0 } }} title="Inflation Rate in Percentage" loaded={onChartLoad.bind(this)} tooltip={{ enable: true }}>
                    <Inject services={[SplineAreaSeries, DateTime, Tooltip, Legend, Highlight]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={HighReservationIndex} xName="x" yName="y" name="High Reservation" marker={{ visible: true, isFilled: true, height: 6, width: 6, shape: 'Circle' }} opacity={0.5} type="SplineArea" width={2} border={{ width: 2 }}></SeriesDirective>
                        <SeriesDirective dataSource={LowReservationIndex} xName="x" yName="y" name="Low Reservation" marker={{ visible: true, isFilled: true, height: 5, width: 5, shape: 'Square' }} opacity={0.5} type="SplineArea" width={2} border={{ width: 2 }}></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>);
};
export default ReservationChart;