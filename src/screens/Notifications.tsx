import { Box, FlatList, HStack, Text } from 'native-base';
import { ListRenderItem, TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
import {
	Header,
	ParentScrollContainer,
	SquircleImage,
	SquircleCard,
	Loading,
	Spacer,
} from '../components/general';
import { Body1, Body2, Heading4 } from '../components/typography';
import {
	NotificationsQuery,
	useNotificationsQuery,
} from '../generated/graphql';

type NotificationCardProps = {
	id: number;
	message: string;
	timestamp: string | Date;
	image: string | { uri: string };
};

function NotificationCard({
	id,
	message,
	timestamp,
	image,
}: NotificationCardProps) {
	const notifImage = typeof image === 'string' ? { uri: image } : image;
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={() => console.log('notif id', id)}
		>
			<SquircleCard>
				<HStack justifyContent="space-between">
					<HStack space="4" flex="8">
						<SquircleImage
							height={50}
							width={50}
							src={notifImage}
							flex="1"
						/>
						<Body1 flex="5">{message}</Body1>
					</HStack>
					<Body2 flex="2" textAlign="right">
						{timestamp}
					</Body2>
				</HStack>
			</SquircleCard>
		</TouchableOpacity>
	);
}
export default function NotificationsScreen() {
	const { data, isLoading } = useNotificationsQuery();

	if (isLoading) return <Loading />;
	const { notifications } = data || {};

	const renderNotifs: ListRenderItem<
		NotificationsQuery['notifications'][0]
	> = ({ item }) => {
		const { id, message, updatedAt, createdBy } = item;
		const image = createdBy.length > 0 ? createdBy[0].club.image : null;
		const timestamp = format(parseISO(updatedAt), 'MMM dd, hh:mm a');
		return (
			<NotificationCard
				id={id}
				message={message}
				timestamp={timestamp}
				image={image}
			/>
		);
	};

	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0]}>
			<Header title="Notifications" />
			<HStack ml="4" mt="6" alignItems="center" space="3">
				<Heading4>New</Heading4>
				<Box h="3" w="3" borderRadius="full" bg="alert.500" />
			</HStack>
			<FlatList
				data={notifications}
				renderItem={renderNotifs}
				ItemSeparatorComponent={Spacer.Vertical}
				_contentContainerStyle={{ m: '4' }}
				ListEmptyComponent={<Text>No new notifcations 🔕</Text>}
			/>
			{/* <VStack mx="4" mt="4" space="3">
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
			</VStack> */}
		</ParentScrollContainer>
	);
}
