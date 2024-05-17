import localVarRequest from 'request';

export * from './a2PApplicationSubmission';
export * from './advertisementCredit';
export * from './advertisementCreditBroadcast';
export * from './advertisementCreditScan';
export * from './amenity';
export * from './announcement';
export * from './applicableTerminals';
export * from './authError';
export * from './availablePhoneNumbersRequest';
export * from './browserDetails';
export * from './businessClassification';
export * from './businessIndustry';
export * from './businessRegionsOfOperation';
export * from './businessRegistrationIdentifier';
export * from './businessStockExchanges';
export * from './businessType';
export * from './claimTicketRequest';
export * from './clickFunnelAmount';
export * from './clickFunnelContact';
export * from './clickFunnelContactProfile';
export * from './clickFunnelEvent';
export * from './clickFunnelOriginalAmount';
export * from './clickFunnelProduct';
export * from './clickFunnelPurchase';
export * from './clickFunnelRegistration';
export * from './countClaimedComps200Response';
export * from './createFile200Response';
export * from './createStaticVoucherCampaign';
export * from './createStaticVoucherCampaignWithVoucherWithCSV';
export * from './dashboardWidget';
export * from './dining';
export * from './document';
export * from './duplicateRowFound';
export * from './dynamicVoucher';
export * from './dynamicVoucherBroadcast';
export * from './dynamicVoucherBroadcastListType';
export * from './dynamicVoucherTemporalDecreaseFrequencyType';
export * from './emailSubscriber';
export * from './employee';
export * from './employeeAPIKey';
export * from './employeeActivityLog';
export * from './employeeAlert';
export * from './employeeScheduleStartDay';
export * from './employeeScheduleStartHour';
export * from './employeeScheduleStartMeridiem';
export * from './employeeScheduleStartMinute';
export * from './entityTooLarge';
export * from './exportDataFile';
export * from './falsumError';
export * from './falsumField';
export * from './feature';
export * from './fetchAllCountries200ResponseInner';
export * from './fetchAllLedgerTransactions200Response';
export * from './fetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner';
export * from './fetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType';
export * from './fetchCustomerTicketsWithTokenRequest';
export * from './fetchDomainsByIndustry200Response';
export * from './fetchImportedListRecipientsByPage200Response';
export * from './fetchInboundSMSByPage200Response';
export * from './fetchIndustry200Response';
export * from './fetchMembersCount200Response';
export * from './fetchOptInListSubscribersByPage200Response';
export * from './fetchOutboundSMSByPage200Response';
export * from './fetchPerformanceTicketsPage200Response';
export * from './fetchStaticVouchersPage200Response';
export * from './forbiddenRequest';
export * from './foreignKeyDoesNotExist';
export * from './gaming';
export * from './helpDeskRequest';
export * from './imageGrid';
export * from './importTicketsRequest';
export * from './importedList';
export * from './importedListRecipient';
export * from './inboundSMS';
export * from './internalServerError';
export * from './jobPosition';
export * from './ledgerEntry';
export * from './ledgerEntryParentObjectID';
export * from './ledgerEntryTransactionType';
export * from './linkBook';
export * from './linkBookSection';
export * from './loginStatus200Response';
export * from './loginStatus200ResponseAnyOf';
export * from './lounge';
export * from './mSAnalyticsMemberCountPartitionedByDate';
export * from './mSAnalyticsMemberPointsRedeemedPartitionedByDate';
export * from './mSAnalyticsMemberPointsRefundedPartitionedByDate';
export * from './mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate';
export * from './mSAnalyticsMembershipTierAmountRefundedPartitionedByDate';
export * from './mSMemberHistory';
export * from './mSMemberHistoryPagination';
export * from './mSMemberRedemption';
export * from './mSMemberRedemptionPagination';
export * from './mSMemberRedemptionTransactionType';
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
export * from './memberSearchSearchKey';
export * from './memberSearchSortKey';
export * from './merchant';
export * from './merchantCreditSearch';
export * from './merchantNotInitialized';
export * from './merchantURL';
export * from './message';
export * from './messageDirection';
export * from './messageStatus';
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
export * from './paginationRequestWithSortOptionsSortOrder';
export * from './paymentDesign';
export * from './performance';
export * from './phoneNumber';
export * from './phoneNumberCapabilities';
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
export * from './pickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCountOptInSourceID';
export * from './pickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId';
export * from './pickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId';
export * from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone';
export * from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID';
export * from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus';
export * from './pickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID';
export * from './pickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt';
export * from './pickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId';
export * from './pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate';
export * from './pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType';
export * from './pickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType';
export * from './pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID';
export * from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId';
export * from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType';
export * from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt';
export * from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID';
export * from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType';
export * from './pickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId';
export * from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail';
export * from './pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumberOrEmailOrBirthday';
export * from './pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber';
export * from './pickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID';
export * from './pickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId';
export * from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID';
export * from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus';
export * from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix';
export * from './pickWTSmsSubscriberUpdateParamsExcludeKeyofWTSmsSubscriberUpdateParamsId';
export * from './pickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime';
export * from './pickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID';
export * from './plan';
export * from './portalPage';
export * from './presignedPost';
export * from './presignedPostFields';
export * from './product';
export * from './profileStatuses';
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
export * from './saveMerchantCreditPaymentDesignRequest';
export * from './saveTicketSettingsRequest';
export * from './saveTicketSettingsRequestPaymentDesignID';
export * from './service';
export * from './setDefaultPaymentMethodRequest';
export * from './simpleSMSBroadcast';
export * from './smsSubscriber';
export * from './staticVoucher';
export * from './staticVoucherCampaign';
export * from './staticVoucherCampaignBroadcast';
export * from './staticVoucherCampaignGroup';
export * from './staticVoucherCampaignUpdate';
export * from './status';
export * from './subscriptionFeature';
export * from './subscriptionPlan';
export * from './subscriptionProduct';
export * from './tcpa';
export * from './ticket';
export * from './trustBundleStatuses';
export * from './updateEmailNotificationPreferenceRequest';
export * from './updateStaticVoucherCampaignWithVoucher';
export * from './updateStaticVoucherCampaignWithVoucherVoucherID';
export * from './vSCampaignGeneratedMessage';
export * from './vSCampaignGeneratedMessagePagination';
export * from './vSDynamicVoucherStatus';
export * from './video';
export * from './virtualBusinessCard';
export * from './wTA2PApplicationUpdateParams';
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
export * from './wTDiningCreateParams';
export * from './wTDiningUpdateParams';
export * from './wTDynamicVoucher';
export * from './wTDynamicVoucherCreateParams';
export * from './wTDynamicVoucherRedemption';
export * from './wTDynamicVoucherRedemptionTransactionType';
export * from './wTDynamicVoucherSummary';
export * from './wTDynamicVoucherSummaryStatus';
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
export * from './wTEmployeeNotificationType';
export * from './wTEmployeePeerRoles';
export * from './wTEmployeeS3FilePresign';
export * from './wTEmployeeS3FilePresignContext';
export * from './wTEmployeeScheduleSMSCampaignBroadcast';
export * from './wTEmployeeScheduleSimpleSMS';
export * from './wTEmployeeScheduleSimpleSMSListType';
export * from './wTEmployeeScheduleSimpleSMSToRecipient';
export * from './wTEmployeeSendHelpDeskResponse';
export * from './wTEmployeeUpdate';
export * from './wTEmployeeUpdateRecords';
export * from './wTFetchWalletPaymentObjectsWithToken';
export * from './wTGamingCreateParams';
export * from './wTGamingUpdateParams';
export * from './wTImageGridCreateParams';
export * from './wTImageGridUpdateParams';
export * from './wTImportedList';
export * from './wTImportedListRecipientFromMembershipTierImport';
export * from './wTImportedListRecipientFromMembershipTierImportTierID';
export * from './wTInfoGenesisLookupRequestErrors';
export * from './wTInfoGenesisRecordFilterParameters';
export * from './wTInfoGenesisRoutingIDs';
export * from './wTInfoGenesisUniquePostingIDs';
export * from './wTLinkBook';
export * from './wTLinkBookCreateParams';
export * from './wTLinkBookLinkBookSectionID';
export * from './wTLinkBookSectionCreateParams';
export * from './wTLinkBookSectionUpdateParams';
export * from './wTLinkBookUpdateParams';
export * from './wTLocalInstance';
export * from './wTLoungeCreateParams';
export * from './wTLoungeUpdateParams';
export * from './wTMember';
export * from './wTMemberCreationParams';
export * from './wTMembershipTier';
export * from './wTMembershipTierCreationParams';
export * from './wTMembershipTierId';
export * from './wTMembershipTierUpdateParams';
export * from './wTMembershipTierWithMemberCount';
export * from './wTMerchantCredit';
export * from './wTMerchantCreditCreationParams';
export * from './wTMerchantURLCreate';
export * from './wTMerchantURLUpdate';
export * from './wTMerchantUpdate';
export * from './wTMerchantUpdatePOSIntegration';
export * from './wTMerchantUpdatePointsOfContact';
export * from './wTMessageInstance';
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
export * from './wTSMSImportOptInListSubscribers';
export * from './wTSMSImportedListCreate';
export * from './wTSMSOptInListSourceCreate';
export * from './wTSMSUpdatePhoneNumberConfig';
export * from './wTServiceCreateParams';
export * from './wTServiceUpdateParams';
export * from './wTSettingsSetPassword';
export * from './wTSmsSubscriberCreateParams';
export * from './wTSmsSubscriberCreateParamsWalletUI';
export * from './wTSmsSubscriberUpdateParams';
export * from './wTStaticVoucher';
export * from './wTStaticVoucherCampaign';
export * from './wTStaticVoucherCampaignPreviewMessages';
export * from './wTStaticVoucherCampaignPreviewMessagesByPage';
export * from './wTStaticVoucherCreateParams';
export * from './wTStaticVoucherUpdateParams';
export * from './wTSystemApprovePhoneNumber';
export * from './wTSystemRoleCreate';
export * from './wTTCPAOpt';
export * from './wTTCPAOptListID';
export * from './wTTCPAOptSourceID';
export * from './wTTicket';
export * from './wTTicketCreateParams';
export * from './wTTicketUpdateParams';
export * from './wTTwilioRequestAuthyCode';
export * from './wTTwilioVerifyAuthyCode';
export * from './wTVideoCreateParams';
export * from './wTVideoUpdateParams';
export * from './wTVirtualBusinessCardCreateParams';
export * from './wTVirtualBusinessCardUpdateParams';
export * from './wTWalletConfigurationSaveWalletRecord';
export * from './wTWalletItemRedemption';
export * from './wTWalletObjectPrefixCounts';
export * from './wTWalletPageView';
export * from './wTWalletPageViewCount';
export * from './wTWalletPageViewGeoPoint';
export * from './wTWalletPageViewId';
export * from './walletConfiguration';
export * from './walletConfigurationSmsOptInSourceID';
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


