/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.535
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTSMSCreateAgreement {
    'isTwilioTermsRead': boolean;
    'isPrivacyPolicyOnWebsite': boolean;
    'isTosOnWebsite': boolean;
    'isStopUnderstood': boolean;
    'isManualRead': boolean;
    'isCtiaShortCodeRead': boolean;
    'isStandardsUnderstood': boolean;
    'isShortCodeUnderstood': boolean;
    'isOptInOutUnderstood': boolean;
    'isShortCodeTransferUnderstood': boolean;
    'isPricingUnderstood': boolean;
    'isShortCodeTimelineUnderstood': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isTwilioTermsRead",
            "baseName": "isTwilioTermsRead",
            "type": "boolean"
        },
        {
            "name": "isPrivacyPolicyOnWebsite",
            "baseName": "isPrivacyPolicyOnWebsite",
            "type": "boolean"
        },
        {
            "name": "isTosOnWebsite",
            "baseName": "isTosOnWebsite",
            "type": "boolean"
        },
        {
            "name": "isStopUnderstood",
            "baseName": "isStopUnderstood",
            "type": "boolean"
        },
        {
            "name": "isManualRead",
            "baseName": "isManualRead",
            "type": "boolean"
        },
        {
            "name": "isCtiaShortCodeRead",
            "baseName": "isCtiaShortCodeRead",
            "type": "boolean"
        },
        {
            "name": "isStandardsUnderstood",
            "baseName": "isStandardsUnderstood",
            "type": "boolean"
        },
        {
            "name": "isShortCodeUnderstood",
            "baseName": "isShortCodeUnderstood",
            "type": "boolean"
        },
        {
            "name": "isOptInOutUnderstood",
            "baseName": "isOptInOutUnderstood",
            "type": "boolean"
        },
        {
            "name": "isShortCodeTransferUnderstood",
            "baseName": "isShortCodeTransferUnderstood",
            "type": "boolean"
        },
        {
            "name": "isPricingUnderstood",
            "baseName": "isPricingUnderstood",
            "type": "boolean"
        },
        {
            "name": "isShortCodeTimelineUnderstood",
            "baseName": "isShortCodeTimelineUnderstood",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return WTSMSCreateAgreement.attributeTypeMap;
    }
}

