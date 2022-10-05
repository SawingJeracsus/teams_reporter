export const getCurrentTab = () =>
  new Promise<chrome.tabs.Tab | undefined>((resolve) => {
    chrome.tabs.query({ active: true }, (tabs) => {
      resolve(tabs[0]);
    });
  });
