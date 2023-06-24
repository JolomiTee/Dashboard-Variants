import * as React from 'react';
import ExpensesCharts from '../charts/ExpensesCharts';
import ChevronDown from '../../../assets/HotelsNg/icons/ChevronDownWhite.svg'

const HotelExpenses = () => {
    return (
        <div className="grid min-w-[300px] max-w-[500px] gap-3">
            <div className='flex justify-between'>
                <h4 className='text-[22px] text-hotels-letter-black1'>Expenses</h4>
                <button className='bg-hotels-black text-white font-visuelt-pro flex gap-3 h-[36px] items-center justify-center px-3 rounded-4'>Monthly <img src={ChevronDown} alt='Dropdown' /></button>
            </div>
            <ExpensesCharts />
        </div>)
};
export default HotelExpenses;