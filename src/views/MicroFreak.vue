<template>
  <!-- https://www.instagram.com/p/B_BA4KIloN0/ -->
  
  <div style="color: #424242">
    <!-- HOME PAGE -->
    <v-row id="home" class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="view-title">
          <img class="view-title-logo" :src="'./assets/images/arturia-logo.svg'" />
          <span class="view-title-text">arturia</span>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
    <v-row class="ma-0" style="height: 80vh">
      <v-col cols="7" class="home-left-col">
        <p class="home-left-col-title ma-0">EXPERIMENTAL HYBRID SYNTH.</p>
        <div class="voice-left-col-undeline"></div>
        <p
          class="home-left-col-text"
          style="margin-top: 3.5vh"
        >A synthesizer like no other, MicroFreak is a peculiar, exceptional instrument that rewards the curious musician. It blends wavetable and digital oscillators with analog filters. It features a unique poly-aftertouch flat keyboard. It adds controlled randomness to sequences. This isn’t a revolution, it’s a mutiny.</p>
        <p
          class="home-left-col-text"
        >It might sound a bit wild and crazy, but MicroFreak is easy to understand and quick to master. Every feature is clearly marked and simple to access and control, letting MicroFreak enhances your creativity rather than standing in its way. On this page, we’ll cover a few of the things that make MicroFreak a truly unique specimen.</p>
      </v-col>
      <v-col
        cols="5"
        style="background: #FD8E4B; display: flex; align-items: center; justify-content: center"
      >
        <img
          :src="'./assets/images/microfreak/microfreak.jpg'"
          width="70%"
          style="transform: rotate(90deg);"
        />
      </v-col>
    </v-row>
    <v-row class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="buttons-left-col">
          <div
            v-ripple
            class="buttons-left-col-text"
            style="margin-right: 8.5vw"
            @click="$vuetify.goTo('#voice', {
              duration: 1618,
              offset: 0,
              easing: 'easeInOutQuint',
            })"
          >
            <span>Hearing voices</span>
            <div class="buttons-left-col-underline"></div>
          </div>
          <div
            v-ripple
            class="buttons-left-col-text"
            @click="$vuetify.goTo('#sounds', {
              duration: 2427,
              offset: 0,
              easing: 'easeInOutQuint',
            })"
          >
            <span>Sound Corner</span>
            <div class="buttons-left-col-underline"></div>
          </div>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
    <!-- VOICE PAGE -->
    <v-row id="voice" class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="view-title">
          <img class="view-title-logo" :src="'./assets/images/arturia-logo.svg'" />
          <span class="view-title-text">
            microfreak
            <span class="view-title-subtext">• voices</span>
          </span>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
    <v-row class="ma-0" style="height: 40vh">
      <v-col cols="7" class="voices-left-col">
        <p class="voices-left-col-title">SuperWave.</p>
        <div class="voice-left-col-undeline"></div>
        <p
          class="overline voices-left-col-desc"
        >Precisely detuned saw, square, sine, or triangle waves let you create the fattest synth sounds around. Perfect for Trance and lush dreamy pads.</p>

        <div class="voices-left-col-ply">
          <player
            eventid="player-super"
            :src="'./assets/audios/microfreak/SuperWaveOSC.mp3'"
            title
            color="#FD8E4B"
          ></player>
          <player-play-btn eventid="player-super" height="100%" rounded style="margin-right: 2rem"></player-play-btn>
          <player-spectrogram eventid="player-super"></player-spectrogram>
        </div>
      </v-col>
      <v-col
        cols="5"
        style="padding-top: 8vh; background: #FD8E4B; display: flex; align-items: center; justify-content: center"
      >
        <oscilloscope
          eventid="player-super"
          :refreshDelay="25"
          :lineWidth="5"
          style="height: 60%; width: 80%"
        ></oscilloscope>
      </v-col>
    </v-row>
    <v-row class="ma-0" style="height: 40vh">
      <v-col cols="7" class="voices-left-col">
        <p class="voices-left-col-title">Basic Waves.</p>
        <div class="voice-left-col-undeline"></div>
        <p
          class="overline voices-left-col-desc"
        >This oscillator emulates two basic waveforms: the square and the sawtooth. A square wave contains only odd harmonics, and a sawtooth only even harmonics, both having their own unique character.</p>
        <div class="voices-left-col-ply">
          <player
            eventid="player-basic"
            :src="'./assets/audios/microfreak/BasicWavesOSC.mp3'"
            title
            color="#FD8E4B"
          ></player>
          <player-play-btn eventid="player-basic" height="100%" rounded style="margin-right: 2rem"></player-play-btn>
          <player-spectrogram eventid="player-basic" :thumb="true"></player-spectrogram>
        </div>
      </v-col>
      <v-col
        cols="5"
        style="padding-top: -5vh; background: #FD8E4B; display: flex; align-items: center; justify-content: center"
      >
        <oscilloscope
          eventid="player-basic"
          :refreshDelay="64"
          :lineWidth="5"
          style="height: 60%; width: 80%"
        ></oscilloscope>
      </v-col>
    </v-row>
    <v-row class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="buttons-left-col">
          <div
            v-ripple
            class="buttons-left-col-text"
            style="margin-right: 8.5vw"
            @click="$vuetify.goTo('#voice-2', {
              duration: 1618,
              offset: 0,
              easing: 'easeInOutQuint',
            })"
          >
            <span>2 more voices</span>
            <div class="buttons-left-col-underline"></div>
          </div>
          <div
            v-ripple
            class="buttons-left-col-text"
            @click="$vuetify.goTo('#sounds', {
              duration: 2427,
              offset: 0,
              easing: 'easeInOutQuint',
            })"
          >
            <span>Sound Corner</span>
            <div class="buttons-left-col-underline"></div>
          </div>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
    <!-- VOICE PAGE -->
    <v-row id="voice-2" class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="view-title">
          <img class="view-title-logo" :src="'./assets/images/arturia-logo.svg'" />
          <span class="view-title-text">
            microfreak
            <span class="view-title-subtext">• voices</span>
          </span>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
    <v-row class="ma-0" style="height: 40vh">
      <v-col cols="7" class="voices-left-col">
        <p class="voices-left-col-title">Harmonics.</p>
        <div class="voice-left-col-undeline"></div>
        <p
          class="overline voices-left-col-desc"
        >Synthesize your sound from 32 sine waves by modulating their volume. The clue is in the name, it creates harmonically rich, vibrant sounds which can be shaped with the filter.</p>

        <div class="voices-left-col-ply">
          <player
            eventid="player-harmo"
            :src="'./assets/audios/microfreak/HarmoOSC.mp3'"
            title
            color="#FD8E4B"
          ></player>
          <player-play-btn eventid="player-harmo" height="100%" rounded style="margin-right: 2rem"></player-play-btn>
          <player-spectrogram eventid="player-harmo" :thumb="true"></player-spectrogram>
        </div>
      </v-col>
      <v-col
        cols="5"
        style="padding-top: 8vh; background: #FD8E4B; display: flex; align-items: center; justify-content: center"
      >
        <oscilloscope
          eventid="player-harmo"
          :refreshDelay="60"
          :lineWidth="5"
          style="height: 60%; width: 80%"
        ></oscilloscope>
      </v-col>
    </v-row>
    <v-row class="ma-0" style="height: 40vh">
      <v-col cols="7" class="voices-left-col">
        <p class="voices-left-col-title">Wavetables.</p>
        <div class="voice-left-col-undeline"></div>
        <p
          class="overline voices-left-col-desc"
        >Scan through waveform snapshots to find new, unusual, and evolving sounds. It contains 16 wavetables to explore, with room for more in the future.</p>
        <div class="voices-left-col-ply">
          <player
            eventid="player-tables"
            :src="'./assets/audios/microfreak/WavetableOSC.mp3'"
            title
            color="#FD8E4B"
          ></player>
          <player-play-btn eventid="player-tables" height="100%" rounded style="margin-right: 2rem"></player-play-btn>
          <player-spectrogram eventid="player-tables" :thumb="true"></player-spectrogram>
        </div>
      </v-col>
      <v-col
        cols="5"
        style="padding-top: -5vh; background: #FD8E4B; display: flex; align-items: center; justify-content: center"
      >
        <oscilloscope
          eventid="player-tables"
          :refreshDelay="55"
          :lineWidth="5"
          style="height: 60%; width: 80%"
        ></oscilloscope>
      </v-col>
    </v-row>
    <v-row class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="buttons-left-col">
          <div
            v-ripple
            class="buttons-left-col-text"
            style="margin-right: 8.5vw"
            @click="$vuetify.goTo('#voice-3', {
              duration: 1618,
              offset: 0,
              easing: 'easeInOutQuint',
            })"
          >
            <span>2 more voices</span>
            <div class="buttons-left-col-underline"></div>
          </div>
          <div
            v-ripple
            class="buttons-left-col-text"
            @click="$vuetify.goTo('#sounds', {
              duration: 1618,
              offset: 0,
              easing: 'easeInOutQuint',
            })"
          >
            <span>Sound Corner</span>
            <div class="buttons-left-col-underline"></div>
          </div>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
    <!-- VOICE PAGE -->
    <v-row id="voice-3" class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="view-title">
          <img class="view-title-logo" :src="'./assets/images/arturia-logo.svg'" />
          <span class="view-title-text">
            microfreak
            <span class="view-title-subtext">• voices</span>
          </span>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
    <v-row class="ma-0" style="height: 40vh">
      <v-col cols="7" class="voices-left-col">
        <p class="voices-left-col-title">NOISE.</p>
        <div class="voice-left-col-undeline"></div>
        <p
          class="overline voices-left-col-desc"
        >Morph between particle noise, white noise, and a metallic noise that’s reminiscent of a synth cymbal. A great basus for quirky drum and percussion sounds.</p>

        <div class="voices-left-col-ply">
          <player
            eventid="player-noise"
            :src="'./assets/audios/microfreak/NoiseOSC.mp3'"
            title
            color="#FD8E4B"
          ></player>
          <player-play-btn eventid="player-noise" height="100%" rounded style="margin-right: 2rem"></player-play-btn>
          <player-spectrogram eventid="player-noise" :thumb="true"></player-spectrogram>
        </div>
      </v-col>
      <v-col
        cols="5"
        style="padding-top: 8vh; background: #FD8E4B; display: flex; align-items: center; justify-content: center"
      >
        <oscilloscope eventid="player-noise" :lineWidth="5" style="height: 60%; width: 80%"></oscilloscope>
      </v-col>
    </v-row>
    <v-row class="ma-0" style="height: 40vh">
      <v-col cols="7" class="voices-left-col">
        <p class="voices-left-col-title">Karplus Strong.</p>
        <div class="voice-left-col-undeline"></div>
        <p
          class="overline voices-left-col-desc"
        >A much-loved synth method using physical modelling to recreate the sound of string instruments, from soft pizzicato to screeching, zingy chords.</p>
        <div class="voices-left-col-ply">
          <player
            eventid="player-karplus"
            :src="'./assets/audios/microfreak/KarplusStrongOSC.mp3'"
            title
            color="#FD8E4B"
          ></player>
          <player-play-btn
            eventid="player-karplus"
            height="100%"
            rounded
            style="margin-right: 2rem"
          ></player-play-btn>
          <player-spectrogram eventid="player-karplus" :thumb="true"></player-spectrogram>
        </div>
      </v-col>
      <v-col
        cols="5"
        style="padding-top: -5vh; background: #FD8E4B; display: flex; align-items: center; justify-content: center"
      >
        <oscilloscope
          eventid="player-karplus"
          :refreshDelay="50"
          :lineWidth="5"
          style="height: 60%; width: 80%"
        ></oscilloscope>
      </v-col>
    </v-row>
    <v-row class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="buttons-left-col">
          <div
            v-ripple
            class="buttons-left-col-text"
            style="margin-right: 8.5vw"
            @click="$vuetify.goTo('#home', {
              duration: 1618,
              offset: 0,
              easing: 'easeInOutQuint',
            })"
          >
            <span>go back home</span>
            <div class="buttons-left-col-underline"></div>
          </div>
          <div
            v-ripple
            class="buttons-left-col-text"
            @click="$vuetify.goTo('#sounds', {
              duration: 1618,
              offset: 0,
              easing: 'easeInOutQuint',
            })"
          >
            <span>Sound Corner</span>
            <div class="buttons-left-col-underline"></div>
          </div>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
    <!-- SOUNDS PLAGE -->
    <v-row id="sounds" class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="view-title">
          <img class="view-title-logo" :src="'./assets/images/arturia-logo.svg'" />
          <span class="view-title-text">
            microfreak
            <span class="view-title-subtext">• sound corner</span>
          </span>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
    <v-row class="ma-0" style="height: 80vh">
      <v-col cols="7" class="pa-0" style="margin-top: 7vh">
        <!-- <store-test></store-test> -->
        <playlist-controller
          class="mx-auto"
          :src="['./assets/audios/microfreak/Ambient_90__Jean-Michel_Blanchet.mp3',
          './assets/audios/microfreak/Bontempi__Simon_Gallifet.mp3',
          './assets/audios/microfreak/Mr_Robot__Simon_Gallifet.mp3',
          './assets/audios/microfreak/Myosis__Simon_Gallifet.mp3',
          './assets/audios/microfreak/Scello__Jean-Baptiste_Arthus.mp3',
          './assets/audios/microfreak/Tek_147__Jean-Michel_Blanchet.mp3',
          './assets/audios/microfreak/BASSES.mp3',
          './assets/audios/microfreak/SEQUENCES.mp3',
          './assets/audios/microfreak/SFX.mp3',
          './assets/audios/microfreak/LEADS.mp3',
          './assets/audios/microfreak/KEYS.mp3',
          './assets/audios/microfreak/PADS.mp3'
          ]"
          height="10vh"
          width="80%"
        ></playlist-controller>
        <playlist-queue class="mt-8 mx-auto" style="height: 40vh; width: 80%"></playlist-queue>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B; display:flex; align-items: center">
        <live-spectrogram height="90%" vertical></live-spectrogram>
      </v-col>
    </v-row>
    <v-row class="ma-0" style="height: 10vh">
      <v-col cols="7" class="pa-0">
        <div class="buttons-left-col">
          <div
            v-ripple
            class="buttons-left-col-text"
            style="margin-right: 8.5vw"
            @click="$vuetify.goTo('#home', {
              duration: 1618,
              offset: 0,
              easing: 'easeInOutQuint',
            })"
          >
            <span>go back home</span>
            <div class="buttons-left-col-underline"></div>
          </div>
        </div>
      </v-col>
      <v-col cols="5" style="background: #FD8E4B"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delay: 20
    };
  }
};
</script>

