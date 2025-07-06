import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import LoadingSpinner from "@/components/LoadingSpinner";
import { fetchGameDetails } from "@/utils/fetchData";
import {
  GameHeader,
  GameOverview,
  GameScreenshots,
  GameDescription,
  GameSidebar,
} from "@/components/GameDetails";

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: game,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchGameDetails(Number(id)),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !game) {
    toast.error("Failed to load game details");
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <GameHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <GameOverview game={game} />
            <GameScreenshots screenshots={game.screenshots} />
            <GameDescription description={game.description} />
          </div>

          <div className="lg:col-span-1">
            <GameSidebar
              minimumSystemRequirements={game.minimum_system_requirements}
              additionalInfo={{
                developer: game.developer,
                publisher: game.publisher,
                releaseDate: game.release_date,
                genre: game.genre,
                platform: game.platform,
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GameDetails;
