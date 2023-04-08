import { Details } from "./details.module.js";
import { userinterface} from "./ui.module.js";


export class games {
    constructor() {
        this.getGames('mmorpg')

        let items = document.querySelectorAll('#home ul li');

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', (e) => {
                document.querySelector("#home .active").classList.remove('active');
                e.target.classList.add("active");

                this.getGames(e.target.dataset.category);


            });

        }

        this.userinterface = new userinterface();

    }




    async getGames(code) {


        const loading = document.querySelector('.loading');
        loading.classList.remove('d-none');



        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fcc16cc01emshea2e67224ada855p177d99jsna8fb7be83753',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api2 = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${code}`, options);
        const res2 = await api2.json();


        this.userinterface.displayDatagames(res2);

        this.startEvent()

       loading.classList.add('d-none')

    }



    startEvent() {

        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
               const id = item.dataset.id;
               this.showDetails(id);
            });
         });

       
    }



    showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector("#home").classList.add("d-none");
        document.querySelector("#details").classList.remove("d-none");
    }

}