import * as api from "wallet";
import * as constants from "./constants";

promocodes();

async function promocodes() {
    let client = new api.PromoCodesApi(constants.domain);

    // Create a new promocode
    let promocode = await client.createPromoCode({
        title: "Promo Code",
        description: "Description about Promo Code",
        promoCode: "MON50OFF",
        displayValue: "50OFF",
        orderNumber: 1,
        startDate: new Date(),
        expirationDate: new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The promocode that has just been created
    console.log(promocode);

    // Update the promocode with a new title
    promocode = await client.updatePromoCode(promocode.id, {
        ...promocode,
        title: "promocode Updated"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the promocode
    promocode = await client.archivePromoCode(promocode.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(promocode.isActive); // This will be false, since the promocode has just been archived

    // Restore the promocode
    promocode = await client.restorePromoCode(promocode.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(promocode.isActive); // This will be true, since the promocode has just been restored

    // Fetch all promocodes
    let promocodes = (await client.fetchAllPromoCodes(false, constants.headers)).body;
    console.log(promocodes);
}