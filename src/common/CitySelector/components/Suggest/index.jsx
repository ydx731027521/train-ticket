import React, { memo, useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import "../../index.css";

import SuggestItem from "./SuggestItem";

const Suggest = memo(function Suggest(props) {
  const { searchKey, onSelect } = props;

  const [result, setResult] = useState([]);

  const fallBackResult = useMemo(() => {
    if (!result.length) {
      return [{ display: searchKey }];
    }
    return result;
  }, [result, searchKey]);

  useEffect(() => {
    fetch("/rest/search?key=" + encodeURIComponent(searchKey))
      .then(res => res.json())
      .then(response => {
        const { result, searchKey: sKey } = response;

        if (sKey === searchKey) {
          setResult(result);
        }
      });
  }, [searchKey]);

  return (
    <div className="city-suggest">
      <ul className="city-suggest-ul">
        {fallBackResult.map(item => (
          <SuggestItem
            key={item.display}
            name={item.display}
            onClick={onSelect}
          />
        ))}
      </ul>
    </div>
  );
});

Suggest.propTypes = {
  searchKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Suggest;
