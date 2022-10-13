import * as api from "wallet";
import * as constants from "./constants";

dynamicVouchers();

async function dynamicVouchers() {
    let client = new api.DynamicVouchersApi(constants.domain);

    // Fetch payment design
    let designClient = new api.PaymentDesignsApi(constants.domain);
    let allDesigns = await designClient.fetchAllPaymentDesigns(false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
    let selectedDesign = allDesigns[0];

    let startDate = new Date();
    let expiryDate = new Date((new Date()).setDate((new Date()).getDate() + 5));

    let params: api.WTDynamicVoucherCreateParams = {
        title: "Dynamic Voucher API Client",
        notes: "Example notes",
        paymentDesignID: selectedDesign.id,
        dateTimeStart: startDate,
        dateTimeExpiration: expiryDate,
        startingValue: 1000, // In cents
        maxBudget: 90000, // In cents
        decreaseAmount: 10, // In cents
        frequency: 10, // Every 10 units of the frequencyType
        frequencyType: "Minute(s)", // Possible values are: "Minute(s)", "Hour(s)", "Day(s)", "Week(s)", "Second(s)"
        isActive: true,
    }

    let voucher = await client.createDynamicVoucher(params, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    console.log(voucher);

    // Fetch dynamic voucher by id
    voucher = await client.fetchDynamicVoucherById(voucher.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(voucher);

    // Update dynamic voucher
    voucher = await client.saveDynamicVoucher(voucher.id, {
        ...params,
        title: `${voucher.title} Updated`,
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(voucher);

    // Fetch all dynamic vouchers
    let allVouchers = await client.fetchAllDynamicVouchers(false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(allVouchers);

    // Fetch all the redemptions
    let allRedemptions = await client.fetchDynamicVoucherRedemptions(voucher.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(allRedemptions);


    // Fetch reach stats of individual dynamic voucher
    let individualVoucherReachStats = await client.fetchReachStatsOfIndividualDynamicVoucher(voucher.id, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(individualVoucherReachStats);

    // Fetch reach stats of all the dynamic vouchers
    let allVouchersReachStats = await client.fetchReachStatsOfAllDynamicVouchers(undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(allVouchersReachStats);
}