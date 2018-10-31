<template>
    <div id="app">

        <l-map :zoom="zoom" :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>
</template>

<script>
    export default {
        name: 'map',
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        data() {
            return {
                zoom: 13,
                center: L.latLng(47.413220, -1.219482),
                url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
            }
        }
    }
</script>

<style lang="scss">
    html,
    body,
    #map {
        height: 100%;
        margin: 0;
    }
</style>