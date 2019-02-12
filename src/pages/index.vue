<template>
<div>
    <v-layout  justify-center>
        <v-flex md8>
            <v-text-field class="mx-4 mt-3" flat label="Search" prepend-inner-icon="search" solo-inverted v-model="search"></v-text-field>
            <movie-item v-for="(movie, index) in movies_search" v-bind:key="movie.title" v-bind:movie="movie" v-on:remove="remove(index)"></movie-item>
        </v-flex>
    </v-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            search: "",
            movies: window.movies,
            items: [
            {
                src: 'https://i.ytimg.com/vi/SsU_ZPul5Hk/maxresdefault.jpg'
            },
            {
                src: 'http://img.over-blog-kiwi.com/1/36/64/60/20150323/ob_23a5c4_illuminatiwatcherdotcom-interstellar-m.jpg'
            }
            ]
        }
    },

    methods: {

    },

    computed: {
        movies_search: function() {
            return this.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase())!=-1);
        }
    }
}
</script>