function InvertedRightTriangle(num){
    let string = ''
    for(let i = 0 ; i < num ; i++){
        for(let j = i + 1 ; j <= num ; j++){
            string = string + '*'
        }
        string = string + '\n'
    }
    return string 
}
let num = 5 
console.log(InvertedRightTriangle(num));