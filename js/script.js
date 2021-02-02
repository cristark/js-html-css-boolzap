let app = new Vue({

    el: '#app',
    data: {
        personalId: {
            name: 'Cristiano',
            avatar: 'cris.jpg'
        },
        contacts: [
            {
                name: 'Papaya🥑',
                avatar: 'papaya.jpg',
                messages: [
                    {
                        date: '09:58',
                        text: 'Belin\' oh cri, ci vediamo su Twich!',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Giacomo',
                avatar: 'jack.jpg',
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
                messages: [
                    {
                        date: 'ieri',
                        text: 'Tu: Oh, raga... Niente più Svizzera, si resta in Italia',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Giacomo',
                avatar: 'giacomo.jpg',
                messages: [
                    {
                        date: 'ieri',
                        text: 'Cristiano vieni su zoom che risolviamo il problema',
                        status: 'sent'
                    },
                ]
            },
            {
                name: 'Germano',
                avatar: 'download.jpg',
                messages: [
                    {
                        date: 'ieri',
                        text: 'Ma chi è chel mona ch-che-che batte la porta e che chiude u-urlando??!',
                        status: 'sent'
                    },
                ]
            }
        ]
    },
    created() {
        console.log(this.contacts[0].messages[0].date);
    }
});