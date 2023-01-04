import './App.css';
import React,{useState} from 'react';

const api={
  key:"01d5c880d55b3c48a4ede608d8b6b851",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  const[query,setQuery]=useState('');
const[weather,setWeather]=useState({});

const search=evt=>{
  if(evt.key ==='Enter'){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setQuery('');
      setWeather(result);
      console.log(result);
    
    });
  }
}



  const dateBuilder=(d) =>{
    let months=["January","February","March ","April" ,"May ","June", "July", "August", "September ","October" ,"November" ,"December"];
  let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Satyrday","Sunday"];
  let day=days[d.getDay()];
  let date = d.getDate();
  let month=months[d.getMonth()];
let year=d.getFullYear();
return `${day} ${date} ${month}, ${year}`
}
  return(
    <div className={(typeof weather.main!='undefined')?((weather.main.temp>16)?'appwarm':'app'):'app'}>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...'
          onChange={e =>setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main !="undefined")?(
          <div>
        <div className='location-box'>
          <div className='location'>{weather.name},{weather.sys.country}</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='temp'>{Math.round(weather.main.temp)}℃</div>
          <div className='weather'>{weather.weather[0].main}</div>
        </div>
        </div>
        ):('')}
      </main>
    </div>
  )

   
  
  
// const[query,setQuery]=useState('');
// const[weather,setWeather]=useState({});


// const search = (evt) =>{
//   if(evt.key===" Enter"){
//     fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
//     .then(res=>res.json())
//     .then(result=>{
//       setWeather(result)
//       setQuery('');
//       // console.log(weather);
//      });

//   }
// }


// const dateBuilder=(d)=>{
//   let months=["January","February","March ","April" ,"May ","June", "July", "August", "September ","October" ,"November" ,"December"];
//   let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Satyrday","Sunday"];
//   let day=days[d.getDay()];
//   let date=d.getDate();
//   let month=months[d.getMonth()];
//   let year=d.getFullYear();
//   return `${day} ${date} ${month}, ${year}`
// }



 
//   //   <div className ="container1">
//   //  <h1>WEATHER APP</h1>
//   return (
//   <div className="appwarm">
//    <main>
   
//     <div className="searchbar">
//       <input type="text" className="search-bar" placeholder="search..."
//       onChange={e=>setQuery(e.target.value)}
//       value={query} 
//       onKeyPress={search}
//       // console.log("search")
//       //  console.log(weather);
//       />
//     </div>
//     {(typeof weather.main !="undefined")?(
//       <div>
//     <div className="location-box">
//       <div className="location"> {weather.name},{weather.sys.country}</div>
//       <div className="date">{dateBuilder(new Date())}</div>
//     </div>
//   <div className="weather-box">
//     <div className="temp"> 15℃ </div>
//     <div className="weather">Sunny</div>
//   </div>
//   </div>
//   ):('')}

//       {/* </div> */}
//    </main>
//    </div>
    
//   );
    }

export default App;
