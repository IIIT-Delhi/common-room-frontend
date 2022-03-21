import { Icon, IIconProps } from 'native-base';
import RNRemixIcon from 'react-native-remix-icon';

function RemixIcon(props: any) {
	const { name, style } = props;
	const { color, fontSize: size } = style || {};
	return <RNRemixIcon name={name} size={size} color={color} />;
}

function NativeRemixIcon(props: IIconProps) {
	return <Icon {...props} as={RemixIcon} />;
}

export default NativeRemixIcon;
