import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/cards/Card";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 50, lon: 50 }),
  });
  return (
    <>
      <div className="flex flex-col gap-8">
        <Card title="Current weather">
          {JSON.stringify(data?.current).slice(0, 100)}
        </Card>
        <Card title="Hourly forecast">
          {JSON.stringify(data?.hourly).slice(0, 100)}
        </Card>
        <Card title="Daily forecast">
          {JSON.stringify(data?.daily).slice(0, 100)}
        </Card>
      </div>
    </>
  );
}

export default App;
