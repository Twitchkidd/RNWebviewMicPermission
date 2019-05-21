import PropTypes from "prop-types";
import { requireNativeComponent, ViewPropTypes } from "react-native";

const mcs = {
  name: "PermissionWebview",
  propTypes: {
    sourceUri: PropTypes.string,
    ...ViewPropTypes
  }
};

export default requireNativeComponent("PermissionWebviewManager", mcs);
