import React from 'react';
import Header from '../../components/Header'

const PageWrapper = ({ children }) => (
  <div>
    <Header />
    <div className="container">{ children }</div>
  </div>
)

export default PageWrapper
