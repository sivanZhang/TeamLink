<template>
  <div>
    <GmapMap :center="center" :zoom="17"  :options="{
   zoomControl: true,
   mapTypeControl: true,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   disableDefaultUi: false
 }" map-type-id="terrain" style="width: 100%; height: 100%;">
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :icon="{ url: require('../../assets/location.svg')}"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    position: Array
  },
  computed: {
    markers() {
      return [
        {
          position: {
            lat: parseFloat(this.position[0]),
            lng: parseFloat(this.position[1])
          }
        }
      ];
    }
  },
  created(){
    this.center={
        lat: parseFloat(this.position[0]),
        lng: parseFloat(this.position[1])
      };
  }
};
</script>

    