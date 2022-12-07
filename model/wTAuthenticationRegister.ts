/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.527
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTAuthenticationRegister {
    'firstName': string;
    'lastName': string;
    'email': string;
    'password': string;
    'hearAboutUs': string;
    'hearAboutUsDetails': string;
    'companyName': string;
    'merchantType': string;
    'streetAddress1': string;
    'streetAddress2': string;
    'city': string;
    'state': string;
    'zip': string;
    'country': string;
    'phoneNumber': string;
    'ein'?: string;

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
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "hearAboutUs",
            "baseName": "hearAboutUs",
            "type": "string"
        },
        {
            "name": "hearAboutUsDetails",
            "baseName": "hearAboutUsDetails",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "companyName",
            "type": "string"
        },
        {
            "name": "merchantType",
            "baseName": "merchantType",
            "type": "string"
        },
        {
            "name": "streetAddress1",
            "baseName": "streetAddress1",
            "type": "string"
        },
        {
            "name": "streetAddress2",
            "baseName": "streetAddress2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "ein",
            "baseName": "ein",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTAuthenticationRegister.attributeTypeMap;
    }
}

