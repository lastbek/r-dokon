const tgWebApp = window.Telegram.WebApp as TelegramWebApp;

interface TelegramWebApp {
  initData: string;
  initDataUnsafe: any;
  version: string;
  platform: string;
  colorScheme: string;
  themeParams: object;
  isExpanded: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  close: () => void;
  expand: () => void;
  openLink: (url: string) => void;
  openTelegramLink: (url: string) => void;
  openInvoice: (url: string) => void;
  showPopup: (params: object) => void;
  showAlert: (message: string) => void;
  showConfirm: (message: string) => void;
  ready: () => void;
  onEvent: (eventType: string, callback: () => void) => void;
  offEvent: (eventType: string, callback: () => void) => void;
  sendData: (data: string) => void;
  HapticFeedback: {
    impactOccurred: (style: string) => void;
    notificationOccurred: (type: string) => void;
    selectionChanged: () => void;
  };
}

export const useTelegramWebApp = (): any => {
  if (!window.Telegram) {
    return null;
  }
  tgWebApp.ready();

  return tgWebApp;
};
