// Export Webpack configuration object
module.exports = {
   module: {
      rules: [
         {
            // Apply this rule to files ending in .js or .mjs
            test: /\.m?js$/,

            // Exclude all files in node_modules to improve build performance
            exclude: /node_modules/,

            use: {
               // Use Babel loader to transpile JavaScript files
               loader: 'babel-loader',

               options: {
                  // Presets define sets of Babel plugins

                  // @babel/preset-react: Transforms JSX into JS (React.createElement calls)
                  // @babel/preset-env: Transforms modern JS into ES5 based on browser compatibility
                  presets: ['@babel/preset-react', '@babel/preset-env'],

                  // Plugins provide additional Babel transformations

                  // @babel/plugin-transform-runtime:
                  // - Reduces duplication of helper functions across files
                  // - Enables re-use of Babel's injected helper code via imports
                  // - Avoids polluting global scope, supports async/await
                  plugins: ['@babel/plugin-transform-runtime'],
               }
            }
         }
      ]
   }
};
