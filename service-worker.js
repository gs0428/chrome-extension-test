chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");

  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

  chrome.bookmarks.getTree((trees) => {
    const makeUp = (items) => {
      return items.map((item) => {
        if (typeof item.children !== "undefined") {
          return {
            id: item.id,
            title: item.title,
            children: makeUp(item.children),
          };
        }
        return {
          id: item.id,
          title: item.title,
          url: item.url,
        };
      });
    };
    const result = makeUp(trees)[0].children;
    console.log(result);
  });
});
