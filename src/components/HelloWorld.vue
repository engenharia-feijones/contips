<template>
  <div class="hello">
    Acessos Totais: {{acessWithoutFilter }}
    <br/>
    Acessos Por IP: {{ acessWithFilter }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    acessWithoutFilter: "",
    acessWithFilter: "",
    disgraca: {
      ip: "",
      date: "",
    },
  }),

  async created() {
    await this.countIpsWithoutFilter();
    await this.countIpsWithtFilter()
  },

  methods: {

    async countIpsWithoutFilter() {
      let result = await axios.get(
        "https://ssacapsapi.azurewebsites.net/api/AcessIP"
      );
      this.acessWithoutFilter = result.data.length;
    },

    async countIpsWithtFilter() {
      let result = await axios.get(
        "https://ssacapsapi.azurewebsites.net/api/AcessIP/GetByGroup"
      );
      this.acessWithFilter = result.data.length;
    },
  },
};
</script>


