<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :dot-color="year.color"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${year.color}`"
          v-text="year.year"
        ></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`" v-text="year.title">
        </h2>
        <div v-text="year.body">
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'red',
          year: '2008',
          title: "Military",
          body: " Joined the Marine Corps and began a 5 year tour"
        },
        {
          color: 'brown',
          title: "Military",
          year: '2011',
          body: "Deployed with an MP company providing security support"
        },
        {
          title: "Education",
          color: 'blue',
          year: '2013-2018',
          body: "Started going to school at Gateway Community College, eventually graduating from Quinnipiac University"
        },
        {
          title: "Employment",
          color: "light-green",
          body: 'Was hired with Cigna under one of there Early career development programs',
          year: '2018-present',
        }
      ],
    }),
  }
</script>