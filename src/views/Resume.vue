<template>
  <div id="resume" class="window">
    <div class="container-5g6s">
      <v-row class="top-row">
        <v-col cols="3">
          <v-list-item two-line style="min-height: 0px">
            <v-list-item-content style="padding: 0px">
              <v-list-item-title>
                <span class="text-big text-regular">Fabian Boilay</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="text-small text-thin">Full Stack Developer</span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="3" class="three-line text-small text-light">
          <p>Address</p>
          <div class="divider"></div>
          <div>
            <p>26 av. Albert 1er de Belgique</p>
            <p>38000 Grenoble</p>
            <p>FRANCE</p>
          </div>
        </v-col>
        <v-col cols="3" class="three-line text-small text-light">
          <p>Contact</p>
          <div class="divider"></div>
          <div>
            <p>fabian.boilay@gmail.com</p>
            <p>+33 652 53 68 68</p>
            <a href="https://www.linkedin.com/in/fabian-boilay/">
              <span class="text-small text-light">linkedin.com/in/fabian-boilay/</span>
            </a>
          </div>
        </v-col>
        <v-col cols="3" class="text-right">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-small text-regular font-italic">
                website:
                <a href="#/">
                  <span class="text-small text-regular font-italic">tinawng.github.io</span>
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>

      <div class="spacer"></div>

      <v-row>
        <v-col cols="6" class="px-6">
          <p class="text-thick text-medium text-uppercase">personal statement</p>
          <v-divider class="mt-1 mb-4"></v-divider>
          <div class="text-small text-regular">
            <p
              class="mb-3"
            >Having just completed my engineering studies, I have to work abroad to validate my 5 years of study in my French engineering school.</p>
            <p>
              I always enjoy creating thing to match my specifiq needs.
              I always like to do things on my own, especially things I'm already passionate about.
              I've always loved playing video games with my friends, so I coded my first online video game.
              I've been playing piano for 20 years, so I wrote my own pieces.
              I can listen to music for hours, so I started making my own speakers.
              I think you can begin to see the pattern.
            </p>
            <p>And the same goes for web design: I tend to prefer beeing a front end developer because I like beeing creative & focus on problem solving.</p>
            <p>But being a solo player is not enough, so I play in a band. It enriches me and try to get others better as well. A team is more than what it composed from.</p>
          </div>

          <div class="spacer"></div>

          <p class="text-thick text-medium text-uppercase">work experience</p>
          <v-divider class="mt-1 mb-4"></v-divider>
          <v-row>
            <v-col cols="3">
              <span class="text-xxbig text-black">1</span>
              <span class="ml-n1 text-xbig text-black" style="vertical-align: top">y</span>
            </v-col>
            <v-col class="text-left text-small text-regular">
              <p>September 2019 -- September 2020</p>
              <p class="text-thick">ARTURIA - Apprenticeship</p>
              <p>
                Reworking Arturia website for the 20 years of the company with new technologies like
                <b>Webpack, VueJS, REST API, Nuxt.js</b>, ...
              </p>
              <p>
                Making custom applications for products demonstration, resources publishing, A/B testing,... using
                <b>Electron</b>
              </p>
            </v-col>
          </v-row>
          <v-row class="mt-4">
            <v-col cols="3">
              <span class="text-xxbig text-black">4</span>
              <span class="text-xbig text-black" style="vertical-align: top">m</span>
            </v-col>
            <v-col class="text-left text-small text-regular">
              <p>May 2019 -- August 2019</p>
              <p class="text-thick">ARTURIA - Internship</p>
              <p
                class="text-thin"
              >Arturia is a major company in the field of musical instruments simulation, physical and virtual synthesizers, MIDI controllers and audio interfaces.</p>
              <p>
                <span>Improving the website by creating audio demos highlighting the company know-how using web components (using</span>
                <b>VueJS</b>
                <span>) based on the Web Audio API</span>
              </p>
              <a
                href="https://www.arturia.com/products/software-effects/delays-bundle/delaytape-201"
              >Link to demo (on Arturia website)</a>
            </v-col>
          </v-row>
          <v-row class="mt-4">
            <v-col cols="3">
              <span class="text-xxbig text-black">1</span>
              <span class="ml-n2 text-xbig text-black" style="vertical-align: top">m</span>
            </v-col>
            <v-col class="text-left text-small text-regular">
              <p>August 2017</p>
              <p class="text-thick">SCHAEFFLER GROUP - Seasonal Employment</p>
              <p
                class="text-thin"
              >Schaffler is a company specialized in metallurgy and other mechanical guiding parts such as ball bearings, rails,...</p>
              <p>Operating on machine: cutting, deburring and packaging metal parts</p>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6" class="px-6">
          <p class="text-thick text-medium text-uppercase">education</p>
          <v-divider class="mt-1 mb-4"></v-divider>
          <v-timeline dense class="ml-n4">
            <v-timeline-item color="#525252" fill-dot small>
              <div class="text-small text-regular text-capitalize">
                <p>2017 -- 2020</p>
                <p class="text-thick">engineering degree</p>
                <p>3IL engineering school, limoges</p>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#525252" fill-dot small>
              <div class="text-small text-regular text-capitalize">
                <p>2015 -- 2017</p>
                <p class="text-thick">preparatory classes for engineering school</p>
                <p>alphonse heinrich high school, haguenau</p>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#525252" fill-dot small>
              <div class="text-small text-regular text-capitalize">
                <p>2012 -- 2015</p>
                <p class="text-thick">high school diploma</p>
                <p>ruddloff high school, strasbourg</p>
              </div>
            </v-timeline-item>
          </v-timeline>
          <div class="mt-4 ml-4 text-small text-regular">
            Languages:
            <b>French:</b> native,
            <b>English:</b> TOEIC 945/990
          </div>

          <div class="spacer"></div>

          <p class="text-thick text-medium text-uppercase">tech stacks</p>
          <v-divider class="mt-1 mb-4"></v-divider>
          <div class="d-flex justify-space-around">
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-vuejs</v-icon>
              <span class="text-small text-regular text-uppercase">vuejs</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-material-design</v-icon>
              <span class="text-small text-regular text-uppercase">material design</span>
            </div>
          </div>
          <div class="mt-5 d-flex justify-space-around">
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-language-javascript</v-icon>
              <span class="text-small text-regular text-uppercase">javascript</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-language-html5</v-icon>
              <span class="text-small text-regular text-uppercase">html</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-language-css3</v-icon>
              <span class="text-small text-regular text-uppercase">css</span>
            </div>
          </div>
          <div class="mt-5 d-flex justify-space-around">
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-webpack</v-icon>
              <span class="text-small text-regular text-uppercase">webpack</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-rollupjs</v-icon>
              <span class="text-small text-regular text-uppercase">rollupjs</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-nodejs</v-icon>
              <span class="text-small text-regular text-uppercase">nodejs</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-electron-framework</v-icon>
              <span class="text-small text-regular text-uppercase">electron</span>
            </div>
          </div>
          <div class="mt-5 d-flex justify-space-around">
            <div class="d-flex flex-column align-center justify-center">
              <v-icon>mdi-language-java</v-icon>
              <span class="text-small text-regular text-uppercase">java</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon>mdi-api</v-icon>
              <span class="text-small text-regular text-uppercase">rest api</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon>mdi-database</v-icon>
              <span class="text-small text-regular text-uppercase">SQL</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon>mdi-language-csharp</v-icon>
              <span class="text-small text-regular text-uppercase">c#</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon>mdi-language-php</v-icon>
              <span class="text-small text-regular text-uppercase">php</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="px-6">
          <p class="text-thick text-medium text-uppercase">projects</p>
          <v-divider class="mt-1 mb-4"></v-divider>
          <v-row class="text-small text-regular" v-for="project in projects" :key="project.name">
            <v-col class="cols-1b text-right">
              <b class="text-uppercase">{{project.name}}</b>
            </v-col>
            <v-col>
              <!-- <p>{{project.description}}</p> -->
              <p v-html="project.description"></p>
              <div class="my-2 d-flex align-center text-uppercase">
                <span
                  :class="['mr-7',  {'my-n1': language.icon_large}]"
                  v-for="language in project.languages"
                  :key="language.name"
                >
                  <v-icon :large="language.icon_large">{{language.icon}}</v-icon>
                  {{language.name}}
                </span>
              </div>
              <span v-html="project.link"></span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div class="my-8 d-flex flex-column align-center">
        <div class="aa"></div>
        <span class="text-small text-thin">
          source code of my resume (and the whole website) are available
          <a
            href="https://github.com/tinawng/disco-ball/blob/master/src/views/Resume.vue"
          >here</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        name: "solo disco",
        description:
          "The purpose of this application is to provide quick demonstrations of product features on computers without an Internet connection for locations such as trade shows or stores. During development, it was important to keep in mind that this is probably the first thing potential buyers will see. The application must therefore be pleasant and intuitive to use.",
        languages: [
          { name: "vuejs", icon: "mdi-vuejs" },
          { name: "vuetify", icon: "mdi-vuetify" },
          { name: "webpack", icon: "mdi-webpack" },
          { name: "electron", icon: "mdi-electron-framework" },
          { name: "nodejs", icon: "mdi-nodejs" }
        ],
        link: '<a href="#/solodisco">Link to demo (web version)</a>'
      },
      {
        name: "emerald",
        description:
          "<b>Emerald</b> is a custom made application for validating and uploading resource files in <b>JSON/YAML</b> format to the Arturia database via its main <b>REST API</b>. The goal was to simplify the process of uploading new resources so that the people who create them can also publish them by themselves. My work was based on an already existing structure, so I had to understand and reverse engineer an existing code written by someone else.",
        languages: [
          { name: "vuejs", icon: "mdi-vuejs" },
          { name: "vuetify", icon: "mdi-vuetify" },
          { name: "rest api", icon: "mdi-api" },
          { name: "webpack", icon: "mdi-webpack" },
          { name: "electron", icon: "mdi-electron-framework" },
          { name: "nodejs", icon: "mdi-nodejs" }
        ],
        link:
          '<a href="https://github.com/tinawng/disco-puzzle">Link to GitHub repository</a>'
      },
      {
        name: "disco records",
        description:
          "This application responds to a request from Arturia's DSP (Digital Signal Processing) department. It was requested to be able to compare different audio samples, to note and comment on them within an application or website so that anyone could use it easily. All datas are then centralized in a <b>Firebase</b> database in order to analyze user feedbacks later on.",
        languages: [
          { name: "vuejs", icon: "mdi-vuejs" },
          { name: "vuetify", icon: "mdi-vuetify" },
          { name: "firebase", icon: "mdi-firebase" },
          { name: "webpack", icon: "mdi-webpack" },
          { name: "electron", icon: "mdi-electron-framework" },
          { name: "nodejs", icon: "mdi-nodejs" }
        ],
        link:
          '<a href="https://github.com/tinawng/disco-records">Link to GitHub repository</a>'
      },
      {
        name: "disco puzzle",
        description:
          "<b>Disco Puzzle</b> is a library of audio related components developed for the Arturia's website. This set of components is available as a <b>Vue</b> plugin wrapped inside a <b>NPM</b> package using <b>Rollup</b>",
        languages: [
          { name: "vuejs", icon: "mdi-vuejs" },
          { name: "javascript", icon: "mdi-language-javascript" },
          { name: "rollup", icon: "mdi-rollupjs" },
          { name: "npm", icon: "mdi-npm", icon_large: true }
        ],
        link: '<a href="#/dancefloor">Link to demo</a>'
      },
      {
        name: "matrixbrute & microfreak",
        description:
          "These are two demonstration pages of the audio components from <b>Disco Puzzle</b> and visual components from <b>Vuetify</b>.",
        languages: [
          { name: "vuejs", icon: "mdi-vuejs" },
          { name: "vuetify", icon: "mdi-vuetify" },
          { name: "sass", icon: "mdi-sass" },
          { name: "webpack", icon: "mdi-webpack" }
        ],
        link:
          '<a href="#/brute">Link to MatrixBrute page</a> <a class="ml-8" href="#/microfreak">Link to MicroFreak page</a>'
      }
    ]
  })
};
</script>

