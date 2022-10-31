<script setup>
  let i =undefined;
  let centerCoords =undefined;
  let playercount=Math.floor(10*Math.random())
  let playerLocation=[]
  playerLocation[0]=centerCoords
  function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  for(i=0;i<playercount;i++){
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then((data)=>{
      playerLocation.push(data.results[0].location.coordinates)
      console.table(playerLocation  )
    })
  }
let Static= ()=>{
  i =undefined;
   centerCoords =undefined;
   playercount=Math.floor(100*Math.random())
localStorage.clear()
console.log('cleared')
}

let main = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    centerCoords = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
[playerLocation[0],centerCoords]=
[centerCoords,playerLocation[0]]
    if(localStorage.centerCoords){
      for(i=1; i<=playercount;i++){
          console.log(
playerLocation[i].latitude-playerLocation[0].latitude,
playerLocation[i].longitude-playerLocation[0].longitude
)
players.innerHTML+=`
<div class="playerDIV" id='player${i}'></div>
`
document.querySelectorAll('.playerDIV').forEach((player)=>{
player.style=`
margin:1%;
  height:1em;
  aspect-ratio:1;
  border-radius: 50%;
  background-color:${generateRandomColor()};  
  `            
})
        }
    }
localStorage.centerCoords?localStorage.centerCoords:
localStorage.setItem('centerCoords',JSON.stringify(centerCoords) )
  });
me.style=`
position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
height:1em;
aspect-ratio:1;
border-radius: 50%;
background-color:red;  
`
};

</script>

<template>
  <button class="btn btn-primary m-2" @click="main()">run</button>
  <button class="btn btn-primary m-2" @click="Static()">reset</button>
  <div id="me"></div>
<div id="players"></div>
</template>

<style scoped>

</style>
