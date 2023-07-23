function InvertedRightTriangleWithSameNumbers(num){
    let string = ''
    let count = 1 
    for(let i = 0 ; i < num ; i++){
        for(let j = i + 1 ; j <= num ; j++){
            string = string + count 
        }
        count++
        string = string + '\n'
    }return string 
}
let num = 5
console.log(InvertedRightTriangleWithSameNumbers(num));