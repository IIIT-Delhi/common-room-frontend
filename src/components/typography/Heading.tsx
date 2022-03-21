import { Heading, IHeadingProps } from 'native-base';

type HeadingProps = IHeadingProps & {
	isSemiBold?: boolean;
};

function Heading1({ children, ...props }: HeadingProps) {
	return (
		<Heading {...props} fontSize="48" lineHeight="52" fontWeight="bold">
			{children}
		</Heading>
	);
}
function Heading2({ children, ...props }: HeadingProps) {
	return (
		<Heading {...props} fontSize="32" lineHeight="36" fontWeight="semibold">
			{children}
		</Heading>
	);
}
function Heading3({ children, ...props }: HeadingProps) {
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
}

function Heading4({ children, isSemiBold = false, ...props }: HeadingProps) {
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
}

function Heading5({ children, ...props }: HeadingProps) {
	return (
		<Heading {...props} fontSize="20" lineHeight="24" fontWeight="medium">
			{children}
		</Heading>
	);
}

function SubHeading1({ children, ...props }: HeadingProps) {
	return (
		<Heading {...props} fontSize="18" lineHeight="22" fontWeight="medium">
			{children}
		</Heading>
	);
}

function SubHeading2({ children, ...props }: HeadingProps) {
	return (
		<Heading {...props} fontSize="16" lineHeight="18" fontWeight="medium">
			{children}
		</Heading>
	);
}
export {
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	SubHeading1,
	SubHeading2,
};
