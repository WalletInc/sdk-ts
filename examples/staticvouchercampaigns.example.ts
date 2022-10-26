import * as api from "wallet";
import * as constants from "./constants";

staticVoucherCampaigns();

async function staticVoucherCampaigns() {
    let client = new api.StaticVoucherCampaignsApi(constants.domain);
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

    let params: api.CreateStaticVoucherCampaign = {
        startDateTime: startDate,
        expirationDateTime: expiryDate,
        title: "Static Voucher Campaign API Client",
        notes: "Example notes",
        valueType: "currency", // percent or currency
        displayValue: "$5 Off",
        merchantsReferenceID: "",
        validOnlyAtPOSRegisterIDs: [],
        paymentDesignID: selectedDesign.id,
        isActive: true,
        sourceID: 0,
    }
    let campaign = await client.createStaticVoucherCampaign(params, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(campaign);


    // Fetch static voucher campaign by ID
    campaign = await client.fetchStaticVoucherCampaignById(campaign.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(campaign);

    // Fetch all the static voucher campaigns
    let allCampaigns = await client.fetchStaticVoucherCampaigns(false, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(allCampaigns);

    // Fetch all vouchers within a static voucher campaign
    let allVouchers = await client.fetchStaticVouchers(campaign.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(allVouchers);

    // Fetch vouchers within a static voucher campaign by page
    let allVouchersByPage = await client.fetchStaticVouchersPage(campaign.id, 1, 10, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(allVouchersByPage);

    // Fetch performance overview
    let performanceOverview = await client.fetchPerformanceOverview(campaign.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(performanceOverview);

    // Fetch reach stats of individual static voucher campaign
    let individualCampaignReachStats = await client.fetchReachStatsOfIndividualStaticVoucherCampaign(campaign.id, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(individualCampaignReachStats);

    // Fetch reach stats of all static voucher campaigns
    let allStaticVoucherCampaignStats = await client.fetchReachStatsOfAllStaticVoucherCampaigns(undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(allStaticVoucherCampaignStats);

    // Fetch wallet page views of a static voucher campaign
    let views = await client.fetchViews(campaign.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(views);

    // Fetch redeemed vouchers
    let redeemedVouchers = await client.fetchVouchersRedeemed(campaign.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(redeemedVouchers);

    // Duplicate static voucher campaign
    let duplicatedCampaign = await client.duplicateStaticVoucherCampaignById(campaign.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(duplicatedCampaign);

    // Update static voucher campaign
    campaign = await client.updateStaticVoucherCampaign(campaign.id, {
        ...params,
        title: `${params.title} Updated`
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(campaign);

    // Create static voucher campaign with voucher
    let campaignWithVoucher = await client.createStaticVoucherCampaignWithVoucher({
        ...params,
        cellPhone: "+1809898787",
        memberID: "MEM0091",
        offerAmountCents: 1000
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(campaignWithVoucher);

    allVouchers = await client.fetchStaticVouchers(campaignWithVoucher.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    // Update static voucher campaign
    campaignWithVoucher = await client.updateStaticVoucherCampaignWithVoucher(campaignWithVoucher.id, {
        ...params,
        offerAmountCents: 2000,
        voucherID: allVouchers[0].id
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(campaignWithVoucher);
}