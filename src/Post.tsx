const Post = () => {
  const handleClick = (url: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTabId = tabs[0].id;
      if (currentTabId) {
        chrome.tabs.update(currentTabId, { url });
      }
    });
  };

  return (
    <div>
      This is Post.
      <br />
      Let's go{" "}
      <button onClick={() => handleClick("https://google.com")}>google</button>.
    </div>
  );
};

export default Post;
