<template>
  <v-dialog
    v-model="dialogLocal"
    max-width="490"
  >
    <v-card>
      <v-card-title class="text-h5">
        Add new coin to portfolio
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field v-model="amount"
                        label="Amount"
                        :rules="rules"
          ></v-text-field>
          <v-text-field v-model="buyPrice"
                        label="Buy price"
                        :rules="rules"
                        filled
          ></v-text-field>
          <v-text-field v-model="buyDate"
                        label="Bought on"
                        :rules="rules"
                        type="date"
                        :value="buyDate"
                        filled
          >
            <!--                          type="date"-->
          </v-text-field>

        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          @click="dialogLocal = false"
        >
          Close
        </v-btn>
        <v-btn @click="addCoin">
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddCoinDialog',
  props: ['dialog'],

  data() {
    return {
      dialogLocal: false,
      buyPrice: 0,
      buyDate: 0,
      amount: 1,
      rules: [
        value => !!value || 'Required.'
      ]
    };
  },

  watch: {
    dialog: function () {
      this.dialogLocal = !this.dialogLocal;
    }
  },

  created() {
    let today = new Date();

    this.buyDate = ([today.getDate(), today.getMonth()+1, today.getFullYear()].join('-'));
  },

  methods: {
    addCoin() {
      axios
        .post('http://127.0.0.1:8000/api/favourites', {
          coinId: 1,
          amount: this.amount,
          buyPrice: this.buyPrice,
          buyDate: this.buyDate,
        }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }).then(response => {
          console.log(response);
          this.dialogLocal = false;
      });
    }
  }
};
</script>

<style scoped>

</style>
