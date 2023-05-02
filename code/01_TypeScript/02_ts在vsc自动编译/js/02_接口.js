// 接口：一种能力，一种约束而已
// 人家要这个数据，并且这个数据符合接口的规范
(() => {
    function showName(person) {
        return person.firstname + '_' + person.lastname;
    }
    const person = {
        firstname: "hu",
        lastname: "yiling"
    };
    console.log(showName(person));
})();
