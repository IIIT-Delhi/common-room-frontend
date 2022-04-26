/* eslint-disable import/prefer-default-export */
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

export { getEventsForYouVariable };
