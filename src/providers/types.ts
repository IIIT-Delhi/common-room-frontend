export type AuthData = {
	token: string | null;
	id: number | null;
	email: string | null;
	name?: string | null | undefined;
	picture?: any;
};

export type ReducerState = {
	authData: AuthData;
	isLoading: boolean;
};

export type AuthContextData = ReducerState & {
	signIn: (authData: AuthData) => void;
	signOut: () => void;
};
