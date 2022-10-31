<script setup>
let i = undefined;
let latitude = screen.width;
let longitude = screen.height;
let centerCoords = undefined;
let playercount = Math.floor(10 * Math.random());
let playerLocation = [];
let getAverage=(arr, ARRvalue)=>{
  getAverage=0
  ARRvalue=eval(ARRvalue)
  console.log(ARRvalue)
  console.log(arr[0].ARRvalue
)
  for(i=0;i<arr.length;i++){
getAverage=getAverage+arr[i].value
  }
  return getAverage/arr.length
}
playerLocation[0] = centerCoords;
function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// let  mlem=(mlem)=>{
//   console.log(mlem)
//   console.log(mlem(mlem))
//   try {
//     mlem(mlem)
//   } catch (error) {
//     if(error){
//       mlem(mlem)
//     }
//   }
// }

// -90 to 90 for latitude(x) and -180 to 180 for longitude(y)
let scale = { latitude: latitude / 180, longitude: longitude / 360 };

for (i = 0; i < playercount; i++) {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      playerLocation.push(data.results[0].location.coordinates);
      console.table(playerLocation);
    });
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
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
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
    document.querySelectorAll(".playerDIV").forEach((player) => {
      player.style = `
        background-color:${generateRandomColor()};
        position: fixed;
        margin:1%;
        height:1em;
        aspect-ratio:1;
        border-radius: 50%;
        left: ${Math.floor(
          Math.sqrt(Math.pow(playerLocation[u].latitude, 2)) * scale.latitude
        )}px;
        top: ${Math.floor(
          Math.sqrt(Math.pow(playerLocation[u].longitude, 2)) * scale.longitude
        )}px;
        `;
      u++;
    });
    movement()

    localStorage.centerCoords
      ? localStorage.centerCoords
      : localStorage.setItem("centerCoords", JSON.stringify(centerCoords));

  });
  me.innerHTML=`._.`
  me.style = `
  background-color:red;
height:1em;
aspect-ratio:1;
border-radius: 50%;
`;

};
let movement=()=>{
  console.clear()
  let center= {}
 let  movementDB=[]
  document.querySelectorAll(".playerDIV").forEach((player) => {
    movementDB.push({x:player.getBoundingClientRect().x, 
      y:player.getBoundingClientRect().y})
    })
      console.log(getAverage(movementDB,'x'))
}
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
