export async function getPublicIP(services: string[]): Promise<string> {
   for (const url of services) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      try {
         const response = await fetch(url, { signal: controller.signal });
         if (!response.ok) continue;
         const textIpAddress = (await response.text()).trim();
         return textIpAddress;
      } catch {
         // dot not log anything
      } finally {
         clearTimeout(timeoutId);
      }
   }

   throw new Error("All IP discovery services failed.");
}

