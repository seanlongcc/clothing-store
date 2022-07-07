import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const categories = [
	{
		id: 1,
		title: 'Hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		route: 'shop/hats',
	},
	{
		id: 2,
		title: 'Jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		route: 'shop/jackets',
	},
	{
		id: 3,
		title: 'Sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		route: 'shop/sneakers',
	},
	{
		id: 4,
		title: 'Womens',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		route: 'shop/womens',
	},
	{
		id: 5,
		title: 'Mens',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		route: 'shop/mens',
	},
];

const Directory = () => {
	return (
		<div className='directory-container'>
			{/* map() iterates through the list and applies the function to each element in the list, 
			the result is a list.
			category in cagetories.map(category) is the current element, it can be named anything.
			key is used for reference, category.id gets the id for the current element.
			category on the left is the name of the prop and is set equal to the entire current element
			*/}
			{categories.map((category) => (
				//directory -> categoryItem
				//the left categories is the name of the prop, on the right is the value of the prop
				<DirectoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default Directory;
