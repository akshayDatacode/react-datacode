import React, { Component } from 'react';
import LayoutCreateQuizTest from '../LayoutCreateQuizTest';
import { ReactComponent as NoData } from '../../../../../../assets/images/svg/No_data_re_kwbl.svg'

class CreateQuizOverview extends Component {
  state = {}
  render() {
    return (
      <>
        <LayoutCreateQuizTest>
          <NoData className="no-data" />
          <h2>No Questions Available</h2>
        </LayoutCreateQuizTest>
      </>
    );
  }
}

export default CreateQuizOverview;