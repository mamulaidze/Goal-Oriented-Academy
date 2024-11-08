const Button = ({ children, variant = "primary" }) => {
    const buttonStyle = {
      primary: 'bg-blue-500 text-white px-4 py-2 rounded',
      secondary: 'bg-gray-300 text-black px-4 py-2 rounded',
    };
  
    return (
      <button className={buttonStyle[variant]}>
        {children}
      </button>
    );
};
  
export default Button;
  