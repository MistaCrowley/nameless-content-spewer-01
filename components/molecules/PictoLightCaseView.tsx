// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

const PictoLightCaseView = () => {

	return(
		<div className="w-full h-full">
			<div className="
				w-[80vw]
			">
				<Image
					src="./case.svg"
					width={850}
					height={850}
					alt="case"
				/>
			</div>
		</div>
	)
}

export default PictoLightCaseView