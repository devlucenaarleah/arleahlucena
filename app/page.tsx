'use client';

import { useState } from "react";
import {
  Heart,
  MapPin,
  ArrowUpRight,
  Menu,
  X,
  Compass,
  Waves,
  Mountain,
  Landmark
} from "lucide-react";

type Place = {
  id:string;
  title:string;
  town:string;
  category:string;
  image:string;
  intro:string;
  story:string;
};

const places:Place[]=[
{
id:"islands",
title:"Hundred Islands",
town:"Alaminos City",
category:"Island Escape",
image:"/images/islands.webp",
intro:"A magical island adventure surrounded by blue waters.",
story:"Discover limestone islands, hidden beaches and the natural heritage of Pangasinan."
},
{
id:"lighthouse",
title:"Cape Bolinao Lighthouse",
town:"Bolinao",
category:"Heritage Trail",
image:"/images/lighthouse.webp",
intro:"A historic landmark overlooking the coast.",
story:"Experience Pangasinan's maritime history through this coastal landmark."
},
{
id:"springs",
title:"Balungao Hot Springs",
town:"Balungao",
category:"Nature Retreat",
image:"/images/springs.webp",
intro:"Relax with mountain views and warm waters.",
story:"A peaceful inland destination connecting nature and local culture."
}
];

export default function Page(){

const [menu,setMenu]=useState(false);
const [saved,setSaved]=useState<string[]>([]);
const [selected,setSelected]=useState<Place|null>(null);

function save(id:string){
setSaved(v=>v.includes(id)?v.filter(x=>x!==id):[...v,id]);
}

return (
<main>

<header className="navbar">
<div className="logo">♡ Pangasinan</div>

<button className="mobile"
onClick={()=>setMenu(!menu)}>
{menu?<X/>:<Menu/>}
</button>

<nav className={menu?"open":""}>
<a href="#discover">Discover</a>
<a href="#story">Story</a>
<button>My Trip {saved.length}</button>
</nav>
</header>


<section className="hero">

<div className="hero-content">
<span className="badge">
WAVES • CULTURE • ADVENTURE
</span>

<h1>
Pangasinan,
<br/>
<span>with love.</span>
</h1>

<p>
Explore beautiful destinations through an interactive
heritage experience.
</p>

<button className="primary">
Explore Now <ArrowUpRight/>
</button>

</div>


<div className="hero-image">
<img src="/images/islands.webp"/>
<div className="floating">
🌊 Your next escape awaits
</div>
</div>

</section>



<section id="discover" className="section">

<div className="title">
<h2>Discover destinations</h2>
<p>Find places filled with stories and memories.</p>
</div>


<div className="cards">

{places.map(place=>(

<article className="card" key={place.id}>

<div className="image">
<img src={place.image}/>
<button onClick={()=>save(place.id)}>
<Heart fill={saved.includes(place.id)?"#ec4899":"none"}/>
</button>
</div>

<div className="body">

<small>
<MapPin size={14}/>
{place.town}
</small>

<h3>{place.title}</h3>

<p>{place.intro}</p>

<button
className="link"
onClick={()=>setSelected(place)}
>
Explore story →
</button>

</div>

</article>

))}

</div>

</section>



<section id="story" className="story">

<Compass size={45}/>

<h2>
More than a destination
</h2>

<p>
Every coastline, mountain and landmark tells a story.
</p>

<div className="icons">
<Waves/>
<Landmark/>
<Mountain/>
</div>

</section>



{selected && (

<div className="modal"
onClick={()=>setSelected(null)}>

<div className="dialog"
onClick={e=>e.stopPropagation()}>

<button
className="close"
onClick={()=>setSelected(null)}
>
<X/>
</button>

<img src={selected.image}/>

<h2>{selected.title}</h2>

<p>{selected.story}</p>

</div>

</div>

)}

</main>
)

}
