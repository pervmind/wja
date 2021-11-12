/* Global Variables */
const key = 'ee9b94c3b4f702c8fd14c4ebe5782bf0';
const button = document.getElementById('generate');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
button.addEventListener('click', async()=>{
    console.log('clicked');
    let zip = document.getElementById('zip').value;
    console.log(zip);
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`;
    const data = await fetch(url)
    const info = await data.json()
    const temp = info.main.temp;
    console.log(temp)
});

