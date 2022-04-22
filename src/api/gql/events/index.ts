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
		clubs: {
			some: {
				tags: {
					some: {
						users: {
							some: {
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
});

export { getEventsForYouVariable };
