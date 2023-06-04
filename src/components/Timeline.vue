<template>
    <v-parallax src="/S.png" scale=".25">
        <v-sheet height="50px" elevation="12" color="background"
            class="d-flex align-center justify-center flex-wrap text-center mx-auto">
            <h1 class="text-h4 font-weight-black text-highlight">Timeline</h1>
        </v-sheet>
        <v-sheet rounded="rounded-shaped" width="60%" color="background" class='mx-auto mt-4 rounded-shaped' elevation="12">
            <v-timeline line-color="black">
                <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="`black`" size="x-small">
                    <template v-slot:opposite>
                        <v-chip :class="`text-${year.color}'`" size='x-large' color="highlight" label variant="tonal">
                            {{ year.year }}
                        </v-chip>
                    </template>
                    <v-card :class="`font-weight-light`" width="350" color="surface">
                        <v-card-item>
                            <v-card-title u>{{ year.title }}</v-card-title>
                            <v-card-subtitle class="text-primary">{{ year.subtitle }}</v-card-subtitle>
                        </v-card-item>
                        <v-card-text>
                            {{ year.body }}
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-sheet>
    </v-parallax>
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
  

<style scoped></style>