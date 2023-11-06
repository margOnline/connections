<template>
  <div class="help-modal" :class="{ 'modal-open': showModal }">
    <div class="modal-content">
      <a @click="closeModal()" class="close-panel-indicator" href="#">X</a>
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
        <li>FISH: Bass, Flounder, Salmon, Trout</li>
        <li>FIRE___: Ant, Drill, Island, Opal</li>
      </ul>
      <p>
        Categories will always be more specific than "5-LETTER WORDS","NAMES",
        or "VERBS"
      </p>
      <p>
        Each puzzle has exactly one solution. Watch out for words that seem to
        belong to multiple categories!
      </p>
      <p>
        Each group is assigned a color, which will be revealed as you solve:
      </p>
      <div class="colors"></div>
      <div class="color-level"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InstructionPanel",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      console.log("in close modal");
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500&display=swap");
.help-modal {
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
.modal-content {
  font-family: "Source Serif 4", serif;
  text-align: left;
  width: 100%;
}
.modal-content > p,
.modal-content > ul {
  font-family: sans-serif;
}
.modal-content > ul {
  padding-left: 20px;
}
.modal-open {
  visibility: visible;
}
.close-panel-indicator {

  font-size: 36px;
  text-decoration: none;
}
</style>
