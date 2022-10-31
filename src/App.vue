<script setup>
let i;
let centerCoords;
let main = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    centerCoords = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    if(localStorage.centerCoords){
      console.log(centerCoords.longitude- JSON.parse(localStorage.centerCoords).longitude,
      centerCoords.latitude-JSON.parse(localStorage.centerCoords).latitude
      )
    }
    console.log('clicked')
localStorage.centerCoords?localStorage.centerCoords:
localStorage.setItem('centerCoords',JSON.stringify(centerCoords) )

  });
};
</script>

<template>
  <button class="btn btn-primary" @click="main()">run</button>
</template>

<style scoped></style>
