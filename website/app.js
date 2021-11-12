/* Global Variables */
const key = 'ee9b94c3b4f702c8fd14c4ebe5782bf0';
const button = document.getElementById('generate');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
button.addEventListener('click', async()=>{
    console.log('clicked');
    let zip = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;
    // console.log(zip);
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`;
    const response = await fetch(url)
    const info = await response.json()
    const temp = info.main.temp;
    const output = {temp, newDate, userResponse};
    postedData('/postData', output);
});
const postedData = async function postWeatherData(url = '', data ={}){
    const post = await fetch(url,{
        method : 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data),
    });
    try{
        const newData =post.json();
        return newData
    }catch(error){
        console.log('error',error);
    }

    
}
