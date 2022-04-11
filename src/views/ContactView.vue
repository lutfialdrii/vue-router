/* eslint-disable max-len */
/* eslint-disable vuejs-accessibility/label-has-for */
<template>
  <section id="contact" class="pt-36 pb-32">
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-red-400 mb-2">Contact</h4>
          <h2 class="font-bold text-3xl mb-4 sm:text-4xl">Hubungi Kami</h2>
          <p class="font-medium text-md text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aperiam.
          </p>
        </div>
      </div>
      <form>
        <div class="w-full lg:w-2/3 mx-auto">
          <div class="mb-3">
              <label for="name" class="mb-1 block text-sm font-medium text-red-400"> Nama
                <div class="mt-1">
                  <input type="text" id="name" name="name" rows="2" class="p-3
                  shadow-sm focus:ring-red-400 focus:outline-none
                  focus:border-red-400 mt-1 block w-full
                  sm:text-sm border border-gray-300
                  rounded-md" placeholder="Nama asli cuy!"/>
                </div>
              </label>
          </div>
          <div class="mb-3">
              <label for="email" class="mb-1 block text-sm font-medium text-red-400"> Email
                <div class="mt-1">
                  <input type="email" id="email" name="email" rows="2" class="p-3 shadow-sm
                  focus:ring-red-400 focus:outline-none
                  focus:border-red-400 mt-1 block w-full
                  sm:text-sm border border-gray-300
                  rounded-md" placeholder="you@example.com"/>
                </div>
              </label>
          </div>
          <div class="mb-3">
              <label for="name" class="mb-1 block text-sm font-medium text-red-400"> Pesan
                <div class="mt-1">
                  <textarea id="name" name="name" rows="2" class="p-3 shadow-sm
                  focus:ring-red-400 h-32 focus:outline-none
                  focus:border-red-400 mt-1 block w-full
                  sm:text-sm border border-gray-300
                  rounded-md" placeholder="Kenapa Tuch??"></textarea>
                </div>
              </label>
              <p class="mt-2 text-sm text-red-400 text-opacity-60">
                Harap memberi Dukungan yang positif!</p>
          </div>
          <div class="flex w-full place-content-center">
            <button class="text-base font-semibold text-white bg-red-400 py-3 px-8
              rounded-md hover:opacity-80 hover:shadow-lg transition duration-500">
            Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ContactView',
  components: {},
};
</script>
