const container = document.querySelector('.container')
const form = document.querySelector("form")
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height ==='' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please Enter valid Height';
    }else if(weight ==='' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please Enter valid weight';
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if (bmi < 18.6) {
            container.style.backgroundColor = '#ff8585';
            results.innerHTML = `<span>${bmi} kg/m2 is underweight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            container.style.backgroundColor = 'green';
            results.innerHTML = `<span>${bmi} kg/m2 is normal weight</span>`;
        } else if (bmi > 24.9) {
            container.style.backgroundColor = '#751010';
            results.innerHTML = `<span>${bmi} kg/m2 is overweight</span>`;
        }
    }
})