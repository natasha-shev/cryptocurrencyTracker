import axios from 'axios';

function getCoinsList() {
      return axios
        .get('http://127.0.0.1:8000/api/coins', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
}

function addCoin(coinId, amount, buyPrice, buyDate, action) {
  return axios
    .post('http://127.0.0.1:8000/api/favourites', {
      coinId: coinId,
      amount: amount,
      price: buyPrice,
      date: buyDate,
      action: action
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
}

function removeCoin(coin_id) {
  return axios
    .delete('http://127.0.0.1:8000/api/favourites/'+coin_id, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
}

function getHistory(coin_id) {
  return axios
    .get('http://127.0.0.1:8000/api/history/'+coin_id);
}

function getTotal() {
  return axios
    .get('http://127.0.0.1:8000/api/total', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
}

function getSales() {
  return axios
    .get('http://127.0.0.1:8000/api/sales', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
}

export default {getCoinsList, addCoin, removeCoin, getHistory, getTotal, getSales};
