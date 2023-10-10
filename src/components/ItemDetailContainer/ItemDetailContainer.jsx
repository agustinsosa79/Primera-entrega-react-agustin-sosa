import { useState, useEffect } from 'react';
import { getProductsById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducts] = useState([]);

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then((response) => {
                setProducts(response)
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