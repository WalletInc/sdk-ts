"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTEarlyOptInImportResult = void 0;
class WTEarlyOptInImportResult extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTEarlyOptInImportResult.attributeTypeMap);
    }
}
exports.WTEarlyOptInImportResult = WTEarlyOptInImportResult;
WTEarlyOptInImportResult.discriminator = undefined;
WTEarlyOptInImportResult.attributeTypeMap = [
    {
        "name": "isDryRun",
        "baseName": "isDryRun",
        "type": "any"
    },
    {
        "name": "isRegistrationApproved",
        "baseName": "isRegistrationApproved",
        "type": "any"
    },
    {
        "name": "optInListID",
        "baseName": "optInListID",
        "type": "any"
    },
    {
        "name": "phoneNumberID",
        "baseName": "phoneNumberID",
        "type": "any"
    },
    {
        "name": "totalCount",
        "baseName": "totalCount",
        "type": "any"
    },
    {
        "name": "bringOverCount",
        "baseName": "bringOverCount",
        "type": "any"
    },
    {
        "name": "welcomeCount",
        "baseName": "welcomeCount",
        "type": "any"
    },
    {
        "name": "confirmationCount",
        "baseName": "confirmationCount",
        "type": "any"
    },
    {
        "name": "skippedCount",
        "baseName": "skippedCount",
        "type": "any"
    },
    {
        "name": "skipped",
        "baseName": "skipped",
        "type": "any"
    },
    {
        "name": "notEligibleCount",
        "baseName": "notEligibleCount",
        "type": "any"
    },
    {
        "name": "isOptOutChecked",
        "baseName": "isOptOutChecked",
        "type": "any"
    },
    {
        "name": "textsScheduledAt",
        "baseName": "textsScheduledAt",
        "type": "any"
    }
];
//# sourceMappingURL=wTEarlyOptInImportResult.js.map