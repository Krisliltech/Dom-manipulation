////////// FETCH API ////////////////
const profile = () => {
    fetch("https://swapi.dev/api/people")
      .then(res => {
       return res.json();
       })
      .then(data => {console.log(data.results)

     const obj = data.results.map( (item, index) =>  {
           return `<div class="box1">
               <div class="circle">
                <img class="pics" src="images/Avartar${index}.png" alt="image">
               </div>
               <div class = "box2" id="card">
                <button onclick = "toggle('hide${index}')" class="button btns">${item.name}</button> 
               </div>
                <div id="hide${index}" class = " menu-items" style = "display: none" >
                  <h5>Name: ${item.name}</h5>
                  <p>Gender: ${item.gender} </p>\n<p>Height: ${item.height}</p>
                </div>
           </div>
           `
       }).join("")
       document.querySelector("#main").insertAdjacentHTML("beforeend", obj )   
   
   })
}
 profile();      
 
///////////// TOGGLE /////////////////       
toggle = (idname) => {
let element = document.getElementById(idname);
 if(element.style.display ==="none"){
   element.style.display = "block";
 }else{
   element.style.display = "none";
 }
}