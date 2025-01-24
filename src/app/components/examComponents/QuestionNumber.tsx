"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "@/app/utils/AppContext";
import NumberSkeleton from "../skeleton/NumberSkeleton";

const QuestionNumber = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState<number>(1);
  const [skeleton, setSkeleton] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const { setQno, setQid, answered, flagged, qno } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSkeleton(true);
        const response = await fetch(`${API_URL}/api/questions`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setSkeleton(false);
      }
    };

    fetchData();
  }, [API_URL]);

  useEffect(() => {
    setSelected(qno);
  }, [qno]);

  const questionClick = (qno: number, qid: string) => {
    setSelected(qno);
    setQno(qno);
    setQid(qid);
  };

  return (
    <div className="p-2 w-screen md:h-full md:w-1/4">
      <div className="bg-white h-full px-5 py-6 rounded-md">
        <div className="pb-5 border-b-2">
          <p className="font-medium">Overview</p>
        </div>
        {!skeleton && (
          <div className="flex flex-wrap gap-2 mt-5">
            {data?.map((item: any, index: number) => {
              const itemId = item?.id;
              let backgroundColor = "bg-slate-100";

              if (answered[itemId]) {
                backgroundColor = "bg-green-600";
              }
              if (flagged?.includes(itemId)) {
                backgroundColor = "bg-orange-400";
              }
              if (answered[itemId] && flagged?.includes(itemId)) {
                backgroundColor = "bg-green-600";
              }
              return (
                <div
                  key={index + 1}
                  className={`w-7 h-7 md:w-10 md:h-10 rounded-full flex justify-center items-center cursor-pointer ${
                    selected === index + 1 ? "border-orange-400 border-2" : ""
                  } ${backgroundColor} inline-block`}
                  onClick={() => {
                    if (itemId) {
                      questionClick(index + 1, itemId);
                    }
                  }}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
        )}
        {skeleton && <NumberSkeleton />}
      </div>
    </div>
  );
};

export default QuestionNumber;
