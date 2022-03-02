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
            v-model="name"
            :items="items"
            label="Choose coin"
            :value="name"
          >
          </v-combobox>


          <v-text-field v-model="amount"
                        label="Amount"
                        :rules="rules"
                        :value="amount"
          ></v-text-field>
          <v-text-field v-model="buyPrice"
                        label="Buy price"
                        :rules="rules"
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
                @blur="date = parseDate(dateFormatted)"
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
        <v-btn @click="addCoin">
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
      name: '',
      buyPrice: 1,
      amount: 1,
      rules: [
        value => !!value || 'Required.'
      ],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: this.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      items: [],
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
    }
  },

  created() {
    if (this.curr) {
      //this.coin = {...this.curr};
      this.name = this.curr.full_name;
      this.buyPrice = this.curr.price_usd;
    }
  },

  beforeCreate() {
    console.log(this.$store.getters.coinsGetter.map(c => c.full_name));
    this.items = this.$store.getters.coinsGetter.map(c => c.full_name);
    console.log('items: '+this.items);
  },

  methods: {
    addCoin() {
      // find coin by full name
      api.addCoin(1, this.amount, this.buyPrice, this.date)
      .then(response => {
        console.log(response);
        this.dialogLocal = false;
      });
    },

    formatDate(date) {
      if (!date) { return null; }

      const [year, month, day] = date.split('-');

      return `${day}/${month}/${year}`;
    },

    parseDate(date) {
      if (!date) { return null; }

      const [month, day, year] = date.split('/');

      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
  }
};
</script>

<style scoped>

</style>
