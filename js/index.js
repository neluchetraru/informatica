let data = {
    temp: '',
    location: "Pepeni",
    time: '',
    date: ''
}

const DOM = {
    date: document.querySelector('.about__weather--date'),
    temp: document.querySelector('.about__weather--temp'),
    time: document.querySelector('.about__weather--time')
};

async function getTemp()  {
    const API_KEY = 'b9e5590c438471dd41452cb1459950c1';
    const location = 'Pepeni';
    const link = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    const promise = await fetch(link).then(res=>{
        return res.json();
    });

    let temp = promise.main.temp;
    temp -=273.15;
    temp = Math.round(temp);
    data.temp = temp;
}

const getTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    const fullTime = `${hour}:${minutes}`;
    data.time = fullTime;
    
    
};

const getDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let fullDate = `${day}/${month}/${year}`;
    data.date = fullDate;
};

async function prepareData(){
    await getTemp();
    getTime();
    getDate();
};


const UIController = () => {

    DOM.temp.innerHTML = `${data.temp}<sup>o</sup>`;
    DOM.time.innerHTML = data.time;
    DOM.date.innerHTML = data.date;
    
}

async function init(){
    await prepareData();
    UIController();
}

init();