function skillsMemeber() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    }
}