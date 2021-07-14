<template>
  <v-app>
        <v-main>
      <Tracer/>
     
    </v-main>
  </v-app>
</template>

<script>
import Tracer from './Views/Tracer.vue';

export default {
  name: 'App',

  components: {
    Tracer
  
  },

  data: () => ({
    //
  }),
};
</script>
