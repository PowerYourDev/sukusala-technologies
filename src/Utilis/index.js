export const renderComponentBasedOntype = (component,handleSubmit) => {
    switch (component.type) {
      case 'label':
        return <label htmlFor={component?.for}  className={component?.className}>{component?.text}</label>;
      case 'textField':
        return <input type="text" id={component?.id} placeholder={component?.placeholder}  className={component?.className}/>;
      case 'passwordField':
        return <input type="password" id={component?.id} placeholder={component?.placeholder}  className={component?.className} />;
      case 'button':
        return <button id={component?.id} onClick={handleSubmit}  className={component?.className}>{component?.text}</button>;
      default:
        return null;
    }
  };

