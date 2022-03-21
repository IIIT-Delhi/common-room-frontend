import { Header, ParentScrollContainer } from '../components/general';

export default function ExploreScreen() {
	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Explore" />
		</ParentScrollContainer>
	);
}
