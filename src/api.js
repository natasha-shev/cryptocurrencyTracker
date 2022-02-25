import axios from 'axios';

async function getCoinsList(fav = false) {
   if (fav) {
       const res = axios
         .get('http://127.0.0.1:8000/api/fav', {
           headers: {
             'Authorization': `Bearer ${localStorage.getItem('token')}`
           }
         });

       return res;
  } else {
      const res = axios
        .get('http://127.0.0.1:8000/api/coins', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

      return res;
  }
}

export default getCoinsList;
