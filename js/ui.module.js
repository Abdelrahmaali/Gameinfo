export class userinterface {

   displayDatagames(response) {

      let gamecontainer = ``;
      for (let i = 0; i < response.length; i++) {
         gamecontainer += ` <div class="col-md-3">
           <div data-id="${response[i].id}" class="card h-100 bg-transparent" role="button" >
              <div class="card-body">
                 <figure class="position-relative">
                    <img class="card-img-top object-fit-cover h-100" src="${response[i].thumbnail}">
                 
                 </figure>
     
                 <figcaption>
     
                    <div class="hstack justify-content-between">
                       <h3 class="h6 small">${response[i].title}</h3>
                       <span class="badge text-bg-primary p-2">Free</span>
                    </div>
     
                    <p class="card-text small text-center opacity-50">
                    ${response[i].short_description.split(" ", 8)}
                    </p>
     
                 </figcaption>
              </div>
     
              <footer class="card-footer small hstack justify-content-between">
     
                 <span class="badge badge-color">${response[i].genre}</span>
                 <span class="badge badge-color">${response[i].platform}</span>
     
              </footer>
           </div>
        </div>`;

      }
      document.getElementById('gameData').innerHTML = gamecontainer;

   }





   displayDtails(data) {


      let dtailscontainer = ` <div class="col-12">
          <div>
             <h2>Details Game </h2>
          </div>
        </div>
   
         <div class="col-md-4">
          <img src="${data.thumbnail}" class="w-100" alt="image details" />
         </div>
         <div class="col-md-8">
          <h3>Title: ${data.title}</h3>
          <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
          <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
          <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
          <p class="small">Eternal Fury is a free-to-play ARPG from R2 Games. The game is an HTML 5 port of a mobile game developed by Game Hollywood. In it, take part in a classic struggle of good vs evil, interacting with characters based on Norse mythology. One of the features of Eternal Fury is that players are given an opportunity to build their own kingdom, using it as a base of operations. Of course, they also need to defend it. They'll be competing with other players for land and resources, and also fighting against them in everything from castle raids to arena PvP. As should be expected in this type of game, there is a guild system that allows players to band together, taking on different tasks together and sharing the rewards.</p>
          <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
         </div>` ;




      document.getElementById("details").classList.remove('d-none');

      document.getElementById("dtailsinsert").innerHTML = dtailscontainer;



   }


}