import axios from 'axios';

function getCoinsList(fav = false) {
   if (fav) {
       return axios
         .get('http://127.0.0.1:8000/api/fav', {
           headers: {
             'Authorization': `Bearer ${localStorage.getItem('token')}`
           }
         });
  } else {
      return axios
        .get('http://127.0.0.1:8000/api/coins', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
}

function addCoin(coinId, amount, buyPrice, buyDate) {
  return axios
    .post('http://127.0.0.1:8000/api/favourites', {
      coinId: coinId,
      amount: amount,
      buyPrice: buyPrice,
      buyDate: buyDate,
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
}

//export default getCoinsList;
export default {getCoinsList, addCoin};
