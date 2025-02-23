const fs = require("node:fs/promises");
const paymentBlockName = {
    "amazon-pay.svg": "Amazon Pay",
    "amazonpay.svg": "Amazon Pay",
    "americanexpress.svg": "American Express",
    "applepay.svg": "Apple Pay",
    "discover.svg": "Discover",
    "googlepay.svg": "Google Pay",
    "googlewallet-logo.svg": "Google Wallet",
    "googlewallet.svg": "Google Wallet",
    "mastercard-text.svg": "Mastercard",
    "mastercard.svg": "Master Card",
    "paypal.svg": "Paypal",
    "stripe-pay.svg": "Stripe",
    "venmo_1_color.svg": "venmo 1 color",
    "venmo_2_color.svg": "venmo 2 color",
    "visa_2_color.svg": "visa 2 color",
    "visa.svg": "Visa",
    "visaelectron_color.svg": "visa electron color",
    "zippay_color.svg": "zippay color",
    "afterpay_logo.svg": "afterpay logo",
    "afterpay_logo_color.svg": "afterpay logo color",
    "klarna.svg": "klarna",
    "maestro.svg": "maestro",
    "maestro_text.svg": "maestro text",
    "skrill_card.svg": "skrill card",
    "skrill_text.svg": "skrill text",
    "zip_pay_card.svg": "Zip Pay card",
    "poli_logo.svg": "poli logo",
    "poli_card.svg": "poli card",
    "giropay_card.svg": "giropay card",
    "giropay.svg": "giropay card",
    "interac.svg": "interac",
    "interac_card.svg": "interac card",
    "elo_card.svg": "elo card",
    "elo.svg": "elo",
    "hipercard.svg": "hipercard",
    "bit_card.svg": "bit card",
    "bit.svg": "bit",
    "snapscan_card.svg": "snapscan",
    "snapscan.svg": "snapscan card",
    "rakuten_pay_card.svg": "rakuten pay card",
    "rakuten_pay.svg": "rakuten pay",
    "line_pay.svg": "line pay",
    "paypay_card.svg": "paypay card",
    "paypay.svg": "paypay",
    "shop_pay_card.svg": "shop pay card",
    "shop_pay.svg": "shop pay",
    "ideal.svg": "Ideal",
    "jcb.svg": "JCB",
    "bancontact_card.svg": "bancontact card",
    "bancontact.svg": "bancontact",
    "affirm_color.svg": "affirm color",
    "bitcoin-1.svg": "Bitcoin",
    "bitcoin.svg": "Bitcoin",
    "unionpay_color.svg": "unionpay color",
    "zapper_color.svg": "zapper color",
    "2checkout_color.svg": "2checkout color",
    "7eleven_color.svg": "7eleven color",
    "abitab_color.svg": "abitab color",
    "accessbank_color.svg": "accessbank color",
    "airtel_color.svg": "airtel color",
    "airwallex_color.svg": "airwallex color",
    "aktia_color.svg": "aktia color",
    "akulaku_color.svg": "akulaku color",
    "alandsbanken_color.svg": "alandsbanken color",
    "alfaclick_color.svg": "alfaclick color",
    "alfamart_color.svg": "alfamart color",
    "alipayhk_color.svg": "alipayhk color",
    "alma_color.svg": "alma color",
    "braintree_color.png": "Braintree",
    "butterfly.svg": "Butterfly",
    "hsbc.svg": "Hsbc",
    "juice.svg": "Juice",
    "onepay.svg": "OnePay",
    "payflex.svg": "PayFlex",
    "samsung_payment.svg": "Samsung Pay",
    "transferwise_color.svg": "transferwise color",
    "troy_color.svg": "troy color",
    "twint_color.svg": "twint color",
    "twispay_color.svg": "twispay color",
    "unionbankofthephilippines_color.svg": "unionbank of the philippines color",
    "upi_color.svg": "upi color",
    "usdaregistered_color.svg": "usdaregistered color",
    "usdcoin_color.svg": "usdcoin color",
    "usps_color.svg": "usps color",
    "verve_color.svg": "verve color",
    "viabill_color.svg": "viabill color",
    "vipps_color.svg": "vipps color",
    "vivawallet_color.svg": "vivawallet color",
    "vodacom_color.svg": "vodacom color",
    "vorkasse_2_color.svg": "vorkasse 2 color",
    "walley_color.svg": "walley color",
    "webmoney_color.svg": "webmoney color",
    "webpayoneclick_color.svg": "webpayoneclick color",
    "webpayplus_color.svg": "webpayplus color",
    "wechatpay_color.svg": "wechatpay color",
    "wepay_color.svg": "wepay color",
    "westernunion_color.svg": "westernunion color",
    "wirecard_color.svg": "wirecard color",
    "worldpay_color.svg": "worldpay color",
    "yandexmoney_color.svg": "yandexmoney color",
    "zelle_color.svg": "zelle color",
    "zenithbank_color.svg": "zenithbank color",
};
async function main() {
    const svgs = "./svgs";
    const position = ["badge", "card", "general"];
    try {
        const collections = await fs.readdir(svgs);
        const icons_collection = {};
        for (const collection of collections) {
            if (collection.startsWith(".")) continue;
            const icons = await fs.readdir(`${svgs}/${collection}`);
            console.log(position, collection, position.indexOf(collection));
            const each_col = {
                name: collection,
                position: position.indexOf(collection) !== -1
                    ? position.indexOf(collection)
                    : position.length + 1,
                icons: [],
            };
            icons.forEach((icon) => {
                if (icon.startsWith(".")) return;
                each_col.icons.push({
                    title: icon.split(".")[0],
                    name: paymentBlockName[icon] || icon.split(".")[0],
                    link:
                        `https://raw.githubusercontent.com/devgiri0082/my-free-icons/refs/heads/master/svgs/${collection}/${icon}`,
                });
            });
            console.log(collection);
            icons_collection[collection] = each_col;
        }
        //console.log(icons_collection);
        fs.writeFile("./svg.json", JSON.stringify(icons_collection));
    } catch (err) {
        console.log(err);
    }
}
main();
