import { createContext, useContext, useState } from "react";
import "./ModalProvider.scss";
import Button from "../shared/Button/Button";
import { handleImgError } from "../../helpers/helpers";

const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const openModal = (trip) => {
    setSelectedTrip(trip);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedTrip(null);
  };

  const renderStars = (rating) => {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '⭐ ';
    }
    return stars;
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen, selectedTrip }}>
      {children}
      
      {/* Modal Overlay */}
      {isOpen && selectedTrip && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Button className="close-btn" onClick={closeModal}>✕</Button>
            
            <div className="modal-image">
              <img src={selectedTrip.image} alt={selectedTrip.name} onError={handleImgError} />
            </div>
            
            <div className="modal-body">
              <h2 className="modal-title">{selectedTrip.name}</h2>
              
              <div className="modal-rating">
                <span className="stars">{renderStars(selectedTrip.rating)}</span>
                <span className="rating-number">({selectedTrip.rating})</span>
              </div>
              
              <div className="modal-description">
                <h3>Full Description</h3>
                <p>{selectedTrip.long_description || selectedTrip.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
