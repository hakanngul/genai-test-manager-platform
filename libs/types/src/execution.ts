export enum ExecutionStatus {
  QUEUED = 'queued',
  RUNNING = 'running',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export interface TestExecution {
  id: string;
  testCaseId: string;
  status: ExecutionStatus;
  startedAt: Date | null;
  completedAt: Date | null;
  executedById: string;
  stdout: string | null;
  stderr: string | null;
  result: TestResult | null;
  duration: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TestResult {
  passed: boolean;
  failed: boolean;
  skipped: boolean;
  totalTests: number;
  passedTests: number;
  failedTests: number;
  skippedTests: number;
  screenshots?: string[];
  errors?: string[];
}

export interface ExecuteTestDto {
  testCaseId: string;
}

export interface ExecutionResult {
  status: ExecutionStatus;
  stdout: string | null;
  stderr: string | null;
  result: TestResult | null;
  duration: number | null;
}
