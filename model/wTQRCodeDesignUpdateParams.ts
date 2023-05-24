/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.535
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class WTQRCodeDesignUpdateParams {
    'name': string;
    'size': number;
    'margin': number;
    'cornerRadius': number;
    'colorDarkHex': string;
    'colorLightHex': string;
    'backgroundDimmingHex': string;
    'logoImageURL': string;
    'backgroundImageURL': string;
    'animatedGifBackgroundURL': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "margin",
            "baseName": "margin",
            "type": "number"
        },
        {
            "name": "cornerRadius",
            "baseName": "cornerRadius",
            "type": "number"
        },
        {
            "name": "colorDarkHex",
            "baseName": "colorDarkHex",
            "type": "string"
        },
        {
            "name": "colorLightHex",
            "baseName": "colorLightHex",
            "type": "string"
        },
        {
            "name": "backgroundDimmingHex",
            "baseName": "backgroundDimmingHex",
            "type": "string"
        },
        {
            "name": "logoImageURL",
            "baseName": "logoImageURL",
            "type": "string"
        },
        {
            "name": "backgroundImageURL",
            "baseName": "backgroundImageURL",
            "type": "string"
        },
        {
            "name": "animatedGifBackgroundURL",
            "baseName": "animatedGifBackgroundURL",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WTQRCodeDesignUpdateParams.attributeTypeMap;
    }
}

