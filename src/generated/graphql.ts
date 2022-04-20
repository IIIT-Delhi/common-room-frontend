import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateClub = {
  __typename?: 'AggregateClub';
  _count?: Maybe<ClubCountAggregate>;
  _max?: Maybe<ClubMaxAggregate>;
  _min?: Maybe<ClubMinAggregate>;
};

export type AggregateClubCoordinator = {
  __typename?: 'AggregateClubCoordinator';
  _count?: Maybe<ClubCoordinatorCountAggregate>;
  _max?: Maybe<ClubCoordinatorMaxAggregate>;
  _min?: Maybe<ClubCoordinatorMinAggregate>;
};

export type AggregateClubMember = {
  __typename?: 'AggregateClubMember';
  _avg?: Maybe<ClubMemberAvgAggregate>;
  _count?: Maybe<ClubMemberCountAggregate>;
  _max?: Maybe<ClubMemberMaxAggregate>;
  _min?: Maybe<ClubMemberMinAggregate>;
  _sum?: Maybe<ClubMemberSumAggregate>;
};

export type AggregateClubRank = {
  __typename?: 'AggregateClubRank';
  _avg?: Maybe<ClubRankAvgAggregate>;
  _count?: Maybe<ClubRankCountAggregate>;
  _max?: Maybe<ClubRankMaxAggregate>;
  _min?: Maybe<ClubRankMinAggregate>;
  _sum?: Maybe<ClubRankSumAggregate>;
};

export type AggregateEvent = {
  __typename?: 'AggregateEvent';
  _count?: Maybe<EventCountAggregate>;
  _max?: Maybe<EventMaxAggregate>;
  _min?: Maybe<EventMinAggregate>;
};

export type AggregateNotification = {
  __typename?: 'AggregateNotification';
  _count?: Maybe<NotificationCountAggregate>;
  _max?: Maybe<NotificationMaxAggregate>;
  _min?: Maybe<NotificationMinAggregate>;
};

export type AggregateOtp = {
  __typename?: 'AggregateOTP';
  _count?: Maybe<OtpCountAggregate>;
  _max?: Maybe<OtpMaxAggregate>;
  _min?: Maybe<OtpMinAggregate>;
};

export type AggregatePosition = {
  __typename?: 'AggregatePosition';
  _avg?: Maybe<PositionAvgAggregate>;
  _count?: Maybe<PositionCountAggregate>;
  _max?: Maybe<PositionMaxAggregate>;
  _min?: Maybe<PositionMinAggregate>;
  _sum?: Maybe<PositionSumAggregate>;
};

export type AggregateRsvpEvent = {
  __typename?: 'AggregateRSVPEvent';
  _count?: Maybe<RsvpEventCountAggregate>;
  _max?: Maybe<RsvpEventMaxAggregate>;
  _min?: Maybe<RsvpEventMinAggregate>;
};

export type AggregateStudentRank = {
  __typename?: 'AggregateStudentRank';
  _avg?: Maybe<StudentRankAvgAggregate>;
  _count?: Maybe<StudentRankCountAggregate>;
  _max?: Maybe<StudentRankMaxAggregate>;
  _min?: Maybe<StudentRankMinAggregate>;
  _sum?: Maybe<StudentRankSumAggregate>;
};

export type AggregateSubscription = {
  __typename?: 'AggregateSubscription';
  _count?: Maybe<SubscriptionCountAggregate>;
  _max?: Maybe<SubscriptionMaxAggregate>;
  _min?: Maybe<SubscriptionMinAggregate>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateVote = {
  __typename?: 'AggregateVote';
  _count?: Maybe<VoteCountAggregate>;
  _max?: Maybe<VoteMaxAggregate>;
  _min?: Maybe<VoteMinAggregate>;
};

export type Auth = {
  __typename?: 'Auth';
  token: Scalars['String'];
  user: User;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Club = {
  __typename?: 'Club';
  _count?: Maybe<ClubCount>;
  clubCoordinator: Array<ClubCoordinator>;
  clubMember: Array<ClubMember>;
  clubRank?: Maybe<ClubRank>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events: Array<Event>;
  id: Scalars['String'];
  image: Scalars['String'];
  links: Scalars['String'];
  name: Scalars['String'];
  notifications: Array<Notification>;
  otp?: Maybe<Otp>;
  subscription: Array<Subscription>;
  tags: Array<Tag>;
  updatedAt: Scalars['DateTime'];
};


export type ClubClubCoordinatorArgs = {
  cursor?: InputMaybe<ClubCoordinatorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubCoordinatorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubCoordinatorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubCoordinatorWhereInput>;
};


export type ClubClubMemberArgs = {
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type ClubEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type ClubNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type ClubSubscriptionArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type ClubTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type ClubCoordinator = {
  __typename?: 'ClubCoordinator';
  club: Club;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  user: User;
  userEmail: Scalars['String'];
};

export type ClubCoordinatorClubIdUserEmailCompoundUniqueInput = {
  clubId: Scalars['String'];
  userEmail: Scalars['String'];
};

export type ClubCoordinatorCountAggregate = {
  __typename?: 'ClubCoordinatorCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  userEmail: Scalars['Int'];
};

export type ClubCoordinatorCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorCreateInput = {
  club: ClubCreateNestedOneWithoutClubCoordinatorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubCoordinatorInput;
};

export type ClubCoordinatorCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCoordinatorCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubCoordinatorCreateWithoutClubInput>>;
};

export type ClubCoordinatorCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCoordinatorCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubCoordinatorCreateWithoutUserInput>>;
};

export type ClubCoordinatorCreateOrConnectWithoutClubInput = {
  create: ClubCoordinatorCreateWithoutClubInput;
  where: ClubCoordinatorWhereUniqueInput;
};

export type ClubCoordinatorCreateOrConnectWithoutUserInput = {
  create: ClubCoordinatorCreateWithoutUserInput;
  where: ClubCoordinatorWhereUniqueInput;
};

export type ClubCoordinatorCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubCoordinatorInput;
};

export type ClubCoordinatorCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutClubCoordinatorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCoordinatorGroupBy = {
  __typename?: 'ClubCoordinatorGroupBy';
  _count?: Maybe<ClubCoordinatorCountAggregate>;
  _max?: Maybe<ClubCoordinatorMaxAggregate>;
  _min?: Maybe<ClubCoordinatorMinAggregate>;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  userEmail: Scalars['String'];
};

export type ClubCoordinatorListRelationFilter = {
  every?: InputMaybe<ClubCoordinatorWhereInput>;
  none?: InputMaybe<ClubCoordinatorWhereInput>;
  some?: InputMaybe<ClubCoordinatorWhereInput>;
};

export type ClubCoordinatorMaxAggregate = {
  __typename?: 'ClubCoordinatorMaxAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type ClubCoordinatorMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorMinAggregate = {
  __typename?: 'ClubCoordinatorMinAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type ClubCoordinatorMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorOrderByWithAggregationInput = {
  _count?: InputMaybe<ClubCoordinatorCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubCoordinatorMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubCoordinatorMinOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userEmail?: InputMaybe<SortOrder>;
};

export enum ClubCoordinatorScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  UserEmail = 'userEmail'
}

export type ClubCoordinatorScalarWhereInput = {
  AND?: InputMaybe<Array<ClubCoordinatorScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubCoordinatorScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubCoordinatorScalarWhereInput>>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type ClubCoordinatorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubCoordinatorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubCoordinatorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubCoordinatorScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  userEmail?: InputMaybe<StringWithAggregatesFilter>;
};

export type ClubCoordinatorUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubCoordinatorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubCoordinatorInput>;
};

export type ClubCoordinatorUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ClubCoordinatorUpdateManyWithWhereWithoutClubInput = {
  data: ClubCoordinatorUpdateManyMutationInput;
  where: ClubCoordinatorScalarWhereInput;
};

export type ClubCoordinatorUpdateManyWithWhereWithoutUserInput = {
  data: ClubCoordinatorUpdateManyMutationInput;
  where: ClubCoordinatorScalarWhereInput;
};

export type ClubCoordinatorUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCoordinatorCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubCoordinatorCreateWithoutClubInput>>;
  delete?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubCoordinatorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubCoordinatorUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubCoordinatorUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubCoordinatorUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubCoordinatorUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCoordinatorCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubCoordinatorCreateWithoutUserInput>>;
  delete?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubCoordinatorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubCoordinatorUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ClubCoordinatorUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ClubCoordinatorUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ClubCoordinatorUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubCoordinatorUpdateWithoutClubInput;
  where: ClubCoordinatorWhereUniqueInput;
};

export type ClubCoordinatorUpdateWithWhereUniqueWithoutUserInput = {
  data: ClubCoordinatorUpdateWithoutUserInput;
  where: ClubCoordinatorWhereUniqueInput;
};

export type ClubCoordinatorUpdateWithoutClubInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubCoordinatorInput>;
};

export type ClubCoordinatorUpdateWithoutUserInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubCoordinatorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type ClubCoordinatorUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubCoordinatorCreateWithoutClubInput;
  update: ClubCoordinatorUpdateWithoutClubInput;
  where: ClubCoordinatorWhereUniqueInput;
};

export type ClubCoordinatorUpsertWithWhereUniqueWithoutUserInput = {
  create: ClubCoordinatorCreateWithoutUserInput;
  update: ClubCoordinatorUpdateWithoutUserInput;
  where: ClubCoordinatorWhereUniqueInput;
};

export type ClubCoordinatorWhereInput = {
  AND?: InputMaybe<Array<ClubCoordinatorWhereInput>>;
  NOT?: InputMaybe<Array<ClubCoordinatorWhereInput>>;
  OR?: InputMaybe<Array<ClubCoordinatorWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type ClubCoordinatorWhereUniqueInput = {
  clubId_userEmail?: InputMaybe<ClubCoordinatorClubIdUserEmailCompoundUniqueInput>;
};

export type ClubCount = {
  __typename?: 'ClubCount';
  clubCoordinator: Scalars['Int'];
  clubMember: Scalars['Int'];
  events: Scalars['Int'];
  notifications: Scalars['Int'];
  subscription: Scalars['Int'];
  tags: Scalars['Int'];
};

export type ClubCountAggregate = {
  __typename?: 'ClubCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  links: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ClubCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  links?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubCreateInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutClubsInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutClubsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateNestedManyWithoutEventsInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutEventsInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutEventsInput>>;
};

export type ClubCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutTagsInput>>;
};

export type ClubCreateNestedOneWithoutClubCoordinatorInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubCoordinatorInput>;
  create?: InputMaybe<ClubCreateWithoutClubCoordinatorInput>;
};

export type ClubCreateNestedOneWithoutClubMemberInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<ClubCreateWithoutClubMemberInput>;
};

export type ClubCreateNestedOneWithoutClubRankInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubRankInput>;
  create?: InputMaybe<ClubCreateWithoutClubRankInput>;
};

export type ClubCreateNestedOneWithoutNotificationsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<ClubCreateWithoutNotificationsInput>;
};

export type ClubCreateNestedOneWithoutOtpInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutOtpInput>;
  create?: InputMaybe<ClubCreateWithoutOtpInput>;
};

export type ClubCreateNestedOneWithoutSubscriptionInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutSubscriptionInput>;
  create?: InputMaybe<ClubCreateWithoutSubscriptionInput>;
};

