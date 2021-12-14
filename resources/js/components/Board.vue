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
    The board title goes here
   </div>
   <div class="flex flex-1 items-start overflow-x-auto mx-2">
    <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
     <div class="flex justify-between">
      <div class="text-gray-800 pl-2 pb-2 font-bold">List title</div>
     </div>

     <div
      class="
       card
       bg-white
       rounder-sm
       p-2
       cursor-pointer
       text-sm
       hover:bg-gray-100
       mb-2
      "
     >
      xxx
     </div>
     <div
      class="
       card
       bg-white
       rounder-sm
       p-2
       cursor-pointer
       text-sm
       hover:bg-gray-100
       mb-2
      "
     >
      xxx
     </div>
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
     >
      Add new task
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<style scoped>
.header {
 height: 40px;
}
.list {
 width: 250px;
}
.card {
 box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
}
</style>
