import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";
    let articles = [];
    const engadget = "http://www.theverge.com/rss/full.xml"
    const parser = new RSSParser();
    const parse = async url => {
    const feed = await parser.parseURL(url);
    feed.items.forEach(item => {
        articles.push({ item })
    })
}

parse(engadget);
let app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send(articles);
})

const server = app.listen("4000", () => {
    console.log("Server is listening on 4000")
} )