import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constant'

const Sidebar = ({selectedCategory, onClick}) => {

    return (
        <Stack
            direction='row'
            sx={{
                overflow: "auto",
                height: {
                    sx: 'auto', md: '95%'
                },
                flexDirection: { md: 'column' }
            }}>
            {categories.map((category) => (
                <button onClick={()=> onClick(category.name)} key={category.name}
                    className='category-btn'
                    style={{
                        background: category.name === selectedCategory ? "#FC1503" : "",
                        color: 'white'
                    }}>
                    <span style={{
                        marginRight: '15px'
                    }}>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

export default Sidebar