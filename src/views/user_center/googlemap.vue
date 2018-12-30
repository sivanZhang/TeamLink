<template>
 <div>
    test
    <gmap-map
        :center="center"
        :zoom="7"
        style="width: 100%; height: 300px"
    >
        <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            :label="m.label"
            @click="openWindow"

        />
        <gmap-info-window 
            @closeclick="window_open=false" 
            :opened="window_open" 
            :position="infowindow"
            :options="{
          pixelOffset: {
            width: 0,
            height: -35
          }
        }"
        >
           <div><a href="" >跳转</a></div> Hello world!
        </gmap-info-window>    
    </gmap-map> 

    <table>
        <thead>
            <tr></tr>
        </thead>
        <tbody>
            <tr></tr>
        </tbody>
    </table>
</div>
</template>
to be expected
<script>
export default {
    data () {
        return {
            center: {lat: 10.0, lng: 10.0},
            markers: [
                {
                    label: "A",
                    position: {lat: 10.0, lng: 10.0}
                }, 
                {
                    label: "B",
                    position: {lat: 11.0, lng: 11.0}
                }
            ],
            info_marker: null,
            infowindow: {lat: 10, lng: 10.0},
            window_open: false
        }
    },
    methods: {
        openWindow () {
            this.window_open = true
        }
    }        
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin-top: 50%;
  }
</style>