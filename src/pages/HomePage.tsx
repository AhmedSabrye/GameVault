import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Gamepad2 } from "lucide-react";
import { toast } from "sonner";
import { GameCard, GameHeader, GamePagination } from "@/components/HomePage";
import LoadingSpinner from "@/components/LoadingSpinner";
import { categories, platforms } from "@/utils/constant";
import { fetchGames } from "@/utils/fetchData";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 12;

  const {
    data: games = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["games", selectedCategory, selectedPlatform],
    queryFn: () => fetchGames(selectedCategory, selectedPlatform),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  useEffect(() => {
    if (error) {
      toast.error("Failed to load games. Please try again.");
    }
  }, [error]);

  const filteredGames = games.filter(
    (game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const currentGames = filteredGames.slice(startIndex, endIndex);

  // Reset to page 1 when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedPlatform]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <GameHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedPlatform={selectedPlatform}
        onPlatformChange={setSelectedPlatform}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalGames={filteredGames.length}
        currentRange={
          filteredGames.length > gamesPerPage
            ? {
                start: startIndex + 1,
                end: Math.min(endIndex, filteredGames.length),
              }
            : undefined
        }
        categories={categories}
        platforms={platforms}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {currentGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                viewMode={viewMode}
                onClick={() => navigate(`/game/${game.id}`)}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!isLoading && filteredGames.length > gamesPerPage && (
          <div className="mt-8">
            <GamePagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}

        {!isLoading && filteredGames.length === 0 && (
          <div className="text-center py-12">
            <Gamepad2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              No games found
            </h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
