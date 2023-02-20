import React from 'react';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import Search from './components/Search';
import Modal from './components/Modal';
import { API_BASE_URL } from './config';
import { useState, useEffect } from 'react';

const image = "/Users/jimmy/musaFrontend/lez17/img/atalanta.png";
const initModalState = { show: false, src: image };

function App() {
  const [products, setProducts] = useState(undefined);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState('');
  /* const [limit, setLimit] = useState(6); */
  const limit = 6;
  /* const [searchT, setSearchT] = useState(""); */
  const [modalState, setModalState] = useState(initModalState);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `${API_BASE_URL}products/search?q=${searchText}&skip=${skip}&limit=${limit}`;
      const dataFetched = await fetch(url);
      const dataJSON = await dataFetched.json();
      setTotal(dataJSON.total);
      setProducts(dataJSON.products);
    }
    fetchProducts();
  }, [skip, searchText]);

  const searchHandler = (text) => {
    
    setSearchText(text);
    setSkip(0);

  }

  const onBackHandle = e => {
    if (skip - limit >= 0) {
      setSkip(skip - limit);
    }
  };
  const onForwordHandle = e => {
    if (skip + limit < total) {
      setSkip(skip + limit);
    }
  };
  const showProduct = () => {
    if (!products) return "caricamento ...";
    return products.map((product, key) => <Card product={product} key={`card-${product.id}`}

      imageHandler={e => setModalState({ show: !modalState.show, src: product.thumbnail })} />
    );
  };

  return (
    <div className=" App container ">
      <h1>E-COMMERCE</h1>
      <Search handler={searchHandler} />
      <Modal show={modalState.show} src={modalState.src} 
        onClick={e => setModalState({ show: false, src: "" })}
      />
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4  ">
          {showProduct()}


          
        </div>
        <Button onClick={onBackHandle}>Indietro</Button>
        <Button onClick={onForwordHandle}>Avanti</Button>
      </div>
    </div>
  );
}

export default App;
