export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div>
          <h1 className="text-2xl font-bold text-indigo-600">수정시대</h1>
          <p className="text-sm text-slate-500">성신여대 학사 로드맵 도우미</p>
        </div>

        <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
          <a href="#" className="hover:text-indigo-600">기능</a>
          <a href="#" className="hover:text-indigo-600">로드맵</a>
          <a href="#" className="hover:text-indigo-600">진단 시작</a>
          <a href="#" className="hover:text-indigo-600">로그인</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            졸업 요건 · 시간표 · AI 추천
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            졸업까지의 길을
            <br />
            <span className="text-indigo-600">한눈에 설계하세요</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            수정시대는 복잡한 졸업 요건과 남은 학점, 선수과목 관계,
            다음 학기 시간표 계획까지 한 번에 정리해주는 학사 관리 앱입니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700">
              학점 진단 시작하기
            </button>
            <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
              샘플 결과 보기
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold">졸업 진단 미리보기</h3>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              정상 진행
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">취득 학점</p>
              <p className="mt-2 text-3xl font-bold">89</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">남은 학점</p>
              <p className="mt-2 text-3xl font-bold">41</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">전공 필수 잔여</p>
              <p className="mt-2 text-3xl font-bold">12</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">교양 부족</p>
              <p className="mt-2 text-3xl font-bold text-rose-500">3</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">다음 학기 추천 과목</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• 자료구조</li>
              <li>• 객체지향프로그래밍</li>
              <li>• 선형대수</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold">졸업 요건 자동 분석</h3>
            <p className="leading-7 text-slate-600">
              이수한 과목을 입력하면 전공, 교양, 필수 학점 현황을 자동으로
              계산하고 부족한 영역을 바로 보여줍니다.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold">시간표 시뮬레이션</h3>
            <p className="leading-7 text-slate-600">
              공강 요일, 수업 분산, 선호 시간대를 고려해 직접 시간표를
              배치하고 비교할 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold">AI 로드맵 추천</h3>
            <p className="leading-7 text-slate-600">
              진로 목표와 수강 이력을 바탕으로 다음 학기부터 졸업까지의
              수강 로드맵을 추천합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-indigo-600 px-8 py-12 text-white">
          <h2 className="text-3xl font-bold">이번 학기, 졸업 요건은 괜찮을까?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-indigo-100">
            학과 공지 PDF와 복잡한 이수 학점표를 직접 비교하지 않아도 됩니다.
            현재까지 들은 과목을 입력하고, 남은 학점과 다음 학기 계획을
            한 번에 확인해보세요.
          </p>
          <button className="mt-8 rounded-2xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-slate-100">
            지금 바로 진단하기
          </button>
        </div>
      </section>
    </main>
  );
}