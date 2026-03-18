import Link from "next/link";

export default function ResultPage() {
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
            결과
          </Link>
          <a href="#" className="hover:text-indigo-600">
            로그인
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <span className="inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
          진단 결과
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          지금 상태라면
          <br />
          <span className="text-indigo-600">졸업까지 안정적으로 진행 중이에요</span>
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          현재 입력된 학점과 이수 과목 기준으로 분석한 결과,
          졸업 요건은 대체로 정상 진행 중입니다. 다만 전공 필수와 교양 일부 영역은
          다음 학기부터 우선적으로 채우는 것이 좋습니다.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">종합 진단 요약</h3>
                <p className="mt-2 text-sm text-slate-500">
                  2024학번 컴퓨터공학과 · 2학년 1학기 기준 샘플 분석
                </p>
              </div>
              <span className="w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                정상 진행
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">총 취득 학점</p>
                <p className="mt-2 text-3xl font-bold">89</p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">남은 학점</p>
                <p className="mt-2 text-3xl font-bold">41</p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="text-sm text-slate-500">전공 필수 잔여</p>
                <p className="mt-2 text-3xl font-bold">12</p>
              </div>

              <div className="rounded-2xl bg-rose-50 p-5">
                <p className="text-sm text-rose-500">교양 부족</p>
                <p className="mt-2 text-3xl font-bold text-rose-500">3</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">영역별 이수 현황</h3>
            <p className="mt-2 text-sm text-slate-500">
              어떤 영역이 충분하고, 어디가 부족한지 한눈에 확인할 수 있어요.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">전공 필수</span>
                  <span className="text-slate-500">24 / 36학점</span>
                </div>
                <div className="h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-2/3 rounded-full bg-indigo-600"></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">전공 선택</span>
                  <span className="text-slate-500">27 / 36학점</span>
                </div>
                <div className="h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-3/4 rounded-full bg-indigo-500"></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">교양</span>
                  <span className="text-slate-500">27 / 30학점</span>
                </div>
                <div className="h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-[90%] rounded-full bg-amber-400"></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">졸업 총학점</span>
                  <span className="text-slate-500">89 / 130학점</span>
                </div>
                <div className="h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-[68%] rounded-full bg-emerald-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">다음 학기 추천 과목</h3>
            <p className="mt-2 text-sm text-slate-500">
              졸업 안정성과 진로 방향을 함께 고려한 추천입니다.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "자료구조",
                  desc: "알고리즘, 운영체제 등 다음 전공 과목의 기초가 되는 핵심 과목",
                  badge: "우선 추천",
                },
                {
                  title: "객체지향프로그래밍",
                  desc: "실무 개발 역량과 프로젝트 과목 연결에 유리한 전공 과목",
                  badge: "전공 필수",
                },
                {
                  title: "선형대수",
                  desc: "AI / 데이터 분야 진로를 고려할 때 미리 들어두면 좋은 수학 과목",
                  badge: "진로 연계",
                },
                {
                  title: "핵심교양 1과목",
                  desc: "부족한 교양 3학점을 보완해 졸업 리스크를 줄일 수 있는 선택",
                  badge: "부족 영역 보완",
                },
              ].map((course) => (
                <div key={course.title} className="rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold">{course.title}</h4>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                      {course.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">선수과목 체크</h3>
            <p className="mt-2 text-sm text-slate-500">
              이후 학기 수강 계획이 꼬이지 않도록 미리 확인해야 하는 과목 흐름입니다.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="font-medium text-amber-700">주의</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  자료구조를 듣지 않으면 다음 학기 알고리즘, 운영체제 추천 우선순위가 낮아질 수 있어요.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-medium text-slate-800">추천 흐름</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  프로그래밍입문 → 객체지향프로그래밍 → 자료구조 → 알고리즘 → 운영체제
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-indigo-600 px-8 py-8 text-white shadow-sm">
            <h3 className="text-2xl font-bold">AI 로드맵 추천</h3>
            <p className="mt-3 max-w-3xl leading-7 text-indigo-100">
              현재 이수 현황과 AI/데이터 진로 희망을 반영하면,
              다음 2개 학기는 전공 기초를 보강하고 이후 머신러닝·데이터베이스 과목으로
              확장하는 흐름이 가장 안정적입니다.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-indigo-100">3학년 1학기 추천</p>
                <p className="mt-2 font-semibold">자료구조 · 객체지향 · 교양 보완</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-indigo-100">3학년 2학기 추천</p>
                <p className="mt-2 font-semibold">알고리즘 · 데이터베이스 · 확률통계</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-sm text-indigo-100">4학년 확장 방향</p>
                <p className="mt-2 font-semibold">머신러닝 · 캡스톤 · 포트폴리오 프로젝트</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/diagnosis"
              className="rounded-2xl bg-indigo-600 px-6 py-3 text-center font-semibold text-white shadow-md transition hover:bg-indigo-700"
            >
              다시 진단하기
            </Link>

            <button
              type="button"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              로드맵 저장하기
            </button>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">진단 한줄 요약</h3>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Good
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">현재 상태</p>
                <p className="mt-1 font-semibold">졸업 가능성 높음</p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">가장 시급한 것</p>
                <p className="mt-1 font-semibold">전공 필수 12학점 보완</p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">교양 부족</p>
                <p className="mt-1 font-semibold">1과목 추가 권장</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">추천 액션</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <li>• 다음 학기에 자료구조, 객체지향프로그래밍 우선 수강</li>
              <li>• 교양 1과목 추가로 졸업 안정성 확보</li>
              <li>• AI/데이터 진로라면 선형대수·확률통계 연계 추천</li>
              <li>• 3학년부터 프로젝트형 과목 비중 확대 권장</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 className="text-xl font-semibold text-indigo-700">다음 단계</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              다음에는 이 결과 페이지를 실제 입력값과 연결해서,
              사용자가 입력한 데이터에 따라 숫자와 추천 과목이 바뀌게 만들면 돼.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}