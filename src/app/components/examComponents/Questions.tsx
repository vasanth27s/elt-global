"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "@/app/utils/AppContext";
import Timer from "./helperComponents/Timer";
import { ChevronLeft, ChevronRight, Flag } from "lucide-react";
import QuestionSkeleton from "../skeleton/QuestionSkeleton";

const Questions = () => {
  const [data, setData] = useState<any>([]);
  const [skeleton, setSkeleton] = useState(false);
  const [selected, setSelected] = useState<any | null>(null);

  const {
    qid,
    qno,
    answered,
    setAnswered,
    setFlagged,
    flagged,
    setQno,
    setModal,
    setQid,
  } = useAppContext();

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSkeleton(true);
        setSelected(null);
        const response = await fetch(`${API_URL}/api/questions`);
        const allQuestions = await response.json();
        const filteredData = allQuestions.filter(
          (item: any, i: number) => i + 1 === qno
        );
        setData(filteredData);
        if (answered[filteredData[0]?.id]) {
          setSelected(answered[filteredData[0]?.id]);
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      } finally {
        setSkeleton(false);
      }
    };

    fetchData();
  }, [qno, qid, API_URL, answered]);

  const selectAnswers = (answer: string) => {
    setAnswered({ ...answered, [qid]: answer });
    setSelected(answer);
  };

  const flaggedQ = () => {
    if (!flagged.includes(qid)) {
      setFlagged([...flagged, qid]);
    }
  };

  const prev = () => {
    if (qno !== 1) {
      setQno(qno - 1);
    }
  };

  const next = () => {
    if (qno !== 20) {
      setQno(qno + 1);
    }
  };

  const endExam = () => {
    setModal(true);
  };

  return (
    <div className="p-2 h-full md:pl-0 md:w-1/2">
      <div className="bg-white h-full rounded-md">
        <div className="p-5 flex flex-col md:justify-between h-full gap-5 md:gap-0">
          {!skeleton && (
            <div>
              <div className="flex justify-between items-center">
                <p>
                  MCQ-<span className="text-orange-500">Q{qno}</span>
                </p>
                <div className="bg-gray-50 py-1 px-2">
                  <Timer />
                </div>
              </div>
              <div className="mt-3 pb-3 border-b-2 border-slate-100 mb-3">
                <p className="font-serif text-2xl font-medium">
                  {data[0]?.question}
                </p>
              </div>
              {data[0]?.options.map((item: any, i: number) => (
                <div
                  key={item.id}
                  className={`flex gap-3 items-center mb-3 mt-7 cursor-pointer ${
                    selected === item.id
                      ? "bg-orange-500 p-1 rounded-xl w-52"
                      : ""
                  }`}
                  onClick={() => selectAnswers(item.id)}
                >
                  <div className="rounded-full bg-slate-100 w-5 h-5 flex justify-center items-center text-sm">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <p>{item.option}</p>
                </div>
              ))}
            </div>
          )}
          {skeleton && <QuestionSkeleton />}
          <div className="flex justify-between pt-4 border-t-2 border-slate-100">
            <div>
              <div
                className="bg-black w-24 h-8 md:w-28 md:h-8 flex justify-center items-center rounded-3xl cursor-pointer"
                onClick={endExam}
              >
                <p className="text-[10px] md:text-[13px] text-white">
                  End and Submit
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div
                className="bg-slate-200 w-12 h-6 md:w-28 md:h-8 flex justify-center items-center rounded-3xl cursor-pointer font-medium"
                onClick={prev}
              >
                <ChevronLeft />
                <p className="text-black hidden md:block">Previous</p>
              </div>
              <div
                className={`w-20 h-6 md:w-28 md:h-8 flex justify-center items-center gap-1 cursor-pointer font-medium rounded-3xl ${
                  flagged.includes(qid) ? "bg-orange-500" : "bg-slate-200"
                }`}
                onClick={flaggedQ}
              >
                <p>Flag</p>
                <Flag />
              </div>
              <div
                className="bg-slate-200 w-12 h-6 md:w-28 md:h-8 flex justify-center items-center font-medium rounded-3xl cursor-pointer"
                onClick={next}
              >
                <p className="text-black hidden md:block">Next</p>
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
