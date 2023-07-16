function DiamondPatternWithMirroredSides(num) {
    let spaces = 2 * num - 2;
    let output = "";
  
    for (let i = 1; i <= 2 * num - 1; i++) {
      let stars = i;
      if (i > num) stars = 2 * num - i;
  
      for (let j = 1; j <= stars; j++) {
        output += "*";
      }
  
      for (let j = 1; j <= spaces; j++) {
        output += " ";
      }
  
      for (let j = 1; j <= stars; j++) {
        output += "*";
      }
  
      output += "\n";
  
      if (i < num) {
        spaces = spaces - 2;
        }

      else{
        spaces =spaces +  2;
      } 
    }
  
    console.log(output);
  }
  
  let num = 5;
  DiamondPatternWithMirroredSides(num);
  