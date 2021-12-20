<template>
 <div class="bg-gray-300 rounded-md p-2 mr-2 list">
  <div class="flex justify-between">
   <div class="text-gray-800 pl-2 pb-2 font-bold">{{ list.title }}</div>
  </div>
  <card
   v-for="card in list.cards"
   :key="card.id"
   :card="card"
   @deleted="$emit('card-deleted', { ...$event, listId: list.id })"
   @updated="$emit('card-updated', { ...$event, listById: list.id })"
  ></card>
  <card-add-editor
   v-if="editing"
   @closeCardEditor="editing = false"
   :list="list"
   @added="$emit('card-added', { ...$event, listId: list.id })"
  ></card-add-editor>
  <card-add-button v-else @addTask="editing = true"></card-add-button>
 </div>
</template>

<script>
import Card from "./Card.vue";
import CardAddButton from "./CardAddButton.vue";
import CardAddEditor from "./CardAddEditor.vue";
export default {
 data() {
  return {
   editing: false,
  };
 },
 components: { Card, CardAddButton, CardAddEditor },
 props: {
  list: Object,
 },
};
</script>

<style scoped>
.list {
 width: 250px;
 min-width: 250px;
}
</style>