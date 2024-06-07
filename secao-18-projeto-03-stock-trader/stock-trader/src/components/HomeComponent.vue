<template>
    <div class="home-content">
        <h1 class="home-title">Negocie e Consulte suas Ações</h1>
        <div class="instruction blue">Você pode Salvar & Carregar os dados</div>
        <div class="instruction green">Clique em `Finalizar Dia` para iniciar um novo dia!</div>
        <hr>
        <p class="balance">Seu Saldo: {{ funds | R$ }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style scoped>
.home-content {
    width: 85vw;
}

.home-title {
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 20px;
}

hr {
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 20px 0 25px 0;
}

.instruction {
    color: white;
    padding: 8px;
    margin-bottom: 15px;
    border-radius: 3px;
    box-shadow: 0px 2px 5px 0px rgba(44, 44, 44, 0.6);
}

.balance {
    font-size: 1.5rem;
    font-weight: 600;
}
</style>