<template>
  <v-timeline class="fill-height justify-center align-center">
    <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="large">
      <template v-slot:opposite>
        <v-chip :class="` text-${year.color}'`" size='x-large' label variant="elevated">
          {{ year.year }}
        </v-chip>
      </template>
      <div>
        <!-- TODO: implement card reveal https://vuetifyjs.com/en/components/cards/#card-reveal -->
        <v-card :class="`mt-16 font-weight-light`" width="350"
        color="primary">
          <v-card-item>
            <v-card-title>{{year.title }}</v-card-title>
            <v-card-subtitle>This is a subtitle</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            {{year.body}}
          </v-card-text>
        </v-card>
      </div>
    </v-timeline-item>
  </v-timeline>


</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: 'light-green',
        title: "Military",
        year: '2008',
        body: " Joined the Marine Corps and began a 5 year tour"
      },
      {
        color: 'light-green',
        title: "Military",
        year: '2011',
        body: "Deployed with an MP company providing security support"
      },
      {
        color: 'light-green',
        title: "Education",
        year: '2013-2018',
        body: "Started going to school at Gateway Community College, eventually graduating from Quinnipiac University"
      },
      {
        color: "light-green",
        title: "Employment",
        year: '2018-present',
        body: 'Was hired with Cigna under one of there Early career development programs',
      }
    ],
  }),
}
</script>
