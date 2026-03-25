-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "department" TEXT NOT NULL,
    "admissionYear" INTEGER NOT NULL,
    "currentYear" INTEGER NOT NULL,
    "careerGoal" TEXT NOT NULL,
    "freeDay" TEXT,
    "preferredTime" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "DiagnosisResult" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentId" INTEGER NOT NULL,
    "totalCredits" INTEGER NOT NULL,
    "majorRequiredCredits" INTEGER NOT NULL,
    "majorElectiveCredits" INTEGER NOT NULL,
    "generalCredits" INTEGER NOT NULL,
    "passedTotal" BOOLEAN NOT NULL,
    "passedMajorRequired" BOOLEAN NOT NULL,
    "passedMajorElective" BOOLEAN NOT NULL,
    "passedGeneral" BOOLEAN NOT NULL,
    "부족Total" INTEGER NOT NULL,
    "부족MajorRequired" INTEGER NOT NULL,
    "부족MajorElective" INTEGER NOT NULL,
    "부족General" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DiagnosisResult_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
