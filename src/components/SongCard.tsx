import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import {Song} from "../interfaces/index";

interface SongDetailProps {
  song: Song
}


function SongCard({song}: SongDetailProps) {
  return (
    <Col md={3} className="p-3" style={{height: "550px"}}>
    <div className="p-1" style={{background: "black", border: "1px solid #ccc", borderRadius: "5px"}}>
      <Card style={{background: "black", color: "white"}}>
        <Card.Img variant="top" src={song.artist.picture_medium} style={{objectFit: "cover"}}/>
        <Card.Body className="text-monospace">
          <Card.Title>{song.title}</Card.Title>
          <Card.Text>{song.artist.name}</Card.Text>
          <Card.Text>{song.album.title}</Card.Text>
          <Link to={`/info/${song.id}`}>
          <Button variant="info">See details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
    </Col>
  );
}

export default SongCard;
