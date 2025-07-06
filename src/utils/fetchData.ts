const API_URL = "https://free-to-play-games-database.p.rapidapi.com/api";

const headers = {
  "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
};

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
}

export interface GameDetail extends Game {
  description: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: {
    id: number;
    image: string;
  }[];
}

export const fetchGames = async (
  category: string = "all",
  platform: string = "all"
): Promise<Game[]> => {
  const params = new URLSearchParams();
  if (category !== "all") params.append("category", category);
  if (platform !== "all") params.append("platform", platform);

  const response = await fetch(`${API_URL}/games?${params.toString()}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
};

export const fetchGameDetails = async (id: number): Promise<GameDetail> => {
  const response = await fetch(`${API_URL}/game?id=${id}`, { headers });

  if (!response.ok) {
    throw new Error("Failed to fetch game details");
  }

  return response.json();
};
