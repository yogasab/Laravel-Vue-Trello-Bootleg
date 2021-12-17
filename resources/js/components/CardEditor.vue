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
  ></textarea>
 </div>
</template>

<script>
export default {
 data() {
  return {
   title: null,
  };
 },
};
</script>