import {useState, useEffect} from 'react'

const RateValue = ({ crypto }) => {
    const [responseData, setResponseData] = useState([]);
    const [overviewPercentage, setOverviewPercentage] = useState((0.00).toFixed(3))


    return (
        <div>
            <p>
                {overviewPercentage}
            </p>
        </div>
    )
}

export default RateValue