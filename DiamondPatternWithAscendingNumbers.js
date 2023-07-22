function DiamondPatternWithAscendingNumbers(num){
    for(let i = 0 ; i < num ; i++){
        let string = ''
        for(let j = 0 ; j < num - i - 1 ; j++){
            string = string + '.'
        }
        for(let j = 0 ; j < 2 * i + 1 ; j++){
            string = string + (j+1)
        }

        for(let j = 0 ; j < num - i - 1 ; j++){
            string = string + '.'
        }
        console.log(string)
    }
}
let num = 5 
DiamondPatternWithAscendingNumbers(num)