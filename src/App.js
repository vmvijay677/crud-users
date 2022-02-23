import './index.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Heading } from './Heading';
import { Read } from './Read';
import { EditCharacters } from './EditCharacters';

export default function App() {
  const initial_users = [
    {
      hero: "Iron Man",
      character: "Tony Stark",
      actor: "Robert Downey Jr.",
      summary: "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
      img: "https://i.pinimg.com/originals/e6/1e/9e/e61e9eb44894dfbd6d0ef653972ca7d6.gif"
    },
    {
      hero: "Captain America",
      character: "Steve Rogers",
      actor: "Chris Evans",
      summary: "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
      img: "https://i.gifer.com/MOvr.gif"
    },
    {
      hero: "Thor",
      character: "Thor Odinson",
      actor: "Chris Hemsworth",
      summary: "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
      img: "https://media4.giphy.com/media/13mSPwP1M9QYTe/giphy.gif"
    },
    {
      hero: "Spider Man",
      character: "Peter Parker",
      actor: "Tom Holland",
      summary: "Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
      img: "https://i.pinimg.com/originals/aa/52/4a/aa524aa66b199a698d3bdeec7b906013.gif"
    },
    {
      hero: "Scarlet Witch",
      character: "Wanda Maximoff",
      actor: "Elizabeth Olsen",
      summary: "Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.",
      img: "https://i.pinimg.com/originals/81/a7/20/81a7208a252cc92493292ab65d98fae2.gif"
    },
    {
      hero: "Hulk",
      character: "Bruce Banner",
      actor: "Mark Ruffalo",
      summary: "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
      img: "https://c.tenor.com/f5REMVv9MlUAAAAC/hulk-smart-hulk.gif"
    }
  ];

  const [usersList, setUsersList] = useState(initial_users);
  const history = useHistory();
  return (
    <div>
      <div className="appbar">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => history.push("/home")}>Home</Button>
            <Button color="inherit" onClick={() => history.push("/marvel/characters")}>Marvel Characters</Button>
            <Button color="inherit" onClick={() => history.push("/marvel/characters/add")}>Add Character</Button>
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route exact path="/home">
          <Heading />
        </Route>
        <Route exact path="/marvel/characters">
          <div className="App">
            {usersList.map(({ hero, character, actor, summary, img }, index) => <Read
              key={index}
              hero={hero}
              character={character}
              actor={actor}
              summary={summary}
              img={img}
              deleteButton={<IconButton aria-label="delete" style={{ marginLeft: "auto" }} color="error" onClick={() => {
                //console.log(index);
                const copyUsersList = [...usersList];
                copyUsersList.splice(index, 1);
                setUsersList(copyUsersList);
              }}><DeleteIcon /></IconButton>}
              editButton={<IconButton aria-label="edit" size="large" color="primary"
                onClick={() => {
                  //console.log(index); 
                  history.push(`/marvel/characters/edit/${index}`);
                }}>
                <EditIcon fontSize="inherit" />
              </IconButton>}
              id={index}
            />)}
          </div>
        </Route>
        <Route exact path="/marvel/characters/add">
          <Create usersList={usersList} setUsersList={setUsersList} />
        </Route>
        <Route path="/marvel/characters/edit/:id">
          <EditCharacters usersList={usersList} setUsersList={setUsersList} />
        </Route>
      </Switch>
    </div>
  );
}

function Create({ usersList, setUsersList }) {
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
        }
        setUsersList([...usersList, newChar]);
        //console.log(task);
        history.push("/marvel/characters");
      }}>Add Character</Button>
    </div>
  );
}