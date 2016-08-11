module.exports = {
    install() {
        'use strong';

        const execspawn = require('npm-execspawn');
        const child = execspawn('npm i -S --silent');

        child.stderr.pipe(process.stderr);
        child.stdout.pipe(process.stdout);

    }
};
