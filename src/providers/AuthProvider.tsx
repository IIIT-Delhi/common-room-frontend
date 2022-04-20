import { createContext, useEffect, useMemo, useReducer } from 'react';
import { getToken, setToken, clearToken } from '../utils';

type AuthData = {
	token: string | null;
	email: string | null;
	name?: string | null | undefined;
	picture?: any;
};

type ReducerState = {
	authData: AuthData;
	isLoading: boolean;
};

type AuthContextData = ReducerState & {
	signIn: (authData: AuthData) => void;
	signOut: () => void;
};

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
					email: null,
					name: null,
					picture: null,
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
			email: null,
		},
		isLoading: true,
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const contextValue = useMemo<AuthContextData>(
		() => ({
			authData: { ...state.authData },
			isLoading: state.isLoading,
			signIn: ({ token, email }: AuthData) => {
				if (!token) return;
				console.log('token', token);
				console.log('email', email);
				setToken(token);
				dispatch({ type: 'SIGN_IN', payload: { token, email } });
			},
			signOut: () => {
				clearToken();
				dispatch({ type: 'SIGN_OUT' });
			},
		}),
		[state],
	);
	useEffect(() => {
		async function checkUser() {
			const token = await getToken();
			if (token)
				dispatch({ type: 'SIGN_IN', payload: { token, email: null } });
			else dispatch({ type: 'SIGN_OUT' });
		}
		checkUser();
	}, []);
	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
