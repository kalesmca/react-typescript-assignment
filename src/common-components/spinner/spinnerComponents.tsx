import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent: React.FC = () => {
  return (
    <div data-testid="spinner-container">
      <Spinner animation="border" />
    </div>
  )
}

export default SpinnerComponent;