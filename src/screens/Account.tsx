import React from 'react';
import { Header, ParentScrollContainer } from '../components/general';

export default function AccountScreen() {
	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Account" />
		</ParentScrollContainer>
	);
}
