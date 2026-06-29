"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
        voucher = yield client.saveDynamicVoucher(voucher.id, Object.assign(Object.assign({}, params), { title: `${voucher.title} Updated` }), constants.headers)
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