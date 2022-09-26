module.exports = {
    mongodbMemoryServerOptions: {
      binary: {
        version: '5.3.2',
        skipMD5: true,
      },
      instance: {
        dbName: 'test-book-store',
        port: 27017,
      },
      autoStart: false,
    },
  };