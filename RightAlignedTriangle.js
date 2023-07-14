function printPattern() {
    const num = 7;
    let output = '';
    for (let i = 1; i <= num; i++) { 
      if (i <= num / 2) {
        starsCount = i;
      } else {
        starsCount = num - i + 1;
      }
      for (let j = 1; j <= starsCount; j++) {
        output = output  + '*';
      }
      output = output + '\n'
    }
    console.log(output);
  }
  printPattern();
  