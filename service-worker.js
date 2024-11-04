chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  let width = 1440;

  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

  chrome.windows.get(
    chrome.windows.WINDOW_ID_CURRENT,
    { populate: true },
    (window) => (width = window.width)
  );

  chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle-side-panel") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab) {
          chrome.sidePanel.setOptions({
            enabled: width === activeTab.width,
          });
          chrome.sidePanel.open({ tabId: activeTab.id });
        } else {
          console.error("Close the Inspection tab before using the shortcut.");
        }
      });
    }
  });
});
