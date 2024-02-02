module.exports = {
    // Other configurations...
  
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/,
        },
        // Other rules...
      ],
    },
  };