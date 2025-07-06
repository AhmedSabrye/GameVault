
import { Gamepad2 } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <Gamepad2 className="h-12 w-12 text-purple-400 animate-pulse" />
        <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-purple-400/30 border-t-purple-400 animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-400 animate-pulse">Loading amazing games...</p>
    </div>
  );
};

export default LoadingSpinner;
