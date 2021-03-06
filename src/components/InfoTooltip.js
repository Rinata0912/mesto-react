import React from 'react';
import { ReactComponent as CloseIcon } from '../images/form_close-icon.svg';
import { ReactComponent as SuccessIcon } from '../images/success.svg';
import { ReactComponent as FailIcon } from '../images/fail.svg';
import { useClosePopup } from '../utils/useClosePopup';

export function InfoTooltip({ onClose, isOpen, name, isSuccess }) {
  const handleOnClose = useClosePopup({ onClose, isOpen });

  return (
    <div
      className={`popup js-popup-${name} ${isOpen && 'popup_opened'}`}
      onClick={handleOnClose}
    >
      <div className="popup__container popup__container_size_m">
        <button className="popup__close-btn" type="button">
          <CloseIcon className="popup__close-icon" onClick={handleOnClose} />
        </button>
        {isSuccess ? (
          <SuccessIcon className="popup__union" />
        ) : (
          <FailIcon className="popup__union" />
        )}
        <h2 className="popup__message">
          {isSuccess
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так!\nПопробуйте ещё раз.'}
        </h2>
      </div>
    </div>
  );
}
