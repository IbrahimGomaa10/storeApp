import { Button } from "./components/ui/button";
import { useAppSelector } from "./hooks/hooks";

function App() {
  const name = useAppSelector((state) => state.themeState.name);
  return (
    <div>
      <h1 className="text-7xl font-bold ">{name}</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log("it worked!!!")}
      >
        Click Me
      </Button>
    </div>
  );
}
export default App;
