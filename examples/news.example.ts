import * as api from "wallet";
import * as constants from "./constants";

news();

async function news() {
    let client = new api.NewsApi(constants.domain);

    // Create a new news article
    let article = await client.createNewsArticle({
        title: "News Article",
        orderNumber: 1,
        body: "This is a news article related to the merchant",
        url: "https://blog.merchant.com",
        mediaURL: "https://example.com/image"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });


    // The news article that has just been created
    console.log(article);

    // Update the news article with a new title
    article = await client.updateNewsArticle(article.id, {
        ...article,
        title: "News Article Updated"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the news article
    article = await client.archiveNewsArticle(article.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(article.isActive); // This will be false, since the news article has just been archived

    // Restore the news article
    article = await client.restoreNewsArticle(article.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(article.isActive); // This will be true, since the news article has just been restored

    // Fetch all articles
    let articles = (await client.fetchAllNewsArticles(false, constants.headers)).body;
    console.log(articles);
}