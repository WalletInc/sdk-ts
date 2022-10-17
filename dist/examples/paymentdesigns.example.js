"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api = __importStar(require("wallet"));
const constants = __importStar(require("./constants"));
paymentDesigns();
function paymentDesigns() {
    return __awaiter(this, void 0, void 0, function* () {
        let designClient = new api.PaymentDesignsApi(constants.domain);
        let design = yield designClient.createPaymentDesign({
            borderColor: "#f0f0f0",
            borderStyleType: "Dashed",
            borderSize: "4px",
            borderRadius: 2,
            fontColor: "#777777",
            fontType: "Arial",
            abbreviation: "ABBR",
            acronym: "AR",
            icon: "fa-anchor",
            designName: "Thanksgiving Design",
            displayName: "Decorator",
        }, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(design);
        design = (yield designClient.fetchPaymentDesignById(design.id, constants.headers)).body;
        console.log(design);
        design = yield designClient.updatePaymentDesign(design.id, Object.assign(Object.assign({}, design), { borderColor: "#050505", borderSize: "6px" }), constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        design = yield designClient.archivePaymentDesign(design.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(design.isActive);
        design = yield designClient.restorePaymentDesign(design.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(design.isActive);
        let designs = (yield designClient.fetchAllPaymentDesigns(false, constants.headers)).body;
        console.log(designs);
    });
}
//# sourceMappingURL=paymentdesigns.example.js.map