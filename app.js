const app = Vue.createApp({
    
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            phone: '0112801 983 7819',
            gender: 'male',
            city: 'Dhaka',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'

        }
    },
    methods: {
        async getUser() {

            //getting data from API
            const res = await fetch('https://randomuser.me/api/')
            const { results } = await res.json ()

            console.log(results)
            //getting data from api

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.city = results[0].location.city
            this.picture = results[0].picture.large
            this.phone = results[0].phone
        }
    } 
})
app.mount('#app')