import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const mediumURl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@infoixnforgood"

const [profile, setProfile] = useState({
    name: 'IXNforGood',
    profileImage: '',
    profileURL: ''

})
const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null,
})


useEffect(() => {
    axios.get(mediumURl).then(info => {
        const image = info.data.feed.image;
        const link = info.data.feed.link;
        const blogs = info.data.items;
        const posts = blogs.filter(post => post.catergories.length > 0)

        setProfile(p => ({ ...p, profileURL: link, profileImage: image }))
        setBlog({ item: posts, isLoading: false })
    })
        .catch(err => setBlog({ error: err.message }))
}, [axios])


