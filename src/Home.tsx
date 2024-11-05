const Home = () => {
  const onClick = () => {
    console.log("Authenticating...");
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      console.log(token);
    });
  };
  return (
    <div>
      This is Home.
      <button onClick={onClick}>Auth</button>
    </div>
  );
};

export default Home;
