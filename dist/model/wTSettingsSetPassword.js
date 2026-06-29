"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WTSettingsSetPassword = void 0;
class WTSettingsSetPassword extends null {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(WTSettingsSetPassword.attributeTypeMap);
    }
}
exports.WTSettingsSetPassword = WTSettingsSetPassword;
WTSettingsSetPassword.discriminator = undefined;
WTSettingsSetPassword.attributeTypeMap = [
    {
        "name": "password",
        "baseName": "password",
        "type": "any"
    }
];
//# sourceMappingURL=wTSettingsSetPassword.js.map