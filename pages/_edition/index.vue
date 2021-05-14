<template>
  <div>Wait... redirecting</div>
</template>

<script>
export default {
  async asyncData({ $content, params, redirect }) {
    const scenarios = await $content(`scenarios/${params.edition}`).fetch()
    const item = scenarios[Math.floor(Math.random() * scenarios.length)]
    return redirect(302, `/${item.edition}/${item.slug}`)
  },
}
</script>
