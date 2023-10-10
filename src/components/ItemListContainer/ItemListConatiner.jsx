import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams()
    
    useEffect(() => {
        const asyncFunc = categoryId  ? getProductsByCategory : getProducts
        asyncFunc(categoryId)
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