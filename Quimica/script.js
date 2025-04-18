let animation=document.querySelector(".animation")
document.addEventListener("DOMContentLoaded",() =>{
    let a=["Web Dev","Graphic Design","Content Writing","Video Editing"]
    let b=["red","yellow","cyan","orange"]
    let i=0
   setInterval(()=>{
    animation.innerText=a[i]
    animation.style.color=b[i]
    i++
    if (i===a.length){
        i=0
    }
   },1000)
})

let segment=document.querySelector(".segment")
let image=document.querySelector(".segment img")
k=0
document.addEventListener("DOMContentLoaded",()=>{
    let c=["image1.jpg","image3.jpg","image4.jpg"]
    setInterval(()=>{
image.src=c[k]
k++
if (k===c.length){
    k=0
}
    },1500)
})


let image1=document.querySelector(".segment1 img")
l=0
document.addEventListener("DOMContentLoaded",()=>{
    let d=["image2.jpg","img1.jpg","img2.png"]
    setInterval(()=>{
image1.src=d[l]
l++
if (l===d.length){
    l=0
}
    },1500)
})



