import React from 'react';

export default function ColorChanger(props) {
    return (
      <select  onChange={(e) => props.update(e.target.value)} className="dropDownContainer" disabled={props.allowEdit === "false"}>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    );
  }
