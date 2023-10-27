import { createStore } from "vuex";
import sourceData from "@/data.json";

export default createStore({
  state: {
    words: [],
    categories: [],
    numOfGuessesRemaining: 4,
  },
  actions: {
    initializeGame() {
      this.commit("setCategories", { categories: sourceData.categories });
      this.commit("setWords", { words: sourceData.words });
    },
    updateWordState({ commit, state }, { text }) {
      const targetWord = state.words.find((w) => w.text === text);
      commit("setSelected", { word: targetWord });
    },
    async handleCorrectGuess({ commit }, { categoryId }) {
      const category = await this.fetchCategory({ id: categoryId });
      commit("setCorrectCategory", { category });
    },
    async fetchCategory({ state }, { id }) {
      return state.categories.find((c) => c.id === id);
    },
  },
  mutations: {
    setCategories(state, { categories }) {
      state.categories = categories;
    },
    setWords(state, { words }) {
      state.words = words;
    },
    setSelected(state, { word }) {
      word.selected = !word.selected;
    },
    setCorrectCategory(state, { category }) {
      category.solved = true;
    },
  },
  modules: {},
  getters: {
    numOfGuesses: (state) => {
      return state.numOfGuessesRemaining;
    },
    categories({ state }) {
      return state.categories;
    },
    words({ state }) {
      return state.words;
    },
  },
});
