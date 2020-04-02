module.exports = {
  name: 'flow-cms-be',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/flow-cms-be',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
