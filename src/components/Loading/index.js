import React from 'react';
import { FaCompass } from 'react-icons/fa';

// Styles
import { LoadingComponent } from './styles.js';

function Loading() {
  return (
    <LoadingComponent>
      <FaCompass />
    </LoadingComponent>
  )
}

export default Loading;