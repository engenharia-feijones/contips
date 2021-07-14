<template>
  <v-container>
      <div class="txtCenter" >
          Acessos totais: {{acessWithoutFilter}}
          <br/>
          Acessos por IP: {{acessWithFilter}}
      </div> 
    <div 
    class="mt-10"
     v-if="mostrar"
    >
      <GoogleMap :coords="coords" />
    </div>
  </v-container>
</template>

<script>
import { TracerServices } from "../domain/tracer.service";
import GoogleMap from "./GoogleMap.vue";
export default {
  name: "Tracer",
  components: {
    GoogleMap,
  },

  data: () => ({
    tracerServices: TracerServices,
    cep: " ",
    estado: " ",
    enderecos: [],
    cordenadas: {},
    coords: [],
    mostrar: false,
     acessWithoutFilter: "",
    acessWithFilter: "",
  }),

  methods: {
    async getCordenates() {
      let result = await this.tracerServices.get();
          console.log(result)
      result.data.forEach((endereco, position) => {
        this.coords[position] = {
          position: {
            lat: +endereco.latitude,
            lng: +endereco.longitude,

          },

          
        };
      });
      this.mostrar = true

    },
    async countIpsWithoutFilter() {
      let result = await this.tracerServices.get()
      this.acessWithoutFilter = result.data.length;
    },

    async countIpsWithtFilter() {
      let result = await this.tracerServices.getByGroup()
      this.acessWithFilter = result.data.length;
    },
  },
  async created() {
     this.getCordenates();
    await this.countIpsWithoutFilter();
     await this.countIpsWithtFilter();

  },
};
</script>


<style scoped>
    .txtCenter {
        display: flex ;
        justify-content: center;
    }
</style>
