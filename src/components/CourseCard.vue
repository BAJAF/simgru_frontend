<template>
    <div class="card_c">
        <v-card
        :title="title"
        :subtitle="subtitle"
        variant="tonal"
        >
            <v-card-actions>
                <v-btn @click="btnHandler">Visitar en Classroom</v-btn>
                <v-btn>Ver información del curso</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>

export default {
    name: 'CourseCard',
    props: [
        'title',
        'subtitle',
        'text',
        'link'
    ],
    methods: {
        btnHandler(){
            window.open(this.link)
        },
    }
}

</script>

<style>

.card_c {
    width: 40%;
    margin: auto;
    padding: 10px;
}
</style>