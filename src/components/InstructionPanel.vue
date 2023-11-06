<template>
  <div class="help-modal" :class="{ 'modal-open': showModal() }">
    <div class="modal-content">
      <a @click="closeModal" class="close-modal-indicator" href="#">X</a>
      <h2>How to play Connections</h2>
      <h3>Find groups of four items that share something in common.</h3>
      <ul>
        <li>
          Select four items and tap 'Submit' to check if your guess is correct.
        </li>
        <li>Find the groups without making 4 mistakes</li>
      </ul>
      <h3>Category Examples</h3>
      <ul>
        <li>Investments: Bond, Stock, Option, CD</li>
        <li>___BONE: Wish, Funny, Soup, Herring</li>
      </ul>
      <p>
        Categories will always be more specific than "5-LETTER WORDS","NAMES",
        or "VERBS"
      </p>
      <p>
        Each puzzle has exactly one solution. Watch out for words that seem to
        belong to multiple categories!
      </p>
      <div class="color-descriptions">
        <p>
          Each group is assigned a color, which will be revealed as you solve:
        </p>
        <div class="color-emojis">
          <img
            id="help-arrow"
            src="https://www.nytimes.com/games-assets/v2/metadata/help_arrow.svg"
            alt="levels description arrow"
          />
          <div class="color-emoji easy">
            <span class="help-emoji">Straightforward</span>
          </div>
          <div class="color-emoji moderate">
            <span class="help-emoji"></span>
          </div>
          <div class="color-emoji challenging">
            <span class="help-emoji"></span>
          </div>
          <div class="color-emoji hard">
            <span class="help-emoji"></span>Tricky
          </div>
        </div>
      </div>
      <div class="color-level"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstructionPanel",
  methods: {
    showModal() {
      return this.$store.state.showInstructionModal;
    },
    closeModal() {
      this.$store.dispatch("updateShowInstructionModal", { value: false });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500&display=swap");
.help-modal {
  visibility: hidden;
}
.modal-content {
  font-family: "Source Serif 4", serif;
  text-align: left;
  max-height: 95%;
  width: 60%;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 3px 12px -1px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 10%;
  left: 20%;
  background-color: white;
  padding: 5px 20px 20px 20px;
}
.modal-content > p,
.modal-content > ul,
.modal-content > a,
.modal-content > .color-descriptions {
  font-family: sans-serif;
}
.modal-content > ul {
  padding-left: 20px;
}
.modal-open {
  visibility: visible;
}
.close-modal-indicator {
  font-size: 24px;
  text-decoration: none;
  margin-left: 90%;
}
.color-emoji {
  height: 20px;
  width: 20px;
  margin-bottom: 5px;
}
.help-emoji {
  margin-left: 25px;
}
#help-arrow {
  height: 3.2rem;
  left: 3.2rem;
  bottom: 3rem;
  position: absolute;
}

@media (min-width: 721px) and (max-width: 1024px) {
  .modal-content {
    width: 80%;
  }
}
@media (min-width: 240px) and (max-width: 720px) {
  .modal-content {
    width: 95%;
    top: 5%;
    left: 1%;
  }
}
</style>
