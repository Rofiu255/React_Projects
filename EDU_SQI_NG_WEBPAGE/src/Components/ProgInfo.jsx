import React from 'react'

const ProgInfo = (props) => {
  const infoStyle = {
    fontFamily: "Poppins, Helvetica, Arial, Lucida, sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "28px",
    color: "rgb(102, 102, 102)",
    borderBottom: '1px solid #2EA3F2',
  };  
  return (
    <div>
      <h3><strong>{props.Prog}</strong></h3>
      <div style={ infoStyle }><p><strong>Duration:</strong> {props.Duration}</p></div>
      <div style={ infoStyle } ><p><strong>Certificate:</strong> {props.Certification}</p></div>
      <div style={ infoStyle }><p><strong>Skills:</strong> {props.Skills}</p></div>
      <div style={ infoStyle }><p><strong>Entry Requirements:</strong> {props.EntryReq}</p></div>
      <div style={ infoStyle }><p><strong>Required Hardware:</strong> {props.ReqHard}</p></div>
      <div style={ infoStyle }><p><strong>Direct Entry:</strong> {props.DirEntry}</p></div>
      <div style={ infoStyle }><p><strong>Access to Alumni Network and Opportunities:</strong> {props.AlumAccess}</p></div>
    </div>
  )
}

export default ProgInfo
