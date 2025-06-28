import React, { useCallback } from "react";

export function useFormWithValidation(defaultValues) {
  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
// export function useFormWithValidation(defaultValues = {}) {
//   const [values, setValues] = React.useState(() => ({ ...defaultValues }));
//   const [errors, setErrors] = React.useState({});
//   const [isValid, setIsValid] = React.useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setValues((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: event.target.validationMessage }));
//     setIsValid(event.target.closest("form").checkValidity());
//   };

//   const resetForm = React.useCallback(
//     (newValues = {}, newErrors = {}, newIsValid = false) => {
//       setValues({ ...defaultValues, ...newValues });
//       setErrors(newErrors);
//       setIsValid(newIsValid);
//     },
//     [defaultValues]
//   );

//   return { values, handleChange, errors, isValid, resetForm };
// }
