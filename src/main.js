import Vue from 'vue' //librairie "vue" dans node_modules
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue'
import Index from './pages/index.vue'
import MovieShow from './pages/movieshow.vue'
import MovieEdit from './pages/movieedit.vue'
import MovieNew from './pages/movienew.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify, {
  theme: {
    primary: {
      base: '#0D31FF',
      lighten1: '#0C67E8',
      lighten2: '#00ACFF'
    },
    secondary: {
      base: '#00820C',
      darken1: '#24C908'
    },
    accent: '#8c9eff',
    error: '#b71c1c'
  }
});
Vue.use(VueRouter);

window.movies = [
  {
    id : 0,
    title : "Star Wars I : The Phantom Menace",
    year : "1999",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "https://vignette.wikia.nocookie.net/fr.starwars/images/e/e0/Lundi.png/revision/latest/scale-to-width-down/333?cb=20151011153017",
    director: {
      name: "Georges Lucas",
      nationality: "Americain",
      birthdate: "14/05/1944"
    },
    rating: 0
  },
  {
    id : 1,
    title : "Star Wars II : Attack of the Clones",
    year : "2002",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/00/02/34/81/affclones.jpg",
    director: {
      name: "Georges Lucas",
      nationality: "Americain",
      birthdate: "14/05/1944"
    },
    rating: 0
  },
  {
    id : 2,
    title : "Star Wars III : Revenge of the Sith",
    year : "2005",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://fr.web.img4.acsta.net/c_215_290/medias/nmedia/18/35/53/23/18423997.jpg",
    director: {
      name: "Georges Lucas",
      nationality: "Americain",
      birthdate: "14/05/1944"
    },
    rating: 0
  },
  {
    id : 3,
    title : "Solo: A Star Wars Story",
    year : "2018",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://fr.web.img5.acsta.net/r_1920_1080/pictures/18/04/09/10/56/4971105.jpg",
    director: {
      name: "Ron Howard",
      nationality: "Americain",
      birthdate: "01/03/1954"
    },
    rating: 0
  },
  {
    id : 4,
    title : "Kenobi : a Star Wars Story",
    year : "2020",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://golem13.fr/wp-content/uploads/2018/05/KenobiAstarWarsStory.jpg",
    director: {
      name: "UNKNOW",
      nationality: "SAME",
      birthdate: "SAME"
    },
    rating: 0
  },
  {
    id : 5,
    title : "Rogue One: A Star Wars Story",
    year : "2016",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://fr.web.img6.acsta.net/c_215_290/pictures/16/10/19/14/33/069648.jpg",
    director: {
      name: "Georges Gareth Edwards",
      nationality: "Britannique",
      birthdate: "01/06/1975"
    },
    rating: 0
  },
  {
    id : 6,
    title : "Star Wars IV : A New Hope",
    year : "1977",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/35/41/59/18422600.jpg",
    director: {
      name: "Georges Lucas",
      nationality: "Americain",
      birthdate: "14/05/1944"
    },
    rating: 0
  },
  {
    id : 7,
    title : "Star Wars V : The Empire Strikes Back",
    year : "1980",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "https://static1.puretrend.com/articles/5/84/44/5/@/963378--star-wars-v-l-empire-contre-attaque-580x0-1.jpg",
    director: {
      name: "Irvin Kershner",
      nationality: "Americain",
      birthdate: "29/04/1923"
    },
    rating: 0
  },
  {
    id : 8,
    title : "Star Wars VI : Return of the Jedi",
    year : "1983",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71wyA9DqlbL._SL1500_.jpg",
    director: {
      name: "Richard Marquand",
      nationality: "Britannique",
      birthdate: "22/09/1937"
    },
    rating: 0
  },
  {
    id : 9,
    title : "Star Wars VII : The Force Awakens",
    year : "2015",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://fr.web.img5.acsta.net/c_215_290/pictures/15/10/18/18/56/052074.jpg",
    director: {
      name: "J. J. Abrams",
      nationality: "Americain",
      birthdate: "27/06/1966"
    },
    rating: 0
  },
  {
    id : 10,
    title : "Star Wars VIII : The Last Jedi",
    year : "2017",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://fr.web.img6.acsta.net/c_215_290/pictures/17/10/10/04/58/2061488.jpg",
    director: {
      name: "Rian Johnson",
      nationality: "Americain",
      birthdate: "17/12/1973"
    },
    rating: 0
  },
  {
    id : 11,
    title : "Star Wars IX : ",
    year : "2019",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://fr.web.img3.acsta.net/c_215_290/pictures/18/07/12/10/58/0060559.jpg",
    director: {
      name: "J. J. Abrams",
      nationality: "Americain",
      birthdate: "27/06/1966"
    },
    rating: 0
  },
  {
    id : 12,
    title : "The Lord of the Rings : The Fellowship of the Ring",
    year : "2001",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "https://images.991.com/large_image/The+Lord+Of+The+Rings+The+Fellowship+Of+The+Ring-208554.jpg",
    director: {
      name: "Peter Jackson",
      nationality: "Néo-Zélandais",
      birthdate: "31/10/1961"
    },
    rating: 0
  },
  {
    id : 13,
    title : "The Lord of the Rings : The Two Towers",
    year : "2002",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "http://thesmartlocal.com/images/easyblog_images/1854/b2ap3_thumbnail_LOTF---TTT-poster-credit-to-Metropolitan-Festival-Orchestra.jpg",
    director: {
      name: "Peter Jackson",
      nationality: "Néo-Zélandais",
      birthdate: "31/10/1961"
    },
    rating: 0
  },
  {
    id : 14,
    title : "The Lord of the Rings : The Return of the King",
    year : "2003",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "https://www.questionablecritics.com/uploads/7/0/9/2/70926367/1357732_orig.jpg",
    director: {
      name: "Peter Jackson",
      nationality: "Néo-Zélandais",
      birthdate: "31/10/1961"
    },
    rating: 0
  },
  {
    id : 15,
    title : "V for Vendetta",
    year : "2006",
    languages: "English",
    synopsis : "[synopsis]",
    detailsdisplay: false,
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51M3SQYW83L._SX425_.jpg",
    director: {
      name: "James McTeigue",
      nationality: "Australien",
      birthdate: "27/12/1967"
    },
    rating: 0
  },
  {
    id : 16,
    title : "Bohemian Rhapsody",
    year : "2018",
    languages: "English",
    synopsis : "Biopic du mythique groupe de Rock Queen et de leur Lead Singer Freddie Mercury",
    detailsdisplay: false,
    imgUrl: "https://m.media-amazon.com/images/I/81yo5sz9-cL._SS500_.jpg",
    director: {
      name: "Dexter Fletcher",
      nationality: "Britannique",
      birthdate: "31/01/1966"
    },
    rating: 0
  },
]

Vue.component('movie-item', MovieItemComponent);

const routes = [
  { path: '/', component: Index },
  { path: '/movie/:id', component: MovieShow },
  { path: '/movie/:id/edit', component: MovieEdit },
  { path: '/new/', component: MovieNew }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})