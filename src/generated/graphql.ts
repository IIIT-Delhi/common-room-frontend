import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
import { useAxios } from '../api';
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
  _avg?: Maybe<ClubAvgAggregate>;
  _count?: Maybe<ClubCountAggregate>;
  _max?: Maybe<ClubMaxAggregate>;
  _min?: Maybe<ClubMinAggregate>;
  _sum?: Maybe<ClubSumAggregate>;
};

export type AggregateClubCoordinator = {
  __typename?: 'AggregateClubCoordinator';
  _avg?: Maybe<ClubCoordinatorAvgAggregate>;
  _count?: Maybe<ClubCoordinatorCountAggregate>;
  _max?: Maybe<ClubCoordinatorMaxAggregate>;
  _min?: Maybe<ClubCoordinatorMinAggregate>;
  _sum?: Maybe<ClubCoordinatorSumAggregate>;
};

export type AggregateClubEvent = {
  __typename?: 'AggregateClubEvent';
  _avg?: Maybe<ClubEventAvgAggregate>;
  _count?: Maybe<ClubEventCountAggregate>;
  _max?: Maybe<ClubEventMaxAggregate>;
  _min?: Maybe<ClubEventMinAggregate>;
  _sum?: Maybe<ClubEventSumAggregate>;
};

export type AggregateClubMember = {
  __typename?: 'AggregateClubMember';
  _avg?: Maybe<ClubMemberAvgAggregate>;
  _count?: Maybe<ClubMemberCountAggregate>;
  _max?: Maybe<ClubMemberMaxAggregate>;
  _min?: Maybe<ClubMemberMinAggregate>;
  _sum?: Maybe<ClubMemberSumAggregate>;
};

export type AggregateClubNotification = {
  __typename?: 'AggregateClubNotification';
  _avg?: Maybe<ClubNotificationAvgAggregate>;
  _count?: Maybe<ClubNotificationCountAggregate>;
  _max?: Maybe<ClubNotificationMaxAggregate>;
  _min?: Maybe<ClubNotificationMinAggregate>;
  _sum?: Maybe<ClubNotificationSumAggregate>;
};

export type AggregateClubRank = {
  __typename?: 'AggregateClubRank';
  _avg?: Maybe<ClubRankAvgAggregate>;
  _count?: Maybe<ClubRankCountAggregate>;
  _max?: Maybe<ClubRankMaxAggregate>;
  _min?: Maybe<ClubRankMinAggregate>;
  _sum?: Maybe<ClubRankSumAggregate>;
};

export type AggregateClubTag = {
  __typename?: 'AggregateClubTag';
  _avg?: Maybe<ClubTagAvgAggregate>;
  _count?: Maybe<ClubTagCountAggregate>;
  _max?: Maybe<ClubTagMaxAggregate>;
  _min?: Maybe<ClubTagMinAggregate>;
  _sum?: Maybe<ClubTagSumAggregate>;
};

export type AggregateEvent = {
  __typename?: 'AggregateEvent';
  _avg?: Maybe<EventAvgAggregate>;
  _count?: Maybe<EventCountAggregate>;
  _max?: Maybe<EventMaxAggregate>;
  _min?: Maybe<EventMinAggregate>;
  _sum?: Maybe<EventSumAggregate>;
};

export type AggregateNotification = {
  __typename?: 'AggregateNotification';
  _avg?: Maybe<NotificationAvgAggregate>;
  _count?: Maybe<NotificationCountAggregate>;
  _max?: Maybe<NotificationMaxAggregate>;
  _min?: Maybe<NotificationMinAggregate>;
  _sum?: Maybe<NotificationSumAggregate>;
};

