"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
class Request {
    static getAttributeTypeMap() {
        return Request.attributeTypeMap;
    }
}
exports.Request = Request;
Request.discriminator = undefined;
Request.attributeTypeMap = [
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
        "name": "authAmount",
        "baseName": "authAmount",
        "type": "number"
    },
    {
        "name": "serverEmpID",
        "baseName": "serverEmpID",
        "type": "string"
    },
    {
        "name": "moduleInvoked",
        "baseName": "moduleInvoked",
        "type": "any"
    },
    {
        "name": "cashierEmpID",
        "baseName": "cashierEmpID",
        "type": "string"
    },
    {
        "name": "routingID",
        "baseName": "routingID",
        "type": "string"
    },
    {
        "name": "authAccountNum",
        "baseName": "authAccountNum",
        "type": "number"
    },
    {
        "name": "moreRecordsCount",
        "baseName": "moreRecordsCount",
        "type": "number"
    },
    {
        "name": "paymentMethodID",
        "baseName": "paymentMethodID",
        "type": "string"
    },
    {
        "name": "tagData",
        "baseName": "tagData",
        "type": "any"
    },
    {
        "name": "totalAuthAmount",
        "baseName": "totalAuthAmount",
        "type": "number"
    },
    {
        "name": "refundFlag",
        "baseName": "refundFlag",
        "type": "any"
    },
    {
        "name": "closeTime",
        "baseName": "closeTime",
        "type": "Date"
    },
    {
        "name": "clientID",
        "baseName": "clientID",
        "type": "string"
    },
    {
        "name": "changeAmount",
        "baseName": "changeAmount",
        "type": "number"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "trainingModeFlag",
        "baseName": "trainingModeFlag",
        "type": "any"
    },
    {
        "name": "sourcePropertyID",
        "baseName": "sourcePropertyID",
        "type": "string"
    },
    {
        "name": "associatedCheckNumber",
        "baseName": "associatedCheckNumber",
        "type": "string"
    },
    {
        "name": "postToPropertyID",
        "baseName": "postToPropertyID",
        "type": "string"
    },
    {
        "name": "uniquePostingID",
        "baseName": "uniquePostingID",
        "type": "string"
    },
    {
        "name": "expireDate",
        "baseName": "expireDate",
        "type": "Date"
    },
    {
        "name": "byNameFlag",
        "baseName": "byNameFlag",
        "type": "any"
    },
    {
        "name": "paymentSlipID",
        "baseName": "paymentSlipID",
        "type": "string"
    },
    {
        "name": "financialBinDetail",
        "baseName": "financialBinDetail",
        "type": "any"
    },
    {
        "name": "cvv2",
        "baseName": "cvv2",
        "type": "string"
    },
    {
        "name": "employeeGratTip",
        "baseName": "employeeGratTip",
        "type": "number"
    },
    {
        "name": "cardSwipeTrack1",
        "baseName": "cardSwipeTrack1",
        "type": "any"
    },
    {
        "name": "cardSwipeTrack2",
        "baseName": "cardSwipeTrack2",
        "type": "any"
    },
    {
        "name": "checkNumber",
        "baseName": "checkNumber",
        "type": "string"
    },
    {
        "name": "moreRecordsKey",
        "baseName": "moreRecordsKey",
        "type": "any"
    },
    {
        "name": "tipAmount",
        "baseName": "tipAmount",
        "type": "number"
    },
    {
        "name": "inputData",
        "baseName": "inputData",
        "type": "any"
    },
    {
        "name": "profitCenterID",
        "baseName": "profitCenterID",
        "type": "string"
    },
    {
        "name": "invoiceNumber",
        "baseName": "invoiceNumber",
        "type": "string"
    },
    {
        "name": "receiptTextImage",
        "baseName": "receiptTextImage",
        "type": "any"
    },
    {
        "name": "brokerageAmount",
        "baseName": "brokerageAmount",
        "type": "number"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "coverCount",
        "baseName": "coverCount",
        "type": "number"
    },
    {
        "name": "moreRecordsFlag",
        "baseName": "moreRecordsFlag",
        "type": "any"
    },
    {
        "name": "accountNum",
        "baseName": "accountNum",
        "type": "string"
    },
    {
        "name": "maxRecordCount",
        "baseName": "maxRecordCount",
        "type": "number"
    },
    {
        "name": "incrementalAuthAmount",
        "baseName": "incrementalAuthAmount",
        "type": "number"
    },
    {
        "name": "extraData",
        "baseName": "extraData",
        "type": "any"
    },
    {
        "name": "checkTypeID",
        "baseName": "checkTypeID",
        "type": "string"
    },
    {
        "name": "postingID",
        "baseName": "postingID",
        "type": "string"
    },
    {
        "name": "destinationPropertyID",
        "baseName": "destinationPropertyID",
        "type": "string"
    },
    {
        "name": "accountDetail",
        "baseName": "accountDetail",
        "type": "any"
    },
    {
        "name": "paymentAmount",
        "baseName": "paymentAmount",
        "type": "number"
    },
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "string"
    },
    {
        "name": "tndrAccountObject",
        "baseName": "tndrAccountObject",
        "type": "any"
    },
    {
        "name": "mealPeriodID",
        "baseName": "mealPeriodID",
        "type": "string"
    }
];
//# sourceMappingURL=request.js.map