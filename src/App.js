import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splashscreen from "./screens/splashscreen";
import Signin from "./screens/signin";
import Signup from "./screens/signup";
import Settings from "./screens/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
