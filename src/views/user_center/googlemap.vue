<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon="{ url: require('../../assets/marker.png')}" 
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>
to be expected
<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [{position: { lat: 34.2257301, lng: -108.8928764 }}],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        var marker = {
          lat: 34.2257301,
          lng: 108.8928764
        };
        this.markers.push({position: marker});
        marker = {
          lat: 34.2257301,
          lng: 107.8928764
        };
        this.markers.push({position: marker});
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin-top: 50%;
  }
</style>