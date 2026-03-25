import {prisma } from "@/app/lib/prisma";
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
    // 1. 학생 정보 저장
const student = await prisma.student.create({
  data: {
    department: body.department,
    admissionYear: Number(body.admissionYear),
    currentYear: Number(body.currentYear),
    careerGoal: body.careerGoal,
    freeDay: body.freeDay,
    preferredTime: body.preferredTime,
  },
});

// 2. 진단 결과 저장
await prisma.diagnosisResult.create({
  data: {
    studentId: student.id,
    totalCredits: total,
    majorRequiredCredits: majorRequired,
    majorElectiveCredits: majorElective,
    generalCredits: general,

    passedTotal: total >= graduationRule.total,
    passedMajorRequired:
      majorRequired >= graduationRule.majorRequired,
    passedMajorElective:
      majorElective >= graduationRule.majorElective,
    passedGeneral:
      general >= graduationRule.general,

    부족Total: Math.max(0, graduationRule.total - total),
    부족MajorRequired: Math.max(
      0,
      graduationRule.majorRequired - majorRequired
    ),
    부족MajorElective: Math.max(
      0,
      graduationRule.majorElective - majorElective
    ),
    부족General: Math.max(
      0,
      graduationRule.general - general
    ),
  },
});

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