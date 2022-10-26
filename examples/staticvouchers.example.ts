import * as api from "wallet";
import * as constants from "./constants";

staticVouchers();

async function staticVouchers() {
    let client = new api.StaticVouchersApi(constants.domain);

    let params: api.WTStaticVoucherCreateParams = {
        offerAmountCents: 1000, // In cents
        memberID: "MEM0090",
        cellPhone: "+1809898787",
        campaignID: "",
    }
    // Create a new static voucher
    let voucher = await client.createStaticVoucher(params, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The static voucher that has just been created
    console.log(voucher);

    // Fetch the static voucher that has just been created
    voucher = (await client.fetchStaticVoucher(voucher.id, constants.headers)).body;
    console.log(voucher);

    // Update the static voucher with a new maxUses count
    voucher = await client.updateStaticVoucher(voucher.id, {
        ...params,
        offerAmountCents: 2000 // In cents
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the static voucher
    await client.deleteStaticVoucher(voucher.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });


    // Fetch reach stats of individual static voucher
    let individualVoucherReachStats = await client.fetchReachStatsOfIndividualStaticVoucher(voucher.id, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(individualVoucherReachStats);

    // Fetch reach stats of all the static vouchers
    let allVouchersReachStats = await client.fetchReachStatsOfAllStaticVouchers(undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(allVouchersReachStats);
}