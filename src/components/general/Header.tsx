import React from 'react';
import { Box } from 'native-base';
import { Heading4 } from '../typography';

export default function Header({ title }) {
	return (
		<Box bg="bg.500" pt="4" pb="4">
			<Heading4 isSemiBold m="auto">
				{title}
			</Heading4>
		</Box>
	);
}
