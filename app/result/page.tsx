"use client";

import { useEffect, useState } from "react";

type StudentInfo = {
  school: string;
  department: string;
  grade: string;
  name: string;
  graduationRequirement: string;
  liberalArtsCredits: string;
  majorCredits: string;
};

export default function ResultPage() {
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("studentInfo");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setStudentInfo(parsedData);
    }
  }, []);

  if (!studentInfo) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md">
          <h1 className="text-2xl font-bold text-slate-800">결과 페이지</h1>
          <p className="mt-4 text-slate-600">
            저장된 학생 정보가 없습니다. 먼저 입력 페이지에서 정보를 입력해주세요.
          </p>
        </div>
      </main>
    );
  }

  const graduationRequirement = Number(studentInfo.graduationRequirement);
  const liberalArtsCredits = Number(studentInfo.liberalArtsCredits);
  const majorCredits = Number(studentInfo.majorCredits);

  const totalEarnedCredits = liberalArtsCredits + majorCredits;
  const remainingCredits = graduationRequirement - totalEarnedCredits;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-3xl font-bold text-slate-800">
          학점 계산 결과
        </h1>
        <p className="mb-8 text-sm text-slate-500">
          입력한 학생 정보를 바탕으로 현재 이수 현황을 보여줍니다.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">이름</p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {studentInfo.name}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">학교</p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {studentInfo.school}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">학과</p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {studentInfo.department}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">학년</p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {studentInfo.grade}학년
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">졸업요건 총 학점</p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {graduationRequirement}학점
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">교양 이수 학점</p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {liberalArtsCredits}학점
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">전공 이수 학점</p>
            <p className="mt-1 text-lg font-semibold text-slate-800">
              {majorCredits}학점
            </p>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="text-sm text-slate-500">총 이수 학점</p>
            <p className="mt-1 text-xl font-bold text-indigo-700">
              {totalEarnedCredits}학점
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-slate-100 p-5">
          <p className="text-sm text-slate-500">남은 학점</p>
          <p className="mt-2 text-2xl font-bold text-slate-800">
            {remainingCredits > 0
              ? `${remainingCredits}학점 남았습니다.`
              : "졸업요건을 충족했거나 초과했습니다."}
          </p>
        </div>
      </div>
    </main>
  );
}