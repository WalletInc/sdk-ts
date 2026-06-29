"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
class Request extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Request.attributeTypeMap);
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
        "type": "any"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "any"
    },
    {
        "name": "authAmount",
        "baseName": "authAmount",
        "type": "any"
    },
    {
        "name": "serverEmpID",
        "baseName": "serverEmpID",
        "type": "any"
    },
    {
        "name": "moduleInvoked",
        "baseName": "moduleInvoked",
        "type": "any"
    },
    {
        "name": "cashierEmpID",
        "baseName": "cashierEmpID",
        "type": "any"
    },
    {
        "name": "routingID",
        "baseName": "routingID",
        "type": "any"
    },
    {
        "name": "authAccountNum",
        "baseName": "authAccountNum",
        "type": "any"
    },
    {
        "name": "moreRecordsCount",
        "baseName": "moreRecordsCount",
        "type": "any"
    },
    {
        "name": "paymentMethodID",
        "baseName": "paymentMethodID",
        "type": "any"
    },
    {
        "name": "tagData",
        "baseName": "tagData",
        "type": "any"
    },
    {
        "name": "totalAuthAmount",
        "baseName": "totalAuthAmount",
        "type": "any"
    },
    {
        "name": "refundFlag",
        "baseName": "refundFlag",
        "type": "any"
    },
    {
        "name": "closeTime",
        "baseName": "closeTime",
        "type": "any"
    },
    {
        "name": "clientID",
        "baseName": "clientID",
        "type": "any"
    },
    {
        "name": "changeAmount",
        "baseName": "changeAmount",
        "type": "any"
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
        "type": "any"
    },
    {
        "name": "associatedCheckNumber",
        "baseName": "associatedCheckNumber",
        "type": "any"
    },
    {
        "name": "postToPropertyID",
        "baseName": "postToPropertyID",
        "type": "any"
    },
    {
        "name": "uniquePostingID",
        "baseName": "uniquePostingID",
        "type": "any"
    },
    {
        "name": "expireDate",
        "baseName": "expireDate",
        "type": "any"
    },
    {
        "name": "byNameFlag",
        "baseName": "byNameFlag",
        "type": "any"
    },
    {
        "name": "paymentSlipID",
        "baseName": "paymentSlipID",
        "type": "any"
    },
    {
        "name": "financialBinDetail",
        "baseName": "financialBinDetail",
        "type": "any"
    },
    {
        "name": "cvv2",
        "baseName": "cvv2",
        "type": "any"
    },
    {
        "name": "employeeGratTip",
        "baseName": "employeeGratTip",
        "type": "any"
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
        "type": "any"
    },
    {
        "name": "moreRecordsKey",
        "baseName": "moreRecordsKey",
        "type": "any"
    },
    {
        "name": "tipAmount",
        "baseName": "tipAmount",
        "type": "any"
    },
    {
        "name": "inputData",
        "baseName": "inputData",
        "type": "any"
    },
    {
        "name": "profitCenterID",
        "baseName": "profitCenterID",
        "type": "any"
    },
    {
        "name": "invoiceNumber",
        "baseName": "invoiceNumber",
        "type": "any"
    },
    {
        "name": "receiptTextImage",
        "baseName": "receiptTextImage",
        "type": "any"
    },
    {
        "name": "brokerageAmount",
        "baseName": "brokerageAmount",
        "type": "any"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "any"
    },
    {
        "name": "coverCount",
        "baseName": "coverCount",
        "type": "any"
    },
    {
        "name": "moreRecordsFlag",
        "baseName": "moreRecordsFlag",
        "type": "any"
    },
    {
        "name": "accountNum",
        "baseName": "accountNum",
        "type": "any"
    },
    {
        "name": "maxRecordCount",
        "baseName": "maxRecordCount",
        "type": "any"
    },
    {
        "name": "incrementalAuthAmount",
        "baseName": "incrementalAuthAmount",
        "type": "any"
    },
    {
        "name": "extraData",
        "baseName": "extraData",
        "type": "any"
    },
    {
        "name": "checkTypeID",
        "baseName": "checkTypeID",
        "type": "any"
    },
    {
        "name": "postingID",
        "baseName": "postingID",
        "type": "any"
    },
    {
        "name": "destinationPropertyID",
        "baseName": "destinationPropertyID",
        "type": "any"
    },
    {
        "name": "accountDetail",
        "baseName": "accountDetail",
        "type": "any"
    },
    {
        "name": "paymentAmount",
        "baseName": "paymentAmount",
        "type": "any"
    },
    {
        "name": "registerID",
        "baseName": "registerID",
        "type": "any"
    },
    {
        "name": "tndrAccountObject",
        "baseName": "tndrAccountObject",
        "type": "any"
    },
    {
        "name": "mealPeriodID",
        "baseName": "mealPeriodID",
        "type": "any"
    }
];
//# sourceMappingURL=request.js.map