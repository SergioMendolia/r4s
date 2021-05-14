<template>
  <div>
    <h1 class="text-4xl text-center m-2 uppercase font-bold">Legal Stuff</h1>
    <div class="scenario">
      This site is 100% unofficial and is not supported by or affiliated with
      Privateer Press Inc. Contents and Game Rules ©2001-2019 Privateer Press
      Inc. All Rights Reserved. Privateer Press, WARMACHINE©, Cygnar, Khador,
      Cryx, Protectorate of Menoth, Retribution of Scyrah, HORDES, Circle
      Orboros, Legion of Everblight, Skorne, Trollbloods, warcaster, warjack,
      warbeast, and all associated logos and slogans are trademarks of Privateer
      Press, Inc. Permission is hereby granted to photocopy and retain
      electronic copies. Any such duplications shall be intended solely for
      personal, noncommercial use and must maintain all copyrights, trademarks,
      or other notices contained therein or preserve all marks associated
      thereof. Privateer Press reserves the right to remove this permission or
      revise contents herein at any time for any reason.
      <p>
        This website is inspired by the now defunct
        <a href="https://github.com/michaelb081988/rollforscenario"
          >rollforscenario.com</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Legal stuff - R4S - Roll for scenario`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `This is a fan website and not associated to Privateer Press. `,
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
