import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {

	const[selectedCategory,setSelectedCategory] = useState("New")
	const[videos,setVideos] = useState([])

	useEffect(() => {
		const data = fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
		.then((data) => {
			setVideos(data.items)
		}).catch((err) => {
			
		});
	}, [selectedCategory])

	const handleSideBarClick = (value) => {
		setSelectedCategory(value)
	}

	return (
		<div>
			<Stack sx={{
				flexDirection: {
					sx: "column",
					md: "row"
				}
			}}>
				<Box sx={{
					height: {
						sx: '100%',
						md: '100vh'
					},
					borderRight: "1px solid #3d3d3d",
					px: {
						sx: 0, md: 2
					}
				}}>
					<Sidebar selectedCategory={selectedCategory} onClick={handleSideBarClick}/>
					<Typography className='copyright'
						variant='body2'
						sx={{
							mt: 1.5,
							color: '#fff'
						}}>
						Copyright 2023 media
					</Typography>
				</Box>

				<Box p={2} sx={{overflowY: 'auto',
			height: '90vh',
			flex: 2}}>
					<Typography variant='h4' fontWeight='bold'
						mb={2}
						sx={{
						color: 'white'
					}}>{selectedCategory} <span style={{
							color: '#F31503'
						}}>Videos</span>
					</Typography>
					<Videos videos={videos}/>
				</Box>
			</Stack>
		</div>
	)
}

export default Feed