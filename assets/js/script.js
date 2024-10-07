$(document).ready(function(){
    $('.logocrawler').slick({
        slidesToShow: 6,      
        slidesToScroll: 1,    
        autoplay: true,        
        autoplaySpeed: 1200,   
        dots: false,            
        arrows: false,
        responsive: [
            {
                breakpoint: 1200, // for large devices
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 992, // for medium devices
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768, // for small devices
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576, // for extra small devices
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });
});


fetch('product.json')
.then(response => response.json()) // Parse the JSON data
.then(data => {
  const jsonDataDiv = document.getElementById('productCard');
  const listlink = document.getElementById('listlink');

  data.map((e)=>{
      // Display the data in the div
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
      listlink.innerHTML+=`
      <li><a href="/product/${e.src}" style="color:#434343; text-decoration:none; text-transform:capitalize;">${e.title}</a></li>`
    })
})
.catch(error => console.error('Error fetching JSON:', error));