<style lang="scss">
.window {
  width: 100vw;
  min-height: 100vh;

  padding-top: 48px;
  padding-left: 3vw;
  padding-right: 3vw;

  background: #f0f0f0;
}
.container-5g6s {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  .spacer {
    height: 60px;
  }

  .top-row {
    .three-line {
      padding: 1rem;
      display: flex;
      line-height: 1;

      .divider {
        height: 90%;

        margin-top: 0.1rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;

        border: solid thin #52525233;
      }
    }
  }
  .aa {
    width: 120px;
    margin-bottom: 0.8rem;
    border: solid thin #52525233;
  }
  .cols-1b {
    flex: 0 0 12%;
    min-width: 12%;
  }

  .text-xxbig {
    font-size: 8rem;
    line-height: 0.8;
    font-weight: 300;
  }
  .text-xbig {
    font-size: 4rem;
    line-height: 0.6;
    font-weight: 300;
  }
  .text-big {
    font-size: 1.2rem;
    letter-spacing: 0.02rem;
  }
  .text-medium {
    font-size: 0.9rem;
  }
  .text-small {
    font-size: 0.8rem;
    font-weight: 400;
  }
  .text-black {
    color: #525252;
  }
  .text-thick {
    color: #525252ee;
    font-weight: 600;
  }
  .text-regular {
    color: #525252dd;
  }
  .text-thin {
    color: #52525288;
  }
  .text-light {
    color: #52525255;
  }

  a {
    color: #52525288 !important;
    font-size: 0.75rem;
    font-weight: 600;
  }
  p {
    margin: 0 !important;
  }

  .theme--light.v-divider {
    border-color: #525252dd;
  }
  .v-timeline-item__dot--small {
    height: 12px !important;
    left: calc(50% - 12px) !important;
    width: 12px !important;
  }
}
</style>