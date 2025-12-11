const reward = document.querySelector("#reward")
const counter = document.querySelector("#counter")
const increment = document.querySelector("#increment")
const decrement = document.querySelector("#decrement")
const reset = document.querySelector("#reset")



let currentValue = 0
let rewards = 0

increment.addEventListener("click", ()=>{
    currentValue ++
    counter.innerHTML = currentValue

    if(currentValue === 10){
        rewards = "🙌"
        reward.innerHTML = rewards
    } else{
        rewards = " "
        reward.innerHTML = rewards

    } 
    if(currentValue === 20){
        rewards = "👌"
        reward.innerHTML = rewards
    }
    if(currentValue === 30){
        rewards = "👊"
        reward.innerHTML = rewards
    }
    if(currentValue === 40){
        rewards = "✌️"
        reward.innerHTML = rewards
    }
    if(currentValue === 50){
        rewards = "🫶"
        reward.innerHTML = rewards
    }
    if(currentValue === 100){
        rewards = "👏"
        reward.innerHTML = rewards
    }
   
    
})
decrement.addEventListener("click", ()=>{
    currentValue --
    counter.innerHTML = currentValue
    if(currentValue < 0){
        currentValue = 0
        counter.innerHTML = currentValue
    }
      if(currentValue === 10){
        rewards = "🙌"
        reward.innerHTML = rewards
    } else{
        rewards = " "
        reward.innerHTML = rewards

    } 
    if(currentValue === 20){
        rewards = "👌"
        reward.innerHTML = rewards
    }
    if(currentValue === 30){
        rewards = "👊"
        reward.innerHTML = rewards
    }
    if(currentValue === 40){
        rewards = "✌️"
        reward.innerHTML = rewards
    }
    if(currentValue === 50){
        rewards = "🫶"
        reward.innerHTML = rewards
    }
    if(currentValue === 100){
        rewards = "👏"
        reward.innerHTML = rewards
    }
   
})
reset.addEventListener("click", ()=>{
    currentValue = 0
    counter.innerHTML = currentValue
    rewards = " "
    reward.innerHTML = rewards
})

