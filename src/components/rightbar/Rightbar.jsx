import "./rightbar.css";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export const Rightbar = () => {
  const [stories, setStories] = useState([]);
  const dummyData = [
    {
      id: 1,
      img: "https://www.usnews.com/object/image/00000180-cdd9-d3df-a3c5-fddd55a90000/buffalo-shooting-02.JPG?update-time=1652721047430&size=responsive640",
      headline: "Buffalo Mourns Mass Shooting Victims",
      desc: "The FBI is investigating the shooting as both a hate crime and racially motivated violent extremism.",
    },
    {
      id: 2,
      img: "https://www.usnews.com/object/image/00000180-8a29-d49a-adbc-eaed749e0000/abortion-roe-wade-01.JPG?update-time=1651585988452&size=responsive640",
      headline: "Abortion Protests Erupt After Leaked Draft on Roe v. Wade",
      desc: "Abortion protests break out after Politico published what it says is a draft opinion showing the Supreme Court is poised to overturn Roe v. Wade, the 1973 landmark case that guaranteed a right to an abortion until the fetus could survive outside of the womb..",
    },
    {
      id: 3,
      img: "https://www.usnews.com/object/image/0000017f-99ab-dd98-a17f-9ffb4e990000/ukraine-refugees-08.JPG?update-time=1647550730939&size=responsive640",
      headline: "Two Pandemic Years and Counting",
      desc: "Empty streets and exhausted medical staff. Social distancing and drive-by funerals. Protests and vaccine rollouts. Pictures remind us of a world transformed by the COVID-19 pandemic.",
    },
    {
      id: 4,
      img: "https://www.usnews.com/object/image/0000016e-45ea-d237-ad6e-e7fa25fc0000/02-cold-war.JPG?update-time=1573495847466&size=responsive640",
      headline: "Cold War Relics",
      desc: "Throughout the U.S. and former Soviet republics, abandoned missile silos and the eerie landscapes they occupy serve as reminders of a dark and unnecessary nuclear arms race.",
    },
    {
      id: 5,
      img: "https://www.usnews.com/object/image/0000015d-38b7-d606-a5dd-bcb7e1320000/170713bc.elmhurst.gallery07.JPG?update-time=1499895161138&size=responsive640",
      headline: "Home Away From Home",
      desc: "The Elmhurst neighborhood of Queens is the most diverse in New York City.",
    },
    {
      id: 6,
      img: "https://www.usnews.com/object/image/0000016f-15b2-d593-a9ef-f7f7cd290000/01-191119-impeach-hill-424.JPG?update-time=1577219882911&size=responsive640",
      headline: "If These Walls Could Talk",
      desc: "A look inside the room where the impeachment inquiry into President Trump unfolded.",
    },
    {
      id: 7,
      img: "https://www.usnews.com/object/image/00000168-dd27-d534-a9fe-fd27bddc0000/17-flint-gallery.JPG?update-time=1549898595804&size=responsive640",
      headline: "Mapping Sorrow in Flint",
      desc: "TGun violence is Flint’s latest tragedy. These are scenes from where the city has lost lives.",
    },
    {
      id: 8,
      img: "https://www.usnews.com/object/image/0000017e-d737-d9dc-a77e-d7b721720000/ukraine-russia-conflict-02.JPG?update-time=1644288354388&size=responsive640",
      headline: "A Climate of Conflict in Ukraine",
      desc: "As tensions rise along the Russia-Ukraine border, civilians in Kyiv are met with a choice: continue with their daily lives or prepare for potential war.",
    },
    {
      id: 9,
      img: "https://www.usnews.com/object/image/00000168-4da0-d068-a5e9-efa16e4b0000/190114-07-canaan-2019-020jpg-editorial.jpg?update-time=1579290890176&size=responsive640",
      headline: "Slow but Steady",
      desc: "Following Haiti’s devastating 2010 earthquake, residents of Canaan built a new city and a new future.",
    },
  ];
  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://news-stories2.herokuapp.com/top");
      // const data=res.json()
      console.log("res", res.data.stores);
      setStories(res.data.stores);
    }
    getData();
  }, []);
  console.log(stories);
  return (
    <>
      <div className="rightbar">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 3, sm: 3, md: 3 }}
          style={{ gap: "10px" }}
        >
          {dummyData.map((data) => (
            <>
              <div key={data.id} className="news-container">
                <img src={data.img} alt="" />
                <div className="headline">
                  <h3>{data.headline}</h3>
                  <p className="desc">{data.desc}</p>
                  <p>Read More...</p>
                </div>
              </div>
            </>
          ))}
        </Grid>
      </div>
    </>
  );
};
