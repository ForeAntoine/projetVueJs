<template>
    <li class="mb-4">
      <v-flex xs12>
        <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="mx-auto"
      width="344"
      color="blue-grey darken-2"
      v-on:click="showdetails"
    >
      <v-img
        :aspect-ratio="16/9"
        v-bind:src="movie.imgUrl"
      ></v-img>
      <v-card-title>
        <div>
          <span class="headline">{{movie.title}}</span>
          <div class="d-flex">
            <v-rating
             v-model="movie.rating"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="ml-2 grey--text text--darken-2">
              <span>Réalisateur : {{movie.director.name}}</span>
              <span>({{movie.year}})</span>
            </div>
          </div>
        </div>
      </v-card-title>
    </v-card>
  </v-hover>
      </v-flex>
    </li>
</template>

<script>
export default {
    props: ["movie"],
    data: function() {
        return {
            show: false
            //data
        }
    },
    methods: {
        showdetails : function(){
            this.$router.push({ path: `/movie/${this.movie.id}` })
        }
    }
}
</script>

<style>
    li{
        list-style: none;
    }
</style>