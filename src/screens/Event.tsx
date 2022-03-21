import { Box, Button, HStack, IconButton, Image, VStack } from 'native-base';
import { useState } from 'react';
import { Dimensions } from 'react-native';

import clubImage from '../assets/dummyClubEvents';
import { ParentScrollContainer, RemixIcon } from '../components/general';
import {
	Body2,
	Heading2,
	Heading3,
	Heading5,
	SubHeading1,
	SubHeading2,
} from '../components/typography';

export default function EventScreen() {
	const [isAttending, setIsAttending] = useState(false);
	const windowWidth = Dimensions.get('window').width;
	return (
		<>
			<IconButton
				icon={<RemixIcon name="arrow-left-line" />}
				zIndex={1}
				onPress={() => alert('back')}
				variant="solid"
				position="absolute"
				top="10"
				left="4"
				_icon={{ color: 'white', size: 7 }}
				// color="white"
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
					source={clubImage.parodyNight}
					size={windowWidth}
					alt="event image"
				/>
				<VStack px="4" mt="6" space="4" pb="24">
					<VStack space="2">
						<Heading2>Parody Night </Heading2>
						<SubHeading1 color="subtle.500">
							by Audiobytes
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
									21 Feb
								</SubHeading1>{' '}
								at{' '}
								<SubHeading1 color="primary.500">
									5:00 PM
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
									21 {isAttending ? '+ you' : ''}
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
								<Heading3 color="primary.500">A-101</Heading3>
								<Heading5>Event Venue</Heading5>
							</VStack>
						</HStack>
					</VStack>

					<Body2 color="subtle.500">
						Audiobytes, in association with Cadence, is excited to
						bring to you: Parody Night! Let your creative juices
						flow in this event by singing a parody of a song of your
						choice. You will have to write parody lyrics to the song
						and then sing your new version of the song on a backing
						track of the original song. We&apos;re expecting to see
						a lot of interesting new versions! Please note the
						following rules: - submissions should be individual -
						you will not be judged on your singing skills, rather on
						your creativity and songwriting skills :p - there is no
						limit on creativity :) - your performance should be at
						least 2 minutes long and no longer than 5 minutes. - you
						will be expected to submit the lyrics to your parody
						song before the performance on Friday. Please share the
						lyrics of the parody you make with
						audiobytes@sc.iiitd.ac.in and please follow a strict
						submission deadline of 12PM on Friday, 19th March. If we
						do not receive the lyrics to your submission, you will
						stand disqualified. - if you are not sure what a parody
						is, you can check out the works of The Key of Awesome,
						Bart Baker, and Acapella Science on Youtube:) (there are
						plenty of parody artists on the internet but these are
						our favourites!) We are also excited to tell you that
						the event would be judged by some of our precious
						Alumni! So make sure to tune in on 19th March at 6PM on
						the Audiobytes Discord Server :D Registration link in
						our Bio as usual ;) May the best house win!
					</Body2>

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
		</>
	);
}
