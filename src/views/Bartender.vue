<template>
  <div
    class="container-3a8j"
    :style="'background-image: url(\'https://medias.arturia.net/images/products/'+ selectedProduct +'/large-'+selectedProduct+'-banner.jpg\')'"
  >
    <!-- <img
      class="bg-img"
      :src="'https://medias.arturia.net/images/products/'+ selectedProduct +'/'+selectedProduct+'-image.png'"
    /> -->

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
      <ProductTopPanel v-if="panelView == 'product'" class="top-pannel" ref="top-panel"></ProductTopPanel>
      <AlbumTopPanel v-else-if="panelView == 'album'" class="top-pannel" ref="top-panel"></AlbumTopPanel>

      <ProductBottomPanel class="bottom-pannel acrylic blur" ref="bottom-panel"></ProductBottomPanel>

      <!-- <AlbumBottomPanel
        class="bottom-pannel acrylic blur"
        :album="selected_album"
      >
        <v-btn fab small color="#fffd" @click="panelView = 'product'">
          <v-icon color="#212121">mdi-chevron-left</v-icon>
        </v-btn>
      </AlbumBottomPanel>-->
    </div>

    <div class="bottom-controller">
      <div class="acrylicz blur" style="height: 100%">ctrl</div>
    </div>
  </div>
</template>

<script>
import { utils } from "disco-puzzle";
import store from "@/stores/bartender.js";
import AlbumTopPanel from "@/components/bartender/AlbumTopPanel.vue";
import AlbumBottomPanel from "@/components/bartender/AlbumBottomPanel.vue";
import ProductTopPanel from "@/components/bartender/ProductTopPanel.vue";
import ProductBottomPanel from "@/components/bartender/ProductBottomPanel.vue";
export default {
  components: {
    AlbumTopPanel,
    AlbumBottomPanel,
    ProductTopPanel,
    ProductBottomPanel
  },

  data: () => ({
    products: [],
    types: [],
    filters: {},
    store: undefined
  }),
  computed: {
    albums() {
      return store.state.albums;
    },
    panelView() {
      return store.state.panel_view;
    },
    selectedProduct() {
      return store.state.selected_product;
    },

    filterByProduct: function() {
      return this.albums.filter(album =>
        album.products.find(product => product === this.selectedProduct)
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

    this.store = store;
    this.loadAlbums();
  },

  mounted() {
    // var p = this.$refs["bottom-panel"]
    // console.log(p)
    this.$refs["bottom-panel"].$el.addEventListener("scroll", () => {
      this.shrinkTopPan();
    });
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

        // this.albums.push(album);
        store.commit("addAlbum", album);
      });
    },

    selectProduct(product) {
      store.commit("selectProduct", product);
      store.commit("changePanelView", "product");
    },

    shrinkTopPan() {
      if (this.$refs["bottom-panel"].$el.scrollTop > 50) {
        this.$refs["top-panel"].$el.style.height = "26.5vh";
        this.$refs["bottom-panel"].$el.style.height = "73.5vh";
      } else {
        this.$refs["top-panel"].$el.style.height = "42.5vh";
        this.$refs["bottom-panel"].$el.style.height = "57.5vh";
      }
    }
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

  transition: height 0.61s;
}
.bottom-pannel {
  height: 57.5vh;
  padding: 3vw;

  overflow: scroll;

  color: white;
  background: #000c;

  transition: height 0.61s;
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
    z-index: -1;
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
</style>

  <!-- https://dribbble.com/shots/3547701-Acrylic-Spotify -->
  <!-- https://dribbble.com/shots/3172185-TIDAL-Concept-player-artist-page -->
  <!-- https://dribbble.com/shots/4216001-Dark-Holo-Music-UI-Kit-Desktop -->
  <!-- https://dribbble.com/shots/4244601-Music-UI -->
  <!-- https://dribbble.com/shots/4242093-Music-UI -->
  <!-- https://dribbble.com/shots/5424738-Apple-OS-Music-Player -->
  