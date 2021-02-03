let app = new Vue({

    el: '#app',
    data: {
        counter: 0,
        lastMex: 0,
        personalId: {
            name: 'Cristiano',
            avatar: 'cris.jpg'
        },
        contacts: [
            {
                name: 'Papaya🥑',
                avatar: 'papaya.jpg',
                visible: true,
                messages: [
                    {
                        date: '09:58',
                        text: 'Belin\' oh cri, ci vediamo su Twich!',
                        status: 'received'
                    },
                    {
                        date: '10:58',
                        text: 'Prova 1',
                        status: 'sent'
                    },
                    {
                        date: '11:58',
                        text: 'Prova 2',
                        status: 'received'
                    },
                    {
                        date: '12:58',
                        text: 'Prova 3',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Giacomo',
                avatar: 'jack.jpg',
                visible: false,
                messages: [
                    {
                        date: '09:30',
                        text: 'Partitina ad Age?? Eeezzz',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Emanuele',
                avatar: 'ema.jpg',
                visible: false,
                messages: [
                    {
                        date: '00:17',
                        text: 'Dajjeee!!! 💪',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Davide',
                avatar: 'dave.jpg',
                visible: false,
                messages: [
                    {
                        date: 'ieri',
                        text: 'Tattica del gamberooooo 🦐',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Yuri',
                avatar: 'yuri.jpg',
                visible: false,
                messages: [
                    {
                        date: 'ieri',
                        text: 'Oh, ma te l\'hai finito lo snack?!',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Willyboys',
                avatar: 'willyboys.jpg',
                visible: false,
                messages: [
                    {
                        date: 'ieri',
                        text: 'Tu: Oh, raga... Niente più Svizzera, si resta in Italia',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Elisabetta',
                avatar: 'eli.jpg',
                visible: false,
                messages: [
                    {
                        date: 'ieri',
                        text: 'Ciao Cristiano!! Molto bene il lavoro fino a qui 😉',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Giacomo',
                avatar: 'giacomo.jpg',
                visible: false,
                messages: [
                    {
                        date: 'ieri',
                        text: 'Cristiano vieni su zoom che risolviamo il problema',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Mimmo',
                avatar: 'mimmo.jpg',
                visible: false,
                messages: [
                    {
                        date: '10:25',
                        text: 'Ma chi è quello là?',
                        status: 'sent'
                    },
                    {
                        date: '10:28',
                        text: 'È Billy Ballo: il miglior ballerino del mondo!',
                        status: 'received'
                    },
                    {
                        date: '10:36',
                        text: 'Voglio essere come lui!',
                        status: 'sent'
                    },
                    {
                        date: '11:01',
                        text: 'Non provare ad imitare Billy Ballo, sii te stesso!',
                        status: 'received'
                    },
                    {
                        date: '10:36',
                        text: 'Prova 1',
                        status: 'sent'
                    },
                    {
                        date: '11:01',
                        text: 'Prova 2',
                        status: 'received'
                    },
                    {
                        date: '10:25',
                        text: 'Avrebbe potuto cambiare il mondo...',
                        status: 'received'
                    },
                    {
                        date: '10:28',
                        text: 'Avrebbe potuto risollevare le sorti dell\'umana stirpe...',
                        status: 'received'
                    },
                    {
                        date: '10:36',
                        text: 'Avrebbe potuto risanare il debito pubblico...',
                        status: 'received'
                    },
                    {
                        date: '11:01',
                        text: 'Avrebbe potuto sconfiggere la criminalità...',
                        status: 'received'
                    },
                    {
                        date: '10:36',
                        text: 'Ma anche no',
                        status: 'sent'
                    },
                    {
                        date: '11:01',
                        text: 'Anche No, l\'ultimo capolavoro di Bruno Liegi Bastonliegi.',
                        status: 'received'
                    }
                ]
            }
        ]
    },
    created() {
        console.log(this.contacts[this.counter][this.lastMex]);
    },
    methods: {
        selectContact(indice){
            this.counter = indice;

            /* this.lastMex = this.contacts[this.counter].messages.length - 1;
            console.log(this.lastMex);

            console.log(this.contacts[this.counter].messages[this.lastMex].text); */
        }
    }
});