import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useActions } from '../../customHooks/useActions';
import { useTypedSelector } from '../../customHooks/useTypedSelector';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastComponent: React.FC = () => {
  const {updateToast} = useActions();
  const [show, setShow] = useState(false);
  const appConfigState = useTypedSelector((state) => state.appConfig)

  const closeToast = () =>{
    updateToast(false, "")
  }
  return (
    <div data-testid="toastContainer">
    <Row>
      <Col xs={6}>
      <ToastContainer
          className="p-3"
          position={"middle-center"}
          style={{ zIndex: 1 }}
        >
        <Toast  onClose={() => closeToast()} show={appConfigState.showToast} delay={80000} autohide  bg="danger">
          <Toast.Header data-testid="toastClose">
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{appConfigState.toastMsg}</Toast.Body>
        </Toast>
        </ToastContainer>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
    </div>
  );
}

export default ToastComponent;