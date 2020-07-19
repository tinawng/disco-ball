<template>
  <v-container id="hero" tag="section" class="px-0">
    <v-responsive class="overflow-visible" min-height="50vh">
      <v-row class="fill-height mx-0" align="center" align-content="center" justify="space-around">
        <v-col cols="12" md="6">
          <v-img class="mx-auto" width="50%" :src="'./assets/images/overview/disco-dance.svg'" />
        </v-col>
        <v-col cols="auto">
          <h1
            class="font-weight-bold"
            :class="[$vuetify.breakpoint.smAndDown ? 'display-2 text-center' : 'display-4']"
          >ARTURIA</h1>

          <div
            class="grey--text"
            :class="[$vuetify.breakpoint.smAndDown ? 'headline' : 'display-1']"
          >
            <em>~Disco~</em>
            applications
          </div>
        </v-col>
        <v-col
            class="mt-12"
            cols="12"
          >
            <v-card class="pa-10 v-sheet" elevation="24" >
              <v-row class="text-center">
                <v-col
                  v-for="(highlight, i) in highlights"
                  :key="i"
                  cols="12"
                  md="4"
                >
                  <v-img
                    :src="'./assets/images/overview/' + highlight.icon + '.svg'"
                    class="mb-4"
                    contain
                    max-height="200"
                    width="100%"
                  />

                  <h2
                    class="headline font-weight-bold mb-6"
                    v-text="highlight.title"
                  />

                  <v-responsive
                    max-width="256"
                    class="grey--text body-1 mx-auto"
                    v-text="highlight.text"
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    highlights: [
      {
        icon: "electron-framework",
        title: "Electron",
        text:
          "Cross-platform features and all the benefits of Node.js"
      },
      {
        icon: "vuejs",
        title: "Vue",
        text:
          "Flexibility and modularity using Vue, Vuex and Vue Router"
      },
      {
        icon: "vuetify",
        title: "Vuetify",
        text:
          "A Vue UI Library with beautifully Material Components."
      }
    ]
  })
};
</script>

<style scoped>
</style>