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

export class InboundSMS {
    'id': string | null;
    'automatedReply': string;
    'automatedReplyAdditionalInfo': string;
    'smsSid': string;
    'smsMessageSid': string;
    'smsStatus': string;
    'messagingServiceSid'?: string;
    'accountSid': string;
    'messageSid': string;
    'body': string;
    'numSegments': number;
    'to': string;
    'toCity': string;
    'toState': string;
    'toZip': string;
    'toCountry': string;
    'from': string;
    'fromCity': string;
    'fromState': string;
    'fromZip': string;
    'fromCountry': string;
    'mediaURLs'?: Array<string>;
    'watsonIntent'?: string;
    'watsonIntents'?: string;
    'watsonContext'?: string;
    'watsonContexts'?: string;
    'numMedia': number;
    'apiVersion': string;
    'merchantID': string;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'bodyLowercase': string;
    'fromLocalized': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "automatedReply",
            "baseName": "automatedReply",
            "type": "string"
        },
        {
            "name": "automatedReplyAdditionalInfo",
            "baseName": "automatedReplyAdditionalInfo",
            "type": "string"
        },
        {
            "name": "smsSid",
            "baseName": "smsSid",
            "type": "string"
        },
        {
            "name": "smsMessageSid",
            "baseName": "smsMessageSid",
            "type": "string"
        },
        {
            "name": "smsStatus",
            "baseName": "smsStatus",
            "type": "string"
        },
        {
            "name": "messagingServiceSid",
            "baseName": "messagingServiceSid",
            "type": "string"
        },
        {
            "name": "accountSid",
            "baseName": "accountSid",
            "type": "string"
        },
        {
            "name": "messageSid",
            "baseName": "messageSid",
            "type": "string"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "numSegments",
            "baseName": "numSegments",
            "type": "number"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string"
        },
        {
            "name": "toCity",
            "baseName": "toCity",
            "type": "string"
        },
        {
            "name": "toState",
            "baseName": "toState",
            "type": "string"
        },
        {
            "name": "toZip",
            "baseName": "toZip",
            "type": "string"
        },
        {
            "name": "toCountry",
            "baseName": "toCountry",
            "type": "string"
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string"
        },
        {
            "name": "fromCity",
            "baseName": "fromCity",
            "type": "string"
        },
        {
            "name": "fromState",
            "baseName": "fromState",
            "type": "string"
        },
        {
            "name": "fromZip",
            "baseName": "fromZip",
            "type": "string"
        },
        {
            "name": "fromCountry",
            "baseName": "fromCountry",
            "type": "string"
        },
        {
            "name": "mediaURLs",
            "baseName": "mediaURLs",
            "type": "Array<string>"
        },
        {
            "name": "watsonIntent",
            "baseName": "watsonIntent",
            "type": "string"
        },
        {
            "name": "watsonIntents",
            "baseName": "watsonIntents",
            "type": "string"
        },
        {
            "name": "watsonContext",
            "baseName": "watsonContext",
            "type": "string"
        },
        {
            "name": "watsonContexts",
            "baseName": "watsonContexts",
            "type": "string"
        },
        {
            "name": "numMedia",
            "baseName": "numMedia",
            "type": "number"
        },
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
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
            "name": "bodyLowercase",
            "baseName": "bodyLowercase",
            "type": "string"
        },
        {
            "name": "fromLocalized",
            "baseName": "fromLocalized",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InboundSMS.attributeTypeMap;
    }
}

