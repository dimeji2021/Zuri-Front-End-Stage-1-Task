import './App.css';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Profile } from './component/Profile';
import { useEffect, useState } from 'react';
import { Links } from './component/Links';

function App() {
  const [profile, setProfile] = useState({
    name: "Kehinde Aregebsola",
    bio: "Software Engineer",
    avatar: "https://avatars.githubusercontent.com/u/96235518?v=4",
    links: [], 
  })
  useEffect(()=>{
    fetch("/data/kehindeAregebsola.json")
    .then((response)=>response.json())
    .then((data)=>setProfile(data));
  },[]);
  return (

    <div className="p-m-4">
      <Profile name={profile.name} avatar={profile.avatar}/>
      <Links links={profile.links}/>
    </div>
  );
}

export default App;
