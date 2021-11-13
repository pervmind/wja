/* Global Variables */
const key = 'ee9b94c3b4f702c8fd14c4ebe5782bf0';
const button = document.getElementById('generate');
const htmlDate = document.getElementById('date');
const htmlTemp = document.getElementById('temp');
const htmlUserResponse = document.getElementById('content');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
button.addEventListener('click', async()=>{
    let zip = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=metric`;
    const response = await fetch(url)
    const info = await response.json()
    const temp = info.main.temp;
    const output = {temp, newDate, userResponse};
    postedData('/postData', output)
    const final =  await dataUpdate('/getProjectData');
    updateUI(final);
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
        const sentData = await post.json();
        return sentData
    }catch(error){
        console.log('error',error);
    }

    
}


const dataUpdate = async function getWeatherData(url = ''){
    const update = await fetch(url);
    try{
        const newData = await update.json();
        return newData
    }catch(error){
        console.log('error',error);
    }
}

async function updateUI(object){
    htmlDate.innerHTML = await object.newDate;
    htmlTemp.innerHTML = await object.temp + ' celcuis';
    htmlUserResponse.innerHTML = await object.userResponse;
}