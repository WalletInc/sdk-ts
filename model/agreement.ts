/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.527
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Agreement {
    'employeeID': string;
    'isManualRead': boolean;
    'isPricingUnderstood': boolean;
    'isTwilioTermsRead': boolean;
    'isShortCodeUnderstood': boolean;
    'isShortCodeTimelineUnderstood': boolean;
    'isShortCodeTransferUnderstood': boolean;
    'isOptInOutUnderstood': boolean;
    'isPrivacyPolicyOnWebsite': boolean;
    'isCtiaShortCodeRead': boolean;
    'isTosOnWebsite': boolean;
    'isStandardsUnderstood': boolean;
    'isStopUnderstood': boolean;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "isManualRead",
            "baseName": "isManualRead",
            "type": "boolean"
        },
        {
            "name": "isPricingUnderstood",
            "baseName": "isPricingUnderstood",
            "type": "boolean"
        },
        {
            "name": "isTwilioTermsRead",
            "baseName": "isTwilioTermsRead",
            "type": "boolean"
        },
        {
            "name": "isShortCodeUnderstood",
            "baseName": "isShortCodeUnderstood",
            "type": "boolean"
        },
        {
            "name": "isShortCodeTimelineUnderstood",
            "baseName": "isShortCodeTimelineUnderstood",
            "type": "boolean"
        },
        {
            "name": "isShortCodeTransferUnderstood",
            "baseName": "isShortCodeTransferUnderstood",
            "type": "boolean"
        },
        {
            "name": "isOptInOutUnderstood",
            "baseName": "isOptInOutUnderstood",
            "type": "boolean"
        },
        {
            "name": "isPrivacyPolicyOnWebsite",
            "baseName": "isPrivacyPolicyOnWebsite",
            "type": "boolean"
        },
        {
            "name": "isCtiaShortCodeRead",
            "baseName": "isCtiaShortCodeRead",
            "type": "boolean"
        },
        {
            "name": "isTosOnWebsite",
            "baseName": "isTosOnWebsite",
            "type": "boolean"
        },
        {
            "name": "isStandardsUnderstood",
            "baseName": "isStandardsUnderstood",
            "type": "boolean"
        },
        {
            "name": "isStopUnderstood",
            "baseName": "isStopUnderstood",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Agreement.attributeTypeMap;
    }
}

