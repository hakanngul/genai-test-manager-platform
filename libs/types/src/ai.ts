import { TestFramework } from './test-case';

export interface GenerationRequest {
  prompt: string;
  framework: TestFramework;
  additionalContext?: string;
}

export interface GenerationResponse {
  code: string;
  explanation: string;
  suggestions?: string[];
}
