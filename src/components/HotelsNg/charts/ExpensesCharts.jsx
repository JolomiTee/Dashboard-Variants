import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection, Inject, Selection, AccumulationAnnotationsDirective, AccumulationAnnotationDirective, ChartAnnotation, AccumulationAnnotation } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { HotelExpensesData } from '../../../assets/HotelsNg/data';


let content = Browser.isDevice ? " " : "<div style='font-Weight:600;font-size:14px'>Expenses</div>";
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .pie-chart2 {
        align :center
    }`;

const ExpensesCharts = () => {
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/light/i, "Light").replace(/contrast/i, 'Contrast');
    };
    return (
        <div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section'>
                <AccumulationChartComponent
                    id='pie-chart2'
                    title={Browser.isDevice ? "Hotel Expenses" : ''}
                    load={load.bind(this)}
                    legendSettings={{ visible: true, toggleVisibility: true, position: Browser.isDevice ? 'Right' : 'Bottom', height: Browser.isDevice ? '20%' : '30%', width: '100%', textWrap: 'No-wrap', maximumLabelWidth: 100 }}
                    enableSmartLabels={true}
                    enableAnimation={false}
                    selectionMode={'Point'}
                    center={{ x: '50%', y: '50%' }}
                    enableBorderOnMouseMove={false}
                    tooltip={{ enable: true, format: '<b>${point.x}</b><br>Expense: <b>${point.y}%</b>', header: "" }}
                >
                    <Inject
                        services={[
                            AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip,
                            AccumulationSelection, Selection, ChartAnnotation, AccumulationAnnotation
                        ]}
                    />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            dataSource={HotelExpensesData}
                            xName='x' yName='y' explode={true} explodeOffset='10%' explodeIndex={0} startAngle={30} innerRadius='43%'
                            dataLabel={{
                                visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600', color: '#ffffff' }, connectorStyle: {
                                    length: '20px', type: 'Curve'
                                }
                            }}
                            radius='80%'
                        />
                    </AccumulationSeriesCollectionDirective>

                    <AccumulationAnnotationsDirective>
                        <AccumulationAnnotationDirective content={content} region="Series" x="52%" y="50%" />
                    </AccumulationAnnotationsDirective>

                </AccumulationChartComponent>
            </div>
        </div>
    );
}

export default ExpensesCharts