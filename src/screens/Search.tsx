import { Header, ParentScrollContainer } from '../components/general';

export default function SearchScreen() {
	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Search" />
		</ParentScrollContainer>
	);
}
