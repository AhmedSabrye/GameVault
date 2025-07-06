import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { GameDetail } from "@/utils/fetchData";

interface GameOverviewProps {
  game: GameDetail;
}

const GameOverview = ({ game }: GameOverviewProps) => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/20">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">{game.title}</h1>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              variant="secondary"
              className="bg-purple-600/20 text-purple-300"
            >
              {game.genre}
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              {game.platform}
            </Badge>
          </div>

          <p className="text-gray-300 mb-6">{game.short_description}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div>
              <span className="font-semibold">Developer:</span> {game.developer}
            </div>
            <div>
              <span className="font-semibold">Publisher:</span> {game.publisher}
            </div>
            <div>
              <span className="font-semibold">Release Date:</span>{" "}
              {new Date(game.release_date).toLocaleDateString()}
            </div>
          </div>

          <div className="mt-6">
            <Button
              onClick={() => window.open(game.game_url, "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Play Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverview;
