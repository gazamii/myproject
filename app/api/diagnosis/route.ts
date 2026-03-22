import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const total = Number(body.totalCredits || 0);
    const majorRequired = Number(body.majorRequiredCredits || 0);
    const majorElective = Number(body.majorElectiveCredits || 0);
    const general = Number(body.generalCredits || 0);

    const graduationRule = {
      total: 130,
      majorRequired: 30,
      majorElective: 45,
      general: 30,
    };

    return NextResponse.json({
      studentInfo: {
        department: body.department,
        admissionYear: body.admissionYear,
        currentYear: body.currentYear,
        careerGoal: body.careerGoal,
        completedSubjects: body.completedSubjects ?? [],
        freeDay: body.freeDay,
        preferredTime: body.preferredTime,
      },
      credits: {
        total,
        majorRequired,
        majorElective,
        general,
      },
      passed: {
        total: total >= graduationRule.total,
        majorRequired: majorRequired >= graduationRule.majorRequired,
        majorElective: majorElective >= graduationRule.majorElective,
        general: general >= graduationRule.general,
      },
      부족학점: {
        total: Math.max(0, graduationRule.total - total),
        majorRequired: Math.max(0, graduationRule.majorRequired - majorRequired),
        majorElective: Math.max(0, graduationRule.majorElective - majorElective),
        general: Math.max(0, graduationRule.general - general),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "서버 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}