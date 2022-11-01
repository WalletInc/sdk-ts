/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.519
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class MSMemberRedemption {
    /**
    * The transaction ID at the POS
    */
    'transactionID': string;
    /**
    * The type of the transaction - either redemption or refund
    */
    'transactionType': string | null;
    /**
    * The number of points involved in this transaction
    */
    'points': number;
    /**
    * The ID of the register where the transaction occurred
    */
    'registerID'?: string | number | null;
    /**
    * The type of the terminal
    */
    'terminalType': string;
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
            "name": "transactionID",
            "baseName": "transactionID",
            "type": "string"
        },
        {
            "name": "transactionType",
            "baseName": "transactionType",
            "type": "string"
        },
        {
            "name": "points",
            "baseName": "points",
            "type": "number"
        },
        {
            "name": "registerID",
            "baseName": "registerID",
            "type": "string | number"
        },
        {
            "name": "terminalType",
            "baseName": "terminalType",
            "type": "string"
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
        return MSMemberRedemption.attributeTypeMap;
    }
}

