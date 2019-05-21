import PropTypes from "prop-types";
import { requireNativeComponent, ViewPropTypes } from "react-native";

var mcs = {
  name: "PermissionWebview",
  propTypes: {
    sourceUri: PropTypes.string,
    ...ViewPropTypes
  }
};

module.exports = requireNativeComponent("PermissionWebviewManager", mcs);
