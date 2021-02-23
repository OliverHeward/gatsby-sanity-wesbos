import React from 'react';
import Layout from './src/components/Layout';

// Wrap Pages Hook
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
