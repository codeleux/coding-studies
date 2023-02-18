// setTimeout(() => {
//     console.log('hello world');
// }, 1000);

const getUsuarioById = (id, callback) => {
    const user = {
        id,
        name: 'Fernando'
    }

    setTimeout(() => {
        callback(user);
    }, 1500)
}

getUsuarioById(10, user => {
    console.log(user.id);
    console.log(user.name.toUpperCase());
});