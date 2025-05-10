<b-hero-clean background="none">
    <template v-slot:headline>
        <h1 class="relative capitalize text-9xl font-extrabold leading-none text-grey-500 xl:text-10xl sm:text-center lg:text-left"
        >
            Welcome to <br class="md:hidden lg:block" />
            <span class="text-blue-500">Homeful</span>
        </h1>
    </template>
    <template v-slot:content>
        <p class="relative block mt-1 italic text-base text-gray-700 xl:text-lg sm:text-center lg:text-left">
            Homeless to a full house
        </p>
    </template>
    <template v-slot:cta>
        <button class="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10">Learn More</button>
    </template>
    <template v-slot:media>
        <img src="https://pngimg.com/d/house_PNG17.png" class="object-cover w-full">
    </template>
</b-hero-clean>
<b-hero-minimal background="none">
  <template #headline>
    <h1
      class="relative z-20 font-sans text-4xl capitalize font-extrabold leading-none text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left"
    >
      <span class="relative">
        <span class="relative text-gray-800">Lorem Ipsum</span>
      </span>
      <span class="relative block text-blue-400"
        >dolor sit amet</span
      >
    </h1>
  </template>
  <template #content>
    <p class="relative mt-6 text-base text-gray-600 xl:text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template #cta>
    <button
      class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white bg-blue-800 border border-transparent rounded-lg shadow md:py-4 md:text-lg xl:text-xl md:px-10"
    >
      Come with us
    </button>
  </template>
  <template #media>
    <div class="relative rounded-md">
      <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 75%;"><iframe src="https://www.youtube.com/embed/D_cVyaxES9E?rel=0" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe></div>
    </div>
  </template>
</b-hero-minimal>
<b-content-card class="text-white" background="gray-800" image="https://cdn.discordapp.com/emojis/804518252323667968.webp?size=60">
  <template v-slot:title>
    <p
      class="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-600 uppercase rounded-full bg-purple-200"
    >
      Lorem Ipsum
    </p>
  </template>
  <template v-slot:heading>
    <h5
      class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl"
    >
      Dolor Sit Amet
    </h5>
  </template>
  <template v-slot:description>
    <p class="mb-5 text-gray-100 py-5">
      <span class="font-bold">Lorem ipsum </span>
      dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template v-slot:cta>
    <button
      class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-lg bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
    >
      Get started
    </button>
    <button
      class="inline-flex text-lg underline items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    >
      Learn More
      <svg
        class="inline-block w-2 ml-2"
        fill="currentColor"
        viewBox="0 0 12 12"
      >
        <path
          d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
        ></path>
      </svg>
    </button>
  </template>
</b-content-card>
<b-hero-learn background="none">
  <template #headline>
    <h1
      class="relative z-20 font-sans text-4xl font-extrabold leading-none capitalize text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left"
    >
      <span class="relative">
        <span
          class="absolute bottom-0 left-0 inline-block w-full h-4 mb-1 -ml-1 transform -skew-x-3 bg-yellow-200"
        ></span>
        <span class="relative">Lorem Ipsum,</span>
      </span>
      <span class="relative block text-yellow-400"
        >Dolor Sit.</span
      >
    </h1>
  </template>
  <template #content>
    <p
      class="relative z-20 block mt-6 text-base text-gray-600 xl:text-lg sm:text-center lg:text-left"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template #cta>
    <button
      class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-yellow-500 border border-transparent rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:border-yellow-600 focus:shadow-outline-yellow md:py-4 md:text-lg xl:text-xl md:px-10"
    >
      Get Started
    </button>
    <button
      class="relative flex inline-block h-full ml-5 text-base text-lg font-medium leading-tight text-gray-600 underline transition duration-150 ease-in-out border-transparent"
    >
      Try Our Service for Free
    </button>
  </template>
  <template #media>
    <div class="relative rounded-md">
      <img
        src="https://camwhite.vercel.app/img/givii-mockup.png"
        class="z-10 object-cover w-full"
      />
    </div>
  </template>
</b-hero-learn>
<b-content-browser image="https://i.imgur.com/7JtwLw8.png">
  <template v-slot:title>
    <p
      class="text-sm uppercase font-bold text-indigo-500 tracking-wide"
    >
      Lorem Ipsum
    </p>
  </template>
  <template v-slot:heading>
    <h2
      class="text-4xl font-bold text-gray-900 mt-5 leading-tight"
    >
      Dolor Sit Amet
    </h2>
  </template>
  <template v-slot:description>
    <p class="text-gray-600 text-base mt-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template v-slot:cta>
    <button
      class="underline font-medium flex items-center inline-block text-indigo-500 mt-8"
    >
      <span>View All Features</span>
      <svg
        class="w-4 h-4 ml-1 mt-1 transform -rotate-45"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </button>
  </template>
</b-content-browser>