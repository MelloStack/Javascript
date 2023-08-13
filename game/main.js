const Symbols = document.querySelectorAll(".symbols")

const Bot_Availeble_symbols = ["stoneBot", "paperBot", "cutterBot"]
const bot_Symbol_Chosen = []

const get_html_points_doom = document.getElementById("pointText")
//X ICON
const getCloseElement = document.getElementById("close")

const get_battle_section = document.getElementById("inGame")
const get_battle_section_player = document.getElementById("player")
const get_battle_section_bot = document.getElementById("bot")

let Points = 0;

let playerEveryCreatedSymbols = []
let botEveryCreatedSymbols = []


const createNewSymbol = (event) => {
    get_battle_section.style.display = "flex"
    
    
    const clickedSymbol = event.target.classList[0]
    
    const createPlayerBattleSymbol = document.createElement("div")
    const createbotChosenSymbol = document.createElement("div")
    
    const botRandomChosenClass = Bot_Availeble_symbols[Math.floor(Math.random() * 3)]
    bot_Symbol_Chosen.push(botRandomChosenClass)

    
    
    createPlayerBattleSymbol.classList.add(clickedSymbol)
    createbotChosenSymbol.classList.add(botRandomChosenClass)
    
    playerEveryCreatedSymbols.push(createPlayerBattleSymbol)
    botEveryCreatedSymbols.push(createbotChosenSymbol)

    
    get_battle_section_player.append(createPlayerBattleSymbol)
    get_battle_section_bot.append(createbotChosenSymbol)

    
}


const checking_if_wins = (event) => {

    if(event.target.classList[0] == "cutter" &&  bot_Symbol_Chosen.pop() == "paperBot"){
        console.log("Voce Ganhou")
        Points++
    }

    if(event.target.classList[0] == "paper" && bot_Symbol_Chosen.pop() == "stoneBot"){
        console.log("vc Gangou")
        Points++
    }
    
    if(event.target.classList[0] == "stone" && bot_Symbol_Chosen.pop() == "cutterBot"){
        console.log("vc ganhou")
        Points++
    }

    get_html_points_doom.innerHTML = Points
}


const exit_to_home_page = () => {
    
    getCloseElement.addEventListener("click", () =>{
        botEveryCreatedSymbols.shift().remove()
        playerEveryCreatedSymbols.shift().remove()
        get_battle_section.style.display = "none"
    })
}


Symbols.forEach((EachSymbol) => {
    EachSymbol.addEventListener("click", (event) => {
        
        
        createNewSymbol(event)
        
        checking_if_wins(event)
        
        exit_to_home_page()        
 
    })
    
    
})

