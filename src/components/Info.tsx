import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import {Link} from "react-router-dom";
import {SongDetails} from "../types/Details";
import ReactAudioPlayer from 'react-audio-player';

function Info() {
  const { id } = useParams();
  const [track, setTrack] = useState<SongDetails | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchInfo(id:string | undefined) {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${id}`);

      if (response.ok) {
        let data:SongDetails = await response.json();
        setTrack(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchInfo(id);
  }, []);

  return (
    <div style={{height: "100vh", width: "100vw"}}>
    <Container className="mt-5">
      <Row style={{width: "60vw"}}>
        { !loading && track && Object.keys(track).length ? (
          <Card style={{ background: "black", color: "white" }}>
            <Card.Img
              variant="top"
              src={track?.artist.picture_big}
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
            <div className="d-flex">
            <Card.Body style={{}}>
              <Card.Title>{track?.title}</Card.Title>
              <Card.Text>{track?.artist.name}</Card.Text>
              <Card.Text>{track?.album.title}</Card.Text>
              <Link to="/">
                <Button variant="outline-info">Go back</Button>
              </Link>
            </Card.Body>
            <div className="d-flex justify-content-center align-items-center px-3">
              <ReactAudioPlayer
                src={track?.preview}
                autoPlay={false}
                controls
              />
            </div>
            </div>
          </Card>
        ) : (
          <Spinner animation="grow" variant="info" />
        )
        }
      </Row>
    </Container>
    </div>
  );
}

export default Info;