export type ClubCreateOrConnectWithoutClubCoordinatorInput = {
  create: ClubCreateWithoutClubCoordinatorInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubMemberInput = {
  create: ClubCreateWithoutClubMemberInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubRankInput = {
  create: ClubCreateWithoutClubRankInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutEventsInput = {
  create: ClubCreateWithoutEventsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutNotificationsInput = {
  create: ClubCreateWithoutNotificationsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutOtpInput = {
  create: ClubCreateWithoutOtpInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutSubscriptionInput = {
  create: ClubCreateWithoutSubscriptionInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutTagsInput = {
  create: ClubCreateWithoutTagsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateWithoutClubCoordinatorInput = {
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutClubsInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutClubsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubMemberInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutClubsInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutClubsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubRankInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutClubsInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutClubsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutEventsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutClubsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutNotificationsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutClubsInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutClubsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutOtpInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutClubsInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutClubsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutSubscriptionInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutClubsInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutClubsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutTagsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  events?: InputMaybe<EventCreateNestedManyWithoutClubsInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubGroupBy = {
  __typename?: 'ClubGroupBy';
  _count?: Maybe<ClubCountAggregate>;
  _max?: Maybe<ClubMaxAggregate>;
  _min?: Maybe<ClubMinAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  links: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ClubListRelationFilter = {
  every?: InputMaybe<ClubWhereInput>;
  none?: InputMaybe<ClubWhereInput>;
  some?: InputMaybe<ClubWhereInput>;
};

export type ClubMaxAggregate = {
  __typename?: 'ClubMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  links?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  links?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubMember = {
  __typename?: 'ClubMember';
  club: Club;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  user: User;
  userEmail: Scalars['String'];
};

export type ClubMemberAvgAggregate = {
  __typename?: 'ClubMemberAvgAggregate';
  level?: Maybe<Scalars['Float']>;
};

export type ClubMemberAvgOrderByAggregateInput = {
  level?: InputMaybe<SortOrder>;
};

export type ClubMemberClubIdUserEmailCompoundUniqueInput = {
  clubId: Scalars['String'];
  userEmail: Scalars['String'];
};

export type ClubMemberCountAggregate = {
  __typename?: 'ClubMemberCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  level: Scalars['Int'];
  userEmail: Scalars['Int'];
};

export type ClubMemberCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type ClubMemberCreateInput = {
  club: ClubCreateNestedOneWithoutClubMemberInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  level?: InputMaybe<Scalars['Int']>;
  user: UserCreateNestedOneWithoutClubMemberInput;
};

export type ClubMemberCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutClubInput>>;
};

export type ClubMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutUserInput>>;
};

export type ClubMemberCreateOrConnectWithoutClubInput = {
  create: ClubMemberCreateWithoutClubInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberCreateOrConnectWithoutUserInput = {
  create: ClubMemberCreateWithoutUserInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  level?: InputMaybe<Scalars['Int']>;
  user: UserCreateNestedOneWithoutClubMemberInput;
};

export type ClubMemberCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutClubMemberInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  level?: InputMaybe<Scalars['Int']>;
};

export type ClubMemberGroupBy = {
  __typename?: 'ClubMemberGroupBy';
  _avg?: Maybe<ClubMemberAvgAggregate>;
  _count?: Maybe<ClubMemberCountAggregate>;
  _max?: Maybe<ClubMemberMaxAggregate>;
  _min?: Maybe<ClubMemberMinAggregate>;
  _sum?: Maybe<ClubMemberSumAggregate>;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  level: Scalars['Int'];
  userEmail: Scalars['String'];
};

export type ClubMemberListRelationFilter = {
  every?: InputMaybe<ClubMemberWhereInput>;
  none?: InputMaybe<ClubMemberWhereInput>;
  some?: InputMaybe<ClubMemberWhereInput>;
};

export type ClubMemberMaxAggregate = {
  __typename?: 'ClubMemberMaxAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  level?: Maybe<Scalars['Int']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type ClubMemberMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type ClubMemberMinAggregate = {
  __typename?: 'ClubMemberMinAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  level?: Maybe<Scalars['Int']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type ClubMemberMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type ClubMemberOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubMemberOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubMemberAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubMemberCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubMemberMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubMemberMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubMemberSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type ClubMemberOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userEmail?: InputMaybe<SortOrder>;
};

export enum ClubMemberScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Level = 'level',
  UserEmail = 'userEmail'
}

export type ClubMemberScalarWhereInput = {
  AND?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  level?: InputMaybe<IntFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type ClubMemberScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubMemberScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubMemberScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubMemberScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  level?: InputMaybe<IntWithAggregatesFilter>;
  userEmail?: InputMaybe<StringWithAggregatesFilter>;
};

export type ClubMemberSumAggregate = {
  __typename?: 'ClubMemberSumAggregate';
  level?: Maybe<Scalars['Int']>;
};

export type ClubMemberSumOrderByAggregateInput = {
  level?: InputMaybe<SortOrder>;
};

export type ClubMemberUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubMemberInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubMemberInput>;
};

export type ClubMemberUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubMemberUpdateManyWithWhereWithoutClubInput = {
  data: ClubMemberUpdateManyMutationInput;
  where: ClubMemberScalarWhereInput;
};

export type ClubMemberUpdateManyWithWhereWithoutUserInput = {
  data: ClubMemberUpdateManyMutationInput;
  where: ClubMemberScalarWhereInput;
};

export type ClubMemberUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutClubInput>>;
  delete?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubMemberUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubMemberUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubMemberUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubMemberUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutUserInput>>;
  delete?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ClubMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ClubMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ClubMemberUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubMemberUpdateWithoutClubInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: ClubMemberUpdateWithoutUserInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpdateWithoutClubInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubMemberInput>;
};

export type ClubMemberUpdateWithoutUserInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubMemberInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubMemberUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubMemberCreateWithoutClubInput;
  update: ClubMemberUpdateWithoutClubInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: ClubMemberCreateWithoutUserInput;
  update: ClubMemberUpdateWithoutUserInput;
  where: ClubMemberWhereUniqueInput;
};

export type ClubMemberWhereInput = {
  AND?: InputMaybe<Array<ClubMemberWhereInput>>;
  NOT?: InputMaybe<Array<ClubMemberWhereInput>>;
  OR?: InputMaybe<Array<ClubMemberWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  level?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type ClubMemberWhereUniqueInput = {
  clubId_userEmail?: InputMaybe<ClubMemberClubIdUserEmailCompoundUniqueInput>;
};

export type ClubMinAggregate = {
  __typename?: 'ClubMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  links?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  links?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubOrderByWithAggregationInput = {
  _count?: InputMaybe<ClubCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  links?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubOrderByWithRelationInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorOrderByRelationAggregateInput>;
  clubMember?: InputMaybe<ClubMemberOrderByRelationAggregateInput>;
  clubRank?: InputMaybe<ClubRankOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  events?: InputMaybe<EventOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  links?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  otp?: InputMaybe<OtpOrderByWithRelationInput>;
  subscription?: InputMaybe<SubscriptionOrderByRelationAggregateInput>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubRank = {
  __typename?: 'ClubRank';
  club: Club;
  clubId: Scalars['String'];
  eventCount: Scalars['Int'];
  id: Scalars['String'];
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
};

export type ClubRankAvgAggregate = {
  __typename?: 'ClubRankAvgAggregate';
  eventCount?: Maybe<Scalars['Float']>;
  moneyAwarded?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  rsvpCount?: Maybe<Scalars['Float']>;
  upVoteCount?: Maybe<Scalars['Float']>;
};

export type ClubRankAvgOrderByAggregateInput = {
  eventCount?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
};

export type ClubRankCountAggregate = {
  __typename?: 'ClubRankCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  eventCount: Scalars['Int'];
  id: Scalars['Int'];
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
};

export type ClubRankCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
};

export type ClubRankCreateInput = {
  club: ClubCreateNestedOneWithoutClubRankInput;
  eventCount: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
};

export type ClubRankCreateNestedOneWithoutClubInput = {
  connect?: InputMaybe<ClubRankWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubRankCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<ClubRankCreateWithoutClubInput>;
};

export type ClubRankCreateOrConnectWithoutClubInput = {
  create: ClubRankCreateWithoutClubInput;
  where: ClubRankWhereUniqueInput;
};

export type ClubRankCreateWithoutClubInput = {
  eventCount: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
};

export type ClubRankGroupBy = {
  __typename?: 'ClubRankGroupBy';
  _avg?: Maybe<ClubRankAvgAggregate>;
  _count?: Maybe<ClubRankCountAggregate>;
  _max?: Maybe<ClubRankMaxAggregate>;
  _min?: Maybe<ClubRankMinAggregate>;
  _sum?: Maybe<ClubRankSumAggregate>;
  clubId: Scalars['String'];
  eventCount: Scalars['Int'];
  id: Scalars['String'];
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
};

export type ClubRankMaxAggregate = {
  __typename?: 'ClubRankMaxAggregate';
  clubId?: Maybe<Scalars['String']>;
  eventCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  moneyAwarded?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  rsvpCount?: Maybe<Scalars['Int']>;
  upVoteCount?: Maybe<Scalars['Int']>;
};

export type ClubRankMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
};

export type ClubRankMinAggregate = {
  __typename?: 'ClubRankMinAggregate';
  clubId?: Maybe<Scalars['String']>;
  eventCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  moneyAwarded?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  rsvpCount?: Maybe<Scalars['Int']>;
  upVoteCount?: Maybe<Scalars['Int']>;
};

export type ClubRankMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
};

export type ClubRankOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubRankAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubRankCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubRankMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubRankMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubRankSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
};

export type ClubRankOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
};

export type ClubRankRelationFilter = {
  is?: InputMaybe<ClubRankWhereInput>;
  isNot?: InputMaybe<ClubRankWhereInput>;
};

export enum ClubRankScalarFieldEnum {
  ClubId = 'clubId',
  EventCount = 'eventCount',
  Id = 'id',
  MoneyAwarded = 'moneyAwarded',
  Rank = 'rank',
  RsvpCount = 'rsvpCount',
  UpVoteCount = 'upVoteCount'
}

export type ClubRankScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubRankScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubRankScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubRankScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<StringWithAggregatesFilter>;
  eventCount?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  moneyAwarded?: InputMaybe<IntWithAggregatesFilter>;
  rank?: InputMaybe<IntWithAggregatesFilter>;
  rsvpCount?: InputMaybe<IntWithAggregatesFilter>;
  upVoteCount?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClubRankSumAggregate = {
  __typename?: 'ClubRankSumAggregate';
  eventCount?: Maybe<Scalars['Int']>;
  moneyAwarded?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  rsvpCount?: Maybe<Scalars['Int']>;
  upVoteCount?: Maybe<Scalars['Int']>;
};

export type ClubRankSumOrderByAggregateInput = {
  eventCount?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
};

export type ClubRankUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubRankInput>;
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  moneyAwarded?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  rsvpCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  upVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubRankUpdateManyMutationInput = {
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  moneyAwarded?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  rsvpCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  upVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubRankUpdateOneWithoutClubInput = {
  connect?: InputMaybe<ClubRankWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubRankCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<ClubRankCreateWithoutClubInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ClubRankUpdateWithoutClubInput>;
  upsert?: InputMaybe<ClubRankUpsertWithoutClubInput>;
};

export type ClubRankUpdateWithoutClubInput = {
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  moneyAwarded?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  rsvpCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  upVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ClubRankUpsertWithoutClubInput = {
  create: ClubRankCreateWithoutClubInput;
  update: ClubRankUpdateWithoutClubInput;
};

export type ClubRankWhereInput = {
  AND?: InputMaybe<Array<ClubRankWhereInput>>;
  NOT?: InputMaybe<Array<ClubRankWhereInput>>;
  OR?: InputMaybe<Array<ClubRankWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  eventCount?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  moneyAwarded?: InputMaybe<IntFilter>;
  rank?: InputMaybe<IntFilter>;
  rsvpCount?: InputMaybe<IntFilter>;
  upVoteCount?: InputMaybe<IntFilter>;
};

export type ClubRankWhereUniqueInput = {
  clubId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type ClubRelationFilter = {
  is?: InputMaybe<ClubWhereInput>;
  isNot?: InputMaybe<ClubWhereInput>;
};

export enum ClubScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  Links = 'links',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ClubScalarWhereInput = {
  AND?: InputMaybe<Array<ClubScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  links?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  links?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ClubUpdateInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutClubsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  tags?: InputMaybe<TagUpdateManyWithoutClubsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateManyWithWhereWithoutEventsInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithWhereWithoutTagsInput = {
  data: ClubUpdateManyMutationInput;
  where: ClubScalarWhereInput;
};

export type ClubUpdateManyWithoutEventsInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutEventsInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutEventsInput>>;
  delete?: InputMaybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubUpdateWithWhereUniqueWithoutEventsInput>>;
  updateMany?: InputMaybe<Array<ClubUpdateManyWithWhereWithoutEventsInput>>;
  upsert?: InputMaybe<Array<ClubUpsertWithWhereUniqueWithoutEventsInput>>;
};

export type ClubUpdateManyWithoutTagsInput = {
  connect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<ClubCreateWithoutTagsInput>>;
  delete?: InputMaybe<Array<ClubWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: InputMaybe<Array<ClubUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: InputMaybe<Array<ClubUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type ClubUpdateOneRequiredWithoutClubCoordinatorInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubCoordinatorInput>;
  create?: InputMaybe<ClubCreateWithoutClubCoordinatorInput>;
  update?: InputMaybe<ClubUpdateWithoutClubCoordinatorInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubCoordinatorInput>;
};

export type ClubUpdateOneRequiredWithoutClubMemberInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<ClubCreateWithoutClubMemberInput>;
  update?: InputMaybe<ClubUpdateWithoutClubMemberInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubMemberInput>;
};

export type ClubUpdateOneRequiredWithoutClubRankInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubRankInput>;
  create?: InputMaybe<ClubCreateWithoutClubRankInput>;
  update?: InputMaybe<ClubUpdateWithoutClubRankInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubRankInput>;
};

export type ClubUpdateOneRequiredWithoutNotificationsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutNotificationsInput>;
  create?: InputMaybe<ClubCreateWithoutNotificationsInput>;
  update?: InputMaybe<ClubUpdateWithoutNotificationsInput>;
  upsert?: InputMaybe<ClubUpsertWithoutNotificationsInput>;
};

export type ClubUpdateOneRequiredWithoutOtpInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutOtpInput>;
  create?: InputMaybe<ClubCreateWithoutOtpInput>;
  update?: InputMaybe<ClubUpdateWithoutOtpInput>;
  upsert?: InputMaybe<ClubUpsertWithoutOtpInput>;
};

export type ClubUpdateOneRequiredWithoutSubscriptionInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutSubscriptionInput>;
  create?: InputMaybe<ClubCreateWithoutSubscriptionInput>;
  update?: InputMaybe<ClubUpdateWithoutSubscriptionInput>;
  upsert?: InputMaybe<ClubUpsertWithoutSubscriptionInput>;
};

