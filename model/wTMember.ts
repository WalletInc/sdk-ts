/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.533
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTMember {
    'id': string;
    'merchantID': string;
    /**
    * The timestamp of when this resource was created
    */
    'createdAt': Date;
    /**
    * The timestamp of when this resource was updated
    */
    'updatedAt': Date;
    /**
    * Denotes if this resource is active
    */
    'isActive': boolean;
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
    * Member ID as represented by the merchant
    */
    'memberID': string;
    'membershipTierRedeemableID': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "memberID",
            "baseName": "memberID",
            "type": "string"
        },
        {
            "name": "membershipTierRedeemableID",
            "baseName": "membershipTierRedeemableID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTMember.attributeTypeMap;
    }
}
