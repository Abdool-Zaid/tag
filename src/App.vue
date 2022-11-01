<script setup>
import { ref } from 'vue'
let i = undefined;
let latitude = screen.width;
let longitude = screen.height;
let centerCoords = undefined;
let playercount = Math.floor(10 * Math.random());
let playerLocation = [];
playerLocation[0] = centerCoords;
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let scale = { latitude: latitude / 180, longitude: longitude / 360 };

for (i = 0; i < playercount; i++) {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      playerLocation.push(data.results[0].location.coordinates);
      console.table(playerLocation);
    })
  }
  let Static = () => {
    me.style = "";
    players.innerHTML = "";
    i = undefined;
    centerCoords = undefined;
    playercount = Math.floor(100 * Math.random());
    localStorage.clear();
    console.log("cleared");
  };
  let main = () => {
 
  navigator.geolocation.getCurrentPosition((position) => {
    centerCoords = {
      latitude: position.coords.latitude +90,
      longitude: position.coords.longitude +180,
    };
    [playerLocation[0], centerCoords] = [centerCoords, playerLocation[0]];
    if (localStorage.centerCoords) {
      for (i = 1; i <= playercount; i++) {
        players.innerHTML += `
        <div class="playerDIV" id='player${i}'></div>
        `;
      }
    }
    let u = 1;
    for (i=0;i<playerLocation.length;i++){
   playerLocation[i].latitude= parseFloat(playerLocation[i].latitude)+90
   playerLocation[i].longitude= parseFloat(playerLocation[i].longitude)+180
    console.table(playerLocation)
  }


    document.querySelectorAll(".playerDIV").forEach((player) => {
      player.style = `
        background-color:${generateRandomColor()};
        position: fixed;
        margin:1%;
        height:1em;
        aspect-ratio:1;
        border-radius: 50%;
        left: ${Math.floor(
          playerLocation[u].latitude, 2) * scale.latitude
        }px;
        top: ${Math.floor(
         playerLocation[u].longitude, 2) * scale.longitude
        }px;

        `;
      u++;
    });
    me.innerHTML=`._.`
    me.style=`
    position: fixed;
    left: ${Math.floor(
          playerLocation[0].latitude, 2) * scale.latitude
        }px;
        top: ${Math.floor(
         playerLocation[0].longitude, 2) * scale.longitude
        }px;
        
  background-color:red;
height:1em;
aspect-ratio:1;
border-radius: 50%;
    `
    movement()

    localStorage.centerCoords
      ? localStorage.centerCoords
      : localStorage.setItem("centerCoords", JSON.stringify(centerCoords));

  });

};
let movement=()=>{
  // console.clear()
  let center= {}
 let  movementDB=[]
  document.querySelectorAll(".playerDIV").forEach((player) => {
    movementDB.push({x:player.getBoundingClientRect().x, 
      y:player.getBoundingClientRect().y})
    })
    let avg=0

}

// const players= ref(playerLocation.length)
// const Playercount= ref(playercount)
</script>

<template>

<button class="btn btn-primary m-2" @click="main()">run</button>
  <button class="btn btn-primary m-2" @click="Static()">reset</button>
  <!-- <button class="btn btn-primary m-2" @click="mlem(mlem)">test</button> -->
  <div id="me"></div>
  <div id="players"></div>
</template>

<style scoped>
#me{
  animation: animatename 1s linear infinite;
}
@keyframes animatename{
  0%{
  opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
  opacity: 0;
  }
}
</style>
