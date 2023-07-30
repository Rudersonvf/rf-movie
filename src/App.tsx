import { BrowserRouter } from "react-router-dom";
import "./styles/app.sass";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
