import { describe, it } from "node:test";
import { isValidIP } from "../src/utils";

describe("utils", () => {
    it("should return true for valid IPv4", () => {
        const ip = "127.0.0.1"
        const isValid = isValidIP(ip)
        if (!isValid) {
            throw new Error("Invalid IP")
        }
    })
    it("should return true for valid IPv6", () => {
        const ip = "::1"
        const isValid = isValidIP(ip)
        if (!isValid) {
            throw new Error("Invalid IP")
        }
    })

    it("should return false for invalid IP", () => {
        const ip = "invalid-ip"
        const isValid = isValidIP(ip)
        if (isValid) {
            throw new Error("Invalid IP")
        }
    })
})
