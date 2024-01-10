new Vue({
    el: "#desafio",
    data: {
        nome: "Augusto",
        idade: 29,
        linkImg: "https://file.forms.app/sitefile/funny-developer-memes.jpeg"
    },
    methods: {
        triploIdade() {
            return this.idade * 3
        },
        numeroAleatorio() {
            return Math.random()
        }
    }
})