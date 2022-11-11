/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.521
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTEmployee {
    'firstName': string;
    'lastName': string;
    'email': string;
    'phoneNumber': string;
    'isPublicRepresentative': boolean;
    'walletSequenceNumber': number;
    'employeeID': string;
    'jobTitle': string;
    'department': string;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'username': string;
    'emailVerified': string;
    'profilePictureURL': string;
    'merchantID': string;
    'sessionToken': string;

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
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "isPublicRepresentative",
            "baseName": "isPublicRepresentative",
            "type": "boolean"
        },
        {
            "name": "walletSequenceNumber",
            "baseName": "walletSequenceNumber",
            "type": "number"
        },
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "string"
        },
        {
            "name": "department",
            "baseName": "department",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "emailVerified",
            "baseName": "emailVerified",
            "type": "string"
        },
        {
            "name": "profilePictureURL",
            "baseName": "profilePictureURL",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "merchantID",
            "type": "string"
        },
        {
            "name": "sessionToken",
            "baseName": "sessionToken",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTEmployee.attributeTypeMap;
    }
}

