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

export class WTSMSUpdatePhoneNumberConfig {
    'companyName': string;
    'privacyPolicyURL'?: string;
    'termsOfServiceURL'?: string;
    'messageFooter': string;
    'stopResponse': string;
    'helpResponse': string;
    'helpDeskKeyword': string;
    'helpDeskQueueResponse': string;
    'isConnectedToWatson'?: boolean;
    'watsonUsername'?: string;
    'watsonPassword'?: string;
    'watsonConversationWorkplaceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "messageFooter",
            "baseName": "messageFooter",
            "type": "string"
        },
        {
            "name": "stopResponse",
            "baseName": "stopResponse",
            "type": "string"
        },
        {
            "name": "helpResponse",
            "baseName": "helpResponse",
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
            "name": "watsonConversationWorkplaceID",
            "baseName": "watsonConversationWorkplaceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTSMSUpdatePhoneNumberConfig.attributeTypeMap;
    }
}

