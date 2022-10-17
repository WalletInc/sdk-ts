"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api = __importStar(require("wallet"));
const constants = __importStar(require("./constants"));
staticVoucherCampaigns();
function staticVoucherCampaigns() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.StaticVoucherCampaignsApi(constants.domain);
        let designClient = new api.PaymentDesignsApi(constants.domain);
        let allDesigns = yield designClient.fetchAllPaymentDesigns(false, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        let selectedDesign = allDesigns[0];
        let startDate = new Date();
        let expiryDate = new Date((new Date()).setDate((new Date()).getDate() + 5));
        let params = {
            startDateTime: startDate,
            expirationDateTime: expiryDate,
            title: "Static Voucher Campaign API Client",
            notes: "Example notes",
            valueType: "currency",
            displayValue: "$5 Off",
            merchantsReferenceID: "",
            validOnlyAtPOSRegisterIDs: [],
            paymentDesignID: selectedDesign.id,
            isActive: true,
            sourceID: 0,
        };
        let campaign = yield client.createStaticVoucherCampaign(params, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(campaign);
        campaign = yield client.fetchStaticVoucherCampaignById(campaign.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(campaign);
        let allCampaigns = yield client.fetchStaticVoucherCampaigns(false, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(allCampaigns);
        let allVouchers = yield client.fetchStaticVouchers(campaign.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(allVouchers);
        let allVouchersByPage = yield client.fetchStaticVouchersPage(campaign.id, 1, 10, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(allVouchersByPage);
        let performanceOverview = yield client.fetchPerformanceOverview(campaign.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(performanceOverview);
        let individualCampaignReachStats = yield client.fetchReachStatsOfIndividualStaticVoucherCampaign(campaign.id, undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(individualCampaignReachStats);
        let allStaticVoucherCampaignStats = yield client.fetchReachStatsOfAllStaticVoucherCampaigns(undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(allStaticVoucherCampaignStats);
        let views = yield client.fetchViews(campaign.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(views);
        let redeemedVouchers = yield client.fetchVouchersRedeemed(campaign.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(redeemedVouchers);
        let duplicatedCampaign = yield client.duplicateStaticVoucherCampaignById(campaign.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(duplicatedCampaign);
        campaign = yield client.updateStaticVoucherCampaign(campaign.id, Object.assign(Object.assign({}, params), { title: `${params.title} Updated` }), constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(campaign);
        let campaignWithVoucher = yield client.createStaticVoucherCampaignWithVoucher(Object.assign(Object.assign({}, params), { cellPhone: "+1809898787", memberID: "MEM0091", offerAmountCents: 1000 }), constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(campaignWithVoucher);
        allVouchers = yield client.fetchStaticVouchers(campaignWithVoucher.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        campaignWithVoucher = yield client.updateStaticVoucherCampaignWithVoucher(campaignWithVoucher.id, Object.assign(Object.assign({}, params), { offerAmountCents: 2000, voucherID: allVouchers[0].id }), constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(campaignWithVoucher);
    });
}
//# sourceMappingURL=staticvouchercampaigns.example.js.map