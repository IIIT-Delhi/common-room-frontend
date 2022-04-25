import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

export default function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
}

export function useAuthData() {
	const { authData } = useAuth();
	return {
		id: authData.id ?? -1,
		token: authData.token ?? '',
		email: authData.email ?? '',
		name: authData.name ?? '',
		picture: authData.picture ?? '',
	};
}
