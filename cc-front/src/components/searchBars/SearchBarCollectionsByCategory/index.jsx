import { useSelector } from "react-redux";
import { Dropdown, InputPicker } from "rsuite";
import "./styles.scss";

const SearchBarCollectionsByCategory = ({ sortPrice0to1, sortPrice1to0 }) => {
	// import des données des catégories pour alimenter les inputPicker
	const dataCollections = useSelector((state) => state.collections.list).map((item) => ({ label: item, value: item }));

	return (
		<div className="searchBarCategories">
			<InputPicker data={dataCollections} placeholder="Collections" />
			<Dropdown title="Order by" placement="bottomEnd">
				<Dropdown.Item>Popularity low to high</Dropdown.Item>
				<Dropdown.Item>Popularity high to low</Dropdown.Item>
				<Dropdown.Item>Download As...</Dropdown.Item>
				<Dropdown.Item onClick={sortPrice0to1}>Price low to high</Dropdown.Item>
				<Dropdown.Item onClick={sortPrice1to0}>Price high to low</Dropdown.Item>
			</Dropdown>
		</div>
	);
};

export default SearchBarCollectionsByCategory;
