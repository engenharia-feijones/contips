<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="dadosTable"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  name: "Table",

  data: () => ({
    search: "",
    headers: [
      { text: "IP", align: "start", filterable: false, value: "IP" },
      { text: "DATA", value: "dateAcess" },
      { text: "CIDADE", value: "city" },
      { text: "ESTADO", value: "region" },
    ],
  }),

  props: {
     dadosTable: {
      type: Array,
      required: true,
    },
  },
};
</script>
