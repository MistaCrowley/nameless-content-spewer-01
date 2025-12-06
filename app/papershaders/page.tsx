/*
https://shaders.paper.design/
*/
import { Warp } from '@paper-design/shaders-react'

const papershader = () => {

	return (
		<div className="w-[1920px] h-[1080px]">
		<div className="absolute left-[0px]">
		<Warp
		  width={640}
		  height={380}
		  colors={["#121212", "#9470ff", "#121212", "#8838ff"]}
		  proportion={0.45}
		  softness={1}
		  distortion={0.25}
		  swirl={0.8}
		  swirlIterations={10}
		  shape="checks"
		  shapeScale={0.1}
		  speed={0.4} 
		/>
		</div>
		</div>
		)
}

export default papershader