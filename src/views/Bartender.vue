<template>
  <div
    class="container-3a8j"
    :style="'background-image: url(\'https://medias.arturia.net/images/products/'+ selected_product +'/large-'+selected_product+'-banner.jpg\')'"
  >
    <img
      class="bg-img"
      :src="'https://medias.arturia.net/images/products/'+ selected_product +'/'+selected_product+'-image.png'"
    />

    <div class="nav acrylic blur" floating permanent>
      <v-btn icon dark>
        <v-icon color="#fffd">mdi-magnify</v-icon>
      </v-btn>

      <div class="nav-spacer"></div>

      <span class="nav-title">product</span>
      <span
        class="nav-text"
        v-for="(product, index) in filters.products"
        :key="index"
        @click="selectProduct(product)"
      >{{product.replace(/-/g, "").replace(/v$/, " v")}}</span>
    </div>

    <div style="flex: 0 0 80vw; height: 100vh; display: flex; flex-direction: column">
      <div
        class="top-pannel"
        :style="'background-image: url(\'https://medias.arturia.net/images/products/'+ selected_product +'/large-'+selected_product+'-banner.jpg\')'"
      >
        <transition name="fade" mode="out-in">
          <span :key="selected_product" class="top-pannel-title">{{selected_product.replace(/-/g, "").replace(/v$/, " v")}}</span>
        </transition>

        <img
          class="top-pannel-img"
          :src="'https://medias.arturia.net/images/products/'+ selected_product +'/'+selected_product+'-image.png'"
        />
      </div>

      <div class="bottom-pannel acrylic blur">
        <div style="display: flex">
          <div style="display: flex; flex-wrap: wrap; align-items: center">
            <span class="bottom-pannel-title" style="flex: 0 0 100%">Lastest Release</span>
            <img class="cover-big" :src="filterByProduct[0].cover" />
            <div class="cover-big-desc">
              <span class="cover-big-text">{{filterByProduct[0].name}}</span>
              <span class="cover-big-subtext">{{filterByProduct[0].price}}</span>
            </div>
          </div>
          <div style="display: flex; flex-wrap: wrap; align-items: center">
            <span class="bottom-pannel-title" style="flex: 0 0 100%">Best Seller</span>
            <img class="cover-big" :src="filterByProduct[1].cover" />
            <div class="cover-big-desc">
              <span class="cover-big-text">{{filterByProduct[1].name}}</span>
              <span class="cover-big-subtext">{{filterByProduct[1].price}}</span>
            </div>
          </div>
        </div>
        <div style="height: 2vw"></div>
        <span class="bottom-pannel-title" style="flex: 0 0 100%">Popular</span>
        <div style="height: 1vw"></div>
        <div v-for="(album, index) in filterByProduct" :key="index">
          <div class="album-list-row">
            <img class="cover-small" :src="album.cover" />
            <span class="album-list-row-text" style="color: #fff8">{{index+1}}</span>
            <v-icon class="album-list-row-text" color="#fffd">mdi-play-outline</v-icon>
            <span class="album-list-row-text" style="flex: 0 0 50%">{{album.name}}</span>
            <span
              class="album-list-row-text overline text-uppercase"
              style="color: #fff6; padding-left: 1vmin; padding-right: 1vmin; border: thin solid; border-radius: 4px"
            >12 of {{album.presets}} presets</span>
            <v-icon class="album-list-row-text ml-auto" small color="#fffd">mdi-cart</v-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-controller">
      <div class="acrylicz blur" style="height: 100%">ctrl</div>
    </div>
  </div>
</template>

<script>
import { utils } from "disco-puzzle";
export default {
  data: () => ({
    products: [],
    types: [],
    filters: {},
    albums: [],
    selected_product: "mini-v"
  }),
  computed: {
    filterByProduct: function() {
      return this.albums.filter(album =>
        album.products.find(product => product === this.selected_product)
      );
    }
  },

  created() {
    this.filters.products = [
      "jup-8-v",
      "matrix-12-v",
      "prophet-v",
      "synclavier-v",
      "farfisa-v",
      "sem-v",
      "modular-v",
      "mini-v"
      // "cs-80v",
      // "arp2600v",
      // "solina-v",
      // "piano-v",
      // "wurli-v",
      // "analoglab",
      // "stage-73-v",
      // "dx7-v",
      // "buchla-easel-v",
      // "cmi-v",
      // "clavinet-v",
      // "b-3-v",
      // "vox-continental-v",
      // "pigments",
      // "synthi-v",
      // "cz-v",
      // "microfreak",
      // "mellotron-v"
    ];
    this.filters.types = [
      "bass",
      "fm",
      "keys",
      "pad",
      "percussive",
      "sequence",
      "sfx",
      "brass",
      "lead"
    ];

    this.loadAlbums();
  },

  methods: {
    loadAlbums() {
      var raw_albums = utils.getJSONsync(
        "https://tinawng.github.io/assets/json/bartender/product_details.json"
      ).data;
      var raw_tracks = utils.getJSONsync(
        "https://tinawng.github.io/assets/json/bartender/preset_bank_audio.json"
      ).data;

      raw_albums.forEach(raw_album => {
        let album = {};
        album.name = raw_album.slug.replace(/_/g, " ");
        album.cover =
          "https://www.arturia.com/images/products/" +
          raw_album.slug +
          "/cover.jpg";
        album.price = raw_album.value.price;
        album.presets = raw_album.value.preset_count;

        album.products = [];
        // software
        if (raw_album.value["plugins_distribution"] != undefined) {
          raw_album.value["plugins_distribution"].forEach(product => {
            let productName = product.slug.toLowerCase();
            if (
              album.products.find(product => product == productName) ==
              undefined
            )
              album.products.push(productName);
          });
        }
        // hardware
        if (raw_album.value["hardware_host"] != undefined) {
          raw_album.value["hardware_host"].forEach(product => {
            let productName = product.slug.toLowerCase();
            if (
              album.products.find(product => product === productName) ==
              undefined
            )
              album.products.push(productName);
          });
        }

        album.types = [];
        raw_album.value["sounds_distribution"].forEach(type => {
          let typeName = type.type.toLowerCase();
          if (album.types.find(type => type === typeName) == undefined)
            album.types.push(typeName);
        });

        album.tracks = [];
        raw_tracks.forEach(raw_track => {
          if (raw_track.product_id == raw_album.product_id) {
            let track = {};
            track.title = raw_track.title.toLowerCase().replace(/_/g, " ");
            track.src = "./assets/audios/dancefloor/blame-it-on-the-boogie.mp3";
            album.tracks.push(track);
          }
        });

        this.albums.push(album);
      });
    },

    selectProduct(product) {
      this.selected_product = product;
    },

    numberOfProductPreset(album) {}
  }
};
</script>

