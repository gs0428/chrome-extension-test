const Home = () => {
  const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirectUri = encodeURIComponent(chrome.identity.getRedirectURL());
  const kakaoLoginPage = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${apiKey}&redirect_uri=${redirectUri}&response_type=code`;

  const onClickGoogleAuth = () => {
    console.log("Google Authenticating...");
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      console.log(token);
    });
  };

  const onClickKakaoAuth = () => {
    chrome.identity.launchWebAuthFlow(
      {
        interactive: true,
        url: kakaoLoginPage,
      },
      async (redirectUri) => {
        const code = redirectUri?.split("code=")[1];
        const res = await fetch(
          `http://localhost:8000/login/kakao?code=${code}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();

        chrome.storage.local.set({ token: data.data.id });
      }
    );
  };

  return (
    <div>
      This is Home.
      <br />
      <button onClick={onClickGoogleAuth}>Google Auth</button>
      <br />
      <button onClick={onClickKakaoAuth}>Kakao Auth</button>
    </div>
  );
};

export default Home;
