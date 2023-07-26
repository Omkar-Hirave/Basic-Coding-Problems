function InvertedLeftTriangle(num){
    for(let i = 0 ; i < num ; i++){
        let string = ''
        for(let j = 0 ; j <= i ; j++){
            string = string + '*'
        }
        console.log(string);
    }return ''
}
let num = 5 
console.log(InvertedLeftTriangle(num));