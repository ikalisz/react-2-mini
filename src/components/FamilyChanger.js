import React from 'react';

export default function FamilyChanger(props) {
    return (
      <select onChange={(e) => props.update(e.target.value)} className="dropDownContainer" disabled={props.allowEdit}>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    );
  }
