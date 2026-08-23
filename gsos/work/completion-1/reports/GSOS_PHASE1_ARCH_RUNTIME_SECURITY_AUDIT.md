# GSOS Phase 1 Architecture / Runtime / Security Audit

- HEAD: 5b044c16d55fcc30158300dd8a28ea8ad9e546c9
- BRANCH: gsos-mobile-lab
- DATE: 2026-08-13 18:01:34+0100

## Architecture

### gsos/runtime
gsos/runtime/automation/automation.sh
gsos/runtime/config/runtime.conf
gsos/runtime/controller/runtime-controller.sh
gsos/runtime/decision/decision-engine.sh
gsos/runtime/dispatcher/runtime-dispatcher.sh
gsos/runtime/eventbus/events.bus
gsos/runtime/eventbus/publish.sh
gsos/runtime/eventbus/subscribe.sh
gsos/runtime/events/logger.sh
gsos/runtime/events/runtime-events.log
gsos/runtime/execution/execution-engine.s
gsos/runtime/execution/execution-engine.sh
gsos/runtime/health-check.sh
gsos/runtime/lifecycle/lifecycle.sh
gsos/runtime/listeners/decision-listener.sh
gsos/runtime/listeners/recovery-listener.sh
gsos/runtime/logs/runtime-health.log
gsos/runtime/logs/runtime.log
gsos/runtime/metrics/metrics.state
gsos/runtime/metrics/update.sh
gsos/runtime/monitor/rebuild-monitor.sh
gsos/runtime/monitor/runtime-monitor.sh
gsos/runtime/policy/policy-engine.sh
gsos/runtime/recovery/recovery.sh
gsos/runtime/router/router.s
gsos/runtime/router/router.sh
gsos/runtime/runtime-controller.sh
gsos/runtime/scheduler/runtime-scheduler.sh
gsos/runtime/scheduler/scheduler.s
gsos/runtime/scheduler/scheduler.sh
gsos/runtime/self-documentation/gsos-self-document.sh
gsos/runtime/service/health.sh
gsos/runtime/service/runtime-loop.sh
gsos/runtime/service/start.sh
gsos/runtime/service/stop.sh
gsos/runtime/state/manager.sh
gsos/runtime/state/runtime.state
gsos/runtime/state/service.state
gsos/runtime/supervisor/supervisor.sh
gsos/runtime/supervisor/watchdog.sh
gsos/runtime/validate/config-validator.sh
gsos/runtime/validate/runtime-health.sh
gsos/runtime/validate/runtime-validator.sh

### gsos/runtime-v2
gsos/runtime-v2/audit/stable-baseline.txt
gsos/runtime-v2/decision/decision-engine.sh
gsos/runtime-v2/dispatcher/runtime-dispatcher.sh
gsos/runtime-v2/eventbus/eventbus.sh
gsos/runtime-v2/events/event.log
gsos/runtime-v2/events/runtime-events.log
gsos/runtime-v2/events/s02_health.log
gsos/runtime-v2/events/s02_orchestrator.log
gsos/runtime-v2/events/s03_trace.log
gsos/runtime-v2/events/s04_health.log
gsos/runtime-v2/events/s04_no_fault_trace.log
gsos/runtime-v2/events/s05_health.log
gsos/runtime-v2/events/s05_trace.log
gsos/runtime-v2/events/s06_health.log
gsos/runtime-v2/events/s06_trace.log
gsos/runtime-v2/events/s07_doc_audit.log
gsos/runtime-v2/execution/execution-engine.sh
gsos/runtime-v2/health/health-check.sh
gsos/runtime-v2/kernel/kernel.sh
gsos/runtime-v2/logs/execution.log
gsos/runtime-v2/orchestrator/runtime-orchestrator.sh
gsos/runtime-v2/orchestrator/runtime-orchestrator.sh.bak
gsos/runtime-v2/policy/policy-engine.sh
gsos/runtime-v2/recovery/recovery-controller.sh
gsos/runtime-v2/recovery/recovery-controller.sh.bak
gsos/runtime-v2/scheduler/runtime-scheduler.sh
gsos/runtime-v2/services/service-manager.sh
gsos/runtime-v2/state-manager/state-manager.sh
gsos/runtime-v2/state/decision.state
gsos/runtime-v2/state/execution.state
gsos/runtime-v2/state/policy.state
gsos/runtime-v2/state/service.state
gsos/runtime-v2/supervisor/supervisor.sh
gsos/runtime-v2/watchdog/watchdog.sh

### gsos/security
gsos/security/security-audit.sh

### gsos/reports
gsos/reports/GSOS-AUDIT-REPORT.md
gsos/reports/GSOS-SECURITY-REPORT.md

### gsos/executive
gsos/executive/logs/session-20260804-185354.log
gsos/executive/session.sh
gsos/executive/start.sh
gsos/executive/status.sh
gsos/executive/status.state

### gsos/docs
gsos/docs/FOUNDING_CHARTER_AR.md
gsos/docs/s08/.keep
gsos/docs/s08/CHARTER_BASELINE_METADATA.txt
gsos/docs/s08/FOUNDING_CHARTER_AR.baseline.2026-08-11_00-35-11_CET.md
gsos/docs/s08/FOUNDING_CHARTER_GSOS_S08_DRAFT_AR.md
gsos/docs/s08/WORKSPACE_METADATA.txt

## Runtime source candidates

## Security source candidates
gsos/security/security-audit.sh

## Existing tests
./src/components/ui/aspect-ratio.tsx
./src/lib/analysis/__tests__/localStorageRepository.test.ts
./src/lib/analysis/__tests__/service.test.ts
./src/lib/knowledge/__tests__/engine.test.ts
./src/lib/knowledge/__tests__/generator.test.ts
./src/lib/knowledge/__tests__/service.test.ts
./src/lib/pilot/__tests__/localStorageRepository.test.ts
./src/lib/pilot/__tests__/service.test.ts
./src/lib/reasoning/__tests__/engine.test.ts
./src/lib/reasoning/__tests__/explain.test.ts
./src/lib/reasoning/__tests__/rules.test.ts
./src/lib/reasoning/__tests__/service.test.ts
./src/lib/scientific/__tests__/localStorageRepository.test.ts
./src/lib/scientific/__tests__/service.test.ts
./vitest.config.ts

## Package scripts
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
