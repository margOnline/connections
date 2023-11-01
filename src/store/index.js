import { createStore } from "vuex";
import sourceData from "@/data.json";
import { isOneAway } from "@/helpers";

export default createStore({
  state: {
    words: [],
    categories: [],
    numOfGuessesRemaining: 4,
    guesses: [],
    oneAway: false,
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
    handleIncorrectGuess({ commit }, { words }) {
      commit("setOneAway", { value: false });
      commit("setGuess", { guess: words });
      commit("reduceNumOfGuessesRemaining");
      const oneIncorrectWord = isOneAway({ words });
      if (oneIncorrectWord) commit("setOneAway", { value: true });
      words.forEach((word) => commit("toggleWordSelected", { word }));
    },
    isDuplicateGuess({ state }, { guessedWords }) {
      if (state.guesses.length === 0) return false;
      const guessedText = guessedWords
        .map((w) => w.text)
        .sort()
        .join();

      return state.guesses.find(
        (guess) =>
          guess
            .map((w) => w.text)
            .sort()
            .join() === guessedText
      );
    },
    saveGuess({ commit }, { guessedWords }) {
      commit("setGuess", { guess: guessedWords });
    },
    toggleOneAway({ commit }, { value }) {
      commit("setOneAway", { value });
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
    setOneAway(state, { value }) {
      state.oneAway = value;
    },
  },
  modules: {},
  getters: {
    numOfGuesses: (state) => {
      return state.numOfGuessesRemaining;
    },
  },
});
