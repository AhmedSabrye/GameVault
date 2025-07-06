import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface GameSidebarProps {
  minimumSystemRequirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  additionalInfo: {
    developer: string;
    publisher: string;
    releaseDate: string;
    genre: string;
    platform: string;
  };
}

const GameSidebar = ({
  minimumSystemRequirements,
  additionalInfo,
}: GameSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* System Requirements */}
      <Card className="bg-slate-800/50 border-purple-500/20">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            System Requirements
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-purple-400">OS</h3>
              <p className="text-gray-400">
                {minimumSystemRequirements?.os || "N/A"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-purple-400">Processor</h3>
              <p className="text-gray-400">
                {minimumSystemRequirements?.processor || "N/A"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-purple-400">Memory</h3>
              <p className="text-gray-400">
                {minimumSystemRequirements?.memory || "N/A"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-purple-400">Graphics</h3>
              <p className="text-gray-400">
                {minimumSystemRequirements?.graphics || "N/A"}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-purple-400">Storage</h3>
              <p className="text-gray-400">
                {minimumSystemRequirements?.storage || "N/A"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="bg-slate-800/50 border-purple-500/20">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Additional Information
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Developer</span>
              <span className="text-white">
                {additionalInfo.developer || "N/A"}
              </span>
            </div>
            <Separator className="bg-purple-500/20" />
            <div className="flex justify-between">
              <span className="text-gray-400">Publisher</span>
              <span className="text-white">
                {additionalInfo.publisher || "N/A"}
              </span>
            </div>
            <Separator className="bg-purple-500/20" />
            <div className="flex justify-between">
              <span className="text-gray-400">Release Date</span>
              <span className="text-white">
                {new Date(additionalInfo.releaseDate).toLocaleDateString() ||
                  "N/A"}
              </span>
            </div>
            <Separator className="bg-purple-500/20" />
            <div className="flex justify-between">
              <span className="text-gray-400">Genre</span>
              <span className="text-white">
                {additionalInfo.genre || "N/A"}
              </span>
            </div>
            <Separator className="bg-purple-500/20" />
            <div className="flex justify-between">
              <span className="text-gray-400">Platform</span>
              <span className="text-white">
                {additionalInfo.platform || "N/A"}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameSidebar;
