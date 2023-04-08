import { userinterface } from "./ui.module.js";


export class Details {
    constructor(id) {
        this.userinterface = new userinterface();

        document.getElementById("btnClose").addEventListener('click', function () {
            document.getElementById("home").classList.remove('d-none');
            document.getElementById("sec2").classList.remove('d-none');
            document.getElementById("details").classList.add('d-none')

        });


        this.getdtails(id)
    }
    


    async getdtails(idgames) {
        const loading = document.querySelector('.loading');
        loading.classList.remove('d-none');


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fcc16cc01emshea2e67224ada855p177d99jsna8fb7be83753',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };




        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idgames}`, options);
        let res = await api.json();
        this.userinterface.displayDtails(res)
        loading.classList.add('d-none');




    }
}