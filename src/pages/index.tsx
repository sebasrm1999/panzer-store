import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useGetProducts } from '@/hooks/useGetProducts'
import { ProductModel } from '@/types/productTypes'

export default function Home() {
  const {isLoading, data} = useGetProducts();
  return (
    <Box sx={{ 
      display:'flex',
      flexDirection: 'column'
    }}>

    <Box className="filters">
        <FormControl
            
        sx={{ width: ["100%", "300px"], mr: 5}}>
            <InputLabel id="categories-label">Categories</InputLabel>
            <Select
            /*
                IconComponent={() => (
                    <ArrowDropDownIcon sx={{color: selectedTheme.colors.text}} />
                )}
                labelId="categories-label"
                id="categories-select"
                value={categories}
                label="Categories"
                onChange={handleCategories}
                sx={{fontFamily: selectedTheme.font, 
                    border: `${selectedTheme.name === "Dark" ? `1px solid ${selectedTheme.colors.text}` : '0px'}`, 
                    color: selectedTheme.colors.text}}
                    */
            >
                <MenuItem  value={"treasure_hunt"}>Treasure Hunts</MenuItem>
                <MenuItem  value={"guided_tour"}>Guided Tours</MenuItem>
                <MenuItem  value={"food_experience"}>Food Experiences</MenuItem>
                <MenuItem  value={"date_night"}>Date Night</MenuItem>
                <MenuItem  value={"drink_tour"}>Drink Experiences</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{width: ["100%", "300px"], mr:5, mt:[1, 0]}}>
            <InputLabel id="sort-label">Sort By</InputLabel>
            <Select
            /*
                IconComponent={() => (
                    <ArrowDropDownIcon sx={{color: selectedTheme.colors.text}} />
                )}
                labelId="sort-label"
                id="sort-select"
                value={sort}
                label="Sort By"
                onChange={handleSort}
                sx={{fontFamily: selectedTheme.font, 
                    border: `${selectedTheme.name === "Dark" ? `1px solid ${selectedTheme.colors.text}` : '0px'}`, 
                    color: selectedTheme.colors.text}}
                    */
            >   
                <MenuItem value="price">Price</MenuItem>
                <MenuItem  value="duration">Duration</MenuItem>
                <MenuItem  value="guide">Whoa!Guide</MenuItem>
                <MenuItem  value="rating">Rating</MenuItem>
            </Select>
        </FormControl>
        <Button sx={{ mt: [1, 0]}}>Clear filters</Button>
    </Box>
    {!isLoading ? 
      <Box className="experiences-container">
        {data!.map((product: ProductModel, index: number) => {

                return (
                    <Box key={index} sx={{ gridColumn: 'span 1'}}>
                        <h1 className="home_title">{product.title}</h1>
                    </Box>
                )
            })}
        </Box> 
        : 
        <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center', width: "100%" }}>
            <CircularProgress size="5rem"/>
        </Box>  }
    
    </Box>
  )
}
