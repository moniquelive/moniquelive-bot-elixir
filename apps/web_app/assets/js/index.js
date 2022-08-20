(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // elm:/Users/cyber/prj/elixir/twitch_bot/apps/web_app/assets/elm/src/Main.elm
  var require_Main = __commonJS({
    "elm:/Users/cyber/prj/elixir/twitch_bot/apps/web_app/assets/elm/src/Main.elm"(exports) {
      (function(scope) {
        "use strict";
        function F(arity, fun, wrapper) {
          wrapper.a = arity;
          wrapper.f = fun;
          return wrapper;
        }
        function F2(fun) {
          return F(2, fun, function(a) {
            return function(b) {
              return fun(a, b);
            };
          });
        }
        function F3(fun) {
          return F(3, fun, function(a) {
            return function(b) {
              return function(c) {
                return fun(a, b, c);
              };
            };
          });
        }
        function F4(fun) {
          return F(4, fun, function(a) {
            return function(b) {
              return function(c) {
                return function(d) {
                  return fun(a, b, c, d);
                };
              };
            };
          });
        }
        function F5(fun) {
          return F(5, fun, function(a) {
            return function(b) {
              return function(c) {
                return function(d) {
                  return function(e) {
                    return fun(a, b, c, d, e);
                  };
                };
              };
            };
          });
        }
        function F6(fun) {
          return F(6, fun, function(a) {
            return function(b) {
              return function(c) {
                return function(d) {
                  return function(e) {
                    return function(f) {
                      return fun(a, b, c, d, e, f);
                    };
                  };
                };
              };
            };
          });
        }
        function F7(fun) {
          return F(7, fun, function(a) {
            return function(b) {
              return function(c) {
                return function(d) {
                  return function(e) {
                    return function(f) {
                      return function(g) {
                        return fun(a, b, c, d, e, f, g);
                      };
                    };
                  };
                };
              };
            };
          });
        }
        function F8(fun) {
          return F(8, fun, function(a) {
            return function(b) {
              return function(c) {
                return function(d) {
                  return function(e) {
                    return function(f) {
                      return function(g) {
                        return function(h) {
                          return fun(a, b, c, d, e, f, g, h);
                        };
                      };
                    };
                  };
                };
              };
            };
          });
        }
        function F9(fun) {
          return F(9, fun, function(a) {
            return function(b) {
              return function(c) {
                return function(d) {
                  return function(e) {
                    return function(f) {
                      return function(g) {
                        return function(h) {
                          return function(i) {
                            return fun(a, b, c, d, e, f, g, h, i);
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          });
        }
        function A2(fun, a, b) {
          return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
        }
        function A3(fun, a, b, c) {
          return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
        }
        function A4(fun, a, b, c, d) {
          return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
        }
        function A5(fun, a, b, c, d, e) {
          return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
        }
        function A6(fun, a, b, c, d, e, f) {
          return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
        }
        function A7(fun, a, b, c, d, e, f, g) {
          return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
        }
        function A8(fun, a, b, c, d, e, f, g, h) {
          return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
        }
        function A9(fun, a, b, c, d, e, f, g, h, i) {
          return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
        }
        console.warn("Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.");
        function _Utils_eq(x, y) {
          for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) {
          }
          return isEqual;
        }
        function _Utils_eqHelp(x, y, depth, stack) {
          if (x === y) {
            return true;
          }
          if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false;
          }
          if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
          }
          if (x.$ === "Set_elm_builtin") {
            x = $elm$core$Set$toList(x);
            y = $elm$core$Set$toList(y);
          }
          if (x.$ === "RBNode_elm_builtin" || x.$ === "RBEmpty_elm_builtin") {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
          }
          for (var key in x) {
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
              return false;
            }
          }
          return true;
        }
        var _Utils_equal = F2(_Utils_eq);
        var _Utils_notEqual = F2(function(a, b) {
          return !_Utils_eq(a, b);
        });
        function _Utils_cmp(x, y, ord) {
          if (typeof x !== "object") {
            return x === y ? 0 : x < y ? -1 : 1;
          }
          if (x instanceof String) {
            var a = x.valueOf();
            var b = y.valueOf();
            return a === b ? 0 : a < b ? -1 : 1;
          }
          if (x.$[0] === "#") {
            return (ord = _Utils_cmp(x.a, y.a)) ? ord : (ord = _Utils_cmp(x.b, y.b)) ? ord : _Utils_cmp(x.c, y.c);
          }
          for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {
          }
          return ord || (x.b ? 1 : y.b ? -1 : 0);
        }
        var _Utils_lt = F2(function(a, b) {
          return _Utils_cmp(a, b) < 0;
        });
        var _Utils_le = F2(function(a, b) {
          return _Utils_cmp(a, b) < 1;
        });
        var _Utils_gt = F2(function(a, b) {
          return _Utils_cmp(a, b) > 0;
        });
        var _Utils_ge = F2(function(a, b) {
          return _Utils_cmp(a, b) >= 0;
        });
        var _Utils_compare = F2(function(x, y) {
          var n = _Utils_cmp(x, y);
          return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
        });
        var _Utils_Tuple0_UNUSED = 0;
        var _Utils_Tuple0 = { $: "#0" };
        function _Utils_Tuple2_UNUSED(a, b) {
          return { a, b };
        }
        function _Utils_Tuple2(a, b) {
          return { $: "#2", a, b };
        }
        function _Utils_Tuple3_UNUSED(a, b, c) {
          return { a, b, c };
        }
        function _Utils_Tuple3(a, b, c) {
          return { $: "#3", a, b, c };
        }
        function _Utils_chr_UNUSED(c) {
          return c;
        }
        function _Utils_chr(c) {
          return new String(c);
        }
        function _Utils_update(oldRecord, updatedFields) {
          var newRecord = {};
          for (var key in oldRecord) {
            newRecord[key] = oldRecord[key];
          }
          for (var key in updatedFields) {
            newRecord[key] = updatedFields[key];
          }
          return newRecord;
        }
        var _Utils_append = F2(_Utils_ap);
        function _Utils_ap(xs, ys) {
          if (typeof xs === "string") {
            return xs + ys;
          }
          if (!xs.b) {
            return ys;
          }
          var root = _List_Cons(xs.a, ys);
          xs = xs.b;
          for (var curr = root; xs.b; xs = xs.b) {
            curr = curr.b = _List_Cons(xs.a, ys);
          }
          return root;
        }
        var _List_Nil_UNUSED = { $: 0 };
        var _List_Nil = { $: "[]" };
        function _List_Cons_UNUSED(hd, tl) {
          return { $: 1, a: hd, b: tl };
        }
        function _List_Cons(hd, tl) {
          return { $: "::", a: hd, b: tl };
        }
        var _List_cons = F2(_List_Cons);
        function _List_fromArray(arr) {
          var out = _List_Nil;
          for (var i = arr.length; i--; ) {
            out = _List_Cons(arr[i], out);
          }
          return out;
        }
        function _List_toArray(xs) {
          for (var out = []; xs.b; xs = xs.b) {
            out.push(xs.a);
          }
          return out;
        }
        var _List_map2 = F3(function(f, xs, ys) {
          for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
            arr.push(A2(f, xs.a, ys.a));
          }
          return _List_fromArray(arr);
        });
        var _List_map3 = F4(function(f, xs, ys, zs) {
          for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A3(f, xs.a, ys.a, zs.a));
          }
          return _List_fromArray(arr);
        });
        var _List_map4 = F5(function(f, ws, xs, ys, zs) {
          for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
          }
          return _List_fromArray(arr);
        });
        var _List_map5 = F6(function(f, vs, ws, xs, ys, zs) {
          for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
          }
          return _List_fromArray(arr);
        });
        var _List_sortBy = F2(function(f, xs) {
          return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            return _Utils_cmp(f(a), f(b));
          }));
        });
        var _List_sortWith = F2(function(f, xs) {
          return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
          }));
        });
        var _JsArray_empty = [];
        function _JsArray_singleton(value) {
          return [value];
        }
        function _JsArray_length(array) {
          return array.length;
        }
        var _JsArray_initialize = F3(function(size, offset, func) {
          var result = new Array(size);
          for (var i = 0; i < size; i++) {
            result[i] = func(offset + i);
          }
          return result;
        });
        var _JsArray_initializeFromList = F2(function(max, ls) {
          var result = new Array(max);
          for (var i = 0; i < max && ls.b; i++) {
            result[i] = ls.a;
            ls = ls.b;
          }
          result.length = i;
          return _Utils_Tuple2(result, ls);
        });
        var _JsArray_unsafeGet = F2(function(index, array) {
          return array[index];
        });
        var _JsArray_unsafeSet = F3(function(index, value, array) {
          var length = array.length;
          var result = new Array(length);
          for (var i = 0; i < length; i++) {
            result[i] = array[i];
          }
          result[index] = value;
          return result;
        });
        var _JsArray_push = F2(function(value, array) {
          var length = array.length;
          var result = new Array(length + 1);
          for (var i = 0; i < length; i++) {
            result[i] = array[i];
          }
          result[length] = value;
          return result;
        });
        var _JsArray_foldl = F3(function(func, acc, array) {
          var length = array.length;
          for (var i = 0; i < length; i++) {
            acc = A2(func, array[i], acc);
          }
          return acc;
        });
        var _JsArray_foldr = F3(function(func, acc, array) {
          for (var i = array.length - 1; i >= 0; i--) {
            acc = A2(func, array[i], acc);
          }
          return acc;
        });
        var _JsArray_map = F2(function(func, array) {
          var length = array.length;
          var result = new Array(length);
          for (var i = 0; i < length; i++) {
            result[i] = func(array[i]);
          }
          return result;
        });
        var _JsArray_indexedMap = F3(function(func, offset, array) {
          var length = array.length;
          var result = new Array(length);
          for (var i = 0; i < length; i++) {
            result[i] = A2(func, offset + i, array[i]);
          }
          return result;
        });
        var _JsArray_slice = F3(function(from, to, array) {
          return array.slice(from, to);
        });
        var _JsArray_appendN = F3(function(n, dest, source) {
          var destLen = dest.length;
          var itemsToCopy = n - destLen;
          if (itemsToCopy > source.length) {
            itemsToCopy = source.length;
          }
          var size = destLen + itemsToCopy;
          var result = new Array(size);
          for (var i = 0; i < destLen; i++) {
            result[i] = dest[i];
          }
          for (var i = 0; i < itemsToCopy; i++) {
            result[i + destLen] = source[i];
          }
          return result;
        });
        var _Debug_log_UNUSED = F2(function(tag, value) {
          return value;
        });
        var _Debug_log = F2(function(tag, value) {
          console.log(tag + ": " + _Debug_toString(value));
          return value;
        });
        function _Debug_todo(moduleName, region) {
          return function(message) {
            _Debug_crash(8, moduleName, region, message);
          };
        }
        function _Debug_todoCase(moduleName, region, value) {
          return function(message) {
            _Debug_crash(9, moduleName, region, value, message);
          };
        }
        function _Debug_toString_UNUSED(value) {
          return "<internals>";
        }
        function _Debug_toString(value) {
          return _Debug_toAnsiString(false, value);
        }
        function _Debug_toAnsiString(ansi, value) {
          if (typeof value === "function") {
            return _Debug_internalColor(ansi, "<function>");
          }
          if (typeof value === "boolean") {
            return _Debug_ctorColor(ansi, value ? "True" : "False");
          }
          if (typeof value === "number") {
            return _Debug_numberColor(ansi, value + "");
          }
          if (value instanceof String) {
            return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
          }
          if (typeof value === "string") {
            return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
          }
          if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (typeof tag === "number") {
              return _Debug_internalColor(ansi, "<internals>");
            }
            if (tag[0] === "#") {
              var output = [];
              for (var k in value) {
                if (k === "$")
                  continue;
                output.push(_Debug_toAnsiString(ansi, value[k]));
              }
              return "(" + output.join(",") + ")";
            }
            if (tag === "Set_elm_builtin") {
              return _Debug_ctorColor(ansi, "Set") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            }
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
              return _Debug_ctorColor(ansi, "Dict") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            }
            if (tag === "Array_elm_builtin") {
              return _Debug_ctorColor(ansi, "Array") + _Debug_fadeColor(ansi, ".fromList") + " " + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            }
            if (tag === "::" || tag === "[]") {
              var output = "[";
              value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
              for (; value.b; value = value.b) {
                output += "," + _Debug_toAnsiString(ansi, value.a);
              }
              return output + "]";
            }
            var output = "";
            for (var i in value) {
              if (i === "$")
                continue;
              var str = _Debug_toAnsiString(ansi, value[i]);
              var c0 = str[0];
              var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === '"' || str.indexOf(" ") < 0;
              output += " " + (parenless ? str : "(" + str + ")");
            }
            return _Debug_ctorColor(ansi, tag) + output;
          }
          if (typeof DataView === "function" && value instanceof DataView) {
            return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
          }
          if (typeof File !== "undefined" && value instanceof File) {
            return _Debug_internalColor(ansi, "<" + value.name + ">");
          }
          if (typeof value === "object") {
            var output = [];
            for (var key in value) {
              var field = key[0] === "_" ? key.slice(1) : key;
              output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) {
              return "{}";
            }
            return "{ " + output.join(", ") + " }";
          }
          return _Debug_internalColor(ansi, "<internals>");
        }
        function _Debug_addSlashes(str, isChar) {
          var s = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
          if (isChar) {
            return s.replace(/\'/g, "\\'");
          } else {
            return s.replace(/\"/g, '\\"');
          }
        }
        function _Debug_ctorColor(ansi, string) {
          return ansi ? "\x1B[96m" + string + "\x1B[0m" : string;
        }
        function _Debug_numberColor(ansi, string) {
          return ansi ? "\x1B[95m" + string + "\x1B[0m" : string;
        }
        function _Debug_stringColor(ansi, string) {
          return ansi ? "\x1B[93m" + string + "\x1B[0m" : string;
        }
        function _Debug_charColor(ansi, string) {
          return ansi ? "\x1B[92m" + string + "\x1B[0m" : string;
        }
        function _Debug_fadeColor(ansi, string) {
          return ansi ? "\x1B[37m" + string + "\x1B[0m" : string;
        }
        function _Debug_internalColor(ansi, string) {
          return ansi ? "\x1B[36m" + string + "\x1B[0m" : string;
        }
        function _Debug_toHexDigit(n) {
          return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
        }
        function _Debug_crash_UNUSED(identifier) {
          throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
        }
        function _Debug_crash(identifier, fact1, fact2, fact3, fact4) {
          switch (identifier) {
            case 0:
              throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');
            case 1:
              throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
              var jsonErrorString = fact1;
              throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
            case 3:
              var portName = fact1;
              throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
            case 4:
              var portName = fact1;
              var problem = fact2;
              throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
            case 5:
              throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
            case 6:
              var moduleName = fact1;
              throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
              var moduleName = fact1;
              var region = fact2;
              var message = fact3;
              throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
            case 9:
              var moduleName = fact1;
              var region = fact2;
              var value = fact3;
              var message = fact4;
              throw new Error(
                "TODO in module `" + moduleName + "` from the `case` expression " + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    " + _Debug_toString(value).replace("\n", "\n    ") + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    ")
              );
            case 10:
              throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
              throw new Error("Cannot perform mod 0. Division by zero error.");
          }
        }
        function _Debug_regionToString(region) {
          if (region.start.line === region.end.line) {
            return "on line " + region.start.line;
          }
          return "on lines " + region.start.line + " through " + region.end.line;
        }
        var _Basics_add = F2(function(a, b) {
          return a + b;
        });
        var _Basics_sub = F2(function(a, b) {
          return a - b;
        });
        var _Basics_mul = F2(function(a, b) {
          return a * b;
        });
        var _Basics_fdiv = F2(function(a, b) {
          return a / b;
        });
        var _Basics_idiv = F2(function(a, b) {
          return a / b | 0;
        });
        var _Basics_pow = F2(Math.pow);
        var _Basics_remainderBy = F2(function(b, a) {
          return a % b;
        });
        var _Basics_modBy = F2(function(modulus, x) {
          var answer = x % modulus;
          return modulus === 0 ? _Debug_crash(11) : answer > 0 && modulus < 0 || answer < 0 && modulus > 0 ? answer + modulus : answer;
        });
        var _Basics_pi = Math.PI;
        var _Basics_e = Math.E;
        var _Basics_cos = Math.cos;
        var _Basics_sin = Math.sin;
        var _Basics_tan = Math.tan;
        var _Basics_acos = Math.acos;
        var _Basics_asin = Math.asin;
        var _Basics_atan = Math.atan;
        var _Basics_atan2 = F2(Math.atan2);
        function _Basics_toFloat(x) {
          return x;
        }
        function _Basics_truncate(n) {
          return n | 0;
        }
        function _Basics_isInfinite(n) {
          return n === Infinity || n === -Infinity;
        }
        var _Basics_ceiling = Math.ceil;
        var _Basics_floor = Math.floor;
        var _Basics_round = Math.round;
        var _Basics_sqrt = Math.sqrt;
        var _Basics_log = Math.log;
        var _Basics_isNaN = isNaN;
        function _Basics_not(bool) {
          return !bool;
        }
        var _Basics_and = F2(function(a, b) {
          return a && b;
        });
        var _Basics_or = F2(function(a, b) {
          return a || b;
        });
        var _Basics_xor = F2(function(a, b) {
          return a !== b;
        });
        var _String_cons = F2(function(chr, str) {
          return chr + str;
        });
        function _String_uncons(string) {
          var word = string.charCodeAt(0);
          return !isNaN(word) ? $elm$core$Maybe$Just(
            55296 <= word && word <= 56319 ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2)) : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
          ) : $elm$core$Maybe$Nothing;
        }
        var _String_append = F2(function(a, b) {
          return a + b;
        });
        function _String_length(str) {
          return str.length;
        }
        var _String_map = F2(function(func, string) {
          var len = string.length;
          var array = new Array(len);
          var i = 0;
          while (i < len) {
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
              array[i] = func(_Utils_chr(string[i] + string[i + 1]));
              i += 2;
              continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
          }
          return array.join("");
        });
        var _String_filter = F2(function(isGood, str) {
          var arr = [];
          var len = str.length;
          var i = 0;
          while (i < len) {
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
              char += str[i];
              i++;
            }
            if (isGood(_Utils_chr(char))) {
              arr.push(char);
            }
          }
          return arr.join("");
        });
        function _String_reverse(str) {
          var len = str.length;
          var arr = new Array(len);
          var i = 0;
          while (i < len) {
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
              arr[len - i] = str[i + 1];
              i++;
              arr[len - i] = str[i - 1];
              i++;
            } else {
              arr[len - i] = str[i];
              i++;
            }
          }
          return arr.join("");
        }
        var _String_foldl = F3(function(func, state, string) {
          var len = string.length;
          var i = 0;
          while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
              char += string[i];
              i++;
            }
            state = A2(func, _Utils_chr(char), state);
          }
          return state;
        });
        var _String_foldr = F3(function(func, state, string) {
          var i = string.length;
          while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
              i--;
              char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
          }
          return state;
        });
        var _String_split = F2(function(sep, str) {
          return str.split(sep);
        });
        var _String_join = F2(function(sep, strs) {
          return strs.join(sep);
        });
        var _String_slice = F3(function(start, end, str) {
          return str.slice(start, end);
        });
        function _String_trim(str) {
          return str.trim();
        }
        function _String_trimLeft(str) {
          return str.replace(/^\s+/, "");
        }
        function _String_trimRight(str) {
          return str.replace(/\s+$/, "");
        }
        function _String_words(str) {
          return _List_fromArray(str.trim().split(/\s+/g));
        }
        function _String_lines(str) {
          return _List_fromArray(str.split(/\r\n|\r|\n/g));
        }
        function _String_toUpper(str) {
          return str.toUpperCase();
        }
        function _String_toLower(str) {
          return str.toLowerCase();
        }
        var _String_any = F2(function(isGood, string) {
          var i = string.length;
          while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
              i--;
              char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) {
              return true;
            }
          }
          return false;
        });
        var _String_all = F2(function(isGood, string) {
          var i = string.length;
          while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
              i--;
              char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) {
              return false;
            }
          }
          return true;
        });
        var _String_contains = F2(function(sub, str) {
          return str.indexOf(sub) > -1;
        });
        var _String_startsWith = F2(function(sub, str) {
          return str.indexOf(sub) === 0;
        });
        var _String_endsWith = F2(function(sub, str) {
          return str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length;
        });
        var _String_indexes = F2(function(sub, str) {
          var subLen = sub.length;
          if (subLen < 1) {
            return _List_Nil;
          }
          var i = 0;
          var is = [];
          while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen;
          }
          return _List_fromArray(is);
        });
        function _String_fromNumber(number) {
          return number + "";
        }
        function _String_toInt(str) {
          var total = 0;
          var code0 = str.charCodeAt(0);
          var start = code0 == 43 || code0 == 45 ? 1 : 0;
          for (var i = start; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) {
              return $elm$core$Maybe$Nothing;
            }
            total = 10 * total + code - 48;
          }
          return i == start ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
        }
        function _String_toFloat(s) {
          if (s.length === 0 || /[\sxbo]/.test(s)) {
            return $elm$core$Maybe$Nothing;
          }
          var n = +s;
          return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
        }
        function _String_fromList(chars) {
          return _List_toArray(chars).join("");
        }
        function _Char_toCode(char) {
          var code = char.charCodeAt(0);
          if (55296 <= code && code <= 56319) {
            return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
          }
          return code;
        }
        function _Char_fromCode(code) {
          return _Utils_chr(
            code < 0 || 1114111 < code ? "\uFFFD" : code <= 65535 ? String.fromCharCode(code) : (code -= 65536, String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320))
          );
        }
        function _Char_toUpper(char) {
          return _Utils_chr(char.toUpperCase());
        }
        function _Char_toLower(char) {
          return _Utils_chr(char.toLowerCase());
        }
        function _Char_toLocaleUpper(char) {
          return _Utils_chr(char.toLocaleUpperCase());
        }
        function _Char_toLocaleLower(char) {
          return _Utils_chr(char.toLocaleLowerCase());
        }
        function _Json_errorToString(error) {
          return $elm$json$Json$Decode$errorToString(error);
        }
        function _Json_succeed(msg) {
          return {
            $: 0,
            a: msg
          };
        }
        function _Json_fail(msg) {
          return {
            $: 1,
            a: msg
          };
        }
        function _Json_decodePrim(decoder) {
          return { $: 2, b: decoder };
        }
        var _Json_decodeInt = _Json_decodePrim(function(value) {
          return typeof value !== "number" ? _Json_expecting("an INT", value) : -2147483647 < value && value < 2147483647 && (value | 0) === value ? $elm$core$Result$Ok(value) : isFinite(value) && !(value % 1) ? $elm$core$Result$Ok(value) : _Json_expecting("an INT", value);
        });
        var _Json_decodeBool = _Json_decodePrim(function(value) {
          return typeof value === "boolean" ? $elm$core$Result$Ok(value) : _Json_expecting("a BOOL", value);
        });
        var _Json_decodeFloat = _Json_decodePrim(function(value) {
          return typeof value === "number" ? $elm$core$Result$Ok(value) : _Json_expecting("a FLOAT", value);
        });
        var _Json_decodeValue = _Json_decodePrim(function(value) {
          return $elm$core$Result$Ok(_Json_wrap(value));
        });
        var _Json_decodeString = _Json_decodePrim(function(value) {
          return typeof value === "string" ? $elm$core$Result$Ok(value) : value instanceof String ? $elm$core$Result$Ok(value + "") : _Json_expecting("a STRING", value);
        });
        function _Json_decodeList(decoder) {
          return { $: 3, b: decoder };
        }
        function _Json_decodeArray(decoder) {
          return { $: 4, b: decoder };
        }
        function _Json_decodeNull(value) {
          return { $: 5, c: value };
        }
        var _Json_decodeField = F2(function(field, decoder) {
          return {
            $: 6,
            d: field,
            b: decoder
          };
        });
        var _Json_decodeIndex = F2(function(index, decoder) {
          return {
            $: 7,
            e: index,
            b: decoder
          };
        });
        function _Json_decodeKeyValuePairs(decoder) {
          return {
            $: 8,
            b: decoder
          };
        }
        function _Json_mapMany(f, decoders) {
          return {
            $: 9,
            f,
            g: decoders
          };
        }
        var _Json_andThen = F2(function(callback, decoder) {
          return {
            $: 10,
            b: decoder,
            h: callback
          };
        });
        function _Json_oneOf(decoders) {
          return {
            $: 11,
            g: decoders
          };
        }
        var _Json_map1 = F2(function(f, d1) {
          return _Json_mapMany(f, [d1]);
        });
        var _Json_map2 = F3(function(f, d1, d2) {
          return _Json_mapMany(f, [d1, d2]);
        });
        var _Json_map3 = F4(function(f, d1, d2, d3) {
          return _Json_mapMany(f, [d1, d2, d3]);
        });
        var _Json_map4 = F5(function(f, d1, d2, d3, d4) {
          return _Json_mapMany(f, [d1, d2, d3, d4]);
        });
        var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5) {
          return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
        });
        var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6) {
          return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
        });
        var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7) {
          return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
        });
        var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8) {
          return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
        });
        var _Json_runOnString = F2(function(decoder, string) {
          try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
          } catch (e) {
            return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "This is not valid JSON! " + e.message, _Json_wrap(string)));
          }
        });
        var _Json_run = F2(function(decoder, value) {
          return _Json_runHelp(decoder, _Json_unwrap(value));
        });
        function _Json_runHelp(decoder, value) {
          switch (decoder.$) {
            case 2:
              return decoder.b(value);
            case 5:
              return value === null ? $elm$core$Result$Ok(decoder.c) : _Json_expecting("null", value);
            case 3:
              if (!_Json_isArray(value)) {
                return _Json_expecting("a LIST", value);
              }
              return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
              if (!_Json_isArray(value)) {
                return _Json_expecting("an ARRAY", value);
              }
              return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
              var field = decoder.d;
              if (typeof value !== "object" || value === null || !(field in value)) {
                return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
              }
              var result = _Json_runHelp(decoder.b, value[field]);
              return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));
            case 7:
              var index = decoder.e;
              if (!_Json_isArray(value)) {
                return _Json_expecting("an ARRAY", value);
              }
              if (index >= value.length) {
                return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
              }
              var result = _Json_runHelp(decoder.b, value[index]);
              return $elm$core$Result$isOk(result) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));
            case 8:
              if (typeof value !== "object" || value === null || _Json_isArray(value)) {
                return _Json_expecting("an OBJECT", value);
              }
              var keyValuePairs = _List_Nil;
              for (var key in value) {
                if (value.hasOwnProperty(key)) {
                  var result = _Json_runHelp(decoder.b, value[key]);
                  if (!$elm$core$Result$isOk(result)) {
                    return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
                  }
                  keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                }
              }
              return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
              var answer = decoder.f;
              var decoders = decoder.g;
              for (var i = 0; i < decoders.length; i++) {
                var result = _Json_runHelp(decoders[i], value);
                if (!$elm$core$Result$isOk(result)) {
                  return result;
                }
                answer = answer(result.a);
              }
              return $elm$core$Result$Ok(answer);
            case 10:
              var result = _Json_runHelp(decoder.b, value);
              return !$elm$core$Result$isOk(result) ? result : _Json_runHelp(decoder.h(result.a), value);
            case 11:
              var errors = _List_Nil;
              for (var temp = decoder.g; temp.b; temp = temp.b) {
                var result = _Json_runHelp(temp.a, value);
                if ($elm$core$Result$isOk(result)) {
                  return result;
                }
                errors = _List_Cons(result.a, errors);
              }
              return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
              return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));
            case 0:
              return $elm$core$Result$Ok(decoder.a);
          }
        }
        function _Json_runArrayDecoder(decoder, value, toElmValue) {
          var len = value.length;
          var array = new Array(len);
          for (var i = 0; i < len; i++) {
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) {
              return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
            }
            array[i] = result.a;
          }
          return $elm$core$Result$Ok(toElmValue(array));
        }
        function _Json_isArray(value) {
          return Array.isArray(value) || typeof FileList !== "undefined" && value instanceof FileList;
        }
        function _Json_toElmArray(array) {
          return A2($elm$core$Array$initialize, array.length, function(i) {
            return array[i];
          });
        }
        function _Json_expecting(type, value) {
          return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, "Expecting " + type, _Json_wrap(value)));
        }
        function _Json_equality(x, y) {
          if (x === y) {
            return true;
          }
          if (x.$ !== y.$) {
            return false;
          }
          switch (x.$) {
            case 0:
            case 1:
              return x.a === y.a;
            case 2:
              return x.b === y.b;
            case 5:
              return x.c === y.c;
            case 3:
            case 4:
            case 8:
              return _Json_equality(x.b, y.b);
            case 6:
              return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
              return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
              return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
              return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
              return _Json_listEquality(x.g, y.g);
          }
        }
        function _Json_listEquality(aDecoders, bDecoders) {
          var len = aDecoders.length;
          if (len !== bDecoders.length) {
            return false;
          }
          for (var i = 0; i < len; i++) {
            if (!_Json_equality(aDecoders[i], bDecoders[i])) {
              return false;
            }
          }
          return true;
        }
        var _Json_encode = F2(function(indentLevel, value) {
          return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
        });
        function _Json_wrap(value) {
          return { $: 0, a: value };
        }
        function _Json_unwrap(value) {
          return value.a;
        }
        function _Json_wrap_UNUSED(value) {
          return value;
        }
        function _Json_unwrap_UNUSED(value) {
          return value;
        }
        function _Json_emptyArray() {
          return [];
        }
        function _Json_emptyObject() {
          return {};
        }
        var _Json_addField = F3(function(key, value, object) {
          object[key] = _Json_unwrap(value);
          return object;
        });
        function _Json_addEntry(func) {
          return F2(function(entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
          });
        }
        var _Json_encodeNull = _Json_wrap(null);
        function _Scheduler_succeed(value) {
          return {
            $: 0,
            a: value
          };
        }
        function _Scheduler_fail(error) {
          return {
            $: 1,
            a: error
          };
        }
        function _Scheduler_binding(callback) {
          return {
            $: 2,
            b: callback,
            c: null
          };
        }
        var _Scheduler_andThen = F2(function(callback, task) {
          return {
            $: 3,
            b: callback,
            d: task
          };
        });
        var _Scheduler_onError = F2(function(callback, task) {
          return {
            $: 4,
            b: callback,
            d: task
          };
        });
        function _Scheduler_receive(callback) {
          return {
            $: 5,
            b: callback
          };
        }
        var _Scheduler_guid = 0;
        function _Scheduler_rawSpawn(task) {
          var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
          };
          _Scheduler_enqueue(proc);
          return proc;
        }
        function _Scheduler_spawn(task) {
          return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
          });
        }
        function _Scheduler_rawSend(proc, msg) {
          proc.h.push(msg);
          _Scheduler_enqueue(proc);
        }
        var _Scheduler_send = F2(function(proc, msg) {
          return _Scheduler_binding(function(callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
          });
        });
        function _Scheduler_kill(proc) {
          return _Scheduler_binding(function(callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) {
              task.c();
            }
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
          });
        }
        var _Scheduler_working = false;
        var _Scheduler_queue = [];
        function _Scheduler_enqueue(proc) {
          _Scheduler_queue.push(proc);
          if (_Scheduler_working) {
            return;
          }
          _Scheduler_working = true;
          while (proc = _Scheduler_queue.shift()) {
            _Scheduler_step(proc);
          }
          _Scheduler_working = false;
        }
        function _Scheduler_step(proc) {
          while (proc.f) {
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
              while (proc.g && proc.g.$ !== rootTag) {
                proc.g = proc.g.i;
              }
              if (!proc.g) {
                return;
              }
              proc.f = proc.g.b(proc.f.a);
              proc.g = proc.g.i;
            } else if (rootTag === 2) {
              proc.f.c = proc.f.b(function(newRoot) {
                proc.f = newRoot;
                _Scheduler_enqueue(proc);
              });
              return;
            } else if (rootTag === 5) {
              if (proc.h.length === 0) {
                return;
              }
              proc.f = proc.f.b(proc.h.shift());
            } else {
              proc.g = {
                $: rootTag === 3 ? 0 : 1,
                b: proc.f.b,
                i: proc.g
              };
              proc.f = proc.f.d;
            }
          }
        }
        function _Process_sleep(time) {
          return _Scheduler_binding(function(callback) {
            var id = setTimeout(function() {
              callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function() {
              clearTimeout(id);
            };
          });
        }
        var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args) {
          return _Platform_initialize(
            flagDecoder,
            args,
            impl.init,
            impl.update,
            impl.subscriptions,
            function() {
              return function() {
              };
            }
          );
        });
        function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
          var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args["flags"] : void 0));
          $elm$core$Result$isOk(result) || _Debug_crash(2, _Json_errorToString(result.a));
          var managers = {};
          var initPair = init(result.a);
          var model = initPair.a;
          var stepper = stepperBuilder(sendToApp, model);
          var ports = _Platform_setupEffects(managers, sendToApp);
          function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
          }
          _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
          return ports ? { ports } : {};
        }
        var _Platform_preload;
        function _Platform_registerPreload(url) {
          _Platform_preload.add(url);
        }
        var _Platform_effectManagers = {};
        function _Platform_setupEffects(managers, sendToApp) {
          var ports;
          for (var key in _Platform_effectManagers) {
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
              ports = ports || {};
              ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
          }
          return ports;
        }
        function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
          return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
          };
        }
        function _Platform_instantiateManager(info, sendToApp) {
          var router = {
            g: sendToApp,
            h: void 0
          };
          var onEffects = info.c;
          var onSelfMsg = info.d;
          var cmdMap = info.e;
          var subMap = info.f;
          function loop(state) {
            return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg) {
              var value = msg.a;
              if (msg.$ === 0) {
                return A3(onSelfMsg, router, value, state);
              }
              return cmdMap && subMap ? A4(onEffects, router, value.i, value.j, state) : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
          }
          return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
        }
        var _Platform_sendToApp = F2(function(router, msg) {
          return _Scheduler_binding(function(callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
          });
        });
        var _Platform_sendToSelf = F2(function(router, msg) {
          return A2(_Scheduler_send, router.h, {
            $: 0,
            a: msg
          });
        });
        function _Platform_leaf(home) {
          return function(value) {
            return {
              $: 1,
              k: home,
              l: value
            };
          };
        }
        function _Platform_batch(list) {
          return {
            $: 2,
            m: list
          };
        }
        var _Platform_map = F2(function(tagger, bag) {
          return {
            $: 3,
            n: tagger,
            o: bag
          };
        });
        var _Platform_effectsQueue = [];
        var _Platform_effectsActive = false;
        function _Platform_enqueueEffects(managers, cmdBag, subBag) {
          _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
          if (_Platform_effectsActive)
            return;
          _Platform_effectsActive = true;
          for (var fx; fx = _Platform_effectsQueue.shift(); ) {
            _Platform_dispatchEffects(fx.p, fx.q, fx.r);
          }
          _Platform_effectsActive = false;
        }
        function _Platform_dispatchEffects(managers, cmdBag, subBag) {
          var effectsDict = {};
          _Platform_gatherEffects(true, cmdBag, effectsDict, null);
          _Platform_gatherEffects(false, subBag, effectsDict, null);
          for (var home in managers) {
            _Scheduler_rawSend(managers[home], {
              $: "fx",
              a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
            });
          }
        }
        function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
          switch (bag.$) {
            case 1:
              var home = bag.k;
              var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
              effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
              return;
            case 2:
              for (var list = bag.m; list.b; list = list.b) {
                _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
              }
              return;
            case 3:
              _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                s: bag.n,
                t: taggers
              });
              return;
          }
        }
        function _Platform_toEffect(isCmd, home, taggers, value) {
          function applyTaggers(x) {
            for (var temp = taggers; temp; temp = temp.t) {
              x = temp.s(x);
            }
            return x;
          }
          var map = isCmd ? _Platform_effectManagers[home].e : _Platform_effectManagers[home].f;
          return A2(map, applyTaggers, value);
        }
        function _Platform_insert(isCmd, newEffect, effects) {
          effects = effects || { i: _List_Nil, j: _List_Nil };
          isCmd ? effects.i = _List_Cons(newEffect, effects.i) : effects.j = _List_Cons(newEffect, effects.j);
          return effects;
        }
        function _Platform_checkPortName(name) {
          if (_Platform_effectManagers[name]) {
            _Debug_crash(3, name);
          }
        }
        function _Platform_outgoingPort(name, converter) {
          _Platform_checkPortName(name);
          _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
          };
          return _Platform_leaf(name);
        }
        var _Platform_outgoingPortMap = F2(function(tagger, value) {
          return value;
        });
        function _Platform_setupOutgoingPort(name) {
          var subs = [];
          var converter = _Platform_effectManagers[name].u;
          var init = _Process_sleep(0);
          _Platform_effectManagers[name].b = init;
          _Platform_effectManagers[name].c = F3(function(router, cmdList, state) {
            for (; cmdList.b; cmdList = cmdList.b) {
              var currentSubs = subs;
              var value = _Json_unwrap(converter(cmdList.a));
              for (var i = 0; i < currentSubs.length; i++) {
                currentSubs[i](value);
              }
            }
            return init;
          });
          function subscribe(callback) {
            subs.push(callback);
          }
          function unsubscribe(callback) {
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) {
              subs.splice(index, 1);
            }
          }
          return {
            subscribe,
            unsubscribe
          };
        }
        function _Platform_incomingPort(name, converter) {
          _Platform_checkPortName(name);
          _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
          };
          return _Platform_leaf(name);
        }
        var _Platform_incomingPortMap = F2(function(tagger, finalTagger) {
          return function(value) {
            return tagger(finalTagger(value));
          };
        });
        function _Platform_setupIncomingPort(name, sendToApp) {
          var subs = _List_Nil;
          var converter = _Platform_effectManagers[name].u;
          var init = _Scheduler_succeed(null);
          _Platform_effectManagers[name].b = init;
          _Platform_effectManagers[name].c = F3(function(router, subList, state) {
            subs = subList;
            return init;
          });
          function send(incomingValue) {
            var result = A2(_Json_run, converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for (var temp = subs; temp.b; temp = temp.b) {
              sendToApp(temp.a(value));
            }
          }
          return { send };
        }
        function _Platform_export_UNUSED(exports2) {
          scope["Elm"] ? _Platform_mergeExportsProd(scope["Elm"], exports2) : scope["Elm"] = exports2;
        }
        function _Platform_mergeExportsProd(obj, exports2) {
          for (var name in exports2) {
            name in obj ? name == "init" ? _Debug_crash(6) : _Platform_mergeExportsProd(obj[name], exports2[name]) : obj[name] = exports2[name];
          }
        }
        function _Platform_export(exports2) {
          scope["Elm"] ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports2) : scope["Elm"] = exports2;
        }
        function _Platform_mergeExportsDebug(moduleName, obj, exports2) {
          for (var name in exports2) {
            name in obj ? name == "init" ? _Debug_crash(6, moduleName) : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports2[name]) : obj[name] = exports2[name];
          }
        }
        var _VirtualDom_divertHrefToApp;
        var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
        function _VirtualDom_appendChild(parent, child) {
          parent.appendChild(child);
        }
        var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args) {
          var node = args && args["node"] ? args["node"] : _Debug_crash(0);
          node.parentNode.replaceChild(
            _VirtualDom_render(virtualNode, function() {
            }),
            node
          );
          return {};
        });
        function _VirtualDom_text(string) {
          return {
            $: 0,
            a: string
          };
        }
        var _VirtualDom_nodeNS = F2(function(namespace, tag) {
          return F2(function(factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
              var kid = kidList.a;
              descendantsCount += kid.b || 0;
              kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
              $: 1,
              c: tag,
              d: _VirtualDom_organizeFacts(factList),
              e: kids,
              f: namespace,
              b: descendantsCount
            };
          });
        });
        var _VirtualDom_node = _VirtualDom_nodeNS(void 0);
        var _VirtualDom_keyedNodeNS = F2(function(namespace, tag) {
          return F2(function(factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
              var kid = kidList.a;
              descendantsCount += kid.b.b || 0;
              kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
              $: 2,
              c: tag,
              d: _VirtualDom_organizeFacts(factList),
              e: kids,
              f: namespace,
              b: descendantsCount
            };
          });
        });
        var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(void 0);
        function _VirtualDom_custom(factList, model, render, diff) {
          return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList),
            g: model,
            h: render,
            i: diff
          };
        }
        var _VirtualDom_map = F2(function(tagger, node) {
          return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0)
          };
        });
        function _VirtualDom_thunk(refs, thunk) {
          return {
            $: 5,
            l: refs,
            m: thunk,
            k: void 0
          };
        }
        var _VirtualDom_lazy = F2(function(func, a) {
          return _VirtualDom_thunk([func, a], function() {
            return func(a);
          });
        });
        var _VirtualDom_lazy2 = F3(function(func, a, b) {
          return _VirtualDom_thunk([func, a, b], function() {
            return A2(func, a, b);
          });
        });
        var _VirtualDom_lazy3 = F4(function(func, a, b, c) {
          return _VirtualDom_thunk([func, a, b, c], function() {
            return A3(func, a, b, c);
          });
        });
        var _VirtualDom_lazy4 = F5(function(func, a, b, c, d) {
          return _VirtualDom_thunk([func, a, b, c, d], function() {
            return A4(func, a, b, c, d);
          });
        });
        var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e) {
          return _VirtualDom_thunk([func, a, b, c, d, e], function() {
            return A5(func, a, b, c, d, e);
          });
        });
        var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f) {
          return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
            return A6(func, a, b, c, d, e, f);
          });
        });
        var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g) {
          return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
            return A7(func, a, b, c, d, e, f, g);
          });
        });
        var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h) {
          return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
            return A8(func, a, b, c, d, e, f, g, h);
          });
        });
        var _VirtualDom_on = F2(function(key, handler) {
          return {
            $: "a0",
            n: key,
            o: handler
          };
        });
        var _VirtualDom_style = F2(function(key, value) {
          return {
            $: "a1",
            n: key,
            o: value
          };
        });
        var _VirtualDom_property = F2(function(key, value) {
          return {
            $: "a2",
            n: key,
            o: value
          };
        });
        var _VirtualDom_attribute = F2(function(key, value) {
          return {
            $: "a3",
            n: key,
            o: value
          };
        });
        var _VirtualDom_attributeNS = F3(function(namespace, key, value) {
          return {
            $: "a4",
            n: key,
            o: { f: namespace, o: value }
          };
        });
        var _VirtualDom_RE_script = /^script$/i;
        var _VirtualDom_RE_on_formAction = /^(on|formAction$)/i;
        var _VirtualDom_RE_js = /^\s*j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/i;
        var _VirtualDom_RE_js_html = /^\s*(j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:|d\s*a\s*t\s*a\s*:\s*t\s*e\s*x\s*t\s*\/\s*h\s*t\s*m\s*l\s*(,|;))/i;
        function _VirtualDom_noScript(tag) {
          return _VirtualDom_RE_script.test(tag) ? "p" : tag;
        }
        function _VirtualDom_noOnOrFormAction(key) {
          return _VirtualDom_RE_on_formAction.test(key) ? "data-" + key : key;
        }
        function _VirtualDom_noInnerHtmlOrFormAction(key) {
          return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
        }
        function _VirtualDom_noJavaScriptUri(value) {
          return _VirtualDom_RE_js.test(value) ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' : value;
        }
        function _VirtualDom_noJavaScriptOrHtmlUri(value) {
          return _VirtualDom_RE_js_html.test(value) ? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")' : value;
        }
        function _VirtualDom_noJavaScriptOrHtmlJson(value) {
          return typeof _Json_unwrap(value) === "string" && _VirtualDom_RE_js_html.test(_Json_unwrap(value)) ? _Json_wrap(
            'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
          ) : value;
        }
        var _VirtualDom_mapAttribute = F2(function(func, attr) {
          return attr.$ === "a0" ? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
        });
        function _VirtualDom_mapHandler(func, handler) {
          var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
          return {
            $: handler.$,
            a: !tag ? A2($elm$json$Json$Decode$map, func, handler.a) : A3(
              $elm$json$Json$Decode$map2,
              tag < 3 ? _VirtualDom_mapEventTuple : _VirtualDom_mapEventRecord,
              $elm$json$Json$Decode$succeed(func),
              handler.a
            )
          };
        }
        var _VirtualDom_mapEventTuple = F2(function(func, tuple) {
          return _Utils_Tuple2(func(tuple.a), tuple.b);
        });
        var _VirtualDom_mapEventRecord = F2(function(func, record) {
          return {
            message: func(record.message),
            stopPropagation: record.stopPropagation,
            preventDefault: record.preventDefault
          };
        });
        function _VirtualDom_organizeFacts(factList) {
          for (var facts = {}; factList.b; factList = factList.b) {
            var entry = factList.a;
            var tag = entry.$;
            var key = entry.n;
            var value = entry.o;
            if (tag === "a2") {
              key === "className" ? _VirtualDom_addClass(facts, key, _Json_unwrap(value)) : facts[key] = _Json_unwrap(value);
              continue;
            }
            var subFacts = facts[tag] || (facts[tag] = {});
            tag === "a3" && key === "class" ? _VirtualDom_addClass(subFacts, key, value) : subFacts[key] = value;
          }
          return facts;
        }
        function _VirtualDom_addClass(object, key, newClass) {
          var classes = object[key];
          object[key] = classes ? classes + " " + newClass : newClass;
        }
        function _VirtualDom_render(vNode, eventNode) {
          var tag = vNode.$;
          if (tag === 5) {
            return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
          }
          if (tag === 0) {
            return _VirtualDom_doc.createTextNode(vNode.a);
          }
          if (tag === 4) {
            var subNode = vNode.k;
            var tagger = vNode.j;
            while (subNode.$ === 4) {
              typeof tagger !== "object" ? tagger = [tagger, subNode.j] : tagger.push(subNode.j);
              subNode = subNode.k;
            }
            var subEventRoot = { j: tagger, p: eventNode };
            var domNode = _VirtualDom_render(subNode, subEventRoot);
            domNode.elm_event_node_ref = subEventRoot;
            return domNode;
          }
          if (tag === 3) {
            var domNode = vNode.h(vNode.g);
            _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
            return domNode;
          }
          var domNode = vNode.f ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c) : _VirtualDom_doc.createElement(vNode.c);
          if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
            domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
          }
          _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
          for (var kids = vNode.e, i = 0; i < kids.length; i++) {
            _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
          }
          return domNode;
        }
        function _VirtualDom_applyFacts(domNode, eventNode, facts) {
          for (var key in facts) {
            var value = facts[key];
            key === "a1" ? _VirtualDom_applyStyles(domNode, value) : key === "a0" ? _VirtualDom_applyEvents(domNode, eventNode, value) : key === "a3" ? _VirtualDom_applyAttrs(domNode, value) : key === "a4" ? _VirtualDom_applyAttrsNS(domNode, value) : (key !== "value" && key !== "checked" || domNode[key] !== value) && (domNode[key] = value);
          }
        }
        function _VirtualDom_applyStyles(domNode, styles) {
          var domNodeStyle = domNode.style;
          for (var key in styles) {
            domNodeStyle[key] = styles[key];
          }
        }
        function _VirtualDom_applyAttrs(domNode, attrs) {
          for (var key in attrs) {
            var value = attrs[key];
            typeof value !== "undefined" ? domNode.setAttribute(key, value) : domNode.removeAttribute(key);
          }
        }
        function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
          for (var key in nsAttrs) {
            var pair = nsAttrs[key];
            var namespace = pair.f;
            var value = pair.o;
            typeof value !== "undefined" ? domNode.setAttributeNS(namespace, key, value) : domNode.removeAttributeNS(namespace, key);
          }
        }
        function _VirtualDom_applyEvents(domNode, eventNode, events) {
          var allCallbacks = domNode.elmFs || (domNode.elmFs = {});
          for (var key in events) {
            var newHandler = events[key];
            var oldCallback = allCallbacks[key];
            if (!newHandler) {
              domNode.removeEventListener(key, oldCallback);
              allCallbacks[key] = void 0;
              continue;
            }
            if (oldCallback) {
              var oldHandler = oldCallback.q;
              if (oldHandler.$ === newHandler.$) {
                oldCallback.q = newHandler;
                continue;
              }
              domNode.removeEventListener(key, oldCallback);
            }
            oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
            domNode.addEventListener(
              key,
              oldCallback,
              _VirtualDom_passiveSupported && { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
            );
            allCallbacks[key] = oldCallback;
          }
        }
        var _VirtualDom_passiveSupported;
        try {
          window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function() {
              _VirtualDom_passiveSupported = true;
            }
          }));
        } catch (e) {
        }
        function _VirtualDom_makeCallback(eventNode, initialHandler) {
          function callback(event) {
            var handler = callback.q;
            var result = _Json_runHelp(handler.a, event);
            if (!$elm$core$Result$isOk(result)) {
              return;
            }
            var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
            var value = result.a;
            var message = !tag ? value : tag < 3 ? value.a : value.message;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
            var currentEventNode = (stopPropagation && event.stopPropagation(), (tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(), eventNode);
            var tagger;
            var i;
            while (tagger = currentEventNode.j) {
              if (typeof tagger == "function") {
                message = tagger(message);
              } else {
                for (var i = tagger.length; i--; ) {
                  message = tagger[i](message);
                }
              }
              currentEventNode = currentEventNode.p;
            }
            currentEventNode(message, stopPropagation);
          }
          callback.q = initialHandler;
          return callback;
        }
        function _VirtualDom_equalEvents(x, y) {
          return x.$ == y.$ && _Json_equality(x.a, y.a);
        }
        function _VirtualDom_diff(x, y) {
          var patches = [];
          _VirtualDom_diffHelp(x, y, patches, 0);
          return patches;
        }
        function _VirtualDom_pushPatch(patches, type, index, data) {
          var patch = {
            $: type,
            r: index,
            s: data,
            t: void 0,
            u: void 0
          };
          patches.push(patch);
          return patch;
        }
        function _VirtualDom_diffHelp(x, y, patches, index) {
          if (x === y) {
            return;
          }
          var xType = x.$;
          var yType = y.$;
          if (xType !== yType) {
            if (xType === 1 && yType === 2) {
              y = _VirtualDom_dekey(y);
              yType = 1;
            } else {
              _VirtualDom_pushPatch(patches, 0, index, y);
              return;
            }
          }
          switch (yType) {
            case 5:
              var xRefs = x.l;
              var yRefs = y.l;
              var i = xRefs.length;
              var same = i === yRefs.length;
              while (same && i--) {
                same = xRefs[i] === yRefs[i];
              }
              if (same) {
                y.k = x.k;
                return;
              }
              y.k = y.m();
              var subPatches = [];
              _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
              subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
              return;
            case 4:
              var xTaggers = x.j;
              var yTaggers = y.j;
              var nesting = false;
              var xSubNode = x.k;
              while (xSubNode.$ === 4) {
                nesting = true;
                typeof xTaggers !== "object" ? xTaggers = [xTaggers, xSubNode.j] : xTaggers.push(xSubNode.j);
                xSubNode = xSubNode.k;
              }
              var ySubNode = y.k;
              while (ySubNode.$ === 4) {
                nesting = true;
                typeof yTaggers !== "object" ? yTaggers = [yTaggers, ySubNode.j] : yTaggers.push(ySubNode.j);
                ySubNode = ySubNode.k;
              }
              if (nesting && xTaggers.length !== yTaggers.length) {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return;
              }
              if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
                _VirtualDom_pushPatch(patches, 2, index, yTaggers);
              }
              _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
              return;
            case 0:
              if (x.a !== y.a) {
                _VirtualDom_pushPatch(patches, 3, index, y.a);
              }
              return;
            case 1:
              _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
              return;
            case 2:
              _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
              return;
            case 3:
              if (x.h !== y.h) {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return;
              }
              var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
              factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
              var patch = y.i(x.g, y.g);
              patch && _VirtualDom_pushPatch(patches, 5, index, patch);
              return;
          }
        }
        function _VirtualDom_pairwiseRefEqual(as, bs) {
          for (var i = 0; i < as.length; i++) {
            if (as[i] !== bs[i]) {
              return false;
            }
          }
          return true;
        }
        function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
          if (x.c !== y.c || x.f !== y.f) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
          }
          var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
          factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
          diffKids(x, y, patches, index);
        }
        function _VirtualDom_diffFacts(x, y, category) {
          var diff;
          for (var xKey in x) {
            if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
              var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
              if (subDiff) {
                diff = diff || {};
                diff[xKey] = subDiff;
              }
              continue;
            }
            if (!(xKey in y)) {
              diff = diff || {};
              diff[xKey] = !category ? typeof x[xKey] === "string" ? "" : null : category === "a1" ? "" : category === "a0" || category === "a3" ? void 0 : { f: x[xKey].f, o: void 0 };
              continue;
            }
            var xValue = x[xKey];
            var yValue = y[xKey];
            if (xValue === yValue && xKey !== "value" && xKey !== "checked" || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) {
              continue;
            }
            diff = diff || {};
            diff[xKey] = yValue;
          }
          for (var yKey in y) {
            if (!(yKey in x)) {
              diff = diff || {};
              diff[yKey] = y[yKey];
            }
          }
          return diff;
        }
        function _VirtualDom_diffKids(xParent, yParent, patches, index) {
          var xKids = xParent.e;
          var yKids = yParent.e;
          var xLen = xKids.length;
          var yLen = yKids.length;
          if (xLen > yLen) {
            _VirtualDom_pushPatch(patches, 6, index, {
              v: yLen,
              i: xLen - yLen
            });
          } else if (xLen < yLen) {
            _VirtualDom_pushPatch(patches, 7, index, {
              v: xLen,
              e: yKids
            });
          }
          for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
            var xKid = xKids[i];
            _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
            index += xKid.b || 0;
          }
        }
        function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
          var localPatches = [];
          var changes = {};
          var inserts = [];
          var xKids = xParent.e;
          var yKids = yParent.e;
          var xLen = xKids.length;
          var yLen = yKids.length;
          var xIndex = 0;
          var yIndex = 0;
          var index = rootIndex;
          while (xIndex < xLen && yIndex < yLen) {
            var x = xKids[xIndex];
            var y = yKids[yIndex];
            var xKey = x.a;
            var yKey = y.a;
            var xNode = x.b;
            var yNode = y.b;
            var newMatch = void 0;
            var oldMatch = void 0;
            if (xKey === yKey) {
              index++;
              _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
              index += xNode.b || 0;
              xIndex++;
              yIndex++;
              continue;
            }
            var xNext = xKids[xIndex + 1];
            var yNext = yKids[yIndex + 1];
            if (xNext) {
              var xNextKey = xNext.a;
              var xNextNode = xNext.b;
              oldMatch = yKey === xNextKey;
            }
            if (yNext) {
              var yNextKey = yNext.a;
              var yNextNode = yNext.b;
              newMatch = xKey === yNextKey;
            }
            if (newMatch && oldMatch) {
              index++;
              _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
              _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
              index += xNode.b || 0;
              index++;
              _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
              index += xNextNode.b || 0;
              xIndex += 2;
              yIndex += 2;
              continue;
            }
            if (newMatch) {
              index++;
              _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
              _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
              index += xNode.b || 0;
              xIndex += 1;
              yIndex += 2;
              continue;
            }
            if (oldMatch) {
              index++;
              _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
              index += xNode.b || 0;
              index++;
              _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
              index += xNextNode.b || 0;
              xIndex += 2;
              yIndex += 1;
              continue;
            }
            if (xNext && xNextKey === yNextKey) {
              index++;
              _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
              _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
              index += xNode.b || 0;
              index++;
              _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
              index += xNextNode.b || 0;
              xIndex += 2;
              yIndex += 2;
              continue;
            }
            break;
          }
          while (xIndex < xLen) {
            index++;
            var x = xKids[xIndex];
            var xNode = x.b;
            _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
            index += xNode.b || 0;
            xIndex++;
          }
          while (yIndex < yLen) {
            var endInserts = endInserts || [];
            var y = yKids[yIndex];
            _VirtualDom_insertNode(changes, localPatches, y.a, y.b, void 0, endInserts);
            yIndex++;
          }
          if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
            _VirtualDom_pushPatch(patches, 8, rootIndex, {
              w: localPatches,
              x: inserts,
              y: endInserts
            });
          }
        }
        var _VirtualDom_POSTFIX = "_elmW6BL";
        function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
          var entry = changes[key];
          if (!entry) {
            entry = {
              c: 0,
              z: vnode,
              r: yIndex,
              s: void 0
            };
            inserts.push({ r: yIndex, A: entry });
            changes[key] = entry;
            return;
          }
          if (entry.c === 1) {
            inserts.push({ r: yIndex, A: entry });
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
            entry.r = yIndex;
            entry.s.s = {
              w: subPatches,
              A: entry
            };
            return;
          }
          _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
        }
        function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
          var entry = changes[key];
          if (!entry) {
            var patch = _VirtualDom_pushPatch(localPatches, 9, index, void 0);
            changes[key] = {
              c: 1,
              z: vnode,
              r: index,
              s: patch
            };
            return;
          }
          if (entry.c === 0) {
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
            _VirtualDom_pushPatch(localPatches, 9, index, {
              w: subPatches,
              A: entry
            });
            return;
          }
          _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
        }
        function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
          _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
        }
        function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
          var patch = patches[i];
          var index = patch.r;
          while (index === low) {
            var patchType = patch.$;
            if (patchType === 1) {
              _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
            } else if (patchType === 8) {
              patch.t = domNode;
              patch.u = eventNode;
              var subPatches = patch.s.w;
              if (subPatches.length > 0) {
                _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
              }
            } else if (patchType === 9) {
              patch.t = domNode;
              patch.u = eventNode;
              var data = patch.s;
              if (data) {
                data.A.s = domNode;
                var subPatches = data.w;
                if (subPatches.length > 0) {
                  _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                }
              }
            } else {
              patch.t = domNode;
              patch.u = eventNode;
            }
            i++;
            if (!(patch = patches[i]) || (index = patch.r) > high) {
              return i;
            }
          }
          var tag = vNode.$;
          if (tag === 4) {
            var subNode = vNode.k;
            while (subNode.$ === 4) {
              subNode = subNode.k;
            }
            return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
          }
          var vKids = vNode.e;
          var childNodes = domNode.childNodes;
          for (var j = 0; j < vKids.length; j++) {
            low++;
            var vKid = tag === 1 ? vKids[j] : vKids[j].b;
            var nextLow = low + (vKid.b || 0);
            if (low <= index && index <= nextLow) {
              i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
              if (!(patch = patches[i]) || (index = patch.r) > high) {
                return i;
              }
            }
            low = nextLow;
          }
          return i;
        }
        function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
          if (patches.length === 0) {
            return rootDomNode;
          }
          _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
          return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
        }
        function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
          for (var i = 0; i < patches.length; i++) {
            var patch = patches[i];
            var localDomNode = patch.t;
            var newNode = _VirtualDom_applyPatch(localDomNode, patch);
            if (localDomNode === rootDomNode) {
              rootDomNode = newNode;
            }
          }
          return rootDomNode;
        }
        function _VirtualDom_applyPatch(domNode, patch) {
          switch (patch.$) {
            case 0:
              return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
            case 4:
              _VirtualDom_applyFacts(domNode, patch.u, patch.s);
              return domNode;
            case 3:
              domNode.replaceData(0, domNode.length, patch.s);
              return domNode;
            case 1:
              return _VirtualDom_applyPatchesHelp(domNode, patch.s);
            case 2:
              if (domNode.elm_event_node_ref) {
                domNode.elm_event_node_ref.j = patch.s;
              } else {
                domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
              }
              return domNode;
            case 6:
              var data = patch.s;
              for (var i = 0; i < data.i; i++) {
                domNode.removeChild(domNode.childNodes[data.v]);
              }
              return domNode;
            case 7:
              var data = patch.s;
              var kids = data.e;
              var i = data.v;
              var theEnd = domNode.childNodes[i];
              for (; i < kids.length; i++) {
                domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
              }
              return domNode;
            case 9:
              var data = patch.s;
              if (!data) {
                domNode.parentNode.removeChild(domNode);
                return domNode;
              }
              var entry = data.A;
              if (typeof entry.r !== "undefined") {
                domNode.parentNode.removeChild(domNode);
              }
              entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
              return domNode;
            case 8:
              return _VirtualDom_applyPatchReorder(domNode, patch);
            case 5:
              return patch.s(domNode);
            default:
              _Debug_crash(10);
          }
        }
        function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
          var parentNode = domNode.parentNode;
          var newNode = _VirtualDom_render(vNode, eventNode);
          if (!newNode.elm_event_node_ref) {
            newNode.elm_event_node_ref = domNode.elm_event_node_ref;
          }
          if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
          }
          return newNode;
        }
        function _VirtualDom_applyPatchReorder(domNode, patch) {
          var data = patch.s;
          var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
          domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
          var inserts = data.x;
          for (var i = 0; i < inserts.length; i++) {
            var insert = inserts[i];
            var entry = insert.A;
            var node = entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u);
            domNode.insertBefore(node, domNode.childNodes[insert.r]);
          }
          if (frag) {
            _VirtualDom_appendChild(domNode, frag);
          }
          return domNode;
        }
        function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
          if (!endInserts) {
            return;
          }
          var frag = _VirtualDom_doc.createDocumentFragment();
          for (var i = 0; i < endInserts.length; i++) {
            var insert = endInserts[i];
            var entry = insert.A;
            _VirtualDom_appendChild(
              frag,
              entry.c === 2 ? entry.s : _VirtualDom_render(entry.z, patch.u)
            );
          }
          return frag;
        }
        function _VirtualDom_virtualize(node) {
          if (node.nodeType === 3) {
            return _VirtualDom_text(node.textContent);
          }
          if (node.nodeType !== 1) {
            return _VirtualDom_text("");
          }
          var attrList = _List_Nil;
          var attrs = node.attributes;
          for (var i = attrs.length; i--; ) {
            var attr = attrs[i];
            var name = attr.name;
            var value = attr.value;
            attrList = _List_Cons(A2(_VirtualDom_attribute, name, value), attrList);
          }
          var tag = node.tagName.toLowerCase();
          var kidList = _List_Nil;
          var kids = node.childNodes;
          for (var i = kids.length; i--; ) {
            kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
          }
          return A3(_VirtualDom_node, tag, attrList, kidList);
        }
        function _VirtualDom_dekey(keyedNode) {
          var keyedKids = keyedNode.e;
          var len = keyedKids.length;
          var kids = new Array(len);
          for (var i = 0; i < len; i++) {
            kids[i] = keyedKids[i].b;
          }
          return {
            $: 1,
            c: keyedNode.c,
            d: keyedNode.d,
            e: kids,
            f: keyedNode.f,
            b: keyedNode.b
          };
        }
        var _Bitwise_and = F2(function(a, b) {
          return a & b;
        });
        var _Bitwise_or = F2(function(a, b) {
          return a | b;
        });
        var _Bitwise_xor = F2(function(a, b) {
          return a ^ b;
        });
        function _Bitwise_complement(a) {
          return ~a;
        }
        ;
        var _Bitwise_shiftLeftBy = F2(function(offset, a) {
          return a << offset;
        });
        var _Bitwise_shiftRightBy = F2(function(offset, a) {
          return a >> offset;
        });
        var _Bitwise_shiftRightZfBy = F2(function(offset, a) {
          return a >>> offset;
        });
        function _Debugger_unsafeCoerce(value) {
          return value;
        }
        var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args) {
          return _Platform_initialize(
            flagDecoder,
            args,
            A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
            $elm$browser$Debugger$Main$wrapUpdate(impl.update),
            $elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
            function(sendToApp, initialModel) {
              var view = impl.view;
              var title = _VirtualDom_doc.title;
              var domNode = args && args["node"] ? args["node"] : _Debug_crash(0);
              var currNode = _VirtualDom_virtualize(domNode);
              var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
              var currPopout;
              var cornerNode = _VirtualDom_doc.createElement("div");
              domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
              var cornerCurr = _VirtualDom_virtualize(cornerNode);
              initialModel.popout.a = sendToApp;
              return _Browser_makeAnimator(initialModel, function(model) {
                var nextNode = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view($elm$browser$Debugger$Main$getUserModel(model)));
                var patches = _VirtualDom_diff(currNode, nextNode);
                domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
                currNode = nextNode;
                var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
                _Debugger_updateBlocker(currBlocker, nextBlocker);
                currBlocker = nextBlocker;
                var cornerNext = $elm$browser$Debugger$Main$cornerView(model);
                var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
                cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
                cornerCurr = cornerNext;
                if (!model.popout.b) {
                  currPopout = void 0;
                  return;
                }
                _VirtualDom_doc = model.popout.b;
                currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
                var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
                var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
                _VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
                currPopout = nextPopout;
                _VirtualDom_doc = document;
              });
            }
          );
        });
        var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args) {
          return _Platform_initialize(
            flagDecoder,
            args,
            A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
            $elm$browser$Debugger$Main$wrapUpdate(impl.update),
            $elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
            function(sendToApp, initialModel) {
              var divertHrefToApp = impl.setup && impl.setup(function(x) {
                return sendToApp($elm$browser$Debugger$Main$UserMsg(x));
              });
              var view = impl.view;
              var title = _VirtualDom_doc.title;
              var bodyNode = _VirtualDom_doc.body;
              var currNode = _VirtualDom_virtualize(bodyNode);
              var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
              var currPopout;
              initialModel.popout.a = sendToApp;
              return _Browser_makeAnimator(initialModel, function(model) {
                _VirtualDom_divertHrefToApp = divertHrefToApp;
                var doc = view($elm$browser$Debugger$Main$getUserModel(model));
                var nextNode = _VirtualDom_node("body")(_List_Nil)(
                  _Utils_ap(
                    A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc.body),
                    _List_Cons($elm$browser$Debugger$Main$cornerView(model), _List_Nil)
                  )
                );
                var patches = _VirtualDom_diff(currNode, nextNode);
                bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
                currNode = nextNode;
                _VirtualDom_divertHrefToApp = 0;
                title !== doc.title && (_VirtualDom_doc.title = title = doc.title);
                var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
                _Debugger_updateBlocker(currBlocker, nextBlocker);
                currBlocker = nextBlocker;
                if (!model.popout.b) {
                  currPopout = void 0;
                  return;
                }
                _VirtualDom_doc = model.popout.b;
                currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
                var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
                var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
                _VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
                currPopout = nextPopout;
                _VirtualDom_doc = document;
              });
            }
          );
        });
        function _Debugger_popout() {
          return {
            b: void 0,
            a: void 0
          };
        }
        function _Debugger_isOpen(popout) {
          return !!popout.b;
        }
        function _Debugger_open(popout) {
          return _Scheduler_binding(function(callback) {
            _Debugger_openWindow(popout);
            callback(_Scheduler_succeed(_Utils_Tuple0));
          });
        }
        function _Debugger_openWindow(popout) {
          var w = $elm$browser$Debugger$Main$initialWindowWidth, h = $elm$browser$Debugger$Main$initialWindowHeight, x = screen.width - w, y = screen.height - h;
          var debuggerWindow = window.open("", "", "width=" + w + ",height=" + h + ",left=" + x + ",top=" + y);
          var doc = debuggerWindow.document;
          doc.title = "Elm Debugger";
          doc.addEventListener("keydown", function(event) {
            event.metaKey && event.which === 82 && window.location.reload();
            event.key === "ArrowUp" && (popout.a($elm$browser$Debugger$Main$Up), event.preventDefault());
            event.key === "ArrowDown" && (popout.a($elm$browser$Debugger$Main$Down), event.preventDefault());
          });
          window.addEventListener("unload", close);
          debuggerWindow.addEventListener("unload", function() {
            popout.b = void 0;
            popout.a($elm$browser$Debugger$Main$NoOp);
            window.removeEventListener("unload", close);
          });
          function close() {
            popout.b = void 0;
            popout.a($elm$browser$Debugger$Main$NoOp);
            debuggerWindow.close();
          }
          popout.b = doc;
        }
        function _Debugger_scroll(popout) {
          return _Scheduler_binding(function(callback) {
            if (popout.b) {
              var msgs = popout.b.getElementById("elm-debugger-sidebar");
              if (msgs && msgs.scrollTop !== 0) {
                msgs.scrollTop = 0;
              }
            }
            callback(_Scheduler_succeed(_Utils_Tuple0));
          });
        }
        var _Debugger_scrollTo = F2(function(id, popout) {
          return _Scheduler_binding(function(callback) {
            if (popout.b) {
              var msg = popout.b.getElementById(id);
              if (msg) {
                msg.scrollIntoView(false);
              }
            }
            callback(_Scheduler_succeed(_Utils_Tuple0));
          });
        });
        function _Debugger_upload(popout) {
          return _Scheduler_binding(function(callback) {
            var doc = popout.b || document;
            var element = doc.createElement("input");
            element.setAttribute("type", "file");
            element.setAttribute("accept", "text/json");
            element.style.display = "none";
            element.addEventListener("change", function(event) {
              var fileReader = new FileReader();
              fileReader.onload = function(e) {
                callback(_Scheduler_succeed(e.target.result));
              };
              fileReader.readAsText(event.target.files[0]);
              doc.body.removeChild(element);
            });
            doc.body.appendChild(element);
            element.click();
          });
        }
        var _Debugger_download = F2(function(historyLength, json) {
          return _Scheduler_binding(function(callback) {
            var fileName = "history-" + historyLength + ".txt";
            var jsonString = JSON.stringify(json);
            var mime = "text/plain;charset=utf-8";
            var done = _Scheduler_succeed(_Utils_Tuple0);
            if (navigator.msSaveBlob) {
              navigator.msSaveBlob(new Blob([jsonString], { type: mime }), fileName);
              return callback(done);
            }
            var element = document.createElement("a");
            element.setAttribute("href", "data:" + mime + "," + encodeURIComponent(jsonString));
            element.setAttribute("download", fileName);
            element.style.display = "none";
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            callback(done);
          });
        });
        function _Debugger_messageToString(value) {
          if (typeof value === "boolean") {
            return value ? "True" : "False";
          }
          if (typeof value === "number") {
            return value + "";
          }
          if (typeof value === "string") {
            return '"' + _Debugger_addSlashes(value, false) + '"';
          }
          if (value instanceof String) {
            return "'" + _Debugger_addSlashes(value, true) + "'";
          }
          if (typeof value !== "object" || value === null || !("$" in value)) {
            return "\u2026";
          }
          if (typeof value.$ === "number") {
            return "\u2026";
          }
          var code = value.$.charCodeAt(0);
          if (code === 35 || 97 <= code && code <= 122) {
            return "\u2026";
          }
          if (["Array_elm_builtin", "Set_elm_builtin", "RBNode_elm_builtin", "RBEmpty_elm_builtin"].indexOf(value.$) >= 0) {
            return "\u2026";
          }
          var keys = Object.keys(value);
          switch (keys.length) {
            case 1:
              return value.$;
            case 2:
              return value.$ + " " + _Debugger_messageToString(value.a);
            default:
              return value.$ + " \u2026 " + _Debugger_messageToString(value[keys[keys.length - 1]]);
          }
        }
        function _Debugger_init(value) {
          if (typeof value === "boolean") {
            return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value ? "True" : "False"), true, _List_Nil);
          }
          if (typeof value === "number") {
            return $elm$browser$Debugger$Expando$Primitive(value + "");
          }
          if (typeof value === "string") {
            return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
          }
          if (value instanceof String) {
            return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
          }
          if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (tag === "::" || tag === "[]") {
              return A3(
                $elm$browser$Debugger$Expando$Sequence,
                $elm$browser$Debugger$Expando$ListSeq,
                true,
                A2($elm$core$List$map, _Debugger_init, value)
              );
            }
            if (tag === "Set_elm_builtin") {
              return A3(
                $elm$browser$Debugger$Expando$Sequence,
                $elm$browser$Debugger$Expando$SetSeq,
                true,
                A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
              );
            }
            if (tag === "RBNode_elm_builtin" || tag == "RBEmpty_elm_builtin") {
              return A2(
                $elm$browser$Debugger$Expando$Dictionary,
                true,
                A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
              );
            }
            if (tag === "Array_elm_builtin") {
              return A3(
                $elm$browser$Debugger$Expando$Sequence,
                $elm$browser$Debugger$Expando$ArraySeq,
                true,
                A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
              );
            }
            if (typeof tag === "number") {
              return $elm$browser$Debugger$Expando$Primitive("<internals>");
            }
            var char = tag.charCodeAt(0);
            if (char === 35 || 65 <= char && char <= 90) {
              var list = _List_Nil;
              for (var i in value) {
                if (i === "$")
                  continue;
                list = _List_Cons(_Debugger_init(value[i]), list);
              }
              return A3($elm$browser$Debugger$Expando$Constructor, char === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag), true, $elm$core$List$reverse(list));
            }
            return $elm$browser$Debugger$Expando$Primitive("<internals>");
          }
          if (typeof value === "object") {
            var dict = $elm$core$Dict$empty;
            for (var i in value) {
              dict = A3($elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
            }
            return A2($elm$browser$Debugger$Expando$Record, true, dict);
          }
          return $elm$browser$Debugger$Expando$Primitive("<internals>");
        }
        var _Debugger_initCons = F2(function initConsHelp(value, list) {
          return _List_Cons(_Debugger_init(value), list);
        });
        var _Debugger_initKeyValueCons = F3(function(key, value, list) {
          return _List_Cons(
            _Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
            list
          );
        });
        function _Debugger_addSlashes(str, isChar) {
          var s = str.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
          if (isChar) {
            return s.replace(/\'/g, "\\'");
          } else {
            return s.replace(/\"/g, '\\"');
          }
        }
        function _Debugger_updateBlocker(oldBlocker, newBlocker) {
          if (oldBlocker === newBlocker)
            return;
          var oldEvents = _Debugger_blockerToEvents(oldBlocker);
          var newEvents = _Debugger_blockerToEvents(newBlocker);
          for (var i = 0; i < oldEvents.length; i++) {
            document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
          }
          for (var i = 0; i < newEvents.length; i++) {
            document.addEventListener(newEvents[i], _Debugger_blocker, true);
          }
        }
        function _Debugger_blocker(event) {
          if (event.type === "keydown" && event.metaKey && event.which === 82) {
            return;
          }
          var isScroll = event.type === "scroll" || event.type === "wheel";
          for (var node = event.target; node; node = node.parentNode) {
            if (isScroll ? node.id === "elm-debugger-details" : node.id === "elm-debugger-overlay") {
              return;
            }
          }
          event.stopPropagation();
          event.preventDefault();
        }
        function _Debugger_blockerToEvents(blocker) {
          return blocker === $elm$browser$Debugger$Overlay$BlockNone ? [] : blocker === $elm$browser$Debugger$Overlay$BlockMost ? _Debugger_mostEvents : _Debugger_allEvents;
        }
        var _Debugger_mostEvents = [
          "click",
          "dblclick",
          "mousemove",
          "mouseup",
          "mousedown",
          "mouseenter",
          "mouseleave",
          "touchstart",
          "touchend",
          "touchcancel",
          "touchmove",
          "pointerdown",
          "pointerup",
          "pointerover",
          "pointerout",
          "pointerenter",
          "pointerleave",
          "pointermove",
          "pointercancel",
          "dragstart",
          "drag",
          "dragend",
          "dragenter",
          "dragover",
          "dragleave",
          "drop",
          "keyup",
          "keydown",
          "keypress",
          "input",
          "change",
          "focus",
          "blur"
        ];
        var _Debugger_allEvents = _Debugger_mostEvents.concat("wheel", "scroll");
        var _Debugger_element;
        var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args) {
          return _Platform_initialize(
            flagDecoder,
            args,
            impl.init,
            impl.update,
            impl.subscriptions,
            function(sendToApp, initialModel) {
              var view = impl.view;
              var domNode = args && args["node"] ? args["node"] : _Debug_crash(0);
              var currNode = _VirtualDom_virtualize(domNode);
              return _Browser_makeAnimator(initialModel, function(model) {
                var nextNode = view(model);
                var patches = _VirtualDom_diff(currNode, nextNode);
                domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
                currNode = nextNode;
              });
            }
          );
        });
        var _Debugger_document;
        var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args) {
          return _Platform_initialize(
            flagDecoder,
            args,
            impl.init,
            impl.update,
            impl.subscriptions,
            function(sendToApp, initialModel) {
              var divertHrefToApp = impl.setup && impl.setup(sendToApp);
              var view = impl.view;
              var title = _VirtualDom_doc.title;
              var bodyNode = _VirtualDom_doc.body;
              var currNode = _VirtualDom_virtualize(bodyNode);
              return _Browser_makeAnimator(initialModel, function(model) {
                _VirtualDom_divertHrefToApp = divertHrefToApp;
                var doc = view(model);
                var nextNode = _VirtualDom_node("body")(_List_Nil)(doc.body);
                var patches = _VirtualDom_diff(currNode, nextNode);
                bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
                currNode = nextNode;
                _VirtualDom_divertHrefToApp = 0;
                title !== doc.title && (_VirtualDom_doc.title = title = doc.title);
              });
            }
          );
        });
        var _Browser_cancelAnimationFrame = typeof cancelAnimationFrame !== "undefined" ? cancelAnimationFrame : function(id) {
          clearTimeout(id);
        };
        var _Browser_requestAnimationFrame = typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : function(callback) {
          return setTimeout(callback, 1e3 / 60);
        };
        function _Browser_makeAnimator(model, draw) {
          draw(model);
          var state = 0;
          function updateIfNeeded() {
            state = state === 1 ? 0 : (_Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1);
          }
          return function(nextModel, isSync) {
            model = nextModel;
            isSync ? (draw(model), state === 2 && (state = 1)) : (state === 0 && _Browser_requestAnimationFrame(updateIfNeeded), state = 2);
          };
        }
        function _Browser_application(impl) {
          var onUrlChange = impl.onUrlChange;
          var onUrlRequest = impl.onUrlRequest;
          var key = function() {
            key.a(onUrlChange(_Browser_getUrl()));
          };
          return _Browser_document({
            setup: function(sendToApp) {
              key.a = sendToApp;
              _Browser_window.addEventListener("popstate", key);
              _Browser_window.navigator.userAgent.indexOf("Trident") < 0 || _Browser_window.addEventListener("hashchange", key);
              return F2(function(domNode, event) {
                if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute("download")) {
                  event.preventDefault();
                  var href = domNode.href;
                  var curr = _Browser_getUrl();
                  var next = $elm$url$Url$fromString(href).a;
                  sendToApp(onUrlRequest(
                    next && curr.protocol === next.protocol && curr.host === next.host && curr.port_.a === next.port_.a ? $elm$browser$Browser$Internal(next) : $elm$browser$Browser$External(href)
                  ));
                }
              });
            },
            init: function(flags) {
              return A3(impl.init, flags, _Browser_getUrl(), key);
            },
            view: impl.view,
            update: impl.update,
            subscriptions: impl.subscriptions
          });
        }
        function _Browser_getUrl() {
          return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
        }
        var _Browser_go = F2(function(key, n) {
          return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            n && history.go(n);
            key();
          }));
        });
        var _Browser_pushUrl = F2(function(key, url) {
          return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            history.pushState({}, "", url);
            key();
          }));
        });
        var _Browser_replaceUrl = F2(function(key, url) {
          return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
            history.replaceState({}, "", url);
            key();
          }));
        });
        var _Browser_fakeNode = { addEventListener: function() {
        }, removeEventListener: function() {
        } };
        var _Browser_doc = typeof document !== "undefined" ? document : _Browser_fakeNode;
        var _Browser_window = typeof window !== "undefined" ? window : _Browser_fakeNode;
        var _Browser_on = F3(function(node, eventName, sendToSelf) {
          return _Scheduler_spawn(_Scheduler_binding(function(callback) {
            function handler(event) {
              _Scheduler_rawSpawn(sendToSelf(event));
            }
            node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
            return function() {
              node.removeEventListener(eventName, handler);
            };
          }));
        });
        var _Browser_decodeEvent = F2(function(decoder, event) {
          var result = _Json_runHelp(decoder, event);
          return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
        });
        function _Browser_visibilityInfo() {
          return typeof _VirtualDom_doc.hidden !== "undefined" ? { hidden: "hidden", change: "visibilitychange" } : typeof _VirtualDom_doc.mozHidden !== "undefined" ? { hidden: "mozHidden", change: "mozvisibilitychange" } : typeof _VirtualDom_doc.msHidden !== "undefined" ? { hidden: "msHidden", change: "msvisibilitychange" } : typeof _VirtualDom_doc.webkitHidden !== "undefined" ? { hidden: "webkitHidden", change: "webkitvisibilitychange" } : { hidden: "hidden", change: "visibilitychange" };
        }
        function _Browser_rAF() {
          return _Scheduler_binding(function(callback) {
            var id = _Browser_requestAnimationFrame(function() {
              callback(_Scheduler_succeed(Date.now()));
            });
            return function() {
              _Browser_cancelAnimationFrame(id);
            };
          });
        }
        function _Browser_now() {
          return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(Date.now()));
          });
        }
        function _Browser_withNode(id, doStuff) {
          return _Scheduler_binding(function(callback) {
            _Browser_requestAnimationFrame(function() {
              var node = document.getElementById(id);
              callback(
                node ? _Scheduler_succeed(doStuff(node)) : _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
              );
            });
          });
        }
        function _Browser_withWindow(doStuff) {
          return _Scheduler_binding(function(callback) {
            _Browser_requestAnimationFrame(function() {
              callback(_Scheduler_succeed(doStuff()));
            });
          });
        }
        var _Browser_call = F2(function(functionName, id) {
          return _Browser_withNode(id, function(node) {
            node[functionName]();
            return _Utils_Tuple0;
          });
        });
        function _Browser_getViewport() {
          return {
            scene: _Browser_getScene(),
            viewport: {
              x: _Browser_window.pageXOffset,
              y: _Browser_window.pageYOffset,
              width: _Browser_doc.documentElement.clientWidth,
              height: _Browser_doc.documentElement.clientHeight
            }
          };
        }
        function _Browser_getScene() {
          var body = _Browser_doc.body;
          var elem = _Browser_doc.documentElement;
          return {
            width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
            height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
          };
        }
        var _Browser_setViewport = F2(function(x, y) {
          return _Browser_withWindow(function() {
            _Browser_window.scroll(x, y);
            return _Utils_Tuple0;
          });
        });
        function _Browser_getViewportOf(id) {
          return _Browser_withNode(id, function(node) {
            return {
              scene: {
                width: node.scrollWidth,
                height: node.scrollHeight
              },
              viewport: {
                x: node.scrollLeft,
                y: node.scrollTop,
                width: node.clientWidth,
                height: node.clientHeight
              }
            };
          });
        }
        var _Browser_setViewportOf = F3(function(id, x, y) {
          return _Browser_withNode(id, function(node) {
            node.scrollLeft = x;
            node.scrollTop = y;
            return _Utils_Tuple0;
          });
        });
        function _Browser_getElement(id) {
          return _Browser_withNode(id, function(node) {
            var rect = node.getBoundingClientRect();
            var x = _Browser_window.pageXOffset;
            var y = _Browser_window.pageYOffset;
            return {
              scene: _Browser_getScene(),
              viewport: {
                x,
                y,
                width: _Browser_doc.documentElement.clientWidth,
                height: _Browser_doc.documentElement.clientHeight
              },
              element: {
                x: x + rect.left,
                y: y + rect.top,
                width: rect.width,
                height: rect.height
              }
            };
          });
        }
        function _Browser_reload(skipCache) {
          return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback) {
            _VirtualDom_doc.location.reload(skipCache);
          }));
        }
        function _Browser_load(url) {
          return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback) {
            try {
              _Browser_window.location = url;
            } catch (err) {
              _VirtualDom_doc.location.reload(false);
            }
          }));
        }
        function _Time_now(millisToPosix) {
          return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(millisToPosix(Date.now())));
          });
        }
        var _Time_setInterval = F2(function(interval, task) {
          return _Scheduler_binding(function(callback) {
            var id = setInterval(function() {
              _Scheduler_rawSpawn(task);
            }, interval);
            return function() {
              clearInterval(id);
            };
          });
        });
        function _Time_here() {
          return _Scheduler_binding(function(callback) {
            callback(_Scheduler_succeed(
              A2($elm$time$Time$customZone, -new Date().getTimezoneOffset(), _List_Nil)
            ));
          });
        }
        function _Time_getZoneName() {
          return _Scheduler_binding(function(callback) {
            try {
              var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
            } catch (e) {
              var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
            }
            callback(_Scheduler_succeed(name));
          });
        }
        var $elm$core$Basics$EQ = { $: "EQ" };
        var $elm$core$Basics$GT = { $: "GT" };
        var $elm$core$Basics$LT = { $: "LT" };
        var $elm$core$List$cons = _List_cons;
        var $elm$core$Dict$foldr = F3(
          function(func, acc, t) {
            foldr:
              while (true) {
                if (t.$ === "RBEmpty_elm_builtin") {
                  return acc;
                } else {
                  var key = t.b;
                  var value = t.c;
                  var left = t.d;
                  var right = t.e;
                  var $temp$func = func, $temp$acc = A3(
                    func,
                    key,
                    value,
                    A3($elm$core$Dict$foldr, func, acc, right)
                  ), $temp$t = left;
                  func = $temp$func;
                  acc = $temp$acc;
                  t = $temp$t;
                  continue foldr;
                }
              }
          }
        );
        var $elm$core$Dict$toList = function(dict) {
          return A3(
            $elm$core$Dict$foldr,
            F3(
              function(key, value, list) {
                return A2(
                  $elm$core$List$cons,
                  _Utils_Tuple2(key, value),
                  list
                );
              }
            ),
            _List_Nil,
            dict
          );
        };
        var $elm$core$Dict$keys = function(dict) {
          return A3(
            $elm$core$Dict$foldr,
            F3(
              function(key, value, keyList) {
                return A2($elm$core$List$cons, key, keyList);
              }
            ),
            _List_Nil,
            dict
          );
        };
        var $elm$core$Set$toList = function(_v0) {
          var dict = _v0.a;
          return $elm$core$Dict$keys(dict);
        };
        var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
        var $elm$core$Array$foldr = F3(
          function(func, baseCase, _v0) {
            var tree = _v0.c;
            var tail = _v0.d;
            var helper = F2(
              function(node, acc) {
                if (node.$ === "SubTree") {
                  var subTree = node.a;
                  return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
                } else {
                  var values = node.a;
                  return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
                }
              }
            );
            return A3(
              $elm$core$Elm$JsArray$foldr,
              helper,
              A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
              tree
            );
          }
        );
        var $elm$core$Array$toList = function(array) {
          return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
        };
        var $elm$core$Result$Err = function(a) {
          return { $: "Err", a };
        };
        var $elm$json$Json$Decode$Failure = F2(
          function(a, b) {
            return { $: "Failure", a, b };
          }
        );
        var $elm$json$Json$Decode$Field = F2(
          function(a, b) {
            return { $: "Field", a, b };
          }
        );
        var $elm$json$Json$Decode$Index = F2(
          function(a, b) {
            return { $: "Index", a, b };
          }
        );
        var $elm$core$Result$Ok = function(a) {
          return { $: "Ok", a };
        };
        var $elm$json$Json$Decode$OneOf = function(a) {
          return { $: "OneOf", a };
        };
        var $elm$core$Basics$False = { $: "False" };
        var $elm$core$Basics$add = _Basics_add;
        var $elm$core$Maybe$Just = function(a) {
          return { $: "Just", a };
        };
        var $elm$core$Maybe$Nothing = { $: "Nothing" };
        var $elm$core$String$all = _String_all;
        var $elm$core$Basics$and = _Basics_and;
        var $elm$core$Basics$append = _Utils_append;
        var $elm$json$Json$Encode$encode = _Json_encode;
        var $elm$core$String$fromInt = _String_fromNumber;
        var $elm$core$String$join = F2(
          function(sep, chunks) {
            return A2(
              _String_join,
              sep,
              _List_toArray(chunks)
            );
          }
        );
        var $elm$core$String$split = F2(
          function(sep, string) {
            return _List_fromArray(
              A2(_String_split, sep, string)
            );
          }
        );
        var $elm$json$Json$Decode$indent = function(str) {
          return A2(
            $elm$core$String$join,
            "\n    ",
            A2($elm$core$String$split, "\n", str)
          );
        };
        var $elm$core$List$foldl = F3(
          function(func, acc, list) {
            foldl:
              while (true) {
                if (!list.b) {
                  return acc;
                } else {
                  var x = list.a;
                  var xs = list.b;
                  var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                  func = $temp$func;
                  acc = $temp$acc;
                  list = $temp$list;
                  continue foldl;
                }
              }
          }
        );
        var $elm$core$List$length = function(xs) {
          return A3(
            $elm$core$List$foldl,
            F2(
              function(_v0, i) {
                return i + 1;
              }
            ),
            0,
            xs
          );
        };
        var $elm$core$List$map2 = _List_map2;
        var $elm$core$Basics$le = _Utils_le;
        var $elm$core$Basics$sub = _Basics_sub;
        var $elm$core$List$rangeHelp = F3(
          function(lo, hi, list) {
            rangeHelp:
              while (true) {
                if (_Utils_cmp(lo, hi) < 1) {
                  var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = A2($elm$core$List$cons, hi, list);
                  lo = $temp$lo;
                  hi = $temp$hi;
                  list = $temp$list;
                  continue rangeHelp;
                } else {
                  return list;
                }
              }
          }
        );
        var $elm$core$List$range = F2(
          function(lo, hi) {
            return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
          }
        );
        var $elm$core$List$indexedMap = F2(
          function(f, xs) {
            return A3(
              $elm$core$List$map2,
              f,
              A2(
                $elm$core$List$range,
                0,
                $elm$core$List$length(xs) - 1
              ),
              xs
            );
          }
        );
        var $elm$core$Char$toCode = _Char_toCode;
        var $elm$core$Char$isLower = function(_char) {
          var code = $elm$core$Char$toCode(_char);
          return 97 <= code && code <= 122;
        };
        var $elm$core$Char$isUpper = function(_char) {
          var code = $elm$core$Char$toCode(_char);
          return code <= 90 && 65 <= code;
        };
        var $elm$core$Basics$or = _Basics_or;
        var $elm$core$Char$isAlpha = function(_char) {
          return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
        };
        var $elm$core$Char$isDigit = function(_char) {
          var code = $elm$core$Char$toCode(_char);
          return code <= 57 && 48 <= code;
        };
        var $elm$core$Char$isAlphaNum = function(_char) {
          return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
        };
        var $elm$core$List$reverse = function(list) {
          return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
        };
        var $elm$core$String$uncons = _String_uncons;
        var $elm$json$Json$Decode$errorOneOf = F2(
          function(i, error) {
            return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent(
              $elm$json$Json$Decode$errorToString(error)
            )));
          }
        );
        var $elm$json$Json$Decode$errorToString = function(error) {
          return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
        };
        var $elm$json$Json$Decode$errorToStringHelp = F2(
          function(error, context) {
            errorToStringHelp:
              while (true) {
                switch (error.$) {
                  case "Field":
                    var f = error.a;
                    var err = error.b;
                    var isSimple = function() {
                      var _v1 = $elm$core$String$uncons(f);
                      if (_v1.$ === "Nothing") {
                        return false;
                      } else {
                        var _v2 = _v1.a;
                        var _char = _v2.a;
                        var rest = _v2.b;
                        return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
                      }
                    }();
                    var fieldName = isSimple ? "." + f : "['" + (f + "']");
                    var $temp$error = err, $temp$context = A2($elm$core$List$cons, fieldName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                  case "Index":
                    var i = error.a;
                    var err = error.b;
                    var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                    var $temp$error = err, $temp$context = A2($elm$core$List$cons, indexName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                  case "OneOf":
                    var errors = error.a;
                    if (!errors.b) {
                      return "Ran into a Json.Decode.oneOf with no possibilities" + function() {
                        if (!context.b) {
                          return "!";
                        } else {
                          return " at json" + A2(
                            $elm$core$String$join,
                            "",
                            $elm$core$List$reverse(context)
                          );
                        }
                      }();
                    } else {
                      if (!errors.b.b) {
                        var err = errors.a;
                        var $temp$error = err, $temp$context = context;
                        error = $temp$error;
                        context = $temp$context;
                        continue errorToStringHelp;
                      } else {
                        var starter = function() {
                          if (!context.b) {
                            return "Json.Decode.oneOf";
                          } else {
                            return "The Json.Decode.oneOf at json" + A2(
                              $elm$core$String$join,
                              "",
                              $elm$core$List$reverse(context)
                            );
                          }
                        }();
                        var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt(
                          $elm$core$List$length(errors)
                        ) + " ways:"));
                        return A2(
                          $elm$core$String$join,
                          "\n\n",
                          A2(
                            $elm$core$List$cons,
                            introduction,
                            A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)
                          )
                        );
                      }
                    }
                  default:
                    var msg = error.a;
                    var json = error.b;
                    var introduction = function() {
                      if (!context.b) {
                        return "Problem with the given value:\n\n";
                      } else {
                        return "Problem with the value at json" + (A2(
                          $elm$core$String$join,
                          "",
                          $elm$core$List$reverse(context)
                        ) + ":\n\n    ");
                      }
                    }();
                    return introduction + ($elm$json$Json$Decode$indent(
                      A2($elm$json$Json$Encode$encode, 4, json)
                    ) + ("\n\n" + msg));
                }
              }
          }
        );
        var $elm$core$Array$branchFactor = 32;
        var $elm$core$Array$Array_elm_builtin = F4(
          function(a, b, c, d) {
            return { $: "Array_elm_builtin", a, b, c, d };
          }
        );
        var $elm$core$Elm$JsArray$empty = _JsArray_empty;
        var $elm$core$Basics$ceiling = _Basics_ceiling;
        var $elm$core$Basics$fdiv = _Basics_fdiv;
        var $elm$core$Basics$logBase = F2(
          function(base, number) {
            return _Basics_log(number) / _Basics_log(base);
          }
        );
        var $elm$core$Basics$toFloat = _Basics_toFloat;
        var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
          A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor)
        );
        var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
        var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
        var $elm$core$Array$Leaf = function(a) {
          return { $: "Leaf", a };
        };
        var $elm$core$Basics$apL = F2(
          function(f, x) {
            return f(x);
          }
        );
        var $elm$core$Basics$apR = F2(
          function(x, f) {
            return f(x);
          }
        );
        var $elm$core$Basics$eq = _Utils_equal;
        var $elm$core$Basics$floor = _Basics_floor;
        var $elm$core$Elm$JsArray$length = _JsArray_length;
        var $elm$core$Basics$gt = _Utils_gt;
        var $elm$core$Basics$max = F2(
          function(x, y) {
            return _Utils_cmp(x, y) > 0 ? x : y;
          }
        );
        var $elm$core$Basics$mul = _Basics_mul;
        var $elm$core$Array$SubTree = function(a) {
          return { $: "SubTree", a };
        };
        var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
        var $elm$core$Array$compressNodes = F2(
          function(nodes, acc) {
            compressNodes:
              while (true) {
                var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
                var node = _v0.a;
                var remainingNodes = _v0.b;
                var newAcc = A2(
                  $elm$core$List$cons,
                  $elm$core$Array$SubTree(node),
                  acc
                );
                if (!remainingNodes.b) {
                  return $elm$core$List$reverse(newAcc);
                } else {
                  var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                  nodes = $temp$nodes;
                  acc = $temp$acc;
                  continue compressNodes;
                }
              }
          }
        );
        var $elm$core$Tuple$first = function(_v0) {
          var x = _v0.a;
          return x;
        };
        var $elm$core$Array$treeFromBuilder = F2(
          function(nodeList, nodeListSize) {
            treeFromBuilder:
              while (true) {
                var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
                if (newNodeSize === 1) {
                  return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
                } else {
                  var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                  nodeList = $temp$nodeList;
                  nodeListSize = $temp$nodeListSize;
                  continue treeFromBuilder;
                }
              }
          }
        );
        var $elm$core$Array$builderToArray = F2(
          function(reverseNodeList, builder) {
            if (!builder.nodeListSize) {
              return A4(
                $elm$core$Array$Array_elm_builtin,
                $elm$core$Elm$JsArray$length(builder.tail),
                $elm$core$Array$shiftStep,
                $elm$core$Elm$JsArray$empty,
                builder.tail
              );
            } else {
              var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
              var depth = $elm$core$Basics$floor(
                A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1)
              );
              var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
              var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
              return A4(
                $elm$core$Array$Array_elm_builtin,
                $elm$core$Elm$JsArray$length(builder.tail) + treeLen,
                A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
                tree,
                builder.tail
              );
            }
          }
        );
        var $elm$core$Basics$idiv = _Basics_idiv;
        var $elm$core$Basics$lt = _Utils_lt;
        var $elm$core$Array$initializeHelp = F5(
          function(fn, fromIndex, len, nodeList, tail) {
            initializeHelp:
              while (true) {
                if (fromIndex < 0) {
                  return A2(
                    $elm$core$Array$builderToArray,
                    false,
                    { nodeList, nodeListSize: len / $elm$core$Array$branchFactor | 0, tail }
                  );
                } else {
                  var leaf = $elm$core$Array$Leaf(
                    A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn)
                  );
                  var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = A2($elm$core$List$cons, leaf, nodeList), $temp$tail = tail;
                  fn = $temp$fn;
                  fromIndex = $temp$fromIndex;
                  len = $temp$len;
                  nodeList = $temp$nodeList;
                  tail = $temp$tail;
                  continue initializeHelp;
                }
              }
          }
        );
        var $elm$core$Basics$remainderBy = _Basics_remainderBy;
        var $elm$core$Array$initialize = F2(
          function(len, fn) {
            if (len <= 0) {
              return $elm$core$Array$empty;
            } else {
              var tailLen = len % $elm$core$Array$branchFactor;
              var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
              var initialFromIndex = len - tailLen - $elm$core$Array$branchFactor;
              return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
            }
          }
        );
        var $elm$core$Basics$True = { $: "True" };
        var $elm$core$Result$isOk = function(result) {
          if (result.$ === "Ok") {
            return true;
          } else {
            return false;
          }
        };
        var $elm$json$Json$Decode$map = _Json_map1;
        var $elm$json$Json$Decode$map2 = _Json_map2;
        var $elm$json$Json$Decode$succeed = _Json_succeed;
        var $elm$virtual_dom$VirtualDom$toHandlerInt = function(handler) {
          switch (handler.$) {
            case "Normal":
              return 0;
            case "MayStopPropagation":
              return 1;
            case "MayPreventDefault":
              return 2;
            default:
              return 3;
          }
        };
        var $elm$browser$Debugger$Expando$ArraySeq = { $: "ArraySeq" };
        var $elm$browser$Debugger$Overlay$BlockMost = { $: "BlockMost" };
        var $elm$browser$Debugger$Overlay$BlockNone = { $: "BlockNone" };
        var $elm$browser$Debugger$Expando$Constructor = F3(
          function(a, b, c) {
            return { $: "Constructor", a, b, c };
          }
        );
        var $elm$browser$Debugger$Expando$Dictionary = F2(
          function(a, b) {
            return { $: "Dictionary", a, b };
          }
        );
        var $elm$browser$Debugger$Main$Down = { $: "Down" };
        var $elm$browser$Debugger$Expando$ListSeq = { $: "ListSeq" };
        var $elm$browser$Debugger$Main$NoOp = { $: "NoOp" };
        var $elm$browser$Debugger$Expando$Primitive = function(a) {
          return { $: "Primitive", a };
        };
        var $elm$browser$Debugger$Expando$Record = F2(
          function(a, b) {
            return { $: "Record", a, b };
          }
        );
        var $elm$browser$Debugger$Expando$S = function(a) {
          return { $: "S", a };
        };
        var $elm$browser$Debugger$Expando$Sequence = F3(
          function(a, b, c) {
            return { $: "Sequence", a, b, c };
          }
        );
        var $elm$browser$Debugger$Expando$SetSeq = { $: "SetSeq" };
        var $elm$browser$Debugger$Main$Up = { $: "Up" };
        var $elm$browser$Debugger$Main$UserMsg = function(a) {
          return { $: "UserMsg", a };
        };
        var $elm$browser$Debugger$Main$Export = { $: "Export" };
        var $elm$browser$Debugger$Main$Import = { $: "Import" };
        var $elm$browser$Debugger$Main$Open = { $: "Open" };
        var $elm$browser$Debugger$Main$OverlayMsg = function(a) {
          return { $: "OverlayMsg", a };
        };
        var $elm$browser$Debugger$Main$Resume = { $: "Resume" };
        var $elm$browser$Debugger$Main$isPaused = function(state) {
          if (state.$ === "Running") {
            return false;
          } else {
            return true;
          }
        };
        var $elm$browser$Debugger$History$size = function(history2) {
          return history2.numMessages;
        };
        var $elm$browser$Debugger$Overlay$Accept = function(a) {
          return { $: "Accept", a };
        };
        var $elm$browser$Debugger$Overlay$Choose = F2(
          function(a, b) {
            return { $: "Choose", a, b };
          }
        );
        var $elm$html$Html$div = _VirtualDom_node("div");
        var $elm$json$Json$Encode$string = _Json_wrap;
        var $elm$html$Html$Attributes$stringProperty = F2(
          function(key, string) {
            return A2(
              _VirtualDom_property,
              key,
              $elm$json$Json$Encode$string(string)
            );
          }
        );
        var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty("id");
        var $elm$virtual_dom$VirtualDom$Normal = function(a) {
          return { $: "Normal", a };
        };
        var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
        var $elm$html$Html$Events$on = F2(
          function(event, decoder) {
            return A2(
              $elm$virtual_dom$VirtualDom$on,
              event,
              $elm$virtual_dom$VirtualDom$Normal(decoder)
            );
          }
        );
        var $elm$html$Html$Events$onClick = function(msg) {
          return A2(
            $elm$html$Html$Events$on,
            "click",
            $elm$json$Json$Decode$succeed(msg)
          );
        };
        var $elm$html$Html$span = _VirtualDom_node("span");
        var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
        var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
        var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
        var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
        var $elm$html$Html$a = _VirtualDom_node("a");
        var $elm$browser$Debugger$Overlay$goodNews1 = "\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n";
        var $elm$browser$Debugger$Overlay$goodNews2 = "\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n";
        var $elm$html$Html$Attributes$href = function(url) {
          return A2(
            $elm$html$Html$Attributes$stringProperty,
            "href",
            _VirtualDom_noJavaScriptUri(url)
          );
        };
        var $elm$core$List$foldrHelper = F4(
          function(fn, acc, ctr, ls) {
            if (!ls.b) {
              return acc;
            } else {
              var a = ls.a;
              var r1 = ls.b;
              if (!r1.b) {
                return A2(fn, a, acc);
              } else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                  return A2(
                    fn,
                    a,
                    A2(fn, b, acc)
                  );
                } else {
                  var c = r2.a;
                  var r3 = r2.b;
                  if (!r3.b) {
                    return A2(
                      fn,
                      a,
                      A2(
                        fn,
                        b,
                        A2(fn, c, acc)
                      )
                    );
                  } else {
                    var d = r3.a;
                    var r4 = r3.b;
                    var res = ctr > 500 ? A3(
                      $elm$core$List$foldl,
                      fn,
                      acc,
                      $elm$core$List$reverse(r4)
                    ) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
                    return A2(
                      fn,
                      a,
                      A2(
                        fn,
                        b,
                        A2(
                          fn,
                          c,
                          A2(fn, d, res)
                        )
                      )
                    );
                  }
                }
              }
            }
          }
        );
        var $elm$core$List$foldr = F3(
          function(fn, acc, ls) {
            return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
          }
        );
        var $elm$core$List$map = F2(
          function(f, xs) {
            return A3(
              $elm$core$List$foldr,
              F2(
                function(x, acc) {
                  return A2(
                    $elm$core$List$cons,
                    f(x),
                    acc
                  );
                }
              ),
              _List_Nil,
              xs
            );
          }
        );
        var $elm$html$Html$p = _VirtualDom_node("p");
        var $elm$html$Html$ul = _VirtualDom_node("ul");
        var $elm$html$Html$code = _VirtualDom_node("code");
        var $elm$browser$Debugger$Overlay$viewCode = function(name) {
          return A2(
            $elm$html$Html$code,
            _List_Nil,
            _List_fromArray(
              [
                $elm$html$Html$text(name)
              ]
            )
          );
        };
        var $elm$browser$Debugger$Overlay$addCommas = function(items) {
          if (!items.b) {
            return "";
          } else {
            if (!items.b.b) {
              var item = items.a;
              return item;
            } else {
              if (!items.b.b.b) {
                var item1 = items.a;
                var _v1 = items.b;
                var item2 = _v1.a;
                return item1 + (" and " + item2);
              } else {
                var lastItem = items.a;
                var otherItems = items.b;
                return A2(
                  $elm$core$String$join,
                  ", ",
                  _Utils_ap(
                    otherItems,
                    _List_fromArray(
                      [" and " + lastItem]
                    )
                  )
                );
              }
            }
          }
        };
        var $elm$html$Html$li = _VirtualDom_node("li");
        var $elm$browser$Debugger$Overlay$problemToString = function(problem) {
          switch (problem.$) {
            case "Function":
              return "functions";
            case "Decoder":
              return "JSON decoders";
            case "Task":
              return "tasks";
            case "Process":
              return "processes";
            case "Socket":
              return "web sockets";
            case "Request":
              return "HTTP requests";
            case "Program":
              return "programs";
            default:
              return "virtual DOM values";
          }
        };
        var $elm$browser$Debugger$Overlay$viewProblemType = function(_v0) {
          var name = _v0.name;
          var problems = _v0.problems;
          return A2(
            $elm$html$Html$li,
            _List_Nil,
            _List_fromArray(
              [
                $elm$browser$Debugger$Overlay$viewCode(name),
                $elm$html$Html$text(
                  " can contain " + ($elm$browser$Debugger$Overlay$addCommas(
                    A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems)
                  ) + ".")
                )
              ]
            )
          );
        };
        var $elm$browser$Debugger$Overlay$viewBadMetadata = function(_v0) {
          var message = _v0.message;
          var problems = _v0.problems;
          return _List_fromArray(
            [
              A2(
                $elm$html$Html$p,
                _List_Nil,
                _List_fromArray(
                  [
                    $elm$html$Html$text("The "),
                    $elm$browser$Debugger$Overlay$viewCode(message),
                    $elm$html$Html$text(" type of your program cannot be reliably serialized for history files.")
                  ]
                )
              ),
              A2(
                $elm$html$Html$p,
                _List_Nil,
                _List_fromArray(
                  [
                    $elm$html$Html$text("Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:")
                  ]
                )
              ),
              A2(
                $elm$html$Html$ul,
                _List_Nil,
                A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems)
              ),
              A2(
                $elm$html$Html$p,
                _List_Nil,
                _List_fromArray(
                  [
                    $elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
                    A2(
                      $elm$html$Html$a,
                      _List_fromArray(
                        [
                          $elm$html$Html$Attributes$href("https://guide.elm-lang.org/types/custom_types.html")
                        ]
                      ),
                      _List_fromArray(
                        [
                          $elm$html$Html$text("custom types")
                        ]
                      )
                    ),
                    $elm$html$Html$text(", in your messages. From there, your "),
                    $elm$browser$Debugger$Overlay$viewCode("update"),
                    $elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
                  ]
                )
              )
            ]
          );
        };
        var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
        var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
        var $elm$browser$Debugger$Overlay$Cancel = { $: "Cancel" };
        var $elm$browser$Debugger$Overlay$Proceed = { $: "Proceed" };
        var $elm$html$Html$button = _VirtualDom_node("button");
        var $elm$browser$Debugger$Overlay$viewButtons = function(buttons) {
          var btn = F2(
            function(msg, string) {
              return A2(
                $elm$html$Html$button,
                _List_fromArray(
                  [
                    A2($elm$html$Html$Attributes$style, "margin-right", "20px"),
                    $elm$html$Html$Events$onClick(msg)
                  ]
                ),
                _List_fromArray(
                  [
                    $elm$html$Html$text(string)
                  ]
                )
              );
            }
          );
          var buttonNodes = function() {
            if (buttons.$ === "Accept") {
              var proceed = buttons.a;
              return _List_fromArray(
                [
                  A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
                ]
              );
            } else {
              var cancel = buttons.a;
              var proceed = buttons.b;
              return _List_fromArray(
                [
                  A2(btn, $elm$browser$Debugger$Overlay$Cancel, cancel),
                  A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
                ]
              );
            }
          }();
          return A2(
            $elm$html$Html$div,
            _List_fromArray(
              [
                A2($elm$html$Html$Attributes$style, "height", "60px"),
                A2($elm$html$Html$Attributes$style, "line-height", "60px"),
                A2($elm$html$Html$Attributes$style, "text-align", "right"),
                A2($elm$html$Html$Attributes$style, "background-color", "rgb(50, 50, 50)")
              ]
            ),
            buttonNodes
          );
        };
        var $elm$browser$Debugger$Overlay$viewMessage = F4(
          function(config, title, details, buttons) {
            return A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  $elm$html$Html$Attributes$id("elm-debugger-overlay"),
                  A2($elm$html$Html$Attributes$style, "position", "fixed"),
                  A2($elm$html$Html$Attributes$style, "top", "0"),
                  A2($elm$html$Html$Attributes$style, "left", "0"),
                  A2($elm$html$Html$Attributes$style, "width", "100vw"),
                  A2($elm$html$Html$Attributes$style, "height", "100vh"),
                  A2($elm$html$Html$Attributes$style, "color", "white"),
                  A2($elm$html$Html$Attributes$style, "pointer-events", "none"),
                  A2($elm$html$Html$Attributes$style, "font-family", "'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif"),
                  A2($elm$html$Html$Attributes$style, "z-index", "2147483647")
                ]
              ),
              _List_fromArray(
                [
                  A2(
                    $elm$html$Html$div,
                    _List_fromArray(
                      [
                        A2($elm$html$Html$Attributes$style, "position", "absolute"),
                        A2($elm$html$Html$Attributes$style, "width", "600px"),
                        A2($elm$html$Html$Attributes$style, "height", "100vh"),
                        A2($elm$html$Html$Attributes$style, "padding-left", "calc(50% - 300px)"),
                        A2($elm$html$Html$Attributes$style, "padding-right", "calc(50% - 300px)"),
                        A2($elm$html$Html$Attributes$style, "background-color", "rgba(200, 200, 200, 0.7)"),
                        A2($elm$html$Html$Attributes$style, "pointer-events", "auto")
                      ]
                    ),
                    _List_fromArray(
                      [
                        A2(
                          $elm$html$Html$div,
                          _List_fromArray(
                            [
                              A2($elm$html$Html$Attributes$style, "font-size", "36px"),
                              A2($elm$html$Html$Attributes$style, "height", "80px"),
                              A2($elm$html$Html$Attributes$style, "background-color", "rgb(50, 50, 50)"),
                              A2($elm$html$Html$Attributes$style, "padding-left", "22px"),
                              A2($elm$html$Html$Attributes$style, "vertical-align", "middle"),
                              A2($elm$html$Html$Attributes$style, "line-height", "80px")
                            ]
                          ),
                          _List_fromArray(
                            [
                              $elm$html$Html$text(title)
                            ]
                          )
                        ),
                        A2(
                          $elm$html$Html$div,
                          _List_fromArray(
                            [
                              $elm$html$Html$Attributes$id("elm-debugger-details"),
                              A2($elm$html$Html$Attributes$style, "padding", " 8px 20px"),
                              A2($elm$html$Html$Attributes$style, "overflow-y", "auto"),
                              A2($elm$html$Html$Attributes$style, "max-height", "calc(100vh - 156px)"),
                              A2($elm$html$Html$Attributes$style, "background-color", "rgb(61, 61, 61)")
                            ]
                          ),
                          details
                        ),
                        A2(
                          $elm$html$Html$map,
                          config.wrap,
                          $elm$browser$Debugger$Overlay$viewButtons(buttons)
                        )
                      ]
                    )
                  )
                ]
              )
            );
          }
        );
        var $elm$virtual_dom$VirtualDom$attribute = F2(
          function(key, value) {
            return A2(
              _VirtualDom_attribute,
              _VirtualDom_noOnOrFormAction(key),
              _VirtualDom_noJavaScriptOrHtmlUri(value)
            );
          }
        );
        var $elm$core$Basics$negate = function(n) {
          return -n;
        };
        var $elm$virtual_dom$VirtualDom$nodeNS = F2(
          function(namespace, tag) {
            return A2(
              _VirtualDom_nodeNS,
              namespace,
              _VirtualDom_noScript(tag)
            );
          }
        );
        var $elm$core$String$fromFloat = _String_fromNumber;
        var $elm$browser$Debugger$Overlay$viewShape = F4(
          function(x, y, angle, coordinates) {
            return A4(
              $elm$virtual_dom$VirtualDom$nodeNS,
              "http://www.w3.org/2000/svg",
              "polygon",
              _List_fromArray(
                [
                  A2($elm$virtual_dom$VirtualDom$attribute, "points", coordinates),
                  A2(
                    $elm$virtual_dom$VirtualDom$attribute,
                    "transform",
                    "translate(" + ($elm$core$String$fromFloat(x) + (" " + ($elm$core$String$fromFloat(y) + (") rotate(" + ($elm$core$String$fromFloat(-angle) + ")")))))
                  )
                ]
              ),
              _List_Nil
            );
          }
        );
        var $elm$browser$Debugger$Overlay$elmLogo = A4(
          $elm$virtual_dom$VirtualDom$nodeNS,
          "http://www.w3.org/2000/svg",
          "svg",
          _List_fromArray(
            [
              A2($elm$virtual_dom$VirtualDom$attribute, "viewBox", "-300 -300 600 600"),
              A2($elm$virtual_dom$VirtualDom$attribute, "xmlns", "http://www.w3.org/2000/svg"),
              A2($elm$virtual_dom$VirtualDom$attribute, "fill", "currentColor"),
              A2($elm$virtual_dom$VirtualDom$attribute, "width", "24px"),
              A2($elm$virtual_dom$VirtualDom$attribute, "height", "24px")
            ]
          ),
          _List_fromArray(
            [
              A4(
                $elm$virtual_dom$VirtualDom$nodeNS,
                "http://www.w3.org/2000/svg",
                "g",
                _List_fromArray(
                  [
                    A2($elm$virtual_dom$VirtualDom$attribute, "transform", "scale(1 -1)")
                  ]
                ),
                _List_fromArray(
                  [
                    A4($elm$browser$Debugger$Overlay$viewShape, 0, -210, 0, "-280,-90 0,190 280,-90"),
                    A4($elm$browser$Debugger$Overlay$viewShape, -210, 0, 90, "-280,-90 0,190 280,-90"),
                    A4($elm$browser$Debugger$Overlay$viewShape, 207, 207, 45, "-198,-66 0,132 198,-66"),
                    A4($elm$browser$Debugger$Overlay$viewShape, 150, 0, 0, "-130,0 0,-130 130,0 0,130"),
                    A4($elm$browser$Debugger$Overlay$viewShape, -89, 239, 0, "-191,61 69,61 191,-61 -69,-61"),
                    A4($elm$browser$Debugger$Overlay$viewShape, 0, 106, 180, "-130,-44 0,86  130,-44"),
                    A4($elm$browser$Debugger$Overlay$viewShape, 256, -150, 270, "-130,-44 0,86  130,-44")
                  ]
                )
              )
            ]
          )
        );
        var $elm$core$String$length = _String_length;
        var $elm$browser$Debugger$Overlay$viewMiniControls = F2(
          function(config, numMsgs) {
            var string = $elm$core$String$fromInt(numMsgs);
            var width = $elm$core$String$fromInt(
              2 + $elm$core$String$length(string)
            );
            return A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  A2($elm$html$Html$Attributes$style, "position", "fixed"),
                  A2($elm$html$Html$Attributes$style, "bottom", "2em"),
                  A2($elm$html$Html$Attributes$style, "right", "2em"),
                  A2($elm$html$Html$Attributes$style, "width", "calc(42px + " + (width + "ch)")),
                  A2($elm$html$Html$Attributes$style, "height", "36px"),
                  A2($elm$html$Html$Attributes$style, "background-color", "#1293D8"),
                  A2($elm$html$Html$Attributes$style, "color", "white"),
                  A2($elm$html$Html$Attributes$style, "font-family", "monospace"),
                  A2($elm$html$Html$Attributes$style, "pointer-events", "auto"),
                  A2($elm$html$Html$Attributes$style, "z-index", "2147483647"),
                  A2($elm$html$Html$Attributes$style, "display", "flex"),
                  A2($elm$html$Html$Attributes$style, "justify-content", "center"),
                  A2($elm$html$Html$Attributes$style, "align-items", "center"),
                  A2($elm$html$Html$Attributes$style, "cursor", "pointer"),
                  $elm$html$Html$Events$onClick(config.open)
                ]
              ),
              _List_fromArray(
                [
                  $elm$browser$Debugger$Overlay$elmLogo,
                  A2(
                    $elm$html$Html$span,
                    _List_fromArray(
                      [
                        A2($elm$html$Html$Attributes$style, "padding-left", "calc(1ch + 6px)"),
                        A2($elm$html$Html$Attributes$style, "padding-right", "1ch")
                      ]
                    ),
                    _List_fromArray(
                      [
                        $elm$html$Html$text(string)
                      ]
                    )
                  )
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$Overlay$explanationBad = "\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n";
        var $elm$browser$Debugger$Overlay$explanationRisky = "\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n";
        var $elm$core$List$intersperse = F2(
          function(sep, xs) {
            if (!xs.b) {
              return _List_Nil;
            } else {
              var hd = xs.a;
              var tl = xs.b;
              var step = F2(
                function(x, rest) {
                  return A2(
                    $elm$core$List$cons,
                    sep,
                    A2($elm$core$List$cons, x, rest)
                  );
                }
              );
              var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
              return A2($elm$core$List$cons, hd, spersed);
            }
          }
        );
        var $elm$browser$Debugger$Overlay$viewMention = F2(
          function(tags, verbed) {
            var _v0 = A2(
              $elm$core$List$map,
              $elm$browser$Debugger$Overlay$viewCode,
              $elm$core$List$reverse(tags)
            );
            if (!_v0.b) {
              return $elm$html$Html$text("");
            } else {
              if (!_v0.b.b) {
                var tag = _v0.a;
                return A2(
                  $elm$html$Html$li,
                  _List_Nil,
                  _List_fromArray(
                    [
                      $elm$html$Html$text(verbed),
                      tag,
                      $elm$html$Html$text(".")
                    ]
                  )
                );
              } else {
                if (!_v0.b.b.b) {
                  var tag2 = _v0.a;
                  var _v1 = _v0.b;
                  var tag1 = _v1.a;
                  return A2(
                    $elm$html$Html$li,
                    _List_Nil,
                    _List_fromArray(
                      [
                        $elm$html$Html$text(verbed),
                        tag1,
                        $elm$html$Html$text(" and "),
                        tag2,
                        $elm$html$Html$text(".")
                      ]
                    )
                  );
                } else {
                  var lastTag = _v0.a;
                  var otherTags = _v0.b;
                  return A2(
                    $elm$html$Html$li,
                    _List_Nil,
                    A2(
                      $elm$core$List$cons,
                      $elm$html$Html$text(verbed),
                      _Utils_ap(
                        A2(
                          $elm$core$List$intersperse,
                          $elm$html$Html$text(", "),
                          $elm$core$List$reverse(otherTags)
                        ),
                        _List_fromArray(
                          [
                            $elm$html$Html$text(", and "),
                            lastTag,
                            $elm$html$Html$text(".")
                          ]
                        )
                      )
                    )
                  );
                }
              }
            }
          }
        );
        var $elm$browser$Debugger$Overlay$viewChange = function(change) {
          return A2(
            $elm$html$Html$li,
            _List_fromArray(
              [
                A2($elm$html$Html$Attributes$style, "margin", "8px 0")
              ]
            ),
            function() {
              if (change.$ === "AliasChange") {
                var name = change.a;
                return _List_fromArray(
                  [
                    A2(
                      $elm$html$Html$span,
                      _List_fromArray(
                        [
                          A2($elm$html$Html$Attributes$style, "font-size", "1.5em")
                        ]
                      ),
                      _List_fromArray(
                        [
                          $elm$browser$Debugger$Overlay$viewCode(name)
                        ]
                      )
                    )
                  ]
                );
              } else {
                var name = change.a;
                var removed = change.b.removed;
                var changed = change.b.changed;
                var added = change.b.added;
                var argsMatch = change.b.argsMatch;
                return _List_fromArray(
                  [
                    A2(
                      $elm$html$Html$span,
                      _List_fromArray(
                        [
                          A2($elm$html$Html$Attributes$style, "font-size", "1.5em")
                        ]
                      ),
                      _List_fromArray(
                        [
                          $elm$browser$Debugger$Overlay$viewCode(name)
                        ]
                      )
                    ),
                    A2(
                      $elm$html$Html$ul,
                      _List_fromArray(
                        [
                          A2($elm$html$Html$Attributes$style, "list-style-type", "disc"),
                          A2($elm$html$Html$Attributes$style, "padding-left", "2em")
                        ]
                      ),
                      _List_fromArray(
                        [
                          A2($elm$browser$Debugger$Overlay$viewMention, removed, "Removed "),
                          A2($elm$browser$Debugger$Overlay$viewMention, changed, "Changed "),
                          A2($elm$browser$Debugger$Overlay$viewMention, added, "Added ")
                        ]
                      )
                    ),
                    argsMatch ? $elm$html$Html$text("") : $elm$html$Html$text("This may be due to the fact that the type variable names changed.")
                  ]
                );
              }
            }()
          );
        };
        var $elm$browser$Debugger$Overlay$viewReport = F2(
          function(isBad, report) {
            switch (report.$) {
              case "CorruptHistory":
                return _List_fromArray(
                  [
                    $elm$html$Html$text("Looks like this history file is corrupt. I cannot understand it.")
                  ]
                );
              case "VersionChanged":
                var old = report.a;
                var _new = report.b;
                return _List_fromArray(
                  [
                    $elm$html$Html$text("This history was created with Elm " + (old + (", but you are using Elm " + (_new + " right now."))))
                  ]
                );
              case "MessageChanged":
                var old = report.a;
                var _new = report.b;
                return _List_fromArray(
                  [
                    $elm$html$Html$text("To import some other history, the overall message type must be the same. The old history has "),
                    $elm$browser$Debugger$Overlay$viewCode(old),
                    $elm$html$Html$text(" messages, but the new program works with "),
                    $elm$browser$Debugger$Overlay$viewCode(_new),
                    $elm$html$Html$text(" messages.")
                  ]
                );
              default:
                var changes = report.a;
                return _List_fromArray(
                  [
                    A2(
                      $elm$html$Html$p,
                      _List_Nil,
                      _List_fromArray(
                        [
                          $elm$html$Html$text(
                            isBad ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky
                          )
                        ]
                      )
                    ),
                    A2(
                      $elm$html$Html$ul,
                      _List_fromArray(
                        [
                          A2($elm$html$Html$Attributes$style, "list-style-type", "none"),
                          A2($elm$html$Html$Attributes$style, "padding-left", "20px")
                        ]
                      ),
                      A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes)
                    )
                  ]
                );
            }
          }
        );
        var $elm$browser$Debugger$Overlay$view = F5(
          function(config, isPaused, isOpen, numMsgs, state) {
            switch (state.$) {
              case "None":
                return isOpen ? $elm$html$Html$text("") : isPaused ? A2(
                  $elm$html$Html$div,
                  _List_fromArray(
                    [
                      $elm$html$Html$Attributes$id("elm-debugger-overlay"),
                      A2($elm$html$Html$Attributes$style, "position", "fixed"),
                      A2($elm$html$Html$Attributes$style, "top", "0"),
                      A2($elm$html$Html$Attributes$style, "left", "0"),
                      A2($elm$html$Html$Attributes$style, "width", "100vw"),
                      A2($elm$html$Html$Attributes$style, "height", "100vh"),
                      A2($elm$html$Html$Attributes$style, "cursor", "pointer"),
                      A2($elm$html$Html$Attributes$style, "display", "flex"),
                      A2($elm$html$Html$Attributes$style, "align-items", "center"),
                      A2($elm$html$Html$Attributes$style, "justify-content", "center"),
                      A2($elm$html$Html$Attributes$style, "pointer-events", "auto"),
                      A2($elm$html$Html$Attributes$style, "background-color", "rgba(200, 200, 200, 0.7)"),
                      A2($elm$html$Html$Attributes$style, "color", "white"),
                      A2($elm$html$Html$Attributes$style, "font-family", "'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif"),
                      A2($elm$html$Html$Attributes$style, "z-index", "2147483646"),
                      $elm$html$Html$Events$onClick(config.resume)
                    ]
                  ),
                  _List_fromArray(
                    [
                      A2(
                        $elm$html$Html$span,
                        _List_fromArray(
                          [
                            A2($elm$html$Html$Attributes$style, "font-size", "80px")
                          ]
                        ),
                        _List_fromArray(
                          [
                            $elm$html$Html$text("Click to Resume")
                          ]
                        )
                      ),
                      A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
                    ]
                  )
                ) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs);
              case "BadMetadata":
                var badMetadata_ = state.a;
                return A4(
                  $elm$browser$Debugger$Overlay$viewMessage,
                  config,
                  "Cannot use Import or Export",
                  $elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
                  $elm$browser$Debugger$Overlay$Accept("Ok")
                );
              case "BadImport":
                var report = state.a;
                return A4(
                  $elm$browser$Debugger$Overlay$viewMessage,
                  config,
                  "Cannot Import History",
                  A2($elm$browser$Debugger$Overlay$viewReport, true, report),
                  $elm$browser$Debugger$Overlay$Accept("Ok")
                );
              default:
                var report = state.a;
                return A4(
                  $elm$browser$Debugger$Overlay$viewMessage,
                  config,
                  "Warning",
                  A2($elm$browser$Debugger$Overlay$viewReport, false, report),
                  A2($elm$browser$Debugger$Overlay$Choose, "Cancel", "Import Anyway")
                );
            }
          }
        );
        var $elm$browser$Debugger$Main$cornerView = function(model) {
          return A5(
            $elm$browser$Debugger$Overlay$view,
            { exportHistory: $elm$browser$Debugger$Main$Export, importHistory: $elm$browser$Debugger$Main$Import, open: $elm$browser$Debugger$Main$Open, resume: $elm$browser$Debugger$Main$Resume, wrap: $elm$browser$Debugger$Main$OverlayMsg },
            $elm$browser$Debugger$Main$isPaused(model.state),
            _Debugger_isOpen(model.popout),
            $elm$browser$Debugger$History$size(model.history),
            model.overlay
          );
        };
        var $elm$core$Dict$RBEmpty_elm_builtin = { $: "RBEmpty_elm_builtin" };
        var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
        var $elm$core$Set$foldr = F3(
          function(func, initialState, _v0) {
            var dict = _v0.a;
            return A3(
              $elm$core$Dict$foldr,
              F3(
                function(key, _v1, state) {
                  return A2(func, key, state);
                }
              ),
              initialState,
              dict
            );
          }
        );
        var $elm$browser$Debugger$Main$getCurrentModel = function(state) {
          if (state.$ === "Running") {
            var model = state.a;
            return model;
          } else {
            var model = state.b;
            return model;
          }
        };
        var $elm$browser$Debugger$Main$getUserModel = function(model) {
          return $elm$browser$Debugger$Main$getCurrentModel(model.state);
        };
        var $elm$browser$Debugger$Main$initialWindowHeight = 420;
        var $elm$browser$Debugger$Main$initialWindowWidth = 900;
        var $elm$core$Dict$Black = { $: "Black" };
        var $elm$core$Dict$RBNode_elm_builtin = F5(
          function(a, b, c, d, e) {
            return { $: "RBNode_elm_builtin", a, b, c, d, e };
          }
        );
        var $elm$core$Dict$Red = { $: "Red" };
        var $elm$core$Dict$balance = F5(
          function(color, key, value, left, right) {
            if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Red") {
              var _v1 = right.a;
              var rK = right.b;
              var rV = right.c;
              var rLeft = right.d;
              var rRight = right.e;
              if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  $elm$core$Dict$Red,
                  key,
                  value,
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight)
                );
              } else {
                return A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  color,
                  rK,
                  rV,
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
                  rRight
                );
              }
            } else {
              if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red" && left.d.$ === "RBNode_elm_builtin" && left.d.a.$ === "Red") {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  $elm$core$Dict$Red,
                  lK,
                  lV,
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right)
                );
              } else {
                return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
              }
            }
          }
        );
        var $elm$core$Basics$compare = _Utils_compare;
        var $elm$core$Dict$insertHelp = F3(
          function(key, value, dict) {
            if (dict.$ === "RBEmpty_elm_builtin") {
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
            } else {
              var nColor = dict.a;
              var nKey = dict.b;
              var nValue = dict.c;
              var nLeft = dict.d;
              var nRight = dict.e;
              var _v1 = A2($elm$core$Basics$compare, key, nKey);
              switch (_v1.$) {
                case "LT":
                  return A5(
                    $elm$core$Dict$balance,
                    nColor,
                    nKey,
                    nValue,
                    A3($elm$core$Dict$insertHelp, key, value, nLeft),
                    nRight
                  );
                case "EQ":
                  return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
                default:
                  return A5(
                    $elm$core$Dict$balance,
                    nColor,
                    nKey,
                    nValue,
                    nLeft,
                    A3($elm$core$Dict$insertHelp, key, value, nRight)
                  );
              }
            }
          }
        );
        var $elm$core$Dict$insert = F3(
          function(key, value, dict) {
            var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
            if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
              var _v1 = _v0.a;
              var k = _v0.b;
              var v = _v0.c;
              var l = _v0.d;
              var r = _v0.e;
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
            } else {
              var x = _v0;
              return x;
            }
          }
        );
        var $elm$browser$Debugger$Main$cachedHistory = function(model) {
          var _v0 = model.state;
          if (_v0.$ === "Running") {
            return model.history;
          } else {
            var history2 = _v0.e;
            return history2;
          }
        };
        var $elm$virtual_dom$VirtualDom$node = function(tag) {
          return _VirtualDom_node(
            _VirtualDom_noScript(tag)
          );
        };
        var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
        var $elm$browser$Debugger$Main$DragEnd = { $: "DragEnd" };
        var $elm$browser$Debugger$Main$getDragStatus = function(layout) {
          if (layout.$ === "Horizontal") {
            var status = layout.a;
            return status;
          } else {
            var status = layout.a;
            return status;
          }
        };
        var $elm$browser$Debugger$Main$Drag = function(a) {
          return { $: "Drag", a };
        };
        var $elm$browser$Debugger$Main$DragInfo = F5(
          function(x, y, down, width, height) {
            return { down, height, width, x, y };
          }
        );
        var $elm$json$Json$Decode$field = _Json_decodeField;
        var $elm$json$Json$Decode$at = F2(
          function(fields, decoder) {
            return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
          }
        );
        var $elm$json$Json$Decode$float = _Json_decodeFloat;
        var $elm$browser$Debugger$Main$decodeDimension = function(field) {
          return A2(
            $elm$json$Json$Decode$at,
            _List_fromArray(
              ["currentTarget", "ownerDocument", "defaultView", field]
            ),
            $elm$json$Json$Decode$float
          );
        };
        var $elm$json$Json$Decode$int = _Json_decodeInt;
        var $elm$json$Json$Decode$map5 = _Json_map5;
        var $elm$browser$Debugger$Main$onMouseMove = A2(
          $elm$html$Html$Events$on,
          "mousemove",
          A2(
            $elm$json$Json$Decode$map,
            $elm$browser$Debugger$Main$Drag,
            A6(
              $elm$json$Json$Decode$map5,
              $elm$browser$Debugger$Main$DragInfo,
              A2($elm$json$Json$Decode$field, "pageX", $elm$json$Json$Decode$float),
              A2($elm$json$Json$Decode$field, "pageY", $elm$json$Json$Decode$float),
              A2(
                $elm$json$Json$Decode$field,
                "buttons",
                A2(
                  $elm$json$Json$Decode$map,
                  function(v) {
                    return v === 1;
                  },
                  $elm$json$Json$Decode$int
                )
              ),
              $elm$browser$Debugger$Main$decodeDimension("innerWidth"),
              $elm$browser$Debugger$Main$decodeDimension("innerHeight")
            )
          )
        );
        var $elm$html$Html$Events$onMouseUp = function(msg) {
          return A2(
            $elm$html$Html$Events$on,
            "mouseup",
            $elm$json$Json$Decode$succeed(msg)
          );
        };
        var $elm$browser$Debugger$Main$toDragListeners = function(layout) {
          var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
          if (_v0.$ === "Static") {
            return _List_Nil;
          } else {
            return _List_fromArray(
              [
                $elm$browser$Debugger$Main$onMouseMove,
                $elm$html$Html$Events$onMouseUp($elm$browser$Debugger$Main$DragEnd)
              ]
            );
          }
        };
        var $elm$browser$Debugger$Main$toFlexDirection = function(layout) {
          if (layout.$ === "Horizontal") {
            return "row";
          } else {
            return "column-reverse";
          }
        };
        var $elm$browser$Debugger$Main$DragStart = { $: "DragStart" };
        var $elm$html$Html$Events$onMouseDown = function(msg) {
          return A2(
            $elm$html$Html$Events$on,
            "mousedown",
            $elm$json$Json$Decode$succeed(msg)
          );
        };
        var $elm$browser$Debugger$Main$toPercent = function(fraction) {
          return $elm$core$String$fromFloat(100 * fraction) + "%";
        };
        var $elm$browser$Debugger$Main$viewDragZone = function(layout) {
          if (layout.$ === "Horizontal") {
            var x = layout.b;
            return A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  A2($elm$html$Html$Attributes$style, "position", "absolute"),
                  A2($elm$html$Html$Attributes$style, "top", "0"),
                  A2(
                    $elm$html$Html$Attributes$style,
                    "left",
                    $elm$browser$Debugger$Main$toPercent(x)
                  ),
                  A2($elm$html$Html$Attributes$style, "margin-left", "-5px"),
                  A2($elm$html$Html$Attributes$style, "width", "10px"),
                  A2($elm$html$Html$Attributes$style, "height", "100%"),
                  A2($elm$html$Html$Attributes$style, "cursor", "col-resize"),
                  $elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
                ]
              ),
              _List_Nil
            );
          } else {
            var y = layout.c;
            return A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  A2($elm$html$Html$Attributes$style, "position", "absolute"),
                  A2(
                    $elm$html$Html$Attributes$style,
                    "top",
                    $elm$browser$Debugger$Main$toPercent(y)
                  ),
                  A2($elm$html$Html$Attributes$style, "left", "0"),
                  A2($elm$html$Html$Attributes$style, "margin-top", "-5px"),
                  A2($elm$html$Html$Attributes$style, "width", "100%"),
                  A2($elm$html$Html$Attributes$style, "height", "10px"),
                  A2($elm$html$Html$Attributes$style, "cursor", "row-resize"),
                  $elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
                ]
              ),
              _List_Nil
            );
          }
        };
        var $elm$browser$Debugger$Main$TweakExpandoModel = function(a) {
          return { $: "TweakExpandoModel", a };
        };
        var $elm$browser$Debugger$Main$TweakExpandoMsg = function(a) {
          return { $: "TweakExpandoMsg", a };
        };
        var $elm$browser$Debugger$Main$toExpandoPercents = function(layout) {
          if (layout.$ === "Horizontal") {
            var x = layout.b;
            return _Utils_Tuple2(
              $elm$browser$Debugger$Main$toPercent(1 - x),
              "100%"
            );
          } else {
            var y = layout.c;
            return _Utils_Tuple2(
              "100%",
              $elm$browser$Debugger$Main$toPercent(y)
            );
          }
        };
        var $elm$browser$Debugger$Main$toMouseBlocker = function(layout) {
          var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
          if (_v0.$ === "Static") {
            return "auto";
          } else {
            return "none";
          }
        };
        var $elm$browser$Debugger$Expando$Field = F2(
          function(a, b) {
            return { $: "Field", a, b };
          }
        );
        var $elm$browser$Debugger$Expando$Index = F3(
          function(a, b, c) {
            return { $: "Index", a, b, c };
          }
        );
        var $elm$browser$Debugger$Expando$Key = { $: "Key" };
        var $elm$browser$Debugger$Expando$None = { $: "None" };
        var $elm$browser$Debugger$Expando$Toggle = { $: "Toggle" };
        var $elm$browser$Debugger$Expando$Value = { $: "Value" };
        var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, "color", "rgb(28, 0, 207)");
        var $elm$core$Basics$composeL = F3(
          function(g, f, x) {
            return g(
              f(x)
            );
          }
        );
        var $elm$browser$Debugger$Expando$leftPad = function(maybeKey) {
          if (maybeKey.$ === "Nothing") {
            return _List_Nil;
          } else {
            return _List_fromArray(
              [
                A2($elm$html$Html$Attributes$style, "padding-left", "4ch")
              ]
            );
          }
        };
        var $elm$browser$Debugger$Expando$makeArrow = function(arrow) {
          return A2(
            $elm$html$Html$span,
            _List_fromArray(
              [
                A2($elm$html$Html$Attributes$style, "color", "#777"),
                A2($elm$html$Html$Attributes$style, "padding-left", "2ch"),
                A2($elm$html$Html$Attributes$style, "width", "2ch"),
                A2($elm$html$Html$Attributes$style, "display", "inline-block")
              ]
            ),
            _List_fromArray(
              [
                $elm$html$Html$text(arrow)
              ]
            )
          );
        };
        var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, "color", "rgb(136, 19, 145)");
        var $elm$browser$Debugger$Expando$lineStarter = F3(
          function(maybeKey, maybeIsClosed, description) {
            var arrow = function() {
              if (maybeIsClosed.$ === "Nothing") {
                return $elm$browser$Debugger$Expando$makeArrow("");
              } else {
                if (maybeIsClosed.a) {
                  return $elm$browser$Debugger$Expando$makeArrow("\u25B8");
                } else {
                  return $elm$browser$Debugger$Expando$makeArrow("\u25BE");
                }
              }
            }();
            if (maybeKey.$ === "Nothing") {
              return A2($elm$core$List$cons, arrow, description);
            } else {
              var key = maybeKey.a;
              return A2(
                $elm$core$List$cons,
                arrow,
                A2(
                  $elm$core$List$cons,
                  A2(
                    $elm$html$Html$span,
                    _List_fromArray(
                      [$elm$browser$Debugger$Expando$purple]
                    ),
                    _List_fromArray(
                      [
                        $elm$html$Html$text(key)
                      ]
                    )
                  ),
                  A2(
                    $elm$core$List$cons,
                    $elm$html$Html$text(" = "),
                    description
                  )
                )
              );
            }
          }
        );
        var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, "color", "rgb(196, 26, 22)");
        var $elm$core$Tuple$second = function(_v0) {
          var y = _v0.b;
          return y;
        };
        var $elm$browser$Debugger$Expando$seqTypeToString = F2(
          function(n, seqType) {
            switch (seqType.$) {
              case "ListSeq":
                return "List(" + ($elm$core$String$fromInt(n) + ")");
              case "SetSeq":
                return "Set(" + ($elm$core$String$fromInt(n) + ")");
              default:
                return "Array(" + ($elm$core$String$fromInt(n) + ")");
            }
          }
        );
        var $elm$core$String$slice = _String_slice;
        var $elm$core$String$left = F2(
          function(n, string) {
            return n < 1 ? "" : A3($elm$core$String$slice, 0, n, string);
          }
        );
        var $elm$core$String$right = F2(
          function(n, string) {
            return n < 1 ? "" : A3(
              $elm$core$String$slice,
              -n,
              $elm$core$String$length(string),
              string
            );
          }
        );
        var $elm$browser$Debugger$Expando$elideMiddle = function(str) {
          return $elm$core$String$length(str) <= 18 ? str : A2($elm$core$String$left, 8, str) + ("..." + A2($elm$core$String$right, 8, str));
        };
        var $elm$core$Dict$isEmpty = function(dict) {
          if (dict.$ === "RBEmpty_elm_builtin") {
            return true;
          } else {
            return false;
          }
        };
        var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
          function(length, starter, entries) {
            if (!entries.b) {
              return _Utils_Tuple2(
                length + 1,
                _List_fromArray(
                  [
                    $elm$html$Html$text("}")
                  ]
                )
              );
            } else {
              var field = entries.a;
              var rest = entries.b;
              var nextLength = length + $elm$core$String$length(field) + 1;
              if (nextLength > 18) {
                return _Utils_Tuple2(
                  length + 2,
                  _List_fromArray(
                    [
                      $elm$html$Html$text("\u2026}")
                    ]
                  )
                );
              } else {
                var _v1 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ",", rest);
                var finalLength = _v1.a;
                var otherHtmls = _v1.b;
                return _Utils_Tuple2(
                  finalLength,
                  A2(
                    $elm$core$List$cons,
                    $elm$html$Html$text(starter),
                    A2(
                      $elm$core$List$cons,
                      A2(
                        $elm$html$Html$span,
                        _List_fromArray(
                          [$elm$browser$Debugger$Expando$purple]
                        ),
                        _List_fromArray(
                          [
                            $elm$html$Html$text(field)
                          ]
                        )
                      ),
                      otherHtmls
                    )
                  )
                );
              }
            }
          }
        );
        var $elm$browser$Debugger$Expando$viewTinyHelp = function(str) {
          return _Utils_Tuple2(
            $elm$core$String$length(str),
            _List_fromArray(
              [
                $elm$html$Html$text(str)
              ]
            )
          );
        };
        var $elm$core$Maybe$withDefault = F2(
          function(_default, maybe) {
            if (maybe.$ === "Just") {
              var value = maybe.a;
              return value;
            } else {
              return _default;
            }
          }
        );
        var $elm$browser$Debugger$Expando$viewExtraTiny = function(value) {
          if (value.$ === "Record") {
            var record = value.b;
            return A3(
              $elm$browser$Debugger$Expando$viewExtraTinyRecord,
              0,
              "{",
              $elm$core$Dict$keys(record)
            );
          } else {
            return $elm$browser$Debugger$Expando$viewTiny(value);
          }
        };
        var $elm$browser$Debugger$Expando$viewTiny = function(value) {
          switch (value.$) {
            case "S":
              var stringRep = value.a;
              var str = $elm$browser$Debugger$Expando$elideMiddle(stringRep);
              return _Utils_Tuple2(
                $elm$core$String$length(str),
                _List_fromArray(
                  [
                    A2(
                      $elm$html$Html$span,
                      _List_fromArray(
                        [$elm$browser$Debugger$Expando$red]
                      ),
                      _List_fromArray(
                        [
                          $elm$html$Html$text(str)
                        ]
                      )
                    )
                  ]
                )
              );
            case "Primitive":
              var stringRep = value.a;
              return _Utils_Tuple2(
                $elm$core$String$length(stringRep),
                _List_fromArray(
                  [
                    A2(
                      $elm$html$Html$span,
                      _List_fromArray(
                        [$elm$browser$Debugger$Expando$blue]
                      ),
                      _List_fromArray(
                        [
                          $elm$html$Html$text(stringRep)
                        ]
                      )
                    )
                  ]
                )
              );
            case "Sequence":
              var seqType = value.a;
              var valueList = value.c;
              return $elm$browser$Debugger$Expando$viewTinyHelp(
                A2(
                  $elm$browser$Debugger$Expando$seqTypeToString,
                  $elm$core$List$length(valueList),
                  seqType
                )
              );
            case "Dictionary":
              var keyValuePairs = value.b;
              return $elm$browser$Debugger$Expando$viewTinyHelp(
                "Dict(" + ($elm$core$String$fromInt(
                  $elm$core$List$length(keyValuePairs)
                ) + ")")
              );
            case "Record":
              var record = value.b;
              return $elm$browser$Debugger$Expando$viewTinyRecord(record);
            default:
              if (!value.c.b) {
                var maybeName = value.a;
                return $elm$browser$Debugger$Expando$viewTinyHelp(
                  A2($elm$core$Maybe$withDefault, "Unit", maybeName)
                );
              } else {
                var maybeName = value.a;
                var valueList = value.c;
                return $elm$browser$Debugger$Expando$viewTinyHelp(
                  function() {
                    if (maybeName.$ === "Nothing") {
                      return "Tuple(" + ($elm$core$String$fromInt(
                        $elm$core$List$length(valueList)
                      ) + ")");
                    } else {
                      var name = maybeName.a;
                      return name + " \u2026";
                    }
                  }()
                );
              }
          }
        };
        var $elm$browser$Debugger$Expando$viewTinyRecord = function(record) {
          return $elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
            2,
            _List_fromArray(
              [
                $elm$html$Html$text("{}")
              ]
            )
          ) : A3(
            $elm$browser$Debugger$Expando$viewTinyRecordHelp,
            0,
            "{ ",
            $elm$core$Dict$toList(record)
          );
        };
        var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
          function(length, starter, entries) {
            if (!entries.b) {
              return _Utils_Tuple2(
                length + 2,
                _List_fromArray(
                  [
                    $elm$html$Html$text(" }")
                  ]
                )
              );
            } else {
              var _v1 = entries.a;
              var field = _v1.a;
              var value = _v1.b;
              var rest = entries.b;
              var fieldLen = $elm$core$String$length(field);
              var _v2 = $elm$browser$Debugger$Expando$viewExtraTiny(value);
              var valueLen = _v2.a;
              var valueHtmls = _v2.b;
              var newLength = length + fieldLen + valueLen + 5;
              if (newLength > 60) {
                return _Utils_Tuple2(
                  length + 4,
                  _List_fromArray(
                    [
                      $elm$html$Html$text(", \u2026 }")
                    ]
                  )
                );
              } else {
                var _v3 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ", ", rest);
                var finalLength = _v3.a;
                var otherHtmls = _v3.b;
                return _Utils_Tuple2(
                  finalLength,
                  A2(
                    $elm$core$List$cons,
                    $elm$html$Html$text(starter),
                    A2(
                      $elm$core$List$cons,
                      A2(
                        $elm$html$Html$span,
                        _List_fromArray(
                          [$elm$browser$Debugger$Expando$purple]
                        ),
                        _List_fromArray(
                          [
                            $elm$html$Html$text(field)
                          ]
                        )
                      ),
                      A2(
                        $elm$core$List$cons,
                        $elm$html$Html$text(" = "),
                        A2(
                          $elm$core$List$cons,
                          A2($elm$html$Html$span, _List_Nil, valueHtmls),
                          otherHtmls
                        )
                      )
                    )
                  )
                );
              }
            }
          }
        );
        var $elm$browser$Debugger$Expando$view = F2(
          function(maybeKey, expando) {
            switch (expando.$) {
              case "S":
                var stringRep = expando.a;
                return A2(
                  $elm$html$Html$div,
                  $elm$browser$Debugger$Expando$leftPad(maybeKey),
                  A3(
                    $elm$browser$Debugger$Expando$lineStarter,
                    maybeKey,
                    $elm$core$Maybe$Nothing,
                    _List_fromArray(
                      [
                        A2(
                          $elm$html$Html$span,
                          _List_fromArray(
                            [$elm$browser$Debugger$Expando$red]
                          ),
                          _List_fromArray(
                            [
                              $elm$html$Html$text(stringRep)
                            ]
                          )
                        )
                      ]
                    )
                  )
                );
              case "Primitive":
                var stringRep = expando.a;
                return A2(
                  $elm$html$Html$div,
                  $elm$browser$Debugger$Expando$leftPad(maybeKey),
                  A3(
                    $elm$browser$Debugger$Expando$lineStarter,
                    maybeKey,
                    $elm$core$Maybe$Nothing,
                    _List_fromArray(
                      [
                        A2(
                          $elm$html$Html$span,
                          _List_fromArray(
                            [$elm$browser$Debugger$Expando$blue]
                          ),
                          _List_fromArray(
                            [
                              $elm$html$Html$text(stringRep)
                            ]
                          )
                        )
                      ]
                    )
                  )
                );
              case "Sequence":
                var seqType = expando.a;
                var isClosed = expando.b;
                var valueList = expando.c;
                return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
              case "Dictionary":
                var isClosed = expando.a;
                var keyValuePairs = expando.b;
                return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
              case "Record":
                var isClosed = expando.a;
                var valueDict = expando.b;
                return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
              default:
                var maybeName = expando.a;
                var isClosed = expando.b;
                var valueList = expando.c;
                return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
            }
          }
        );
        var $elm$browser$Debugger$Expando$viewConstructor = F4(
          function(maybeKey, maybeName, isClosed, valueList) {
            var tinyArgs = A2(
              $elm$core$List$map,
              A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny),
              valueList
            );
            var description = function() {
              var _v7 = _Utils_Tuple2(maybeName, tinyArgs);
              if (_v7.a.$ === "Nothing") {
                if (!_v7.b.b) {
                  var _v8 = _v7.a;
                  return _List_fromArray(
                    [
                      $elm$html$Html$text("()")
                    ]
                  );
                } else {
                  var _v9 = _v7.a;
                  var _v10 = _v7.b;
                  var x = _v10.a;
                  var xs = _v10.b;
                  return A2(
                    $elm$core$List$cons,
                    $elm$html$Html$text("( "),
                    A2(
                      $elm$core$List$cons,
                      A2($elm$html$Html$span, _List_Nil, x),
                      A3(
                        $elm$core$List$foldr,
                        F2(
                          function(args, rest) {
                            return A2(
                              $elm$core$List$cons,
                              $elm$html$Html$text(", "),
                              A2(
                                $elm$core$List$cons,
                                A2($elm$html$Html$span, _List_Nil, args),
                                rest
                              )
                            );
                          }
                        ),
                        _List_fromArray(
                          [
                            $elm$html$Html$text(" )")
                          ]
                        ),
                        xs
                      )
                    )
                  );
                }
              } else {
                if (!_v7.b.b) {
                  var name = _v7.a.a;
                  return _List_fromArray(
                    [
                      $elm$html$Html$text(name)
                    ]
                  );
                } else {
                  var name = _v7.a.a;
                  var _v11 = _v7.b;
                  var x = _v11.a;
                  var xs = _v11.b;
                  return A2(
                    $elm$core$List$cons,
                    $elm$html$Html$text(name + " "),
                    A2(
                      $elm$core$List$cons,
                      A2($elm$html$Html$span, _List_Nil, x),
                      A3(
                        $elm$core$List$foldr,
                        F2(
                          function(args, rest) {
                            return A2(
                              $elm$core$List$cons,
                              $elm$html$Html$text(" "),
                              A2(
                                $elm$core$List$cons,
                                A2($elm$html$Html$span, _List_Nil, args),
                                rest
                              )
                            );
                          }
                        ),
                        _List_Nil,
                        xs
                      )
                    )
                  );
                }
              }
            }();
            var _v4 = function() {
              if (!valueList.b) {
                return _Utils_Tuple2(
                  $elm$core$Maybe$Nothing,
                  A2($elm$html$Html$div, _List_Nil, _List_Nil)
                );
              } else {
                if (!valueList.b.b) {
                  var entry = valueList.a;
                  switch (entry.$) {
                    case "S":
                      return _Utils_Tuple2(
                        $elm$core$Maybe$Nothing,
                        A2($elm$html$Html$div, _List_Nil, _List_Nil)
                      );
                    case "Primitive":
                      return _Utils_Tuple2(
                        $elm$core$Maybe$Nothing,
                        A2($elm$html$Html$div, _List_Nil, _List_Nil)
                      );
                    case "Sequence":
                      var subValueList = entry.c;
                      return _Utils_Tuple2(
                        $elm$core$Maybe$Just(isClosed),
                        isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
                          $elm$html$Html$map,
                          A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
                          $elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)
                        )
                      );
                    case "Dictionary":
                      var keyValuePairs = entry.b;
                      return _Utils_Tuple2(
                        $elm$core$Maybe$Just(isClosed),
                        isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
                          $elm$html$Html$map,
                          A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
                          $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
                        )
                      );
                    case "Record":
                      var record = entry.b;
                      return _Utils_Tuple2(
                        $elm$core$Maybe$Just(isClosed),
                        isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
                          $elm$html$Html$map,
                          A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
                          $elm$browser$Debugger$Expando$viewRecordOpen(record)
                        )
                      );
                    default:
                      var subValueList = entry.c;
                      return _Utils_Tuple2(
                        $elm$core$Maybe$Just(isClosed),
                        isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
                          $elm$html$Html$map,
                          A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
                          $elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)
                        )
                      );
                  }
                } else {
                  return _Utils_Tuple2(
                    $elm$core$Maybe$Just(isClosed),
                    isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList)
                  );
                }
              }
            }();
            var maybeIsClosed = _v4.a;
            var openHtml = _v4.b;
            return A2(
              $elm$html$Html$div,
              $elm$browser$Debugger$Expando$leftPad(maybeKey),
              _List_fromArray(
                [
                  A2(
                    $elm$html$Html$div,
                    _List_fromArray(
                      [
                        $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
                      ]
                    ),
                    A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)
                  ),
                  openHtml
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(
          function(index, value) {
            return A2(
              $elm$html$Html$map,
              A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index),
              A2(
                $elm$browser$Debugger$Expando$view,
                $elm$core$Maybe$Just(
                  $elm$core$String$fromInt(index)
                ),
                value
              )
            );
          }
        );
        var $elm$browser$Debugger$Expando$viewConstructorOpen = function(valueList) {
          return A2(
            $elm$html$Html$div,
            _List_Nil,
            A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList)
          );
        };
        var $elm$browser$Debugger$Expando$viewDictionary = F3(
          function(maybeKey, isClosed, keyValuePairs) {
            var starter = "Dict(" + ($elm$core$String$fromInt(
              $elm$core$List$length(keyValuePairs)
            ) + ")");
            return A2(
              $elm$html$Html$div,
              $elm$browser$Debugger$Expando$leftPad(maybeKey),
              _List_fromArray(
                [
                  A2(
                    $elm$html$Html$div,
                    _List_fromArray(
                      [
                        $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
                      ]
                    ),
                    A3(
                      $elm$browser$Debugger$Expando$lineStarter,
                      maybeKey,
                      $elm$core$Maybe$Just(isClosed),
                      _List_fromArray(
                        [
                          $elm$html$Html$text(starter)
                        ]
                      )
                    )
                  ),
                  isClosed ? $elm$html$Html$text("") : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
          function(index, _v2) {
            var key = _v2.a;
            var value = _v2.b;
            switch (key.$) {
              case "S":
                var stringRep = key.a;
                return A2(
                  $elm$html$Html$map,
                  A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
                  A2(
                    $elm$browser$Debugger$Expando$view,
                    $elm$core$Maybe$Just(stringRep),
                    value
                  )
                );
              case "Primitive":
                var stringRep = key.a;
                return A2(
                  $elm$html$Html$map,
                  A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
                  A2(
                    $elm$browser$Debugger$Expando$view,
                    $elm$core$Maybe$Just(stringRep),
                    value
                  )
                );
              default:
                return A2(
                  $elm$html$Html$div,
                  _List_Nil,
                  _List_fromArray(
                    [
                      A2(
                        $elm$html$Html$map,
                        A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index),
                        A2(
                          $elm$browser$Debugger$Expando$view,
                          $elm$core$Maybe$Just("key"),
                          key
                        )
                      ),
                      A2(
                        $elm$html$Html$map,
                        A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
                        A2(
                          $elm$browser$Debugger$Expando$view,
                          $elm$core$Maybe$Just("value"),
                          value
                        )
                      )
                    ]
                  )
                );
            }
          }
        );
        var $elm$browser$Debugger$Expando$viewDictionaryOpen = function(keyValuePairs) {
          return A2(
            $elm$html$Html$div,
            _List_Nil,
            A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs)
          );
        };
        var $elm$browser$Debugger$Expando$viewRecord = F3(
          function(maybeKey, isClosed, record) {
            var _v1 = isClosed ? _Utils_Tuple3(
              $elm$browser$Debugger$Expando$viewTinyRecord(record).b,
              $elm$html$Html$text(""),
              $elm$html$Html$text("")
            ) : _Utils_Tuple3(
              _List_fromArray(
                [
                  $elm$html$Html$text("{")
                ]
              ),
              $elm$browser$Debugger$Expando$viewRecordOpen(record),
              A2(
                $elm$html$Html$div,
                $elm$browser$Debugger$Expando$leftPad(
                  $elm$core$Maybe$Just(_Utils_Tuple0)
                ),
                _List_fromArray(
                  [
                    $elm$html$Html$text("}")
                  ]
                )
              )
            );
            var start = _v1.a;
            var middle = _v1.b;
            var end = _v1.c;
            return A2(
              $elm$html$Html$div,
              $elm$browser$Debugger$Expando$leftPad(maybeKey),
              _List_fromArray(
                [
                  A2(
                    $elm$html$Html$div,
                    _List_fromArray(
                      [
                        $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
                      ]
                    ),
                    A3(
                      $elm$browser$Debugger$Expando$lineStarter,
                      maybeKey,
                      $elm$core$Maybe$Just(isClosed),
                      start
                    )
                  ),
                  middle,
                  end
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$Expando$viewRecordEntry = function(_v0) {
          var field = _v0.a;
          var value = _v0.b;
          return A2(
            $elm$html$Html$map,
            $elm$browser$Debugger$Expando$Field(field),
            A2(
              $elm$browser$Debugger$Expando$view,
              $elm$core$Maybe$Just(field),
              value
            )
          );
        };
        var $elm$browser$Debugger$Expando$viewRecordOpen = function(record) {
          return A2(
            $elm$html$Html$div,
            _List_Nil,
            A2(
              $elm$core$List$map,
              $elm$browser$Debugger$Expando$viewRecordEntry,
              $elm$core$Dict$toList(record)
            )
          );
        };
        var $elm$browser$Debugger$Expando$viewSequence = F4(
          function(maybeKey, seqType, isClosed, valueList) {
            var starter = A2(
              $elm$browser$Debugger$Expando$seqTypeToString,
              $elm$core$List$length(valueList),
              seqType
            );
            return A2(
              $elm$html$Html$div,
              $elm$browser$Debugger$Expando$leftPad(maybeKey),
              _List_fromArray(
                [
                  A2(
                    $elm$html$Html$div,
                    _List_fromArray(
                      [
                        $elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
                      ]
                    ),
                    A3(
                      $elm$browser$Debugger$Expando$lineStarter,
                      maybeKey,
                      $elm$core$Maybe$Just(isClosed),
                      _List_fromArray(
                        [
                          $elm$html$Html$text(starter)
                        ]
                      )
                    )
                  ),
                  isClosed ? $elm$html$Html$text("") : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$Expando$viewSequenceOpen = function(values) {
          return A2(
            $elm$html$Html$div,
            _List_Nil,
            A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values)
          );
        };
        var $elm$browser$Debugger$Main$viewExpando = F3(
          function(expandoMsg, expandoModel, layout) {
            var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
            var _v0 = $elm$browser$Debugger$Main$toExpandoPercents(layout);
            var w = _v0.a;
            var h = _v0.b;
            return A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  A2($elm$html$Html$Attributes$style, "display", "block"),
                  A2($elm$html$Html$Attributes$style, "width", "calc(" + (w + " - 4em)")),
                  A2($elm$html$Html$Attributes$style, "height", "calc(" + (h + " - 4em)")),
                  A2($elm$html$Html$Attributes$style, "padding", "2em"),
                  A2($elm$html$Html$Attributes$style, "margin", "0"),
                  A2($elm$html$Html$Attributes$style, "overflow", "auto"),
                  A2($elm$html$Html$Attributes$style, "pointer-events", block),
                  A2($elm$html$Html$Attributes$style, "-webkit-user-select", block),
                  A2($elm$html$Html$Attributes$style, "-moz-user-select", block),
                  A2($elm$html$Html$Attributes$style, "-ms-user-select", block),
                  A2($elm$html$Html$Attributes$style, "user-select", block)
                ]
              ),
              _List_fromArray(
                [
                  A2(
                    $elm$html$Html$div,
                    _List_fromArray(
                      [
                        A2($elm$html$Html$Attributes$style, "color", "#ccc"),
                        A2($elm$html$Html$Attributes$style, "padding", "0 0 1em 0")
                      ]
                    ),
                    _List_fromArray(
                      [
                        $elm$html$Html$text("-- MESSAGE")
                      ]
                    )
                  ),
                  A2(
                    $elm$html$Html$map,
                    $elm$browser$Debugger$Main$TweakExpandoMsg,
                    A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoMsg)
                  ),
                  A2(
                    $elm$html$Html$div,
                    _List_fromArray(
                      [
                        A2($elm$html$Html$Attributes$style, "color", "#ccc"),
                        A2($elm$html$Html$Attributes$style, "padding", "1em 0")
                      ]
                    ),
                    _List_fromArray(
                      [
                        $elm$html$Html$text("-- MODEL")
                      ]
                    )
                  ),
                  A2(
                    $elm$html$Html$map,
                    $elm$browser$Debugger$Main$TweakExpandoModel,
                    A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoModel)
                  )
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$Main$Jump = function(a) {
          return { $: "Jump", a };
        };
        var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
        var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
        var $elm$browser$Debugger$Main$toHistoryPercents = function(layout) {
          if (layout.$ === "Horizontal") {
            var x = layout.b;
            return _Utils_Tuple2(
              $elm$browser$Debugger$Main$toPercent(x),
              "100%"
            );
          } else {
            var y = layout.c;
            return _Utils_Tuple2(
              "100%",
              $elm$browser$Debugger$Main$toPercent(1 - y)
            );
          }
        };
        var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
        var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
        var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty("className");
        var $elm$browser$Debugger$History$idForMessageIndex = function(index) {
          return "msg-" + $elm$core$String$fromInt(index);
        };
        var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty("title");
        var $elm$browser$Debugger$History$viewMessage = F3(
          function(currentIndex, index, msg) {
            var messageName = _Debugger_messageToString(msg);
            var className = _Utils_eq(currentIndex, index) ? "elm-debugger-entry elm-debugger-entry-selected" : "elm-debugger-entry";
            return A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  $elm$html$Html$Attributes$id(
                    $elm$browser$Debugger$History$idForMessageIndex(index)
                  ),
                  $elm$html$Html$Attributes$class(className),
                  $elm$html$Html$Events$onClick(index)
                ]
              ),
              _List_fromArray(
                [
                  A2(
                    $elm$html$Html$span,
                    _List_fromArray(
                      [
                        $elm$html$Html$Attributes$title(messageName),
                        $elm$html$Html$Attributes$class("elm-debugger-entry-content")
                      ]
                    ),
                    _List_fromArray(
                      [
                        $elm$html$Html$text(messageName)
                      ]
                    )
                  ),
                  A2(
                    $elm$html$Html$span,
                    _List_fromArray(
                      [
                        $elm$html$Html$Attributes$class("elm-debugger-entry-index")
                      ]
                    ),
                    _List_fromArray(
                      [
                        $elm$html$Html$text(
                          $elm$core$String$fromInt(index)
                        )
                      ]
                    )
                  )
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$History$consMsg = F3(
          function(currentIndex, msg, _v0) {
            var index = _v0.a;
            var rest = _v0.b;
            return _Utils_Tuple2(
              index + 1,
              A2(
                $elm$core$List$cons,
                _Utils_Tuple2(
                  $elm$core$String$fromInt(index),
                  A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex, index, msg)
                ),
                rest
              )
            );
          }
        );
        var $elm$core$Array$length = function(_v0) {
          var len = _v0.a;
          return len;
        };
        var $elm$core$Basics$neq = _Utils_notEqual;
        var $elm$virtual_dom$VirtualDom$keyedNode = function(tag) {
          return _VirtualDom_keyedNode(
            _VirtualDom_noScript(tag)
          );
        };
        var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
        var $elm$browser$Debugger$History$maxSnapshotSize = 31;
        var $elm$browser$Debugger$History$showMoreButton = function(numMessages) {
          var nextIndex = numMessages - 1 - $elm$browser$Debugger$History$maxSnapshotSize * 2;
          var labelText = "View more messages";
          return A2(
            $elm$html$Html$div,
            _List_fromArray(
              [
                $elm$html$Html$Attributes$class("elm-debugger-entry"),
                $elm$html$Html$Events$onClick(nextIndex)
              ]
            ),
            _List_fromArray(
              [
                A2(
                  $elm$html$Html$span,
                  _List_fromArray(
                    [
                      $elm$html$Html$Attributes$title(labelText),
                      $elm$html$Html$Attributes$class("elm-debugger-entry-content")
                    ]
                  ),
                  _List_fromArray(
                    [
                      $elm$html$Html$text(labelText)
                    ]
                  )
                ),
                A2(
                  $elm$html$Html$span,
                  _List_fromArray(
                    [
                      $elm$html$Html$Attributes$class("elm-debugger-entry-index")
                    ]
                  ),
                  _List_Nil
                )
              ]
            )
          );
        };
        var $elm$browser$Debugger$History$styles = A3(
          $elm$html$Html$node,
          "style",
          _List_Nil,
          _List_fromArray(
            [
              $elm$html$Html$text("\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 40px);\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 40px;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n")
            ]
          )
        );
        var $elm$core$Basics$ge = _Utils_ge;
        var $elm$browser$Debugger$History$viewSnapshot = F3(
          function(selectedIndex, index, _v0) {
            var messages = _v0.messages;
            return A3(
              $elm$html$Html$Keyed$node,
              "div",
              _List_Nil,
              A3(
                $elm$core$Array$foldr,
                $elm$browser$Debugger$History$consMsg(selectedIndex),
                _Utils_Tuple2(index, _List_Nil),
                messages
              ).b
            );
          }
        );
        var $elm$browser$Debugger$History$consSnapshot = F3(
          function(selectedIndex, snapshot, _v0) {
            var index = _v0.a;
            var rest = _v0.b;
            var nextIndex = index + $elm$core$Array$length(snapshot.messages);
            var selectedIndexHelp = _Utils_cmp(nextIndex, selectedIndex) > 0 && _Utils_cmp(selectedIndex, index) > -1 ? selectedIndex : -1;
            return _Utils_Tuple2(
              nextIndex,
              A2(
                $elm$core$List$cons,
                A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, selectedIndexHelp, index, snapshot),
                rest
              )
            );
          }
        );
        var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
        var $elm$core$Array$foldl = F3(
          function(func, baseCase, _v0) {
            var tree = _v0.c;
            var tail = _v0.d;
            var helper = F2(
              function(node, acc) {
                if (node.$ === "SubTree") {
                  var subTree = node.a;
                  return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
                } else {
                  var values = node.a;
                  return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
                }
              }
            );
            return A3(
              $elm$core$Elm$JsArray$foldl,
              func,
              A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
              tail
            );
          }
        );
        var $elm$browser$Debugger$History$viewAllSnapshots = F3(
          function(selectedIndex, startIndex, snapshots) {
            return A2(
              $elm$html$Html$div,
              _List_Nil,
              A3(
                $elm$core$Array$foldl,
                $elm$browser$Debugger$History$consSnapshot(selectedIndex),
                _Utils_Tuple2(startIndex, _List_Nil),
                snapshots
              ).b
            );
          }
        );
        var $elm$core$Array$fromListHelp = F3(
          function(list, nodeList, nodeListSize) {
            fromListHelp:
              while (true) {
                var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
                var jsArray = _v0.a;
                var remainingItems = _v0.b;
                if (_Utils_cmp(
                  $elm$core$Elm$JsArray$length(jsArray),
                  $elm$core$Array$branchFactor
                ) < 0) {
                  return A2(
                    $elm$core$Array$builderToArray,
                    true,
                    { nodeList, nodeListSize, tail: jsArray }
                  );
                } else {
                  var $temp$list = remainingItems, $temp$nodeList = A2(
                    $elm$core$List$cons,
                    $elm$core$Array$Leaf(jsArray),
                    nodeList
                  ), $temp$nodeListSize = nodeListSize + 1;
                  list = $temp$list;
                  nodeList = $temp$nodeList;
                  nodeListSize = $temp$nodeListSize;
                  continue fromListHelp;
                }
              }
          }
        );
        var $elm$core$Array$fromList = function(list) {
          if (!list.b) {
            return $elm$core$Array$empty;
          } else {
            return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
          }
        };
        var $elm$core$Bitwise$and = _Bitwise_and;
        var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
        var $elm$core$Array$bitMask = 4294967295 >>> 32 - $elm$core$Array$shiftStep;
        var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
        var $elm$core$Array$getHelp = F3(
          function(shift, index, tree) {
            getHelp:
              while (true) {
                var pos = $elm$core$Array$bitMask & index >>> shift;
                var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
                if (_v0.$ === "SubTree") {
                  var subTree = _v0.a;
                  var $temp$shift = shift - $elm$core$Array$shiftStep, $temp$index = index, $temp$tree = subTree;
                  shift = $temp$shift;
                  index = $temp$index;
                  tree = $temp$tree;
                  continue getHelp;
                } else {
                  var values = _v0.a;
                  return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
                }
              }
          }
        );
        var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
        var $elm$core$Array$tailIndex = function(len) {
          return len >>> 5 << 5;
        };
        var $elm$core$Array$get = F2(
          function(index, _v0) {
            var len = _v0.a;
            var startShift = _v0.b;
            var tree = _v0.c;
            var tail = _v0.d;
            return index < 0 || _Utils_cmp(index, len) > -1 ? $elm$core$Maybe$Nothing : _Utils_cmp(
              index,
              $elm$core$Array$tailIndex(len)
            ) > -1 ? $elm$core$Maybe$Just(
              A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)
            ) : $elm$core$Maybe$Just(
              A3($elm$core$Array$getHelp, startShift, index, tree)
            );
          }
        );
        var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
        var $elm$core$Elm$JsArray$slice = _JsArray_slice;
        var $elm$core$Array$appendHelpBuilder = F2(
          function(tail, builder) {
            var tailLen = $elm$core$Elm$JsArray$length(tail);
            var notAppended = $elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail) - tailLen;
            var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
            return notAppended < 0 ? {
              nodeList: A2(
                $elm$core$List$cons,
                $elm$core$Array$Leaf(appended),
                builder.nodeList
              ),
              nodeListSize: builder.nodeListSize + 1,
              tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
            } : !notAppended ? {
              nodeList: A2(
                $elm$core$List$cons,
                $elm$core$Array$Leaf(appended),
                builder.nodeList
              ),
              nodeListSize: builder.nodeListSize + 1,
              tail: $elm$core$Elm$JsArray$empty
            } : { nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended };
          }
        );
        var $elm$core$List$drop = F2(
          function(n, list) {
            drop:
              while (true) {
                if (n <= 0) {
                  return list;
                } else {
                  if (!list.b) {
                    return list;
                  } else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs;
                    n = $temp$n;
                    list = $temp$list;
                    continue drop;
                  }
                }
              }
          }
        );
        var $elm$core$Array$sliceLeft = F2(
          function(from, array) {
            var len = array.a;
            var tree = array.c;
            var tail = array.d;
            if (!from) {
              return array;
            } else {
              if (_Utils_cmp(
                from,
                $elm$core$Array$tailIndex(len)
              ) > -1) {
                return A4(
                  $elm$core$Array$Array_elm_builtin,
                  len - from,
                  $elm$core$Array$shiftStep,
                  $elm$core$Elm$JsArray$empty,
                  A3(
                    $elm$core$Elm$JsArray$slice,
                    from - $elm$core$Array$tailIndex(len),
                    $elm$core$Elm$JsArray$length(tail),
                    tail
                  )
                );
              } else {
                var skipNodes = from / $elm$core$Array$branchFactor | 0;
                var helper = F2(
                  function(node, acc) {
                    if (node.$ === "SubTree") {
                      var subTree = node.a;
                      return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
                    } else {
                      var leaf = node.a;
                      return A2($elm$core$List$cons, leaf, acc);
                    }
                  }
                );
                var leafNodes = A3(
                  $elm$core$Elm$JsArray$foldr,
                  helper,
                  _List_fromArray(
                    [tail]
                  ),
                  tree
                );
                var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
                if (!nodesToInsert.b) {
                  return $elm$core$Array$empty;
                } else {
                  var head = nodesToInsert.a;
                  var rest = nodesToInsert.b;
                  var firstSlice = from - skipNodes * $elm$core$Array$branchFactor;
                  var initialBuilder = {
                    nodeList: _List_Nil,
                    nodeListSize: 0,
                    tail: A3(
                      $elm$core$Elm$JsArray$slice,
                      firstSlice,
                      $elm$core$Elm$JsArray$length(head),
                      head
                    )
                  };
                  return A2(
                    $elm$core$Array$builderToArray,
                    true,
                    A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest)
                  );
                }
              }
            }
          }
        );
        var $elm$core$Array$fetchNewTail = F4(
          function(shift, end, treeEnd, tree) {
            fetchNewTail:
              while (true) {
                var pos = $elm$core$Array$bitMask & treeEnd >>> shift;
                var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
                if (_v0.$ === "SubTree") {
                  var sub = _v0.a;
                  var $temp$shift = shift - $elm$core$Array$shiftStep, $temp$end = end, $temp$treeEnd = treeEnd, $temp$tree = sub;
                  shift = $temp$shift;
                  end = $temp$end;
                  treeEnd = $temp$treeEnd;
                  tree = $temp$tree;
                  continue fetchNewTail;
                } else {
                  var values = _v0.a;
                  return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
                }
              }
          }
        );
        var $elm$core$Array$hoistTree = F3(
          function(oldShift, newShift, tree) {
            hoistTree:
              while (true) {
                if (_Utils_cmp(oldShift, newShift) < 1 || !$elm$core$Elm$JsArray$length(tree)) {
                  return tree;
                } else {
                  var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
                  if (_v0.$ === "SubTree") {
                    var sub = _v0.a;
                    var $temp$oldShift = oldShift - $elm$core$Array$shiftStep, $temp$newShift = newShift, $temp$tree = sub;
                    oldShift = $temp$oldShift;
                    newShift = $temp$newShift;
                    tree = $temp$tree;
                    continue hoistTree;
                  } else {
                    return tree;
                  }
                }
              }
          }
        );
        var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
        var $elm$core$Array$sliceTree = F3(
          function(shift, endIdx, tree) {
            var lastPos = $elm$core$Array$bitMask & endIdx >>> shift;
            var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
            if (_v0.$ === "SubTree") {
              var sub = _v0.a;
              var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
              return !$elm$core$Elm$JsArray$length(newSub) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
                $elm$core$Elm$JsArray$unsafeSet,
                lastPos,
                $elm$core$Array$SubTree(newSub),
                A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree)
              );
            } else {
              return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
            }
          }
        );
        var $elm$core$Array$sliceRight = F2(
          function(end, array) {
            var len = array.a;
            var startShift = array.b;
            var tree = array.c;
            var tail = array.d;
            if (_Utils_eq(end, len)) {
              return array;
            } else {
              if (_Utils_cmp(
                end,
                $elm$core$Array$tailIndex(len)
              ) > -1) {
                return A4(
                  $elm$core$Array$Array_elm_builtin,
                  end,
                  startShift,
                  tree,
                  A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail)
                );
              } else {
                var endIdx = $elm$core$Array$tailIndex(end);
                var depth = $elm$core$Basics$floor(
                  A2(
                    $elm$core$Basics$logBase,
                    $elm$core$Array$branchFactor,
                    A2($elm$core$Basics$max, 1, endIdx - 1)
                  )
                );
                var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
                return A4(
                  $elm$core$Array$Array_elm_builtin,
                  end,
                  newShift,
                  A3(
                    $elm$core$Array$hoistTree,
                    startShift,
                    newShift,
                    A3($elm$core$Array$sliceTree, startShift, endIdx, tree)
                  ),
                  A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree)
                );
              }
            }
          }
        );
        var $elm$core$Array$translateIndex = F2(
          function(index, _v0) {
            var len = _v0.a;
            var posIndex = index < 0 ? len + index : index;
            return posIndex < 0 ? 0 : _Utils_cmp(posIndex, len) > 0 ? len : posIndex;
          }
        );
        var $elm$core$Array$slice = F3(
          function(from, to, array) {
            var correctTo = A2($elm$core$Array$translateIndex, to, array);
            var correctFrom = A2($elm$core$Array$translateIndex, from, array);
            return _Utils_cmp(correctFrom, correctTo) > 0 ? $elm$core$Array$empty : A2(
              $elm$core$Array$sliceLeft,
              correctFrom,
              A2($elm$core$Array$sliceRight, correctTo, array)
            );
          }
        );
        var $elm$browser$Debugger$History$viewRecentSnapshots = F3(
          function(selectedIndex, recentMessagesNum, snapshots) {
            var messagesToFill = $elm$browser$Debugger$History$maxSnapshotSize - recentMessagesNum;
            var arrayLength = $elm$core$Array$length(snapshots);
            var snapshotsToRender = function() {
              var _v0 = _Utils_Tuple2(
                A2($elm$core$Array$get, arrayLength - 2, snapshots),
                A2($elm$core$Array$get, arrayLength - 1, snapshots)
              );
              if (_v0.a.$ === "Just" && _v0.b.$ === "Just") {
                var fillerSnapshot = _v0.a.a;
                var recentSnapshot = _v0.b.a;
                return $elm$core$Array$fromList(
                  _List_fromArray(
                    [
                      {
                        messages: A3($elm$core$Array$slice, 0, messagesToFill, fillerSnapshot.messages),
                        model: fillerSnapshot.model
                      },
                      recentSnapshot
                    ]
                  )
                );
              } else {
                return snapshots;
              }
            }();
            var startingIndex = arrayLength * $elm$browser$Debugger$History$maxSnapshotSize - $elm$browser$Debugger$History$maxSnapshotSize - messagesToFill;
            return A3($elm$browser$Debugger$History$viewAllSnapshots, selectedIndex, startingIndex, snapshotsToRender);
          }
        );
        var $elm$browser$Debugger$History$view = F2(
          function(maybeIndex, _v0) {
            var snapshots = _v0.snapshots;
            var recent = _v0.recent;
            var numMessages = _v0.numMessages;
            var recentMessageStartIndex = numMessages - recent.numMessages;
            var index = A2($elm$core$Maybe$withDefault, -1, maybeIndex);
            var newStuff = A3(
              $elm$html$Html$Keyed$node,
              "div",
              _List_Nil,
              A3(
                $elm$core$List$foldr,
                $elm$browser$Debugger$History$consMsg(index),
                _Utils_Tuple2(recentMessageStartIndex, _List_Nil),
                recent.messages
              ).b
            );
            var onlyRenderRecentMessages = !_Utils_eq(index, -1) || $elm$core$Array$length(snapshots) < 2;
            var oldStuff = onlyRenderRecentMessages ? A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewAllSnapshots, index, 0, snapshots) : A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewRecentSnapshots, index, recent.numMessages, snapshots);
            return A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  $elm$html$Html$Attributes$id("elm-debugger-sidebar"),
                  A2($elm$html$Html$Attributes$style, "width", "100%"),
                  A2($elm$html$Html$Attributes$style, "overflow-y", "auto"),
                  A2($elm$html$Html$Attributes$style, "height", "calc(100% - 72px)")
                ]
              ),
              A2(
                $elm$core$List$cons,
                $elm$browser$Debugger$History$styles,
                A2(
                  $elm$core$List$cons,
                  newStuff,
                  A2(
                    $elm$core$List$cons,
                    oldStuff,
                    onlyRenderRecentMessages ? _List_Nil : _List_fromArray(
                      [
                        $elm$browser$Debugger$History$showMoreButton(numMessages)
                      ]
                    )
                  )
                )
              )
            );
          }
        );
        var $elm$browser$Debugger$Main$SwapLayout = { $: "SwapLayout" };
        var $elm$browser$Debugger$Main$toHistoryIcon = function(layout) {
          if (layout.$ === "Horizontal") {
            return "M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z";
          } else {
            return "M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z";
          }
        };
        var $elm$browser$Debugger$Main$icon = function(path) {
          return A4(
            $elm$virtual_dom$VirtualDom$nodeNS,
            "http://www.w3.org/2000/svg",
            "svg",
            _List_fromArray(
              [
                A2($elm$virtual_dom$VirtualDom$attribute, "viewBox", "0 0 16 16"),
                A2($elm$virtual_dom$VirtualDom$attribute, "xmlns", "http://www.w3.org/2000/svg"),
                A2($elm$virtual_dom$VirtualDom$attribute, "fill", "currentColor"),
                A2($elm$virtual_dom$VirtualDom$attribute, "width", "16px"),
                A2($elm$virtual_dom$VirtualDom$attribute, "height", "16px")
              ]
            ),
            _List_fromArray(
              [
                A4(
                  $elm$virtual_dom$VirtualDom$nodeNS,
                  "http://www.w3.org/2000/svg",
                  "path",
                  _List_fromArray(
                    [
                      A2($elm$virtual_dom$VirtualDom$attribute, "d", path)
                    ]
                  ),
                  _List_Nil
                )
              ]
            )
          );
        };
        var $elm$browser$Debugger$Main$viewHistoryButton = F3(
          function(label, msg, path) {
            return A2(
              $elm$html$Html$button,
              _List_fromArray(
                [
                  A2($elm$html$Html$Attributes$style, "display", "flex"),
                  A2($elm$html$Html$Attributes$style, "flex-direction", "row"),
                  A2($elm$html$Html$Attributes$style, "align-items", "center"),
                  A2($elm$html$Html$Attributes$style, "background", "none"),
                  A2($elm$html$Html$Attributes$style, "border", "none"),
                  A2($elm$html$Html$Attributes$style, "color", "inherit"),
                  A2($elm$html$Html$Attributes$style, "cursor", "pointer"),
                  $elm$html$Html$Events$onClick(msg)
                ]
              ),
              _List_fromArray(
                [
                  $elm$browser$Debugger$Main$icon(path),
                  A2(
                    $elm$html$Html$span,
                    _List_fromArray(
                      [
                        A2($elm$html$Html$Attributes$style, "padding-left", "6px")
                      ]
                    ),
                    _List_fromArray(
                      [
                        $elm$html$Html$text(label)
                      ]
                    )
                  )
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$Main$viewHistoryOptions = function(layout) {
          return A2(
            $elm$html$Html$div,
            _List_fromArray(
              [
                A2($elm$html$Html$Attributes$style, "width", "100%"),
                A2($elm$html$Html$Attributes$style, "height", "36px"),
                A2($elm$html$Html$Attributes$style, "display", "flex"),
                A2($elm$html$Html$Attributes$style, "flex-direction", "row"),
                A2($elm$html$Html$Attributes$style, "align-items", "center"),
                A2($elm$html$Html$Attributes$style, "justify-content", "space-between"),
                A2($elm$html$Html$Attributes$style, "background-color", "rgb(50, 50, 50)")
              ]
            ),
            _List_fromArray(
              [
                A3(
                  $elm$browser$Debugger$Main$viewHistoryButton,
                  "Swap Layout",
                  $elm$browser$Debugger$Main$SwapLayout,
                  $elm$browser$Debugger$Main$toHistoryIcon(layout)
                ),
                A2(
                  $elm$html$Html$div,
                  _List_fromArray(
                    [
                      A2($elm$html$Html$Attributes$style, "display", "flex"),
                      A2($elm$html$Html$Attributes$style, "flex-direction", "row"),
                      A2($elm$html$Html$Attributes$style, "align-items", "center"),
                      A2($elm$html$Html$Attributes$style, "justify-content", "space-between")
                    ]
                  ),
                  _List_fromArray(
                    [
                      A3($elm$browser$Debugger$Main$viewHistoryButton, "Import", $elm$browser$Debugger$Main$Import, "M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z"),
                      A3($elm$browser$Debugger$Main$viewHistoryButton, "Export", $elm$browser$Debugger$Main$Export, "M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z")
                    ]
                  )
                )
              ]
            )
          );
        };
        var $elm$browser$Debugger$Main$SliderJump = function(a) {
          return { $: "SliderJump", a };
        };
        var $elm$core$Basics$composeR = F3(
          function(f, g, x) {
            return g(
              f(x)
            );
          }
        );
        var $elm$html$Html$input = _VirtualDom_node("input");
        var $elm$browser$Debugger$Main$isPlaying = function(maybeIndex) {
          if (maybeIndex.$ === "Nothing") {
            return true;
          } else {
            return false;
          }
        };
        var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty("max");
        var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty("min");
        var $elm$html$Html$Events$alwaysStop = function(x) {
          return _Utils_Tuple2(x, true);
        };
        var $elm$virtual_dom$VirtualDom$MayStopPropagation = function(a) {
          return { $: "MayStopPropagation", a };
        };
        var $elm$html$Html$Events$stopPropagationOn = F2(
          function(event, decoder) {
            return A2(
              $elm$virtual_dom$VirtualDom$on,
              event,
              $elm$virtual_dom$VirtualDom$MayStopPropagation(decoder)
            );
          }
        );
        var $elm$json$Json$Decode$string = _Json_decodeString;
        var $elm$html$Html$Events$targetValue = A2(
          $elm$json$Json$Decode$at,
          _List_fromArray(
            ["target", "value"]
          ),
          $elm$json$Json$Decode$string
        );
        var $elm$html$Html$Events$onInput = function(tagger) {
          return A2(
            $elm$html$Html$Events$stopPropagationOn,
            "input",
            A2(
              $elm$json$Json$Decode$map,
              $elm$html$Html$Events$alwaysStop,
              A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)
            )
          );
        };
        var $elm$core$String$toInt = _String_toInt;
        var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty("type");
        var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty("value");
        var $elm$browser$Debugger$Main$viewPlayButton = function(playing) {
          return A2(
            $elm$html$Html$button,
            _List_fromArray(
              [
                A2($elm$html$Html$Attributes$style, "background", "#1293D8"),
                A2($elm$html$Html$Attributes$style, "border", "none"),
                A2($elm$html$Html$Attributes$style, "color", "white"),
                A2($elm$html$Html$Attributes$style, "cursor", "pointer"),
                A2($elm$html$Html$Attributes$style, "width", "36px"),
                A2($elm$html$Html$Attributes$style, "height", "36px"),
                $elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume)
              ]
            ),
            _List_fromArray(
              [
                playing ? $elm$browser$Debugger$Main$icon("M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z") : $elm$browser$Debugger$Main$icon("M2 2l12 7l-12 7z")
              ]
            )
          );
        };
        var $elm$browser$Debugger$Main$viewHistorySlider = F2(
          function(history2, maybeIndex) {
            var lastIndex = $elm$browser$Debugger$History$size(history2) - 1;
            var selectedIndex = A2($elm$core$Maybe$withDefault, lastIndex, maybeIndex);
            return A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  A2($elm$html$Html$Attributes$style, "display", "flex"),
                  A2($elm$html$Html$Attributes$style, "flex-direction", "row"),
                  A2($elm$html$Html$Attributes$style, "align-items", "center"),
                  A2($elm$html$Html$Attributes$style, "width", "100%"),
                  A2($elm$html$Html$Attributes$style, "height", "36px"),
                  A2($elm$html$Html$Attributes$style, "background-color", "rgb(50, 50, 50)")
                ]
              ),
              _List_fromArray(
                [
                  A2(
                    $elm$html$Html$Lazy$lazy,
                    $elm$browser$Debugger$Main$viewPlayButton,
                    $elm$browser$Debugger$Main$isPlaying(maybeIndex)
                  ),
                  A2(
                    $elm$html$Html$input,
                    _List_fromArray(
                      [
                        $elm$html$Html$Attributes$type_("range"),
                        A2($elm$html$Html$Attributes$style, "width", "calc(100% - 56px)"),
                        A2($elm$html$Html$Attributes$style, "height", "36px"),
                        A2($elm$html$Html$Attributes$style, "margin", "0 10px"),
                        $elm$html$Html$Attributes$min("0"),
                        $elm$html$Html$Attributes$max(
                          $elm$core$String$fromInt(lastIndex)
                        ),
                        $elm$html$Html$Attributes$value(
                          $elm$core$String$fromInt(selectedIndex)
                        ),
                        $elm$html$Html$Events$onInput(
                          A2(
                            $elm$core$Basics$composeR,
                            $elm$core$String$toInt,
                            A2(
                              $elm$core$Basics$composeR,
                              $elm$core$Maybe$withDefault(lastIndex),
                              $elm$browser$Debugger$Main$SliderJump
                            )
                          )
                        )
                      ]
                    ),
                    _List_Nil
                  )
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$Main$viewHistory = F3(
          function(maybeIndex, history2, layout) {
            var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
            var _v0 = $elm$browser$Debugger$Main$toHistoryPercents(layout);
            var w = _v0.a;
            var h = _v0.b;
            return A2(
              $elm$html$Html$div,
              _List_fromArray(
                [
                  A2($elm$html$Html$Attributes$style, "width", w),
                  A2($elm$html$Html$Attributes$style, "height", h),
                  A2($elm$html$Html$Attributes$style, "display", "flex"),
                  A2($elm$html$Html$Attributes$style, "flex-direction", "column"),
                  A2($elm$html$Html$Attributes$style, "color", "#DDDDDD"),
                  A2($elm$html$Html$Attributes$style, "background-color", "rgb(61, 61, 61)"),
                  A2($elm$html$Html$Attributes$style, "pointer-events", block),
                  A2($elm$html$Html$Attributes$style, "user-select", block)
                ]
              ),
              _List_fromArray(
                [
                  A2($elm$browser$Debugger$Main$viewHistorySlider, history2, maybeIndex),
                  A2(
                    $elm$html$Html$map,
                    $elm$browser$Debugger$Main$Jump,
                    A2($elm$browser$Debugger$History$view, maybeIndex, history2)
                  ),
                  A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewHistoryOptions, layout)
                ]
              )
            );
          }
        );
        var $elm$browser$Debugger$Main$popoutView = function(model) {
          var maybeIndex = function() {
            var _v0 = model.state;
            if (_v0.$ === "Running") {
              return $elm$core$Maybe$Nothing;
            } else {
              var index = _v0.a;
              return $elm$core$Maybe$Just(index);
            }
          }();
          var historyToRender = $elm$browser$Debugger$Main$cachedHistory(model);
          return A3(
            $elm$html$Html$node,
            "body",
            _Utils_ap(
              $elm$browser$Debugger$Main$toDragListeners(model.layout),
              _List_fromArray(
                [
                  A2($elm$html$Html$Attributes$style, "margin", "0"),
                  A2($elm$html$Html$Attributes$style, "padding", "0"),
                  A2($elm$html$Html$Attributes$style, "width", "100%"),
                  A2($elm$html$Html$Attributes$style, "height", "100%"),
                  A2($elm$html$Html$Attributes$style, "font-family", "monospace"),
                  A2($elm$html$Html$Attributes$style, "display", "flex"),
                  A2(
                    $elm$html$Html$Attributes$style,
                    "flex-direction",
                    $elm$browser$Debugger$Main$toFlexDirection(model.layout)
                  )
                ]
              )
            ),
            _List_fromArray(
              [
                A3($elm$browser$Debugger$Main$viewHistory, maybeIndex, historyToRender, model.layout),
                $elm$browser$Debugger$Main$viewDragZone(model.layout),
                A3($elm$browser$Debugger$Main$viewExpando, model.expandoMsg, model.expandoModel, model.layout)
              ]
            )
          );
        };
        var $elm$browser$Debugger$Overlay$BlockAll = { $: "BlockAll" };
        var $elm$browser$Debugger$Overlay$toBlockerType = F2(
          function(isPaused, state) {
            switch (state.$) {
              case "None":
                return isPaused ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
              case "BadMetadata":
                return $elm$browser$Debugger$Overlay$BlockMost;
              case "BadImport":
                return $elm$browser$Debugger$Overlay$BlockMost;
              default:
                return $elm$browser$Debugger$Overlay$BlockMost;
            }
          }
        );
        var $elm$browser$Debugger$Main$toBlockerType = function(model) {
          return A2(
            $elm$browser$Debugger$Overlay$toBlockerType,
            $elm$browser$Debugger$Main$isPaused(model.state),
            model.overlay
          );
        };
        var $elm$browser$Debugger$Main$Horizontal = F3(
          function(a, b, c) {
            return { $: "Horizontal", a, b, c };
          }
        );
        var $elm$browser$Debugger$Main$Running = function(a) {
          return { $: "Running", a };
        };
        var $elm$browser$Debugger$Main$Static = { $: "Static" };
        var $elm$browser$Debugger$Metadata$Error = F2(
          function(message, problems) {
            return { message, problems };
          }
        );
        var $elm$json$Json$Decode$decodeValue = _Json_run;
        var $elm$browser$Debugger$Metadata$Metadata = F2(
          function(versions, types) {
            return { types, versions };
          }
        );
        var $elm$browser$Debugger$Metadata$Types = F3(
          function(message, aliases, unions) {
            return { aliases, message, unions };
          }
        );
        var $elm$browser$Debugger$Metadata$Alias = F2(
          function(args, tipe) {
            return { args, tipe };
          }
        );
        var $elm$json$Json$Decode$list = _Json_decodeList;
        var $elm$browser$Debugger$Metadata$decodeAlias = A3(
          $elm$json$Json$Decode$map2,
          $elm$browser$Debugger$Metadata$Alias,
          A2(
            $elm$json$Json$Decode$field,
            "args",
            $elm$json$Json$Decode$list($elm$json$Json$Decode$string)
          ),
          A2($elm$json$Json$Decode$field, "type", $elm$json$Json$Decode$string)
        );
        var $elm$browser$Debugger$Metadata$Union = F2(
          function(args, tags) {
            return { args, tags };
          }
        );
        var $elm$core$Dict$fromList = function(assocs) {
          return A3(
            $elm$core$List$foldl,
            F2(
              function(_v0, dict) {
                var key = _v0.a;
                var value = _v0.b;
                return A3($elm$core$Dict$insert, key, value, dict);
              }
            ),
            $elm$core$Dict$empty,
            assocs
          );
        };
        var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
        var $elm$json$Json$Decode$dict = function(decoder) {
          return A2(
            $elm$json$Json$Decode$map,
            $elm$core$Dict$fromList,
            $elm$json$Json$Decode$keyValuePairs(decoder)
          );
        };
        var $elm$browser$Debugger$Metadata$decodeUnion = A3(
          $elm$json$Json$Decode$map2,
          $elm$browser$Debugger$Metadata$Union,
          A2(
            $elm$json$Json$Decode$field,
            "args",
            $elm$json$Json$Decode$list($elm$json$Json$Decode$string)
          ),
          A2(
            $elm$json$Json$Decode$field,
            "tags",
            $elm$json$Json$Decode$dict(
              $elm$json$Json$Decode$list($elm$json$Json$Decode$string)
            )
          )
        );
        var $elm$json$Json$Decode$map3 = _Json_map3;
        var $elm$browser$Debugger$Metadata$decodeTypes = A4(
          $elm$json$Json$Decode$map3,
          $elm$browser$Debugger$Metadata$Types,
          A2($elm$json$Json$Decode$field, "message", $elm$json$Json$Decode$string),
          A2(
            $elm$json$Json$Decode$field,
            "aliases",
            $elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)
          ),
          A2(
            $elm$json$Json$Decode$field,
            "unions",
            $elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)
          )
        );
        var $elm$browser$Debugger$Metadata$Versions = function(elm) {
          return { elm };
        };
        var $elm$browser$Debugger$Metadata$decodeVersions = A2(
          $elm$json$Json$Decode$map,
          $elm$browser$Debugger$Metadata$Versions,
          A2($elm$json$Json$Decode$field, "elm", $elm$json$Json$Decode$string)
        );
        var $elm$browser$Debugger$Metadata$decoder = A3(
          $elm$json$Json$Decode$map2,
          $elm$browser$Debugger$Metadata$Metadata,
          A2($elm$json$Json$Decode$field, "versions", $elm$browser$Debugger$Metadata$decodeVersions),
          A2($elm$json$Json$Decode$field, "types", $elm$browser$Debugger$Metadata$decodeTypes)
        );
        var $elm$browser$Debugger$Metadata$ProblemType = F2(
          function(name, problems) {
            return { name, problems };
          }
        );
        var $elm$core$List$maybeCons = F3(
          function(f, mx, xs) {
            var _v0 = f(mx);
            if (_v0.$ === "Just") {
              var x = _v0.a;
              return A2($elm$core$List$cons, x, xs);
            } else {
              return xs;
            }
          }
        );
        var $elm$core$List$filterMap = F2(
          function(f, xs) {
            return A3(
              $elm$core$List$foldr,
              $elm$core$List$maybeCons(f),
              _List_Nil,
              xs
            );
          }
        );
        var $elm$core$String$contains = _String_contains;
        var $elm$browser$Debugger$Metadata$hasProblem = F2(
          function(tipe, _v0) {
            var problem = _v0.a;
            var token = _v0.b;
            return A2($elm$core$String$contains, token, tipe) ? $elm$core$Maybe$Just(problem) : $elm$core$Maybe$Nothing;
          }
        );
        var $elm$browser$Debugger$Metadata$Decoder = { $: "Decoder" };
        var $elm$browser$Debugger$Metadata$Function = { $: "Function" };
        var $elm$browser$Debugger$Metadata$Process = { $: "Process" };
        var $elm$browser$Debugger$Metadata$Program = { $: "Program" };
        var $elm$browser$Debugger$Metadata$Request = { $: "Request" };
        var $elm$browser$Debugger$Metadata$Socket = { $: "Socket" };
        var $elm$browser$Debugger$Metadata$Task = { $: "Task" };
        var $elm$browser$Debugger$Metadata$VirtualDom = { $: "VirtualDom" };
        var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
          [
            _Utils_Tuple2($elm$browser$Debugger$Metadata$Function, "->"),
            _Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, "Json.Decode.Decoder"),
            _Utils_Tuple2($elm$browser$Debugger$Metadata$Task, "Task.Task"),
            _Utils_Tuple2($elm$browser$Debugger$Metadata$Process, "Process.Id"),
            _Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, "WebSocket.LowLevel.WebSocket"),
            _Utils_Tuple2($elm$browser$Debugger$Metadata$Request, "Http.Request"),
            _Utils_Tuple2($elm$browser$Debugger$Metadata$Program, "Platform.Program"),
            _Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, "VirtualDom.Node"),
            _Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, "VirtualDom.Attribute")
          ]
        );
        var $elm$browser$Debugger$Metadata$findProblems = function(tipe) {
          return A2(
            $elm$core$List$filterMap,
            $elm$browser$Debugger$Metadata$hasProblem(tipe),
            $elm$browser$Debugger$Metadata$problemTable
          );
        };
        var $elm$browser$Debugger$Metadata$collectBadAliases = F3(
          function(name, _v0, list) {
            var tipe = _v0.tipe;
            var _v1 = $elm$browser$Debugger$Metadata$findProblems(tipe);
            if (!_v1.b) {
              return list;
            } else {
              var problems = _v1;
              return A2(
                $elm$core$List$cons,
                A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
                list
              );
            }
          }
        );
        var $elm$core$List$append = F2(
          function(xs, ys) {
            if (!ys.b) {
              return xs;
            } else {
              return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
            }
          }
        );
        var $elm$core$List$concat = function(lists) {
          return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
        };
        var $elm$core$List$concatMap = F2(
          function(f, list) {
            return $elm$core$List$concat(
              A2($elm$core$List$map, f, list)
            );
          }
        );
        var $elm$core$Dict$values = function(dict) {
          return A3(
            $elm$core$Dict$foldr,
            F3(
              function(key, value, valueList) {
                return A2($elm$core$List$cons, value, valueList);
              }
            ),
            _List_Nil,
            dict
          );
        };
        var $elm$browser$Debugger$Metadata$collectBadUnions = F3(
          function(name, _v0, list) {
            var tags = _v0.tags;
            var _v1 = A2(
              $elm$core$List$concatMap,
              $elm$browser$Debugger$Metadata$findProblems,
              $elm$core$List$concat(
                $elm$core$Dict$values(tags)
              )
            );
            if (!_v1.b) {
              return list;
            } else {
              var problems = _v1;
              return A2(
                $elm$core$List$cons,
                A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
                list
              );
            }
          }
        );
        var $elm$core$Dict$foldl = F3(
          function(func, acc, dict) {
            foldl:
              while (true) {
                if (dict.$ === "RBEmpty_elm_builtin") {
                  return acc;
                } else {
                  var key = dict.b;
                  var value = dict.c;
                  var left = dict.d;
                  var right = dict.e;
                  var $temp$func = func, $temp$acc = A3(
                    func,
                    key,
                    value,
                    A3($elm$core$Dict$foldl, func, acc, left)
                  ), $temp$dict = right;
                  func = $temp$func;
                  acc = $temp$acc;
                  dict = $temp$dict;
                  continue foldl;
                }
              }
          }
        );
        var $elm$browser$Debugger$Metadata$isPortable = function(_v0) {
          var types = _v0.types;
          var badAliases = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
          var _v1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
          if (!_v1.b) {
            return $elm$core$Maybe$Nothing;
          } else {
            var problems = _v1;
            return $elm$core$Maybe$Just(
              A2($elm$browser$Debugger$Metadata$Error, types.message, problems)
            );
          }
        };
        var $elm$browser$Debugger$Metadata$decode = function(value) {
          var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value);
          if (_v0.$ === "Err") {
            return $elm$core$Result$Err(
              A2($elm$browser$Debugger$Metadata$Error, "The compiler is generating bad metadata. This is a compiler bug!", _List_Nil)
            );
          } else {
            var metadata = _v0.a;
            var _v1 = $elm$browser$Debugger$Metadata$isPortable(metadata);
            if (_v1.$ === "Nothing") {
              return $elm$core$Result$Ok(metadata);
            } else {
              var error = _v1.a;
              return $elm$core$Result$Err(error);
            }
          }
        };
        var $elm$browser$Debugger$History$History = F3(
          function(snapshots, recent, numMessages) {
            return { numMessages, recent, snapshots };
          }
        );
        var $elm$browser$Debugger$History$RecentHistory = F3(
          function(model, messages, numMessages) {
            return { messages, model, numMessages };
          }
        );
        var $elm$browser$Debugger$History$empty = function(model) {
          return A3(
            $elm$browser$Debugger$History$History,
            $elm$core$Array$empty,
            A3($elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
            0
          );
        };
        var $elm$core$Dict$map = F2(
          function(func, dict) {
            if (dict.$ === "RBEmpty_elm_builtin") {
              return $elm$core$Dict$RBEmpty_elm_builtin;
            } else {
              var color = dict.a;
              var key = dict.b;
              var value = dict.c;
              var left = dict.d;
              var right = dict.e;
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                color,
                key,
                A2(func, key, value),
                A2($elm$core$Dict$map, func, left),
                A2($elm$core$Dict$map, func, right)
              );
            }
          }
        );
        var $elm$core$Dict$sizeHelp = F2(
          function(n, dict) {
            sizeHelp:
              while (true) {
                if (dict.$ === "RBEmpty_elm_builtin") {
                  return n;
                } else {
                  var left = dict.d;
                  var right = dict.e;
                  var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right), $temp$dict = left;
                  n = $temp$n;
                  dict = $temp$dict;
                  continue sizeHelp;
                }
              }
          }
        );
        var $elm$core$Dict$size = function(dict) {
          return A2($elm$core$Dict$sizeHelp, 0, dict);
        };
        var $elm$browser$Debugger$Expando$initHelp = F2(
          function(isOuter, expando) {
            switch (expando.$) {
              case "S":
                return expando;
              case "Primitive":
                return expando;
              case "Sequence":
                var seqType = expando.a;
                var isClosed = expando.b;
                var items = expando.c;
                return isOuter ? A3(
                  $elm$browser$Debugger$Expando$Sequence,
                  seqType,
                  false,
                  A2(
                    $elm$core$List$map,
                    $elm$browser$Debugger$Expando$initHelp(false),
                    items
                  )
                ) : $elm$core$List$length(items) <= 8 ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando;
              case "Dictionary":
                var isClosed = expando.a;
                var keyValuePairs = expando.b;
                return isOuter ? A2(
                  $elm$browser$Debugger$Expando$Dictionary,
                  false,
                  A2(
                    $elm$core$List$map,
                    function(_v1) {
                      var k = _v1.a;
                      var v = _v1.b;
                      return _Utils_Tuple2(
                        k,
                        A2($elm$browser$Debugger$Expando$initHelp, false, v)
                      );
                    },
                    keyValuePairs
                  )
                ) : $elm$core$List$length(keyValuePairs) <= 8 ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando;
              case "Record":
                var isClosed = expando.a;
                var entries = expando.b;
                return isOuter ? A2(
                  $elm$browser$Debugger$Expando$Record,
                  false,
                  A2(
                    $elm$core$Dict$map,
                    F2(
                      function(_v2, v) {
                        return A2($elm$browser$Debugger$Expando$initHelp, false, v);
                      }
                    ),
                    entries
                  )
                ) : $elm$core$Dict$size(entries) <= 4 ? A2($elm$browser$Debugger$Expando$Record, false, entries) : expando;
              default:
                var maybeName = expando.a;
                var isClosed = expando.b;
                var args = expando.c;
                return isOuter ? A3(
                  $elm$browser$Debugger$Expando$Constructor,
                  maybeName,
                  false,
                  A2(
                    $elm$core$List$map,
                    $elm$browser$Debugger$Expando$initHelp(false),
                    args
                  )
                ) : $elm$core$List$length(args) <= 4 ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando;
            }
          }
        );
        var $elm$browser$Debugger$Expando$init = function(value) {
          return A2(
            $elm$browser$Debugger$Expando$initHelp,
            true,
            _Debugger_init(value)
          );
        };
        var $elm$core$Platform$Cmd$map = _Platform_map;
        var $elm$browser$Debugger$Overlay$None = { $: "None" };
        var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
        var $elm$browser$Debugger$Main$wrapInit = F4(
          function(metadata, popout, init, flags) {
            var _v0 = init(flags);
            var userModel = _v0.a;
            var userCommands = _v0.b;
            return _Utils_Tuple2(
              {
                expandoModel: $elm$browser$Debugger$Expando$init(userModel),
                expandoMsg: $elm$browser$Debugger$Expando$init(_Utils_Tuple0),
                history: $elm$browser$Debugger$History$empty(userModel),
                layout: A3($elm$browser$Debugger$Main$Horizontal, $elm$browser$Debugger$Main$Static, 0.3, 0.5),
                metadata: $elm$browser$Debugger$Metadata$decode(metadata),
                overlay: $elm$browser$Debugger$Overlay$none,
                popout,
                state: $elm$browser$Debugger$Main$Running(userModel)
              },
              A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands)
            );
          }
        );
        var $elm$browser$Debugger$Main$getLatestModel = function(state) {
          if (state.$ === "Running") {
            var model = state.a;
            return model;
          } else {
            var model = state.c;
            return model;
          }
        };
        var $elm$core$Platform$Sub$map = _Platform_map;
        var $elm$browser$Debugger$Main$wrapSubs = F2(
          function(subscriptions, model) {
            return A2(
              $elm$core$Platform$Sub$map,
              $elm$browser$Debugger$Main$UserMsg,
              subscriptions(
                $elm$browser$Debugger$Main$getLatestModel(model.state)
              )
            );
          }
        );
        var $elm$browser$Debugger$Main$Moving = { $: "Moving" };
        var $elm$browser$Debugger$Main$Paused = F5(
          function(a, b, c, d, e) {
            return { $: "Paused", a, b, c, d, e };
          }
        );
        var $elm$browser$Debugger$History$Snapshot = F2(
          function(model, messages) {
            return { messages, model };
          }
        );
        var $elm$browser$Debugger$History$addRecent = F3(
          function(msg, newModel, _v0) {
            var model = _v0.model;
            var messages = _v0.messages;
            var numMessages = _v0.numMessages;
            return _Utils_eq(numMessages, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
              $elm$core$Maybe$Just(
                A2(
                  $elm$browser$Debugger$History$Snapshot,
                  model,
                  $elm$core$Array$fromList(messages)
                )
              ),
              A3(
                $elm$browser$Debugger$History$RecentHistory,
                newModel,
                _List_fromArray(
                  [msg]
                ),
                1
              )
            ) : _Utils_Tuple2(
              $elm$core$Maybe$Nothing,
              A3(
                $elm$browser$Debugger$History$RecentHistory,
                model,
                A2($elm$core$List$cons, msg, messages),
                numMessages + 1
              )
            );
          }
        );
        var $elm$core$Elm$JsArray$push = _JsArray_push;
        var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
        var $elm$core$Array$insertTailInTree = F4(
          function(shift, index, tail, tree) {
            var pos = $elm$core$Array$bitMask & index >>> shift;
            if (_Utils_cmp(
              pos,
              $elm$core$Elm$JsArray$length(tree)
            ) > -1) {
              if (shift === 5) {
                return A2(
                  $elm$core$Elm$JsArray$push,
                  $elm$core$Array$Leaf(tail),
                  tree
                );
              } else {
                var newSub = $elm$core$Array$SubTree(
                  A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty)
                );
                return A2($elm$core$Elm$JsArray$push, newSub, tree);
              }
            } else {
              var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
              if (value.$ === "SubTree") {
                var subTree = value.a;
                var newSub = $elm$core$Array$SubTree(
                  A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree)
                );
                return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
              } else {
                var newSub = $elm$core$Array$SubTree(
                  A4(
                    $elm$core$Array$insertTailInTree,
                    shift - $elm$core$Array$shiftStep,
                    index,
                    tail,
                    $elm$core$Elm$JsArray$singleton(value)
                  )
                );
                return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
              }
            }
          }
        );
        var $elm$core$Array$unsafeReplaceTail = F2(
          function(newTail, _v0) {
            var len = _v0.a;
            var startShift = _v0.b;
            var tree = _v0.c;
            var tail = _v0.d;
            var originalTailLen = $elm$core$Elm$JsArray$length(tail);
            var newTailLen = $elm$core$Elm$JsArray$length(newTail);
            var newArrayLen = len + (newTailLen - originalTailLen);
            if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
              var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
              if (overflow) {
                var newShift = startShift + $elm$core$Array$shiftStep;
                var newTree = A4(
                  $elm$core$Array$insertTailInTree,
                  newShift,
                  len,
                  newTail,
                  $elm$core$Elm$JsArray$singleton(
                    $elm$core$Array$SubTree(tree)
                  )
                );
                return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
              } else {
                return A4(
                  $elm$core$Array$Array_elm_builtin,
                  newArrayLen,
                  startShift,
                  A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
                  $elm$core$Elm$JsArray$empty
                );
              }
            } else {
              return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
            }
          }
        );
        var $elm$core$Array$push = F2(
          function(a, array) {
            var tail = array.d;
            return A2(
              $elm$core$Array$unsafeReplaceTail,
              A2($elm$core$Elm$JsArray$push, a, tail),
              array
            );
          }
        );
        var $elm$browser$Debugger$History$add = F3(
          function(msg, model, _v0) {
            var snapshots = _v0.snapshots;
            var recent = _v0.recent;
            var numMessages = _v0.numMessages;
            var _v1 = A3($elm$browser$Debugger$History$addRecent, msg, model, recent);
            if (_v1.a.$ === "Just") {
              var snapshot = _v1.a.a;
              var newRecent = _v1.b;
              return A3(
                $elm$browser$Debugger$History$History,
                A2($elm$core$Array$push, snapshot, snapshots),
                newRecent,
                numMessages + 1
              );
            } else {
              var _v2 = _v1.a;
              var newRecent = _v1.b;
              return A3($elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
            }
          }
        );
        var $elm$core$Basics$always = F2(
          function(a, _v0) {
            return a;
          }
        );
        var $elm$browser$Debugger$Overlay$BadImport = function(a) {
          return { $: "BadImport", a };
        };
        var $elm$browser$Debugger$Overlay$RiskyImport = F2(
          function(a, b) {
            return { $: "RiskyImport", a, b };
          }
        );
        var $elm$browser$Debugger$Report$VersionChanged = F2(
          function(a, b) {
            return { $: "VersionChanged", a, b };
          }
        );
        var $elm$browser$Debugger$Report$MessageChanged = F2(
          function(a, b) {
            return { $: "MessageChanged", a, b };
          }
        );
        var $elm$browser$Debugger$Report$SomethingChanged = function(a) {
          return { $: "SomethingChanged", a };
        };
        var $elm$browser$Debugger$Report$AliasChange = function(a) {
          return { $: "AliasChange", a };
        };
        var $elm$browser$Debugger$Metadata$checkAlias = F4(
          function(name, old, _new, changes) {
            return _Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args) ? changes : A2(
              $elm$core$List$cons,
              $elm$browser$Debugger$Report$AliasChange(name),
              changes
            );
          }
        );
        var $elm$browser$Debugger$Report$UnionChange = F2(
          function(a, b) {
            return { $: "UnionChange", a, b };
          }
        );
        var $elm$browser$Debugger$Metadata$addTag = F3(
          function(tag, _v0, changes) {
            return _Utils_update(
              changes,
              {
                added: A2($elm$core$List$cons, tag, changes.added)
              }
            );
          }
        );
        var $elm$browser$Debugger$Metadata$checkTag = F4(
          function(tag, old, _new, changes) {
            return _Utils_eq(old, _new) ? changes : _Utils_update(
              changes,
              {
                changed: A2($elm$core$List$cons, tag, changes.changed)
              }
            );
          }
        );
        var $elm$browser$Debugger$Report$TagChanges = F4(
          function(removed, changed, added, argsMatch) {
            return { added, argsMatch, changed, removed };
          }
        );
        var $elm$browser$Debugger$Report$emptyTagChanges = function(argsMatch) {
          return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
        };
        var $elm$browser$Debugger$Report$hasTagChanges = function(tagChanges) {
          return _Utils_eq(
            tagChanges,
            A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true)
          );
        };
        var $elm$core$Dict$merge = F6(
          function(leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
            var stepState = F3(
              function(rKey, rValue, _v0) {
                stepState:
                  while (true) {
                    var list = _v0.a;
                    var result = _v0.b;
                    if (!list.b) {
                      return _Utils_Tuple2(
                        list,
                        A3(rightStep, rKey, rValue, result)
                      );
                    } else {
                      var _v2 = list.a;
                      var lKey = _v2.a;
                      var lValue = _v2.b;
                      var rest = list.b;
                      if (_Utils_cmp(lKey, rKey) < 0) {
                        var $temp$rKey = rKey, $temp$rValue = rValue, $temp$_v0 = _Utils_Tuple2(
                          rest,
                          A3(leftStep, lKey, lValue, result)
                        );
                        rKey = $temp$rKey;
                        rValue = $temp$rValue;
                        _v0 = $temp$_v0;
                        continue stepState;
                      } else {
                        if (_Utils_cmp(lKey, rKey) > 0) {
                          return _Utils_Tuple2(
                            list,
                            A3(rightStep, rKey, rValue, result)
                          );
                        } else {
                          return _Utils_Tuple2(
                            rest,
                            A4(bothStep, lKey, lValue, rValue, result)
                          );
                        }
                      }
                    }
                  }
              }
            );
            var _v3 = A3(
              $elm$core$Dict$foldl,
              stepState,
              _Utils_Tuple2(
                $elm$core$Dict$toList(leftDict),
                initialResult
              ),
              rightDict
            );
            var leftovers = _v3.a;
            var intermediateResult = _v3.b;
            return A3(
              $elm$core$List$foldl,
              F2(
                function(_v4, result) {
                  var k = _v4.a;
                  var v = _v4.b;
                  return A3(leftStep, k, v, result);
                }
              ),
              intermediateResult,
              leftovers
            );
          }
        );
        var $elm$browser$Debugger$Metadata$removeTag = F3(
          function(tag, _v0, changes) {
            return _Utils_update(
              changes,
              {
                removed: A2($elm$core$List$cons, tag, changes.removed)
              }
            );
          }
        );
        var $elm$browser$Debugger$Metadata$checkUnion = F4(
          function(name, old, _new, changes) {
            var tagChanges = A6(
              $elm$core$Dict$merge,
              $elm$browser$Debugger$Metadata$removeTag,
              $elm$browser$Debugger$Metadata$checkTag,
              $elm$browser$Debugger$Metadata$addTag,
              old.tags,
              _new.tags,
              $elm$browser$Debugger$Report$emptyTagChanges(
                _Utils_eq(old.args, _new.args)
              )
            );
            return $elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
              $elm$core$List$cons,
              A2($elm$browser$Debugger$Report$UnionChange, name, tagChanges),
              changes
            );
          }
        );
        var $elm$browser$Debugger$Metadata$ignore = F3(
          function(key, value, report) {
            return report;
          }
        );
        var $elm$browser$Debugger$Metadata$checkTypes = F2(
          function(old, _new) {
            return !_Utils_eq(old.message, _new.message) ? A2($elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : $elm$browser$Debugger$Report$SomethingChanged(
              A6(
                $elm$core$Dict$merge,
                $elm$browser$Debugger$Metadata$ignore,
                $elm$browser$Debugger$Metadata$checkUnion,
                $elm$browser$Debugger$Metadata$ignore,
                old.unions,
                _new.unions,
                A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)
              )
            );
          }
        );
        var $elm$browser$Debugger$Metadata$check = F2(
          function(old, _new) {
            return !_Utils_eq(old.versions.elm, _new.versions.elm) ? A2($elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
          }
        );
        var $elm$browser$Debugger$Report$CorruptHistory = { $: "CorruptHistory" };
        var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
        var $elm$json$Json$Decode$decodeString = _Json_runOnString;
        var $elm$browser$Debugger$Report$Fine = { $: "Fine" };
        var $elm$browser$Debugger$Report$Impossible = { $: "Impossible" };
        var $elm$browser$Debugger$Report$Risky = { $: "Risky" };
        var $elm$core$Basics$not = _Basics_not;
        var $elm$core$List$isEmpty = function(xs) {
          if (!xs.b) {
            return true;
          } else {
            return false;
          }
        };
        var $elm$browser$Debugger$Report$some = function(list) {
          return !$elm$core$List$isEmpty(list);
        };
        var $elm$browser$Debugger$Report$evaluateChange = function(change) {
          if (change.$ === "AliasChange") {
            return $elm$browser$Debugger$Report$Impossible;
          } else {
            var removed = change.b.removed;
            var changed = change.b.changed;
            var added = change.b.added;
            var argsMatch = change.b.argsMatch;
            return !argsMatch || ($elm$browser$Debugger$Report$some(changed) || $elm$browser$Debugger$Report$some(removed)) ? $elm$browser$Debugger$Report$Impossible : $elm$browser$Debugger$Report$some(added) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine;
          }
        };
        var $elm$browser$Debugger$Report$worstCase = F2(
          function(status, statusList) {
            worstCase:
              while (true) {
                if (!statusList.b) {
                  return status;
                } else {
                  switch (statusList.a.$) {
                    case "Impossible":
                      var _v1 = statusList.a;
                      return $elm$browser$Debugger$Report$Impossible;
                    case "Risky":
                      var _v2 = statusList.a;
                      var rest = statusList.b;
                      var $temp$status = $elm$browser$Debugger$Report$Risky, $temp$statusList = rest;
                      status = $temp$status;
                      statusList = $temp$statusList;
                      continue worstCase;
                    default:
                      var _v3 = statusList.a;
                      var rest = statusList.b;
                      var $temp$status = status, $temp$statusList = rest;
                      status = $temp$status;
                      statusList = $temp$statusList;
                      continue worstCase;
                  }
                }
              }
          }
        );
        var $elm$browser$Debugger$Report$evaluate = function(report) {
          switch (report.$) {
            case "CorruptHistory":
              return $elm$browser$Debugger$Report$Impossible;
            case "VersionChanged":
              return $elm$browser$Debugger$Report$Impossible;
            case "MessageChanged":
              return $elm$browser$Debugger$Report$Impossible;
            default:
              var changes = report.a;
              return A2(
                $elm$browser$Debugger$Report$worstCase,
                $elm$browser$Debugger$Report$Fine,
                A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes)
              );
          }
        };
        var $elm$json$Json$Decode$value = _Json_decodeValue;
        var $elm$browser$Debugger$Overlay$uploadDecoder = A3(
          $elm$json$Json$Decode$map2,
          F2(
            function(x, y) {
              return _Utils_Tuple2(x, y);
            }
          ),
          A2($elm$json$Json$Decode$field, "metadata", $elm$browser$Debugger$Metadata$decoder),
          A2($elm$json$Json$Decode$field, "history", $elm$json$Json$Decode$value)
        );
        var $elm$browser$Debugger$Overlay$assessImport = F2(
          function(metadata, jsonString) {
            var _v0 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
            if (_v0.$ === "Err") {
              return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
            } else {
              var _v1 = _v0.a;
              var foreignMetadata = _v1.a;
              var rawHistory = _v1.b;
              var report = A2($elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
              var _v2 = $elm$browser$Debugger$Report$evaluate(report);
              switch (_v2.$) {
                case "Impossible":
                  return $elm$core$Result$Err(
                    $elm$browser$Debugger$Overlay$BadImport(report)
                  );
                case "Risky":
                  return $elm$core$Result$Err(
                    A2($elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory)
                  );
                default:
                  return $elm$core$Result$Ok(rawHistory);
              }
            }
          }
        );
        var $elm$core$Platform$Cmd$batch = _Platform_batch;
        var $elm$browser$Debugger$Overlay$close = F2(
          function(msg, state) {
            switch (state.$) {
              case "None":
                return $elm$core$Maybe$Nothing;
              case "BadMetadata":
                return $elm$core$Maybe$Nothing;
              case "BadImport":
                return $elm$core$Maybe$Nothing;
              default:
                var rawHistory = state.b;
                if (msg.$ === "Cancel") {
                  return $elm$core$Maybe$Nothing;
                } else {
                  return $elm$core$Maybe$Just(rawHistory);
                }
            }
          }
        );
        var $elm$browser$Debugger$History$elmToJs = A2($elm$core$Basics$composeR, _Json_wrap, _Debugger_unsafeCoerce);
        var $elm$browser$Debugger$History$encodeHelp = F2(
          function(snapshot, allMessages) {
            return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages, snapshot.messages);
          }
        );
        var $elm$json$Json$Encode$list = F2(
          function(func, entries) {
            return _Json_wrap(
              A3(
                $elm$core$List$foldl,
                _Json_addEntry(func),
                _Json_emptyArray(_Utils_Tuple0),
                entries
              )
            );
          }
        );
        var $elm$browser$Debugger$History$encode = function(_v0) {
          var snapshots = _v0.snapshots;
          var recent = _v0.recent;
          return A2(
            $elm$json$Json$Encode$list,
            $elm$browser$Debugger$History$elmToJs,
            A3(
              $elm$core$Array$foldr,
              $elm$browser$Debugger$History$encodeHelp,
              $elm$core$List$reverse(recent.messages),
              snapshots
            )
          );
        };
        var $elm$json$Json$Encode$object = function(pairs) {
          return _Json_wrap(
            A3(
              $elm$core$List$foldl,
              F2(
                function(_v0, obj) {
                  var k = _v0.a;
                  var v = _v0.b;
                  return A3(_Json_addField, k, v, obj);
                }
              ),
              _Json_emptyObject(_Utils_Tuple0),
              pairs
            )
          );
        };
        var $elm$browser$Debugger$Metadata$encodeAlias = function(_v0) {
          var args = _v0.args;
          var tipe = _v0.tipe;
          return $elm$json$Json$Encode$object(
            _List_fromArray(
              [
                _Utils_Tuple2(
                  "args",
                  A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)
                ),
                _Utils_Tuple2(
                  "type",
                  $elm$json$Json$Encode$string(tipe)
                )
              ]
            )
          );
        };
        var $elm$browser$Debugger$Metadata$encodeDict = F2(
          function(f, dict) {
            return $elm$json$Json$Encode$object(
              $elm$core$Dict$toList(
                A2(
                  $elm$core$Dict$map,
                  F2(
                    function(key, value) {
                      return f(value);
                    }
                  ),
                  dict
                )
              )
            );
          }
        );
        var $elm$browser$Debugger$Metadata$encodeUnion = function(_v0) {
          var args = _v0.args;
          var tags = _v0.tags;
          return $elm$json$Json$Encode$object(
            _List_fromArray(
              [
                _Utils_Tuple2(
                  "args",
                  A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)
                ),
                _Utils_Tuple2(
                  "tags",
                  A2(
                    $elm$browser$Debugger$Metadata$encodeDict,
                    $elm$json$Json$Encode$list($elm$json$Json$Encode$string),
                    tags
                  )
                )
              ]
            )
          );
        };
        var $elm$browser$Debugger$Metadata$encodeTypes = function(_v0) {
          var message = _v0.message;
          var unions = _v0.unions;
          var aliases = _v0.aliases;
          return $elm$json$Json$Encode$object(
            _List_fromArray(
              [
                _Utils_Tuple2(
                  "message",
                  $elm$json$Json$Encode$string(message)
                ),
                _Utils_Tuple2(
                  "aliases",
                  A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases)
                ),
                _Utils_Tuple2(
                  "unions",
                  A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions)
                )
              ]
            )
          );
        };
        var $elm$browser$Debugger$Metadata$encodeVersions = function(_v0) {
          var elm = _v0.elm;
          return $elm$json$Json$Encode$object(
            _List_fromArray(
              [
                _Utils_Tuple2(
                  "elm",
                  $elm$json$Json$Encode$string(elm)
                )
              ]
            )
          );
        };
        var $elm$browser$Debugger$Metadata$encode = function(_v0) {
          var versions = _v0.versions;
          var types = _v0.types;
          return $elm$json$Json$Encode$object(
            _List_fromArray(
              [
                _Utils_Tuple2(
                  "versions",
                  $elm$browser$Debugger$Metadata$encodeVersions(versions)
                ),
                _Utils_Tuple2(
                  "types",
                  $elm$browser$Debugger$Metadata$encodeTypes(types)
                )
              ]
            )
          );
        };
        var $elm$core$Basics$identity = function(x) {
          return x;
        };
        var $elm$core$Task$Perform = function(a) {
          return { $: "Perform", a };
        };
        var $elm$core$Task$succeed = _Scheduler_succeed;
        var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
        var $elm$core$Task$andThen = _Scheduler_andThen;
        var $elm$core$Task$map = F2(
          function(func, taskA) {
            return A2(
              $elm$core$Task$andThen,
              function(a) {
                return $elm$core$Task$succeed(
                  func(a)
                );
              },
              taskA
            );
          }
        );
        var $elm$core$Task$map2 = F3(
          function(func, taskA, taskB) {
            return A2(
              $elm$core$Task$andThen,
              function(a) {
                return A2(
                  $elm$core$Task$andThen,
                  function(b) {
                    return $elm$core$Task$succeed(
                      A2(func, a, b)
                    );
                  },
                  taskB
                );
              },
              taskA
            );
          }
        );
        var $elm$core$Task$sequence = function(tasks) {
          return A3(
            $elm$core$List$foldr,
            $elm$core$Task$map2($elm$core$List$cons),
            $elm$core$Task$succeed(_List_Nil),
            tasks
          );
        };
        var $elm$core$Platform$sendToApp = _Platform_sendToApp;
        var $elm$core$Task$spawnCmd = F2(
          function(router, _v0) {
            var task = _v0.a;
            return _Scheduler_spawn(
              A2(
                $elm$core$Task$andThen,
                $elm$core$Platform$sendToApp(router),
                task
              )
            );
          }
        );
        var $elm$core$Task$onEffects = F3(
          function(router, commands, state) {
            return A2(
              $elm$core$Task$map,
              function(_v0) {
                return _Utils_Tuple0;
              },
              $elm$core$Task$sequence(
                A2(
                  $elm$core$List$map,
                  $elm$core$Task$spawnCmd(router),
                  commands
                )
              )
            );
          }
        );
        var $elm$core$Task$onSelfMsg = F3(
          function(_v0, _v1, _v2) {
            return $elm$core$Task$succeed(_Utils_Tuple0);
          }
        );
        var $elm$core$Task$cmdMap = F2(
          function(tagger, _v0) {
            var task = _v0.a;
            return $elm$core$Task$Perform(
              A2($elm$core$Task$map, tagger, task)
            );
          }
        );
        _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
        var $elm$core$Task$command = _Platform_leaf("Task");
        var $elm$core$Task$perform = F2(
          function(toMessage, task) {
            return $elm$core$Task$command(
              $elm$core$Task$Perform(
                A2($elm$core$Task$map, toMessage, task)
              )
            );
          }
        );
        var $elm$browser$Debugger$Main$download = F2(
          function(metadata, history2) {
            var historyLength = $elm$browser$Debugger$History$size(history2);
            return A2(
              $elm$core$Task$perform,
              function(_v0) {
                return $elm$browser$Debugger$Main$NoOp;
              },
              A2(
                _Debugger_download,
                historyLength,
                _Json_unwrap(
                  $elm$json$Json$Encode$object(
                    _List_fromArray(
                      [
                        _Utils_Tuple2(
                          "metadata",
                          $elm$browser$Debugger$Metadata$encode(metadata)
                        ),
                        _Utils_Tuple2(
                          "history",
                          $elm$browser$Debugger$History$encode(history2)
                        )
                      ]
                    )
                  )
                )
              )
            );
          }
        );
        var $elm$browser$Debugger$Main$Vertical = F3(
          function(a, b, c) {
            return { $: "Vertical", a, b, c };
          }
        );
        var $elm$browser$Debugger$Main$drag = F2(
          function(info, layout) {
            if (layout.$ === "Horizontal") {
              var status = layout.a;
              var y = layout.c;
              return A3($elm$browser$Debugger$Main$Horizontal, status, info.x / info.width, y);
            } else {
              var status = layout.a;
              var x = layout.b;
              return A3($elm$browser$Debugger$Main$Vertical, status, x, info.y / info.height);
            }
          }
        );
        var $elm$browser$Debugger$History$Stepping = F2(
          function(a, b) {
            return { $: "Stepping", a, b };
          }
        );
        var $elm$browser$Debugger$History$Done = F2(
          function(a, b) {
            return { $: "Done", a, b };
          }
        );
        var $elm$browser$Debugger$History$getHelp = F3(
          function(update, msg, getResult) {
            if (getResult.$ === "Done") {
              return getResult;
            } else {
              var n = getResult.a;
              var model = getResult.b;
              return !n ? A2(
                $elm$browser$Debugger$History$Done,
                msg,
                A2(update, msg, model).a
              ) : A2(
                $elm$browser$Debugger$History$Stepping,
                n - 1,
                A2(update, msg, model).a
              );
            }
          }
        );
        var $elm$browser$Debugger$History$undone = function(getResult) {
          undone:
            while (true) {
              if (getResult.$ === "Done") {
                var msg = getResult.a;
                var model = getResult.b;
                return _Utils_Tuple2(model, msg);
              } else {
                var $temp$getResult = getResult;
                getResult = $temp$getResult;
                continue undone;
              }
            }
        };
        var $elm$browser$Debugger$History$get = F3(
          function(update, index, history2) {
            get:
              while (true) {
                var recent = history2.recent;
                var snapshotMax = history2.numMessages - recent.numMessages;
                if (_Utils_cmp(index, snapshotMax) > -1) {
                  return $elm$browser$Debugger$History$undone(
                    A3(
                      $elm$core$List$foldr,
                      $elm$browser$Debugger$History$getHelp(update),
                      A2($elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
                      recent.messages
                    )
                  );
                } else {
                  var _v0 = A2($elm$core$Array$get, index / $elm$browser$Debugger$History$maxSnapshotSize | 0, history2.snapshots);
                  if (_v0.$ === "Nothing") {
                    var $temp$update = update, $temp$index = index, $temp$history = history2;
                    update = $temp$update;
                    index = $temp$index;
                    history2 = $temp$history;
                    continue get;
                  } else {
                    var model = _v0.a.model;
                    var messages = _v0.a.messages;
                    return $elm$browser$Debugger$History$undone(
                      A3(
                        $elm$core$Array$foldr,
                        $elm$browser$Debugger$History$getHelp(update),
                        A2($elm$browser$Debugger$History$Stepping, index % $elm$browser$Debugger$History$maxSnapshotSize, model),
                        messages
                      )
                    );
                  }
                }
              }
          }
        );
        var $elm$browser$Debugger$History$getRecentMsg = function(history2) {
          getRecentMsg:
            while (true) {
              var _v0 = history2.recent.messages;
              if (!_v0.b) {
                var $temp$history = history2;
                history2 = $temp$history;
                continue getRecentMsg;
              } else {
                var first = _v0.a;
                return first;
              }
            }
        };
        var $elm$core$Dict$get = F2(
          function(targetKey, dict) {
            get:
              while (true) {
                if (dict.$ === "RBEmpty_elm_builtin") {
                  return $elm$core$Maybe$Nothing;
                } else {
                  var key = dict.b;
                  var value = dict.c;
                  var left = dict.d;
                  var right = dict.e;
                  var _v1 = A2($elm$core$Basics$compare, targetKey, key);
                  switch (_v1.$) {
                    case "LT":
                      var $temp$targetKey = targetKey, $temp$dict = left;
                      targetKey = $temp$targetKey;
                      dict = $temp$dict;
                      continue get;
                    case "EQ":
                      return $elm$core$Maybe$Just(value);
                    default:
                      var $temp$targetKey = targetKey, $temp$dict = right;
                      targetKey = $temp$targetKey;
                      dict = $temp$dict;
                      continue get;
                  }
                }
              }
          }
        );
        var $elm$browser$Debugger$Expando$mergeDictHelp = F3(
          function(oldDict, key, value) {
            var _v12 = A2($elm$core$Dict$get, key, oldDict);
            if (_v12.$ === "Nothing") {
              return value;
            } else {
              var oldValue = _v12.a;
              return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
            }
          }
        );
        var $elm$browser$Debugger$Expando$mergeHelp = F2(
          function(old, _new) {
            var _v3 = _Utils_Tuple2(old, _new);
            _v3$6:
              while (true) {
                switch (_v3.b.$) {
                  case "S":
                    return _new;
                  case "Primitive":
                    return _new;
                  case "Sequence":
                    if (_v3.a.$ === "Sequence") {
                      var _v4 = _v3.a;
                      var isClosed = _v4.b;
                      var oldValues = _v4.c;
                      var _v5 = _v3.b;
                      var seqType = _v5.a;
                      var newValues = _v5.c;
                      return A3(
                        $elm$browser$Debugger$Expando$Sequence,
                        seqType,
                        isClosed,
                        A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues)
                      );
                    } else {
                      break _v3$6;
                    }
                  case "Dictionary":
                    if (_v3.a.$ === "Dictionary") {
                      var _v6 = _v3.a;
                      var isClosed = _v6.a;
                      var _v7 = _v3.b;
                      var keyValuePairs = _v7.b;
                      return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
                    } else {
                      break _v3$6;
                    }
                  case "Record":
                    if (_v3.a.$ === "Record") {
                      var _v8 = _v3.a;
                      var isClosed = _v8.a;
                      var oldDict = _v8.b;
                      var _v9 = _v3.b;
                      var newDict = _v9.b;
                      return A2(
                        $elm$browser$Debugger$Expando$Record,
                        isClosed,
                        A2(
                          $elm$core$Dict$map,
                          $elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
                          newDict
                        )
                      );
                    } else {
                      break _v3$6;
                    }
                  default:
                    if (_v3.a.$ === "Constructor") {
                      var _v10 = _v3.a;
                      var isClosed = _v10.b;
                      var oldValues = _v10.c;
                      var _v11 = _v3.b;
                      var maybeName = _v11.a;
                      var newValues = _v11.c;
                      return A3(
                        $elm$browser$Debugger$Expando$Constructor,
                        maybeName,
                        isClosed,
                        A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues)
                      );
                    } else {
                      break _v3$6;
                    }
                }
              }
            return _new;
          }
        );
        var $elm$browser$Debugger$Expando$mergeListHelp = F2(
          function(olds, news) {
            var _v0 = _Utils_Tuple2(olds, news);
            if (!_v0.a.b) {
              return news;
            } else {
              if (!_v0.b.b) {
                return news;
              } else {
                var _v1 = _v0.a;
                var x = _v1.a;
                var xs = _v1.b;
                var _v2 = _v0.b;
                var y = _v2.a;
                var ys = _v2.b;
                return A2(
                  $elm$core$List$cons,
                  A2($elm$browser$Debugger$Expando$mergeHelp, x, y),
                  A2($elm$browser$Debugger$Expando$mergeListHelp, xs, ys)
                );
              }
            }
          }
        );
        var $elm$browser$Debugger$Expando$merge = F2(
          function(value, expando) {
            return A2(
              $elm$browser$Debugger$Expando$mergeHelp,
              expando,
              _Debugger_init(value)
            );
          }
        );
        var $elm$browser$Debugger$Main$jumpUpdate = F3(
          function(update, index, model) {
            var history2 = $elm$browser$Debugger$Main$cachedHistory(model);
            var currentMsg = $elm$browser$Debugger$History$getRecentMsg(history2);
            var currentModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
            var _v0 = A3($elm$browser$Debugger$History$get, update, index, history2);
            var indexModel = _v0.a;
            var indexMsg = _v0.b;
            return _Utils_update(
              model,
              {
                expandoModel: A2($elm$browser$Debugger$Expando$merge, indexModel, model.expandoModel),
                expandoMsg: A2($elm$browser$Debugger$Expando$merge, indexMsg, model.expandoMsg),
                state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, currentModel, currentMsg, history2)
              }
            );
          }
        );
        var $elm$browser$Debugger$History$jsToElm = A2($elm$core$Basics$composeR, _Json_unwrap, _Debugger_unsafeCoerce);
        var $elm$browser$Debugger$History$decoder = F2(
          function(initialModel, update) {
            var addMessage = F2(
              function(rawMsg, _v0) {
                var model = _v0.a;
                var history2 = _v0.b;
                var msg = $elm$browser$Debugger$History$jsToElm(rawMsg);
                return _Utils_Tuple2(
                  A2(update, msg, model),
                  A3($elm$browser$Debugger$History$add, msg, model, history2)
                );
              }
            );
            var updateModel = function(rawMsgs) {
              return A3(
                $elm$core$List$foldl,
                addMessage,
                _Utils_Tuple2(
                  initialModel,
                  $elm$browser$Debugger$History$empty(initialModel)
                ),
                rawMsgs
              );
            };
            return A2(
              $elm$json$Json$Decode$map,
              updateModel,
              $elm$json$Json$Decode$list($elm$json$Json$Decode$value)
            );
          }
        );
        var $elm$browser$Debugger$History$getInitialModel = function(_v0) {
          var snapshots = _v0.snapshots;
          var recent = _v0.recent;
          var _v1 = A2($elm$core$Array$get, 0, snapshots);
          if (_v1.$ === "Just") {
            var model = _v1.a.model;
            return model;
          } else {
            return recent.model;
          }
        };
        var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
        var $elm$browser$Debugger$Main$loadNewHistory = F3(
          function(rawHistory, update, model) {
            var pureUserUpdate = F2(
              function(msg, userModel) {
                return A2(update, msg, userModel).a;
              }
            );
            var initialUserModel = $elm$browser$Debugger$History$getInitialModel(model.history);
            var decoder = A2($elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
            var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, rawHistory);
            if (_v0.$ === "Err") {
              return _Utils_Tuple2(
                _Utils_update(
                  model,
                  { overlay: $elm$browser$Debugger$Overlay$corruptImport }
                ),
                $elm$core$Platform$Cmd$none
              );
            } else {
              var _v1 = _v0.a;
              var latestUserModel = _v1.a;
              var newHistory = _v1.b;
              return _Utils_Tuple2(
                _Utils_update(
                  model,
                  {
                    expandoModel: $elm$browser$Debugger$Expando$init(latestUserModel),
                    expandoMsg: $elm$browser$Debugger$Expando$init(
                      $elm$browser$Debugger$History$getRecentMsg(newHistory)
                    ),
                    history: newHistory,
                    overlay: $elm$browser$Debugger$Overlay$none,
                    state: $elm$browser$Debugger$Main$Running(latestUserModel)
                  }
                ),
                $elm$core$Platform$Cmd$none
              );
            }
          }
        );
        var $elm$browser$Debugger$Main$scroll = function(popout) {
          return A2(
            $elm$core$Task$perform,
            $elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
            _Debugger_scroll(popout)
          );
        };
        var $elm$browser$Debugger$Main$scrollTo = F2(
          function(id, popout) {
            return A2(
              $elm$core$Task$perform,
              $elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
              A2(_Debugger_scrollTo, id, popout)
            );
          }
        );
        var $elm$browser$Debugger$Main$setDragStatus = F2(
          function(status, layout) {
            if (layout.$ === "Horizontal") {
              var x = layout.b;
              var y = layout.c;
              return A3($elm$browser$Debugger$Main$Horizontal, status, x, y);
            } else {
              var x = layout.b;
              var y = layout.c;
              return A3($elm$browser$Debugger$Main$Vertical, status, x, y);
            }
          }
        );
        var $elm$browser$Debugger$Main$swapLayout = function(layout) {
          if (layout.$ === "Horizontal") {
            var s = layout.a;
            var x = layout.b;
            var y = layout.c;
            return A3($elm$browser$Debugger$Main$Vertical, s, x, y);
          } else {
            var s = layout.a;
            var x = layout.b;
            var y = layout.c;
            return A3($elm$browser$Debugger$Main$Horizontal, s, x, y);
          }
        };
        var $elm$core$Dict$getMin = function(dict) {
          getMin:
            while (true) {
              if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
                var left = dict.d;
                var $temp$dict = left;
                dict = $temp$dict;
                continue getMin;
              } else {
                return dict;
              }
            }
        };
        var $elm$core$Dict$moveRedLeft = function(dict) {
          if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
            if (dict.e.d.$ === "RBNode_elm_builtin" && dict.e.d.a.$ === "Red") {
              var clr = dict.a;
              var k = dict.b;
              var v = dict.c;
              var _v1 = dict.d;
              var lClr = _v1.a;
              var lK = _v1.b;
              var lV = _v1.c;
              var lLeft = _v1.d;
              var lRight = _v1.e;
              var _v2 = dict.e;
              var rClr = _v2.a;
              var rK = _v2.b;
              var rV = _v2.c;
              var rLeft = _v2.d;
              var _v3 = rLeft.a;
              var rlK = rLeft.b;
              var rlV = rLeft.c;
              var rlL = rLeft.d;
              var rlR = rLeft.e;
              var rRight = _v2.e;
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                $elm$core$Dict$Red,
                rlK,
                rlV,
                A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  $elm$core$Dict$Black,
                  k,
                  v,
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
                  rlL
                ),
                A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight)
              );
            } else {
              var clr = dict.a;
              var k = dict.b;
              var v = dict.c;
              var _v4 = dict.d;
              var lClr = _v4.a;
              var lK = _v4.b;
              var lV = _v4.c;
              var lLeft = _v4.d;
              var lRight = _v4.e;
              var _v5 = dict.e;
              var rClr = _v5.a;
              var rK = _v5.b;
              var rV = _v5.c;
              var rLeft = _v5.d;
              var rRight = _v5.e;
              if (clr.$ === "Black") {
                return A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  $elm$core$Dict$Black,
                  k,
                  v,
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
                );
              } else {
                return A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  $elm$core$Dict$Black,
                  k,
                  v,
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
                );
              }
            }
          } else {
            return dict;
          }
        };
        var $elm$core$Dict$moveRedRight = function(dict) {
          if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin" && dict.e.$ === "RBNode_elm_builtin") {
            if (dict.d.d.$ === "RBNode_elm_builtin" && dict.d.d.a.$ === "Red") {
              var clr = dict.a;
              var k = dict.b;
              var v = dict.c;
              var _v1 = dict.d;
              var lClr = _v1.a;
              var lK = _v1.b;
              var lV = _v1.c;
              var _v2 = _v1.d;
              var _v3 = _v2.a;
              var llK = _v2.b;
              var llV = _v2.c;
              var llLeft = _v2.d;
              var llRight = _v2.e;
              var lRight = _v1.e;
              var _v4 = dict.e;
              var rClr = _v4.a;
              var rK = _v4.b;
              var rV = _v4.c;
              var rLeft = _v4.d;
              var rRight = _v4.e;
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                $elm$core$Dict$Red,
                lK,
                lV,
                A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
                A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  $elm$core$Dict$Black,
                  k,
                  v,
                  lRight,
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
                )
              );
            } else {
              var clr = dict.a;
              var k = dict.b;
              var v = dict.c;
              var _v5 = dict.d;
              var lClr = _v5.a;
              var lK = _v5.b;
              var lV = _v5.c;
              var lLeft = _v5.d;
              var lRight = _v5.e;
              var _v6 = dict.e;
              var rClr = _v6.a;
              var rK = _v6.b;
              var rV = _v6.c;
              var rLeft = _v6.d;
              var rRight = _v6.e;
              if (clr.$ === "Black") {
                return A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  $elm$core$Dict$Black,
                  k,
                  v,
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
                );
              } else {
                return A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  $elm$core$Dict$Black,
                  k,
                  v,
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
                  A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)
                );
              }
            }
          } else {
            return dict;
          }
        };
        var $elm$core$Dict$removeHelpPrepEQGT = F7(
          function(targetKey, dict, color, key, value, left, right) {
            if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Red") {
              var _v1 = left.a;
              var lK = left.b;
              var lV = left.c;
              var lLeft = left.d;
              var lRight = left.e;
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                color,
                lK,
                lV,
                lLeft,
                A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right)
              );
            } else {
              _v2$2:
                while (true) {
                  if (right.$ === "RBNode_elm_builtin" && right.a.$ === "Black") {
                    if (right.d.$ === "RBNode_elm_builtin") {
                      if (right.d.a.$ === "Black") {
                        var _v3 = right.a;
                        var _v4 = right.d;
                        var _v5 = _v4.a;
                        return $elm$core$Dict$moveRedRight(dict);
                      } else {
                        break _v2$2;
                      }
                    } else {
                      var _v6 = right.a;
                      var _v7 = right.d;
                      return $elm$core$Dict$moveRedRight(dict);
                    }
                  } else {
                    break _v2$2;
                  }
                }
              return dict;
            }
          }
        );
        var $elm$core$Dict$removeMin = function(dict) {
          if (dict.$ === "RBNode_elm_builtin" && dict.d.$ === "RBNode_elm_builtin") {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var lColor = left.a;
            var lLeft = left.d;
            var right = dict.e;
            if (lColor.$ === "Black") {
              if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
                var _v3 = lLeft.a;
                return A5(
                  $elm$core$Dict$RBNode_elm_builtin,
                  color,
                  key,
                  value,
                  $elm$core$Dict$removeMin(left),
                  right
                );
              } else {
                var _v4 = $elm$core$Dict$moveRedLeft(dict);
                if (_v4.$ === "RBNode_elm_builtin") {
                  var nColor = _v4.a;
                  var nKey = _v4.b;
                  var nValue = _v4.c;
                  var nLeft = _v4.d;
                  var nRight = _v4.e;
                  return A5(
                    $elm$core$Dict$balance,
                    nColor,
                    nKey,
                    nValue,
                    $elm$core$Dict$removeMin(nLeft),
                    nRight
                  );
                } else {
                  return $elm$core$Dict$RBEmpty_elm_builtin;
                }
              }
            } else {
              return A5(
                $elm$core$Dict$RBNode_elm_builtin,
                color,
                key,
                value,
                $elm$core$Dict$removeMin(left),
                right
              );
            }
          } else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
          }
        };
        var $elm$core$Dict$removeHelp = F2(
          function(targetKey, dict) {
            if (dict.$ === "RBEmpty_elm_builtin") {
              return $elm$core$Dict$RBEmpty_elm_builtin;
            } else {
              var color = dict.a;
              var key = dict.b;
              var value = dict.c;
              var left = dict.d;
              var right = dict.e;
              if (_Utils_cmp(targetKey, key) < 0) {
                if (left.$ === "RBNode_elm_builtin" && left.a.$ === "Black") {
                  var _v4 = left.a;
                  var lLeft = left.d;
                  if (lLeft.$ === "RBNode_elm_builtin" && lLeft.a.$ === "Red") {
                    var _v6 = lLeft.a;
                    return A5(
                      $elm$core$Dict$RBNode_elm_builtin,
                      color,
                      key,
                      value,
                      A2($elm$core$Dict$removeHelp, targetKey, left),
                      right
                    );
                  } else {
                    var _v7 = $elm$core$Dict$moveRedLeft(dict);
                    if (_v7.$ === "RBNode_elm_builtin") {
                      var nColor = _v7.a;
                      var nKey = _v7.b;
                      var nValue = _v7.c;
                      var nLeft = _v7.d;
                      var nRight = _v7.e;
                      return A5(
                        $elm$core$Dict$balance,
                        nColor,
                        nKey,
                        nValue,
                        A2($elm$core$Dict$removeHelp, targetKey, nLeft),
                        nRight
                      );
                    } else {
                      return $elm$core$Dict$RBEmpty_elm_builtin;
                    }
                  }
                } else {
                  return A5(
                    $elm$core$Dict$RBNode_elm_builtin,
                    color,
                    key,
                    value,
                    A2($elm$core$Dict$removeHelp, targetKey, left),
                    right
                  );
                }
              } else {
                return A2(
                  $elm$core$Dict$removeHelpEQGT,
                  targetKey,
                  A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right)
                );
              }
            }
          }
        );
        var $elm$core$Dict$removeHelpEQGT = F2(
          function(targetKey, dict) {
            if (dict.$ === "RBNode_elm_builtin") {
              var color = dict.a;
              var key = dict.b;
              var value = dict.c;
              var left = dict.d;
              var right = dict.e;
              if (_Utils_eq(targetKey, key)) {
                var _v1 = $elm$core$Dict$getMin(right);
                if (_v1.$ === "RBNode_elm_builtin") {
                  var minKey = _v1.b;
                  var minValue = _v1.c;
                  return A5(
                    $elm$core$Dict$balance,
                    color,
                    minKey,
                    minValue,
                    left,
                    $elm$core$Dict$removeMin(right)
                  );
                } else {
                  return $elm$core$Dict$RBEmpty_elm_builtin;
                }
              } else {
                return A5(
                  $elm$core$Dict$balance,
                  color,
                  key,
                  value,
                  left,
                  A2($elm$core$Dict$removeHelp, targetKey, right)
                );
              }
            } else {
              return $elm$core$Dict$RBEmpty_elm_builtin;
            }
          }
        );
        var $elm$core$Dict$remove = F2(
          function(key, dict) {
            var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
            if (_v0.$ === "RBNode_elm_builtin" && _v0.a.$ === "Red") {
              var _v1 = _v0.a;
              var k = _v0.b;
              var v = _v0.c;
              var l = _v0.d;
              var r = _v0.e;
              return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
            } else {
              var x = _v0;
              return x;
            }
          }
        );
        var $elm$core$Dict$update = F3(
          function(targetKey, alter, dictionary) {
            var _v0 = alter(
              A2($elm$core$Dict$get, targetKey, dictionary)
            );
            if (_v0.$ === "Just") {
              var value = _v0.a;
              return A3($elm$core$Dict$insert, targetKey, value, dictionary);
            } else {
              return A2($elm$core$Dict$remove, targetKey, dictionary);
            }
          }
        );
        var $elm$browser$Debugger$Expando$updateIndex = F3(
          function(n, func, list) {
            if (!list.b) {
              return _List_Nil;
            } else {
              var x = list.a;
              var xs = list.b;
              return n <= 0 ? A2(
                $elm$core$List$cons,
                func(x),
                xs
              ) : A2(
                $elm$core$List$cons,
                x,
                A3($elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs)
              );
            }
          }
        );
        var $elm$browser$Debugger$Expando$update = F2(
          function(msg, value) {
            switch (value.$) {
              case "S":
                return value;
              case "Primitive":
                return value;
              case "Sequence":
                var seqType = value.a;
                var isClosed = value.b;
                var valueList = value.c;
                switch (msg.$) {
                  case "Toggle":
                    return A3($elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
                  case "Index":
                    if (msg.a.$ === "None") {
                      var _v3 = msg.a;
                      var index = msg.b;
                      var subMsg = msg.c;
                      return A3(
                        $elm$browser$Debugger$Expando$Sequence,
                        seqType,
                        isClosed,
                        A3(
                          $elm$browser$Debugger$Expando$updateIndex,
                          index,
                          $elm$browser$Debugger$Expando$update(subMsg),
                          valueList
                        )
                      );
                    } else {
                      return value;
                    }
                  default:
                    return value;
                }
              case "Dictionary":
                var isClosed = value.a;
                var keyValuePairs = value.b;
                switch (msg.$) {
                  case "Toggle":
                    return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
                  case "Index":
                    var redirect = msg.a;
                    var index = msg.b;
                    var subMsg = msg.c;
                    switch (redirect.$) {
                      case "None":
                        return value;
                      case "Key":
                        return A2(
                          $elm$browser$Debugger$Expando$Dictionary,
                          isClosed,
                          A3(
                            $elm$browser$Debugger$Expando$updateIndex,
                            index,
                            function(_v6) {
                              var k = _v6.a;
                              var v = _v6.b;
                              return _Utils_Tuple2(
                                A2($elm$browser$Debugger$Expando$update, subMsg, k),
                                v
                              );
                            },
                            keyValuePairs
                          )
                        );
                      default:
                        return A2(
                          $elm$browser$Debugger$Expando$Dictionary,
                          isClosed,
                          A3(
                            $elm$browser$Debugger$Expando$updateIndex,
                            index,
                            function(_v7) {
                              var k = _v7.a;
                              var v = _v7.b;
                              return _Utils_Tuple2(
                                k,
                                A2($elm$browser$Debugger$Expando$update, subMsg, v)
                              );
                            },
                            keyValuePairs
                          )
                        );
                    }
                  default:
                    return value;
                }
              case "Record":
                var isClosed = value.a;
                var valueDict = value.b;
                switch (msg.$) {
                  case "Toggle":
                    return A2($elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
                  case "Index":
                    return value;
                  default:
                    var field = msg.a;
                    var subMsg = msg.b;
                    return A2(
                      $elm$browser$Debugger$Expando$Record,
                      isClosed,
                      A3(
                        $elm$core$Dict$update,
                        field,
                        $elm$browser$Debugger$Expando$updateField(subMsg),
                        valueDict
                      )
                    );
                }
              default:
                var maybeName = value.a;
                var isClosed = value.b;
                var valueList = value.c;
                switch (msg.$) {
                  case "Toggle":
                    return A3($elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
                  case "Index":
                    if (msg.a.$ === "None") {
                      var _v10 = msg.a;
                      var index = msg.b;
                      var subMsg = msg.c;
                      return A3(
                        $elm$browser$Debugger$Expando$Constructor,
                        maybeName,
                        isClosed,
                        A3(
                          $elm$browser$Debugger$Expando$updateIndex,
                          index,
                          $elm$browser$Debugger$Expando$update(subMsg),
                          valueList
                        )
                      );
                    } else {
                      return value;
                    }
                  default:
                    return value;
                }
            }
          }
        );
        var $elm$browser$Debugger$Expando$updateField = F2(
          function(msg, maybeExpando) {
            if (maybeExpando.$ === "Nothing") {
              return maybeExpando;
            } else {
              var expando = maybeExpando.a;
              return $elm$core$Maybe$Just(
                A2($elm$browser$Debugger$Expando$update, msg, expando)
              );
            }
          }
        );
        var $elm$browser$Debugger$Main$Upload = function(a) {
          return { $: "Upload", a };
        };
        var $elm$browser$Debugger$Main$upload = function(popout) {
          return A2(
            $elm$core$Task$perform,
            $elm$browser$Debugger$Main$Upload,
            _Debugger_upload(popout)
          );
        };
        var $elm$browser$Debugger$Overlay$BadMetadata = function(a) {
          return { $: "BadMetadata", a };
        };
        var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
        var $elm$browser$Debugger$Main$withGoodMetadata = F2(
          function(model, func) {
            var _v0 = model.metadata;
            if (_v0.$ === "Ok") {
              var metadata = _v0.a;
              return func(metadata);
            } else {
              var error = _v0.a;
              return _Utils_Tuple2(
                _Utils_update(
                  model,
                  {
                    overlay: $elm$browser$Debugger$Overlay$badMetadata(error)
                  }
                ),
                $elm$core$Platform$Cmd$none
              );
            }
          }
        );
        var $elm$browser$Debugger$Main$wrapUpdate = F3(
          function(update, msg, model) {
            wrapUpdate:
              while (true) {
                switch (msg.$) {
                  case "NoOp":
                    return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                  case "UserMsg":
                    var userMsg = msg.a;
                    var userModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
                    var newHistory = A3($elm$browser$Debugger$History$add, userMsg, userModel, model.history);
                    var _v1 = A2(update, userMsg, userModel);
                    var newUserModel = _v1.a;
                    var userCmds = _v1.b;
                    var commands = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds);
                    var _v2 = model.state;
                    if (_v2.$ === "Running") {
                      return _Utils_Tuple2(
                        _Utils_update(
                          model,
                          {
                            expandoModel: A2($elm$browser$Debugger$Expando$merge, newUserModel, model.expandoModel),
                            expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
                            history: newHistory,
                            state: $elm$browser$Debugger$Main$Running(newUserModel)
                          }
                        ),
                        $elm$core$Platform$Cmd$batch(
                          _List_fromArray(
                            [
                              commands,
                              $elm$browser$Debugger$Main$scroll(model.popout)
                            ]
                          )
                        )
                      );
                    } else {
                      var index = _v2.a;
                      var indexModel = _v2.b;
                      var history2 = _v2.e;
                      return _Utils_Tuple2(
                        _Utils_update(
                          model,
                          {
                            history: newHistory,
                            state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel, userMsg, history2)
                          }
                        ),
                        commands
                      );
                    }
                  case "TweakExpandoMsg":
                    var eMsg = msg.a;
                    return _Utils_Tuple2(
                      _Utils_update(
                        model,
                        {
                          expandoMsg: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoMsg)
                        }
                      ),
                      $elm$core$Platform$Cmd$none
                    );
                  case "TweakExpandoModel":
                    var eMsg = msg.a;
                    return _Utils_Tuple2(
                      _Utils_update(
                        model,
                        {
                          expandoModel: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoModel)
                        }
                      ),
                      $elm$core$Platform$Cmd$none
                    );
                  case "Resume":
                    var _v3 = model.state;
                    if (_v3.$ === "Running") {
                      return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                    } else {
                      var userModel = _v3.c;
                      var userMsg = _v3.d;
                      return _Utils_Tuple2(
                        _Utils_update(
                          model,
                          {
                            expandoModel: A2($elm$browser$Debugger$Expando$merge, userModel, model.expandoModel),
                            expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
                            state: $elm$browser$Debugger$Main$Running(userModel)
                          }
                        ),
                        $elm$browser$Debugger$Main$scroll(model.popout)
                      );
                    }
                  case "Jump":
                    var index = msg.a;
                    return _Utils_Tuple2(
                      A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
                      $elm$core$Platform$Cmd$none
                    );
                  case "SliderJump":
                    var index = msg.a;
                    return _Utils_Tuple2(
                      A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
                      A2(
                        $elm$browser$Debugger$Main$scrollTo,
                        $elm$browser$Debugger$History$idForMessageIndex(index),
                        model.popout
                      )
                    );
                  case "Open":
                    return _Utils_Tuple2(
                      model,
                      A2(
                        $elm$core$Task$perform,
                        $elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
                        _Debugger_open(model.popout)
                      )
                    );
                  case "Up":
                    var _v4 = model.state;
                    if (_v4.$ === "Running") {
                      return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                    } else {
                      var i = _v4.a;
                      var history2 = _v4.e;
                      var targetIndex = i + 1;
                      if (_Utils_cmp(
                        targetIndex,
                        $elm$browser$Debugger$History$size(history2)
                      ) < 0) {
                        var $temp$update = update, $temp$msg = $elm$browser$Debugger$Main$SliderJump(targetIndex), $temp$model = model;
                        update = $temp$update;
                        msg = $temp$msg;
                        model = $temp$model;
                        continue wrapUpdate;
                      } else {
                        var $temp$update = update, $temp$msg = $elm$browser$Debugger$Main$Resume, $temp$model = model;
                        update = $temp$update;
                        msg = $temp$msg;
                        model = $temp$model;
                        continue wrapUpdate;
                      }
                    }
                  case "Down":
                    var _v5 = model.state;
                    if (_v5.$ === "Running") {
                      var $temp$update = update, $temp$msg = $elm$browser$Debugger$Main$Jump(
                        $elm$browser$Debugger$History$size(model.history) - 1
                      ), $temp$model = model;
                      update = $temp$update;
                      msg = $temp$msg;
                      model = $temp$model;
                      continue wrapUpdate;
                    } else {
                      var index = _v5.a;
                      if (index > 0) {
                        var $temp$update = update, $temp$msg = $elm$browser$Debugger$Main$SliderJump(index - 1), $temp$model = model;
                        update = $temp$update;
                        msg = $temp$msg;
                        model = $temp$model;
                        continue wrapUpdate;
                      } else {
                        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                      }
                    }
                  case "Import":
                    return A2(
                      $elm$browser$Debugger$Main$withGoodMetadata,
                      model,
                      function(_v6) {
                        return _Utils_Tuple2(
                          model,
                          $elm$browser$Debugger$Main$upload(model.popout)
                        );
                      }
                    );
                  case "Export":
                    return A2(
                      $elm$browser$Debugger$Main$withGoodMetadata,
                      model,
                      function(metadata) {
                        return _Utils_Tuple2(
                          model,
                          A2($elm$browser$Debugger$Main$download, metadata, model.history)
                        );
                      }
                    );
                  case "Upload":
                    var jsonString = msg.a;
                    return A2(
                      $elm$browser$Debugger$Main$withGoodMetadata,
                      model,
                      function(metadata) {
                        var _v7 = A2($elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
                        if (_v7.$ === "Err") {
                          var newOverlay = _v7.a;
                          return _Utils_Tuple2(
                            _Utils_update(
                              model,
                              { overlay: newOverlay }
                            ),
                            $elm$core$Platform$Cmd$none
                          );
                        } else {
                          var rawHistory2 = _v7.a;
                          return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory2, update, model);
                        }
                      }
                    );
                  case "OverlayMsg":
                    var overlayMsg = msg.a;
                    var _v8 = A2($elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
                    if (_v8.$ === "Nothing") {
                      return _Utils_Tuple2(
                        _Utils_update(
                          model,
                          { overlay: $elm$browser$Debugger$Overlay$none }
                        ),
                        $elm$core$Platform$Cmd$none
                      );
                    } else {
                      var rawHistory = _v8.a;
                      return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
                    }
                  case "SwapLayout":
                    return _Utils_Tuple2(
                      _Utils_update(
                        model,
                        {
                          layout: $elm$browser$Debugger$Main$swapLayout(model.layout)
                        }
                      ),
                      $elm$core$Platform$Cmd$none
                    );
                  case "DragStart":
                    return _Utils_Tuple2(
                      _Utils_update(
                        model,
                        {
                          layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Moving, model.layout)
                        }
                      ),
                      $elm$core$Platform$Cmd$none
                    );
                  case "Drag":
                    var info = msg.a;
                    return _Utils_Tuple2(
                      _Utils_update(
                        model,
                        {
                          layout: A2($elm$browser$Debugger$Main$drag, info, model.layout)
                        }
                      ),
                      $elm$core$Platform$Cmd$none
                    );
                  default:
                    return _Utils_Tuple2(
                      _Utils_update(
                        model,
                        {
                          layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Static, model.layout)
                        }
                      ),
                      $elm$core$Platform$Cmd$none
                    );
                }
              }
          }
        );
        var $elm$browser$Browser$External = function(a) {
          return { $: "External", a };
        };
        var $elm$browser$Browser$Internal = function(a) {
          return { $: "Internal", a };
        };
        var $elm$browser$Browser$Dom$NotFound = function(a) {
          return { $: "NotFound", a };
        };
        var $elm$url$Url$Http = { $: "Http" };
        var $elm$url$Url$Https = { $: "Https" };
        var $elm$url$Url$Url = F6(
          function(protocol, host, port_, path, query, fragment) {
            return { fragment, host, path, port_, protocol, query };
          }
        );
        var $elm$core$String$dropLeft = F2(
          function(n, string) {
            return n < 1 ? string : A3(
              $elm$core$String$slice,
              n,
              $elm$core$String$length(string),
              string
            );
          }
        );
        var $elm$core$String$indexes = _String_indexes;
        var $elm$core$String$isEmpty = function(string) {
          return string === "";
        };
        var $elm$url$Url$chompBeforePath = F5(
          function(protocol, path, params, frag, str) {
            if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, "@", str)) {
              return $elm$core$Maybe$Nothing;
            } else {
              var _v0 = A2($elm$core$String$indexes, ":", str);
              if (!_v0.b) {
                return $elm$core$Maybe$Just(
                  A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag)
                );
              } else {
                if (!_v0.b.b) {
                  var i = _v0.a;
                  var _v1 = $elm$core$String$toInt(
                    A2($elm$core$String$dropLeft, i + 1, str)
                  );
                  if (_v1.$ === "Nothing") {
                    return $elm$core$Maybe$Nothing;
                  } else {
                    var port_ = _v1;
                    return $elm$core$Maybe$Just(
                      A6(
                        $elm$url$Url$Url,
                        protocol,
                        A2($elm$core$String$left, i, str),
                        port_,
                        path,
                        params,
                        frag
                      )
                    );
                  }
                } else {
                  return $elm$core$Maybe$Nothing;
                }
              }
            }
          }
        );
        var $elm$url$Url$chompBeforeQuery = F4(
          function(protocol, params, frag, str) {
            if ($elm$core$String$isEmpty(str)) {
              return $elm$core$Maybe$Nothing;
            } else {
              var _v0 = A2($elm$core$String$indexes, "/", str);
              if (!_v0.b) {
                return A5($elm$url$Url$chompBeforePath, protocol, "/", params, frag, str);
              } else {
                var i = _v0.a;
                return A5(
                  $elm$url$Url$chompBeforePath,
                  protocol,
                  A2($elm$core$String$dropLeft, i, str),
                  params,
                  frag,
                  A2($elm$core$String$left, i, str)
                );
              }
            }
          }
        );
        var $elm$url$Url$chompBeforeFragment = F3(
          function(protocol, frag, str) {
            if ($elm$core$String$isEmpty(str)) {
              return $elm$core$Maybe$Nothing;
            } else {
              var _v0 = A2($elm$core$String$indexes, "?", str);
              if (!_v0.b) {
                return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
              } else {
                var i = _v0.a;
                return A4(
                  $elm$url$Url$chompBeforeQuery,
                  protocol,
                  $elm$core$Maybe$Just(
                    A2($elm$core$String$dropLeft, i + 1, str)
                  ),
                  frag,
                  A2($elm$core$String$left, i, str)
                );
              }
            }
          }
        );
        var $elm$url$Url$chompAfterProtocol = F2(
          function(protocol, str) {
            if ($elm$core$String$isEmpty(str)) {
              return $elm$core$Maybe$Nothing;
            } else {
              var _v0 = A2($elm$core$String$indexes, "#", str);
              if (!_v0.b) {
                return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
              } else {
                var i = _v0.a;
                return A3(
                  $elm$url$Url$chompBeforeFragment,
                  protocol,
                  $elm$core$Maybe$Just(
                    A2($elm$core$String$dropLeft, i + 1, str)
                  ),
                  A2($elm$core$String$left, i, str)
                );
              }
            }
          }
        );
        var $elm$core$String$startsWith = _String_startsWith;
        var $elm$url$Url$fromString = function(str) {
          return A2($elm$core$String$startsWith, "http://", str) ? A2(
            $elm$url$Url$chompAfterProtocol,
            $elm$url$Url$Http,
            A2($elm$core$String$dropLeft, 7, str)
          ) : A2($elm$core$String$startsWith, "https://", str) ? A2(
            $elm$url$Url$chompAfterProtocol,
            $elm$url$Url$Https,
            A2($elm$core$String$dropLeft, 8, str)
          ) : $elm$core$Maybe$Nothing;
        };
        var $elm$core$Basics$never = function(_v0) {
          never:
            while (true) {
              var nvr = _v0.a;
              var $temp$_v0 = nvr;
              _v0 = $temp$_v0;
              continue never;
            }
        };
        var $elm$browser$Browser$element = _Browser_element;
        var $author$project$Main$PhoenixMsg = function(a) {
          return { $: "PhoenixMsg", a };
        };
        var $author$project$Main$SongInfo = F3(
          function(cover, title, artist) {
            return { artist, cover, title };
          }
        );
        var $elm$json$Json$Decode$andThen = _Json_andThen;
        var $author$project$Ports$Phoenix$channelReceiver = _Platform_incomingPort(
          "channelReceiver",
          A2(
            $elm$json$Json$Decode$andThen,
            function(topic) {
              return A2(
                $elm$json$Json$Decode$andThen,
                function(payload) {
                  return A2(
                    $elm$json$Json$Decode$andThen,
                    function(msg) {
                      return $elm$json$Json$Decode$succeed(
                        { msg, payload, topic }
                      );
                    },
                    A2($elm$json$Json$Decode$field, "msg", $elm$json$Json$Decode$string)
                  );
                },
                A2($elm$json$Json$Decode$field, "payload", $elm$json$Json$Decode$value)
              );
            },
            A2($elm$json$Json$Decode$field, "topic", $elm$json$Json$Decode$string)
          )
        );
        var $author$project$Ports$Phoenix$phoenixSend = _Platform_outgoingPort(
          "phoenixSend",
          function($) {
            return $elm$json$Json$Encode$object(
              _List_fromArray(
                [
                  _Utils_Tuple2(
                    "msg",
                    $elm$json$Json$Encode$string($.msg)
                  ),
                  _Utils_Tuple2(
                    "payload",
                    $elm$core$Basics$identity($.payload)
                  )
                ]
              )
            );
          }
        );
        var $author$project$Ports$Phoenix$presenceReceiver = _Platform_incomingPort(
          "presenceReceiver",
          A2(
            $elm$json$Json$Decode$andThen,
            function(topic) {
              return A2(
                $elm$json$Json$Decode$andThen,
                function(payload) {
                  return A2(
                    $elm$json$Json$Decode$andThen,
                    function(msg) {
                      return $elm$json$Json$Decode$succeed(
                        { msg, payload, topic }
                      );
                    },
                    A2($elm$json$Json$Decode$field, "msg", $elm$json$Json$Decode$string)
                  );
                },
                A2($elm$json$Json$Decode$field, "payload", $elm$json$Json$Decode$value)
              );
            },
            A2($elm$json$Json$Decode$field, "topic", $elm$json$Json$Decode$string)
          )
        );
        var $author$project$Ports$Phoenix$socketReceiver = _Platform_incomingPort(
          "socketReceiver",
          A2(
            $elm$json$Json$Decode$andThen,
            function(payload) {
              return A2(
                $elm$json$Json$Decode$andThen,
                function(msg) {
                  return $elm$json$Json$Decode$succeed(
                    { msg, payload }
                  );
                },
                A2($elm$json$Json$Decode$field, "msg", $elm$json$Json$Decode$string)
              );
            },
            A2($elm$json$Json$Decode$field, "payload", $elm$json$Json$Decode$value)
          )
        );
        var $author$project$Ports$Phoenix$config = { channelReceiver: $author$project$Ports$Phoenix$channelReceiver, phoenixSend: $author$project$Ports$Phoenix$phoenixSend, presenceReceiver: $author$project$Ports$Phoenix$presenceReceiver, socketReceiver: $author$project$Ports$Phoenix$socketReceiver };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$ClosedInfo = F5(
          function(reason, code, wasClean, type_, isTrusted) {
            return { code, isTrusted, reason, type_, wasClean };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Disconnected = function(a) {
          return { $: "Disconnected", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Model = function(a) {
          return { $: "Model", a };
        };
        var $phollyer$elm_phoenix_websocket$Internal$Channel$Channel = function(a) {
          return { $: "Channel", a };
        };
        var $phollyer$elm_phoenix_websocket$Internal$Config$empty = $elm$core$Dict$empty;
        var $elm$core$Set$Set_elm_builtin = function(a) {
          return { $: "Set_elm_builtin", a };
        };
        var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
        var $phollyer$elm_phoenix_websocket$Internal$Unique$empty = $elm$core$Set$empty;
        var $phollyer$elm_phoenix_websocket$Internal$Channel$init = function(portOut) {
          return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
            { joinConfigs: $phollyer$elm_phoenix_websocket$Internal$Config$empty, joined: $phollyer$elm_phoenix_websocket$Internal$Unique$empty, leaveConfigs: $phollyer$elm_phoenix_websocket$Internal$Config$empty, portOut, queuedJoins: $phollyer$elm_phoenix_websocket$Internal$Unique$empty, queuedLeaves: $phollyer$elm_phoenix_websocket$Internal$Unique$empty }
          );
        };
        var $phollyer$elm_phoenix_websocket$Internal$Presence$Presence = function(a) {
          return { $: "Presence", a };
        };
        var $phollyer$elm_phoenix_websocket$Internal$Presence$init = $phollyer$elm_phoenix_websocket$Internal$Presence$Presence(
          { diff: $phollyer$elm_phoenix_websocket$Internal$Config$empty, joins: $phollyer$elm_phoenix_websocket$Internal$Config$empty, leaves: $phollyer$elm_phoenix_websocket$Internal$Config$empty, state: $phollyer$elm_phoenix_websocket$Internal$Config$empty }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Push$Push = function(a) {
          return { $: "Push", a };
        };
        var $phollyer$elm_phoenix_websocket$Internal$Push$init = function(portOut) {
          return $phollyer$elm_phoenix_websocket$Internal$Push$Push(
            { count: 0, portOut, queue: $phollyer$elm_phoenix_websocket$Internal$Config$empty, sent: $phollyer$elm_phoenix_websocket$Internal$Config$empty, timeouts: $phollyer$elm_phoenix_websocket$Internal$Config$empty }
          );
        };
        var $phollyer$elm_phoenix_websocket$Internal$Socket$Socket = function(a) {
          return { $: "Socket", a };
        };
        var $phollyer$elm_phoenix_websocket$Internal$Socket$init = F2(
          function(portOut, state) {
            return $phollyer$elm_phoenix_websocket$Internal$Socket$Socket(
              {
                disconnectReason: $elm$core$Maybe$Nothing,
                info: { connectionState: "", endPointURL: "", isConnected: false, makeRef: "", protocol: "" },
                options: _List_Nil,
                params: $elm$core$Maybe$Nothing,
                portOut,
                reconnect: false,
                state
              }
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$init = function(portConfig) {
          return $phollyer$elm_phoenix_websocket$Phoenix$Model(
            {
              channel: $phollyer$elm_phoenix_websocket$Internal$Channel$init(portConfig.phoenixSend),
              portConfig,
              presence: $phollyer$elm_phoenix_websocket$Internal$Presence$init,
              push: $phollyer$elm_phoenix_websocket$Internal$Push$init(portConfig.phoenixSend),
              socket: A2(
                $phollyer$elm_phoenix_websocket$Internal$Socket$init,
                portConfig.phoenixSend,
                $phollyer$elm_phoenix_websocket$Phoenix$Disconnected(
                  A5($phollyer$elm_phoenix_websocket$Phoenix$Socket$ClosedInfo, $elm$core$Maybe$Nothing, 0, false, "", false)
                )
              )
            }
          );
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Connecting = { $: "Connecting" };
        var $elm$json$Json$Encode$bool = _Json_wrap;
        var $elm$json$Json$Encode$int = _Json_wrap;
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$encodeConnectOption = function(option) {
          switch (option.$) {
            case "BinaryType":
              var binaryType = option.a;
              return _Utils_Tuple2(
                "binaryType",
                $elm$json$Json$Encode$string(binaryType)
              );
            case "HeartbeatIntervalMillis":
              var interval = option.a;
              return _Utils_Tuple2(
                "heartbeatIntervalMs",
                $elm$json$Json$Encode$int(interval)
              );
            case "Logger":
              var use = option.a;
              return _Utils_Tuple2(
                "logger",
                $elm$json$Json$Encode$bool(use)
              );
            case "LongpollerTimeout":
              var timeout = option.a;
              return _Utils_Tuple2(
                "longpollerTimeout",
                $elm$json$Json$Encode$int(timeout)
              );
            case "ReconnectAfterMillis":
              var millis = option.a;
              return _Utils_Tuple2(
                "reconnectAfterMs",
                $elm$json$Json$Encode$int(millis)
              );
            case "ReconnectSteppedBackoff":
              var list = option.a;
              return _Utils_Tuple2(
                "reconnectSteppedBackoff",
                A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$int, list)
              );
            case "RejoinAfterMillis":
              var millis = option.a;
              return _Utils_Tuple2(
                "rejoinAfterMs",
                $elm$json$Json$Encode$int(millis)
              );
            case "RejoinSteppedBackoff":
              var list = option.a;
              return _Utils_Tuple2(
                "rejoinSteppedBackoff",
                A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$int, list)
              );
            case "Timeout":
              var millis = option.a;
              return _Utils_Tuple2(
                "timeout",
                $elm$json$Json$Encode$int(millis)
              );
            case "Transport":
              var transport = option.a;
              return _Utils_Tuple2(
                "transport",
                $elm$json$Json$Encode$string(transport)
              );
            default:
              var vsn = option.a;
              return _Utils_Tuple2(
                "vsn",
                $elm$json$Json$Encode$string(vsn)
              );
          }
        };
        var $elm$json$Json$Encode$null = _Json_encodeNull;
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$encodeConnectOptionsAndParams = F2(
          function(options, maybeParams) {
            return $elm$json$Json$Encode$object(
              _List_fromArray(
                [
                  _Utils_Tuple2(
                    "options",
                    $elm$json$Json$Encode$object(
                      A2($elm$core$List$map, $phollyer$elm_phoenix_websocket$Phoenix$Socket$encodeConnectOption, options)
                    )
                  ),
                  _Utils_Tuple2(
                    "params",
                    A2($elm$core$Maybe$withDefault, $elm$json$Json$Encode$null, maybeParams)
                  )
                ]
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$connect = F3(
          function(options, maybeParams, portOut) {
            return portOut(
              {
                msg: "connect",
                payload: A2($phollyer$elm_phoenix_websocket$Phoenix$Socket$encodeConnectOptionsAndParams, options, maybeParams)
              }
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Socket$connect = function(_v0) {
          var socket = _v0.a;
          return A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$connect, socket.options, socket.params, socket.portOut);
        };
        var $phollyer$elm_phoenix_websocket$Internal$Socket$currentState = function(_v0) {
          var state = _v0.a.state;
          return state;
        };
        var $phollyer$elm_phoenix_websocket$Internal$Socket$setReconnect = F2(
          function(reconnect_, _v0) {
            var socket = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Socket$Socket(
              _Utils_update(
                socket,
                { reconnect: reconnect_ }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Socket$setState = F2(
          function(state, _v0) {
            var socket = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Socket$Socket(
              _Utils_update(
                socket,
                { state }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$updateSocketState = F2(
          function(state, _v0) {
            var model = _v0.a;
            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
              _Utils_update(
                model,
                {
                  socket: A2($phollyer$elm_phoenix_websocket$Internal$Socket$setState, state, model.socket)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$connect = function(_v0) {
          var model = _v0.a;
          var socket = model.socket;
          var _v1 = $phollyer$elm_phoenix_websocket$Internal$Socket$currentState(model.socket);
          switch (_v1.$) {
            case "Disconnected":
              return _Utils_Tuple2(
                A2(
                  $phollyer$elm_phoenix_websocket$Phoenix$updateSocketState,
                  $phollyer$elm_phoenix_websocket$Phoenix$Connecting,
                  $phollyer$elm_phoenix_websocket$Phoenix$Model(
                    _Utils_update(
                      model,
                      {
                        socket: A2($phollyer$elm_phoenix_websocket$Internal$Socket$setReconnect, false, socket)
                      }
                    )
                  )
                ),
                $phollyer$elm_phoenix_websocket$Internal$Socket$connect(model.socket)
              );
            case "Disconnecting":
              return _Utils_Tuple2(
                $phollyer$elm_phoenix_websocket$Phoenix$Model(
                  _Utils_update(
                    model,
                    {
                      socket: A2($phollyer$elm_phoenix_websocket$Internal$Socket$setReconnect, true, socket)
                    }
                  )
                ),
                $elm$core$Platform$Cmd$none
              );
            default:
              return _Utils_Tuple2(
                $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                $elm$core$Platform$Cmd$none
              );
          }
        };
        var $elm$core$Dict$member = F2(
          function(key, dict) {
            var _v0 = A2($elm$core$Dict$get, key, dict);
            if (_v0.$ === "Just") {
              return true;
            } else {
              return false;
            }
          }
        );
        var $elm$core$Set$member = F2(
          function(key, _v0) {
            var dict = _v0.a;
            return A2($elm$core$Dict$member, key, dict);
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Unique$exists = $elm$core$Set$member;
        var $phollyer$elm_phoenix_websocket$Internal$Channel$isJoined = F2(
          function(topic, _v0) {
            var joined = _v0.a.joined;
            return A2($phollyer$elm_phoenix_websocket$Internal$Unique$exists, topic, joined);
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$joinConfig = { events: _List_Nil, payload: $elm$json$Json$Encode$null, timeout: $elm$core$Maybe$Nothing, topic: "" };
        var $phollyer$elm_phoenix_websocket$Internal$Channel$defaultJoinConfig = function(topic) {
          return _Utils_update(
            $phollyer$elm_phoenix_websocket$Phoenix$Channel$joinConfig,
            { topic }
          );
        };
        var $phollyer$elm_phoenix_websocket$Internal$Config$get = $elm$core$Dict$get;
        var $elm$core$Maybe$map = F2(
          function(f, maybe) {
            if (maybe.$ === "Just") {
              var value = maybe.a;
              return $elm$core$Maybe$Just(
                f(value)
              );
            } else {
              return $elm$core$Maybe$Nothing;
            }
          }
        );
        var $elm_community$json_extra$Json$Encode$Extra$maybe = function(encoder) {
          return A2(
            $elm$core$Basics$composeR,
            $elm$core$Maybe$map(encoder),
            $elm$core$Maybe$withDefault($elm$json$Json$Encode$null)
          );
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$join = F2(
          function(_v0, portOut) {
            var topic = _v0.topic;
            var events = _v0.events;
            var payload = _v0.payload;
            var timeout = _v0.timeout;
            return portOut(
              {
                msg: "join",
                payload: $elm$json$Json$Encode$object(
                  _List_fromArray(
                    [
                      _Utils_Tuple2(
                        "topic",
                        $elm$json$Json$Encode$string(topic)
                      ),
                      _Utils_Tuple2(
                        "events",
                        A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, events)
                      ),
                      _Utils_Tuple2("payload", payload),
                      _Utils_Tuple2(
                        "timeout",
                        A2($elm_community$json_extra$Json$Encode$Extra$maybe, $elm$json$Json$Encode$int, timeout)
                      )
                    ]
                  )
                )
              }
            );
          }
        );
        var $elm$core$Set$insert = F2(
          function(key, _v0) {
            var dict = _v0.a;
            return $elm$core$Set$Set_elm_builtin(
              A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict)
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Unique$insert = $elm$core$Set$insert;
        var $phollyer$elm_phoenix_websocket$Internal$Channel$queueJoin = F2(
          function(topic, _v0) {
            var channel = _v0.a;
            var queuedJoins = channel.queuedJoins;
            return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
              _Utils_update(
                channel,
                {
                  queuedJoins: A2($phollyer$elm_phoenix_websocket$Internal$Unique$insert, topic, queuedJoins)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Config$insert = $elm$core$Dict$insert;
        var $phollyer$elm_phoenix_websocket$Internal$Channel$setJoinConfig = F2(
          function(config, _v0) {
            var topic = config.topic;
            var channel = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
              _Utils_update(
                channel,
                {
                  joinConfigs: A3($phollyer$elm_phoenix_websocket$Internal$Config$insert, topic, config, channel.joinConfigs)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$join = F2(
          function(topic, _v0) {
            var channel = _v0.a;
            var _v1 = A2($phollyer$elm_phoenix_websocket$Internal$Config$get, topic, channel.joinConfigs);
            if (_v1.$ === "Just") {
              var joinConfig = _v1.a;
              return _Utils_Tuple2(
                A2(
                  $phollyer$elm_phoenix_websocket$Internal$Channel$queueJoin,
                  topic,
                  $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(channel)
                ),
                A2($phollyer$elm_phoenix_websocket$Phoenix$Channel$join, joinConfig, channel.portOut)
              );
            } else {
              return A2(
                $phollyer$elm_phoenix_websocket$Internal$Channel$join,
                topic,
                A2(
                  $phollyer$elm_phoenix_websocket$Internal$Channel$setJoinConfig,
                  $phollyer$elm_phoenix_websocket$Internal$Channel$defaultJoinConfig(topic),
                  $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(channel)
                )
              );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$queueJoin = F2(
          function(topic, _v0) {
            var model = _v0.a;
            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
              _Utils_update(
                model,
                {
                  channel: A2($phollyer$elm_phoenix_websocket$Internal$Channel$queueJoin, topic, model.channel)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$join = F2(
          function(topic, _v0) {
            var model = _v0.a;
            var channel = model.channel;
            if (A2($phollyer$elm_phoenix_websocket$Internal$Channel$isJoined, topic, channel)) {
              return _Utils_Tuple2(
                $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                $elm$core$Platform$Cmd$none
              );
            } else {
              var _v1 = $phollyer$elm_phoenix_websocket$Internal$Socket$currentState(model.socket);
              switch (_v1.$) {
                case "Connected":
                  var _v2 = A2($phollyer$elm_phoenix_websocket$Internal$Channel$join, topic, channel);
                  var channel_ = _v2.a;
                  var channelCmd = _v2.b;
                  return _Utils_Tuple2(
                    $phollyer$elm_phoenix_websocket$Phoenix$Model(
                      _Utils_update(
                        model,
                        { channel: channel_ }
                      )
                    ),
                    channelCmd
                  );
                case "Connecting":
                  return _Utils_Tuple2(
                    A2(
                      $phollyer$elm_phoenix_websocket$Phoenix$queueJoin,
                      topic,
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model)
                    ),
                    $elm$core$Platform$Cmd$none
                  );
                case "Disconnecting":
                  return _Utils_Tuple2(
                    A2(
                      $phollyer$elm_phoenix_websocket$Phoenix$queueJoin,
                      topic,
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model)
                    ),
                    $elm$core$Platform$Cmd$none
                  );
                default:
                  return $phollyer$elm_phoenix_websocket$Phoenix$connect(
                    A2(
                      $phollyer$elm_phoenix_websocket$Phoenix$queueJoin,
                      topic,
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model)
                    )
                  );
              }
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$joinConfig = { events: _List_Nil, payload: $elm$json$Json$Encode$null, timeout: $elm$core$Maybe$Nothing, topic: "" };
        var $mdgriffith$elm_style_animation$Animation$Length = F2(
          function(a, b) {
            return { $: "Length", a, b };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Percent = { $: "Percent" };
        var $mdgriffith$elm_style_animation$Animation$percent = function(perc) {
          return A2($mdgriffith$elm_style_animation$Animation$Length, perc, $mdgriffith$elm_style_animation$Animation$Percent);
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$setJoinConfig = F2(
          function(config, _v0) {
            var model = _v0.a;
            var channel = model.channel;
            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
              _Utils_update(
                model,
                {
                  channel: A2($phollyer$elm_phoenix_websocket$Internal$Channel$setJoinConfig, config, channel)
                }
              )
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$Spring = function(a) {
          return { $: "Spring", a };
        };
        var $mdgriffith$elm_style_animation$Animation$spring = function(settings) {
          return $mdgriffith$elm_style_animation$Animation$Model$Spring(settings);
        };
        var $mdgriffith$elm_style_animation$Animation$Model$Animation = function(a) {
          return { $: "Animation", a };
        };
        var $elm$time$Time$Posix = function(a) {
          return { $: "Posix", a };
        };
        var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
        var $mdgriffith$elm_style_animation$Animation$initialState = function(current) {
          return $mdgriffith$elm_style_animation$Animation$Model$Animation(
            {
              interruption: _List_Nil,
              running: false,
              steps: _List_Nil,
              style: current,
              timing: {
                current: $elm$time$Time$millisToPosix(0),
                dt: $elm$time$Time$millisToPosix(0)
              }
            }
          );
        };
        var $mdgriffith$elm_style_animation$Animation$Model$AngleProperty = F2(
          function(a, b) {
            return { $: "AngleProperty", a, b };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$ColorProperty = F5(
          function(a, b, c, d, e) {
            return { $: "ColorProperty", a, b, c, d, e };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$ExactProperty = F2(
          function(a, b) {
            return { $: "ExactProperty", a, b };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$Path = function(a) {
          return { $: "Path", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$Points = function(a) {
          return { $: "Points", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$Property = F2(
          function(a, b) {
            return { $: "Property", a, b };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$Property2 = F3(
          function(a, b, c) {
            return { $: "Property2", a, b, c };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$Property3 = F4(
          function(a, b, c, d) {
            return { $: "Property3", a, b, c, d };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$Property4 = F5(
          function(a, b, c, d, e) {
            return { $: "Property4", a, b, c, d, e };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$ShadowProperty = F3(
          function(a, b, c) {
            return { $: "ShadowProperty", a, b, c };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc = function(a) {
          return { $: "AntiClockwiseArc", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc = function(a) {
          return { $: "ClockwiseArc", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$Close = { $: "Close" };
        var $mdgriffith$elm_style_animation$Animation$Model$Curve = function(a) {
          return { $: "Curve", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$CurveTo = function(a) {
          return { $: "CurveTo", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$Horizontal = function(a) {
          return { $: "Horizontal", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$HorizontalTo = function(a) {
          return { $: "HorizontalTo", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$Line = F2(
          function(a, b) {
            return { $: "Line", a, b };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$LineTo = F2(
          function(a, b) {
            return { $: "LineTo", a, b };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$Move = F2(
          function(a, b) {
            return { $: "Move", a, b };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$MoveTo = F2(
          function(a, b) {
            return { $: "MoveTo", a, b };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$Quadratic = function(a) {
          return { $: "Quadratic", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo = function(a) {
          return { $: "QuadraticTo", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$Smooth = function(a) {
          return { $: "Smooth", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic = function(a) {
          return { $: "SmoothQuadratic", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo = function(a) {
          return { $: "SmoothQuadraticTo", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$SmoothTo = function(a) {
          return { $: "SmoothTo", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$Vertical = function(a) {
          return { $: "Vertical", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$VerticalTo = function(a) {
          return { $: "VerticalTo", a };
        };
        var $mdgriffith$elm_style_animation$Animation$Model$mapPathMotion = F2(
          function(fn, cmd) {
            var mapCoords = function(coords2) {
              return A2(
                $elm$core$List$map,
                function(_v1) {
                  var x = _v1.a;
                  var y = _v1.b;
                  return _Utils_Tuple2(
                    fn(x),
                    fn(y)
                  );
                },
                coords2
              );
            };
            switch (cmd.$) {
              case "Move":
                var m1 = cmd.a;
                var m2 = cmd.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$Move,
                  fn(m1),
                  fn(m2)
                );
              case "MoveTo":
                var m1 = cmd.a;
                var m2 = cmd.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$MoveTo,
                  fn(m1),
                  fn(m2)
                );
              case "Line":
                var m1 = cmd.a;
                var m2 = cmd.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$Line,
                  fn(m1),
                  fn(m2)
                );
              case "LineTo":
                var m1 = cmd.a;
                var m2 = cmd.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$LineTo,
                  fn(m1),
                  fn(m2)
                );
              case "Horizontal":
                var motion = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$Horizontal(
                  fn(motion)
                );
              case "HorizontalTo":
                var motion = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$HorizontalTo(
                  fn(motion)
                );
              case "Vertical":
                var motion = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$Vertical(
                  fn(motion)
                );
              case "VerticalTo":
                var motion = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$VerticalTo(
                  fn(motion)
                );
              case "Curve":
                var control1 = cmd.a.control1;
                var control2 = cmd.a.control2;
                var point = cmd.a.point;
                return $mdgriffith$elm_style_animation$Animation$Model$Curve(
                  {
                    control1: _Utils_Tuple2(
                      fn(control1.a),
                      fn(control1.b)
                    ),
                    control2: _Utils_Tuple2(
                      fn(control2.a),
                      fn(control2.b)
                    ),
                    point: _Utils_Tuple2(
                      fn(point.a),
                      fn(point.b)
                    )
                  }
                );
              case "CurveTo":
                var control1 = cmd.a.control1;
                var control2 = cmd.a.control2;
                var point = cmd.a.point;
                return $mdgriffith$elm_style_animation$Animation$Model$CurveTo(
                  {
                    control1: _Utils_Tuple2(
                      fn(control1.a),
                      fn(control1.b)
                    ),
                    control2: _Utils_Tuple2(
                      fn(control2.a),
                      fn(control2.b)
                    ),
                    point: _Utils_Tuple2(
                      fn(point.a),
                      fn(point.b)
                    )
                  }
                );
              case "Quadratic":
                var control = cmd.a.control;
                var point = cmd.a.point;
                return $mdgriffith$elm_style_animation$Animation$Model$Quadratic(
                  {
                    control: _Utils_Tuple2(
                      fn(control.a),
                      fn(control.b)
                    ),
                    point: _Utils_Tuple2(
                      fn(point.a),
                      fn(point.b)
                    )
                  }
                );
              case "QuadraticTo":
                var control = cmd.a.control;
                var point = cmd.a.point;
                return $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
                  {
                    control: _Utils_Tuple2(
                      fn(control.a),
                      fn(control.b)
                    ),
                    point: _Utils_Tuple2(
                      fn(point.a),
                      fn(point.b)
                    )
                  }
                );
              case "SmoothQuadratic":
                var coords = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic(
                  mapCoords(coords)
                );
              case "SmoothQuadraticTo":
                var coords = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo(
                  mapCoords(coords)
                );
              case "Smooth":
                var coords = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$Smooth(
                  mapCoords(coords)
                );
              case "SmoothTo":
                var coords = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$SmoothTo(
                  mapCoords(coords)
                );
              case "ClockwiseArc":
                var arc = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc(
                  function() {
                    var y = arc.y;
                    var x = arc.x;
                    var startAngle = arc.startAngle;
                    var radius = arc.radius;
                    var endAngle = arc.endAngle;
                    return _Utils_update(
                      arc,
                      {
                        endAngle: fn(endAngle),
                        radius: fn(radius),
                        startAngle: fn(startAngle),
                        x: fn(x),
                        y: fn(y)
                      }
                    );
                  }()
                );
              case "AntiClockwiseArc":
                var arc = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
                  function() {
                    var y = arc.y;
                    var x = arc.x;
                    var startAngle = arc.startAngle;
                    var radius = arc.radius;
                    var endAngle = arc.endAngle;
                    return _Utils_update(
                      arc,
                      {
                        endAngle: fn(endAngle),
                        radius: fn(radius),
                        startAngle: fn(startAngle),
                        x: fn(x),
                        y: fn(y)
                      }
                    );
                  }()
                );
              default:
                return $mdgriffith$elm_style_animation$Animation$Model$Close;
            }
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$mapToMotion = F2(
          function(fn, prop) {
            switch (prop.$) {
              case "ExactProperty":
                var name = prop.a;
                var value = prop.b;
                return A2($mdgriffith$elm_style_animation$Animation$Model$ExactProperty, name, value);
              case "ColorProperty":
                var name = prop.a;
                var m1 = prop.b;
                var m2 = prop.c;
                var m3 = prop.d;
                var m4 = prop.e;
                return A5(
                  $mdgriffith$elm_style_animation$Animation$Model$ColorProperty,
                  name,
                  fn(m1),
                  fn(m2),
                  fn(m3),
                  fn(m4)
                );
              case "ShadowProperty":
                var name = prop.a;
                var inset = prop.b;
                var shadow = prop.c;
                var size = shadow.size;
                var red = shadow.red;
                var offsetY = shadow.offsetY;
                var offsetX = shadow.offsetX;
                var green = shadow.green;
                var blur = shadow.blur;
                var blue = shadow.blue;
                var alpha = shadow.alpha;
                return A3(
                  $mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
                  name,
                  inset,
                  {
                    alpha: fn(alpha),
                    blue: fn(blue),
                    blur: fn(blur),
                    green: fn(green),
                    offsetX: fn(offsetX),
                    offsetY: fn(offsetY),
                    red: fn(red),
                    size: fn(size)
                  }
                );
              case "Property":
                var name = prop.a;
                var m1 = prop.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$Property,
                  name,
                  fn(m1)
                );
              case "Property2":
                var name = prop.a;
                var m1 = prop.b;
                var m2 = prop.c;
                return A3(
                  $mdgriffith$elm_style_animation$Animation$Model$Property2,
                  name,
                  fn(m1),
                  fn(m2)
                );
              case "Property3":
                var name = prop.a;
                var m1 = prop.b;
                var m2 = prop.c;
                var m3 = prop.d;
                return A4(
                  $mdgriffith$elm_style_animation$Animation$Model$Property3,
                  name,
                  fn(m1),
                  fn(m2),
                  fn(m3)
                );
              case "Property4":
                var name = prop.a;
                var m1 = prop.b;
                var m2 = prop.c;
                var m3 = prop.d;
                var m4 = prop.e;
                return A5(
                  $mdgriffith$elm_style_animation$Animation$Model$Property4,
                  name,
                  fn(m1),
                  fn(m2),
                  fn(m3),
                  fn(m4)
                );
              case "AngleProperty":
                var name = prop.a;
                var m1 = prop.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$AngleProperty,
                  name,
                  fn(m1)
                );
              case "Points":
                var ms = prop.a;
                return $mdgriffith$elm_style_animation$Animation$Model$Points(
                  A2(
                    $elm$core$List$map,
                    function(_v1) {
                      var x = _v1.a;
                      var y = _v1.b;
                      return _Utils_Tuple2(
                        fn(x),
                        fn(y)
                      );
                    },
                    ms
                  )
                );
              default:
                var cmds = prop.a;
                return $mdgriffith$elm_style_animation$Animation$Model$Path(
                  A2(
                    $elm$core$List$map,
                    $mdgriffith$elm_style_animation$Animation$Model$mapPathMotion(fn),
                    cmds
                  )
                );
            }
          }
        );
        var $elm$core$List$filter = F2(
          function(isGood, list) {
            return A3(
              $elm$core$List$foldr,
              F2(
                function(x, xs) {
                  return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
                }
              ),
              _List_Nil,
              list
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Render$dropWhile = F2(
          function(predicate, list) {
            dropWhile:
              while (true) {
                if (!list.b) {
                  return _List_Nil;
                } else {
                  var x = list.a;
                  var xs = list.b;
                  if (predicate(x)) {
                    var $temp$predicate = predicate, $temp$list = xs;
                    predicate = $temp$predicate;
                    list = $temp$list;
                    continue dropWhile;
                  } else {
                    return list;
                  }
                }
              }
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Render$takeWhile = function(predicate) {
          var takeWhileMemo = F2(
            function(memo, list) {
              takeWhileMemo:
                while (true) {
                  if (!list.b) {
                    return $elm$core$List$reverse(memo);
                  } else {
                    var x = list.a;
                    var xs = list.b;
                    if (predicate(x)) {
                      var $temp$memo = A2($elm$core$List$cons, x, memo), $temp$list = xs;
                      memo = $temp$memo;
                      list = $temp$list;
                      continue takeWhileMemo;
                    } else {
                      return $elm$core$List$reverse(memo);
                    }
                  }
                }
            }
          );
          return takeWhileMemo(_List_Nil);
        };
        var $mdgriffith$elm_style_animation$Animation$Render$span = F2(
          function(p, xs) {
            return _Utils_Tuple2(
              A2($mdgriffith$elm_style_animation$Animation$Render$takeWhile, p, xs),
              A2($mdgriffith$elm_style_animation$Animation$Render$dropWhile, p, xs)
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Render$groupWhile = F2(
          function(eq, xs_) {
            if (!xs_.b) {
              return _List_Nil;
            } else {
              var x = xs_.a;
              var xs = xs_.b;
              var _v1 = A2(
                $mdgriffith$elm_style_animation$Animation$Render$span,
                eq(x),
                xs
              );
              var ys = _v1.a;
              var zs = _v1.b;
              return A2(
                $elm$core$List$cons,
                A2($elm$core$List$cons, x, ys),
                A2($mdgriffith$elm_style_animation$Animation$Render$groupWhile, eq, zs)
              );
            }
          }
        );
        var $elm$core$List$head = function(list) {
          if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
          } else {
            return $elm$core$Maybe$Nothing;
          }
        };
        var $elm$core$List$any = F2(
          function(isOkay, list) {
            any:
              while (true) {
                if (!list.b) {
                  return false;
                } else {
                  var x = list.a;
                  var xs = list.b;
                  if (isOkay(x)) {
                    return true;
                  } else {
                    var $temp$isOkay = isOkay, $temp$list = xs;
                    isOkay = $temp$isOkay;
                    list = $temp$list;
                    continue any;
                  }
                }
              }
          }
        );
        var $elm$core$List$member = F2(
          function(x, xs) {
            return A2(
              $elm$core$List$any,
              function(a) {
                return _Utils_eq(a, x);
              },
              xs
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$propertyName = function(prop) {
          switch (prop.$) {
            case "ExactProperty":
              var name = prop.a;
              return name;
            case "ColorProperty":
              var name = prop.a;
              return name;
            case "ShadowProperty":
              var name = prop.a;
              return name;
            case "Property":
              var name = prop.a;
              return name;
            case "Property2":
              var name = prop.a;
              return name;
            case "Property3":
              var name = prop.a;
              return name;
            case "Property4":
              var name = prop.a;
              return name;
            case "AngleProperty":
              var name = prop.a;
              return name;
            case "Points":
              return "points";
            default:
              return "path";
          }
        };
        var $mdgriffith$elm_style_animation$Animation$Render$isTransformation = function(prop) {
          return A2(
            $elm$core$List$member,
            $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
            _List_fromArray(
              ["rotate", "rotateX", "rotateY", "rotateZ", "rotate3d", "translate", "translate3d", "scale", "scale3d"]
            )
          );
        };
        var $elm$core$List$sortBy = _List_sortBy;
        var $elm$core$List$sort = function(xs) {
          return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
        };
        var $mdgriffith$elm_style_animation$Animation$Render$warnForDoubleListedProperties = function(props) {
          var _v0 = A2(
            $elm$core$List$map,
            function(propGroup) {
              var _v1 = $elm$core$List$head(propGroup);
              if (_v1.$ === "Nothing") {
                return "";
              } else {
                var name = _v1.a;
                return $elm$core$List$length(propGroup) > 1 ? "" : "";
              }
            },
            A2(
              $mdgriffith$elm_style_animation$Animation$Render$groupWhile,
              $elm$core$Basics$eq,
              $elm$core$List$sort(
                A2(
                  $elm$core$List$map,
                  $mdgriffith$elm_style_animation$Animation$Model$propertyName,
                  A2(
                    $elm$core$List$filter,
                    function(prop) {
                      return !$mdgriffith$elm_style_animation$Animation$Render$isTransformation(prop);
                    },
                    props
                  )
                )
              )
            )
          );
          return props;
        };
        var $mdgriffith$elm_style_animation$Animation$styleWith = F2(
          function(interp, props) {
            return $mdgriffith$elm_style_animation$Animation$initialState(
              A2(
                $elm$core$List$map,
                $mdgriffith$elm_style_animation$Animation$Model$mapToMotion(
                  function(m) {
                    return _Utils_update(
                      m,
                      { interpolation: interp }
                    );
                  }
                ),
                $mdgriffith$elm_style_animation$Animation$Render$warnForDoubleListedProperties(props)
              )
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$initMotion = F2(
          function(position, unit) {
            return {
              interpolation: $mdgriffith$elm_style_animation$Animation$Model$Spring(
                { damping: 26, stiffness: 170 }
              ),
              interpolationOverride: $elm$core$Maybe$Nothing,
              position,
              target: position,
              unit,
              velocity: 0
            };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$length2 = F3(
          function(name, _v0, _v1) {
            var val = _v0.a;
            var len = _v0.b;
            var val2 = _v1.a;
            var len2 = _v1.b;
            return A3(
              $mdgriffith$elm_style_animation$Animation$Model$Property2,
              name,
              A2($mdgriffith$elm_style_animation$Animation$initMotion, val, len),
              A2($mdgriffith$elm_style_animation$Animation$initMotion, val2, len2)
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$lengthUnitName = function(unit) {
          switch (unit.$) {
            case "NoUnit":
              return "";
            case "Px":
              return "px";
            case "Percent":
              return "%";
            case "Rem":
              return "rem";
            case "Em":
              return "em";
            case "Ex":
              return "ex";
            case "Ch":
              return "ch";
            case "Vh":
              return "vh";
            case "Vw":
              return "vw";
            case "Vmin":
              return "vmin";
            case "Vmax":
              return "vmax";
            case "Mm":
              return "mm";
            case "Cm":
              return "cm";
            case "In":
              return "in";
            case "Pt":
              return "pt";
            default:
              return "pc";
          }
        };
        var $mdgriffith$elm_style_animation$Animation$translate = F2(
          function(_v0, _v1) {
            var valX = _v0.a;
            var len1 = _v0.b;
            var valY = _v1.a;
            var len2 = _v1.b;
            return A3(
              $mdgriffith$elm_style_animation$Animation$length2,
              "translate",
              _Utils_Tuple2(
                valX,
                $mdgriffith$elm_style_animation$Animation$lengthUnitName(len1)
              ),
              _Utils_Tuple2(
                valY,
                $mdgriffith$elm_style_animation$Animation$lengthUnitName(len2)
              )
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Spring$Presets$wobbly = { damping: 12, stiffness: 180 };
        var $author$project$Main$init = function(_v0) {
          var _v1 = A2(
            $phollyer$elm_phoenix_websocket$Phoenix$join,
            "chatbot:events",
            A2(
              $phollyer$elm_phoenix_websocket$Phoenix$setJoinConfig,
              _Utils_update(
                $phollyer$elm_phoenix_websocket$Phoenix$joinConfig,
                {
                  events: _List_fromArray(
                    ["marquee_updated", "tts_created", "spotify_music_changed"]
                  ),
                  topic: "chatbot:events"
                }
              ),
              $phollyer$elm_phoenix_websocket$Phoenix$init($author$project$Ports$Phoenix$config)
            )
          );
          var phxConfig = _v1.a;
          var cmd = _v1.b;
          var model = {
            currentSong: A3($author$project$Main$SongInfo, "", "", ""),
            currentSongStyle: A2(
              $mdgriffith$elm_style_animation$Animation$styleWith,
              $mdgriffith$elm_style_animation$Animation$spring($mdgriffith$elm_style_animation$Animation$Spring$Presets$wobbly),
              _List_fromArray(
                [
                  A2(
                    $mdgriffith$elm_style_animation$Animation$translate,
                    $mdgriffith$elm_style_animation$Animation$percent(115),
                    $mdgriffith$elm_style_animation$Animation$percent(0)
                  )
                ]
              )
            ),
            marqueeMessage: "",
            marqueeStyle: A2(
              $mdgriffith$elm_style_animation$Animation$styleWith,
              $mdgriffith$elm_style_animation$Animation$spring($mdgriffith$elm_style_animation$Animation$Spring$Presets$wobbly),
              _List_fromArray(
                [
                  A2(
                    $mdgriffith$elm_style_animation$Animation$translate,
                    $mdgriffith$elm_style_animation$Animation$percent(0),
                    $mdgriffith$elm_style_animation$Animation$percent(100)
                  )
                ]
              )
            ),
            phoenix: phxConfig
          };
          return _Utils_Tuple2(
            model,
            A2($elm$core$Platform$Cmd$map, $author$project$Main$PhoenixMsg, cmd)
          );
        };
        var $author$project$Main$Animate = function(a) {
          return { $: "Animate", a };
        };
        var $author$project$Main$Recv = function(a) {
          return { $: "Recv", a };
        };
        var $elm$core$Platform$Sub$batch = _Platform_batch;
        var $author$project$Main$messageReceiver = _Platform_incomingPort("messageReceiver", $elm$json$Json$Decode$string);
        var $mdgriffith$elm_style_animation$Animation$Model$Tick = function(a) {
          return { $: "Tick", a };
        };
        var $mdgriffith$elm_style_animation$Animation$isRunning = function(_v0) {
          var model = _v0.a;
          return model.running;
        };
        var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
        var $elm$browser$Browser$AnimationManager$Time = function(a) {
          return { $: "Time", a };
        };
        var $elm$browser$Browser$AnimationManager$State = F3(
          function(subs, request, oldTime) {
            return { oldTime, request, subs };
          }
        );
        var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
          A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0)
        );
        var $elm$core$Process$kill = _Scheduler_kill;
        var $elm$browser$Browser$AnimationManager$now = _Browser_now(_Utils_Tuple0);
        var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(_Utils_Tuple0);
        var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
        var $elm$core$Process$spawn = _Scheduler_spawn;
        var $elm$browser$Browser$AnimationManager$onEffects = F3(
          function(router, subs, _v0) {
            var request = _v0.request;
            var oldTime = _v0.oldTime;
            var _v1 = _Utils_Tuple2(request, subs);
            if (_v1.a.$ === "Nothing") {
              if (!_v1.b.b) {
                var _v2 = _v1.a;
                return $elm$browser$Browser$AnimationManager$init;
              } else {
                var _v4 = _v1.a;
                return A2(
                  $elm$core$Task$andThen,
                  function(pid2) {
                    return A2(
                      $elm$core$Task$andThen,
                      function(time) {
                        return $elm$core$Task$succeed(
                          A3(
                            $elm$browser$Browser$AnimationManager$State,
                            subs,
                            $elm$core$Maybe$Just(pid2),
                            time
                          )
                        );
                      },
                      $elm$browser$Browser$AnimationManager$now
                    );
                  },
                  $elm$core$Process$spawn(
                    A2(
                      $elm$core$Task$andThen,
                      $elm$core$Platform$sendToSelf(router),
                      $elm$browser$Browser$AnimationManager$rAF
                    )
                  )
                );
              }
            } else {
              if (!_v1.b.b) {
                var pid = _v1.a.a;
                return A2(
                  $elm$core$Task$andThen,
                  function(_v3) {
                    return $elm$browser$Browser$AnimationManager$init;
                  },
                  $elm$core$Process$kill(pid)
                );
              } else {
                return $elm$core$Task$succeed(
                  A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime)
                );
              }
            }
          }
        );
        var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
          function(router, newTime, _v0) {
            var subs = _v0.subs;
            var oldTime = _v0.oldTime;
            var send = function(sub) {
              if (sub.$ === "Time") {
                var tagger = sub.a;
                return A2(
                  $elm$core$Platform$sendToApp,
                  router,
                  tagger(
                    $elm$time$Time$millisToPosix(newTime)
                  )
                );
              } else {
                var tagger = sub.a;
                return A2(
                  $elm$core$Platform$sendToApp,
                  router,
                  tagger(newTime - oldTime)
                );
              }
            };
            return A2(
              $elm$core$Task$andThen,
              function(pid) {
                return A2(
                  $elm$core$Task$andThen,
                  function(_v1) {
                    return $elm$core$Task$succeed(
                      A3(
                        $elm$browser$Browser$AnimationManager$State,
                        subs,
                        $elm$core$Maybe$Just(pid),
                        newTime
                      )
                    );
                  },
                  $elm$core$Task$sequence(
                    A2($elm$core$List$map, send, subs)
                  )
                );
              },
              $elm$core$Process$spawn(
                A2(
                  $elm$core$Task$andThen,
                  $elm$core$Platform$sendToSelf(router),
                  $elm$browser$Browser$AnimationManager$rAF
                )
              )
            );
          }
        );
        var $elm$browser$Browser$AnimationManager$Delta = function(a) {
          return { $: "Delta", a };
        };
        var $elm$browser$Browser$AnimationManager$subMap = F2(
          function(func, sub) {
            if (sub.$ === "Time") {
              var tagger = sub.a;
              return $elm$browser$Browser$AnimationManager$Time(
                A2($elm$core$Basics$composeL, func, tagger)
              );
            } else {
              var tagger = sub.a;
              return $elm$browser$Browser$AnimationManager$Delta(
                A2($elm$core$Basics$composeL, func, tagger)
              );
            }
          }
        );
        _Platform_effectManagers["Browser.AnimationManager"] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
        var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf("Browser.AnimationManager");
        var $elm$browser$Browser$AnimationManager$onAnimationFrame = function(tagger) {
          return $elm$browser$Browser$AnimationManager$subscription(
            $elm$browser$Browser$AnimationManager$Time(tagger)
          );
        };
        var $elm$browser$Browser$Events$onAnimationFrame = $elm$browser$Browser$AnimationManager$onAnimationFrame;
        var $mdgriffith$elm_style_animation$Animation$subscription = F2(
          function(msg, states) {
            return A2($elm$core$List$any, $mdgriffith$elm_style_animation$Animation$isRunning, states) ? A2(
              $elm$core$Platform$Sub$map,
              msg,
              $elm$browser$Browser$Events$onAnimationFrame($mdgriffith$elm_style_animation$Animation$Model$Tick)
            ) : $elm$core$Platform$Sub$none;
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$ReceivedChannelMsg = function(a) {
          return { $: "ReceivedChannelMsg", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$ReceivedPresenceMsg = function(a) {
          return { $: "ReceivedPresenceMsg", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$ReceivedSocketMsg = function(a) {
          return { $: "ReceivedSocketMsg", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$TimeoutTick = function(a) {
          return { $: "TimeoutTick", a };
        };
        var $elm$time$Time$Every = F2(
          function(a, b) {
            return { $: "Every", a, b };
          }
        );
        var $elm$time$Time$State = F2(
          function(taggers, processes) {
            return { processes, taggers };
          }
        );
        var $elm$time$Time$init = $elm$core$Task$succeed(
          A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty)
        );
        var $elm$time$Time$addMySub = F2(
          function(_v0, state) {
            var interval = _v0.a;
            var tagger = _v0.b;
            var _v1 = A2($elm$core$Dict$get, interval, state);
            if (_v1.$ === "Nothing") {
              return A3(
                $elm$core$Dict$insert,
                interval,
                _List_fromArray(
                  [tagger]
                ),
                state
              );
            } else {
              var taggers = _v1.a;
              return A3(
                $elm$core$Dict$insert,
                interval,
                A2($elm$core$List$cons, tagger, taggers),
                state
              );
            }
          }
        );
        var $elm$time$Time$Name = function(a) {
          return { $: "Name", a };
        };
        var $elm$time$Time$Offset = function(a) {
          return { $: "Offset", a };
        };
        var $elm$time$Time$Zone = F2(
          function(a, b) {
            return { $: "Zone", a, b };
          }
        );
        var $elm$time$Time$customZone = $elm$time$Time$Zone;
        var $elm$time$Time$setInterval = _Time_setInterval;
        var $elm$time$Time$spawnHelp = F3(
          function(router, intervals, processes) {
            if (!intervals.b) {
              return $elm$core$Task$succeed(processes);
            } else {
              var interval = intervals.a;
              var rest = intervals.b;
              var spawnTimer = $elm$core$Process$spawn(
                A2(
                  $elm$time$Time$setInterval,
                  interval,
                  A2($elm$core$Platform$sendToSelf, router, interval)
                )
              );
              var spawnRest = function(id) {
                return A3(
                  $elm$time$Time$spawnHelp,
                  router,
                  rest,
                  A3($elm$core$Dict$insert, interval, id, processes)
                );
              };
              return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
            }
          }
        );
        var $elm$time$Time$onEffects = F3(
          function(router, subs, _v0) {
            var processes = _v0.processes;
            var rightStep = F3(
              function(_v6, id, _v7) {
                var spawns = _v7.a;
                var existing = _v7.b;
                var kills = _v7.c;
                return _Utils_Tuple3(
                  spawns,
                  existing,
                  A2(
                    $elm$core$Task$andThen,
                    function(_v5) {
                      return kills;
                    },
                    $elm$core$Process$kill(id)
                  )
                );
              }
            );
            var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
            var leftStep = F3(
              function(interval, taggers, _v4) {
                var spawns = _v4.a;
                var existing = _v4.b;
                var kills = _v4.c;
                return _Utils_Tuple3(
                  A2($elm$core$List$cons, interval, spawns),
                  existing,
                  kills
                );
              }
            );
            var bothStep = F4(
              function(interval, taggers, id, _v3) {
                var spawns = _v3.a;
                var existing = _v3.b;
                var kills = _v3.c;
                return _Utils_Tuple3(
                  spawns,
                  A3($elm$core$Dict$insert, interval, id, existing),
                  kills
                );
              }
            );
            var _v1 = A6(
              $elm$core$Dict$merge,
              leftStep,
              bothStep,
              rightStep,
              newTaggers,
              processes,
              _Utils_Tuple3(
                _List_Nil,
                $elm$core$Dict$empty,
                $elm$core$Task$succeed(_Utils_Tuple0)
              )
            );
            var spawnList = _v1.a;
            var existingDict = _v1.b;
            var killTask = _v1.c;
            return A2(
              $elm$core$Task$andThen,
              function(newProcesses) {
                return $elm$core$Task$succeed(
                  A2($elm$time$Time$State, newTaggers, newProcesses)
                );
              },
              A2(
                $elm$core$Task$andThen,
                function(_v2) {
                  return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
                },
                killTask
              )
            );
          }
        );
        var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
        var $elm$time$Time$onSelfMsg = F3(
          function(router, interval, state) {
            var _v0 = A2($elm$core$Dict$get, interval, state.taggers);
            if (_v0.$ === "Nothing") {
              return $elm$core$Task$succeed(state);
            } else {
              var taggers = _v0.a;
              var tellTaggers = function(time) {
                return $elm$core$Task$sequence(
                  A2(
                    $elm$core$List$map,
                    function(tagger) {
                      return A2(
                        $elm$core$Platform$sendToApp,
                        router,
                        tagger(time)
                      );
                    },
                    taggers
                  )
                );
              };
              return A2(
                $elm$core$Task$andThen,
                function(_v1) {
                  return $elm$core$Task$succeed(state);
                },
                A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now)
              );
            }
          }
        );
        var $elm$time$Time$subMap = F2(
          function(f, _v0) {
            var interval = _v0.a;
            var tagger = _v0.b;
            return A2(
              $elm$time$Time$Every,
              interval,
              A2($elm$core$Basics$composeL, f, tagger)
            );
          }
        );
        _Platform_effectManagers["Time"] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
        var $elm$time$Time$subscription = _Platform_leaf("Time");
        var $elm$time$Time$every = F2(
          function(interval, tagger) {
            return $elm$time$Time$subscription(
              A2($elm$time$Time$Every, interval, tagger)
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$Closed = function(a) {
          return { $: "Closed", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$Error = function(a) {
          return { $: "Error", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$InternalError = function(a) {
          return { $: "InternalError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$InvalidMessage = F3(
          function(a, b, c) {
            return { $: "InvalidMessage", a, b, c };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$JoinError = F2(
          function(a, b) {
            return { $: "JoinError", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$JoinOk = F2(
          function(a, b) {
            return { $: "JoinOk", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$JoinTimeout = F2(
          function(a, b) {
            return { $: "JoinTimeout", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$LeaveOk = function(a) {
          return { $: "LeaveOk", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$Message = F3(
          function(a, b, c) {
            return { $: "Message", a, b, c };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$PushError = F4(
          function(a, b, c, d) {
            return { $: "PushError", a, b, c, d };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$PushOk = F4(
          function(a, b, c, d) {
            return { $: "PushOk", a, b, c, d };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$PushTimeout = F4(
          function(a, b, c, d) {
            return { $: "PushTimeout", a, b, c, d };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$DecoderError = function(a) {
          return { $: "DecoderError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$EventIn = F2(
          function(event, payload) {
            return { event, payload };
          }
        );
        var $elm_community$json_extra$Json$Decode$Extra$andMap = $elm$json$Json$Decode$map2($elm$core$Basics$apR);
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$eventDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "payload", $elm$json$Json$Decode$value),
          A2(
            $elm_community$json_extra$Json$Decode$Extra$andMap,
            A2($elm$json$Json$Decode$field, "event", $elm$json$Json$Decode$string),
            $elm$json$Json$Decode$succeed($phollyer$elm_phoenix_websocket$Phoenix$Channel$EventIn)
          )
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$decodeEvent = F3(
          function(topic, eventMsg, response) {
            var _v0 = A2($elm$json$Json$Decode$decodeValue, $phollyer$elm_phoenix_websocket$Phoenix$Channel$eventDecoder, response);
            if (_v0.$ === "Ok") {
              var event = _v0.a.event;
              var payload = _v0.a.payload;
              return A3(eventMsg, topic, event, payload);
            } else {
              var error = _v0.a;
              return $phollyer$elm_phoenix_websocket$Phoenix$Channel$InternalError(
                $phollyer$elm_phoenix_websocket$Phoenix$Channel$DecoderError(
                  $elm$json$Json$Decode$errorToString(error)
                )
              );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$PushResponse = F3(
          function(event, payload, ref) {
            return { event, payload, ref };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$pushDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "ref", $elm$json$Json$Decode$string),
          A2(
            $elm_community$json_extra$Json$Decode$Extra$andMap,
            A2($elm$json$Json$Decode$field, "payload", $elm$json$Json$Decode$value),
            A2(
              $elm_community$json_extra$Json$Decode$Extra$andMap,
              A2($elm$json$Json$Decode$field, "event", $elm$json$Json$Decode$string),
              $elm$json$Json$Decode$succeed($phollyer$elm_phoenix_websocket$Phoenix$Channel$PushResponse)
            )
          )
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$decodePushResponse = F3(
          function(topic, pushMsg, response) {
            var _v0 = A2($elm$json$Json$Decode$decodeValue, $phollyer$elm_phoenix_websocket$Phoenix$Channel$pushDecoder, response);
            if (_v0.$ === "Ok") {
              var event = _v0.a.event;
              var payload = _v0.a.payload;
              var ref = _v0.a.ref;
              return A4(pushMsg, topic, event, payload, ref);
            } else {
              var error = _v0.a;
              return $phollyer$elm_phoenix_websocket$Phoenix$Channel$InternalError(
                $phollyer$elm_phoenix_websocket$Phoenix$Channel$DecoderError(
                  $elm$json$Json$Decode$errorToString(error)
                )
              );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$map = F2(
          function(toMsg, _v0) {
            var topic = _v0.topic;
            var msg = _v0.msg;
            var payload = _v0.payload;
            switch (msg) {
              case "JoinOk":
                return toMsg(
                  A2($phollyer$elm_phoenix_websocket$Phoenix$Channel$JoinOk, topic, payload)
                );
              case "JoinError":
                return toMsg(
                  A2($phollyer$elm_phoenix_websocket$Phoenix$Channel$JoinError, topic, payload)
                );
              case "JoinTimeout":
                return toMsg(
                  A2($phollyer$elm_phoenix_websocket$Phoenix$Channel$JoinTimeout, topic, payload)
                );
              case "PushOk":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Channel$decodePushResponse, topic, $phollyer$elm_phoenix_websocket$Phoenix$Channel$PushOk, payload)
                );
              case "PushError":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Channel$decodePushResponse, topic, $phollyer$elm_phoenix_websocket$Phoenix$Channel$PushError, payload)
                );
              case "PushTimeout":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Channel$decodePushResponse, topic, $phollyer$elm_phoenix_websocket$Phoenix$Channel$PushTimeout, payload)
                );
              case "Message":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Channel$decodeEvent, topic, $phollyer$elm_phoenix_websocket$Phoenix$Channel$Message, payload)
                );
              case "Error":
                return toMsg(
                  $phollyer$elm_phoenix_websocket$Phoenix$Channel$Error(topic)
                );
              case "LeaveOk":
                return toMsg(
                  $phollyer$elm_phoenix_websocket$Phoenix$Channel$LeaveOk(topic)
                );
              case "Closed":
                return toMsg(
                  $phollyer$elm_phoenix_websocket$Phoenix$Channel$Closed(topic)
                );
              default:
                return toMsg(
                  $phollyer$elm_phoenix_websocket$Phoenix$Channel$InternalError(
                    A3($phollyer$elm_phoenix_websocket$Phoenix$Channel$InvalidMessage, topic, msg, payload)
                  )
                );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$subscriptions = F2(
          function(toMsg, portIn) {
            return portIn(
              $phollyer$elm_phoenix_websocket$Phoenix$Channel$map(toMsg)
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$Diff = F2(
          function(a, b) {
            return { $: "Diff", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$InternalError = function(a) {
          return { $: "InternalError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$InvalidMessage = F2(
          function(a, b) {
            return { $: "InvalidMessage", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$Join = F2(
          function(a, b) {
            return { $: "Join", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$Leave = F2(
          function(a, b) {
            return { $: "Leave", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$State = F2(
          function(a, b) {
            return { $: "State", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$DecoderError = function(a) {
          return { $: "DecoderError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$decodePresence = F4(
          function(topic, presenceMsg, decoder, payload) {
            var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, payload);
            if (_v0.$ === "Ok") {
              var presence = _v0.a;
              return A2(presenceMsg, topic, presence);
            } else {
              var error = _v0.a;
              return $phollyer$elm_phoenix_websocket$Phoenix$Presence$InternalError(
                $phollyer$elm_phoenix_websocket$Phoenix$Presence$DecoderError(
                  $elm$json$Json$Decode$errorToString(error)
                )
              );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$PresenceDiff = F2(
          function(joins, leaves) {
            return { joins, leaves };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$Presence = F4(
          function(id, metas, user, presence) {
            return { id, metas, presence, user };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$presenceDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "presence", $elm$json$Json$Decode$value),
          A2(
            $elm_community$json_extra$Json$Decode$Extra$andMap,
            A2($elm$json$Json$Decode$field, "user", $elm$json$Json$Decode$value),
            A2(
              $elm_community$json_extra$Json$Decode$Extra$andMap,
              A2(
                $elm$json$Json$Decode$field,
                "metas",
                $elm$json$Json$Decode$list($elm$json$Json$Decode$value)
              ),
              A2(
                $elm_community$json_extra$Json$Decode$Extra$andMap,
                A2($elm$json$Json$Decode$field, "id", $elm$json$Json$Decode$string),
                $elm$json$Json$Decode$succeed($phollyer$elm_phoenix_websocket$Phoenix$Presence$Presence)
              )
            )
          )
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$listDecoder = $elm$json$Json$Decode$list($phollyer$elm_phoenix_websocket$Phoenix$Presence$presenceDecoder);
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$diffDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "leaves", $phollyer$elm_phoenix_websocket$Phoenix$Presence$listDecoder),
          A2(
            $elm_community$json_extra$Json$Decode$Extra$andMap,
            A2($elm$json$Json$Decode$field, "joins", $phollyer$elm_phoenix_websocket$Phoenix$Presence$listDecoder),
            $elm$json$Json$Decode$succeed($phollyer$elm_phoenix_websocket$Phoenix$Presence$PresenceDiff)
          )
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$stateDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "list", $phollyer$elm_phoenix_websocket$Phoenix$Presence$listDecoder),
          $elm$json$Json$Decode$succeed($elm$core$Basics$identity)
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$map = F2(
          function(toMsg, _v0) {
            var topic = _v0.topic;
            var msg = _v0.msg;
            var payload = _v0.payload;
            switch (msg) {
              case "Join":
                return toMsg(
                  A4($phollyer$elm_phoenix_websocket$Phoenix$Presence$decodePresence, topic, $phollyer$elm_phoenix_websocket$Phoenix$Presence$Join, $phollyer$elm_phoenix_websocket$Phoenix$Presence$presenceDecoder, payload)
                );
              case "Leave":
                return toMsg(
                  A4($phollyer$elm_phoenix_websocket$Phoenix$Presence$decodePresence, topic, $phollyer$elm_phoenix_websocket$Phoenix$Presence$Leave, $phollyer$elm_phoenix_websocket$Phoenix$Presence$presenceDecoder, payload)
                );
              case "State":
                return toMsg(
                  A4($phollyer$elm_phoenix_websocket$Phoenix$Presence$decodePresence, topic, $phollyer$elm_phoenix_websocket$Phoenix$Presence$State, $phollyer$elm_phoenix_websocket$Phoenix$Presence$stateDecoder, payload)
                );
              case "Diff":
                return toMsg(
                  A4($phollyer$elm_phoenix_websocket$Phoenix$Presence$decodePresence, topic, $phollyer$elm_phoenix_websocket$Phoenix$Presence$Diff, $phollyer$elm_phoenix_websocket$Phoenix$Presence$diffDecoder, payload)
                );
              default:
                return toMsg(
                  $phollyer$elm_phoenix_websocket$Phoenix$Presence$InternalError(
                    A2($phollyer$elm_phoenix_websocket$Phoenix$Presence$InvalidMessage, topic, msg)
                  )
                );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Presence$subscriptions = F2(
          function(msg, portIn) {
            return portIn(
              $phollyer$elm_phoenix_websocket$Phoenix$Presence$map(msg)
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$All = function(a) {
          return { $: "All", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Channel = function(a) {
          return { $: "Channel", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Connecting = { $: "Connecting" };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$ConnectionState = function(a) {
          return { $: "ConnectionState", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Disconnecting = { $: "Disconnecting" };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$EndPointURL = function(a) {
          return { $: "EndPointURL", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Heartbeat = function(a) {
          return { $: "Heartbeat", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$InternalError = function(a) {
          return { $: "InternalError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$InvalidMessage = function(a) {
          return { $: "InvalidMessage", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$IsConnected = function(a) {
          return { $: "IsConnected", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$MakeRef = function(a) {
          return { $: "MakeRef", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Opened = { $: "Opened" };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Presence = function(a) {
          return { $: "Presence", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Protocol = function(a) {
          return { $: "Protocol", a };
        };
        var $elm$json$Json$Decode$bool = _Json_decodeBool;
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$ChannelMessage = F5(
          function(topic, event, payload, joinRef, ref) {
            return { event, joinRef, payload, ref, topic };
          }
        );
        var $elm$json$Json$Decode$oneOf = _Json_oneOf;
        var $elm$json$Json$Decode$maybe = function(decoder) {
          return $elm$json$Json$Decode$oneOf(
            _List_fromArray(
              [
                A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
                $elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
              ]
            )
          );
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$channelDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          $elm$json$Json$Decode$maybe(
            A2($elm$json$Json$Decode$field, "ref", $elm$json$Json$Decode$string)
          ),
          A2(
            $elm_community$json_extra$Json$Decode$Extra$andMap,
            $elm$json$Json$Decode$maybe(
              A2($elm$json$Json$Decode$field, "join_ref", $elm$json$Json$Decode$string)
            ),
            A2(
              $elm_community$json_extra$Json$Decode$Extra$andMap,
              A2($elm$json$Json$Decode$field, "payload", $elm$json$Json$Decode$value),
              A2(
                $elm_community$json_extra$Json$Decode$Extra$andMap,
                A2($elm$json$Json$Decode$field, "event", $elm$json$Json$Decode$string),
                A2(
                  $elm_community$json_extra$Json$Decode$Extra$andMap,
                  A2($elm$json$Json$Decode$field, "topic", $elm$json$Json$Decode$string),
                  $elm$json$Json$Decode$succeed($phollyer$elm_phoenix_websocket$Phoenix$Socket$ChannelMessage)
                )
              )
            )
          )
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Closed = function(a) {
          return { $: "Closed", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$DecoderError = function(a) {
          return { $: "DecoderError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$closedDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "isTrusted", $elm$json$Json$Decode$bool),
          A2(
            $elm_community$json_extra$Json$Decode$Extra$andMap,
            A2($elm$json$Json$Decode$field, "type", $elm$json$Json$Decode$string),
            A2(
              $elm_community$json_extra$Json$Decode$Extra$andMap,
              A2($elm$json$Json$Decode$field, "wasClean", $elm$json$Json$Decode$bool),
              A2(
                $elm_community$json_extra$Json$Decode$Extra$andMap,
                A2($elm$json$Json$Decode$field, "code", $elm$json$Json$Decode$int),
                A2(
                  $elm_community$json_extra$Json$Decode$Extra$andMap,
                  A2(
                    $elm$json$Json$Decode$andThen,
                    function(reason) {
                      if (reason.$ === "Just" && reason.a === "") {
                        return $elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing);
                      } else {
                        return $elm$json$Json$Decode$succeed(reason);
                      }
                    },
                    $elm$json$Json$Decode$maybe(
                      A2($elm$json$Json$Decode$field, "reason", $elm$json$Json$Decode$string)
                    )
                  ),
                  $elm$json$Json$Decode$succeed($phollyer$elm_phoenix_websocket$Phoenix$Socket$ClosedInfo)
                )
              )
            )
          )
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeClosed = function(payload) {
          var _v0 = A2($elm$json$Json$Decode$decodeValue, $phollyer$elm_phoenix_websocket$Phoenix$Socket$closedDecoder, payload);
          if (_v0.$ === "Ok") {
            var closed = _v0.a;
            return $phollyer$elm_phoenix_websocket$Phoenix$Socket$Closed(closed);
          } else {
            var error = _v0.a;
            return $phollyer$elm_phoenix_websocket$Phoenix$Socket$InternalError(
              $phollyer$elm_phoenix_websocket$Phoenix$Socket$DecoderError(
                $elm$json$Json$Decode$errorToString(error)
              )
            );
          }
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Error = function(a) {
          return { $: "Error", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$errorDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "reason", $elm$json$Json$Decode$string),
          $elm$json$Json$Decode$succeed($elm$core$Basics$identity)
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeError = function(payload) {
          var _v0 = A2($elm$json$Json$Decode$decodeValue, $phollyer$elm_phoenix_websocket$Phoenix$Socket$errorDecoder, payload);
          if (_v0.$ === "Ok") {
            var reason = _v0.a;
            return $phollyer$elm_phoenix_websocket$Phoenix$Socket$Error(reason);
          } else {
            var error = _v0.a;
            return $phollyer$elm_phoenix_websocket$Phoenix$Socket$InternalError(
              $phollyer$elm_phoenix_websocket$Phoenix$Socket$DecoderError(
                $elm$json$Json$Decode$errorToString(error)
              )
            );
          }
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$Info = function(a) {
          return { $: "Info", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeInfo = F3(
          function(toInfo, decoder, payload) {
            var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, payload);
            if (_v0.$ === "Ok") {
              var val = _v0.a;
              return $phollyer$elm_phoenix_websocket$Phoenix$Socket$Info(
                toInfo(val)
              );
            } else {
              var error = _v0.a;
              return $phollyer$elm_phoenix_websocket$Phoenix$Socket$InternalError(
                $phollyer$elm_phoenix_websocket$Phoenix$Socket$DecoderError(
                  $elm$json$Json$Decode$errorToString(error)
                )
              );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeMessage = F3(
          function(toMsg, decoder, payload) {
            var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, payload);
            if (_v0.$ === "Ok") {
              var message = _v0.a;
              return toMsg(message);
            } else {
              var error = _v0.a;
              return $phollyer$elm_phoenix_websocket$Phoenix$Socket$InternalError(
                $phollyer$elm_phoenix_websocket$Phoenix$Socket$DecoderError(
                  $elm$json$Json$Decode$errorToString(error)
                )
              );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$HeartbeatMessage = F4(
          function(topic, event, payload, ref) {
            return { event, payload, ref, topic };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$heartbeatDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "ref", $elm$json$Json$Decode$string),
          A2(
            $elm_community$json_extra$Json$Decode$Extra$andMap,
            A2($elm$json$Json$Decode$field, "payload", $elm$json$Json$Decode$value),
            A2(
              $elm_community$json_extra$Json$Decode$Extra$andMap,
              A2($elm$json$Json$Decode$field, "event", $elm$json$Json$Decode$string),
              A2(
                $elm_community$json_extra$Json$Decode$Extra$andMap,
                A2($elm$json$Json$Decode$field, "topic", $elm$json$Json$Decode$string),
                $elm$json$Json$Decode$succeed($phollyer$elm_phoenix_websocket$Phoenix$Socket$HeartbeatMessage)
              )
            )
          )
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$AllInfo = F5(
          function(connectionState, endPointURL, isConnected, makeRef, protocol) {
            return { connectionState, endPointURL, isConnected, makeRef, protocol };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$infoDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "protocol", $elm$json$Json$Decode$string),
          A2(
            $elm_community$json_extra$Json$Decode$Extra$andMap,
            A2($elm$json$Json$Decode$field, "nextMessageRef", $elm$json$Json$Decode$string),
            A2(
              $elm_community$json_extra$Json$Decode$Extra$andMap,
              A2($elm$json$Json$Decode$field, "isConnected", $elm$json$Json$Decode$bool),
              A2(
                $elm_community$json_extra$Json$Decode$Extra$andMap,
                A2($elm$json$Json$Decode$field, "endPointURL", $elm$json$Json$Decode$string),
                A2(
                  $elm_community$json_extra$Json$Decode$Extra$andMap,
                  A2($elm$json$Json$Decode$field, "connectionState", $elm$json$Json$Decode$string),
                  $elm$json$Json$Decode$succeed($phollyer$elm_phoenix_websocket$Phoenix$Socket$AllInfo)
                )
              )
            )
          )
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$PresenceMessage = F3(
          function(topic, event, payload) {
            return { event, payload, topic };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$presenceDecoder = A2(
          $elm_community$json_extra$Json$Decode$Extra$andMap,
          A2($elm$json$Json$Decode$field, "payload", $elm$json$Json$Decode$value),
          A2(
            $elm_community$json_extra$Json$Decode$Extra$andMap,
            A2($elm$json$Json$Decode$field, "event", $elm$json$Json$Decode$string),
            A2(
              $elm_community$json_extra$Json$Decode$Extra$andMap,
              A2($elm$json$Json$Decode$field, "topic", $elm$json$Json$Decode$string),
              $elm$json$Json$Decode$succeed($phollyer$elm_phoenix_websocket$Phoenix$Socket$PresenceMessage)
            )
          )
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$map = F2(
          function(toMsg, _v0) {
            var msg = _v0.msg;
            var payload = _v0.payload;
            switch (msg) {
              case "Opened":
                return toMsg($phollyer$elm_phoenix_websocket$Phoenix$Socket$Opened);
              case "Connecting":
                return toMsg($phollyer$elm_phoenix_websocket$Phoenix$Socket$Connecting);
              case "Disconnecting":
                return toMsg($phollyer$elm_phoenix_websocket$Phoenix$Socket$Disconnecting);
              case "Error":
                return toMsg(
                  $phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeError(payload)
                );
              case "Closed":
                return toMsg(
                  $phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeClosed(payload)
                );
              case "Channel":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeMessage, $phollyer$elm_phoenix_websocket$Phoenix$Socket$Channel, $phollyer$elm_phoenix_websocket$Phoenix$Socket$channelDecoder, payload)
                );
              case "Presence":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeMessage, $phollyer$elm_phoenix_websocket$Phoenix$Socket$Presence, $phollyer$elm_phoenix_websocket$Phoenix$Socket$presenceDecoder, payload)
                );
              case "Heartbeat":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeMessage, $phollyer$elm_phoenix_websocket$Phoenix$Socket$Heartbeat, $phollyer$elm_phoenix_websocket$Phoenix$Socket$heartbeatDecoder, payload)
                );
              case "ConnectionState":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeInfo, $phollyer$elm_phoenix_websocket$Phoenix$Socket$ConnectionState, $elm$json$Json$Decode$string, payload)
                );
              case "EndPointURL":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeInfo, $phollyer$elm_phoenix_websocket$Phoenix$Socket$EndPointURL, $elm$json$Json$Decode$string, payload)
                );
              case "Info":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeInfo, $phollyer$elm_phoenix_websocket$Phoenix$Socket$All, $phollyer$elm_phoenix_websocket$Phoenix$Socket$infoDecoder, payload)
                );
              case "IsConnected":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeInfo, $phollyer$elm_phoenix_websocket$Phoenix$Socket$IsConnected, $elm$json$Json$Decode$bool, payload)
                );
              case "MakeRef":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeInfo, $phollyer$elm_phoenix_websocket$Phoenix$Socket$MakeRef, $elm$json$Json$Decode$string, payload)
                );
              case "Protocol":
                return toMsg(
                  A3($phollyer$elm_phoenix_websocket$Phoenix$Socket$decodeInfo, $phollyer$elm_phoenix_websocket$Phoenix$Socket$Protocol, $elm$json$Json$Decode$string, payload)
                );
              default:
                return toMsg(
                  $phollyer$elm_phoenix_websocket$Phoenix$Socket$InternalError(
                    $phollyer$elm_phoenix_websocket$Phoenix$Socket$InvalidMessage(msg)
                  )
                );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Socket$subscriptions = F2(
          function(msg, portIn) {
            return portIn(
              $phollyer$elm_phoenix_websocket$Phoenix$Socket$map(msg)
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Config$isEmpty = $elm$core$Dict$isEmpty;
        var $phollyer$elm_phoenix_websocket$Internal$Config$exists = A2($elm$core$Basics$composeR, $phollyer$elm_phoenix_websocket$Internal$Config$isEmpty, $elm$core$Basics$not);
        var $phollyer$elm_phoenix_websocket$Internal$Push$timeoutsExist = function(_v0) {
          var timeouts = _v0.a.timeouts;
          return $phollyer$elm_phoenix_websocket$Internal$Config$exists(timeouts);
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$subscriptions = function(_v0) {
          var model = _v0.a;
          return $elm$core$Platform$Sub$batch(
            _List_fromArray(
              [
                A2($phollyer$elm_phoenix_websocket$Phoenix$Channel$subscriptions, $phollyer$elm_phoenix_websocket$Phoenix$ReceivedChannelMsg, model.portConfig.channelReceiver),
                A2($phollyer$elm_phoenix_websocket$Phoenix$Socket$subscriptions, $phollyer$elm_phoenix_websocket$Phoenix$ReceivedSocketMsg, model.portConfig.socketReceiver),
                A2($phollyer$elm_phoenix_websocket$Phoenix$Presence$subscriptions, $phollyer$elm_phoenix_websocket$Phoenix$ReceivedPresenceMsg, model.portConfig.presenceReceiver),
                $phollyer$elm_phoenix_websocket$Internal$Push$timeoutsExist(model.push) ? A2($elm$time$Time$every, 1e3, $phollyer$elm_phoenix_websocket$Phoenix$TimeoutTick) : $elm$core$Platform$Sub$none
              ]
            )
          );
        };
        var $author$project$Main$subscriptions = function(model) {
          return $elm$core$Platform$Sub$batch(
            _List_fromArray(
              [
                $author$project$Main$messageReceiver($author$project$Main$Recv),
                A2(
                  $mdgriffith$elm_style_animation$Animation$subscription,
                  $author$project$Main$Animate,
                  _List_fromArray(
                    [model.currentSongStyle, model.marqueeStyle]
                  )
                ),
                A2(
                  $elm$core$Platform$Sub$map,
                  $author$project$Main$PhoenixMsg,
                  $phollyer$elm_phoenix_websocket$Phoenix$subscriptions(model.phoenix)
                )
              ]
            )
          );
        };
        var $elm$time$Time$posixToMillis = function(_v0) {
          var millis = _v0.a;
          return millis;
        };
        var $mdgriffith$elm_style_animation$Animation$extractInitialWait = function(steps) {
          var _v0 = $elm$core$List$head(steps);
          if (_v0.$ === "Nothing") {
            return _Utils_Tuple2(
              $elm$time$Time$millisToPosix(0),
              _List_Nil
            );
          } else {
            var step = _v0.a;
            if (step.$ === "Wait") {
              var till = step.a;
              var _v2 = $mdgriffith$elm_style_animation$Animation$extractInitialWait(
                A2($elm$core$List$drop, 1, steps)
              );
              var additionalTime = _v2.a;
              var remainingSteps = _v2.b;
              return _Utils_Tuple2(
                $elm$time$Time$millisToPosix(
                  $elm$time$Time$posixToMillis(till) + $elm$time$Time$posixToMillis(additionalTime)
                ),
                remainingSteps
              );
            } else {
              return _Utils_Tuple2(
                $elm$time$Time$millisToPosix(0),
                steps
              );
            }
          }
        };
        var $mdgriffith$elm_style_animation$Animation$interrupt = F2(
          function(steps, _v0) {
            var model = _v0.a;
            return $mdgriffith$elm_style_animation$Animation$Model$Animation(
              _Utils_update(
                model,
                {
                  interruption: A2(
                    $elm$core$List$cons,
                    $mdgriffith$elm_style_animation$Animation$extractInitialWait(steps),
                    model.interruption
                  ),
                  running: true
                }
              )
            );
          }
        );
        var $elm$core$Debug$log = _Debug_log;
        var $mdgriffith$elm_style_animation$Animation$Model$Loop = function(a) {
          return { $: "Loop", a };
        };
        var $mdgriffith$elm_style_animation$Animation$loop = function(steps) {
          return $mdgriffith$elm_style_animation$Animation$Model$Loop(steps);
        };
        var $author$project$Main$playUrl = _Platform_outgoingPort("playUrl", $elm$json$Json$Encode$string);
        var $author$project$Main$songInfoDecoder = A4(
          $elm$json$Json$Decode$map3,
          $author$project$Main$SongInfo,
          A2($elm$json$Json$Decode$field, "imgUrl", $elm$json$Json$Decode$string),
          A2($elm$json$Json$Decode$field, "title", $elm$json$Json$Decode$string),
          A2($elm$json$Json$Decode$field, "artist", $elm$json$Json$Decode$string)
        );
        var $mdgriffith$elm_style_animation$Animation$Model$To = function(a) {
          return { $: "To", a };
        };
        var $mdgriffith$elm_style_animation$Animation$to = function(props) {
          return $mdgriffith$elm_style_animation$Animation$Model$To(props);
        };
        var $elm$core$List$partition = F2(
          function(pred, list) {
            var step = F2(
              function(x, _v0) {
                var trues = _v0.a;
                var falses = _v0.b;
                return pred(x) ? _Utils_Tuple2(
                  A2($elm$core$List$cons, x, trues),
                  falses
                ) : _Utils_Tuple2(
                  trues,
                  A2($elm$core$List$cons, x, falses)
                );
              }
            );
            return A3(
              $elm$core$List$foldr,
              step,
              _Utils_Tuple2(_List_Nil, _List_Nil),
              list
            );
          }
        );
        var $elm$core$Basics$round = _Basics_round;
        var $mdgriffith$elm_style_animation$Animation$Model$refreshTiming = F2(
          function(now, timing) {
            var dt = $elm$time$Time$posixToMillis(now) - $elm$time$Time$posixToMillis(timing.current);
            return {
              current: now,
              dt: dt > 34 || !$elm$time$Time$posixToMillis(timing.current) ? $elm$time$Time$millisToPosix(
                $elm$core$Basics$round(16.666)
              ) : $elm$time$Time$millisToPosix(dt)
            };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$Repeat = F2(
          function(a, b) {
            return { $: "Repeat", a, b };
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$Step = { $: "Step" };
        var $mdgriffith$elm_style_animation$Animation$Model$Wait = function(a) {
          return { $: "Wait", a };
        };
        var $elm$core$List$all = F2(
          function(isOkay, list) {
            return !A2(
              $elm$core$List$any,
              A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
              list
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$isCmdDone = function(cmd) {
          var motionDone = function(motion2) {
            return !motion2.velocity && _Utils_eq(motion2.position, motion2.target);
          };
          switch (cmd.$) {
            case "Move":
              var m1 = cmd.a;
              var m2 = cmd.b;
              return motionDone(m1) && motionDone(m2);
            case "MoveTo":
              var m1 = cmd.a;
              var m2 = cmd.b;
              return motionDone(m1) && motionDone(m2);
            case "Line":
              var m1 = cmd.a;
              var m2 = cmd.b;
              return motionDone(m1) && motionDone(m2);
            case "LineTo":
              var m1 = cmd.a;
              var m2 = cmd.b;
              return motionDone(m1) && motionDone(m2);
            case "Horizontal":
              var motion = cmd.a;
              return motionDone(motion);
            case "HorizontalTo":
              var motion = cmd.a;
              return motionDone(motion);
            case "Vertical":
              var motion = cmd.a;
              return motionDone(motion);
            case "VerticalTo":
              var motion = cmd.a;
              return motionDone(motion);
            case "Curve":
              var control1 = cmd.a.control1;
              var control2 = cmd.a.control2;
              var point = cmd.a.point;
              return motionDone(control1.a) && (motionDone(control1.b) && (motionDone(control2.a) && (motionDone(control2.b) && (motionDone(point.a) && motionDone(point.b)))));
            case "CurveTo":
              var control1 = cmd.a.control1;
              var control2 = cmd.a.control2;
              var point = cmd.a.point;
              return motionDone(control1.a) && (motionDone(control1.b) && (motionDone(control2.a) && (motionDone(control2.b) && (motionDone(point.a) && motionDone(point.b)))));
            case "Quadratic":
              var control = cmd.a.control;
              var point = cmd.a.point;
              return motionDone(control.a) && (motionDone(control.b) && (motionDone(point.a) && motionDone(point.b)));
            case "QuadraticTo":
              var control = cmd.a.control;
              var point = cmd.a.point;
              return motionDone(control.a) && (motionDone(control.b) && (motionDone(point.a) && motionDone(point.b)));
            case "SmoothQuadratic":
              var coords = cmd.a;
              return A2(
                $elm$core$List$all,
                function(_v1) {
                  var x = _v1.a;
                  var y = _v1.b;
                  return motionDone(x) && motionDone(y);
                },
                coords
              );
            case "SmoothQuadraticTo":
              var coords = cmd.a;
              return A2(
                $elm$core$List$all,
                function(_v2) {
                  var x = _v2.a;
                  var y = _v2.b;
                  return motionDone(x) && motionDone(y);
                },
                coords
              );
            case "Smooth":
              var coords = cmd.a;
              return A2(
                $elm$core$List$all,
                function(_v3) {
                  var x = _v3.a;
                  var y = _v3.b;
                  return motionDone(x) && motionDone(y);
                },
                coords
              );
            case "SmoothTo":
              var coords = cmd.a;
              return A2(
                $elm$core$List$all,
                function(_v4) {
                  var x = _v4.a;
                  var y = _v4.b;
                  return motionDone(x) && motionDone(y);
                },
                coords
              );
            case "ClockwiseArc":
              var arc = cmd.a;
              return motionDone(arc.x) && (motionDone(arc.y) && (motionDone(arc.radius) && (motionDone(arc.startAngle) && motionDone(arc.endAngle))));
            case "AntiClockwiseArc":
              var arc = cmd.a;
              return motionDone(arc.x) && (motionDone(arc.y) && (motionDone(arc.radius) && (motionDone(arc.startAngle) && motionDone(arc.endAngle))));
            default:
              return true;
          }
        };
        var $mdgriffith$elm_style_animation$Animation$Model$isDone = function(property) {
          var motionDone = function(motion) {
            var runningInterpolation = A2($elm$core$Maybe$withDefault, motion.interpolation, motion.interpolationOverride);
            switch (runningInterpolation.$) {
              case "Spring":
                return !motion.velocity && _Utils_eq(motion.position, motion.target);
              case "Easing":
                var eased = runningInterpolation.a;
                return eased.progress === 1 || !eased.progress && _Utils_eq(motion.position, motion.target);
              default:
                var speed = runningInterpolation.a;
                return _Utils_eq(motion.position, motion.target);
            }
          };
          switch (property.$) {
            case "ExactProperty":
              return true;
            case "ColorProperty":
              var m1 = property.b;
              var m2 = property.c;
              var m3 = property.d;
              var m4 = property.e;
              return A2(
                $elm$core$List$all,
                motionDone,
                _List_fromArray(
                  [m1, m2, m3, m4]
                )
              );
            case "ShadowProperty":
              var shadow = property.c;
              return A2(
                $elm$core$List$all,
                motionDone,
                _List_fromArray(
                  [shadow.offsetX, shadow.offsetY, shadow.size, shadow.blur, shadow.red, shadow.green, shadow.blue, shadow.alpha]
                )
              );
            case "Property":
              var m1 = property.b;
              return motionDone(m1);
            case "Property2":
              var m1 = property.b;
              var m2 = property.c;
              return motionDone(m1) && motionDone(m2);
            case "Property3":
              var m1 = property.b;
              var m2 = property.c;
              var m3 = property.d;
              return A2(
                $elm$core$List$all,
                motionDone,
                _List_fromArray(
                  [m1, m2, m3]
                )
              );
            case "Property4":
              var m1 = property.b;
              var m2 = property.c;
              var m3 = property.d;
              var m4 = property.e;
              return A2(
                $elm$core$List$all,
                motionDone,
                _List_fromArray(
                  [m1, m2, m3, m4]
                )
              );
            case "AngleProperty":
              var m1 = property.b;
              return motionDone(m1);
            case "Points":
              var ms = property.a;
              return A2(
                $elm$core$List$all,
                function(_v1) {
                  var x = _v1.a;
                  var y = _v1.b;
                  return motionDone(x) && motionDone(y);
                },
                ms
              );
            default:
              var cmds = property.a;
              return A2($elm$core$List$all, $mdgriffith$elm_style_animation$Animation$Model$isCmdDone, cmds);
          }
        };
        var $mdgriffith$elm_style_animation$Animation$Model$Easing = function(a) {
          return { $: "Easing", a };
        };
        var $elm$core$Basics$abs = function(n) {
          return n < 0 ? -n : n;
        };
        var $elm$core$List$repeatHelp = F3(
          function(result, n, value) {
            repeatHelp:
              while (true) {
                if (n <= 0) {
                  return result;
                } else {
                  var $temp$result = A2($elm$core$List$cons, value, result), $temp$n = n - 1, $temp$value = value;
                  result = $temp$result;
                  n = $temp$n;
                  value = $temp$value;
                  continue repeatHelp;
                }
              }
          }
        );
        var $elm$core$List$repeat = F2(
          function(n, value) {
            return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$matchPoints = F2(
          function(points1, points2) {
            var diff = $elm$core$List$length(points1) - $elm$core$List$length(points2);
            if (diff > 0) {
              var _v0 = $elm$core$List$head(
                $elm$core$List$reverse(points2)
              );
              if (_v0.$ === "Nothing") {
                return _Utils_Tuple2(points1, points2);
              } else {
                var last2 = _v0.a;
                return _Utils_Tuple2(
                  points1,
                  _Utils_ap(
                    points2,
                    A2(
                      $elm$core$List$repeat,
                      $elm$core$Basics$abs(diff),
                      last2
                    )
                  )
                );
              }
            } else {
              if (diff < 0) {
                var _v1 = $elm$core$List$head(
                  $elm$core$List$reverse(points1)
                );
                if (_v1.$ === "Nothing") {
                  return _Utils_Tuple2(points1, points2);
                } else {
                  var last1 = _v1.a;
                  return _Utils_Tuple2(
                    _Utils_ap(
                      points1,
                      A2(
                        $elm$core$List$repeat,
                        $elm$core$Basics$abs(diff),
                        last1
                      )
                    ),
                    points2
                  );
                }
              } else {
                return _Utils_Tuple2(points1, points2);
              }
            }
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$setPathTarget = F2(
          function(cmd, targetCmd) {
            var setMotionTarget = F2(
              function(motion, targetMotion) {
                var _v27 = motion.interpolation;
                if (_v27.$ === "Easing") {
                  var ease = _v27.a;
                  return _Utils_update(
                    motion,
                    {
                      interpolation: $mdgriffith$elm_style_animation$Animation$Model$Easing(
                        _Utils_update(
                          ease,
                          { start: motion.position }
                        )
                      ),
                      target: targetMotion.position
                    }
                  );
                } else {
                  return _Utils_update(
                    motion,
                    { target: targetMotion.position }
                  );
                }
              }
            );
            switch (cmd.$) {
              case "Move":
                var m1 = cmd.a;
                var m2 = cmd.b;
                if (targetCmd.$ === "Move") {
                  var t1 = targetCmd.a;
                  var t2 = targetCmd.b;
                  return A2(
                    $mdgriffith$elm_style_animation$Animation$Model$Move,
                    A2(setMotionTarget, m1, t1),
                    A2(setMotionTarget, m2, t2)
                  );
                } else {
                  return cmd;
                }
              case "MoveTo":
                var m1 = cmd.a;
                var m2 = cmd.b;
                if (targetCmd.$ === "MoveTo") {
                  var t1 = targetCmd.a;
                  var t2 = targetCmd.b;
                  return A2(
                    $mdgriffith$elm_style_animation$Animation$Model$MoveTo,
                    A2(setMotionTarget, m1, t1),
                    A2(setMotionTarget, m2, t2)
                  );
                } else {
                  return cmd;
                }
              case "Line":
                var m1 = cmd.a;
                var m2 = cmd.b;
                if (targetCmd.$ === "Line") {
                  var t1 = targetCmd.a;
                  var t2 = targetCmd.b;
                  return A2(
                    $mdgriffith$elm_style_animation$Animation$Model$Line,
                    A2(setMotionTarget, m1, t1),
                    A2(setMotionTarget, m2, t2)
                  );
                } else {
                  return cmd;
                }
              case "LineTo":
                var m1 = cmd.a;
                var m2 = cmd.b;
                if (targetCmd.$ === "LineTo") {
                  var t1 = targetCmd.a;
                  var t2 = targetCmd.b;
                  return A2(
                    $mdgriffith$elm_style_animation$Animation$Model$LineTo,
                    A2(setMotionTarget, m1, t1),
                    A2(setMotionTarget, m2, t2)
                  );
                } else {
                  return cmd;
                }
              case "Horizontal":
                var m1 = cmd.a;
                if (targetCmd.$ === "Horizontal") {
                  var t1 = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$Horizontal(
                    A2(setMotionTarget, m1, t1)
                  );
                } else {
                  return cmd;
                }
              case "HorizontalTo":
                var m1 = cmd.a;
                if (targetCmd.$ === "HorizontalTo") {
                  var t1 = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$HorizontalTo(
                    A2(setMotionTarget, m1, t1)
                  );
                } else {
                  return cmd;
                }
              case "Vertical":
                var m1 = cmd.a;
                if (targetCmd.$ === "Vertical") {
                  var t1 = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$Vertical(
                    A2(setMotionTarget, m1, t1)
                  );
                } else {
                  return cmd;
                }
              case "VerticalTo":
                var m1 = cmd.a;
                if (targetCmd.$ === "VerticalTo") {
                  var t1 = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$VerticalTo(
                    A2(setMotionTarget, m1, t1)
                  );
                } else {
                  return cmd;
                }
              case "Curve":
                var points = cmd.a;
                if (targetCmd.$ === "Curve") {
                  var targets = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$Curve(
                    {
                      control1: _Utils_Tuple2(
                        A2(setMotionTarget, points.control1.a, targets.control1.a),
                        A2(setMotionTarget, points.control1.b, targets.control1.b)
                      ),
                      control2: _Utils_Tuple2(
                        A2(setMotionTarget, points.control2.a, targets.control2.a),
                        A2(setMotionTarget, points.control2.b, targets.control2.b)
                      ),
                      point: _Utils_Tuple2(
                        A2(setMotionTarget, points.point.a, targets.point.a),
                        A2(setMotionTarget, points.point.b, targets.point.b)
                      )
                    }
                  );
                } else {
                  return cmd;
                }
              case "CurveTo":
                var points = cmd.a;
                if (targetCmd.$ === "CurveTo") {
                  var targets = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$CurveTo(
                    {
                      control1: _Utils_Tuple2(
                        A2(setMotionTarget, points.control1.a, targets.control1.a),
                        A2(setMotionTarget, points.control1.b, targets.control1.b)
                      ),
                      control2: _Utils_Tuple2(
                        A2(setMotionTarget, points.control2.a, targets.control2.a),
                        A2(setMotionTarget, points.control2.b, targets.control2.b)
                      ),
                      point: _Utils_Tuple2(
                        A2(setMotionTarget, points.point.a, targets.point.a),
                        A2(setMotionTarget, points.point.b, targets.point.b)
                      )
                    }
                  );
                } else {
                  return cmd;
                }
              case "Quadratic":
                var points = cmd.a;
                if (targetCmd.$ === "Quadratic") {
                  var targets = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$Quadratic(
                    {
                      control: _Utils_Tuple2(
                        A2(setMotionTarget, points.control.a, targets.control.a),
                        A2(setMotionTarget, points.control.b, targets.control.b)
                      ),
                      point: _Utils_Tuple2(
                        A2(setMotionTarget, points.point.a, targets.point.a),
                        A2(setMotionTarget, points.point.b, targets.point.b)
                      )
                    }
                  );
                } else {
                  return cmd;
                }
              case "QuadraticTo":
                var points = cmd.a;
                if (targetCmd.$ === "QuadraticTo") {
                  var targets = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
                    {
                      control: _Utils_Tuple2(
                        A2(setMotionTarget, points.control.a, targets.control.a),
                        A2(setMotionTarget, points.control.b, targets.control.b)
                      ),
                      point: _Utils_Tuple2(
                        A2(setMotionTarget, points.point.a, targets.point.a),
                        A2(setMotionTarget, points.point.b, targets.point.b)
                      )
                    }
                  );
                } else {
                  return cmd;
                }
              case "SmoothQuadratic":
                var coords = cmd.a;
                if (targetCmd.$ === "SmoothQuadratic") {
                  var targetCoords = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic(
                    A3(
                      $elm$core$List$map2,
                      F2(
                        function(_v14, _v15) {
                          var x1 = _v14.a;
                          var y1 = _v14.b;
                          var x2 = _v15.a;
                          var y2 = _v15.b;
                          return _Utils_Tuple2(
                            A2(setMotionTarget, x1, x2),
                            A2(setMotionTarget, y1, y2)
                          );
                        }
                      ),
                      coords,
                      targetCoords
                    )
                  );
                } else {
                  return cmd;
                }
              case "SmoothQuadraticTo":
                var coords = cmd.a;
                if (targetCmd.$ === "SmoothQuadraticTo") {
                  var targetCoords = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo(
                    A3(
                      $elm$core$List$map2,
                      F2(
                        function(_v17, _v18) {
                          var x1 = _v17.a;
                          var y1 = _v17.b;
                          var x2 = _v18.a;
                          var y2 = _v18.b;
                          return _Utils_Tuple2(
                            A2(setMotionTarget, x1, x2),
                            A2(setMotionTarget, y1, y2)
                          );
                        }
                      ),
                      coords,
                      targetCoords
                    )
                  );
                } else {
                  return cmd;
                }
              case "Smooth":
                var coords = cmd.a;
                if (targetCmd.$ === "Smooth") {
                  var targetCoords = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$Smooth(
                    A3(
                      $elm$core$List$map2,
                      F2(
                        function(_v20, _v21) {
                          var x1 = _v20.a;
                          var y1 = _v20.b;
                          var x2 = _v21.a;
                          var y2 = _v21.b;
                          return _Utils_Tuple2(
                            A2(setMotionTarget, x1, x2),
                            A2(setMotionTarget, y1, y2)
                          );
                        }
                      ),
                      coords,
                      targetCoords
                    )
                  );
                } else {
                  return cmd;
                }
              case "SmoothTo":
                var coords = cmd.a;
                if (targetCmd.$ === "SmoothTo") {
                  var targetCoords = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$SmoothTo(
                    A3(
                      $elm$core$List$map2,
                      F2(
                        function(_v23, _v24) {
                          var x1 = _v23.a;
                          var y1 = _v23.b;
                          var x2 = _v24.a;
                          var y2 = _v24.b;
                          return _Utils_Tuple2(
                            A2(setMotionTarget, x1, x2),
                            A2(setMotionTarget, y1, y2)
                          );
                        }
                      ),
                      coords,
                      targetCoords
                    )
                  );
                } else {
                  return cmd;
                }
              case "ClockwiseArc":
                var arc = cmd.a;
                if (targetCmd.$ === "ClockwiseArc") {
                  var target = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc(
                    function() {
                      var y = arc.y;
                      var x = arc.x;
                      var startAngle = arc.startAngle;
                      var radius = arc.radius;
                      var endAngle = arc.endAngle;
                      return _Utils_update(
                        arc,
                        {
                          endAngle: A2(setMotionTarget, endAngle, target.endAngle),
                          radius: A2(setMotionTarget, radius, target.radius),
                          startAngle: A2(setMotionTarget, startAngle, target.startAngle),
                          x: A2(setMotionTarget, x, target.x),
                          y: A2(setMotionTarget, y, target.y)
                        }
                      );
                    }()
                  );
                } else {
                  return cmd;
                }
              case "AntiClockwiseArc":
                var arc = cmd.a;
                if (targetCmd.$ === "AntiClockwiseArc") {
                  var target = targetCmd.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
                    function() {
                      var y = arc.y;
                      var x = arc.x;
                      var startAngle = arc.startAngle;
                      var radius = arc.radius;
                      var endAngle = arc.endAngle;
                      return _Utils_update(
                        arc,
                        {
                          endAngle: A2(setMotionTarget, endAngle, target.endAngle),
                          radius: A2(setMotionTarget, radius, target.radius),
                          startAngle: A2(setMotionTarget, startAngle, target.startAngle),
                          x: A2(setMotionTarget, x, target.x),
                          y: A2(setMotionTarget, y, target.y)
                        }
                      );
                    }()
                  );
                } else {
                  return cmd;
                }
              default:
                return $mdgriffith$elm_style_animation$Animation$Model$Close;
            }
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$setTarget = F3(
          function(overrideInterpolation, current, newTarget) {
            var setMotionTarget = F2(
              function(motion, targetMotion) {
                var newMotion = overrideInterpolation ? _Utils_update(
                  motion,
                  {
                    interpolationOverride: $elm$core$Maybe$Just(targetMotion.interpolation)
                  }
                ) : motion;
                var _v13 = newMotion.interpolationOverride;
                if (_v13.$ === "Nothing") {
                  var _v14 = newMotion.interpolation;
                  if (_v14.$ === "Easing") {
                    var ease = _v14.a;
                    return _Utils_update(
                      newMotion,
                      {
                        interpolation: $mdgriffith$elm_style_animation$Animation$Model$Easing(
                          _Utils_update(
                            ease,
                            { progress: 0, start: motion.position }
                          )
                        ),
                        target: targetMotion.position
                      }
                    );
                  } else {
                    return _Utils_update(
                      newMotion,
                      { target: targetMotion.position }
                    );
                  }
                } else {
                  var override = _v13.a;
                  if (override.$ === "Easing") {
                    var ease = override.a;
                    return _Utils_update(
                      newMotion,
                      {
                        interpolationOverride: $elm$core$Maybe$Just(
                          $mdgriffith$elm_style_animation$Animation$Model$Easing(
                            _Utils_update(
                              ease,
                              { progress: 0, start: motion.position }
                            )
                          )
                        ),
                        target: targetMotion.position
                      }
                    );
                  } else {
                    return _Utils_update(
                      newMotion,
                      { target: targetMotion.position }
                    );
                  }
                }
              }
            );
            switch (current.$) {
              case "ExactProperty":
                var name = current.a;
                var value = current.b;
                return A2($mdgriffith$elm_style_animation$Animation$Model$ExactProperty, name, value);
              case "ColorProperty":
                var name = current.a;
                var m1 = current.b;
                var m2 = current.c;
                var m3 = current.d;
                var m4 = current.e;
                if (newTarget.$ === "ColorProperty") {
                  var t1 = newTarget.b;
                  var t2 = newTarget.c;
                  var t3 = newTarget.d;
                  var t4 = newTarget.e;
                  return A5(
                    $mdgriffith$elm_style_animation$Animation$Model$ColorProperty,
                    name,
                    A2(setMotionTarget, m1, t1),
                    A2(setMotionTarget, m2, t2),
                    A2(setMotionTarget, m3, t3),
                    A2(setMotionTarget, m4, t4)
                  );
                } else {
                  return current;
                }
              case "ShadowProperty":
                var name = current.a;
                var inset = current.b;
                var shadow = current.c;
                if (newTarget.$ === "ShadowProperty") {
                  var targetShadow = newTarget.c;
                  return A3(
                    $mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
                    name,
                    inset,
                    {
                      alpha: A2(setMotionTarget, shadow.alpha, targetShadow.alpha),
                      blue: A2(setMotionTarget, shadow.blue, targetShadow.blue),
                      blur: A2(setMotionTarget, shadow.blur, targetShadow.blur),
                      green: A2(setMotionTarget, shadow.green, targetShadow.green),
                      offsetX: A2(setMotionTarget, shadow.offsetX, targetShadow.offsetX),
                      offsetY: A2(setMotionTarget, shadow.offsetY, targetShadow.offsetY),
                      red: A2(setMotionTarget, shadow.red, targetShadow.red),
                      size: A2(setMotionTarget, shadow.size, targetShadow.size)
                    }
                  );
                } else {
                  return current;
                }
              case "Property":
                var name = current.a;
                var m1 = current.b;
                if (newTarget.$ === "Property") {
                  var t1 = newTarget.b;
                  return A2(
                    $mdgriffith$elm_style_animation$Animation$Model$Property,
                    name,
                    A2(setMotionTarget, m1, t1)
                  );
                } else {
                  return current;
                }
              case "Property2":
                var name = current.a;
                var m1 = current.b;
                var m2 = current.c;
                if (newTarget.$ === "Property2") {
                  var t1 = newTarget.b;
                  var t2 = newTarget.c;
                  return A3(
                    $mdgriffith$elm_style_animation$Animation$Model$Property2,
                    name,
                    A2(setMotionTarget, m1, t1),
                    A2(setMotionTarget, m2, t2)
                  );
                } else {
                  return current;
                }
              case "Property3":
                var name = current.a;
                var m1 = current.b;
                var m2 = current.c;
                var m3 = current.d;
                if (newTarget.$ === "Property3") {
                  var t1 = newTarget.b;
                  var t2 = newTarget.c;
                  var t3 = newTarget.d;
                  return A4(
                    $mdgriffith$elm_style_animation$Animation$Model$Property3,
                    name,
                    A2(setMotionTarget, m1, t1),
                    A2(setMotionTarget, m2, t2),
                    A2(setMotionTarget, m3, t3)
                  );
                } else {
                  return current;
                }
              case "Property4":
                var name = current.a;
                var m1 = current.b;
                var m2 = current.c;
                var m3 = current.d;
                var m4 = current.e;
                if (newTarget.$ === "Property4") {
                  var t1 = newTarget.b;
                  var t2 = newTarget.c;
                  var t3 = newTarget.d;
                  var t4 = newTarget.e;
                  return A5(
                    $mdgriffith$elm_style_animation$Animation$Model$Property4,
                    name,
                    A2(setMotionTarget, m1, t1),
                    A2(setMotionTarget, m2, t2),
                    A2(setMotionTarget, m3, t3),
                    A2(setMotionTarget, m4, t4)
                  );
                } else {
                  return current;
                }
              case "AngleProperty":
                var name = current.a;
                var m1 = current.b;
                if (newTarget.$ === "AngleProperty") {
                  var t1 = newTarget.b;
                  return A2(
                    $mdgriffith$elm_style_animation$Animation$Model$AngleProperty,
                    name,
                    A2(setMotionTarget, m1, t1)
                  );
                } else {
                  return current;
                }
              case "Points":
                var currentPts = current.a;
                if (newTarget.$ === "Points") {
                  var targetPts = newTarget.a;
                  var _v9 = A2($mdgriffith$elm_style_animation$Animation$Model$matchPoints, currentPts, targetPts);
                  var m1s = _v9.a;
                  var m2s = _v9.b;
                  return $mdgriffith$elm_style_animation$Animation$Model$Points(
                    A3(
                      $elm$core$List$map2,
                      F2(
                        function(_v10, _v11) {
                          var x1 = _v10.a;
                          var y1 = _v10.b;
                          var x2 = _v11.a;
                          var y2 = _v11.b;
                          return _Utils_Tuple2(
                            A2(setMotionTarget, x1, x2),
                            A2(setMotionTarget, y1, y2)
                          );
                        }
                      ),
                      m1s,
                      m2s
                    )
                  );
                } else {
                  return current;
                }
              default:
                var cmds = current.a;
                if (newTarget.$ === "Path") {
                  var targets = newTarget.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$Path(
                    A3($elm$core$List$map2, $mdgriffith$elm_style_animation$Animation$Model$setPathTarget, cmds, targets)
                  );
                } else {
                  return current;
                }
            }
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$zipPropertiesGreedy = F2(
          function(initialProps, newTargetProps) {
            var propertyMatch = F2(
              function(prop1, prop2) {
                return _Utils_eq(
                  $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop1),
                  $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop2)
                );
              }
            );
            var _v0 = A3(
              $elm$core$List$foldl,
              F2(
                function(_v1, _v2) {
                  var stackA = _v2.a;
                  var stackB = _v2.b;
                  var result = _v2.c;
                  var _v3 = $elm$core$List$head(stackA);
                  if (_v3.$ === "Nothing") {
                    return _Utils_Tuple3(stackA, stackB, result);
                  } else {
                    var a = _v3.a;
                    var _v4 = A2(
                      $elm$core$List$partition,
                      propertyMatch(a),
                      stackB
                    );
                    var matchingBs = _v4.a;
                    var nonMatchingBs = _v4.b;
                    return _Utils_Tuple3(
                      A2($elm$core$List$drop, 1, stackA),
                      function() {
                        if (!matchingBs.b) {
                          return nonMatchingBs;
                        } else {
                          var b = matchingBs.a;
                          var remainingBs = matchingBs.b;
                          return _Utils_ap(remainingBs, nonMatchingBs);
                        }
                      }(),
                      A2(
                        $elm$core$List$cons,
                        _Utils_Tuple2(
                          a,
                          $elm$core$List$head(matchingBs)
                        ),
                        result
                      )
                    );
                  }
                }
              ),
              _Utils_Tuple3(initialProps, newTargetProps, _List_Nil),
              A2(
                $elm$core$List$repeat,
                $elm$core$List$length(initialProps),
                0
              )
            );
            var warnings = _v0.b;
            var props = _v0.c;
            var _v6 = warnings;
            return $elm$core$List$reverse(props);
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$startTowards = F3(
          function(overrideInterpolation, current, target) {
            return A2(
              $elm$core$List$filterMap,
              function(propPair) {
                if (propPair.b.$ === "Just") {
                  var cur = propPair.a;
                  var to = propPair.b.a;
                  return $elm$core$Maybe$Just(
                    A3($mdgriffith$elm_style_animation$Animation$Model$setTarget, overrideInterpolation, cur, to)
                  );
                } else {
                  var prop = propPair.a;
                  var _v1 = propPair.b;
                  return $elm$core$Maybe$Just(prop);
                }
              },
              A2($mdgriffith$elm_style_animation$Animation$Model$zipPropertiesGreedy, current, target)
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$tolerance = 0.01;
        var $elm$core$Basics$truncate = _Basics_truncate;
        var $mdgriffith$elm_style_animation$Animation$Model$vTolerance = 0.1;
        var $mdgriffith$elm_style_animation$Animation$Model$stepInterpolation = F2(
          function(posix, motion) {
            var interpolationToUse = A2($elm$core$Maybe$withDefault, motion.interpolation, motion.interpolationOverride);
            var dtms = $elm$time$Time$posixToMillis(posix);
            switch (interpolationToUse.$) {
              case "AtSpeed":
                var perSecond = interpolationToUse.a.perSecond;
                var _v1 = function() {
                  if (_Utils_cmp(motion.position, motion.target) < 0) {
                    var _new = motion.position + perSecond * (dtms / 1e3);
                    return _Utils_Tuple2(
                      _new,
                      _Utils_cmp(_new, motion.target) > -1
                    );
                  } else {
                    var _new = motion.position - perSecond * (dtms / 1e3);
                    return _Utils_Tuple2(
                      _new,
                      _Utils_cmp(_new, motion.target) < 1
                    );
                  }
                }();
                var newPos = _v1.a;
                var finished = _v1.b;
                return finished ? _Utils_update(
                  motion,
                  { position: motion.target, velocity: 0 }
                ) : _Utils_update(
                  motion,
                  { position: newPos, velocity: perSecond * 1e3 }
                );
              case "Spring":
                var stiffness = interpolationToUse.a.stiffness;
                var damping = interpolationToUse.a.damping;
                var fspring = stiffness * (motion.target - motion.position);
                var fdamper = -1 * damping * motion.velocity;
                var dt = dtms / 1e3;
                var a = fspring + fdamper;
                var newVelocity = motion.velocity + a * dt;
                var newPos = motion.position + newVelocity * dt;
                var dx = $elm$core$Basics$abs(motion.target - newPos);
                return _Utils_cmp(dx, $mdgriffith$elm_style_animation$Animation$Model$tolerance) < 0 && _Utils_cmp(
                  $elm$core$Basics$abs(newVelocity),
                  $mdgriffith$elm_style_animation$Animation$Model$vTolerance
                ) < 0 ? _Utils_update(
                  motion,
                  { position: motion.target, velocity: 0 }
                ) : _Utils_update(
                  motion,
                  { position: newPos, velocity: newVelocity }
                );
              default:
                var progress = interpolationToUse.a.progress;
                var duration = interpolationToUse.a.duration;
                var ease = interpolationToUse.a.ease;
                var start = interpolationToUse.a.start;
                var durationMs = $elm$time$Time$posixToMillis(duration);
                var newProgress = dtms / durationMs + progress < 1 ? dtms / durationMs + progress : 1;
                var eased = ease(newProgress);
                var distance = motion.target - start;
                var newPos = ((eased * distance + start) * 1e4 | 0) / 1e4;
                var newVelocity = newProgress === 1 ? 0 : (newPos - motion.position) / dtms;
                var _v2 = motion.interpolationOverride;
                if (_v2.$ === "Nothing") {
                  return _Utils_update(
                    motion,
                    {
                      interpolation: $mdgriffith$elm_style_animation$Animation$Model$Easing(
                        { duration, ease, progress: newProgress, start }
                      ),
                      position: newPos,
                      velocity: newVelocity
                    }
                  );
                } else {
                  var override = _v2.a;
                  return _Utils_update(
                    motion,
                    {
                      interpolationOverride: $elm$core$Maybe$Just(
                        $mdgriffith$elm_style_animation$Animation$Model$Easing(
                          { duration, ease, progress: newProgress, start }
                        )
                      ),
                      position: newPos,
                      velocity: newVelocity
                    }
                  );
                }
            }
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$stepPath = F2(
          function(dt, cmd) {
            var stepCoords = function(coords2) {
              return A2(
                $elm$core$List$map,
                function(_v1) {
                  var x = _v1.a;
                  var y = _v1.b;
                  return _Utils_Tuple2(
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, x),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, y)
                  );
                },
                coords2
              );
            };
            switch (cmd.$) {
              case "Move":
                var m1 = cmd.a;
                var m2 = cmd.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$Move,
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2)
                );
              case "MoveTo":
                var m1 = cmd.a;
                var m2 = cmd.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$MoveTo,
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2)
                );
              case "Line":
                var m1 = cmd.a;
                var m2 = cmd.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$Line,
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2)
                );
              case "LineTo":
                var m1 = cmd.a;
                var m2 = cmd.b;
                return A2(
                  $mdgriffith$elm_style_animation$Animation$Model$LineTo,
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m1),
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, m2)
                );
              case "Horizontal":
                var motion = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$Horizontal(
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion)
                );
              case "HorizontalTo":
                var motion = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$HorizontalTo(
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion)
                );
              case "Vertical":
                var motion = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$Vertical(
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion)
                );
              case "VerticalTo":
                var motion = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$VerticalTo(
                  A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion)
                );
              case "Curve":
                var control1 = cmd.a.control1;
                var control2 = cmd.a.control2;
                var point = cmd.a.point;
                return $mdgriffith$elm_style_animation$Animation$Model$Curve(
                  {
                    control1: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.b)
                    ),
                    control2: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.b)
                    ),
                    point: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b)
                    )
                  }
                );
              case "CurveTo":
                var control1 = cmd.a.control1;
                var control2 = cmd.a.control2;
                var point = cmd.a.point;
                return $mdgriffith$elm_style_animation$Animation$Model$CurveTo(
                  {
                    control1: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control1.b)
                    ),
                    control2: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control2.b)
                    ),
                    point: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b)
                    )
                  }
                );
              case "Quadratic":
                var control = cmd.a.control;
                var point = cmd.a.point;
                return $mdgriffith$elm_style_animation$Animation$Model$Quadratic(
                  {
                    control: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.b)
                    ),
                    point: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b)
                    )
                  }
                );
              case "QuadraticTo":
                var control = cmd.a.control;
                var point = cmd.a.point;
                return $mdgriffith$elm_style_animation$Animation$Model$QuadraticTo(
                  {
                    control: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, control.b)
                    ),
                    point: _Utils_Tuple2(
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.a),
                      A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, point.b)
                    )
                  }
                );
              case "SmoothQuadratic":
                var coords = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadratic(
                  stepCoords(coords)
                );
              case "SmoothQuadraticTo":
                var coords = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$SmoothQuadraticTo(
                  stepCoords(coords)
                );
              case "Smooth":
                var coords = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$Smooth(
                  stepCoords(coords)
                );
              case "SmoothTo":
                var coords = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$SmoothTo(
                  stepCoords(coords)
                );
              case "ClockwiseArc":
                var arc = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$ClockwiseArc(
                  _Utils_update(
                    arc,
                    {
                      endAngle: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.endAngle),
                      radius: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.radius),
                      startAngle: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.startAngle),
                      x: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.x),
                      y: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.y)
                    }
                  )
                );
              case "AntiClockwiseArc":
                var arc = cmd.a;
                return $mdgriffith$elm_style_animation$Animation$Model$AntiClockwiseArc(
                  _Utils_update(
                    arc,
                    {
                      endAngle: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.endAngle),
                      radius: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.radius),
                      startAngle: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.startAngle),
                      x: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.x),
                      y: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, arc.y)
                    }
                  )
                );
              default:
                return $mdgriffith$elm_style_animation$Animation$Model$Close;
            }
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$step = F2(
          function(dt, props) {
            var stepProp = function(property) {
              switch (property.$) {
                case "ExactProperty":
                  var name = property.a;
                  var value = property.b;
                  return A2($mdgriffith$elm_style_animation$Animation$Model$ExactProperty, name, value);
                case "Property":
                  var name = property.a;
                  var motion = property.b;
                  return A2(
                    $mdgriffith$elm_style_animation$Animation$Model$Property,
                    name,
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion)
                  );
                case "Property2":
                  var name = property.a;
                  var motion1 = property.b;
                  var motion2 = property.c;
                  return A3(
                    $mdgriffith$elm_style_animation$Animation$Model$Property2,
                    name,
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion1),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion2)
                  );
                case "Property3":
                  var name = property.a;
                  var motion1 = property.b;
                  var motion2 = property.c;
                  var motion3 = property.d;
                  return A4(
                    $mdgriffith$elm_style_animation$Animation$Model$Property3,
                    name,
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion1),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion2),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion3)
                  );
                case "Property4":
                  var name = property.a;
                  var motion1 = property.b;
                  var motion2 = property.c;
                  var motion3 = property.d;
                  var motion4 = property.e;
                  return A5(
                    $mdgriffith$elm_style_animation$Animation$Model$Property4,
                    name,
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion1),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion2),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion3),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion4)
                  );
                case "AngleProperty":
                  var name = property.a;
                  var motion = property.b;
                  return A2(
                    $mdgriffith$elm_style_animation$Animation$Model$AngleProperty,
                    name,
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, motion)
                  );
                case "ColorProperty":
                  var name = property.a;
                  var red = property.b;
                  var green = property.c;
                  var blue = property.d;
                  var alpha = property.e;
                  return A5(
                    $mdgriffith$elm_style_animation$Animation$Model$ColorProperty,
                    name,
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, red),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, green),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, blue),
                    A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, alpha)
                  );
                case "ShadowProperty":
                  var name = property.a;
                  var inset = property.b;
                  var shadow = property.c;
                  return A3(
                    $mdgriffith$elm_style_animation$Animation$Model$ShadowProperty,
                    name,
                    inset,
                    {
                      alpha: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.alpha),
                      blue: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.blue),
                      blur: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.blur),
                      green: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.green),
                      offsetX: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.offsetX),
                      offsetY: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.offsetY),
                      red: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.red),
                      size: A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, shadow.size)
                    }
                  );
                case "Points":
                  var points = property.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$Points(
                    A2(
                      $elm$core$List$map,
                      function(_v1) {
                        var x = _v1.a;
                        var y = _v1.b;
                        return _Utils_Tuple2(
                          A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, x),
                          A2($mdgriffith$elm_style_animation$Animation$Model$stepInterpolation, dt, y)
                        );
                      },
                      points
                    )
                  );
                default:
                  var cmds = property.a;
                  return $mdgriffith$elm_style_animation$Animation$Model$Path(
                    A2(
                      $elm$core$List$map,
                      $mdgriffith$elm_style_animation$Animation$Model$stepPath(dt),
                      cmds
                    )
                  );
              }
            };
            return A2($elm$core$List$map, stepProp, props);
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$alreadyThere = F2(
          function(current, target) {
            return A2(
              $elm$core$List$all,
              $mdgriffith$elm_style_animation$Animation$Model$isDone,
              A2(
                $mdgriffith$elm_style_animation$Animation$Model$step,
                $elm$time$Time$millisToPosix(0),
                A3($mdgriffith$elm_style_animation$Animation$Model$startTowards, false, current, target)
              )
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$replaceProps = F2(
          function(props, replacements) {
            var replacementNames = A2($elm$core$List$map, $mdgriffith$elm_style_animation$Animation$Model$propertyName, replacements);
            var removed = A2(
              $elm$core$List$filter,
              function(prop) {
                return !A2(
                  $elm$core$List$member,
                  $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
                  replacementNames
                );
              },
              props
            );
            return _Utils_ap(removed, replacements);
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$resolveSteps = F3(
          function(currentStyle, steps, dt) {
            resolveSteps:
              while (true) {
                var _v0 = $elm$core$List$head(steps);
                if (_v0.$ === "Nothing") {
                  return _Utils_Tuple3(currentStyle, _List_Nil, _List_Nil);
                } else {
                  var currentStep = _v0.a;
                  switch (currentStep.$) {
                    case "Wait":
                      var n = currentStep.a;
                      if ($elm$time$Time$posixToMillis(n) <= 0) {
                        var $temp$currentStyle = currentStyle, $temp$steps = A2($elm$core$List$drop, 1, steps), $temp$dt = dt;
                        currentStyle = $temp$currentStyle;
                        steps = $temp$steps;
                        dt = $temp$dt;
                        continue resolveSteps;
                      } else {
                        return _Utils_Tuple3(
                          currentStyle,
                          _List_Nil,
                          A2(
                            $elm$core$List$cons,
                            $mdgriffith$elm_style_animation$Animation$Model$Wait(
                              $elm$time$Time$millisToPosix(
                                $elm$time$Time$posixToMillis(n) - $elm$time$Time$posixToMillis(dt)
                              )
                            ),
                            A2($elm$core$List$drop, 1, steps)
                          )
                        );
                      }
                    case "Send":
                      var msg = currentStep.a;
                      var _v2 = A3(
                        $mdgriffith$elm_style_animation$Animation$Model$resolveSteps,
                        currentStyle,
                        A2($elm$core$List$drop, 1, steps),
                        dt
                      );
                      var newStyle = _v2.a;
                      var msgs = _v2.b;
                      var remainingSteps = _v2.c;
                      return _Utils_Tuple3(
                        newStyle,
                        A2($elm$core$List$cons, msg, msgs),
                        remainingSteps
                      );
                    case "To":
                      var target = currentStep.a;
                      if (A2($mdgriffith$elm_style_animation$Animation$Model$alreadyThere, currentStyle, target)) {
                        return _Utils_Tuple3(
                          currentStyle,
                          _List_Nil,
                          A2($elm$core$List$drop, 1, steps)
                        );
                      } else {
                        var $temp$currentStyle = A3($mdgriffith$elm_style_animation$Animation$Model$startTowards, false, currentStyle, target), $temp$steps = A2(
                          $elm$core$List$cons,
                          $mdgriffith$elm_style_animation$Animation$Model$Step,
                          A2($elm$core$List$drop, 1, steps)
                        ), $temp$dt = dt;
                        currentStyle = $temp$currentStyle;
                        steps = $temp$steps;
                        dt = $temp$dt;
                        continue resolveSteps;
                      }
                    case "ToWith":
                      var target = currentStep.a;
                      if (A2($mdgriffith$elm_style_animation$Animation$Model$alreadyThere, currentStyle, target)) {
                        return _Utils_Tuple3(
                          currentStyle,
                          _List_Nil,
                          A2($elm$core$List$drop, 1, steps)
                        );
                      } else {
                        var $temp$currentStyle = A3($mdgriffith$elm_style_animation$Animation$Model$startTowards, true, currentStyle, target), $temp$steps = A2(
                          $elm$core$List$cons,
                          $mdgriffith$elm_style_animation$Animation$Model$Step,
                          A2($elm$core$List$drop, 1, steps)
                        ), $temp$dt = dt;
                        currentStyle = $temp$currentStyle;
                        steps = $temp$steps;
                        dt = $temp$dt;
                        continue resolveSteps;
                      }
                    case "Set":
                      var props = currentStep.a;
                      var $temp$currentStyle = A2($mdgriffith$elm_style_animation$Animation$Model$replaceProps, currentStyle, props), $temp$steps = A2($elm$core$List$drop, 1, steps), $temp$dt = dt;
                      currentStyle = $temp$currentStyle;
                      steps = $temp$steps;
                      dt = $temp$dt;
                      continue resolveSteps;
                    case "Step":
                      var stepped = A2($mdgriffith$elm_style_animation$Animation$Model$step, dt, currentStyle);
                      return A2($elm$core$List$all, $mdgriffith$elm_style_animation$Animation$Model$isDone, stepped) ? _Utils_Tuple3(
                        A2(
                          $elm$core$List$map,
                          $mdgriffith$elm_style_animation$Animation$Model$mapToMotion(
                            function(m) {
                              return _Utils_update(
                                m,
                                { interpolationOverride: $elm$core$Maybe$Nothing }
                              );
                            }
                          ),
                          stepped
                        ),
                        _List_Nil,
                        A2($elm$core$List$drop, 1, steps)
                      ) : _Utils_Tuple3(stepped, _List_Nil, steps);
                    case "Loop":
                      var substeps = currentStep.a;
                      var $temp$currentStyle = currentStyle, $temp$steps = _Utils_ap(
                        substeps,
                        _List_fromArray(
                          [
                            $mdgriffith$elm_style_animation$Animation$Model$Loop(substeps)
                          ]
                        )
                      ), $temp$dt = dt;
                      currentStyle = $temp$currentStyle;
                      steps = $temp$steps;
                      dt = $temp$dt;
                      continue resolveSteps;
                    default:
                      var n = currentStep.a;
                      var substeps = currentStep.b;
                      if (n <= 0) {
                        var $temp$currentStyle = currentStyle, $temp$steps = A2($elm$core$List$drop, 1, steps), $temp$dt = dt;
                        currentStyle = $temp$currentStyle;
                        steps = $temp$steps;
                        dt = $temp$dt;
                        continue resolveSteps;
                      } else {
                        var $temp$currentStyle = currentStyle, $temp$steps = _Utils_ap(
                          substeps,
                          _Utils_ap(
                            _List_fromArray(
                              [
                                A2($mdgriffith$elm_style_animation$Animation$Model$Repeat, n - 1, substeps)
                              ]
                            ),
                            A2($elm$core$List$drop, 1, steps)
                          )
                        ), $temp$dt = dt;
                        currentStyle = $temp$currentStyle;
                        steps = $temp$steps;
                        dt = $temp$dt;
                        continue resolveSteps;
                      }
                  }
                }
              }
          }
        );
        var $mdgriffith$elm_style_animation$Animation$Model$updateAnimation = F2(
          function(_v0, _v1) {
            var now = _v0.a;
            var model = _v1.a;
            var timing = A2($mdgriffith$elm_style_animation$Animation$Model$refreshTiming, now, model.timing);
            var _v2 = A2(
              $elm$core$List$partition,
              function(_v4) {
                var wait = _v4.a;
                var mySteps = _v4.b;
                return $elm$time$Time$posixToMillis(wait) <= 0;
              },
              A2(
                $elm$core$List$map,
                function(_v3) {
                  var wait = _v3.a;
                  var mySteps = _v3.b;
                  return _Utils_Tuple2(
                    $elm$time$Time$millisToPosix(
                      $elm$time$Time$posixToMillis(wait) - $elm$time$Time$posixToMillis(timing.dt)
                    ),
                    mySteps
                  );
                },
                model.interruption
              )
            );
            var readyInterruption = _v2.a;
            var queuedInterruptions = _v2.b;
            var _v5 = function() {
              var _v6 = $elm$core$List$head(readyInterruption);
              if (_v6.$ === "Just") {
                var _v7 = _v6.a;
                var wait = _v7.a;
                var interrupt = _v7.b;
                return _Utils_Tuple2(
                  interrupt,
                  A2(
                    $elm$core$List$map,
                    $mdgriffith$elm_style_animation$Animation$Model$mapToMotion(
                      function(m) {
                        return _Utils_update(
                          m,
                          { interpolationOverride: $elm$core$Maybe$Nothing }
                        );
                      }
                    ),
                    model.style
                  )
                );
              } else {
                return _Utils_Tuple2(model.steps, model.style);
              }
            }();
            var steps = _v5.a;
            var style = _v5.b;
            var _v8 = A3($mdgriffith$elm_style_animation$Animation$Model$resolveSteps, style, steps, timing.dt);
            var revisedStyle = _v8.a;
            var sentMessages = _v8.b;
            var revisedSteps = _v8.c;
            return _Utils_Tuple2(
              $mdgriffith$elm_style_animation$Animation$Model$Animation(
                _Utils_update(
                  model,
                  {
                    interruption: queuedInterruptions,
                    running: !!$elm$core$List$length(revisedSteps) || !!$elm$core$List$length(queuedInterruptions),
                    steps: revisedSteps,
                    style: revisedStyle,
                    timing
                  }
                )
              ),
              $elm$core$Platform$Cmd$batch(
                A2(
                  $elm$core$List$map,
                  function(m) {
                    return A2(
                      $elm$core$Task$perform,
                      $elm$core$Basics$identity,
                      $elm$core$Task$succeed(m)
                    );
                  },
                  sentMessages
                )
              )
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$update = F2(
          function(tick, animation) {
            return A2($mdgriffith$elm_style_animation$Animation$Model$updateAnimation, tick, animation).a;
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$ChannelClosed = function(a) {
          return { $: "ChannelClosed", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$ChannelError = function(a) {
          return { $: "ChannelError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$ChannelEvent = F3(
          function(a, b, c) {
            return { $: "ChannelEvent", a, b, c };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$ChannelMessage = function(a) {
          return { $: "ChannelMessage", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse = function(a) {
          return { $: "ChannelResponse", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Connected = { $: "Connected" };
        var $phollyer$elm_phoenix_websocket$Phoenix$DecoderError = function(a) {
          return { $: "DecoderError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Diff = F2(
          function(a, b) {
            return { $: "Diff", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Disconnecting = { $: "Disconnecting" };
        var $phollyer$elm_phoenix_websocket$Phoenix$Heartbeat = function(a) {
          return { $: "Heartbeat", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$InternalError = function(a) {
          return { $: "InternalError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$InvalidMessage = function(a) {
          return { $: "InvalidMessage", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Join = F2(
          function(a, b) {
            return { $: "Join", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$JoinError = F2(
          function(a, b) {
            return { $: "JoinError", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$JoinOk = F2(
          function(a, b) {
            return { $: "JoinOk", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$JoinTimeout = F2(
          function(a, b) {
            return { $: "JoinTimeout", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Leave = F2(
          function(a, b) {
            return { $: "Leave", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$LeaveOk = function(a) {
          return { $: "LeaveOk", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$NoOp = { $: "NoOp" };
        var $phollyer$elm_phoenix_websocket$Phoenix$PresenceEvent = function(a) {
          return { $: "PresenceEvent", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$PresenceMessage = function(a) {
          return { $: "PresenceMessage", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$PushError = F4(
          function(a, b, c, d) {
            return { $: "PushError", a, b, c, d };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$PushOk = F4(
          function(a, b, c, d) {
            return { $: "PushOk", a, b, c, d };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$PushTimeout = F4(
          function(a, b, c, d) {
            return { $: "PushTimeout", a, b, c, d };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$PushTimeoutsSent = function(a) {
          return { $: "PushTimeoutsSent", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$SocketError = function(a) {
          return { $: "SocketError", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage = function(a) {
          return { $: "SocketMessage", a };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$State = F2(
          function(a, b) {
            return { $: "State", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$StateChange = function(a) {
          return { $: "StateChange", a };
        };
        var $phollyer$elm_phoenix_websocket$Internal$Config$update = $elm$core$Dict$update;
        var $phollyer$elm_phoenix_websocket$Internal$Presence$add = F3(
          function(topic, value, config) {
            return A3(
              $phollyer$elm_phoenix_websocket$Internal$Config$update,
              topic,
              function(maybeV) {
                if (maybeV.$ === "Just") {
                  var v = maybeV.a;
                  return $elm$core$Maybe$Just(
                    A2($elm$core$List$cons, value, v)
                  );
                } else {
                  return $elm$core$Maybe$Just(
                    _List_fromArray(
                      [value]
                    )
                  );
                }
              },
              config
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Presence$addDiff = F3(
          function(topic, diff_, _v0) {
            var presence = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Presence$Presence(
              _Utils_update(
                presence,
                {
                  diff: A3($phollyer$elm_phoenix_websocket$Internal$Presence$add, topic, diff_, presence.diff)
                }
              )
            );
          }
        );
        var $elm$core$Set$remove = F2(
          function(key, _v0) {
            var dict = _v0.a;
            return $elm$core$Set$Set_elm_builtin(
              A2($elm$core$Dict$remove, key, dict)
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Unique$remove = $elm$core$Set$remove;
        var $phollyer$elm_phoenix_websocket$Internal$Channel$addJoin = F2(
          function(topic, _v0) {
            var channel = _v0.a;
            var joined = channel.joined;
            var queuedJoins = channel.queuedJoins;
            return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
              _Utils_update(
                channel,
                {
                  joined: A2($phollyer$elm_phoenix_websocket$Internal$Unique$insert, topic, joined),
                  queuedJoins: A2($phollyer$elm_phoenix_websocket$Internal$Unique$remove, topic, queuedJoins)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Presence$addJoin = F3(
          function(topic, join, _v0) {
            var presence = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Presence$Presence(
              _Utils_update(
                presence,
                {
                  joins: A3($phollyer$elm_phoenix_websocket$Internal$Presence$add, topic, join, presence.joins)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Presence$addLeave = F3(
          function(topic, leave, _v0) {
            var presence = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Presence$Presence(
              _Utils_update(
                presence,
                {
                  leaves: A3($phollyer$elm_phoenix_websocket$Internal$Presence$add, topic, leave, presence.leaves)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Unique$toList = $elm$core$Set$toList;
        var $phollyer$elm_phoenix_websocket$Internal$Channel$allQueuedLeaves = function(_v0) {
          var queuedLeaves = _v0.a.queuedLeaves;
          return $phollyer$elm_phoenix_websocket$Internal$Unique$toList(queuedLeaves);
        };
        var $elm$core$Tuple$mapSecond = F2(
          function(func, _v0) {
            var x = _v0.a;
            var y = _v0.b;
            return _Utils_Tuple2(
              x,
              func(y)
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$batchCmds = F2(
          function(func, _v0) {
            var model = _v0.a;
            var cmd = _v0.b;
            return A2(
              $elm$core$Tuple$mapSecond,
              function(cmd_) {
                return $elm$core$Platform$Cmd$batch(
                  _List_fromArray(
                    [cmd, cmd_]
                  )
                );
              },
              func(model)
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$batch = F2(
          function(functions, model) {
            return A3(
              $elm$core$List$foldl,
              $phollyer$elm_phoenix_websocket$Phoenix$batchCmds,
              _Utils_Tuple2(model, $elm$core$Platform$Cmd$none),
              functions
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$batchWithParams = F2(
          function(list, model) {
            return A2(
              $phollyer$elm_phoenix_websocket$Phoenix$batch,
              $elm$core$List$concat(
                A2(
                  $elm$core$List$map,
                  function(_v0) {
                    var func = _v0.a;
                    var params = _v0.b;
                    return A2($elm$core$List$map, func, params);
                  },
                  list
                )
              ),
              model
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$Backoff = F2(
          function(a, b) {
            return { $: "Backoff", a, b };
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$currentBackoffComplete = function(config) {
          var _v0 = config.retryStrategy;
          if (_v0.$ === "Backoff") {
            var list = _v0.a;
            var max = _v0.b;
            return _Utils_update(
              config,
              {
                retryStrategy: A2(
                  $phollyer$elm_phoenix_websocket$Phoenix$Backoff,
                  A2($elm$core$List$drop, 1, list),
                  max
                )
              }
            );
          } else {
            return config;
          }
        };
        var $phollyer$elm_phoenix_websocket$Internal$Channel$dropJoin = F2(
          function(topic, _v0) {
            var channel = _v0.a;
            var joined = channel.joined;
            return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
              _Utils_update(
                channel,
                {
                  joined: A2($phollyer$elm_phoenix_websocket$Internal$Unique$remove, topic, joined)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$dropLeave = F2(
          function(topic, _v0) {
            var channel = _v0.a;
            var queuedLeaves = channel.queuedLeaves;
            return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
              _Utils_update(
                channel,
                {
                  queuedLeaves: A2($phollyer$elm_phoenix_websocket$Internal$Unique$remove, topic, queuedLeaves)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Config$remove = $elm$core$Dict$remove;
        var $phollyer$elm_phoenix_websocket$Internal$Push$dropSentByRef = F2(
          function(ref, _v0) {
            var push = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Push$Push(
              _Utils_update(
                push,
                {
                  sent: A2($phollyer$elm_phoenix_websocket$Internal$Config$remove, ref, push.sent)
                }
              )
            );
          }
        );
        var $elm$core$Dict$filter = F2(
          function(isGood, dict) {
            return A3(
              $elm$core$Dict$foldl,
              F3(
                function(k, v, d) {
                  return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
                }
              ),
              $elm$core$Dict$empty,
              dict
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Config$filter = $elm$core$Dict$filter;
        var $phollyer$elm_phoenix_websocket$Internal$Push$filter = F2(
          function(func, config) {
            return A2(
              $phollyer$elm_phoenix_websocket$Internal$Config$filter,
              F2(
                function(_v0, internalConfig) {
                  return func(internalConfig);
                }
              ),
              config
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$isTimeToRetryPush = F2(
          function(_v0, config) {
            var _v1 = config.retryStrategy;
            switch (_v1.$) {
              case "Every":
                var secs = _v1.a;
                return _Utils_eq(config.timeoutTick, secs);
              case "Backoff":
                if (_v1.a.b) {
                  var _v2 = _v1.a;
                  var head = _v2.a;
                  return _Utils_eq(config.timeoutTick, head);
                } else {
                  if (_v1.b.$ === "Just") {
                    var max = _v1.b.a;
                    return _Utils_eq(config.timeoutTick, max);
                  } else {
                    var _v3 = _v1.b;
                    return false;
                  }
                }
              default:
                return false;
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$joinConfigs = function(_v0) {
          var channel = _v0.a;
          return channel.joinConfigs;
        };
        var $phollyer$elm_phoenix_websocket$Internal$Channel$defaultLeaveConfig = function(topic) {
          return { timeout: $elm$core$Maybe$Nothing, topic };
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$leave = F2(
          function(_v0, portOut) {
            var topic = _v0.topic;
            var timeout = _v0.timeout;
            return portOut(
              {
                msg: "leave",
                payload: $elm$json$Json$Encode$object(
                  _List_fromArray(
                    [
                      _Utils_Tuple2(
                        "topic",
                        $elm$json$Json$Encode$string(topic)
                      ),
                      _Utils_Tuple2(
                        "timeout",
                        A2($elm_community$json_extra$Json$Encode$Extra$maybe, $elm$json$Json$Encode$int, timeout)
                      )
                    ]
                  )
                )
              }
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$queueLeave = F2(
          function(topic, _v0) {
            var channel = _v0.a;
            var queuedLeaves = channel.queuedLeaves;
            return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
              _Utils_update(
                channel,
                {
                  queuedLeaves: A2($phollyer$elm_phoenix_websocket$Internal$Unique$insert, topic, queuedLeaves)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$setLeaveConfig = F2(
          function(config, _v0) {
            var topic = config.topic;
            var channel = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
              _Utils_update(
                channel,
                {
                  leaveConfigs: A3($phollyer$elm_phoenix_websocket$Internal$Config$insert, topic, config, channel.leaveConfigs)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$leave = F2(
          function(topic, _v0) {
            var channel = _v0.a;
            var _v1 = A2($phollyer$elm_phoenix_websocket$Internal$Config$get, topic, channel.leaveConfigs);
            if (_v1.$ === "Just") {
              var config = _v1.a;
              return _Utils_Tuple2(
                A2(
                  $phollyer$elm_phoenix_websocket$Internal$Channel$queueLeave,
                  topic,
                  $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(channel)
                ),
                A2($phollyer$elm_phoenix_websocket$Phoenix$Channel$leave, config, channel.portOut)
              );
            } else {
              return A2(
                $phollyer$elm_phoenix_websocket$Internal$Channel$leave,
                topic,
                A2(
                  $phollyer$elm_phoenix_websocket$Internal$Channel$setLeaveConfig,
                  $phollyer$elm_phoenix_websocket$Internal$Channel$defaultLeaveConfig(topic),
                  $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(channel)
                )
              );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$leave = F2(
          function(topic, _v0) {
            var model = _v0.a;
            var _v1 = $phollyer$elm_phoenix_websocket$Internal$Socket$currentState(model.socket);
            if (_v1.$ === "Connected") {
              var _v2 = A2($phollyer$elm_phoenix_websocket$Internal$Channel$leave, topic, model.channel);
              var channel = _v2.a;
              var channelCmd = _v2.b;
              return _Utils_Tuple2(
                $phollyer$elm_phoenix_websocket$Phoenix$Model(
                  _Utils_update(
                    model,
                    { channel }
                  )
                ),
                channelCmd
              );
            } else {
              return _Utils_Tuple2(
                $phollyer$elm_phoenix_websocket$Phoenix$Model(
                  _Utils_update(
                    model,
                    {
                      channel: A2($phollyer$elm_phoenix_websocket$Internal$Channel$queueLeave, topic, model.channel)
                    }
                  )
                ),
                $elm$core$Platform$Cmd$none
              );
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$leaveConfigs = function(_v0) {
          var channel = _v0.a;
          return channel.leaveConfigs;
        };
        var $phollyer$elm_phoenix_websocket$Internal$Config$map = $elm$core$Dict$map;
        var $phollyer$elm_phoenix_websocket$Internal$Push$map = F2(
          function(func, config) {
            return A2(
              $phollyer$elm_phoenix_websocket$Internal$Config$map,
              F2(
                function(_v0, internalConfig) {
                  return func(internalConfig);
                }
              ),
              config
            );
          }
        );
        var $elm$core$Tuple$mapFirst = F2(
          function(func, _v0) {
            var x = _v0.a;
            var y = _v0.b;
            return _Utils_Tuple2(
              func(x),
              y
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Push$maybeRetryStrategy = F2(
          function(ref, _v0) {
            var push = _v0.a;
            return A2(
              $elm$core$Maybe$map,
              function($) {
                return $.retryStrategy;
              },
              A2($phollyer$elm_phoenix_websocket$Internal$Config$get, ref, push.sent)
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Socket$options = function(_v0) {
          var socket = _v0.a;
          return socket.options;
        };
        var $phollyer$elm_phoenix_websocket$Internal$Socket$params = function(_v0) {
          var socket = _v0.a;
          var _v1 = socket.params;
          if (_v1.$ === "Just") {
            var value = _v1.a;
            return value;
          } else {
            return $elm$json$Json$Encode$null;
          }
        };
        var $elm$core$Dict$partition = F2(
          function(isGood, dict) {
            var add = F3(
              function(key, value, _v0) {
                var t1 = _v0.a;
                var t2 = _v0.b;
                return A2(isGood, key, value) ? _Utils_Tuple2(
                  A3($elm$core$Dict$insert, key, value, t1),
                  t2
                ) : _Utils_Tuple2(
                  t1,
                  A3($elm$core$Dict$insert, key, value, t2)
                );
              }
            );
            return A3(
              $elm$core$Dict$foldl,
              add,
              _Utils_Tuple2($elm$core$Dict$empty, $elm$core$Dict$empty),
              dict
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Config$partition = $elm$core$Dict$partition;
        var $phollyer$elm_phoenix_websocket$Internal$Push$partition = F2(
          function(compareFunc, config) {
            return A2($phollyer$elm_phoenix_websocket$Internal$Config$partition, compareFunc, config);
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Push$partitionTimeouts = F2(
          function(compareFunc, _v0) {
            var push = _v0.a;
            return A2($phollyer$elm_phoenix_websocket$Internal$Push$partition, compareFunc, push.timeouts);
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$allQueuedJoins = function(_v0) {
          var queuedJoins = _v0.a.queuedJoins;
          return $phollyer$elm_phoenix_websocket$Internal$Unique$toList(queuedJoins);
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$queuedChannels = function(_v0) {
          var channel = _v0.a.channel;
          return $phollyer$elm_phoenix_websocket$Internal$Channel$allQueuedJoins(channel);
        };
        var $phollyer$elm_phoenix_websocket$Internal$Socket$reconnect = function(_v0) {
          var socket = _v0.a;
          return socket.reconnect;
        };
        var $phollyer$elm_phoenix_websocket$Internal$Push$resetTimeoutTick = function(timeouts) {
          return A2(
            $phollyer$elm_phoenix_websocket$Internal$Push$map,
            function(internalConfig) {
              return _Utils_update(
                internalConfig,
                { timeoutTick: 0 }
              );
            },
            timeouts
          );
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Drop = { $: "Drop" };
        var $phollyer$elm_phoenix_websocket$Phoenix$retryStrategiesToKeep = function(_v0) {
          var retryStrategy = _v0.retryStrategy;
          return !_Utils_eq(retryStrategy, $phollyer$elm_phoenix_websocket$Phoenix$Drop) && !_Utils_eq(
            retryStrategy,
            A2($phollyer$elm_phoenix_websocket$Phoenix$Backoff, _List_Nil, $elm$core$Maybe$Nothing)
          );
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$Channel$push = F2(
          function(_v0, portOut) {
            var topic = _v0.topic;
            var event = _v0.event;
            var payload = _v0.payload;
            var timeout = _v0.timeout;
            var ref = _v0.ref;
            return portOut(
              {
                msg: "push",
                payload: $elm$json$Json$Encode$object(
                  _List_fromArray(
                    [
                      _Utils_Tuple2(
                        "topic",
                        $elm$json$Json$Encode$string(topic)
                      ),
                      _Utils_Tuple2(
                        "event",
                        $elm$json$Json$Encode$string(event)
                      ),
                      _Utils_Tuple2("payload", payload),
                      _Utils_Tuple2(
                        "timeout",
                        A2($elm_community$json_extra$Json$Encode$Extra$maybe, $elm$json$Json$Encode$int, timeout)
                      ),
                      _Utils_Tuple2(
                        "ref",
                        A2($elm_community$json_extra$Json$Encode$Extra$maybe, $elm$json$Json$Encode$string, ref)
                      )
                    ]
                  )
                )
              }
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Push$batchPush = F2(
          function(internalConfig, _v0) {
            var ref = internalConfig.ref;
            var pushConfig = internalConfig.pushConfig;
            var push = _v0.a.a;
            var portOut = push.portOut;
            var cmd = _v0.b;
            return _Utils_Tuple2(
              $phollyer$elm_phoenix_websocket$Internal$Push$Push(
                _Utils_update(
                  push,
                  {
                    sent: A3($phollyer$elm_phoenix_websocket$Internal$Config$insert, ref, internalConfig, push.sent)
                  }
                )
              ),
              $elm$core$Platform$Cmd$batch(
                _List_fromArray(
                  [
                    cmd,
                    A2($phollyer$elm_phoenix_websocket$Phoenix$Channel$push, pushConfig, portOut)
                  ]
                )
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Config$toList = $elm$core$Dict$toList;
        var $phollyer$elm_phoenix_websocket$Internal$Push$sendAll = F2(
          function(config, push) {
            return A3(
              $elm$core$List$foldl,
              $phollyer$elm_phoenix_websocket$Internal$Push$batchPush,
              _Utils_Tuple2(push, $elm$core$Platform$Cmd$none),
              A2(
                $elm$core$List$map,
                $elm$core$Tuple$second,
                $phollyer$elm_phoenix_websocket$Internal$Config$toList(config)
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Push$sendByTopic = F2(
          function(topic, _v0) {
            var push = _v0.a;
            var queue = push.queue;
            var _v1 = A2(
              $phollyer$elm_phoenix_websocket$Internal$Push$partition,
              F2(
                function(_v2, _v3) {
                  var pushConfig = _v3.pushConfig;
                  return _Utils_eq(pushConfig.topic, topic);
                }
              ),
              queue
            );
            var toGo = _v1.a;
            var toKeep = _v1.b;
            return A2(
              $phollyer$elm_phoenix_websocket$Internal$Push$sendAll,
              toGo,
              $phollyer$elm_phoenix_websocket$Internal$Push$Push(
                _Utils_update(
                  push,
                  { queue: toKeep }
                )
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Socket$setOptions = F2(
          function(options_, _v0) {
            var socket = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Socket$Socket(
              _Utils_update(
                socket,
                { options: options_ }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$setConnectOptions = F2(
          function(options, _v0) {
            var model = _v0.a;
            var socket = model.socket;
            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
              _Utils_update(
                model,
                {
                  socket: A2($phollyer$elm_phoenix_websocket$Internal$Socket$setOptions, options, socket)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Socket$setParams = F2(
          function(maybeParams, _v0) {
            var socket = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Socket$Socket(
              _Utils_update(
                socket,
                { params: maybeParams }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$setConnectParams = F2(
          function(params, _v0) {
            var model = _v0.a;
            var socket = model.socket;
            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
              _Utils_update(
                model,
                {
                  socket: A2(
                    $phollyer$elm_phoenix_websocket$Internal$Socket$setParams,
                    $elm$core$Maybe$Just(params),
                    socket
                  )
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Socket$setInfo = F2(
          function(info_, _v0) {
            var socket = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Socket$Socket(
              _Utils_update(
                socket,
                { info: info_ }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$setJoinConfigs = F2(
          function(configs, _v0) {
            var channel = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
              _Utils_update(
                channel,
                { joinConfigs: configs }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$setJoinConfigs = F2(
          function(configs, _v0) {
            var model = _v0.a;
            var channel = model.channel;
            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
              _Utils_update(
                model,
                {
                  channel: A2($phollyer$elm_phoenix_websocket$Internal$Channel$setJoinConfigs, configs, channel)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Channel$setLeaveConfigs = F2(
          function(configs, _v0) {
            var channel = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Channel$Channel(
              _Utils_update(
                channel,
                { leaveConfigs: configs }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$setLeaveConfigs = F2(
          function(configs, _v0) {
            var model = _v0.a;
            var channel = model.channel;
            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
              _Utils_update(
                model,
                {
                  channel: A2($phollyer$elm_phoenix_websocket$Internal$Channel$setLeaveConfigs, configs, channel)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Presence$setState = F3(
          function(topic, state_, _v0) {
            var presence = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Presence$Presence(
              _Utils_update(
                presence,
                {
                  state: A3($phollyer$elm_phoenix_websocket$Internal$Config$insert, topic, state_, presence.state)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Push$setTimeouts = F2(
          function(timeouts, _v0) {
            var push = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Push$Push(
              _Utils_update(
                push,
                { timeouts }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Push$timedOut = F2(
          function(ref, _v0) {
            var push = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Push$Push(
              _Utils_update(
                push,
                {
                  sent: A2($phollyer$elm_phoenix_websocket$Internal$Config$remove, ref, push.sent),
                  timeouts: function() {
                    var _v1 = A2($phollyer$elm_phoenix_websocket$Internal$Config$get, ref, push.sent);
                    if (_v1.$ === "Just") {
                      var config = _v1.a;
                      return A3($phollyer$elm_phoenix_websocket$Internal$Config$insert, ref, config, push.timeouts);
                    } else {
                      return push.timeouts;
                    }
                  }()
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Push$tick = function(internalConfig) {
          return _Utils_update(
            internalConfig,
            { timeoutTick: internalConfig.timeoutTick + 1 }
          );
        };
        var $phollyer$elm_phoenix_websocket$Internal$Push$timeoutTick = function(_v0) {
          var push = _v0.a;
          return $phollyer$elm_phoenix_websocket$Internal$Push$Push(
            _Utils_update(
              push,
              {
                timeouts: A2($phollyer$elm_phoenix_websocket$Internal$Push$map, $phollyer$elm_phoenix_websocket$Internal$Push$tick, push.timeouts)
              }
            )
          );
        };
        var $phollyer$elm_phoenix_websocket$Internal$Config$values = $elm$core$Dict$values;
        var $phollyer$elm_phoenix_websocket$Internal$Push$toConfigs = function(config) {
          return A2(
            $elm$core$List$map,
            function(internalConfig) {
              return internalConfig.pushConfig;
            },
            $phollyer$elm_phoenix_websocket$Internal$Config$values(config)
          );
        };
        var $phollyer$elm_phoenix_websocket$Phoenix$toPhoenixMsg = F2(
          function(phoenixMsg, _v0) {
            var model = _v0.a;
            var cmd = _v0.b;
            return _Utils_Tuple3(model, cmd, phoenixMsg);
          }
        );
        var $phollyer$elm_phoenix_websocket$Internal$Socket$setDisconnectReason = F2(
          function(maybeReason, _v0) {
            var socket = _v0.a;
            return $phollyer$elm_phoenix_websocket$Internal$Socket$Socket(
              _Utils_update(
                socket,
                { disconnectReason: maybeReason }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$updateDisconnectReason = F2(
          function(maybeReason, _v0) {
            var model = _v0.a;
            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
              _Utils_update(
                model,
                {
                  socket: A2($phollyer$elm_phoenix_websocket$Internal$Socket$setDisconnectReason, maybeReason, model.socket)
                }
              )
            );
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$update = F2(
          function(msg, _v0) {
            var model = _v0.a;
            switch (msg.$) {
              case "TimeoutTick":
                var _v2 = A2(
                  $elm$core$Tuple$mapSecond,
                  $phollyer$elm_phoenix_websocket$Internal$Push$filter($phollyer$elm_phoenix_websocket$Phoenix$retryStrategiesToKeep),
                  A2(
                    $elm$core$Tuple$mapFirst,
                    $phollyer$elm_phoenix_websocket$Internal$Push$map($phollyer$elm_phoenix_websocket$Phoenix$currentBackoffComplete),
                    A2(
                      $elm$core$Tuple$mapFirst,
                      $phollyer$elm_phoenix_websocket$Internal$Push$resetTimeoutTick,
                      A2(
                        $phollyer$elm_phoenix_websocket$Internal$Push$partitionTimeouts,
                        $phollyer$elm_phoenix_websocket$Phoenix$isTimeToRetryPush,
                        $phollyer$elm_phoenix_websocket$Internal$Push$timeoutTick(model.push)
                      )
                    )
                  )
                );
                var toSend = _v2.a;
                var toKeep = _v2.b;
                var _v3 = A2($phollyer$elm_phoenix_websocket$Internal$Push$sendAll, toSend, model.push);
                var push_ = _v3.a;
                var pushCmd = _v3.b;
                return _Utils_Tuple3(
                  $phollyer$elm_phoenix_websocket$Phoenix$Model(
                    _Utils_update(
                      model,
                      {
                        push: A2($phollyer$elm_phoenix_websocket$Internal$Push$setTimeouts, toKeep, push_)
                      }
                    )
                  ),
                  pushCmd,
                  function() {
                    var _v4 = $phollyer$elm_phoenix_websocket$Internal$Push$toConfigs(toSend);
                    if (!_v4.b) {
                      return $phollyer$elm_phoenix_websocket$Phoenix$NoOp;
                    } else {
                      var configs = _v4;
                      return $phollyer$elm_phoenix_websocket$Phoenix$PushTimeoutsSent(configs);
                    }
                  }()
                );
              case "ReceivedSocketMsg":
                var subMsg = msg.a;
                switch (subMsg.$) {
                  case "Opened":
                    return A2(
                      $phollyer$elm_phoenix_websocket$Phoenix$toPhoenixMsg,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$StateChange($phollyer$elm_phoenix_websocket$Phoenix$Connected)
                      ),
                      A2(
                        $phollyer$elm_phoenix_websocket$Phoenix$batchWithParams,
                        _List_fromArray(
                          [
                            _Utils_Tuple2(
                              $phollyer$elm_phoenix_websocket$Phoenix$join,
                              $phollyer$elm_phoenix_websocket$Phoenix$queuedChannels(
                                $phollyer$elm_phoenix_websocket$Phoenix$Model(model)
                              )
                            ),
                            _Utils_Tuple2(
                              $phollyer$elm_phoenix_websocket$Phoenix$leave,
                              $phollyer$elm_phoenix_websocket$Internal$Channel$allQueuedLeaves(model.channel)
                            )
                          ]
                        ),
                        A2(
                          $phollyer$elm_phoenix_websocket$Phoenix$updateSocketState,
                          $phollyer$elm_phoenix_websocket$Phoenix$Connected,
                          A2(
                            $phollyer$elm_phoenix_websocket$Phoenix$updateDisconnectReason,
                            $elm$core$Maybe$Nothing,
                            $phollyer$elm_phoenix_websocket$Phoenix$Model(
                              _Utils_update(
                                model,
                                {
                                  socket: A2($phollyer$elm_phoenix_websocket$Internal$Socket$setReconnect, false, model.socket)
                                }
                              )
                            )
                          )
                        )
                      )
                    );
                  case "Closed":
                    var closedInfo = subMsg.a;
                    return $phollyer$elm_phoenix_websocket$Internal$Socket$reconnect(model.socket) ? A2(
                      $phollyer$elm_phoenix_websocket$Phoenix$toPhoenixMsg,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$StateChange(
                          $phollyer$elm_phoenix_websocket$Phoenix$Disconnected(closedInfo)
                        )
                      ),
                      $phollyer$elm_phoenix_websocket$Phoenix$connect(
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model)
                      )
                    ) : _Utils_eq(
                      $phollyer$elm_phoenix_websocket$Internal$Socket$currentState(model.socket),
                      $phollyer$elm_phoenix_websocket$Phoenix$Disconnecting
                    ) ? _Utils_Tuple3(
                      A2(
                        $phollyer$elm_phoenix_websocket$Phoenix$setLeaveConfigs,
                        $phollyer$elm_phoenix_websocket$Internal$Channel$leaveConfigs(model.channel),
                        A2(
                          $phollyer$elm_phoenix_websocket$Phoenix$setJoinConfigs,
                          $phollyer$elm_phoenix_websocket$Internal$Channel$joinConfigs(model.channel),
                          A2(
                            $phollyer$elm_phoenix_websocket$Phoenix$setConnectParams,
                            $phollyer$elm_phoenix_websocket$Internal$Socket$params(model.socket),
                            A2(
                              $phollyer$elm_phoenix_websocket$Phoenix$setConnectOptions,
                              $phollyer$elm_phoenix_websocket$Internal$Socket$options(model.socket),
                              $phollyer$elm_phoenix_websocket$Phoenix$init(model.portConfig)
                            )
                          )
                        )
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$StateChange(
                          $phollyer$elm_phoenix_websocket$Phoenix$Disconnected(closedInfo)
                        )
                      )
                    ) : A2(
                      $phollyer$elm_phoenix_websocket$Phoenix$toPhoenixMsg,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$StateChange(
                          $phollyer$elm_phoenix_websocket$Phoenix$Disconnected(closedInfo)
                        )
                      ),
                      A2(
                        $phollyer$elm_phoenix_websocket$Phoenix$batchWithParams,
                        _List_fromArray(
                          [
                            _Utils_Tuple2(
                              $phollyer$elm_phoenix_websocket$Phoenix$join,
                              $phollyer$elm_phoenix_websocket$Phoenix$queuedChannels(
                                $phollyer$elm_phoenix_websocket$Phoenix$Model(model)
                              )
                            )
                          ]
                        ),
                        A2(
                          $phollyer$elm_phoenix_websocket$Phoenix$updateSocketState,
                          $phollyer$elm_phoenix_websocket$Phoenix$Disconnected(closedInfo),
                          A2(
                            $phollyer$elm_phoenix_websocket$Phoenix$updateDisconnectReason,
                            closedInfo.reason,
                            $phollyer$elm_phoenix_websocket$Phoenix$Model(model)
                          )
                        )
                      )
                    );
                  case "Connecting":
                    return _Utils_Tuple3(
                      A2(
                        $phollyer$elm_phoenix_websocket$Phoenix$updateSocketState,
                        $phollyer$elm_phoenix_websocket$Phoenix$Connecting,
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model)
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$StateChange($phollyer$elm_phoenix_websocket$Phoenix$Connecting)
                      )
                    );
                  case "Disconnecting":
                    return _Utils_Tuple3(
                      A2(
                        $phollyer$elm_phoenix_websocket$Phoenix$updateSocketState,
                        $phollyer$elm_phoenix_websocket$Phoenix$Disconnecting,
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model)
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$StateChange($phollyer$elm_phoenix_websocket$Phoenix$Disconnecting)
                      )
                    );
                  case "Channel":
                    var message = subMsg.a;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$ChannelMessage(message)
                      )
                    );
                  case "Presence":
                    var message = subMsg.a;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$PresenceMessage(message)
                      )
                    );
                  case "Heartbeat":
                    var message = subMsg.a;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$Heartbeat(message)
                      )
                    );
                  case "Info":
                    var socketInfo = subMsg.a;
                    if (socketInfo.$ === "All") {
                      var info = socketInfo.a;
                      return _Utils_Tuple3(
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(
                          _Utils_update(
                            model,
                            {
                              socket: A2($phollyer$elm_phoenix_websocket$Internal$Socket$setInfo, info, model.socket)
                            }
                          )
                        ),
                        $elm$core$Platform$Cmd$none,
                        $phollyer$elm_phoenix_websocket$Phoenix$NoOp
                      );
                    } else {
                      return _Utils_Tuple3(
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                        $elm$core$Platform$Cmd$none,
                        $phollyer$elm_phoenix_websocket$Phoenix$NoOp
                      );
                    }
                  case "Error":
                    var reason = subMsg.a;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$SocketMessage(
                        $phollyer$elm_phoenix_websocket$Phoenix$SocketError(reason)
                      )
                    );
                  default:
                    var errorType = subMsg.a;
                    if (errorType.$ === "DecoderError") {
                      var error = errorType.a;
                      return _Utils_Tuple3(
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                        $elm$core$Platform$Cmd$none,
                        $phollyer$elm_phoenix_websocket$Phoenix$InternalError(
                          $phollyer$elm_phoenix_websocket$Phoenix$DecoderError("Socket : " + error)
                        )
                      );
                    } else {
                      var error = errorType.a;
                      return _Utils_Tuple3(
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                        $elm$core$Platform$Cmd$none,
                        $phollyer$elm_phoenix_websocket$Phoenix$InternalError(
                          $phollyer$elm_phoenix_websocket$Phoenix$InvalidMessage("Socket : " + error)
                        )
                      );
                    }
                }
              case "ReceivedChannelMsg":
                var channelMsg = msg.a;
                switch (channelMsg.$) {
                  case "Closed":
                    var topic = channelMsg.a;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse(
                        $phollyer$elm_phoenix_websocket$Phoenix$ChannelClosed(topic)
                      )
                    );
                  case "Error":
                    var topic = channelMsg.a;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse(
                        $phollyer$elm_phoenix_websocket$Phoenix$ChannelError(topic)
                      )
                    );
                  case "JoinError":
                    var topic = channelMsg.a;
                    var payload = channelMsg.b;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse(
                        A2($phollyer$elm_phoenix_websocket$Phoenix$JoinError, topic, payload)
                      )
                    );
                  case "JoinOk":
                    var topic = channelMsg.a;
                    var payload = channelMsg.b;
                    var _v9 = A2($phollyer$elm_phoenix_websocket$Internal$Push$sendByTopic, topic, model.push);
                    var push_ = _v9.a;
                    var pushCmd = _v9.b;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(
                        _Utils_update(
                          model,
                          {
                            channel: A2($phollyer$elm_phoenix_websocket$Internal$Channel$addJoin, topic, model.channel),
                            push: push_
                          }
                        )
                      ),
                      pushCmd,
                      $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse(
                        A2($phollyer$elm_phoenix_websocket$Phoenix$JoinOk, topic, payload)
                      )
                    );
                  case "JoinTimeout":
                    var topic = channelMsg.a;
                    var payload = channelMsg.b;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse(
                        A2($phollyer$elm_phoenix_websocket$Phoenix$JoinTimeout, topic, payload)
                      )
                    );
                  case "LeaveOk":
                    var topic = channelMsg.a;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(
                        _Utils_update(
                          model,
                          {
                            channel: A2(
                              $phollyer$elm_phoenix_websocket$Internal$Channel$dropJoin,
                              topic,
                              A2($phollyer$elm_phoenix_websocket$Internal$Channel$dropLeave, topic, model.channel)
                            )
                          }
                        )
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse(
                        $phollyer$elm_phoenix_websocket$Phoenix$LeaveOk(topic)
                      )
                    );
                  case "Message":
                    var topic = channelMsg.a;
                    var event = channelMsg.b;
                    var payload = channelMsg.c;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                      $elm$core$Platform$Cmd$none,
                      A3($phollyer$elm_phoenix_websocket$Phoenix$ChannelEvent, topic, event, payload)
                    );
                  case "PushError":
                    var topic = channelMsg.a;
                    var event = channelMsg.b;
                    var payload = channelMsg.c;
                    var ref = channelMsg.d;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(
                        _Utils_update(
                          model,
                          {
                            push: A2($phollyer$elm_phoenix_websocket$Internal$Push$dropSentByRef, ref, model.push)
                          }
                        )
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse(
                        A4(
                          $phollyer$elm_phoenix_websocket$Phoenix$PushError,
                          topic,
                          event,
                          $elm$core$Maybe$Just(ref),
                          payload
                        )
                      )
                    );
                  case "PushOk":
                    var topic = channelMsg.a;
                    var event = channelMsg.b;
                    var payload = channelMsg.c;
                    var ref = channelMsg.d;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(
                        _Utils_update(
                          model,
                          {
                            push: A2($phollyer$elm_phoenix_websocket$Internal$Push$dropSentByRef, ref, model.push)
                          }
                        )
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse(
                        A4(
                          $phollyer$elm_phoenix_websocket$Phoenix$PushOk,
                          topic,
                          event,
                          $elm$core$Maybe$Just(ref),
                          payload
                        )
                      )
                    );
                  case "PushTimeout":
                    var topic = channelMsg.a;
                    var event = channelMsg.b;
                    var payload = channelMsg.c;
                    var ref = channelMsg.d;
                    return _Utils_Tuple3(
                      function() {
                        var _v10 = A2($phollyer$elm_phoenix_websocket$Internal$Push$maybeRetryStrategy, ref, model.push);
                        if (_v10.$ === "Just") {
                          if (_v10.a.$ === "Drop") {
                            var _v11 = _v10.a;
                            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
                              _Utils_update(
                                model,
                                {
                                  push: A2($phollyer$elm_phoenix_websocket$Internal$Push$dropSentByRef, ref, model.push)
                                }
                              )
                            );
                          } else {
                            return $phollyer$elm_phoenix_websocket$Phoenix$Model(
                              _Utils_update(
                                model,
                                {
                                  push: A2($phollyer$elm_phoenix_websocket$Internal$Push$timedOut, ref, model.push)
                                }
                              )
                            );
                          }
                        } else {
                          return $phollyer$elm_phoenix_websocket$Phoenix$Model(
                            _Utils_update(
                              model,
                              {
                                push: A2($phollyer$elm_phoenix_websocket$Internal$Push$dropSentByRef, ref, model.push)
                              }
                            )
                          );
                        }
                      }(),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$ChannelResponse(
                        A4(
                          $phollyer$elm_phoenix_websocket$Phoenix$PushTimeout,
                          topic,
                          event,
                          $elm$core$Maybe$Just(ref),
                          payload
                        )
                      )
                    );
                  default:
                    var errorType = channelMsg.a;
                    if (errorType.$ === "DecoderError") {
                      var error = errorType.a;
                      return _Utils_Tuple3(
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                        $elm$core$Platform$Cmd$none,
                        $phollyer$elm_phoenix_websocket$Phoenix$InternalError(
                          $phollyer$elm_phoenix_websocket$Phoenix$DecoderError("Channel : " + error)
                        )
                      );
                    } else {
                      var topic = errorType.a;
                      var error = errorType.b;
                      return _Utils_Tuple3(
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                        $elm$core$Platform$Cmd$none,
                        $phollyer$elm_phoenix_websocket$Phoenix$InternalError(
                          $phollyer$elm_phoenix_websocket$Phoenix$InvalidMessage("Channel : " + (topic + (" : " + error)))
                        )
                      );
                    }
                }
              default:
                var presenceMsg = msg.a;
                switch (presenceMsg.$) {
                  case "Diff":
                    var topic = presenceMsg.a;
                    var diff = presenceMsg.b;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(
                        _Utils_update(
                          model,
                          {
                            presence: A3($phollyer$elm_phoenix_websocket$Internal$Presence$addDiff, topic, diff, model.presence)
                          }
                        )
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$PresenceEvent(
                        A2($phollyer$elm_phoenix_websocket$Phoenix$Diff, topic, diff)
                      )
                    );
                  case "Join":
                    var topic = presenceMsg.a;
                    var presence = presenceMsg.b;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(
                        _Utils_update(
                          model,
                          {
                            presence: A3($phollyer$elm_phoenix_websocket$Internal$Presence$addJoin, topic, presence, model.presence)
                          }
                        )
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$PresenceEvent(
                        A2($phollyer$elm_phoenix_websocket$Phoenix$Join, topic, presence)
                      )
                    );
                  case "Leave":
                    var topic = presenceMsg.a;
                    var presence = presenceMsg.b;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(
                        _Utils_update(
                          model,
                          {
                            presence: A3($phollyer$elm_phoenix_websocket$Internal$Presence$addLeave, topic, presence, model.presence)
                          }
                        )
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$PresenceEvent(
                        A2($phollyer$elm_phoenix_websocket$Phoenix$Leave, topic, presence)
                      )
                    );
                  case "State":
                    var topic = presenceMsg.a;
                    var state = presenceMsg.b;
                    return _Utils_Tuple3(
                      $phollyer$elm_phoenix_websocket$Phoenix$Model(
                        _Utils_update(
                          model,
                          {
                            presence: A3($phollyer$elm_phoenix_websocket$Internal$Presence$setState, topic, state, model.presence)
                          }
                        )
                      ),
                      $elm$core$Platform$Cmd$none,
                      $phollyer$elm_phoenix_websocket$Phoenix$PresenceEvent(
                        A2($phollyer$elm_phoenix_websocket$Phoenix$State, topic, state)
                      )
                    );
                  default:
                    var errorType = presenceMsg.a;
                    if (errorType.$ === "DecoderError") {
                      var error = errorType.a;
                      return _Utils_Tuple3(
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                        $elm$core$Platform$Cmd$none,
                        $phollyer$elm_phoenix_websocket$Phoenix$InternalError(
                          $phollyer$elm_phoenix_websocket$Phoenix$DecoderError("Presence : " + error)
                        )
                      );
                    } else {
                      var topic = errorType.a;
                      var error = errorType.b;
                      return _Utils_Tuple3(
                        $phollyer$elm_phoenix_websocket$Phoenix$Model(model),
                        $elm$core$Platform$Cmd$none,
                        $phollyer$elm_phoenix_websocket$Phoenix$InternalError(
                          $phollyer$elm_phoenix_websocket$Phoenix$InvalidMessage("Presence : " + (topic + (" : " + error)))
                        )
                      );
                    }
                }
            }
          }
        );
        var $phollyer$elm_phoenix_websocket$Phoenix$updateWith = F3(
          function(toMsg, model, _v0) {
            var phoenix = _v0.a;
            var phoenixCmd = _v0.b;
            var phoenixMsg = _v0.c;
            return _Utils_Tuple3(
              _Utils_update(
                model,
                { phoenix }
              ),
              A2($elm$core$Platform$Cmd$map, toMsg, phoenixCmd),
              phoenixMsg
            );
          }
        );
        var $mdgriffith$elm_style_animation$Animation$wait = function(till) {
          return $mdgriffith$elm_style_animation$Animation$Model$Wait(till);
        };
        var $author$project$Main$WebsocketMessage = F2(
          function(action, payload) {
            return { action, payload };
          }
        );
        var $author$project$Main$websocketMessageDecoder = A3(
          $elm$json$Json$Decode$map2,
          $author$project$Main$WebsocketMessage,
          A2($elm$json$Json$Decode$field, "action", $elm$json$Json$Decode$string),
          A2($elm$json$Json$Decode$field, "payload", $elm$json$Json$Decode$string)
        );
        var $author$project$Main$update = F2(
          function(msg, model) {
            switch (msg.$) {
              case "Animate":
                var animMsg = msg.a;
                var newMarqueeStyle = A2($mdgriffith$elm_style_animation$Animation$update, animMsg, model.marqueeStyle);
                var newCurrentSongStyle = A2($mdgriffith$elm_style_animation$Animation$update, animMsg, model.currentSongStyle);
                return _Utils_Tuple2(
                  _Utils_update(
                    model,
                    { currentSongStyle: newCurrentSongStyle, marqueeStyle: newMarqueeStyle }
                  ),
                  $elm$core$Platform$Cmd$none
                );
              case "PhoenixMsg":
                var subMsg = msg.a;
                var _v1 = A3(
                  $phollyer$elm_phoenix_websocket$Phoenix$updateWith,
                  $author$project$Main$PhoenixMsg,
                  model,
                  A2($phollyer$elm_phoenix_websocket$Phoenix$update, subMsg, model.phoenix)
                );
                var newModel = _v1.a;
                var cmd = _v1.b;
                var phoenixMsg = _v1.c;
                if (phoenixMsg.$ === "ChannelEvent") {
                  var topic = phoenixMsg.a;
                  var event = phoenixMsg.b;
                  var payload = phoenixMsg.c;
                  var _v3 = A2(
                    $elm$core$Debug$log,
                    "* topic, event, payload:",
                    _Utils_Tuple3(topic, event, payload)
                  );
                  return _Utils_Tuple2(newModel, cmd);
                } else {
                  return _Utils_Tuple2(newModel, cmd);
                }
              default:
                var message = msg.a;
                var _v4 = A2($elm$json$Json$Decode$decodeString, $author$project$Main$websocketMessageDecoder, message);
                if (_v4.$ === "Ok") {
                  var ws = _v4.a;
                  var _v5 = ws.action;
                  switch (_v5) {
                    case "spotify_music_updated":
                      var _v6 = A2($elm$json$Json$Decode$decodeString, $author$project$Main$songInfoDecoder, ws.payload);
                      if (_v6.$ === "Ok") {
                        var song = _v6.a;
                        var newCurrentSongStyle = A2(
                          $mdgriffith$elm_style_animation$Animation$interrupt,
                          _List_fromArray(
                            [
                              $mdgriffith$elm_style_animation$Animation$to(
                                _List_fromArray(
                                  [
                                    A2(
                                      $mdgriffith$elm_style_animation$Animation$translate,
                                      $mdgriffith$elm_style_animation$Animation$percent(0),
                                      $mdgriffith$elm_style_animation$Animation$percent(0)
                                    )
                                  ]
                                )
                              ),
                              $mdgriffith$elm_style_animation$Animation$wait(
                                $elm$time$Time$millisToPosix(8 * 1e3)
                              ),
                              $mdgriffith$elm_style_animation$Animation$to(
                                _List_fromArray(
                                  [
                                    A2(
                                      $mdgriffith$elm_style_animation$Animation$translate,
                                      $mdgriffith$elm_style_animation$Animation$percent(115),
                                      $mdgriffith$elm_style_animation$Animation$percent(0)
                                    )
                                  ]
                                )
                              )
                            ]
                          ),
                          model.currentSongStyle
                        );
                        return _Utils_Tuple2(
                          _Utils_update(
                            model,
                            { currentSong: song, currentSongStyle: newCurrentSongStyle }
                          ),
                          $elm$core$Platform$Cmd$none
                        );
                      } else {
                        return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                      }
                    case "tts_created":
                      return _Utils_Tuple2(
                        model,
                        $author$project$Main$playUrl(ws.payload)
                      );
                    case "marquee_updated":
                      var newMarqueeStyle = A2(
                        $mdgriffith$elm_style_animation$Animation$interrupt,
                        _List_fromArray(
                          [
                            $mdgriffith$elm_style_animation$Animation$loop(
                              _List_fromArray(
                                [
                                  $mdgriffith$elm_style_animation$Animation$to(
                                    _List_fromArray(
                                      [
                                        A2(
                                          $mdgriffith$elm_style_animation$Animation$translate,
                                          $mdgriffith$elm_style_animation$Animation$percent(0),
                                          $mdgriffith$elm_style_animation$Animation$percent(0)
                                        )
                                      ]
                                    )
                                  ),
                                  $mdgriffith$elm_style_animation$Animation$wait(
                                    $elm$time$Time$millisToPosix(60 * 1e3)
                                  ),
                                  $mdgriffith$elm_style_animation$Animation$to(
                                    _List_fromArray(
                                      [
                                        A2(
                                          $mdgriffith$elm_style_animation$Animation$translate,
                                          $mdgriffith$elm_style_animation$Animation$percent(0),
                                          $mdgriffith$elm_style_animation$Animation$percent(100)
                                        )
                                      ]
                                    )
                                  ),
                                  $mdgriffith$elm_style_animation$Animation$wait(
                                    $elm$time$Time$millisToPosix(30 * 1e3)
                                  )
                                ]
                              )
                            )
                          ]
                        ),
                        model.marqueeStyle
                      );
                      return _Utils_Tuple2(
                        _Utils_update(
                          model,
                          { marqueeMessage: ws.payload, marqueeStyle: newMarqueeStyle }
                        ),
                        $elm$core$Platform$Cmd$none
                      );
                    default:
                      return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                  }
                } else {
                  return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
                }
            }
          }
        );
        var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
        var $mdgriffith$elm_style_animation$Animation$Render$iePrefix = "-ms-";
        var $mdgriffith$elm_style_animation$Animation$Render$webkitPrefix = "-webkit-";
        var $mdgriffith$elm_style_animation$Animation$Render$prefix = function(stylePair) {
          var propValue = stylePair.b;
          var propName = stylePair.a;
          switch (propName) {
            case "transform":
              return _List_fromArray(
                [
                  stylePair,
                  _Utils_Tuple2(
                    _Utils_ap($mdgriffith$elm_style_animation$Animation$Render$iePrefix, propName),
                    propValue
                  ),
                  _Utils_Tuple2(
                    _Utils_ap($mdgriffith$elm_style_animation$Animation$Render$webkitPrefix, propName),
                    propValue
                  )
                ]
              );
            case "transform-origin":
              return _List_fromArray(
                [
                  stylePair,
                  _Utils_Tuple2(
                    _Utils_ap($mdgriffith$elm_style_animation$Animation$Render$iePrefix, propName),
                    propValue
                  ),
                  _Utils_Tuple2(
                    _Utils_ap($mdgriffith$elm_style_animation$Animation$Render$webkitPrefix, propName),
                    propValue
                  )
                ]
              );
            case "filter":
              return _List_fromArray(
                [
                  stylePair,
                  _Utils_Tuple2(
                    _Utils_ap($mdgriffith$elm_style_animation$Animation$Render$iePrefix, propName),
                    propValue
                  ),
                  _Utils_Tuple2(
                    _Utils_ap($mdgriffith$elm_style_animation$Animation$Render$webkitPrefix, propName),
                    propValue
                  )
                ]
              );
            default:
              return _List_fromArray(
                [stylePair]
              );
          }
        };
        var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute("cx");
        var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute("cy");
        var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute("d");
        var $elm$svg$Svg$Attributes$offset = _VirtualDom_attribute("offset");
        var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute("points");
        var $elm$core$Basics$cos = _Basics_cos;
        var $elm$core$Basics$pi = _Basics_pi;
        var $elm$core$Basics$degrees = function(angleInDegrees) {
          return angleInDegrees * $elm$core$Basics$pi / 180;
        };
        var $elm$core$Basics$sin = _Basics_sin;
        var $mdgriffith$elm_style_animation$Animation$Render$pathCmdValue = function(cmd) {
          var renderPoints = function(coords) {
            return A2(
              $elm$core$String$join,
              " ",
              A2(
                $elm$core$List$map,
                function(_v11) {
                  var x2 = _v11.a;
                  var y2 = _v11.b;
                  return $elm$core$String$fromFloat(x2.position) + ("," + $elm$core$String$fromFloat(y2.position));
                },
                coords
              )
            );
          };
          switch (cmd.$) {
            case "Move":
              var x = cmd.a;
              var y = cmd.b;
              return "m " + ($elm$core$String$fromFloat(x.position) + ("," + $elm$core$String$fromFloat(y.position)));
            case "MoveTo":
              var x = cmd.a;
              var y = cmd.b;
              return "M " + ($elm$core$String$fromFloat(x.position) + ("," + $elm$core$String$fromFloat(y.position)));
            case "Line":
              var x = cmd.a;
              var y = cmd.b;
              return "l " + ($elm$core$String$fromFloat(x.position) + ("," + $elm$core$String$fromFloat(y.position)));
            case "LineTo":
              var x = cmd.a;
              var y = cmd.b;
              return "L " + ($elm$core$String$fromFloat(x.position) + ("," + $elm$core$String$fromFloat(y.position)));
            case "Horizontal":
              var a = cmd.a;
              return "h " + $elm$core$String$fromFloat(a.position);
            case "HorizontalTo":
              var a = cmd.a;
              return "H " + $elm$core$String$fromFloat(a.position);
            case "Vertical":
              var a = cmd.a;
              return "v " + $elm$core$String$fromFloat(a.position);
            case "VerticalTo":
              var a = cmd.a;
              return "V " + $elm$core$String$fromFloat(a.position);
            case "Curve":
              var control1 = cmd.a.control1;
              var control2 = cmd.a.control2;
              var point = cmd.a.point;
              var _v1 = point;
              var p1x = _v1.a;
              var p1y = _v1.b;
              var _v2 = control2;
              var c2x = _v2.a;
              var c2y = _v2.b;
              var _v3 = control1;
              var c1x = _v3.a;
              var c1y = _v3.b;
              return "c " + ($elm$core$String$fromFloat(c1x.position) + (" " + ($elm$core$String$fromFloat(c1y.position) + (", " + ($elm$core$String$fromFloat(c2x.position) + (" " + ($elm$core$String$fromFloat(c2y.position) + (", " + ($elm$core$String$fromFloat(p1x.position) + (" " + $elm$core$String$fromFloat(p1y.position)))))))))));
            case "CurveTo":
              var control1 = cmd.a.control1;
              var control2 = cmd.a.control2;
              var point = cmd.a.point;
              var _v4 = point;
              var p1x = _v4.a;
              var p1y = _v4.b;
              var _v5 = control2;
              var c2x = _v5.a;
              var c2y = _v5.b;
              var _v6 = control1;
              var c1x = _v6.a;
              var c1y = _v6.b;
              return "C " + ($elm$core$String$fromFloat(c1x.position) + (" " + ($elm$core$String$fromFloat(c1y.position) + (", " + ($elm$core$String$fromFloat(c2x.position) + (" " + ($elm$core$String$fromFloat(c2y.position) + (", " + ($elm$core$String$fromFloat(p1x.position) + (" " + $elm$core$String$fromFloat(p1y.position)))))))))));
            case "Quadratic":
              var control = cmd.a.control;
              var point = cmd.a.point;
              var _v7 = point;
              var p1x = _v7.a;
              var p1y = _v7.b;
              var _v8 = control;
              var c1x = _v8.a;
              var c1y = _v8.b;
              return "q " + ($elm$core$String$fromFloat(c1x.position) + (" " + ($elm$core$String$fromFloat(c1y.position) + (", " + ($elm$core$String$fromFloat(p1x.position) + (" " + $elm$core$String$fromFloat(p1y.position)))))));
            case "QuadraticTo":
              var control = cmd.a.control;
              var point = cmd.a.point;
              var _v9 = point;
              var p1x = _v9.a;
              var p1y = _v9.b;
              var _v10 = control;
              var c1x = _v10.a;
              var c1y = _v10.b;
              return "Q " + ($elm$core$String$fromFloat(c1x.position) + (" " + ($elm$core$String$fromFloat(c1y.position) + (", " + ($elm$core$String$fromFloat(p1x.position) + (" " + $elm$core$String$fromFloat(p1y.position)))))));
            case "SmoothQuadratic":
              var points = cmd.a;
              return "t " + renderPoints(points);
            case "SmoothQuadraticTo":
              var points = cmd.a;
              return "T " + renderPoints(points);
            case "Smooth":
              var points = cmd.a;
              return "s " + renderPoints(points);
            case "SmoothTo":
              var points = cmd.a;
              return "S " + renderPoints(points);
            case "ClockwiseArc":
              var arc = cmd.a;
              var deltaAngle = arc.endAngle.position - arc.startAngle.position;
              if (_Utils_cmp(deltaAngle, 360 - 1e-6) > 0) {
                var dy = arc.radius.position * $elm$core$Basics$sin(
                  $elm$core$Basics$degrees(arc.startAngle.position)
                );
                var dx = arc.radius.position * $elm$core$Basics$cos(
                  $elm$core$Basics$degrees(arc.startAngle.position)
                );
                return "A " + ($elm$core$String$fromFloat(arc.radius.position) + ("," + ($elm$core$String$fromFloat(arc.radius.position) + (",0,1,1," + ($elm$core$String$fromFloat(arc.x.position - dx) + ("," + ($elm$core$String$fromFloat(arc.y.position - dy) + (" A " + ($elm$core$String$fromFloat(arc.radius.position) + ("," + ($elm$core$String$fromFloat(arc.radius.position) + (",0,1,1," + ($elm$core$String$fromFloat(arc.x.position + dx) + ("," + $elm$core$String$fromFloat(arc.y.position + dy)))))))))))))));
              } else {
                return "A " + ($elm$core$String$fromFloat(arc.radius.position) + ("," + ($elm$core$String$fromFloat(arc.radius.position) + (" 0 " + ((deltaAngle >= 180 ? "1" : "0") + (" " + ("1" + (" " + ($elm$core$String$fromFloat(
                  arc.x.position + arc.radius.position * $elm$core$Basics$cos(
                    $elm$core$Basics$degrees(arc.endAngle.position)
                  )
                ) + ("," + $elm$core$String$fromFloat(
                  arc.y.position + arc.radius.position * $elm$core$Basics$sin(
                    $elm$core$Basics$degrees(arc.endAngle.position)
                  )
                )))))))))));
              }
            case "AntiClockwiseArc":
              var arc = cmd.a;
              var deltaAngle = arc.endAngle.position - arc.startAngle.position;
              if (_Utils_cmp(deltaAngle, 360 - 1e-6) > 0) {
                var dy = arc.radius.position * $elm$core$Basics$sin(
                  $elm$core$Basics$degrees(arc.startAngle.position)
                );
                var dx = arc.radius.position * $elm$core$Basics$cos(
                  $elm$core$Basics$degrees(arc.startAngle.position)
                );
                return "A " + ($elm$core$String$fromFloat(arc.radius.position) + ("," + ($elm$core$String$fromFloat(arc.radius.position) + (",0,1,0," + ($elm$core$String$fromFloat(arc.x.position - dx) + ("," + ($elm$core$String$fromFloat(arc.y.position - dy) + (" A " + ($elm$core$String$fromFloat(arc.radius.position) + ("," + ($elm$core$String$fromFloat(arc.radius.position) + (",0,1,1," + ($elm$core$String$fromFloat(arc.x.position + dx) + ("," + $elm$core$String$fromFloat(arc.y.position + dy)))))))))))))));
              } else {
                return "A " + ($elm$core$String$fromFloat(arc.radius.position) + ("," + ($elm$core$String$fromFloat(arc.radius.position) + (" 0 " + ((arc.startAngle.position - arc.endAngle.position >= 180 ? "1" : "0") + (" " + ("0" + (" " + ($elm$core$String$fromFloat(
                  arc.x.position + arc.radius.position * $elm$core$Basics$cos(arc.endAngle.position)
                ) + ("," + $elm$core$String$fromFloat(
                  arc.y.position + arc.radius.position * $elm$core$Basics$sin(arc.endAngle.position)
                )))))))))));
              }
            default:
              return "z";
          }
        };
        var $mdgriffith$elm_style_animation$Animation$Render$propertyValue = F2(
          function(prop, delim) {
            switch (prop.$) {
              case "ExactProperty":
                var value = prop.b;
                return value;
              case "ColorProperty":
                var r = prop.b;
                var g = prop.c;
                var b = prop.d;
                var a = prop.e;
                return "rgba(" + ($elm$core$String$fromInt(
                  $elm$core$Basics$round(r.position)
                ) + ("," + ($elm$core$String$fromInt(
                  $elm$core$Basics$round(g.position)
                ) + ("," + ($elm$core$String$fromInt(
                  $elm$core$Basics$round(b.position)
                ) + ("," + ($elm$core$String$fromFloat(a.position) + ")")))))));
              case "ShadowProperty":
                var name = prop.a;
                var inset = prop.b;
                var shadow = prop.c;
                return (inset ? "inset " : "") + ($elm$core$String$fromFloat(shadow.offsetX.position) + ("px" + (" " + ($elm$core$String$fromFloat(shadow.offsetY.position) + ("px" + (" " + ($elm$core$String$fromFloat(shadow.blur.position) + ("px" + (" " + ((name === "text-shadow" || name === "drop-shadow" ? "" : $elm$core$String$fromFloat(shadow.size.position) + "px ") + ("rgba(" + ($elm$core$String$fromInt(
                  $elm$core$Basics$round(shadow.red.position)
                ) + (", " + ($elm$core$String$fromInt(
                  $elm$core$Basics$round(shadow.green.position)
                ) + (", " + ($elm$core$String$fromInt(
                  $elm$core$Basics$round(shadow.blue.position)
                ) + (", " + ($elm$core$String$fromFloat(shadow.alpha.position) + ")"))))))))))))))))));
              case "Property":
                var x = prop.b;
                return _Utils_ap(
                  $elm$core$String$fromFloat(x.position),
                  x.unit
                );
              case "Property2":
                var x = prop.b;
                var y = prop.c;
                return _Utils_ap(
                  $elm$core$String$fromFloat(x.position),
                  _Utils_ap(
                    x.unit,
                    _Utils_ap(
                      delim,
                      _Utils_ap(
                        $elm$core$String$fromFloat(y.position),
                        y.unit
                      )
                    )
                  )
                );
              case "Property3":
                var x = prop.b;
                var y = prop.c;
                var z = prop.d;
                return _Utils_ap(
                  $elm$core$String$fromFloat(x.position),
                  _Utils_ap(
                    x.unit,
                    _Utils_ap(
                      delim,
                      _Utils_ap(
                        $elm$core$String$fromFloat(y.position),
                        _Utils_ap(
                          y.unit,
                          _Utils_ap(
                            delim,
                            _Utils_ap(
                              $elm$core$String$fromFloat(z.position),
                              z.unit
                            )
                          )
                        )
                      )
                    )
                  )
                );
              case "Property4":
                var w = prop.b;
                var x = prop.c;
                var y = prop.d;
                var z = prop.e;
                return _Utils_ap(
                  $elm$core$String$fromFloat(w.position),
                  _Utils_ap(
                    w.unit,
                    _Utils_ap(
                      delim,
                      _Utils_ap(
                        $elm$core$String$fromFloat(x.position),
                        _Utils_ap(
                          x.unit,
                          _Utils_ap(
                            delim,
                            _Utils_ap(
                              $elm$core$String$fromFloat(y.position),
                              _Utils_ap(
                                y.unit,
                                _Utils_ap(
                                  delim,
                                  _Utils_ap(
                                    $elm$core$String$fromFloat(z.position),
                                    z.unit
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                );
              case "AngleProperty":
                var x = prop.b;
                return _Utils_ap(
                  $elm$core$String$fromFloat(x.position),
                  x.unit
                );
              case "Points":
                var coords = prop.a;
                return A2(
                  $elm$core$String$join,
                  " ",
                  A2(
                    $elm$core$List$map,
                    function(_v1) {
                      var x2 = _v1.a;
                      var y2 = _v1.b;
                      return $elm$core$String$fromFloat(x2.position) + ("," + $elm$core$String$fromFloat(y2.position));
                    },
                    coords
                  )
                );
              default:
                var cmds = prop.a;
                return A2(
                  $elm$core$String$join,
                  " ",
                  A2($elm$core$List$map, $mdgriffith$elm_style_animation$Animation$Render$pathCmdValue, cmds)
                );
            }
          }
        );
        var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute("r");
        var $elm$svg$Svg$Attributes$rx = _VirtualDom_attribute("rx");
        var $elm$svg$Svg$Attributes$ry = _VirtualDom_attribute("ry");
        var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute("viewBox");
        var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute("x");
        var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute("y");
        var $mdgriffith$elm_style_animation$Animation$Render$renderAttrs = function(prop) {
          if (A2(
            $elm$core$String$startsWith,
            "attr:",
            $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop)
          )) {
            return $elm$core$Maybe$Just(
              A2(
                $elm$html$Html$Attributes$attribute,
                A2(
                  $elm$core$String$dropLeft,
                  5,
                  $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop)
                ),
                A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
              )
            );
          } else {
            switch (prop.$) {
              case "Points":
                var pts = prop.a;
                return $elm$core$Maybe$Just(
                  $elm$svg$Svg$Attributes$points(
                    A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                  )
                );
              case "Path":
                var cmds = prop.a;
                return $elm$core$Maybe$Just(
                  $elm$svg$Svg$Attributes$d(
                    A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                  )
                );
              case "Property":
                var name = prop.a;
                var m1 = prop.b;
                switch (name) {
                  case "x":
                    return $elm$core$Maybe$Just(
                      $elm$svg$Svg$Attributes$x(
                        A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                      )
                    );
                  case "y":
                    return $elm$core$Maybe$Just(
                      $elm$svg$Svg$Attributes$y(
                        A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                      )
                    );
                  case "cx":
                    return $elm$core$Maybe$Just(
                      $elm$svg$Svg$Attributes$cx(
                        A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                      )
                    );
                  case "cy":
                    return $elm$core$Maybe$Just(
                      $elm$svg$Svg$Attributes$cy(
                        A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                      )
                    );
                  case "rx":
                    return $elm$core$Maybe$Just(
                      $elm$svg$Svg$Attributes$rx(
                        A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                      )
                    );
                  case "ry":
                    return $elm$core$Maybe$Just(
                      $elm$svg$Svg$Attributes$ry(
                        A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                      )
                    );
                  case "r":
                    return $elm$core$Maybe$Just(
                      $elm$svg$Svg$Attributes$r(
                        A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                      )
                    );
                  case "offset":
                    return $elm$core$Maybe$Just(
                      $elm$svg$Svg$Attributes$offset(
                        A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                      )
                    );
                  default:
                    return $elm$core$Maybe$Nothing;
                }
              case "Property4":
                var name = prop.a;
                var m1 = prop.b;
                var m2 = prop.c;
                var m3 = prop.d;
                var m4 = prop.e;
                return name === "viewBox" ? $elm$core$Maybe$Just(
                  $elm$svg$Svg$Attributes$viewBox(
                    A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
                  )
                ) : $elm$core$Maybe$Nothing;
              default:
                return $elm$core$Maybe$Nothing;
            }
          }
        };
        var $mdgriffith$elm_style_animation$Animation$Render$isAttr = function(prop) {
          return A2(
            $elm$core$String$startsWith,
            "attr:",
            $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop)
          ) || function() {
            switch (prop.$) {
              case "Points":
                return true;
              case "Path":
                return true;
              case "Property":
                var name = prop.a;
                return name === "cx" || (name === "cy" || (name === "x" || (name === "y" || (name === "rx" || (name === "ry" || (name === "r" || name === "offset"))))));
              case "Property4":
                var name = prop.a;
                return name === "viewBox";
              default:
                return false;
            }
          }();
        };
        var $mdgriffith$elm_style_animation$Animation$Render$isFilter = function(prop) {
          return A2(
            $elm$core$List$member,
            $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
            _List_fromArray(
              ["filter-url", "blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", "saturate", "sepia", "drop-shadow"]
            )
          );
        };
        var $mdgriffith$elm_style_animation$Animation$Render$render3dRotation = function(prop) {
          if (prop.$ === "Property3") {
            var x = prop.b;
            var y = prop.c;
            var z = prop.d;
            return "rotateX(" + ($elm$core$String$fromFloat(x.position) + (x.unit + (") rotateY(" + ($elm$core$String$fromFloat(y.position) + (y.unit + (") rotateZ(" + ($elm$core$String$fromFloat(z.position) + (z.unit + ")"))))))));
          } else {
            return "";
          }
        };
        var $mdgriffith$elm_style_animation$Animation$Render$renderValues = function(_v0) {
          var model = _v0.a;
          var _v1 = A2($elm$core$List$partition, $mdgriffith$elm_style_animation$Animation$Render$isAttr, model.style);
          var attrProps = _v1.a;
          var styleProps = _v1.b;
          var _v2 = A3(
            $elm$core$List$foldl,
            F2(
              function(prop, _v3) {
                var myStyle = _v3.a;
                var myTransforms = _v3.b;
                var myFilters = _v3.c;
                return $mdgriffith$elm_style_animation$Animation$Render$isTransformation(prop) ? _Utils_Tuple3(
                  myStyle,
                  _Utils_ap(
                    myTransforms,
                    _List_fromArray(
                      [prop]
                    )
                  ),
                  myFilters
                ) : $mdgriffith$elm_style_animation$Animation$Render$isFilter(prop) ? _Utils_Tuple3(
                  myStyle,
                  myTransforms,
                  _Utils_ap(
                    myFilters,
                    _List_fromArray(
                      [prop]
                    )
                  )
                ) : _Utils_Tuple3(
                  _Utils_ap(
                    myStyle,
                    _List_fromArray(
                      [prop]
                    )
                  ),
                  myTransforms,
                  myFilters
                );
              }
            ),
            _Utils_Tuple3(_List_Nil, _List_Nil, _List_Nil),
            styleProps
          );
          var style = _v2.a;
          var transforms = _v2.b;
          var filters = _v2.c;
          var renderedFilters = $elm$core$List$isEmpty(filters) ? _List_Nil : _List_fromArray(
            [
              _Utils_Tuple2(
                "filter",
                A2(
                  $elm$core$String$join,
                  " ",
                  A2(
                    $elm$core$List$map,
                    function(prop) {
                      var name = $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop);
                      return name === "filter-url" ? 'url("' + (A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ", ") + '")') : $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop) + ("(" + (A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ", ") + ")"));
                    },
                    filters
                  )
                )
              )
            ]
          );
          var renderedStyle = A2(
            $elm$core$List$map,
            function(prop) {
              return _Utils_Tuple2(
                $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop),
                A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, " ")
              );
            },
            style
          );
          var renderedTransforms = $elm$core$List$isEmpty(transforms) ? _List_Nil : _List_fromArray(
            [
              _Utils_Tuple2(
                "transform",
                A2(
                  $elm$core$String$join,
                  " ",
                  A2(
                    $elm$core$List$map,
                    function(prop) {
                      return $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop) === "rotate3d" ? $mdgriffith$elm_style_animation$Animation$Render$render3dRotation(prop) : $mdgriffith$elm_style_animation$Animation$Model$propertyName(prop) + ("(" + (A2($mdgriffith$elm_style_animation$Animation$Render$propertyValue, prop, ", ") + ")"));
                    },
                    transforms
                  )
                )
              )
            ]
          );
          return _Utils_Tuple2(
            _Utils_ap(
              renderedTransforms,
              _Utils_ap(renderedFilters, renderedStyle)
            ),
            attrProps
          );
        };
        var $mdgriffith$elm_style_animation$Animation$Render$render = function(animation) {
          var _v0 = $mdgriffith$elm_style_animation$Animation$Render$renderValues(animation);
          var style = _v0.a;
          var attrProps = _v0.b;
          var otherAttrs = A2($elm$core$List$filterMap, $mdgriffith$elm_style_animation$Animation$Render$renderAttrs, attrProps);
          var styleAttr = A2(
            $elm$core$List$map,
            function(_v1) {
              var prop = _v1.a;
              var val = _v1.b;
              return A2($elm$html$Html$Attributes$style, prop, val);
            },
            A2($elm$core$List$concatMap, $mdgriffith$elm_style_animation$Animation$Render$prefix, style)
          );
          return _Utils_ap(styleAttr, otherAttrs);
        };
        var $mdgriffith$elm_style_animation$Animation$render = $mdgriffith$elm_style_animation$Animation$Render$render;
        var $elm$html$Html$img = _VirtualDom_node("img");
        var $elm$html$Html$Attributes$src = function(url) {
          return A2(
            $elm$html$Html$Attributes$stringProperty,
            "src",
            _VirtualDom_noJavaScriptOrHtmlUri(url)
          );
        };
        var $author$project$Main$songInfoView = function(song) {
          return _List_fromArray(
            [
              A2(
                $elm$html$Html$div,
                _List_fromArray(
                  [
                    $elm$html$Html$Attributes$class("cover")
                  ]
                ),
                _List_fromArray(
                  [
                    A2(
                      $elm$html$Html$img,
                      _List_fromArray(
                        [
                          $elm$html$Html$Attributes$id("coverImg"),
                          $elm$html$Html$Attributes$src(song.cover)
                        ]
                      ),
                      _List_Nil
                    )
                  ]
                )
              ),
              A2(
                $elm$html$Html$div,
                _List_fromArray(
                  [
                    $elm$html$Html$Attributes$class("container")
                  ]
                ),
                _List_fromArray(
                  [
                    A2(
                      $elm$html$Html$div,
                      _List_fromArray(
                        [
                          $elm$html$Html$Attributes$class("title")
                        ]
                      ),
                      _List_fromArray(
                        [
                          $elm$html$Html$text(song.title)
                        ]
                      )
                    ),
                    A2(
                      $elm$html$Html$div,
                      _List_fromArray(
                        [
                          $elm$html$Html$Attributes$class("artist")
                        ]
                      ),
                      _List_fromArray(
                        [
                          $elm$html$Html$text(song.artist)
                        ]
                      )
                    )
                  ]
                )
              )
            ]
          );
        };
        var $author$project$Main$view = function(model) {
          return A2(
            $elm$html$Html$div,
            _List_fromArray(
              [
                $elm$html$Html$Attributes$id("root")
              ]
            ),
            _List_fromArray(
              [
                A2(
                  $elm$html$Html$div,
                  _Utils_ap(
                    $mdgriffith$elm_style_animation$Animation$render(model.currentSongStyle),
                    _List_fromArray(
                      [
                        $elm$html$Html$Attributes$class("main")
                      ]
                    )
                  ),
                  $author$project$Main$songInfoView(model.currentSong)
                ),
                A3(
                  $elm$html$Html$node,
                  "marquee",
                  _Utils_ap(
                    $mdgriffith$elm_style_animation$Animation$render(model.marqueeStyle),
                    _List_fromArray(
                      [
                        A2($elm$html$Html$Attributes$attribute, "scrolldelay", "60")
                      ]
                    )
                  ),
                  _List_fromArray(
                    [
                      $elm$html$Html$text(model.marqueeMessage)
                    ]
                  )
                )
              ]
            )
          );
        };
        var $author$project$Main$main = $elm$browser$Browser$element(
          { init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update, view: $author$project$Main$view }
        );
        _Platform_export({ "Main": { "init": $author$project$Main$main(
          $elm$json$Json$Decode$succeed(_Utils_Tuple0)
        )({ "versions": { "elm": "0.19.1" }, "types": { "message": "Main.Msg", "aliases": { "Animation.Msg": { "args": [], "type": "Animation.Model.Tick" }, "Phoenix.Socket.ChannelMessage": { "args": [], "type": "{ topic : Phoenix.Socket.Topic, event : Phoenix.Socket.Event, payload : Phoenix.Socket.Payload, joinRef : Maybe.Maybe String.String, ref : Maybe.Maybe String.String }" }, "Phoenix.Socket.ClosedInfo": { "args": [], "type": "{ reason : Maybe.Maybe String.String, code : Basics.Int, wasClean : Basics.Bool, type_ : String.String, isTrusted : Basics.Bool }" }, "Phoenix.Channel.Event": { "args": [], "type": "String.String" }, "Phoenix.Socket.Event": { "args": [], "type": "String.String" }, "Phoenix.Socket.HeartbeatMessage": { "args": [], "type": "{ topic : Phoenix.Socket.Topic, event : Phoenix.Socket.Event, payload : Phoenix.Socket.Payload, ref : String.String }" }, "Phoenix.Channel.Payload": { "args": [], "type": "Json.Encode.Value" }, "Phoenix.Socket.Payload": { "args": [], "type": "Json.Encode.Value" }, "Phoenix.Presence.Presence": { "args": [], "type": "{ id : String.String, metas : List.List Json.Decode.Value, user : Json.Decode.Value, presence : Json.Decode.Value }" }, "Phoenix.Presence.PresenceDiff": { "args": [], "type": "{ joins : List.List Phoenix.Presence.Presence, leaves : List.List Phoenix.Presence.Presence }" }, "Phoenix.Socket.PresenceMessage": { "args": [], "type": "{ topic : Phoenix.Socket.Topic, event : Phoenix.Socket.Event, payload : Phoenix.Socket.Payload }" }, "Phoenix.Channel.Topic": { "args": [], "type": "String.String" }, "Phoenix.Presence.Topic": { "args": [], "type": "String.String" }, "Phoenix.Socket.Topic": { "args": [], "type": "String.String" }, "Json.Decode.Value": { "args": [], "type": "Json.Encode.Value" }, "Phoenix.Socket.AllInfo": { "args": [], "type": "{ connectionState : String.String, endPointURL : String.String, isConnected : Basics.Bool, makeRef : String.String, protocol : String.String }" } }, "unions": { "Main.Msg": { "args": [], "tags": { "PhoenixMsg": ["Phoenix.Msg"], "Recv": ["String.String"], "Animate": ["Animation.Msg"] } }, "Phoenix.Msg": { "args": [], "tags": { "ReceivedChannelMsg": ["Phoenix.Channel.Msg"], "ReceivedPresenceMsg": ["Phoenix.Presence.Msg"], "ReceivedSocketMsg": ["Phoenix.Socket.Msg"], "TimeoutTick": ["Time.Posix"] } }, "String.String": { "args": [], "tags": { "String": [] } }, "Animation.Model.Tick": { "args": [], "tags": { "Tick": ["Time.Posix"] } }, "Phoenix.Channel.Msg": { "args": [], "tags": { "JoinOk": ["Phoenix.Channel.Topic", "Phoenix.Channel.Payload"], "JoinError": ["Phoenix.Channel.Topic", "Phoenix.Channel.Payload"], "JoinTimeout": ["Phoenix.Channel.Topic", "Phoenix.Channel.Payload"], "PushOk": ["Phoenix.Channel.Topic", "Phoenix.Channel.Event", "Phoenix.Channel.Payload", "String.String"], "PushError": ["Phoenix.Channel.Topic", "Phoenix.Channel.Event", "Phoenix.Channel.Payload", "String.String"], "PushTimeout": ["Phoenix.Channel.Topic", "Phoenix.Channel.Event", "Phoenix.Channel.Payload", "String.String"], "Message": ["Phoenix.Channel.Topic", "Phoenix.Channel.Event", "Phoenix.Channel.Payload"], "Error": ["Phoenix.Channel.Topic"], "LeaveOk": ["Phoenix.Channel.Topic"], "Closed": ["Phoenix.Channel.Topic"], "InternalError": ["Phoenix.Channel.InternalError"] } }, "Phoenix.Presence.Msg": { "args": [], "tags": { "Join": ["Phoenix.Presence.Topic", "Phoenix.Presence.Presence"], "Leave": ["Phoenix.Presence.Topic", "Phoenix.Presence.Presence"], "State": ["Phoenix.Presence.Topic", "List.List Phoenix.Presence.Presence"], "Diff": ["Phoenix.Presence.Topic", "Phoenix.Presence.PresenceDiff"], "InternalError": ["Phoenix.Presence.InternalError"] } }, "Phoenix.Socket.Msg": { "args": [], "tags": { "Opened": [], "Closed": ["Phoenix.Socket.ClosedInfo"], "Connecting": [], "Disconnecting": [], "Error": ["String.String"], "Channel": ["Phoenix.Socket.ChannelMessage"], "Presence": ["Phoenix.Socket.PresenceMessage"], "Heartbeat": ["Phoenix.Socket.HeartbeatMessage"], "Info": ["Phoenix.Socket.Info"], "InternalError": ["Phoenix.Socket.InternalError"] } }, "Time.Posix": { "args": [], "tags": { "Posix": ["Basics.Int"] } }, "Basics.Bool": { "args": [], "tags": { "True": [], "False": [] } }, "Phoenix.Socket.Info": { "args": [], "tags": { "All": ["Phoenix.Socket.AllInfo"], "ConnectionState": ["String.String"], "EndPointURL": ["String.String"], "IsConnected": ["Basics.Bool"], "MakeRef": ["String.String"], "Protocol": ["String.String"] } }, "Basics.Int": { "args": [], "tags": { "Int": [] } }, "Phoenix.Channel.InternalError": { "args": [], "tags": { "DecoderError": ["String.String"], "InvalidMessage": ["Phoenix.Channel.Topic", "String.String", "Phoenix.Channel.Payload"] } }, "Phoenix.Presence.InternalError": { "args": [], "tags": { "DecoderError": ["String.String"], "InvalidMessage": ["Phoenix.Presence.Topic", "String.String"] } }, "Phoenix.Socket.InternalError": { "args": [], "tags": { "DecoderError": ["String.String"], "InvalidMessage": ["String.String"] } }, "List.List": { "args": ["a"], "tags": {} }, "Maybe.Maybe": { "args": ["a"], "tags": { "Just": ["a"], "Nothing": [] } }, "Json.Encode.Value": { "args": [], "tags": { "Value": [] } } } } }) } });
      })(exports);
    }
  });

  // src/index.js
  var import_Main = __toESM(require_Main());

  // src/elmPhoenixWebSocket.js
  var ElmPhoenixWebSocket = {
    phoenixSocket: {},
    socket: {},
    channels: {},
    events: {},
    phoenixPresence: {},
    presences: {},
    elmPorts: {},
    url: "/socket",
    allowReconnect: false,
    init(ports, socket, presence) {
      this.elmPorts = ports;
      this.elmPorts.phoenixSend.subscribe((params) => this[params.msg](params.payload));
      this.phoenixSocket = socket;
      this.phoenixPresence = presence;
      this.socket = new this.phoenixSocket(this.url, {});
      this.info();
    },
    connect(data) {
      this.socket = new this.phoenixSocket(this.url, this.setOptionsAndParams(data));
      this.socket.onError((resp) => this.socketSend("Error", { reason: "" }));
      this.socket.onMessage((resp) => this.onMessage(resp));
      this.socket.onOpen((resp) => {
        this.socketSend("Opened", resp);
        this.info();
        this.allowReconnect = true;
      });
      this.socket.onClose((resp) => {
        if (resp.code != 1e3) {
          if (this.allowReconnect) {
            this.socketSend("Error", { reason: "Unreachable" });
          } else {
            this.socket.reconnectTimer.reset();
            this.socketSend("Error", { reason: "Denied" });
          }
        }
        this.info();
        this.socketSend("Closed", resp);
      });
      this.info();
      this.allowReconnect = false;
      this.socketSend("Connecting", {});
      this.socket.connect();
    },
    setOptionsAndParams(data) {
      if (data) {
        let options = data.options;
        if (options) {
          if (options.reconnectSteppedBackoff && options.reconnectAfterMs) {
            options.reconnectAfterMs = function(tries) {
              return options.reconnectSteppedBackoff[tries - 1] || options.reconnectAfterMs;
            };
            delete options.reconnectSteppedBackoff;
          }
          if (options.rejoinSteppedBackoff && options.rejoinAfterMs) {
            options.rejoinAfterMs = function(tries) {
              return options.rejoinSteppedBackoff[tries - 1] || options.rejoinAfterMs;
            };
            delete options.rejoinSteppedBackoff;
          }
          if (options.logger) {
            options.logger = this.logger;
          }
        }
        if (data.params && options) {
          options.params = data.params;
        } else if (data.params) {
          options = data;
        }
        return options;
      }
      return null;
    },
    disconnect(params) {
      this.channels = {};
      this.presences = {};
      this.events = {};
      this.socketSend("Disconnecting", {});
      this.socket.disconnect(() => {
      }, params.code);
    },
    onMessage(resp) {
      if (resp.topic == "phoenix") {
        this.socketSend("Heartbeat", resp);
      } else if (resp.event.indexOf("presence") == 0) {
        this.socketSend("Presence", resp);
      } else {
        this.socketSend("Channel", resp);
      }
    },
    connectionState() {
      this.socketSend("ConnectionState", this.socket.connectionState());
    },
    endPointURL() {
      this.socketSend("EndPointURL", this.socket.endPointURL());
    },
    hasLogger() {
      this.socketSend("HasLogger", this.getHasLogger());
    },
    getHasLogger() {
      if (this.socket.hasLogger) {
        return this.socket.hasLogger();
      } else {
        return null;
      }
    },
    isConnected() {
      this.socketSend("IsConnected", this.socket.isConnected());
    },
    makeRef() {
      this.socketSend("MakeRef", this.socket.makeRef());
    },
    protocol() {
      this.socketSend("Protocol", this.socket.protocol());
    },
    info() {
      let info = {
        connectionState: this.socket.connectionState(),
        endPointURL: this.socket.endPointURL(),
        hasLogger: this.getHasLogger(),
        isConnected: this.socket.isConnected(),
        nextMessageRef: this.socket.makeRef(),
        protocol: this.socket.protocol()
      };
      this.socketSend("Info", info);
    },
    socketSend(msg, payload) {
      this.elmPorts.socketReceiver.send(
        {
          msg,
          payload
        }
      );
    },
    log(params) {
      if (this.socket.hasLogger && this.socket.hasLogger()) {
        this.socket.log(params.kind, params.msg, params.data);
      }
    },
    startLogging() {
      this.socket.logger = this.logger;
    },
    stopLogging() {
      this.socket.logger = null;
    },
    logger(kind, msg, data) {
      console.log(`${kind}: ${msg}`, data);
    },
    join(params) {
      let channel = this.createChannel(params);
      let join = {};
      if (params.timeout) {
        join = channel.join(params.timeout);
      } else {
        join = channel.join();
      }
      join.receive("ok", (payload) => this.channelSend(params.topic, "JoinOk", payload)).receive("error", (payload) => this.channelSend(params.topic, "JoinError", payload)).receive("timeout", () => this.channelSend(params.topic, "JoinTimeout", params.payload));
    },
    createChannel(params) {
      let channel = this.socket.channel(params.topic, params.payload);
      channel.onClose(() => this.channelSend(params.topic, "Closed", {}));
      channel.onError(() => this.channelSend(params.topic, "Error", {}));
      channel.on("presence_diff", (diff) => this.onDiff(params.topic, diff));
      channel.on("presence_state", (state) => this.onState(params.topic, state));
      this.channels[params.topic] = channel;
      this.allOn(params);
      return channel;
    },
    push(params) {
      let channel = this.find(params.topic);
      let push = {};
      if (params.timeout && params.payload) {
        push = channel.push(params.event, params.payload, params.timeout);
      } else if (params.payload) {
        push = channel.push(params.event, params.payload);
      } else {
        push = channel.push(params.event, {});
      }
      push.receive("ok", (payload) => this.channelSend(params.topic, "PushOk", { event: params.event, payload, ref: params.ref })).receive("error", (payload) => this.channelSend(params.topic, "PushError", { event: params.event, payload, ref: params.ref })).receive("timeout", () => this.channelSend(params.topic, "PushTimeout", { event: params.event, payload: params.payload, ref: params.ref }));
    },
    on(params) {
      let channel = this.find(params.topic);
      let events = this.events[params.topic];
      if (channel && !events) {
        this.events[params.topic] = [params.event];
        this.subscribe(channel, params.topic, params.event);
      } else if (channel && events && events.indexOf(params.event) == -1) {
        events.push(params.event);
        this.subscribe(channel, params.topic, params.event);
      }
    },
    allOn(params) {
      for (let i = 0; i < params.events.length; i++) {
        this.on({ topic: params.topic, event: params.events[i] });
      }
    },
    subscribe(channel, topic, event) {
      channel.on(event, (payload) => this.channelSend(topic, "Message", { event, payload }));
    },
    off(params) {
      let channel = this.find(params.topic);
      let events = this.events[params.topic];
      if (channel && events && events.indexOf(params.event) != -1) {
        channel.off(params.event);
        events.splice(events.indexOf(params.event), 1);
      }
    },
    allOff(params) {
      for (let i = 0; i < params.events.length; i++) {
        this.off({ topic: params.topic, event: params.events[i] });
      }
    },
    leave(params) {
      let channel = this.find(params.topic);
      this.events[params.topic] = [];
      if (channel) {
        channel.leave(params.timeout).receive("ok", (_) => this.leaveOk(params.topic));
      } else {
        this.channelSend(params.topic, "LeaveOk", {});
      }
    },
    leaveOk(topic) {
      this.channelSend(topic, "LeaveOk", {});
      delete this.find(topic);
    },
    find(topic) {
      return this.channels[topic];
    },
    channelSend(topic, msg, payload) {
      this.elmPorts.channelReceiver.send(
        {
          topic,
          msg,
          payload
        }
      );
    },
    onDiff(topic, diff) {
      let currentPresence = this.presences[topic] || {};
      let newPresence = this.phoenixPresence.syncDiff(
        currentPresence,
        diff,
        (id, current, newPres) => this.presenceSend(topic, "Join", this.packageForElm(id, newPres)),
        (id, current, leftPres) => this.presenceSend(topic, "Leave", this.packageForElm(id, leftPres))
      );
      this.presenceSend(topic, "Diff", { leaves: this.toList(diff.leaves), joins: this.toList(diff.joins) });
      this.presenceSend(topic, "State", { list: this.phoenixPresence.list(newPresence, (id, metas) => this.packageForElm(id, metas)) });
      this.presences[topic] = newPresence;
    },
    onState(topic, state) {
      let currentPresence = this.presences[topic];
      let newPresence = this.phoenixPresence.syncState(
        currentPresence,
        state,
        (id, current, newPres) => this.presenceSend(topic, "Join", this.packageForElm(id, newPres)),
        (id, current, leftPres) => this.presenceSend(topic, "Leave", this.packageForElm(id, leftPres))
      );
      this.presenceSend(topic, "State", { list: this.phoenixPresence.list(newPresence, (id, presence) => this.packageForElm(id, presence)) });
      this.presences[topic] = newPresence;
    },
    toList(presence) {
      let list = [];
      for (var id in presence) {
        list.push(this.packageForElm(id, presence[id]));
      }
      return list;
    },
    packageForElm(id, presence) {
      return { id, metas: presence.metas, user: presence.user || null, presence };
    },
    presenceSend(topic, msg, payload) {
      if (this.elmPorts.presenceReceiver) {
        this.elmPorts.presenceReceiver.send(
          {
            topic,
            msg,
            payload
          }
        );
      } else {
        console.warn("No presenceReceiver port found.");
      }
    }
  };
  var elmPhoenixWebSocket_default = ElmPhoenixWebSocket;

  // ../../../../deps/phoenix/priv/static/phoenix.mjs
  var closure = (value) => {
    if (typeof value === "function") {
      return value;
    } else {
      let closure2 = function() {
        return value;
      };
      return closure2;
    }
  };
  var globalSelf = typeof self !== "undefined" ? self : null;
  var phxWindow = typeof window !== "undefined" ? window : null;
  var global = globalSelf || phxWindow || global;
  var DEFAULT_VSN = "2.0.0";
  var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
  var DEFAULT_TIMEOUT = 1e4;
  var WS_CLOSE_NORMAL = 1e3;
  var CHANNEL_STATES = {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  };
  var CHANNEL_EVENTS = {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  };
  var TRANSPORTS = {
    longpoll: "longpoll",
    websocket: "websocket"
  };
  var XHR_STATES = {
    complete: 4
  };
  var Push = class {
    constructor(channel, event, payload, timeout) {
      this.channel = channel;
      this.event = event;
      this.payload = payload || function() {
        return {};
      };
      this.receivedResp = null;
      this.timeout = timeout;
      this.timeoutTimer = null;
      this.recHooks = [];
      this.sent = false;
    }
    resend(timeout) {
      this.timeout = timeout;
      this.reset();
      this.send();
    }
    send() {
      if (this.hasReceived("timeout")) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
    receive(status, callback) {
      if (this.hasReceived(status)) {
        callback(this.receivedResp.response);
      }
      this.recHooks.push({ status, callback });
      return this;
    }
    reset() {
      this.cancelRefEvent();
      this.ref = null;
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
    }
    matchReceive({ status, response, _ref }) {
      this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
    }
    cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel.off(this.refEvent);
    }
    cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
    startTimeout() {
      if (this.timeoutTimer) {
        this.cancelTimeout();
      }
      this.ref = this.channel.socket.makeRef();
      this.refEvent = this.channel.replyEventName(this.ref);
      this.channel.on(this.refEvent, (payload) => {
        this.cancelRefEvent();
        this.cancelTimeout();
        this.receivedResp = payload;
        this.matchReceive(payload);
      });
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
    trigger(status, response) {
      this.channel.trigger(this.refEvent, { status, response });
    }
  };
  var Timer = class {
    constructor(callback, timerCalc) {
      this.callback = callback;
      this.timerCalc = timerCalc;
      this.timer = null;
      this.tries = 0;
    }
    reset() {
      this.tries = 0;
      clearTimeout(this.timer);
    }
    scheduleTimeout() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1;
        this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  };
  var Channel = class {
    constructor(topic, params, socket) {
      this.state = CHANNEL_STATES.closed;
      this.topic = topic;
      this.params = closure(params || {});
      this.socket = socket;
      this.bindings = [];
      this.bindingRef = 0;
      this.timeout = this.socket.timeout;
      this.joinedOnce = false;
      this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
      this.pushBuffer = [];
      this.stateChangeRefs = [];
      this.rejoinTimer = new Timer(() => {
        if (this.socket.isConnected()) {
          this.rejoin();
        }
      }, this.socket.rejoinAfterMs);
      this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
      this.stateChangeRefs.push(this.socket.onOpen(() => {
        this.rejoinTimer.reset();
        if (this.isErrored()) {
          this.rejoin();
        }
      }));
      this.joinPush.receive("ok", () => {
        this.state = CHANNEL_STATES.joined;
        this.rejoinTimer.reset();
        this.pushBuffer.forEach((pushEvent) => pushEvent.send());
        this.pushBuffer = [];
      });
      this.joinPush.receive("error", () => {
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.onClose(() => {
        this.rejoinTimer.reset();
        if (this.socket.hasLogger())
          this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
        this.state = CHANNEL_STATES.closed;
        this.socket.remove(this);
      });
      this.onError((reason) => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `error ${this.topic}`, reason);
        if (this.isJoining()) {
          this.joinPush.reset();
        }
        this.state = CHANNEL_STATES.errored;
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.joinPush.receive("timeout", () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
        let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
        leavePush.send();
        this.state = CHANNEL_STATES.errored;
        this.joinPush.reset();
        if (this.socket.isConnected()) {
          this.rejoinTimer.scheduleTimeout();
        }
      });
      this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
        this.trigger(this.replyEventName(ref), payload);
      });
    }
    join(timeout = this.timeout) {
      if (this.joinedOnce) {
        throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
      } else {
        this.timeout = timeout;
        this.joinedOnce = true;
        this.rejoin();
        return this.joinPush;
      }
    }
    onClose(callback) {
      this.on(CHANNEL_EVENTS.close, callback);
    }
    onError(callback) {
      return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
    }
    on(event, callback) {
      let ref = this.bindingRef++;
      this.bindings.push({ event, ref, callback });
      return ref;
    }
    off(event, ref) {
      this.bindings = this.bindings.filter((bind) => {
        return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
      });
    }
    canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    push(event, payload, timeout = this.timeout) {
      payload = payload || {};
      if (!this.joinedOnce) {
        throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
      }
      let pushEvent = new Push(this, event, function() {
        return payload;
      }, timeout);
      if (this.canPush()) {
        pushEvent.send();
      } else {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
      }
      return pushEvent;
    }
    leave(timeout = this.timeout) {
      this.rejoinTimer.reset();
      this.joinPush.cancelTimeout();
      this.state = CHANNEL_STATES.leaving;
      let onClose = () => {
        if (this.socket.hasLogger())
          this.socket.log("channel", `leave ${this.topic}`);
        this.trigger(CHANNEL_EVENTS.close, "leave");
      };
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
      leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
      leavePush.send();
      if (!this.canPush()) {
        leavePush.trigger("ok", {});
      }
      return leavePush;
    }
    onMessage(_event, payload, _ref) {
      return payload;
    }
    isMember(topic, event, payload, joinRef) {
      if (this.topic !== topic) {
        return false;
      }
      if (joinRef && joinRef !== this.joinRef()) {
        if (this.socket.hasLogger())
          this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
        return false;
      } else {
        return true;
      }
    }
    joinRef() {
      return this.joinPush.ref;
    }
    rejoin(timeout = this.timeout) {
      if (this.isLeaving()) {
        return;
      }
      this.socket.leaveOpenTopic(this.topic);
      this.state = CHANNEL_STATES.joining;
      this.joinPush.resend(timeout);
    }
    trigger(event, payload, ref, joinRef) {
      let handledPayload = this.onMessage(event, payload, ref, joinRef);
      if (payload && !handledPayload) {
        throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
      }
      let eventBindings = this.bindings.filter((bind) => bind.event === event);
      for (let i = 0; i < eventBindings.length; i++) {
        let bind = eventBindings[i];
        bind.callback(handledPayload, ref, joinRef || this.joinRef());
      }
    }
    replyEventName(ref) {
      return `chan_reply_${ref}`;
    }
    isClosed() {
      return this.state === CHANNEL_STATES.closed;
    }
    isErrored() {
      return this.state === CHANNEL_STATES.errored;
    }
    isJoined() {
      return this.state === CHANNEL_STATES.joined;
    }
    isJoining() {
      return this.state === CHANNEL_STATES.joining;
    }
    isLeaving() {
      return this.state === CHANNEL_STATES.leaving;
    }
  };
  var Ajax = class {
    static request(method, endPoint, accept, body, timeout, ontimeout, callback) {
      if (global.XDomainRequest) {
        let req = new global.XDomainRequest();
        return this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
      } else {
        let req = new global.XMLHttpRequest();
        return this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback);
      }
    }
    static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
      req.timeout = timeout;
      req.open(method, endPoint);
      req.onload = () => {
        let response = this.parseJSON(req.responseText);
        callback && callback(response);
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.onprogress = () => {
      };
      req.send(body);
      return req;
    }
    static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback) {
      req.open(method, endPoint, true);
      req.timeout = timeout;
      req.setRequestHeader("Content-Type", accept);
      req.onerror = () => callback && callback(null);
      req.onreadystatechange = () => {
        if (req.readyState === XHR_STATES.complete && callback) {
          let response = this.parseJSON(req.responseText);
          callback(response);
        }
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.send(body);
      return req;
    }
    static parseJSON(resp) {
      if (!resp || resp === "") {
        return null;
      }
      try {
        return JSON.parse(resp);
      } catch (e) {
        console && console.log("failed to parse JSON response", resp);
        return null;
      }
    }
    static serialize(obj, parentKey) {
      let queryStr = [];
      for (var key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          continue;
        }
        let paramKey = parentKey ? `${parentKey}[${key}]` : key;
        let paramVal = obj[key];
        if (typeof paramVal === "object") {
          queryStr.push(this.serialize(paramVal, paramKey));
        } else {
          queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
        }
      }
      return queryStr.join("&");
    }
    static appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      let prefix = url.match(/\?/) ? "&" : "?";
      return `${url}${prefix}${this.serialize(params)}`;
    }
  };
  var LongPoll = class {
    constructor(endPoint) {
      this.endPoint = null;
      this.token = null;
      this.skipHeartbeat = true;
      this.reqs = /* @__PURE__ */ new Set();
      this.onopen = function() {
      };
      this.onerror = function() {
      };
      this.onmessage = function() {
      };
      this.onclose = function() {
      };
      this.pollEndpoint = this.normalizeEndpoint(endPoint);
      this.readyState = SOCKET_STATES.connecting;
      this.poll();
    }
    normalizeEndpoint(endPoint) {
      return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
    }
    endpointURL() {
      return Ajax.appendParams(this.pollEndpoint, { token: this.token });
    }
    closeAndRetry(code, reason, wasClean) {
      this.close(code, reason, wasClean);
      this.readyState = SOCKET_STATES.connecting;
    }
    ontimeout() {
      this.onerror("timeout");
      this.closeAndRetry(1005, "timeout", false);
    }
    isActive() {
      return this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting;
    }
    poll() {
      this.ajax("GET", null, () => this.ontimeout(), (resp) => {
        if (resp) {
          var { status, token, messages } = resp;
          this.token = token;
        } else {
          status = 0;
        }
        switch (status) {
          case 200:
            messages.forEach((msg) => {
              setTimeout(() => this.onmessage({ data: msg }), 0);
            });
            this.poll();
            break;
          case 204:
            this.poll();
            break;
          case 410:
            this.readyState = SOCKET_STATES.open;
            this.onopen({});
            this.poll();
            break;
          case 403:
            this.onerror(403);
            this.close(1008, "forbidden", false);
            break;
          case 0:
          case 500:
            this.onerror(500);
            this.closeAndRetry(1011, "internal server error", 500);
            break;
          default:
            throw new Error(`unhandled poll status ${status}`);
        }
      });
    }
    send(body) {
      this.ajax("POST", body, () => this.onerror("timeout"), (resp) => {
        if (!resp || resp.status !== 200) {
          this.onerror(resp && resp.status);
          this.closeAndRetry(1011, "internal server error", false);
        }
      });
    }
    close(code, reason, wasClean) {
      for (let req of this.reqs) {
        req.abort();
      }
      this.readyState = SOCKET_STATES.closed;
      let opts = Object.assign({ code: 1e3, reason: void 0, wasClean: true }, { code, reason, wasClean });
      if (typeof CloseEvent !== "undefined") {
        this.onclose(new CloseEvent("close", opts));
      } else {
        this.onclose(opts);
      }
    }
    ajax(method, body, onCallerTimeout, callback) {
      let req;
      let ontimeout = () => {
        this.reqs.delete(req);
        onCallerTimeout();
      };
      req = Ajax.request(method, this.endpointURL(), "application/json", body, this.timeout, ontimeout, (resp) => {
        this.reqs.delete(req);
        if (this.isActive()) {
          callback(resp);
        }
      });
      this.reqs.add(req);
    }
  };
  var Presence = class {
    constructor(channel, opts = {}) {
      let events = opts.events || { state: "presence_state", diff: "presence_diff" };
      this.state = {};
      this.pendingDiffs = [];
      this.channel = channel;
      this.joinRef = null;
      this.caller = {
        onJoin: function() {
        },
        onLeave: function() {
        },
        onSync: function() {
        }
      };
      this.channel.on(events.state, (newState) => {
        let { onJoin, onLeave, onSync } = this.caller;
        this.joinRef = this.channel.joinRef();
        this.state = Presence.syncState(this.state, newState, onJoin, onLeave);
        this.pendingDiffs.forEach((diff) => {
          this.state = Presence.syncDiff(this.state, diff, onJoin, onLeave);
        });
        this.pendingDiffs = [];
        onSync();
      });
      this.channel.on(events.diff, (diff) => {
        let { onJoin, onLeave, onSync } = this.caller;
        if (this.inPendingSyncState()) {
          this.pendingDiffs.push(diff);
        } else {
          this.state = Presence.syncDiff(this.state, diff, onJoin, onLeave);
          onSync();
        }
      });
    }
    onJoin(callback) {
      this.caller.onJoin = callback;
    }
    onLeave(callback) {
      this.caller.onLeave = callback;
    }
    onSync(callback) {
      this.caller.onSync = callback;
    }
    list(by) {
      return Presence.list(this.state, by);
    }
    inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    static syncState(currentState, newState, onJoin, onLeave) {
      let state = this.clone(currentState);
      let joins = {};
      let leaves = {};
      this.map(state, (key, presence) => {
        if (!newState[key]) {
          leaves[key] = presence;
        }
      });
      this.map(newState, (key, newPresence) => {
        let currentPresence = state[key];
        if (currentPresence) {
          let newRefs = newPresence.metas.map((m) => m.phx_ref);
          let curRefs = currentPresence.metas.map((m) => m.phx_ref);
          let joinedMetas = newPresence.metas.filter((m) => curRefs.indexOf(m.phx_ref) < 0);
          let leftMetas = currentPresence.metas.filter((m) => newRefs.indexOf(m.phx_ref) < 0);
          if (joinedMetas.length > 0) {
            joins[key] = newPresence;
            joins[key].metas = joinedMetas;
          }
          if (leftMetas.length > 0) {
            leaves[key] = this.clone(currentPresence);
            leaves[key].metas = leftMetas;
          }
        } else {
          joins[key] = newPresence;
        }
      });
      return this.syncDiff(state, { joins, leaves }, onJoin, onLeave);
    }
    static syncDiff(state, diff, onJoin, onLeave) {
      let { joins, leaves } = this.clone(diff);
      if (!onJoin) {
        onJoin = function() {
        };
      }
      if (!onLeave) {
        onLeave = function() {
        };
      }
      this.map(joins, (key, newPresence) => {
        let currentPresence = state[key];
        state[key] = this.clone(newPresence);
        if (currentPresence) {
          let joinedRefs = state[key].metas.map((m) => m.phx_ref);
          let curMetas = currentPresence.metas.filter((m) => joinedRefs.indexOf(m.phx_ref) < 0);
          state[key].metas.unshift(...curMetas);
        }
        onJoin(key, currentPresence, newPresence);
      });
      this.map(leaves, (key, leftPresence) => {
        let currentPresence = state[key];
        if (!currentPresence) {
          return;
        }
        let refsToRemove = leftPresence.metas.map((m) => m.phx_ref);
        currentPresence.metas = currentPresence.metas.filter((p) => {
          return refsToRemove.indexOf(p.phx_ref) < 0;
        });
        onLeave(key, currentPresence, leftPresence);
        if (currentPresence.metas.length === 0) {
          delete state[key];
        }
      });
      return state;
    }
    static list(presences, chooser) {
      if (!chooser) {
        chooser = function(key, pres) {
          return pres;
        };
      }
      return this.map(presences, (key, presence) => {
        return chooser(key, presence);
      });
    }
    static map(obj, func) {
      return Object.getOwnPropertyNames(obj).map((key) => func(key, obj[key]));
    }
    static clone(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  };
  var serializer_default = {
    HEADER_LENGTH: 1,
    META_LENGTH: 4,
    KINDS: { push: 0, reply: 1, broadcast: 2 },
    encode(msg, callback) {
      if (msg.payload.constructor === ArrayBuffer) {
        return callback(this.binaryEncode(msg));
      } else {
        let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
        return callback(JSON.stringify(payload));
      }
    },
    decode(rawPayload, callback) {
      if (rawPayload.constructor === ArrayBuffer) {
        return callback(this.binaryDecode(rawPayload));
      } else {
        let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
        return callback({ join_ref, ref, topic, event, payload });
      }
    },
    binaryEncode(message) {
      let { join_ref, ref, event, topic, payload } = message;
      let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
      let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.push);
      view.setUint8(offset++, join_ref.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, event.length);
      Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + payload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(payload), header.byteLength);
      return combined.buffer;
    },
    binaryDecode(buffer) {
      let view = new DataView(buffer);
      let kind = view.getUint8(0);
      let decoder = new TextDecoder();
      switch (kind) {
        case this.KINDS.push:
          return this.decodePush(buffer, view, decoder);
        case this.KINDS.reply:
          return this.decodeReply(buffer, view, decoder);
        case this.KINDS.broadcast:
          return this.decodeBroadcast(buffer, view, decoder);
      }
    },
    decodePush(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let topicSize = view.getUint8(2);
      let eventSize = view.getUint8(3);
      let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: joinRef, ref: null, topic, event, payload: data };
    },
    decodeReply(buffer, view, decoder) {
      let joinRefSize = view.getUint8(1);
      let refSize = view.getUint8(2);
      let topicSize = view.getUint8(3);
      let eventSize = view.getUint8(4);
      let offset = this.HEADER_LENGTH + this.META_LENGTH;
      let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
      offset = offset + joinRefSize;
      let ref = decoder.decode(buffer.slice(offset, offset + refSize));
      offset = offset + refSize;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      let payload = { status: event, response: data };
      return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
    },
    decodeBroadcast(buffer, view, decoder) {
      let topicSize = view.getUint8(1);
      let eventSize = view.getUint8(2);
      let offset = this.HEADER_LENGTH + 2;
      let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      let event = decoder.decode(buffer.slice(offset, offset + eventSize));
      offset = offset + eventSize;
      let data = buffer.slice(offset, buffer.byteLength);
      return { join_ref: null, ref: null, topic, event, payload: data };
    }
  };
  var Socket = class {
    constructor(endPoint, opts = {}) {
      this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
      this.channels = [];
      this.sendBuffer = [];
      this.ref = 0;
      this.timeout = opts.timeout || DEFAULT_TIMEOUT;
      this.transport = opts.transport || global.WebSocket || LongPoll;
      this.establishedConnections = 0;
      this.defaultEncoder = serializer_default.encode.bind(serializer_default);
      this.defaultDecoder = serializer_default.decode.bind(serializer_default);
      this.closeWasClean = false;
      this.binaryType = opts.binaryType || "arraybuffer";
      this.connectClock = 1;
      if (this.transport !== LongPoll) {
        this.encode = opts.encode || this.defaultEncoder;
        this.decode = opts.decode || this.defaultDecoder;
      } else {
        this.encode = this.defaultEncoder;
        this.decode = this.defaultDecoder;
      }
      let awaitingConnectionOnPageShow = null;
      if (phxWindow && phxWindow.addEventListener) {
        phxWindow.addEventListener("pagehide", (_e) => {
          if (this.conn) {
            this.disconnect();
            awaitingConnectionOnPageShow = this.connectClock;
          }
        });
        phxWindow.addEventListener("pageshow", (_e) => {
          if (awaitingConnectionOnPageShow === this.connectClock) {
            awaitingConnectionOnPageShow = null;
            this.connect();
          }
        });
      }
      this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
      this.rejoinAfterMs = (tries) => {
        if (opts.rejoinAfterMs) {
          return opts.rejoinAfterMs(tries);
        } else {
          return [1e3, 2e3, 5e3][tries - 1] || 1e4;
        }
      };
      this.reconnectAfterMs = (tries) => {
        if (opts.reconnectAfterMs) {
          return opts.reconnectAfterMs(tries);
        } else {
          return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
        }
      };
      this.logger = opts.logger || null;
      this.longpollerTimeout = opts.longpollerTimeout || 2e4;
      this.params = closure(opts.params || {});
      this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
      this.vsn = opts.vsn || DEFAULT_VSN;
      this.heartbeatTimer = null;
      this.pendingHeartbeatRef = null;
      this.reconnectTimer = new Timer(() => {
        this.teardown(() => this.connect());
      }, this.reconnectAfterMs);
    }
    getLongPollTransport() {
      return LongPoll;
    }
    replaceTransport(newTransport) {
      this.connectClock++;
      this.closeWasClean = true;
      this.reconnectTimer.reset();
      this.sendBuffer = [];
      if (this.conn) {
        this.conn.close();
        this.conn = null;
      }
      this.transport = newTransport;
    }
    protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    endPointURL() {
      let uri = Ajax.appendParams(Ajax.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
      if (uri.charAt(0) !== "/") {
        return uri;
      }
      if (uri.charAt(1) === "/") {
        return `${this.protocol()}:${uri}`;
      }
      return `${this.protocol()}://${location.host}${uri}`;
    }
    disconnect(callback, code, reason) {
      this.connectClock++;
      this.closeWasClean = true;
      this.reconnectTimer.reset();
      this.teardown(callback, code, reason);
    }
    connect(params) {
      if (params) {
        console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
        this.params = closure(params);
      }
      if (this.conn) {
        return;
      }
      this.connectClock++;
      this.closeWasClean = false;
      this.conn = new this.transport(this.endPointURL());
      this.conn.binaryType = this.binaryType;
      this.conn.timeout = this.longpollerTimeout;
      this.conn.onopen = () => this.onConnOpen();
      this.conn.onerror = (error) => this.onConnError(error);
      this.conn.onmessage = (event) => this.onConnMessage(event);
      this.conn.onclose = (event) => this.onConnClose(event);
    }
    log(kind, msg, data) {
      this.logger(kind, msg, data);
    }
    hasLogger() {
      return this.logger !== null;
    }
    onOpen(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.open.push([ref, callback]);
      return ref;
    }
    onClose(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.close.push([ref, callback]);
      return ref;
    }
    onError(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.error.push([ref, callback]);
      return ref;
    }
    onMessage(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.message.push([ref, callback]);
      return ref;
    }
    ping(callback) {
      if (!this.isConnected()) {
        return false;
      }
      let ref = this.makeRef();
      let startTime = Date.now();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref });
      let onMsgRef = this.onMessage((msg) => {
        if (msg.ref === ref) {
          this.off([onMsgRef]);
          callback(Date.now() - startTime);
        }
      });
      return true;
    }
    onConnOpen() {
      if (this.hasLogger())
        this.log("transport", `connected to ${this.endPointURL()}`);
      this.closeWasClean = false;
      this.establishedConnections++;
      this.flushSendBuffer();
      this.reconnectTimer.reset();
      this.resetHeartbeat();
      this.stateChangeCallbacks.open.forEach(([, callback]) => callback());
    }
    heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        if (this.hasLogger()) {
          this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        }
        this.abnormalClose("heartbeat timeout");
      }
    }
    resetHeartbeat() {
      if (this.conn && this.conn.skipHeartbeat) {
        return;
      }
      this.pendingHeartbeatRef = null;
      clearTimeout(this.heartbeatTimer);
      setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    teardown(callback, code, reason) {
      if (!this.conn) {
        return callback && callback();
      }
      this.waitForBufferDone(() => {
        if (this.conn) {
          if (code) {
            this.conn.close(code, reason || "");
          } else {
            this.conn.close();
          }
        }
        this.waitForSocketClosed(() => {
          if (this.conn) {
            this.conn.onclose = function() {
            };
            this.conn = null;
          }
          callback && callback();
        });
      });
    }
    waitForBufferDone(callback, tries = 1) {
      if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(callback, tries + 1);
      }, 150 * tries);
    }
    waitForSocketClosed(callback, tries = 1) {
      if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(callback, tries + 1);
      }, 150 * tries);
    }
    onConnClose(event) {
      let closeCode = event && event.code;
      if (this.hasLogger())
        this.log("transport", "close", event);
      this.triggerChanError();
      clearTimeout(this.heartbeatTimer);
      if (!this.closeWasClean && closeCode !== 1e3) {
        this.reconnectTimer.scheduleTimeout();
      }
      this.stateChangeCallbacks.close.forEach(([, callback]) => callback(event));
    }
    onConnError(error) {
      if (this.hasLogger())
        this.log("transport", error);
      let transportBefore = this.transport;
      let establishedBefore = this.establishedConnections;
      this.stateChangeCallbacks.error.forEach(([, callback]) => {
        callback(error, transportBefore, establishedBefore);
      });
      if (transportBefore === this.transport || establishedBefore > 0) {
        this.triggerChanError();
      }
    }
    triggerChanError() {
      this.channels.forEach((channel) => {
        if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
          channel.trigger(CHANNEL_EVENTS.error);
        }
      });
    }
    connectionState() {
      switch (this.conn && this.conn.readyState) {
        case SOCKET_STATES.connecting:
          return "connecting";
        case SOCKET_STATES.open:
          return "open";
        case SOCKET_STATES.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    isConnected() {
      return this.connectionState() === "open";
    }
    remove(channel) {
      this.off(channel.stateChangeRefs);
      this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
    }
    off(refs) {
      for (let key in this.stateChangeCallbacks) {
        this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
          return refs.indexOf(ref) === -1;
        });
      }
    }
    channel(topic, chanParams = {}) {
      let chan = new Channel(topic, chanParams, this);
      this.channels.push(chan);
      return chan;
    }
    push(data) {
      if (this.hasLogger()) {
        let { topic, event, payload, ref, join_ref } = data;
        this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
      }
      if (this.isConnected()) {
        this.encode(data, (result) => this.conn.send(result));
      } else {
        this.sendBuffer.push(() => this.encode(data, (result) => this.conn.send(result)));
      }
    }
    makeRef() {
      let newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
    sendHeartbeat() {
      if (this.pendingHeartbeatRef && !this.isConnected()) {
        return;
      }
      this.pendingHeartbeatRef = this.makeRef();
      this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
      this.heartbeatTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
    }
    abnormalClose(reason) {
      this.closeWasClean = false;
      if (this.isConnected()) {
        this.conn.close(WS_CLOSE_NORMAL, reason);
      }
    }
    flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach((callback) => callback());
        this.sendBuffer = [];
      }
    }
    onConnMessage(rawMessage) {
      this.decode(rawMessage.data, (msg) => {
        let { topic, event, payload, ref, join_ref } = msg;
        if (ref && ref === this.pendingHeartbeatRef) {
          clearTimeout(this.heartbeatTimer);
          this.pendingHeartbeatRef = null;
          setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
        }
        if (this.hasLogger())
          this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
        for (let i = 0; i < this.channels.length; i++) {
          const channel = this.channels[i];
          if (!channel.isMember(topic, event, payload, join_ref)) {
            continue;
          }
          channel.trigger(event, payload, ref, join_ref);
        }
        for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
          let [, callback] = this.stateChangeCallbacks.message[i];
          callback(msg);
        }
      });
    }
    leaveOpenTopic(topic) {
      let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
      if (dupChannel) {
        if (this.hasLogger())
          this.log("transport", `leaving duplicate topic "${topic}"`);
        dupChannel.leave();
      }
    }
  };

  // src/index.js
  var $root = document.createElement("div");
  document.body.appendChild($root);
  var app = import_Main.Elm.Main.init({
    node: $root
  });
  app.ports.playUrl.subscribe((url) => new Audio(url).play());
  elmPhoenixWebSocket_default.init(app.ports, Socket, Presence);
})();
