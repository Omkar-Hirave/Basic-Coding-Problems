function O_ShapePattern(num){
    for(let i = 0 ; i < num ; i++){
        let string = ''
        for(let j = 0 ; j < num ; j++){
            if(i=== 0 || i === num-1 || j === 0 || j === num -1){
                string = string + '*'
            }else {
                string = string + ' '
            }
        }
        console.log(string);
    }
}
let num =6 
O_ShapePattern(num)
;
  