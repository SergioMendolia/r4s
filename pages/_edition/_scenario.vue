<template>
  <div>
    <h1 class="text-4xl m-2">{{ edition.name }} {{ scenario.title }}</h1>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <div><img :src="`/img/${scenario.image}`" /></div>
      <div v-html="scenario.special"></div>
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
}
</script>

<style lang="postcss" scoped></style>
