<template>
  <div>
    <h1 class="text-4xl text-center m-2 uppercase font-bold">
      {{ edition.name }} {{ scenario.title }}
    </h1>
    <div class="scenario">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div><img :src="`/img/${scenario.image}`" /></div>
        <div v-html="scenario.special" class="text-lg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $content }) {
    const scenario = await $content(
      `scenarios/${params.edition}/${params.scenario}`
    ).fetch()
    const edition = await $content(`editions/${params.edition}`).fetch()
    return {
      scenario,
      edition,
    }
  },

  head() {
    return {
      title: `${this.scenario.title} - R4S - Roll for scenario`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.scenario.title} - ${this.scenario.special}`,
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.scenario {
  @apply p-8 rounded-md bg-white shadow-md;
}
</style>
