import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/cart" component={CartScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
