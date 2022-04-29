import { Alert } from 'react-native';
import { createContext, useEffect, useMemo, useReducer } from 'react';
import { QueryClientProvider, QueryClient, QueryCache } from 'react-query';
import { setToken, getAuthData, setAuthData, clearAuthData } from '../utils';
import { AuthData, AuthContextData, ReducerState } from './types';

export const AuthContext = createContext<AuthContextData>(
	{} as AuthContextData,
);

const reducer = (
	state: ReducerState,
	action: { type: string; payload?: AuthData },
) => {
	switch (action.type) {
		case 'SIGN_IN':
			return {
				...state,
				authData: action.payload as AuthData,
				isLoading: false,
			};
		case 'SIGN_OUT':
			return {
				...state,
				authData: {
					token: null,
					id: null,
					email: null,
					name: null,
					picture: null,
					isOnBoarded: false,
				},
				isLoading: false,
			};
		default:
			return state;
	}
};

function AuthProvider({ children }: { children: React.ReactNode }) {
	const initialState: ReducerState = {
		authData: {
			token: null,
			id: null,
			email: null,
			isOnBoarded: false,
		},
		isLoading: true,
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const contextValue = useMemo<AuthContextData>(
		() => ({
			authData: { ...state.authData },
			isLoading: state.isLoading,
			signIn: (authData: AuthData) => {
				console.log('signIn', authData);
				if (!authData.token || !authData.id || !authData.email) {
					Alert.alert('Error ❌', 'Invalid login credentials!');
					return;
				}
				setToken(authData.token);
				setAuthData(authData);
				dispatch({ type: 'SIGN_IN', payload: authData });
			},
			signOut: () => {
				clearAuthData();
				dispatch({ type: 'SIGN_OUT' });
			},
		}),
		[state],
	);
	useEffect(() => {
		async function checkUser() {
			console.log('checkUser');
			const authData = await getAuthData();
			console.log('checkUser', authData);
			if (authData?.token && authData?.id && authData?.email)
				dispatch({
					type: 'SIGN_IN',
					payload: { ...state.authData, ...authData },
				});
			else dispatch({ type: 'SIGN_OUT' });
		}
		checkUser();
	}, []);
	const queryClient = new QueryClient({
		queryCache: new QueryCache({
			onError: (err, query) => {
				console.log('onError', err, query);
				Alert.alert('Error ❌', err.message);
				contextValue.signOut();
			},
		}),
	});
	return (
		<AuthContext.Provider value={contextValue}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</AuthContext.Provider>
	);
}

export default AuthProvider;
