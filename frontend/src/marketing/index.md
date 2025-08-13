<!-- LANDING: MATRIX THEME -->

<section class="matrix-bg matrix-grid scanlines">
<b-hero-clean background="none" :reverse="true" class="flex flex-col items-center justify-center pb-16">
  <template #headline>
    <h1 class="text-center text-7xl md:text-8xl font-extrabold leading-none hacker-heading">
      <span class="cta block text-matrix-ink">Welcome to</span>
      <span>Homefulness</span>
    </h1>
  </template>

  <template #content>
    <p class="z-20 mt-6 text-base md:text-lg text-matrix-ink/80 max-w-2xl text-center">
      A community-powered signal that turns spotlight moments into shared stability.
      Privacy-first. Syndication on your terms. Payouts that flow where they matter.
    </p>
  </template>

  <template #cta>
    <div class="flex gap-4 mt-6">
      <button class="btn-neon rounded-full px-6 py-3 shadow-neon">Learn More</button>
      <button class="rounded-full px-6 py-3 border border-matrix-neon text-matrix-neon hover:text-matrix-ink hover:bg-matrix-neon/10">Try the Demo</button>
    </div>
  </template>

  <template #media>
    <img src="/wlecome.png" class="mb-8 object-cover w-64 h-64 rounded-full border border-matrix-neon shadow-neon" />
  </template>
</b-hero-clean>
</section>

<b-content-card background="matrix-panel" class="bg-matrix-panel text-matrix-ink/90 border-neon rounded-lg">
  <template #title>
    <p class="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-widest uppercase rounded-full bg-matrix-grid text-matrix-ink/70">
      No Likes—Just Lives
    </p>
  </template>
  <template #heading>
    <h5 class="text-3xl md:text-4xl font-extrabold leading-none text-matrix-ink hacker-heading">Attention that pays everyone back</h5>
  </template>
  <template #description>
    <p class="mt-2 text-matrix-ink/80">
      <span class="font-bold text-matrix-neon">Not charity—solidarity.</span>
      When your story hits, the win spills over. Our pool backs
      creators who actually need it, guided by the Homefulness Index.
    </p>
  </template>
  <template #cta>
    <div class="flex gap-4 mt-3">
      <button class="btn-neon rounded-lg px-5 py-3">Start now</button>
      <button class="underline text-matrix-mint text-mint-glow">See how it works →</button>
    </div>
  </template>
</b-content-card>

<b-content-browser image="/images/hi-diagram.png" class="bg-matrix-grid">
  <template #title><p class="text-xs uppercase font-bold text-matrix-mint">Why It Matters</p></template>
  <template #heading><h2 class="text-3xl md:text-4xl font-bold text-matrix-ink hacker-heading">More Than a Platform</h2></template>
  <template #description>
    <p class="text-matrix-ink/80">
      Homeful turns individual wins into collective stability. Need-aware ranking with audit trails—not engagement farming.
    </p>
  </template>
  <template #cta>
    <button class="underline font-medium flex justify-center text-matrix-neon text-glow">Explore features</button>
  </template>
</b-content-browser>

<b-hero-culture background="/splash-alt.png" class="p-10 md:p-20 rounded border-mint shadow-mint">
  <template #headline>
    <h2 class="text-4xl font-extrabold hacker-heading">Syndicate safely, share with dignity</h2>
  </template>
  <template #content>
    <p class="text-lg text-matrix-ink/90">
      One click to publish across platforms. We sanitize content, strip metadata, and protect consent—so attention becomes support, not exposure.
    </p>
  </template>
  <template #cta>
    <button class="btn-neon rounded-lg px-6 py-3">See workflow</button>
  </template>
</b-hero-culture>