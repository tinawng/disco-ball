<template>
  <!-- https://en.wikipedia.org/wiki/Lucas%E2%80%93Lehmer_primality_test -->
  <!-- https://fr.wikipedia.org/wiki/Nombre_de_Mersenne_premier -->
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar :color="is_prime ? 'success' : 'primary'" dark flat>
                <v-toolbar-title>Mersenne primes</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large target="_blank" v-on="on" href="https://fr.wikipedia.org/wiki/Nombre_de_Mersenne_premier">
                      <v-icon>mdi-information-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>

              <v-card-text>
                <p>
                  Checking Mersenne primes using
                  <a
                    href="https://en.wikipedia.org/wiki/Lucas%E2%80%93Lehmer_primality_test"
                  >Lucas–Lehmer primality test</a>.
                </p>

                <p class="display-1 font-weight-light">
                  M = 2
                  <sup>p</sup>-1
                </p>

                <v-form>
                  <v-text-field
                    v-model="p"
                    label="p value"
                    name="p"
                    prepend-icon="mdi-numeric"
                    type="number"
                    min="3"
                  ></v-text-field>
                </v-form>

                <v-expansion-panels class="my-4">
                  <v-expansion-panel>
                    <v-expansion-panel-header v-slot="{ open }">
                      <v-fade-transition leave-absolute>
                        <span v-if="!open">
                          M is
                          <span
                            v-if="!is_first && is_prime != undefined"
                            :class="[is_prime ? 'success--text' : 'red--text', 'font-weight-bold'] "
                          >{{is_prime ? 'PRIME!' : 'COMPOSITE'}}</span>
                        </span>
                        <v-row v-else style="width: 100%" justify="center">
                          <span
                            v-if="!is_first && is_prime != undefined"
                            :class="[is_prime ? 'success--text' : 'red--text', 'font-weight-bold'] "
                          >{{is_prime ? 'PRIME!' : 'COMPOSITE'}}</span>
                        </v-row>
                      </v-fade-transition>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-row justify="space-around" no-gutters>
                        <v-col cols="2" class="text-right">
                          <p>Duration:</p>
                          <p>Nb of digits:</p>
                          <p>M value:</p>
                        </v-col>
                        <v-col cols="9">
                          <p>{{elapsed/1000}}s</p>
                          <p>{{m.toString().length}}</p>
                          <p>{{m}}</p>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-progress-circular
                  class="mr-2"
                  :value="is_prime != undefined ? 100 : 0"
                  :indeterminate="is_prime == undefined"
                  :color="is_first ? 'primary' : is_prime ? 'success' : 'red'"
                ></v-progress-circular>
                <v-btn :color="is_prime ? 'success' : 'primary'" @click="calc">do math</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      is_first: true,
      p: undefined,
      m: 0,
      is_prime: false,
      elapsed: 0
    };
  },
  created() {
    // console.log("2^" + p + "-1 is " + this.compLucas(p));
  },
  methods: {
    calc() {
      if (!this.p) return
      this.is_prime = undefined;
      this.is_first = false;
      setTimeout(this.compLucas, 700);
    },

    compLucas() {
      let start = new Date().getTime();
      let s = 4n;
      const _0 = 0n;
      const _1 = 1n;
      const _2 = 2n;

      this.m = this.pow(_2, BigInt(this.p)) - _1;
      for (let i = 0; i < this.p - 2; i++) {
        s = (s * s - _2) % this.m;
      }

      let stop = new Date().getTime();
      this.is_prime = s == _0;
      this.elapsed = stop-start;
    },

    pow(a, b) {
      var x = a;
      var y = 1n;
      const _0 = 0n;
      const _1 = 1n;
      const _2 = 2n;

      while (true) {
        if ((b & _1) === _1) {
          y = y * x;
          --b;
        }
        if (b === _0) break;
        b /= _2;
        x = x * x;
      }
      return y;
    }
  }
};
</script>

<style>
</style>