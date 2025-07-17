import { useEffect } from "react";
import "../../blocks/RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const RegisterModal = ({ onClose, onRegister, isOpen, onLogInClick }) => {
  const { handleChange, values, errors, isValid, resetForm } =
    useFormWithValidation({ name: "", email: "", password: "" });

  console.log({ values });

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="SignUp"
      buttonText="signUp"
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <span>{errors.email}</span>
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <span>{errors.password}</span>
      </label>

      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <span>{errors.name}</span>
      </label>

      <div className="modal__button-container">
        <button
          type="submit"
          className={`modal__primary-btn ${
            !isValid ? "modal__primary-btn_disabled" : ""
          }`}
        >
          Sign Up
        </button>
        <button
          className="modal__secondary-btn"
          type="button"
          onClick={onLogInClick}
        >
          or Sign In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
