<template>
 <div
  class="
   rounded-sm
   p-2
   text-gray-600
   cursor-pointer
   hover:bg-gray-400 hover:text-gray-800
   text-sm
   font-bold
  "
  @click="addCard"
 >
  Add new task
 </div>
</template>

<script>
import AddCard from "../graphql/AddCard.gql";
import BoardWithListsAndCards from "../graphql/BoardWithListsAndCards.gql";
export default {
 methods: {
  addCard() {
   this.$apollo.mutate({
    mutation: AddCard,
    variables: {
     title: "lorem",
     listId: 1,
     order: 1,
     ownerId: 1,
    },
    update(store, { data: { cardAdd } }) {
     const data = store.readQuery({
      query: BoardWithListsAndCards,
      variables: { id: 1 },
     });
     data.board.lists.find((list) => (list.id = 1)).cards.push(cardAdd);
     store.writeQuery({ query: BoardWithListsAndCards, data });
    },
   });
  },
 },
};
</script>