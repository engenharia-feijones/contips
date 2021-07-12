<template>
  <div class="hello"></div>
</template>

<script>
import axios from 'axios'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  created(){
    this.getIPFromAmazon();
  },

  methods: {
    async getIPFromAmazon() {
      let result = await axios.get("https://api.db-ip.com/v2/free/self");

      console.log(result.data.ipAddress);
    },
  },



};
</script>


