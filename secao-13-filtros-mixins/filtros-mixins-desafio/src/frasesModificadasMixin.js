export default {
    computed: {
        fraseComVirgulas() {
			return this.frase.replaceAll(" ", ",")
		},
        comprimentoPalavrasFrase() {
            let array = this.frase.split(" ")
		
            array.forEach((word, index) => {
                array[index] = `${word} (${word.length})`
            });

            return array.join(" ")
        }
    }
}