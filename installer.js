const execspawn = require('npm-execspawn');

module.exports = {

    install() {
        execspawn('npm i -S --silent');
    }

};
