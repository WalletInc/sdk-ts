import localVarRequest from 'request';

export * from './advertisementCredit';
export * from './advertisementCreditBroadcast';
export * from './advertisementCreditScan';
export * from './agreement';
export * from './amenity';
export * from './announcement';
export * from './applicableTerminals';
export * from './applicableTerminalsAnyOf';
export * from './applicableTerminalsAnyOf1';
export * from './applicableTerminalsAnyOf2';
export * from './applicableTerminalsAnyOf3';
export * from './applicableTerminalsAnyOf4';
export * from './applicableTerminalsAnyOf5';
export * from './applicableTerminalsAnyOf6';
export * from './authError';
export * from './availablePhoneNumbersRequest';
export * from './browserDetails';
export * from './clickFunnelAmount';
export * from './clickFunnelContact';
export * from './clickFunnelContactProfile';
export * from './clickFunnelEvent';
export * from './clickFunnelOriginalAmount';
export * from './clickFunnelProduct';
export * from './clickFunnelPurchase';
export * from './clickFunnelRegistration';
export * from './createStaticVoucherCampaign';
export * from './createStaticVoucherCampaignWithVoucherWithCSV';
export * from './dashboardWidget';
export * from './document';
export * from './duplicateRowFound';
export * from './dynamicVoucher';
export * from './dynamicVoucherBroadcast';
export * from './emailSubscriber';
export * from './employee';
export * from './employeeAPIKey';
export * from './employeeActivityLog';
export * from './employeeAlert';
export * from './entityTooLarge';
export * from './exportDataFile';
export * from './falsumError';
export * from './falsumField';
export * from './feature';
export * from './forbiddenRequest';
export * from './foreignKeyDoesNotExist';
export * from './helpDeskRequest';
export * from './imageGrid';
export * from './importedList';
export * from './importedListRecipient';
export * from './inboundSMS';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineResponse200';
export * from './inlineResponse2001';
export * from './inlineResponse20010';
export * from './inlineResponse2002';
export * from './inlineResponse2003';
export * from './inlineResponse2004';
export * from './inlineResponse2005';
export * from './inlineResponse2006';
export * from './inlineResponse2007';
export * from './inlineResponse2008';
export * from './inlineResponse2009';
export * from './internalServerError';
export * from './ledgerEntry';
export * from './linkBook';
export * from './linkBookSection';
export * from './mSAnalyticsMemberCountPartitionedByDate';
export * from './mSAnalyticsMemberPointsRedeemedPartitionedByDate';
export * from './mSAnalyticsMemberPointsRefundedPartitionedByDate';
export * from './mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate';
export * from './mSAnalyticsMembershipTierAmountRefundedPartitionedByDate';
export * from './mSMemberHistory';
export * from './mSMemberHistoryPagination';
export * from './mSMemberRedemption';
export * from './mSMemberRedemptionPagination';
export * from './mSMembershipTierHistory';
export * from './mSMembershipTierHistoryPagination';
export * from './mSMembershipTierRedemption';
export * from './mSMembershipTierRedemptionPagination';
export * from './mSMerchantCreditHistory';
export * from './mSMerchantCreditHistoryPagination';
export * from './mSMerchantCreditRedemption';
export * from './mSMerchantCreditRedemptionPagination';
export * from './mediaFile';
export * from './member';
export * from './memberSearch';
export * from './merchant';
export * from './merchantCreditSearch';
export * from './merchantNotInitialized';
export * from './merchantURL';
export * from './message';
export * from './moduleError';
export * from './newsArticle';
export * from './optInList';
export * from './optInListSource';
export * from './optInListSubscriber';
export * from './outboundSMS';
export * from './paginatedWTMembers';
export * from './paginatedWTMerchantCredits';
export * from './paginationRequestWithIDAndWithoutSortOptions';
export * from './paginationRequestWithSortOptions';
export * from './paymentDesign';
export * from './paymentPrefixes';
export * from './performance';
export * from './phoneNumber';
export * from './pickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherIsActive';
export * from './pickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID';
export * from './pickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID';
export * from './pickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId';
export * from './pickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier';
export * from './pickMSMemberExcludeKeyofMSMemberMemberIdentifier';
export * from './pickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier';
export * from './pickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier';
export * from './pickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey';
export * from './pickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded';
export * from './pickSSImportedListRecipientFromMembershipTierImportExcludeKeyofSSImportedListRecipientFromMembershipTierImportEmployeeIDOrTierID';
export * from './pickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId';
export * from './pickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId';
export * from './pickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeIDOrOptInConfirmedMediaURLsOrOptOutConfirmedMediaURLs';
export * from './pickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCount';
export * from './pickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId';
export * from './pickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId';
export * from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone';
export * from './pickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID';
export * from './pickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt';
export * from './pickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId';
export * from './pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate';
export * from './pickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType';
export * from './pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID';
export * from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId';
export * from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt';
export * from './pickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId';
export * from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail';
export * from './pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber';
export * from './pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber';
export * from './pickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID';
export * from './pickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId';
export * from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID';
export * from './pickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime';
export * from './pickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID';
export * from './plan';
export * from './portalPage';
export * from './presignedPost';
export * from './presignedPostFields';
export * from './product';
export * from './promoCode';
export * from './qRCodeDesign';
export * from './reachPerformanceStats';
export * from './request';
export * from './response';
export * from './role';
export * from './roleAuditLog';
export * from './roomRate';
export * from './sSImportedListRecipientCreateParams';
export * from './sSOptInSource';
export * from './sSOutboundStatuses';
export * from './sSOutboundStatusesAnyOf';
export * from './sSOutboundStatusesAnyOf1';
export * from './sSOutboundStatusesAnyOf2';
export * from './sSOutboundStatusesAnyOf3';
export * from './sSOutboundStatusesAnyOf4';
export * from './sSOutboundStatusesAnyOf5';
export * from './service';
export * from './simpleSMSBroadcast';
export * from './staticVoucher';
export * from './staticVoucherCampaign';
export * from './staticVoucherCampaignBroadcast';
export * from './staticVoucherCampaignGroup';
export * from './staticVoucherCampaignUpdate';
export * from './status';
export * from './statusAnyOf';
export * from './statusAnyOf1';
export * from './statusAnyOf2';
export * from './statusAnyOf3';
export * from './subscriptionFeature';
export * from './subscriptionPlan';
export * from './subscriptionProduct';
export * from './tcpa';
export * from './updateStaticVoucherCampaignWithVoucher';
export * from './vSCampaignGeneratedMessage';
export * from './vSCampaignGeneratedMessagePagination';
export * from './vSDynamicVoucherStatus';
export * from './virtualBusinessCard';
export * from './wTAdvertisementCredit';
export * from './wTAdvertisementCreditCreateParams';
export * from './wTAdvertisementCreditScan';
export * from './wTAdvertisementCreditUpdateParams';
export * from './wTAmenityCreateParams';
export * from './wTAmenityUpdateParams';
export * from './wTAuthenticationCheckSessionTokenStatusResponse';
export * from './wTAuthenticationForgotPassword';
export * from './wTAuthenticationLoginRequest';
export * from './wTAuthenticationLoginResponse';
export * from './wTAuthenticationRegister';
export * from './wTAuthenticationRequestResetPassword';
export * from './wTAuthenticationResetPassword';
export * from './wTAuthenticationSSOLoginForDiscourse';
export * from './wTBillingChangePlan';
export * from './wTBillingSavePaymentMethod';
export * from './wTBillingVerifyPaymentMethodResponse';
export * from './wTCountResult';
export * from './wTCustomerSearchByMemberID';
export * from './wTCustomerSearchByPhoneNumber';
export * from './wTDynamicVoucher';
export * from './wTDynamicVoucherCreateParams';
export * from './wTDynamicVoucherRedemption';
export * from './wTDynamicVoucherSummary';
export * from './wTDynamicVoucherUpdateParams';
export * from './wTEmailSubscriberCreateParams';
export * from './wTEmailSubscriberCreateParamsWalletUI';
export * from './wTEmailSubscriberUpdateParams';
export * from './wTEmployee';
export * from './wTEmployeeAPIKey';
export * from './wTEmployeeAPIKeyCreateParams';
export * from './wTEmployeeAPIKeyUpdateParams';
export * from './wTEmployeeCreate';
export * from './wTEmployeeCreateDocument';
export * from './wTEmployeeCreateMediaFile';
export * from './wTEmployeeCreateStaticVoucherCampaignGroup';
export * from './wTEmployeeFileCreate';
export * from './wTEmployeeImportRecords';
export * from './wTEmployeeNotification';
export * from './wTEmployeePeerRoles';
export * from './wTEmployeeS3FilePresign';
export * from './wTEmployeeScheduleSMSCampaignBroadcast';
export * from './wTEmployeeScheduleSimpleSMS';
export * from './wTEmployeeScheduleSimpleSMSToRecipient';
export * from './wTEmployeeSendHelpDeskResponse';
export * from './wTEmployeeUpdate';
export * from './wTEmployeeUpdateRecords';
export * from './wTFetchWalletPaymentObjectWithToken';
export * from './wTImageGridCreateParams';
export * from './wTImageGridUpdateParams';
export * from './wTImportedList';
export * from './wTImportedListRecipientFromMembershipTierImport';
export * from './wTInfoGenesisLookupRequestErrors';
export * from './wTInfoGenesisRecordFilterParameters';
export * from './wTInfoGenesisRoutingIDs';
export * from './wTInfoGenesisUniquePostingIDs';
export * from './wTLinkBook';
export * from './wTLinkBookCreateParams';
export * from './wTLinkBookSectionCreateParams';
export * from './wTLinkBookSectionUpdateParams';
export * from './wTLinkBookUpdateParams';
export * from './wTMember';
export * from './wTMemberCreationParams';
export * from './wTMembershipTier';
export * from './wTMembershipTierCreationParams';
export * from './wTMembershipTierUpdateParams';
export * from './wTMembershipTierWithMemberCount';
export * from './wTMerchantCredit';
export * from './wTMerchantCreditCreationParams';
export * from './wTMerchantURLCreate';
export * from './wTMerchantURLUpdate';
export * from './wTMerchantUpdate';
export * from './wTMerchantUpdatePOSIntegration';
export * from './wTMerchantUpdatePointsOfContact';
export * from './wTNewsArticleCreateParams';
export * from './wTNewsArticleUpdateParams';
export * from './wTOptInList';
export * from './wTOptInListCreationParams';
export * from './wTPaymentDesign';
export * from './wTPaymentDesignCreateParams';
export * from './wTPaymentDesignUpdateParams';
export * from './wTPerformanceCreateParams';
export * from './wTPerformanceUpdateParams';
export * from './wTPosMachine';
export * from './wTPosMachineCreateParams';
export * from './wTPosMachineUpdateParams';
export * from './wTProductCreateParams';
export * from './wTProductUpdateParams';
export * from './wTPromoCodeCreateParams';
export * from './wTPromoCodeUpdateParams';
export * from './wTQRCodeDesign';
export * from './wTQRCodeDesignCreateParams';
export * from './wTQRCodeDesignUpdateParams';
export * from './wTRole';
export * from './wTRoomRateCreateParams';
export * from './wTRoomRateUpdateParams';
export * from './wTSMSAcquirePhoneNumber';
export * from './wTSMSCreateAgreement';
export * from './wTSMSImportOptInListSubscribers';
export * from './wTSMSImportedListCreate';
export * from './wTSMSOptInListSourceCreate';
export * from './wTSMSUpdatePhoneNumberConfig';
export * from './wTServiceCreateParams';
export * from './wTServiceUpdateParams';
export * from './wTSettingsSetPassword';
export * from './wTStaticVoucher';
export * from './wTStaticVoucherCampaign';
export * from './wTStaticVoucherCampaignPreviewMessages';
export * from './wTStaticVoucherCampaignPreviewMessagesByPage';
export * from './wTStaticVoucherCreateParams';
export * from './wTStaticVoucherUpdateParams';
export * from './wTSystemApprovePhoneNumber';
export * from './wTSystemRoleCreate';
export * from './wTTCPAOpt';
export * from './wTTwilioRequestAuthyCode';
export * from './wTTwilioVerifyAuthyCode';
export * from './wTVirtualBusinessCardCreateParams';
export * from './wTVirtualBusinessCardUpdateParams';
export * from './wTWalletConfigurationSaveWalletRecord';
export * from './wTWalletItemRedemption';
export * from './wTWalletObjectPrefixCounts';
export * from './wTWalletPageView';
export * from './wTWalletPageViewCount';
export * from './wTWalletPageViewGeoPoint';
export * from './walletConfiguration';
export * from './walletPageView';
export * from './webpage';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AdvertisementCredit } from './advertisementCredit';
import { AdvertisementCreditBroadcast } from './advertisementCreditBroadcast';
import { AdvertisementCreditScan } from './advertisementCreditScan';
import { Agreement } from './agreement';
import { Amenity } from './amenity';
import { Announcement } from './announcement';
import { ApplicableTerminals } from './applicableTerminals';
import { ApplicableTerminalsAnyOf } from './applicableTerminalsAnyOf';
import { ApplicableTerminalsAnyOf1 } from './applicableTerminalsAnyOf1';
import { ApplicableTerminalsAnyOf2 } from './applicableTerminalsAnyOf2';
import { ApplicableTerminalsAnyOf3 } from './applicableTerminalsAnyOf3';
import { ApplicableTerminalsAnyOf4 } from './applicableTerminalsAnyOf4';
import { ApplicableTerminalsAnyOf5 } from './applicableTerminalsAnyOf5';
import { ApplicableTerminalsAnyOf6 } from './applicableTerminalsAnyOf6';
import { AuthError } from './authError';
import { AvailablePhoneNumbersRequest } from './availablePhoneNumbersRequest';
import { BrowserDetails } from './browserDetails';
import { ClickFunnelAmount } from './clickFunnelAmount';
import { ClickFunnelContact } from './clickFunnelContact';
import { ClickFunnelContactProfile } from './clickFunnelContactProfile';
import { ClickFunnelEvent } from './clickFunnelEvent';
import { ClickFunnelOriginalAmount } from './clickFunnelOriginalAmount';
import { ClickFunnelProduct } from './clickFunnelProduct';
import { ClickFunnelPurchase } from './clickFunnelPurchase';
import { ClickFunnelRegistration } from './clickFunnelRegistration';
import { CreateStaticVoucherCampaign } from './createStaticVoucherCampaign';
import { CreateStaticVoucherCampaignWithVoucherWithCSV } from './createStaticVoucherCampaignWithVoucherWithCSV';
import { DashboardWidget } from './dashboardWidget';
import { Document } from './document';
import { DuplicateRowFound } from './duplicateRowFound';
import { DynamicVoucher } from './dynamicVoucher';
import { DynamicVoucherBroadcast } from './dynamicVoucherBroadcast';
import { EmailSubscriber } from './emailSubscriber';
import { Employee } from './employee';
import { EmployeeAPIKey } from './employeeAPIKey';
import { EmployeeActivityLog } from './employeeActivityLog';
import { EmployeeAlert } from './employeeAlert';
import { EntityTooLarge } from './entityTooLarge';
import { ExportDataFile } from './exportDataFile';
import { FalsumError } from './falsumError';
import { FalsumField } from './falsumField';
import { Feature } from './feature';
import { ForbiddenRequest } from './forbiddenRequest';
import { ForeignKeyDoesNotExist } from './foreignKeyDoesNotExist';
import { HelpDeskRequest } from './helpDeskRequest';
import { ImageGrid } from './imageGrid';
import { ImportedList } from './importedList';
import { ImportedListRecipient } from './importedListRecipient';
import { InboundSMS } from './inboundSMS';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineResponse200 } from './inlineResponse200';
import { InlineResponse2001 } from './inlineResponse2001';
import { InlineResponse20010 } from './inlineResponse20010';
import { InlineResponse2002 } from './inlineResponse2002';
import { InlineResponse2003 } from './inlineResponse2003';
import { InlineResponse2004 } from './inlineResponse2004';
import { InlineResponse2005 } from './inlineResponse2005';
import { InlineResponse2006 } from './inlineResponse2006';
import { InlineResponse2007 } from './inlineResponse2007';
import { InlineResponse2008 } from './inlineResponse2008';
import { InlineResponse2009 } from './inlineResponse2009';
import { InternalServerError } from './internalServerError';
import { LedgerEntry } from './ledgerEntry';
import { LinkBook } from './linkBook';
import { LinkBookSection } from './linkBookSection';
import { MSAnalyticsMemberCountPartitionedByDate } from './mSAnalyticsMemberCountPartitionedByDate';
import { MSAnalyticsMemberPointsRedeemedPartitionedByDate } from './mSAnalyticsMemberPointsRedeemedPartitionedByDate';
import { MSAnalyticsMemberPointsRefundedPartitionedByDate } from './mSAnalyticsMemberPointsRefundedPartitionedByDate';
import { MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate } from './mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate';
import { MSAnalyticsMembershipTierAmountRefundedPartitionedByDate } from './mSAnalyticsMembershipTierAmountRefundedPartitionedByDate';
import { MSMemberHistory } from './mSMemberHistory';
import { MSMemberHistoryPagination } from './mSMemberHistoryPagination';
import { MSMemberRedemption } from './mSMemberRedemption';
import { MSMemberRedemptionPagination } from './mSMemberRedemptionPagination';
import { MSMembershipTierHistory } from './mSMembershipTierHistory';
import { MSMembershipTierHistoryPagination } from './mSMembershipTierHistoryPagination';
import { MSMembershipTierRedemption } from './mSMembershipTierRedemption';
import { MSMembershipTierRedemptionPagination } from './mSMembershipTierRedemptionPagination';
import { MSMerchantCreditHistory } from './mSMerchantCreditHistory';
import { MSMerchantCreditHistoryPagination } from './mSMerchantCreditHistoryPagination';
import { MSMerchantCreditRedemption } from './mSMerchantCreditRedemption';
import { MSMerchantCreditRedemptionPagination } from './mSMerchantCreditRedemptionPagination';
import { MediaFile } from './mediaFile';
import { Member } from './member';
import { MemberSearch } from './memberSearch';
import { Merchant } from './merchant';
import { MerchantCreditSearch } from './merchantCreditSearch';
import { MerchantNotInitialized } from './merchantNotInitialized';
import { MerchantURL } from './merchantURL';
import { Message } from './message';
import { ModuleError } from './moduleError';
import { NewsArticle } from './newsArticle';
import { OptInList } from './optInList';
import { OptInListSource } from './optInListSource';
import { OptInListSubscriber } from './optInListSubscriber';
import { OutboundSMS } from './outboundSMS';
import { PaginatedWTMembers } from './paginatedWTMembers';
import { PaginatedWTMerchantCredits } from './paginatedWTMerchantCredits';
import { PaginationRequestWithIDAndWithoutSortOptions } from './paginationRequestWithIDAndWithoutSortOptions';
import { PaginationRequestWithSortOptions } from './paginationRequestWithSortOptions';
import { PaymentDesign } from './paymentDesign';
import { PaymentPrefixes } from './paymentPrefixes';
import { Performance } from './performance';
import { PhoneNumber } from './phoneNumber';
import { PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherIsActive } from './pickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherIsActive';
import { PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID } from './pickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID';
import { PickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID } from './pickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID';
import { PickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId } from './pickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId';
import { PickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier } from './pickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier';
import { PickMSMemberExcludeKeyofMSMemberMemberIdentifier } from './pickMSMemberExcludeKeyofMSMemberMemberIdentifier';
import { PickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier } from './pickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier';
import { PickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier } from './pickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier';
import { PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey } from './pickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey';
import { PickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded } from './pickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded';
import { PickSSImportedListRecipientFromMembershipTierImportExcludeKeyofSSImportedListRecipientFromMembershipTierImportEmployeeIDOrTierID } from './pickSSImportedListRecipientFromMembershipTierImportExcludeKeyofSSImportedListRecipientFromMembershipTierImportEmployeeIDOrTierID';
import { PickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId } from './pickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId';
import { PickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId } from './pickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId';
import { PickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeIDOrOptInConfirmedMediaURLsOrOptOutConfirmedMediaURLs } from './pickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeIDOrOptInConfirmedMediaURLsOrOptOutConfirmedMediaURLs';
import { PickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCount } from './pickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCount';
import { PickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId } from './pickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId';
import { PickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId } from './pickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId';
import { PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone } from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone';
import { PickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID } from './pickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID';
import { PickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt } from './pickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt';
import { PickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId } from './pickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId';
import { PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate } from './pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate';
import { PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType } from './pickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType';
import { PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID } from './pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID';
import { PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId } from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt';
import { PickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId } from './pickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail';
import { PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber } from './pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber';
import { PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber } from './pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber';
import { PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID } from './pickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID';
import { PickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId } from './pickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId';
import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID';
import { PickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime } from './pickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime';
import { PickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID } from './pickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID';
import { Plan } from './plan';
import { PortalPage } from './portalPage';
import { PresignedPost } from './presignedPost';
import { PresignedPostFields } from './presignedPostFields';
import { Product } from './product';
import { PromoCode } from './promoCode';
import { QRCodeDesign } from './qRCodeDesign';
import { ReachPerformanceStats } from './reachPerformanceStats';
import { Request } from './request';
import { Response } from './response';
import { Role } from './role';
import { RoleAuditLog } from './roleAuditLog';
import { RoomRate } from './roomRate';
import { SSImportedListRecipientCreateParams } from './sSImportedListRecipientCreateParams';
import { SSOptInSource } from './sSOptInSource';
import { SSOutboundStatuses } from './sSOutboundStatuses';
import { SSOutboundStatusesAnyOf } from './sSOutboundStatusesAnyOf';
import { SSOutboundStatusesAnyOf1 } from './sSOutboundStatusesAnyOf1';
import { SSOutboundStatusesAnyOf2 } from './sSOutboundStatusesAnyOf2';
import { SSOutboundStatusesAnyOf3 } from './sSOutboundStatusesAnyOf3';
import { SSOutboundStatusesAnyOf4 } from './sSOutboundStatusesAnyOf4';
import { SSOutboundStatusesAnyOf5 } from './sSOutboundStatusesAnyOf5';
import { Service } from './service';
import { SimpleSMSBroadcast } from './simpleSMSBroadcast';
import { StaticVoucher } from './staticVoucher';
import { StaticVoucherCampaign } from './staticVoucherCampaign';
import { StaticVoucherCampaignBroadcast } from './staticVoucherCampaignBroadcast';
import { StaticVoucherCampaignGroup } from './staticVoucherCampaignGroup';
import { StaticVoucherCampaignUpdate } from './staticVoucherCampaignUpdate';
import { Status } from './status';
import { StatusAnyOf } from './statusAnyOf';
import { StatusAnyOf1 } from './statusAnyOf1';
import { StatusAnyOf2 } from './statusAnyOf2';
import { StatusAnyOf3 } from './statusAnyOf3';
import { SubscriptionFeature } from './subscriptionFeature';
import { SubscriptionPlan } from './subscriptionPlan';
import { SubscriptionProduct } from './subscriptionProduct';
import { Tcpa } from './tcpa';
import { UpdateStaticVoucherCampaignWithVoucher } from './updateStaticVoucherCampaignWithVoucher';
import { VSCampaignGeneratedMessage } from './vSCampaignGeneratedMessage';
import { VSCampaignGeneratedMessagePagination } from './vSCampaignGeneratedMessagePagination';
import { VSDynamicVoucherStatus } from './vSDynamicVoucherStatus';
import { VirtualBusinessCard } from './virtualBusinessCard';
import { WTAdvertisementCredit } from './wTAdvertisementCredit';
import { WTAdvertisementCreditCreateParams } from './wTAdvertisementCreditCreateParams';
import { WTAdvertisementCreditScan } from './wTAdvertisementCreditScan';
import { WTAdvertisementCreditUpdateParams } from './wTAdvertisementCreditUpdateParams';
import { WTAmenityCreateParams } from './wTAmenityCreateParams';
import { WTAmenityUpdateParams } from './wTAmenityUpdateParams';
import { WTAuthenticationCheckSessionTokenStatusResponse } from './wTAuthenticationCheckSessionTokenStatusResponse';
import { WTAuthenticationForgotPassword } from './wTAuthenticationForgotPassword';
import { WTAuthenticationLoginRequest } from './wTAuthenticationLoginRequest';
import { WTAuthenticationLoginResponse } from './wTAuthenticationLoginResponse';
import { WTAuthenticationRegister } from './wTAuthenticationRegister';
import { WTAuthenticationRequestResetPassword } from './wTAuthenticationRequestResetPassword';
import { WTAuthenticationResetPassword } from './wTAuthenticationResetPassword';
import { WTAuthenticationSSOLoginForDiscourse } from './wTAuthenticationSSOLoginForDiscourse';
import { WTBillingChangePlan } from './wTBillingChangePlan';
import { WTBillingSavePaymentMethod } from './wTBillingSavePaymentMethod';
import { WTBillingVerifyPaymentMethodResponse } from './wTBillingVerifyPaymentMethodResponse';
import { WTCountResult } from './wTCountResult';
import { WTCustomerSearchByMemberID } from './wTCustomerSearchByMemberID';
import { WTCustomerSearchByPhoneNumber } from './wTCustomerSearchByPhoneNumber';
import { WTDynamicVoucher } from './wTDynamicVoucher';
import { WTDynamicVoucherCreateParams } from './wTDynamicVoucherCreateParams';
import { WTDynamicVoucherRedemption } from './wTDynamicVoucherRedemption';
import { WTDynamicVoucherSummary } from './wTDynamicVoucherSummary';
import { WTDynamicVoucherUpdateParams } from './wTDynamicVoucherUpdateParams';
import { WTEmailSubscriberCreateParams } from './wTEmailSubscriberCreateParams';
import { WTEmailSubscriberCreateParamsWalletUI } from './wTEmailSubscriberCreateParamsWalletUI';
import { WTEmailSubscriberUpdateParams } from './wTEmailSubscriberUpdateParams';
import { WTEmployee } from './wTEmployee';
import { WTEmployeeAPIKey } from './wTEmployeeAPIKey';
import { WTEmployeeAPIKeyCreateParams } from './wTEmployeeAPIKeyCreateParams';
import { WTEmployeeAPIKeyUpdateParams } from './wTEmployeeAPIKeyUpdateParams';
import { WTEmployeeCreate } from './wTEmployeeCreate';
import { WTEmployeeCreateDocument } from './wTEmployeeCreateDocument';
import { WTEmployeeCreateMediaFile } from './wTEmployeeCreateMediaFile';
import { WTEmployeeCreateStaticVoucherCampaignGroup } from './wTEmployeeCreateStaticVoucherCampaignGroup';
import { WTEmployeeFileCreate } from './wTEmployeeFileCreate';
import { WTEmployeeImportRecords } from './wTEmployeeImportRecords';
import { WTEmployeeNotification } from './wTEmployeeNotification';
import { WTEmployeePeerRoles } from './wTEmployeePeerRoles';
import { WTEmployeeS3FilePresign } from './wTEmployeeS3FilePresign';
import { WTEmployeeScheduleSMSCampaignBroadcast } from './wTEmployeeScheduleSMSCampaignBroadcast';
import { WTEmployeeScheduleSimpleSMS } from './wTEmployeeScheduleSimpleSMS';
import { WTEmployeeScheduleSimpleSMSToRecipient } from './wTEmployeeScheduleSimpleSMSToRecipient';
import { WTEmployeeSendHelpDeskResponse } from './wTEmployeeSendHelpDeskResponse';
import { WTEmployeeUpdate } from './wTEmployeeUpdate';
import { WTEmployeeUpdateRecords } from './wTEmployeeUpdateRecords';
import { WTFetchWalletPaymentObjectWithToken } from './wTFetchWalletPaymentObjectWithToken';
import { WTImageGridCreateParams } from './wTImageGridCreateParams';
import { WTImageGridUpdateParams } from './wTImageGridUpdateParams';
import { WTImportedList } from './wTImportedList';
import { WTImportedListRecipientFromMembershipTierImport } from './wTImportedListRecipientFromMembershipTierImport';
import { WTInfoGenesisLookupRequestErrors } from './wTInfoGenesisLookupRequestErrors';
import { WTInfoGenesisRecordFilterParameters } from './wTInfoGenesisRecordFilterParameters';
import { WTInfoGenesisRoutingIDs } from './wTInfoGenesisRoutingIDs';
import { WTInfoGenesisUniquePostingIDs } from './wTInfoGenesisUniquePostingIDs';
import { WTLinkBook } from './wTLinkBook';
import { WTLinkBookCreateParams } from './wTLinkBookCreateParams';
import { WTLinkBookSectionCreateParams } from './wTLinkBookSectionCreateParams';
import { WTLinkBookSectionUpdateParams } from './wTLinkBookSectionUpdateParams';
import { WTLinkBookUpdateParams } from './wTLinkBookUpdateParams';
import { WTMember } from './wTMember';
import { WTMemberCreationParams } from './wTMemberCreationParams';
import { WTMembershipTier } from './wTMembershipTier';
import { WTMembershipTierCreationParams } from './wTMembershipTierCreationParams';
import { WTMembershipTierUpdateParams } from './wTMembershipTierUpdateParams';
import { WTMembershipTierWithMemberCount } from './wTMembershipTierWithMemberCount';
import { WTMerchantCredit } from './wTMerchantCredit';
import { WTMerchantCreditCreationParams } from './wTMerchantCreditCreationParams';
import { WTMerchantURLCreate } from './wTMerchantURLCreate';
import { WTMerchantURLUpdate } from './wTMerchantURLUpdate';
import { WTMerchantUpdate } from './wTMerchantUpdate';
import { WTMerchantUpdatePOSIntegration } from './wTMerchantUpdatePOSIntegration';
import { WTMerchantUpdatePointsOfContact } from './wTMerchantUpdatePointsOfContact';
import { WTNewsArticleCreateParams } from './wTNewsArticleCreateParams';
import { WTNewsArticleUpdateParams } from './wTNewsArticleUpdateParams';
import { WTOptInList } from './wTOptInList';
import { WTOptInListCreationParams } from './wTOptInListCreationParams';
import { WTPaymentDesign } from './wTPaymentDesign';
import { WTPaymentDesignCreateParams } from './wTPaymentDesignCreateParams';
import { WTPaymentDesignUpdateParams } from './wTPaymentDesignUpdateParams';
import { WTPerformanceCreateParams } from './wTPerformanceCreateParams';
import { WTPerformanceUpdateParams } from './wTPerformanceUpdateParams';
import { WTPosMachine } from './wTPosMachine';
import { WTPosMachineCreateParams } from './wTPosMachineCreateParams';
import { WTPosMachineUpdateParams } from './wTPosMachineUpdateParams';
import { WTProductCreateParams } from './wTProductCreateParams';
import { WTProductUpdateParams } from './wTProductUpdateParams';
import { WTPromoCodeCreateParams } from './wTPromoCodeCreateParams';
import { WTPromoCodeUpdateParams } from './wTPromoCodeUpdateParams';
import { WTQRCodeDesign } from './wTQRCodeDesign';
import { WTQRCodeDesignCreateParams } from './wTQRCodeDesignCreateParams';
import { WTQRCodeDesignUpdateParams } from './wTQRCodeDesignUpdateParams';
import { WTRole } from './wTRole';
import { WTRoomRateCreateParams } from './wTRoomRateCreateParams';
import { WTRoomRateUpdateParams } from './wTRoomRateUpdateParams';
import { WTSMSAcquirePhoneNumber } from './wTSMSAcquirePhoneNumber';
import { WTSMSCreateAgreement } from './wTSMSCreateAgreement';
import { WTSMSImportOptInListSubscribers } from './wTSMSImportOptInListSubscribers';
import { WTSMSImportedListCreate } from './wTSMSImportedListCreate';
import { WTSMSOptInListSourceCreate } from './wTSMSOptInListSourceCreate';
import { WTSMSUpdatePhoneNumberConfig } from './wTSMSUpdatePhoneNumberConfig';
import { WTServiceCreateParams } from './wTServiceCreateParams';
import { WTServiceUpdateParams } from './wTServiceUpdateParams';
import { WTSettingsSetPassword } from './wTSettingsSetPassword';
import { WTStaticVoucher } from './wTStaticVoucher';
import { WTStaticVoucherCampaign } from './wTStaticVoucherCampaign';
import { WTStaticVoucherCampaignPreviewMessages } from './wTStaticVoucherCampaignPreviewMessages';
import { WTStaticVoucherCampaignPreviewMessagesByPage } from './wTStaticVoucherCampaignPreviewMessagesByPage';
import { WTStaticVoucherCreateParams } from './wTStaticVoucherCreateParams';
import { WTStaticVoucherUpdateParams } from './wTStaticVoucherUpdateParams';
import { WTSystemApprovePhoneNumber } from './wTSystemApprovePhoneNumber';
import { WTSystemRoleCreate } from './wTSystemRoleCreate';
import { WTTCPAOpt } from './wTTCPAOpt';
import { WTTwilioRequestAuthyCode } from './wTTwilioRequestAuthyCode';
import { WTTwilioVerifyAuthyCode } from './wTTwilioVerifyAuthyCode';
import { WTVirtualBusinessCardCreateParams } from './wTVirtualBusinessCardCreateParams';
import { WTVirtualBusinessCardUpdateParams } from './wTVirtualBusinessCardUpdateParams';
import { WTWalletConfigurationSaveWalletRecord } from './wTWalletConfigurationSaveWalletRecord';
import { WTWalletItemRedemption } from './wTWalletItemRedemption';
import { WTWalletObjectPrefixCounts } from './wTWalletObjectPrefixCounts';
import { WTWalletPageView } from './wTWalletPageView';
import { WTWalletPageViewCount } from './wTWalletPageViewCount';
import { WTWalletPageViewGeoPoint } from './wTWalletPageViewGeoPoint';
import { WalletConfiguration } from './walletConfiguration';
import { WalletPageView } from './walletPageView';
import { Webpage } from './webpage';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ApplicableTerminalsAnyOf": ApplicableTerminalsAnyOf,
        "ApplicableTerminalsAnyOf1": ApplicableTerminalsAnyOf1,
        "ApplicableTerminalsAnyOf2": ApplicableTerminalsAnyOf2,
        "ApplicableTerminalsAnyOf3": ApplicableTerminalsAnyOf3,
        "ApplicableTerminalsAnyOf4": ApplicableTerminalsAnyOf4,
        "ApplicableTerminalsAnyOf5": ApplicableTerminalsAnyOf5,
        "ApplicableTerminalsAnyOf6": ApplicableTerminalsAnyOf6,
        "PaginationRequestWithSortOptions.SortKeyEnum": PaginationRequestWithSortOptions.SortKeyEnum,
        "PortalPage": PortalPage,
        "SSOutboundStatusesAnyOf": SSOutboundStatusesAnyOf,
        "SSOutboundStatusesAnyOf1": SSOutboundStatusesAnyOf1,
        "SSOutboundStatusesAnyOf2": SSOutboundStatusesAnyOf2,
        "SSOutboundStatusesAnyOf3": SSOutboundStatusesAnyOf3,
        "SSOutboundStatusesAnyOf4": SSOutboundStatusesAnyOf4,
        "SSOutboundStatusesAnyOf5": SSOutboundStatusesAnyOf5,
        "StatusAnyOf": StatusAnyOf,
        "StatusAnyOf1": StatusAnyOf1,
        "StatusAnyOf2": StatusAnyOf2,
        "StatusAnyOf3": StatusAnyOf3,
        "WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum": WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "AdvertisementCredit": AdvertisementCredit,
    "AdvertisementCreditBroadcast": AdvertisementCreditBroadcast,
    "AdvertisementCreditScan": AdvertisementCreditScan,
    "Agreement": Agreement,
    "Amenity": Amenity,
    "Announcement": Announcement,
    "ApplicableTerminals": ApplicableTerminals,
    "AuthError": AuthError,
    "AvailablePhoneNumbersRequest": AvailablePhoneNumbersRequest,
    "BrowserDetails": BrowserDetails,
    "ClickFunnelAmount": ClickFunnelAmount,
    "ClickFunnelContact": ClickFunnelContact,
    "ClickFunnelContactProfile": ClickFunnelContactProfile,
    "ClickFunnelEvent": ClickFunnelEvent,
    "ClickFunnelOriginalAmount": ClickFunnelOriginalAmount,
    "ClickFunnelProduct": ClickFunnelProduct,
    "ClickFunnelPurchase": ClickFunnelPurchase,
    "ClickFunnelRegistration": ClickFunnelRegistration,
    "CreateStaticVoucherCampaign": CreateStaticVoucherCampaign,
    "CreateStaticVoucherCampaignWithVoucherWithCSV": CreateStaticVoucherCampaignWithVoucherWithCSV,
    "DashboardWidget": DashboardWidget,
    "Document": Document,
    "DuplicateRowFound": DuplicateRowFound,
    "DynamicVoucher": DynamicVoucher,
    "DynamicVoucherBroadcast": DynamicVoucherBroadcast,
    "EmailSubscriber": EmailSubscriber,
    "Employee": Employee,
    "EmployeeAPIKey": EmployeeAPIKey,
    "EmployeeActivityLog": EmployeeActivityLog,
    "EmployeeAlert": EmployeeAlert,
    "EntityTooLarge": EntityTooLarge,
    "ExportDataFile": ExportDataFile,
    "FalsumError": FalsumError,
    "FalsumField": FalsumField,
    "Feature": Feature,
    "ForbiddenRequest": ForbiddenRequest,
    "ForeignKeyDoesNotExist": ForeignKeyDoesNotExist,
    "HelpDeskRequest": HelpDeskRequest,
    "ImageGrid": ImageGrid,
    "ImportedList": ImportedList,
    "ImportedListRecipient": ImportedListRecipient,
    "InboundSMS": InboundSMS,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineResponse200": InlineResponse200,
    "InlineResponse2001": InlineResponse2001,
    "InlineResponse20010": InlineResponse20010,
    "InlineResponse2002": InlineResponse2002,
    "InlineResponse2003": InlineResponse2003,
    "InlineResponse2004": InlineResponse2004,
    "InlineResponse2005": InlineResponse2005,
    "InlineResponse2006": InlineResponse2006,
    "InlineResponse2007": InlineResponse2007,
    "InlineResponse2008": InlineResponse2008,
    "InlineResponse2009": InlineResponse2009,
    "InternalServerError": InternalServerError,
    "LedgerEntry": LedgerEntry,
    "LinkBook": LinkBook,
    "LinkBookSection": LinkBookSection,
    "MSAnalyticsMemberCountPartitionedByDate": MSAnalyticsMemberCountPartitionedByDate,
    "MSAnalyticsMemberPointsRedeemedPartitionedByDate": MSAnalyticsMemberPointsRedeemedPartitionedByDate,
    "MSAnalyticsMemberPointsRefundedPartitionedByDate": MSAnalyticsMemberPointsRefundedPartitionedByDate,
    "MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate": MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate,
    "MSAnalyticsMembershipTierAmountRefundedPartitionedByDate": MSAnalyticsMembershipTierAmountRefundedPartitionedByDate,
    "MSMemberHistory": MSMemberHistory,
    "MSMemberHistoryPagination": MSMemberHistoryPagination,
    "MSMemberRedemption": MSMemberRedemption,
    "MSMemberRedemptionPagination": MSMemberRedemptionPagination,
    "MSMembershipTierHistory": MSMembershipTierHistory,
    "MSMembershipTierHistoryPagination": MSMembershipTierHistoryPagination,
    "MSMembershipTierRedemption": MSMembershipTierRedemption,
    "MSMembershipTierRedemptionPagination": MSMembershipTierRedemptionPagination,
    "MSMerchantCreditHistory": MSMerchantCreditHistory,
    "MSMerchantCreditHistoryPagination": MSMerchantCreditHistoryPagination,
    "MSMerchantCreditRedemption": MSMerchantCreditRedemption,
    "MSMerchantCreditRedemptionPagination": MSMerchantCreditRedemptionPagination,
    "MediaFile": MediaFile,
    "Member": Member,
    "MemberSearch": MemberSearch,
    "Merchant": Merchant,
    "MerchantCreditSearch": MerchantCreditSearch,
    "MerchantNotInitialized": MerchantNotInitialized,
    "MerchantURL": MerchantURL,
    "Message": Message,
    "ModuleError": ModuleError,
    "NewsArticle": NewsArticle,
    "OptInList": OptInList,
    "OptInListSource": OptInListSource,
    "OptInListSubscriber": OptInListSubscriber,
    "OutboundSMS": OutboundSMS,
    "PaginatedWTMembers": PaginatedWTMembers,
    "PaginatedWTMerchantCredits": PaginatedWTMerchantCredits,
    "PaginationRequestWithIDAndWithoutSortOptions": PaginationRequestWithIDAndWithoutSortOptions,
    "PaginationRequestWithSortOptions": PaginationRequestWithSortOptions,
    "PaymentDesign": PaymentDesign,
    "PaymentPrefixes": PaymentPrefixes,
    "Performance": Performance,
    "PhoneNumber": PhoneNumber,
    "PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherIsActive": PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherIsActive,
    "PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID": PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID,
    "PickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID": PickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID,
    "PickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId": PickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId,
    "PickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier": PickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier,
    "PickMSMemberExcludeKeyofMSMemberMemberIdentifier": PickMSMemberExcludeKeyofMSMemberMemberIdentifier,
    "PickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier": PickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier,
    "PickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier": PickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier,
    "PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey": PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey,
    "PickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded": PickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded,
    "PickSSImportedListRecipientFromMembershipTierImportExcludeKeyofSSImportedListRecipientFromMembershipTierImportEmployeeIDOrTierID": PickSSImportedListRecipientFromMembershipTierImportExcludeKeyofSSImportedListRecipientFromMembershipTierImportEmployeeIDOrTierID,
    "PickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId": PickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId,
    "PickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId": PickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId,
    "PickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeIDOrOptInConfirmedMediaURLsOrOptOutConfirmedMediaURLs": PickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeIDOrOptInConfirmedMediaURLsOrOptOutConfirmedMediaURLs,
    "PickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCount": PickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCount,
    "PickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId": PickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId,
    "PickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId": PickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId,
    "PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone": PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone,
    "PickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID": PickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID,
    "PickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt": PickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt,
    "PickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId": PickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId,
    "PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate": PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate,
    "PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType": PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType,
    "PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID": PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID,
    "PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId": PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId,
    "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt": PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt,
    "PickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId": PickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId,
    "PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail": PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail,
    "PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber": PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber,
    "PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber": PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber,
    "PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID": PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID,
    "PickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId": PickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId,
    "PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID": PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID,
    "PickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime": PickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime,
    "PickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID": PickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID,
    "Plan": Plan,
    "PresignedPost": PresignedPost,
    "PresignedPostFields": PresignedPostFields,
    "Product": Product,
    "PromoCode": PromoCode,
    "QRCodeDesign": QRCodeDesign,
    "ReachPerformanceStats": ReachPerformanceStats,
    "Request": Request,
    "Response": Response,
    "Role": Role,
    "RoleAuditLog": RoleAuditLog,
    "RoomRate": RoomRate,
    "SSImportedListRecipientCreateParams": SSImportedListRecipientCreateParams,
    "SSOptInSource": SSOptInSource,
    "SSOutboundStatuses": SSOutboundStatuses,
    "Service": Service,
    "SimpleSMSBroadcast": SimpleSMSBroadcast,
    "StaticVoucher": StaticVoucher,
    "StaticVoucherCampaign": StaticVoucherCampaign,
    "StaticVoucherCampaignBroadcast": StaticVoucherCampaignBroadcast,
    "StaticVoucherCampaignGroup": StaticVoucherCampaignGroup,
    "StaticVoucherCampaignUpdate": StaticVoucherCampaignUpdate,
    "Status": Status,
    "SubscriptionFeature": SubscriptionFeature,
    "SubscriptionPlan": SubscriptionPlan,
    "SubscriptionProduct": SubscriptionProduct,
    "Tcpa": Tcpa,
    "UpdateStaticVoucherCampaignWithVoucher": UpdateStaticVoucherCampaignWithVoucher,
    "VSCampaignGeneratedMessage": VSCampaignGeneratedMessage,
    "VSCampaignGeneratedMessagePagination": VSCampaignGeneratedMessagePagination,
    "VSDynamicVoucherStatus": VSDynamicVoucherStatus,
    "VirtualBusinessCard": VirtualBusinessCard,
    "WTAdvertisementCredit": WTAdvertisementCredit,
    "WTAdvertisementCreditCreateParams": WTAdvertisementCreditCreateParams,
    "WTAdvertisementCreditScan": WTAdvertisementCreditScan,
    "WTAdvertisementCreditUpdateParams": WTAdvertisementCreditUpdateParams,
    "WTAmenityCreateParams": WTAmenityCreateParams,
    "WTAmenityUpdateParams": WTAmenityUpdateParams,
    "WTAuthenticationCheckSessionTokenStatusResponse": WTAuthenticationCheckSessionTokenStatusResponse,
    "WTAuthenticationForgotPassword": WTAuthenticationForgotPassword,
    "WTAuthenticationLoginRequest": WTAuthenticationLoginRequest,
    "WTAuthenticationLoginResponse": WTAuthenticationLoginResponse,
    "WTAuthenticationRegister": WTAuthenticationRegister,
    "WTAuthenticationRequestResetPassword": WTAuthenticationRequestResetPassword,
    "WTAuthenticationResetPassword": WTAuthenticationResetPassword,
    "WTAuthenticationSSOLoginForDiscourse": WTAuthenticationSSOLoginForDiscourse,
    "WTBillingChangePlan": WTBillingChangePlan,
    "WTBillingSavePaymentMethod": WTBillingSavePaymentMethod,
    "WTBillingVerifyPaymentMethodResponse": WTBillingVerifyPaymentMethodResponse,
    "WTCountResult": WTCountResult,
    "WTCustomerSearchByMemberID": WTCustomerSearchByMemberID,
    "WTCustomerSearchByPhoneNumber": WTCustomerSearchByPhoneNumber,
    "WTDynamicVoucher": WTDynamicVoucher,
    "WTDynamicVoucherCreateParams": WTDynamicVoucherCreateParams,
    "WTDynamicVoucherRedemption": WTDynamicVoucherRedemption,
    "WTDynamicVoucherSummary": WTDynamicVoucherSummary,
    "WTDynamicVoucherUpdateParams": WTDynamicVoucherUpdateParams,
    "WTEmailSubscriberCreateParams": WTEmailSubscriberCreateParams,
    "WTEmailSubscriberCreateParamsWalletUI": WTEmailSubscriberCreateParamsWalletUI,
    "WTEmailSubscriberUpdateParams": WTEmailSubscriberUpdateParams,
    "WTEmployee": WTEmployee,
    "WTEmployeeAPIKey": WTEmployeeAPIKey,
    "WTEmployeeAPIKeyCreateParams": WTEmployeeAPIKeyCreateParams,
    "WTEmployeeAPIKeyUpdateParams": WTEmployeeAPIKeyUpdateParams,
    "WTEmployeeCreate": WTEmployeeCreate,
    "WTEmployeeCreateDocument": WTEmployeeCreateDocument,
    "WTEmployeeCreateMediaFile": WTEmployeeCreateMediaFile,
    "WTEmployeeCreateStaticVoucherCampaignGroup": WTEmployeeCreateStaticVoucherCampaignGroup,
    "WTEmployeeFileCreate": WTEmployeeFileCreate,
    "WTEmployeeImportRecords": WTEmployeeImportRecords,
    "WTEmployeeNotification": WTEmployeeNotification,
    "WTEmployeePeerRoles": WTEmployeePeerRoles,
    "WTEmployeeS3FilePresign": WTEmployeeS3FilePresign,
    "WTEmployeeScheduleSMSCampaignBroadcast": WTEmployeeScheduleSMSCampaignBroadcast,
    "WTEmployeeScheduleSimpleSMS": WTEmployeeScheduleSimpleSMS,
    "WTEmployeeScheduleSimpleSMSToRecipient": WTEmployeeScheduleSimpleSMSToRecipient,
    "WTEmployeeSendHelpDeskResponse": WTEmployeeSendHelpDeskResponse,
    "WTEmployeeUpdate": WTEmployeeUpdate,
    "WTEmployeeUpdateRecords": WTEmployeeUpdateRecords,
    "WTFetchWalletPaymentObjectWithToken": WTFetchWalletPaymentObjectWithToken,
    "WTImageGridCreateParams": WTImageGridCreateParams,
    "WTImageGridUpdateParams": WTImageGridUpdateParams,
    "WTImportedList": WTImportedList,
    "WTImportedListRecipientFromMembershipTierImport": WTImportedListRecipientFromMembershipTierImport,
    "WTInfoGenesisLookupRequestErrors": WTInfoGenesisLookupRequestErrors,
    "WTInfoGenesisRecordFilterParameters": WTInfoGenesisRecordFilterParameters,
    "WTInfoGenesisRoutingIDs": WTInfoGenesisRoutingIDs,
    "WTInfoGenesisUniquePostingIDs": WTInfoGenesisUniquePostingIDs,
    "WTLinkBook": WTLinkBook,
    "WTLinkBookCreateParams": WTLinkBookCreateParams,
    "WTLinkBookSectionCreateParams": WTLinkBookSectionCreateParams,
    "WTLinkBookSectionUpdateParams": WTLinkBookSectionUpdateParams,
    "WTLinkBookUpdateParams": WTLinkBookUpdateParams,
    "WTMember": WTMember,
    "WTMemberCreationParams": WTMemberCreationParams,
    "WTMembershipTier": WTMembershipTier,
    "WTMembershipTierCreationParams": WTMembershipTierCreationParams,
    "WTMembershipTierUpdateParams": WTMembershipTierUpdateParams,
    "WTMembershipTierWithMemberCount": WTMembershipTierWithMemberCount,
    "WTMerchantCredit": WTMerchantCredit,
    "WTMerchantCreditCreationParams": WTMerchantCreditCreationParams,
    "WTMerchantURLCreate": WTMerchantURLCreate,
    "WTMerchantURLUpdate": WTMerchantURLUpdate,
    "WTMerchantUpdate": WTMerchantUpdate,
    "WTMerchantUpdatePOSIntegration": WTMerchantUpdatePOSIntegration,
    "WTMerchantUpdatePointsOfContact": WTMerchantUpdatePointsOfContact,
    "WTNewsArticleCreateParams": WTNewsArticleCreateParams,
    "WTNewsArticleUpdateParams": WTNewsArticleUpdateParams,
    "WTOptInList": WTOptInList,
    "WTOptInListCreationParams": WTOptInListCreationParams,
    "WTPaymentDesign": WTPaymentDesign,
    "WTPaymentDesignCreateParams": WTPaymentDesignCreateParams,
    "WTPaymentDesignUpdateParams": WTPaymentDesignUpdateParams,
    "WTPerformanceCreateParams": WTPerformanceCreateParams,
    "WTPerformanceUpdateParams": WTPerformanceUpdateParams,
    "WTPosMachine": WTPosMachine,
    "WTPosMachineCreateParams": WTPosMachineCreateParams,
    "WTPosMachineUpdateParams": WTPosMachineUpdateParams,
    "WTProductCreateParams": WTProductCreateParams,
    "WTProductUpdateParams": WTProductUpdateParams,
    "WTPromoCodeCreateParams": WTPromoCodeCreateParams,
    "WTPromoCodeUpdateParams": WTPromoCodeUpdateParams,
    "WTQRCodeDesign": WTQRCodeDesign,
    "WTQRCodeDesignCreateParams": WTQRCodeDesignCreateParams,
    "WTQRCodeDesignUpdateParams": WTQRCodeDesignUpdateParams,
    "WTRole": WTRole,
    "WTRoomRateCreateParams": WTRoomRateCreateParams,
    "WTRoomRateUpdateParams": WTRoomRateUpdateParams,
    "WTSMSAcquirePhoneNumber": WTSMSAcquirePhoneNumber,
    "WTSMSCreateAgreement": WTSMSCreateAgreement,
    "WTSMSImportOptInListSubscribers": WTSMSImportOptInListSubscribers,
    "WTSMSImportedListCreate": WTSMSImportedListCreate,
    "WTSMSOptInListSourceCreate": WTSMSOptInListSourceCreate,
    "WTSMSUpdatePhoneNumberConfig": WTSMSUpdatePhoneNumberConfig,
    "WTServiceCreateParams": WTServiceCreateParams,
    "WTServiceUpdateParams": WTServiceUpdateParams,
    "WTSettingsSetPassword": WTSettingsSetPassword,
    "WTStaticVoucher": WTStaticVoucher,
    "WTStaticVoucherCampaign": WTStaticVoucherCampaign,
    "WTStaticVoucherCampaignPreviewMessages": WTStaticVoucherCampaignPreviewMessages,
    "WTStaticVoucherCampaignPreviewMessagesByPage": WTStaticVoucherCampaignPreviewMessagesByPage,
    "WTStaticVoucherCreateParams": WTStaticVoucherCreateParams,
    "WTStaticVoucherUpdateParams": WTStaticVoucherUpdateParams,
    "WTSystemApprovePhoneNumber": WTSystemApprovePhoneNumber,
    "WTSystemRoleCreate": WTSystemRoleCreate,
    "WTTCPAOpt": WTTCPAOpt,
    "WTTwilioRequestAuthyCode": WTTwilioRequestAuthyCode,
    "WTTwilioVerifyAuthyCode": WTTwilioVerifyAuthyCode,
    "WTVirtualBusinessCardCreateParams": WTVirtualBusinessCardCreateParams,
    "WTVirtualBusinessCardUpdateParams": WTVirtualBusinessCardUpdateParams,
    "WTWalletConfigurationSaveWalletRecord": WTWalletConfigurationSaveWalletRecord,
    "WTWalletItemRedemption": WTWalletItemRedemption,
    "WTWalletObjectPrefixCounts": WTWalletObjectPrefixCounts,
    "WTWalletPageView": WTWalletPageView,
    "WTWalletPageViewCount": WTWalletPageViewCount,
    "WTWalletPageViewGeoPoint": WTWalletPageViewGeoPoint,
    "WalletConfiguration": WalletConfiguration,
    "WalletPageView": WalletPageView,
    "Webpage": Webpage,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
