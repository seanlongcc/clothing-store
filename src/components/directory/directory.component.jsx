import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

//directory takes the entire object value
const Directory = ({ categories }) => {
	return (
		<div className='directory-container'>
			{/* map() iterates through the list and applies the function to each element in the list, 
			the result is a list.
			category in cagetories.map(category) is the current element, it can be named anything.
			key is used for reference, category.id gets the id for the current element.
			category on the left is the name of the prop and is set equal to the entire current element
			*/}
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default Directory;
