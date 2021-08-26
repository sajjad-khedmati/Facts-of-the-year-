const form = document.querySelector('form');
const alert = document.querySelector('.alert');

async function getFact(param) {
    let year = param || 'random';
    const response = await fetch(`http://numbersapi.com/${year}/year`);
    const fact = await response.text();
    alert.innerText = fact;
}


form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const year = e.target.number.value;
    getFact(year);
})