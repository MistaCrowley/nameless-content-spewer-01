import { NeuroNoise } from '@paper-design/shaders-react';

const neuro = () => {

return (
<div className="w-full h-full">
  <NeuroNoise
    width={1920}
    height={1080}
    colorFront="#ffffff"
    colorMid="#47a6ff"
    colorBack="#000000"
    brightness={0.05}
    contrast={0.3}
    speed={1}
  />
</div>
)
}

export default neuro