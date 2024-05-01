var post=document.getElementById('post');
var anew=[];

fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-04-01&sortBy=publishedAt&apiKey=98bd39ed0f8b4852b129548a6617b4b3')
    .then( (resp) => { return resp.json() } )
    .then(json => articles = json)
    .then( articles  => {
        var preview = ``;
        anew=articles.articles;
        console.log(articles)
        for (let i = 0; i < anew.length; i++) {
          
            preview += ` <div class="card mx-2 pt-5" style="width: 18rem;">
            <img src="${anew[i].urlToImage}" class="card-img-top img-fluid w-100" alt="">
            <div class="card-body container">
              <h5 class="card-title ">${anew[i].title}</h5>
              <p class="card-text">${anew[i].description}</p>
              <a href="#" class="btn btn-primary">Reade more</a>
            </div>
        </div>`
        // fillAllProducts.insertAdjacentHTML('afterbegin',preview)
        post.innerHTML = preview;
        }
      })

// var post = document.getElementById('post');
// var news =[]

// fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-30&sortBy=publishedAt&apiKey=98bd39ed0f8b4852b129548a6617b4b3")
// .then(response => response.json())
// .then(json=>news = json)
// .then( news  => {
//     console.log(news);
//     var content=''
//     for (let i = 0; i < news.length; i++) {
//         content += `<div class="col-4">
//         <div class="border border-2 my-2">
//             <div class="img">
//             <img class="w-100" src="${news[i].urlToImage}" alt="">
//         </div>
//             <div class="text-center">
//                 <h3>${news[i].title}</h3>
//                 <p>${news[i].content}</p>
//             </div>
//         </div>
//     </div>`
        
//     }
//     post.innerHTML = content
// })

