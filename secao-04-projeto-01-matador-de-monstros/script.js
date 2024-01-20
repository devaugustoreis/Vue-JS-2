new Vue({
    el: "#monster-killer-game",
    data: {
        gameStarted: false,
        turnNumber: 1,
        playerHealth: 100,
        monsterHealth: 100,
        combatLog: [],
        result: ""
    },
    computed: {
        resultStyle() {
            let color = "#ffb60c"
            if (this.result == "VITÓRIA!") color = "green"
            else if (this.result == "DERROTA!") color = "red"

            return {
                color: `${color}`,
            }
        }
    },
    watch: {
        playerHealth() {
            if (this.playerHealth < 0) this.playerHealth = 0
            else if (this.playerHealth > 100) this.playerHealth = 100 
        },
        monsterHealth() {
            if (this.monsterHealth < 0) this.monsterHealth = 0
        }
    },
    methods: {
        attack(special) {
            let plus = 0
            if (special) plus = 5

            let playerAttack = this.randomNumberBetween(5 + plus, 10 + plus)   
            let monsterAttack = this.randomNumberBetween(7, 12) 

            this.monsterHealth -= playerAttack
            this.playerHealth -= monsterAttack

            if (special == false) this.addToLog("attack", playerAttack, monsterAttack)
            else this.addToLog("special attack", playerAttack, monsterAttack)
            this.checkBattleResult()
        },
        heal() {
            let playerHeal = this.randomNumberBetween(8, 13) 
            let monsterAttack = this.randomNumberBetween(7, 12) 

            this.playerHealth += playerHeal
            this.playerHealth -= monsterAttack

            this.addToLog("heal", playerHeal, monsterAttack)
            this.checkBattleResult()
        }, 
        resetGame(newGame) {
            this.gameStarted = newGame
            this.turnNumber = 1,
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.combatLog = [],
            this.result = ""
        },
        randomNumberBetween(start, end) {
            return Math.floor(Math.random() * (end - start + 1)) + start
        },
        checkBattleResult() {
            if (this.playerHealth <= 0 && this.monsterHealth <= 0) this.result = "EMPATE!"
            else if (this.monsterHealth <= 0) this.result = "VITÓRIA!"
            else if (this.playerHealth <= 0) this.result = "DERROTA!"

            if (this.result != "") this.gameStarted = false
        },
        healthBarFill(percentage) {
            let color = "green"
            if (percentage <= 20) color = "red"
            else if (percentage <= 50) color = "yellow"

            return {
                backgroundColor: `${color}`,
                width: `${percentage}%`
            }
        },
        addToLog(action, PlayerR, MonsterR) {
            let turn = {
                number: this.turnNumber++,
                command: action,
                playerRoll: PlayerR,
                monsterRoll: MonsterR
            }
            this.combatLog.unshift(turn)
        }
    }
})