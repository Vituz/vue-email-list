const app = new Vue({
    el: '#app',

    data:{

        // email: '',
        emailList: [],
    },

    methods:{

    },

    mounted(){

        const request = new XMLHttpRequest();
        let i = 0
        while(i < 10){
            request.open('GET', 'https://flynn.boolean.careers/exercises/api/random/mail', false);
            request.send(null)
            
            if(request.status === 200){
                    let email = JSON.parse(request.responseText).response;
                    this.emailList.push(email);
                    i++;
            }    
        }
    },
});