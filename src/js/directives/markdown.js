'use strict';

/** Markdown directive, converts Markdown String and renders the HTML inside the parent DIV
  * HTML is $compiled: AngularJS directives can be used inside the Markdown */
 angular.module('ngBlog.directives')
    .directive('markdown', function ($compile, showdown) {
        return {
            restrict: 'A',
            scope: { md: "=md", snippets: "=snippets" },
            link: function ($scope, elem) {
                var render = function () { elem.empty().append($compile(showdown.makeHtml($scope.md.data))($scope)); };
                $scope.$watch("md.data",  render);
                $scope.$watch("snippets.data", render);
            }
        }
    });
