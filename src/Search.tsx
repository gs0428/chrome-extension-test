import { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (text.trim() === "") return;

    chrome.search.query({ text }, () => {
      console.log("searching");
      setText("");
    });
  };
  return (
    <div>
      This is Search.
      <br />
      <form>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={onChange}
        />
        <button onClick={onSubmit}>검색</button>
      </form>
    </div>
  );
};

export default Search;
