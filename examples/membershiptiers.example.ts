import * as api from "wallet";
import * as constants from "./constants";

membershipTiers();

async function membershipTiers() {
    let tiersClient = new api.MembershipTiersApi(constants.domain);

    // Create new membership tier
    let tier = await tiersClient.createMembershipTier({
        tierNumber: "1",
        tierName: "GOLD",
        tierDiscount: 20,
        tierDesignID: "JSUilOPE98",
        pointsDesignID: "L918AJ7356"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The membership tier that has just been created
    console.log(tier);

    // Fetch the created tier
    tier = (await tiersClient.fetchMembershipTierById(tier.id, constants.headers)).body;
    console.log(tier);

    tier = await tiersClient.updateMembershipTier(tier.id, {
        ...tier,
        tierName: "SILVER"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the membership tier
    tier = await tiersClient.archiveMembershipTier(tier.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(tier.isActive); // This will be false, since the tier has just been archived

    // Restore the membership tier
    tier = await tiersClient.restoreMembershipTier(tier.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(tier.isActive); // This will be true, since the tier has just been restored

    // Fetch paginated tier history logs
    let historyLogs = (await tiersClient.fetchMembershipTierHistoryLog({
        pageSize: 10,
        pageNum: 1,
        id: tier.id
    }, constants.headers)).body;

    console.log(historyLogs);

    let redemptionLogs = (await tiersClient.fetchMembershipTierRedemptionLog({
        pageSize: 10,
        pageNum: 1,
        id: tier.id
    }, constants.headers)).body;

    console.log(redemptionLogs);

    // Fetch the list of tiers with members
    let tiersList = ((await (tiersClient.fetchAllMembershipTiersWithMemberCount(false, constants.headers))).body);
    console.log(tiersList);
}