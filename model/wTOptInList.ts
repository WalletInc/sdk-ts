/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.528
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTOptInList {
    'employeeID': string;
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
    'id': string | null;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
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
        }    ];

    static getAttributeTypeMap() {
        return WTOptInList.attributeTypeMap;
    }
}

