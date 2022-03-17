import React from 'react';
import { Heading } from 'native-base';

const Heading1 = ({ children, ...props }: any) => {
	return (
		<Heading {...props} fontSize="48" lineHeight="52" fontWeight="bold">
			{children}
		</Heading>
	);
};
const Heading2 = ({ children, ...props }: any) => {
	return (
		<Heading {...props} fontSize="32" lineHeight="36" fontWeight="semibold">
			{children}
		</Heading>
	);
};
const Heading3 = ({ children, ...props }: any) => {
	return (
		<Heading
			{...props}
			fontSize="28"
			lineHeight="32"
			fontWeight="semibold"
			letterSpacing="1"
		>
			{children}
		</Heading>
	);
};

const Heading4 = ({ children, isSemiBold = false, ...props }: any) => {
	return (
		<Heading
			{...props}
			fontSize="24"
			lineHeight="28"
			fontWeight={isSemiBold ? 'semibold' : 'medium'}
		>
			{children}
		</Heading>
	);
};

const Heading5 = ({ children, ...props }: any) => {
	return (
		<Heading {...props} fontSize="20" lineHeight="24" fontWeight="medium">
			{children}
		</Heading>
	);
};

const SubHeading1 = ({ children, ...props }: any) => {
	return (
		<Heading {...props} fontSize="18" lineHeight="22" fontWeight="medium">
			{children}
		</Heading>
	);
};

const SubHeading2 = ({ children, ...props }: any) => {
	return (
		<Heading {...props} fontSize="16" lineHeight="18" fontWeight="medium">
			{children}
		</Heading>
	);
};
export {
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	SubHeading1,
	SubHeading2,
};
