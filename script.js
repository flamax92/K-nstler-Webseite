const projects={


"dance-for-increasing-distances":{

title:"Dance for Increasing Distances",


hero:[

"images/dance-for-increasing-distances/hero1.jpg",

"images/dance-for-increasing-distances/hero2.jpg",

"images/dance-for-increasing-distances/hero3.jpg"

]


gallery:[

"images/dance-for-increasing-distances/gallery1.jpg",

"images/dance-for-increasing-distances/gallery2.jpg"

]

}



"port-de-bras":{

title:"Port de Bras",

hero:[

"images/port-de-bras/hero1.jpg",

"images/port-de-bras/hero2.jpg"

]


gallery:[

"images/port-de-bras/gallery1.jpg"

]

}

};const slider=document.getElementById("slider");


project.hero.forEach((src,index)=>{


let div=document.createElement("div");

div.className="slide";


if(index===0){

div.classList.add("active");

}


div.innerHTML=
`
<img src="${src}">
`;


slider.appendChild(div);


})


let slides=document.querySelectorAll(".slide");


let current=0;


setInterval(()=>{


slides[current].classList.remove("active");


current=(current+1)%slides.length;


slides[current].classList.add("active");


},5000);const gallery=document.getElementById("gallery");


project.gallery.forEach(src=>{


let img=document.createElement("img");

img.src=src;

img.alt=project.title;


gallery.appendChild(img);


})
