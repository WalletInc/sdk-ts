"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
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
        design = yield designClient.updatePaymentDesign(design.id, Object.assign({}, design, { borderColor: "#050505", borderSize: "6px" }), constants.headers).catch(err => {
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