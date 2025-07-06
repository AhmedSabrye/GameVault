import { Search, Grid, List, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FilterSelect from "@/components/HomePage/FilterSelect";

interface GameHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  selectedPlatform: string;
  onPlatformChange: (value: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  totalGames: number;
  currentRange?: { start: number; end: number };
  categories: string[];
  platforms: string[];
}

const GameHeader = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedPlatform,
  onPlatformChange,
  viewMode,
  onViewModeChange,
  totalGames,
  currentRange,
  categories,
  platforms,
}: GameHeaderProps) => {
  return (
    <header className="bg-black/50 backdrop-blur-md border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Gamepad2 className="h-8 w-8 text-purple-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GameVault
            </h1>
          </div>
          <div className="text-sm text-gray-400">
            Discover amazing free-to-play games
          </div>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search games or genres..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <FilterSelect
            value={selectedCategory}
            onValueChange={onCategoryChange}
            options={categories}
            placeholder="Category"
          />

          <FilterSelect
            value={selectedPlatform}
            onValueChange={onPlatformChange}
            options={platforms}
            placeholder="Platform"
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-white">
            Found {totalGames} games
            {currentRange && (
              <span className="text-gray-400 ml-2">
                (Showing {currentRange.start}-{currentRange.end})
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => onViewModeChange("grid")}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => onViewModeChange("list")}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
