function skillsMemeber() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        details: function () {
            this.skills.forEach(function (skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };
    member.details();
}