import axios from "axios";

const BtcOptions = {
  method: 'POST',
  url: 'https://cex.io/api/price_stats/BTC/USD',
  headers: {Accept: 'application/json'},
  data: {lastHours: '24', maxRespArrSize: '20'}
};

axios.request(BtcOptions).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


const UsdtOption = {
    method: 'POST',
    url: 'https://cex.io/api/price_stats/USDT/USD',
    headers: {Accept: 'application/json'},
    data: {lastHours: '24', maxRespArrSize: '20'}
  };

  axios.request(UsdtOption).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });


const EthOption = {
    method: 'POST',
    url: 'https://cex.io/api/price_stats/ETH/USD',
    headers: {Accept: 'application/json'},
    data: {lastHours: '24', maxRespArrSize: '20'}
  };

  axios.request(EthOption).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
