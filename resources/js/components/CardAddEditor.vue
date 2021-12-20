<template>
 <card-editor
  v-model="title"
  @closed="closeCardEditor"
  @saved="addCard"
  label="Save card"
 ></card-editor>
</template>

<script>
import AddCard from "../graphql/AddCard.gql";
import CardEditor from "./CardEditor.vue";
import { EVENT_CARD_ADDED } from "../contants";

export default {
 data() {
  return {
   title: null,
  };
 },
 components: { CardEditor },
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
     self.$emit("added", {
      store,
      data: cardAdd,
      type: EVENT_CARD_ADDED,
     });
     self.closeCardEditor();
    },
   });
   //  this.closeCardEditor();
  },
 },
};
</script>