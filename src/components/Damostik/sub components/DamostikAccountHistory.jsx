import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { DamostikHistoryData, accountHistoryGrid } from '../../../assets/Damostik/data'

const DamostikAccountHistory = () => {
    return (
        <div id='accountHistory' className='mt-5'>
            <h2 className="text-damostik-black text-20 font-medium leading-7 mb-5">
                Account History
            </h2>

            <div className="mt-12 md:mt-0 p-2 bg-white">
            <GridComponent
                dataSource={DamostikHistoryData}
                allowSorting
                allowPaging
                toolbar={['Delete']}
                width="auto"
                editSettings={{
                    allowDeleting: true,
                    allowEditing: true
                }}
            >
                <ColumnsDirective>
                    {accountHistoryGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
            </div>

        </div>
    )
}

export default DamostikAccountHistory