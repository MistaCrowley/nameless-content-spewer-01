// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

import CaseOptionsHeader from '@/components/molecules/CaseOptionsHeader'
import CaseOptionsBody from '@/components/molecules/CaseOptionsBody'
import CaseOptionsPictolight from '@/components/molecules/CaseOptionsPictolight'
/*


*/

const CaseOptions = ({ }) => {
//const CaseOptions = ({ selectionMade }) => {
	//const selectionMade = {
	//	displayOptions:"001"
	//}
	const [selectionMade, setSelectionMade] = useState('{"displayOptions":"001"}')
	const [caseDisplay, setCaseDisplay] = useState(false)
	const [casePicto, setCasePicto] = useState(false)
	const [currentSelection, setCurrentSelection] = useState("")
	
	useEffect(() => {
		console.log(`selection made ${selectionMade}`)
		if (selectionMade !== "") {

			const selParsed = JSON.parse(selectionMade)
			 Object.values(selParsed).forEach(value => {
			 		const valu: string = value as string
			 		setCurrentSelection(valu)
			 		//console.log(value)
			 })			
			Object.keys(selParsed).forEach(function(key) {
				const keyo: string = Object.keys(selParsed) as string
				if (keyo == "displayOptions" ||
					keyo == "productlightOptions"
					) {
					setCaseDisplay(true)
					setCasePicto(false)
				}
				else if (keyo == "pictolightOptions") {
					setCaseDisplay(false)
					setCasePicto(true)
				}
			})
		}
	}, [selectionMade])

	return (
	<div className="
		w-full h-full
		grid grid-rows-20 bg-[#100011]
		gap-0 m-auto

	">
		<div className="
			h-full
			w-full 
			grid
		">
		<h2 className="
			ml-[2.5vw] mt-[1vh]

		"> click an image to change content</h2>
			<div className="
				w-full 
				h-screen
				absolute
				top-[6vh]
			">
				<CaseOptionsBody
					selectionMade={selectionMade}
					currentSelection={currentSelection}
				/>
			</div>
		</div>

	</div>

	)
}

export default CaseOptions