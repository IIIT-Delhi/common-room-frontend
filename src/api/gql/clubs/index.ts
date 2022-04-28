/* eslint-disable @typescript-eslint/no-unused-vars */
import { gql } from 'urql';
import { EVENT_FRAGMENT } from '../events';

const CLUB_QUERY = gql`
	query club(
		$whereClub: ClubWhereUniqueInput!
		$whereEvent: ClubEventWhereInput
	) {
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
	${EVENT_FRAGMENT}
`;
