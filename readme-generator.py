from collections import OrderedDict
import os
import sys

readme = """
![Wallet Inc](https://resources.wallet.inc/logos/wallet-350x96.png)

> Access to this module is presently restricted to customers of Wallet Inc. Reach out on [Discord](https://discord.gg/xzwhcNCjcQ) for help.

## Summary

This module provides a server-side SDK for integrating with the CRM & Digital Payments platform provided by Wallet Inc. For details about the [Wallet Platform](https://wallet.inc), please visit https://wallet.inc

For detailed API documentation and detailed steps to create your API key for authenticated requests, please visit the [Wallet Developer Hub](https://wallet.dev) (https://wallet.dev)

## Install

```bash
npm install wallet
```

## To test examples

```bash
cd examples
npm install # Install ts-node to run typescript examples without transpilation
```

## Usage

"""

examples_dir = os.path.join(os.getcwd(), "examples")

# Preserves the order
file_title_map = OrderedDict()
file_title_map["membershiptiers.example.ts"] = "Create and manipulate Membership Tiers"
file_title_map["paymentdesigns.example.ts"] = "Create and manipulate Payment Designs"
file_title_map["clubmembers.example.ts"] = "Create and manipulate Club Members"
file_title_map["advertisementcredits.example.ts"] = "Create and manipulate Advertisement Credits"
file_title_map["linkbook.example.ts"] = "Create and manipulate Link Book Links"
file_title_map["merchanturls.example.ts"] = "Create and manipulate Merchant URLs"
file_title_map["news.example.ts"] = "Create and manipulate News Articles"
file_title_map["performances.example.ts"] = "Create and manipulate Performances"
file_title_map["promocodes.example.ts"] = "Create and manipulate Promo Codes"
file_title_map["merchantcredits.example.ts"] = "Create and manipulate Merchant Credits"
file_title_map["dynamicvouchers.example.ts"] = "Create and manipulate Dynamic Vouchers"
file_title_map["staticvouchercampaigns.example.ts"] = "Create and manipulate Static Voucher Campaigns"
file_title_map["staticvouchers.example.ts"] = "Create and manipulate Static Vouchers"
file_title_map["sms.example.ts"] = "Create and manipulate SMSes"

for file in file_title_map:
    f = open(os.path.join(examples_dir, file)).read()

    title = file_title_map[file]

    if len(title) == 0:
        print("No title found for file: ", file)
        sys.exit(2)

    readme += "\r\n### " + title
    readme += """

```nodejs
{content}
```
    """.format(content=f)

f = open("README.md", "w")
f.write(readme)
f.close()
