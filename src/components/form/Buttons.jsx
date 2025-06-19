import { Loader } from "lucide-react";

function Buttons({ isSubmitting, Label }) {
  return (
    <button
      disabled={isSubmitting}
      className="bg-black text-white p-2 rounded-md 
      hover:bg-gray-500 hover:scale-105 hover:cursor-pointer 
      hover:duration-300"
    >
      {isSubmitting ? (
        <div className="flex gap-2">
          <Loader className="animate-spin" />
          <p>Loading</p>
        </div>
      ) : (
        Label
      )}
    </button>
  );
}

export default Buttons;
