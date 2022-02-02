function sum(num1, num2){
    return num1 + num2
    }
    sum(40,2)
    sum(42,0)
    console.log("the answer to everything is", sum(42,0))



sumdum = (num1, num2) => {
    return num1 + num2
}
console.log("The meaning of life " + sumdum(25,17))
    


function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
    }
    
    let longestCityNameInTheWorld =
    "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"
    stringLength(longestCityNameInTheWorld)

    StringLengthCalc = (str) => console.log(`Wow word length "${str}" is:`, str.length,"waw")

    StringLengthCalc(longestCityNameInTheWorld)




    function stringLength(str){
        let length = str.length
        console.log(`the length of "${str}" is:`, length)
        return str.length
        }
        
        stringLength("willynilly")

        StrLength = (str) => {
            let length = str.length
            console.log(`the length of "${str}" is:`, length)
            return str.length
        }

        StrLength("willynilly")


        let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){
alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) 
}


showAlert("you ball of fluff")

showAlrt = (name) =>{
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) 
}

showAlrt("you ball of snuff")

