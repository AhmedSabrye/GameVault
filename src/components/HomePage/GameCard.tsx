import { Calendar, ExternalLink, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type{ Game } from "@/utils/fetchData";

interface GameCardProps {
  game: Game;
  viewMode: "grid" | "list";
  onClick: () => void;
}

const GameCard = ({ game, viewMode, onClick }: GameCardProps) => {
  const handlePlayGame = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(game.game_url, "_blank");
  };

  if (viewMode === "list") {
    return (
      <Card
        className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group overflow-hidden py-0"
        onClick={onClick}
      >
        <CardContent className="p-4">
          <div className="flex gap-4 flex-col  md:flex-row">
            <div className="relative md:w-auto w-full md:h-48 rounded-lg overflow-hidden">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {game.title}
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-purple-600/20 text-purple-300"
                >
                  {game.genre}
                </Badge>
              </div>

              <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                {game.short_description}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Building className="h-3 w-3" />
                  {game.publisher}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(game.release_date).getFullYear()}
                </div>
                <Badge
                  variant="outline"
                  className="border-gray-600 text-gray-400"
                >
                  {game.platform}
                </Badge>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                size="sm"
                onClick={handlePlayGame}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Play
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group overflow-hidden hover:scale-105 py-0"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 bg-purple-600/80 text-white"
        >
          {game.genre}
        </Badge>
        <Button
          size="sm"
          onClick={handlePlayGame}
          className="absolute bottom-3 right-3 bg-green-600/90 hover:bg-green-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          Play
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {game.title}
        </h3>

        <p className="text-gray-400 text-sm mb-3 line-clamp-3">
          {game.short_description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Building className="h-3 w-3" />
            {game.publisher}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(game.release_date).getFullYear()}
          </div>
        </div>

        <div className="mt-3">
          <Badge variant="outline" className="border-gray-600 text-gray-400">
            {game.platform}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
