<b-hero-clean background="none" :reverse="true" class="flex flex-col items-center justify-center pb-16">
  <template v-slot:headline>
    <h1 class="relative text-center capitalize text-9xl font-extrabold leading-none text-grey-500 xl:text-10xl sm:text-center sm:text-left">
      <span class="cta text-gray-600">Welcome To </span>
      <span class="text-blue-600">Homefulness</span>
    </h1>
  </template>
  <template v-slot:cta>
    <button class="flex items-center justify-center px-6 py-4 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10">
      Learn More
    </button>
  </template>
  <template #content>
    <p class="relative font-mone text-center z-20 block mt-6 text-base text-gray-700 xl:text-lg md:text-center md:text-left">
      A community-powered platform that turns spotlight moments into shared support. When one story thrives, we all do.
    </p>
  </template>
  <template v-slot:media>
    <img src="/wlecome.png" class="mb-8 object-cover w-64 h-64 rounded-full" />
  </template>
</b-hero-clean>
<b-hero-culture background="/home.png" class="p-12 md:p-32 rounded">
  <template #headline>
    <h1
      class="text-6xl text-white relative z-20"
    >
    Find Real Home
    </h1>
  </template>
  <template #content>
    <p class="text-xl mt-4 font-semibold">
      Homeful is a community-powered platform rethinking how we
      tell stories, share resources, and create real-world change.
      Instead of chasing clicks and ad revenue, we channel
      collective attention into life-changing opportunities —
      directing support to those who need it most, when they need it
      most.  
    </p>
  </template>
  <template #cta>
    <button
      class="flex items-center justify-center self-start px-5 py-3 border border-transparent text-base leading-tight font-medium rounded-lg shadow text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8 mt-5"
    >
      Get Started
    </button>
    <button
      class="flex items-center justify-center self-start px-5 py-3 border-transparent text-base leading-tight font-medium rounded-lg shadow text-indigo-500 bg-gray-200 hover:bg-white focus:outline-none focus:border-gray-100 focus:shadow-outline-gray transition duration-150 ease-in-out md:py-4 md:text-lg md:px-8 mt-5 ml-5"
    >
      How It Works
    </button>
  </template>
  <template #media>
    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%;"><iframe src="https://www.youtube.com/embed/D_cVyaxES9E?rel=0" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe></div>
  </template>
</b-hero-culture>
<b-hero-learn background="none" class="learn">
  <template #headline>
    <h1 class="relative z-20 font-sans text-4xl font-extrabold leading-none capitalize text-black sm:text-5xl xl:text-6xl sm:text-center lg:text-left">
      <span class="relative">
        <span class="absolute bottom-0 left-0 inline-block w-full h-4 mb-1 -ml-1 transform -skew-x-3 bg-yellow-300"></span>
        <span class="relative text-gray-700">Get back,</span>
      </span>
      <span class="relative block text-yellow-400">to Homeful</span>
    </h1>
  </template>
  <template #content>
    <p class="relative z-20 block mt-6 text-base text-gray-800 xl:text-lg sm:text-center lg:text-right">
      From instability to empowerment—Homeful helps creators in need find an audience, earn income, and uplift the community.
    </p>
  </template>
  <template #cta>
    <button class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-yellow-500 border border-transparent rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:border-yellow-600 focus:shadow-outline-yellow md:py-4 md:text-lg xl:text-xl md:px-10">
      Join Homeful
    </button>
    <button class="relative flex inline-block h-full ml-5 text-base text-lg font-medium leading-tight text-gray-600 underline transition duration-150 ease-in-out border-transparent">
      Completely for Free
    </button>
  </template>
  <template #media>
    <div class="relative rounded-md">
      <figure class="p-10">
        <img src="https://cdn.discordapp.com/emojis/804518252323667968.webp?size=100" class="object-cover m-auto w-full" />
      </figure>
    </div>
  </template>
</b-hero-learn>
<b-content-card background="black" image="https://i.imgur.com/Xh0Qjjq.jpg">
  <template #title>
    <p class="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-600 uppercase rounded-full bg-purple-200">
      No Likes, Just Lives
    </p>
  </template>
  <template #heading>
    <h5 class="mb-2 text-3xl text-white font-extrabold leading-none sm:text-4xl">
      Attention that pays everyone back
    </h5>
  </template>
  <template #description>
    <p class="mb-5 text-gray-300 py-1">
      <span class="font-bold">Not charity—solidarity.</span>
      When your story hits, the win spills over. Privacy-first syndication, and a pool that backs
      people who actually need it.
    </p>
  </template>
  <template #cta>
    <button type="button" class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-lg bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none">
      Start now
    </button>
    <button type="button" class="inline-flex text-lg underline items-center transition-colors duration-200 text-purplle-100 hover:text-deep-purple-800">
      See how it works
      <svg class="inline-block w-2 ml-2" fill="currentColor" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
      </svg>
    </button>
  </template>
</b-content-card>
<b-content-browser image="https://cdn.discordapp.com/emojis/812478802558713896.webp?size=100">
  <template v-slot:title>
    <p class="text-sm uppercase font-bold text-indigo-500 tracking-wide">
      Why It Matters
    </p>
  </template>
  <template v-slot:heading>
    <h2 class="text-4xl font-bold text-gray-900 mt-1 leading-tight">
      More Than a Platform
    </h2>
  </template>
  <template v-slot:description>
    <p class="text-gray-600 text-base m-3">
      Homeful transforms individual success into collective stability, ensuring resources reach those who can benefit most.
    </p>
  </template>
  <template v-slot:cta>
    <button class="underline font-medium flex justify-center text-indigo-500">
      <span>View All Features</span>
      <svg class="w-4 h-4 ml-1 mt-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </button>
  </template>
</b-content-browser>
<b-hero-culture background="/splash-alt.png" class="p-12 md:p-32 rounded">
  <template #headline>
    <h1 class="relative z-20 font-sans text-4xl capitalize font-extrabold leading-none text-white sm:text-5xl xl:text-6xl sm:text-center lg:text-left">
      <span class="relative"><span class="relative text-gray-400">Syndicate safely</span></span>
      <span class="relative block text-blue-200">share with dignity</span>
    </h1>
  </template>
  <template #content>
    <p class="relative mt-6 font-bold text-base text-white xl:text-lg">
      One click to publish across platforms. We sanitize content, strip metadata, and protect consent—so attention becomes support, not exposure.
    </p>
  </template>
  <template #cta>
    <button type="button" class="flex items-center self-start justify-center px-5 py-3 text-base font-medium leading-tight text-white bg-blue-800 border border-transparent rounded-lg shadow md:py-4 md:text-lg xl:text-xl md:px-10">
      See how it works
    </button>
  </template>
  <template #media>
    <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 100%;"><iframe src="https://www.youtube.com/embed/D_cVyaxES9E?rel=0" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe></div>
  </template>
</b-hero-culture>
