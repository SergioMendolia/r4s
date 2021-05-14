<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="block">
            <div class="flex items-baseline space-x-4">
              <nuxt-link to="/" class="menu-item">Roll For Scenario</nuxt-link>
              <nuxt-link to="/legal" class="menu-item">Legal</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.menu-item {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium;
}
.nuxt-link-exact-active {
  @apply bg-gray-900;
}
</style>
