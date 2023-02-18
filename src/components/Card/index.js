
import Description from '../Description';
import Image from '../Image';
import './style.css';
import Footer from '../Footer';
function Card({ product, imageHandler }) {
    const { description, title, thumbnail, price, discountPercentage, rating, stock } = product;
    console.log(product.price);
    return (
        <div className="col">
            <div className="card h-100">

                <Image
                    imageHandler={imageHandler}
                    src={thumbnail}
                />
                <Description className="card-body" title={title}>
                    {description}
                </Description>

                <Footer price={price}></Footer> 


            </div>
        </div>

    );
}

export default Card;