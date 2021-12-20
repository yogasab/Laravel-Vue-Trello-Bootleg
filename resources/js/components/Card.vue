<template>
 <div>
  <div
   v-if="!editing"
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
    <div
     class="text-gray-400 pr-2 hover:text-yellow-400"
     @click="editing = true"
    >
     E
    </div>
    <div class="text-gray-400 hover:text-red-700" @click="deleteCard">D</div>
   </div>
  </div>
  <card-editor
   v-else
   class="mb-2"
   label="Update card"
   @closed="editing = false"
   @saved="updateCard"
   v-model="title"
  />
 </div>
</template>

<script>
import DeleteCard from "../graphql/DeleteCard.gql";
import CardUpdate from "../graphql/UpdateCard.gql";
import {
 EVENT_CARD_ADDED,
 EVENT_CARD_DELETED,
 EVENT_CARD_UPDATED,
} from "../contants";
import CardEditor from "./CardEditor.vue";
export default {
 props: {
  card: Object,
 },
 components: { CardEditor },
 data() {
  return {
   editing: false,
   title: this.card.title,
  };
 },
 methods: {
  deleteCard() {
   const self = this;
   this.$apollo.mutate({
    mutation: DeleteCard,
    variables: {
     id: this.card.id,
    },
    update(store, { data: { cardDelete } }) {
     self.$emit("deleted", {
      store,
      data: cardDelete,
      type: EVENT_CARD_DELETED,
     });
    },
   });
  },
  updateCard() {
   const self = this;
   this.$apollo.mutate({
    mutation: CardUpdate,
    variables: {
     id: this.card.id,
     title: this.title,
    },
    update(store, { data: cardUpdate }) {
     self.$emit("updated", {
      store,
      data: cardUpdate,
      type: EVENT_CARD_UPDATED,
     });
     self.editing = false;
    },
   });
  },
 },
};
</script>