import { A2PApplicationSubmission } from './a2PApplicationSubmission';
import { AdvertisementCredit } from './advertisementCredit';
import { AdvertisementCreditBroadcast } from './advertisementCreditBroadcast';
import { AdvertisementCreditScan } from './advertisementCreditScan';
import { Amenity } from './amenity';
import { Announcement } from './announcement';
import { ApplicableTerminals } from './applicableTerminals';
import { AuthError } from './authError';
import { AvailablePhoneNumbersRequest } from './availablePhoneNumbersRequest';
import { BrowserDetails } from './browserDetails';
import { BusinessClassification } from './businessClassification';
import { BusinessIndustry } from './businessIndustry';
import { BusinessRegionsOfOperation } from './businessRegionsOfOperation';
import { BusinessRegistrationIdentifier } from './businessRegistrationIdentifier';
import { BusinessStockExchanges } from './businessStockExchanges';
import { BusinessType } from './businessType';
import { ClaimTicketRequest } from './claimTicketRequest';
import { ClickFunnelAmount } from './clickFunnelAmount';
import { ClickFunnelContact } from './clickFunnelContact';
import { ClickFunnelContactProfile } from './clickFunnelContactProfile';
import { ClickFunnelEvent } from './clickFunnelEvent';
import { ClickFunnelOriginalAmount } from './clickFunnelOriginalAmount';
import { ClickFunnelProduct } from './clickFunnelProduct';
import { ClickFunnelPurchase } from './clickFunnelPurchase';
import { ClickFunnelRegistration } from './clickFunnelRegistration';
import { CountClaimedComps200Response } from './countClaimedComps200Response';
import { CreateFile200Response } from './createFile200Response';
import { CreateStaticVoucherCampaign } from './createStaticVoucherCampaign';
import { CreateStaticVoucherCampaignWithVoucherWithCSV } from './createStaticVoucherCampaignWithVoucherWithCSV';
import { DashboardWidget } from './dashboardWidget';
import { Dining } from './dining';
import { Document } from './document';
import { DuplicateRowFound } from './duplicateRowFound';
import { DynamicVoucher } from './dynamicVoucher';
import { DynamicVoucherBroadcast } from './dynamicVoucherBroadcast';
import { DynamicVoucherBroadcastListType } from './dynamicVoucherBroadcastListType';
import { DynamicVoucherTemporalDecreaseFrequencyType } from './dynamicVoucherTemporalDecreaseFrequencyType';
import { EmailSubscriber } from './emailSubscriber';
import { Employee } from './employee';
import { EmployeeAPIKey } from './employeeAPIKey';
import { EmployeeActivityLog } from './employeeActivityLog';
import { EmployeeAlert } from './employeeAlert';
import { EmployeeScheduleStartDay } from './employeeScheduleStartDay';
import { EmployeeScheduleStartHour } from './employeeScheduleStartHour';
import { EmployeeScheduleStartMeridiem } from './employeeScheduleStartMeridiem';
import { EmployeeScheduleStartMinute } from './employeeScheduleStartMinute';
import { EntityTooLarge } from './entityTooLarge';
import { ExportDataFile } from './exportDataFile';
import { FalsumError } from './falsumError';
import { FalsumField } from './falsumField';
import { Feature } from './feature';
import { FetchAllCountries200ResponseInner } from './fetchAllCountries200ResponseInner';
import { FetchAllLedgerTransactions200Response } from './fetchAllLedgerTransactions200Response';
import { FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner } from './fetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner';
import { FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType } from './fetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType';
import { FetchCustomerTicketsWithTokenRequest } from './fetchCustomerTicketsWithTokenRequest';
import { FetchDomainsByIndustry200Response } from './fetchDomainsByIndustry200Response';
import { FetchImportedListRecipientsByPage200Response } from './fetchImportedListRecipientsByPage200Response';
import { FetchInboundSMSByPage200Response } from './fetchInboundSMSByPage200Response';
import { FetchIndustry200Response } from './fetchIndustry200Response';
import { FetchMembersCount200Response } from './fetchMembersCount200Response';
import { FetchOptInListSubscribersByPage200Response } from './fetchOptInListSubscribersByPage200Response';
import { FetchOutboundSMSByPage200Response } from './fetchOutboundSMSByPage200Response';
import { FetchPerformanceTicketsPage200Response } from './fetchPerformanceTicketsPage200Response';
import { FetchStaticVouchersPage200Response } from './fetchStaticVouchersPage200Response';
import { ForbiddenRequest } from './forbiddenRequest';
import { ForeignKeyDoesNotExist } from './foreignKeyDoesNotExist';
import { Gaming } from './gaming';
import { HelpDeskRequest } from './helpDeskRequest';
import { ImageGrid } from './imageGrid';
import { ImportTicketsRequest } from './importTicketsRequest';
import { ImportedList } from './importedList';
import { ImportedListRecipient } from './importedListRecipient';
import { InboundSMS } from './inboundSMS';
import { InternalServerError } from './internalServerError';
import { JobPosition } from './jobPosition';
import { LedgerEntry } from './ledgerEntry';
import { LedgerEntryParentObjectID } from './ledgerEntryParentObjectID';
import { LedgerEntryTransactionType } from './ledgerEntryTransactionType';
import { LinkBook } from './linkBook';
import { LinkBookSection } from './linkBookSection';
import { LoginStatus200Response } from './loginStatus200Response';
import { LoginStatus200ResponseAnyOf } from './loginStatus200ResponseAnyOf';
import { Lounge } from './lounge';
import { MSAnalyticsMemberCountPartitionedByDate } from './mSAnalyticsMemberCountPartitionedByDate';
import { MSAnalyticsMemberPointsRedeemedPartitionedByDate } from './mSAnalyticsMemberPointsRedeemedPartitionedByDate';
import { MSAnalyticsMemberPointsRefundedPartitionedByDate } from './mSAnalyticsMemberPointsRefundedPartitionedByDate';
import { MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate } from './mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate';
import { MSAnalyticsMembershipTierAmountRefundedPartitionedByDate } from './mSAnalyticsMembershipTierAmountRefundedPartitionedByDate';
import { MSMemberHistory } from './mSMemberHistory';
import { MSMemberHistoryPagination } from './mSMemberHistoryPagination';
import { MSMemberRedemption } from './mSMemberRedemption';
import { MSMemberRedemptionPagination } from './mSMemberRedemptionPagination';
import { MSMemberRedemptionTransactionType } from './mSMemberRedemptionTransactionType';
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
import { MemberSearchSearchKey } from './memberSearchSearchKey';
import { MemberSearchSortKey } from './memberSearchSortKey';
import { Merchant } from './merchant';
import { MerchantCreditSearch } from './merchantCreditSearch';
import { MerchantNotInitialized } from './merchantNotInitialized';
import { MerchantURL } from './merchantURL';
import { Message } from './message';
import { MessageDirection } from './messageDirection';
import { MessageStatus } from './messageStatus';
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
import { PaginationRequestWithSortOptionsSortOrder } from './paginationRequestWithSortOptionsSortOrder';
import { PaymentDesign } from './paymentDesign';
import { Performance } from './performance';
import { PhoneNumber } from './phoneNumber';
import { PhoneNumberCapabilities } from './phoneNumberCapabilities';
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
import { PickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCountOptInSourceID } from './pickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCountOptInSourceID';
import { PickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId } from './pickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId';
import { PickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId } from './pickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId';
import { PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone } from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone';
import { PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID } from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID';
import { PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus } from './pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus';
import { PickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID } from './pickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID';
import { PickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt } from './pickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt';
import { PickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId } from './pickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId';
import { PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate } from './pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate';
import { PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType } from './pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType';
import { PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType } from './pickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType';
import { PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID } from './pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID';
import { PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId } from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId';
import { PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType } from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType';
import { PickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId } from './pickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail';
import { PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumberOrEmailOrBirthday } from './pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumberOrEmailOrBirthday';
import { PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber } from './pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber';
import { PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID } from './pickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID';
import { PickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId } from './pickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId';
import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID';
import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus';
import { PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix } from './pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix';
import { PickWTSmsSubscriberUpdateParamsExcludeKeyofWTSmsSubscriberUpdateParamsId } from './pickWTSmsSubscriberUpdateParamsExcludeKeyofWTSmsSubscriberUpdateParamsId';
import { PickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime } from './pickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime';
import { PickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID } from './pickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID';
import { Plan } from './plan';
import { PortalPage } from './portalPage';
import { PresignedPost } from './presignedPost';
import { PresignedPostFields } from './presignedPostFields';
import { Product } from './product';
import { ProfileStatuses } from './profileStatuses';
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
import { SaveMerchantCreditPaymentDesignRequest } from './saveMerchantCreditPaymentDesignRequest';
import { SaveTicketSettingsRequest } from './saveTicketSettingsRequest';
import { SaveTicketSettingsRequestPaymentDesignID } from './saveTicketSettingsRequestPaymentDesignID';
import { Service } from './service';
import { SetDefaultPaymentMethodRequest } from './setDefaultPaymentMethodRequest';
import { SimpleSMSBroadcast } from './simpleSMSBroadcast';
import { SmsSubscriber } from './smsSubscriber';
import { StaticVoucher } from './staticVoucher';
import { StaticVoucherCampaign } from './staticVoucherCampaign';
import { StaticVoucherCampaignBroadcast } from './staticVoucherCampaignBroadcast';
import { StaticVoucherCampaignGroup } from './staticVoucherCampaignGroup';
import { StaticVoucherCampaignUpdate } from './staticVoucherCampaignUpdate';
import { Status } from './status';
import { SubscriptionFeature } from './subscriptionFeature';
import { SubscriptionPlan } from './subscriptionPlan';
import { SubscriptionProduct } from './subscriptionProduct';
import { Tcpa } from './tcpa';
import { Ticket } from './ticket';
import { TrustBundleStatuses } from './trustBundleStatuses';
import { UpdateEmailNotificationPreferenceRequest } from './updateEmailNotificationPreferenceRequest';
import { UpdateStaticVoucherCampaignWithVoucher } from './updateStaticVoucherCampaignWithVoucher';
import { UpdateStaticVoucherCampaignWithVoucherVoucherID } from './updateStaticVoucherCampaignWithVoucherVoucherID';
import { VSCampaignGeneratedMessage } from './vSCampaignGeneratedMessage';
import { VSCampaignGeneratedMessagePagination } from './vSCampaignGeneratedMessagePagination';
import { VSDynamicVoucherStatus } from './vSDynamicVoucherStatus';
import { Video } from './video';
import { VirtualBusinessCard } from './virtualBusinessCard';
import { WTA2PApplicationUpdateParams } from './wTA2PApplicationUpdateParams';
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
import { WTDiningCreateParams } from './wTDiningCreateParams';
import { WTDiningUpdateParams } from './wTDiningUpdateParams';
import { WTDynamicVoucher } from './wTDynamicVoucher';
import { WTDynamicVoucherCreateParams } from './wTDynamicVoucherCreateParams';
import { WTDynamicVoucherRedemption } from './wTDynamicVoucherRedemption';
import { WTDynamicVoucherRedemptionTransactionType } from './wTDynamicVoucherRedemptionTransactionType';
import { WTDynamicVoucherSummary } from './wTDynamicVoucherSummary';
import { WTDynamicVoucherSummaryStatus } from './wTDynamicVoucherSummaryStatus';
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
import { WTEmployeeNotificationType } from './wTEmployeeNotificationType';
import { WTEmployeePeerRoles } from './wTEmployeePeerRoles';
import { WTEmployeeS3FilePresign } from './wTEmployeeS3FilePresign';
import { WTEmployeeS3FilePresignContext } from './wTEmployeeS3FilePresignContext';
import { WTEmployeeScheduleSMSCampaignBroadcast } from './wTEmployeeScheduleSMSCampaignBroadcast';
import { WTEmployeeScheduleSimpleSMS } from './wTEmployeeScheduleSimpleSMS';
import { WTEmployeeScheduleSimpleSMSListType } from './wTEmployeeScheduleSimpleSMSListType';
import { WTEmployeeScheduleSimpleSMSToRecipient } from './wTEmployeeScheduleSimpleSMSToRecipient';
import { WTEmployeeSendHelpDeskResponse } from './wTEmployeeSendHelpDeskResponse';
import { WTEmployeeUpdate } from './wTEmployeeUpdate';
import { WTEmployeeUpdateRecords } from './wTEmployeeUpdateRecords';
import { WTFetchWalletPaymentObjectsWithToken } from './wTFetchWalletPaymentObjectsWithToken';
import { WTGamingCreateParams } from './wTGamingCreateParams';
import { WTGamingUpdateParams } from './wTGamingUpdateParams';
import { WTImageGridCreateParams } from './wTImageGridCreateParams';
import { WTImageGridUpdateParams } from './wTImageGridUpdateParams';
import { WTImportedList } from './wTImportedList';
import { WTImportedListRecipientFromMembershipTierImport } from './wTImportedListRecipientFromMembershipTierImport';
import { WTImportedListRecipientFromMembershipTierImportTierID } from './wTImportedListRecipientFromMembershipTierImportTierID';
import { WTInfoGenesisLookupRequestErrors } from './wTInfoGenesisLookupRequestErrors';
import { WTInfoGenesisRecordFilterParameters } from './wTInfoGenesisRecordFilterParameters';
import { WTInfoGenesisRoutingIDs } from './wTInfoGenesisRoutingIDs';
import { WTInfoGenesisUniquePostingIDs } from './wTInfoGenesisUniquePostingIDs';
import { WTLinkBook } from './wTLinkBook';
import { WTLinkBookCreateParams } from './wTLinkBookCreateParams';
import { WTLinkBookLinkBookSectionID } from './wTLinkBookLinkBookSectionID';
import { WTLinkBookSectionCreateParams } from './wTLinkBookSectionCreateParams';
import { WTLinkBookSectionUpdateParams } from './wTLinkBookSectionUpdateParams';
import { WTLinkBookUpdateParams } from './wTLinkBookUpdateParams';
import { WTLocalInstance } from './wTLocalInstance';
import { WTLoungeCreateParams } from './wTLoungeCreateParams';
import { WTLoungeUpdateParams } from './wTLoungeUpdateParams';
import { WTMember } from './wTMember';
import { WTMemberCreationParams } from './wTMemberCreationParams';
import { WTMembershipTier } from './wTMembershipTier';
import { WTMembershipTierCreationParams } from './wTMembershipTierCreationParams';
import { WTMembershipTierId } from './wTMembershipTierId';
import { WTMembershipTierUpdateParams } from './wTMembershipTierUpdateParams';
import { WTMembershipTierWithMemberCount } from './wTMembershipTierWithMemberCount';
import { WTMerchantCredit } from './wTMerchantCredit';
import { WTMerchantCreditCreationParams } from './wTMerchantCreditCreationParams';
import { WTMerchantURLCreate } from './wTMerchantURLCreate';
import { WTMerchantURLUpdate } from './wTMerchantURLUpdate';
import { WTMerchantUpdate } from './wTMerchantUpdate';
import { WTMerchantUpdatePOSIntegration } from './wTMerchantUpdatePOSIntegration';
import { WTMerchantUpdatePointsOfContact } from './wTMerchantUpdatePointsOfContact';
import { WTMessageInstance } from './wTMessageInstance';
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
import { WTSMSImportOptInListSubscribers } from './wTSMSImportOptInListSubscribers';
import { WTSMSImportedListCreate } from './wTSMSImportedListCreate';
import { WTSMSOptInListSourceCreate } from './wTSMSOptInListSourceCreate';
import { WTSMSUpdatePhoneNumberConfig } from './wTSMSUpdatePhoneNumberConfig';
import { WTServiceCreateParams } from './wTServiceCreateParams';
import { WTServiceUpdateParams } from './wTServiceUpdateParams';
import { WTSettingsSetPassword } from './wTSettingsSetPassword';
import { WTSmsSubscriberCreateParams } from './wTSmsSubscriberCreateParams';
import { WTSmsSubscriberCreateParamsWalletUI } from './wTSmsSubscriberCreateParamsWalletUI';
import { WTSmsSubscriberUpdateParams } from './wTSmsSubscriberUpdateParams';
import { WTStaticVoucher } from './wTStaticVoucher';
import { WTStaticVoucherCampaign } from './wTStaticVoucherCampaign';
import { WTStaticVoucherCampaignPreviewMessages } from './wTStaticVoucherCampaignPreviewMessages';
import { WTStaticVoucherCampaignPreviewMessagesByPage } from './wTStaticVoucherCampaignPreviewMessagesByPage';
import { WTStaticVoucherCreateParams } from './wTStaticVoucherCreateParams';
import { WTStaticVoucherUpdateParams } from './wTStaticVoucherUpdateParams';
import { WTSystemApprovePhoneNumber } from './wTSystemApprovePhoneNumber';
import { WTSystemRoleCreate } from './wTSystemRoleCreate';
import { WTTCPAOpt } from './wTTCPAOpt';
import { WTTCPAOptListID } from './wTTCPAOptListID';
import { WTTCPAOptSourceID } from './wTTCPAOptSourceID';
import { WTTicket } from './wTTicket';
import { WTTicketCreateParams } from './wTTicketCreateParams';
import { WTTicketUpdateParams } from './wTTicketUpdateParams';
import { WTTwilioRequestAuthyCode } from './wTTwilioRequestAuthyCode';
import { WTTwilioVerifyAuthyCode } from './wTTwilioVerifyAuthyCode';
import { WTVideoCreateParams } from './wTVideoCreateParams';
import { WTVideoUpdateParams } from './wTVideoUpdateParams';
import { WTVirtualBusinessCardCreateParams } from './wTVirtualBusinessCardCreateParams';
import { WTVirtualBusinessCardUpdateParams } from './wTVirtualBusinessCardUpdateParams';
import { WTWalletConfigurationSaveWalletRecord } from './wTWalletConfigurationSaveWalletRecord';
import { WTWalletItemRedemption } from './wTWalletItemRedemption';
import { WTWalletObjectPrefixCounts } from './wTWalletObjectPrefixCounts';
import { WTWalletPageView } from './wTWalletPageView';
import { WTWalletPageViewCount } from './wTWalletPageViewCount';
import { WTWalletPageViewGeoPoint } from './wTWalletPageViewGeoPoint';
import { WTWalletPageViewId } from './wTWalletPageViewId';
import { WalletConfiguration } from './walletConfiguration';
import { WalletConfigurationSmsOptInSourceID } from './walletConfigurationSmsOptInSourceID';
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
        "BusinessClassification": BusinessClassification,
        "BusinessIndustry": BusinessIndustry,
        "BusinessRegionsOfOperation": BusinessRegionsOfOperation,
        "BusinessRegistrationIdentifier": BusinessRegistrationIdentifier,
        "BusinessStockExchanges": BusinessStockExchanges,
        "BusinessType": BusinessType,
        "JobPosition": JobPosition,
        "LoginStatus200Response.StatusEnum": LoginStatus200Response.StatusEnum,
        "PaginationRequestWithSortOptions.SortKeyEnum": PaginationRequestWithSortOptions.SortKeyEnum,
        "PortalPage": PortalPage,
        "ProfileStatuses": ProfileStatuses,
        "TrustBundleStatuses": TrustBundleStatuses,
        "WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum": WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "A2PApplicationSubmission": A2PApplicationSubmission,
    "AdvertisementCredit": AdvertisementCredit,
    "AdvertisementCreditBroadcast": AdvertisementCreditBroadcast,
    "AdvertisementCreditScan": AdvertisementCreditScan,
    "Amenity": Amenity,
    "Announcement": Announcement,
    "ApplicableTerminals": ApplicableTerminals,
    "AuthError": AuthError,
    "AvailablePhoneNumbersRequest": AvailablePhoneNumbersRequest,
    "BrowserDetails": BrowserDetails,
    "ClaimTicketRequest": ClaimTicketRequest,
    "ClickFunnelAmount": ClickFunnelAmount,
    "ClickFunnelContact": ClickFunnelContact,
    "ClickFunnelContactProfile": ClickFunnelContactProfile,
    "ClickFunnelEvent": ClickFunnelEvent,
    "ClickFunnelOriginalAmount": ClickFunnelOriginalAmount,
    "ClickFunnelProduct": ClickFunnelProduct,
    "ClickFunnelPurchase": ClickFunnelPurchase,
    "ClickFunnelRegistration": ClickFunnelRegistration,
    "CountClaimedComps200Response": CountClaimedComps200Response,
    "CreateFile200Response": CreateFile200Response,
    "CreateStaticVoucherCampaign": CreateStaticVoucherCampaign,
    "CreateStaticVoucherCampaignWithVoucherWithCSV": CreateStaticVoucherCampaignWithVoucherWithCSV,
    "DashboardWidget": DashboardWidget,
    "Dining": Dining,
    "Document": Document,
    "DuplicateRowFound": DuplicateRowFound,
    "DynamicVoucher": DynamicVoucher,
    "DynamicVoucherBroadcast": DynamicVoucherBroadcast,
    "DynamicVoucherBroadcastListType": DynamicVoucherBroadcastListType,
    "DynamicVoucherTemporalDecreaseFrequencyType": DynamicVoucherTemporalDecreaseFrequencyType,
    "EmailSubscriber": EmailSubscriber,
    "Employee": Employee,
    "EmployeeAPIKey": EmployeeAPIKey,
    "EmployeeActivityLog": EmployeeActivityLog,
    "EmployeeAlert": EmployeeAlert,
    "EmployeeScheduleStartDay": EmployeeScheduleStartDay,
    "EmployeeScheduleStartHour": EmployeeScheduleStartHour,
    "EmployeeScheduleStartMeridiem": EmployeeScheduleStartMeridiem,
    "EmployeeScheduleStartMinute": EmployeeScheduleStartMinute,
    "EntityTooLarge": EntityTooLarge,
    "ExportDataFile": ExportDataFile,
    "FalsumError": FalsumError,
    "FalsumField": FalsumField,
    "Feature": Feature,
    "FetchAllCountries200ResponseInner": FetchAllCountries200ResponseInner,
    "FetchAllLedgerTransactions200Response": FetchAllLedgerTransactions200Response,
    "FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner": FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInner,
    "FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType": FetchAllStaticVouchersAssociatedWithCustomerWithVoucherID200ResponseInnerValueType,
    "FetchCustomerTicketsWithTokenRequest": FetchCustomerTicketsWithTokenRequest,
    "FetchDomainsByIndustry200Response": FetchDomainsByIndustry200Response,
    "FetchImportedListRecipientsByPage200Response": FetchImportedListRecipientsByPage200Response,
    "FetchInboundSMSByPage200Response": FetchInboundSMSByPage200Response,
    "FetchIndustry200Response": FetchIndustry200Response,
    "FetchMembersCount200Response": FetchMembersCount200Response,
    "FetchOptInListSubscribersByPage200Response": FetchOptInListSubscribersByPage200Response,
    "FetchOutboundSMSByPage200Response": FetchOutboundSMSByPage200Response,
    "FetchPerformanceTicketsPage200Response": FetchPerformanceTicketsPage200Response,
    "FetchStaticVouchersPage200Response": FetchStaticVouchersPage200Response,
    "ForbiddenRequest": ForbiddenRequest,
    "ForeignKeyDoesNotExist": ForeignKeyDoesNotExist,
    "Gaming": Gaming,
    "HelpDeskRequest": HelpDeskRequest,
    "ImageGrid": ImageGrid,
    "ImportTicketsRequest": ImportTicketsRequest,
    "ImportedList": ImportedList,
    "ImportedListRecipient": ImportedListRecipient,
    "InboundSMS": InboundSMS,
    "InternalServerError": InternalServerError,
    "LedgerEntry": LedgerEntry,
    "LedgerEntryParentObjectID": LedgerEntryParentObjectID,
    "LedgerEntryTransactionType": LedgerEntryTransactionType,
    "LinkBook": LinkBook,
    "LinkBookSection": LinkBookSection,
    "LoginStatus200Response": LoginStatus200Response,
    "LoginStatus200ResponseAnyOf": LoginStatus200ResponseAnyOf,
    "Lounge": Lounge,
    "MSAnalyticsMemberCountPartitionedByDate": MSAnalyticsMemberCountPartitionedByDate,
    "MSAnalyticsMemberPointsRedeemedPartitionedByDate": MSAnalyticsMemberPointsRedeemedPartitionedByDate,
    "MSAnalyticsMemberPointsRefundedPartitionedByDate": MSAnalyticsMemberPointsRefundedPartitionedByDate,
    "MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate": MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate,
    "MSAnalyticsMembershipTierAmountRefundedPartitionedByDate": MSAnalyticsMembershipTierAmountRefundedPartitionedByDate,
    "MSMemberHistory": MSMemberHistory,
    "MSMemberHistoryPagination": MSMemberHistoryPagination,
    "MSMemberRedemption": MSMemberRedemption,
    "MSMemberRedemptionPagination": MSMemberRedemptionPagination,
    "MSMemberRedemptionTransactionType": MSMemberRedemptionTransactionType,
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
    "MemberSearchSearchKey": MemberSearchSearchKey,
    "MemberSearchSortKey": MemberSearchSortKey,
    "Merchant": Merchant,
    "MerchantCreditSearch": MerchantCreditSearch,
    "MerchantNotInitialized": MerchantNotInitialized,
    "MerchantURL": MerchantURL,
    "Message": Message,
    "MessageDirection": MessageDirection,
    "MessageStatus": MessageStatus,
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
    "PaginationRequestWithSortOptionsSortOrder": PaginationRequestWithSortOptionsSortOrder,
    "PaymentDesign": PaymentDesign,
    "Performance": Performance,
    "PhoneNumber": PhoneNumber,
    "PhoneNumberCapabilities": PhoneNumberCapabilities,
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
    "PickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCountOptInSourceID": PickSSOptInListMemberUpdateParamsExcludeKeyofSSOptInListMemberUpdateParamsMerchantCreatedAtOrMaxSMSCountOptInSourceID,
    "PickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId": PickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId,
    "PickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId": PickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId,
    "PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone": PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone,
    "PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID": PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhonePaymentObjectBroadcastID,
    "PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus": PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhoneStatus,
    "PickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID": PickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID,
    "PickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt": PickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt,
    "PickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId": PickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId,
    "PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate": PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate,
    "PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType": PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDateValueType,
    "PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType": PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType,
    "PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID": PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeID,
    "PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId": PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId,
    "PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType": PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType,
    "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt": PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt,
    "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID": PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID,
    "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType": PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType,
    "PickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId": PickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId,
    "PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail": PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail,
    "PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumberOrEmailOrBirthday": PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumberOrEmailOrBirthday,
    "PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber": PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber,
    "PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID": PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID,
    "PickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId": PickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId,
    "PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID": PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID,
    "PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus": PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDBroadcastStatus,
    "PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix": PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListIDPaymentObjectPrefix,
    "PickWTSmsSubscriberUpdateParamsExcludeKeyofWTSmsSubscriberUpdateParamsId": PickWTSmsSubscriberUpdateParamsExcludeKeyofWTSmsSubscriberUpdateParamsId,
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
    "SaveMerchantCreditPaymentDesignRequest": SaveMerchantCreditPaymentDesignRequest,
    "SaveTicketSettingsRequest": SaveTicketSettingsRequest,
    "SaveTicketSettingsRequestPaymentDesignID": SaveTicketSettingsRequestPaymentDesignID,
    "Service": Service,
    "SetDefaultPaymentMethodRequest": SetDefaultPaymentMethodRequest,
    "SimpleSMSBroadcast": SimpleSMSBroadcast,
    "SmsSubscriber": SmsSubscriber,
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
    "Ticket": Ticket,
    "UpdateEmailNotificationPreferenceRequest": UpdateEmailNotificationPreferenceRequest,
    "UpdateStaticVoucherCampaignWithVoucher": UpdateStaticVoucherCampaignWithVoucher,
    "UpdateStaticVoucherCampaignWithVoucherVoucherID": UpdateStaticVoucherCampaignWithVoucherVoucherID,
    "VSCampaignGeneratedMessage": VSCampaignGeneratedMessage,
    "VSCampaignGeneratedMessagePagination": VSCampaignGeneratedMessagePagination,
    "VSDynamicVoucherStatus": VSDynamicVoucherStatus,
    "Video": Video,
    "VirtualBusinessCard": VirtualBusinessCard,
    "WTA2PApplicationUpdateParams": WTA2PApplicationUpdateParams,
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
    "WTDiningCreateParams": WTDiningCreateParams,
    "WTDiningUpdateParams": WTDiningUpdateParams,
    "WTDynamicVoucher": WTDynamicVoucher,
    "WTDynamicVoucherCreateParams": WTDynamicVoucherCreateParams,
    "WTDynamicVoucherRedemption": WTDynamicVoucherRedemption,
    "WTDynamicVoucherRedemptionTransactionType": WTDynamicVoucherRedemptionTransactionType,
    "WTDynamicVoucherSummary": WTDynamicVoucherSummary,
    "WTDynamicVoucherSummaryStatus": WTDynamicVoucherSummaryStatus,
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
    "WTEmployeeNotificationType": WTEmployeeNotificationType,
    "WTEmployeePeerRoles": WTEmployeePeerRoles,
    "WTEmployeeS3FilePresign": WTEmployeeS3FilePresign,
    "WTEmployeeS3FilePresignContext": WTEmployeeS3FilePresignContext,
    "WTEmployeeScheduleSMSCampaignBroadcast": WTEmployeeScheduleSMSCampaignBroadcast,
    "WTEmployeeScheduleSimpleSMS": WTEmployeeScheduleSimpleSMS,
    "WTEmployeeScheduleSimpleSMSListType": WTEmployeeScheduleSimpleSMSListType,
    "WTEmployeeScheduleSimpleSMSToRecipient": WTEmployeeScheduleSimpleSMSToRecipient,
    "WTEmployeeSendHelpDeskResponse": WTEmployeeSendHelpDeskResponse,
    "WTEmployeeUpdate": WTEmployeeUpdate,
    "WTEmployeeUpdateRecords": WTEmployeeUpdateRecords,
    "WTFetchWalletPaymentObjectsWithToken": WTFetchWalletPaymentObjectsWithToken,
    "WTGamingCreateParams": WTGamingCreateParams,
    "WTGamingUpdateParams": WTGamingUpdateParams,
    "WTImageGridCreateParams": WTImageGridCreateParams,
    "WTImageGridUpdateParams": WTImageGridUpdateParams,
    "WTImportedList": WTImportedList,
    "WTImportedListRecipientFromMembershipTierImport": WTImportedListRecipientFromMembershipTierImport,
    "WTImportedListRecipientFromMembershipTierImportTierID": WTImportedListRecipientFromMembershipTierImportTierID,
    "WTInfoGenesisLookupRequestErrors": WTInfoGenesisLookupRequestErrors,
    "WTInfoGenesisRecordFilterParameters": WTInfoGenesisRecordFilterParameters,
    "WTInfoGenesisRoutingIDs": WTInfoGenesisRoutingIDs,
    "WTInfoGenesisUniquePostingIDs": WTInfoGenesisUniquePostingIDs,
    "WTLinkBook": WTLinkBook,
    "WTLinkBookCreateParams": WTLinkBookCreateParams,
    "WTLinkBookLinkBookSectionID": WTLinkBookLinkBookSectionID,
    "WTLinkBookSectionCreateParams": WTLinkBookSectionCreateParams,
    "WTLinkBookSectionUpdateParams": WTLinkBookSectionUpdateParams,
    "WTLinkBookUpdateParams": WTLinkBookUpdateParams,
    "WTLocalInstance": WTLocalInstance,
    "WTLoungeCreateParams": WTLoungeCreateParams,
    "WTLoungeUpdateParams": WTLoungeUpdateParams,
    "WTMember": WTMember,
    "WTMemberCreationParams": WTMemberCreationParams,
    "WTMembershipTier": WTMembershipTier,
    "WTMembershipTierCreationParams": WTMembershipTierCreationParams,
    "WTMembershipTierId": WTMembershipTierId,
    "WTMembershipTierUpdateParams": WTMembershipTierUpdateParams,
    "WTMembershipTierWithMemberCount": WTMembershipTierWithMemberCount,
    "WTMerchantCredit": WTMerchantCredit,
    "WTMerchantCreditCreationParams": WTMerchantCreditCreationParams,
    "WTMerchantURLCreate": WTMerchantURLCreate,
    "WTMerchantURLUpdate": WTMerchantURLUpdate,
    "WTMerchantUpdate": WTMerchantUpdate,
    "WTMerchantUpdatePOSIntegration": WTMerchantUpdatePOSIntegration,
    "WTMerchantUpdatePointsOfContact": WTMerchantUpdatePointsOfContact,
    "WTMessageInstance": WTMessageInstance,
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
    "WTSMSImportOptInListSubscribers": WTSMSImportOptInListSubscribers,
    "WTSMSImportedListCreate": WTSMSImportedListCreate,
    "WTSMSOptInListSourceCreate": WTSMSOptInListSourceCreate,
    "WTSMSUpdatePhoneNumberConfig": WTSMSUpdatePhoneNumberConfig,
    "WTServiceCreateParams": WTServiceCreateParams,
    "WTServiceUpdateParams": WTServiceUpdateParams,
    "WTSettingsSetPassword": WTSettingsSetPassword,
    "WTSmsSubscriberCreateParams": WTSmsSubscriberCreateParams,
    "WTSmsSubscriberCreateParamsWalletUI": WTSmsSubscriberCreateParamsWalletUI,
    "WTSmsSubscriberUpdateParams": WTSmsSubscriberUpdateParams,
    "WTStaticVoucher": WTStaticVoucher,
    "WTStaticVoucherCampaign": WTStaticVoucherCampaign,
    "WTStaticVoucherCampaignPreviewMessages": WTStaticVoucherCampaignPreviewMessages,
    "WTStaticVoucherCampaignPreviewMessagesByPage": WTStaticVoucherCampaignPreviewMessagesByPage,
    "WTStaticVoucherCreateParams": WTStaticVoucherCreateParams,
    "WTStaticVoucherUpdateParams": WTStaticVoucherUpdateParams,
    "WTSystemApprovePhoneNumber": WTSystemApprovePhoneNumber,
    "WTSystemRoleCreate": WTSystemRoleCreate,
    "WTTCPAOpt": WTTCPAOpt,
    "WTTCPAOptListID": WTTCPAOptListID,
    "WTTCPAOptSourceID": WTTCPAOptSourceID,
    "WTTicket": WTTicket,
    "WTTicketCreateParams": WTTicketCreateParams,
    "WTTicketUpdateParams": WTTicketUpdateParams,
    "WTTwilioRequestAuthyCode": WTTwilioRequestAuthyCode,
    "WTTwilioVerifyAuthyCode": WTTwilioVerifyAuthyCode,
    "WTVideoCreateParams": WTVideoCreateParams,
    "WTVideoUpdateParams": WTVideoUpdateParams,
    "WTVirtualBusinessCardCreateParams": WTVirtualBusinessCardCreateParams,
    "WTVirtualBusinessCardUpdateParams": WTVirtualBusinessCardUpdateParams,
    "WTWalletConfigurationSaveWalletRecord": WTWalletConfigurationSaveWalletRecord,
    "WTWalletItemRedemption": WTWalletItemRedemption,
    "WTWalletObjectPrefixCounts": WTWalletObjectPrefixCounts,
    "WTWalletPageView": WTWalletPageView,
    "WTWalletPageViewCount": WTWalletPageViewCount,
    "WTWalletPageViewGeoPoint": WTWalletPageViewGeoPoint,
    "WTWalletPageViewId": WTWalletPageViewId,
    "WalletConfiguration": WalletConfiguration,
    "WalletConfigurationSmsOptInSourceID": WalletConfigurationSmsOptInSourceID,
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
