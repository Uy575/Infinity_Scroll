let imgSection = document.getElementById("imgContainer");
const load = document.getElementById('loader');


const limit = 20;
const  apiKey = "vc2qO6X35-VDhZwL0m5r_37aECf19Rvx0pU3q1c2t7k";
// const apiUrl = `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`;
const unsplashApi = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${limit}`
let data = [];

imgSection.hidden = true;
load.hidden = false;
function loading(){
    imgSection.hidden = true;
    load.hidden = false;
}
function complete(){
    imgSection.hidden = false;
    load.hidden = true;
}
function displayPhotos(){


    data.forEach((photos) => {
   const item = document.createElement('img');
   item.setAttribute('src',photos.url);
   item.setAttribute('alt',photos.title);

   imgSection.appendChild(item);

});
}
function displayPhotos(){

    loading();
    data.forEach((photos) => {
   const item = document.createElement('img');
   item.setAttribute('src',photos.urls.regular);
   item.setAttribute('alt',photos.alt_description);
   imgSection.appendChild(item);
   complete();

});


}

async function fetchingPhotos(){
    
     const response = await fetch(unsplashApi);
     data = await response.json();
    displayPhotos();
    


}

window.addEventListener("scroll",()=>{
    const {scrollHeight, scrollTop,clientHeight} = document.documentElement;
    if(scrollHeight <= scrollTop + clientHeight){
        console.log(scrollHeight);
        console.log(scrollTop);
        console.log(clientHeight);
        displayPhotos();
       
    }

});
fetchingPhotos();

