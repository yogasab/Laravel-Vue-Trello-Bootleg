<template>
 <div class="h-full flex flex-col items items-stretch bg-purple-500">
  <div
   class="
    header
    text-white
    flex
    justify-between
    items-center
    mb-2
    bg-purple-600
   "
  >
   <div class="ml-2 w-1/3">X</div>
   <div class="text-lg font-bold opacity-100 cursor-pointer hover:opacity-75">
    Laravello
   </div>
   <div class="mr-2 w-1/3 flex justify-end">X</div>
  </div>

  <div class="h-full flex flex-1 flex-col items-stretch">
   <div class="mx-4 mb-2 text-lg text-white font-bold">
    <span v-if="$apolloData.queries.board.loading">Loading ...</span>
    <span v-else>The board title goes here</span>
   </div>
   <div class="flex flex-1 items-start overflow-x-auto mx-2">
    <card-list
     v-for="list in board.lists"
     :key="list.id"
     :list="list"
     @card-added="updateQueryCache($event)"
    ></card-list>
   </div>
  </div>
 </div>
</template>

<script>
import CardList from "../components/CardList.vue";
import BoardWithListsAndCards from "../graphql/BoardWithListsAndCards.gql";
export default {
 components: { CardList },
 methods: {
  updateQueryCache(event) {
   const data = event.store.readQuery({
    query: BoardWithListsAndCards,
    variables: { id: Number(this.board.id) },
   });
   data.board.lists
    .find((list) => list.id == event.listId)
    .cards.push(event.data);
   event.store.writeQuery({ query: BoardWithListsAndCards, data });
  },
 },
 apollo: {
  board: {
   query: BoardWithListsAndCards,
   variables() {
    return {
     id: 1,
    };
   },
  },
 },
};
</script>

<style scoped>
.header {
 height: 40px;
}
</style>