export type ClubUpdateWithWhereUniqueWithoutEventsInput = {
  data: ClubUpdateWithoutEventsInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithWhereUniqueWithoutTagsInput = {
  data: ClubUpdateWithoutTagsInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpdateWithoutClubCoordinatorInput = {
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutClubsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  tags?: InputMaybe<TagUpdateManyWithoutClubsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubMemberInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutClubsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  tags?: InputMaybe<TagUpdateManyWithoutClubsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubRankInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutClubsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  tags?: InputMaybe<TagUpdateManyWithoutClubsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutEventsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  tags?: InputMaybe<TagUpdateManyWithoutClubsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutNotificationsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutClubsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  tags?: InputMaybe<TagUpdateManyWithoutClubsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutOtpInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutClubsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  tags?: InputMaybe<TagUpdateManyWithoutClubsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutSubscriptionInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutClubsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  tags?: InputMaybe<TagUpdateManyWithoutClubsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutTagsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutClubsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedByInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpsertWithWhereUniqueWithoutEventsInput = {
  create: ClubCreateWithoutEventsInput;
  update: ClubUpdateWithoutEventsInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithWhereUniqueWithoutTagsInput = {
  create: ClubCreateWithoutTagsInput;
  update: ClubUpdateWithoutTagsInput;
  where: ClubWhereUniqueInput;
};

export type ClubUpsertWithoutClubCoordinatorInput = {
  create: ClubCreateWithoutClubCoordinatorInput;
  update: ClubUpdateWithoutClubCoordinatorInput;
};

export type ClubUpsertWithoutClubMemberInput = {
  create: ClubCreateWithoutClubMemberInput;
  update: ClubUpdateWithoutClubMemberInput;
};

export type ClubUpsertWithoutClubRankInput = {
  create: ClubCreateWithoutClubRankInput;
  update: ClubUpdateWithoutClubRankInput;
};

export type ClubUpsertWithoutNotificationsInput = {
  create: ClubCreateWithoutNotificationsInput;
  update: ClubUpdateWithoutNotificationsInput;
};

export type ClubUpsertWithoutOtpInput = {
  create: ClubCreateWithoutOtpInput;
  update: ClubUpdateWithoutOtpInput;
};

export type ClubUpsertWithoutSubscriptionInput = {
  create: ClubCreateWithoutSubscriptionInput;
  update: ClubUpdateWithoutSubscriptionInput;
};

export type ClubWhereInput = {
  AND?: InputMaybe<Array<ClubWhereInput>>;
  NOT?: InputMaybe<Array<ClubWhereInput>>;
  OR?: InputMaybe<Array<ClubWhereInput>>;
  clubCoordinator?: InputMaybe<ClubCoordinatorListRelationFilter>;
  clubMember?: InputMaybe<ClubMemberListRelationFilter>;
  clubRank?: InputMaybe<ClubRankRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  links?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  otp?: InputMaybe<OtpRelationFilter>;
  subscription?: InputMaybe<SubscriptionListRelationFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Event = {
  __typename?: 'Event';
  _count?: Maybe<EventCount>;
  clubs: Array<Club>;
  createdAt: Scalars['DateTime'];
  deadline?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  postions: Array<Position>;
  rsvpEvent: Array<RsvpEvent>;
  updatedAt: Scalars['DateTime'];
  venue?: Maybe<Scalars['String']>;
  votes: Array<Vote>;
};


export type EventClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type EventPostionsArgs = {
  cursor?: InputMaybe<PositionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PositionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PositionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PositionWhereInput>;
};


export type EventRsvpEventArgs = {
  cursor?: InputMaybe<RsvpEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<RsvpEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RsvpEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RsvpEventWhereInput>;
};


export type EventVotesArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<VoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};

export type EventCount = {
  __typename?: 'EventCount';
  clubs: Scalars['Int'];
  postions: Scalars['Int'];
  rsvpEvent: Scalars['Int'];
  votes: Scalars['Int'];
};

export type EventCountAggregate = {
  __typename?: 'EventCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deadline: Scalars['Int'];
  deletedAt: Scalars['Int'];
  description: Scalars['Int'];
  eventEndDate: Scalars['Int'];
  eventStartDate: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  link: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  venue: Scalars['Int'];
};

export type EventCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  eventEndDate?: InputMaybe<SortOrder>;
  eventStartDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  venue?: InputMaybe<SortOrder>;
};

export type EventCreateInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postions?: InputMaybe<PositionCreateNestedManyWithoutEventInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutEventInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  venue?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutEventInput>;
};

export type EventCreateNestedManyWithoutClubsInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutClubsInput>>;
  create?: InputMaybe<Array<EventCreateWithoutClubsInput>>;
};

export type EventCreateNestedOneWithoutPostionsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutPostionsInput>;
  create?: InputMaybe<EventCreateWithoutPostionsInput>;
};

export type EventCreateNestedOneWithoutRsvpEventInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutRsvpEventInput>;
  create?: InputMaybe<EventCreateWithoutRsvpEventInput>;
};

export type EventCreateNestedOneWithoutVotesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutVotesInput>;
  create?: InputMaybe<EventCreateWithoutVotesInput>;
};

export type EventCreateOrConnectWithoutClubsInput = {
  create: EventCreateWithoutClubsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutPostionsInput = {
  create: EventCreateWithoutPostionsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutRsvpEventInput = {
  create: EventCreateWithoutRsvpEventInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutVotesInput = {
  create: EventCreateWithoutVotesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateWithoutClubsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postions?: InputMaybe<PositionCreateNestedManyWithoutEventInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutEventInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  venue?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutEventInput>;
};

export type EventCreateWithoutPostionsInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutEventInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  venue?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutEventInput>;
};

export type EventCreateWithoutRsvpEventInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postions?: InputMaybe<PositionCreateNestedManyWithoutEventInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  venue?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutEventInput>;
};

export type EventCreateWithoutVotesInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutEventsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postions?: InputMaybe<PositionCreateNestedManyWithoutEventInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutEventInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  venue?: InputMaybe<Scalars['String']>;
};

export type EventGroupBy = {
  __typename?: 'EventGroupBy';
  _count?: Maybe<EventCountAggregate>;
  _max?: Maybe<EventMaxAggregate>;
  _min?: Maybe<EventMinAggregate>;
  createdAt: Scalars['DateTime'];
  deadline?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  venue?: Maybe<Scalars['String']>;
};

export type EventListRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventMaxAggregate = {
  __typename?: 'EventMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  venue?: Maybe<Scalars['String']>;
};

export type EventMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  eventEndDate?: InputMaybe<SortOrder>;
  eventStartDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  venue?: InputMaybe<SortOrder>;
};

export type EventMinAggregate = {
  __typename?: 'EventMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  venue?: Maybe<Scalars['String']>;
};

export type EventMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  eventEndDate?: InputMaybe<SortOrder>;
  eventStartDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  venue?: InputMaybe<SortOrder>;
};

export type EventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EventOrderByWithAggregationInput = {
  _count?: InputMaybe<EventCountOrderByAggregateInput>;
  _max?: InputMaybe<EventMaxOrderByAggregateInput>;
  _min?: InputMaybe<EventMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  eventEndDate?: InputMaybe<SortOrder>;
  eventStartDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  venue?: InputMaybe<SortOrder>;
};

export type EventOrderByWithRelationInput = {
  clubs?: InputMaybe<ClubOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  eventEndDate?: InputMaybe<SortOrder>;
  eventStartDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  postions?: InputMaybe<PositionOrderByRelationAggregateInput>;
  rsvpEvent?: InputMaybe<RsvpEventOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  venue?: InputMaybe<SortOrder>;
  votes?: InputMaybe<VoteOrderByRelationAggregateInput>;
};

export type EventRelationFilter = {
  is?: InputMaybe<EventWhereInput>;
  isNot?: InputMaybe<EventWhereInput>;
};

export enum EventScalarFieldEnum {
  CreatedAt = 'createdAt',
  Deadline = 'deadline',
  DeletedAt = 'deletedAt',
  Description = 'description',
  EventEndDate = 'eventEndDate',
  EventStartDate = 'eventStartDate',
  Id = 'id',
  Image = 'image',
  Link = 'link',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Venue = 'venue'
}

export type EventScalarWhereInput = {
  AND?: InputMaybe<Array<EventScalarWhereInput>>;
  NOT?: InputMaybe<Array<EventScalarWhereInput>>;
  OR?: InputMaybe<Array<EventScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deadline?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  eventEndDate?: InputMaybe<DateTimeNullableFilter>;
  eventStartDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  link?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  venue?: InputMaybe<StringNullableFilter>;
};

export type EventScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EventScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EventScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EventScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deadline?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  eventEndDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  eventStartDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  link?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  venue?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type EventUpdateInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  postions?: InputMaybe<PositionUpdateManyWithoutEventInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutEventInput>;
};

export type EventUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateManyWithWhereWithoutClubsInput = {
  data: EventUpdateManyMutationInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithoutClubsInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EventCreateOrConnectWithoutClubsInput>>;
  create?: InputMaybe<Array<EventCreateWithoutClubsInput>>;
  delete?: InputMaybe<Array<EventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
  update?: InputMaybe<Array<EventUpdateWithWhereUniqueWithoutClubsInput>>;
  updateMany?: InputMaybe<Array<EventUpdateManyWithWhereWithoutClubsInput>>;
  upsert?: InputMaybe<Array<EventUpsertWithWhereUniqueWithoutClubsInput>>;
};

export type EventUpdateOneRequiredWithoutPostionsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutPostionsInput>;
  create?: InputMaybe<EventCreateWithoutPostionsInput>;
  update?: InputMaybe<EventUpdateWithoutPostionsInput>;
  upsert?: InputMaybe<EventUpsertWithoutPostionsInput>;
};

export type EventUpdateOneRequiredWithoutRsvpEventInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutRsvpEventInput>;
  create?: InputMaybe<EventCreateWithoutRsvpEventInput>;
  update?: InputMaybe<EventUpdateWithoutRsvpEventInput>;
  upsert?: InputMaybe<EventUpsertWithoutRsvpEventInput>;
};

export type EventUpdateOneRequiredWithoutVotesInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutVotesInput>;
  create?: InputMaybe<EventCreateWithoutVotesInput>;
  update?: InputMaybe<EventUpdateWithoutVotesInput>;
  upsert?: InputMaybe<EventUpsertWithoutVotesInput>;
};

export type EventUpdateWithWhereUniqueWithoutClubsInput = {
  data: EventUpdateWithoutClubsInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithoutClubsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  postions?: InputMaybe<PositionUpdateManyWithoutEventInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutEventInput>;
};

export type EventUpdateWithoutPostionsInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutEventInput>;
};

export type EventUpdateWithoutRsvpEventInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  postions?: InputMaybe<PositionUpdateManyWithoutEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutEventInput>;
};

export type EventUpdateWithoutVotesInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  postions?: InputMaybe<PositionUpdateManyWithoutEventInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpsertWithWhereUniqueWithoutClubsInput = {
  create: EventCreateWithoutClubsInput;
  update: EventUpdateWithoutClubsInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithoutPostionsInput = {
  create: EventCreateWithoutPostionsInput;
  update: EventUpdateWithoutPostionsInput;
};

export type EventUpsertWithoutRsvpEventInput = {
  create: EventCreateWithoutRsvpEventInput;
  update: EventUpdateWithoutRsvpEventInput;
};

export type EventUpsertWithoutVotesInput = {
  create: EventCreateWithoutVotesInput;
  update: EventUpdateWithoutVotesInput;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deadline?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  eventEndDate?: InputMaybe<DateTimeNullableFilter>;
  eventStartDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  link?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  postions?: InputMaybe<PositionListRelationFilter>;
  rsvpEvent?: InputMaybe<RsvpEventListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  venue?: InputMaybe<StringNullableFilter>;
  votes?: InputMaybe<VoteListRelationFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  data: Scalars['String'];
  url: Scalars['String'];
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createClub: Club;
  createClubCoordinator: ClubCoordinator;
  createClubMember: ClubMember;
  createClubRank: ClubRank;
  createEvent: Event;
  createNotification: Notification;
  createOTP: Otp;
  createPosition: Position;
  createRSVPEvent: RsvpEvent;
  createStudentRank: StudentRank;
  createSubscription: Subscription;
  createTag: Tag;
  createUser: User;
  createVote: Vote;
  deleteClub?: Maybe<Club>;
  deleteClubCoordinator?: Maybe<ClubCoordinator>;
  deleteClubMember?: Maybe<ClubMember>;
  deleteClubRank?: Maybe<ClubRank>;
  deleteEvent?: Maybe<Event>;
  deleteManyClub: AffectedRowsOutput;
  deleteManyClubCoordinator: AffectedRowsOutput;
  deleteManyClubMember: AffectedRowsOutput;
  deleteManyClubRank: AffectedRowsOutput;
  deleteManyEvent: AffectedRowsOutput;
  deleteManyNotification: AffectedRowsOutput;
  deleteManyOTP: AffectedRowsOutput;
  deleteManyPosition: AffectedRowsOutput;
  deleteManyRSVPEvent: AffectedRowsOutput;
  deleteManyStudentRank: AffectedRowsOutput;
  deleteManySubscription: AffectedRowsOutput;
  deleteManyTag: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyVote: AffectedRowsOutput;
  deleteNotification?: Maybe<Notification>;
  deleteOTP?: Maybe<Otp>;
  deletePosition?: Maybe<Position>;
  deleteRSVPEvent?: Maybe<RsvpEvent>;
  deleteStudentRank?: Maybe<StudentRank>;
  deleteSubscription?: Maybe<Subscription>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  deleteVote?: Maybe<Vote>;
  login: Auth;
  updateClub?: Maybe<Club>;
  updateClubCoordinator?: Maybe<ClubCoordinator>;
  updateClubMember?: Maybe<ClubMember>;
  updateClubRank?: Maybe<ClubRank>;
  updateEvent?: Maybe<Event>;
  updateManyClub: AffectedRowsOutput;
  updateManyClubCoordinator: AffectedRowsOutput;
  updateManyClubMember: AffectedRowsOutput;
  updateManyClubRank: AffectedRowsOutput;
  updateManyEvent: AffectedRowsOutput;
  updateManyNotification: AffectedRowsOutput;
  updateManyOTP: AffectedRowsOutput;
  updateManyPosition: AffectedRowsOutput;
  updateManyRSVPEvent: AffectedRowsOutput;
  updateManyStudentRank: AffectedRowsOutput;
  updateManySubscription: AffectedRowsOutput;
  updateManyTag: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyVote: AffectedRowsOutput;
  updateNotification?: Maybe<Notification>;
  updateOTP?: Maybe<Otp>;
  updatePosition?: Maybe<Position>;
  updateRSVPEvent?: Maybe<RsvpEvent>;
  updateStudentRank?: Maybe<StudentRank>;
  updateSubscription?: Maybe<Subscription>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  updateVote?: Maybe<Vote>;
  upload: Image;
  upsertClub: Club;
  upsertClubCoordinator: ClubCoordinator;
  upsertClubMember: ClubMember;
  upsertClubRank: ClubRank;
  upsertEvent: Event;
  upsertNotification: Notification;
  upsertOTP: Otp;
  upsertPosition: Position;
  upsertRSVPEvent: RsvpEvent;
  upsertStudentRank: StudentRank;
  upsertSubscription: Subscription;
  upsertTag: Tag;
  upsertUser: User;
  upsertVote: Vote;
};


export type MutationCreateClubArgs = {
  data: ClubCreateInput;
};


export type MutationCreateClubCoordinatorArgs = {
  data: ClubCoordinatorCreateInput;
};


export type MutationCreateClubMemberArgs = {
  data: ClubMemberCreateInput;
};


export type MutationCreateClubRankArgs = {
  data: ClubRankCreateInput;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateOtpArgs = {
  data: OtpCreateInput;
};


export type MutationCreatePositionArgs = {
  data: PositionCreateInput;
};


export type MutationCreateRsvpEventArgs = {
  data: RsvpEventCreateInput;
};


export type MutationCreateStudentRankArgs = {
  data: StudentRankCreateInput;
};


export type MutationCreateSubscriptionArgs = {
  data: SubscriptionCreateInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateVoteArgs = {
  data: VoteCreateInput;
};


export type MutationDeleteClubArgs = {
  where: ClubWhereUniqueInput;
};


export type MutationDeleteClubCoordinatorArgs = {
  where: ClubCoordinatorWhereUniqueInput;
};


export type MutationDeleteClubMemberArgs = {
  where: ClubMemberWhereUniqueInput;
};


export type MutationDeleteClubRankArgs = {
  where: ClubRankWhereUniqueInput;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteManyClubArgs = {
  where?: InputMaybe<ClubWhereInput>;
};


export type MutationDeleteManyClubCoordinatorArgs = {
  where?: InputMaybe<ClubCoordinatorWhereInput>;
};


export type MutationDeleteManyClubMemberArgs = {
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type MutationDeleteManyClubRankArgs = {
  where?: InputMaybe<ClubRankWhereInput>;
};


export type MutationDeleteManyEventArgs = {
  where?: InputMaybe<EventWhereInput>;
};


export type MutationDeleteManyNotificationArgs = {
  where?: InputMaybe<NotificationWhereInput>;
};


export type MutationDeleteManyOtpArgs = {
  where?: InputMaybe<OtpWhereInput>;
};


export type MutationDeleteManyPositionArgs = {
  where?: InputMaybe<PositionWhereInput>;
};


export type MutationDeleteManyRsvpEventArgs = {
  where?: InputMaybe<RsvpEventWhereInput>;
};


export type MutationDeleteManyStudentRankArgs = {
  where?: InputMaybe<StudentRankWhereInput>;
};


export type MutationDeleteManySubscriptionArgs = {
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type MutationDeleteManyTagArgs = {
  where?: InputMaybe<TagWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyVoteArgs = {
  where?: InputMaybe<VoteWhereInput>;
};


export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type MutationDeleteOtpArgs = {
  where: OtpWhereUniqueInput;
};


export type MutationDeletePositionArgs = {
  where: PositionWhereUniqueInput;
};


export type MutationDeleteRsvpEventArgs = {
  where: RsvpEventWhereUniqueInput;
};


export type MutationDeleteStudentRankArgs = {
  where: StudentRankWhereUniqueInput;
};


export type MutationDeleteSubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteVoteArgs = {
  where: VoteWhereUniqueInput;
};


export type MutationLoginArgs = {
  token: Scalars['String'];
};


export type MutationUpdateClubArgs = {
  data: ClubUpdateInput;
  where: ClubWhereUniqueInput;
};


export type MutationUpdateClubCoordinatorArgs = {
  data: ClubCoordinatorUpdateInput;
  where: ClubCoordinatorWhereUniqueInput;
};


export type MutationUpdateClubMemberArgs = {
  data: ClubMemberUpdateInput;
  where: ClubMemberWhereUniqueInput;
};


export type MutationUpdateClubRankArgs = {
  data: ClubRankUpdateInput;
  where: ClubRankWhereUniqueInput;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateManyClubArgs = {
  data: ClubUpdateManyMutationInput;
  where?: InputMaybe<ClubWhereInput>;
};


export type MutationUpdateManyClubCoordinatorArgs = {
  data: ClubCoordinatorUpdateManyMutationInput;
  where?: InputMaybe<ClubCoordinatorWhereInput>;
};


export type MutationUpdateManyClubMemberArgs = {
  data: ClubMemberUpdateManyMutationInput;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type MutationUpdateManyClubRankArgs = {
  data: ClubRankUpdateManyMutationInput;
  where?: InputMaybe<ClubRankWhereInput>;
};


export type MutationUpdateManyEventArgs = {
  data: EventUpdateManyMutationInput;
  where?: InputMaybe<EventWhereInput>;
};


export type MutationUpdateManyNotificationArgs = {
  data: NotificationUpdateManyMutationInput;
  where?: InputMaybe<NotificationWhereInput>;
};


export type MutationUpdateManyOtpArgs = {
  data: OtpUpdateManyMutationInput;
  where?: InputMaybe<OtpWhereInput>;
};


export type MutationUpdateManyPositionArgs = {
  data: PositionUpdateManyMutationInput;
  where?: InputMaybe<PositionWhereInput>;
};


export type MutationUpdateManyRsvpEventArgs = {
  data: RsvpEventUpdateManyMutationInput;
  where?: InputMaybe<RsvpEventWhereInput>;
};


export type MutationUpdateManyStudentRankArgs = {
  data: StudentRankUpdateManyMutationInput;
  where?: InputMaybe<StudentRankWhereInput>;
};


export type MutationUpdateManySubscriptionArgs = {
  data: SubscriptionUpdateManyMutationInput;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where?: InputMaybe<TagWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyVoteArgs = {
  data: VoteUpdateManyMutationInput;
  where?: InputMaybe<VoteWhereInput>;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdateOtpArgs = {
  data: OtpUpdateInput;
  where: OtpWhereUniqueInput;
};


export type MutationUpdatePositionArgs = {
  data: PositionUpdateInput;
  where: PositionWhereUniqueInput;
};


export type MutationUpdateRsvpEventArgs = {
  data: RsvpEventUpdateInput;
  where: RsvpEventWhereUniqueInput;
};


export type MutationUpdateStudentRankArgs = {
  data: StudentRankUpdateInput;
  where: StudentRankWhereUniqueInput;
};


export type MutationUpdateSubscriptionArgs = {
  data: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateVoteArgs = {
  data: VoteUpdateInput;
  where: VoteWhereUniqueInput;
};


export type MutationUploadArgs = {
  data: Scalars['String'];
};


export type MutationUpsertClubArgs = {
  create: ClubCreateInput;
  update: ClubUpdateInput;
  where: ClubWhereUniqueInput;
};


export type MutationUpsertClubCoordinatorArgs = {
  create: ClubCoordinatorCreateInput;
  update: ClubCoordinatorUpdateInput;
  where: ClubCoordinatorWhereUniqueInput;
};


export type MutationUpsertClubMemberArgs = {
  create: ClubMemberCreateInput;
  update: ClubMemberUpdateInput;
  where: ClubMemberWhereUniqueInput;
};


export type MutationUpsertClubRankArgs = {
  create: ClubRankCreateInput;
  update: ClubRankUpdateInput;
  where: ClubRankWhereUniqueInput;
};


export type MutationUpsertEventArgs = {
  create: EventCreateInput;
  update: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpsertNotificationArgs = {
  create: NotificationCreateInput;
  update: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpsertOtpArgs = {
  create: OtpCreateInput;
  update: OtpUpdateInput;
  where: OtpWhereUniqueInput;
};


export type MutationUpsertPositionArgs = {
  create: PositionCreateInput;
  update: PositionUpdateInput;
  where: PositionWhereUniqueInput;
};


export type MutationUpsertRsvpEventArgs = {
  create: RsvpEventCreateInput;
  update: RsvpEventUpdateInput;
  where: RsvpEventWhereUniqueInput;
};


export type MutationUpsertStudentRankArgs = {
  create: StudentRankCreateInput;
  update: StudentRankUpdateInput;
  where: StudentRankWhereUniqueInput;
};


export type MutationUpsertSubscriptionArgs = {
  create: SubscriptionCreateInput;
  update: SubscriptionUpdateInput;
  where: SubscriptionWhereUniqueInput;
};


export type MutationUpsertTagArgs = {
  create: TagCreateInput;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertVoteArgs = {
  create: VoteCreateInput;
  update: VoteUpdateInput;
  where: VoteWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Notification = {
  __typename?: 'Notification';
  _count?: Maybe<NotificationCount>;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: Club;
  createdFor: Array<User>;
  id: Scalars['String'];
  message: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type NotificationCreatedForArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type NotificationCount = {
  __typename?: 'NotificationCount';
  createdFor: Scalars['Int'];
};

export type NotificationCountAggregate = {
  __typename?: 'NotificationCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type NotificationCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NotificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy: ClubCreateNestedOneWithoutNotificationsInput;
  createdFor?: InputMaybe<UserCreateNestedManyWithoutNotificationsInput>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutCreatedByInput>>;
};

export type NotificationCreateNestedManyWithoutCreatedForInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutCreatedForInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutCreatedForInput>>;
};

export type NotificationCreateOrConnectWithoutCreatedByInput = {
  create: NotificationCreateWithoutCreatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateOrConnectWithoutCreatedForInput = {
  create: NotificationCreateWithoutCreatedForInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutCreatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdFor?: InputMaybe<UserCreateNestedManyWithoutNotificationsInput>;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationCreateWithoutCreatedForInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy: ClubCreateNestedOneWithoutNotificationsInput;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationGroupBy = {
  __typename?: 'NotificationGroupBy';
  _count?: Maybe<NotificationCountAggregate>;
  _max?: Maybe<NotificationMaxAggregate>;
  _min?: Maybe<NotificationMinAggregate>;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationMaxAggregate = {
  __typename?: 'NotificationMaxAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NotificationMinAggregate = {
  __typename?: 'NotificationMinAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithAggregationInput = {
  _count?: InputMaybe<NotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<NotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<NotificationMinOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<ClubOrderByWithRelationInput>;
  createdFor?: InputMaybe<UserOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum NotificationScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  UpdatedAt = 'updatedAt'
}

export type NotificationScalarWhereInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereInput>>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type NotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type NotificationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<ClubUpdateOneRequiredWithoutNotificationsInput>;
  createdFor?: InputMaybe<UserUpdateManyWithoutNotificationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdateManyWithWhereWithoutCreatedByInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithWhereWithoutCreatedForInput = {
  data: NotificationUpdateManyMutationInput;
  where: NotificationScalarWhereInput;
};

export type NotificationUpdateManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutCreatedByInput>>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type NotificationUpdateManyWithoutCreatedForInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NotificationCreateOrConnectWithoutCreatedForInput>>;
  create?: InputMaybe<Array<NotificationCreateWithoutCreatedForInput>>;
  delete?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<NotificationUpdateWithWhereUniqueWithoutCreatedForInput>>;
  updateMany?: InputMaybe<Array<NotificationUpdateManyWithWhereWithoutCreatedForInput>>;
  upsert?: InputMaybe<Array<NotificationUpsertWithWhereUniqueWithoutCreatedForInput>>;
};

export type NotificationUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: NotificationUpdateWithoutCreatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithWhereUniqueWithoutCreatedForInput = {
  data: NotificationUpdateWithoutCreatedForInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateWithoutCreatedByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdFor?: InputMaybe<UserUpdateManyWithoutNotificationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdateWithoutCreatedForInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<ClubUpdateOneRequiredWithoutNotificationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: NotificationCreateWithoutCreatedByInput;
  update: NotificationUpdateWithoutCreatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpsertWithWhereUniqueWithoutCreatedForInput = {
  create: NotificationCreateWithoutCreatedForInput;
  update: NotificationUpdateWithoutCreatedForInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<ClubRelationFilter>;
  createdFor?: InputMaybe<UserListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type NotificationWhereUniqueInput = {
  clubId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Otp = {
  __typename?: 'OTP';
  club: Club;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expiredAt: Scalars['DateTime'];
  id: Scalars['String'];
  otp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OtpCountAggregate = {
  __typename?: 'OTPCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiredAt: Scalars['Int'];
  id: Scalars['Int'];
  otp: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type OtpCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OtpCreateInput = {
  club: ClubCreateNestedOneWithoutOtpInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  otp: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OtpCreateNestedOneWithoutClubInput = {
  connect?: InputMaybe<OtpWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OtpCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<OtpCreateWithoutClubInput>;
};

export type OtpCreateOrConnectWithoutClubInput = {
  create: OtpCreateWithoutClubInput;
  where: OtpWhereUniqueInput;
};

export type OtpCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['String']>;
  otp: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OtpGroupBy = {
  __typename?: 'OTPGroupBy';
  _count?: Maybe<OtpCountAggregate>;
  _max?: Maybe<OtpMaxAggregate>;
  _min?: Maybe<OtpMinAggregate>;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expiredAt: Scalars['DateTime'];
  id: Scalars['String'];
  otp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OtpMaxAggregate = {
  __typename?: 'OTPMaxAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  otp?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OtpMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OtpMinAggregate = {
  __typename?: 'OTPMinAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  otp?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OtpMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OtpOrderByWithAggregationInput = {
  _count?: InputMaybe<OtpCountOrderByAggregateInput>;
  _max?: InputMaybe<OtpMaxOrderByAggregateInput>;
  _min?: InputMaybe<OtpMinOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OtpOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OtpRelationFilter = {
  is?: InputMaybe<OtpWhereInput>;
  isNot?: InputMaybe<OtpWhereInput>;
};

export enum OtpScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  ExpiredAt = 'expiredAt',
  Id = 'id',
  Otp = 'otp',
  UpdatedAt = 'updatedAt'
}

export type OtpScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OtpScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OtpScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OtpScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiredAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  otp?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type OtpUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutOtpInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OtpUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OtpUpdateOneWithoutClubInput = {
  connect?: InputMaybe<OtpWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OtpCreateOrConnectWithoutClubInput>;
  create?: InputMaybe<OtpCreateWithoutClubInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<OtpUpdateWithoutClubInput>;
  upsert?: InputMaybe<OtpUpsertWithoutClubInput>;
};

export type OtpUpdateWithoutClubInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OtpUpsertWithoutClubInput = {
  create: OtpCreateWithoutClubInput;
  update: OtpUpdateWithoutClubInput;
};

export type OtpWhereInput = {
  AND?: InputMaybe<Array<OtpWhereInput>>;
  NOT?: InputMaybe<Array<OtpWhereInput>>;
  OR?: InputMaybe<Array<OtpWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  otp?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OtpWhereUniqueInput = {
  clubId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type Position = {
  __typename?: 'Position';
  createdAt: Scalars['DateTime'];
  event: Event;
  eventId: Scalars['String'];
  id: Scalars['String'];
  money?: Maybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userEmail: Scalars['String'];
};

export type PositionAvgAggregate = {
  __typename?: 'PositionAvgAggregate';
  money?: Maybe<Scalars['Float']>;
};

export type PositionAvgOrderByAggregateInput = {
  money?: InputMaybe<SortOrder>;
};

export type PositionCountAggregate = {
  __typename?: 'PositionCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  money: Scalars['Int'];
  position: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userEmail: Scalars['Int'];
};

export type PositionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type PositionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutPostionsInput;
  id?: InputMaybe<Scalars['String']>;
  money?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPositionsInput;
};

export type PositionCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<PositionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PositionCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<PositionCreateWithoutEventInput>>;
};

export type PositionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PositionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PositionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PositionCreateWithoutUserInput>>;
};

export type PositionCreateOrConnectWithoutEventInput = {
  create: PositionCreateWithoutEventInput;
  where: PositionWhereUniqueInput;
};

export type PositionCreateOrConnectWithoutUserInput = {
  create: PositionCreateWithoutUserInput;
  where: PositionWhereUniqueInput;
};

export type PositionCreateWithoutEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  money?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPositionsInput;
};

export type PositionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutPostionsInput;
  id?: InputMaybe<Scalars['String']>;
  money?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PositionGroupBy = {
  __typename?: 'PositionGroupBy';
  _avg?: Maybe<PositionAvgAggregate>;
  _count?: Maybe<PositionCountAggregate>;
  _max?: Maybe<PositionMaxAggregate>;
  _min?: Maybe<PositionMinAggregate>;
  _sum?: Maybe<PositionSumAggregate>;
  createdAt: Scalars['DateTime'];
  eventId: Scalars['String'];
  id: Scalars['String'];
  money?: Maybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userEmail: Scalars['String'];
};

export type PositionListRelationFilter = {
  every?: InputMaybe<PositionWhereInput>;
  none?: InputMaybe<PositionWhereInput>;
  some?: InputMaybe<PositionWhereInput>;
};

export type PositionMaxAggregate = {
  __typename?: 'PositionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  money?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type PositionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type PositionMinAggregate = {
  __typename?: 'PositionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  money?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type PositionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type PositionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PositionOrderByWithAggregationInput = {
  _avg?: InputMaybe<PositionAvgOrderByAggregateInput>;
  _count?: InputMaybe<PositionCountOrderByAggregateInput>;
  _max?: InputMaybe<PositionMaxOrderByAggregateInput>;
  _min?: InputMaybe<PositionMinOrderByAggregateInput>;
  _sum?: InputMaybe<PositionSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type PositionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  event?: InputMaybe<EventOrderByWithRelationInput>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userEmail?: InputMaybe<SortOrder>;
};

export enum PositionScalarFieldEnum {
  CreatedAt = 'createdAt',
  EventId = 'eventId',
  Id = 'id',
  Money = 'money',
  Position = 'position',
  UpdatedAt = 'updatedAt',
  UserEmail = 'userEmail'
}

export type PositionScalarWhereInput = {
  AND?: InputMaybe<Array<PositionScalarWhereInput>>;
  NOT?: InputMaybe<Array<PositionScalarWhereInput>>;
  OR?: InputMaybe<Array<PositionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  money?: InputMaybe<IntNullableFilter>;
  position?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type PositionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PositionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PositionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PositionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  eventId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  money?: InputMaybe<IntNullableWithAggregatesFilter>;
  position?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userEmail?: InputMaybe<StringWithAggregatesFilter>;
};

export type PositionSumAggregate = {
  __typename?: 'PositionSumAggregate';
  money?: Maybe<Scalars['Int']>;
};

export type PositionSumOrderByAggregateInput = {
  money?: InputMaybe<SortOrder>;
};

export type PositionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutPostionsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  money?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPositionsInput>;
};

export type PositionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  money?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PositionUpdateManyWithWhereWithoutEventInput = {
  data: PositionUpdateManyMutationInput;
  where: PositionScalarWhereInput;
};

export type PositionUpdateManyWithWhereWithoutUserInput = {
  data: PositionUpdateManyMutationInput;
  where: PositionScalarWhereInput;
};

export type PositionUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<PositionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PositionCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<PositionCreateWithoutEventInput>>;
  delete?: InputMaybe<Array<PositionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PositionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PositionWhereUniqueInput>>;
  set?: InputMaybe<Array<PositionWhereUniqueInput>>;
  update?: InputMaybe<Array<PositionUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<PositionUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<PositionUpsertWithWhereUniqueWithoutEventInput>>;
};

export type PositionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<PositionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PositionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PositionCreateWithoutUserInput>>;
  delete?: InputMaybe<Array<PositionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PositionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PositionWhereUniqueInput>>;
  set?: InputMaybe<Array<PositionWhereUniqueInput>>;
  update?: InputMaybe<Array<PositionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PositionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PositionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PositionUpdateWithWhereUniqueWithoutEventInput = {
  data: PositionUpdateWithoutEventInput;
  where: PositionWhereUniqueInput;
};

export type PositionUpdateWithWhereUniqueWithoutUserInput = {
  data: PositionUpdateWithoutUserInput;
  where: PositionWhereUniqueInput;
};

export type PositionUpdateWithoutEventInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  money?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPositionsInput>;
};

export type PositionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutPostionsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  money?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PositionUpsertWithWhereUniqueWithoutEventInput = {
  create: PositionCreateWithoutEventInput;
  update: PositionUpdateWithoutEventInput;
  where: PositionWhereUniqueInput;
};

export type PositionUpsertWithWhereUniqueWithoutUserInput = {
  create: PositionCreateWithoutUserInput;
  update: PositionUpdateWithoutUserInput;
  where: PositionWhereUniqueInput;
};

export type PositionWhereInput = {
  AND?: InputMaybe<Array<PositionWhereInput>>;
  NOT?: InputMaybe<Array<PositionWhereInput>>;
  OR?: InputMaybe<Array<PositionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  money?: InputMaybe<IntNullableFilter>;
  position?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type PositionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateClub: AggregateClub;
  aggregateClubCoordinator: AggregateClubCoordinator;
  aggregateClubMember: AggregateClubMember;
  aggregateClubRank: AggregateClubRank;
  aggregateEvent: AggregateEvent;
  aggregateNotification: AggregateNotification;
  aggregateOTP: AggregateOtp;
  aggregatePosition: AggregatePosition;
  aggregateRSVPEvent: AggregateRsvpEvent;
  aggregateStudentRank: AggregateStudentRank;
  aggregateSubscription: AggregateSubscription;
  aggregateTag: AggregateTag;
  aggregateUser: AggregateUser;
  aggregateVote: AggregateVote;
  club?: Maybe<Club>;
  clubCoordinator?: Maybe<ClubCoordinator>;
  clubCoordinators: Array<ClubCoordinator>;
  clubMember?: Maybe<ClubMember>;
  clubMembers: Array<ClubMember>;
  clubRank?: Maybe<ClubRank>;
  clubRanks: Array<ClubRank>;
  clubs: Array<Club>;
  event?: Maybe<Event>;
  events: Array<Event>;
  findFirstClub?: Maybe<Club>;
  findFirstClubCoordinator?: Maybe<ClubCoordinator>;
  findFirstClubMember?: Maybe<ClubMember>;
  findFirstClubRank?: Maybe<ClubRank>;
  findFirstEvent?: Maybe<Event>;
  findFirstNotification?: Maybe<Notification>;
  findFirstOTP?: Maybe<Otp>;
  findFirstPosition?: Maybe<Position>;
  findFirstRSVPEvent?: Maybe<RsvpEvent>;
  findFirstStudentRank?: Maybe<StudentRank>;
  findFirstSubscription?: Maybe<Subscription>;
  findFirstTag?: Maybe<Tag>;
  findFirstUser?: Maybe<User>;
  findFirstVote?: Maybe<Vote>;
  groupByClub: Array<ClubGroupBy>;
  groupByClubCoordinator: Array<ClubCoordinatorGroupBy>;
  groupByClubMember: Array<ClubMemberGroupBy>;
  groupByClubRank: Array<ClubRankGroupBy>;
  groupByEvent: Array<EventGroupBy>;
  groupByNotification: Array<NotificationGroupBy>;
  groupByOTP: Array<OtpGroupBy>;
  groupByPosition: Array<PositionGroupBy>;
  groupByRSVPEvent: Array<RsvpEventGroupBy>;
  groupByStudentRank: Array<StudentRankGroupBy>;
  groupBySubscription: Array<SubscriptionGroupBy>;
  groupByTag: Array<TagGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByVote: Array<VoteGroupBy>;
  logout: Scalars['Boolean'];
  me: User;
  notification?: Maybe<Notification>;
  notifications: Array<Notification>;
  oTP?: Maybe<Otp>;
  oTPS: Array<Otp>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  rSVPEvent?: Maybe<RsvpEvent>;
  rSVPEvents: Array<RsvpEvent>;
  studentRank?: Maybe<StudentRank>;
  studentRanks: Array<StudentRank>;
  subscription?: Maybe<Subscription>;
  subscriptions: Array<Subscription>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  user?: Maybe<User>;
  users: Array<User>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};


export type QueryAggregateClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryAggregateClubCoordinatorArgs = {
  cursor?: InputMaybe<ClubCoordinatorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubCoordinatorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubCoordinatorWhereInput>;
};


export type QueryAggregateClubMemberArgs = {
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type QueryAggregateClubRankArgs = {
  cursor?: InputMaybe<ClubRankWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubRankOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubRankWhereInput>;
};


export type QueryAggregateEventArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryAggregateNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryAggregateOtpArgs = {
  cursor?: InputMaybe<OtpWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OtpOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OtpWhereInput>;
};


export type QueryAggregatePositionArgs = {
  cursor?: InputMaybe<PositionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PositionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PositionWhereInput>;
};


export type QueryAggregateRsvpEventArgs = {
  cursor?: InputMaybe<RsvpEventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RsvpEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RsvpEventWhereInput>;
};


export type QueryAggregateStudentRankArgs = {
  cursor?: InputMaybe<StudentRankWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StudentRankOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StudentRankWhereInput>;
};


export type QueryAggregateSubscriptionArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryAggregateTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateVoteArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};


export type QueryClubArgs = {
  where: ClubWhereUniqueInput;
};


export type QueryClubCoordinatorArgs = {
  where: ClubCoordinatorWhereUniqueInput;
};


export type QueryClubCoordinatorsArgs = {
  cursor?: InputMaybe<ClubCoordinatorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubCoordinatorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubCoordinatorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubCoordinatorWhereInput>;
};


export type QueryClubMemberArgs = {
  where: ClubMemberWhereUniqueInput;
};


export type QueryClubMembersArgs = {
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type QueryClubRankArgs = {
  where: ClubRankWhereUniqueInput;
};


export type QueryClubRanksArgs = {
  cursor?: InputMaybe<ClubRankWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubRankScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubRankOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubRankWhereInput>;
};


export type QueryClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindFirstClubArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryFindFirstClubCoordinatorArgs = {
  cursor?: InputMaybe<ClubCoordinatorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubCoordinatorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubCoordinatorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubCoordinatorWhereInput>;
};


export type QueryFindFirstClubMemberArgs = {
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type QueryFindFirstClubRankArgs = {
  cursor?: InputMaybe<ClubRankWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubRankScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubRankOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubRankWhereInput>;
};


export type QueryFindFirstEventArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<EventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindFirstNotificationArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryFindFirstOtpArgs = {
  cursor?: InputMaybe<OtpWhereUniqueInput>;
  distinct?: InputMaybe<Array<OtpScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OtpOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OtpWhereInput>;
};


export type QueryFindFirstPositionArgs = {
  cursor?: InputMaybe<PositionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PositionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PositionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PositionWhereInput>;
};


export type QueryFindFirstRsvpEventArgs = {
  cursor?: InputMaybe<RsvpEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<RsvpEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RsvpEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RsvpEventWhereInput>;
};


export type QueryFindFirstStudentRankArgs = {
  cursor?: InputMaybe<StudentRankWhereUniqueInput>;
  distinct?: InputMaybe<Array<StudentRankScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StudentRankOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StudentRankWhereInput>;
};


export type QueryFindFirstSubscriptionArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryFindFirstTagArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstVoteArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<VoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};


export type QueryGroupByClubArgs = {
  by: Array<ClubScalarFieldEnum>;
  having?: InputMaybe<ClubScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type QueryGroupByClubCoordinatorArgs = {
  by: Array<ClubCoordinatorScalarFieldEnum>;
  having?: InputMaybe<ClubCoordinatorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubCoordinatorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubCoordinatorWhereInput>;
};


export type QueryGroupByClubMemberArgs = {
  by: Array<ClubMemberScalarFieldEnum>;
  having?: InputMaybe<ClubMemberScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type QueryGroupByClubRankArgs = {
  by: Array<ClubRankScalarFieldEnum>;
  having?: InputMaybe<ClubRankScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubRankOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubRankWhereInput>;
};


export type QueryGroupByEventArgs = {
  by: Array<EventScalarFieldEnum>;
  having?: InputMaybe<EventScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EventOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryGroupByNotificationArgs = {
  by: Array<NotificationScalarFieldEnum>;
  having?: InputMaybe<NotificationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryGroupByOtpArgs = {
  by: Array<OtpScalarFieldEnum>;
  having?: InputMaybe<OtpScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OtpOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OtpWhereInput>;
};


export type QueryGroupByPositionArgs = {
  by: Array<PositionScalarFieldEnum>;
  having?: InputMaybe<PositionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PositionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PositionWhereInput>;
};


export type QueryGroupByRsvpEventArgs = {
  by: Array<RsvpEventScalarFieldEnum>;
  having?: InputMaybe<RsvpEventScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RsvpEventOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RsvpEventWhereInput>;
};


export type QueryGroupByStudentRankArgs = {
  by: Array<StudentRankScalarFieldEnum>;
  having?: InputMaybe<StudentRankScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<StudentRankOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StudentRankWhereInput>;
};


export type QueryGroupBySubscriptionArgs = {
  by: Array<SubscriptionScalarFieldEnum>;
  having?: InputMaybe<SubscriptionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryGroupByTagArgs = {
  by: Array<TagScalarFieldEnum>;
  having?: InputMaybe<TagScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TagOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByVoteArgs = {
  by: Array<VoteScalarFieldEnum>;
  having?: InputMaybe<VoteScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VoteOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryOTpArgs = {
  where: OtpWhereUniqueInput;
};


export type QueryOTpsArgs = {
  cursor?: InputMaybe<OtpWhereUniqueInput>;
  distinct?: InputMaybe<Array<OtpScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OtpOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OtpWhereInput>;
};


export type QueryPositionArgs = {
  where: PositionWhereUniqueInput;
};


export type QueryPositionsArgs = {
  cursor?: InputMaybe<PositionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PositionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PositionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PositionWhereInput>;
};


export type QueryRSvpEventArgs = {
  where: RsvpEventWhereUniqueInput;
};


export type QueryRSvpEventsArgs = {
  cursor?: InputMaybe<RsvpEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<RsvpEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RsvpEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RsvpEventWhereInput>;
};


export type QueryStudentRankArgs = {
  where: StudentRankWhereUniqueInput;
};


export type QueryStudentRanksArgs = {
  cursor?: InputMaybe<StudentRankWhereUniqueInput>;
  distinct?: InputMaybe<Array<StudentRankScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StudentRankOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StudentRankWhereInput>;
};


export type QuerySubscriptionArgs = {
  where: SubscriptionWhereUniqueInput;
};


export type QuerySubscriptionsArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVoteArgs = {
  where: VoteWhereUniqueInput;
};


export type QueryVotesArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<VoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};

export type RsvpEvent = {
  __typename?: 'RSVPEvent';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  event: Event;
  eventId: Scalars['String'];
  user: User;
  userEmail: Scalars['String'];
};

export type RsvpEventCountAggregate = {
  __typename?: 'RSVPEventCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  eventId: Scalars['Int'];
  userEmail: Scalars['Int'];
};

export type RsvpEventCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type RsvpEventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutRsvpEventInput;
  user: UserCreateNestedOneWithoutRsvpEventInput;
};

export type RsvpEventCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RsvpEventCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<RsvpEventCreateWithoutEventInput>>;
};

export type RsvpEventCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RsvpEventCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RsvpEventCreateWithoutUserInput>>;
};

export type RsvpEventCreateOrConnectWithoutEventInput = {
  create: RsvpEventCreateWithoutEventInput;
  where: RsvpEventWhereUniqueInput;
};

export type RsvpEventCreateOrConnectWithoutUserInput = {
  create: RsvpEventCreateWithoutUserInput;
  where: RsvpEventWhereUniqueInput;
};

export type RsvpEventCreateWithoutEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRsvpEventInput;
};

export type RsvpEventCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutRsvpEventInput;
};

export type RsvpEventEventIdUserEmailCompoundUniqueInput = {
  eventId: Scalars['String'];
  userEmail: Scalars['String'];
};

export type RsvpEventGroupBy = {
  __typename?: 'RSVPEventGroupBy';
  _count?: Maybe<RsvpEventCountAggregate>;
  _max?: Maybe<RsvpEventMaxAggregate>;
  _min?: Maybe<RsvpEventMinAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId: Scalars['String'];
  userEmail: Scalars['String'];
};

export type RsvpEventListRelationFilter = {
  every?: InputMaybe<RsvpEventWhereInput>;
  none?: InputMaybe<RsvpEventWhereInput>;
  some?: InputMaybe<RsvpEventWhereInput>;
};

export type RsvpEventMaxAggregate = {
  __typename?: 'RSVPEventMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type RsvpEventMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type RsvpEventMinAggregate = {
  __typename?: 'RSVPEventMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type RsvpEventMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type RsvpEventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RsvpEventOrderByWithAggregationInput = {
  _count?: InputMaybe<RsvpEventCountOrderByAggregateInput>;
  _max?: InputMaybe<RsvpEventMaxOrderByAggregateInput>;
  _min?: InputMaybe<RsvpEventMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type RsvpEventOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  event?: InputMaybe<EventOrderByWithRelationInput>;
  eventId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userEmail?: InputMaybe<SortOrder>;
};

export enum RsvpEventScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EventId = 'eventId',
  UserEmail = 'userEmail'
}

export type RsvpEventScalarWhereInput = {
  AND?: InputMaybe<Array<RsvpEventScalarWhereInput>>;
  NOT?: InputMaybe<Array<RsvpEventScalarWhereInput>>;
  OR?: InputMaybe<Array<RsvpEventScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  eventId?: InputMaybe<StringFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type RsvpEventScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RsvpEventScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RsvpEventScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RsvpEventScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  eventId?: InputMaybe<StringWithAggregatesFilter>;
  userEmail?: InputMaybe<StringWithAggregatesFilter>;
};

export type RsvpEventUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutRsvpEventInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRsvpEventInput>;
};

export type RsvpEventUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RsvpEventUpdateManyWithWhereWithoutEventInput = {
  data: RsvpEventUpdateManyMutationInput;
  where: RsvpEventScalarWhereInput;
};

export type RsvpEventUpdateManyWithWhereWithoutUserInput = {
  data: RsvpEventUpdateManyMutationInput;
  where: RsvpEventScalarWhereInput;
};

export type RsvpEventUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RsvpEventCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<RsvpEventCreateWithoutEventInput>>;
  delete?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RsvpEventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  set?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  update?: InputMaybe<Array<RsvpEventUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<RsvpEventUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<RsvpEventUpsertWithWhereUniqueWithoutEventInput>>;
};

export type RsvpEventUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RsvpEventCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RsvpEventCreateWithoutUserInput>>;
  delete?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RsvpEventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  set?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  update?: InputMaybe<Array<RsvpEventUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RsvpEventUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RsvpEventUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RsvpEventUpdateWithWhereUniqueWithoutEventInput = {
  data: RsvpEventUpdateWithoutEventInput;
  where: RsvpEventWhereUniqueInput;
};

export type RsvpEventUpdateWithWhereUniqueWithoutUserInput = {
  data: RsvpEventUpdateWithoutUserInput;
  where: RsvpEventWhereUniqueInput;
};

export type RsvpEventUpdateWithoutEventInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRsvpEventInput>;
};

export type RsvpEventUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutRsvpEventInput>;
};

export type RsvpEventUpsertWithWhereUniqueWithoutEventInput = {
  create: RsvpEventCreateWithoutEventInput;
  update: RsvpEventUpdateWithoutEventInput;
  where: RsvpEventWhereUniqueInput;
};

export type RsvpEventUpsertWithWhereUniqueWithoutUserInput = {
  create: RsvpEventCreateWithoutUserInput;
  update: RsvpEventUpdateWithoutUserInput;
  where: RsvpEventWhereUniqueInput;
};

export type RsvpEventWhereInput = {
  AND?: InputMaybe<Array<RsvpEventWhereInput>>;
  NOT?: InputMaybe<Array<RsvpEventWhereInput>>;
  OR?: InputMaybe<Array<RsvpEventWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type RsvpEventWhereUniqueInput = {
  eventId_userEmail?: InputMaybe<RsvpEventEventIdUserEmailCompoundUniqueInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StudentRank = {
  __typename?: 'StudentRank';
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  id: Scalars['String'];
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  user: User;
  userEmail: Scalars['String'];
};

export type StudentRankAvgAggregate = {
  __typename?: 'StudentRankAvgAggregate';
  eventCount?: Maybe<Scalars['Float']>;
  firstCount?: Maybe<Scalars['Float']>;
  moneyEarned?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  secondCount?: Maybe<Scalars['Float']>;
  thirdCount?: Maybe<Scalars['Float']>;
};

export type StudentRankAvgOrderByAggregateInput = {
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
};

export type StudentRankCountAggregate = {
  __typename?: 'StudentRankCountAggregate';
  _all: Scalars['Int'];
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  id: Scalars['Int'];
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  userEmail: Scalars['Int'];
};

export type StudentRankCountOrderByAggregateInput = {
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type StudentRankCreateInput = {
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  user: UserCreateNestedOneWithoutStudentRankInput;
};

export type StudentRankCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<StudentRankWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentRankCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StudentRankCreateWithoutUserInput>;
};

export type StudentRankCreateOrConnectWithoutUserInput = {
  create: StudentRankCreateWithoutUserInput;
  where: StudentRankWhereUniqueInput;
};

export type StudentRankCreateWithoutUserInput = {
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
};

export type StudentRankGroupBy = {
  __typename?: 'StudentRankGroupBy';
  _avg?: Maybe<StudentRankAvgAggregate>;
  _count?: Maybe<StudentRankCountAggregate>;
  _max?: Maybe<StudentRankMaxAggregate>;
  _min?: Maybe<StudentRankMinAggregate>;
  _sum?: Maybe<StudentRankSumAggregate>;
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  id: Scalars['String'];
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  userEmail: Scalars['String'];
};

export type StudentRankMaxAggregate = {
  __typename?: 'StudentRankMaxAggregate';
  eventCount?: Maybe<Scalars['Int']>;
  firstCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  moneyEarned?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  secondCount?: Maybe<Scalars['Int']>;
  thirdCount?: Maybe<Scalars['Int']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type StudentRankMaxOrderByAggregateInput = {
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type StudentRankMinAggregate = {
  __typename?: 'StudentRankMinAggregate';
  eventCount?: Maybe<Scalars['Int']>;
  firstCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  moneyEarned?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  secondCount?: Maybe<Scalars['Int']>;
  thirdCount?: Maybe<Scalars['Int']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type StudentRankMinOrderByAggregateInput = {
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type StudentRankOrderByWithAggregationInput = {
  _avg?: InputMaybe<StudentRankAvgOrderByAggregateInput>;
  _count?: InputMaybe<StudentRankCountOrderByAggregateInput>;
  _max?: InputMaybe<StudentRankMaxOrderByAggregateInput>;
  _min?: InputMaybe<StudentRankMinOrderByAggregateInput>;
  _sum?: InputMaybe<StudentRankSumOrderByAggregateInput>;
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type StudentRankOrderByWithRelationInput = {
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userEmail?: InputMaybe<SortOrder>;
};

export type StudentRankRelationFilter = {
  is?: InputMaybe<StudentRankWhereInput>;
  isNot?: InputMaybe<StudentRankWhereInput>;
};

export enum StudentRankScalarFieldEnum {
  EventCount = 'eventCount',
  FirstCount = 'firstCount',
  Id = 'id',
  MoneyEarned = 'moneyEarned',
  Rank = 'rank',
  SecondCount = 'secondCount',
  ThirdCount = 'thirdCount',
  UserEmail = 'userEmail'
}

export type StudentRankScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StudentRankScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StudentRankScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StudentRankScalarWhereWithAggregatesInput>>;
  eventCount?: InputMaybe<IntWithAggregatesFilter>;
  firstCount?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  moneyEarned?: InputMaybe<IntWithAggregatesFilter>;
  rank?: InputMaybe<IntWithAggregatesFilter>;
  secondCount?: InputMaybe<IntWithAggregatesFilter>;
  thirdCount?: InputMaybe<IntWithAggregatesFilter>;
  userEmail?: InputMaybe<StringWithAggregatesFilter>;
};

export type StudentRankSumAggregate = {
  __typename?: 'StudentRankSumAggregate';
  eventCount?: Maybe<Scalars['Int']>;
  firstCount?: Maybe<Scalars['Int']>;
  moneyEarned?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  secondCount?: Maybe<Scalars['Int']>;
  thirdCount?: Maybe<Scalars['Int']>;
};

export type StudentRankSumOrderByAggregateInput = {
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
};

export type StudentRankUpdateInput = {
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  moneyEarned?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  secondCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  thirdCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStudentRankInput>;
};

export type StudentRankUpdateManyMutationInput = {
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  moneyEarned?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  secondCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  thirdCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type StudentRankUpdateOneWithoutUserInput = {
  connect?: InputMaybe<StudentRankWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentRankCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StudentRankCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<StudentRankUpdateWithoutUserInput>;
  upsert?: InputMaybe<StudentRankUpsertWithoutUserInput>;
};

export type StudentRankUpdateWithoutUserInput = {
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  moneyEarned?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  secondCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  thirdCount?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type StudentRankUpsertWithoutUserInput = {
  create: StudentRankCreateWithoutUserInput;
  update: StudentRankUpdateWithoutUserInput;
};

export type StudentRankWhereInput = {
  AND?: InputMaybe<Array<StudentRankWhereInput>>;
  NOT?: InputMaybe<Array<StudentRankWhereInput>>;
  OR?: InputMaybe<Array<StudentRankWhereInput>>;
  eventCount?: InputMaybe<IntFilter>;
  firstCount?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  moneyEarned?: InputMaybe<IntFilter>;
  rank?: InputMaybe<IntFilter>;
  secondCount?: InputMaybe<IntFilter>;
  thirdCount?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type StudentRankWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userEmail?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  club: Club;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  user: User;
  userEmail: Scalars['String'];
};

export type SubscriptionClubIdUserEmailCompoundUniqueInput = {
  clubId: Scalars['String'];
  userEmail: Scalars['String'];
};

export type SubscriptionCountAggregate = {
  __typename?: 'SubscriptionCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  userEmail: Scalars['Int'];
};

export type SubscriptionCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type SubscriptionCreateInput = {
  club: ClubCreateNestedOneWithoutSubscriptionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSubscriptionInput;
};

export type SubscriptionCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutClubInput>>;
};

export type SubscriptionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutUserInput>>;
};

export type SubscriptionCreateOrConnectWithoutClubInput = {
  create: SubscriptionCreateWithoutClubInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateOrConnectWithoutUserInput = {
  create: SubscriptionCreateWithoutUserInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSubscriptionInput;
};

export type SubscriptionCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutSubscriptionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscriptionGroupBy = {
  __typename?: 'SubscriptionGroupBy';
  _count?: Maybe<SubscriptionCountAggregate>;
  _max?: Maybe<SubscriptionMaxAggregate>;
  _min?: Maybe<SubscriptionMinAggregate>;
  clubId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  userEmail: Scalars['String'];
};

export type SubscriptionListRelationFilter = {
  every?: InputMaybe<SubscriptionWhereInput>;
  none?: InputMaybe<SubscriptionWhereInput>;
  some?: InputMaybe<SubscriptionWhereInput>;
};

export type SubscriptionMaxAggregate = {
  __typename?: 'SubscriptionMaxAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type SubscriptionMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type SubscriptionMinAggregate = {
  __typename?: 'SubscriptionMinAggregate';
  clubId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  userEmail?: Maybe<Scalars['String']>;
};

export type SubscriptionMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByWithAggregationInput = {
  _count?: InputMaybe<SubscriptionCountOrderByAggregateInput>;
  _max?: InputMaybe<SubscriptionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SubscriptionMinOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userEmail?: InputMaybe<SortOrder>;
};

export enum SubscriptionScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  UserEmail = 'userEmail'
}

export type SubscriptionScalarWhereInput = {
  AND?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type SubscriptionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userEmail?: InputMaybe<StringWithAggregatesFilter>;
};

export type SubscriptionUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutSubscriptionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionInput>;
};

export type SubscriptionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpdateManyWithWhereWithoutClubInput = {
  data: SubscriptionUpdateManyMutationInput;
  where: SubscriptionScalarWhereInput;
};

export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
  data: SubscriptionUpdateManyMutationInput;
  where: SubscriptionScalarWhereInput;
};

export type SubscriptionUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutClubInput>>;
  delete?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubscriptionUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<SubscriptionUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<SubscriptionUpsertWithWhereUniqueWithoutClubInput>>;
};

export type SubscriptionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutUserInput>>;
  delete?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubscriptionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SubscriptionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SubscriptionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SubscriptionUpdateWithWhereUniqueWithoutClubInput = {
  data: SubscriptionUpdateWithoutClubInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
  data: SubscriptionUpdateWithoutUserInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpdateWithoutClubInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionInput>;
};

export type SubscriptionUpdateWithoutUserInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutSubscriptionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubscriptionUpsertWithWhereUniqueWithoutClubInput = {
  create: SubscriptionCreateWithoutClubInput;
  update: SubscriptionUpdateWithoutClubInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
  create: SubscriptionCreateWithoutUserInput;
  update: SubscriptionUpdateWithoutUserInput;
  where: SubscriptionWhereUniqueInput;
};

export type SubscriptionWhereInput = {
  AND?: InputMaybe<Array<SubscriptionWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userEmail?: InputMaybe<StringFilter>;
};

export type SubscriptionWhereUniqueInput = {
  clubId_userEmail?: InputMaybe<SubscriptionClubIdUserEmailCompoundUniqueInput>;
};

export type Tag = {
  __typename?: 'Tag';
  _count?: Maybe<TagCount>;
  clubs: Array<Club>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<User>;
};


export type TagClubsArgs = {
  cursor?: InputMaybe<ClubWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubWhereInput>;
};


export type TagUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type TagCount = {
  __typename?: 'TagCount';
  clubs: Scalars['Int'];
  users: Scalars['Int'];
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TagCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagCreateInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutTagsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutTagsInput>;
};

export type TagCreateNestedManyWithoutClubsInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutClubsInput>>;
  create?: InputMaybe<Array<TagCreateWithoutClubsInput>>;
};

export type TagCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUsersInput>>;
};

export type TagCreateOrConnectWithoutClubsInput = {
  create: TagCreateWithoutClubsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutUsersInput = {
  create: TagCreateWithoutUsersInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutClubsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutTagsInput>;
};

export type TagCreateWithoutUsersInput = {
  clubs?: InputMaybe<ClubCreateNestedManyWithoutTagsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TagListRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TagOrderByWithAggregationInput = {
  _count?: InputMaybe<TagCountOrderByAggregateInput>;
  _max?: InputMaybe<TagMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  clubs?: InputMaybe<ClubOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type TagScalarWhereInput = {
  AND?: InputMaybe<Array<TagScalarWhereInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereInput>>;
  OR?: InputMaybe<Array<TagScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TagUpdateInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutTagsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutTagsInput>;
};

export type TagUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutClubsInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithWhereWithoutUsersInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutClubsInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutClubsInput>>;
  create?: InputMaybe<Array<TagCreateWithoutClubsInput>>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutClubsInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutClubsInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutClubsInput>>;
};

export type TagUpdateManyWithoutUsersInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TagCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<TagCreateWithoutUsersInput>>;
  delete?: InputMaybe<Array<TagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
  update?: InputMaybe<Array<TagUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<TagUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<TagUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type TagUpdateWithWhereUniqueWithoutClubsInput = {
  data: TagUpdateWithoutClubsInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithWhereUniqueWithoutUsersInput = {
  data: TagUpdateWithoutUsersInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutClubsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutTagsInput>;
};

export type TagUpdateWithoutUsersInput = {
  clubs?: InputMaybe<ClubUpdateManyWithoutTagsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutClubsInput = {
  create: TagCreateWithoutClubsInput;
  update: TagUpdateWithoutClubsInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutUsersInput = {
  create: TagCreateWithoutUsersInput;
  update: TagUpdateWithoutUsersInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  clubs?: InputMaybe<ClubListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  clubCoordinator: Array<ClubCoordinator>;
  clubMember: Array<ClubMember>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notifications: Array<Notification>;
  picture: Scalars['String'];
  positions: Array<Position>;
  rsvpEvent: Array<RsvpEvent>;
  studentRank?: Maybe<StudentRank>;
  subscription: Array<Subscription>;
  tags: Array<Tag>;
  updatedAt: Scalars['DateTime'];
  votes: Array<Vote>;
};


export type UserClubCoordinatorArgs = {
  cursor?: InputMaybe<ClubCoordinatorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubCoordinatorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubCoordinatorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubCoordinatorWhereInput>;
};


export type UserClubMemberArgs = {
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type UserNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type UserPositionsArgs = {
  cursor?: InputMaybe<PositionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PositionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PositionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PositionWhereInput>;
};


export type UserRsvpEventArgs = {
  cursor?: InputMaybe<RsvpEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<RsvpEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RsvpEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RsvpEventWhereInput>;
};


export type UserSubscriptionArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};


export type UserTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  distinct?: InputMaybe<Array<TagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};


export type UserVotesArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<VoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  clubCoordinator: Scalars['Int'];
  clubMember: Scalars['Int'];
  notifications: Scalars['Int'];
  positions: Scalars['Int'];
  rsvpEvent: Scalars['Int'];
  subscription: Scalars['Int'];
  tags: Scalars['Int'];
  votes: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  email: Scalars['Int'];
  isOnBoarded: Scalars['Int'];
  jwtToken: Scalars['Int'];
  name: Scalars['Int'];
  picture: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  isOnBoarded?: InputMaybe<SortOrder>;
  jwtToken?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedForInput>;
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateNestedManyWithoutNotificationsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutNotificationsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutNotificationsInput>>;
};

export type UserCreateNestedManyWithoutTagsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutTagsInput>>;
};

export type UserCreateNestedOneWithoutClubCoordinatorInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubCoordinatorInput>;
  create?: InputMaybe<UserCreateWithoutClubCoordinatorInput>;
};

export type UserCreateNestedOneWithoutClubMemberInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<UserCreateWithoutClubMemberInput>;
};

export type UserCreateNestedOneWithoutPositionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPositionsInput>;
  create?: InputMaybe<UserCreateWithoutPositionsInput>;
};

export type UserCreateNestedOneWithoutRsvpEventInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRsvpEventInput>;
  create?: InputMaybe<UserCreateWithoutRsvpEventInput>;
};

export type UserCreateNestedOneWithoutStudentRankInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStudentRankInput>;
  create?: InputMaybe<UserCreateWithoutStudentRankInput>;
};

export type UserCreateNestedOneWithoutSubscriptionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionInput>;
};

export type UserCreateNestedOneWithoutVotesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutVotesInput>;
  create?: InputMaybe<UserCreateWithoutVotesInput>;
};

export type UserCreateOrConnectWithoutClubCoordinatorInput = {
  create: UserCreateWithoutClubCoordinatorInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutClubMemberInput = {
  create: UserCreateWithoutClubMemberInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPositionsInput = {
  create: UserCreateWithoutPositionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRsvpEventInput = {
  create: UserCreateWithoutRsvpEventInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutStudentRankInput = {
  create: UserCreateWithoutStudentRankInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSubscriptionInput = {
  create: UserCreateWithoutSubscriptionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutVotesInput = {
  create: UserCreateWithoutVotesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutClubCoordinatorInput = {
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedForInput>;
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutClubMemberInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedForInput>;
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutNotificationsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutPositionsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedForInput>;
  picture?: InputMaybe<Scalars['String']>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutRsvpEventInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedForInput>;
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutStudentRankInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedForInput>;
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSubscriptionInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedForInput>;
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTagsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedForInput>;
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutVotesInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  notifications?: InputMaybe<NotificationCreateNestedManyWithoutCreatedForInput>;
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  tags?: InputMaybe<TagCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  picture: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  isOnBoarded?: Maybe<Scalars['Boolean']>;
  jwtToken?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  isOnBoarded?: InputMaybe<SortOrder>;
  jwtToken?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  isOnBoarded?: Maybe<Scalars['Boolean']>;
  jwtToken?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  isOnBoarded?: InputMaybe<SortOrder>;
  jwtToken?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  isOnBoarded?: InputMaybe<SortOrder>;
  jwtToken?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorOrderByRelationAggregateInput>;
  clubMember?: InputMaybe<ClubMemberOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  isOnBoarded?: InputMaybe<SortOrder>;
  jwtToken?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  notifications?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  picture?: InputMaybe<SortOrder>;
  positions?: InputMaybe<PositionOrderByRelationAggregateInput>;
  rsvpEvent?: InputMaybe<RsvpEventOrderByRelationAggregateInput>;
  studentRank?: InputMaybe<StudentRankOrderByWithRelationInput>;
  subscription?: InputMaybe<SubscriptionOrderByRelationAggregateInput>;
  tags?: InputMaybe<TagOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  votes?: InputMaybe<VoteOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  IsOnBoarded = 'isOnBoarded',
  JwtToken = 'jwtToken',
  Name = 'name',
  Picture = 'picture',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  isOnBoarded?: InputMaybe<BoolFilter>;
  jwtToken?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  isOnBoarded?: InputMaybe<BoolWithAggregatesFilter>;
  jwtToken?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  picture?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedForInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutNotificationsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutTagsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutNotificationsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutNotificationsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutNotificationsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutNotificationsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutNotificationsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutNotificationsInput>>;
};

export type UserUpdateManyWithoutTagsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutTagsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutTagsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutTagsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutTagsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type UserUpdateOneRequiredWithoutClubCoordinatorInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubCoordinatorInput>;
  create?: InputMaybe<UserCreateWithoutClubCoordinatorInput>;
  update?: InputMaybe<UserUpdateWithoutClubCoordinatorInput>;
  upsert?: InputMaybe<UserUpsertWithoutClubCoordinatorInput>;
};

export type UserUpdateOneRequiredWithoutClubMemberInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<UserCreateWithoutClubMemberInput>;
  update?: InputMaybe<UserUpdateWithoutClubMemberInput>;
  upsert?: InputMaybe<UserUpsertWithoutClubMemberInput>;
};

export type UserUpdateOneRequiredWithoutPositionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPositionsInput>;
  create?: InputMaybe<UserCreateWithoutPositionsInput>;
  update?: InputMaybe<UserUpdateWithoutPositionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPositionsInput>;
};

export type UserUpdateOneRequiredWithoutRsvpEventInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRsvpEventInput>;
  create?: InputMaybe<UserCreateWithoutRsvpEventInput>;
  update?: InputMaybe<UserUpdateWithoutRsvpEventInput>;
  upsert?: InputMaybe<UserUpsertWithoutRsvpEventInput>;
};

export type UserUpdateOneRequiredWithoutStudentRankInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStudentRankInput>;
  create?: InputMaybe<UserCreateWithoutStudentRankInput>;
  update?: InputMaybe<UserUpdateWithoutStudentRankInput>;
  upsert?: InputMaybe<UserUpsertWithoutStudentRankInput>;
};

export type UserUpdateOneRequiredWithoutSubscriptionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSubscriptionInput>;
  create?: InputMaybe<UserCreateWithoutSubscriptionInput>;
  update?: InputMaybe<UserUpdateWithoutSubscriptionInput>;
  upsert?: InputMaybe<UserUpsertWithoutSubscriptionInput>;
};

export type UserUpdateOneRequiredWithoutVotesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutVotesInput>;
  create?: InputMaybe<UserCreateWithoutVotesInput>;
  update?: InputMaybe<UserUpdateWithoutVotesInput>;
  upsert?: InputMaybe<UserUpsertWithoutVotesInput>;
};

export type UserUpdateWithWhereUniqueWithoutNotificationsInput = {
  data: UserUpdateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutTagsInput = {
  data: UserUpdateWithoutTagsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutClubCoordinatorInput = {
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedForInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutClubMemberInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedForInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutNotificationsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutPositionsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedForInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutRsvpEventInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedForInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutStudentRankInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedForInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutSubscriptionInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedForInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutTagsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedForInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutVotesInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  notifications?: InputMaybe<NotificationUpdateManyWithoutCreatedForInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  tags?: InputMaybe<TagUpdateManyWithoutUsersInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutNotificationsInput = {
  create: UserCreateWithoutNotificationsInput;
  update: UserUpdateWithoutNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutTagsInput = {
  create: UserCreateWithoutTagsInput;
  update: UserUpdateWithoutTagsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutClubCoordinatorInput = {
  create: UserCreateWithoutClubCoordinatorInput;
  update: UserUpdateWithoutClubCoordinatorInput;
};

export type UserUpsertWithoutClubMemberInput = {
  create: UserCreateWithoutClubMemberInput;
  update: UserUpdateWithoutClubMemberInput;
};

export type UserUpsertWithoutPositionsInput = {
  create: UserCreateWithoutPositionsInput;
  update: UserUpdateWithoutPositionsInput;
};

export type UserUpsertWithoutRsvpEventInput = {
  create: UserCreateWithoutRsvpEventInput;
  update: UserUpdateWithoutRsvpEventInput;
};

export type UserUpsertWithoutStudentRankInput = {
  create: UserCreateWithoutStudentRankInput;
  update: UserUpdateWithoutStudentRankInput;
};

export type UserUpsertWithoutSubscriptionInput = {
  create: UserCreateWithoutSubscriptionInput;
  update: UserUpdateWithoutSubscriptionInput;
};

export type UserUpsertWithoutVotesInput = {
  create: UserCreateWithoutVotesInput;
  update: UserUpdateWithoutVotesInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  clubCoordinator?: InputMaybe<ClubCoordinatorListRelationFilter>;
  clubMember?: InputMaybe<ClubMemberListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  isOnBoarded?: InputMaybe<BoolFilter>;
  jwtToken?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<NotificationListRelationFilter>;
  picture?: InputMaybe<StringFilter>;
  positions?: InputMaybe<PositionListRelationFilter>;
  rsvpEvent?: InputMaybe<RsvpEventListRelationFilter>;
  studentRank?: InputMaybe<StudentRankRelationFilter>;
  subscription?: InputMaybe<SubscriptionListRelationFilter>;
  tags?: InputMaybe<TagListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  votes?: InputMaybe<VoteListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
};

export type Vote = {
  __typename?: 'Vote';
  event: Event;
  eventId: Scalars['String'];
  user: User;
  userEmail: Scalars['String'];
  vote: Scalars['Boolean'];
};

export type VoteCountAggregate = {
  __typename?: 'VoteCountAggregate';
  _all: Scalars['Int'];
  eventId: Scalars['Int'];
  userEmail: Scalars['Int'];
  vote: Scalars['Int'];
};

export type VoteCountOrderByAggregateInput = {
  eventId?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export type VoteCreateInput = {
  event: EventCreateNestedOneWithoutVotesInput;
  user: UserCreateNestedOneWithoutVotesInput;
  vote: Scalars['Boolean'];
};

export type VoteCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VoteCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<VoteCreateWithoutEventInput>>;
};

export type VoteCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VoteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<VoteCreateWithoutUserInput>>;
};

export type VoteCreateOrConnectWithoutEventInput = {
  create: VoteCreateWithoutEventInput;
  where: VoteWhereUniqueInput;
};

export type VoteCreateOrConnectWithoutUserInput = {
  create: VoteCreateWithoutUserInput;
  where: VoteWhereUniqueInput;
};

export type VoteCreateWithoutEventInput = {
  user: UserCreateNestedOneWithoutVotesInput;
  vote: Scalars['Boolean'];
};

export type VoteCreateWithoutUserInput = {
  event: EventCreateNestedOneWithoutVotesInput;
  vote: Scalars['Boolean'];
};

export type VoteEventIdUserEmailCompoundUniqueInput = {
  eventId: Scalars['String'];
  userEmail: Scalars['String'];
};

export type VoteGroupBy = {
  __typename?: 'VoteGroupBy';
  _count?: Maybe<VoteCountAggregate>;
  _max?: Maybe<VoteMaxAggregate>;
  _min?: Maybe<VoteMinAggregate>;
  eventId: Scalars['String'];
  userEmail: Scalars['String'];
  vote: Scalars['Boolean'];
};

export type VoteListRelationFilter = {
  every?: InputMaybe<VoteWhereInput>;
  none?: InputMaybe<VoteWhereInput>;
  some?: InputMaybe<VoteWhereInput>;
};

export type VoteMaxAggregate = {
  __typename?: 'VoteMaxAggregate';
  eventId?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
  vote?: Maybe<Scalars['Boolean']>;
};

export type VoteMaxOrderByAggregateInput = {
  eventId?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export type VoteMinAggregate = {
  __typename?: 'VoteMinAggregate';
  eventId?: Maybe<Scalars['String']>;
  userEmail?: Maybe<Scalars['String']>;
  vote?: Maybe<Scalars['Boolean']>;
};

export type VoteMinOrderByAggregateInput = {
  eventId?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export type VoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VoteOrderByWithAggregationInput = {
  _count?: InputMaybe<VoteCountOrderByAggregateInput>;
  _max?: InputMaybe<VoteMaxOrderByAggregateInput>;
  _min?: InputMaybe<VoteMinOrderByAggregateInput>;
  eventId?: InputMaybe<SortOrder>;
  userEmail?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export type VoteOrderByWithRelationInput = {
  event?: InputMaybe<EventOrderByWithRelationInput>;
  eventId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userEmail?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export enum VoteScalarFieldEnum {
  EventId = 'eventId',
  UserEmail = 'userEmail',
  Vote = 'vote'
}

export type VoteScalarWhereInput = {
  AND?: InputMaybe<Array<VoteScalarWhereInput>>;
  NOT?: InputMaybe<Array<VoteScalarWhereInput>>;
  OR?: InputMaybe<Array<VoteScalarWhereInput>>;
  eventId?: InputMaybe<StringFilter>;
  userEmail?: InputMaybe<StringFilter>;
  vote?: InputMaybe<BoolFilter>;
};

export type VoteScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VoteScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VoteScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VoteScalarWhereWithAggregatesInput>>;
  eventId?: InputMaybe<StringWithAggregatesFilter>;
  userEmail?: InputMaybe<StringWithAggregatesFilter>;
  vote?: InputMaybe<BoolWithAggregatesFilter>;
};

export type VoteUpdateInput = {
  event?: InputMaybe<EventUpdateOneRequiredWithoutVotesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutVotesInput>;
  vote?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type VoteUpdateManyMutationInput = {
  vote?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type VoteUpdateManyWithWhereWithoutEventInput = {
  data: VoteUpdateManyMutationInput;
  where: VoteScalarWhereInput;
};

export type VoteUpdateManyWithWhereWithoutUserInput = {
  data: VoteUpdateManyMutationInput;
  where: VoteScalarWhereInput;
};

export type VoteUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VoteCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<VoteCreateWithoutEventInput>>;
  delete?: InputMaybe<Array<VoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  set?: InputMaybe<Array<VoteWhereUniqueInput>>;
  update?: InputMaybe<Array<VoteUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<VoteUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<VoteUpsertWithWhereUniqueWithoutEventInput>>;
};

export type VoteUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VoteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<VoteCreateWithoutUserInput>>;
  delete?: InputMaybe<Array<VoteWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<VoteScalarWhereInput>>;
  disconnect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  set?: InputMaybe<Array<VoteWhereUniqueInput>>;
  update?: InputMaybe<Array<VoteUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<VoteUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<VoteUpsertWithWhereUniqueWithoutUserInput>>;
};

export type VoteUpdateWithWhereUniqueWithoutEventInput = {
  data: VoteUpdateWithoutEventInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpdateWithWhereUniqueWithoutUserInput = {
  data: VoteUpdateWithoutUserInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpdateWithoutEventInput = {
  user?: InputMaybe<UserUpdateOneRequiredWithoutVotesInput>;
  vote?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type VoteUpdateWithoutUserInput = {
  event?: InputMaybe<EventUpdateOneRequiredWithoutVotesInput>;
  vote?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type VoteUpsertWithWhereUniqueWithoutEventInput = {
  create: VoteCreateWithoutEventInput;
  update: VoteUpdateWithoutEventInput;
  where: VoteWhereUniqueInput;
};

export type VoteUpsertWithWhereUniqueWithoutUserInput = {
  create: VoteCreateWithoutUserInput;
  update: VoteUpdateWithoutUserInput;
  where: VoteWhereUniqueInput;
};

export type VoteWhereInput = {
  AND?: InputMaybe<Array<VoteWhereInput>>;
  NOT?: InputMaybe<Array<VoteWhereInput>>;
  OR?: InputMaybe<Array<VoteWhereInput>>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userEmail?: InputMaybe<StringFilter>;
  vote?: InputMaybe<BoolFilter>;
};

export type VoteWhereUniqueInput = {
  eventId_userEmail?: InputMaybe<VoteEventIdUserEmailCompoundUniqueInput>;
};

export type LoginMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', user: { __typename?: 'User', jwtToken?: string | null, name: string, email: string, picture: string } } };

export type UserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDetailsQuery = { __typename?: 'Query', me: { __typename?: 'User', name: string, email: string, picture: string } };

export type FeedEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, name: string, image: string, eventStartDate?: any | null, rsvpEvent: Array<{ __typename?: 'RSVPEvent', user: { __typename?: 'User', email: string } }>, clubs: Array<{ __typename?: 'Club', id: string, name: string }> }> };

export type EventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type EventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, name: string, image: string, description: string, eventStartDate?: any | null, venue?: string | null, link?: string | null, rsvpEvent: Array<{ __typename?: 'RSVPEvent', user: { __typename?: 'User', email: string } }>, clubs: Array<{ __typename?: 'Club', id: string, name: string }> } | null };

export type EventsForYouQueryVariables = Exact<{
  where?: InputMaybe<EventWhereInput>;
}>;


export type EventsForYouQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, name: string, image: string, eventStartDate?: any | null, rsvpEvent: Array<{ __typename?: 'RSVPEvent', user: { __typename?: 'User', email: string } }>, clubs: Array<{ __typename?: 'Club', id: string, name: string }> }> };

export type RsvpEventMutationVariables = Exact<{
  data: RsvpEventCreateInput;
}>;


export type RsvpEventMutation = { __typename?: 'Mutation', createRSVPEvent: { __typename?: 'RSVPEvent', eventId: string, userEmail: string, createdAt: any } };

export type UnRsvpEventMutationVariables = Exact<{
  where: RsvpEventWhereUniqueInput;
}>;


export type UnRsvpEventMutation = { __typename?: 'Mutation', deleteRSVPEvent?: { __typename?: 'RSVPEvent', eventId: string, userEmail: string, deletedAt?: any | null } | null };

export type NotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationsQuery = { __typename?: 'Query', notifications: Array<{ __typename?: 'Notification', id: string, message: string, updatedAt: any, createdBy: { __typename?: 'Club', id: string, name: string, image: string } }> };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwtToken"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const UserDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]} as unknown as DocumentNode<UserDetailsQuery, UserDetailsQueryVariables>;
export const FeedEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"feedEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"eventStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"rsvpEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FeedEventsQuery, FeedEventsQueryVariables>;
export const EventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"event"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"eventStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"venue"}},{"kind":"Field","name":{"kind":"Name","value":"rsvpEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"clubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<EventQuery, EventQueryVariables>;
export const EventsForYouDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"eventsForYou"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"eventStartDate"}},{"kind":"Field","name":{"kind":"Name","value":"rsvpEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<EventsForYouQuery, EventsForYouQueryVariables>;
export const RsvpEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rsvpEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RSVPEventCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRSVPEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<RsvpEventMutation, RsvpEventMutationVariables>;
export const UnRsvpEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unRSVPEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RSVPEventWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRSVPEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"userEmail"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]} as unknown as DocumentNode<UnRsvpEventMutation, UnRsvpEventMutationVariables>;
export const NotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"notifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<NotificationsQuery, NotificationsQueryVariables>;