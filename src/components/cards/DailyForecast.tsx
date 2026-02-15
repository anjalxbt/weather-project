import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";

type Props = {};

export default function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 50, lon: 50 }),
  });

  return (
    <Card title="Daily forecast">
      <div className="flex flex-col gap-4">
        {data?.daily.map((day) => (
          <div key={day.dt} className="flex justify-between">
            <p>DATE</p>
            <img
              src={` https://openweathermap.org/payload/api/media/file/${day.weather[0].icon}.png`}
              className="size-8"
              alt="weather icon"
            />
            <p>{day.temp.day}</p>
            <p className="text-gray-500/75">{day.temp.min}</p>
            <p className="text-gray-500/75">{day.temp.max}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
