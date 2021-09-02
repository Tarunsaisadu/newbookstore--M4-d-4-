import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import WarningSign from "./components/WarningSign";
// import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";

import FantasyBooks from "../src/data/fantasy.json";
import FormValidation from "./components/FormValidation";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <WarningSign />
      <MyBadge variant="primary" text="Tarun" /> */}
        {/* <SingleBook book={FantasyBooks[0]} /> */}
        <MyNavbar />
        <Route
          path="/FormValidation"
          exact
          render={(routerProps) => <FormValidation {...routerProps} />}
        />

        <BookList books={FantasyBooks} />
      </Router>
    </div>
  );
}

export default App;
