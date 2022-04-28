/* eslint-disable import/prefer-default-export */
import { gql } from 'urql';
import { InputMaybe, EventWhereInput, Exact } from '../../../generated/graphql';

const getEventsForYouVariable = (input: {
	email: string;
}):
	| Exact<{
			where?: InputMaybe<EventWhereInput> | undefined;
	  }>
	| undefined => ({
	where: {
		clubEvents: {
			some: {
				club: {
					is: {
						clubtags: {
							some: {
								tag: {
									is: {
										userTags: {
											some: {
												user: {
													is: {
														email: {
															equals: input.email,
														},
													},
												},
											},
										},
									},
								},
							},
						},
					},
				},
			},
		},
	},
});

const EVENT_FRAGMENT = gql`
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
export { getEventsForYouVariable, EVENT_FRAGMENT };
