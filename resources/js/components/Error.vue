<template>
 <div
  class="
   bg-red-500
   text-gray-100 text-sm text-bold
   mb-6
   p-2
   text-center
   rounded-md
  "
  v-if="errors.length"
 >
  <div v-for="(error, index) in errors" :key="index">
   {{ error.message }}
  </div>
 </div>
</template>

<script>
export default {
 props: {
  errors: {
   type: Array,
   default: [],
  },
 },
};
</script>