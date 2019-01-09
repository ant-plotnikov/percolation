import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dot from './Dot';

export class Simulator extends Component {
   static getSetStyles = setWidth => ({
    maxWidth: setWidth + 'px',
    minWidth: setWidth + 'px',
  })

  getSet = (set, elementSize) => {
    return set.filter(el => el.type !== 'virtual').map(e => {
      return <Dot key={e.key} state={e.state} size={elementSize} />
    });
  }

  render () {
    const { simulator: { elementSize, setWidth }, set } = this.props;
    const styles = Simulator.getSetStyles(setWidth);

    return (
      <div className="row">
        <div className="col s12">
          <div className="card-panel center">
            <h5 className="card-title">Visualization</h5>
            <div className="card-content">
              <div className="row">
                <div className="set-wrapper" style={styles}>
                  {this.getSet(set, elementSize)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  simulator: state.simulator,
  set: state.set,
});

export default connect(mapStateToProps, null)(Simulator);