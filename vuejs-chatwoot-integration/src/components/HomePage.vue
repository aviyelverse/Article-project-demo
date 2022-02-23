<template>
  <div
    class="text-indigo-400 m-6 bg-cover bg-fixed"
    style="
      ;
    "
  >
    <div class="h-full">
      <div class="w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
          <a
            class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            Chatwoot-<span
              class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
              >InteGration</span
            >
          </a>
        </div>
      </div>

      <!--Main-->
      <div
        class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <!--Left Col-->
        <div
          class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden"
        >
          <h1
            class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left"
          >
            Vuejs and
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-500 to-blue-500"
            >
              Chatwoot
            </span>
            integration
          </h1>
          <p
            class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left"
          >
            Integrate chatwoot inside the Vuejs project from absoluet scratch!
          </p>

          <form
            class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
          >
            <div class="mb-4">
              <label
                class="block text-blue-300 py-2 font-bold mb-2"
                for="emailaddress"
              >
                Subscribe to our newsletter
              </label>
              <input
                class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="emailaddress"
                type="text"
                placeholder="pramit@aviyel.com"
              />
            </div>

            <div class="flex items-center justify-between pt-4">
              <button
                class="bg-gradient-to-r from-teal-400 via-green-500 to-red-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <!--Right Col-->
        <div class="w-full xl:w-3/5 p-12 overflow-hidden">
          <img
            class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
            src="macbook.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
