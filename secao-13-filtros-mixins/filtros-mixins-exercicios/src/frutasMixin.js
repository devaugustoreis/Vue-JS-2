export default {
    data() {
        return {
            fruta: "",
            frutas: ["banana", "pera", "uva", "maçã", "salada mista"]
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ""
        }
    }
}