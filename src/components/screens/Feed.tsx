import { Box, Heading, HStack, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { ParentScrollContainer } from '../general';

export default function FeedScreen() {
	return (
		<ParentScrollContainer noHorizontalPadding>
			<Heading fontSize="24px" fontWeight="semibold" m="auto">
				Feed
			</Heading>
			<EventsForYou />
		</ParentScrollContainer>
	);
}

const EventsForYou = () => {
	return (
		<VStack mt="8">
			<Heading fontSize="24px" fontWeight="medium" ml="4">
				Events for you
			</Heading>
			<ScrollView horizontal mt="4">
				<HStack space="4" pl="4">
					<Box h="189" w="152" borderRadius="2xl" bg="white" />
					<Box h="189" w="152" borderRadius="2xl" bg="white" />
					<Box h="189" w="152" borderRadius="2xl" bg="white" />
					<Box h="189" w="152" borderRadius="2xl" bg="white" />
					<Box h="189" w="152" borderRadius="2xl" bg="white" />
					<Box />
				</HStack>
			</ScrollView>
		</VStack>
	);
};
