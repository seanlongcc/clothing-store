import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';

const Home = () => {
	//home -> directory -> categoryItem
	const categories = [
		{
			id: 1,
			title: 'Hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		},
		{
			id: 2,
			title: 'Jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		},
		{
			id: 3,
			title: 'Sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		},
		{
			id: 4,
			title: 'Womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		},
		{
			id: 5,
			title: 'Mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		},
	];

	return (
		<div>
			{/*the left categories is the name of the prop, on the right is the value of the prop   */}
			<Directory categories={categories} />
			<Outlet />
		</div>
	);
};

export default Home;
