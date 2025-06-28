import { useEffect } from "react";
import "../../blocks/ModalWithForm.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const LoginModal = ({ onClose, handleLogin, isOpen, onSignUpClick }) => {
  const { handleChange, values, errors, isValid, resetForm } =
    useFormWithValidation({ email: "", password: "" });

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email: values.email, password: values.password });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Sign In"
      buttonText="Login"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <label className="modal__label">
        Email
        <input
          name="email"
          className="modal__input"
          type="email"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
        />
        <span>{errors.email}</span>
      </label>

      <label className="modal__label">
        Password
        <input
          name="password"
          className="modal__input"
          type="password"
          placeholder="Password"
          value={values.password || ""}
          onChange={handleChange}
        />
        <span>{errors.password}</span>
      </label>

      <div className="modal__button-container">
        <button
          type="submit"
          className={`modal__primary-btn ${
            !isValid ? "modal__primary-btn_disabled" : ""
          }`}
          disabled={!isValid}
        >
          Sign in
        </button>
        <button
          className="modal__secondary-btn"
          type="button"
          onClick={onSignUpClick}
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
