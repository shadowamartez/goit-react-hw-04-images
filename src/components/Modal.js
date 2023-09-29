import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    const closeModal = (e) => {
        if (e.target === e.currentTarget) {
        onClose();
        }
    };

    return (
        <div className="overlay" onClick={closeModal}>
        <div className="modal">
            <img src={imageSrc} alt="" />
        </div>
        </div>
    );
};

export default Modal;


