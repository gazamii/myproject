export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex max-w-6xl flex-col px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
            성신여대 학사 로드맵 도우미
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            졸업까지의 길을
            <br />
            <span className="text-indigo-600">한눈에 설계하는 앱</span>
          </h1>
          <p className="mb-8 text-lg leading-8 text-slate-600">
            수정시대는 복잡한 졸업 요건, 남은 학점, 선수과목 관계,
            시간표 계획까지 한 번에 정리해주는 학사 관리 서비스입니다.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="rounded-2xl bg-indigo-600 px-6 py-3 text-white shadow-md transition hover:bg-indigo-700">
              시작하기
            </button>
            <button className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-slate-700 transition hover:bg-slate-100">
              데모 보기
            </button>
          </div>
        </div>

        <div className="mt-12 w-full max-w-md rounded-3xl bg-white p-6 shadow-xl lg:mt-0">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">졸업 진단 미리보기</h2>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              정상 진행
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">취득 학점</p>
              <p className="mt-2 text-2xl font-bold">89</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">남은 학점</p>
              <p className="mt-2 text-2xl font-bold">41</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">전공 필수</p>
              <p className="mt-2 text-2xl font-bold">12</p>
            </div>
            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="text-sm text-slate-500">교양 부족</p>
              <p className="mt-2 text-2xl font-bold text-rose-500">3</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 p-4">
            <p className="text-sm text-slate-500">다음 학기 추천</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• 자료구조</li>
              <li>• 객체지향프로그래밍</li>
              <li>• 선형대수</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold">졸업 요건 자동 분석</h3>
            <p className="leading-7 text-slate-600">
              이수한 과목을 입력하면 전공, 교양, 필수 학점을 자동 계산하고
              부족한 영역을 바로 보여줍니다.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold">시간표 시뮬레이터</h3>
            <p className="leading-7 text-slate-600">
              직접 과목을 배치해보며 공강, 요일 선호, 수업 분산 정도를
              확인할 수 있습니다.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-xl font-semibold">AI 로드맵 추천</h3>
            <p className="leading-7 text-slate-600">
              진로와 선호 조건에 맞춰 다음 학기부터 졸업까지의 수강 로드맵을
              추천합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-indigo-600 px-8 py-12 text-white">
          <h2 className="text-3xl font-bold">이번 학기, 졸업에 문제 없을까?</h2>
          <p className="mt-4 max-w-2xl text-indigo-100 leading-7">
            학과 공지 PDF와 복잡한 이수 학점표를 직접 비교하지 않아도 됩니다.
            수정시대에서 현재 이수 현황을 입력하고 남은 과정을 한 번에
            확인하세요.
          </p>
          <button className="mt-8 rounded-2xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-slate-100">
            내 학점 진단 시작하기
          </button>
        </div>
      </section>
    </main>
  );
}