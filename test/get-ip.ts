import { describe, it } from "node:test";
import { getPublicIP } from "../src/get-ip";
import { isValidIP } from "../src/utils";

describe("get-ip", () => {
   it("check https://checkip.amazonaws.com", async () => {
      const ip = await getPublicIP(["https://checkip.amazonaws.com"])
      if (!isValidIP(ip)) {
         throw new Error("Invalid IP")
      }
   })

   it("check https://api.ipify.org", async () => {
      const ip = await getPublicIP(["https://api.ipify.org"])
      if (!isValidIP(ip)) {
         throw new Error("Invalid IP")
      }
   })

   it("check https://ipinfo.io/ip", async () => {
      const ip = await getPublicIP(["https://ipinfo.io/ip"])
      if (!isValidIP(ip)) {
         throw new Error("Invalid IP")
      }
   })

   it("check multiple services", async () => {
      const ip = await getPublicIP([
         "https://e5cdeffc3df937d2039516a4b53c1.com",
         "https://checkip.amazonaws.com",
      ])
      if (!isValidIP(ip)) {
         throw new Error("Invalid IP")
      }
   })
})