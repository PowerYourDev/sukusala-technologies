export const renderComponentBasedOntype = (component,handleSubmit,handlechange) => {
    switch (component.type) {
      case 'label':
        return <label htmlFor={component?.for}  className={component?.className}>{component?.text}</label>;
      case 'textField':
        return <input type="text" id={component?.id} placeholder={component?.placeholder}  className={component?.className}  onChange={handlechange}/>;
      case 'passwordField':
        return <input type="password" id={component?.id} placeholder={component?.placeholder}  className={component?.className} onChange={handlechange} />;
      case 'button':
        return <button id={component?.id} onClick={handleSubmit}  className={component?.className}>{component?.text}</button>;
      default:
        return null;
    }
  };

  export const validateField = (fieldId, value, validation) => {
    if (validation.required && !value) {
      return "This field is required";
    }
    if (validation.pattern) {
      const regex = new RegExp(validation.pattern);
      if (!regex.test(value)) {
        return validation.message;
      }
    }
    return "";
  };


