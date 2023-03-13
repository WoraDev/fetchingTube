import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar, Feed, ChannelDetail, VideoDetail, SearchFeed} from './components'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#0f0f0f'}}>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed/>} />
          <Route path="/video/:id" element={<VideoDetail/>}/>
          <Route path="/channel/:id" element={<ChannelDetail/>}/>
          <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>

  )
}

export default App