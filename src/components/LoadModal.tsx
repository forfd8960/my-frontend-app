const LoadModal = ({ onClick = () => {} }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch modal
      </button>
    );
}   

export default LoadModal;