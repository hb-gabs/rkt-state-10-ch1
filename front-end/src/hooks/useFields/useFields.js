import { useState } from "react"


export const useFields = (initialValue = {}) => {
  const [fields, setFields] = useState(initialValue);

  const setNewFieldsFunction = key => e => setFields(prev => ({
    ...prev,
    [key]: e.target.value,
  }));

  const checkFields = () => {
    Object.keys(fields).forEach(key => {
      if (!fields[key]) {
        return false;
      }
    });
    return true;
  };

  return {
    fields,
    setFields,
    setNewFieldsFunction,
    checkFields,
  };
};