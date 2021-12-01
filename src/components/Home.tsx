import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState, useEffect} from "react";
import SongCard from "./SongCard";

import {Songs} from "../interfaces/index";



export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [songs, setSongs] = useState<Songs>();

  useEffect(() => {
    handleSearch(null);
  }, [])

  useEffect(() => {
    if(searchValue.length > 3) {
      handleSearch(searchValue);
    }
  }, [searchValue])

  async function handleSearch(query: string | null) {
    try {

      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query ? query : 'jay-z'}`) 

      if(response.ok) {
        const results = await response.json();
        setSongs(results);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container className="mt-5">
    <h1 className="text-center text-white text-monospace">Music Finder</h1>
    <Row className="justify-content-center">
    <Form className="mt-2" style={{width:"50vw", marginBottom: "3rem"}}>
      <Form.Group>
        <Form.Control style={{backgroundColor: "black", border: "none", borderBottom: "1px solid #138496", borderBottomLeftRadius: "0", borderBottomRightRadius: "0", height: "3rem", boxShadow: "none", fontSize: "2rem", color: "white", fontFamily: "monospace"}} type="text" placeholder="Search for music" value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} />
      </Form.Group>
    </Form>
    </Row>
    <Row>

      {songs?.data.length && songs.data.map((track) => <SongCard song={track}/>)
      }
    </Row>
    </Container>
  )
}
