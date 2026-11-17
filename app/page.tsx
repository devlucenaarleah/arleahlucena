
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

// GitHub Pages repository path
const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/arleahlucena"
    : "";

// Automatically fixes image paths for local and deployed websites
function assetPath(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

type Place = {
  id: string;
  title: string;
  town: string;
  category: string;
  image: string;
  intro: string;
  story: string;
};

const places: Place[] = [
  {
    id: "islands",
    title: "Hundred Islands",
    town: "Alaminos City",
    category: "Island Escape",
    image: assetPath("/images/islands.webp"),
    intro: "A magical island adventure surrounded by blue waters.",
    story: "Discover limestone islands, hidden beaches and the natural heritage of Pangasinan."
  },
  {
    id: "lighthouse",
    title: "Cape Bolinao Lighthouse",
    town: "Bolinao",
    category: "Heritage Trail",
    image: assetPath("/images/lighthouse.webp"),
    intro: "A historic landmark overlooking the coast.",
    story: "Experience Pangasinan's maritime history through this coastal landmark."
  },
  {
    id: "springs",
    title: "Balungao Hot Springs",
    town: "Balungao",
    category: "Nature Retreat",
    image: assetPath("/images/springs.webp"),
    intro: "Relax with mountain views and warm waters.",
    story: "A peaceful inland destination connecting nature and local culture."
  }
];

export default function Page() {

  const [menu, setMenu] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  const [selected, setSelected] = useState<Place | null>(null);

  function save(id: string) {
    setSaved(v =>
      v.includes(id)
        ? v.filter(x => x !== id)
        : [...v, id]
    );
  }

  return (
    <main>

      {/* NAVIGATION */}

      <header className="navbar">

        <div className="logo">
          ♡ Pangasinan
        </div>

        <button
          className="mobile"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation menu"
        >
          {menu ? <X /> : <Menu />}
        </button>

        <nav className={menu ? "open" : ""}>

          <a href="#discover" onClick={() => setMenu(false)}>
            Discover
          </a>

          <a href="#story" onClick={() => setMenu(false)}>
            Story
          </a>

          <button>
            My Trip {saved.length}
          </button>

        </nav>

      </header>


      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <span className="badge">
            WAVES • CULTURE • ADVENTURE
          </span>

          <h1>
            Pangasinan,
            <br />
            <span>with love.</span>
          </h1>

          <p>
            Explore beautiful destinations through an interactive
            heritage experience.
          </p>

          <button
            className="primary"
            onClick={() => {
              document.getElementById("discover")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
          >
            Explore Now <ArrowUpRight />
          </button>

        </div>


        <div className="hero-image">

          <img
            src={assetPath("/images/islands.webp")}
            alt="Hundred Islands in Pangasinan"
          />

          <div className="floating">
            🌊 Your next escape awaits
          </div>

        </div>

      </section>


      {/* DISCOVER DESTINATIONS */}

      <section id="discover" className="section">

        <div className="title">

          <h2>
            Discover destinations
          </h2>

          <p>
            Find places filled with stories and memories.
          </p>

        </div>


        <div className="cards">

          {places.map(place => (

            <article className="card" key={place.id}>

              <div className="image">

                <img
                  src={place.image}
                  alt={place.title}
                  loading="lazy"
                />

                <button
                  onClick={() => save(place.id)}
                  aria-label={
                    saved.includes(place.id)
                      ? `Remove ${place.title} from saved places`
                      : `Save ${place.title}`
                  }
                >

                  <Heart
                    fill={
                      saved.includes(place.id)
                        ? "#ec4899"
                        : "none"
                    }
                  />

                </button>

              </div>


              <div className="body">

                <small>
                  <MapPin size={14} />
                  {place.town}
                </small>

                <h3>
                  {place.title}
                </h3>

                <p>
                  {place.intro}
                </p>

                <button
                  className="link"
                  onClick={() => setSelected(place)}
                >
                  Explore story →
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* STORY SECTION */}

      <section id="story" className="story">

        <Compass size={45} />

        <h2>
          More than a destination
        </h2>

        <p>
          Every coastline, mountain and landmark tells a story.
        </p>

        <div className="icons">
          <Waves />
          <Landmark />
          <Mountain />
        </div>

      </section>


      {/* DESTINATION STORY MODAL */}

      {selected && (

        <div
          className="modal"
          onClick={() => setSelected(null)}
        >

          <div
            className="dialog"
            onClick={e => e.stopPropagation()}
          >

            <button
              className="close"
              onClick={() => setSelected(null)}
              aria-label="Close destination story"
            >
              <X />
            </button>

            <img
              src={selected.image}
              alt={selected.title}
            />

            <h2>
              {selected.title}
            </h2>

            <p>
              {selected.story}
            </p>

          </div>

        </div>

      )}

    </main>
  );

}
