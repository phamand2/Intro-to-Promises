function timer() {
  new Promise((resolve, reject) => {
    const randNum = Math.floor(Math.random() * 500)
    setTimeout(() => {
      resolve(randNum)}, randNum)
    }
    )
  
    
    
  }
  
  
  timer.then(val => {
    const title = document.createElement('h1')
    title.textContent = val
    document.body.appendChild(title)
  })
