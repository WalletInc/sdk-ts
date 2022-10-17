/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.514
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTOptInListCreationParams {
    'isActive': boolean;
    'listName': string;
    'phoneNumberID': string;
    'estimatedMessagesPerMonth': number;
    'optInKeyword': string;
    'optOutKeyword': string;
    'optInConfirmedResponse': string;
    'optOutConfirmedResponse': string;
    'optInConfirmedCustomerReceives': string;
    'optOutConfirmedCustomerReceives': string;
    'optInConfirmedMediaURLs': Array<string>;
    'optOutConfirmedMediaURLs': Array<string>;
    'isOver21Required': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        },
        {
            "name": "listName",
            "baseName": "listName",
            "type": "string"
        },
        {
            "name": "phoneNumberID",
            "baseName": "phoneNumberID",
            "type": "string"
        },
        {
            "name": "estimatedMessagesPerMonth",
            "baseName": "estimatedMessagesPerMonth",
            "type": "number"
        },
        {
            "name": "optInKeyword",
            "baseName": "optInKeyword",
            "type": "string"
        },
        {
            "name": "optOutKeyword",
            "baseName": "optOutKeyword",
            "type": "string"
        },
        {
            "name": "optInConfirmedResponse",
            "baseName": "optInConfirmedResponse",
            "type": "string"
        },
        {
            "name": "optOutConfirmedResponse",
            "baseName": "optOutConfirmedResponse",
            "type": "string"
        },
        {
            "name": "optInConfirmedCustomerReceives",
            "baseName": "optInConfirmedCustomerReceives",
            "type": "string"
        },
        {
            "name": "optOutConfirmedCustomerReceives",
            "baseName": "optOutConfirmedCustomerReceives",
            "type": "string"
        },
        {
            "name": "optInConfirmedMediaURLs",
            "baseName": "optInConfirmedMediaURLs",
            "type": "Array<string>"
        },
        {
            "name": "optOutConfirmedMediaURLs",
            "baseName": "optOutConfirmedMediaURLs",
            "type": "Array<string>"
        },
        {
            "name": "isOver21Required",
            "baseName": "isOver21Required",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return WTOptInListCreationParams.attributeTypeMap;
    }
}

