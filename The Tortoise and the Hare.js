function timer() {
  new Promise((resolve, reject) => {
    const randNum = Math.floor(Math.random() * 500)
    setTimeout(() => {
      resolve(randNum)}, randNum)
    }
  )  
    
  }
  


  const tortoise = timer ();
  const hare = timer();

  promise.all([tortoise, hare])
    .then(results => {
      const [tortoiseResult, hareResult] = results;
      // Display the winner or determine if it's a tie
      if (tortoiseResult > hareResult){
        console.log('Tortoise Wins')

      } else if (hareResult > tortoiseResult) {
        console.log('Hare Wins')

      } else if (hareResult === tortoiseResult) {
        console.log('Draw')
      }

      // Display the total time it took for each animal
      console.log(`Tortoise: ${tortoiseResult * 0.001}, Hare: ${hareResult * 0.001}`)

    })