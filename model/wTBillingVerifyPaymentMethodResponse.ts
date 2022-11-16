/**
 * wallet-api
 * API
 *
 * The version of the OpenAPI document: 2.1.523
 * Contact: development@wallet.inc
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SubscriptionPlan } from './subscriptionPlan';

export class WTBillingVerifyPaymentMethodResponse {
    'isPaymentMethodProvided': boolean;
    'subscription': SubscriptionPlan;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isPaymentMethodProvided",
            "baseName": "isPaymentMethodProvided",
            "type": "boolean"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "SubscriptionPlan"
        }    ];

    static getAttributeTypeMap() {
        return WTBillingVerifyPaymentMethodResponse.attributeTypeMap;
    }
}

