import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Read({ hero, character, actor, summary, img, deleteButton, editButton, id }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <Card className="card-container">
      <CardContent>
        <div className="users-container">
          <img className="user-img" src={img}></img>
          <p className='user-hero'>{hero}</p>
          <div className="read-users">
            <p className='user-character'><b>Character: </b>{character}</p>
            <p className='user-actor'><b>Actor/Actress: </b>{actor}</p>
            <p className="user-summary">{summary}</p>
            <div className='icons'>
              <IconButton color="success" aria-label="delete" onClick={() => setLike(like + 1)}>
                <Badge color="success" badgeContent={like}>👍</Badge>
              </IconButton>
              <IconButton aria-label="delete" color="primary" onClick={() => setDislike(dislike + 1)}>
                <Badge color="primary" badgeContent={dislike}>👎</Badge>
              </IconButton>{deleteButton}{editButton}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
