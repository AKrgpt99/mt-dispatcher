import React, { Component } from "react";
import { connect } from "react-redux";

import "./areas-list.css";

class AreasList extends Component {
  render() {
    const { areas } = this.props;

    return (
      <table className="ak-areas">
        <tbody>
          <tr className="ak-areas__t-head">
            {Object.keys(areas).map((col) => (
              <td key={col}>{col}</td>
            ))}
          </tr>
          <tr>
            {Object.keys(areas).map((col) => (
              <td key={col}>
                {areas[col].map((driver) => (
                  <div
                    key={driver.car}
                    className={
                      "ak-areas__info ak-areas__info--" + driver.status
                    }
                  >
                    <a href="#">
                      <p>{driver.car}</p>
                      <p>{driver.time}</p>
                    </a>
                  </div>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  areas: state.root.area.data,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AreasList);
