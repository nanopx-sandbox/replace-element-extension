import React from 'react';
import ReplacerForm from './ReplacerForm';
import ReplacerList from './ReplacerList';

export default function SiteList({ site, replacers, onDelete, createReplacer, deleteReplacer }) {
  return (
    <li>
      <h4>{site}</h4>

      <ul>
        {replacers.map((replacer, i) => (<ReplacerList key={i} replacer={replacer} onDelete={() => deleteReplacer(replacer.selector)} />))}
      </ul>

      <ReplacerForm onSubmit={createReplacer} />

      <button onClick={onDelete}>remove</button>
    </li>
  );
}
