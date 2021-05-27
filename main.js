const app = new Vue({
    el: '#app',

    data:{

        emailList: [],
    },

    methods:{

    },

    mounted(){

        let i = 0
        while(i < 10){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {

                    let email = response.data.response;
                    this.emailList.push(email);
                });

                i++;
        }
    },


});