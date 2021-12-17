<template>
 <div>
  <textarea
   class="
    rounded-md
    shadow-card
    py-1
    px-2
    w-full
    outline-none
    text-gray-900 text-sm
    bg-white
    h-16
    resize-none
   "
   placeholder="Enter your task here ..."
   ref="cardEditor"
   @keyup.esc="closeCardEditor"
   @keyup.enter="addCard"
   v-model="title"
  ></textarea>
  <div class="flex">
   <div
    class="
     rounded-md
     bg-indigo-500
     hover:bg-indigo-700
     text-white
     outline-none
     py-1
     px-2
     cursor-pointer
    "
    @click="addCard"
   >
    Add Task
   </div>
   <div
    class="
     rounded-md
     bg-gray-500
     hover:bg-gray-700
     text-white
     ml-2
     py-1
     px-2
     cursor-pointer
    "
    @click="closeCardEditor"
   >
    Cancel
   </div>
  </div>
 </div>
</template>

<script>
import AddCard from "../graphql/AddCard.gql";
import BoardWithListsAndCards from "../graphql/BoardWithListsAndCards.gql";
export default {
 data() {
  return {
   title: null,
  };
 },
 props: {
  list: Object,
 },
 mounted() {
  this.$refs.cardEditor.focus();
 },
 methods: {
  closeCardEditor() {
   this.$emit("closeCardEditor");
  },
  addCard() {
   const self = this;
   this.$apollo.mutate({
    mutation: AddCard,
    variables: {
     title: this.title,
     listId: this.list.id,
     order: this.list.cards.length + 1,
     ownerId: 1,
    },
    update(store, { data: { cardAdd } }) {
     const data = store.readQuery({
      query: BoardWithListsAndCards,
      variables: { id: Number(self.list.board_id) },
     });
     data.board.lists
      .find((list) => list.id == self.list.id)
      .cards.push(cardAdd);
     store.writeQuery({ query: BoardWithListsAndCards, data });
    },
   });
   this.closeCardEditor();
  },
 },
};
</script>