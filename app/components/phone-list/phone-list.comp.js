angular.module('phoneList')
    .component('phoneListComp', {
        templateUrl: 'app/components/phone-list/phone-list.tpl.html',
        controller: function PhoneListController(){
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.',
                },
                {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.',
                },
                {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.',
                },
            ];
        }
    })