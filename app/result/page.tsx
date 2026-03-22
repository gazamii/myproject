"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type DiagnosisResult = {
  studentInfo: {
    department: string;
    admissionYear: string;
    currentYear: string;
    careerGoal: string;
    completedSubjects: string[];
    freeDay: string;
    preferredTime: string;
  };
  credits: {
    total: number;
    majorRequired: number;
    majorElective: number;
    general: number;
  };
  passed: {
    total: boolean;
    majorRequired: boolean;
    majorElective: boolean;
    general: boolean;
  };
  부족학점: {
    total: number;
    majorRequired: number;
    majorElective: number;
    general: number;
  };
};

export default function ResultPage() {
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  useEffect(() => {
    const savedResult = localStorage.getItem("diagnosisResult");

    if (savedResult) {
      setResult(JSON.parse(savedResult));
    }
  }, []);

  if (!result) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-indigo-600">진단 결과</h1>
          <p className="mt-4 text-slate-600">
            저장된 진단 결과가 없습니다.
          </p>

          <div className="mt-6">
            <Link
              href="/diagnosis"
              className="inline-block rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              진단 페이지로 돌아가기
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div>
          <Link href="/" className="block">
            <h1 className="text-2xl font-bold text-indigo-600">수정시대</h1>
            <p className="text-sm text-slate-500">성신여대 학사 로드맵 도우미</p>
          </Link>
        </div>

        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
          <Link href="/" className="hover:text-indigo-600">
            홈
          </Link>
          <Link href="/diagnosis" className="hover:text-indigo-600">
            다시 진단하기
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
          진단 완료
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          학사 진단 결과를
          <br />
          <span className="text-indigo-600">한눈에 확인하세요</span>
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          입력한 정보를 바탕으로 졸업 요건 충족 여부와 부족 학점을 정리했습니다.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">학생 정보</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">학과</p>
                <p className="mt-1 font-semibold">
                  {result.studentInfo.department || "-"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">입학년도</p>
                <p className="mt-1 font-semibold">
                  {result.studentInfo.admissionYear || "-"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">현재 학년</p>
                <p className="mt-1 font-semibold">
                  {result.studentInfo.currentYear || "-"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">희망 진로</p>
                <p className="mt-1 font-semibold">
                  {result.studentInfo.careerGoal || "-"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">공강 희망 요일</p>
                <p className="mt-1 font-semibold">
                  {result.studentInfo.freeDay || "-"}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">선호 시간대</p>
                <p className="mt-1 font-semibold">
                  {result.studentInfo.preferredTime || "-"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">이수 학점 현황</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">총 취득 학점</p>
                <p className="mt-1 text-lg font-semibold">
                  {result.credits.total}학점
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">전공 필수 학점</p>
                <p className="mt-1 text-lg font-semibold">
                  {result.credits.majorRequired}학점
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">전공 선택 학점</p>
                <p className="mt-1 text-lg font-semibold">
                  {result.credits.majorElective}학점
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">교양 학점</p>
                <p className="mt-1 text-lg font-semibold">
                  {result.credits.general}학점
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">졸업 요건 충족 여부</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div
                className={`rounded-2xl p-4 ${
                  result.passed.total
                    ? "bg-emerald-50 border border-emerald-200"
                    : "bg-rose-50 border border-rose-200"
                }`}
              >
                <p className="text-sm text-slate-500">총 학점</p>
                <p className="mt-1 font-semibold">
                  {result.passed.total ? "충족" : "미충족"}
                </p>
              </div>

              <div
                className={`rounded-2xl p-4 ${
                  result.passed.majorRequired
                    ? "bg-emerald-50 border border-emerald-200"
                    : "bg-rose-50 border border-rose-200"
                }`}
              >
                <p className="text-sm text-slate-500">전공 필수</p>
                <p className="mt-1 font-semibold">
                  {result.passed.majorRequired ? "충족" : "미충족"}
                </p>
              </div>

              <div
                className={`rounded-2xl p-4 ${
                  result.passed.majorElective
                    ? "bg-emerald-50 border border-emerald-200"
                    : "bg-rose-50 border border-rose-200"
                }`}
              >
                <p className="text-sm text-slate-500">전공 선택</p>
                <p className="mt-1 font-semibold">
                  {result.passed.majorElective ? "충족" : "미충족"}
                </p>
              </div>

              <div
                className={`rounded-2xl p-4 ${
                  result.passed.general
                    ? "bg-emerald-50 border border-emerald-200"
                    : "bg-rose-50 border border-rose-200"
                }`}
              >
                <p className="text-sm text-slate-500">교양</p>
                <p className="mt-1 font-semibold">
                  {result.passed.general ? "충족" : "미충족"}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">이수한 주요 과목</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {result.studentInfo.completedSubjects.length > 0 ? (
                result.studentInfo.completedSubjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700"
                  >
                    {subject}
                  </span>
                ))
              ) : (
                <p className="text-sm text-slate-500">선택한 과목이 없습니다.</p>
              )}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">부족 학점 요약</h3>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              요약
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">총 학점 부족</p>
              <p className="mt-1 text-lg font-semibold">
                {result.부족학점.total}학점
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">전공 필수 부족</p>
              <p className="mt-1 text-lg font-semibold">
                {result.부족학점.majorRequired}학점
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">전공 선택 부족</p>
              <p className="mt-1 text-lg font-semibold">
                {result.부족학점.majorElective}학점
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">교양 부족</p>
              <p className="mt-1 text-lg font-semibold">
                {result.부족학점.general}학점
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
              <p className="text-sm font-medium text-indigo-700">한줄 안내</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                부족 학점이 0이면 해당 영역은 현재 기준으로 충족된 상태예요.
                부족한 영역부터 다음 학기 계획을 세우면 돼요.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/diagnosis"
                className="block rounded-2xl bg-indigo-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
              >
                다시 진단하기
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}