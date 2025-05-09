<b-hero-clean background="none">
<template v-slot:headline>
<h1
class="relative capitalize text-9xl font-extrabold leading-none text-grey-500 xl:text-10xl sm:text-center lg:text-left"
>
Welcome to <br class="md:hidden lg:block" />
<span class="text-blue-500">Homeful</span>
</h1>
</template>
<template v-slot:content>
<p class="relative block mt-1 italic text-base text-gray-700 xl:text-lg sm:text-center lg:text-left">
A journey home
</p>
</template>
<template v-slot:cta>
<button class="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-purple-500 border border-transparent rounded-full shadow hover:bg-purple-600 focus:outline-none focus:border-purple-600 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10">Learn More</button>
</template>
<template v-slot:media>
<img src="https://pngimg.com/d/house_PNG17.png" class="object-cover w-full">
</template>
</b-hero-clean>


<style>
.content {
margin: 0 auto;
margin-top: 2rem;
padding: 0.025rem 2.5rem 2rem;
max-width: 100%;
}
header {
z-index: 999;
}
h1,
h2,
h3 {
margin: 2rem 0;
}
p {
margin-top: 1rem;
}
.language-html {
max-height: 40vh;
}
</style>
