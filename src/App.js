import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation";
import Home from "./routes/home";
import SignIn from "./routes/sign-in";

const Shop = () => <h1>Shop</h1>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
