import * as api from "wallet";
import * as constants from "./constants";

paymentDesigns();

async function paymentDesigns() {
    let designClient = new api.PaymentDesignsApi(constants.domain);

    // Create a new payment design
    let design = await designClient.createPaymentDesign({
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
        return resp.body
    });

    // The payment design that has just been created
    console.log(design);

    // Fetch the created design
    design = (await designClient.fetchPaymentDesignById(design.id, constants.headers)).body;
    console.log(design);

    // Change the borderColor and borderSize of the payment design
    design = await designClient.updatePaymentDesign(design.id, {
        ...design,
        borderColor: "#050505",
        borderSize: "6px",
    }, constants.headers).catch(err => {
        throw err;
    }).then(resp => {
        return resp.body
    });

    // Archive the payment design
    design = await designClient.archivePaymentDesign(design.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });

    console.log(design.isActive); // This will be false, since the design has just been archived

    // Restore the payment design
    design = await designClient.restorePaymentDesign(design.id, constants.headers)
        .catch(err => {
            throw err;
        }).then(resp => {
            return resp.body
        });
    console.log(design.isActive); // This will be true, since the design has just been restored

    // Fetch all payment designs
    let designs = (await designClient.fetchAllPaymentDesigns(false, constants.headers)).body;
    console.log(designs);
}