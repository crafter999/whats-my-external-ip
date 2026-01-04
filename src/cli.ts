#!/usr/bin/env node

import { getPublicIP } from "./get-ip";

(async () => {
    const services = [
        "https://checkip.amazonaws.com",
        "https://api.ipify.org",
        "https://ipinfo.io/ip"
    ];
    const ip = await getPublicIP(services);
    console.log(ip);
})()