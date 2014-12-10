define(function (require, exports, module) {
    var Dijkstras = require('src/Dijkstras');

    describe('Unit test: Dijkstras Algo', function(){
        describe('calculate method', function(){
            it('calcs distance for 4-node', function() {
                var graph = {
                    0: {edges: {1: 1, 2: 4}},
                    1: {edges: {2: 2, 3: 6}},
                    2: {edges: {3: 3}},
                    3: {edges: {}}
                };
                var dijkstras = new Dijkstras(graph);
                var result = dijkstras.calc(0,3);
                expect(result[0]).toBe(6);
            });

            it('calcs distance for 6-node', function() {
                var graph = {
                    0: {edges: {4: 14, 5: 9, 1: 7}},
                    1: {edges: {0: 7, 5: 8, 2: 15}},
                    2: {edges: {1: 15, 5: 6, 3: 4}},
                    3: {edges: {2: 4, 4: 9}},
                    4: {edges: {3: 9, 0: 14, 5: 2}},
                    5: {edges: {0: 9, 1: 8, 2: 6, 4: 2}}
                };
                var dijkstras = new Dijkstras(graph);
                var result = dijkstras.calc(0,3);
                expect(result[0]).toBe(19);
            });

        })
    });
});