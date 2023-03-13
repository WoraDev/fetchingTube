import React from 'react'
import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const request = {
    url: BASE_URL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'bd60ce7f56mshdb74742ccdb5270p11540bjsn69d3e840077c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, request)
    return data
}