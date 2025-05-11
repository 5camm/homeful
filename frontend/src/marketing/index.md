<b-hero-clean background="none" :reverse="true">
    <template v-slot:headline>
        <h1 class="relative capitalize text-9xl font-extrabold leading-none text-grey-500 xl:text-10xl sm:text-center lg:text-left"
        >
            <span class="cta text-gray-600">Welcome to </span>
            <span class="text-blue-400 font-mono">Homeful</span>
        </h1>
    </template>
    <template v-slot:content>
        <p class="relative block mt-1 italic text-base text-gray-700 xl:text-lg sm:text-center lg:text-left">
            Unhoused to a full house
        </p>
    </template>
    <template v-slot:cta>
        <button class="cta flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10">Learn More</button>
    </template>
    <template v-slot:media>
        <img src="https://cdn.discordapp.com/emojis/812497427733938177.webp?size=100" class="object-cover w-full rounded-full mb-10" />
    </template>
</b-hero-clean>
<b-hero-learn background="blue-600" class="learn rounded-lg">
  <template #headline>
    <h1
      class="relative z-20 font-sans text-4xl font-extrabold leading-none capitalize text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left"
    >
      <span class="relative">
        <span
          class="absolute bottom-0 left-0 inline-block w-full h-4 mb-1 -ml-1 transform -skew-x-3 bg-yellow-100"
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
      class="relative z-20 block mt-6 text-base text-gray-200 xl:text-lg sm:text-center lg:text-right"
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
      Support Now
    </button>
    <button
      class="relative flex inline-block h-full ml-5 text-base text-lg font-medium leading-tight text-gray-400 underline transition duration-150 ease-in-out border-transparent"
    >
      Try for Free
    </button>
  </template>
  <template #media>
    <div class="relative rounded-md">
      <figure class="p-10">
        <img
          src="https://cdn.discordapp.com/emojis/804518252323667968.webp?size=100"
          class="object-cover m-auto w-full"
        />
      </figure>
    </div>
  </template>
</b-hero-learn>
<b-content-browser image="https://cdn.discordapp.com/emojis/812478802558713896.webp?size=100">
  <template v-slot:title>
    <p class="text-sm uppercase font-bold text-indigo-500 tracking-wide">
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
    <p class="text-gray-600 text-base m-3">
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
<b-hero-culture background="pink-500">
  <template #headline>
    <h2
      class="text-5xl text-white font-extrabold relative z-20 leading-tight"
    >
      Lorem ipsum<br />
      dolor sit amet
    </h2>
  </template>
  <template #content>
    <p class="text-xl mt-4 text-gray-200">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template #cta>
    <button
      class="flex items-center justify-center self-start px-5 py-3 border border-transparent text-xs leading-tight font-medium rounded-lg shadow text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-base md:px-8 mt-5"
    >
      Supports Us
    </button>
    <button
      class="flex items-center justify-center self-start px-5 py-3 border-transparent text-xs leading-tight font-medium rounded-lg shadow text-indigo-500 bg-gray-200 hover:bg-white focus:outline-none focus:border-gray-100 focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-base md:px-8 mt-5 ml-5"
    >
      How It Works
    </button>
  </template>
  <template #media>
    <figure class="p-8">
      <img
        src="https://cdn.discordapp.com/emojis/804518252323667968.webp?size=100"
        class=" w-full object-cover rounded-lg"
      />
    </figure>
  </template>
</b-hero-culture>
<b-hero-clean background="none">
  <template #headline>
    <h1
      class="capitalize text-5xl font-extrabold leading-none text-purple-500 xl:text-6xl sm:text-center lg:text-left"
    >
      Lorem ipsum<br class="md:hidden lg:block" />
      <span class="text-gray-800"> dolor sit amet</span>
    </h1>
  </template>
  <template #content>
    <p
      class="relative block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </template>
  <template #media>
    <div
      class="absolute flex items-center justify-center w-full h-full"
    >
      <span
        class="flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full shadow-2xl"
      >
        <svg
          class="w-auto h-8 ml-1 text-white fill-current"
          viewBox="0 0 52 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z"
            fill-rule="nonzero"
          />
        </svg>
      </span>
    </div>
    <img
      src="https://cdn.discordapp.com/emojis/812478802898452521.webp?size=100"
      class="rounded-lg object-cover w-full my-10"
    />
  </template>
</b-hero-clean>
<b-content-card class="card text-white" background="green-700" image="https://cdn.discordapp.com/emojis/812478803091259392.webp?size=100">
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
      class="inline-flex items-center justify-center h-12 px-6 py-3 mr-6 font-sm text-white transition duration-200 rounded-lg bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
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
      class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white bg-orange-400 border border-transparent rounded-full shadow md:py-4 md:text-lg xl:text-xl md:px-10"
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
<b-content-course background="purple-600">
  <template #title>
    <p
      class="inline-block px-3 py-1 leading-tight mb-4 text-xs font-semibold tracking-widest text-indigo-700 uppercase rounded-full bg-indigo-200"
    >
      Lorem Ipsum
    </p>
  </template>
  <template #headline>
    <h2
      class="text-center b-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto flex justify-center"
    >
      <svg
        class="w-8 h-8 mr-3 mt-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
        ></path>
      </svg>
      <span class="relative">Dolor Sit Amet</span>
    </h2>
  </template>
  <template #link>
    <a
      class="text-sm font-semibold text-indigo-600 underline mt-3"
    >
      Lorem ipsum dolor sit amet
    </a>
  </template>
  <template #cards>
    <div
      v-for="course of ['','','']"
      class="flex flex-col justify-center rounded-lg shadow-lg"
    >
      <div class="flex flex-col items-end bg-gray-900">
        <img
          class="p-8 w-64 flex-shrink object-contain self-end rounded-full bg-pink-500"
          src="https://cdn.discordapp.com/emojis/804519063253811290.webp?size=100"
        />
      </div>
      <div class="relative flex flex-col justify-between flex-1 text-white p-3 bg-black">
        <span
          class="absolute -mt-12 inline-flex items-center px-3 py-1 mr-4 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full"
          >Lorem ipsum doler</span
        >
        <p
          class="block text-xl font-semibold leading-7"
        >
          Lorem Ipsum
        </p>
        <p class="mt-3 text-base leading-6 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="mt-3 text-sm font-medium leading-5">
          <span
            class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-blue-800 bg-blue-100 rounded-full"
            >Lorem ipsum</span
          >
        </p>
      </div>
      <div class="flex items-center p-6 bg-gray-100">
        <div class="flex-shrink-0">
          <img
            class="w-16 h-60 rounded-full"
            src="https://cdn.discordapp.com/emojis/804518252323667968.webp?size=100"
          />
        </div>
        <div class="ml-3 p-1">
          <p class="text-sm font-medium leading-5 text-gray-900">
            <a class="hover:underline">donthedeveloper</a>
          </p>
          <div class="text-xs leading-5 text-gray-600">
            <time>6/6/6</time>
          </div>
        </div>
      </div>
    </div>
  </template>
</b-content-course>

<style>
.cta {
  text-wrap: nowrap;
}
</style>