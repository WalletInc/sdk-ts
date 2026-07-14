from collections import OrderedDict
import os
import sys

# Order is preserved and also drives the Table of Contents below.
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

header = """![Wallet Inc](https://resources.wallet.inc/logos/wallet-350x96.png)

# Wallet SDK for Node.js

[![npm version](https://img.shields.io/npm/v/wallet.svg?color=2d7ff9)](https://www.npmjs.com/package/wallet)
[![npm downloads](https://img.shields.io/npm/dm/wallet.svg?color=2d7ff9)](https://www.npmjs.com/package/wallet)

The official server-side TypeScript / Node.js SDK for the [Wallet Inc](https://wallet.inc) CRM & Digital Payments platform. Create and manage membership tiers, club members, vouchers, promotions, store credit, payment designs, SMS/MMS, and more.

> **Access note:** this module is currently restricted to Wallet Inc customers. Need access or a hand getting started? Join us on [Discord](https://discord.gg/xzwhcNCjcQ).

## Links

- Website: https://wallet.inc
- Developer docs: https://wallet.dev
- API status: https://uptime.wallet.inc
- All SDKs: https://github.com/walletinc

## Installation

```bash
npm install wallet
```

## Quickstart

Each resource has its own API client, constructed with your API domain. Every call takes an options object carrying your API key as an `access-token` header. Create your key in the [Wallet Developer Hub](https://wallet.dev).

```typescript
import * as api from "wallet";

const domain = "https://api.wall.et";
const options = {
  headers: {
    "access-token": "YOUR_API_KEY",
  },
};

// Create a membership tier
const membershipTiers = new api.MembershipTiersApi(domain);
const { body: tier } = await membershipTiers.createMembershipTier(
  { tierNumber: "1", tierName: "GOLD", tierDiscount: 20 },
  options
);
console.log(tier);
```

The runnable examples below import shared `domain` and `headers` from a local `./constants` file (see [`examples/constants.ts`](examples/constants.ts)); swap in your own domain and API key. To run them:

```bash
cd examples
npm install   # installs ts-node to run the TypeScript examples directly
```

## Documentation

Full API reference and guides live in the [Wallet Developer Hub](https://wallet.dev).

## Examples

Click any example to expand the full runnable snippet.

"""


readme = header

examples_dir = os.path.join(os.getcwd(), "examples")

for file in file_title_map:
    title = file_title_map[file]
    if len(title) == 0:
        print("No title found for file: ", file)
        sys.exit(2)

    path = os.path.join(examples_dir, file)
    if not os.path.exists(path):
        print("WARNING: example file not found, skipping: ", file)
        continue

    content = open(path).read().strip()
    # Collapsible so all examples stay available without making the page enormous.
    readme += (
        "\n<details>\n"
        "<summary><b>" + title + "</b></summary>\n\n"
        "```typescript\n" + content + "\n```\n\n"
        "</details>\n"
    )

with open("README.md", "w") as f:
    f.write(readme)

print("README.md regenerated")
