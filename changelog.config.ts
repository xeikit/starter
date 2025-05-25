import type { ChangelogConfig } from 'changelogen';

export default () =>
  ({
    types: {
      feat: { title: '✨ Enhancements', semver: 'minor' },
      perf: { title: '⚡️ Performance', semver: 'patch' },
      update: { title: '🎨 Improvements', semver: 'patch' },
      fix: { title: '🩹 Fixes', semver: 'patch' },
      hotfix: { title: '🚑 Critical Bug Fix', semver: 'patch' },
      refactor: { title: '♻️ Refactors', semver: 'patch' },
      delete: { title: '🔥 Deletion', semver: 'patch' },
      type: { title: '🏷️ Types', semver: 'patch' },
      deps: {title: '📦️ Dependencies', semver: 'patch' },
      docs: { title: '📝 Documentation' },
      test: { title: '✅ Tests' },
      chore: { title: '🔧 Chore' },
      ci: { title: '🤖 CI' },
    },
    templates: {
      commitMessage: ':bookmark: chore(release): v{{newVersion}}',
    },
  } satisfies Partial<ChangelogConfig>);
