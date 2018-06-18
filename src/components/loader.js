
import ContentLoader from "react-content-loader"
import React from 'react'
const MyLoader = props => (
  <ContentLoader
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3ff"
    secondaryColor="#d6d7d8"
    {...props}
  >
    <rect x="298" y="15.27" rx="4" ry="4" width="90" height="55.36" /> 
    <rect x="35" y="15.27" rx="3" ry="3" width="90" height="55.36" /> 
    <rect x="155" y="15.27" rx="3" ry="3" width="112" height="55.36" /> 
    <rect x="35" y="101.27" rx="3" ry="3" width="90" height="55.36" /> 
    <rect x="155" y="101.27" rx="3" ry="3" width="112" height="55.36" /> 
    <rect x="298" y="101.27" rx="3" ry="3" width="90" height="55.36" />
  </ContentLoader>
)
export default  MyLoader;