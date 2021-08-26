import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";

function App() {
  return (
    <div className="App">
      <WarningSign />
      <MyBadge variant="primary" text="Tarun" />
      <SingleBook />
      <CommentArea />

      <BookList />
    </div>
  );
}

export default App;
