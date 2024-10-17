const LoadingSpinner = () => {
  return (<div className="text-center" styles={{ width: '5rem' }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>);
}
export default LoadingSpinner; 