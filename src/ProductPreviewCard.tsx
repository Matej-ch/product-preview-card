import IProduct from "./IProduct";
import './ProductPreviewCard.scss'
import imageProductMobile from './assets/image-product-mobile.jpg'
import imageProductDesktop from './assets/image-product-desktop.jpg'

function ProductPreviewCard({product}: { product: IProduct }) {
    return (
        <article className={'preview-card'} role="main">
            <picture className={'image-wrapper'}>
                <source srcSet={imageProductDesktop} media="(min-width: 600px)" />
                <img src={imageProductMobile} alt={product.name}/>
            </picture>
            <div className={'info-wrapper'}>
                <p className={'type'}>{product.type}</p>
                <h1 className={'name'}>{product.name}</h1>
                <p className={'description'}>{product.description}</p>

                <div className={'price-group'}>
                    <span className={'new-price'}>${product.price}</span>
                    <span className={'original-price'}>
                        ${product.price_vat}
                    </span>
                </div>

                <button className={'buy-btn'}>Add to cart</button>

            </div>
        </article>
    );
}

export default ProductPreviewCard;