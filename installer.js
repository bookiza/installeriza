  function install() {
      'use strong';

      const execspawn = require('npm-execspawn');
      
      const installer = execspawn("npm i -S --silent");

      installer.stderr.pipe(process.stderr);
      installer.stdout.pipe(process.stdout);

  }


  module.exports.install = install;
