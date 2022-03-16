import React from 'react';
import { Image } from 'native-base';
import { SquircleView } from 'react-native-figma-squircle';
import MaskedView from '@react-native-community/masked-view';

const SquircleImage = ({ height, width, src }: any) => {
	return (
		<MaskedView
			maskElement={
				<SquircleView
					style={{ width: width, height: height }}
					squircleParams={{
						cornerSmoothing: 1,
						cornerRadius: 10,
					}}
				/>
			}
		>
			<Image source={src} size="xl" w={width} h={height} alt="Dummy Image" />
		</MaskedView>
	);
};
export default SquircleImage;
