const execspawn = require('npm-execspawn');

module.exports = {
    install() {

        const child = execspawn('npm i -S --silent');
        
        child.stderr.pipe(process.stderr);
        child.stdout.pipe(process.stdout);

        
    }
};
