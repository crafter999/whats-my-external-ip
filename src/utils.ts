const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^((?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::((?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?$/;

export function isValidIP(ip: string) {
   return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}