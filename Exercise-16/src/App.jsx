import React from "react";
import { Container } from "./Container";

function App() {
  return (
    <Container title="Clicca per espandere/comprimere">
      <p>Contenuto visibile solo se il contenitore è espanso.</p>
    </Container>
  );
}

export default App;
