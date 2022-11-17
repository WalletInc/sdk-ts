/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.524
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* From T, pick a set of properties whose keys are in the union K
*/
export class PickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId {
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
        }    ];

    static getAttributeTypeMap() {
        return PickSSMobileNumberUpdateParamsExcludeKeyofSSMobileNumberUpdateParamsId.attributeTypeMap;
    }
}

