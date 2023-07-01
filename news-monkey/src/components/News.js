import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

const News = () => {
    const[news, setNews] = useState([])
    const [page, setPage] = useState(1);

        const fetchData = async (page) => {
          try {
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=3dd7487b296e496bbfd20e7597be7371&page=1");
            const data = await response.json();
            setNews(data.articles);
          } catch (error) {
            console.log(error);
          }
        };
      
        useEffect(() => {
            fetchData(page);
        }, [page])

   const handlePreviousClick = async () => {
        setPage(page - 1);
    }

    const handleNextClick = async () => {
        setPage(page + 1);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=3dd7487b296e496bbfd20e7597be7371&page=${page + 1}`);
        const data = await response.json();
        setNews(data.articles);
      }

  return (
    <div className='container my-3'>
        <h2>News Monkey Top Headlines</h2>
        <div className="row">
            {news.map((item, index) => (
                <div key={index} className="col-md-4">
                    <NewsItem key={index} title = {item.title} description={item.description ? item.description : "No Description available"}
                     imageurl={item.urlToImage ? item.urlToImage : "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202302/pti02_16_2023_000047a-sixteen_nine.jpg?VersionId=rHh1W5ujUf6RZoPBPrvL6.yTWE7cOkcO"}/>
                </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePreviousClick}> &larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr; </button>
        </div>
    </div>
  )
}

export default News
