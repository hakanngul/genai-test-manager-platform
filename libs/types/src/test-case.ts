export enum TestStatus {
  DRAFT = 'draft',
  READY = 'ready',
  DEPRECATED = 'deprecated',
}

export enum TestFramework {
  PLAYWRIGHT = 'playwright',
  CYPRESS = 'cypress',
  JEST = 'jest',
}

export interface TestCase {
  id: string;
  title: string;
  description: string;
  prompt: string;
  code: string;
  status: TestStatus;
  framework: TestFramework;
  projectId: string;
  createdById: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTestCaseDto {
  title: string;
  description: string;
  prompt: string;
  projectId: string;
  framework: TestFramework;
}

export interface UpdateTestCaseDto {
  title?: string;
  description?: string;
  prompt?: string;
  code?: string;
  status?: TestStatus;
  framework?: TestFramework;
}

export interface GenerateTestCodeDto {
  prompt: string;
  framework: TestFramework;
  projectId: string;
}
