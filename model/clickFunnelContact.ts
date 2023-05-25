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
import { ClickFunnelContactProfile } from './clickFunnelContactProfile';

export class ClickFunnelContact {
    'id': number;
    'pageId': number;
    'firstName': string;
    'lastName': string;
    'name': string;
    'address': string;
    'city': string;
    'country': string;
    'state'?: string;
    'zip': string;
    'email': string;
    'phone': string;
    'webinarAt'?: any | null;
    'webinarLastTime'?: any | null;
    'webinarExt': string;
    'createdAt': Date;
    'updatedAt': Date;
    'ip': string;
    'funnelId': number;
    'funnelStepId': number;
    'unsubscribedAt'?: any | null;
    'cfUvid': string;
    'cartAffiliateId': string;
    'shippingAddress': string;
    'shippingCity': string;
    'shippingCountry': string;
    'shippingState': string;
    'shippingZip': string;
    'vatNumber': string;
    'affiliateId'?: any | null;
    'affSub': string;
    'affSub2': string;
    'cfAffiliateId'?: any | null;
    'contactProfile'?: ClickFunnelContactProfile;
    'timeZone'?: string | null;
    'companyName': string;
    'companyIndustry': string;
    'additionalInfo'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "pageId",
            "baseName": "page_id",
            "type": "number"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
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
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "webinarAt",
            "baseName": "webinar_at",
            "type": "any"
        },
        {
            "name": "webinarLastTime",
            "baseName": "webinar_last_time",
            "type": "any"
        },
        {
            "name": "webinarExt",
            "baseName": "webinar_ext",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string"
        },
        {
            "name": "funnelId",
            "baseName": "funnel_id",
            "type": "number"
        },
        {
            "name": "funnelStepId",
            "baseName": "funnel_step_id",
            "type": "number"
        },
        {
            "name": "unsubscribedAt",
            "baseName": "unsubscribed_at",
            "type": "any"
        },
        {
            "name": "cfUvid",
            "baseName": "cf_uvid",
            "type": "string"
        },
        {
            "name": "cartAffiliateId",
            "baseName": "cart_affiliate_id",
            "type": "string"
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "string"
        },
        {
            "name": "shippingCity",
            "baseName": "shipping_city",
            "type": "string"
        },
        {
            "name": "shippingCountry",
            "baseName": "shipping_country",
            "type": "string"
        },
        {
            "name": "shippingState",
            "baseName": "shipping_state",
            "type": "string"
        },
        {
            "name": "shippingZip",
            "baseName": "shipping_zip",
            "type": "string"
        },
        {
            "name": "vatNumber",
            "baseName": "vat_number",
            "type": "string"
        },
        {
            "name": "affiliateId",
            "baseName": "affiliate_id",
            "type": "any"
        },
        {
            "name": "affSub",
            "baseName": "aff_sub",
            "type": "string"
        },
        {
            "name": "affSub2",
            "baseName": "aff_sub2",
            "type": "string"
        },
        {
            "name": "cfAffiliateId",
            "baseName": "cf_affiliate_id",
            "type": "any"
        },
        {
            "name": "contactProfile",
            "baseName": "contact_profile",
            "type": "ClickFunnelContactProfile"
        },
        {
            "name": "timeZone",
            "baseName": "time_zone",
            "type": "string"
        },
        {
            "name": "companyName",
            "baseName": "company_name",
            "type": "string"
        },
        {
            "name": "companyIndustry",
            "baseName": "company_industry",
            "type": "string"
        },
        {
            "name": "additionalInfo",
            "baseName": "additional_info",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return ClickFunnelContact.attributeTypeMap;
    }
}
