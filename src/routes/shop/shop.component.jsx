//context is stuff that is accessible anywhere
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
	//give me the products from useContext
	const { products } = useContext(ProductsContext);
	return (
		<div className='products-container'>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Shop;
