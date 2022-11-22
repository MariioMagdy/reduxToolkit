import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import { RootLayout } from "./pages/RootLayout";
import { PostList } from "./components/PostList";

function App() {
  return (
    <RootLayout>
      <PostList />
    </RootLayout>
  );
}

export default App;
