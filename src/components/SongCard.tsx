import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {useState} from "react";

import {Song} from "../interfaces/index";

interface SongDetailProps {
  song: Song
}


function SongCard({song}: SongDetailProps) {
  const [hover, setHover] = useState(false);

  return (
    <Col md={3} 
    className="p-3" 
    style={{height: "480px"}}>
    <div className="p-1" style={{backgroundColor: hover ? "#138496": "black", border: "1px solid #138496", borderRadius: "5px"}} 
    onMouseOver={() => setHover(true)} 
    onMouseLeave={() => setHover(false)}
    >
      <Card style={{background: "black", color: "white"}}>
        <Card.Img variant="top" src={song.artist.picture_medium} style={{objectFit: "cover"}}/>
        <Card.Body className="text-monospace" style={{padding: "1rem"}}>
          <Card.Title className="lineClamp">{song.title}</Card.Title>
          <Card.Text  className="lineClamp">{song.artist.name}</Card.Text>
          <Card.Text  className="lineClamp">{song.album.title}</Card.Text>
          <Link to={`/info/${song.id}`}>
          <Button variant="outline-info">See details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
    </Col>
  );
}

export default SongCard;
