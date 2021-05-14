<template>
  <div>
    <h1 class="text-4xl m-2">Roll for Scenario</h1>
    <p class="m-2">
      Playing a Warmachine/Hordes game? Select or randomize your scenario here
    </p>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
      <div
        v-for="edition in editions"
        :key="edition.id"
        :class="{ edition: true, actual: edition.actual }"
      >
        <h2>{{ edition.name }}</h2>

        <p>{{ edition.description }}</p>
        <ul class="scenarios">
          <li
            v-for="scenario in scenariosByEdition(edition.id)"
            :key="`${scenario.title}${scenario.edition}`"
          >
            <nuxt-link :to="`${scenario.edition}/${scenario.slug}`">{{
              scenario.title
            }}</nuxt-link>
          </li>
        </ul>
        <nuxt-link :to="`${edition.id}`" rel="nofollow noindex" class="btn">
          Roll a {{ edition.name }} scenario
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      editions: await $content('editions').sortBy('actual', 'desc').fetch(),
      scenarios: await $content('scenarios', { deep: true })
        .sortBy('title', 'asc')
        .fetch(),
    }
  },
  methods: {
    scenariosByEdition(edition) {
      return this.scenarios.filter((value) => {
        return value.edition === edition
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.edition {
  @apply p-4 text-gray-400 rounded-md bg-gray-50 shadow-md;
}
.edition h2 {
  @apply text-2xl m-1;
}
.actual {
  @apply text-black bg-blue-50;
}
.scenarios {
  list-style-type: circle;
  @apply pl-6 mb-4;
}
.scenarios li {
  @apply py-1;
}
.btn {
  @apply p-2 rounded-md bg-blue-400 text-white w-64 mx-auto block text-center;
}
</style>
