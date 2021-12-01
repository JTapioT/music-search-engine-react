import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

import {Song} from "../interfaces/";

function Info() {
  const { id } = useParams();
  const [track, setTrack] = useState<Song>();

  async function fetchInfo() {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${id}`);

      if (response.ok) {
        let data:Song = await response.json();
        setTrack(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <Container className="mt-5">
      <Row style={{width: "50vw"}}>
        { track && Object.keys(track).length > 0 && (
          <Card style={{ background: "black", color: "white" }}>
            <Card.Img
              variant="top"
              src={track?.artist?.picture_medium}
              style={{ objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{track?.title}</Card.Title>
              <Card.Text>{track?.artist?.name}</Card.Text>
              <Card.Text>{track?.album?.title}</Card.Text>
              <Link to="/">
                <Button variant="info">Go back</Button>
              </Link>
            </Card.Body>
          </Card>
        )
        }
      </Row>
    </Container>
  );
}

export default Info;
