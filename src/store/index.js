import { createStore } from "vuex";
import sourceData from "@/data.json";

export default createStore({
  state: {
    words: [],
    categories: [],
    numOfGuessesRemaining: 4,
    guesses: [],
  },
  actions: {
    initializeGame({ commit }) {
      commit("setCategories", { categories: sourceData.categories });
      commit("setWords", { words: sourceData.words });
    },
    updateWordState({ commit, state }, { text }) {
      const targetWord = state.words.find((w) => w.text === text);
      commit("toggleWordSelected", { word: targetWord });
    },
    async handleCorrectGuess({ commit, state }, { words }) {
      commit("setGuess", { guess: words });
      const correctCategoryId = words[0].categoryId;
      const category = state.categories.find((c) => c.id === correctCategoryId);
      words.forEach((word) => {
        commit("setWordSolved", { word });
        commit("toggleWordSelected", { word });
      });
      commit("setCorrectCategory", { category });
    },
    handleIncorrectGuess({ commit, state }, { words }) {
      commit("setGuess", { guess: words });
      commit("reduceNumOfGuessesRemaining");
      if (state.categories === 0) {
        state.categories.forEach((category) => {
          commit("setCategorySolved", category);
        });
      }
      words.forEach((word) => commit("toggleWordSelected", { word }));
    },
    saveGuess({ commit }, { guessedWords }) {
      commit("setGuess", { guess: guessedWords });
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
    toggleWordSelected(state, { word }) {
      word.selected = !word.selected;
    },
    setWordSolved(state, { word }) {
      word.correct = true;
    },
    setCorrectCategory(state, { category }) {
      category.solved = true;
    },
    reduceNumOfGuessesRemaining(state) {
      state.numOfGuessesRemaining -= 1;
    },
    setGuess(state, { guess }) {
      state.guesses.push(guess);
    },
  },
  modules: {},
  getters: {
    numOfGuesses: (state) => {
      return state.numOfGuessesRemaining;
    },
  },
});
