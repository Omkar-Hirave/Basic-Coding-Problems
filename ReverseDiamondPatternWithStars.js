function reverseDiamondPatternWithStars(num){
    for(let i = 0 ; i < num ; i++){
        let string = ''
        for(let j = 0 ; j < i ; j++){
            string = string + '.'
        }
        for(let j = 0 ; j < 2 * (num - i) -1 ; j++){
            string = string + '*'
        }
        console.log(string);
        string = string + '\n'
    }
}
let num = 5 
reverseDiamondPatternWithStars(num)