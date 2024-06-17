import { useState } from "react";
import "./App.css";
import Candidate from "./components/Candidate";
import Button_Lecture from "./components/Button_Lecture";
import Header from "./components/Header";
import BackgroundVideo from "./components/BackgroundVideo";

const candidates = [
  {
    name: "Jenifer Bartoli	",
    image:
      "https://www.gala.fr/imgre/fit/https.3A.2F.2Fwww.2Egala.2Efr.2Fimgre.2Ffit.2Fhttp.2E3A.2E2F.2E2Fprd2-bone-image.2E2Es3-website-eu-west-1.2E2Eamazonaws.2E2Ecom.2E2Fgal.2E2Fvar.2E2Fgal.2E2Fstorage.2E2Fimages.2E2Fmedia.2E2Fimages.2E2Factu.2E2Fphotos_on_ne_parle_que_de_ca.2E2Fjenifer__1.2E2Fjenifer_a_la_star_academy.2E2F434358-1-fre-FR.2E2Fjenifer_a_la_star_academy_reference.2E2Ejpg.2F298x432.2Fquality.2F80.2Fthumbnail.2Ejpg/643x932/quality/80/picture.jpg",
    age: 19,
    city: "Villeneuve-Saint-Georges",
  },
  {
    name: "Mario Barravecchia	",
    image:
      "https://fac.img.pmdstatic.net/fit/~1~fac~2023~06~02~1b9e1904-0a6f-4ad9-aa20-bf8086ddb605.jpeg/1200x1200/quality/80/crop-from/center/mario-barravecchia-star-academy-ce-jour-ou-il-a-decide-de-debrancher-son-pere.jpeg",
    age: 27,
    city: "Agen",
  },
  {
    name: "Olivia Blanc",
    image:
      "https://www.programme.tv/imgre/fit/~1~tls~2024~02~25~61b568c3-e27a-4d27-a898-22568ce2eb81.jpeg/660x370/crop-from/top/quality/80/focus-point/1041,1261/olivia-ruiz-revient-sur-l-installation-de-cameras-dans-la-salle-de-bain-et-les-chambre-lors-de-sa-participation-a-la-star-academy.jpg",
    age: 21,
    city: "Paris",
  },
  {
    name: "Kevin Peset",
    image: "./src/assets/img/image.png",
    age: 36,
    city: "Liège",
  },
  {
    name: "Jean-Pascal Lacoste",
    image:
      "https://cache.magicmaman.com/data/photo/w1000_ci/51/jean_pascal_lacoste-papa.jpg",
    age: 24,
    city: "Toulon",
  },
  {
    name: "Carine Haddadou",
    image:
      "https://media.ouest-france.fr/v1/pictures/MjAyMjAxNWI5NzBiOWY0MmM1ODEwN2I5NDMwZWFkMTAwNTQ5MDU?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=43020395bf2ffc979abbfa023f2efd510a622788bb73ba9ece87475e2dd66527",
    age: 18,
    city: "Lille",
  },
  {
    name: "Jessica Marquez",
    image:
      "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2019.2F03.2F09.2Fbb5e6d19-8215-46d8-b562-de82c9e6f77c.2Ejpeg/1200x900/quality/80/crop-from/center/focus-point/940%2C585/star-academy-jessica-marquez-candidate-de-la-saison-1-raconte-ses-difficultes-apres-l-aventure.jpeg",
    age: 20,
    city: "Montpellier",
  },
  {
    name: "Patrice Maktav",
    image:
      "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/Star-Academy-1-Patrice-en-prime-sur-France-3.jpg",
    age: 25,
    city: "Marseille",
  },
  {
    name: "Djalil Amine",
    image:
      "https://i.pinimg.com/236x/c0/5d/ff/c05dff5f3d1a98c2563a70d0b17ce063.jpg",
    age: 22,
    city: "Lyon",
  },
  {
    name: "François Roure",
    image:
      "https://i.pinimg.com/236x/c7/36/22/c73622c4722fa3867d4d46bbed33f10e.jpg",
    age: 26,
    city: "Bobigny",
  },
  {
    name: "Cecile Boutry",
    image:
      "https://i.pinimg.com/236x/64/23/cc/6423ccbe986e09f315607b2a58896e64.jpg",
    age: 21,
    city: "Courrières",
  },

  {
    name: "Sidonie Koch",
    image:
      "https://i.pinimg.com/originals/9d/1a/ca/9d1aca1759d2e775da79e819442f3075.jpg",
    age: 27,
    city: "Paris",
  },

  {
    name: "Amandine Bisqueret",
    image:
      "https://artworks.thetvdb.com/banners/person/8194402/5ffc298cb0f38.jpg",
    age: 23,
    city: "Liège",
  },
  {
    name: "Stéphane Bosmans",
    image:
      "https://i.pinimg.com/236x/4b/64/ab/4b64ab3a4af2ddcf677721ed1cfc115d.jpg",
    age: 23,
    city: "Bruxelle",
  },
];

function App() {
  return (
    <>
      <Header />
      <h1>STAR AC S01</h1>
      <img src="./src/assets/img/logo.png" alt="Logo Star Academy" />

      <div className="background-video">
        <BackgroundVideo />
        <p>TEST</p>
      </div>

      <div className="clip">
        <Button_Lecture />
        <p>bouton</p>
      </div>

      <main>
        {candidates.map((candidate, index /*Boucle pour chaque candidat*/) => (
          <Candidate candidates={candidate} key={index} />
        ))}
      </main>
    </>
  );
}

export default App;
