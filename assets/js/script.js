
const data= [{
  "src":"multi-strand-wire",
  "title":"multi strand wire",
  "desc":""
},{
  "src":"multi-core-wire",
  "title":"multi core wire",
  "desc":""
},
{
  "src":"aluminium-two-core-wire",
  "title":"Aluminium two core wire",
  "desc":""
},
{
  "src":"copper-single-core-wire",
  "title":"copper single core wire",
  "desc":""
},
{
  "src":"armoured-cable",
  "title":"armoured cable",
  "desc":""
},
{
  "src":"aerial-bundled-cable",
  "title":"aerial bundled cable",
  "desc":""
},
{
  "src":"cat-6-cable",
  "title":"cat 6 cable",
  "desc":""
}









]
    const listlink = document.getElementById('listlink');
    const allProdDrop = document.getElementById('allProdDrop')
    const jsonDataDiv = document.getElementById('productCard');
    const relatedProd = document.getElementById('relatedProd');
    var i = 0;
    data.map((e)=>{
      // Display the data in the div
      if(jsonDataDiv){

        jsonDataDiv.innerHTML += `
        <div class="col-12 col-lg-6">
        <div class="flex-sm-row d-flex gap-4 justify-content-between flex-column-reverse align-items-center rounded-4 p-4" style="background-color: rgb(255, 242, 242);">
        <div class="col-12 col-sm-7 d-flex flex-column gap-1">
        <h5 class="card-title fw-bold fs-3 text-capitalize">${e.title}</h5>
      <p class="card-text mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/product/${e.src}"> <button class="prim-button btn-sml">View More</button></a>
      </div>
      <div class="col-8 col-sm-4 d-flex justify-content-center">
      <img class="img-fluid" src="/assets/images/items/${e.src}.png" alt="Multi Strand Wire">
      </div>
      </div>
      `;
      }
      if(relatedProd){
        if(i <4){
          relatedProd.innerHTML += `
          <div class="col-12 col-lg-6">
          <div class="flex-sm-row d-flex gap-4 justify-content-between flex-column-reverse align-items-center rounded-4 p-4" style="background-color: rgb(255, 242, 242);">
          <div class="col-12 col-sm-7 d-flex flex-column gap-1">
        <h5 class="card-title fw-bold fs-3 text-capitalize">${e.title}</h5>
        <p class="card-text mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/product/${e.src}"> <button class="prim-button btn-sml">View More</button></a>
        </div>
        <div class="col-8 col-sm-4 d-flex justify-content-center">
        <img class="img-fluid" src="/assets/images/items/${e.src}.png" alt="Multi Strand Wire">
        </div>
        </div>
        `;
        i++;
        }
      }
      if(listlink){

        listlink.innerHTML+=`
        <li><a href="/product/${e.src}" style="color:#434343; text-decoration:none; text-transform:capitalize;">${e.title}</a></li>`
        }
        if(allProdDrop){

          allProdDrop.innerHTML+= `
          <li><a class="dropdown-item text-capitalize" href="/product/${e.src}">${e.title}</a></li>`
          }
    })
    

var allProd = document.getElementById('allProd') || null;
if(allProd){
  allProd.addEventListener('mouseenter',()=>{
    
    document.getElementById('allProdDrop').classList.add('show')
  })
  allProd.addEventListener('mouseleave',()=>{
    
    document.getElementById('allProdDrop').classList.remove('show')
  })
}