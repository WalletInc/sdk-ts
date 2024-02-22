/// <reference types="node" />
import http from 'http';
import { MSAnalyticsMemberCountPartitionedByDate } from '../model/mSAnalyticsMemberCountPartitionedByDate';
import { MSAnalyticsMemberPointsRedeemedPartitionedByDate } from '../model/mSAnalyticsMemberPointsRedeemedPartitionedByDate';
import { MSAnalyticsMemberPointsRefundedPartitionedByDate } from '../model/mSAnalyticsMemberPointsRefundedPartitionedByDate';
import { MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate } from '../model/mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate';
import { MSAnalyticsMembershipTierAmountRefundedPartitionedByDate } from '../model/mSAnalyticsMembershipTierAmountRefundedPartitionedByDate';
import { WTCountResult } from '../model/wTCountResult';
import { WTWalletObjectPrefixCounts } from '../model/wTWalletObjectPrefixCounts';
import { WTWalletPageView } from '../model/wTWalletPageView';
import { WalletPageView } from '../model/walletPageView';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AnalyticsApiApiKeys {
    api_key = 0
}
export declare class AnalyticsApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        api_key: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AnalyticsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    countAllSubscribers(isSubscribed?: boolean, isPendingAge21Verification?: boolean, isArchiveIncluded?: boolean, startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countAuthenticatedSessions(startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    countDistinctRedemptions(startDate: Date, endDate: Date, transactionType?: string, segmentType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    countHelpDeskRequests(startDate: Date, endDate: Date, locale: string, timezone: string, isResolved?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    countInboundMessages(startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countNewSessions(startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    countOptInListSubscribersPartitionedByDate(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    countOutboundMessages(startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WTCountResult;
    }>;
    countTotalSessions(startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    countTransactions(startDate: Date, endDate: Date, transactionType?: string, segmentType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    countVerifiedWalletPageViews(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTWalletObjectPrefixCounts>;
    }>;
    countWalletPageViews(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTWalletObjectPrefixCounts>;
    }>;
    exitLinkSummary(startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsAdCreditsCountPartitionedByEmployee(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsAdCreditsCountPartitionedByPaymentDesign(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsAdCreditsCountPartitionedByValueType(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByAdCreditID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsAdCreditsRedemptionsAmountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsAdCreditsRedemptionsCountPartitionedByAdCreditID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsAdCreditsRedemptionsCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsAdCreditsRefundsAmountPartitionedByAdCreditID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsAdCreditsRefundsAmountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsAdCreditsRefundsCountPartitionedByAdCreditID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsAdCreditsRefundsCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsAdCreditsScansCountPartitionedByAdCreditID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsAdCreditsScansCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsCampaignWalletPageViews(campaignID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTWalletPageView>;
    }>;
    fetchAnalyticsCampaignsCountPartitionedByCampaignID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsCampaignsCountPartitionedByEmployee(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsCampaignsCountPartitionedByPaymentDesign(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsCampaignsCountPartitionedByValueType(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsCampaignsRedemptionsAmountPartitionedByCampaignID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsCampaignsRedemptionsAmountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsCampaignsRedemptionsCountPartitionedByCampaignID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsCampaignsRedemptionsCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsCampaignsRefundsAmountPartitionedByCampaignID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsCampaignsRefundsAmountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsCampaignsRefundsCountPartitionedByCampaignID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsCampaignsRefundsCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsDeliveredOutboundMessagesCountPartitionedByPhoneNumber(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsDistinctWalletSessions(startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsDynamicVouchersCountPartitionedByEmployee(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsDynamicVouchersCountPartitionedByPaymentDesign(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsDynamicVouchersRedemptionsAmountPartitionedByDynamicVoucherID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsDynamicVouchersRedemptionsCountPartitionedByDynamicVoucherID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsDynamicVouchersRefundsAmountPartitionedByDynamicVoucherID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsDynamicVouchersRefundsCountPartitionedByDynamicVoucherID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsHelpDeskRequestsCreatedCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsHelpDeskRequestsResolvedCountPartitionedByEmployee(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsHelpDeskRequestsUnresolvedCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsItemWalletPageViews(itemID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsMemberCount(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<MSAnalyticsMemberCountPartitionedByDate>;
    }>;
    fetchAnalyticsMerchantCreditCount(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsOfferVsRedeemedAmountPartitionedByCampaignID(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsPaymentObjectBroadcastsCreatedCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsPaymentObjectBroadcastsIndividualExecutionTimeOfCompletedBroadcasts(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByEmployee(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsPaymentObjectBroadcastsScheduledCountPartitionedByPhoneNumber(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsPaymentObjectBroadcastsScheduledSMSCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsSentOutboundMessagesCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsSentOutboundMessagesCountPartitionedByPhoneNumber(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsStaticVoucherWalletPageViews(voucherID: any, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTWalletPageView>;
    }>;
    fetchAnalyticsTCPAFiltersCreateCountPartitionedByDate(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsTCPAFiltersDeleteCountPartitionedByDate(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsTCPAStopCountPartitionedByDate(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsTCPAStopCountPartitionedByPhoneNumber(startDate: Date, endDate: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<any>;
    }>;
    fetchAnalyticsTotalAmountRedeemedPerMerchantCredit(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsTotalAmountRedeemedPerTier(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate>;
    }>;
    fetchAnalyticsTotalAmountRefundedPerMerchantCredit(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    fetchAnalyticsTotalAmountRefundedPerTier(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<MSAnalyticsMembershipTierAmountRefundedPartitionedByDate>;
    }>;
    fetchAnalyticsTotalPointsRedeemed(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<MSAnalyticsMemberPointsRedeemedPartitionedByDate>;
    }>;
    fetchAnalyticsTotalPointsRefunded(startDate: Date, endDate: Date, locale: string, timezone: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<MSAnalyticsMemberPointsRefundedPartitionedByDate>;
    }>;
    fetchAnalyticsWalletSessionActivity(sessionID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WTWalletPageView>;
    }>;
    fetchWalletPageViewByID(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WalletPageView;
    }>;
    referringSitesSummary(startDate?: Date, endDate?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    sumRevenue(startDate: Date, endDate: Date, transactionType?: string, segmentType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
    sumTransactions(startDate: Date, endDate: Date, transactionType?: string, segmentType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: any;
    }>;
}
