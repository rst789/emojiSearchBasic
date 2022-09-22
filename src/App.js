import React from "react";
import emojiList from "./emojiList.json";

export default function App() {

  const emojiArray = emojiList;

  const [searchedArray, setSearchedArray] = React.useState(emojiArray);
  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    if(searchString.length === 0){
      setSearchedArray(emojiArray)
    } else {
      const searchedObjects = []
      emojiArray.forEach((singleHeroObject, index) => {
        Object.values(singleHeroObject).every((onlyValues, valIndex) => {
          if(onlyValues.toLowerCase().includes(searchString.toLowerCase())){
            searchedObjects.push(singleHeroObject)
            return;
          }
        })
      })
      setSearchedArray(searchedObjects)
    }
  }, [searchString])

  return (
      <div className="App">
        <p>
          <input
              type="text"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              placeholder="search here.."
          />
        </p>
        <pre>
        {JSON.stringify(searchedArray, null, '    ')}
      </pre>
      </div>
  );
}