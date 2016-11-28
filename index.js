module.exports = {
  presets: ['eslatest-node6'],
  plugins: [
    ['transform-object-rest-spread', { useBuiltIns: true }]
  ],
  env: {
    test: {
      plugins: [
        'istanbul',
      ],
    }
  },
}
