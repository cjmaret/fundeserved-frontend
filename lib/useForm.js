import { useEffect, useState } from 'react';

export default function useForm(initialState = {}, fileInputRef) {
  const [inputs, setInputs] = useState(initialState);
  const initialValues = Object.values(initialState).join('');

  useEffect(() => {
    setInputs(initialState);
  }, [initialValues]);

  function handleChange(e) {
    let { name, type, value } = e.target;
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initialState);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
