import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ nombre, categoria, descripcion, precio, imagen, stock }) => {
    return (
        <div className='ProductDetailPage'>
            <div className='ProductDetailContainer'>
                <header className='ProductHeader'>
                    <h2>{nombre}</h2>
                </header>
                <picture>
                    <img src={imagen} alt={nombre} className='ProductImg' />
                </picture>
                <section className='ProductInfo'>
                    <p><strong>Categoría:</strong> {categoria}</p>
                    <p><strong>Descripción:</strong> {descripcion}</p>
                    <p className='ProductPrice'><strong>Precio:</strong> ${precio}</p>
                </section>
                <footer className='ProductFooter'>
                    <ItemCount
                        initial={1}
                        stock={stock}
                        onAdd={(quantity) => console.log(`Se agregaron ${quantity} ${nombre} al carrito`)}
                    />
                </footer>
            </div>
        </div>
    );
};

export default ItemDetail