export default {
  base: '.src', // Makes relative paths work when deployed
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
}