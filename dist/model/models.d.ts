/// <reference types="node" />
/// <reference types="node" />
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
    };
}
export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
