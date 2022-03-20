import { Box, HStack, VStack } from 'native-base';

import { TouchableOpacity } from 'react-native';
import clubImage from '../assets/dummyClubEvents';
import {
	Header,
	ParentScrollContainer,
	SquircleImage,
} from '../components/general';
import SquircleCard from '../components/general/SquircleCard';
import { Body1, Body2, Heading4 } from '../components/typography';

function NotificationCard({ clubImg, description, time }: any) {
	return (
		<TouchableOpacity activeOpacity={0.8}>
			<SquircleCard>
				<HStack justifyContent="space-between">
					<HStack space="4" flex="8">
						<SquircleImage
							height={50}
							width={50}
							src={clubImg}
							flex="1"
						/>
						<Body1 flex="5">{description}</Body1>
					</HStack>
					<Body2 flex="1" textAlign="right">
						{time}
					</Body2>
				</HStack>
			</SquircleCard>
		</TouchableOpacity>
	);
}
export default function NotificationsScreen() {
	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Notifications" />
			<HStack ml="4" mt="6" alignItems="center" space="3">
				<Heading4>New</Heading4>
				<Box h="3" w="3" borderRadius="full" bg="alert.500" />
			</HStack>
			<VStack mx="4" mt="4" space="3">
				<NotificationCard
					clubImg={clubImage.audiobytes}
					description="Audiobytes just posted a new event Parody Night"
					time="4h"
				/>
				<NotificationCard
					clubImg={clubImage.byld}
					description="Byld’s event 'API 101 using Postman' changed their venue"
					time="2m"
				/>
				<NotificationCard
					clubImg={clubImage.cyborg}
					description="Cyborg just posted a new event ‘Maze Coverage and Basics of Graphs’"
					time="4h"
				/>
			</VStack>
			<Heading4 ml="4" mt="8">
				Today
			</Heading4>
			<VStack mx="4" mt="4" space="3">
				<NotificationCard
					clubImg={clubImage.designhub}
					description="DesignHub just posted a new event 'WASD Elements Game Jam'"
					time="4h"
				/>
				<NotificationCard
					clubImg={clubImage.byld}
					description="Byld’s event 'API 101 using Postman' changed their venue"
					time="2m"
				/>
				<NotificationCard
					clubImg={clubImage.cyborg}
					description="Cyborg just posted a new event ‘Maze Coverage and Basics of Graphs’"
					time="4h"
				/>
			</VStack>
		</ParentScrollContainer>
	);
}
