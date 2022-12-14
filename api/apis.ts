export * from './advertisementCreditsApi';
import { AdvertisementCreditsApi } from './advertisementCreditsApi';
export * from './analyticsApi';
import { AnalyticsApi } from './analyticsApi';
export * from './appleWalletSubscribersApi';
import { AppleWalletSubscribersApi } from './appleWalletSubscribersApi';
export * from './billingApi';
import { BillingApi } from './billingApi';
export * from './clubMembersPointsApi';
import { ClubMembersPointsApi } from './clubMembersPointsApi';
export * from './configurationApi';
import { ConfigurationApi } from './configurationApi';
export * from './countriesApi';
import { CountriesApi } from './countriesApi';
export * from './customerApi';
import { CustomerApi } from './customerApi';
export * from './dashboardApi';
import { DashboardApi } from './dashboardApi';
export * from './dynamicVouchersApi';
import { DynamicVouchersApi } from './dynamicVouchersApi';
export * from './employeeAPIKeysApi';
import { EmployeeAPIKeysApi } from './employeeAPIKeysApi';
export * from './employeeAccessApi';
import { EmployeeAccessApi } from './employeeAccessApi';
export * from './employeesApi';
import { EmployeesApi } from './employeesApi';
export * from './imageGridApi';
import { ImageGridApi } from './imageGridApi';
export * from './industriesApi';
import { IndustriesApi } from './industriesApi';
export * from './infoGenesisReportsApi';
import { InfoGenesisReportsApi } from './infoGenesisReportsApi';
export * from './integratedTerminalsApi';
import { IntegratedTerminalsApi } from './integratedTerminalsApi';
export * from './interactionsApi';
import { InteractionsApi } from './interactionsApi';
export * from './linkBookApi';
import { LinkBookApi } from './linkBookApi';
export * from './linkBookSectionApi';
import { LinkBookSectionApi } from './linkBookSectionApi';
export * from './loginAndLogoutApi';
import { LoginAndLogoutApi } from './loginAndLogoutApi';
export * from './membershipTiersApi';
import { MembershipTiersApi } from './membershipTiersApi';
export * from './merchantApi';
import { MerchantApi } from './merchantApi';
export * from './merchantCreditsApi';
import { MerchantCreditsApi } from './merchantCreditsApi';
export * from './merchantURLsApi';
import { MerchantURLsApi } from './merchantURLsApi';
export * from './mobileTerminalApi';
import { MobileTerminalApi } from './mobileTerminalApi';
export * from './newsApi';
import { NewsApi } from './newsApi';
export * from './paymentDesignsApi';
import { PaymentDesignsApi } from './paymentDesignsApi';
export * from './performancesApi';
import { PerformancesApi } from './performancesApi';
export * from './promoCodesApi';
import { PromoCodesApi } from './promoCodesApi';
export * from './sMSApi';
import { SMSApi } from './sMSApi';
export * from './settingsApi';
import { SettingsApi } from './settingsApi';
export * from './shopifyTerminalApi';
import { ShopifyTerminalApi } from './shopifyTerminalApi';
export * from './staticVoucherCampaignGroupsApi';
import { StaticVoucherCampaignGroupsApi } from './staticVoucherCampaignGroupsApi';
export * from './staticVoucherCampaignsApi';
import { StaticVoucherCampaignsApi } from './staticVoucherCampaignsApi';
export * from './staticVouchersApi';
import { StaticVouchersApi } from './staticVouchersApi';
export * from './systemApi';
import { SystemApi } from './systemApi';
export * from './transactionLedgerApi';
import { TransactionLedgerApi } from './transactionLedgerApi';
export * from './utilitiesApi';
import { UtilitiesApi } from './utilitiesApi';
export * from './webTerminalApi';
import { WebTerminalApi } from './webTerminalApi';
export * from './wixTerminalApi';
import { WixTerminalApi } from './wixTerminalApi';
export * from './wooCommerceTerminalApi';
import { WooCommerceTerminalApi } from './wooCommerceTerminalApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AdvertisementCreditsApi, AnalyticsApi, AppleWalletSubscribersApi, BillingApi, ClubMembersPointsApi, ConfigurationApi, CountriesApi, CustomerApi, DashboardApi, DynamicVouchersApi, EmployeeAPIKeysApi, EmployeeAccessApi, EmployeesApi, ImageGridApi, IndustriesApi, InfoGenesisReportsApi, IntegratedTerminalsApi, InteractionsApi, LinkBookApi, LinkBookSectionApi, LoginAndLogoutApi, MembershipTiersApi, MerchantApi, MerchantCreditsApi, MerchantURLsApi, MobileTerminalApi, NewsApi, PaymentDesignsApi, PerformancesApi, PromoCodesApi, SMSApi, SettingsApi, ShopifyTerminalApi, StaticVoucherCampaignGroupsApi, StaticVoucherCampaignsApi, StaticVouchersApi, SystemApi, TransactionLedgerApi, UtilitiesApi, WebTerminalApi, WixTerminalApi, WooCommerceTerminalApi];
