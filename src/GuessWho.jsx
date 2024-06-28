import client from "./apollo-client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartLogic from "./components/CartLogic";
import { ApolloProvider } from "@apollo/client";
import GuessRage from "./components/GuessRage";
import PullUpbar from "./components/PullUpbar";

const CartLandingPage = () => {

  return (
      <>
        <GuessRage />
        <PullUpbar />
      </>

  );
};


export default CartLandingPage;
