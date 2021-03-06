const { concurrent } = require('nps-utils')
const PORT = process.env.PORT || 6660

const folders = [
  'components',
  'hooks',
  'pages',
  'public',
  'styles',
  'svg',
  'utils',
]

module.exports = {
  scripts: {
    dev: {
      custom: `next dev`,
      script: `nps "dev.custom -p ${PORT}"`,
      description: `runs on ${PORT} by default`,
    },
    bureaucracy: {
      script: 'nps bureaucracy.enforceStaticVersions',
      enforceStaticVersions: `node scripts/force-static-versions.js`,
    },
    lint: {
      script: concurrent.nps('lint.core', 'lint.dry'),
      core: 'eslint --fix .',
      dry: 'twly --boring --lines 3',
    },
    meta: {
      script: 'nps meta.dep',
      log: `gitparty`,
      dependencies: {
        build: `depcruise -c .dependency-cruiser.js -T dot ${folders.join(
          ' '
        )} --progress -x node_modules | dot -T svg > dependency-graph.svg`,
        interactive: `cat dependency-graph.svg | depcruise-wrap-stream-in-html > dependency-graph.html`,
        script: 'nps meta.dep.build meta.dep.interactive',
      },
    },

    build: 'next build',
    start: 'next start',
    precommit: 'nps care',
    care: concurrent.nps('build', 'lint'),
    dx: concurrent.nps('lint', 'bureaucracy', 'meta'),
  },
}
