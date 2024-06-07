<template>
    <div class="nav-bar">
        <img src="../assets/logo.png" alt="logo Stock Trader" class="logo">
        <div>
            <router-link to="/" class="menu-item" active-class="active" exact>INÍCIO</router-link>
            <router-link to="/portfolio" class="menu-item" active-class="active">PORTFÓLIO</router-link>
            <router-link to="/acoes" class="menu-item" active-class="active">AÇÕES</router-link>
        </div>
        <div class="menu-actions">
            <a class="menu-item" @click="endDay()">FINALIZAR DIA</a>
            <a class="menu-item save-load-item" @click="showSaveLoad = true">SALVAR & CARREGAR</a>
            <div class="save-load-submenu" :class="{'show': showSaveLoad}">
                <p class="sub-menu-item" @click="saveData()">Salvar Dados</p>
                <p class="sub-menu-item" @click="loadData()">Carregar Dados</p>
            </div>
            <a class="menu-item">SALDO: {{ funds | R$ }}</a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        },

        allStocks() {
            return this.$store.getters.allStocks
        }
    },

    data() {
        return {
            showSaveLoad: false
        }
    },

    mounted() {
        document.addEventListener("mouseup", event => {
            if (!event.target.classList.contains("save-load-item") &&
                !event.target.classList.contains("save-load-submenu") &&
                !event.target.classList.contains("sub-menu-item")
            )
                this.showSaveLoad = false 
        })
    },

    methods: {
        endDay() {
            this.$store.dispatch("randomizeStocksPrice")
        },

        saveData() {
            this.$http.put("funds.json", this.funds)
            this.$http.put("stocks.json", this.allStocks)
            this.showSaveLoad = false
        },

        loadData() {
            this.$http.get("funds.json").then(res => this.$store.dispatch("loadFunds", res.data))
            this.$http.get("stocks.json").then(res => this.$store.dispatch("loadStocks", res.data))
            this.showSaveLoad = false
        }
    }
}
</script>

<style scoped>
.nav-bar {
    height: 70px;
    width: 100vw;
    background-color: rgb(248, 248, 248);
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 4px 0px rgba(138,138,138,1);
}

.logo {
    margin: 0 25px;
    height: 90%;
}

.menu-actions {
    margin-left: auto;
}

.menu-item {
    cursor: pointer;
    text-decoration: none;
    color: black;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0 20px;
    display: inline-block;
    line-height: 70px;
    transition: 0.3s;
}

.active, .menu-item:hover, .sub-menu-item:hover {
    background-color: rgb(216, 216, 216);
}

.menu-actions .menu-item:last-child {
    cursor: default;
}

.save-load-submenu {
    font-size: 0.9rem;
    font-weight: 600;
    position: absolute;
    right: 190px;
    display: none;
    text-align: center;
    width: 201px;
    height: 100px;
}

.sub-menu-item {
    background-color: rgb(248, 248, 248);
    line-height: 45px;
    transition: 0.3s;
    cursor: pointer;
}

.show {
    display: block;
}
</style>