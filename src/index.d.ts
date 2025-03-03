export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: any; // You can replace 'any' with more specific types if available
    };
  }
}
