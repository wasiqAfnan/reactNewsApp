import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

function News({ category }) {
    const [newsArticles, setNewsArticles] = useState([]);
    // calling api data when category changes
    useEffect(() => {
        const getDetailsApi = async () => {
            let URL = "https://newsapi.org/v2/top-headlines?country=in&pageSize=15";

            if (category) {
                URL += `&category=${category}`;
            }

            URL += `&apiKey=${process.env.REACT_APP_API_KEY}`;
            try{

                let response = await fetch(URL);
                let data = await response.json();
                setNewsArticles(data.articles);
            }
            catch(error){
                console.log("error occured",error);
            }   
        };

        getDetailsApi();
    }, [category]);

    return (
        <div className='container cardDesign'>
            {/* card components */}
            {newsArticles.map((news, index) => (
                <NewsCard 
                    key={index}
                    image={news.urlToImage}
                    title={news.title}
                    description={news.description}
                    url={news.url}
                />
            ))}
           
        </div>
    );
}

export default News;
