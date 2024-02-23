const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 max-w-sm mx-auto bg-white rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <svg
            className="animate-spin h-3 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014.708 15H2c.85 3.757 3.943 6.85 7.291 7.292V17zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291A7.962 7.962 0 0119.292 9h2.707C21.15 5.243 18.057 2.15 13.709 1.708V6z"
            ></path>
          </svg>
          <span className="text-blue-500">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
