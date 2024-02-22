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
staticVouchers();
function staticVouchers() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.StaticVouchersApi(constants.domain);
        let params = {
            offerAmountCents: 1000,
            memberID: "MEM0090",
            cellPhone: "+1809898787",
            campaignID: "",
        };
        let voucher = yield client.createStaticVoucher(params, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(voucher);
        voucher = (yield client.fetchStaticVoucher(voucher.id, constants.headers)).body;
        console.log(voucher);
        voucher = yield client.updateStaticVoucher(voucher.id, Object.assign({}, params, { offerAmountCents: 2000 }), constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        yield client.deleteStaticVoucher(voucher.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        let individualVoucherReachStats = yield client.fetchReachStatsOfIndividualStaticVoucher(voucher.id, undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(individualVoucherReachStats);
        let allVouchersReachStats = yield client.fetchReachStatsOfAllStaticVouchers(undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(allVouchersReachStats);
    });
}
//# sourceMappingURL=staticvouchers.example.js.map