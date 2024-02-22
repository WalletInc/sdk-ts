"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./a2PApi"), exports);
const a2PApi_1 = require("./a2PApi");
__exportStar(require("./advertisementCreditsApi"), exports);
const advertisementCreditsApi_1 = require("./advertisementCreditsApi");
__exportStar(require("./amenitiesApi"), exports);
const amenitiesApi_1 = require("./amenitiesApi");
__exportStar(require("./analyticsApi"), exports);
const analyticsApi_1 = require("./analyticsApi");
__exportStar(require("./appleWalletSubscribersApi"), exports);
const appleWalletSubscribersApi_1 = require("./appleWalletSubscribersApi");
__exportStar(require("./billingApi"), exports);
const billingApi_1 = require("./billingApi");
__exportStar(require("./clubMembersPointsApi"), exports);
const clubMembersPointsApi_1 = require("./clubMembersPointsApi");
__exportStar(require("./configurationApi"), exports);
const configurationApi_1 = require("./configurationApi");
__exportStar(require("./countriesApi"), exports);
const countriesApi_1 = require("./countriesApi");
__exportStar(require("./customerApi"), exports);
const customerApi_1 = require("./customerApi");
__exportStar(require("./dashboardApi"), exports);
const dashboardApi_1 = require("./dashboardApi");
__exportStar(require("./diningApi"), exports);
const diningApi_1 = require("./diningApi");
__exportStar(require("./dynamicVouchersApi"), exports);
const dynamicVouchersApi_1 = require("./dynamicVouchersApi");
__exportStar(require("./emailSubscriberApi"), exports);
const emailSubscriberApi_1 = require("./emailSubscriberApi");
__exportStar(require("./employeeAPIKeysApi"), exports);
const employeeAPIKeysApi_1 = require("./employeeAPIKeysApi");
__exportStar(require("./employeeAccessApi"), exports);
const employeeAccessApi_1 = require("./employeeAccessApi");
__exportStar(require("./employeesApi"), exports);
const employeesApi_1 = require("./employeesApi");
__exportStar(require("./gamingApi"), exports);
const gamingApi_1 = require("./gamingApi");
__exportStar(require("./imageGridApi"), exports);
const imageGridApi_1 = require("./imageGridApi");
__exportStar(require("./industriesApi"), exports);
const industriesApi_1 = require("./industriesApi");
__exportStar(require("./infoGenesisReportsApi"), exports);
const infoGenesisReportsApi_1 = require("./infoGenesisReportsApi");
__exportStar(require("./integratedTerminalsApi"), exports);
const integratedTerminalsApi_1 = require("./integratedTerminalsApi");
__exportStar(require("./interactionsApi"), exports);
const interactionsApi_1 = require("./interactionsApi");
__exportStar(require("./loginAndLogoutApi"), exports);
const loginAndLogoutApi_1 = require("./loginAndLogoutApi");
__exportStar(require("./loungeApi"), exports);
const loungeApi_1 = require("./loungeApi");
__exportStar(require("./membershipTiersApi"), exports);
const membershipTiersApi_1 = require("./membershipTiersApi");
__exportStar(require("./merchantApi"), exports);
const merchantApi_1 = require("./merchantApi");
__exportStar(require("./merchantCreditsApi"), exports);
const merchantCreditsApi_1 = require("./merchantCreditsApi");
__exportStar(require("./merchantURLsApi"), exports);
const merchantURLsApi_1 = require("./merchantURLsApi");
__exportStar(require("./mobileTerminalApi"), exports);
const mobileTerminalApi_1 = require("./mobileTerminalApi");
__exportStar(require("./newsApi"), exports);
const newsApi_1 = require("./newsApi");
__exportStar(require("./paymentDesignsApi"), exports);
const paymentDesignsApi_1 = require("./paymentDesignsApi");
__exportStar(require("./performancesApi"), exports);
const performancesApi_1 = require("./performancesApi");
__exportStar(require("./productsApi"), exports);
const productsApi_1 = require("./productsApi");
__exportStar(require("./promotionCodesApi"), exports);
const promotionCodesApi_1 = require("./promotionCodesApi");
__exportStar(require("./qRCodeDesignsApi"), exports);
const qRCodeDesignsApi_1 = require("./qRCodeDesignsApi");
__exportStar(require("./quickLinksApi"), exports);
const quickLinksApi_1 = require("./quickLinksApi");
__exportStar(require("./quickLinksSectionApi"), exports);
const quickLinksSectionApi_1 = require("./quickLinksSectionApi");
__exportStar(require("./roomRatesApi"), exports);
const roomRatesApi_1 = require("./roomRatesApi");
__exportStar(require("./sMSApi"), exports);
const sMSApi_1 = require("./sMSApi");
__exportStar(require("./servicesApi"), exports);
const servicesApi_1 = require("./servicesApi");
__exportStar(require("./settingsApi"), exports);
const settingsApi_1 = require("./settingsApi");
__exportStar(require("./shopifyTerminalApi"), exports);
const shopifyTerminalApi_1 = require("./shopifyTerminalApi");
__exportStar(require("./smsSubscriberApi"), exports);
const smsSubscriberApi_1 = require("./smsSubscriberApi");
__exportStar(require("./staticVoucherCampaignGroupsApi"), exports);
const staticVoucherCampaignGroupsApi_1 = require("./staticVoucherCampaignGroupsApi");
__exportStar(require("./staticVoucherCampaignsApi"), exports);
const staticVoucherCampaignsApi_1 = require("./staticVoucherCampaignsApi");
__exportStar(require("./staticVouchersApi"), exports);
const staticVouchersApi_1 = require("./staticVouchersApi");
__exportStar(require("./systemApi"), exports);
const systemApi_1 = require("./systemApi");
__exportStar(require("./ticketApi"), exports);
const ticketApi_1 = require("./ticketApi");
__exportStar(require("./transactionLedgerApi"), exports);
const transactionLedgerApi_1 = require("./transactionLedgerApi");
__exportStar(require("./videosApi"), exports);
const videosApi_1 = require("./videosApi");
__exportStar(require("./virtualBusinessCardApi"), exports);
const virtualBusinessCardApi_1 = require("./virtualBusinessCardApi");
__exportStar(require("./webTerminalApi"), exports);
const webTerminalApi_1 = require("./webTerminalApi");
__exportStar(require("./wixTerminalApi"), exports);
const wixTerminalApi_1 = require("./wixTerminalApi");
__exportStar(require("./wooCommerceTerminalApi"), exports);
const wooCommerceTerminalApi_1 = require("./wooCommerceTerminalApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [a2PApi_1.A2PApi, advertisementCreditsApi_1.AdvertisementCreditsApi, amenitiesApi_1.AmenitiesApi, analyticsApi_1.AnalyticsApi, appleWalletSubscribersApi_1.AppleWalletSubscribersApi, billingApi_1.BillingApi, clubMembersPointsApi_1.ClubMembersPointsApi, configurationApi_1.ConfigurationApi, countriesApi_1.CountriesApi, customerApi_1.CustomerApi, dashboardApi_1.DashboardApi, diningApi_1.DiningApi, dynamicVouchersApi_1.DynamicVouchersApi, emailSubscriberApi_1.EmailSubscriberApi, employeeAPIKeysApi_1.EmployeeAPIKeysApi, employeeAccessApi_1.EmployeeAccessApi, employeesApi_1.EmployeesApi, gamingApi_1.GamingApi, imageGridApi_1.ImageGridApi, industriesApi_1.IndustriesApi, infoGenesisReportsApi_1.InfoGenesisReportsApi, integratedTerminalsApi_1.IntegratedTerminalsApi, interactionsApi_1.InteractionsApi, loginAndLogoutApi_1.LoginAndLogoutApi, loungeApi_1.LoungeApi, membershipTiersApi_1.MembershipTiersApi, merchantApi_1.MerchantApi, merchantCreditsApi_1.MerchantCreditsApi, merchantURLsApi_1.MerchantURLsApi, mobileTerminalApi_1.MobileTerminalApi, newsApi_1.NewsApi, paymentDesignsApi_1.PaymentDesignsApi, performancesApi_1.PerformancesApi, productsApi_1.ProductsApi, promotionCodesApi_1.PromotionCodesApi, qRCodeDesignsApi_1.QRCodeDesignsApi, quickLinksApi_1.QuickLinksApi, quickLinksSectionApi_1.QuickLinksSectionApi, roomRatesApi_1.RoomRatesApi, sMSApi_1.SMSApi, servicesApi_1.ServicesApi, settingsApi_1.SettingsApi, shopifyTerminalApi_1.ShopifyTerminalApi, smsSubscriberApi_1.SmsSubscriberApi, staticVoucherCampaignGroupsApi_1.StaticVoucherCampaignGroupsApi, staticVoucherCampaignsApi_1.StaticVoucherCampaignsApi, staticVouchersApi_1.StaticVouchersApi, systemApi_1.SystemApi, ticketApi_1.TicketApi, transactionLedgerApi_1.TransactionLedgerApi, videosApi_1.VideosApi, virtualBusinessCardApi_1.VirtualBusinessCardApi, webTerminalApi_1.WebTerminalApi, wixTerminalApi_1.WixTerminalApi, wooCommerceTerminalApi_1.WooCommerceTerminalApi];
//# sourceMappingURL=apis.js.map