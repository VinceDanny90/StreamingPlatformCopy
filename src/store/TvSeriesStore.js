import { defineStore } from "pinia";
import tmdb from "../api/services/TMDB";

export const useTvSeriesStore = defineStore("TvSeriesStore",{

    state:()=>({
      popular: [],
    }),

    getters:{
      hero(){
        return this.popular.sort((a,b) =>
        a.vote_average > b.vote_average
        ? -1
        : b.vote_average > a.vote_average
        ? 1
        :0
        )[0];
    }
    },
    
    actions: {
        async getPopular(){
          try {
            const data = await tmdb.getPopularTvSeries()
            this.popular = data;
            } catch (error) {
             throw error.request.responseText;
            }
        },
        async getFilm(){
          try {
            const data = await tmdb.getPopularFilm()
            this.popular = data;
            } catch (error) {
             throw error.request.responseText
            }
        },
        async getSerie(){
          try {
            const data = await tmdb.getPopularSeries()
            this.popular = data;
            } catch (error) {
             throw error
            }
        }
    },  
  }
)