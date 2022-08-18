import React from "react";
import 'antd/dist/antd.min.css'
import { Collapse } from "antd";

import "./CompletedList.scss";
import CompletedListItem from "../CompletedItem";

const { Panel } = Collapse;

function CompletedHeader() {
  return (
    <div className="completedheader">
      <div className="completedheadertitle">
        Completedheadertitle
      </div>
      <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" rotate="0">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </svg>
    </div>

  )
}

function CompletedList() {

  return (
    <div className="completedlist" >
      <Collapse
        // defaultActiveKey={['1']}
        expandIconPosition="end"
        ghost
      >
        <Panel
          header={<CompletedHeader></CompletedHeader>} key="1"
          showArrow={false}
        >
          <CompletedListItem></CompletedListItem>
        </Panel>
      </Collapse>
    </div>
  );
}

export default CompletedList;