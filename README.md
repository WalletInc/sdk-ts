
![Wallet Inc](https://resources.wallet.inc/logos/wallet-350x96.png)

> Access to this module is presently restricted to customers of Wallet Inc. Reach out on [Discord](https://discord.gg/xzwhcNCjcQ) for help.

## Summary

This module provides a server-side SDK for integrating with the CRM & Digital Payments platform provided by Wallet Inc. For details about the [Wallet Platform](https://wallet.inc), please visit https://wallet.inc

For detailed API documentation and detailed steps to create your API key for authenticated requests, please visit the [Wallet Developer Hub](https://wallet.dev) (https://wallet.dev)

## Install

```bash
npm install wallet
```

## To test examples

```bash
cd examples
npm install # Install ts-node to run typescript examples without transpilation
```

## Usage


### Create and manipulate Membership Tiers

```nodejs
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
```
    
### Create and manipulate Payment Designs

```nodejs
import * as api from "wallet";
import * as constants from "./constants";

paymentDesigns();

async function paymentDesigns() {
    let designClient = new api.PaymentDesignsApi(constants.domain);

    // Create a new payment design
    let design = await designClient.createPaymentDesign({
        borderColor: "#f0f0f0",
        borderStyleType: "Dashed",
        borderSize: "4px",
        borderRadius: 2,
        fontColor: "#777777",
        fontType: "Arial",
        abbreviation: "ABBR",
        acronym: "AR",
        icon: "fa-anchor",
        designName: "Thanksgiving Design",
        displayName: "Decorator",
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The payment design that has just been created
    console.log(design);

    // Fetch the created design
    design = (await designClient.fetchPaymentDesignById(design.id, constants.headers)).body;
    console.log(design);

    // Change the borderColor and borderSize of the payment design
    design = await designClient.updatePaymentDesign(design.id, {
        ...design,
        borderColor: "#050505",
        borderSize: "6px",
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the payment design
    design = await designClient.archivePaymentDesign(design.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(design.isActive); // This will be false, since the design has just been archived

    // Restore the payment design
    design = await designClient.restorePaymentDesign(design.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });
    console.log(design.isActive); // This will be true, since the design has just been restored

    // Fetch all payment designs
    let designs = (await designClient.fetchAllPaymentDesigns(false, constants.headers)).body;
    console.log(designs);
}
```
    
### Create and manipulate Club Members

```nodejs
import * as api from "wallet";
import { PaginationRequestWithSortOptions } from "wallet";
import * as constants from "./constants";

clubMembers();

async function clubMembers() {
    let membersClient = new api.ClubMembersPointsApi(constants.domain);

    // Create new club member
    let member = await membersClient.createMember({
        firstName: "John",
        lastName: "Doe",
        membershipTierID: "HDywI893LQ",
        mobileNumber: "+1807654543",
        pointsAccrued: 2000,
        memberID: "MEM001"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // The club member that has just been created
    console.log(member);

    // Fetch the created member
    member = (await membersClient.fetchMemberById(member.id, constants.headers)).body;
    console.log(member);

    member = await membersClient.updateMember(member.id, {
        ...member,
        mobileNumber: "+1809863542"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the club member
    member = await membersClient.archiveMember(member.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(member.isActive); // This will be false, since the member has just been archived

    // Restore the club member
    member = await membersClient.restoreMember(member.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(member.isActive); // This will be true, since the member has just been restored

    // Fetch members by page
    let members = (await membersClient.fetchMembersByPage({
        pageSize: 10, pageNum: 1, sortKey: PaginationRequestWithSortOptions.SortKeyEnum.CreatedAt
    })).body;

    console.log(members);

    // Fetch paginated member history logs
    let historyLogs = (await membersClient.fetchMemberHistoryLog({
        pageSize: 10,
        pageNum: 1,
        id: member.id
    }, constants.headers)).body;

    console.log(historyLogs);

    let redemptionLogs = (await membersClient.fetchMemberRedemptionLog({
        pageSize: 10,
        pageNum: 1,
        id: member.id
    }, constants.headers)).body;

    console.log(redemptionLogs);

    // Fetch the count of members
    let membersCount = ((await (membersClient.fetchMembersCount(constants.headers))).body).count;
    console.log(membersCount);
}
```
    
### Create and manipulate Advertisement Credits

```nodejs
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
```
    
### Create and manipulate Link Book Links

```nodejs
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
```
    
### Create and manipulate Merchant URLs

```nodejs
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
```
    
### Create and manipulate News Articles

```nodejs
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
```
    
### Create and manipulate Performances

```nodejs
import * as api from "wallet";
import * as constants from "./constants";

performances();

async function performances() {
    let client = new api.PerformancesApi(constants.domain);

    // Create a new performance
    let performance = await client.createPerformance({
        title: "Performance",
        body: "Details related to the performance",
        startDateTime: new Date(),
        price: 200,
        url: "https://blog.merchant.com",
        orderNumber: 1,
        mediaURL: "https://example.com/image",
        isSoldOut: false,

    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });


    // The performance that has just been created
    console.log(performance);

    // Update the performance with a new title
    performance = await client.updatePerformance(performance.id, {
        ...performance,
        title: "performance Updated"
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the performance
    performance = await client.archivePerformance(performance.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(performance.isActive); // This will be false, since the performance has just been archived

    // Restore the performance
    performance = await client.restorePerformance(performance.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(performance.isActive); // This will be true, since the performance has just been restored

    // Fetch all performances
    let performances = (await client.fetchAllPerformances(false, constants.headers)).body;
    console.log(performances);
}
```
    
### Create and manipulate Promo Codes

```nodejs
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
```
    
### Create and manipulate Merchant Credits

```nodejs
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
```
    
### Create and manipulate Dynamic Vouchers

```nodejs
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
```
    
### Create and manipulate Static Voucher Campaigns

```nodejs
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
```
    
### Create and manipulate Static Vouchers

```nodejs
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
```
    
### Create and manipulate SMSes

```nodejs
import * as api from "wallet";
import * as constants from "./constants";

smsExample();

async function smsExample() {
    let client = new api.SMSApi(constants.domain);

    // Acquire phone number
    let phoneNumber = await client.acquirePhoneNumber({
        phoneNumber: "+1807675656"
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(phoneNumber);

    // Send phone number for verification
    await client.sendPhoneNumberForVerification(phoneNumber.id, {
        helpDeskQueueResponse: "HELPME",
        helpDeskKeyword: "HELP12",
        helpResponse: "Hello, we're here to help.",
        stopResponse: "We're sad to see you go",
        messageFooter: "Subscribe for more info!",
        termsOfServiceURL: "https://example.com/terms-of-service",
        privacyPolicyURL: "https://example.com/privacy-policy",
        companyName: "Fictitious Corporation"
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    // Archive phone number
    phoneNumber = await client.archivePhoneNumber(phoneNumber.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(phoneNumber.isActive); // This will be false

    // Restore phone number
    phoneNumber = await client.restorePhoneNumber(phoneNumber.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(phoneNumber.isActive); // This will be true

    // Create SMS agreement
    let agreement = await client.createSMSAgreement({
        isShortCodeTimelineUnderstood: true,
        isPricingUnderstood: true,
        isShortCodeTransferUnderstood: true,
        isOptInOutUnderstood: true,
        isShortCodeUnderstood: true,
        isStandardsUnderstood: true,
        isCtiaShortCodeRead: true,
        isManualRead: true,
        isStopUnderstood: true,
        isTosOnWebsite: true,
        isPrivacyPolicyOnWebsite: true,
        isTwilioTermsRead: true,
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(agreement);

    // Fetch the agreement
    agreement = await client.fetchSMSAgreement(constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(agreement);

    // Create imported list
    let importedList = await client.createImportedList({
        listName: "Imported List",
        isActive: true,
        phoneNumberID: phoneNumber.id
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(importedList);


    // Create recipient in imported list
    let recipient = await client.createRecipientInImportedList({
        importedListID: importedList.id,
        mobilePhoneNumber: "+1805654545"
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(recipient);

    // Count recipients in imported list
    let { count } = await client.countImportedListRecipients(importedList.id, false, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(count);

    // Fetch recipients
    let importedListRecipients = await client.fetchImportedListRecipients(importedList.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(importedListRecipients);

    // Fetch recipients by page
    let importedListRecipientByPage = await client.fetchImportedListRecipientsByPage(importedList.id, 10, 1, false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(`Total: ${importedListRecipientByPage.total}, Length: ${importedListRecipientByPage.length}, List: ${JSON.stringify(importedListRecipientByPage.results)}`);

    // Export recipients
    await client.exportImportedListRecipients(importedList.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    // Create opt in list
    let optInList = await client.createOptInList({
        isActive: true,
        listName: "Opt In List",
        phoneNumberID: phoneNumber.id,
        estimatedMessagesPerMonth: 250,
        optInKeyword: "OPTIN",
        optOutKeyword: "OPTOUT",
        optInConfirmedResponse: "You've opted in",
        optOutConfirmedResponse: "You've opted out",
        optInConfirmedCustomerReceives: "You've opted in",
        optOutConfirmedCustomerReceives: "You've opted out",
        isOver21Required: false,
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(optInList);

    // Count opt in list subscribers
    count = await client.countOptInListSubscribers(optInList.id, true, false, false, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return (resp.body).count;
        });

    console.log(count);

    // Export opt in list subscribers
    await client.exportOptInListSubscribers(optInList.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    // Fetch subscribers
    let optInListRecipients = await client.fetchOptInListSubscribers(optInList.id, true, false, false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(optInListRecipients);

    // Fetch subscribers by page
    let optInListRecipientByPage = await client.fetchOptInListSubscribersByPage(optInList.id, 10, 1, true, false, false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(`Total: ${optInListRecipientByPage.total}, Length: ${optInListRecipientByPage.length}, List: ${JSON.stringify(optInListRecipientByPage.results)}`);

    // Fetch all opt in lists associated with the given phone number

    let optInListsAssociatedWithPhoneNumber = await client.fetchOptInListsAssociatedWithPhoneNumber(phoneNumber.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(optInListsAssociatedWithPhoneNumber);

    // Create opt in source
    let optInSource = await client.createOptInListSource({
        sourceName: "Opt In Source",
        listID: optInList.id,
    }, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
    console.log(optInSource);


    // Count subscribers in opt in list source
    count = await client.countOptInSourceSubscribers(optInSource.id, true, false, false, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return (resp.body).count;
        });

    console.log(count);

    let optInSourceSubscribers = await client.fetchOptInSourceSubscribers(optInSource.id, true, false, false, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(optInSourceSubscribers);

    let optInSourcesAssociatedWithPhoneNumber = await client.fetchOptInSourcesAssociatedWithPhoneNumber(phoneNumber.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });

    console.log(optInSourcesAssociatedWithPhoneNumber);

    // Fetch all outbound SMSes
    let outboundSMSes = await client.fetchOutboundSMS(phoneNumber.id, undefined, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
    console.log(outboundSMSes);

    // Fetch outbound SMSes by page
    let outboundSMSesByPage = await client.fetchOutboundSMSByPage(phoneNumber.id, undefined, undefined, 10, 1, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
    console.log(`Total: ${outboundSMSesByPage.total}, Length: ${outboundSMSesByPage.length}, Messages: ${JSON.stringify(outboundSMSesByPage.results)}`);


    // Count outbound SMSes
    let outboundSMSesCount = await client.countOutboundSMS(phoneNumber.id, undefined, undefined, undefined, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return (resp.body).count;
        });
    console.log(outboundSMSesCount);

    // Retrieve message limits
    let limits = await client.retrieveSentAndMaxCountOfMessages(constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
    console.log(`Max: ${limits.max}, Sent: ${limits.sent}`);
}
```
    