"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTMenuScheduleWindow = void 0;
class WTMenuScheduleWindow extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTMenuScheduleWindow.attributeTypeMap);
    }
}
exports.WTMenuScheduleWindow = WTMenuScheduleWindow;
WTMenuScheduleWindow.discriminator = undefined;
WTMenuScheduleWindow.attributeTypeMap = [
    {
        "name": "days",
        "baseName": "days",
        "type": "any"
    },
    {
        "name": "start",
        "baseName": "start",
        "type": "any"
    },
    {
        "name": "end",
        "baseName": "end",
        "type": "any"
    }
];
//# sourceMappingURL=wTMenuScheduleWindow.js.map