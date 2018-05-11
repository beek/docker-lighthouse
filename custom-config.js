module.exports = {
    passes: [{
      recordTrace: true,
      pauseAfterLoadMs: 5000,
      useThrottling: true,
      gatherers: [],
    }],
  
    audits: [
      'first-interactive',
    ]
  };
  
