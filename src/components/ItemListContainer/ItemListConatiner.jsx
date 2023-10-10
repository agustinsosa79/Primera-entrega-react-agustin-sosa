import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        getProducts()
            .then((resolve) => {
                setProductos(resolve);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); 

    return (
        <div>
            <h1> {greeting} </h1>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;