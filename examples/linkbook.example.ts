import * as api from "wallet";
import * as constants from "./constants";

linkBook();

async function linkBook() {
    let client = new api.LinkBookApi(constants.domain);

    // Create a new link book link
    let link = await client.createLinkBook({
        title: "External Link",
        url: "https://example.com",
        icon: "fa-clock",
        orderNumber: 1,
        linkBookSectionID: "",
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The link book link that has just been created
    console.log(link);

    // Update the link book link with a new url
    link = await client.updateLinkBook(link.id, {
        ...link,
        url: "https://test.com"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the link book link
    link = await client.archiveLinkBook(link.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(link.isActive); // This will be false, since the link book link has just been archived

    // Restore the link book link
    link = await client.restoreLinkBook(link.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(link.isActive); // This will be true, since the link book link has just been restored

    // Fetch all links
    let links = (await client.fetchAllLinkBook(false, constants.headers)).body;
    console.log(links);
}