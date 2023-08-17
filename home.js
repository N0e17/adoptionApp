let btn = document.getElementById("btnClick")
const url = `https://api.thecatapi.com/v1/images/search?limit=6`
// let image=document.getElementById("catimage")]
const api_key = "live_y4DgHWYYI3rQXRCf3H6QIsclW2n0W2B2JrvzepdZrHyRxuGVvPoRKf8JsYb4bvzV"

btn.addEventListener('click', function () {
    let catimg = document.querySelectorAll(".catimg")
    catimg.innerHTML='';
    let catsImgUrl = []
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        for (let i = 0; i < data.length; i++) {
            catsImgUrl.push(data[i].url) 
        }
        for (let i = 0; i < catimg.length; i++) {
            catimg[i].setAttribute('src', `${catsImgUrl[i]}`)   
        }
        
})
.catch(err => console.log(err))
    })


//Bug testing 
// btn.addEventListener('click', function () {
//     let catimg = document.querySelectorAll(".catimg");
//     for (let i = 0; i < catimg.length; i++) {
//         catimg[i].setAttribute('src', `${catimgUrl}`)   
//     }
//     catimg.innerHTML='';
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>{ 
//         for (let i = 0; i < data.length; i++) {
//             let catimgUrl = data[i].url;
//             catimg.setAttribute('src', `${catimgUrl}`)   
//         }
        
// })
// .catch(err => console.log(err))
//     })

//Bug testing 
// btn.addEventListener('click', function () {
//     let catimg = document.querySelectorAll(".catimg")
//     catimg.innerHTML='';
//     let catsImgUrl = []
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>{let catimgUrl = data[0].url 
//         for (let i = 0; i < catimg.length; i++) {
//             catimg[i].setAttribute('src', `${catimgUrl}`)   
//         }
        
// })
// .catch(err => console.log(err))
//     })

let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modal-img");

document.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.id==="catimage") {
      modal.style.display = "block";
      modalImg.src = elem.dataset.biggerSrc || elem.src; 
    }
  })

 let span = document.getElementsByClassName("close")[0];
  span.onclick = function() { 
    modal.style.display = "none";
  }
