import {
	Box,
	FlatList,
	HStack,
	IconButton,
	Input,
	VStack,
	View,
} from 'native-base';
import { ListRenderItem, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import {
	Header,
	Loading,
	ParentScrollContainer,
	RemixIcon,
	Spacer,
	SquircleCard,
	SquircleImage,
} from '../components/general';
import { Heading4, SubHeading2 } from '../components/typography';
import { useAllClubsQuery } from '../generated/graphql';
import ExploreStackParamsList from '../navigation/home/explore/types';

type ClubCadProps = {
	onPress: () => void;
	image: string | { uri: string };
	name: string;
	tags: string[];
	followers: number;
	rating: number;
};

function ClubCard({
	onPress,
	image,
	name,
	tags,
	followers,
	rating,
}: ClubCadProps) {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
			<SquircleCard>
				<HStack space="4">
					<SquircleImage
						height={115}
						width={115}
						src={image}
						flex="1"
					/>
					<VStack space="3" flex="9">
						<VStack space="1">
							<Heading4 numberOfLines={2} ellipsizeMode="tail">
								{name}
							</Heading4>
							<SubHeading2 color="subtle.500">
								{tags.join(', ')}
							</SubHeading2>
						</VStack>
						<HStack space="3">
							<HStack
								space="1"
								justifyContent="center"
								alignItems="center"
							>
								<RemixIcon
									size={5}
									color="primary.500"
									name="account-circle-fill"
								/>
								<SubHeading2 color="primary.500">
									{followers}
								</SubHeading2>
							</HStack>
							<HStack
								space="1"
								justifyContent="center"
								alignItems="center"
							>
								<RemixIcon
									size={5}
									color="primary.500"
									name="star-fill"
								/>
								<SubHeading2 color="primary.500">
									{rating < 1 ? '∞' : rating}
								</SubHeading2>
							</HStack>
						</HStack>
					</VStack>
				</HStack>
			</SquircleCard>
		</TouchableOpacity>
	);
}

const MemoClubCard = React.memo(ClubCard);

export default function ExploreScreen({
	navigation,
}: NativeStackScreenProps<ExploreStackParamsList, 'Explore'>) {
	// const [search, setSearch] = useState('');
	const { data, isLoading } = useAllClubsQuery();

	if (isLoading) return <Loading />;
	const { clubs } = data || { clubs: [] };

	const allClubs: ClubCadProps[] = clubs?.map((club) => ({
		onPress: () => navigation.navigate('Club', { id: club.id }),
		name: club.name,
		image: { uri: club.image },
		tags: club.clubtags.map(({ tag }) => tag.name),
		followers: club.subscription.length,
		rating: -1,
	}));
	// const filteredList = useMemo(
	// 	() =>
	// 		allClubs.filter(({ name }) =>
	// 			name.toLowerCase().includes(search.toLowerCase()),
	// 		),
	// 	[allClubs, search],
	// );

	const renderItem: ListRenderItem<ClubCadProps> = ({ item }) => (
		<MemoClubCard {...item} />
	);

	return (
		<ParentScrollContainer noHorizontalPadding stickyHeaderIndices={[0, 1]}>
			<Header title="Explore" />
			<View px="4" mt="6">
				<FlatList
					ListHeaderComponent={
						<Input
							// value={search}
							// onChangeText={setSearch}
							borderColor="bg.500"
							bg="bg.400"
							borderRadius="xl"
							// change background color
							placeholder="Search"
							// backgroundColor="bg.500"
							InputLeftElement={
								<Box pl="2">
									<RemixIcon
										name="ri-search-line"
										size={6}
										color="body.500"
									/>
								</Box>
							}
							style={{
								backgroundColor: 'blue',
							}}
							InputRightElement={
								<IconButton
									pr="2"
									icon={
										<RemixIcon
											name="close-line"
											size={6}
											color="body.500"
										/>
									}
									colorScheme="bg"
									// onPress={() => setSearch('')}
								/>
							}
							mb="4"
							initialNumToRender={4}
							maxToRenderPerBatch={8}
						/>
					}
					data={allClubs}
					renderItem={renderItem}
					keyExtractor={(item) => item.name}
					ItemSeparatorComponent={Spacer.Horizontal}
					_contentContainerStyle={{
						px: '4',
						mt: '6',
					}}
				/>
			</View>
		</ParentScrollContainer>
	);
}
