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
    validationModels = ['hex', 'hsx', 'rgb'],
    conversionModels = ['hex', 'hsl', 'hsv', 'rgb'],
    conversion = {
        hex: function (arr) {
            var value;
            if (validation.hex(arr)) {
                value = arr[0];
                switch (arr[0].length) {
                    case 1: // Hexidecimal shorthand a, returns aaaaaa
                        return [parseInt(value + value, 16), parseInt(value + value, 16), parseInt(value + value, 16), 1];
                    case 2: // Hexidecima shorthand ab, returns ababab
                        return [parseInt(value, 16), parseInt(value, 16), parseInt(value, 16), 1];
                    case 3: // Hexidecimal shorthand abc, returns aabbcc
                        return [parseInt(value[0] + value[0], 16), parseInt(value[1] + value[1], 16), parseInt(value[2] + value[2], 16), 1];
                    case 4: // Hexidecimal/alpha shorthand abcd, returns aabbccdd
                        return [parseInt(value[0] + value[0], 16), parseInt(value[1] + value[1], 16), parseInt(value[2] + value[2], 16), parseInt(value[3] + value[3], 16) / 255];
                    case 6: // Hexidecimal abcdef
                        return value.match(/([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i).slice(1).map(function (v) {
                            return parseInt(v, 16);
                        }).concat(1); // Set alpha
                    case 8: // Hexidecimal/alpha abcdef01
                        return value.match(/([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i).slice(1).map(function (v, i) {
                            return i < 3 ? parseInt(v, 16) : parseInt(v, 16) / 255;
                        });
                    default:
                        break;
                }
            }
        },
        hsl: function (arr) {
            var r, g, b, values;
            function getHue (t, s, l) {
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
            if (validation.hsx(arr)) {
                values = parseHsx(arr);
                if (values[1] === 0) {
                    r = g = b = values[2];
                } else {
                    r = getHue(values[0] + 1 / 3, values[1], values[2]);
                    g = getHue(values[0], values[1], values[2]);
                    b = getHue(values[0] - 1 / 3, values[1], values[2]);
                }
                if (values.length === 4)
                    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), values[3]];
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 1];
            }
            return null;
        },
        hsv: function (arr) {
            var r, g, b, i, f, p, q, t, values;
            if (validation.hsx(arr)) {
                values = parseHsx(arr);
                i = Math.floor(values[0] * 6);
                f = values[0] * 6 - i;
                p = values[2] * (1 - values[1]);
                q = values[2] * (1 - f * values[1]);
                t = values[2] * (1 - (1 - f) * values[1]);
                switch (i % 6) {
                    case 0:
                        r = values[2];
                        g = t;
                        b = p;
                        break;
                    case 1:
                        r = q;
                        g = values[2];
                        b = p;
                        break;
                    case 2:
                        r = p;
                        g = values[2];
                        b = t;
                        break;
                    case 3:
                        r = p;
                        g = q;
                        b = values[2];
                        break;
                    case 4:
                        r = t;
                        g = p;
                        b = values[2];
                        break;
                    case 5:
                        r = values[2];
                        g = p;
                        b = q;
                        break;
                    default:
                        break;
                }
                if (values.length === 4)
                    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), values[3]];
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 1];
            }
            return null;
        },
        rgb: function (arr) {
            var a;
            if (validation.rgb(arr)) {
                a = arr.map(function (value) {
                    return parseFloat(value, 10);
                });
                if (a.length === 3)
                    a.push(1);
                return a;
            }
            return null;
        }
    },
    fn = {
        array: function (obj) {
            return [obj.red, obj.green, obj.blue, obj.alpha];
        },
        // contrast: function (color1, color2) {
        //     return getContrast(color1, color2);
        // },
        hex: function (obj) {
            return chromaToHex([obj.red, obj.green, obj.blue]);
        },
        hexa: function (obj) {
            return chromaToHex([obj.red, obj.green, obj.blue, obj.alpha]);
        },
        hsl: function (obj) {
            return chromaToHsl([obj.red, obj.green, obj.blue]);
        },
        hsla: function (obj) {
            return chromaToHsl([obj.red, obj.green, obj.blue, obj.alpha]);
        },
        hsv: function (obj, opt) {
            return chromaToHsv([obj.red, obj.green, obj.blue]);
        },
        hsva: function (obj, opt) {
            return chromaToHsv([obj.red, obj.green, obj.blue, obj.alpha]);
        },
        rgb: function (obj, opt) {
            return chromaToRgb([obj.red, obj.green, obj.blue]);
        },
        rgba: function (obj, opt) {
            return chromaToRgb([obj.red, obj.green, obj.blue, obj.alpha]);
        },
        x11: function (obj) {
            return chromaToX11([obj.red, obj.green, obj.blue]);
        }
    },
    validation = {
        hex: function (arr) {
            if (Number.isNaN(parseInt(arr[0], 16)))
                return false;
            if (!arr[0].length || arr[0].length === 5 || arr[0].length === 7 || arr[0].length > 8)
                return false;
            return true;
        },
        hsx: function (arr) {
            var i, n;
            if (3 > arr.length || arr.length > 4)
                return false;
            for (i = 0; i < arr.length; i = i + 1) {
                n = parseFloat(arr[i], 10);
                if (Number.isNaN(n))
                    return false;
                if (i === 3 && (0 > n || n > 1)) {
                    return false;
                } else if (i && (0 > n || n > 100)) {
                    return false;
                }
            }
            return true;
        },
        rgb: function (arr) {
            var i, n;
                if (3 > arr.length || arr.length > 4)
                    return false;
                for (i = 0; i < arr.length; i = i + 1) {
                    n = parseFloat(arr[i], 10);
                    if (Number.isNaN(n))
                        return false;
                    if (i === 3 ? 0 > n || n > 1 : 0 > n || n > 255)
                        return false;
                }
                return true;
        }
    };
    //  Auxillary Functions
    function sanitize (result) {
        if (result === null)
            return false;
        return result.slice(1).filter(function (r) {
            return r ? true : false;
        });
    }

    //  VALIDATION
    function validate (clean, fn) {
        if (Array.isArray(clean) && clean.length)
            return fn(clean);
        return false;
    }
    function validChromaObject (obj) {
        var k, n;
        if (!obj.hasOwnProperty('values'))
            return false;
        for (k in obj.values) {
            if (/^alpha|blue|green|red$/i.test(k)) {
                n = parseFloat(obj.values[k]);
                if (Number.isNaN(n))
                    return false;
                if (/^alpha$/.test(k) && (0 > n || n > 1)) {
                    return false;
                } else if (/^blue|green|red$/i.test(k) && (0 > n || n > 255)) {
                    return false;
                }
                continue;
            }
            return false;
        }
        return true;
    }

    //  CONVERSION
    function convert (clean, fn) {
        if (Array.isArray(clean) && clean.length)
            return fn(clean);
        return null;
    }
    function parseHsx (arr) {
        return arr.map(function (value, v) {
            if (v === 0) {
                return value.includes('-') ? (360 + (parseFloat(value, 10) % 360)) / 360 : (parseFloat(value, 10) % 360) / 360;
            } else if (v < 3) {
                return parseFloat(value, 10) / 100;
            } else {
                return parseFloat(value, 10);
            }
        });
    }

    //  To Chroma Object
    function rgbToChromaObject (arr) {
        var o = {},
            keys = ['red', 'green', 'blue', 'alpha'];
        Object.defineProperties(o, {
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
            average: {
                get: function () {
                    return (this.red + this.green + this.blue) / 3
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
                value: {}
            }
        });
        o.contrast = function (color) {
            var c,
                x = this;
            if (chroma.validate(color)) {
                c = chroma(color);
                if (this.average < c.average) {
                    x = c;
                    c = this;
                }
                return (0.2126 * x.luminance.r + 0.7152 * x.luminance.g + 0.0722 * x.luminance.b + 0.05) / (0.2126 * c.luminance.r + 0.7152 * c.luminance.g + 0.0722 * c.luminance.b + 0.05);
            }
            return null;
        };
        o.to = function (model) {
            return fn[model](o);
        };
        if (arr === null)
            return null;
        arr.forEach(function (value, i) {
            o[keys[i]] = value;
        });
        // if (Object.keys(o).length === 3)
        //     o.alpha = 1;
        return o;
    }

    //  Chroma to X
    function chromaToHex (arr) {
        var value = '#';
        arr.forEach(function (hex, i) {
            var v = i === 3 ? Math.round((hex * 255)).toString(16) : hex.toString(16);
            if (v.length < 2)
                v = '0' + v;
            value = value + v;
        });
        return value;
    }
    function chromaToHsl (arr) {
        var r = arr[0] / 255,
            g = arr[1] / 255,
            b = arr[2] / 255,
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
        if (arr.length === 4)
            return 'hsla(' + Math.round(10 * h * 360) / 10 + ', ' + Math.round(10 * s * 100) / 10 + '%, ' + Math.round(10 * l * 100) / 10 + '%, ' + arr[3] + ')';
        return 'hsl(' + Math.round(10 * h * 360) / 10 + ', ' + Math.round(10 * s * 100) / 10 + '%, ' + Math.round(10 * l * 100) / 10 + '%)';
    }
    function chromaToHsv (arr) {
        var r = arr[0] / 255,
            g = arr[1] / 255,
            b = arr[2] / 255,
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
        if (arr.length === 4)
            return 'hsva(' + Math.round(10 * h * 360) / 10 + ', ' + Math.round(10 * s * 100) / 10 + '%, ' + Math.round(10 * v * 100) / 10 + '%, ' + arr[3] + ')';
        return 'hsv(' + Math.round(10 * h * 360) / 10 + ', ' + Math.round(10 * s * 100) / 10 + '%, ' + Math.round(10 * v * 100) / 10 + '%)';
    }
    function chromaToRgb (arr) {
        if (arr.length === 4)
            return 'rgba(' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ', ' + arr[3] + ')';
        return 'rgb(' + arr[0]+ ', ' + arr[1] + ', ' + arr[2] + ')';
    }
    function chromaToX11 (arr) {
        var last = 255,
            color;
        Object.keys(x11Dictionary).forEach(function (key) {
            var avg = (Math.abs(x11Dictionary[key][0] - arr[0]) + Math.abs(x11Dictionary[key][1] - arr[1]) + Math.abs(x11Dictionary[key][2] - arr[2])) / 3;
            if (avg < last) {
                last = avg;
                color = key;
            }
        });
        return color;
    }

    //  Chroma
    chroma = function (model) {
        var rx, regex = [
            /^(?:#|0x)([0-9A-F]{1,8})$/i,
            /^(?:hsla?)\((-?\d+\.?\d*)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,?\s*(\d\.?\d*)?\);*?$/i,
            /^(?:hsva?)\((-?\d+\.?\d*)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,?\s*(\d\.?\d*)?\);*?$/i,
            /^(?:rgba?\()?(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d\.?\d*)?\s*\)?;*?$/i
        ];
        if (typeof model === 'string' && /^[A-Z]+$/i.test(model)) {
            if (x11Dictionary[model])
                return rgbToChromaObject(x11Dictionary[model].concat(1));
        } else if (typeof model === 'string' && model.length) {
            for (rx in regex)
                if (regex[rx].test(model))
                    return rgbToChromaObject(convert(sanitize(model.match(regex[rx])), conversion[conversionModels[rx]]));
        } else if (Array.isArray(model)) {
            return rgbToChromaObject(conversion.rgb(model));
        } else {
            if (validChromaObject(model));
                return model;
        }
        return null;
    };
    chroma.validate = function (value) {
        var rx, regex = [
            /^(?:#|0x)([0-9A-F]{1,8})$/i,
            /^(?:hsla?|hsva?)\((-?\d+\.?\d*)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,?\s*(\d\.?\d*)?\);*?$/i,
            /^(?:rgba?\()?(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d\.?\d*)?\s*\)?;*?$/i
        ];
        if (typeof value === 'string' && /^[A-Z]+$/i.test(value)) {
            return x11Dictionary[value] ? true : false;
        } else if (typeof value === 'string' && value.length) {
            
            for (rx in regex)
                if (regex[rx].test(value))
                    return validate(sanitize(value.match(regex[rx])), validation[validationModels[rx]]);
            return false;
        } else if (Array.isArray(value)) {
            return validation.rgb(value);
        } else {
            return validChromaObject(value);
        }
    };
}());

export default chroma;