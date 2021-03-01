import _ from "lodash";
import React, {Component} from 'react';
import { FlatList } from 'react-native';
import {connect} from 'react-redux';
import ListItem from "./ListItem"
 
class EmployeeList extends Component {
//   componentWillMount() {
//     this.props.employeesFetch();

//     this.createDataSource(this.props)
//   }
    //   renderRow({ item }){
    //       return <ListItem employee={employee} />
    //   }
   
//   componentWillReceiveProps(nextProps) {
//     //    nextProps are the next set of props that this
//     //    component will be rendered with
//     //    this.props is still the old set of props

//     this.createDataSource(nextProps);
//   }

//   createDataSource({employees}) {
//     const ds = new FlatList({
//       rowHasChanged: (r1, r2) => r1 !== r2,
//     });

//     this.dataSource = ds.cloneWithRows(employees);
//   }

  renderRow({employees}) {
      return <ListItem employees={employees} />
  }
  render() {
    return (
      <FlatList
         data = {this.props.employees}
         renderItem = {this.renderRow}
         
       />
    );
  }
}

const mapStateToProps = state =>{
    return {employees: state.employees}
}
export default connect(mapStateToProps)(EmployeeList)
