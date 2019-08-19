var chroma;
(function () {
    var x11Dictionary = {
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
    },
    from = {
        hex: function (arr) {
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
        },
        hexa: function (arr) {
            switch (arr.length) {
                case 4:
                    return [parseInt(arr[0] + arr[0], 16), parseInt(arr[1] + arr[1], 16), parseInt(arr[2] + arr[2], 16), Math.round(parseInt(arr[3] + arr[3], 16) / 2.55) / 100];
                default:
                    return [parseInt(arr[0] + arr[1], 16), parseInt(arr[2] + arr[3], 16), parseInt(arr[4] + arr[5], 16), Math.round(parseInt(arr[6] + arr[7], 16) / 2.55) / 100];
            }
        },
        hsl: function (arr) {
            return fromHsl(arr);
        },
        hsla: function (arr) {
            return fromHsl(arr).concat(Math.round(100 * arr[3]) / 100);
        },
        hsv: function (arr) {
            return fromHsv(arr);
        },
        hsva: function (arr) {
            return fromHsv(arr).concat(Math.round(100 * arr[3]) / 100);
        },
        rgb: function (arr) {
            return arr;
        },
        rgba: function (arr) {
            return [arr[0], arr[1], arr[2], Math.round(100 * arr[3]) / 100];
        },
        x11: function (arr) {
            return arr;
        }
    },
    to = {
        hex: function (obj) {
            return '#' + (obj.red < 16 ? '0' + obj.red.toString(16) : obj.red.toString(16)) + (obj.green < 16 ? '0' + obj.green.toString(16) : obj.green.toString(16)) + (obj.blue < 16 ? '0' + obj.blue.toString(16) : obj.blue.toString(16));
        },
        hexa: function (obj) {
            var alpha = (Math.round(obj.alpha * 255));
            return '#' + (obj.red < 16 ? '0' + obj.red.toString(16) : obj.red.toString(16)) + (obj.green < 16 ? '0' + obj.green.toString(16) : obj.green.toString(16)) + (obj.blue < 16 ? '0' + obj.blue.toString(16) : obj.blue.toString(16)) + (alpha < 16 ? '0' + alpha.toString(16) : alpha.toString(16));
        },
        hsl: function (obj) {
            var arr = toHsl(obj);
            return 'hsl(' + arr[0] + ', ' + arr[1] + '%, ' + arr[2] + '%)';
        },
        hsla: function (obj) {
            var arr = toHsl(obj);
            return 'hsla(' + arr[0] + ', ' + arr[1] + '%, ' + arr[2] + '%, ' + Math.round(obj.alpha * 100) / 100 + ')';
        },
        hsv: function (obj) {
            var arr = toHsv(obj);
            return 'hsv(' + arr[0] + ', ' + arr[1] + '%, ' + arr[2] + '%)';
        },
        hsva: function (obj) {
            var arr = toHsv(obj);
            return 'hsva(' + arr[0] + ', ' + arr[1] + '%, ' + arr[2] + '%, ' + Math.round(obj.alpha * 100) / 100 + ')';
        },
        rgb: function (obj) {
            return 'rgb(' + obj.red + ', ' + obj.green + ', ' + obj.blue + ')';
        },
        rgba: function (obj) {
            return 'rgba(' + obj.red + ', ' + obj.green + ', ' + obj.blue + ', ' + Math.round(obj.alpha * 100) / 100 + ')';
        },
        x11: function (obj) {
            var scores = {},
                nearest = 'snow';
            Object.keys(x11Dictionary).forEach(function (c) {
                scores[c] = (Math.abs(obj.red - x11Dictionary[c][0]) + Math.abs(obj.green - x11Dictionary[c][1]) + Math.abs(obj.blue - x11Dictionary[c][2])) / 3;
            });
            Object.keys(scores).forEach(function(c) {
                if (scores[nearest] > scores[c])
                    nearest = c;
            });
            return nearest;
        }
    };
    //  Chroma Object Function  //
    function chromaObject (arr) {
        var obj = {};
        //  Getter and Setters  //
        Object.defineProperties(obj, {
            alpha: {
                get: function () {
                    return this.values.alpha;
                },
                set: function (value) {
                    if (0 <= value && value <= 1)
                        this.values.alpha = value;
                    return value;
                }
            },
            blue: {
                get: function () {
                    return this.values.blue;
                },
                set: function (value) {
                    if (0 <= value && value <= 255)
                        this.values.blue = value;
                    return value;
                }
            },
            green: {
                get: function () {
                    return this.values.green;
                },
                set: function (value) {
                    if (0 <= value && value <= 255)
                        this.values.green = value;
                    return value;
                }
            },
            luminance: {
                get: function () {
                    var sR = this.red / 255,
                        sG = this.green / 255,
                        sB = this.blue / 255;
                    return {
                        r: sR <= 0.03928 ? sR / 12.92 : Math.pow((sR + 0.055) / 1.055, 2.4),
                        g: sG <= 0.03928 ? sG / 12.92 : Math.pow((sG + 0.055) / 1.055, 2.4),
                        b: sB <= 0.03928 ? sB / 12.92 : Math.pow((sB + 0.055) / 1.055, 2.4)
                    };
                }
            },
            red: {
                get: function () {
                    return this.values.red;
                },
                set: function (value) {
                    if (0 <= value && value <= 255)
                        this.values.red = value;
                    return value;
                }
            },
            values: {
                value: {
                    alpha: typeof arr[3] === 'number' && Number.isFinite(arr[3]) ? arr[3] : 1,
                    blue: arr[2],
                    green: arr[1],
                    red: arr[0]
                }
            }
        });
        //  Methods  //
        obj.to = function (model) {
            return to[model](obj);
        };
        if (arr === null)
            return null;
        return obj;
    }
    //  Auxillary Functions  //
    function fromHsl (values) {
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
        if (values[1] === 0) {
            r = g = b = values[2] / 100;
        } else {
            r = hue((values[0] % 360) / 360 + 1 / 3, values[1] / 100, values[2] / 100);
            g = hue((values[0] % 360) / 360, values[1] / 100, values[2] / 100);
            b = hue((values[0] % 360) / 360 - 1 / 3, values[1] / 100, values[2] / 100);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    function fromHsv (values) {
        var r,
            g,
            b,
            i = Math.floor(((values[0] % 360) / 360) * 6),
            f = ((values[0] % 360) / 360) * 6 - i,
            p = (values[2] / 100) * (1 - (values[1] / 100)),
            q = (values[2] / 100) * (1 - f * (values[1] / 100)),
            t = (values[2] / 100) * (1 - (1 - f) * (values[1] / 100));
        switch (i % 6) {
            case 0:
                r = values[2] / 100;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = values[2] / 100;
                b = p;
                break;
            case 2:
                r = p;
                g = values[2] / 100;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = values[2] / 100;
                break;
            case 4:
                r = t;
                g = p;
                b = values[2] / 100;
                break;
            case 5:
                r = values[2] / 100;
                g = p;
                b = q;
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    function toHsl (values) {
        var r = values.red / 255,
            g = values.green / 255,
            b = values.blue / 255,
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
    function toHsv (values) {
        var r = values.red / 255,
            g = values.green / 255,
            b = values.blue / 255,
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
            }
            h = h / 6;
        }
        return [Math.round(h * 36000) / 100, Math.round(s * 10000) / 100, Math.round(v * 10000) / 100];
    }
    //  Validation Functions  //
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
            if (0 > arr[i])
                return false;
            if (i === 3 && arr[i] > 1) {
                return false;
            } else if (arr[i] > 255) {
                return false;
            }
        }
        return true;
    }
    function validChroma (obj) {
        var k;
        for (k in obj)
            if (!/^alpha|blue|green|red$/i.test(k))
                return false;
        return validRgb([obj.red, obj.green, obj.blue, obj.alpha]);
    }

    //  CHROMA  FUNCTION  //
    chroma = function (model) {
        var parsed = chroma.parse(model);
        if (parsed && parsed.length > 1)
            return chromaObject(from[parsed[0]](parsed.slice(1)));
        return null;
    };
    //  Contrast Method
    chroma.contrast = function (color1, color2) {
        var c1 = chroma(color1),
            c2 = chroma(color2),
            l1,
            l2;
        if (c1 && c2) {
            l1 = (c1.red + c1.green + c1.blue) / 3 > (c2.red + c2.green + c2.blue) / 3 ? c1.luminance : c2.luminance;
            l2 = (c1.red + c1.green + c1.blue) / 3 > (c2.red + c2.green + c2.blue) / 3 ? c2.luminance : c1.luminance;
            return (0.2126 * l1.r + 0.7152 * l1.g + 0.0722 * l1.b + 0.05) / (0.2126 * l2.r + 0.7152 * l2.g + 0.0722 * l2.b + 0.05);
        }
        return null;
    }
    //  Parse Method  //
    chroma.parse = function (value) {
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
                        return validHsx(match) ? ['hsl'].concat(match) : null;
                    } else if (/^hsv\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsv'].concat(match) : null;
                    } else if (/^rgb\(/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? ['rgb'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsv'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? ['rgb'].concat(match) : null;
                    }
                } else if (match && match.length === 4) {
                    if (/^hsla\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsla'].concat(match) : null;
                    } else if (/^hsva\(/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsva'].concat(match) : null;
                    } else if (/^rgba\(/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? ['rgba'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(value) && percents(value) === 2) {
                        return validHsx(match) ? ['hsva'].concat(match) : null;
                    } else if (!/[a-z]+/g.test(value) && !value.includes('%')) {
                        return validRgb(match) ? ['rgba'].concat(match) : null;
                    }
                }
            } else if (/^(?:#|0x|0X)?([\da-f]{1,8}){1}$/g.test(value)) {
                match = value.replace(/^#|0x/ig, '').match(/([\da-f])/g);
                if (match && (match.length === 4 || match.length === 8)) {
                    return ['hexa'].concat(match);
                } else if (match && (match.length !== 5 && match.length !== 7)) {
                    return ['hex'].concat(match);
                }
            } else if (/^[a-z]{2,}$/g.test(value)) {
                match = x11Dictionary[value];
                if (match && match.length === 3)
                    return ['x11'].concat(match);
            }
        } else if (Array.isArray(value) && 2 < value.length && value.length < 5) {
            match = parse(value);
            if (match && percents(value) === 2) {
                if (match.length === 3) {
                    return validHsx(match) ? ['hsv'].concat(match) : null;
                } else if (match.length === 4) {
                    return validHsx(match) ? ['hsva'].concat(match) : null;
                }
            } else if (match && !percents(value)) {
                if (match.length === 3) {
                    return validRgb(match) ? ['rgb'].concat(match) : null;
                } else if (match.length === 4) {
                    return validRgb(match) ? ['rgba'].concat(match) : null;
                }
            }
        } else if (validChroma(value)) {
            return ['rgba'].concat(parse([value.red, value.green, value.blue, value.alpha]));
        }
        return null;
    };
    //  Validate Method  //
    chroma.validate = function (value) {
        var parsed = chroma.parse(value);
        if (parsed && parsed.length > 1)
            return true;
        return false;
    };
}());

export default chroma;