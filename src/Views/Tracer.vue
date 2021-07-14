<template>
  <v-container>
    <div class="txtCenter">
      Acessos totais: {{ acessWithoutFilter }}
      <br />
      Acessos por IP: {{ acessWithFilter }}
    </div>
    <div class="mt-10" v-if="mostrar">
      <GoogleMap :coords="coords" />
    </div>
    <div>
      <Table :dadosTable="dadosTable" :key="dadosTable.length" />
    </div>
  </v-container>
</template>

<script>
import { TracerServices } from "../domain/tracer.service";
import GoogleMap from "./GoogleMap.vue";
import Table from "../components/Table.vue"
export default {
  name: "Tracer",
  components: {
    GoogleMap,
    Table
  },

  data: () => ({
    tracerServices: TracerServices,
    cep: " ",
    estado: " ",
    enderecos: [],
    cordenadas: {},
    coords: [],
    dadosTable: [],
    mostrar: false,
    acessWithoutFilter: "",
    acessWithFilter: "",
  }),

  methods: {
    async getCordenates() {
      let result = await this.tracerServices.get();
      this.getDates(result.data)
      result.data.forEach((endereco, position) => {
        this.coords[position] = {
          position: {
            lat: +endereco.latitude,
            lng: +endereco.longitude,
          },
        };
      });
      this.mostrar = true;
    },

    getDates(data){
      console.log(data)
      data.forEach((ip,pos) => {
        this.dadosTable[pos]={
         IP: ip.ip,
         dateAcess:  ip.dateAcess.replace("T00:00:00",""),
         city: ip.city,
         region: ip.region

        }
        console.log(this.dadosTable[pos])
      })


    },

    async countIpsWithoutFilter() {
      let result = await this.tracerServices.get();
      this.acessWithoutFilter = result.data.length;
    },

    async countIpsWithtFilter() {
      let result = await this.tracerServices.getByGroup();
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
  display: flex;
  justify-content: center;
}
</style>
