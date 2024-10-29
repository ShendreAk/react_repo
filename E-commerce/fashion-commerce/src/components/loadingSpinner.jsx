
const LoadingSpinner = () => {
  return (<div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden loadingspinner">Loading...</span>
    </div>
  </div>);
}
export default LoadingSpinner; 