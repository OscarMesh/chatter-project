interface EmptyStateProps {
  text?: string;
  title: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ text, title }) => {
  return (
    <div
      className="
          h-[calc(100vh-70px)] 
          flex 
          justify-center 
          items-center 
          bg-white
        "
    >
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-400 text-sm">{text}</p>
      </div>
    </div>
  );
};

export default EmptyState;
