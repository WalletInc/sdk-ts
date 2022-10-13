import * as api from "wallet";
import * as constants from "./constants";

advertisementCredits();

async function advertisementCredits() {
    let client = new api.AdvertisementCreditsApi(constants.domain);

    let title = "Ad Credit API Client (New Headers)";

    // Create a new advertisement credit
    let adCredit = await client.createAdvertisementCredit({
        title: title,
        valueType: "percent",
        paymentDesignID: "jbkVgPTgoo",
        maxUses: 5,
        discountValue: 500,
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The advertisement credit that has just been created
    console.log(adCredit);

    // Fetch the advertisement credit that has just been created
    adCredit = (await client.fetchAdvertisementCreditById(adCredit.id, constants.headers)).body;
    console.log(adCredit);

    // Update the advertisement credit with a new maxUses count
    adCredit = await client.updateAdvertisementCredit(adCredit.id, {
        title: `${title} Update`,
        valueType: "percent",
        paymentDesignID: "jbkVgPTgoo",
        maxUses: 10,
        discountValue: 1000,
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Retrieve all the scans
    let scans = (await client.fetchAdvertisementCreditScans(adCredit.id, constants.headers)).body;
    console.log("All scans: " + JSON.stringify(scans));

    // Archive the advertisement credit
    adCredit = await client.archiveAdvertisementCredit(adCredit.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(adCredit.isActive); // This will be false, since the advertisement credit has just been archived

    // Restore the advertisement credit
    adCredit = await client.restoreAdvertisementCredit(adCredit.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(adCredit.isActive); // This will be true, since the advertisement credit has just been restored

    // Fetch all the active advertisement credits
    let adCredits = (await client.fetchAllAdvertisementCredits(false, constants.headers)).body;
    console.log("Active advertisement credits: ", JSON.stringify(adCredit));
}