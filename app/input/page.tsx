"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InputPage() {
  const router = useRouter();

  const [school, setSchool] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState("");
  const [name, setName] = useState("");
  const [graduationRequirement, setGraduationRequirement] = useState("");
  const [liberalArtsCredits, setLiberalArtsCredits] = useState("");
  const [majorCredits, setMajorCredits] = useState("");

  const handleSubmit = () => {
    const formData = {
      school,
      department,
      grade,
      name,
      graduationRequirement,
      liberalArtsCredits,
      majorCredits,
    };

    localStorage.setItem("studentInfo", JSON.stringify(formData));
    router.push("/result");
  };

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-3xl font-bold text-slate-800">
          학생 정보 입력
        </h1>
        <p className="mb-8 text-sm text-slate-500">
          학점 계산에 필요한 기본 정보를 입력해주세요.
        </p>

        <div className="grid gap-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              학교
            </label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="예: 성신여자대학교"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              학과
            </label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="예: 컴퓨터공학과"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              학년
            </label>
            <input
              type="number"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="예: 3"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              이름
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="예: 김가빈"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              졸업요건 총 학점
            </label>
            <input
              type="number"
              value={graduationRequirement}
              onChange={(e) => setGraduationRequirement(e.target.value)}
              placeholder="예: 130"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              교양 이수 학점
            </label>
            <input
              type="number"
              value={liberalArtsCredits}
              onChange={(e) => setLiberalArtsCredits(e.target.value)}
              placeholder="예: 35"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              전공 이수 학점
            </label>
            <input
              type="number"
              value={majorCredits}
              onChange={(e) => setMajorCredits(e.target.value)}
              placeholder="예: 54"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            결과 보기
          </button>
        </div>
      </div>
    </main>
  );
}