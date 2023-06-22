import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import OptionsProvider from "./components/provider/OptionsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router basename="/">
    <OptionsProvider>
      <App />
    </OptionsProvider>
  </Router>
);
