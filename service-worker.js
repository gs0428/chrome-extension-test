chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  let isPanelOpen = false;

  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

  chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle-side-panel") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab) {
          console.log("활성화 탭 : ", activeTab);
          if (isPanelOpen) {
            console.log("패널 닫기", isPanelOpen);
            isPanelOpen = false;
            chrome.sidePanel.setOptions({
              enabled: false,
            });
          } else {
            console.log("패널 열기", isPanelOpen);
            chrome.sidePanel.setOptions({
              enabled: true,
            });
            chrome.sidePanel.open({ tabId: activeTab.id }, () => {
              isPanelOpen = true;
            });
          }
        } else {
          console.error("Close the Inspection tab before using the shortcut.");
        }
      });
    }
  });
});
