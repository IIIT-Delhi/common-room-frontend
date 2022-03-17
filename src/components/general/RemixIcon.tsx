import React from 'react';
import RNRemixIcon from 'react-native-remix-icon';

function RemixIcon(props: any) {
	const { name, style } = props;
	const { color, fontSize: size } = style || {};
	return <RNRemixIcon name={name} size={size} color={color} />;
}

export default RemixIcon;
