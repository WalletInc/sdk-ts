import * as api from "wallet";
import { PaginationRequestWithSortOptions } from "wallet";
import * as constants from "./constants";

merchantCredits();

async function merchantCredits() {
    let client = new api.MerchantCreditsApi(constants.domain);

    // Create a new merchant credit
    let merchantcredit = await client.createMerchantCredit({
        mobileNumber: "+1808978789",
        creditAmount: 2000, // In cents
        memberID: "MEM001"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The merchant credit that has just been created
    console.log(merchantcredit);

    // Fetch the created merchantcredit
    merchantcredit = (await client.fetchMerchantCreditById(merchantcredit.id, constants.headers)).body;
    console.log(merchantcredit);

    // Update the merchant credit with a new title
    merchantcredit = await client.updateMerchantCredit(merchantcredit.id, {
        ...merchantcredit,
        creditAmount: 1000, // In cents
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the merchant credit
    merchantcredit = await client.archiveMerchantCredit(merchantcredit.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(merchantcredit.isActive); // This will be false, since the merchant credit has just been archived

    // Restore the merchant credit
    merchantcredit = await client.restoreMerchantCredit(merchantcredit.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(merchantcredit.isActive); // This will be true, since the merchant credit has just been restored

    // Fetch merchantcredits by page
    let merchantcredits = (await client.fetchMerchantCreditsByPage({
        pageSize: 10, pageNum: 1, sortKey: PaginationRequestWithSortOptions.SortKeyEnum.CreatedAt
    })).body;

    console.log(merchantcredits);

    // Fetch paginated merchantcredit history logs
    let historyLogs = (await client.fetchMerchantCreditHistoryLog({
        pageSize: 10,
        pageNum: 1,
        id: merchantcredit.id
    }, constants.headers)).body;

    console.log(historyLogs);

    let redemptionLogs = (await client.fetchMerchantCreditRedemptionLog({
        pageSize: 10,
        pageNum: 1,
        id: merchantcredit.id
    }, constants.headers)).body;

    console.log(redemptionLogs);

    // Fetch the count of merchantcredits
    let merchantcreditsCount = ((await (client.fetchMerchantCreditCount(constants.headers))).body).count;
    console.log(merchantcreditsCount);
}