import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Create({ usersList, setUsersList }) {
  const [hero, setHero] = useState(" ");
  const [character, setCharacter] = useState(" ");
  const [actor, setActor] = useState(" ");
  const [summary, setSummary] = useState(" ");
  const [img, setImg] = useState(" ");
  const history = useHistory();
  return (
    <div className="create-users">
      <h1 className='add-create'>Add your favourite Marvel character</h1>
      <TextField id="standard-basic" className="input" label="Hero" color="primary" variant="standard" onChange={(event) => setHero(event.target.value)} />
      <br></br>
      <TextField id="standard-basic" className="input" label="Character" color="primary" variant="standard" onChange={(event) => setCharacter(event.target.value)} />
      <br></br>
      <TextField id="standard-basic" className="input" label="Actor" color="primary" variant="standard" onChange={(event) => setActor(event.target.value)} />
      <br></br>
      <TextField id="standard-basic" className="input" label="Description" color="primary" variant="standard" onChange={(event) => setSummary(event.target.value)} />
      <br></br>
      <TextField id="standard-basic" className="input" label="Image" color="primary" variant="standard" onChange={(event) => setImg(event.target.value)} />
      <br></br>
      <Button id="button" variant="contained" className="button" color="success" onClick={() => {
        const newChar = {
          hero: hero,
          character: character,
          actor: actor,
          summary: summary,
          img: img
        };
        setUsersList([...usersList, newChar]);
        //console.log(task);
        history.push("/marvel/characters");
      }}>Add Character</Button>
    </div>
  );
}
