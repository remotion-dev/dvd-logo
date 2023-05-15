import {Img, useCurrentFrame, useVideoConfig} from 'remotion';

const imageWidth = 300;
const imageHeight = 141;

function zigzag(x: number): number {
	if (Math.floor(x) % 2 === 0) {
		return 1 - (x % 2);
	}
	return (x % 2) - 1;
}

export const MyComposition = () => {
	const frame = useCurrentFrame();
	const {height, width} = useVideoConfig();
	const x = zigzag(frame / 100) * (width - imageWidth);
	const y = zigzag(frame / 80) * (height - imageHeight);

	return (
		<div
			style={{
				backgroundColor: 'black',
			}}
		>
			<Img
				style={{
					translate: `${x}px ${y}px`,
					width: imageWidth,
					height: imageHeight,
				}}
				src="https://seeklogo.com/images/D/DVD_Video-logo-EEB6CBE3CB-seeklogo.com.png"
			/>
		</div>
	);
};
