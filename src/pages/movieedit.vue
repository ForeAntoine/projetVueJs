<template>
    <div>
        <v-layout md8 justify-center>
            <v-flex md8 mt-3>
                <h1>Edition film</h1>
                <v-flex xs12 sm5>
                    <v-text-field label="Titre" v-model="movie.title"></v-text-field>
                </v-flex>
                <v-flex xs3 sm1>
                    <v-text-field label="Réalisé en" v-model="movie.year"></v-text-field>
                </v-flex>
                <v-flex xs6 sm4>
                    <v-text-field label="Genre" v-model="movie.type"></v-text-field>
                </v-flex>
                <v-flex xs5 sm2>
                    <v-text-field label="Langue disponible" v-model="movie.language"></v-text-field>
                </v-flex>
                <v-flex xs10 sm4>
                    <h2>Réalisateur</h2>
                    <v-text-field label="Réalisateur" v-model="movie.director.name"></v-text-field>
                </v-flex>
                <v-flex xs5 sm2>
                    <v-text-field label="Né(e) le" v-model="movie.director.birthdate"></v-text-field>
                </v-flex>
                <v-flex xs10 sm4>
                    <v-text-field label="Nationalité" v-model="movie.director.nationality"></v-text-field>
                </v-flex>
            </v-flex>
        </v-layout>
        <v-layout justify-center>
            <v-flex md8>
                <v-img v-bind:src="movie.imgUrl">
                </v-img>
                <v-flex xs12>
                    <v-text-field label="Adresse de l'image" v-model="movie.imgUrl"></v-text-field>
                </v-flex>
            </v-flex>
        </v-layout>
        <v-layout md8 justify-center>
            <v-flex md8 mt-4>
                <v-textarea box name="input-7-4" label="Synopsis" v-model="movie.synopsys"></v-textarea>
                 <v-layout justify-end>
                    <v-btn offset-md2 v-on:click="save">Sauvegarder</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>

</template>
<script>
export default {
    data: function() {
        return {
            movies: window.movies
        }
    },
    methods: {
        save: function() {
            this.$router.push({ path: `/` })
        }
    },
    computed: {
        movie: function(){
            return this.movies[this.$route.params.id];
        }
    }
}
</script>