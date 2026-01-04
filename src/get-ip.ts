export async function getPublicIP(services: string[]): Promise<string> {
   for (const url of services) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      try {
         const response = await fetch(url, { signal: controller.signal });
         if (!response.ok) continue;
         const textIpAddress = (await response.text()).trim();
         return textIpAddress;
      } catch (err) {
         const message =
            err instanceof Error ? err.message : String(err);
         console.warn(`Failed to fetch IP from ${url}:`, message);
      } finally {
         clearTimeout(timeoutId);
      }
   }

   throw new Error("All IP discovery services failed.");
}

