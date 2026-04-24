const Separator = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex-grow border-t border-gray-400 ${className || ""}`}
    ></div>
  );
};

export default Separator;
