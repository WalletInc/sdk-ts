import localVarRequest from 'request';

export * from './a2PApplicationSubmission';
export * from './advertisementCredit';
export * from './advertisementCreditBroadcast';
export * from './advertisementCreditScan';
export * from './amenity';
export * from './amenityId';
export * from './announcement';
export * from './applicableTerminals';
export * from './assistant';
export * from './authError';
export * from './availablePhoneNumbersRequest';
export * from './browserDetails';
export * from './businessClassification';
export * from './businessIndustry';
export * from './businessRegionsOfOperation';
export * from './businessRegistrationIdentifier';
export * from './businessStockExchanges';
export * from './businessType';
export * from './chatCompletionAudio';
export * from './chatCompletionMessage';
export * from './chatCompletionMessageAudio';
export * from './chatCompletionMessageFunctionCall';
export * from './chatCompletionMessageToolCall';
export * from './chatCompletionMessageToolCallFunction';
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
export * from './createRunOnThreadRequest';
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
export * from './fetchAdvertisementCreditScansFromListRequest';
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
export * from './internalServerError500';
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
export * from './mSMemberRedemptionRegisterID';
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
export * from './moduleError';
export * from './newsArticle';
export * from './oAIAssistantUpdateParams';
export * from './oAIAssistantUpdateParamsCreateParams';
export * from './optInList';
export * from './optInListSource';
export * from './optInListSubscriber';
export * from './optInListSubscriberOptInSourceID';
export * from './outboundSMS';
export * from './outboundSMSPaymentObjectBroadcastID';
export * from './outboundSMSStatus';
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
export * from './pickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKeySortOrder';
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
export * from './pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeIDOrAbbreviationOrAcronym';
export * from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId';
export * from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType';
export * from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt';
export * from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID';
export * from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType';
export * from './pickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId';
export * from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail';
export * from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartDay';
export * from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartHour';
export * from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMeridiem';
export * from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMinute';
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
export * from './productTaxBehavior';
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
export * from './service';
export * from './setDefaultPaymentMethodRequest';
export * from './simpleSMSBroadcast';
export * from './smsSubscriber';
export * from './sortDirection';
export * from './staticVoucher';
export * from './staticVoucherCampaign';
export * from './staticVoucherCampaignBroadcast';
export * from './staticVoucherCampaignBroadcastBroadcastStatus';
export * from './staticVoucherCampaignBroadcastPaymentObjectPrefix';
export * from './staticVoucherCampaignUpdate';
export * from './staticVoucherCampaignValueType';
export * from './staticVoucherId';
export * from './status';
export * from './subscriptionFeature';
export * from './subscriptionPlan';
export * from './subscriptionPlanAnnual';
export * from './subscriptionProduct';
export * from './tcpa';
export * from './thread';
export * from './ticket';
export * from './ticketSortKeys';
export * from './trustBundleStatuses';
export * from './updateEmailNotificationPreferenceRequest';
export * from './updateStaticVoucherCampaignWithVoucher';
export * from './vSCampaignGeneratedMessage';
export * from './vSCampaignGeneratedMessagePagination';
export * from './vSDynamicVoucherStatus';
export * from './vectorStore';
export * from './video';
export * from './videoProvider';
export * from './virtualBusinessCard';
export * from './wTA2PApplicationUpdateParams';
export * from './wTAdvertisementCredit';
export * from './wTAdvertisementCreditCreateParams';
export * from './wTAdvertisementCreditScan';
export * from './wTAdvertisementCreditUpdateParams';
export * from './wTAmenityCreateParams';
export * from './wTAmenityUpdateParams';
export * from './wTAndroidKeystoreResponse';
export * from './wTAuthenticationCheckSessionTokenStatusResponse';
export * from './wTAuthenticationForgotPassword';
export * from './wTAuthenticationLoginRequest';
export * from './wTAuthenticationLoginResponse';
export * from './wTAuthenticationRegister';
export * from './wTAuthenticationRequestResetPassword';
export * from './wTAuthenticationResetPassword';
export * from './wTAuthenticationSSOLoginForDiscourse';
export * from './wTBillingChangePlan';
export * from './wTBillingChangePlanBillingCadence';
export * from './wTBillingSavePaymentMethod';
export * from './wTBillingVerifyPaymentMethodResponse';
export * from './wTConnectAccountStatus';
export * from './wTConnectMoney';
export * from './wTConnectOnboardingLinkRequest';
export * from './wTConnectOnboardingLinkResponse';
export * from './wTConnectOnboardingStatus';
export * from './wTConnectPaymentsSummary';
export * from './wTConnectPaymentsSummaryBalance';
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
export * from './wTFinancingSoftPullRequest';
export * from './wTFinancingSoftPullResponse';
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
export * from './wTLeadFiConsumerProfile';
export * from './wTLeadFiConsumerProfileAddress';
export * from './wTLeadFiConsumerProfileAssets';
export * from './wTLeadFiConsumerProfileIncome';
export * from './wTLeadFiCreditOffer';
export * from './wTLeadFiInquiryResult';
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
export * from './wTPassBrandKit';
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
export * from './wTQuickLink';
export * from './wTQuickLinkCreateParams';
export * from './wTQuickLinkLinkBookSectionID';
export * from './wTQuickLinkSectionCreateParams';
export * from './wTQuickLinkSectionUpdateParams';
export * from './wTQuickLinkUpdateParams';
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
export * from './wTVideoPlaybackSource';
export * from './wTVideoPlaybackSourceType';
export * from './wTVideoUpdateParams';
export * from './wTVideoUploadProvision';
export * from './wTVideoUploadProvisionParams';
export * from './wTVideoUploadProvisionProvider';
export * from './wTVirtualBusinessCardCreateParams';
export * from './wTVirtualBusinessCardUpdateParams';
export * from './wTWalletConfigurationSaveWalletRecord';
export * from './wTWalletConfigurationSaveWalletRecordPassBrandKit';
export * from './wTWalletConfigurationSaveWalletRecordSmsOptInSourceID';
export * from './wTWalletItemRedemption';
export * from './wTWalletObjectPrefixCounts';
export * from './wTWalletPageView';
export * from './wTWalletPageViewCount';
export * from './wTWalletPageViewGeoPoint';
export * from './wTWhatsAppInboundWebhook';
export * from './wTWhatsAppStatusCallback';
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


