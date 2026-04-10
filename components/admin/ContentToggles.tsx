"use client"

import data from "@/public/data.json"
import ToggleSwitch from "@/components/atoms/ToggleSwitch.tsx"


const Page = () => {
	const content = data.contentRoutes
	const contentKeys = Object.keys(content)

	return (
		<div>
			{Object.entries(content).map(([key, value]) => (
				<div key={key} className="
					grid grid-cols-18 w-[50vw] gap-10
				">
					<div className="
						col-start-2 col-span-1
					">
						<ToggleSwitch/>
					</div>
					{value.isAvailable === true &&
					<div className="
						col-start-4
						w-[10vw]
					">
					<p	className="text-[#ffeedd]"
					> {value.title} </p>
					</div>
					}
					{value.isAvailable === false &&
					<div className="
						col-start-4
						w-[10vw]
					">
					<p className="text-[#777]"> {value.title} </p>
					</div>
					}
				</div>
			))}

		</div>
	)
}

export default Page

/*
{contentKeys.map((key) => (
				<div key={key}> 
					<h3> {content[key]} </h3>
				</div>
			))}
*/