/* creo gli oggetti */
/* Ho diversi oggetti dello stesso tipo(rappresentano nazioni) quindi userei una classe con un costruttore.*/
class Country {
    constructor(url, title, description) {
        this.url = url;
        this.title = title;
        this.description = description;
    }
}

const app = new Vue({
    el: "#root",
    data: {
        slides: [
            /* creo gli oggetti passando i parametri corretti nel costruttore  */
            new Country("http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg", "Svezia", "Lorem SVEZIA, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam."),
            new Country("https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg", "Perù", "Lorem PERU', dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam."),
            new Country("https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c", "Chile", "Lorem CHILE, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam."),
            new Country("https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg", "Argentina", "Lorem ARGENTINA, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam."),
            new Country("https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop", "Colombia", "Lorem COLOMBIA, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam."),
        ],
        counter: 0, // incrementando e decrementando questo valore cambierà l'indice di images che è 'bindato' in html,
        auto: null,
        /* ----------------------- le variabili show gestiscono la visualizzazione dei bottoni della pagina nel caso in cui l'autoplay sia attivo o meno */
        showBtnStop: false,
        showBtnPlay: true,
        showBtnBackAndNext: true,
    },
    methods: {
        goNext: function () {
            /* Se il counter arriva alla fine dell'array viene resettato sul valore 0 */
            //////////////////////////////////////////////////////////////////////////////////////////////////
            this.counter === this.slides.length - 1 ? (this.counter = 0) : this.counter++;
        },
        goBack: function () {
            /* Se il counter arriva all'inizio dell'array viene resettato sull'ultimo valore */
            //////////////////////////////////////////////////////////////////////////////////////////////////
            this.counter === 0 ? (this.counter = this.slides.length - 1) : this.counter--;
        },
        startAuto: function () {
            /* autoplay con set interval*/
            //////////////////////////////////////////////////////////////////////////////////////////////////
            this.auto = setInterval(this.goNext, 1000);
            this.showBtnStop = true; // mostra lo stop
            this.showBtnPlay = false; // nascondi il play
            this.showBtnBackAndNext = false; // nascondi back e next buttons
        },
        endAuto: function () {
            /* stoppa l'autoplay*/
            //////////////////////////////////////////////////////////////////////////////////////////////////
            clearInterval(this.auto);
            this.showBtnStop = false; // nascondi lo stop
            this.showBtnPlay = true; // mostra il play
            this.showBtnBackAndNext = true; // mostra back e next buttons
        },
    },
});
