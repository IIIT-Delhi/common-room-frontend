import { VStack, Box, Flex, HStack, Button } from 'native-base';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Loading, ParentScrollContainer } from '../components/general';
import { Body1, Heading2 } from '../components/typography';
import {
	AllUserTagsQuery,
	useAllUserTagsQuery,
	useUpdateUserMutation,
} from '../generated/graphql';
import { useAuth } from '../hooks';

// selectable pill
function Pill({
	text = 'Brainstorming',
	onPress = () => {},
	tagStatus = false,
}) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Flex
				px="4"
				py="2"
				bg={!tagStatus ? '#585858' : 'primary.500'}
				borderRadius="lg"
				alignSelf="flex-start"
				mr="3"
				mb="3"
			>
				<Body1
					fontWeight="medium"
					color={!tagStatus ? 'black' : 'white'}
				>
					{text}
				</Body1>
			</Flex>
		</TouchableOpacity>
	);
}

function InterestsScreen() {
	const { authData, signIn } = useAuth();
	const [tagStatus, updateTagStatus] = useState<any>(null);
	const { data, isLoading } = useAllUserTagsQuery();
	const updateUser = useUpdateUserMutation({
		onSuccess: ({ updateUser: user }) => {
			signIn({
				...authData,
				...user,
			});
		},
	});

	const {
		tags,
		me: { userTags },
	} = (data || { tags: [], me: { userTags: [] } }) as AllUserTagsQuery;

	useEffect(() => {
		if (tags.length > 0) {
			const tagStatusInit = {} as Record<number, boolean>;
			for (let index = 0; index < tags.length; index += 1) {
				tagStatusInit[tags[index].id] = false;
			}
			for (let index = 0; index < userTags.length; index += 1) {
				tagStatusInit[userTags[index].tag.id] = true;
			}
			updateTagStatus(tagStatusInit);
		}
	}, [tags, userTags]);

	const saveInterests = () => {
		const tagsToAdd = [];
		const tagsToRemove = [];
		for (let index = 0; index < tags.length; index += 1) {
			const tag = tags[index];
			if (
				tagStatus[tag.id.toString()] &&
				!userTags.some((userTag) => userTag.tag.id === tag.id)
			) {
				tagsToAdd.push(tag.id);
			} else if (
				!tagStatus[tag.id.toString()] &&
				userTags.some((userTag) => userTag.tag.id === tag.id)
			) {
				tagsToRemove.push(tag.id);
			}
		}
		updateUser.mutate({
			data: {
				isOnBoarded: { set: true },
				userTags: {
					createMany: {
						data: tagsToAdd.map((tagId) => ({ tagId })),
					},
					deleteMany: tagsToRemove.map((tagId) => ({
						tagId: { equals: tagId },
					})),
				},
			},
			where: {
				id: authData.id,
			},
		});
		// signIn({
		// 	...authData,
		// 	isOnBoarded: true,
		// });
	};

	if (isLoading) return <Loading />;

	return (
		<Box h="100%">
			<Box w="100%" px="4" position="absolute" bottom="10">
				<Button
					w="100%"
					zIndex={2}
					h="12"
					onPress={saveInterests}
					isLoading={updateUser.isLoading}
				>
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
					{tagStatus &&
						tags.map(({ id, name }) => (
							<Pill
								key={id}
								text={name}
								onPress={() =>
									updateTagStatus({
										...tagStatus,
										[id]: !tagStatus[id.toString()],
									})
								}
								tagStatus={tagStatus[id.toString()]}
							/>
						))}
				</Flex>
			</ParentScrollContainer>
		</Box>
	);
}

export default InterestsScreen;

// export default function Temp() {
// 	return (
// 		<Box pt={200}>
// 			<Heading2>Hi</Heading2>
// 		</Box>
// 	);
// }
