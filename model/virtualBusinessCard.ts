/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.600
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SaveTicketSettingsRequestPaymentDesignID } from './saveTicketSettingsRequestPaymentDesignID';

export class VirtualBusinessCard {
    'firstName': string;
    'lastName': string;
    'emailAddress': string;
    'designation': string;
    'phoneNumber': string;
    'introduction'?: string;
    'instagram'?: string;
    'facebook'?: string;
    'youTube'?: string;
    'twitter'?: string;
    'linkedIn'?: string;
    'whatsApp'?: string;
    'avatarURL'?: string;
    'id': SaveTicketSettingsRequestPaymentDesignID;
    'createdAt': Date;
    'updatedAt': Date;
    'isActive': boolean;
    'merchantID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "designation",
            "baseName": "designation",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "introduction",
            "baseName": "introduction",
            "type": "string"
        },
        {
            "name": "instagram",
            "baseName": "instagram",
            "type": "string"
        },
        {
            "name": "facebook",
            "baseName": "facebook",
            "type": "string"
        },
        {
            "name": "youTube",
            "baseName": "youTube",
            "type": "string"
        },
        {
            "name": "twitter",
            "baseName": "twitter",
            "type": "string"
        },
        {
            "name": "linkedIn",
            "baseName": "linkedIn",
            "type": "string"
        },
        {
            "name": "whatsApp",
            "baseName": "whatsApp",
            "type": "string"
        },
        {
            "name": "avatarURL",
            "baseName": "avatarURL",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "SaveTicketSettingsRequestPaymentDesignID"
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
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return VirtualBusinessCard.attributeTypeMap;
    }
}

