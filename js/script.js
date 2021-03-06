let app = new Vue({

    el: '#app',
    data: {
        counter: -1,
        timesClicked: 0,
        counterMex: null,
        delDisplay: false,
        userText:'',
        searchText: '',
        personalId: {
            name: 'Cristiano',
            avatar: 'cris.jpg'
        },
        contacts: [
            {
                name: 'Papaya🥑',
                access: '',
                avatar: 'papaya.jpg',
                hover: false,
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
                access: '',
                avatar: 'jack.jpg',
                hover: false,
                visible: true,
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
                access: '',
                avatar: 'ema.jpg',
                hover: false,
                visible: true,
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
                access: '',
                avatar: 'dave.jpg',
                hover: false,
                visible: true,
                messages: [
                    {
                        date: 'ieri',
                        text: 'Tattica del gamberooooo 🦐',
                        status: 'received'
                    },
                    {
                        date: '18:57',
                        text: 'Un giro di Gin Tonic stasera?',
                        status: 'sent'
                    }
                ]
            },
            {
                name: 'Yuri',
                access: '',
                avatar: 'yuri.jpg',
                hover: false,
                visible: true,
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
                access: '',
                avatar: 'willyboys.jpg',
                hover: false,
                visible: true,
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
                access: '',
                avatar: 'eli.jpg',
                hover: false,
                visible: true,
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
                access: '',
                avatar: 'giacomo.jpg',
                hover: false,
                visible: true,
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
                access: '',
                avatar: 'mimmo.jpg',
                hover: false,
                visible: true,
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
                        date: 'domenica',
                        text: 'Anche No, l\'ultimo capolavoro di Bruno Liegi Bastonliegi.',
                        status: 'received'
                    }
                ]
            }
        ],
        infoMenu: ['Rispondi','Inoltra messaggio','Messaggio Importante','Elimina Messaggio'],
        accessesList: ['online', 'Sta scrivendo...', 'Ultimo accesso di recente', 'Ultimo accesso']
    },
    created() {
        this.contacts.forEach(element => {
            element.access = this.accessesList[3] + ' ' + this.randomAccess();
        });
    },
    methods: {
        selectContact(indice){
            this.counter = indice;
            this.counterMex = null;
        },
        addMex() {
            if (this.userText.length > 0) {

                let time = this.generaRandom(3,6) * 1000;
                
                this.contacts[this.counter].messages.push({
                    date: moment().locale('it').format('LT'),
                    text: this.userText,
                    status: 'sent'
                });

                setTimeout(() => {
                    this.contacts[this.counter].access = this.accessesList[0];
                }, time);

                setTimeout(() => {
                    this.contacts[this.counter].access = this.accessesList[1];
                }, time + 1500);

                setTimeout(() => {
                    
                    this.contacts[this.counter].messages.push({
                        date: moment().locale('it').format('LT'),
                        text: 'ok',
                        status: 'received'
                    });

                    this.contacts[this.counter].access = this.accessesList[0]

                }, time + 3500);

                setTimeout(() => {
                    this.contacts[this.counter].access = this.accessesList[2];
                }, time + 5500);
            }

            this.userText = '';
        },
        classSwitch(element, index) {
            if(element.hover) {
                return 'hover';
            };

            if (index == this.counter) {
                return 'selected';
            };
        },
        mouseOver(element, index) {
            if (!element.hover && index != this.counter) {
                return element.hover = true;
            }
        },
        filterChat() {
            if (this.searchText.length > 0) {
                this.contacts.forEach(element => {
                    if (element.name.toLowerCase().includes(this.searchText.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            } else {
                this.contacts.forEach(element => {
                    element.visible = true;
                });
            }
        },
        selectMex(index) {
            if (this.timesClicked == 0) {
                this.counterMex = index;
                this.timesClicked++;
            } else {
                this.counterMex = null;
                this.timesClicked--;
            }
        },
        deleteMex(index) {
            if (index == this.infoMenu.length - 1) {    
                this.delDisplay = true;
            }
        },
        deleteMexConfirm() {
            this.contacts[this.counter].messages.splice(this.counterMex, 1);

            if (this.contacts[this.counter].messages.length == 0) {
                this.contacts[this.counter].messages.push({
                    date: moment().locale('it').format('LT'),
                    text: 'Inizia una nuova chat con ' + this.contacts[this.counter].name + '!',
                    status: 'received'
                });
            }

            this.counterMex = null;
            this.delDisplay = false;
        },
        deleteMexUndo() {
            this.counterMex = null;
            this.delDisplay = false;
        },
        generaRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },
        randomAccess() {
            const timeArr = ['ore', 'minuti'];
            const time = timeArr[this.generaRandom(0,1)];
            
            if (time == 'ore') {
                newTime = this.generaRandom(2,23) + ' ' + time + ' fa';
            } else {
                newTime = this.generaRandom(2,59) + ' ' + time + ' fa';
            }

            return newTime;
        }
    }
});