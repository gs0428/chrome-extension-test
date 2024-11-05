export const searchHistory = (text: string) => {
  chrome.history.search(
    { text, startTime: Date.now() - 7 * 24 * 60 * 60 * 1000 },
    (results) => {
      console.log(results);
    }
  );
};

export const getBookMarks = () => {
  chrome.bookmarks.getTree((trees) => {
    const makeUp = (items: chrome.bookmarks.BookmarkTreeNode[]) => {
      return items.map(
        (
          item: chrome.bookmarks.BookmarkTreeNode
        ): chrome.bookmarks.BookmarkTreeNode => {
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
        }
      );
    };
    const result = makeUp(trees)[0].children;
    console.log(result);
  });
};
