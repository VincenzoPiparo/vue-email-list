Vue.config.devtools = true;
// Descrizione:

// Attraverso l'apposita API di Boolean

// https://flynn.boolean.careers/exercises/api/random/mail

// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue (
    {
        el: '#root',
        data:{
            // Creation a empty array
            myEmails: []
        },
        methods: {
            generationAnewEmail: function() {
                // In API 
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    // console.log(response)
                    this.myEmails.push(response.data.response) 
                    // console.log(this.myEmails)
                }
                )
                
            }
        },

}
)