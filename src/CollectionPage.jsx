import React from 'react'; // Ensure React is imported if you're using JSX
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button"; // Note: Button is imported but not used in the provided code
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase"; // Assuming you have this component

import Carousel from "./components/Carousel"; // Assuming you have this component
import Middle from "./components/Middle"; // Assuming you have this component
import Footer from "./components/Footer"; // Assuming you have this component
import { Timeline } from 'react-twitter-widgets'
import Connections from './components/Connections';
import ProductHeader from './components/ProductHeader';
import ProductDisplays from './components/ProductDisplays';
import ProductFrontPageSideBar from './components/ProductFrontPageSideBar'

import client from './apollo-client'; 
import { ApolloProvider } from '@apollo/client';
import CollectionProductDisplays from './components/CollectionProductDisplays';






const CollectionPage = () => {
  const first = 9;

  return (
    <ApolloProvider client={client}>
      <>
      <Header />
      <ProductHeader text="our commitment to quality includes sourcing high-quality pure pbt plastic that is shine proof and grime resistant."/>
      <div className="flex justify-center container mx-auto pt-10">
        <div className='flex justify-center'> 
          <ProductFrontPageSideBar first={first} />
          <CollectionProductDisplays />
        </div> 
      </div>

      <Footer />


      </>

    </ApolloProvider>
  );
};


export default CollectionPage;
