import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { PropertyPane } from './property-pane';
import * as dataSource from '../../../assets/HotelsNg/CalendarData.json';
/**
 * Schedule Default sample
 */
const HotelCalendar = () => {
    const scheduleObj = useRef(null);
    const data = extend([], dataSource.scheduleData, null, true);
    const [scheduleData, setScheduleData] = useState(new Date(2023, 0, 10));
    const change = (args) => {
        setScheduleData(args.value);
        scheduleObj.current.dataBind();
    };
    const onDragStart = (args) => {
        args.navigation.enable = true;
    };
    return (<div className='schedule-control-section min-w-[300px] max-w-[550px]'>
      <div className='col-lg-9 control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent height='650px' ref={scheduleObj} selectedDate={scheduleData} eventSettings={{ dataSource: data }} dragStart={(onDragStart)}>
            <ViewsDirective>
              <ViewDirective option='Day'/>
              <ViewDirective option='Week'/>
              <ViewDirective option='WorkWeek'/>
              <ViewDirective option='Month'/>
              <ViewDirective option='Agenda'/>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
          </ScheduleComponent>
        </div>
      </div>
      <div className='col-lg-3 property-section'>
        <PropertyPane title='Properties'>
          <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
            <tbody>
              <tr style={{ height: '50px' }}>
                <td style={{ width: '100%' }}>
                  <div className='datepicker-control-section'>
                    <DatePickerComponent value={scheduleData} showClearButton={false} change={change} placeholder='Current Date' floatLabelType='Always'/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </PropertyPane>
      </div>
    </div>);
};
export default HotelCalendar;