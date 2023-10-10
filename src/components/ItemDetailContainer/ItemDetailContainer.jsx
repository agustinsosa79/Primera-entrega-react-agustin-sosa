import { useState, useEffect } from 'react';
import { getProductsById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducts] = useState([]);

    useEffect(() => {
        getProductsById("1")
            .then((response) => {
                setProducts(response)
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer