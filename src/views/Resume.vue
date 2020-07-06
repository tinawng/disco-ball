<template>
  <div class="window">
    <div class="container-5gs6">
      <v-row class="top-row">
        <v-col cols="3">
          <v-list-item two-line style="min-height: 0px">
            <v-list-item-content style="padding: 0px">
              <v-list-item-title>
                <span class="text-big text-regular">Fabian Boilay</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <span class="text-small text-thin">Full Stack Developper</span>
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
            <p>linkedin.com/in/fabian-boilay/</p>
          </div>
        </v-col>
        <v-col cols="3" class="text-right">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                class="text-small text-regular font-italic"
              >website: tinawng.github.io</v-list-item-title>
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
            <p>Lorem ipsum ipsumipsumipsumipsumipsumipsuipsumipsumipsumipsumipsumipsumipsumipsumipsum</p>
            <p>Lorem ipsum ipsumipsumipsumipsumipsumipsumipsumipsumipsumipsum</p>
            <p>Lorem ipsum ipsumipsumipsumipsumipsumipsumipsumipsumipsumipsum</p>
            <p>Lorem ipsum ipsumipsumipsumipsumipsumipsumipsumipsumipsumipsum</p>
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
              <p>September 2018 -- September 2019</p>
              <p class="text-thick">Arturia - Workstudy</p>
              <p>Operating on machine: cutting and deburring of metal parts & packaging</p>
              <a href="#/solodisco">Link to demo (SoloDisco)</a>
              <a class="ml-2" href="#/brute">Link to demo (Brute)</a>
              <a class="ml-2" href="#/microfreak">Link to demo (MicroFreak)</a>
            </v-col>
          </v-row>
          <v-row class="mt-4">
            <v-col cols="3">
              <span class="text-xxbig text-black">4</span>
              <span class="text-xbig text-black" style="vertical-align: top">m</span>
            </v-col>
            <v-col class="text-left text-small text-regular">
              <p>May -- August 2019</p>
              <p class="text-thick">Arturia - Intership</p>
              <p>
                <span>Improving the website by creating audio demos highlighting the company knowledges using web components (</span>
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
              <p>Operating on machine: cutting and deburring of metal parts & packaging</p>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6" class="px-6">
          <p class="text-thick text-medium text-uppercase">education</p>
          <v-divider class="mt-1 mb-4"></v-divider>
          <v-timeline dense class="ml-n4">
            <v-timeline-item color="#525252" fill-dot small>
              <div class="text-small text-regular text-capitalize">
                <p>2017 -- 2019</p>
                <p class="text-thick">engineering degree</p>
                <p>3IL engineering school, limoges</p>
              </div>
            </v-timeline-item>
            <v-timeline-item color="#525252" fill-dot small>
              <div class="text-small text-regular text-capitalize">
                <p>2015 -- 2019</p>
                <p class="text-thick">preparatory classes</p>
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

          <div class="spacer"></div>

          <p class="text-thick text-medium text-uppercase">languages skills</p>
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
              <v-icon x-large>mdi-nodejs</v-icon>
              <span class="text-small text-regular text-uppercase">nodejs</span>
            </div>
            <div class="d-flex flex-column align-center justify-center">
              <v-icon x-large>mdi-electron-framework</v-icon>
              <span class="text-small text-regular text-uppercase">electron</span>
            </div>
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
              <v-icon>mdi-language-java</v-icon>
              <span class="text-small text-regular text-uppercase">java</span>
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.window {
  width: 100vw;
  min-height: 100vh;

  padding-top: 48px;
  padding-left: 3vw;
  padding-right: 3vw;

  background: #f0f0f0;
}
.container-5gs6 {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}

.spacer {
  height: 80px;
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

.v-application p {
  margin: 0;
}
.theme--light.v-divider {
  border-color: #525252dd;
}
.v-timeline-item__dot--small {
  height: 12px;
  left: calc(50% - 12px);
  width: 12px;
}
</style>