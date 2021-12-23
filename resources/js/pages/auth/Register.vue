<template>
 <div class="bg-white sm:bg-gray-100 h-full flex justify-center">
  <div class="container mt-2 sm:mt-10 flex flex-col items-center">
   <div class="text-3xl text-blue-700 font-bold mb-10">
    <span>Laravello</span>
   </div>

   <div class="w-full sm:shadow-xl sm:bg-white sm:py-8 sm:px-12">
    <div class="w-full text-center text-gray-600 font-bold mb-8">
     Create your account here
    </div>
    <error :errors="errors"></error>
    <form @submit.prevent="submitForm">
     <div class="w-full mb-4">
      <input
       type="text"
       class="
        rounded-sm
        px-4
        py-2
        outline-none
        focus:outline-none
        border-gray-400
        bg-gray-100
        border-solid border-2
        w-full
        text-sm
       "
       placeholder="Enter full name"
       name="name"
       autofocus
       v-model="form.name"
      />
     </div>
     <div class="w-full mb-4">
      <input
       type="email"
       class="
        rounded-sm
        px-4
        py-2
        outline-none
        focus:outline-none
        border-gray-400
        bg-gray-100
        border-solid border-2
        w-full
        text-sm
       "
       placeholder="Enter email"
       name="email"
       v-model="form.email"
      />
     </div>
     <div class="w-full mb-4">
      <input
       type="password"
       class="
        rounded-sm
        px-4
        py-2
        outline-none
        focus:outline-none
        border-gray-400
        bg-gray-100
        border-solid border-2
        w-full
        text-sm
       "
       placeholder="Enter password"
       v-model="form.password"
      />
     </div>
     <div class="w-full mb-6">
      <button
       type="submit"
       class="
        rounded-sm
        px-4
        py-2
        text-sam
        bg-green-500
        font-bold
        outline-none
        focus:outline-none
        hover:bg-opacity-75
        w-full
        text-white
        disabled:opacity-25
       "
      >
       Register
      </button>
     </div>
    </form>
    <div class="bg-gray-400 h-px w-full mb-6"></div>
    <div class="text-center text-sm font-bold">
     Already have an account?
     <router-link
      :to="{ name: 'login' }"
      class="text-blue-700 hover:text-blue-400"
      >Login</router-link
     >
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import Error from "../../components/Error.vue";
import Register from "../../graphql/Register.gql";
import { gqlErrors } from "../../utils/utils";

export default {
 data() {
  return {
   form: {
    name: null,
    email: null,
    password: null,
   },
   errors: [],
  };
 },
 methods: {
  async submitForm() {
   try {
    await this.$apollo.mutate({
     mutation: Register,
     variables: {
      name: this.form.name,
      email: this.form.email,
      password: this.form.password,
     },
    });
    this.$router.push({ name: "board" });
   } catch (err) {
    this.errors = gqlErrors(err);
   }
  },
 },
 components: {
  Error,
 },
};
</script>

<style scoped>
.container {
 width: 300px;
 max-width: 300px;
}
@media (min-width: 640px) {
 .container {
  width: 400px;
  max-width: 400px;
 }
}
</style>