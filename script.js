fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-04-10&sortBy=publishedAt&apiKey=f2c74660b306402f8496736b4a2002be")
    .then(data => data.json())
    .then(newsData => {
        const newsText = newsData.articles[0].title;
        document.getElementById("news").innerHTML = newsText;
        document.getElementById("readMore").href = newsData.articles[0].url;
    });