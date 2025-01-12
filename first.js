const buttons = document.querySelectorAll('.button')
const container = document.querySelector('.container')
// first select form 
const form = document.querySelector("form")
// what happen whe we take value outside the function that time value is empty 
// const height = parseInt(document.querySelector('#height').value)
// calculate == submite so when it submit values will transfer to server by {post} or {get} to stop this we add preventDefault() 
form.addEventListener('submit', function(e){
    e.preventDefault()
    // now selecting height& weight and {.value is use for taking user value} and aad parsint for string--> to number
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    // ('') height is not a empty (< 0) is not a less than 0 (isNaN) number should convertable or true
    if(height ==='' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please Enter valid Height';
    }else if(weight ==='' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please Enter valid weight';
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // showing result
        if(bmi< 18.6){
            results.innerHTML =`<span> ${ container.style.backgroundColor = '#ff8585',bmi} kg/m2 is a under weight </span>`
        } else if(bmi >= 18.6 && bmi <= 24.9 ){
            results.innerHTML =`<span> ${ container.style.backgroundColor = 'green',bmi} kg/m2 is a Normal weight </span>`
    } else if(bmi > 24.9  ){
        results.innerHTML =`<span> ${container.style.backgroundColor = '#751010',bmi} kg/m2 is a Overweight weight </span>`
    }}
})