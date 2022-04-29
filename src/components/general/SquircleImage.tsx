import { Image } from 'native-base';
import { SquircleView } from 'react-native-figma-squircle';
import MaskedView from '@react-native-community/masked-view';

function SquircleImage({ height, width, src, props }: any) {
	return (
		<MaskedView
			maskElement={
				<SquircleView
					style={{ width, height }}
					squircleParams={{
						cornerSmoothing: 1,
						cornerRadius: 10,
					}}
				/>
			}
		>
			<Image
				source={src}
				// src={src}
				key={`${src}-${width}-${height}`}
				size="xl"
				w={width}
				h={height}
				alt={`${src}-${width}-${height}`}
				{...props}
			/>
		</MaskedView>
	);
}
export default SquircleImage;
