import React from 'react'
import Header from './Header'
import EditingArea from './EditingArea'
import ReactDOM from 'react-dom';


class DocumentView extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <div class="clear"></div>
          <EditingArea/>
      </div>
    )
  }
}
export default DocumentView
