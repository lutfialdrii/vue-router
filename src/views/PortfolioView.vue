<template>
  <section id="portfolio" class="pt-36 pb-8">
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-14">
          <h4 class="font-semibold text-lg text-red-400 mb-2">Portfolio</h4>
          <h2 class="font-bold text-3xl mb-4">Karena saya belum ada portfolio, jadi page ini
            bisa dibilang <u>Hobi saya!</u></h2>
          <p class="font-medium text-md text-gray-500">
            Kegiatan dibawah ini merupakan lifecycle yang biasa saya lakukan.
          </p>
        </div>
      </div>
      <div class="w-full px-4 flex flex-wrap items-center justify-center">
        <div class="mb-12 p-4 md:w-1/2 lg:w-1/4">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="../assets/img/Portfolio/1.jpeg" width="w-full" alt="Instagram" />
          </div>
          <h3 class="font-semibold text-xl mt-5 mb-3">
            Membuat Postingan <span class="font-bold text-red-400">Dakwah</span>
          </h3>
          <p class="font-medium text-base text-gray-500">
            Tujuannya ya cuman ngingatin diri sendiri kok!
          </p>
        </div>
        <div class="mb-12 p-4 md:w-1/2 lg:w-1/4">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="../assets/img/Portfolio/2.jpg" width="676px" height="1280px" alt="Ngoding" />
          </div>
          <h3 class="font-semibold text-xl mt-5 mb-3">Rapat
            <span class="text-red-400">Online</span></h3>
          <p class="font-medium text-base text-gray-500">
            Zoom atau Google Meet? Makanan tiap hari!
          </p>
        </div>
        <div class="mb-12 p-4 md:w-1/2 lg:w-1/4">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="../assets/img/Portfolio/3.jpg" width="676px" height="1280px" alt="Ngoding" />
          </div>
          <h3 class="font-semibold text-xl mt-5 mb-3">
            Kalau kata orang <span class="text-red-400">Ngoding</span>
          </h3>
          <p class="font-medium text-base text-gray-500">
            Mau gimana lagi, namanya juga kewajiban.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PortfolioView',
  components: {},
};
</script>
