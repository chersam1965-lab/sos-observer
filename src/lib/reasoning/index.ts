export * from "./types";
export { reason, buildPremises, aggregateConclusion } from "./engine";
export { explain, type ExplanationStep } from "./explain";
export { getRules, registerRule } from "./rules";
export {
  getReasoningRepository,
  setReasoningRepository,
} from "./repository";
export { LocalStorageReasoningRepository } from "./localStorageRepository";
export { ReasoningService } from "./service";
