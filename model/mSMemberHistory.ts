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

export class MSMemberHistory {
    /**
    * Member ID as represented by the merchant
    */
    'memberIdentifier': string;
    /**
    * An optional first name of the member
    */
    'firstName'?: string;
    /**
    * An optional last name of the member
    */
    'lastName'?: string;
    'membershipTierID': string;
    'mobileNumber': string;
    /**
    * The number of points that the member has accrued
    */
    'pointsAccrued': number;
    /**
    * The UUID of this record
    */
    'id': string;
    'memberID': string;
    'merchantID': string;
    /**
    * The timestamp of when this resource was created
    */
    'createdAt': Date;
    /**
    * Denotes if this resource is active
    */
    'isActive': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "memberIdentifier",
            "baseName": "memberIdentifier",
            "type": "string"
        },
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
            "name": "membershipTierID",
            "baseName": "membershipTierID",
            "type": "string"
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string"
        },
        {
            "name": "pointsAccrued",
            "baseName": "pointsAccrued",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "memberID",
            "baseName": "memberID",
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
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return MSMemberHistory.attributeTypeMap;
    }
}

