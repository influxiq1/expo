export default [
  {
    name: 'withoutCredentials',
    type: 'boolean',
    description: [
      "When set to `true`, EAS CLI won't require you to configure credentials when building the app. This comes in handy when you want to build debug binaries and the debug keystore is checked in to the repository. The default is `false`.",
    ],
  },
  {
    name: 'image',
    type: 'string',
    description: [
      'Image with build environment. [Learn more about it here](../../build-reference/infrastructure).',
    ],
  },
  {
    name: 'ndk',
    type: 'string',
    description: [ 'Version of Android NDK.' ],
  },
  {
    name: 'buildType',
    enum: ['app-bundle', 'apk'],
    description: [
      'Type of the artifact you want to build. It controls what Gradle task will be used, can be overridden by `gradleCommand` or `developmentClient: true` option.',
      ' - `app-bundle` - `:app:bundleRelease`',
      ' - `apk` - `:app:assembleRelease`',
    ],
  },
  {
    name: 'gradleCommand',
    type: 'string',
    description: [
      'Gradle task that will be used to build your project, e.g. `:app:assembleDebug` to build a debug binary.',
      "It's not recommended unless you need to run a task that `buildType` does not support, it takes priority over `buildType` and `developmentClient`.",
    ],
  },
  {
    name: 'artifactPath',
    type: 'string',
    description: [
      'Path (or pattern) where EAS Build is going to look for the build artifacts. EAS Build uses the `fast-glob` npm package for pattern matching ([see their README to learn more about the syntax you can use](https://github.com/mrmlnc/fast-glob#pattern-syntax)). The default value is `android/app/build/outputs/**/*.{apk,aab}`.'
    ],
  },
]