<style scoped>
.container-3a8j {
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;

  /* background-image: url("/assets/images/bartender/mini-v-banner.jpg"); */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-img {
  position: absolute;
  width: 110vw;
  bottom: -42vw;
  left: 4vw;

  filter: grayscale(20%);
}

.nav {
  flex: 0 0 20vw;
  padding-top: 1.5vw;
  padding-left: 1.5vw;

  display: flex;
  flex-direction: column;

  background: #0006;
}
.nav-spacer {
  height: 7%;
}
.nav-title {
  margin-bottom: 4vmin;
  padding-left: 1vmin;

  line-height: 1.2vw;
  font-size: 1.1vw;
  font-weight: 400;
  letter-spacing: 0.2em;
  color: #fff3;
  text-transform: uppercase;
}
.nav-text {
  margin-bottom: 3vmin;
  padding-left: 1vmin;
  z-index: 2;

  line-height: 1.2vw;
  font-size: 1vw;
  font-weight: 200;
  letter-spacing: 0.16em;
  color: #fff9;
  text-transform: capitalize;
  transition: all 0.305s;

  user-select: none;
}
.nav-text:hover {
  color: #fffd;
  font-weight: 600;
}

.top-pannel {
  height: 42.5vh;
  padding: 2vw;

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: flex-end;

  /* background: #424242; */
  /* background-image: url("/assets/images/bartender/mini-v-banner.jpg"); */
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.top-pannel-title {
  line-height: 8vw;
  font-size: 8vw;
  font-weight: 700;
  color: white;
  text-transform: capitalize;

  z-index: 2;
}
.top-pannel-img {
  position: absolute;
  width: 80vw;
  bottom: -30vw;
  left: 14vw;

  filter: grayscale(40%);
}
.bottom-pannel {
  height: 57.5vh;
  padding: 3vw;

  overflow: scroll;

  color: white;
  background: #000c;
}
.bottom-pannel-title {
  margin-bottom: 1vw;

  line-height: 1.6vw;
  font-size: 1.6vw;
  font-weight: 500;
}

.cover-big {
  width: 6.5vw;

  box-shadow: 0px 18px 15px -7px rgba(0, 0, 0, 0.6),
    0px 24px 38px 3px rgba(0, 0, 0, 0.56), 0px 9px 46px 8px rgba(0, 0, 0, 0.24);
}
.cover-big-desc {
  margin-left: 1.75vw;
  display: flex;
  flex-direction: column;
}
.cover-big-text {
  line-height: 1.6vw;
  font-size: 1.4vw;
  font-weight: 300;
  text-transform: capitalize;
}
.cover-big-subtext {
  line-height: 1.6vw;
  font-size: 0.9vw;
  font-weight: 400;
  letter-spacing: 0.16em;
  color: #fff9;
  text-transform: uppercase;
}
.cover-small {
  width: 3vw;
}

.album-list-row {
  margin-bottom: 1vmin;

  display: flex;
  align-items: center;
}
.album-list-row-text {
  margin-left: 2vw;
  text-transform: capitalize;
}

.bottom-controller {
  position: fixed;
  bottom: 0;
  height: 11vh;
  width: 100vw;
  z-index: 99;
  background: #0001;
}

.acrylic {
  position: relative;
  /* overflow: hidden; */
  z-index: 0;
}
.acrylic::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.8;
  background: #000;
  background-image: url(data:image/png;base64,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);
}
@supports (
  (-webkit-backdrop-filter: blur(1em)) or (backdrop-filter: blur(1em))
) {
  .acrylic::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: 0.37;
    background: #fff2;
    background-image: url(data:image/png;base64,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);
  }

  .blur {
    /* background: rgba(255, 255, 255, .5); */
    -webkit-backdrop-filter: blur(0.4em);
    backdrop-filter: blur(0.4em);
  }
}
.shadow {
  border-radius: 1px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

  <!-- https://dribbble.com/shots/3547701-Acrylic-Spotify -->
  <!-- https://dribbble.com/shots/3172185-TIDAL-Concept-player-artist-page -->
  <!-- https://dribbble.com/shots/4216001-Dark-Holo-Music-UI-Kit-Desktop -->
  <!-- https://dribbble.com/shots/4244601-Music-UI -->
  <!-- https://dribbble.com/shots/4242093-Music-UI -->
  <!-- https://dribbble.com/shots/5424738-Apple-OS-Music-Player -->
  