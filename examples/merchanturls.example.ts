import * as api from "wallet";
import * as constants from "./constants";

merchantURLs();

async function merchantURLs() {
    let client = new api.MerchantURLsApi(constants.domain);

    // Create a new merchant URL
    let url = await client.createMerchantURL({
        nickname: "Instagram",
        destinationURL: "https://instagram.com/merchant"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The merchant URL that has just been created
    console.log(url);

    // Fetch the created url
    url = (await client.fetchMerchantURL(url.id, constants.headers)).body;
    console.log(url);

    // Update the merchant URL with a new destination URL
    url = await client.updateMerchantURL(url.id, {
        ...url,
        destinationURL: "https://instagram.com/redirect/merchant"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the merchant URL
    url = await client.archiveMerchantURL(url.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(url.isActive); // This will be false, since the merchant URL has just been archived

    // Restore the merchant URL
    url = await client.restoreMerchantURL(url.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(url.isActive); // This will be true, since the merchant URL has just been restored

    // Fetch all merchant urls
    let urls = (await client.fetchAllMerchantURLs(false, constants.headers)).body;
    console.log(urls);

    // Fetch all the wallet page views for the given merchant url
    let pageViews = (await (client.fetchMerchantURLRequests(url.id, constants.headers))).body;
    console.log(pageViews);
}