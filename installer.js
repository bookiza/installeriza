  function install() {
      'use strong';

      const installeriza = require('spawn-npm-install');

      return new Promise((resolve, reject) => {
          // fs.readFile(location, (err, data) => {
          //     if (err) {
          //         let msg = 'Did not find the arc!';
          //         reject(new Error(msg));
          //     }
          //     return resolve(data);
          // });

          installer(Object.keys(packageJson.dependencies), { stdio: 'inherit' }, err => {
              if (err)
                  reject(new Error(`Could\n't install modules:\n${err.message}`));
              else
                return  resolve(true);
          });

      });
  }


  module.exports.install = install;