export type AggregateOtp = {
  __typename?: 'AggregateOTP';
  _avg?: Maybe<OtpAvgAggregate>;
  _count?: Maybe<OtpCountAggregate>;
  _max?: Maybe<OtpMaxAggregate>;
  _min?: Maybe<OtpMinAggregate>;
  _sum?: Maybe<OtpSumAggregate>;
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
  _avg?: Maybe<RsvpEventAvgAggregate>;
  _count?: Maybe<RsvpEventCountAggregate>;
  _max?: Maybe<RsvpEventMaxAggregate>;
  _min?: Maybe<RsvpEventMinAggregate>;
  _sum?: Maybe<RsvpEventSumAggregate>;
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
  _avg?: Maybe<SubscriptionAvgAggregate>;
  _count?: Maybe<SubscriptionCountAggregate>;
  _max?: Maybe<SubscriptionMaxAggregate>;
  _min?: Maybe<SubscriptionMinAggregate>;
  _sum?: Maybe<SubscriptionSumAggregate>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  _avg?: Maybe<TagAvgAggregate>;
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
  _sum?: Maybe<TagSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateUserNotification = {
  __typename?: 'AggregateUserNotification';
  _avg?: Maybe<UserNotificationAvgAggregate>;
  _count?: Maybe<UserNotificationCountAggregate>;
  _max?: Maybe<UserNotificationMaxAggregate>;
  _min?: Maybe<UserNotificationMinAggregate>;
  _sum?: Maybe<UserNotificationSumAggregate>;
};

export type AggregateUserTag = {
  __typename?: 'AggregateUserTag';
  _avg?: Maybe<UserTagAvgAggregate>;
  _count?: Maybe<UserTagCountAggregate>;
  _max?: Maybe<UserTagMaxAggregate>;
  _min?: Maybe<UserTagMinAggregate>;
  _sum?: Maybe<UserTagSumAggregate>;
};

export type AggregateVote = {
  __typename?: 'AggregateVote';
  _avg?: Maybe<VoteAvgAggregate>;
  _count?: Maybe<VoteCountAggregate>;
  _max?: Maybe<VoteMaxAggregate>;
  _min?: Maybe<VoteMinAggregate>;
  _sum?: Maybe<VoteSumAggregate>;
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
  clubEvents: Array<ClubEvent>;
  clubMember: Array<ClubMember>;
  clubNotifications: Array<ClubNotification>;
  clubRank?: Maybe<ClubRank>;
  clubtags: Array<ClubTag>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: Maybe<Otp>;
  subscription: Array<Subscription>;
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


export type ClubClubEventsArgs = {
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
};


export type ClubClubMemberArgs = {
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type ClubClubNotificationsArgs = {
  cursor?: InputMaybe<ClubNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubNotificationWhereInput>;
};


export type ClubClubtagsArgs = {
  cursor?: InputMaybe<ClubTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTagWhereInput>;
};


export type ClubSubscriptionArgs = {
  cursor?: InputMaybe<SubscriptionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubscriptionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubscriptionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriptionWhereInput>;
};

export type ClubAvgAggregate = {
  __typename?: 'ClubAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ClubAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ClubCoordinator = {
  __typename?: 'ClubCoordinator';
  club: Club;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type ClubCoordinatorAvgAggregate = {
  __typename?: 'ClubCoordinatorAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ClubCoordinatorAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorClubIdUserIdCompoundUniqueInput = {
  clubId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ClubCoordinatorCountAggregate = {
  __typename?: 'ClubCoordinatorCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ClubCoordinatorCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorCreateInput = {
  club: ClubCreateNestedOneWithoutClubCoordinatorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubCoordinatorInput;
};

export type ClubCoordinatorCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type ClubCoordinatorCreateManyClubInputEnvelope = {
  data: Array<ClubCoordinatorCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubCoordinatorCreateManyInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type ClubCoordinatorCreateManyUserInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCoordinatorCreateManyUserInputEnvelope = {
  data: Array<ClubCoordinatorCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubCoordinatorCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCoordinatorCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubCoordinatorCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubCoordinatorCreateManyClubInputEnvelope>;
};

export type ClubCoordinatorCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubCoordinatorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubCoordinatorCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubCoordinatorCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubCoordinatorCreateManyUserInputEnvelope>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubCoordinatorInput;
};

export type ClubCoordinatorCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutClubCoordinatorInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCoordinatorGroupBy = {
  __typename?: 'ClubCoordinatorGroupBy';
  _avg?: Maybe<ClubCoordinatorAvgAggregate>;
  _count?: Maybe<ClubCoordinatorCountAggregate>;
  _max?: Maybe<ClubCoordinatorMaxAggregate>;
  _min?: Maybe<ClubCoordinatorMinAggregate>;
  _sum?: Maybe<ClubCoordinatorSumAggregate>;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type ClubCoordinatorListRelationFilter = {
  every?: InputMaybe<ClubCoordinatorWhereInput>;
  none?: InputMaybe<ClubCoordinatorWhereInput>;
  some?: InputMaybe<ClubCoordinatorWhereInput>;
};

export type ClubCoordinatorMaxAggregate = {
  __typename?: 'ClubCoordinatorMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ClubCoordinatorMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorMinAggregate = {
  __typename?: 'ClubCoordinatorMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ClubCoordinatorMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubCoordinatorAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubCoordinatorCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubCoordinatorMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubCoordinatorMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubCoordinatorSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ClubCoordinatorScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ClubCoordinatorScalarWhereInput = {
  AND?: InputMaybe<Array<ClubCoordinatorScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubCoordinatorScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubCoordinatorScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ClubCoordinatorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubCoordinatorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubCoordinatorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubCoordinatorScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClubCoordinatorSumAggregate = {
  __typename?: 'ClubCoordinatorSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ClubCoordinatorSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubCoordinatorUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubCoordinatorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubCoordinatorInput>;
};

export type ClubCoordinatorUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createMany?: InputMaybe<ClubCoordinatorCreateManyClubInputEnvelope>;
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
  createMany?: InputMaybe<ClubCoordinatorCreateManyUserInputEnvelope>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubCoordinatorInput>;
};

export type ClubCoordinatorUpdateWithoutUserInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubCoordinatorInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ClubCoordinatorWhereUniqueInput = {
  clubId_userId?: InputMaybe<ClubCoordinatorClubIdUserIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubCount = {
  __typename?: 'ClubCount';
  clubCoordinator: Scalars['Int'];
  clubEvents: Scalars['Int'];
  clubMember: Scalars['Int'];
  clubNotifications: Scalars['Int'];
  clubtags: Scalars['Int'];
  subscription: Scalars['Int'];
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
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateNestedOneWithoutClubCoordinatorInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubCoordinatorInput>;
  create?: InputMaybe<ClubCreateWithoutClubCoordinatorInput>;
};

export type ClubCreateNestedOneWithoutClubEventsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubEventsInput>;
  create?: InputMaybe<ClubCreateWithoutClubEventsInput>;
};

export type ClubCreateNestedOneWithoutClubMemberInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<ClubCreateWithoutClubMemberInput>;
};

export type ClubCreateNestedOneWithoutClubNotificationsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubNotificationsInput>;
  create?: InputMaybe<ClubCreateWithoutClubNotificationsInput>;
};

export type ClubCreateNestedOneWithoutClubRankInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubRankInput>;
  create?: InputMaybe<ClubCreateWithoutClubRankInput>;
};

export type ClubCreateNestedOneWithoutClubtagsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubtagsInput>;
  create?: InputMaybe<ClubCreateWithoutClubtagsInput>;
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

export type ClubCreateOrConnectWithoutClubEventsInput = {
  create: ClubCreateWithoutClubEventsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubMemberInput = {
  create: ClubCreateWithoutClubMemberInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubNotificationsInput = {
  create: ClubCreateWithoutClubNotificationsInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubRankInput = {
  create: ClubCreateWithoutClubRankInput;
  where: ClubWhereUniqueInput;
};

export type ClubCreateOrConnectWithoutClubtagsInput = {
  create: ClubCreateWithoutClubtagsInput;
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

export type ClubCreateWithoutClubCoordinatorInput = {
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubEventsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubMemberInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubNotificationsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubRankInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationCreateNestedManyWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutClubtagsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutOtpInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubCreateWithoutSubscriptionInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationCreateNestedManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankCreateNestedOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagCreateNestedManyWithoutClubInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  links: Scalars['String'];
  name: Scalars['String'];
  otp?: InputMaybe<OtpCreateNestedOneWithoutClubInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEvent = {
  __typename?: 'ClubEvent';
  club: Club;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  event: Event;
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ClubEventAvgAggregate = {
  __typename?: 'ClubEventAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  eventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type ClubEventAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClubEventClubIdEventIdCompoundUniqueInput = {
  clubId: Scalars['Int'];
  eventId: Scalars['Int'];
};

export type ClubEventCountAggregate = {
  __typename?: 'ClubEventCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ClubEventCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubEventCreateInput = {
  club: ClubCreateNestedOneWithoutClubEventsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutClubEventsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventCreateManyClubInputEnvelope = {
  data: Array<ClubEventCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubEventCreateManyEventInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventCreateManyEventInputEnvelope = {
  data: Array<ClubEventCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubEventCreateManyInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubEventCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubEventCreateManyClubInputEnvelope>;
};

export type ClubEventCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<ClubEventCreateWithoutEventInput>>;
  createMany?: InputMaybe<ClubEventCreateManyEventInputEnvelope>;
};

export type ClubEventCreateOrConnectWithoutClubInput = {
  create: ClubEventCreateWithoutClubInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventCreateOrConnectWithoutEventInput = {
  create: ClubEventCreateWithoutEventInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutClubEventsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventCreateWithoutEventInput = {
  club: ClubCreateNestedOneWithoutClubEventsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubEventGroupBy = {
  __typename?: 'ClubEventGroupBy';
  _avg?: Maybe<ClubEventAvgAggregate>;
  _count?: Maybe<ClubEventCountAggregate>;
  _max?: Maybe<ClubEventMaxAggregate>;
  _min?: Maybe<ClubEventMinAggregate>;
  _sum?: Maybe<ClubEventSumAggregate>;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ClubEventListRelationFilter = {
  every?: InputMaybe<ClubEventWhereInput>;
  none?: InputMaybe<ClubEventWhereInput>;
  some?: InputMaybe<ClubEventWhereInput>;
};

export type ClubEventMaxAggregate = {
  __typename?: 'ClubEventMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubEventMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubEventMinAggregate = {
  __typename?: 'ClubEventMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubEventMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubEventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubEventOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubEventAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubEventCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubEventMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubEventMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubEventSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubEventOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  event?: InputMaybe<EventOrderByWithRelationInput>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ClubEventScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EventId = 'eventId',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type ClubEventScalarWhereInput = {
  AND?: InputMaybe<Array<ClubEventScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubEventScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubEventScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubEventScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubEventScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubEventScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubEventScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  eventId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ClubEventSumAggregate = {
  __typename?: 'ClubEventSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type ClubEventSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ClubEventUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutClubEventsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventUpdateManyWithWhereWithoutClubInput = {
  data: ClubEventUpdateManyMutationInput;
  where: ClubEventScalarWhereInput;
};

export type ClubEventUpdateManyWithWhereWithoutEventInput = {
  data: ClubEventUpdateManyMutationInput;
  where: ClubEventScalarWhereInput;
};

export type ClubEventUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubEventCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubEventCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubEventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubEventUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubEventUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubEventUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubEventUpdateManyWithoutEventInput = {
  connect?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubEventCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<ClubEventCreateWithoutEventInput>>;
  createMany?: InputMaybe<ClubEventCreateManyEventInputEnvelope>;
  delete?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubEventScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubEventWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubEventUpdateWithWhereUniqueWithoutEventInput>>;
  updateMany?: InputMaybe<Array<ClubEventUpdateManyWithWhereWithoutEventInput>>;
  upsert?: InputMaybe<Array<ClubEventUpsertWithWhereUniqueWithoutEventInput>>;
};

export type ClubEventUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubEventUpdateWithoutClubInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventUpdateWithWhereUniqueWithoutEventInput = {
  data: ClubEventUpdateWithoutEventInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventUpdateWithoutClubInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutClubEventsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventUpdateWithoutEventInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubEventsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubEventUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubEventCreateWithoutClubInput;
  update: ClubEventUpdateWithoutClubInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventUpsertWithWhereUniqueWithoutEventInput = {
  create: ClubEventCreateWithoutEventInput;
  update: ClubEventUpdateWithoutEventInput;
  where: ClubEventWhereUniqueInput;
};

export type ClubEventWhereInput = {
  AND?: InputMaybe<Array<ClubEventWhereInput>>;
  NOT?: InputMaybe<Array<ClubEventWhereInput>>;
  OR?: InputMaybe<Array<ClubEventWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubEventWhereUniqueInput = {
  clubId_eventId?: InputMaybe<ClubEventClubIdEventIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubGroupBy = {
  __typename?: 'ClubGroupBy';
  _avg?: Maybe<ClubAvgAggregate>;
  _count?: Maybe<ClubCountAggregate>;
  _max?: Maybe<ClubMaxAggregate>;
  _min?: Maybe<ClubMinAggregate>;
  _sum?: Maybe<ClubSumAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  links: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ClubMaxAggregate = {
  __typename?: 'ClubMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
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
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  level: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type ClubMemberAvgAggregate = {
  __typename?: 'ClubMemberAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type ClubMemberAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubMemberClubIdUserIdCompoundUniqueInput = {
  clubId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ClubMemberCountAggregate = {
  __typename?: 'ClubMemberCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ClubMemberCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubMemberCreateInput = {
  club: ClubCreateNestedOneWithoutClubMemberInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  level?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubMemberInput;
};

export type ClubMemberCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type ClubMemberCreateManyClubInputEnvelope = {
  data: Array<ClubMemberCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubMemberCreateManyInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type ClubMemberCreateManyUserInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubMemberCreateManyUserInputEnvelope = {
  data: Array<ClubMemberCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubMemberCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyClubInputEnvelope>;
};

export type ClubMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ClubMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ClubMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<ClubMemberCreateManyUserInputEnvelope>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutClubMemberInput;
};

export type ClubMemberCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutClubMemberInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  level?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubMemberGroupBy = {
  __typename?: 'ClubMemberGroupBy';
  _avg?: Maybe<ClubMemberAvgAggregate>;
  _count?: Maybe<ClubMemberCountAggregate>;
  _max?: Maybe<ClubMemberMaxAggregate>;
  _min?: Maybe<ClubMemberMinAggregate>;
  _sum?: Maybe<ClubMemberSumAggregate>;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  level: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type ClubMemberListRelationFilter = {
  every?: InputMaybe<ClubMemberWhereInput>;
  none?: InputMaybe<ClubMemberWhereInput>;
  some?: InputMaybe<ClubMemberWhereInput>;
};

export type ClubMemberMaxAggregate = {
  __typename?: 'ClubMemberMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ClubMemberMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubMemberMinAggregate = {
  __typename?: 'ClubMemberMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ClubMemberMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
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
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubMemberOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ClubMemberScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Level = 'level',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ClubMemberScalarWhereInput = {
  AND?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubMemberScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  level?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ClubMemberScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubMemberScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubMemberScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubMemberScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  level?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ClubMemberSumAggregate = {
  __typename?: 'ClubMemberSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type ClubMemberSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ClubMemberUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubMemberInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubMemberInput>;
};

export type ClubMemberUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createMany?: InputMaybe<ClubMemberCreateManyClubInputEnvelope>;
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
  createMany?: InputMaybe<ClubMemberCreateManyUserInputEnvelope>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutClubMemberInput>;
};

export type ClubMemberUpdateWithoutUserInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubMemberInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  level?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  level?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ClubMemberWhereUniqueInput = {
  clubId_userId?: InputMaybe<ClubMemberClubIdUserIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubMinAggregate = {
  __typename?: 'ClubMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
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

export type ClubNotification = {
  __typename?: 'ClubNotification';
  club: Club;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  notification: Notification;
  notificationId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ClubNotificationAvgAggregate = {
  __typename?: 'ClubNotificationAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  notificationId?: Maybe<Scalars['Float']>;
};

export type ClubNotificationAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
};

export type ClubNotificationClubIdNotificationIdCompoundUniqueInput = {
  clubId: Scalars['Int'];
  notificationId: Scalars['Int'];
};

export type ClubNotificationCountAggregate = {
  __typename?: 'ClubNotificationCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  id: Scalars['Int'];
  notificationId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ClubNotificationCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubNotificationCreateInput = {
  club: ClubCreateNestedOneWithoutClubNotificationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  notification: NotificationCreateNestedOneWithoutCreatedByInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubNotificationCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  notificationId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubNotificationCreateManyClubInputEnvelope = {
  data: Array<ClubNotificationCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubNotificationCreateManyInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  notificationId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubNotificationCreateManyNotificationInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubNotificationCreateManyNotificationInputEnvelope = {
  data: Array<ClubNotificationCreateManyNotificationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubNotificationCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubNotificationCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubNotificationCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubNotificationCreateManyClubInputEnvelope>;
};

export type ClubNotificationCreateNestedManyWithoutNotificationInput = {
  connect?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubNotificationCreateOrConnectWithoutNotificationInput>>;
  create?: InputMaybe<Array<ClubNotificationCreateWithoutNotificationInput>>;
  createMany?: InputMaybe<ClubNotificationCreateManyNotificationInputEnvelope>;
};

export type ClubNotificationCreateOrConnectWithoutClubInput = {
  create: ClubNotificationCreateWithoutClubInput;
  where: ClubNotificationWhereUniqueInput;
};

export type ClubNotificationCreateOrConnectWithoutNotificationInput = {
  create: ClubNotificationCreateWithoutNotificationInput;
  where: ClubNotificationWhereUniqueInput;
};

export type ClubNotificationCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  notification: NotificationCreateNestedOneWithoutCreatedByInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubNotificationCreateWithoutNotificationInput = {
  club: ClubCreateNestedOneWithoutClubNotificationsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubNotificationGroupBy = {
  __typename?: 'ClubNotificationGroupBy';
  _avg?: Maybe<ClubNotificationAvgAggregate>;
  _count?: Maybe<ClubNotificationCountAggregate>;
  _max?: Maybe<ClubNotificationMaxAggregate>;
  _min?: Maybe<ClubNotificationMinAggregate>;
  _sum?: Maybe<ClubNotificationSumAggregate>;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  notificationId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ClubNotificationListRelationFilter = {
  every?: InputMaybe<ClubNotificationWhereInput>;
  none?: InputMaybe<ClubNotificationWhereInput>;
  some?: InputMaybe<ClubNotificationWhereInput>;
};

export type ClubNotificationMaxAggregate = {
  __typename?: 'ClubNotificationMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  notificationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubNotificationMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubNotificationMinAggregate = {
  __typename?: 'ClubNotificationMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  notificationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubNotificationMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubNotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubNotificationOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubNotificationAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubNotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubNotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubNotificationMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubNotificationSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubNotificationOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notification?: InputMaybe<NotificationOrderByWithRelationInput>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ClubNotificationScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  NotificationId = 'notificationId',
  UpdatedAt = 'updatedAt'
}

export type ClubNotificationScalarWhereInput = {
  AND?: InputMaybe<Array<ClubNotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubNotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubNotificationScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  notificationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubNotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubNotificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubNotificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubNotificationScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  notificationId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ClubNotificationSumAggregate = {
  __typename?: 'ClubNotificationSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  notificationId?: Maybe<Scalars['Int']>;
};

export type ClubNotificationSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
};

export type ClubNotificationUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubNotificationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  notification?: InputMaybe<NotificationUpdateOneRequiredWithoutCreatedByInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubNotificationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubNotificationUpdateManyWithWhereWithoutClubInput = {
  data: ClubNotificationUpdateManyMutationInput;
  where: ClubNotificationScalarWhereInput;
};

export type ClubNotificationUpdateManyWithWhereWithoutNotificationInput = {
  data: ClubNotificationUpdateManyMutationInput;
  where: ClubNotificationScalarWhereInput;
};

export type ClubNotificationUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubNotificationCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubNotificationCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubNotificationCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubNotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubNotificationUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubNotificationUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubNotificationUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubNotificationUpdateManyWithoutNotificationInput = {
  connect?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubNotificationCreateOrConnectWithoutNotificationInput>>;
  create?: InputMaybe<Array<ClubNotificationCreateWithoutNotificationInput>>;
  createMany?: InputMaybe<ClubNotificationCreateManyNotificationInputEnvelope>;
  delete?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubNotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubNotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubNotificationUpdateWithWhereUniqueWithoutNotificationInput>>;
  updateMany?: InputMaybe<Array<ClubNotificationUpdateManyWithWhereWithoutNotificationInput>>;
  upsert?: InputMaybe<Array<ClubNotificationUpsertWithWhereUniqueWithoutNotificationInput>>;
};

export type ClubNotificationUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubNotificationUpdateWithoutClubInput;
  where: ClubNotificationWhereUniqueInput;
};

export type ClubNotificationUpdateWithWhereUniqueWithoutNotificationInput = {
  data: ClubNotificationUpdateWithoutNotificationInput;
  where: ClubNotificationWhereUniqueInput;
};

export type ClubNotificationUpdateWithoutClubInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  notification?: InputMaybe<NotificationUpdateOneRequiredWithoutCreatedByInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubNotificationUpdateWithoutNotificationInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubNotificationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubNotificationUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubNotificationCreateWithoutClubInput;
  update: ClubNotificationUpdateWithoutClubInput;
  where: ClubNotificationWhereUniqueInput;
};

export type ClubNotificationUpsertWithWhereUniqueWithoutNotificationInput = {
  create: ClubNotificationCreateWithoutNotificationInput;
  update: ClubNotificationUpdateWithoutNotificationInput;
  where: ClubNotificationWhereUniqueInput;
};

export type ClubNotificationWhereInput = {
  AND?: InputMaybe<Array<ClubNotificationWhereInput>>;
  NOT?: InputMaybe<Array<ClubNotificationWhereInput>>;
  OR?: InputMaybe<Array<ClubNotificationWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  notification?: InputMaybe<NotificationRelationFilter>;
  notificationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubNotificationWhereUniqueInput = {
  clubId_notificationId?: InputMaybe<ClubNotificationClubIdNotificationIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubSumOrderByAggregateInput>;
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
  clubEvents?: InputMaybe<ClubEventOrderByRelationAggregateInput>;
  clubMember?: InputMaybe<ClubMemberOrderByRelationAggregateInput>;
  clubNotifications?: InputMaybe<ClubNotificationOrderByRelationAggregateInput>;
  clubRank?: InputMaybe<ClubRankOrderByWithRelationInput>;
  clubtags?: InputMaybe<ClubTagOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  links?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  otp?: InputMaybe<OtpOrderByWithRelationInput>;
  subscription?: InputMaybe<SubscriptionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubRank = {
  __typename?: 'ClubRank';
  club: Club;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  id: Scalars['Int'];
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ClubRankAvgAggregate = {
  __typename?: 'ClubRankAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  eventCount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  moneyAwarded?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  rsvpCount?: Maybe<Scalars['Float']>;
  upVoteCount?: Maybe<Scalars['Float']>;
};

export type ClubRankAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
};

export type ClubRankCountAggregate = {
  __typename?: 'ClubRankCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  eventCount: Scalars['Int'];
  id: Scalars['Int'];
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ClubRankCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubRankCreateInput = {
  club: ClubCreateNestedOneWithoutClubRankInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubRankCreateManyInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubRankGroupBy = {
  __typename?: 'ClubRankGroupBy';
  _avg?: Maybe<ClubRankAvgAggregate>;
  _count?: Maybe<ClubRankCountAggregate>;
  _max?: Maybe<ClubRankMaxAggregate>;
  _min?: Maybe<ClubRankMinAggregate>;
  _sum?: Maybe<ClubRankSumAggregate>;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  id: Scalars['Int'];
  moneyAwarded: Scalars['Int'];
  rank: Scalars['Int'];
  rsvpCount: Scalars['Int'];
  upVoteCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ClubRankMaxAggregate = {
  __typename?: 'ClubRankMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  moneyAwarded?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  rsvpCount?: Maybe<Scalars['Int']>;
  upVoteCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubRankMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubRankMinAggregate = {
  __typename?: 'ClubRankMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  moneyAwarded?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  rsvpCount?: Maybe<Scalars['Int']>;
  upVoteCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubRankMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubRankOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubRankAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubRankCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubRankMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubRankMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubRankSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubRankOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubRankRelationFilter = {
  is?: InputMaybe<ClubRankWhereInput>;
  isNot?: InputMaybe<ClubRankWhereInput>;
};

export enum ClubRankScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EventCount = 'eventCount',
  Id = 'id',
  MoneyAwarded = 'moneyAwarded',
  Rank = 'rank',
  RsvpCount = 'rsvpCount',
  UpVoteCount = 'upVoteCount',
  UpdatedAt = 'updatedAt'
}

export type ClubRankScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubRankScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubRankScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubRankScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  eventCount?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  moneyAwarded?: InputMaybe<IntWithAggregatesFilter>;
  rank?: InputMaybe<IntWithAggregatesFilter>;
  rsvpCount?: InputMaybe<IntWithAggregatesFilter>;
  upVoteCount?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ClubRankSumAggregate = {
  __typename?: 'ClubRankSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  eventCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  moneyAwarded?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  rsvpCount?: Maybe<Scalars['Int']>;
  upVoteCount?: Maybe<Scalars['Int']>;
};

export type ClubRankSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyAwarded?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  rsvpCount?: InputMaybe<SortOrder>;
  upVoteCount?: InputMaybe<SortOrder>;
};

export type ClubRankUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubRankInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  moneyAwarded?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  rsvpCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  upVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubRankUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  moneyAwarded?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  rsvpCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  upVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  moneyAwarded?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  rsvpCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  upVoteCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  eventCount?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  moneyAwarded?: InputMaybe<IntFilter>;
  rank?: InputMaybe<IntFilter>;
  rsvpCount?: InputMaybe<IntFilter>;
  upVoteCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubRankWhereUniqueInput = {
  clubId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
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

export type ClubScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  links?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ClubSumAggregate = {
  __typename?: 'ClubSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ClubSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ClubTag = {
  __typename?: 'ClubTag';
  club: Club;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  tag: Tag;
  tagId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ClubTagAvgAggregate = {
  __typename?: 'ClubTagAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tagId?: Maybe<Scalars['Float']>;
};

export type ClubTagAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
};

export type ClubTagClubIdTagIdCompoundUniqueInput = {
  clubId: Scalars['Int'];
  tagId: Scalars['Int'];
};

export type ClubTagCountAggregate = {
  __typename?: 'ClubTagCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  id: Scalars['Int'];
  tagId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ClubTagCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubTagCreateInput = {
  club: ClubCreateNestedOneWithoutClubtagsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  tag: TagCreateNestedOneWithoutClubTagsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubTagCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  tagId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubTagCreateManyClubInputEnvelope = {
  data: Array<ClubTagCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubTagCreateManyInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  tagId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubTagCreateManyTagInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubTagCreateManyTagInputEnvelope = {
  data: Array<ClubTagCreateManyTagInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ClubTagCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubTagCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubTagCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubTagCreateManyClubInputEnvelope>;
};

export type ClubTagCreateNestedManyWithoutTagInput = {
  connect?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<ClubTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<ClubTagCreateManyTagInputEnvelope>;
};

export type ClubTagCreateOrConnectWithoutClubInput = {
  create: ClubTagCreateWithoutClubInput;
  where: ClubTagWhereUniqueInput;
};

export type ClubTagCreateOrConnectWithoutTagInput = {
  create: ClubTagCreateWithoutTagInput;
  where: ClubTagWhereUniqueInput;
};

export type ClubTagCreateWithoutClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  tag: TagCreateNestedOneWithoutClubTagsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubTagCreateWithoutTagInput = {
  club: ClubCreateNestedOneWithoutClubtagsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClubTagGroupBy = {
  __typename?: 'ClubTagGroupBy';
  _avg?: Maybe<ClubTagAvgAggregate>;
  _count?: Maybe<ClubTagCountAggregate>;
  _max?: Maybe<ClubTagMaxAggregate>;
  _min?: Maybe<ClubTagMinAggregate>;
  _sum?: Maybe<ClubTagSumAggregate>;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  tagId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ClubTagListRelationFilter = {
  every?: InputMaybe<ClubTagWhereInput>;
  none?: InputMaybe<ClubTagWhereInput>;
  some?: InputMaybe<ClubTagWhereInput>;
};

export type ClubTagMaxAggregate = {
  __typename?: 'ClubTagMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubTagMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubTagMinAggregate = {
  __typename?: 'ClubTagMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ClubTagMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubTagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ClubTagOrderByWithAggregationInput = {
  _avg?: InputMaybe<ClubTagAvgOrderByAggregateInput>;
  _count?: InputMaybe<ClubTagCountOrderByAggregateInput>;
  _max?: InputMaybe<ClubTagMaxOrderByAggregateInput>;
  _min?: InputMaybe<ClubTagMinOrderByAggregateInput>;
  _sum?: InputMaybe<ClubTagSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ClubTagOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tag?: InputMaybe<TagOrderByWithRelationInput>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ClubTagScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  TagId = 'tagId',
  UpdatedAt = 'updatedAt'
}

export type ClubTagScalarWhereInput = {
  AND?: InputMaybe<Array<ClubTagScalarWhereInput>>;
  NOT?: InputMaybe<Array<ClubTagScalarWhereInput>>;
  OR?: InputMaybe<Array<ClubTagScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubTagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ClubTagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ClubTagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ClubTagScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  tagId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ClubTagSumAggregate = {
  __typename?: 'ClubTagSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
};

export type ClubTagSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
};

export type ClubTagUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubtagsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutClubTagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubTagUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubTagUpdateManyWithWhereWithoutClubInput = {
  data: ClubTagUpdateManyMutationInput;
  where: ClubTagScalarWhereInput;
};

export type ClubTagUpdateManyWithWhereWithoutTagInput = {
  data: ClubTagUpdateManyMutationInput;
  where: ClubTagScalarWhereInput;
};

export type ClubTagUpdateManyWithoutClubInput = {
  connect?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubTagCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<ClubTagCreateWithoutClubInput>>;
  createMany?: InputMaybe<ClubTagCreateManyClubInputEnvelope>;
  delete?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubTagUpdateWithWhereUniqueWithoutClubInput>>;
  updateMany?: InputMaybe<Array<ClubTagUpdateManyWithWhereWithoutClubInput>>;
  upsert?: InputMaybe<Array<ClubTagUpsertWithWhereUniqueWithoutClubInput>>;
};

export type ClubTagUpdateManyWithoutTagInput = {
  connect?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ClubTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<ClubTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<ClubTagCreateManyTagInputEnvelope>;
  delete?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ClubTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  set?: InputMaybe<Array<ClubTagWhereUniqueInput>>;
  update?: InputMaybe<Array<ClubTagUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: InputMaybe<Array<ClubTagUpdateManyWithWhereWithoutTagInput>>;
  upsert?: InputMaybe<Array<ClubTagUpsertWithWhereUniqueWithoutTagInput>>;
};

export type ClubTagUpdateWithWhereUniqueWithoutClubInput = {
  data: ClubTagUpdateWithoutClubInput;
  where: ClubTagWhereUniqueInput;
};

export type ClubTagUpdateWithWhereUniqueWithoutTagInput = {
  data: ClubTagUpdateWithoutTagInput;
  where: ClubTagWhereUniqueInput;
};

export type ClubTagUpdateWithoutClubInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutClubTagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubTagUpdateWithoutTagInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutClubtagsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubTagUpsertWithWhereUniqueWithoutClubInput = {
  create: ClubTagCreateWithoutClubInput;
  update: ClubTagUpdateWithoutClubInput;
  where: ClubTagWhereUniqueInput;
};

export type ClubTagUpsertWithWhereUniqueWithoutTagInput = {
  create: ClubTagCreateWithoutTagInput;
  update: ClubTagUpdateWithoutTagInput;
  where: ClubTagWhereUniqueInput;
};

export type ClubTagWhereInput = {
  AND?: InputMaybe<Array<ClubTagWhereInput>>;
  NOT?: InputMaybe<Array<ClubTagWhereInput>>;
  OR?: InputMaybe<Array<ClubTagWhereInput>>;
  club?: InputMaybe<ClubRelationFilter>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  tag?: InputMaybe<TagRelationFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubTagWhereUniqueInput = {
  clubId_tagId?: InputMaybe<ClubTagClubIdTagIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ClubUpdateInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagUpdateManyWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateOneRequiredWithoutClubCoordinatorInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubCoordinatorInput>;
  create?: InputMaybe<ClubCreateWithoutClubCoordinatorInput>;
  update?: InputMaybe<ClubUpdateWithoutClubCoordinatorInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubCoordinatorInput>;
};

export type ClubUpdateOneRequiredWithoutClubEventsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubEventsInput>;
  create?: InputMaybe<ClubCreateWithoutClubEventsInput>;
  update?: InputMaybe<ClubUpdateWithoutClubEventsInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubEventsInput>;
};

export type ClubUpdateOneRequiredWithoutClubMemberInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubMemberInput>;
  create?: InputMaybe<ClubCreateWithoutClubMemberInput>;
  update?: InputMaybe<ClubUpdateWithoutClubMemberInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubMemberInput>;
};

export type ClubUpdateOneRequiredWithoutClubNotificationsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubNotificationsInput>;
  create?: InputMaybe<ClubCreateWithoutClubNotificationsInput>;
  update?: InputMaybe<ClubUpdateWithoutClubNotificationsInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubNotificationsInput>;
};

export type ClubUpdateOneRequiredWithoutClubRankInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubRankInput>;
  create?: InputMaybe<ClubCreateWithoutClubRankInput>;
  update?: InputMaybe<ClubUpdateWithoutClubRankInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubRankInput>;
};

export type ClubUpdateOneRequiredWithoutClubtagsInput = {
  connect?: InputMaybe<ClubWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ClubCreateOrConnectWithoutClubtagsInput>;
  create?: InputMaybe<ClubCreateWithoutClubtagsInput>;
  update?: InputMaybe<ClubUpdateWithoutClubtagsInput>;
  upsert?: InputMaybe<ClubUpsertWithoutClubtagsInput>;
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

export type ClubUpdateWithoutClubCoordinatorInput = {
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagUpdateManyWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubEventsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagUpdateManyWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubMemberInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagUpdateManyWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubNotificationsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagUpdateManyWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubRankInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationUpdateManyWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagUpdateManyWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutClubtagsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutOtpInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagUpdateManyWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpdateWithoutSubscriptionInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutClubInput>;
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutClubInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutClubInput>;
  clubNotifications?: InputMaybe<ClubNotificationUpdateManyWithoutClubInput>;
  clubRank?: InputMaybe<ClubRankUpdateOneWithoutClubInput>;
  clubtags?: InputMaybe<ClubTagUpdateManyWithoutClubInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  otp?: InputMaybe<OtpUpdateOneWithoutClubInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ClubUpsertWithoutClubCoordinatorInput = {
  create: ClubCreateWithoutClubCoordinatorInput;
  update: ClubUpdateWithoutClubCoordinatorInput;
};

export type ClubUpsertWithoutClubEventsInput = {
  create: ClubCreateWithoutClubEventsInput;
  update: ClubUpdateWithoutClubEventsInput;
};

export type ClubUpsertWithoutClubMemberInput = {
  create: ClubCreateWithoutClubMemberInput;
  update: ClubUpdateWithoutClubMemberInput;
};

export type ClubUpsertWithoutClubNotificationsInput = {
  create: ClubCreateWithoutClubNotificationsInput;
  update: ClubUpdateWithoutClubNotificationsInput;
};

export type ClubUpsertWithoutClubRankInput = {
  create: ClubCreateWithoutClubRankInput;
  update: ClubUpdateWithoutClubRankInput;
};

export type ClubUpsertWithoutClubtagsInput = {
  create: ClubCreateWithoutClubtagsInput;
  update: ClubUpdateWithoutClubtagsInput;
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
  clubEvents?: InputMaybe<ClubEventListRelationFilter>;
  clubMember?: InputMaybe<ClubMemberListRelationFilter>;
  clubNotifications?: InputMaybe<ClubNotificationListRelationFilter>;
  clubRank?: InputMaybe<ClubRankRelationFilter>;
  clubtags?: InputMaybe<ClubTagListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringFilter>;
  links?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  otp?: InputMaybe<OtpRelationFilter>;
  subscription?: InputMaybe<SubscriptionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ClubWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
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
  clubEvents: Array<ClubEvent>;
  createdAt: Scalars['DateTime'];
  deadline?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  image: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  postions: Array<Position>;
  rsvpEvent: Array<RsvpEvent>;
  updatedAt: Scalars['DateTime'];
  venue?: Maybe<Scalars['String']>;
  votes: Array<Vote>;
};


export type EventClubEventsArgs = {
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
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

export type EventAvgAggregate = {
  __typename?: 'EventAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type EventAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type EventCount = {
  __typename?: 'EventCount';
  clubEvents: Scalars['Int'];
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
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutEventInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postions?: InputMaybe<PositionCreateNestedManyWithoutEventInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutEventInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  venue?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutEventInput>;
};

export type EventCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  venue?: InputMaybe<Scalars['String']>;
};

export type EventCreateNestedOneWithoutClubEventsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutClubEventsInput>;
  create?: InputMaybe<EventCreateWithoutClubEventsInput>;
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

export type EventCreateOrConnectWithoutClubEventsInput = {
  create: EventCreateWithoutClubEventsInput;
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

export type EventCreateWithoutClubEventsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
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
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutEventInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutEventInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  venue?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutEventInput>;
};

export type EventCreateWithoutRsvpEventInput = {
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutEventInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  postions?: InputMaybe<PositionCreateNestedManyWithoutEventInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  venue?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutEventInput>;
};

export type EventCreateWithoutVotesInput = {
  clubEvents?: InputMaybe<ClubEventCreateNestedManyWithoutEventInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: InputMaybe<Scalars['DateTime']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']>;
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
  _avg?: Maybe<EventAvgAggregate>;
  _count?: Maybe<EventCountAggregate>;
  _max?: Maybe<EventMaxAggregate>;
  _min?: Maybe<EventMinAggregate>;
  _sum?: Maybe<EventSumAggregate>;
  createdAt: Scalars['DateTime'];
  deadline?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  image: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  venue?: Maybe<Scalars['String']>;
};

export type EventMaxAggregate = {
  __typename?: 'EventMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  eventEndDate?: Maybe<Scalars['DateTime']>;
  eventStartDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
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
  id?: Maybe<Scalars['Int']>;
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

export type EventOrderByWithAggregationInput = {
  _avg?: InputMaybe<EventAvgOrderByAggregateInput>;
  _count?: InputMaybe<EventCountOrderByAggregateInput>;
  _max?: InputMaybe<EventMaxOrderByAggregateInput>;
  _min?: InputMaybe<EventMinOrderByAggregateInput>;
  _sum?: InputMaybe<EventSumOrderByAggregateInput>;
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
  clubEvents?: InputMaybe<ClubEventOrderByRelationAggregateInput>;
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
  id?: InputMaybe<IntWithAggregatesFilter>;
  image?: InputMaybe<StringWithAggregatesFilter>;
  link?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  venue?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type EventSumAggregate = {
  __typename?: 'EventSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type EventSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type EventUpdateInput = {
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutEventInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
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
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateOneRequiredWithoutClubEventsInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutClubEventsInput>;
  create?: InputMaybe<EventCreateWithoutClubEventsInput>;
  update?: InputMaybe<EventUpdateWithoutClubEventsInput>;
  upsert?: InputMaybe<EventUpsertWithoutClubEventsInput>;
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

export type EventUpdateWithoutClubEventsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
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
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutEventInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutEventInput>;
};

export type EventUpdateWithoutRsvpEventInput = {
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutEventInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  postions?: InputMaybe<PositionUpdateManyWithoutEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutEventInput>;
};

export type EventUpdateWithoutVotesInput = {
  clubEvents?: InputMaybe<ClubEventUpdateManyWithoutEventInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  eventEndDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventStartDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<StringFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  postions?: InputMaybe<PositionUpdateManyWithoutEventInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  venue?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpsertWithoutClubEventsInput = {
  create: EventCreateWithoutClubEventsInput;
  update: EventUpdateWithoutClubEventsInput;
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
  clubEvents?: InputMaybe<ClubEventListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deadline?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  eventEndDate?: InputMaybe<DateTimeNullableFilter>;
  eventStartDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
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
  id?: InputMaybe<Scalars['Int']>;
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
  createClubEvent: ClubEvent;
  createClubMember: ClubMember;
  createClubNotification: ClubNotification;
  createClubRank: ClubRank;
  createClubTag: ClubTag;
  createEvent: Event;
  createManyClub: AffectedRowsOutput;
  createManyClubCoordinator: AffectedRowsOutput;
  createManyClubEvent: AffectedRowsOutput;
  createManyClubMember: AffectedRowsOutput;
  createManyClubNotification: AffectedRowsOutput;
  createManyClubRank: AffectedRowsOutput;
  createManyClubTag: AffectedRowsOutput;
  createManyEvent: AffectedRowsOutput;
  createManyNotification: AffectedRowsOutput;
  createManyOTP: AffectedRowsOutput;
  createManyPosition: AffectedRowsOutput;
  createManyRSVPEvent: AffectedRowsOutput;
  createManyStudentRank: AffectedRowsOutput;
  createManySubscription: AffectedRowsOutput;
  createManyTag: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserNotification: AffectedRowsOutput;
  createManyUserTag: AffectedRowsOutput;
  createManyVote: AffectedRowsOutput;
  createNotification: Notification;
  createOTP: Otp;
  createPosition: Position;
  createRSVPEvent: RsvpEvent;
  createStudentRank: StudentRank;
  createSubscription: Subscription;
  createTag: Tag;
  createUser: User;
  createUserNotification: UserNotification;
  createUserTag: UserTag;
  createVote: Vote;
  deleteClub?: Maybe<Club>;
  deleteClubCoordinator?: Maybe<ClubCoordinator>;
  deleteClubEvent?: Maybe<ClubEvent>;
  deleteClubMember?: Maybe<ClubMember>;
  deleteClubNotification?: Maybe<ClubNotification>;
  deleteClubRank?: Maybe<ClubRank>;
  deleteClubTag?: Maybe<ClubTag>;
  deleteEvent?: Maybe<Event>;
  deleteManyClub: AffectedRowsOutput;
  deleteManyClubCoordinator: AffectedRowsOutput;
  deleteManyClubEvent: AffectedRowsOutput;
  deleteManyClubMember: AffectedRowsOutput;
  deleteManyClubNotification: AffectedRowsOutput;
  deleteManyClubRank: AffectedRowsOutput;
  deleteManyClubTag: AffectedRowsOutput;
  deleteManyEvent: AffectedRowsOutput;
  deleteManyNotification: AffectedRowsOutput;
  deleteManyOTP: AffectedRowsOutput;
  deleteManyPosition: AffectedRowsOutput;
  deleteManyRSVPEvent: AffectedRowsOutput;
  deleteManyStudentRank: AffectedRowsOutput;
  deleteManySubscription: AffectedRowsOutput;
  deleteManyTag: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserNotification: AffectedRowsOutput;
  deleteManyUserTag: AffectedRowsOutput;
  deleteManyVote: AffectedRowsOutput;
  deleteNotification?: Maybe<Notification>;
  deleteOTP?: Maybe<Otp>;
  deletePosition?: Maybe<Position>;
  deleteRSVPEvent?: Maybe<RsvpEvent>;
  deleteStudentRank?: Maybe<StudentRank>;
  deleteSubscription?: Maybe<Subscription>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  deleteUserNotification?: Maybe<UserNotification>;
  deleteUserTag?: Maybe<UserTag>;
  deleteVote?: Maybe<Vote>;
  login: Auth;
  updateClub?: Maybe<Club>;
  updateClubCoordinator?: Maybe<ClubCoordinator>;
  updateClubEvent?: Maybe<ClubEvent>;
  updateClubMember?: Maybe<ClubMember>;
  updateClubNotification?: Maybe<ClubNotification>;
  updateClubRank?: Maybe<ClubRank>;
  updateClubTag?: Maybe<ClubTag>;
  updateEvent?: Maybe<Event>;
  updateManyClub: AffectedRowsOutput;
  updateManyClubCoordinator: AffectedRowsOutput;
  updateManyClubEvent: AffectedRowsOutput;
  updateManyClubMember: AffectedRowsOutput;
  updateManyClubNotification: AffectedRowsOutput;
  updateManyClubRank: AffectedRowsOutput;
  updateManyClubTag: AffectedRowsOutput;
  updateManyEvent: AffectedRowsOutput;
  updateManyNotification: AffectedRowsOutput;
  updateManyOTP: AffectedRowsOutput;
  updateManyPosition: AffectedRowsOutput;
  updateManyRSVPEvent: AffectedRowsOutput;
  updateManyStudentRank: AffectedRowsOutput;
  updateManySubscription: AffectedRowsOutput;
  updateManyTag: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserNotification: AffectedRowsOutput;
  updateManyUserTag: AffectedRowsOutput;
  updateManyVote: AffectedRowsOutput;
  updateNotification?: Maybe<Notification>;
  updateOTP?: Maybe<Otp>;
  updatePosition?: Maybe<Position>;
  updateRSVPEvent?: Maybe<RsvpEvent>;
  updateStudentRank?: Maybe<StudentRank>;
  updateSubscription?: Maybe<Subscription>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  updateUserNotification?: Maybe<UserNotification>;
  updateUserTag?: Maybe<UserTag>;
  updateVote?: Maybe<Vote>;
  upload: Image;
  upsertClub: Club;
  upsertClubCoordinator: ClubCoordinator;
  upsertClubEvent: ClubEvent;
  upsertClubMember: ClubMember;
  upsertClubNotification: ClubNotification;
  upsertClubRank: ClubRank;
  upsertClubTag: ClubTag;
  upsertEvent: Event;
  upsertNotification: Notification;
  upsertOTP: Otp;
  upsertPosition: Position;
  upsertRSVPEvent: RsvpEvent;
  upsertStudentRank: StudentRank;
  upsertSubscription: Subscription;
  upsertTag: Tag;
  upsertUser: User;
  upsertUserNotification: UserNotification;
  upsertUserTag: UserTag;
  upsertVote: Vote;
};


export type MutationCreateClubArgs = {
  data: ClubCreateInput;
};


export type MutationCreateClubCoordinatorArgs = {
  data: ClubCoordinatorCreateInput;
};


export type MutationCreateClubEventArgs = {
  data: ClubEventCreateInput;
};


export type MutationCreateClubMemberArgs = {
  data: ClubMemberCreateInput;
};


export type MutationCreateClubNotificationArgs = {
  data: ClubNotificationCreateInput;
};


export type MutationCreateClubRankArgs = {
  data: ClubRankCreateInput;
};


export type MutationCreateClubTagArgs = {
  data: ClubTagCreateInput;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateManyClubArgs = {
  data: Array<ClubCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubCoordinatorArgs = {
  data: Array<ClubCoordinatorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubEventArgs = {
  data: Array<ClubEventCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubMemberArgs = {
  data: Array<ClubMemberCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubNotificationArgs = {
  data: Array<ClubNotificationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubRankArgs = {
  data: Array<ClubRankCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyClubTagArgs = {
  data: Array<ClubTagCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyEventArgs = {
  data: Array<EventCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyNotificationArgs = {
  data: Array<NotificationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyOtpArgs = {
  data: Array<OtpCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPositionArgs = {
  data: Array<PositionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyRsvpEventArgs = {
  data: Array<RsvpEventCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyStudentRankArgs = {
  data: Array<StudentRankCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySubscriptionArgs = {
  data: Array<SubscriptionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTagArgs = {
  data: Array<TagCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserNotificationArgs = {
  data: Array<UserNotificationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserTagArgs = {
  data: Array<UserTagCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyVoteArgs = {
  data: Array<VoteCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
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


export type MutationCreateUserNotificationArgs = {
  data: UserNotificationCreateInput;
};


export type MutationCreateUserTagArgs = {
  data: UserTagCreateInput;
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


export type MutationDeleteClubEventArgs = {
  where: ClubEventWhereUniqueInput;
};


export type MutationDeleteClubMemberArgs = {
  where: ClubMemberWhereUniqueInput;
};


export type MutationDeleteClubNotificationArgs = {
  where: ClubNotificationWhereUniqueInput;
};


export type MutationDeleteClubRankArgs = {
  where: ClubRankWhereUniqueInput;
};


export type MutationDeleteClubTagArgs = {
  where: ClubTagWhereUniqueInput;
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


export type MutationDeleteManyClubEventArgs = {
  where?: InputMaybe<ClubEventWhereInput>;
};


export type MutationDeleteManyClubMemberArgs = {
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type MutationDeleteManyClubNotificationArgs = {
  where?: InputMaybe<ClubNotificationWhereInput>;
};


export type MutationDeleteManyClubRankArgs = {
  where?: InputMaybe<ClubRankWhereInput>;
};


export type MutationDeleteManyClubTagArgs = {
  where?: InputMaybe<ClubTagWhereInput>;
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


export type MutationDeleteManyUserNotificationArgs = {
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type MutationDeleteManyUserTagArgs = {
  where?: InputMaybe<UserTagWhereInput>;
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


export type MutationDeleteUserNotificationArgs = {
  where: UserNotificationWhereUniqueInput;
};


export type MutationDeleteUserTagArgs = {
  where: UserTagWhereUniqueInput;
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


export type MutationUpdateClubEventArgs = {
  data: ClubEventUpdateInput;
  where: ClubEventWhereUniqueInput;
};


export type MutationUpdateClubMemberArgs = {
  data: ClubMemberUpdateInput;
  where: ClubMemberWhereUniqueInput;
};


export type MutationUpdateClubNotificationArgs = {
  data: ClubNotificationUpdateInput;
  where: ClubNotificationWhereUniqueInput;
};


export type MutationUpdateClubRankArgs = {
  data: ClubRankUpdateInput;
  where: ClubRankWhereUniqueInput;
};


export type MutationUpdateClubTagArgs = {
  data: ClubTagUpdateInput;
  where: ClubTagWhereUniqueInput;
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


export type MutationUpdateManyClubEventArgs = {
  data: ClubEventUpdateManyMutationInput;
  where?: InputMaybe<ClubEventWhereInput>;
};


export type MutationUpdateManyClubMemberArgs = {
  data: ClubMemberUpdateManyMutationInput;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type MutationUpdateManyClubNotificationArgs = {
  data: ClubNotificationUpdateManyMutationInput;
  where?: InputMaybe<ClubNotificationWhereInput>;
};


export type MutationUpdateManyClubRankArgs = {
  data: ClubRankUpdateManyMutationInput;
  where?: InputMaybe<ClubRankWhereInput>;
};


export type MutationUpdateManyClubTagArgs = {
  data: ClubTagUpdateManyMutationInput;
  where?: InputMaybe<ClubTagWhereInput>;
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


export type MutationUpdateManyUserNotificationArgs = {
  data: UserNotificationUpdateManyMutationInput;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type MutationUpdateManyUserTagArgs = {
  data: UserTagUpdateManyMutationInput;
  where?: InputMaybe<UserTagWhereInput>;
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


export type MutationUpdateUserNotificationArgs = {
  data: UserNotificationUpdateInput;
  where: UserNotificationWhereUniqueInput;
};


export type MutationUpdateUserTagArgs = {
  data: UserTagUpdateInput;
  where: UserTagWhereUniqueInput;
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


export type MutationUpsertClubEventArgs = {
  create: ClubEventCreateInput;
  update: ClubEventUpdateInput;
  where: ClubEventWhereUniqueInput;
};


export type MutationUpsertClubMemberArgs = {
  create: ClubMemberCreateInput;
  update: ClubMemberUpdateInput;
  where: ClubMemberWhereUniqueInput;
};


export type MutationUpsertClubNotificationArgs = {
  create: ClubNotificationCreateInput;
  update: ClubNotificationUpdateInput;
  where: ClubNotificationWhereUniqueInput;
};


export type MutationUpsertClubRankArgs = {
  create: ClubRankCreateInput;
  update: ClubRankUpdateInput;
  where: ClubRankWhereUniqueInput;
};


export type MutationUpsertClubTagArgs = {
  create: ClubTagCreateInput;
  update: ClubTagUpdateInput;
  where: ClubTagWhereUniqueInput;
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


export type MutationUpsertUserNotificationArgs = {
  create: UserNotificationCreateInput;
  update: UserNotificationUpdateInput;
  where: UserNotificationWhereUniqueInput;
};


export type MutationUpsertUserTagArgs = {
  create: UserTagCreateInput;
  update: UserTagUpdateInput;
  where: UserTagWhereUniqueInput;
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
  createdAt: Scalars['DateTime'];
  createdBy: Array<ClubNotification>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userNotifications: Array<UserNotification>;
};


export type NotificationCreatedByArgs = {
  cursor?: InputMaybe<ClubNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubNotificationWhereInput>;
};


export type NotificationUserNotificationsArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};

export type NotificationAvgAggregate = {
  __typename?: 'NotificationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type NotificationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NotificationCount = {
  __typename?: 'NotificationCount';
  createdBy: Scalars['Int'];
  userNotifications: Scalars['Int'];
};

export type NotificationCountAggregate = {
  __typename?: 'NotificationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type NotificationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NotificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<ClubNotificationCreateNestedManyWithoutNotificationInput>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  message: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutNotificationInput>;
};

export type NotificationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  message: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationCreateNestedOneWithoutCreatedByInput = {
  connect?: InputMaybe<NotificationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NotificationCreateOrConnectWithoutCreatedByInput>;
  create?: InputMaybe<NotificationCreateWithoutCreatedByInput>;
};

export type NotificationCreateNestedOneWithoutUserNotificationsInput = {
  connect?: InputMaybe<NotificationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NotificationCreateOrConnectWithoutUserNotificationsInput>;
  create?: InputMaybe<NotificationCreateWithoutUserNotificationsInput>;
};

export type NotificationCreateOrConnectWithoutCreatedByInput = {
  create: NotificationCreateWithoutCreatedByInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateOrConnectWithoutUserNotificationsInput = {
  create: NotificationCreateWithoutUserNotificationsInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationCreateWithoutCreatedByInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  message: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutNotificationInput>;
};

export type NotificationCreateWithoutUserNotificationsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<ClubNotificationCreateNestedManyWithoutNotificationInput>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  message: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NotificationGroupBy = {
  __typename?: 'NotificationGroupBy';
  _avg?: Maybe<NotificationAvgAggregate>;
  _count?: Maybe<NotificationCountAggregate>;
  _max?: Maybe<NotificationMaxAggregate>;
  _min?: Maybe<NotificationMinAggregate>;
  _sum?: Maybe<NotificationSumAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NotificationMaxAggregate = {
  __typename?: 'NotificationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NotificationMinAggregate = {
  __typename?: 'NotificationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithAggregationInput = {
  _avg?: InputMaybe<NotificationAvgOrderByAggregateInput>;
  _count?: InputMaybe<NotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<NotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<NotificationMinOrderByAggregateInput>;
  _sum?: InputMaybe<NotificationSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type NotificationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<ClubNotificationOrderByRelationAggregateInput>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userNotifications?: InputMaybe<UserNotificationOrderByRelationAggregateInput>;
};

export type NotificationRelationFilter = {
  is?: InputMaybe<NotificationWhereInput>;
  isNot?: InputMaybe<NotificationWhereInput>;
};

export enum NotificationScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Message = 'message',
  UpdatedAt = 'updatedAt'
}

export type NotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<NotificationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type NotificationSumAggregate = {
  __typename?: 'NotificationSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type NotificationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type NotificationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<ClubNotificationUpdateManyWithoutNotificationInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutNotificationInput>;
};

export type NotificationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpdateOneRequiredWithoutCreatedByInput = {
  connect?: InputMaybe<NotificationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NotificationCreateOrConnectWithoutCreatedByInput>;
  create?: InputMaybe<NotificationCreateWithoutCreatedByInput>;
  update?: InputMaybe<NotificationUpdateWithoutCreatedByInput>;
  upsert?: InputMaybe<NotificationUpsertWithoutCreatedByInput>;
};

export type NotificationUpdateOneRequiredWithoutUserNotificationsInput = {
  connect?: InputMaybe<NotificationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NotificationCreateOrConnectWithoutUserNotificationsInput>;
  create?: InputMaybe<NotificationCreateWithoutUserNotificationsInput>;
  update?: InputMaybe<NotificationUpdateWithoutUserNotificationsInput>;
  upsert?: InputMaybe<NotificationUpsertWithoutUserNotificationsInput>;
};

export type NotificationUpdateWithoutCreatedByInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutNotificationInput>;
};

export type NotificationUpdateWithoutUserNotificationsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: InputMaybe<ClubNotificationUpdateManyWithoutNotificationInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type NotificationUpsertWithoutCreatedByInput = {
  create: NotificationCreateWithoutCreatedByInput;
  update: NotificationUpdateWithoutCreatedByInput;
};

export type NotificationUpsertWithoutUserNotificationsInput = {
  create: NotificationCreateWithoutUserNotificationsInput;
  update: NotificationUpdateWithoutUserNotificationsInput;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<ClubNotificationListRelationFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userNotifications?: InputMaybe<UserNotificationListRelationFilter>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
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
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  id: Scalars['Int'];
  otp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OtpAvgAggregate = {
  __typename?: 'OTPAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type OtpAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type OtpCountAggregate = {
  __typename?: 'OTPCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  expiredAt: Scalars['Int'];
  id: Scalars['Int'];
  otp: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type OtpCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OtpCreateInput = {
  club: ClubCreateNestedOneWithoutOtpInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  otp: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OtpCreateManyInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
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
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  otp: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OtpGroupBy = {
  __typename?: 'OTPGroupBy';
  _avg?: Maybe<OtpAvgAggregate>;
  _count?: Maybe<OtpCountAggregate>;
  _max?: Maybe<OtpMaxAggregate>;
  _min?: Maybe<OtpMinAggregate>;
  _sum?: Maybe<OtpSumAggregate>;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  id: Scalars['Int'];
  otp: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OtpMaxAggregate = {
  __typename?: 'OTPMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  otp?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OtpMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OtpMinAggregate = {
  __typename?: 'OTPMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  otp?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OtpMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OtpOrderByWithAggregationInput = {
  _avg?: InputMaybe<OtpAvgOrderByAggregateInput>;
  _count?: InputMaybe<OtpCountOrderByAggregateInput>;
  _max?: InputMaybe<OtpMaxOrderByAggregateInput>;
  _min?: InputMaybe<OtpMinOrderByAggregateInput>;
  _sum?: InputMaybe<OtpSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  otp?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OtpOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
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
  DeletedAt = 'deletedAt',
  ExpiredAt = 'expiredAt',
  Id = 'id',
  Otp = 'otp',
  UpdatedAt = 'updatedAt'
}

export type OtpScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OtpScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OtpScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OtpScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  expiredAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  otp?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type OtpSumAggregate = {
  __typename?: 'OTPSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type OtpSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type OtpUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutOtpInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  otp?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OtpUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  otp?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OtpWhereUniqueInput = {
  clubId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Position = {
  __typename?: 'Position';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  event: Event;
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  money?: Maybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type PositionAvgAggregate = {
  __typename?: 'PositionAvgAggregate';
  eventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  money?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type PositionAvgOrderByAggregateInput = {
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PositionCountAggregate = {
  __typename?: 'PositionCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  money: Scalars['Int'];
  position: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type PositionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PositionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutPostionsInput;
  money?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPositionsInput;
};

export type PositionCreateManyEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  money?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PositionCreateManyEventInputEnvelope = {
  data: Array<PositionCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PositionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  money?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type PositionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  money?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PositionCreateManyUserInputEnvelope = {
  data: Array<PositionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PositionCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<PositionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PositionCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<PositionCreateWithoutEventInput>>;
  createMany?: InputMaybe<PositionCreateManyEventInputEnvelope>;
};

export type PositionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PositionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PositionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PositionCreateWithoutUserInput>>;
  createMany?: InputMaybe<PositionCreateManyUserInputEnvelope>;
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
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  money?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutPositionsInput;
};

export type PositionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutPostionsInput;
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
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  money?: Maybe<Scalars['Int']>;
  position: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type PositionListRelationFilter = {
  every?: InputMaybe<PositionWhereInput>;
  none?: InputMaybe<PositionWhereInput>;
  some?: InputMaybe<PositionWhereInput>;
};

export type PositionMaxAggregate = {
  __typename?: 'PositionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  money?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PositionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PositionMinAggregate = {
  __typename?: 'PositionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  money?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PositionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
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
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PositionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  event?: InputMaybe<EventOrderByWithRelationInput>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum PositionScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EventId = 'eventId',
  Id = 'id',
  Money = 'money',
  Position = 'position',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type PositionScalarWhereInput = {
  AND?: InputMaybe<Array<PositionScalarWhereInput>>;
  NOT?: InputMaybe<Array<PositionScalarWhereInput>>;
  OR?: InputMaybe<Array<PositionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  money?: InputMaybe<IntNullableFilter>;
  position?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PositionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PositionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PositionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PositionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  eventId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  money?: InputMaybe<IntNullableWithAggregatesFilter>;
  position?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type PositionSumAggregate = {
  __typename?: 'PositionSumAggregate';
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  money?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PositionSumOrderByAggregateInput = {
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  money?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PositionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutPostionsInput>;
  money?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPositionsInput>;
};

export type PositionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
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
  createMany?: InputMaybe<PositionCreateManyEventInputEnvelope>;
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
  createMany?: InputMaybe<PositionCreateManyUserInputEnvelope>;
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
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  money?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  position?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPositionsInput>;
};

export type PositionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutPostionsInput>;
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
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  money?: InputMaybe<IntNullableFilter>;
  position?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PositionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateClub: AggregateClub;
  aggregateClubCoordinator: AggregateClubCoordinator;
  aggregateClubEvent: AggregateClubEvent;
  aggregateClubMember: AggregateClubMember;
  aggregateClubNotification: AggregateClubNotification;
  aggregateClubRank: AggregateClubRank;
  aggregateClubTag: AggregateClubTag;
  aggregateEvent: AggregateEvent;
  aggregateNotification: AggregateNotification;
  aggregateOTP: AggregateOtp;
  aggregatePosition: AggregatePosition;
  aggregateRSVPEvent: AggregateRsvpEvent;
  aggregateStudentRank: AggregateStudentRank;
  aggregateSubscription: AggregateSubscription;
  aggregateTag: AggregateTag;
  aggregateUser: AggregateUser;
  aggregateUserNotification: AggregateUserNotification;
  aggregateUserTag: AggregateUserTag;
  aggregateVote: AggregateVote;
  club?: Maybe<Club>;
  clubCoordinator?: Maybe<ClubCoordinator>;
  clubCoordinators: Array<ClubCoordinator>;
  clubEvent?: Maybe<ClubEvent>;
  clubEvents: Array<ClubEvent>;
  clubMember?: Maybe<ClubMember>;
  clubMembers: Array<ClubMember>;
  clubNotification?: Maybe<ClubNotification>;
  clubNotifications: Array<ClubNotification>;
  clubRank?: Maybe<ClubRank>;
  clubRanks: Array<ClubRank>;
  clubTag?: Maybe<ClubTag>;
  clubTags: Array<ClubTag>;
  clubs: Array<Club>;
  event?: Maybe<Event>;
  events: Array<Event>;
  findFirstClub?: Maybe<Club>;
  findFirstClubCoordinator?: Maybe<ClubCoordinator>;
  findFirstClubEvent?: Maybe<ClubEvent>;
  findFirstClubMember?: Maybe<ClubMember>;
  findFirstClubNotification?: Maybe<ClubNotification>;
  findFirstClubRank?: Maybe<ClubRank>;
  findFirstClubTag?: Maybe<ClubTag>;
  findFirstEvent?: Maybe<Event>;
  findFirstNotification?: Maybe<Notification>;
  findFirstOTP?: Maybe<Otp>;
  findFirstPosition?: Maybe<Position>;
  findFirstRSVPEvent?: Maybe<RsvpEvent>;
  findFirstStudentRank?: Maybe<StudentRank>;
  findFirstSubscription?: Maybe<Subscription>;
  findFirstTag?: Maybe<Tag>;
  findFirstUser?: Maybe<User>;
  findFirstUserNotification?: Maybe<UserNotification>;
  findFirstUserTag?: Maybe<UserTag>;
  findFirstVote?: Maybe<Vote>;
  groupByClub: Array<ClubGroupBy>;
  groupByClubCoordinator: Array<ClubCoordinatorGroupBy>;
  groupByClubEvent: Array<ClubEventGroupBy>;
  groupByClubMember: Array<ClubMemberGroupBy>;
  groupByClubNotification: Array<ClubNotificationGroupBy>;
  groupByClubRank: Array<ClubRankGroupBy>;
  groupByClubTag: Array<ClubTagGroupBy>;
  groupByEvent: Array<EventGroupBy>;
  groupByNotification: Array<NotificationGroupBy>;
  groupByOTP: Array<OtpGroupBy>;
  groupByPosition: Array<PositionGroupBy>;
  groupByRSVPEvent: Array<RsvpEventGroupBy>;
  groupByStudentRank: Array<StudentRankGroupBy>;
  groupBySubscription: Array<SubscriptionGroupBy>;
  groupByTag: Array<TagGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserNotification: Array<UserNotificationGroupBy>;
  groupByUserTag: Array<UserTagGroupBy>;
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
  userNotification?: Maybe<UserNotification>;
  userNotifications: Array<UserNotification>;
  userTag?: Maybe<UserTag>;
  userTags: Array<UserTag>;
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


export type QueryAggregateClubEventArgs = {
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
};


export type QueryAggregateClubMemberArgs = {
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type QueryAggregateClubNotificationArgs = {
  cursor?: InputMaybe<ClubNotificationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubNotificationWhereInput>;
};


export type QueryAggregateClubRankArgs = {
  cursor?: InputMaybe<ClubRankWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubRankOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubRankWhereInput>;
};


export type QueryAggregateClubTagArgs = {
  cursor?: InputMaybe<ClubTagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ClubTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTagWhereInput>;
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


export type QueryAggregateUserNotificationArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryAggregateUserTagArgs = {
  cursor?: InputMaybe<UserTagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTagWhereInput>;
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


export type QueryClubEventArgs = {
  where: ClubEventWhereUniqueInput;
};


export type QueryClubEventsArgs = {
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
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


export type QueryClubNotificationArgs = {
  where: ClubNotificationWhereUniqueInput;
};


export type QueryClubNotificationsArgs = {
  cursor?: InputMaybe<ClubNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubNotificationWhereInput>;
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


export type QueryClubTagArgs = {
  where: ClubTagWhereUniqueInput;
};


export type QueryClubTagsArgs = {
  cursor?: InputMaybe<ClubTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTagWhereInput>;
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


export type QueryFindFirstClubEventArgs = {
  cursor?: InputMaybe<ClubEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
};


export type QueryFindFirstClubMemberArgs = {
  cursor?: InputMaybe<ClubMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type QueryFindFirstClubNotificationArgs = {
  cursor?: InputMaybe<ClubNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubNotificationWhereInput>;
};


export type QueryFindFirstClubRankArgs = {
  cursor?: InputMaybe<ClubRankWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubRankScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubRankOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubRankWhereInput>;
};


export type QueryFindFirstClubTagArgs = {
  cursor?: InputMaybe<ClubTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTagWhereInput>;
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


export type QueryFindFirstUserNotificationArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryFindFirstUserTagArgs = {
  cursor?: InputMaybe<UserTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTagWhereInput>;
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


export type QueryGroupByClubEventArgs = {
  by: Array<ClubEventScalarFieldEnum>;
  having?: InputMaybe<ClubEventScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubEventOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubEventWhereInput>;
};


export type QueryGroupByClubMemberArgs = {
  by: Array<ClubMemberScalarFieldEnum>;
  having?: InputMaybe<ClubMemberScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubMemberOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubMemberWhereInput>;
};


export type QueryGroupByClubNotificationArgs = {
  by: Array<ClubNotificationScalarFieldEnum>;
  having?: InputMaybe<ClubNotificationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubNotificationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubNotificationWhereInput>;
};


export type QueryGroupByClubRankArgs = {
  by: Array<ClubRankScalarFieldEnum>;
  having?: InputMaybe<ClubRankScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubRankOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubRankWhereInput>;
};


export type QueryGroupByClubTagArgs = {
  by: Array<ClubTagScalarFieldEnum>;
  having?: InputMaybe<ClubTagScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ClubTagOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTagWhereInput>;
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


export type QueryGroupByUserNotificationArgs = {
  by: Array<UserNotificationScalarFieldEnum>;
  having?: InputMaybe<UserNotificationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryGroupByUserTagArgs = {
  by: Array<UserTagScalarFieldEnum>;
  having?: InputMaybe<UserTagScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserTagOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTagWhereInput>;
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


export type QueryUserNotificationArgs = {
  where: UserNotificationWhereUniqueInput;
};


export type QueryUserNotificationsArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type QueryUserTagArgs = {
  where: UserTagWhereUniqueInput;
};


export type QueryUserTagsArgs = {
  cursor?: InputMaybe<UserTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTagWhereInput>;
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
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type RsvpEventAvgAggregate = {
  __typename?: 'RSVPEventAvgAggregate';
  eventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type RsvpEventAvgOrderByAggregateInput = {
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RsvpEventCountAggregate = {
  __typename?: 'RSVPEventCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type RsvpEventCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RsvpEventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutRsvpEventInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRsvpEventInput;
};

export type RsvpEventCreateManyEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type RsvpEventCreateManyEventInputEnvelope = {
  data: Array<RsvpEventCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RsvpEventCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type RsvpEventCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RsvpEventCreateManyUserInputEnvelope = {
  data: Array<RsvpEventCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RsvpEventCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RsvpEventCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<RsvpEventCreateWithoutEventInput>>;
  createMany?: InputMaybe<RsvpEventCreateManyEventInputEnvelope>;
};

export type RsvpEventCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RsvpEventWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RsvpEventCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RsvpEventCreateWithoutUserInput>>;
  createMany?: InputMaybe<RsvpEventCreateManyUserInputEnvelope>;
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
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRsvpEventInput;
};

export type RsvpEventCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutRsvpEventInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RsvpEventEventIdUserIdCompoundUniqueInput = {
  eventId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type RsvpEventGroupBy = {
  __typename?: 'RSVPEventGroupBy';
  _avg?: Maybe<RsvpEventAvgAggregate>;
  _count?: Maybe<RsvpEventCountAggregate>;
  _max?: Maybe<RsvpEventMaxAggregate>;
  _min?: Maybe<RsvpEventMinAggregate>;
  _sum?: Maybe<RsvpEventSumAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
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
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type RsvpEventMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RsvpEventMinAggregate = {
  __typename?: 'RSVPEventMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type RsvpEventMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RsvpEventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RsvpEventOrderByWithAggregationInput = {
  _avg?: InputMaybe<RsvpEventAvgOrderByAggregateInput>;
  _count?: InputMaybe<RsvpEventCountOrderByAggregateInput>;
  _max?: InputMaybe<RsvpEventMaxOrderByAggregateInput>;
  _min?: InputMaybe<RsvpEventMinOrderByAggregateInput>;
  _sum?: InputMaybe<RsvpEventSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RsvpEventOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  event?: InputMaybe<EventOrderByWithRelationInput>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum RsvpEventScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EventId = 'eventId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type RsvpEventScalarWhereInput = {
  AND?: InputMaybe<Array<RsvpEventScalarWhereInput>>;
  NOT?: InputMaybe<Array<RsvpEventScalarWhereInput>>;
  OR?: InputMaybe<Array<RsvpEventScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type RsvpEventScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RsvpEventScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RsvpEventScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RsvpEventScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  eventId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type RsvpEventSumAggregate = {
  __typename?: 'RSVPEventSumAggregate';
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type RsvpEventSumOrderByAggregateInput = {
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RsvpEventUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutRsvpEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRsvpEventInput>;
};

export type RsvpEventUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createMany?: InputMaybe<RsvpEventCreateManyEventInputEnvelope>;
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
  createMany?: InputMaybe<RsvpEventCreateManyUserInputEnvelope>;
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
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRsvpEventInput>;
};

export type RsvpEventUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutRsvpEventInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type RsvpEventWhereUniqueInput = {
  eventId_userId?: InputMaybe<RsvpEventEventIdUserIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
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
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  id: Scalars['Int'];
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type StudentRankAvgAggregate = {
  __typename?: 'StudentRankAvgAggregate';
  eventCount?: Maybe<Scalars['Float']>;
  firstCount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  moneyEarned?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  secondCount?: Maybe<Scalars['Float']>;
  thirdCount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type StudentRankAvgOrderByAggregateInput = {
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentRankCountAggregate = {
  __typename?: 'StudentRankCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  id: Scalars['Int'];
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type StudentRankCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentRankCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutStudentRankInput;
};

export type StudentRankCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
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
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StudentRankGroupBy = {
  __typename?: 'StudentRankGroupBy';
  _avg?: Maybe<StudentRankAvgAggregate>;
  _count?: Maybe<StudentRankCountAggregate>;
  _max?: Maybe<StudentRankMaxAggregate>;
  _min?: Maybe<StudentRankMinAggregate>;
  _sum?: Maybe<StudentRankSumAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventCount: Scalars['Int'];
  firstCount: Scalars['Int'];
  id: Scalars['Int'];
  moneyEarned: Scalars['Int'];
  rank: Scalars['Int'];
  secondCount: Scalars['Int'];
  thirdCount: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type StudentRankMaxAggregate = {
  __typename?: 'StudentRankMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventCount?: Maybe<Scalars['Int']>;
  firstCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  moneyEarned?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  secondCount?: Maybe<Scalars['Int']>;
  thirdCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type StudentRankMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentRankMinAggregate = {
  __typename?: 'StudentRankMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventCount?: Maybe<Scalars['Int']>;
  firstCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  moneyEarned?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  secondCount?: Maybe<Scalars['Int']>;
  thirdCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type StudentRankMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentRankOrderByWithAggregationInput = {
  _avg?: InputMaybe<StudentRankAvgOrderByAggregateInput>;
  _count?: InputMaybe<StudentRankCountOrderByAggregateInput>;
  _max?: InputMaybe<StudentRankMaxOrderByAggregateInput>;
  _min?: InputMaybe<StudentRankMinOrderByAggregateInput>;
  _sum?: InputMaybe<StudentRankSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentRankOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentRankRelationFilter = {
  is?: InputMaybe<StudentRankWhereInput>;
  isNot?: InputMaybe<StudentRankWhereInput>;
};

export enum StudentRankScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EventCount = 'eventCount',
  FirstCount = 'firstCount',
  Id = 'id',
  MoneyEarned = 'moneyEarned',
  Rank = 'rank',
  SecondCount = 'secondCount',
  ThirdCount = 'thirdCount',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type StudentRankScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StudentRankScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StudentRankScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StudentRankScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  eventCount?: InputMaybe<IntWithAggregatesFilter>;
  firstCount?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  moneyEarned?: InputMaybe<IntWithAggregatesFilter>;
  rank?: InputMaybe<IntWithAggregatesFilter>;
  secondCount?: InputMaybe<IntWithAggregatesFilter>;
  thirdCount?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type StudentRankSumAggregate = {
  __typename?: 'StudentRankSumAggregate';
  eventCount?: Maybe<Scalars['Int']>;
  firstCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  moneyEarned?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  secondCount?: Maybe<Scalars['Int']>;
  thirdCount?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type StudentRankSumOrderByAggregateInput = {
  eventCount?: InputMaybe<SortOrder>;
  firstCount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  moneyEarned?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  secondCount?: InputMaybe<SortOrder>;
  thirdCount?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentRankUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  moneyEarned?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  secondCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  thirdCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStudentRankInput>;
};

export type StudentRankUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  moneyEarned?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  secondCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  thirdCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  eventCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  firstCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  moneyEarned?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  secondCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  thirdCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StudentRankUpsertWithoutUserInput = {
  create: StudentRankCreateWithoutUserInput;
  update: StudentRankUpdateWithoutUserInput;
};

export type StudentRankWhereInput = {
  AND?: InputMaybe<Array<StudentRankWhereInput>>;
  NOT?: InputMaybe<Array<StudentRankWhereInput>>;
  OR?: InputMaybe<Array<StudentRankWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  eventCount?: InputMaybe<IntFilter>;
  firstCount?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  moneyEarned?: InputMaybe<IntFilter>;
  rank?: InputMaybe<IntFilter>;
  secondCount?: InputMaybe<IntFilter>;
  thirdCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type StudentRankWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  club: Club;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type SubscriptionAvgAggregate = {
  __typename?: 'SubscriptionAvgAggregate';
  clubId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type SubscriptionAvgOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionClubIdUserIdCompoundUniqueInput = {
  clubId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SubscriptionCountAggregate = {
  __typename?: 'SubscriptionCountAggregate';
  _all: Scalars['Int'];
  clubId: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SubscriptionCountOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionCreateInput = {
  club: ClubCreateNestedOneWithoutSubscriptionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSubscriptionInput;
};

export type SubscriptionCreateManyClubInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type SubscriptionCreateManyClubInputEnvelope = {
  data: Array<SubscriptionCreateManyClubInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SubscriptionCreateManyInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type SubscriptionCreateManyUserInput = {
  clubId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscriptionCreateManyUserInputEnvelope = {
  data: Array<SubscriptionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SubscriptionCreateNestedManyWithoutClubInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutClubInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutClubInput>>;
  createMany?: InputMaybe<SubscriptionCreateManyClubInputEnvelope>;
};

export type SubscriptionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SubscriptionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubscriptionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SubscriptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SubscriptionCreateManyUserInputEnvelope>;
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
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutSubscriptionInput;
};

export type SubscriptionCreateWithoutUserInput = {
  club: ClubCreateNestedOneWithoutSubscriptionInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscriptionGroupBy = {
  __typename?: 'SubscriptionGroupBy';
  _avg?: Maybe<SubscriptionAvgAggregate>;
  _count?: Maybe<SubscriptionCountAggregate>;
  _max?: Maybe<SubscriptionMaxAggregate>;
  _min?: Maybe<SubscriptionMinAggregate>;
  _sum?: Maybe<SubscriptionSumAggregate>;
  clubId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type SubscriptionListRelationFilter = {
  every?: InputMaybe<SubscriptionWhereInput>;
  none?: InputMaybe<SubscriptionWhereInput>;
  some?: InputMaybe<SubscriptionWhereInput>;
};

export type SubscriptionMaxAggregate = {
  __typename?: 'SubscriptionMaxAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SubscriptionMaxOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionMinAggregate = {
  __typename?: 'SubscriptionMinAggregate';
  clubId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SubscriptionMinOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByWithAggregationInput = {
  _avg?: InputMaybe<SubscriptionAvgOrderByAggregateInput>;
  _count?: InputMaybe<SubscriptionCountOrderByAggregateInput>;
  _max?: InputMaybe<SubscriptionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SubscriptionMinOrderByAggregateInput>;
  _sum?: InputMaybe<SubscriptionSumOrderByAggregateInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionOrderByWithRelationInput = {
  club?: InputMaybe<ClubOrderByWithRelationInput>;
  clubId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SubscriptionScalarFieldEnum {
  ClubId = 'clubId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SubscriptionScalarWhereInput = {
  AND?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  OR?: InputMaybe<Array<SubscriptionScalarWhereInput>>;
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SubscriptionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SubscriptionScalarWhereWithAggregatesInput>>;
  clubId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type SubscriptionSumAggregate = {
  __typename?: 'SubscriptionSumAggregate';
  clubId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type SubscriptionSumOrderByAggregateInput = {
  clubId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SubscriptionUpdateInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutSubscriptionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionInput>;
};

export type SubscriptionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createMany?: InputMaybe<SubscriptionCreateManyClubInputEnvelope>;
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
  createMany?: InputMaybe<SubscriptionCreateManyUserInputEnvelope>;
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
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSubscriptionInput>;
};

export type SubscriptionUpdateWithoutUserInput = {
  club?: InputMaybe<ClubUpdateOneRequiredWithoutSubscriptionInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  clubId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SubscriptionWhereUniqueInput = {
  clubId_userId?: InputMaybe<SubscriptionClubIdUserIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  _count?: Maybe<TagCount>;
  clubTags: Array<ClubTag>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userTags: Array<UserTag>;
};


export type TagClubTagsArgs = {
  cursor?: InputMaybe<ClubTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<ClubTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ClubTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClubTagWhereInput>;
};


export type TagUserTagsArgs = {
  cursor?: InputMaybe<UserTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTagWhereInput>;
};

export type TagAvgAggregate = {
  __typename?: 'TagAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TagAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TagCount = {
  __typename?: 'TagCount';
  clubTags: Scalars['Int'];
  userTags: Scalars['Int'];
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TagCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagCreateInput = {
  clubTags?: InputMaybe<ClubTagCreateNestedManyWithoutTagInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutTagInput>;
};

export type TagCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagCreateNestedOneWithoutClubTagsInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutClubTagsInput>;
  create?: InputMaybe<TagCreateWithoutClubTagsInput>;
};

export type TagCreateNestedOneWithoutUserTagsInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutUserTagsInput>;
  create?: InputMaybe<TagCreateWithoutUserTagsInput>;
};

export type TagCreateOrConnectWithoutClubTagsInput = {
  create: TagCreateWithoutClubTagsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateOrConnectWithoutUserTagsInput = {
  create: TagCreateWithoutUserTagsInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutClubTagsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutTagInput>;
};

export type TagCreateWithoutUserTagsInput = {
  clubTags?: InputMaybe<ClubTagCreateNestedManyWithoutTagInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  _avg?: Maybe<TagAvgAggregate>;
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
  _sum?: Maybe<TagSumAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TagMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagOrderByWithAggregationInput = {
  _avg?: InputMaybe<TagAvgOrderByAggregateInput>;
  _count?: InputMaybe<TagCountOrderByAggregateInput>;
  _max?: InputMaybe<TagMaxOrderByAggregateInput>;
  _min?: InputMaybe<TagMinOrderByAggregateInput>;
  _sum?: InputMaybe<TagSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TagOrderByWithRelationInput = {
  clubTags?: InputMaybe<ClubTagOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userTags?: InputMaybe<UserTagOrderByRelationAggregateInput>;
};

export type TagRelationFilter = {
  is?: InputMaybe<TagWhereInput>;
  isNot?: InputMaybe<TagWhereInput>;
};

export enum TagScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type TagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TagScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TagSumAggregate = {
  __typename?: 'TagSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TagSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TagUpdateInput = {
  clubTags?: InputMaybe<ClubTagUpdateManyWithoutTagInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutTagInput>;
};

export type TagUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpdateOneRequiredWithoutClubTagsInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutClubTagsInput>;
  create?: InputMaybe<TagCreateWithoutClubTagsInput>;
  update?: InputMaybe<TagUpdateWithoutClubTagsInput>;
  upsert?: InputMaybe<TagUpsertWithoutClubTagsInput>;
};

export type TagUpdateOneRequiredWithoutUserTagsInput = {
  connect?: InputMaybe<TagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TagCreateOrConnectWithoutUserTagsInput>;
  create?: InputMaybe<TagCreateWithoutUserTagsInput>;
  update?: InputMaybe<TagUpdateWithoutUserTagsInput>;
  upsert?: InputMaybe<TagUpsertWithoutUserTagsInput>;
};

export type TagUpdateWithoutClubTagsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutTagInput>;
};

export type TagUpdateWithoutUserTagsInput = {
  clubTags?: InputMaybe<ClubTagUpdateManyWithoutTagInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TagUpsertWithoutClubTagsInput = {
  create: TagCreateWithoutClubTagsInput;
  update: TagUpdateWithoutClubTagsInput;
};

export type TagUpsertWithoutUserTagsInput = {
  create: TagCreateWithoutUserTagsInput;
  update: TagUpdateWithoutUserTagsInput;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  clubTags?: InputMaybe<ClubTagListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userTags?: InputMaybe<UserTagListRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  clubCoordinator: Array<ClubCoordinator>;
  clubMember: Array<ClubMember>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  picture: Scalars['String'];
  positions: Array<Position>;
  rsvpEvent: Array<RsvpEvent>;
  studentRank?: Maybe<StudentRank>;
  subscription: Array<Subscription>;
  updatedAt: Scalars['DateTime'];
  userNotifications: Array<UserNotification>;
  userTags: Array<UserTag>;
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


export type UserUserNotificationsArgs = {
  cursor?: InputMaybe<UserNotificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserNotificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserNotificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserNotificationWhereInput>;
};


export type UserUserTagsArgs = {
  cursor?: InputMaybe<UserTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserTagWhereInput>;
};


export type UserVotesArgs = {
  cursor?: InputMaybe<VoteWhereUniqueInput>;
  distinct?: InputMaybe<Array<VoteScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VoteOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VoteWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  clubCoordinator: Scalars['Int'];
  clubMember: Scalars['Int'];
  positions: Scalars['Int'];
  rsvpEvent: Scalars['Int'];
  subscription: Scalars['Int'];
  userNotifications: Scalars['Int'];
  userTags: Scalars['Int'];
  votes: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  email: Scalars['Int'];
  expoToken: Scalars['Int'];
  id: Scalars['Int'];
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
  expoToken?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
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

export type UserCreateNestedOneWithoutUserNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutUserNotificationsInput>;
};

export type UserCreateNestedOneWithoutUserTagsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserTagsInput>;
  create?: InputMaybe<UserCreateWithoutUserTagsInput>;
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

export type UserCreateOrConnectWithoutUserNotificationsInput = {
  create: UserCreateWithoutUserNotificationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserTagsInput = {
  create: UserCreateWithoutUserTagsInput;
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
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutClubMemberInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutPositionsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutRsvpEventInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutStudentRankInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutSubscriptionInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserNotificationsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserTagsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  votes?: InputMaybe<VoteCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutVotesInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorCreateNestedManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: InputMaybe<Scalars['String']>;
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<PositionCreateNestedManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventCreateNestedManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankCreateNestedOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userNotifications?: InputMaybe<UserNotificationCreateNestedManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagCreateNestedManyWithoutUserInput>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  expoToken?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isOnBoarded: Scalars['Boolean'];
  jwtToken?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  picture: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  expoToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
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
  expoToken?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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
  expoToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
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
  expoToken?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isOnBoarded?: InputMaybe<SortOrder>;
  jwtToken?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserNotification = {
  __typename?: 'UserNotification';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  notification: Notification;
  notificationId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type UserNotificationAvgAggregate = {
  __typename?: 'UserNotificationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  notificationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type UserNotificationAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationCountAggregate = {
  __typename?: 'UserNotificationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  id: Scalars['Int'];
  notificationId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserNotificationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  notification: NotificationCreateNestedOneWithoutUserNotificationsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserNotificationsInput;
};

export type UserNotificationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  notificationId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type UserNotificationCreateManyNotificationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type UserNotificationCreateManyNotificationInputEnvelope = {
  data: Array<UserNotificationCreateManyNotificationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserNotificationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  notificationId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserNotificationCreateManyUserInputEnvelope = {
  data: Array<UserNotificationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserNotificationCreateNestedManyWithoutNotificationInput = {
  connect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserNotificationCreateOrConnectWithoutNotificationInput>>;
  create?: InputMaybe<Array<UserNotificationCreateWithoutNotificationInput>>;
  createMany?: InputMaybe<UserNotificationCreateManyNotificationInputEnvelope>;
};

export type UserNotificationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserNotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserNotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserNotificationCreateManyUserInputEnvelope>;
};

export type UserNotificationCreateOrConnectWithoutNotificationInput = {
  create: UserNotificationCreateWithoutNotificationInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationCreateOrConnectWithoutUserInput = {
  create: UserNotificationCreateWithoutUserInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationCreateWithoutNotificationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserNotificationsInput;
};

export type UserNotificationCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  notification: NotificationCreateNestedOneWithoutUserNotificationsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserNotificationGroupBy = {
  __typename?: 'UserNotificationGroupBy';
  _avg?: Maybe<UserNotificationAvgAggregate>;
  _count?: Maybe<UserNotificationCountAggregate>;
  _max?: Maybe<UserNotificationMaxAggregate>;
  _min?: Maybe<UserNotificationMinAggregate>;
  _sum?: Maybe<UserNotificationSumAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  notificationId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type UserNotificationListRelationFilter = {
  every?: InputMaybe<UserNotificationWhereInput>;
  none?: InputMaybe<UserNotificationWhereInput>;
  some?: InputMaybe<UserNotificationWhereInput>;
};

export type UserNotificationMaxAggregate = {
  __typename?: 'UserNotificationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  notificationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserNotificationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationMinAggregate = {
  __typename?: 'UserNotificationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  notificationId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserNotificationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationNotificationIdUserIdCompoundUniqueInput = {
  notificationId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserNotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserNotificationOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserNotificationAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserNotificationCountOrderByAggregateInput>;
  _max?: InputMaybe<UserNotificationMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserNotificationMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserNotificationSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notification?: InputMaybe<NotificationOrderByWithRelationInput>;
  notificationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserNotificationScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  NotificationId = 'notificationId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserNotificationScalarWhereInput = {
  AND?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  OR?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  notificationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserNotificationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserNotificationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserNotificationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserNotificationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  notificationId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserNotificationSumAggregate = {
  __typename?: 'UserNotificationSumAggregate';
  id?: Maybe<Scalars['Int']>;
  notificationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserNotificationSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  notificationId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserNotificationUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  notification?: InputMaybe<NotificationUpdateOneRequiredWithoutUserNotificationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserNotificationsInput>;
};

export type UserNotificationUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserNotificationUpdateManyWithWhereWithoutNotificationInput = {
  data: UserNotificationUpdateManyMutationInput;
  where: UserNotificationScalarWhereInput;
};

export type UserNotificationUpdateManyWithWhereWithoutUserInput = {
  data: UserNotificationUpdateManyMutationInput;
  where: UserNotificationScalarWhereInput;
};

export type UserNotificationUpdateManyWithoutNotificationInput = {
  connect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserNotificationCreateOrConnectWithoutNotificationInput>>;
  create?: InputMaybe<Array<UserNotificationCreateWithoutNotificationInput>>;
  createMany?: InputMaybe<UserNotificationCreateManyNotificationInputEnvelope>;
  delete?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<UserNotificationUpdateWithWhereUniqueWithoutNotificationInput>>;
  updateMany?: InputMaybe<Array<UserNotificationUpdateManyWithWhereWithoutNotificationInput>>;
  upsert?: InputMaybe<Array<UserNotificationUpsertWithWhereUniqueWithoutNotificationInput>>;
};

export type UserNotificationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserNotificationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserNotificationCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserNotificationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserNotificationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<UserNotificationWhereUniqueInput>>;
  update?: InputMaybe<Array<UserNotificationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserNotificationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserNotificationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserNotificationUpdateWithWhereUniqueWithoutNotificationInput = {
  data: UserNotificationUpdateWithoutNotificationInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationUpdateWithWhereUniqueWithoutUserInput = {
  data: UserNotificationUpdateWithoutUserInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationUpdateWithoutNotificationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserNotificationsInput>;
};

export type UserNotificationUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  notification?: InputMaybe<NotificationUpdateOneRequiredWithoutUserNotificationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserNotificationUpsertWithWhereUniqueWithoutNotificationInput = {
  create: UserNotificationCreateWithoutNotificationInput;
  update: UserNotificationUpdateWithoutNotificationInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationUpsertWithWhereUniqueWithoutUserInput = {
  create: UserNotificationCreateWithoutUserInput;
  update: UserNotificationUpdateWithoutUserInput;
  where: UserNotificationWhereUniqueInput;
};

export type UserNotificationWhereInput = {
  AND?: InputMaybe<Array<UserNotificationWhereInput>>;
  NOT?: InputMaybe<Array<UserNotificationWhereInput>>;
  OR?: InputMaybe<Array<UserNotificationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  notification?: InputMaybe<NotificationRelationFilter>;
  notificationId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserNotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  notificationId_userId?: InputMaybe<UserNotificationNotificationIdUserIdCompoundUniqueInput>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  expoToken?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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
  expoToken?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isOnBoarded?: InputMaybe<SortOrder>;
  jwtToken?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  positions?: InputMaybe<PositionOrderByRelationAggregateInput>;
  rsvpEvent?: InputMaybe<RsvpEventOrderByRelationAggregateInput>;
  studentRank?: InputMaybe<StudentRankOrderByWithRelationInput>;
  subscription?: InputMaybe<SubscriptionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userNotifications?: InputMaybe<UserNotificationOrderByRelationAggregateInput>;
  userTags?: InputMaybe<UserTagOrderByRelationAggregateInput>;
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
  ExpoToken = 'expoToken',
  Id = 'id',
  IsOnBoarded = 'isOnBoarded',
  JwtToken = 'jwtToken',
  Name = 'name',
  Picture = 'picture',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  expoToken?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  isOnBoarded?: InputMaybe<BoolWithAggregatesFilter>;
  jwtToken?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  picture?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserTag = {
  __typename?: 'UserTag';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  tag: Tag;
  tagId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type UserTagAvgAggregate = {
  __typename?: 'UserTagAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  tagId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type UserTagAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTagCountAggregate = {
  __typename?: 'UserTagCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  tagId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserTagCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  tag: TagCreateNestedOneWithoutUserTagsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserTagsInput;
};

export type UserTagCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  tagId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type UserTagCreateManyTagInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type UserTagCreateManyTagInputEnvelope = {
  data: Array<UserTagCreateManyTagInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserTagCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  tagId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserTagCreateManyUserInputEnvelope = {
  data: Array<UserTagCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserTagCreateNestedManyWithoutTagInput = {
  connect?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<UserTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<UserTagCreateManyTagInputEnvelope>;
};

export type UserTagCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserTagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserTagCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserTagCreateManyUserInputEnvelope>;
};

export type UserTagCreateOrConnectWithoutTagInput = {
  create: UserTagCreateWithoutTagInput;
  where: UserTagWhereUniqueInput;
};

export type UserTagCreateOrConnectWithoutUserInput = {
  create: UserTagCreateWithoutUserInput;
  where: UserTagWhereUniqueInput;
};

export type UserTagCreateWithoutTagInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserTagsInput;
};

export type UserTagCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  tag: TagCreateNestedOneWithoutUserTagsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserTagGroupBy = {
  __typename?: 'UserTagGroupBy';
  _avg?: Maybe<UserTagAvgAggregate>;
  _count?: Maybe<UserTagCountAggregate>;
  _max?: Maybe<UserTagMaxAggregate>;
  _min?: Maybe<UserTagMinAggregate>;
  _sum?: Maybe<UserTagSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  tagId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
};

export type UserTagListRelationFilter = {
  every?: InputMaybe<UserTagWhereInput>;
  none?: InputMaybe<UserTagWhereInput>;
  some?: InputMaybe<UserTagWhereInput>;
};

export type UserTagMaxAggregate = {
  __typename?: 'UserTagMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserTagMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTagMinAggregate = {
  __typename?: 'UserTagMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserTagMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserTagOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserTagAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserTagCountOrderByAggregateInput>;
  _max?: InputMaybe<UserTagMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserTagMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserTagSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTagOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  tag?: InputMaybe<TagOrderByWithRelationInput>;
  tagId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserTagScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  TagId = 'tagId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserTagScalarWhereInput = {
  AND?: InputMaybe<Array<UserTagScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserTagScalarWhereInput>>;
  OR?: InputMaybe<Array<UserTagScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserTagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserTagScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserTagScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserTagScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  tagId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserTagSumAggregate = {
  __typename?: 'UserTagSumAggregate';
  id?: Maybe<Scalars['Int']>;
  tagId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserTagSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  tagId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserTagUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutUserTagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserTagsInput>;
};

export type UserTagUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserTagUpdateManyWithWhereWithoutTagInput = {
  data: UserTagUpdateManyMutationInput;
  where: UserTagScalarWhereInput;
};

export type UserTagUpdateManyWithWhereWithoutUserInput = {
  data: UserTagUpdateManyMutationInput;
  where: UserTagScalarWhereInput;
};

export type UserTagUpdateManyWithoutTagInput = {
  connect?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserTagCreateOrConnectWithoutTagInput>>;
  create?: InputMaybe<Array<UserTagCreateWithoutTagInput>>;
  createMany?: InputMaybe<UserTagCreateManyTagInputEnvelope>;
  delete?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  set?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  update?: InputMaybe<Array<UserTagUpdateWithWhereUniqueWithoutTagInput>>;
  updateMany?: InputMaybe<Array<UserTagUpdateManyWithWhereWithoutTagInput>>;
  upsert?: InputMaybe<Array<UserTagUpsertWithWhereUniqueWithoutTagInput>>;
};

export type UserTagUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserTagCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserTagCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserTagCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  set?: InputMaybe<Array<UserTagWhereUniqueInput>>;
  update?: InputMaybe<Array<UserTagUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserTagUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserTagUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserTagUpdateWithWhereUniqueWithoutTagInput = {
  data: UserTagUpdateWithoutTagInput;
  where: UserTagWhereUniqueInput;
};

export type UserTagUpdateWithWhereUniqueWithoutUserInput = {
  data: UserTagUpdateWithoutUserInput;
  where: UserTagWhereUniqueInput;
};

export type UserTagUpdateWithoutTagInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserTagsInput>;
};

export type UserTagUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tag?: InputMaybe<TagUpdateOneRequiredWithoutUserTagsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserTagUpsertWithWhereUniqueWithoutTagInput = {
  create: UserTagCreateWithoutTagInput;
  update: UserTagUpdateWithoutTagInput;
  where: UserTagWhereUniqueInput;
};

export type UserTagUpsertWithWhereUniqueWithoutUserInput = {
  create: UserTagCreateWithoutUserInput;
  update: UserTagUpdateWithoutUserInput;
  where: UserTagWhereUniqueInput;
};

export type UserTagUserIdTagIdCompoundUniqueInput = {
  tagId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserTagWhereInput = {
  AND?: InputMaybe<Array<UserTagWhereInput>>;
  NOT?: InputMaybe<Array<UserTagWhereInput>>;
  OR?: InputMaybe<Array<UserTagWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  tag?: InputMaybe<TagRelationFilter>;
  tagId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserTagWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId_tagId?: InputMaybe<UserTagUserIdTagIdCompoundUniqueInput>;
};

export type UserUpdateInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutUserInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpdateOneRequiredWithoutUserNotificationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserNotificationsInput>;
  create?: InputMaybe<UserCreateWithoutUserNotificationsInput>;
  update?: InputMaybe<UserUpdateWithoutUserNotificationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserNotificationsInput>;
};

export type UserUpdateOneRequiredWithoutUserTagsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserTagsInput>;
  create?: InputMaybe<UserCreateWithoutUserTagsInput>;
  update?: InputMaybe<UserUpdateWithoutUserTagsInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserTagsInput>;
};

export type UserUpdateOneRequiredWithoutVotesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutVotesInput>;
  create?: InputMaybe<UserCreateWithoutVotesInput>;
  update?: InputMaybe<UserUpdateWithoutVotesInput>;
  upsert?: InputMaybe<UserUpsertWithoutVotesInput>;
};

export type UserUpdateWithoutClubCoordinatorInput = {
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutUserInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutClubMemberInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutUserInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutPositionsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutUserInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutRsvpEventInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutUserInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutStudentRankInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutUserInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutSubscriptionInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutUserInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutUserNotificationsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutUserInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutUserTagsInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutUserInput>;
  votes?: InputMaybe<VoteUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutVotesInput = {
  clubCoordinator?: InputMaybe<ClubCoordinatorUpdateManyWithoutUserInput>;
  clubMember?: InputMaybe<ClubMemberUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  expoToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  isOnBoarded?: InputMaybe<BoolFieldUpdateOperationsInput>;
  jwtToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<StringFieldUpdateOperationsInput>;
  positions?: InputMaybe<PositionUpdateManyWithoutUserInput>;
  rsvpEvent?: InputMaybe<RsvpEventUpdateManyWithoutUserInput>;
  studentRank?: InputMaybe<StudentRankUpdateOneWithoutUserInput>;
  subscription?: InputMaybe<SubscriptionUpdateManyWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userNotifications?: InputMaybe<UserNotificationUpdateManyWithoutUserInput>;
  userTags?: InputMaybe<UserTagUpdateManyWithoutUserInput>;
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

export type UserUpsertWithoutUserNotificationsInput = {
  create: UserCreateWithoutUserNotificationsInput;
  update: UserUpdateWithoutUserNotificationsInput;
};

export type UserUpsertWithoutUserTagsInput = {
  create: UserCreateWithoutUserTagsInput;
  update: UserUpdateWithoutUserTagsInput;
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
  expoToken?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isOnBoarded?: InputMaybe<BoolFilter>;
  jwtToken?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<StringFilter>;
  positions?: InputMaybe<PositionListRelationFilter>;
  rsvpEvent?: InputMaybe<RsvpEventListRelationFilter>;
  studentRank?: InputMaybe<StudentRankRelationFilter>;
  subscription?: InputMaybe<SubscriptionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userNotifications?: InputMaybe<UserNotificationListRelationFilter>;
  userTags?: InputMaybe<UserTagListRelationFilter>;
  votes?: InputMaybe<VoteListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Vote = {
  __typename?: 'Vote';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  event: Event;
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
  vote: Scalars['Boolean'];
};

export type VoteAvgAggregate = {
  __typename?: 'VoteAvgAggregate';
  eventId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type VoteAvgOrderByAggregateInput = {
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type VoteCountAggregate = {
  __typename?: 'VoteCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  deletedAt: Scalars['Int'];
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  vote: Scalars['Int'];
};

export type VoteCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export type VoteCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutVotesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutVotesInput;
  vote: Scalars['Boolean'];
};

export type VoteCreateManyEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  vote: Scalars['Boolean'];
};

export type VoteCreateManyEventInputEnvelope = {
  data: Array<VoteCreateManyEventInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type VoteCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
  vote: Scalars['Boolean'];
};

export type VoteCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vote: Scalars['Boolean'];
};

export type VoteCreateManyUserInputEnvelope = {
  data: Array<VoteCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type VoteCreateNestedManyWithoutEventInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VoteCreateOrConnectWithoutEventInput>>;
  create?: InputMaybe<Array<VoteCreateWithoutEventInput>>;
  createMany?: InputMaybe<VoteCreateManyEventInputEnvelope>;
};

export type VoteCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<VoteWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<VoteCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<VoteCreateWithoutUserInput>>;
  createMany?: InputMaybe<VoteCreateManyUserInputEnvelope>;
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
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutVotesInput;
  vote: Scalars['Boolean'];
};

export type VoteCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutVotesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vote: Scalars['Boolean'];
};

export type VoteEventIdUserIdCompoundUniqueInput = {
  eventId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type VoteGroupBy = {
  __typename?: 'VoteGroupBy';
  _avg?: Maybe<VoteAvgAggregate>;
  _count?: Maybe<VoteCountAggregate>;
  _max?: Maybe<VoteMaxAggregate>;
  _min?: Maybe<VoteMinAggregate>;
  _sum?: Maybe<VoteSumAggregate>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Int'];
  vote: Scalars['Boolean'];
};

export type VoteListRelationFilter = {
  every?: InputMaybe<VoteWhereInput>;
  none?: InputMaybe<VoteWhereInput>;
  some?: InputMaybe<VoteWhereInput>;
};

export type VoteMaxAggregate = {
  __typename?: 'VoteMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['Boolean']>;
};

export type VoteMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export type VoteMinAggregate = {
  __typename?: 'VoteMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
  vote?: Maybe<Scalars['Boolean']>;
};

export type VoteMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export type VoteOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VoteOrderByWithAggregationInput = {
  _avg?: InputMaybe<VoteAvgOrderByAggregateInput>;
  _count?: InputMaybe<VoteCountOrderByAggregateInput>;
  _max?: InputMaybe<VoteMaxOrderByAggregateInput>;
  _min?: InputMaybe<VoteMinOrderByAggregateInput>;
  _sum?: InputMaybe<VoteSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export type VoteOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  event?: InputMaybe<EventOrderByWithRelationInput>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  vote?: InputMaybe<SortOrder>;
};

export enum VoteScalarFieldEnum {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EventId = 'eventId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Vote = 'vote'
}

export type VoteScalarWhereInput = {
  AND?: InputMaybe<Array<VoteScalarWhereInput>>;
  NOT?: InputMaybe<Array<VoteScalarWhereInput>>;
  OR?: InputMaybe<Array<VoteScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
  vote?: InputMaybe<BoolFilter>;
};

export type VoteScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VoteScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VoteScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VoteScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deletedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  eventId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
  vote?: InputMaybe<BoolWithAggregatesFilter>;
};

export type VoteSumAggregate = {
  __typename?: 'VoteSumAggregate';
  eventId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type VoteSumOrderByAggregateInput = {
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type VoteUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutVotesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutVotesInput>;
  vote?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type VoteUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createMany?: InputMaybe<VoteCreateManyEventInputEnvelope>;
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
  createMany?: InputMaybe<VoteCreateManyUserInputEnvelope>;
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
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutVotesInput>;
  vote?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type VoteUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutVotesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventRelationFilter>;
  eventId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  vote?: InputMaybe<BoolFilter>;
};

export type VoteWhereUniqueInput = {
  eventId_userId?: InputMaybe<VoteEventIdUserIdCompoundUniqueInput>;
  id?: InputMaybe<Scalars['Int']>;
};

export type LoginMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', token: string, user: { __typename?: 'User', id: number, email: string, name: string, picture: string, isOnBoarded: boolean } } };

export type UserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserDetailsQuery = { __typename?: 'Query', me: { __typename?: 'User', id: number, name: string, email: string, picture: string } };

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: number, email: string, name: string, picture: string, isOnBoarded: boolean } | null };

export type AllClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllClubsQuery = { __typename?: 'Query', clubs: Array<{ __typename?: 'Club', id: number, name: string, image: string, clubtags: Array<{ __typename?: 'ClubTag', tag: { __typename?: 'Tag', id: number, name: string } }>, subscription: Array<{ __typename?: 'Subscription', userId: number }> }> };

export type ClubQueryVariables = Exact<{
  whereClub: ClubWhereUniqueInput;
  whereEvent?: InputMaybe<ClubEventWhereInput>;
}>;


export type ClubQuery = { __typename?: 'Query', club?: { __typename?: 'Club', id: number, name: string, description: string, image: string, subscription: Array<{ __typename?: 'Subscription', id: number, userId: number }>, clubRank?: { __typename?: 'ClubRank', rank: number, rsvpCount: number } | null, clubEvents: Array<{ __typename?: 'ClubEvent', event: { __typename?: 'Event', id: number, name: string, image: string, eventStartDate?: any | null, rsvpEvent: Array<{ __typename?: 'RSVPEvent', user: { __typename?: 'User', id: number, email: string } }>, clubEvents: Array<{ __typename?: 'ClubEvent', club: { __typename?: 'Club', id: number, name: string } }> } }>, clubCoordinator: Array<{ __typename?: 'ClubCoordinator', user: { __typename?: 'User', name: string, picture: string, email: string } }> } | null };

export type SubscribeClubMutationVariables = Exact<{
  data: SubscriptionCreateInput;
}>;


export type SubscribeClubMutation = { __typename?: 'Mutation', createSubscription: { __typename?: 'Subscription', id: number, clubId: number, userId: number, createdAt: any } };

export type UnsubscribeClubMutationVariables = Exact<{
  where: SubscriptionWhereUniqueInput;
}>;


export type UnsubscribeClubMutation = { __typename?: 'Mutation', deleteSubscription?: { __typename?: 'Subscription', id: number, clubId: number, userId: number, deletedAt?: any | null } | null };

export type FeedEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: number, name: string, image: string, eventStartDate?: any | null, eventEndDate?: any | null, rsvpEvent: Array<{ __typename?: 'RSVPEvent', user: { __typename?: 'User', id: number, email: string } }>, clubEvents: Array<{ __typename?: 'ClubEvent', club: { __typename?: 'Club', id: number, name: string } }> }> };

export type EventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
}>;


export type EventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: number, name: string, image: string, description: string, eventStartDate?: any | null, venue?: string | null, link?: string | null, rsvpEvent: Array<{ __typename?: 'RSVPEvent', user: { __typename?: 'User', id: number, email: string } }>, clubEvents: Array<{ __typename?: 'ClubEvent', club: { __typename?: 'Club', id: number, name: string } }> } | null };

export type EventsForYouQueryVariables = Exact<{
  where?: InputMaybe<EventWhereInput>;
}>;


export type EventsForYouQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: number, name: string, image: string, eventStartDate?: any | null, rsvpEvent: Array<{ __typename?: 'RSVPEvent', user: { __typename?: 'User', id: number, email: string } }>, clubEvents: Array<{ __typename?: 'ClubEvent', club: { __typename?: 'Club', id: number, name: string } }> }> };

export type EventFragmentFragment = { __typename?: 'Event', id: number, name: string, image: string, eventStartDate?: any | null, rsvpEvent: Array<{ __typename?: 'RSVPEvent', user: { __typename?: 'User', id: number, email: string } }>, clubEvents: Array<{ __typename?: 'ClubEvent', club: { __typename?: 'Club', id: number, name: string } }> };

export type RsvpEventMutationVariables = Exact<{
  data: RsvpEventCreateInput;
}>;


export type RsvpEventMutation = { __typename?: 'Mutation', createRSVPEvent: { __typename?: 'RSVPEvent', eventId: number, userId: number, createdAt: any } };

export type UnRsvpEventMutationVariables = Exact<{
  where: RsvpEventWhereUniqueInput;
}>;


export type UnRsvpEventMutation = { __typename?: 'Mutation', deleteRSVPEvent?: { __typename?: 'RSVPEvent', eventId: number, userId: number, deletedAt?: any | null } | null };

export type NotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationsQuery = { __typename?: 'Query', notifications: Array<{ __typename?: 'Notification', id: number, message: string, updatedAt: any, createdBy: Array<{ __typename?: 'ClubNotification', club: { __typename?: 'Club', id: number, name: string, image: string } }> }> };

export type AllUserTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUserTagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', id: number, name: string }>, me: { __typename?: 'User', userTags: Array<{ __typename?: 'UserTag', tag: { __typename?: 'Tag', id: number, name: string } }> } };

export const EventFragmentFragmentDoc = `
    fragment EventFragment on Event {
  id
  name
  image
  eventStartDate
  rsvpEvent {
    user {
      id
      email
    }
  }
  clubEvents {
    club {
      id
      name
    }
  }
}
    `;
export const LoginDocument = `
    mutation login($token: String!) {
  login(token: $token) {
    token
    user {
      id
      email
      name
      picture
      isOnBoarded
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['login'],
      (variables?: LoginMutationVariables) => useAxios<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );
export const UserDetailsDocument = `
    query userDetails {
  me {
    id
    name
    email
    picture
  }
}
    `;
export const useUserDetailsQuery = <
      TData = UserDetailsQuery,
      TError = unknown
    >(
      variables?: UserDetailsQueryVariables,
      options?: UseQueryOptions<UserDetailsQuery, TError, TData>
    ) =>
    useQuery<UserDetailsQuery, TError, TData>(
      variables === undefined ? ['userDetails'] : ['userDetails', variables],
      useAxios<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, variables),
      options
    );
export const UpdateUserDocument = `
    mutation updateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
    email
    name
    picture
    isOnBoarded
  }
}
    `;
export const useUpdateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>) =>
    useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
      ['updateUser'],
      (variables?: UpdateUserMutationVariables) => useAxios<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, variables)(),
      options
    );
export const AllClubsDocument = `
    query allClubs {
  clubs {
    id
    name
    image
    clubtags {
      tag {
        id
        name
      }
    }
    subscription {
      userId
    }
  }
}
    `;
export const useAllClubsQuery = <
      TData = AllClubsQuery,
      TError = unknown
    >(
      variables?: AllClubsQueryVariables,
      options?: UseQueryOptions<AllClubsQuery, TError, TData>
    ) =>
    useQuery<AllClubsQuery, TError, TData>(
      variables === undefined ? ['allClubs'] : ['allClubs', variables],
      useAxios<AllClubsQuery, AllClubsQueryVariables>(AllClubsDocument, variables),
      options
    );
export const ClubDocument = `
    query club($whereClub: ClubWhereUniqueInput!, $whereEvent: ClubEventWhereInput) {
  club(where: $whereClub) {
    id
    name
    description
    image
    subscription {
      id
      userId
    }
    clubRank {
      rank
      rsvpCount
    }
    clubEvents(where: $whereEvent) {
      event {
        ...EventFragment
      }
    }
    clubCoordinator {
      user {
        name
        picture
        email
      }
    }
  }
}
    ${EventFragmentFragmentDoc}`;
export const useClubQuery = <
      TData = ClubQuery,
      TError = unknown
    >(
      variables: ClubQueryVariables,
      options?: UseQueryOptions<ClubQuery, TError, TData>
    ) =>
    useQuery<ClubQuery, TError, TData>(
      ['club', variables],
      useAxios<ClubQuery, ClubQueryVariables>(ClubDocument, variables),
      options
    );
export const SubscribeClubDocument = `
    mutation subscribeClub($data: SubscriptionCreateInput!) {
  createSubscription(data: $data) {
    id
    clubId
    userId
    createdAt
  }
}
    `;
export const useSubscribeClubMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SubscribeClubMutation, TError, SubscribeClubMutationVariables, TContext>) =>
    useMutation<SubscribeClubMutation, TError, SubscribeClubMutationVariables, TContext>(
      ['subscribeClub'],
      (variables?: SubscribeClubMutationVariables) => useAxios<SubscribeClubMutation, SubscribeClubMutationVariables>(SubscribeClubDocument, variables)(),
      options
    );
export const UnsubscribeClubDocument = `
    mutation unsubscribeClub($where: SubscriptionWhereUniqueInput!) {
  deleteSubscription(where: $where) {
    id
    clubId
    userId
    deletedAt
  }
}
    `;
export const useUnsubscribeClubMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UnsubscribeClubMutation, TError, UnsubscribeClubMutationVariables, TContext>) =>
    useMutation<UnsubscribeClubMutation, TError, UnsubscribeClubMutationVariables, TContext>(
      ['unsubscribeClub'],
      (variables?: UnsubscribeClubMutationVariables) => useAxios<UnsubscribeClubMutation, UnsubscribeClubMutationVariables>(UnsubscribeClubDocument, variables)(),
      options
    );
export const FeedEventsDocument = `
    query feedEvents {
  events {
    id
    name
    image
    eventStartDate
    eventEndDate
    rsvpEvent {
      user {
        id
        email
      }
    }
    clubEvents {
      club {
        id
        name
      }
    }
  }
}
    `;
export const useFeedEventsQuery = <
      TData = FeedEventsQuery,
      TError = unknown
    >(
      variables?: FeedEventsQueryVariables,
      options?: UseQueryOptions<FeedEventsQuery, TError, TData>
    ) =>
    useQuery<FeedEventsQuery, TError, TData>(
      variables === undefined ? ['feedEvents'] : ['feedEvents', variables],
      useAxios<FeedEventsQuery, FeedEventsQueryVariables>(FeedEventsDocument, variables),
      options
    );
export const EventDocument = `
    query event($where: EventWhereUniqueInput!) {
  event(where: $where) {
    id
    name
    image
    description
    eventStartDate
    venue
    rsvpEvent {
      user {
        id
        email
      }
    }
    link
    clubEvents {
      club {
        id
        name
      }
    }
  }
}
    `;
export const useEventQuery = <
      TData = EventQuery,
      TError = unknown
    >(
      variables: EventQueryVariables,
      options?: UseQueryOptions<EventQuery, TError, TData>
    ) =>
    useQuery<EventQuery, TError, TData>(
      ['event', variables],
      useAxios<EventQuery, EventQueryVariables>(EventDocument, variables),
      options
    );
export const EventsForYouDocument = `
    query eventsForYou($where: EventWhereInput) {
  events(where: $where) {
    id
    name
    image
    eventStartDate
    rsvpEvent {
      user {
        id
        email
      }
    }
    clubEvents {
      club {
        id
        name
      }
    }
  }
}
    `;
export const useEventsForYouQuery = <
      TData = EventsForYouQuery,
      TError = unknown
    >(
      variables?: EventsForYouQueryVariables,
      options?: UseQueryOptions<EventsForYouQuery, TError, TData>
    ) =>
    useQuery<EventsForYouQuery, TError, TData>(
      variables === undefined ? ['eventsForYou'] : ['eventsForYou', variables],
      useAxios<EventsForYouQuery, EventsForYouQueryVariables>(EventsForYouDocument, variables),
      options
    );
export const RsvpEventDocument = `
    mutation rsvpEvent($data: RSVPEventCreateInput!) {
  createRSVPEvent(data: $data) {
    eventId
    userId
    createdAt
  }
}
    `;
export const useRsvpEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RsvpEventMutation, TError, RsvpEventMutationVariables, TContext>) =>
    useMutation<RsvpEventMutation, TError, RsvpEventMutationVariables, TContext>(
      ['rsvpEvent'],
      (variables?: RsvpEventMutationVariables) => useAxios<RsvpEventMutation, RsvpEventMutationVariables>(RsvpEventDocument, variables)(),
      options
    );
export const UnRsvpEventDocument = `
    mutation unRSVPEvent($where: RSVPEventWhereUniqueInput!) {
  deleteRSVPEvent(where: $where) {
    eventId
    userId
    deletedAt
  }
}
    `;
export const useUnRsvpEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UnRsvpEventMutation, TError, UnRsvpEventMutationVariables, TContext>) =>
    useMutation<UnRsvpEventMutation, TError, UnRsvpEventMutationVariables, TContext>(
      ['unRSVPEvent'],
      (variables?: UnRsvpEventMutationVariables) => useAxios<UnRsvpEventMutation, UnRsvpEventMutationVariables>(UnRsvpEventDocument, variables)(),
      options
    );
export const NotificationsDocument = `
    query notifications {
  notifications {
    id
    message
    updatedAt
    createdBy {
      club {
        id
        name
        image
      }
    }
  }
}
    `;
export const useNotificationsQuery = <
      TData = NotificationsQuery,
      TError = unknown
    >(
      variables?: NotificationsQueryVariables,
      options?: UseQueryOptions<NotificationsQuery, TError, TData>
    ) =>
    useQuery<NotificationsQuery, TError, TData>(
      variables === undefined ? ['notifications'] : ['notifications', variables],
      useAxios<NotificationsQuery, NotificationsQueryVariables>(NotificationsDocument, variables),
      options
    );
export const AllUserTagsDocument = `
    query allUserTags {
  tags {
    id
    name
  }
  me {
    userTags {
      tag {
        id
        name
      }
    }
  }
}
    `;
export const useAllUserTagsQuery = <
      TData = AllUserTagsQuery,
      TError = unknown
    >(
      variables?: AllUserTagsQueryVariables,
      options?: UseQueryOptions<AllUserTagsQuery, TError, TData>
    ) =>
    useQuery<AllUserTagsQuery, TError, TData>(
      variables === undefined ? ['allUserTags'] : ['allUserTags', variables],
      useAxios<AllUserTagsQuery, AllUserTagsQueryVariables>(AllUserTagsDocument, variables),
      options
    );