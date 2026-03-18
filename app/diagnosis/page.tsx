import Link from "next/link";

export default function DiagnosisPage() {
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
            진단 시작
          </Link>
          <Link href="/result" className="hover:text-indigo-600">
            샘플 결과
          </Link>
          <a href="#" className="hover:text-indigo-600">
            로그인
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
          학점 진단 시작하기
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          내 학사 정보를 입력하고
          <br />
          <span className="text-indigo-600">졸업 가능성을 확인하세요</span>
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          현재 학년, 이수 학점, 수강 과목, 시간표 선호 조건을 입력하면
          졸업 요건 충족 여부와 다음 학기 추천 과목, 장기 로드맵을 분석해드립니다.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">기본 정보</h3>
            <p className="mt-2 text-sm text-slate-500">
              졸업 요건 분석에 필요한 기본 정보를 입력해주세요.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">학과</label>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                  <option>컴퓨터공학과</option>
                  <option>인공지능학과</option>
                  <option>서비스디자인공학과</option>
                  <option>복수전공 예정</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">입학년도</label>
                <input
                  type="text"
                  placeholder="예: 2024"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">현재 학년</label>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                  <option>1학년</option>
                  <option>2학년</option>
                  <option>3학년</option>
                  <option>4학년</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">희망 진로</label>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                  <option>백엔드 개발</option>
                  <option>프론트엔드 개발</option>
                  <option>AI / 데이터</option>
                  <option>기획 / PM</option>
                  <option>아직 미정</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">이수 현황</h3>
            <p className="mt-2 text-sm text-slate-500">
              현재까지 취득한 학점과 주요 과목 이수 여부를 입력해주세요.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">총 취득 학점</label>
                <input
                  type="number"
                  placeholder="예: 54"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">전공 필수 이수 학점</label>
                <input
                  type="number"
                  placeholder="예: 18"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">전공 선택 이수 학점</label>
                <input
                  type="number"
                  placeholder="예: 15"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">교양 이수 학점</label>
                <input
                  type="number"
                  placeholder="예: 21"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-sm font-medium text-slate-700">이수한 주요 과목</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "컴퓨터개론",
                  "프로그래밍입문",
                  "자료구조",
                  "객체지향프로그래밍",
                  "이산수학",
                  "선형대수",
                  "알고리즘",
                  "데이터베이스",
                ].map((subject) => (
                  <label
                    key={subject}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    <input type="checkbox" className="h-4 w-4 accent-indigo-600" />
                    {subject}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">시간표 선호 조건</h3>
            <p className="mt-2 text-sm text-slate-500">
              AI 추천 시간표와 로드맵 생성에 반영됩니다.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">공강 희망 요일</label>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                  <option>금요일</option>
                  <option>수요일</option>
                  <option>없음</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">선호 시간대</label>
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500">
                  <option>오전 수업 선호</option>
                  <option>오후 수업 선호</option>
                  <option>상관없음</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["녹강 선호", "주 4일 수업", "수업 몰아듣기", "널널한 학기"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/result"
              className="rounded-2xl bg-indigo-600 px-6 py-3 text-center font-semibold text-white shadow-md transition hover:bg-indigo-700"
            >
              진단 결과 보기
            </Link>
            <Link
              href="/result"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              샘플 데이터로 체험하기
            </Link>
          </div>
        </div>

        <aside className="h-fit rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">입력 요약</h3>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              미리보기
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">학과</p>
              <p className="mt-1 font-semibold">컴퓨터공학과</p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">현재 학년</p>
              <p className="mt-1 font-semibold">2학년</p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">취득 학점</p>
              <p className="mt-1 font-semibold">54학점</p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">희망 진로</p>
              <p className="mt-1 font-semibold">AI / 데이터</p>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-sm font-medium text-emerald-700">예상 진단 안내</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                입력을 완료하면 부족 학점, 선수과목 누락 여부,
                다음 학기 추천 과목과 졸업까지의 로드맵을 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}