<style scoped>
.view-title {
  padding: 2vw;
  display: flex;
  align-items: center;
}
.view-title-logo {
  height: 2.65vh;
}
.view-title-text {
  margin-left: 0.45vw;
  font-size: 1.85vh;
  font-weight: 900;
  line-height: 2rem;
  text-transform: uppercase;
}
.view-title-subtext {
  font-weight: 400 !important;
}

.home-left-col {
  margin-top: 6vh;
  padding-top: 8vh;
  padding-left: 5vw;
  padding-right: 5vw;
}
.home-left-col-title {
  font-size: 7.5vh;
  line-height: 7.5vh;
  font-weight: 300;
  letter-spacing: -0.015625em;
}
.home-left-col-text {
  font-size: 1.5vh !important;
  line-height: 200%;
  font-weight: 400;
  letter-spacing: 0.1666666667em !important;
  text-transform: uppercase;
}

.buttons-left-col {
  padding-left: 2vw;
  display: flex;
  align-items: center;
}
.buttons-left-col-text {
  user-select: none;
  font-size: 1.85vh;
  line-height: 2.5vh;
  font-weight: 300;
  text-transform: uppercase;
}
.buttons-left-col-underline {
  height: 0.2vh;
  width: 12.5vw;
  background: #fd8e4b;
}

.voices-left-col {
  margin-top: 5vh;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 7.5vw;
  padding-right: 5vw;
}
.voices-left-col-title {
  margin: 0;
  font-size: 7.5vh;
  font-weight: 300;
  line-height: 7.25vh; /* 6rem */
  letter-spacing: -0.015625em !important;
}
.voice-left-col-undeline {
  height: 0.9vh;
  width: 8.5vw;
  background: #fd8e4b;
}
.voices-left-col-desc {
  margin-top: 2.5vh;
  font-size: 1.5vh !important;
  line-height: 200%;
}
.voices-left-col-ply {
  margin-top: 2vh;
  height: 5.5vh;
  display: flex;
}
</style>