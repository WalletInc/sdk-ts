"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./advertisementCredit"), exports);
__exportStar(require("./advertisementCreditBroadcast"), exports);
__exportStar(require("./advertisementCreditScan"), exports);
__exportStar(require("./agreement"), exports);
__exportStar(require("./alert"), exports);
__exportStar(require("./announcement"), exports);
__exportStar(require("./applicableTerminals"), exports);
__exportStar(require("./applicableTerminalsAnyOf"), exports);
__exportStar(require("./applicableTerminalsAnyOf1"), exports);
__exportStar(require("./applicableTerminalsAnyOf2"), exports);
__exportStar(require("./applicableTerminalsAnyOf3"), exports);
__exportStar(require("./applicableTerminalsAnyOf4"), exports);
__exportStar(require("./applicableTerminalsAnyOf5"), exports);
__exportStar(require("./applicableTerminalsAnyOf6"), exports);
__exportStar(require("./authError"), exports);
__exportStar(require("./availablePhoneNumbersRequest"), exports);
__exportStar(require("./clickFunnelAmount"), exports);
__exportStar(require("./clickFunnelContact"), exports);
__exportStar(require("./clickFunnelContactProfile"), exports);
__exportStar(require("./clickFunnelEvent"), exports);
__exportStar(require("./clickFunnelOriginalAmount"), exports);
__exportStar(require("./clickFunnelProduct"), exports);
__exportStar(require("./clickFunnelPurchase"), exports);
__exportStar(require("./clickFunnelRegistration"), exports);
__exportStar(require("./createStaticVoucherCampaign"), exports);
__exportStar(require("./createStaticVoucherCampaignWithVoucher"), exports);
__exportStar(require("./createStaticVoucherCampaignWithVoucherWithCSV"), exports);
__exportStar(require("./dashboardWidget"), exports);
__exportStar(require("./document"), exports);
__exportStar(require("./duplicateRowFound"), exports);
__exportStar(require("./dynamicVoucher"), exports);
__exportStar(require("./dynamicVoucherBroadcast"), exports);
__exportStar(require("./employee"), exports);
__exportStar(require("./employeeAPIKey"), exports);
__exportStar(require("./employeeActivityLog"), exports);
__exportStar(require("./entityTooLarge"), exports);
__exportStar(require("./exportDataFile"), exports);
__exportStar(require("./falsumError"), exports);
__exportStar(require("./falsumField"), exports);
__exportStar(require("./feature"), exports);
__exportStar(require("./forbiddenRequest"), exports);
__exportStar(require("./foreignKeyDoesNotExist"), exports);
__exportStar(require("./helpDeskRequest"), exports);
__exportStar(require("./imageGrid"), exports);
__exportStar(require("./importedList"), exports);
__exportStar(require("./importedListRecipient"), exports);
__exportStar(require("./inboundSMS"), exports);
__exportStar(require("./inlineResponse200"), exports);
__exportStar(require("./inlineResponse2001"), exports);
__exportStar(require("./inlineResponse20010"), exports);
__exportStar(require("./inlineResponse2002"), exports);
__exportStar(require("./inlineResponse2003"), exports);
__exportStar(require("./inlineResponse2004"), exports);
__exportStar(require("./inlineResponse2005"), exports);
__exportStar(require("./inlineResponse2006"), exports);
__exportStar(require("./inlineResponse2007"), exports);
__exportStar(require("./inlineResponse2008"), exports);
__exportStar(require("./inlineResponse2009"), exports);
__exportStar(require("./internalServerError"), exports);
__exportStar(require("./ledgerEntry"), exports);
__exportStar(require("./linkBook"), exports);
__exportStar(require("./linkBookSection"), exports);
__exportStar(require("./mSAnalyticsMemberCountPartitionedByDate"), exports);
__exportStar(require("./mSAnalyticsMemberPointsRedeemedPartitionedByDate"), exports);
__exportStar(require("./mSAnalyticsMemberPointsRefundedPartitionedByDate"), exports);
__exportStar(require("./mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate"), exports);
__exportStar(require("./mSAnalyticsMembershipTierAmountRefundedPartitionedByDate"), exports);
__exportStar(require("./mSMemberHistory"), exports);
__exportStar(require("./mSMemberHistoryPagination"), exports);
__exportStar(require("./mSMemberRedemption"), exports);
__exportStar(require("./mSMemberRedemptionPagination"), exports);
__exportStar(require("./mSMembershipTierHistory"), exports);
__exportStar(require("./mSMembershipTierHistoryPagination"), exports);
__exportStar(require("./mSMembershipTierRedemption"), exports);
__exportStar(require("./mSMembershipTierRedemptionPagination"), exports);
__exportStar(require("./mSMerchantCreditHistory"), exports);
__exportStar(require("./mSMerchantCreditHistoryPagination"), exports);
__exportStar(require("./mSMerchantCreditRedemption"), exports);
__exportStar(require("./mSMerchantCreditRedemptionPagination"), exports);
__exportStar(require("./mediaFile"), exports);
__exportStar(require("./member"), exports);
__exportStar(require("./memberSearch"), exports);
__exportStar(require("./merchant"), exports);
__exportStar(require("./merchantCreditSearch"), exports);
__exportStar(require("./merchantNotInitialized"), exports);
__exportStar(require("./merchantURL"), exports);
__exportStar(require("./message"), exports);
__exportStar(require("./moduleError"), exports);
__exportStar(require("./newsArticle"), exports);
__exportStar(require("./optInList"), exports);
__exportStar(require("./optInListSource"), exports);
__exportStar(require("./optInListSubscriber"), exports);
__exportStar(require("./outboundSMS"), exports);
__exportStar(require("./paginatedWTMembers"), exports);
__exportStar(require("./paginatedWTMerchantCredits"), exports);
__exportStar(require("./paginationRequestWithIDAndWithoutSortOptions"), exports);
__exportStar(require("./paginationRequestWithSortOptions"), exports);
__exportStar(require("./paymentDesign"), exports);
__exportStar(require("./paymentPrefixes"), exports);
__exportStar(require("./performance"), exports);
__exportStar(require("./phoneNumber"), exports);
__exportStar(require("./pickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID"), exports);
__exportStar(require("./pickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID"), exports);
__exportStar(require("./pickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId"), exports);
__exportStar(require("./pickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier"), exports);
__exportStar(require("./pickMSMemberExcludeKeyofMSMemberMemberIdentifier"), exports);
__exportStar(require("./pickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier"), exports);
__exportStar(require("./pickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier"), exports);
__exportStar(require("./pickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey"), exports);
__exportStar(require("./pickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded"), exports);
__exportStar(require("./pickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId"), exports);
__exportStar(require("./pickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId"), exports);
__exportStar(require("./pickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeID"), exports);
__exportStar(require("./pickSSOptInListMemberCreateParamsExcludeKeyofSSOptInListMemberCreateParamsMerchantCreatedAtOrMaxSMSCount"), exports);
__exportStar(require("./pickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId"), exports);
__exportStar(require("./pickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId"), exports);
__exportStar(require("./pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone"), exports);
__exportStar(require("./pickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID"), exports);
__exportStar(require("./pickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt"), exports);
__exportStar(require("./pickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId"), exports);
__exportStar(require("./pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate"), exports);
__exportStar(require("./pickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType"), exports);
__exportStar(require("./pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsBackgroundImageURLOrCompanyLogoURLOrEmployeeID"), exports);
__exportStar(require("./pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId"), exports);
__exportStar(require("./pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt"), exports);
__exportStar(require("./pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail"), exports);
__exportStar(require("./pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber"), exports);
__exportStar(require("./pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber"), exports);
__exportStar(require("./pickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID"), exports);
__exportStar(require("./pickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId"), exports);
__exportStar(require("./pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID"), exports);
__exportStar(require("./pickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime"), exports);
__exportStar(require("./pickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID"), exports);
__exportStar(require("./plan"), exports);
__exportStar(require("./portalPage"), exports);
__exportStar(require("./presignedPost"), exports);
__exportStar(require("./presignedPostFields"), exports);
__exportStar(require("./product"), exports);
__exportStar(require("./promoCode"), exports);
__exportStar(require("./reachPerformanceStats"), exports);
__exportStar(require("./request"), exports);
__exportStar(require("./response"), exports);
__exportStar(require("./role"), exports);
__exportStar(require("./roleAuditLog"), exports);
__exportStar(require("./sSImportedListRecipientCreateParams"), exports);
__exportStar(require("./sSOptInSource"), exports);
__exportStar(require("./simpleSMSBroadcast"), exports);
__exportStar(require("./staticVoucher"), exports);
__exportStar(require("./staticVoucherCampaign"), exports);
__exportStar(require("./staticVoucherCampaignBroadcast"), exports);
__exportStar(require("./staticVoucherCampaignGroup"), exports);
__exportStar(require("./staticVoucherCampaignUpdate"), exports);
__exportStar(require("./status"), exports);
__exportStar(require("./statusAnyOf"), exports);
__exportStar(require("./statusAnyOf1"), exports);
__exportStar(require("./statusAnyOf2"), exports);
__exportStar(require("./statusAnyOf3"), exports);
__exportStar(require("./subscriptionFeature"), exports);
__exportStar(require("./subscriptionPlan"), exports);
__exportStar(require("./subscriptionProduct"), exports);
__exportStar(require("./tcpa"), exports);
__exportStar(require("./updateStaticVoucherCampaignWithVoucher"), exports);
__exportStar(require("./vSCampaignGeneratedMessage"), exports);
__exportStar(require("./vSCampaignGeneratedMessagePagination"), exports);
__exportStar(require("./vSDynamicVoucherStatus"), exports);
__exportStar(require("./wTAdvertisementCredit"), exports);
__exportStar(require("./wTAdvertisementCreditCreateParams"), exports);
__exportStar(require("./wTAdvertisementCreditScan"), exports);
__exportStar(require("./wTAdvertisementCreditUpdateParams"), exports);
__exportStar(require("./wTAuthenticationCheckSessionTokenStatusResponse"), exports);
__exportStar(require("./wTAuthenticationForgotPassword"), exports);
__exportStar(require("./wTAuthenticationLoginRequest"), exports);
__exportStar(require("./wTAuthenticationLoginResponse"), exports);
__exportStar(require("./wTAuthenticationRegister"), exports);
__exportStar(require("./wTAuthenticationRequestResetPassword"), exports);
__exportStar(require("./wTAuthenticationResetPassword"), exports);
__exportStar(require("./wTAuthenticationSSOLoginForDiscourse"), exports);
__exportStar(require("./wTBillingChangePlan"), exports);
__exportStar(require("./wTBillingSavePaymentMethod"), exports);
__exportStar(require("./wTBillingVerifyPaymentMethodResponse"), exports);
__exportStar(require("./wTCountResult"), exports);
__exportStar(require("./wTCustomerSearchByMemberID"), exports);
__exportStar(require("./wTCustomerSearchByPhoneNumber"), exports);
__exportStar(require("./wTDynamicVoucher"), exports);
__exportStar(require("./wTDynamicVoucherCreateParams"), exports);
__exportStar(require("./wTDynamicVoucherRedemption"), exports);
__exportStar(require("./wTDynamicVoucherSummary"), exports);
__exportStar(require("./wTDynamicVoucherUpdateParams"), exports);
__exportStar(require("./wTEmployee"), exports);
__exportStar(require("./wTEmployeeAPIKey"), exports);
__exportStar(require("./wTEmployeeAPIKeyCreateParams"), exports);
__exportStar(require("./wTEmployeeAPIKeyUpdateParams"), exports);
__exportStar(require("./wTEmployeeCreate"), exports);
__exportStar(require("./wTEmployeeCreateAlert"), exports);
__exportStar(require("./wTEmployeeCreateDocument"), exports);
__exportStar(require("./wTEmployeeCreateMediaFile"), exports);
__exportStar(require("./wTEmployeeCreateStaticVoucherCampaignGroup"), exports);
__exportStar(require("./wTEmployeeFileCreate"), exports);
__exportStar(require("./wTEmployeeImportRecords"), exports);
__exportStar(require("./wTEmployeeNotification"), exports);
__exportStar(require("./wTEmployeePeerRoles"), exports);
__exportStar(require("./wTEmployeeS3FilePresign"), exports);
__exportStar(require("./wTEmployeeScheduleSMSCampaignBroadcast"), exports);
__exportStar(require("./wTEmployeeScheduleSimpleSMS"), exports);
__exportStar(require("./wTEmployeeScheduleSimpleSMSToRecipient"), exports);
__exportStar(require("./wTEmployeeSendHelpDeskResponse"), exports);
__exportStar(require("./wTEmployeeUpdate"), exports);
__exportStar(require("./wTEmployeeUpdateRecords"), exports);
__exportStar(require("./wTFetchWalletPaymentObjectWithToken"), exports);
__exportStar(require("./wTImageGridCreateParams"), exports);
__exportStar(require("./wTImageGridUpdateParams"), exports);
__exportStar(require("./wTImportedList"), exports);
__exportStar(require("./wTInfoGenesisLookupRequestErrors"), exports);
__exportStar(require("./wTInfoGenesisRecordFilterParameters"), exports);
__exportStar(require("./wTInfoGenesisRoutingIDs"), exports);
__exportStar(require("./wTInfoGenesisUniquePostingIDs"), exports);
__exportStar(require("./wTLinkBookCreateParams"), exports);
__exportStar(require("./wTLinkBookSectionCreateParams"), exports);
__exportStar(require("./wTLinkBookSectionUpdateParams"), exports);
__exportStar(require("./wTLinkBookUpdateParams"), exports);
__exportStar(require("./wTMember"), exports);
__exportStar(require("./wTMemberCreationParams"), exports);
__exportStar(require("./wTMembershipTier"), exports);
__exportStar(require("./wTMembershipTierCreationParams"), exports);
__exportStar(require("./wTMembershipTierUpdateParams"), exports);
__exportStar(require("./wTMembershipTierWithMemberCount"), exports);
__exportStar(require("./wTMerchantCredit"), exports);
__exportStar(require("./wTMerchantCreditCreationParams"), exports);
__exportStar(require("./wTMerchantURLCreate"), exports);
__exportStar(require("./wTMerchantURLUpdate"), exports);
__exportStar(require("./wTMerchantUpdate"), exports);
__exportStar(require("./wTMerchantUpdateBillingContact"), exports);
__exportStar(require("./wTMerchantUpdatePOSIntegration"), exports);
__exportStar(require("./wTNewsArticleCreateParams"), exports);
__exportStar(require("./wTNewsArticleUpdateParams"), exports);
__exportStar(require("./wTOptInList"), exports);
__exportStar(require("./wTOptInListCreationParams"), exports);
__exportStar(require("./wTPaymentDesign"), exports);
__exportStar(require("./wTPaymentDesignCreateParams"), exports);
__exportStar(require("./wTPaymentDesignUpdateParams"), exports);
__exportStar(require("./wTPerformanceCreateParams"), exports);
__exportStar(require("./wTPerformanceUpdateParams"), exports);
__exportStar(require("./wTPosMachine"), exports);
__exportStar(require("./wTPosMachineCreateParams"), exports);
__exportStar(require("./wTPosMachineUpdateParams"), exports);
__exportStar(require("./wTPromoCodeCreateParams"), exports);
__exportStar(require("./wTPromoCodeUpdateParams"), exports);
__exportStar(require("./wTRole"), exports);
__exportStar(require("./wTSMSAcquirePhoneNumber"), exports);
__exportStar(require("./wTSMSCreateAgreement"), exports);
__exportStar(require("./wTSMSImportOptInListSubscribers"), exports);
__exportStar(require("./wTSMSImportedListCreate"), exports);
__exportStar(require("./wTSMSLimits"), exports);
__exportStar(require("./wTSMSOptInListSourceCreate"), exports);
__exportStar(require("./wTSMSUpdatePhoneNumberConfig"), exports);
__exportStar(require("./wTSettingsSetPassword"), exports);
__exportStar(require("./wTStaticVoucher"), exports);
__exportStar(require("./wTStaticVoucherCampaign"), exports);
__exportStar(require("./wTStaticVoucherCampaignPreviewMessages"), exports);
__exportStar(require("./wTStaticVoucherCampaignPreviewMessagesByPage"), exports);
__exportStar(require("./wTStaticVoucherCreateParams"), exports);
__exportStar(require("./wTStaticVoucherUpdateParams"), exports);
__exportStar(require("./wTSystemApprovePhoneNumber"), exports);
__exportStar(require("./wTSystemRoleCreate"), exports);
__exportStar(require("./wTTCPAOpt"), exports);
__exportStar(require("./wTTwilioRequestAuthyCode"), exports);
__exportStar(require("./wTTwilioVerifyAuthyCode"), exports);
__exportStar(require("./wTWalletConfigurationSaveWalletRecord"), exports);
__exportStar(require("./wTWalletItemRedemption"), exports);
__exportStar(require("./wTWalletObjectPrefixCounts"), exports);
__exportStar(require("./wTWalletPageView"), exports);
__exportStar(require("./wTWalletPageViewCount"), exports);
__exportStar(require("./wTWalletPageViewGeoPoint"), exports);
__exportStar(require("./walletConfiguration"), exports);
__exportStar(require("./walletPageView"), exports);
__exportStar(require("./webpage"), exports);
const advertisementCredit_1 = require("./advertisementCredit");
const advertisementCreditBroadcast_1 = require("./advertisementCreditBroadcast");
const advertisementCreditScan_1 = require("./advertisementCreditScan");
const agreement_1 = require("./agreement");
const alert_1 = require("./alert");
const announcement_1 = require("./announcement");
const applicableTerminals_1 = require("./applicableTerminals");
const applicableTerminalsAnyOf_1 = require("./applicableTerminalsAnyOf");
const applicableTerminalsAnyOf1_1 = require("./applicableTerminalsAnyOf1");
const applicableTerminalsAnyOf2_1 = require("./applicableTerminalsAnyOf2");
const applicableTerminalsAnyOf3_1 = require("./applicableTerminalsAnyOf3");
const applicableTerminalsAnyOf4_1 = require("./applicableTerminalsAnyOf4");
const applicableTerminalsAnyOf5_1 = require("./applicableTerminalsAnyOf5");
const applicableTerminalsAnyOf6_1 = require("./applicableTerminalsAnyOf6");
const authError_1 = require("./authError");
const availablePhoneNumbersRequest_1 = require("./availablePhoneNumbersRequest");
const clickFunnelAmount_1 = require("./clickFunnelAmount");
const clickFunnelContact_1 = require("./clickFunnelContact");
const clickFunnelContactProfile_1 = require("./clickFunnelContactProfile");
const clickFunnelEvent_1 = require("./clickFunnelEvent");
const clickFunnelOriginalAmount_1 = require("./clickFunnelOriginalAmount");
const clickFunnelProduct_1 = require("./clickFunnelProduct");
const clickFunnelPurchase_1 = require("./clickFunnelPurchase");
const clickFunnelRegistration_1 = require("./clickFunnelRegistration");
const createStaticVoucherCampaign_1 = require("./createStaticVoucherCampaign");
const createStaticVoucherCampaignWithVoucher_1 = require("./createStaticVoucherCampaignWithVoucher");
const createStaticVoucherCampaignWithVoucherWithCSV_1 = require("./createStaticVoucherCampaignWithVoucherWithCSV");
const dashboardWidget_1 = require("./dashboardWidget");
const document_1 = require("./document");
const duplicateRowFound_1 = require("./duplicateRowFound");
const dynamicVoucher_1 = require("./dynamicVoucher");
const dynamicVoucherBroadcast_1 = require("./dynamicVoucherBroadcast");
const employee_1 = require("./employee");
const employeeAPIKey_1 = require("./employeeAPIKey");
const employeeActivityLog_1 = require("./employeeActivityLog");
const entityTooLarge_1 = require("./entityTooLarge");
const exportDataFile_1 = require("./exportDataFile");
const falsumError_1 = require("./falsumError");
const falsumField_1 = require("./falsumField");
const feature_1 = require("./feature");
const forbiddenRequest_1 = require("./forbiddenRequest");
const foreignKeyDoesNotExist_1 = require("./foreignKeyDoesNotExist");
const helpDeskRequest_1 = require("./helpDeskRequest");
const imageGrid_1 = require("./imageGrid");
const importedList_1 = require("./importedList");
const importedListRecipient_1 = require("./importedListRecipient");
const inboundSMS_1 = require("./inboundSMS");
const inlineResponse200_1 = require("./inlineResponse200");
const inlineResponse2001_1 = require("./inlineResponse2001");
const inlineResponse20010_1 = require("./inlineResponse20010");
const inlineResponse2002_1 = require("./inlineResponse2002");
const inlineResponse2003_1 = require("./inlineResponse2003");
const inlineResponse2004_1 = require("./inlineResponse2004");
const inlineResponse2005_1 = require("./inlineResponse2005");
const inlineResponse2006_1 = require("./inlineResponse2006");
const inlineResponse2007_1 = require("./inlineResponse2007");
const inlineResponse2008_1 = require("./inlineResponse2008");
const inlineResponse2009_1 = require("./inlineResponse2009");
const internalServerError_1 = require("./internalServerError");
const ledgerEntry_1 = require("./ledgerEntry");
const linkBook_1 = require("./linkBook");
const linkBookSection_1 = require("./linkBookSection");
const mSAnalyticsMemberCountPartitionedByDate_1 = require("./mSAnalyticsMemberCountPartitionedByDate");
const mSAnalyticsMemberPointsRedeemedPartitionedByDate_1 = require("./mSAnalyticsMemberPointsRedeemedPartitionedByDate");
const mSAnalyticsMemberPointsRefundedPartitionedByDate_1 = require("./mSAnalyticsMemberPointsRefundedPartitionedByDate");
const mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate_1 = require("./mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate");
const mSAnalyticsMembershipTierAmountRefundedPartitionedByDate_1 = require("./mSAnalyticsMembershipTierAmountRefundedPartitionedByDate");
const mSMemberHistory_1 = require("./mSMemberHistory");
const mSMemberHistoryPagination_1 = require("./mSMemberHistoryPagination");
const mSMemberRedemption_1 = require("./mSMemberRedemption");
const mSMemberRedemptionPagination_1 = require("./mSMemberRedemptionPagination");
const mSMembershipTierHistory_1 = require("./mSMembershipTierHistory");
const mSMembershipTierHistoryPagination_1 = require("./mSMembershipTierHistoryPagination");
const mSMembershipTierRedemption_1 = require("./mSMembershipTierRedemption");
const mSMembershipTierRedemptionPagination_1 = require("./mSMembershipTierRedemptionPagination");
const mSMerchantCreditHistory_1 = require("./mSMerchantCreditHistory");
const mSMerchantCreditHistoryPagination_1 = require("./mSMerchantCreditHistoryPagination");
const mSMerchantCreditRedemption_1 = require("./mSMerchantCreditRedemption");
const mSMerchantCreditRedemptionPagination_1 = require("./mSMerchantCreditRedemptionPagination");
const mediaFile_1 = require("./mediaFile");
const member_1 = require("./member");
const memberSearch_1 = require("./memberSearch");
const merchant_1 = require("./merchant");
const merchantCreditSearch_1 = require("./merchantCreditSearch");
const merchantNotInitialized_1 = require("./merchantNotInitialized");
const merchantURL_1 = require("./merchantURL");
const message_1 = require("./message");
const moduleError_1 = require("./moduleError");
const newsArticle_1 = require("./newsArticle");
const optInList_1 = require("./optInList");
const optInListSource_1 = require("./optInListSource");
const optInListSubscriber_1 = require("./optInListSubscriber");
const outboundSMS_1 = require("./outboundSMS");
const paginatedWTMembers_1 = require("./paginatedWTMembers");
const paginatedWTMerchantCredits_1 = require("./paginatedWTMerchantCredits");
const paginationRequestWithIDAndWithoutSortOptions_1 = require("./paginationRequestWithIDAndWithoutSortOptions");
const paginationRequestWithSortOptions_1 = require("./paginationRequestWithSortOptions");
const paymentDesign_1 = require("./paymentDesign");
const paymentPrefixes_1 = require("./paymentPrefixes");
const performance_1 = require("./performance");
const phoneNumber_1 = require("./phoneNumber");
const pickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID_1 = require("./pickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID");
const pickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID_1 = require("./pickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID");
const pickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId_1 = require("./pickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId");
const pickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier_1 = require("./pickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier");
const pickMSMemberExcludeKeyofMSMemberMemberIdentifier_1 = require("./pickMSMemberExcludeKeyofMSMemberMemberIdentifier");
const pickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier_1 = require("./pickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier");
const pickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier_1 = require("./pickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier");
const pickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey_1 = require("./pickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey");
const pickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded_1 = require("./pickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded");
const pickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId_1 = require("./pickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId");
const pickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId_1 = require("./pickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId");
const pickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeID_1 = require("./pickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeID");
const pickSSOptInListMemberCreateParamsExcludeKeyofSSOptInListMemberCreateParamsMerchantCreatedAtOrMaxSMSCount_1 = require("./pickSSOptInListMemberCreateParamsExcludeKeyofSSOptInListMemberCreateParamsMerchantCreatedAtOrMaxSMSCount");
const pickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId_1 = require("./pickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId");
const pickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId_1 = require("./pickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId");
const pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone_1 = require("./pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone");
const pickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID_1 = require("./pickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID");
const pickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt_1 = require("./pickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt");
const pickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId_1 = require("./pickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId");
const pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate_1 = require("./pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate");
const pickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType_1 = require("./pickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType");
const pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsBackgroundImageURLOrCompanyLogoURLOrEmployeeID_1 = require("./pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsBackgroundImageURLOrCompanyLogoURLOrEmployeeID");
const pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId_1 = require("./pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId");
const pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt_1 = require("./pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt");
const pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail_1 = require("./pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail");
const pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber_1 = require("./pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber");
const pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber_1 = require("./pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber");
const pickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID_1 = require("./pickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID");
const pickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId_1 = require("./pickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId");
const pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID_1 = require("./pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID");
const pickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime_1 = require("./pickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime");
const pickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID_1 = require("./pickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID");
const plan_1 = require("./plan");
const portalPage_1 = require("./portalPage");
const presignedPost_1 = require("./presignedPost");
const presignedPostFields_1 = require("./presignedPostFields");
const product_1 = require("./product");
const promoCode_1 = require("./promoCode");
const reachPerformanceStats_1 = require("./reachPerformanceStats");
const request_1 = require("./request");
const response_1 = require("./response");
const role_1 = require("./role");
const roleAuditLog_1 = require("./roleAuditLog");
const sSImportedListRecipientCreateParams_1 = require("./sSImportedListRecipientCreateParams");
const sSOptInSource_1 = require("./sSOptInSource");
const simpleSMSBroadcast_1 = require("./simpleSMSBroadcast");
const staticVoucher_1 = require("./staticVoucher");
const staticVoucherCampaign_1 = require("./staticVoucherCampaign");
const staticVoucherCampaignBroadcast_1 = require("./staticVoucherCampaignBroadcast");
const staticVoucherCampaignGroup_1 = require("./staticVoucherCampaignGroup");
const staticVoucherCampaignUpdate_1 = require("./staticVoucherCampaignUpdate");
const status_1 = require("./status");
const statusAnyOf_1 = require("./statusAnyOf");
const statusAnyOf1_1 = require("./statusAnyOf1");
const statusAnyOf2_1 = require("./statusAnyOf2");
const statusAnyOf3_1 = require("./statusAnyOf3");
const subscriptionFeature_1 = require("./subscriptionFeature");
const subscriptionPlan_1 = require("./subscriptionPlan");
const subscriptionProduct_1 = require("./subscriptionProduct");
const tcpa_1 = require("./tcpa");
const updateStaticVoucherCampaignWithVoucher_1 = require("./updateStaticVoucherCampaignWithVoucher");
const vSCampaignGeneratedMessage_1 = require("./vSCampaignGeneratedMessage");
const vSCampaignGeneratedMessagePagination_1 = require("./vSCampaignGeneratedMessagePagination");
const vSDynamicVoucherStatus_1 = require("./vSDynamicVoucherStatus");
const wTAdvertisementCredit_1 = require("./wTAdvertisementCredit");
const wTAdvertisementCreditCreateParams_1 = require("./wTAdvertisementCreditCreateParams");
const wTAdvertisementCreditScan_1 = require("./wTAdvertisementCreditScan");
const wTAdvertisementCreditUpdateParams_1 = require("./wTAdvertisementCreditUpdateParams");
const wTAuthenticationCheckSessionTokenStatusResponse_1 = require("./wTAuthenticationCheckSessionTokenStatusResponse");
const wTAuthenticationForgotPassword_1 = require("./wTAuthenticationForgotPassword");
const wTAuthenticationLoginRequest_1 = require("./wTAuthenticationLoginRequest");
const wTAuthenticationLoginResponse_1 = require("./wTAuthenticationLoginResponse");
const wTAuthenticationRegister_1 = require("./wTAuthenticationRegister");
const wTAuthenticationRequestResetPassword_1 = require("./wTAuthenticationRequestResetPassword");
const wTAuthenticationResetPassword_1 = require("./wTAuthenticationResetPassword");
const wTAuthenticationSSOLoginForDiscourse_1 = require("./wTAuthenticationSSOLoginForDiscourse");
const wTBillingChangePlan_1 = require("./wTBillingChangePlan");
const wTBillingSavePaymentMethod_1 = require("./wTBillingSavePaymentMethod");
const wTBillingVerifyPaymentMethodResponse_1 = require("./wTBillingVerifyPaymentMethodResponse");
const wTCountResult_1 = require("./wTCountResult");
const wTCustomerSearchByMemberID_1 = require("./wTCustomerSearchByMemberID");
const wTCustomerSearchByPhoneNumber_1 = require("./wTCustomerSearchByPhoneNumber");
const wTDynamicVoucher_1 = require("./wTDynamicVoucher");
const wTDynamicVoucherCreateParams_1 = require("./wTDynamicVoucherCreateParams");
const wTDynamicVoucherRedemption_1 = require("./wTDynamicVoucherRedemption");
const wTDynamicVoucherSummary_1 = require("./wTDynamicVoucherSummary");
const wTDynamicVoucherUpdateParams_1 = require("./wTDynamicVoucherUpdateParams");
const wTEmployee_1 = require("./wTEmployee");
const wTEmployeeAPIKey_1 = require("./wTEmployeeAPIKey");
const wTEmployeeAPIKeyCreateParams_1 = require("./wTEmployeeAPIKeyCreateParams");
const wTEmployeeAPIKeyUpdateParams_1 = require("./wTEmployeeAPIKeyUpdateParams");
const wTEmployeeCreate_1 = require("./wTEmployeeCreate");
const wTEmployeeCreateAlert_1 = require("./wTEmployeeCreateAlert");
const wTEmployeeCreateDocument_1 = require("./wTEmployeeCreateDocument");
const wTEmployeeCreateMediaFile_1 = require("./wTEmployeeCreateMediaFile");
const wTEmployeeCreateStaticVoucherCampaignGroup_1 = require("./wTEmployeeCreateStaticVoucherCampaignGroup");
const wTEmployeeFileCreate_1 = require("./wTEmployeeFileCreate");
const wTEmployeeImportRecords_1 = require("./wTEmployeeImportRecords");
const wTEmployeeNotification_1 = require("./wTEmployeeNotification");
const wTEmployeePeerRoles_1 = require("./wTEmployeePeerRoles");
const wTEmployeeS3FilePresign_1 = require("./wTEmployeeS3FilePresign");
const wTEmployeeScheduleSMSCampaignBroadcast_1 = require("./wTEmployeeScheduleSMSCampaignBroadcast");
const wTEmployeeScheduleSimpleSMS_1 = require("./wTEmployeeScheduleSimpleSMS");
const wTEmployeeScheduleSimpleSMSToRecipient_1 = require("./wTEmployeeScheduleSimpleSMSToRecipient");
const wTEmployeeSendHelpDeskResponse_1 = require("./wTEmployeeSendHelpDeskResponse");
const wTEmployeeUpdate_1 = require("./wTEmployeeUpdate");
const wTEmployeeUpdateRecords_1 = require("./wTEmployeeUpdateRecords");
const wTFetchWalletPaymentObjectWithToken_1 = require("./wTFetchWalletPaymentObjectWithToken");
const wTImageGridCreateParams_1 = require("./wTImageGridCreateParams");
const wTImageGridUpdateParams_1 = require("./wTImageGridUpdateParams");
const wTImportedList_1 = require("./wTImportedList");
const wTInfoGenesisLookupRequestErrors_1 = require("./wTInfoGenesisLookupRequestErrors");
const wTInfoGenesisRecordFilterParameters_1 = require("./wTInfoGenesisRecordFilterParameters");
const wTInfoGenesisRoutingIDs_1 = require("./wTInfoGenesisRoutingIDs");
const wTInfoGenesisUniquePostingIDs_1 = require("./wTInfoGenesisUniquePostingIDs");
const wTLinkBookCreateParams_1 = require("./wTLinkBookCreateParams");
const wTLinkBookSectionCreateParams_1 = require("./wTLinkBookSectionCreateParams");
const wTLinkBookSectionUpdateParams_1 = require("./wTLinkBookSectionUpdateParams");
const wTLinkBookUpdateParams_1 = require("./wTLinkBookUpdateParams");
const wTMember_1 = require("./wTMember");
const wTMemberCreationParams_1 = require("./wTMemberCreationParams");
const wTMembershipTier_1 = require("./wTMembershipTier");
const wTMembershipTierCreationParams_1 = require("./wTMembershipTierCreationParams");
const wTMembershipTierUpdateParams_1 = require("./wTMembershipTierUpdateParams");
const wTMembershipTierWithMemberCount_1 = require("./wTMembershipTierWithMemberCount");
const wTMerchantCredit_1 = require("./wTMerchantCredit");
const wTMerchantCreditCreationParams_1 = require("./wTMerchantCreditCreationParams");
const wTMerchantURLCreate_1 = require("./wTMerchantURLCreate");
const wTMerchantURLUpdate_1 = require("./wTMerchantURLUpdate");
const wTMerchantUpdate_1 = require("./wTMerchantUpdate");
const wTMerchantUpdateBillingContact_1 = require("./wTMerchantUpdateBillingContact");
const wTMerchantUpdatePOSIntegration_1 = require("./wTMerchantUpdatePOSIntegration");
const wTNewsArticleCreateParams_1 = require("./wTNewsArticleCreateParams");
const wTNewsArticleUpdateParams_1 = require("./wTNewsArticleUpdateParams");
const wTOptInList_1 = require("./wTOptInList");
const wTOptInListCreationParams_1 = require("./wTOptInListCreationParams");
const wTPaymentDesign_1 = require("./wTPaymentDesign");
const wTPaymentDesignCreateParams_1 = require("./wTPaymentDesignCreateParams");
const wTPaymentDesignUpdateParams_1 = require("./wTPaymentDesignUpdateParams");
const wTPerformanceCreateParams_1 = require("./wTPerformanceCreateParams");
const wTPerformanceUpdateParams_1 = require("./wTPerformanceUpdateParams");
const wTPosMachine_1 = require("./wTPosMachine");
const wTPosMachineCreateParams_1 = require("./wTPosMachineCreateParams");
const wTPosMachineUpdateParams_1 = require("./wTPosMachineUpdateParams");
const wTPromoCodeCreateParams_1 = require("./wTPromoCodeCreateParams");
const wTPromoCodeUpdateParams_1 = require("./wTPromoCodeUpdateParams");
const wTRole_1 = require("./wTRole");
const wTSMSAcquirePhoneNumber_1 = require("./wTSMSAcquirePhoneNumber");
const wTSMSCreateAgreement_1 = require("./wTSMSCreateAgreement");
const wTSMSImportOptInListSubscribers_1 = require("./wTSMSImportOptInListSubscribers");
const wTSMSImportedListCreate_1 = require("./wTSMSImportedListCreate");
const wTSMSLimits_1 = require("./wTSMSLimits");
const wTSMSOptInListSourceCreate_1 = require("./wTSMSOptInListSourceCreate");
const wTSMSUpdatePhoneNumberConfig_1 = require("./wTSMSUpdatePhoneNumberConfig");
const wTSettingsSetPassword_1 = require("./wTSettingsSetPassword");
const wTStaticVoucher_1 = require("./wTStaticVoucher");
const wTStaticVoucherCampaign_1 = require("./wTStaticVoucherCampaign");
const wTStaticVoucherCampaignPreviewMessages_1 = require("./wTStaticVoucherCampaignPreviewMessages");
const wTStaticVoucherCampaignPreviewMessagesByPage_1 = require("./wTStaticVoucherCampaignPreviewMessagesByPage");
const wTStaticVoucherCreateParams_1 = require("./wTStaticVoucherCreateParams");
const wTStaticVoucherUpdateParams_1 = require("./wTStaticVoucherUpdateParams");
const wTSystemApprovePhoneNumber_1 = require("./wTSystemApprovePhoneNumber");
const wTSystemRoleCreate_1 = require("./wTSystemRoleCreate");
const wTTCPAOpt_1 = require("./wTTCPAOpt");
const wTTwilioRequestAuthyCode_1 = require("./wTTwilioRequestAuthyCode");
const wTTwilioVerifyAuthyCode_1 = require("./wTTwilioVerifyAuthyCode");
const wTWalletConfigurationSaveWalletRecord_1 = require("./wTWalletConfigurationSaveWalletRecord");
const wTWalletItemRedemption_1 = require("./wTWalletItemRedemption");
const wTWalletObjectPrefixCounts_1 = require("./wTWalletObjectPrefixCounts");
const wTWalletPageView_1 = require("./wTWalletPageView");
const wTWalletPageViewCount_1 = require("./wTWalletPageViewCount");
const wTWalletPageViewGeoPoint_1 = require("./wTWalletPageViewGeoPoint");
const walletConfiguration_1 = require("./walletConfiguration");
const walletPageView_1 = require("./walletPageView");
const webpage_1 = require("./webpage");
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
let enumsMap = {
    "ApplicableTerminalsAnyOf": applicableTerminalsAnyOf_1.ApplicableTerminalsAnyOf,
    "ApplicableTerminalsAnyOf1": applicableTerminalsAnyOf1_1.ApplicableTerminalsAnyOf1,
    "ApplicableTerminalsAnyOf2": applicableTerminalsAnyOf2_1.ApplicableTerminalsAnyOf2,
    "ApplicableTerminalsAnyOf3": applicableTerminalsAnyOf3_1.ApplicableTerminalsAnyOf3,
    "ApplicableTerminalsAnyOf4": applicableTerminalsAnyOf4_1.ApplicableTerminalsAnyOf4,
    "ApplicableTerminalsAnyOf5": applicableTerminalsAnyOf5_1.ApplicableTerminalsAnyOf5,
    "ApplicableTerminalsAnyOf6": applicableTerminalsAnyOf6_1.ApplicableTerminalsAnyOf6,
    "PaginationRequestWithSortOptions.SortKeyEnum": paginationRequestWithSortOptions_1.PaginationRequestWithSortOptions.SortKeyEnum,
    "PortalPage": portalPage_1.PortalPage,
    "StatusAnyOf": statusAnyOf_1.StatusAnyOf,
    "StatusAnyOf1": statusAnyOf1_1.StatusAnyOf1,
    "StatusAnyOf2": statusAnyOf2_1.StatusAnyOf2,
    "StatusAnyOf3": statusAnyOf3_1.StatusAnyOf3,
    "WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum": wTAuthenticationCheckSessionTokenStatusResponse_1.WTAuthenticationCheckSessionTokenStatusResponse.StatusEnum,
};
let typeMap = {
    "AdvertisementCredit": advertisementCredit_1.AdvertisementCredit,
    "AdvertisementCreditBroadcast": advertisementCreditBroadcast_1.AdvertisementCreditBroadcast,
    "AdvertisementCreditScan": advertisementCreditScan_1.AdvertisementCreditScan,
    "Agreement": agreement_1.Agreement,
    "Alert": alert_1.Alert,
    "Announcement": announcement_1.Announcement,
    "ApplicableTerminals": applicableTerminals_1.ApplicableTerminals,
    "AuthError": authError_1.AuthError,
    "AvailablePhoneNumbersRequest": availablePhoneNumbersRequest_1.AvailablePhoneNumbersRequest,
    "ClickFunnelAmount": clickFunnelAmount_1.ClickFunnelAmount,
    "ClickFunnelContact": clickFunnelContact_1.ClickFunnelContact,
    "ClickFunnelContactProfile": clickFunnelContactProfile_1.ClickFunnelContactProfile,
    "ClickFunnelEvent": clickFunnelEvent_1.ClickFunnelEvent,
    "ClickFunnelOriginalAmount": clickFunnelOriginalAmount_1.ClickFunnelOriginalAmount,
    "ClickFunnelProduct": clickFunnelProduct_1.ClickFunnelProduct,
    "ClickFunnelPurchase": clickFunnelPurchase_1.ClickFunnelPurchase,
    "ClickFunnelRegistration": clickFunnelRegistration_1.ClickFunnelRegistration,
    "CreateStaticVoucherCampaign": createStaticVoucherCampaign_1.CreateStaticVoucherCampaign,
    "CreateStaticVoucherCampaignWithVoucher": createStaticVoucherCampaignWithVoucher_1.CreateStaticVoucherCampaignWithVoucher,
    "CreateStaticVoucherCampaignWithVoucherWithCSV": createStaticVoucherCampaignWithVoucherWithCSV_1.CreateStaticVoucherCampaignWithVoucherWithCSV,
    "DashboardWidget": dashboardWidget_1.DashboardWidget,
    "Document": document_1.Document,
    "DuplicateRowFound": duplicateRowFound_1.DuplicateRowFound,
    "DynamicVoucher": dynamicVoucher_1.DynamicVoucher,
    "DynamicVoucherBroadcast": dynamicVoucherBroadcast_1.DynamicVoucherBroadcast,
    "Employee": employee_1.Employee,
    "EmployeeAPIKey": employeeAPIKey_1.EmployeeAPIKey,
    "EmployeeActivityLog": employeeActivityLog_1.EmployeeActivityLog,
    "EntityTooLarge": entityTooLarge_1.EntityTooLarge,
    "ExportDataFile": exportDataFile_1.ExportDataFile,
    "FalsumError": falsumError_1.FalsumError,
    "FalsumField": falsumField_1.FalsumField,
    "Feature": feature_1.Feature,
    "ForbiddenRequest": forbiddenRequest_1.ForbiddenRequest,
    "ForeignKeyDoesNotExist": foreignKeyDoesNotExist_1.ForeignKeyDoesNotExist,
    "HelpDeskRequest": helpDeskRequest_1.HelpDeskRequest,
    "ImageGrid": imageGrid_1.ImageGrid,
    "ImportedList": importedList_1.ImportedList,
    "ImportedListRecipient": importedListRecipient_1.ImportedListRecipient,
    "InboundSMS": inboundSMS_1.InboundSMS,
    "InlineResponse200": inlineResponse200_1.InlineResponse200,
    "InlineResponse2001": inlineResponse2001_1.InlineResponse2001,
    "InlineResponse20010": inlineResponse20010_1.InlineResponse20010,
    "InlineResponse2002": inlineResponse2002_1.InlineResponse2002,
    "InlineResponse2003": inlineResponse2003_1.InlineResponse2003,
    "InlineResponse2004": inlineResponse2004_1.InlineResponse2004,
    "InlineResponse2005": inlineResponse2005_1.InlineResponse2005,
    "InlineResponse2006": inlineResponse2006_1.InlineResponse2006,
    "InlineResponse2007": inlineResponse2007_1.InlineResponse2007,
    "InlineResponse2008": inlineResponse2008_1.InlineResponse2008,
    "InlineResponse2009": inlineResponse2009_1.InlineResponse2009,
    "InternalServerError": internalServerError_1.InternalServerError,
    "LedgerEntry": ledgerEntry_1.LedgerEntry,
    "LinkBook": linkBook_1.LinkBook,
    "LinkBookSection": linkBookSection_1.LinkBookSection,
    "MSAnalyticsMemberCountPartitionedByDate": mSAnalyticsMemberCountPartitionedByDate_1.MSAnalyticsMemberCountPartitionedByDate,
    "MSAnalyticsMemberPointsRedeemedPartitionedByDate": mSAnalyticsMemberPointsRedeemedPartitionedByDate_1.MSAnalyticsMemberPointsRedeemedPartitionedByDate,
    "MSAnalyticsMemberPointsRefundedPartitionedByDate": mSAnalyticsMemberPointsRefundedPartitionedByDate_1.MSAnalyticsMemberPointsRefundedPartitionedByDate,
    "MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate": mSAnalyticsMembershipTierAmountRedeemedPartitionedByDate_1.MSAnalyticsMembershipTierAmountRedeemedPartitionedByDate,
    "MSAnalyticsMembershipTierAmountRefundedPartitionedByDate": mSAnalyticsMembershipTierAmountRefundedPartitionedByDate_1.MSAnalyticsMembershipTierAmountRefundedPartitionedByDate,
    "MSMemberHistory": mSMemberHistory_1.MSMemberHistory,
    "MSMemberHistoryPagination": mSMemberHistoryPagination_1.MSMemberHistoryPagination,
    "MSMemberRedemption": mSMemberRedemption_1.MSMemberRedemption,
    "MSMemberRedemptionPagination": mSMemberRedemptionPagination_1.MSMemberRedemptionPagination,
    "MSMembershipTierHistory": mSMembershipTierHistory_1.MSMembershipTierHistory,
    "MSMembershipTierHistoryPagination": mSMembershipTierHistoryPagination_1.MSMembershipTierHistoryPagination,
    "MSMembershipTierRedemption": mSMembershipTierRedemption_1.MSMembershipTierRedemption,
    "MSMembershipTierRedemptionPagination": mSMembershipTierRedemptionPagination_1.MSMembershipTierRedemptionPagination,
    "MSMerchantCreditHistory": mSMerchantCreditHistory_1.MSMerchantCreditHistory,
    "MSMerchantCreditHistoryPagination": mSMerchantCreditHistoryPagination_1.MSMerchantCreditHistoryPagination,
    "MSMerchantCreditRedemption": mSMerchantCreditRedemption_1.MSMerchantCreditRedemption,
    "MSMerchantCreditRedemptionPagination": mSMerchantCreditRedemptionPagination_1.MSMerchantCreditRedemptionPagination,
    "MediaFile": mediaFile_1.MediaFile,
    "Member": member_1.Member,
    "MemberSearch": memberSearch_1.MemberSearch,
    "Merchant": merchant_1.Merchant,
    "MerchantCreditSearch": merchantCreditSearch_1.MerchantCreditSearch,
    "MerchantNotInitialized": merchantNotInitialized_1.MerchantNotInitialized,
    "MerchantURL": merchantURL_1.MerchantURL,
    "Message": message_1.Message,
    "ModuleError": moduleError_1.ModuleError,
    "NewsArticle": newsArticle_1.NewsArticle,
    "OptInList": optInList_1.OptInList,
    "OptInListSource": optInListSource_1.OptInListSource,
    "OptInListSubscriber": optInListSubscriber_1.OptInListSubscriber,
    "OutboundSMS": outboundSMS_1.OutboundSMS,
    "PaginatedWTMembers": paginatedWTMembers_1.PaginatedWTMembers,
    "PaginatedWTMerchantCredits": paginatedWTMerchantCredits_1.PaginatedWTMerchantCredits,
    "PaginationRequestWithIDAndWithoutSortOptions": paginationRequestWithIDAndWithoutSortOptions_1.PaginationRequestWithIDAndWithoutSortOptions,
    "PaginationRequestWithSortOptions": paginationRequestWithSortOptions_1.PaginationRequestWithSortOptions,
    "PaymentDesign": paymentDesign_1.PaymentDesign,
    "PaymentPrefixes": paymentPrefixes_1.PaymentPrefixes,
    "Performance": performance_1.Performance,
    "PhoneNumber": phoneNumber_1.PhoneNumber,
    "PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID": pickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID_1.PickCreateStaticVoucherCampaignWithVoucherExcludeKeyofcreateStaticVoucherCampaignWithVoucherSourceID,
    "PickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID": pickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID_1.PickMSEmployeeAPIKeyCreateParamsExcludeKeyofMSEmployeeAPIKeyCreateParamsEmployeeID,
    "PickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId": pickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId_1.PickMSEmployeeAPIKeyUpdateParamsExcludeKeyofMSEmployeeAPIKeyUpdateParamsId,
    "PickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier": pickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier_1.PickMSMemberCreationParamsExcludeKeyofMSMemberCreationParamsMemberIdentifier,
    "PickMSMemberExcludeKeyofMSMemberMemberIdentifier": pickMSMemberExcludeKeyofMSMemberMemberIdentifier_1.PickMSMemberExcludeKeyofMSMemberMemberIdentifier,
    "PickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier": pickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier_1.PickMSMerchantCreditCreationParamsExcludeKeyofMSMerchantCreditCreationParamsMemberIdentifier,
    "PickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier": pickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier_1.PickMSMerchantCreditExcludeKeyofMSMerchantCreditMemberIdentifier,
    "PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey": pickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey_1.PickPaginationRequestWithSortOptionsExcludeKeyofPaginationRequestWithSortOptionsSortKey,
    "PickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded": pickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded_1.PickPaginationRequestWithoutSortOptionsExcludeKeyofPaginationRequestWithoutSortOptionsIsArchiveIncluded,
    "PickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId": pickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId_1.PickSSImportedListUpdateParamsExcludeKeyofSSImportedListUpdateParamsId,
    "PickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId": pickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId_1.PickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId,
    "PickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeID": pickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeID_1.PickSSOptInListCreateParamsExcludeKeyofSSOptInListCreateParamsEmployeeID,
    "PickSSOptInListMemberCreateParamsExcludeKeyofSSOptInListMemberCreateParamsMerchantCreatedAtOrMaxSMSCount": pickSSOptInListMemberCreateParamsExcludeKeyofSSOptInListMemberCreateParamsMerchantCreatedAtOrMaxSMSCount_1.PickSSOptInListMemberCreateParamsExcludeKeyofSSOptInListMemberCreateParamsMerchantCreatedAtOrMaxSMSCount,
    "PickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId": pickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId_1.PickSSOptInListUpdateParamsExcludeKeyofSSOptInListUpdateParamsId,
    "PickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId": pickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId_1.PickSSOptInSourceUpdateParamsExcludeKeyofSSOptInSourceUpdateParamsId,
    "PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone": pickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone_1.PickSSOutboundMessageLogExcludeKeyofSSOutboundMessageLogToCellPhone,
    "PickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID": pickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID_1.PickVSAdvertisementCreditCreateParamsExcludeKeyofVSAdvertisementCreditCreateParamsEmployeeID,
    "PickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt": pickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt_1.PickVSAdvertisementCreditScanExcludeKeyofVSAdvertisementCreditScanRedeemedAtOrRefundedAt,
    "PickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId": pickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId_1.PickVSAdvertisementCreditUpdateParamsExcludeKeyofVSAdvertisementCreditUpdateParamsId,
    "PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate": pickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate_1.PickVSCampaignUpdateParamsExcludeKeyofVSCampaignUpdateParamsStartDateOrExpirationDate,
    "PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType": pickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType_1.PickVSDynamicVoucherExcludeKeyofVSDynamicVoucherTemporalDecreaseFrequencyType,
    "PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsBackgroundImageURLOrCompanyLogoURLOrEmployeeID": pickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsBackgroundImageURLOrCompanyLogoURLOrEmployeeID_1.PickVSPaymentDesignCreateParamsExcludeKeyofVSPaymentDesignCreateParamsBackgroundImageURLOrCompanyLogoURLOrEmployeeID,
    "PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId": pickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId_1.PickVSPaymentDesignUpdateParamsExcludeKeyofVSPaymentDesignUpdateParamsId,
    "PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt": pickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt_1.PickVSStaticVoucherExcludeKeyofVSStaticVoucherRedeemedAtOrRefundedAtOrLastViewedAt,
    "PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail": pickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail_1.PickWTEmployeeCreateExcludeKeyofWTEmployeeCreateEmail,
    "PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber": pickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber_1.PickWTMemberMemberIDOrFirstNameOrLastNameOrMembershipTierIDOrPointsAccruedOrMobileNumber,
    "PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber": pickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber_1.PickWTMerchantCreditMemberIDOrCreditAmountOrMobileNumber,
    "PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID": pickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID_1.PickWTMerchantURLUpdateExcludeKeyofWTMerchantURLUpdateUrlID,
    "PickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId": pickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId_1.PickWTNewsArticleUpdateParamsExcludeKeyofWTNewsArticleUpdateParamsId,
    "PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID": pickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID_1.PickWTPaymentObjectBroadcastExcludeKeyofWTPaymentObjectBroadcastListTypeOrListID,
    "PickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime": pickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime_1.PickWTStaticVoucherCampaignCreateParamsExcludeKeyofWTStaticVoucherCampaignCreateParamsStartDateTimeOrExpirationDateTime,
    "PickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID": pickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID_1.PickWTStaticVoucherCreateParamsExcludeKeyofWTStaticVoucherCreateParamsCampaignID,
    "Plan": plan_1.Plan,
    "PresignedPost": presignedPost_1.PresignedPost,
    "PresignedPostFields": presignedPostFields_1.PresignedPostFields,
    "Product": product_1.Product,
    "PromoCode": promoCode_1.PromoCode,
    "ReachPerformanceStats": reachPerformanceStats_1.ReachPerformanceStats,
    "Request": request_1.Request,
    "Response": response_1.Response,
    "Role": role_1.Role,
    "RoleAuditLog": roleAuditLog_1.RoleAuditLog,
    "SSImportedListRecipientCreateParams": sSImportedListRecipientCreateParams_1.SSImportedListRecipientCreateParams,
    "SSOptInSource": sSOptInSource_1.SSOptInSource,
    "SimpleSMSBroadcast": simpleSMSBroadcast_1.SimpleSMSBroadcast,
    "StaticVoucher": staticVoucher_1.StaticVoucher,
    "StaticVoucherCampaign": staticVoucherCampaign_1.StaticVoucherCampaign,
    "StaticVoucherCampaignBroadcast": staticVoucherCampaignBroadcast_1.StaticVoucherCampaignBroadcast,
    "StaticVoucherCampaignGroup": staticVoucherCampaignGroup_1.StaticVoucherCampaignGroup,
    "StaticVoucherCampaignUpdate": staticVoucherCampaignUpdate_1.StaticVoucherCampaignUpdate,
    "Status": status_1.Status,
    "SubscriptionFeature": subscriptionFeature_1.SubscriptionFeature,
    "SubscriptionPlan": subscriptionPlan_1.SubscriptionPlan,
    "SubscriptionProduct": subscriptionProduct_1.SubscriptionProduct,
    "Tcpa": tcpa_1.Tcpa,
    "UpdateStaticVoucherCampaignWithVoucher": updateStaticVoucherCampaignWithVoucher_1.UpdateStaticVoucherCampaignWithVoucher,
    "VSCampaignGeneratedMessage": vSCampaignGeneratedMessage_1.VSCampaignGeneratedMessage,
    "VSCampaignGeneratedMessagePagination": vSCampaignGeneratedMessagePagination_1.VSCampaignGeneratedMessagePagination,
    "VSDynamicVoucherStatus": vSDynamicVoucherStatus_1.VSDynamicVoucherStatus,
    "WTAdvertisementCredit": wTAdvertisementCredit_1.WTAdvertisementCredit,
    "WTAdvertisementCreditCreateParams": wTAdvertisementCreditCreateParams_1.WTAdvertisementCreditCreateParams,
    "WTAdvertisementCreditScan": wTAdvertisementCreditScan_1.WTAdvertisementCreditScan,
    "WTAdvertisementCreditUpdateParams": wTAdvertisementCreditUpdateParams_1.WTAdvertisementCreditUpdateParams,
    "WTAuthenticationCheckSessionTokenStatusResponse": wTAuthenticationCheckSessionTokenStatusResponse_1.WTAuthenticationCheckSessionTokenStatusResponse,
    "WTAuthenticationForgotPassword": wTAuthenticationForgotPassword_1.WTAuthenticationForgotPassword,
    "WTAuthenticationLoginRequest": wTAuthenticationLoginRequest_1.WTAuthenticationLoginRequest,
    "WTAuthenticationLoginResponse": wTAuthenticationLoginResponse_1.WTAuthenticationLoginResponse,
    "WTAuthenticationRegister": wTAuthenticationRegister_1.WTAuthenticationRegister,
    "WTAuthenticationRequestResetPassword": wTAuthenticationRequestResetPassword_1.WTAuthenticationRequestResetPassword,
    "WTAuthenticationResetPassword": wTAuthenticationResetPassword_1.WTAuthenticationResetPassword,
    "WTAuthenticationSSOLoginForDiscourse": wTAuthenticationSSOLoginForDiscourse_1.WTAuthenticationSSOLoginForDiscourse,
    "WTBillingChangePlan": wTBillingChangePlan_1.WTBillingChangePlan,
    "WTBillingSavePaymentMethod": wTBillingSavePaymentMethod_1.WTBillingSavePaymentMethod,
    "WTBillingVerifyPaymentMethodResponse": wTBillingVerifyPaymentMethodResponse_1.WTBillingVerifyPaymentMethodResponse,
    "WTCountResult": wTCountResult_1.WTCountResult,
    "WTCustomerSearchByMemberID": wTCustomerSearchByMemberID_1.WTCustomerSearchByMemberID,
    "WTCustomerSearchByPhoneNumber": wTCustomerSearchByPhoneNumber_1.WTCustomerSearchByPhoneNumber,
    "WTDynamicVoucher": wTDynamicVoucher_1.WTDynamicVoucher,
    "WTDynamicVoucherCreateParams": wTDynamicVoucherCreateParams_1.WTDynamicVoucherCreateParams,
    "WTDynamicVoucherRedemption": wTDynamicVoucherRedemption_1.WTDynamicVoucherRedemption,
    "WTDynamicVoucherSummary": wTDynamicVoucherSummary_1.WTDynamicVoucherSummary,
    "WTDynamicVoucherUpdateParams": wTDynamicVoucherUpdateParams_1.WTDynamicVoucherUpdateParams,
    "WTEmployee": wTEmployee_1.WTEmployee,
    "WTEmployeeAPIKey": wTEmployeeAPIKey_1.WTEmployeeAPIKey,
    "WTEmployeeAPIKeyCreateParams": wTEmployeeAPIKeyCreateParams_1.WTEmployeeAPIKeyCreateParams,
    "WTEmployeeAPIKeyUpdateParams": wTEmployeeAPIKeyUpdateParams_1.WTEmployeeAPIKeyUpdateParams,
    "WTEmployeeCreate": wTEmployeeCreate_1.WTEmployeeCreate,
    "WTEmployeeCreateAlert": wTEmployeeCreateAlert_1.WTEmployeeCreateAlert,
    "WTEmployeeCreateDocument": wTEmployeeCreateDocument_1.WTEmployeeCreateDocument,
    "WTEmployeeCreateMediaFile": wTEmployeeCreateMediaFile_1.WTEmployeeCreateMediaFile,
    "WTEmployeeCreateStaticVoucherCampaignGroup": wTEmployeeCreateStaticVoucherCampaignGroup_1.WTEmployeeCreateStaticVoucherCampaignGroup,
    "WTEmployeeFileCreate": wTEmployeeFileCreate_1.WTEmployeeFileCreate,
    "WTEmployeeImportRecords": wTEmployeeImportRecords_1.WTEmployeeImportRecords,
    "WTEmployeeNotification": wTEmployeeNotification_1.WTEmployeeNotification,
    "WTEmployeePeerRoles": wTEmployeePeerRoles_1.WTEmployeePeerRoles,
    "WTEmployeeS3FilePresign": wTEmployeeS3FilePresign_1.WTEmployeeS3FilePresign,
    "WTEmployeeScheduleSMSCampaignBroadcast": wTEmployeeScheduleSMSCampaignBroadcast_1.WTEmployeeScheduleSMSCampaignBroadcast,
    "WTEmployeeScheduleSimpleSMS": wTEmployeeScheduleSimpleSMS_1.WTEmployeeScheduleSimpleSMS,
    "WTEmployeeScheduleSimpleSMSToRecipient": wTEmployeeScheduleSimpleSMSToRecipient_1.WTEmployeeScheduleSimpleSMSToRecipient,
    "WTEmployeeSendHelpDeskResponse": wTEmployeeSendHelpDeskResponse_1.WTEmployeeSendHelpDeskResponse,
    "WTEmployeeUpdate": wTEmployeeUpdate_1.WTEmployeeUpdate,
    "WTEmployeeUpdateRecords": wTEmployeeUpdateRecords_1.WTEmployeeUpdateRecords,
    "WTFetchWalletPaymentObjectWithToken": wTFetchWalletPaymentObjectWithToken_1.WTFetchWalletPaymentObjectWithToken,
    "WTImageGridCreateParams": wTImageGridCreateParams_1.WTImageGridCreateParams,
    "WTImageGridUpdateParams": wTImageGridUpdateParams_1.WTImageGridUpdateParams,
    "WTImportedList": wTImportedList_1.WTImportedList,
    "WTInfoGenesisLookupRequestErrors": wTInfoGenesisLookupRequestErrors_1.WTInfoGenesisLookupRequestErrors,
    "WTInfoGenesisRecordFilterParameters": wTInfoGenesisRecordFilterParameters_1.WTInfoGenesisRecordFilterParameters,
    "WTInfoGenesisRoutingIDs": wTInfoGenesisRoutingIDs_1.WTInfoGenesisRoutingIDs,
    "WTInfoGenesisUniquePostingIDs": wTInfoGenesisUniquePostingIDs_1.WTInfoGenesisUniquePostingIDs,
    "WTLinkBookCreateParams": wTLinkBookCreateParams_1.WTLinkBookCreateParams,
    "WTLinkBookSectionCreateParams": wTLinkBookSectionCreateParams_1.WTLinkBookSectionCreateParams,
    "WTLinkBookSectionUpdateParams": wTLinkBookSectionUpdateParams_1.WTLinkBookSectionUpdateParams,
    "WTLinkBookUpdateParams": wTLinkBookUpdateParams_1.WTLinkBookUpdateParams,
    "WTMember": wTMember_1.WTMember,
    "WTMemberCreationParams": wTMemberCreationParams_1.WTMemberCreationParams,
    "WTMembershipTier": wTMembershipTier_1.WTMembershipTier,
    "WTMembershipTierCreationParams": wTMembershipTierCreationParams_1.WTMembershipTierCreationParams,
    "WTMembershipTierUpdateParams": wTMembershipTierUpdateParams_1.WTMembershipTierUpdateParams,
    "WTMembershipTierWithMemberCount": wTMembershipTierWithMemberCount_1.WTMembershipTierWithMemberCount,
    "WTMerchantCredit": wTMerchantCredit_1.WTMerchantCredit,
    "WTMerchantCreditCreationParams": wTMerchantCreditCreationParams_1.WTMerchantCreditCreationParams,
    "WTMerchantURLCreate": wTMerchantURLCreate_1.WTMerchantURLCreate,
    "WTMerchantURLUpdate": wTMerchantURLUpdate_1.WTMerchantURLUpdate,
    "WTMerchantUpdate": wTMerchantUpdate_1.WTMerchantUpdate,
    "WTMerchantUpdateBillingContact": wTMerchantUpdateBillingContact_1.WTMerchantUpdateBillingContact,
    "WTMerchantUpdatePOSIntegration": wTMerchantUpdatePOSIntegration_1.WTMerchantUpdatePOSIntegration,
    "WTNewsArticleCreateParams": wTNewsArticleCreateParams_1.WTNewsArticleCreateParams,
    "WTNewsArticleUpdateParams": wTNewsArticleUpdateParams_1.WTNewsArticleUpdateParams,
    "WTOptInList": wTOptInList_1.WTOptInList,
    "WTOptInListCreationParams": wTOptInListCreationParams_1.WTOptInListCreationParams,
    "WTPaymentDesign": wTPaymentDesign_1.WTPaymentDesign,
    "WTPaymentDesignCreateParams": wTPaymentDesignCreateParams_1.WTPaymentDesignCreateParams,
    "WTPaymentDesignUpdateParams": wTPaymentDesignUpdateParams_1.WTPaymentDesignUpdateParams,
    "WTPerformanceCreateParams": wTPerformanceCreateParams_1.WTPerformanceCreateParams,
    "WTPerformanceUpdateParams": wTPerformanceUpdateParams_1.WTPerformanceUpdateParams,
    "WTPosMachine": wTPosMachine_1.WTPosMachine,
    "WTPosMachineCreateParams": wTPosMachineCreateParams_1.WTPosMachineCreateParams,
    "WTPosMachineUpdateParams": wTPosMachineUpdateParams_1.WTPosMachineUpdateParams,
    "WTPromoCodeCreateParams": wTPromoCodeCreateParams_1.WTPromoCodeCreateParams,
    "WTPromoCodeUpdateParams": wTPromoCodeUpdateParams_1.WTPromoCodeUpdateParams,
    "WTRole": wTRole_1.WTRole,
    "WTSMSAcquirePhoneNumber": wTSMSAcquirePhoneNumber_1.WTSMSAcquirePhoneNumber,
    "WTSMSCreateAgreement": wTSMSCreateAgreement_1.WTSMSCreateAgreement,
    "WTSMSImportOptInListSubscribers": wTSMSImportOptInListSubscribers_1.WTSMSImportOptInListSubscribers,
    "WTSMSImportedListCreate": wTSMSImportedListCreate_1.WTSMSImportedListCreate,
    "WTSMSLimits": wTSMSLimits_1.WTSMSLimits,
    "WTSMSOptInListSourceCreate": wTSMSOptInListSourceCreate_1.WTSMSOptInListSourceCreate,
    "WTSMSUpdatePhoneNumberConfig": wTSMSUpdatePhoneNumberConfig_1.WTSMSUpdatePhoneNumberConfig,
    "WTSettingsSetPassword": wTSettingsSetPassword_1.WTSettingsSetPassword,
    "WTStaticVoucher": wTStaticVoucher_1.WTStaticVoucher,
    "WTStaticVoucherCampaign": wTStaticVoucherCampaign_1.WTStaticVoucherCampaign,
    "WTStaticVoucherCampaignPreviewMessages": wTStaticVoucherCampaignPreviewMessages_1.WTStaticVoucherCampaignPreviewMessages,
    "WTStaticVoucherCampaignPreviewMessagesByPage": wTStaticVoucherCampaignPreviewMessagesByPage_1.WTStaticVoucherCampaignPreviewMessagesByPage,
    "WTStaticVoucherCreateParams": wTStaticVoucherCreateParams_1.WTStaticVoucherCreateParams,
    "WTStaticVoucherUpdateParams": wTStaticVoucherUpdateParams_1.WTStaticVoucherUpdateParams,
    "WTSystemApprovePhoneNumber": wTSystemApprovePhoneNumber_1.WTSystemApprovePhoneNumber,
    "WTSystemRoleCreate": wTSystemRoleCreate_1.WTSystemRoleCreate,
    "WTTCPAOpt": wTTCPAOpt_1.WTTCPAOpt,
    "WTTwilioRequestAuthyCode": wTTwilioRequestAuthyCode_1.WTTwilioRequestAuthyCode,
    "WTTwilioVerifyAuthyCode": wTTwilioVerifyAuthyCode_1.WTTwilioVerifyAuthyCode,
    "WTWalletConfigurationSaveWalletRecord": wTWalletConfigurationSaveWalletRecord_1.WTWalletConfigurationSaveWalletRecord,
    "WTWalletItemRedemption": wTWalletItemRedemption_1.WTWalletItemRedemption,
    "WTWalletObjectPrefixCounts": wTWalletObjectPrefixCounts_1.WTWalletObjectPrefixCounts,
    "WTWalletPageView": wTWalletPageView_1.WTWalletPageView,
    "WTWalletPageViewCount": wTWalletPageViewCount_1.WTWalletPageViewCount,
    "WTWalletPageViewGeoPoint": wTWalletPageViewGeoPoint_1.WTWalletPageViewGeoPoint,
    "WalletConfiguration": walletConfiguration_1.WalletConfiguration,
    "WalletPageView": walletPageView_1.WalletPageView,
    "Webpage": webpage_1.Webpage,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map