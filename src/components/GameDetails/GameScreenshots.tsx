import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Screenshot {
  id: number;
  image: string;
}

interface GameScreenshotsProps {
  screenshots: Screenshot[];
}

const GameScreenshots = ({ screenshots }: GameScreenshotsProps) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<string>("");

  useEffect(() => {
    if (screenshots && screenshots.length > 0) {
      setSelectedScreenshot(screenshots[0].image);
    }
  }, [screenshots]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <Card className="bg-slate-800/50 border-purple-500/20">
      <CardHeader>
        <CardTitle className="text-white">Screenshots</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <img
            src={selectedScreenshot}
            alt="Game screenshot"
            className="w-full aspect-auto object-cover rounded-lg"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto px-2">
          {screenshots.map((screenshot) => (
            <img
              key={screenshot.id}
              src={screenshot.image}
              alt="Game screenshot thumbnail"
              className={`w-20 h-12 object-cover rounded cursor-pointer transition-all ${
                selectedScreenshot === screenshot.image
                  ? "ring-2 ring-purple-500"
                  : "hover:ring-2 hover:ring-purple-400/50"
              }`}
              onClick={() => setSelectedScreenshot(screenshot.image)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GameScreenshots;
