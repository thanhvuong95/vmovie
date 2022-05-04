import React, { FC, useEffect, useState } from "react";
import { SearchConfigResponse, SearchParams } from "../../shared/type";
import { ExploreResult } from "./ExploreResult";
interface ExploreFilterProp {
  options: SearchConfigResponse;
}
export const ExploreFilter: FC<ExploreFilterProp> = ({ options }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    size: 24,
    params: "",
    area: "",
    category: "",
    year: "",
    subtitles: "",
    order: "up",
  });

  const handleChange = (name: string, value: string) => {
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  useEffect(() => {
    setSearchParams((prev) => {
      return { ...prev, params: options.params };
    });
  }, [options]);

  return (
    <div className="">
      <div className="flex flex-wrap gap-4 py-8">
        {options.screeningItems.map((option, i) => (
          <select
            key={i}
            className="text-white bg-[#2a2f3a] rounded-md px-3 py-2 outline-none cursor-pointer"
            value={
              searchParams[option.items[0]?.screeningType as keyof SearchParams]
            }
            onChange={(e) =>
              handleChange(option.items[0].screeningType, e.target.value)
            }
          >
            {option.items.map((item, i) => (
              <option key={i} value={item.params}>
                {item.name}
              </option>
            ))}
          </select>
        ))}
      </div>
      <ExploreResult params={searchParams} />
    </div>
  );
};
