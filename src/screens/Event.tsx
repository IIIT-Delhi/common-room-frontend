import {
	Box,
	Button,
	HStack,
	IconButton,
	Image,
	View,
	VStack,
} from 'native-base';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from 'urql';
import { format, parseISO } from 'date-fns';
import clubImage from '../assets/dummyClubEvents';
import {
	Loading,
	ParentScrollContainer,
	RemixIcon,
} from '../components/general';
import {
	Body2,
	Heading2,
	Heading3,
	Heading5,
	SubHeading1,
	SubHeading2,
} from '../components/typography';
import FeedStackParamsList from '../navigation/home/feed/types';
import { EventDocument } from '../generated/graphql';

export default function EventScreen({
	navigation,
	route,
}: NativeStackScreenProps<FeedStackParamsList, 'Event'>) {
	const [isAttending, setIsAttending] = useState(false);
	const windowWidth = Dimensions.get('window').width;
	const { id } = route.params;
	const [{ data, fetching }] = useQuery({
		query: EventDocument,
		variables: {
			where: {
				id,
			},
		},
	});
	if (fetching) return <Loading />;
	const { event } = data || {};
	const {
		name,
		description,
		image,
		eventStartDate,
		venue,
		clubs,
		rsvpEvent,
	} = event || {};
	const date = parseISO(eventStartDate);
	const attendance = (rsvpEvent || []).length;
	return (
		<View height="100%">
			<IconButton
				icon={<RemixIcon name="arrow-left-line" />}
				zIndex={1}
				onPress={() => navigation.goBack()}
				variant="solid"
				position="absolute"
				top="10"
				left="4"
				_icon={{ color: 'white', size: 7 }}
				colorScheme="bg"
				backgroundColor="#00000066"
			/>
			{!isAttending && (
				<Box position="absolute" bottom="10" w="100%">
					<Button
						zIndex={2}
						m="auto"
						w="90%"
						height="12"
						onPress={() => setIsAttending(true)}
					>
						I&apos;m Attending 🙋‍♀️
					</Button>
				</Box>
			)}
			<ParentScrollContainer contentUnderStatusBar noHorizontalPadding>
				<Image
					source={{ uri: image } || clubImage.audiobytes}
					size={windowWidth}
					alt="event image"
				/>
				<VStack px="4" mt="6" space="4" pb="24">
					<VStack space="2">
						<Heading2>{name}</Heading2>
						<SubHeading1
							color="subtle.500"
							onPress={() => navigation.navigate('Club', { id })}
						>
							by {clubs}
						</SubHeading1>
					</VStack>
					<VStack space="3">
						{isAttending && (
							<HStack
								p="2"
								justifyContent="space-between"
								bg="bg.400"
								borderRadius="xl"
							>
								<SubHeading1>
									You&apos;re attending this event 🎉
								</SubHeading1>
								<SubHeading1
									color="subtle.500"
									onPress={() => setIsAttending(false)}
								>
									Cancel?
								</SubHeading1>
							</HStack>
						)}
						<HStack
							p="2"
							justifyContent="space-between"
							bg="bg.400"
							borderRadius="xl"
						>
							<SubHeading1>
								Event starts on{' '}
								<SubHeading1 color="primary.500">
									{format(date, 'MMMM d')}
								</SubHeading1>{' '}
								at{' '}
								<SubHeading1 color="primary.500">
									{format(date, 'h:mm a')}
								</SubHeading1>
							</SubHeading1>
						</HStack>
						<HStack space="3" justifyContent="space-between">
							<VStack
								p="4"
								justifyContent="space-between"
								bg="bg.400"
								borderRadius="xl"
								space="2"
								w="48%"
							>
								<Heading3 color="primary.500">
									{attendance} {isAttending ? '+ you' : ''}
								</Heading3>
								<Heading5>Attending</Heading5>
							</VStack>
							<VStack
								p="4"
								justifyContent="space-between"
								bg="bg.400"
								borderRadius="xl"
								space="2"
								w="48%"
							>
								<Heading3 color="primary.500">{venue}</Heading3>
								<Heading5>Event Venue</Heading5>
							</VStack>
						</HStack>
					</VStack>

					<Body2 color="subtle.500">{description}</Body2>

					<VStack space="3">
						<SubHeading1 color="primary.500">Links</SubHeading1>
						{isAttending ? (
							<HStack space="4">
								<SubHeading2>Zoom</SubHeading2>
								<SubHeading2>Discord</SubHeading2>
							</HStack>
						) : (
							<Body2>
								{`Want to see event links? Hit the "I'm Attending" Button`}
							</Body2>
						)}
					</VStack>
				</VStack>
			</ParentScrollContainer>
		</View>
	);
}
