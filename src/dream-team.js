const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (members) {
        let dreamName = '';
        let listMembers = [];

        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] == 'string') {
                listMembers.push(members[i].trim().toUpperCase());
            }
        }

        listMembers.sort();
        listMembers.map(elem => dreamName += elem[0]);
        return dreamName;

    }

    return false;

};