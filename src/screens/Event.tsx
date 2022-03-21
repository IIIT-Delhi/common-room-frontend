import { Image, VStack } from 'native-base';
import { Dimensions } from 'react-native';

import clubImage from '../assets/dummyClubEvents';
import { ParentScrollContainer } from '../components/general';
import { Heading2 } from '../components/typography';
import { SubHeading1 } from '../components/typography/Heading';

export default function EventScreen() {
	const windowWidth = Dimensions.get('window').width;
	return (
		<ParentScrollContainer contentUnderStatusBar noHorizontalPadding>
			<Image
				source={clubImage.parodyNight}
				size={windowWidth}
				alt="event image"
			/>
			<VStack px="4" mt="6">
				<VStack space="2">
					<Heading2>Parody Night </Heading2>
					<SubHeading1 color="subtle.500">by Audiobytes</SubHeading1>
				</VStack>
			</VStack>
		</ParentScrollContainer>
	);
}
