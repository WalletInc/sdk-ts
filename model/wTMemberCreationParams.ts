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

export class WTMemberCreationParams {
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
        }    ];

    static getAttributeTypeMap() {
        return WTMemberCreationParams.attributeTypeMap;
    }
}

