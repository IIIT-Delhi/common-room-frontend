import { ComponentProps } from 'react';
import { Divider } from 'native-base';

type DividerProps = ComponentProps<typeof Divider>;

function Spacer({ bg = 'transparent', ...props }: DividerProps) {
	return <Divider bg={bg} {...props} />;
}

Spacer.Vertical = function VerticalSpacer({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	orientation = 'vertical',
	mx = '2',
	...props
}: DividerProps) {
	return <Spacer orientation="vertical" mx={mx} {...props} />;
};

Spacer.Horizontal = function HorizontalSpacer({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	orientation = 'horizontal',
	my = '2',
	...props
}: DividerProps) {
	return <Spacer orientation="horizontal" my={my} {...props} />;
};

export default Spacer;
