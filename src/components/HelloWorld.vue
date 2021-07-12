<template>
  <div class="hello">

   ip: {{ip}}


  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    ip: String
  },

  async created(){
    await this.getIPFromAmazon();
  },

  methods: {
    async getIPFromAmazon() {
      let result = await axios.get("https://api.db-ip.com/v2/free/self");

      console.log(result.data.ipAddress);
      this.ip=result.data.ipAddress;
    },
  },



};
</script>


