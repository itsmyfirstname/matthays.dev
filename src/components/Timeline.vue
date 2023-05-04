<template>
    <v-sheet color="background" class="fill-height justify-center align-center">
    <v-timeline line-color="secondary">
        <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="x-small">
            <template v-slot:opposite>
                <v-chip :class="`text-${year.color}'`" size='x-large' color="primary" label variant="tonal">
                    {{ year.year }}
                </v-chip>
            </template>
            <div>
                <!-- TODO: implement card reveal https://vuetifyjs.com/en/components/cards/#card-reveal -->
                <v-card :class="`font-weight-light`" width="350" color="secondary">
                    <v-card-item>
                        <v-card-title>{{ year.title }}</v-card-title>
                        <v-card-subtitle>{{ year.subtitle}}</v-card-subtitle>
                    </v-card-item>
                    <v-card-text>
                        {{ year.body }}
                    </v-card-text>
                </v-card>
            </div>
        </v-timeline-item>
    </v-timeline>
    </v-sheet>
</template>
  
<script scoped>
export default {
    data: () => ({
        years: [
            {
                color: 'surface',
                title: "USMC",
                subtitle: "Training",
                year: '2008',
                body: "Joined the Marine Corps and was assigned a billet in Communications"
            },
            {
                color: 'surface',
                title: "USMC",
                subtitle: "Deployment",
                year: '2011',
                body: "Was attached to an MP unit, and stationed in southern Afghanistan for approx 1 year"
            },
            {
                color: 'surface',
                title: "Gateway Community College",
                subtitle: "Education",
                year: '2013',
                body: "Began to salvage my academic reputation"
            },
            {
                color: 'surface',
                title: "Quinnipiac University",
                subtitle: "Education",
                year: '2014',
                body: "Majored in Computer Information Systems"
            },
            {
                color: "surface",
                title: "Cigna",
                subtitle: "Employment",
                year: '2018',
                body: 'Was hired by Cigna to participate in an Early career development program',
            },
            {
                color: "surface",
                title: "Cigna",
                subtitle: "Employment",
                year: '2020 - Present',
                body: 'Was hired by Cigna fulltime',
            }
        ],
    }),
}
</script>
  

<style scoped>
.hero {
  background: url('/timeline.jpg');
  background-repeat: repeat;
  background-size: cover;
  height: fit-content;
}
</style>