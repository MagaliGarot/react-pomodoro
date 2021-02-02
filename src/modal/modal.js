import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Break from "../components/break";

const Modal = props => {
    const {isShowing, hide} = props;
    return isShowing
        ? ReactDOM.createPortal(
              <>
                  <div className={"modalContainer"}>
                      <button
                          type={"button"}
                          className={"buttonBreak"}
                          onClick={hide}>
                          <span>{"x"}</span>
                      </button>
                      <h4 className={"titleBreak"}>{"Break"}</h4>
                      <Break />
                  </div>
              </>,
              document.body,
          )
        : null;
};

Modal.propTypes = {
    isShowing: PropTypes.bool.isRequired,
    hide: PropTypes.func.isRequired,
};

export default Modal;
