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
          <v-combobox
            v-model="coin"
            :items="items"
            label="Choose coin"
            :value="curr? curr.full_name: null"
            :rules="rules.forAll"
          >
          </v-combobox>


          <v-text-field v-model="amount"
                        label="Amount"
                        :rules="rules.forAll"
                        :value="amount"
          ></v-text-field>
          <v-text-field v-model="buyPrice"
                        label="Buy price"
                        :rules="rules.forAll"
                        :value="buyPrice"
                        prefix="$"
          ></v-text-field>

          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="computedDateFormatted"
                label="Bought on"
                hint="DD/MM/YYYY format"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                :value="computedDateFormatted"
                :rules="rules.forAll"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          @click="dialogLocal = false"
        >
          Close
        </v-btn>
        <v-btn
          :disabled="!formIsValid"
          @click="addCoin"
        >
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import api from '../api';

export default {
  name: 'AddCoinDialog',
  props: ['dialog', 'curr'],

  //add rules to date field
  data() {
    return {
      dialogLocal: false,
      buyPrice: 1,
      amount: 1,
      rules: {
        forAll: [value => !!value || 'Required.'],
        // forDate: [
        //   value => {
        //     var regex = /^(\d{1,2}\/){2}\d{2}(\d{2})?$/;
        //
        //     return 0;
        //   }
        // ]
      },
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      items: [],
      coin: null,
    };
  },

  watch: {
    dialog: function () {
      this.dialogLocal = !this.dialogLocal;
    },
  },

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    formIsValid() {
      return (
        this.coin &&
        this.amount &&
        this.buyPrice &&
        this.date
      );
    },
  },

  beforeUpdate() {
    if (this.curr) {
      this.buyPrice = this.curr.price_usd;
      this.coin = {
        value: this.curr,
        text: this.curr.full_name,
      };
    } else {
      this.items = this.$store.getters.coinsGetter.map(c => {
        return {
          value: c,
          text: c.full_name,
          disabled: c.user_id
        };
      });
    }
  },

  methods: {
    formatDate(date) {
      if (!date) { return null; }

      const [year, month, day] = date.split('-');

      return `${day}/${month}/${year}`;
    },

    parseDate(date) {
      if (!date) { return null; }

      const [day, month, year] = date.split('/');

      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },

    addCoin() {
      this.date = this.parseDate(this.dateFormatted);
      api.addCoin(this.coin.value.id, this.amount, this.buyPrice, this.date)
      .then(response => {
        console.log(response);
        this.dialogLocal = false;
        if (response.data) {
          this.$store.commit('remove_coin', this.coin.value.id);
        } else {
          this.$store.commit('add_coin', {
            coin_id: this.coin.value.id,
            amount: this.amount,
            buy_price: this.buyPrice,
            buy_date: this.date
          });
        }
      });
    },
  }
};
</script>

<style scoped>

</style>
