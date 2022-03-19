import React from 'react';
import { Box } from 'native-base';
import { Heading4 } from '../typography';

export default function Header({ title }: any) {
	return (
		<Box bg="bg.500" pt="6" pb="4">
			<Heading4 isSemiBold m="auto">
				{title}
			</Heading4>
		</Box>
	);
}
