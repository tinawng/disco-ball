<template>
  <div style="background: #f5f5f5">
    <div style="height: 4vh"></div>
    <!-- TITLE -->
    <v-row class="ma-0" align="center" justify="center">
      <div class="view-title">
        <img class="view-title-svg" :src="'./assets/images/dancefloor/icon.svg'" />
        <span class="view-title-text">welcome to the dancefloor</span>
      </div>
    </v-row>
    <div style="height: 10vh"></div>

    <!-- PaperPlayer -->
    <v-row class="ma-0" justify="center" style="margin-bottom: 5vh !important">
      <div style="width: 80vw; flex-direction: column display: flex; align-items: center">
        <div class="showcase-large">
          <paper-player
            height="4vw"
            width="90%"
            eventid="paper-player-fx"
            :src="['./assets/audios/dancefloor/blame-it-on-the-boogie.mp3', './assets/audios/dancefloor/blame-it-on-the-boogie-fx.mp3']"
            :spectrogram="spectrogram"
            title="Kinda Disco"
            :color="getColor()"
          ></paper-player>
        </div>

        <div style="height: 5vh"></div>
        <div class="description">
          <span class="desc-text">
            The
            <strong>Paper Player</strong> is a ready-to-use component to play any music or sample file. It can be used in dual mode (or AB mode) for playing
            <strong>multiple songs at the same time</strong> or in
            <strong>AB comparison</strong>. The Fx button wil automatically show up if more than one file is specified.
          </span>
          <div class="desc-inputs">
            <v-switch v-model="spectrogram" label="Spectrogram" color="#424242"></v-switch>
            <div style="width: 2vw"></div>
          </div>
          <div
            class="desc-code"
          >&lt;paper-player eventid="paper-player-fx" height="12vh" width="90%" :spectrogram="{{spectrogram}}" title="Kinda Disco" color="#212121" :src="['./assets/audios/dancefloor/blame-it-on-the-boogie.mp3', './assets/audios/dancefloor/blame-it-on-the-boogie-fx.mp3']"&gt;&lt;/paper-player&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined>watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>

    <!-- BottomController -->
    <v-row class="ma-0" justify="center" style="margin-bottom: 10vh !important">
      <div style="width: 80vw; flex-direction: column display: flex; align-items: center">
        <div class="showcase-large" style="flex-direction: column">
          <paper-player
            height="4vw"
            width="90%"
            eventid="paper-player-btctrl0"
            src="./assets/audios/microfreak/Ambient_90__Jean-Michel_Blanchet.mp3"
            title="Ambient 90"
            :color="getColor()"
            link
          ></paper-player>
          <paper-player
            class="my-3"
            height="4vw"
            width="90%"
            eventid="paper-player-btctrl1"
            src="./assets/audios/microfreak/Scello__Jean-Baptiste_Arthus.mp3"
            title="Scello"
            :color="getColor()"
            link
          ></paper-player>
          <paper-player
            height="4vw"
            width="90%"
            eventid="paper-player-btctrl2"
            src="./assets/audios/microfreak/Tek_147__Jean-Michel_Blanchet.mp3"
            title="Tek 147"
            :color="getColor()"
            link
          ></paper-player>
        </div>

        <transition name="slide" mode="out-in">
          <bottom-controller v-if="show_bottom_controller"></bottom-controller>
        </transition>

        <div style="height: 5vh"></div>
        <div class="description">
          <span class="desc-text">
            The
            <strong>Bottom Controller</strong> is a ready-to-use component whose purpose is to control any
            <strong>linked player</strong> (and
            <strong>only</strong> those) on the page. To link a player, simply add 'link' ot its parameters
          </span>
          <div class="desc-inputs">
            <v-switch v-model="show_bottom_controller" label="Show Controller" color="#424242"></v-switch>
          </div>
          <div class="desc-code">&lt;bottom-controller&gt;&lt;/bottom-controller&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined>watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>

    <!-- PlaylistController -->
    <v-row class="ma-0" justify="center" style="margin-bottom: 10vh !important">
      <div style="width: 80vw; flex-direction: column display: flex; align-items: center">
        <div class="showcase-large">
          <playlist-controller
            color="#f5f5f5"
            :src="['./assets/audios/microfreak/Bontempi__Simon_Gallifet.mp3', './assets/audios/microfreak/Mr_Robot__Simon_Gallifet.mp3', './assets/audios/microfreak/Myosis__Simon_Gallifet.mp3']"
          ></playlist-controller>
        </div>

        <div style="height: 5vh"></div>
        <div class="description">
          <span class="desc-text">
            The
            <strong>Playlist Controller</strong> is a ready-to-use component to create a playlist from multiple files.
          </span>
          <div style="height: 2vh"></div>
          <div
            class="desc-code"
          >&lt;playlist-controller :src="['./assets/audios/microfreak/Bontempi__Simon_Gallifet.mp3', './assets/audios/microfreak/Mr_Robot__Simon_Gallifet.mp3', './assets/audios/microfreak/Myosis__Simon_Gallifet.mp3']"&gt;&lt;/playlist-controller&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined @click="goToExtDemo('microfreak')">watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>

    <!-- PlaylistQueue -->
    <v-row class="ma-0" justify="center" style="margin-bottom: 10vh !important">
      <div style="width: 80vw; flex-direction: column display: flex; align-items: center">
        <div class="showcase-large">
          <playlist-queue></playlist-queue>
        </div>

        <div style="height: 5vh"></div>
        <div class="description">
          <span class="desc-text">
            The
            <strong>Playlist Queue</strong> allows you to
            <strong>visualize and interact</strong> with the
            <strong>Playlist Controller</strong>.
          </span>
          <div style="height: 2vh"></div>
          <div class="desc-code">&lt;playlist-queue&gt;&lt;/playlist-queue&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined @click="goToExtDemo('microfreak')">watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>

    <!-- PlayButton -->
    <v-row class="ma-0" align="center" justify="center" style="margin-bottom: 10vh !important">
      <div style="width: 80vw; display: flex; align-items: center">
        <div class="showcase">
          <player-play-btn
            eventid="paper-player-fx"
            height="6vw"
            :rounded="rounded"
            outlined
            :color="getColor()"
            :icon_scale="icon_scale/100"
          ></player-play-btn>
        </div>
        <div style="width: 5vw"></div>
        <div class="description">
          <span class="desc-text">
            A simple
            <strong>Play / Pause button</strong> to connect with any player component
          </span>

          <div class="desc-inputs" @mousedown="defaultColor = false">
            <v-switch v-model="rounded" label="Rounded" color="#424242"></v-switch>

            <v-color-picker
              class="ml-auto"
              v-model="color"
              flat
              hide-inputs
              hide-mode-switch
              hide-canvas
              style="background: inherit; flex: 1 0"
            ></v-color-picker>
          </div>
          <div class="desc-inputs">
            <v-slider
              v-model="icon_scale"
              min="10"
              max="120"
              label="Icon Scale"
              color="#424242"
              track-color="#848484"
            ></v-slider>
          </div>
          <div
            class="desc-code"
          >&lt;player-play-btn eventid="paper-player-fx" height="40%" color="{{getColor()}}" :rounded="{{rounded}}" :icon_scale="{{icon_scale/100}}"&gt;&lt;/player-play-btn&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined @click="goToExtDemo('microfreak')">watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>

    <!-- LiveSpectrogram -->
    <v-row class="ma-0" justify="center" style="margin-bottom: 10vh !important">
      <div style="width: 80vw; flex-direction: column display: flex; align-items: center">
        <div class="showcase-large">
          <live-spectrogram :color="getColor()"></live-spectrogram>
        </div>

        <div style="height: 5vh"></div>
        <div class="description">
          <span class="desc-text">
            This
            <strong>Spectrgram</strong> create a visual representation of the spectrum of frequencies.
          </span>
          <div class="description">
            <div class="desc-inputs" @mousedown="defaultColor = false">
              <v-color-picker
                v-model="color"
                flat
                hide-inputs
                hide-mode-switch
                hide-canvas
                style="background: inherit; flex: 1 0"
              ></v-color-picker>
            </div>
          </div>
          <div style="height: 2vh"></div>
          <div
            class="desc-code"
          >&lt;live-spectrogram :color="{{getColor()}}"&gt;&lt;/live-spectrogram&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined @click="goToExtDemo('microfreak')">watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>

    <!-- VolumeControl -->
    <v-row class="ma-0" align="center" justify="center" style="margin-bottom: 10vh !important">
      <div style="width: 80vw; display: flex; align-items: center">
        <div class="showcase">
          <volume-control :dark="dark"></volume-control>
        </div>
        <div style="width: 5vw"></div>
        <div class="description">
          <span class="desc-text">
            A simple
            <strong>Volume slider</strong> to control main output volume
          </span>

          <div class="desc-inputs">
            <v-switch v-model="dark" label="Dark" color="#424242"></v-switch>
          </div>
          <div class="desc-code">&lt;volume-control :dark="{{dark}}"&gt;&lt;/volume-control&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined>watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>

    <!-- TimeButtom -->
    <v-row class="ma-0" align="center" justify="center" style="margin-bottom: 10vh !important">
      <div style="width: 80vw; display: flex; align-items: center">
        <div class="showcase">
          <player-time-btn
            eventid="paper-player-fx"
            :elapsed="radios=='elapsed'"
            :remaining="radios=='remaining'"
            :total="radios=='total'"
          ></player-time-btn>
        </div>
        <div style="width: 5vw"></div>
        <div class="description">
          <span class="desc-text">
            This
            <strong>Clock</strong> can display time related infos about a specific player
          </span>

          <div class="desc-inputs">
            <v-radio-group v-model="radios" row :mandatory="false">
              <v-radio value="elapsed" label="Elapsed" color="#424242"></v-radio>
              <v-radio value="remaining" label="Remaining" color="#424242"></v-radio>
              <v-radio value="total" label="Total" color="#424242"></v-radio>
            </v-radio-group>
          </div>
          <div class="desc-code">&lt;volume-control {{radios}}&gt;&lt;/volume-control&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined>watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>

    <!-- Spectrogram -->
    <v-row class="ma-0" justify="center" style="margin-bottom: 10vh !important">
      <div style="width: 80vw; flex-direction: column display: flex; align-items: center">
        <div class="showcase-large">
          <player-spectrogram eventid="paper-player-fx" height="6vw" :thumb="thumb"></player-spectrogram>
        </div>

        <div style="height: 5vh"></div>
        <div class="description">
          <span class="desc-text">
            This
            <strong>Spectrgram</strong> create a visual representation of the spectrum of frequencies of the full song for the selected player. Also can be used as a
            <strong>progress bar</strong>.
          </span>
          <div class="description">
            <div class="desc-inputs">
              <v-switch v-model="thumb" label="Thumb" color="#424242"></v-switch>
            </div>
          </div>
          <div style="height: 2vh"></div>
          <div
            class="desc-code"
          >&lt;player-spectrogram eventid="paper-player-fx" :thumb="{{thumb}}"&gt;&lt;/player-spectrogram&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined @click="goToExtDemo('microfreak')">watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>

    <!-- Oscilloscope -->
    <v-row class="ma-0" justify="center" style="margin-bottom: 10vh !important">
      <div style="width: 80vw; flex-direction: column display: flex; align-items: center">
        <div class="showcase-large">
          <oscilloscope
            style="width: 95%"
            eventid="paper-player-fx"
            :lineWidth="line_width"
            :refreshDelay="refresh_delay"
            :color="getColor()"
          ></oscilloscope>
        </div>

        <div style="height: 5vh"></div>
        <div class="description">
          <span class="desc-text">
            The
            <strong>Oscilloscope</strong> display the change of the audio signal over time for the given player.
          </span>
          <div style="height: 2vh"></div>
          <div class="description">
            <div class="desc-inputs">
              <v-slider
                v-model="line_width"
                thumb-label
                label="Line Width"
                max="4"
                min="1"
                color="#424242"
                track-color="#848484"
              ></v-slider>
              <div style="width: 2vw"></div>
              <v-slider
                v-model="refresh_delay"
                thumb-label
                label="Refresh Delay"
                max="60"
                min="0"
                color="#424242"
                track-color="#848484"
              ></v-slider>
            </div>
            <div class="desc-inputs" @mousedown="defaultColor = false">
              <v-color-picker
                v-model="color"
                flat
                hide-inputs
                hide-mode-switch
                hide-canvas
                style="background: inherit; flex: 1 0"
              ></v-color-picker>
            </div>
          </div>
          <div style="height: 2vh"></div>
          <div
            class="desc-code"
          >&lt;live-spectrogram :color="{{getColor()}}"&gt;&lt;/live-spectrogram&gt;</div>
          <div style="height: 4vh"></div>
          <div class="desc-btns">
            <v-btn outlined @click="goToExtDoc()">see doc</v-btn>
            <div style="width: 1vw"></div>
            <v-btn outlined @click="goToExtDemo('microfreak')">watch live</v-btn>
          </div>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spectrogram: false,
      show_bottom_controller: true,
      rounded: true,
      icon_scale: 70,
      color: "",
      defaultColor: true,
      dark: false,
      radios: "elapsed",
      thumb: true,
      line_width: undefined,
      refresh_delay: undefined
    };
  },
  methods: {
    getColor() {
      if (this.defaultColor) return "#212121";
      else return this.color.slice(0, 7);
    },

    goToExtDoc() {
      window.open(
        "https://soufriere.arturia.net/it/it-web-marketing/disco-puzzle/blob/master/README.md"
      );
    },
    goToExtDemo(path) {
      window.open("https://tinawng.github.io/#/" + path);
    }
  }
};
</script>

