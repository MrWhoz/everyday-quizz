main();

function main() {
    var n = 6;
    var scope = [[1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0]];
    var sum = 0;
    var checkAround = function (scope, x, y) {
        scope[x][y] = 0;
        if (x >= scope.length - 1 || y >= scope.length - 1) return scope;
        else if (x < 0 || y < 0) return scope;
        else if (x >= 0 && y >= 0 && x < scope.length - 1 && y < scope.length - 1) {
            if (scope[x + 1][y]) scope = checkAround(scope, x + 1, y);
            if (scope[x][y + 1]) scope = checkAround(scope, x, y + 1);
            if (scope[x + 1][y + 1]) scope = checkAround(scope, x + 1, y + 1);
            if (x > 0) {
                if (scope[x - 1][y + 1]) scope = checkAround(scope, x - 1, y + 1);
                if (scope[x - 1][y]) scope = checkAround(scope, x - 1, y);
            }
            if (y > 0) {
                if (scope[x + 1][y - 1]) scope = checkAround(scope, x + 1, y - 1);
                if (scope[x][y - 1]) scope = checkAround(scope, x, y - 1);
            }
            if (x > 0 && y > 0)
                if (scope[x - 1][y - 1]) scope = checkAround(scope, x - 1, y - 1);
        }
        return scope;

    }
    for (var x = 0; x < n; x++) {
        for (var y = 0; y < n; y++) {
            let k = scope[x][y];
            if (k === 1) {
                scope = checkAround(scope, x, y);
                sum++;
                console.log(scope, sum)
            }
        }

    }
    console.log(sum);
}
