import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

export function EditCharacters({ usersList, setUsersList }) {
  const { id } = useParams();
  const marvel = usersList[id];
  //console.log(movie);
  const [hero, setHero] = useState(marvel.hero);
  const [character, setCharacter] = useState(marvel.character);
  const [actor, setActor] = useState(marvel.actor);
  const [summary, setSummary] = useState(marvel.summary);
  const [img, setImg] = useState(marvel.img);
  const history = useHistory();
  return (
    <div className="edit-users">
      <h1 style={{ fontSize: "35px" }}>Edit character details</h1>
      <TextField value={hero} id="standard-basic" className="input" label="Hero" color="primary" variant="standard" onChange={(event) => setHero(event.target.value)} />
      <br></br>
      <TextField value={character} id="standard-basic" className="input" label="Character" color="primary" variant="standard" onChange={(event) => setCharacter(event.target.value)} />
      <br></br>
      <TextField value={actor} id="standard-basic" className="input" label="Actor" color="primary" variant="standard" onChange={(event) => setActor(event.target.value)} />
      <br></br>
      <TextField value={summary} id="standard-basic" className="input" label="Character Description" color="primary" variant="standard" onChange={(event) => setSummary(event.target.value)} />
      <br></br>
      <TextField value={img} id="standard-basic" className="input" label="Image" color="primary" variant="standard" onChange={(event) => setImg(event.target.value)} />
      <br></br>
      <Button id="button" variant="contained" className="button" color="success" onClick={() => {
        const updatedChar = {
          hero: hero,
          character: character,
          actor: actor,
          summary: summary,
          img: img
        };
        const copyUsersList = [...usersList];
        copyUsersList[id] = updatedChar;
        setUsersList(copyUsersList);
        history.push("/marvel/characters");
      }}>Save</Button>
    </div>
  );
}
