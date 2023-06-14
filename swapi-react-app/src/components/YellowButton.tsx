interface ButtonProps {
  handleClick: () => void;
  buttonName: string;
}

export const YellowButton: React.FC<ButtonProps> = ({
  handleClick,
  buttonName,
}) => {
  return (
    <button
      type="button"
      className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl 
			backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
      onClick={handleClick}
    >
      {buttonName}
    </button>
  );
};
