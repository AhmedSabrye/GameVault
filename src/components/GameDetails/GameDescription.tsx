import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GameDescriptionProps {
  description: string;
}

const GameDescription = ({ description }: GameDescriptionProps) => {
  return (
    <Card className="bg-slate-800/50 border-purple-500/20">
      <CardHeader>
        <CardTitle className="text-white">About This Game</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default GameDescription;
