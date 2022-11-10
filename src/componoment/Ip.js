import { useState } from 'react';
function GetIp(){
    const [clientip, setclientip] = useState('');
    const url = 'https://api.ipify.org?format=json';
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setclientip(data.ip)
      console.log(data.ip)
    })
    if(clientip){
      return(<p>Your IP Adresse : {clientip}</p>)
    }else{
      return(<p>Your IP Adresse : No Found</p>)
    }
}
export default GetIp;