var chroma;
(function () {
    var dictionary = {
        snow: [255, 250, 250], ghostwhite: [248, 248, 255], whitesmoke: [245, 245, 245],
        gainsboro: [220, 220, 220], floralwhite: [255, 250, 240], oldlace: [253, 245, 230],
        linen: [250, 240, 230], antiquewhite: [250, 235, 215], papayawhip: [255, 239, 213],
        blanchedalmond: [255, 235, 205], bisque: [255, 228, 196], peachpuff: [255, 218, 185],
        navajowhite: [255, 222, 173], moccasin: [255, 228, 181], cornsilk: [255, 248, 220],
        ivory: [255, 255, 240], lemonchiffon: [255, 250, 205], seashell: [255, 245, 238],
        honeydew: [240, 255, 240], mintcream: [245, 255, 250], azure: [240, 255, 255],
        aliceblue: [240, 248, 255], lavender: [230, 230, 250], lavenderblush: [255, 240, 245],
        mistyrose: [255, 228, 225], white: [255, 255, 255], black: [0, 0, 0],
        darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105], slategray: [112, 128, 144], slategrey: [112, 128, 144],
        lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], gray: [128, 128, 128],
        grey: [128, 128, 128], lightgrey: [211, 211, 211], lightgray: [211, 211, 211],
        midnightblue: [25, 25, 112], navy: [0, 0, 128], cornflowerblue: [100, 149, 237],
        darkslateblue: [72, 61, 139], slateblue: [106, 90, 205], mediumslateblue: [123, 104, 238],
        mediumblue: [0, 0, 205], royalblue: [65, 105, 225], blue: [0, 0, 255],
        dodgerblue: [30, 144, 255], deepskyblue: [0, 191, 255], skyblue: [135, 206, 235],
        lightskyblue: [135, 206, 250], steelblue: [70, 130, 180], lightsteelblue: [176, 196, 222],
        lightblue: [173, 216, 230], powderblue: [176, 224, 230], paleturquoise: [175, 238, 238],
        darkturquoise: [0, 206, 209], mediumturquoise: [72, 209, 204], turquoise: [64, 224, 208],
        cyan: [0, 255, 255], lightcyan: [224, 255, 255], cadetblue: [95, 158, 160],
        mediumaquamarine: [102, 205, 170], aquamarine: [127, 255, 212], darkgreen: [0, 100, 0],
        darkolivegreen: [85, 107, 47], darkseagreen: [143, 188, 143], seagreen: [46, 139, 87],
        mediumseagreen: [60, 179, 113], lightseagreen: [32, 178, 170], palegreen: [152, 251, 152],
        springgreen: [0, 255, 127], lawngreen: [124, 252, 0], green: [0, 128, 0],
        chartreuse: [127, 255, 0], mediumspringgreen: [0, 250, 154], greenyellow: [173, 255, 47],
        limegreen: [50, 205, 50], yellowgreen: [154, 205, 50], forestgreen: [34, 139, 34],
        olivedrab: [107, 142, 35], darkkhaki: [189, 183, 107], khaki: [240, 230, 140],
        palegoldenrod: [238, 232, 170], lightgoldenrodyellow: [250, 250, 210], lightyellow: [255, 255, 224],
        yellow: [255, 255, 0], gold: [255, 215, 0], goldenrod: [218, 165, 32], darkgoldenrod: [184, 134, 11],
        rosybrown: [188, 143, 143], indianred: [205, 92, 92], saddlebrown: [139, 69, 19],
        sienna: [160, 82, 45], peru: [205, 133, 63], burlywood: [222, 184, 135],
        beige: [245, 245, 220], wheat: [245, 222, 179], sandybrown: [244, 164, 96],
        tan: [210, 180, 140], chocolate: [210, 105, 30], firebrick: [178, 34, 34],
        brown: [165, 42, 42], darksalmon: [233, 150, 122], salmon: [250, 128, 114],
        lightsalmon: [255, 160, 122], orange: [255, 165, 0], darkorange: [255, 140, 0],
        coral: [255, 127, 80], lightcoral: [240, 128, 128], tomato: [255, 99, 71],
        orangered: [255, 69, 0], red: [255, 0, 0], hotpink: [255, 105, 180],
        deeppink: [255, 20, 147], pink: [255, 192, 203], lightpink: [255, 182, 193],
        palevioletred: [219, 112, 147], maroon: [128, 0, 0], mediumvioletred: [199, 21, 133],
        magenta: [255, 0, 255], violet: [238, 130, 238], plum: [221, 160, 221],
        orchid: [218, 112, 214], mediumorchid: [186, 85, 211], darkorchid: [153, 50, 204],
        darkviolet: [148, 0, 211], blueviolet: [138, 43, 226], purple: [128, 0, 128],
        mediumpurple: [147, 112, 219], thistle: [216, 191, 216], darkgrey: [169, 169, 169],
        darkgray: [169, 169, 169], darkblue: [0, 0, 139], darkcyan: [0, 139, 139],
        darkmagenta: [139, 0, 139], darkred: [139, 0, 0], lightgreen: [144, 238, 144],
        aqua: [0, 255, 255], fuchsia: [255, 0, 255], indigo: [75, 0, 130],
        lime: [0, 255, 0], olive: [128, 128, 0], rebeccapurple: [102, 51, 153],
        silver: [192, 192, 192], teal: [0, 128, 128]
    };
    //  Validation Functions  //
    function validChroma (obj) {
        if (typeof obj !== 'object' || obj === null)
            return false;
        return Object.getPrototypeOf(obj) === Chroma.prototype;
    }
    function validHsx (arr) {
        var i;
        for (i = 0; i < arr.length; i = i + 1) {
            if (i && 0 > arr[i])
                return false;
            if (i === 3 && arr[i] > 1) {
                return false;
            } else if (i && arr[i] > 100) {
                return false;
            }
        }
        return true;
    }
    function validRgb (arr) {
        var i;
        for (i = 0; i < arr.length; i = i + 1) {
            if (i && 0 > arr[i])
                return false;
            if (i === 3 && arr[i] > 1) {
                return false;
            } else if (i && arr[i] > 255) {
                return false;
            }
        }
        return true;
    }
    function validModel (value) {
        var match;
        function percents (arr) {
            var i, c = 0;
            for (i = 0; i < arr.length; i = i + 1)
                if (typeof arr[i] === 'string' && arr[i].includes('%'))
                    c = c + 1
            return c;
        }
        function parse (arr) {
            var i, n, a = [];
            if (!arr)
                return [];
            for (i = 0; i < arr.length; i = i + 1) {
                n = parseFloat(arr[i]);
                if (typeof n !== 'number' || !Number.isFinite(n))
                    return [];
                a.push(n);
            }
            return a;
        }
        if (typeof value === 'string' && value.length) {
            if (value.includes(',')) {
                match = parse(value.match(/(-?\d{1,3}(\.?\d*)?)+/g));
                if (match && match.length === 3) {
                    if (/^hsl\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (/^hsv\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (/^rgb\(/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? true : false;
                    } else if (!/[a-z]+/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (!/[a-z]+/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? true : false;
                    }
                } else if (match && match.length === 4) {
                    if (/^hsla\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (/^hsva\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (/^rgba\(/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? true : false;
                    } else if (!/[a-z]+/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? true : false;
                    } else if (!/[a-z]+/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? true : false;
                    }
                }
            } else if (/^(?:#|0x|0X)?([\da-f]{1,8}){1}$/g.test(value)) {
                match = value.replace(/^#|0x/ig, '').match(/([\da-f])/g);
                if (match && (match.length === 4 || match.length === 8)) {
                    return true;
                } else if (match && (match.length !== 5 && match.length !== 7)) {
                    return true;
                }
            } else if (/^[a-z]{2,}$/g.test(value)) {
                match = dictionary[value];
                if (match && match.length === 3)
                    return true;
            }
        } else if (Array.isArray(value) && 2 < value.length && value.length < 5) {
            match = parse(value);
            if (match && percents(value) === 2) {
                if (match.length === 3) {
                    return validHsx(match) ? true : false;
                } else if (match.length === 4) {
                    return validHsx(match) ? true : false;
                }
            } else if (match && !percents(value)) {
                if (match.length === 3) {
                    return validRgb(match) ? true : false;
                } else if (match.length === 4) {
                    return validRgb(match) ? true : false;
                }
            }
        } else if (validChroma(value)) {
            return true;
        }
        return false;
    }
    //  Auxilary Functions  //
    function parseModel (model) {
        var match;
        function percents (arr) {
            var i, c = 0;
            for (i = 0; i < arr.length; i = i + 1)
                if (typeof arr[i] === 'string' && arr[i].includes('%'))
                    c = c + 1
            return c;
        }
        function parse (arr) {
            var i, n, a = [];
            if (!arr)
                return [];
            for (i = 0; i < arr.length; i = i + 1) {
                n = parseFloat(arr[i]);
                if (typeof n !== 'number' || !Number.isFinite(n))
                    return [];
                a.push(n);
            }
            return a;
        }
        if (typeof model === 'string' && model.length) {
            if (model.includes(',')) {
                match = parse(model.match(/(-?\d{1,3}(\.?\d*)?)+/g));
                if (match && match.length === 3) {
                    if (/^hsl\(/g.test(model) && percents(model) === 2) {
                        return validHsx(match) ? ['hsl'].concat(match) : null;
                    } else if (/^hsv\(/g.test(model) && percents(model) === 2) {
                        return validHsx(match) ? ['hsv'].concat(match) : null;
                    } else if (/^rgb\(/g.test(model) && !model.includes('%')) {
                        return validRgb(match) ? ['rgb'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(model) && percents(model) === 2) {
                        return validHsx(match) ? ['hsv'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(model) && !model.includes('%')) {
                        return validRgb(match) ? ['rgb'].concat(match) : null;
                    }
                } else if (match && match.length === 4) {
                    if (/^hsla\(/g.test(model) && percents(model) === 2) {
                        return validHsx(match) ? ['hsla'].concat(match) : null;
                    } else if (/^hsva\(/g.test(model) && percents(model) === 2) {
                        return validHsx(match) ? ['hsva'].concat(match) : null;
                    } else if (/^rgba\(/g.test(model) && !model.includes('%')) {
                        return validRgb(match) ? ['rgba'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(model) && percents(model) === 2) {
                        return validHsx(match) ? ['hsva'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(model) && !model.includes('%')) {
                        return validRgb(match) ? ['rgba'].concat(match) : null;
                    }
                }
            } else if (/^(?:#|0x|0X)?([\da-f]{1,8}){1}$/g.test(model)) {
                match = model.replace(/^#|0x/ig, '').match(/([\da-f])/g);
                if (match && (match.length === 4 || match.length === 8)) {
                    return ['hexa'].concat(match);
                } else if (match && (match.length !== 5 && match.length !== 7)) {
                    return ['hex'].concat(match);
                }
            } else if (/^[a-z]{2,}$/g.test(model)) {
                match = dictionary[model];
                if (match && match.length === 3)
                    return ['x11'].concat(match);
            }
        } else if (Array.isArray(model) && 2 < model.length && model.length < 5) {
            match = parse(model);
            if (match && percents(model) === 2) {
                if (match.length === 3) {
                    return validHsx(match) ? ['hsv'].concat(match) : null;
                } else if (match.length === 4) {
                    return validHsx(match) ? ['hsva'].concat(match) : null;
                }
            } else if (match && !percents(model)) {
                if (match.length === 3) {
                    return validRgb(match) ? ['rgb'].concat(match) : null;
                } else if (match.length === 4) {
                    return validRgb(match) ? ['rgba'].concat(match) : null;
                }
            }
        } else if (validChroma(model)) {
            return ['rgba'].concat(parse([model.red, model.green, model.blue, model.alpha]));
        }
        return null;
    }
    //  From Functions  //
    function fromHex (arr) {
        switch (arr.length) {
            case 1:
                return [parseInt(arr[0] + arr[0], 16), parseInt(arr[0] + arr[0], 16), parseInt(arr[0] + arr[0], 16)];
            case 2:
                return [parseInt(arr[0] + arr[1], 16), parseInt(arr[0] + arr[1], 16), parseInt(arr[0] + arr[1], 16)];
            case 3:
                return [parseInt(arr[0] + arr[0], 16), parseInt(arr[1] + arr[1], 16), parseInt(arr[2] + arr[2], 16)];
            default:
                return [parseInt(arr[0] + arr[1], 16), parseInt(arr[2] + arr[3], 16), parseInt(arr[4] + arr[5], 16)];
        }
    }
    function fromHexa (arr) {
        switch (arr.length) {
            case 4:
                return [parseInt(arr[0] + arr[0], 16), parseInt(arr[1] + arr[1], 16), parseInt(arr[2] + arr[2], 16), Math.round(parseInt(arr[3] + arr[3], 16) / 2.55) / 100];
            default:
                return [parseInt(arr[0] + arr[1], 16), parseInt(arr[2] + arr[3], 16), parseInt(arr[4] + arr[5], 16), Math.round(parseInt(arr[6] + arr[7], 16) / 2.55) / 100];
        }
    }
    function fromHsl (arr) {
        var r, g, b;
        function hue (t, s, l) {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
                p = 2 * l - q;
            t = t < 0 ? t + 1 : t;
            t = t > 1 ? t - 1 : t;
            if (t < 1 / 6) {
                return p + (q - p) * 6 * t;
            } else if (t < 1 / 2) {
                return q;
            } else if (t < 2 / 3) {
                return p + (q - p) * (2 / 3 - t) * 6;
            } else {
                return p;
            }
        }
        if (arr[1] === 0) {
            r = g = b = arr[2] / 100;
        } else {
            r = hue((arr[0] % 360) / 360 + 1 / 3, arr[1] / 100, arr[2] / 100);
            g = hue((arr[0] % 360) / 360, arr[1] / 100, arr[2] / 100);
            b = hue((arr[0] % 360) / 360 - 1 / 3, arr[1] / 100, arr[2] / 100);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    function fromHsla (arr) {
        return fromHsl(arr).concat(Math.round(100 * arr[3]) / 100);
    }
    function fromHsv (arr) {
        var r,
            g,
            b,
            i = Math.floor(((arr[0] % 360) / 360) * 6),
            f = ((arr[0] % 360) / 360) * 6 - i,
            p = (arr[2] / 100) * (1 - (arr[1] / 100)),
            q = (arr[2] / 100) * (1 - f * (arr[1] / 100)),
            t = (arr[2] / 100) * (1 - (1 - f) * (arr[1] / 100));
        switch (i % 6) {
            case 0:
                r = arr[2] / 100;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = arr[2] / 100;
                b = p;
                break;
            case 2:
                r = p;
                g = arr[2] / 100;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = arr[2] / 100;
                break;
            case 4:
                r = t;
                g = p;
                b = arr[2] / 100;
                break;
            case 5:
                r = arr[2] / 100;
                g = p;
                b = q;
                break;
            default:
                break;
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    function fromHsva (arr) {
        return fromHsv(arr).concat(Math.round(100 * arr[3]) / 100);
    }
    function fromRgba (arr) {
        return [arr[0], arr[1], arr[2], Math.round(100 * arr[3]) / 100];
    }
    function from (arr) {
        var dict = {hex: 0, hexa: 1, hsl: 2, hsla: 3, hsv: 4, hsva: 5, rgba: 6};
        switch (dict[arr[0]]) {
            case 0:
                return fromHex(arr.slice(1));
            case 1:
                return fromHexa(arr.slice(1));
            case 2:
                return fromHsl(arr.slice(1));
            case 3:
                return fromHsla(arr.slice(1));
            case 4:
                return fromHsv(arr.slice(1));
            case 5:
                return fromHsva(arr.slice(1));
            case 6:
                return fromRgba(arr.slice(1));
            default:
                return arr.slice(1);
        }
    }
    //  To Functions  //
    function toHex (model, channels) {
        var alpha = (Math.round(channels.alpha * 255));
        if (model === 'hexa')
            return '#' + (channels.red < 16 ? '0' + channels.red.toString(16) : channels.red.toString(16)) + (channels.green < 16 ? '0' + channels.green.toString(16) : channels.green.toString(16)) + (channels.blue < 16 ? '0' + channels.blue.toString(16) : channels.blue.toString(16)) + (alpha < 16 ? '0' + alpha.toString(16) : alpha.toString(16));
        return '#' + (channels.red < 16 ? '0' + channels.red.toString(16) : channels.red.toString(16)) + (channels.green < 16 ? '0' + channels.green.toString(16) : channels.green.toString(16)) + (channels.blue < 16 ? '0' + channels.blue.toString(16) : channels.blue.toString(16));

    }
    function toHsl (channels) {
        var r = channels.red / 255,
            g = channels.green / 255,
            b = channels.blue / 255,
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            d = max - min,
            h,
            s,
            l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        } else {
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    break;
            }
            h = h / 6;
        }
        return [Math.round(h * 36000) / 100,Math.round(s * 10000) / 100, Math.round(l * 10000) / 100];
    }
    function toHsv (channels) {
        var r = channels.red / 255,
            g = channels.green / 255,
            b = channels.blue / 255,
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            d = max - min,
            h,
            s = max === 0 ? 0 : d / max,
            v = max;
        if (max === min) {
            h = 0;
        } else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    break;
            }
            h = h / 6;
        }
        return [Math.round(h * 36000) / 100, Math.round(s * 10000) / 100, Math.round(v * 10000) / 100];
    }
    function toHsx (model, channels) {
        var arr = /^hsla?$/g.test(model) ? toHsl(channels) : toHsv(channels);
        if (/^hsla|hsva$/g.test(model))
            return model + '(' + arr[0] + ', ' + arr[1] + '%, ' + arr[2] + '%, ' + Math.round(channels.alpha * 100) / 100 + ')';
        return  model + '(' + arr[0] + ', ' + arr[1] + '%, ' + arr[2] + '%)';
    }
    function toRgb (model, channels) {
        if (model === 'rgba')
            return 'rgba(' + channels.red + ', ' + channels.green + ', ' + channels.blue + ', ' + Math.round(channels.alpha * 100) / 100 + ')';
        return  'rgb(' + channels.red + ', ' + channels.green + ', ' + channels.blue + ')';
    }
    function toX11 (channels) {
        var scores = {},
            nearest = 'snow';
        Object.keys(dictionary).forEach(function (color) {
            var channels = dictionary[color];
            scores[color] = (Math.abs(channels.red - channels[0]) + Math.abs(channels.green - channels[1]) + Math.abs(channels.blue - channels[2])) / 3;
        });
        Object.keys(scores).forEach(function(score) {
            if (scores[nearest] > scores[score])
                nearest = score;
        });
        return nearest;
    }
    function to (model, channels) {
        var dict = {hex: 0, hexa: 0, hsl: 1, hsla: 1, hsv: 1, hsva: 1, rgb: 2, rgba: 2};
        switch (dict[model]) {
            case 0:
                return toHex(model, channels);
            case 1:
                return toHsx(model, channels);
            case 2:
                return toRgb(model, channels);
            default:
                return toX11(channels);
        }
    }
    //  Chroma Object  //
    function Chroma (red, green, blue, alpha) {
        Object.defineProperties(this, {
            alpha: {
                get: function () {
                    return this.channels.alpha;
                },
                set: function (value) {
                    if (value >= 0 && value <= 1)
                        this.channels.alpha = value;
                    return value;
                }
            },
            blue: {
                get: function () {
                    return this.channels.blue;
                },
                set: function (value) {
                    if (value >= 0 && value <= 255)
                        this.channels.blue = value;
                    return value;
                }
            },
            channels: {
                value: {
                    alpha: typeof alpha === 'number' && Number.isFinite(alpha) ? alpha : 1,
                    blue: blue,
                    green: green,
                    red: red
                }
            },
            green: {
                get: function () {
                    return this.channels.green;
                },
                set: function (value) {
                    if (value >= 0 && value <= 255)
                        this.channels.green = value;
                    return value;
                }
            },
            luminance: {
                get: function () {
                    var sR = this.red / 255,
                        sG = this.green / 255,
                        sB = this.blue / 255,
                        R = sR <= 0.03928 ? sR / 12.92 : Math.pow((sR + 0.055) / 1.055, 2.4),
                        G = sG <= 0.03928 ? sG / 12.92 : Math.pow((sG + 0.055) / 1.055, 2.4),
                        B = sB <= 0.03928 ? sB / 12.92 : Math.pow((sB + 0.055) / 1.055, 2.4);
                    return 0.2126 * R + 0.7152 * G + 0.0722 * B + 0.05;
                }
            },
            red: {
                get: function () {
                    return this.channels.red;
                },
                set: function (value) {
                    if (value >= 0 && value <= 255)
                        this.channels.red = value;
                    return value;
                }
            },
            to: {
                value: function (model) {
                    if (typeof model === 'string' && /^hexa?|hsla?|hsva?|rgba?|x11$/ig.test(model))
                        return to(model, this.channels);
                    return null;
                }
            },
            toHex: {
                value: function () {
                    return to('hex', this.channels);
                }
            },
            toHexa: {
                value: function () {
                    return to('hexa', this.channels);
                }
            },
            toHsl: {
                value: function () {
                    return to('hsl', this.channels);
                }
            },
            toHsla: {
                value: function () {
                    return to('hsla', this.channels);
                }
            },
            toHsv: {
                value: function () {
                    return to('hsv', this.channels);
                }
            },
            toHsva: {
                value: function () {
                    return to('hsva', this.channels);
                }
            },
            toRgb: {
                value: function () {
                    return to('rgb', this.channels);
                }
            },
            toRgba: {
                value: function () {
                    return to('rgba', this.channels);
                }
            },
            toX11: {
                value: function () {
                    return to('x11', this.channels);
                }
            }
        });
    }
    //  Chroma Function  //
    chroma = function (model) {
        var channels;
        if (validModel(model)) {
            channels = from(parseModel(model));
            return new Chroma(channels[0], channels[1], channels[2], channels[3]);
        }
        return null;
    };
    //  Chroma Methods  //
    chroma.contrast = function (color1, color2) {
        var c1 = chroma(color1),
            c2 = chroma(color2);
        if (c1 && c2) 
            return (c1.luminance > c2.luminance ? c1.luminance : c2.luminance) / (c1.luminance > c2.luminance ? c2.luminance : c1.luminance);
        return null;
    };
    chroma.parse = function (value) {
        return parseModel(value)
    };
    chroma.validate = function (value) {
        return validModel(value);
    };
}());
export default chroma;