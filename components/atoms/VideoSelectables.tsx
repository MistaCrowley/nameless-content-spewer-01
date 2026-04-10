"use client"
import { getRandomInt } from '@/utils/utils.js'
import { socket } from "@/lib/socketClient"
import { useState, useEffect } from "react"
import Image from 'next/image'
import data from '@/public/data.json'

const VideoSelectables = ({imgRules, processedImgUrls, currentScreen}) => {
	const displayKeys = Object.keys(imgRules)
	console.log(imgRules)
	const usernum = getRandomInt(9999,99999)
	const userBuilt = "controller" + usernum
	//console.log(userBuilt)
	const [message, setMessage ] = useState<
	{ sender: string; message: string}[]
	>([])
	const [room, setRoom] = useState("123")
	const [userName, setUserName] = useState(userBuilt)
	const [joined, setJoined] = useState(false)

	const dataArray = []
	
	const datain = data.contentRoutes
	
	//console.log(datain)
	for (const key in datain) {
		dataArray.push([ key, datain[key].icons ])
		//console.log(datain[key].title)
		//delete datain[key].title

	}
	const dataObj = {}
	for (let i = 0; i < dataArray.length; i++) {
    	const [key, val] = dataArray[i];
    	dataObj[key] = val;
	}
	
	const [iconUrls, setIconUrls] = useState(dataObj)

	const handleJoinRoom = () => {
		if (room && userName) {
		  socket.emit("join-room", { room, username: userName})
		  setJoined(true)
		}
	}
	const [renderImages, setRenderImages] = useState(false)

	useEffect(() => {
		setIconUrls(processedImgUrls)
	}, [processedImgUrls])

	useEffect(() => {
		handleJoinRoom()
		socket.on("message", (data) => {
		  console.log(data)
		  setMessage((prev) => [...prev, data])
		})
		socket.on("user_joined", (message) => {
		  setMessage((prev) => [...prev, { sender: "system", message }])
		})
		return () => {
		  socket.off("user_joined")
		  socket.off("message")
		}
	}, []);
	
	/*
		if displayType = single, send current data post update to 
		change current content to /imgSingle
	*/
	const doContent = (key) => {
		console.log(`VideoSelectables: attempting to change content on screen: ${currentScreen} to ${key}`)
		const message = `{"screen":"${currentScreen}", "content": "${key}", "displayType":"all"}`
		const data = { room, message, sender: userName };
		setMessage((prev) => [...prev, {sender: userName, message}])
		socket.emit("message", data)
		//console.log(message)
	}
	const thingo = true
	return (
		<div className="
			grid
			w-full h-[84vh]
			text-left
			-ml-[1.8vw] -mt-[3vh]
			pl-[4.6vw] pb-[43vh]
			overflow-y-scroll overscroll-x-none
			overflow-x-hidden
			
		">
			{displayKeys.map((key) => (
				<div key={key}>
				{imgRules[key].isAvailable === true &&
				<div className="
					w-[95vw]
					bg-[#101022]
					h-[30vh]
					mb-[1vh]
				" 
				key={key}>
				<h1 key={key} className="
					w-full
					h-[3.5vh] 
				"
				style={{
	    			fontSize:'2vh'
	    		}}
				> 
					{imgRules[key].title}
				</h1>
					<div className="
						w-[90vw] 
						h-[10vh] mb-[15vh] ml-[2vw]
						"
						onClick={() => doContent(key)}
						>
						<Image
				            key={iconUrls[key]}
				            src={iconUrls[key]}
				            width={960}
				            height={0}
				            priority
			            	loading="eager"
				            alt="a frame"
				            style={{width:'90vw', height: '25vh'}}
						/>
					</div>				
				</div> }
			</div>
			))}
		</div>

	)
}

export default VideoSelectables
/*
				            key={processedImgUrls[key]}
				            src={processedImgUrls[key]}
				            */