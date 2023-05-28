import React from 'react'

const ConversionRate = ({cryptocurrency}) => {
  return (
    <span className='font-cabinet font-bold text-blok-grey mdl:absolute mdl:translate-y-[90px] lg:relative lg:translate-y-[0] xl:relative xl:translate-x-0'>{`1 ${cryptocurrency} = ${' $1300.08'}`}</span>
  )
}

export default ConversionRate