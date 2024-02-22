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
dynamicVouchers();
function dynamicVouchers() {
    return __awaiter(this, void 0, void 0, function* () {
        let client = new api.DynamicVouchersApi(constants.domain);
        let designClient = new api.PaymentDesignsApi(constants.domain);
        let allDesigns = yield designClient.fetchAllPaymentDesigns(false, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        let selectedDesign = allDesigns[0];
        let startDate = new Date();
        let expiryDate = new Date((new Date()).setDate((new Date()).getDate() + 5));
        let params = {
            title: "Dynamic Voucher API Client",
            notes: "Example notes",
            paymentDesignID: selectedDesign.id,
            dateTimeStart: startDate,
            dateTimeExpiration: expiryDate,
            startingValue: 1000,
            maxBudget: 90000,
            decreaseAmount: 10,
            frequency: 10,
            frequencyType: "Minute(s)",
            isActive: true,
        };
        let voucher = yield client.createDynamicVoucher(params, constants.headers).catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(voucher);
        voucher = yield client.fetchDynamicVoucherById(voucher.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(voucher);
        voucher = yield client.saveDynamicVoucher(voucher.id, Object.assign({}, params, { title: `${voucher.title} Updated` }), constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(voucher);
        let allVouchers = yield client.fetchAllDynamicVouchers(false, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(allVouchers);
        let allRedemptions = yield client.fetchDynamicVoucherRedemptions(voucher.id, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(allRedemptions);
        let individualVoucherReachStats = yield client.fetchReachStatsOfIndividualDynamicVoucher(voucher.id, undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(individualVoucherReachStats);
        let allVouchersReachStats = yield client.fetchReachStatsOfAllDynamicVouchers(undefined, undefined, constants.headers)
            .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body;
        });
        console.log(allVouchersReachStats);
    });
}
//# sourceMappingURL=dynamicvouchers.example.js.map