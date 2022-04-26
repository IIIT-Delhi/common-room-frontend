import { VStack, Box, Flex, HStack, Button } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ParentScrollContainer } from '../components/general';
import { Body1, Heading2 } from '../components/typography';

// selectable pill
function Pill({ text = 'Brainstorming' }) {
	const [selected, setSelected] = useState(false);
	return (
		<TouchableOpacity onPress={() => setSelected(!selected)}>
			<Flex
				px="4"
				py="2"
				bg={!selected ? '#585858' : 'primary.500'}
				borderRadius="lg"
				alignSelf="flex-start"
				mr="3"
				mb="3"
			>
				<Body1
					fontWeight="medium"
					color={!selected ? 'black' : 'white'}
				>
					{text}
				</Body1>
			</Flex>
		</TouchableOpacity>
	);
}

function InterestsScreen() {
	// array of interests strings
	const interests = [
		'Astronomy',
		'Music',
		'Finance',
		'Brainstorming',
		'Software',
		'Robotics',
		'Astronomy',
		'Music',
		'Finance',
		'Brainstorming',
		'Software',
		'Robotics',
	];

	return (
		<Box h="100%">
			<Box w="100%" px="4" position="absolute" bottom="10">
				<Button w="100%" zIndex={2} h="12">
					<HStack space="4">
						<Body1 fontWeight="medium">Save Interests</Body1>
					</HStack>
				</Button>
			</Box>
			<ParentScrollContainer stickyHeaderIndices={[0]}>
				<VStack mt="6" space="3" bg="bg.500">
					<Heading2>
						Which of these areas would you best vibe with?
					</Heading2>
					<Body1 color="subtle.500">
						Choose one or multiple options to help us show you
						events you&apos;ll love the most
					</Body1>
				</VStack>
				<Flex mt="6" direction="row" wrap="wrap">
					{interests.map((interest, index) => (
						<Pill key={index} text={interest} />
					))}
				</Flex>
			</ParentScrollContainer>
		</Box>
	);
}

export default InterestsScreen;
