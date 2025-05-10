import { createStore } from "vuex";
import words from "@/words.json";
import categories from "@/categories.json";

export default createStore({
  state: {
    words: [],
    categories: [],
    numOfGuessesRemaining: 4,
    guesses: [],
    showInstructionModal: false,
  },
  actions: {
    initializeGame({ commit, state }) {
      localStorage.setItem("gameInProgress", new Date().getDate().toString());
      commit("setCategories", { categories: categories.items });
      commit("setWords", { words: words.items });
      localStorage.setItem("categories", JSON.stringify(state.categories));
      localStorage.setItem("words", JSON.stringify(state.words));
      localStorage.setItem(
        "numOfGuessesRemaining",
        state.numOfGuessesRemaining
      );
      localStorage.setItem("guesses", JSON.stringify(state.guesses));
    },
    switchWordSelected({ commit, state }, { text }) {
      const targetWord = state.words.find((w) => w.text === text);
      commit("toggleWordSelected", { word: targetWord });
    },
    async handleCorrectGuess({ commit, state }, { words }) {
      words.forEach((word) => {
        commit("setWordSolved", { word });
        commit("toggleWordSelected", { word });
      });

      const solvedWords = words.map((word) => [{ ...word, solved: true }]);
      commit("setGuess", { guess: solvedWords });
      localStorage.setItem("guesses", JSON.stringify(state.guesses));
      const correctCategoryId = words[0].categoryId;
      const category = state.categories.find((c) => c.id === correctCategoryId);
      const prevCorrectGuessOrder = Math.max(
        ...state.categories.map((c) => c.guessedOrder)
      );
      category.guessedOrder = prevCorrectGuessOrder + 1;
      commit("setCorrectCategory", { category });
      localStorage.setItem("words", JSON.stringify(state.words));
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    handleIncorrectGuess({ commit, state }, { words }) {
      commit("setGuess", { guess: words });
      commit("reduceNumOfGuessesRemaining");
      localStorage.setItem(
        "numOfGuessesRemaining",
        state.numOfGuessesRemaining
      );
      localStorage.setItem("guesses", JSON.stringify(state.guesses));
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
    saveGuess({ commit, state }, { guessedWords }) {
      commit("setGuess", { guess: guessedWords });
      localStorage.setItem("guesses", JSON.stringify(state.guesses));
    },
    toggleOneAway({ commit }, { value }) {
      commit("setOneAway", { value });
    },
    unselectWord({ commit }, { word }) {
      commit("setWordUnselected", { word });
    },
    updateShowInstructionModal({ commit }, { value }) {
      commit("setShowInstructionModal", { value });
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
      word.solved = true;
    },
    setWordUnselected(state, { word }) {
      word.selected = false;
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
    setShowInstructionModal(state, { value }) {
      state.showInstructionModal = value;
    },
    setNumOfGuessesRemaining(state, { numOfGuessesRemaining }) {
      state.numOfGuessesRemaining = numOfGuessesRemaining;
    },
    setGuesses(state, { guesses }) {
      state.guesses = guesses;
    },
  },
  modules: {},
  getters: {
    numOfGuessesRemaining: (state) => {
      return parseInt(state.numOfGuessesRemaining);
    },
    unsolvedWords: (state) => {
      return state.words.filter((word) => !word.solved);
    },
    guesses: (state) => {
      return state.guesses.flat();
    },
    categories: (state) => {
      return state.categories;
    },
  },
});
