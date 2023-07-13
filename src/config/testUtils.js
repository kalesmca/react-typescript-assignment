import * as React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configStore from '../redux/store';


export const RenderWithRtl  = (ui,
      {
        initialState,
        store = configStore(initialState),
        ...renderOptions
      } = {}) =>  {

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export const matchWithTags = (textMatch) => (_, node) => {
    const hasText = (node) => node.textContent === textMatch
    const nodeHasText = hasText(node)
    const childrenDontHaveText = Array.from(node?.children || []).every((child) => !hasText(child))
    return nodeHasText && childrenDontHaveText

};