import { SmokeRing } from '@paper-design/shaders-react';

const papershader = () => {

	return (
		<div className="w-[1920px] h-[1080px]">
		<div className="absolute left-[0px]">
		<SmokeRing
		  width={1920}
		  height={1080}
		  colors={["#ffffff"]}
		  colorBack="#000000"
		  noiseScale={3}
		  noiseIterations={4}
		  radius={0.6}
		  thickness={0.65}
		  innerShape={0.7}
		  speed={0.5}
		  scale={0.8}
		/>
		</div>
		</div>
		)
}

export default papershader