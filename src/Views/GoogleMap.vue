<template>
    <v-card>
        <v-card-title 
         class="txtCenter"
        >Localização dos Acessos</v-card-title>
        <v-card-text>
           
         
                 <GmapMap
                    :center="center"
                    :zoom="14"
                    style="width: 100%; height: 515px"
                >
                    <div
                        v-for="(m,index) in coords"
                        :key="index"
                        >
                        <GmapMarker
                            :key="index"
                            v-for="(m, index) in coords"
                            :position="m.position"
                            :clickable="true"
                        >  
                        </GmapMarker> 
                    </div>
                    </GmapMap>

        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: "GoogleMap",
    data () {
       return {
            center: { lat: -12.717030617531089,  lng: -38.3125793488901 }, // Localização do atlantico life
            svgMarker: {
                path:
                    "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
                    fillColor: "blue",
                    fillOpacity: 0.6,
                    strokeWeight: 0,
                    rotation: 0,
                    scale: 2,
            },
       }
    },
    props: {
        coords:{
            type: Array,
            required: true
        }
        
    },
}
</script>


<style scoped>
    .txtCenter {
        display: flex ;
        justify-content: center;
    }
</style>