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
   :value="value"
   @keyup.esc="closeCardEditor"
   @keyup.enter="saved"
   @input="$emit('input', $event.target.value)"
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
    @click="saved"
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
export default {
 data() {
  return {};
 },
 props: ["value"],
 mounted() {
  this.$refs.cardEditor.focus();
 },
 methods: {
  closeCardEditor() {
   this.$emit("closed");
  },
  saved() {
   this.$emit("saved");
  },
 },
};
</script>