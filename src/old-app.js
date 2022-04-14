import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { dateFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

class App extends Component {
  state = {
    products: [],
    columns: [{
      dataField: 'DataMessageGUID',
      text: 'DataMessage GUID',
      sort: true
    },
    {
      dataField: 'SensorID',
      text: 'Sensor ID',
      sort: true
    },
	 {
      dataField: 'Sensor Name',
      text: 'Sensor Name',
      sort: false
    },
	{
		dataField: 'Date',
		text: 'Date',
		sort: false
	  },
	  {
		dataField: 'Value',
		text: 'Value',
 	  },
	  {
		dataField: 'Formatted Value',
		text: 'Formatted Value',
		sort: false
	  },
	  {
		dataField: 'Battery',
		text: 'Battery',
		sort: false
	  }
	 
]
  }

  componentDidMount() {
    axios.get('http://ec2-3-143-143-13.us-east-2.compute.amazonaws.com/api/')
      .then(response => {
        this.setState({
          products: response.data
        });
      });
  }
  
  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable 
        striped
        hover
        keyField='id' 
        data={ this.state.products } 
        columns={ this.state.columns }
        filter={ filterFactory() } 
        pagination={ paginationFactory() }/>
      </div>
    );
  }
}

export default App;