<template>
    <div>
        <v-layout md8 justify-center>
            <v-flex md8 mt-3>
                <h1>Nouveau film</h1>
                <v-flex xs12 sm5>
                    <v-text-field label="Titre" v-model="movie_to_add.title"></v-text-field>
                </v-flex>
                <v-flex xs3 sm2>
                    <v-text-field label="Réalisé en" v-model="movie_to_add.year"></v-text-field>
                </v-flex>
                <v-flex xs6 sm4>
                    <v-text-field label="Genre" v-model="movie_to_add.type"></v-text-field>
                </v-flex>
                <v-flex xs5 sm2>
                    <v-text-field label="Langue disponible" v-model="movie_to_add.language"></v-text-field>
                </v-flex>
                <v-flex xs10 sm4>
                    <h2>Réalisateur</h2>
                    <v-text-field label="Réalisateur" v-model="movie_to_add.director.name"></v-text-field>
                </v-flex>
                <v-flex xs5 sm2>
                    <v-text-field label="Né(e) le" v-model="movie_to_add.director.birthdate"></v-text-field>
                </v-flex>
                <v-flex xs10 sm4>
                    <v-text-field label="Nationalité" v-model="movie_to_add.director.nationality"></v-text-field>
                </v-flex>
            </v-flex>
        </v-layout>
        <v-layout justify-center>
            <v-flex md8>
                <v-img v-bind:src="movie_to_add.imgUrl">
                </v-img>
                <v-flex xs12>
                    <v-text-field label="Adresse de l'image" v-model="movie_to_add.imgUrl"></v-text-field>
                </v-flex>
            </v-flex>
        </v-layout>
        <v-layout md8 justify-center>
            <v-flex md8 mt-4>
                <v-textarea box name="input-7-4" label="Synopsis" v-model="movie_to_add.synopsys"></v-textarea>
                 <v-layout justify-end>
                    <v-btn offset-md2 v-on:click="newmovie">Sauvegarder</v-btn>
                </v-layout>
            </v-flex>

        </v-layout>
    </div>

</template>
<script>
export default {
    data: function() {
        return {
            movie_to_add: {
                director: {}
            },
            search: "",
            movies: window.movies
        }
    },

    methods: {
        newmovie: function() {
            this.movie_to_add.id = this.movies.length;
            this.movies.push(this.movie_to_add);
            this.movie_to_add = {};
            this.$router.push({path: '/'});
        }
    },
}
</script>