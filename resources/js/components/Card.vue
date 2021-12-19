<template>
 <div
  class="
   group
   shadow-card
   bg-white
   rounder-sm
   p-2
   cursor-pointer
   text-sm
   hover:bg-gray-100
   mb-2
   font-semibold
   flex
   justify-between
  "
 >
  <div>{{ card.title }}</div>
  <div class="flex text-lg font-bold opacity-0 group-hover:opacity-100">
   <div class="text-gray-400 pr-2 hover:text-yellow-400">E</div>
   <div class="text-gray-400 hover:text-red-700" @click="deleteCard">D</div>
  </div>
 </div>
</template>

<script>
import DeleteCard from "../graphql/DeleteCard.gql";
export default {
 props: {
  card: Object,
 },
 methods: {
  deleteCard() {
   this.$apollo.mutate({
    mutation: DeleteCard,
    variables: {
     id: this.card.id,
    },
   });
  },
 },
};
</script>