<style scoped>
.view-title {
  padding: 2vw;
  padding-top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border-radius: 42px;
  background: #f5f5f5;
  box-shadow: 5px 5px 10px #dddddd, -5px -5px 10px #ffffff; */
}
.view-title-svg {
  height: 15vw;
}
.view-title-text {
  font-size: 4vw;
  line-height: 4vw;
  letter-spacing: -0.015625em;
  font-weight: 300;
  font-style: italic;
  text-transform: uppercase;
}
.showcase {
  width: 50vh;
  padding: 3vw;

  border-radius: 42px;
  background: #f5f5f5;
  box-shadow: 5px 5px 10px #dddddd, -5px -5px 10px #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
}
.showcase-large {
  width: 100%;
  padding: 3vw;

  border-radius: 30px;
  background: #f5f5f5;
  box-shadow: 5px 5px 10px #dddddd, -5px -5px 10px #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.desc-text {
  font-size: 0.8rem;
  line-height: 1rem;
  letter-spacing: 0.1666666667em;
  font-weight: 400;
  text-transform: uppercase;
}
.desc-inputs {
  display: flex;
  align-items: center;
}
.desc-code {
  padding: 1vh;
  padding-left: 0.7vw;
  border-radius: 10px;
  box-shadow: inset 3px 3px 4px #dddddd, inset -3px -3px 4px #ffffff;

  font-size: 0.625rem;
  line-height: 1rem;
  letter-spacing: 0.1666666667em;
  font-weight: 600;
}
.desc-btns {
  display: flex;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.8s;
}
.slide-enter {
  transform: translateY(100%);
}
.slide-leave-to {
  transform: translateY(100%);
}
</style>