import { Component, createRef } from "react";
import { connect } from "react-redux";

import "./map.css";

class MapContainer extends Component {
  constructor() {
    super();
    this.ref = createRef();
  }

  render() {
    const { loading, Map } = this.props;

    return (
      <div className="ak-map-container">
        {!loading && <Map ref={this.ref} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.root.map.loading,
  Map: state.root.map.Component,
});

export default connect(mapStateToProps, null)(MapContainer);
