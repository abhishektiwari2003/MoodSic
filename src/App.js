import { Route, Routes } from "react-router-dom";
import { Chill } from "./Components/Chill";
import { Dance } from "./Components/Dance";
import { HeartBroken } from "./Components/HeartBroken";
import { Home } from "./Components/Home";
import { MoodSelection } from "./Components/MoodSelection";
import { Party } from "./Components/Party";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoodSelection" element={<MoodSelection />} />
        <Route path="/MoodSelection/Chill" element={<Chill />} />
        <Route path="/MoodSelection/Dance" element={<Dance />} />
        <Route path="/MoodSelection/HeartBroken" element={<HeartBroken />} />
        <Route path="/MoodSelection/Party" element={<Party />} />
      </Routes>
    </>
  );
}

export default App;
