// Export route module
module.exports = (configs, utils, db, io, socket) => {
    obj = {};

    obj.socket = (testArg) => {
        console.log('idk', testArg);
    }

    return obj;
}