import { A2PApplicationSubmission } from './a2PApplicationSubmission';
import { AdvertisementCredit } from './advertisementCredit';
import { AdvertisementCreditBroadcast } from './advertisementCreditBroadcast';
import { AdvertisementCreditScan } from './advertisementCreditScan';
import { Amenity } from './amenity';
import { AmenityId } from './amenityId';
import { Announcement } from './announcement';
import { ApplicableTerminals } from './applicableTerminals';
import { Assistant } from './assistant';
import { AuthError } from './authError';
import { AvailablePhoneNumbersRequest } from './availablePhoneNumbersRequest';
import { BrowserDetails } from './browserDetails';
import { BusinessClassification } from './businessClassification';
import { BusinessIndustry } from './businessIndustry';
import { BusinessRegionsOfOperation } from './businessRegionsOfOperation';
import { BusinessRegistrationIdentifier } from './businessRegistrationIdentifier';
import { BusinessStockExchanges } from './businessStockExchanges';
import { BusinessType } from './businessType';
import { ChatCompletionAudio } from './chatCompletionAudio';
import { ChatCompletionMessage } from './chatCompletionMessage';
import { ChatCompletionMessageAudio } from './chatCompletionMessageAudio';
import { ChatCompletionMessageFunctionCall } from './chatCompletionMessageFunctionCall';
import { ChatCompletionMessageToolCall } from './chatCompletionMessageToolCall';
import { ChatCompletionMessageToolCallFunction } from './chatCompletionMessageToolCallFunction';
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
import { CreateRunOnThreadRequest } from './createRunOnThreadRequest';
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
import { FetchAdvertisementCreditScansFromListRequest } from './fetchAdvertisementCreditScansFromListRequest';
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
import { InternalServerError500 } from './internalServerError500';
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
import { MSMemberRedemptionRegisterID } from './mSMemberRedemptionRegisterID';
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
import { ModuleError } from './moduleError';
import { NewsArticle } from './newsArticle';
import { OAIAssistantUpdateParams } from './oAIAssistantUpdateParams';
import { OAIAssistantUpdateParamsCreateParams } from './oAIAssistantUpdateParamsCreateParams';
import { OptInList } from './optInList';
import { OptInListSource } from './optInListSource';
import { OptInListSubscriber } from './optInListSubscriber';
import { OptInListSubscriberOptInSourceID } from './optInListSubscriberOptInSourceID';
import { OutboundSMS } from './outboundSMS';
import { OutboundSMSPaymentObjectBroadcastID } from './outboundSMSPaymentObjectBroadcastID';
import { OutboundSMSStatus } from './outboundSMSStatus';
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
import { PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKeySortOrder } from './pickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKeySortOrder';
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
import { PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeIDOrAbbreviationOrAcronym } from './pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeIDOrAbbreviationOrAcronym';
import { PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId } from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId';
import { PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType } from './pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID';
import { PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType } from './pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType';
import { PickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId } from './pickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartDay } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartDay';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartHour } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartHour';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMeridiem } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMeridiem';
import { PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMinute } from './pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMinute';
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
import { ProductTaxBehavior } from './productTaxBehavior';
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
import { Service } from './service';
import { SetDefaultPaymentMethodRequest } from './setDefaultPaymentMethodRequest';
import { SimpleSMSBroadcast } from './simpleSMSBroadcast';
import { SmsSubscriber } from './smsSubscriber';
import { SortDirection } from './sortDirection';
import { StaticVoucher } from './staticVoucher';
import { StaticVoucherCampaign } from './staticVoucherCampaign';
import { StaticVoucherCampaignBroadcast } from './staticVoucherCampaignBroadcast';
import { StaticVoucherCampaignBroadcastBroadcastStatus } from './staticVoucherCampaignBroadcastBroadcastStatus';
import { StaticVoucherCampaignBroadcastPaymentObjectPrefix } from './staticVoucherCampaignBroadcastPaymentObjectPrefix';
import { StaticVoucherCampaignUpdate } from './staticVoucherCampaignUpdate';
import { StaticVoucherCampaignValueType } from './staticVoucherCampaignValueType';
import { StaticVoucherId } from './staticVoucherId';
import { Status } from './status';
import { SubscriptionFeature } from './subscriptionFeature';
import { SubscriptionPlan } from './subscriptionPlan';
import { SubscriptionPlanAnnual } from './subscriptionPlanAnnual';
import { SubscriptionProduct } from './subscriptionProduct';
import { Tcpa } from './tcpa';
import { Thread } from './thread';
import { Ticket } from './ticket';
import { TicketSortKeys } from './ticketSortKeys';
import { TrustBundleStatuses } from './trustBundleStatuses';
import { UpdateEmailNotificationPreferenceRequest } from './updateEmailNotificationPreferenceRequest';
import { UpdateStaticVoucherCampaignWithVoucher } from './updateStaticVoucherCampaignWithVoucher';
import { VSCampaignGeneratedMessage } from './vSCampaignGeneratedMessage';
import { VSCampaignGeneratedMessagePagination } from './vSCampaignGeneratedMessagePagination';
import { VSDynamicVoucherStatus } from './vSDynamicVoucherStatus';
import { VectorStore } from './vectorStore';
import { Video } from './video';
import { VideoProvider } from './videoProvider';
import { VirtualBusinessCard } from './virtualBusinessCard';
import { WTA2PApplicationUpdateParams } from './wTA2PApplicationUpdateParams';
import { WTAdvertisementCredit } from './wTAdvertisementCredit';
import { WTAdvertisementCreditCreateParams } from './wTAdvertisementCreditCreateParams';
import { WTAdvertisementCreditScan } from './wTAdvertisementCreditScan';
import { WTAdvertisementCreditUpdateParams } from './wTAdvertisementCreditUpdateParams';
import { WTAmenityCreateParams } from './wTAmenityCreateParams';
import { WTAmenityUpdateParams } from './wTAmenityUpdateParams';
import { WTAndroidKeystoreResponse } from './wTAndroidKeystoreResponse';
import { WTAuthenticationCheckSessionTokenStatusResponse } from './wTAuthenticationCheckSessionTokenStatusResponse';
import { WTAuthenticationForgotPassword } from './wTAuthenticationForgotPassword';
import { WTAuthenticationLoginRequest } from './wTAuthenticationLoginRequest';
import { WTAuthenticationLoginResponse } from './wTAuthenticationLoginResponse';
import { WTAuthenticationRegister } from './wTAuthenticationRegister';
import { WTAuthenticationRequestResetPassword } from './wTAuthenticationRequestResetPassword';
import { WTAuthenticationResetPassword } from './wTAuthenticationResetPassword';
import { WTAuthenticationSSOLoginForDiscourse } from './wTAuthenticationSSOLoginForDiscourse';
import { WTBillingChangePlan } from './wTBillingChangePlan';
import { WTBillingChangePlanBillingCadence } from './wTBillingChangePlanBillingCadence';
import { WTBillingSavePaymentMethod } from './wTBillingSavePaymentMethod';
import { WTBillingVerifyPaymentMethodResponse } from './wTBillingVerifyPaymentMethodResponse';
import { WTConnectAccountStatus } from './wTConnectAccountStatus';
import { WTConnectMoney } from './wTConnectMoney';
import { WTConnectOnboardingLinkRequest } from './wTConnectOnboardingLinkRequest';
import { WTConnectOnboardingLinkResponse } from './wTConnectOnboardingLinkResponse';
import { WTConnectOnboardingStatus } from './wTConnectOnboardingStatus';
import { WTConnectPaymentsSummary } from './wTConnectPaymentsSummary';
import { WTConnectPaymentsSummaryBalance } from './wTConnectPaymentsSummaryBalance';
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
import { WTFinancingSoftPullRequest } from './wTFinancingSoftPullRequest';
import { WTFinancingSoftPullResponse } from './wTFinancingSoftPullResponse';
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
import { WTLeadFiConsumerProfile } from './wTLeadFiConsumerProfile';
import { WTLeadFiConsumerProfileAddress } from './wTLeadFiConsumerProfileAddress';
import { WTLeadFiConsumerProfileAssets } from './wTLeadFiConsumerProfileAssets';
import { WTLeadFiConsumerProfileIncome } from './wTLeadFiConsumerProfileIncome';
import { WTLeadFiCreditOffer } from './wTLeadFiCreditOffer';
import { WTLeadFiInquiryResult } from './wTLeadFiInquiryResult';
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
import { WTPassBrandKit } from './wTPassBrandKit';
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
import { WTQuickLink } from './wTQuickLink';
import { WTQuickLinkCreateParams } from './wTQuickLinkCreateParams';
import { WTQuickLinkLinkBookSectionID } from './wTQuickLinkLinkBookSectionID';
import { WTQuickLinkSectionCreateParams } from './wTQuickLinkSectionCreateParams';
import { WTQuickLinkSectionUpdateParams } from './wTQuickLinkSectionUpdateParams';
import { WTQuickLinkUpdateParams } from './wTQuickLinkUpdateParams';
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
import { WTVideoPlaybackSource } from './wTVideoPlaybackSource';
import { WTVideoPlaybackSourceType } from './wTVideoPlaybackSourceType';
import { WTVideoUpdateParams } from './wTVideoUpdateParams';
import { WTVideoUploadProvision } from './wTVideoUploadProvision';
import { WTVideoUploadProvisionParams } from './wTVideoUploadProvisionParams';
import { WTVideoUploadProvisionProvider } from './wTVideoUploadProvisionProvider';
import { WTVirtualBusinessCardCreateParams } from './wTVirtualBusinessCardCreateParams';
import { WTVirtualBusinessCardUpdateParams } from './wTVirtualBusinessCardUpdateParams';
import { WTWalletConfigurationSaveWalletRecord } from './wTWalletConfigurationSaveWalletRecord';
import { WTWalletConfigurationSaveWalletRecordPassBrandKit } from './wTWalletConfigurationSaveWalletRecordPassBrandKit';
import { WTWalletConfigurationSaveWalletRecordSmsOptInSourceID } from './wTWalletConfigurationSaveWalletRecordSmsOptInSourceID';
import { WTWalletItemRedemption } from './wTWalletItemRedemption';
import { WTWalletObjectPrefixCounts } from './wTWalletObjectPrefixCounts';
import { WTWalletPageView } from './wTWalletPageView';
import { WTWalletPageViewCount } from './wTWalletPageViewCount';
import { WTWalletPageViewGeoPoint } from './wTWalletPageViewGeoPoint';
import { WTWhatsAppInboundWebhook } from './wTWhatsAppInboundWebhook';
import { WTWhatsAppStatusCallback } from './wTWhatsAppStatusCallback';
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
        "BusinessClassification": BusinessClassification,
        "BusinessIndustry": BusinessIndustry,
        "BusinessRegionsOfOperation": BusinessRegionsOfOperation,
        "BusinessRegistrationIdentifier": BusinessRegistrationIdentifier,
        "BusinessStockExchanges": BusinessStockExchanges,
        "BusinessType": BusinessType,
        "ChatCompletionMessage.RoleEnum": ChatCompletionMessage.RoleEnum,
        "ChatCompletionMessageToolCall.TypeEnum": ChatCompletionMessageToolCall.TypeEnum,
        "JobPosition": JobPosition,
        "LoginStatus200Response.StatusEnum": LoginStatus200Response.StatusEnum,
        "PaginationRequestWithSortOptions.SortKeyEnum": PaginationRequestWithSortOptions.SortKeyEnum,
        "PortalPage": PortalPage,
        "ProfileStatuses": ProfileStatuses,
        "SortDirection": SortDirection,
        "TicketSortKeys": TicketSortKeys,
        "TrustBundleStatuses": TrustBundleStatuses,
        "WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum": WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "A2PApplicationSubmission": A2PApplicationSubmission,
    "AdvertisementCredit": AdvertisementCredit,
    "AdvertisementCreditBroadcast": AdvertisementCreditBroadcast,
    "AdvertisementCreditScan": AdvertisementCreditScan,
    "Amenity": Amenity,
    "AmenityId": AmenityId,
    "Announcement": Announcement,
    "ApplicableTerminals": ApplicableTerminals,
    "Assistant": Assistant,
    "AuthError": AuthError,
    "AvailablePhoneNumbersRequest": AvailablePhoneNumbersRequest,
    "BrowserDetails": BrowserDetails,
    "ChatCompletionAudio": ChatCompletionAudio,
    "ChatCompletionMessage": ChatCompletionMessage,
    "ChatCompletionMessageAudio": ChatCompletionMessageAudio,
    "ChatCompletionMessageFunctionCall": ChatCompletionMessageFunctionCall,
    "ChatCompletionMessageToolCall": ChatCompletionMessageToolCall,
    "ChatCompletionMessageToolCallFunction": ChatCompletionMessageToolCallFunction,
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
    "CreateRunOnThreadRequest": CreateRunOnThreadRequest,
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
    "FetchAdvertisementCreditScansFromListRequest": FetchAdvertisementCreditScansFromListRequest,
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
    "InternalServerError500": InternalServerError500,
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
    "MSMemberRedemptionRegisterID": MSMemberRedemptionRegisterID,
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
    "ModuleError": ModuleError,
    "NewsArticle": NewsArticle,
    "OAIAssistantUpdateParams": OAIAssistantUpdateParams,
    "OAIAssistantUpdateParamsCreateParams": OAIAssistantUpdateParamsCreateParams,
    "OptInList": OptInList,
    "OptInListSource": OptInListSource,
    "OptInListSubscriber": OptInListSubscriber,
    "OptInListSubscriberOptInSourceID": OptInListSubscriberOptInSourceID,
    "OutboundSMS": OutboundSMS,
    "OutboundSMSPaymentObjectBroadcastID": OutboundSMSPaymentObjectBroadcastID,
    "OutboundSMSStatus": OutboundSMSStatus,
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
    "PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKeySortOrder": PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKeySortOrder,
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
    "PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeIDOrAbbreviationOrAcronym": PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsEmployeeIDOrAbbreviationOrAcronym,
    "PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId": PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId,
    "PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType": PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsIdBorderStyleType,
    "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt": PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt,
    "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID": PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtRegisterID,
    "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType": PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAtTransactionType,
    "PickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId": PickWTEmailSubscriberUpdateParamsExcludeKeyofWTEmailSubscriberUpdateParamsId,
    "PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail": PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail,
    "PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartDay": PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartDay,
    "PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartHour": PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartHour,
    "PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMeridiem": PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMeridiem,
    "PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMinute": PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmailScheduleStartMinute,
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
    "ProductTaxBehavior": ProductTaxBehavior,
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
    "Service": Service,
    "SetDefaultPaymentMethodRequest": SetDefaultPaymentMethodRequest,
    "SimpleSMSBroadcast": SimpleSMSBroadcast,
    "SmsSubscriber": SmsSubscriber,
    "StaticVoucher": StaticVoucher,
    "StaticVoucherCampaign": StaticVoucherCampaign,
    "StaticVoucherCampaignBroadcast": StaticVoucherCampaignBroadcast,
    "StaticVoucherCampaignBroadcastBroadcastStatus": StaticVoucherCampaignBroadcastBroadcastStatus,
    "StaticVoucherCampaignBroadcastPaymentObjectPrefix": StaticVoucherCampaignBroadcastPaymentObjectPrefix,
    "StaticVoucherCampaignUpdate": StaticVoucherCampaignUpdate,
    "StaticVoucherCampaignValueType": StaticVoucherCampaignValueType,
    "StaticVoucherId": StaticVoucherId,
    "Status": Status,
    "SubscriptionFeature": SubscriptionFeature,
    "SubscriptionPlan": SubscriptionPlan,
    "SubscriptionPlanAnnual": SubscriptionPlanAnnual,
    "SubscriptionProduct": SubscriptionProduct,
    "Tcpa": Tcpa,
    "Thread": Thread,
    "Ticket": Ticket,
    "UpdateEmailNotificationPreferenceRequest": UpdateEmailNotificationPreferenceRequest,
    "UpdateStaticVoucherCampaignWithVoucher": UpdateStaticVoucherCampaignWithVoucher,
    "VSCampaignGeneratedMessage": VSCampaignGeneratedMessage,
    "VSCampaignGeneratedMessagePagination": VSCampaignGeneratedMessagePagination,
    "VSDynamicVoucherStatus": VSDynamicVoucherStatus,
    "VectorStore": VectorStore,
    "Video": Video,
    "VideoProvider": VideoProvider,
    "VirtualBusinessCard": VirtualBusinessCard,
    "WTA2PApplicationUpdateParams": WTA2PApplicationUpdateParams,
    "WTAdvertisementCredit": WTAdvertisementCredit,
    "WTAdvertisementCreditCreateParams": WTAdvertisementCreditCreateParams,
    "WTAdvertisementCreditScan": WTAdvertisementCreditScan,
    "WTAdvertisementCreditUpdateParams": WTAdvertisementCreditUpdateParams,
    "WTAmenityCreateParams": WTAmenityCreateParams,
    "WTAmenityUpdateParams": WTAmenityUpdateParams,
    "WTAndroidKeystoreResponse": WTAndroidKeystoreResponse,
    "WTAuthenticationCheckSessionTokenStatusResponse": WTAuthenticationCheckSessionTokenStatusResponse,
    "WTAuthenticationForgotPassword": WTAuthenticationForgotPassword,
    "WTAuthenticationLoginRequest": WTAuthenticationLoginRequest,
    "WTAuthenticationLoginResponse": WTAuthenticationLoginResponse,
    "WTAuthenticationRegister": WTAuthenticationRegister,
    "WTAuthenticationRequestResetPassword": WTAuthenticationRequestResetPassword,
    "WTAuthenticationResetPassword": WTAuthenticationResetPassword,
    "WTAuthenticationSSOLoginForDiscourse": WTAuthenticationSSOLoginForDiscourse,
    "WTBillingChangePlan": WTBillingChangePlan,
    "WTBillingChangePlanBillingCadence": WTBillingChangePlanBillingCadence,
    "WTBillingSavePaymentMethod": WTBillingSavePaymentMethod,
    "WTBillingVerifyPaymentMethodResponse": WTBillingVerifyPaymentMethodResponse,
    "WTConnectAccountStatus": WTConnectAccountStatus,
    "WTConnectMoney": WTConnectMoney,
    "WTConnectOnboardingLinkRequest": WTConnectOnboardingLinkRequest,
    "WTConnectOnboardingLinkResponse": WTConnectOnboardingLinkResponse,
    "WTConnectOnboardingStatus": WTConnectOnboardingStatus,
    "WTConnectPaymentsSummary": WTConnectPaymentsSummary,
    "WTConnectPaymentsSummaryBalance": WTConnectPaymentsSummaryBalance,
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
    "WTFinancingSoftPullRequest": WTFinancingSoftPullRequest,
    "WTFinancingSoftPullResponse": WTFinancingSoftPullResponse,
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
    "WTLeadFiConsumerProfile": WTLeadFiConsumerProfile,
    "WTLeadFiConsumerProfileAddress": WTLeadFiConsumerProfileAddress,
    "WTLeadFiConsumerProfileAssets": WTLeadFiConsumerProfileAssets,
    "WTLeadFiConsumerProfileIncome": WTLeadFiConsumerProfileIncome,
    "WTLeadFiCreditOffer": WTLeadFiCreditOffer,
    "WTLeadFiInquiryResult": WTLeadFiInquiryResult,
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
    "WTPassBrandKit": WTPassBrandKit,
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
    "WTQuickLink": WTQuickLink,
    "WTQuickLinkCreateParams": WTQuickLinkCreateParams,
    "WTQuickLinkLinkBookSectionID": WTQuickLinkLinkBookSectionID,
    "WTQuickLinkSectionCreateParams": WTQuickLinkSectionCreateParams,
    "WTQuickLinkSectionUpdateParams": WTQuickLinkSectionUpdateParams,
    "WTQuickLinkUpdateParams": WTQuickLinkUpdateParams,
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
    "WTVideoPlaybackSource": WTVideoPlaybackSource,
    "WTVideoPlaybackSourceType": WTVideoPlaybackSourceType,
    "WTVideoUpdateParams": WTVideoUpdateParams,
    "WTVideoUploadProvision": WTVideoUploadProvision,
    "WTVideoUploadProvisionParams": WTVideoUploadProvisionParams,
    "WTVideoUploadProvisionProvider": WTVideoUploadProvisionProvider,
    "WTVirtualBusinessCardCreateParams": WTVirtualBusinessCardCreateParams,
    "WTVirtualBusinessCardUpdateParams": WTVirtualBusinessCardUpdateParams,
    "WTWalletConfigurationSaveWalletRecord": WTWalletConfigurationSaveWalletRecord,
    "WTWalletConfigurationSaveWalletRecordPassBrandKit": WTWalletConfigurationSaveWalletRecordPassBrandKit,
    "WTWalletConfigurationSaveWalletRecordSmsOptInSourceID": WTWalletConfigurationSaveWalletRecordSmsOptInSourceID,
    "WTWalletItemRedemption": WTWalletItemRedemption,
    "WTWalletObjectPrefixCounts": WTWalletObjectPrefixCounts,
    "WTWalletPageView": WTWalletPageView,
    "WTWalletPageViewCount": WTWalletPageViewCount,
    "WTWalletPageViewGeoPoint": WTWalletPageViewGeoPoint,
    "WTWhatsAppInboundWebhook": WTWhatsAppInboundWebhook,
    "WTWhatsAppStatusCallback": WTWhatsAppStatusCallback,
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
