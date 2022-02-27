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

export default getCoinsList;
