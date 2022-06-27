import './category-item.styles.scss';

//CategoryItem takes the entire category object value
const CategoryItem = ({ category }) => {
	//the object is deconstructed
	//imageUrl and title are attributes of category and can now be used
	const { imageUrl, title } = category;
	return (
		<div className='category-container'>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='category-body-container'>
				<h2>{title}</h2>
				<p>Shop now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
