import { createStore } from "vuex";
import sourceData from "@/data";

export default createStore({
  state: {
    sourceData: sourceData,
    numOfGuessesRemaining: 4,
  },
  actions: {
    updateWordState({ commit, state }, { text }) {
      const targetWord = state.sourceData.words.find((w) => w.text === text);
      commit("setSelected", { word: targetWord });
    },
    handleCorrectGuess({ commit }, { correctWords }) {
      correctWords.forEach((word) => {
        commit("setSelected", { word });
        commit("setCorrect", { word });
      });
    },
    async fetchCategory({ state }, { id }) {
      const category = await state.sourceData.categories.find((c) => c.id === id);
      return category
    },
  },
  mutations: {
    setSelected(state, { word }) {
      word.selected = !word.selected;
    },
    setCorrect(state, { word }) {
      word.correct = !word.correct;
      word.solved = true;
    },
  },
  modules: {},
  getters: {
    numOfGuesses: (state) => {
      return state.numOfGuessesRemaining;
    },
    category: (state) => {
      return state.numOfGuessesRemaining;
    },
  },
});
