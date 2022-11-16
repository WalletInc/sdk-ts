/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.523
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PhoneNumber {
    'messageFooter': string;
    'helpResponse': string;
    'stopResponse': string;
    'companyName': string;
    'privacyPolicyURL': string;
    'termsOfServiceURL': string;
    'helpDeskKeyword': string;
    'helpDeskQueueResponse': string;
    'isConnectedToWatson': boolean;
    'watsonConversationWorkplaceID': string;
    'watsonUsername': string;
    'watsonPassword': string;
    'mobileNumber': string;
    'isShortCode': boolean;
    'twilioSID': string;
    'twilioAccountSID': string;
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'isApproved': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messageFooter",
            "baseName": "messageFooter",
            "type": "string"
        },
        {
            "name": "helpResponse",
            "baseName": "helpResponse",
            "type": "string"
        },
        {
            "name": "stopResponse",
            "baseName": "stopResponse",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "privacyPolicyURL",
            "baseName": "privacyPolicyURL",
            "type": "string"
        },
        {
            "name": "termsOfServiceURL",
            "baseName": "termsOfServiceURL",
            "type": "string"
        },
        {
            "name": "helpDeskKeyword",
            "baseName": "helpDeskKeyword",
            "type": "string"
        },
        {
            "name": "helpDeskQueueResponse",
            "baseName": "helpDeskQueueResponse",
            "type": "string"
        },
        {
            "name": "isConnectedToWatson",
            "baseName": "isConnectedToWatson",
            "type": "boolean"
        },
        {
            "name": "watsonConversationWorkplaceID",
            "baseName": "watsonConversationWorkplaceID",
            "type": "string"
        },
        {
            "name": "watsonUsername",
            "baseName": "watsonUsername",
            "type": "string"
        },
        {
            "name": "watsonPassword",
            "baseName": "watsonPassword",
            "type": "string"
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string"
        },
        {
            "name": "isShortCode",
            "baseName": "isShortCode",
            "type": "boolean"
        },
        {
            "name": "twilioSID",
            "baseName": "twilioSID",
            "type": "string"
        },
        {
            "name": "twilioAccountSID",
            "baseName": "twilioAccountSID",
            "type": "string"
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
        },
        {
            "name": "isApproved",
            "baseName": "isApproved",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumber.attributeTypeMap;
    }
}

