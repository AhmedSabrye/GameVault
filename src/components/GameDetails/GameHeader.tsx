import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const GameHeader = () => {
  return (
    <header className="bg-black/50 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4 flex items-start">
        <Link
          to="/"
          className="border-purple-500/30 text-white hover:bg-purple-600/20 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Games
        </Link>
      </div>
    </header>
  );
};

export default GameHeader;
