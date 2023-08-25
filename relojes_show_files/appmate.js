!(function (t) {
  function e(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { exports: {}, id: n, loaded: !1 });
    return t[n].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports;
  }
  var r = {};
  return (e.m = t), (e.c = r), (e.p = ""), e(0);
})([
  function (t, e, r) {
    t.exports = r(1);
  },
  function (t, e, r) {
    !(function () {
      "use strict";
      var t = r(2),
        e = function () {
          var t = r(9),
            e = r(11),
            n = r(17),
            o = r(18),
            i = r(20),
            s = r(21),
            u = !1,
            a = !1,
            f = !1,
            c = 999,
            h = 0,
            l = !1,
            p = function (t) {
              (a = !1), i.error("Could not load Appmate client", t);
            },
            d = {
              version: t.version,
              config: t,
              globals: {},
              init: function (r) {
                u ||
                  ((u = !0),
                  e(t, r),
                  t.app.autoLoad === !0 && this.load(),
                  (this.config = t),
                  (this.globals = t.globals),
                  this.domReady());
              },
              domReady: function () {
                i.debug("DOM is ready"), (f = !0), this.runWhenReady();
              },
              load: function () {
                a ||
                  (i.info("Load Appmate client"),
                  (a = !0),
                  this.loadAppmateInfo(
                    function (e) {
                      if (((this.apps = e.apps), 0 === this.apps.length))
                        i.info("No apps installted.");
                      else {
                        i.info("Load %s apps", this.apps.length), (c = 1);
                        var r = "client-bundle",
                          n = t.cdn.host + "/" + r + ".js";
                        (n = n.replace("{VERSION}", t.version)),
                          this.loadScript(n, t.session.cacheScripts);
                      }
                    }.bind(this)
                  ));
              },
              loadAppmateInfo: function (e) {
                var r = [t.app.host, "shop", t.shop.domain, "appmate"].join(
                    "/"
                  ),
                  n = new o({
                    url: r,
                    cache: !0,
                    refresh: !1,
                    headers: { "Content-Type": "application/json" },
                  });
                n.get(function (r) {
                  var n = r.data;
                  i.debug("Appmate info loaded.", r),
                    t.globals.hasOwnProperty("shop") === !1 &&
                      (t.globals.shop = n.shop),
                    e(n);
                }, p);
              },
              loadScript: function (t, e) {
                var r = new n(t, e);
                r.load(
                  function () {
                    (h += 1),
                      i.debug("Loaded script %s of %s (%s)", h, c, t),
                      this.runWhenReady();
                  }.bind(this),
                  p
                );
              },
              hasApp: function (t) {
                return (
                  this.apps.filter(function (e) {
                    return e.appId === t;
                  }).length > 0
                );
              },
              runWhenReady: function () {
                var e = h >= c;
                i.debug("Check if ready", e, f, !l),
                  e &&
                    f &&
                    !l &&
                    (i.info("Create Appmate client"),
                    s.touch &&
                      (document.body
                        ? document.body.classList.add("wk-touch")
                        : document.addEventListener(
                            "DOMContentLoaded",
                            function () {
                              document.body.classList.add("wk-touch");
                            }
                          )),
                    "undefined" != typeof window.WishlistKing &&
                      this.hasApp("wishlist-king") &&
                      ((window.Appmate.wk = new WishlistKing(t)),
                      window.Appmate.wk.run({ eventMap: this.wkEvents }),
                      this.wkReady && this.wkReady()),
                    (l = !0));
              },
              cl: {
                ready: function (t) {
                  d.clReady = t;
                },
                on: function (t) {
                  d.clEvents = t;
                },
              },
              wk: {
                ready: function (t) {
                  d.wkReady = t;
                },
                on: function (t) {
                  d.wkEvents = t;
                },
              },
            };
          return d;
        };
      t.checkAll() &&
        ((window.Appmate = new e()),
        "function" == typeof initAppmate && initAppmate(window.Appmate));
    })();
  },
  function (t, e, r) {
    var n = r(3);
    n(),
      (t.exports = {
        checkAll: function () {
          for (
            var t = [
                this.checkForEach,
                this.checkFind,
                this.checkBind,
                this.checkMutationObserver,
                this.checkLocalStorage,
              ],
              e = 0;
            e < t.length;
            e++
          ) {
            var r = t[e];
            if (r() !== !0) return !1;
          }
          return !0;
        },
        checkForEach: function () {
          return "undefined" != typeof Array.prototype.forEach;
        },
        checkFind: function () {
          return "undefined" != typeof Array.prototype.find;
        },
        checkBind: function () {
          return "undefined" != typeof Function.prototype.bind;
        },
        checkLocalStorage: function () {
          var t = "modernizr";
          try {
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0;
          } catch (e) {
            return !1;
          }
        },
        checkMutationObserver: function () {
          return "undefined" != typeof window.MutationObserver;
        },
      });
  },
  function (t, e, r) {
    t.exports = function () {
      if ((r(4).polyfill(), r(8), this.Element)) {
        var t = function (t) {
          t.matches = t.matchesSelector =
            t.matchesSelector ||
            t.webkitMatchesSelector ||
            t.mozMatchesSelector ||
            t.msMatchesSelector ||
            t.oMatchesSelector ||
            function (t) {
              for (
                var e = (this.parentNode || this.document).querySelectorAll(t),
                  r = -1;
                e[++r] && e[r] !== this;

              );
              return !!e[r];
            };
        };
        t(Element.prototype);
      }
      Array.prototype.find ||
        Object.defineProperty(Array.prototype, "find", {
          value: function (t) {
            if (null == this)
              throw new TypeError('"this" is null or not defined');
            var e = Object(this),
              r = e.length >>> 0;
            if ("function" != typeof t)
              throw new TypeError("predicate must be a function");
            for (var n = arguments[1], o = 0; r > o; ) {
              var i = e[o];
              if (t.call(n, i, o, e)) return i;
              o++;
            }
            return void 0;
          },
          configurable: !0,
          writable: !0,
        });
    };
  },
  function (t, e, r) {
    var n;
    (function (t, o, i) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
       * @version   3.0.2
       */
      (function () {
        "use strict";
        function s(t) {
          return "function" == typeof t || ("object" == typeof t && null !== t);
        }
        function u(t) {
          return "function" == typeof t;
        }
        function a(t) {
          return "object" == typeof t && null !== t;
        }
        function f(t) {
          W = t;
        }
        function c(t) {
          Z = t;
        }
        function h() {
          return function () {
            t.nextTick(g);
          };
        }
        function l() {
          return function () {
            J(g);
          };
        }
        function p() {
          var t = 0,
            e = new tt(g),
            r = document.createTextNode("");
          return (
            e.observe(r, { characterData: !0 }),
            function () {
              r.data = t = ++t % 2;
            }
          );
        }
        function d() {
          var t = new MessageChannel();
          return (
            (t.port1.onmessage = g),
            function () {
              t.port2.postMessage(0);
            }
          );
        }
        function y() {
          return function () {
            setTimeout(g, 1);
          };
        }
        function g() {
          for (var t = 0; K > t; t += 2) {
            var e = nt[t],
              r = nt[t + 1];
            e(r), (nt[t] = void 0), (nt[t + 1] = void 0);
          }
          K = 0;
        }
        function w() {
          try {
            var t = r(
              !(function () {
                var t = new Error('Cannot find module "vertx"');
                throw ((t.code = "MODULE_NOT_FOUND"), t);
              })()
            );
            return (J = t.runOnLoop || t.runOnContext), l();
          } catch (e) {
            return y();
          }
        }
        function v() {}
        function m() {
          return new TypeError("You cannot resolve a promise with itself");
        }
        function b() {
          return new TypeError(
            "A promises callback cannot return that same promise."
          );
        }
        function _(t) {
          try {
            return t.then;
          } catch (e) {
            return (ut.error = e), ut;
          }
        }
        function E(t, e, r, n) {
          try {
            t.call(e, r, n);
          } catch (o) {
            return o;
          }
        }
        function A(t, e, r) {
          Z(function (t) {
            var n = !1,
              o = E(
                r,
                e,
                function (r) {
                  n || ((n = !0), e !== r ? S(t, r) : x(t, r));
                },
                function (e) {
                  n || ((n = !0), B(t, e));
                },
                "Settle: " + (t._label || " unknown promise")
              );
            !n && o && ((n = !0), B(t, o));
          }, t);
        }
        function T(t, e) {
          e._state === it
            ? x(t, e._result)
            : e._state === st
            ? B(t, e._result)
            : U(
                e,
                void 0,
                function (e) {
                  S(t, e);
                },
                function (e) {
                  B(t, e);
                }
              );
        }
        function R(t, e) {
          if (e.constructor === t.constructor) T(t, e);
          else {
            var r = _(e);
            r === ut
              ? B(t, ut.error)
              : void 0 === r
              ? x(t, e)
              : u(r)
              ? A(t, e, r)
              : x(t, e);
          }
        }
        function S(t, e) {
          t === e ? B(t, m()) : s(e) ? R(t, e) : x(t, e);
        }
        function P(t) {
          t._onerror && t._onerror(t._result), O(t);
        }
        function x(t, e) {
          t._state === ot &&
            ((t._result = e),
            (t._state = it),
            0 !== t._subscribers.length && Z(O, t));
        }
        function B(t, e) {
          t._state === ot && ((t._state = st), (t._result = e), Z(P, t));
        }
        function U(t, e, r, n) {
          var o = t._subscribers,
            i = o.length;
          (t._onerror = null),
            (o[i] = e),
            (o[i + it] = r),
            (o[i + st] = n),
            0 === i && t._state && Z(O, t);
        }
        function O(t) {
          var e = t._subscribers,
            r = t._state;
          if (0 !== e.length) {
            for (var n, o, i = t._result, s = 0; s < e.length; s += 3)
              (n = e[s]), (o = e[s + r]), n ? C(r, n, o, i) : o(i);
            t._subscribers.length = 0;
          }
        }
        function I() {
          this.error = null;
        }
        function L(t, e) {
          try {
            return t(e);
          } catch (r) {
            return (at.error = r), at;
          }
        }
        function C(t, e, r, n) {
          var o,
            i,
            s,
            a,
            f = u(r);
          if (f) {
            if (
              ((o = L(r, n)),
              o === at ? ((a = !0), (i = o.error), (o = null)) : (s = !0),
              e === o)
            )
              return void B(e, b());
          } else (o = n), (s = !0);
          e._state !== ot ||
            (f && s
              ? S(e, o)
              : a
              ? B(e, i)
              : t === it
              ? x(e, o)
              : t === st && B(e, o));
        }
        function D(t, e) {
          try {
            e(
              function (e) {
                S(t, e);
              },
              function (e) {
                B(t, e);
              }
            );
          } catch (r) {
            B(t, r);
          }
        }
        function k(t, e) {
          var r = this;
          (r._instanceConstructor = t),
            (r.promise = new t(v)),
            r._validateInput(e)
              ? ((r._input = e),
                (r.length = e.length),
                (r._remaining = e.length),
                r._init(),
                0 === r.length
                  ? x(r.promise, r._result)
                  : ((r.length = r.length || 0),
                    r._enumerate(),
                    0 === r._remaining && x(r.promise, r._result)))
              : B(r.promise, r._validationError());
        }
        function M(t) {
          return new ft(this, t).promise;
        }
        function Y(t) {
          function e(t) {
            S(o, t);
          }
          function r(t) {
            B(o, t);
          }
          var n = this,
            o = new n(v);
          if (!V(t))
            return B(o, new TypeError("You must pass an array to race.")), o;
          for (var i = t.length, s = 0; o._state === ot && i > s; s++)
            U(n.resolve(t[s]), void 0, e, r);
          return o;
        }
        function j(t) {
          var e = this;
          if (t && "object" == typeof t && t.constructor === e) return t;
          var r = new e(v);
          return S(r, t), r;
        }
        function N(t) {
          var e = this,
            r = new e(v);
          return B(r, t), r;
        }
        function q() {
          throw new TypeError(
            "You must pass a resolver function as the first argument to the promise constructor"
          );
        }
        function F() {
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          );
        }
        function H(t) {
          (this._id = dt++),
            (this._state = void 0),
            (this._result = void 0),
            (this._subscribers = []),
            v !== t && (u(t) || q(), this instanceof H || F(), D(this, t));
        }
        function z() {
          var t;
          if ("undefined" != typeof o) t = o;
          else if ("undefined" != typeof self) t = self;
          else
            try {
              t = Function("return this")();
            } catch (e) {
              throw new Error(
                "polyfill failed because global object is unavailable in this environment"
              );
            }
          var r = t.Promise;
          (!r ||
            "[object Promise]" !==
              Object.prototype.toString.call(r.resolve()) ||
            r.cast) &&
            (t.Promise = yt);
        }
        var X;
        X = Array.isArray
          ? Array.isArray
          : function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            };
        var J,
          W,
          G,
          V = X,
          K = 0,
          Z =
            ({}.toString,
            function (t, e) {
              (nt[K] = t),
                (nt[K + 1] = e),
                (K += 2),
                2 === K && (W ? W(g) : G());
            }),
          $ = "undefined" != typeof window ? window : void 0,
          Q = $ || {},
          tt = Q.MutationObserver || Q.WebKitMutationObserver,
          et =
            "undefined" != typeof t &&
            "[object process]" === {}.toString.call(t),
          rt =
            "undefined" != typeof Uint8ClampedArray &&
            "undefined" != typeof importScripts &&
            "undefined" != typeof MessageChannel,
          nt = new Array(1e3);
        G = et ? h() : tt ? p() : rt ? d() : void 0 === $ ? w() : y();
        var ot = void 0,
          it = 1,
          st = 2,
          ut = new I(),
          at = new I();
        (k.prototype._validateInput = function (t) {
          return V(t);
        }),
          (k.prototype._validationError = function () {
            return new Error("Array Methods must be provided an Array");
          }),
          (k.prototype._init = function () {
            this._result = new Array(this.length);
          });
        var ft = k;
        (k.prototype._enumerate = function () {
          for (
            var t = this, e = t.length, r = t.promise, n = t._input, o = 0;
            r._state === ot && e > o;
            o++
          )
            t._eachEntry(n[o], o);
        }),
          (k.prototype._eachEntry = function (t, e) {
            var r = this,
              n = r._instanceConstructor;
            a(t)
              ? t.constructor === n && t._state !== ot
                ? ((t._onerror = null), r._settledAt(t._state, e, t._result))
                : r._willSettleAt(n.resolve(t), e)
              : (r._remaining--, (r._result[e] = t));
          }),
          (k.prototype._settledAt = function (t, e, r) {
            var n = this,
              o = n.promise;
            o._state === ot &&
              (n._remaining--, t === st ? B(o, r) : (n._result[e] = r)),
              0 === n._remaining && x(o, n._result);
          }),
          (k.prototype._willSettleAt = function (t, e) {
            var r = this;
            U(
              t,
              void 0,
              function (t) {
                r._settledAt(it, e, t);
              },
              function (t) {
                r._settledAt(st, e, t);
              }
            );
          });
        var ct = M,
          ht = Y,
          lt = j,
          pt = N,
          dt = 0,
          yt = H;
        (H.all = ct),
          (H.race = ht),
          (H.resolve = lt),
          (H.reject = pt),
          (H._setScheduler = f),
          (H._setAsap = c),
          (H._asap = Z),
          (H.prototype = {
            constructor: H,
            then: function (t, e) {
              var r = this,
                n = r._state;
              if ((n === it && !t) || (n === st && !e)) return this;
              var o = new this.constructor(v),
                i = r._result;
              if (n) {
                var s = arguments[n - 1];
                Z(function () {
                  C(n, o, s, i);
                });
              } else U(r, o, t, e);
              return o;
            },
            catch: function (t) {
              return this.then(null, t);
            },
          });
        var gt = z,
          wt = { Promise: yt, polyfill: gt };
        r(7).amd
          ? ((n = function () {
              return wt;
            }.call(e, r, e, i)),
            !(void 0 !== n && (i.exports = n)))
          : "undefined" != typeof i && i.exports
          ? (i.exports = wt)
          : "undefined" != typeof this && (this.ES6Promise = wt),
          gt();
      }.call(this));
    }.call(
      e,
      r(5),
      (function () {
        return this;
      })(),
      r(6)(t)
    ));
  },
  function (t, e) {
    function r() {
      throw new Error("setTimeout has not been defined");
    }
    function n() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(t) {
      if (c === setTimeout) return setTimeout(t, 0);
      if ((c === r || !c) && setTimeout)
        return (c = setTimeout), setTimeout(t, 0);
      try {
        return c(t, 0);
      } catch (e) {
        try {
          return c.call(null, t, 0);
        } catch (e) {
          return c.call(this, t, 0);
        }
      }
    }
    function i(t) {
      if (h === clearTimeout) return clearTimeout(t);
      if ((h === n || !h) && clearTimeout)
        return (h = clearTimeout), clearTimeout(t);
      try {
        return h(t);
      } catch (e) {
        try {
          return h.call(null, t);
        } catch (e) {
          return h.call(this, t);
        }
      }
    }
    function s() {
      y &&
        p &&
        ((y = !1), p.length ? (d = p.concat(d)) : (g = -1), d.length && u());
    }
    function u() {
      if (!y) {
        var t = o(s);
        y = !0;
        for (var e = d.length; e; ) {
          for (p = d, d = []; ++g < e; ) p && p[g].run();
          (g = -1), (e = d.length);
        }
        (p = null), (y = !1), i(t);
      }
    }
    function a(t, e) {
      (this.fun = t), (this.array = e);
    }
    function f() {}
    var c,
      h,
      l = (t.exports = {});
    !(function () {
      try {
        c = "function" == typeof setTimeout ? setTimeout : r;
      } catch (t) {
        c = r;
      }
      try {
        h = "function" == typeof clearTimeout ? clearTimeout : n;
      } catch (t) {
        h = n;
      }
    })();
    var p,
      d = [],
      y = !1,
      g = -1;
    (l.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      d.push(new a(t, e)), 1 !== d.length || y || o(u);
    }),
      (a.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (l.title = "browser"),
      (l.browser = !0),
      (l.env = {}),
      (l.argv = []),
      (l.version = ""),
      (l.versions = {}),
      (l.on = f),
      (l.addListener = f),
      (l.once = f),
      (l.off = f),
      (l.removeListener = f),
      (l.removeAllListeners = f),
      (l.emit = f),
      (l.prependListener = f),
      (l.prependOnceListener = f),
      (l.listeners = function (t) {
        return [];
      }),
      (l.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (l.cwd = function () {
        return "/";
      }),
      (l.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (l.umask = function () {
        return 0;
      });
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          (t.children = []),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  },
  function (t, e) {
    !(function () {
      "use strict";
      function t(t) {
        if (
          ("string" != typeof t && (t = String(t)),
          /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
        )
          throw new TypeError("Invalid character in header field name");
        return t.toLowerCase();
      }
      function e(t) {
        return "string" != typeof t && (t = String(t)), t;
      }
      function r(t) {
        (this.map = {}),
          t instanceof r
            ? t.forEach(function (t, e) {
                this.append(e, t);
              }, this)
            : t &&
              Object.getOwnPropertyNames(t).forEach(function (e) {
                this.append(e, t[e]);
              }, this);
      }
      function n(t) {
        return t.bodyUsed
          ? Promise.reject(new TypeError("Already read"))
          : void (t.bodyUsed = !0);
      }
      function o(t) {
        return new Promise(function (e, r) {
          (t.onload = function () {
            e(t.result);
          }),
            (t.onerror = function () {
              r(t.error);
            });
        });
      }
      function i(t) {
        var e = new FileReader();
        return e.readAsArrayBuffer(t), o(e);
      }
      function s(t) {
        var e = new FileReader();
        return e.readAsText(t), o(e);
      }
      function u() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (t) {
            if (((this._bodyInit = t), "string" == typeof t))
              this._bodyText = t;
            else if (p.blob && Blob.prototype.isPrototypeOf(t))
              this._bodyBlob = t;
            else if (p.formData && FormData.prototype.isPrototypeOf(t))
              this._bodyFormData = t;
            else {
              if (t) throw new Error("unsupported BodyInit type");
              this._bodyText = "";
            }
          }),
          p.blob
            ? ((this.blob = function () {
                var t = n(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this.blob().then(i);
              }),
              (this.text = function () {
                var t = n(this);
                if (t) return t;
                if (this._bodyBlob) return s(this._bodyBlob);
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }))
            : (this.text = function () {
                var t = n(this);
                return t ? t : Promise.resolve(this._bodyText);
              }),
          p.formData &&
            (this.formData = function () {
              return this.text().then(c);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      function a(t) {
        var e = t.toUpperCase();
        return d.indexOf(e) > -1 ? e : t;
      }
      function f(t, e) {
        e = e || {};
        var n = e.body;
        if (f.prototype.isPrototypeOf(t)) {
          if (t.bodyUsed) throw new TypeError("Already read");
          (this.url = t.url),
            (this.credentials = t.credentials),
            e.headers || (this.headers = new r(t.headers)),
            (this.method = t.method),
            (this.mode = t.mode),
            n || ((n = t._bodyInit), (t.bodyUsed = !0));
        } else this.url = t;
        if (
          ((this.credentials = e.credentials || this.credentials || "omit"),
          (e.headers || !this.headers) && (this.headers = new r(e.headers)),
          (this.method = a(e.method || this.method || "GET")),
          (this.mode = e.mode || this.mode || null),
          (this.referrer = null),
          ("GET" === this.method || "HEAD" === this.method) && n)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n);
      }
      function c(t) {
        var e = new FormData();
        return (
          t
            .trim()
            .split("&")
            .forEach(function (t) {
              if (t) {
                var r = t.split("="),
                  n = r.shift().replace(/\+/g, " "),
                  o = r.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(n), decodeURIComponent(o));
              }
            }),
          e
        );
      }
      function h(t) {
        var e = new r(),
          n = t.getAllResponseHeaders().trim().split("\n");
        return (
          n.forEach(function (t) {
            var r = t.trim().split(":"),
              n = r.shift().trim(),
              o = r.join(":").trim();
            e.append(n, o);
          }),
          e
        );
      }
      function l(t, e) {
        e || (e = {}),
          this._initBody(t),
          (this.type = "default"),
          (this.status = e.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = e.statusText),
          (this.headers =
            e.headers instanceof r ? e.headers : new r(e.headers)),
          (this.url = e.url || "");
      }
      if (!self.fetch) {
        (r.prototype.append = function (r, n) {
          (r = t(r)), (n = e(n));
          var o = this.map[r];
          o || ((o = []), (this.map[r] = o)), o.push(n);
        }),
          (r.prototype["delete"] = function (e) {
            delete this.map[t(e)];
          }),
          (r.prototype.get = function (e) {
            var r = this.map[t(e)];
            return r ? r[0] : null;
          }),
          (r.prototype.getAll = function (e) {
            return this.map[t(e)] || [];
          }),
          (r.prototype.has = function (e) {
            return this.map.hasOwnProperty(t(e));
          }),
          (r.prototype.set = function (r, n) {
            this.map[t(r)] = [e(n)];
          }),
          (r.prototype.forEach = function (t, e) {
            Object.getOwnPropertyNames(this.map).forEach(function (r) {
              this.map[r].forEach(function (n) {
                t.call(e, n, r, this);
              }, this);
            }, this);
          });
        var p = {
            blob:
              "FileReader" in self &&
              "Blob" in self &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            formData: "FormData" in self,
          },
          d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        (f.prototype.clone = function () {
          return new f(this);
        }),
          u.call(f.prototype),
          u.call(l.prototype),
          (l.prototype.clone = function () {
            return new l(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new r(this.headers),
              url: this.url,
            });
          }),
          (l.error = function () {
            var t = new l(null, { status: 0, statusText: "" });
            return (t.type = "error"), t;
          });
        var y = [301, 302, 303, 307, 308];
        (l.redirect = function (t, e) {
          if (-1 === y.indexOf(e)) throw new RangeError("Invalid status code");
          return new l(null, { status: e, headers: { location: t } });
        }),
          (self.Headers = r),
          (self.Request = f),
          (self.Response = l),
          (self.fetch = function (t, e) {
            return new Promise(function (r, n) {
              function o() {
                return "responseURL" in s
                  ? s.responseURL
                  : /^X-Request-URL:/m.test(s.getAllResponseHeaders())
                  ? s.getResponseHeader("X-Request-URL")
                  : void 0;
              }
              var i;
              i = f.prototype.isPrototypeOf(t) && !e ? t : new f(t, e);
              var s = new XMLHttpRequest();
              (s.onload = function () {
                var t = 1223 === s.status ? 204 : s.status;
                if (100 > t || t > 599)
                  return void n(new TypeError("Network request failed"));
                var e = {
                    status: t,
                    statusText: s.statusText,
                    headers: h(s),
                    url: o(),
                  },
                  i = "response" in s ? s.response : s.responseText;
                r(new l(i, e));
              }),
                (s.onerror = function () {
                  n(new TypeError("Network request failed"));
                }),
                s.open(i.method, i.url, !0),
                "include" === i.credentials && (s.withCredentials = !0),
                "responseType" in s && p.blob && (s.responseType = "blob"),
                i.headers.forEach(function (t, e) {
                  s.setRequestHeader(e, t);
                }),
                s.send("undefined" == typeof i._bodyInit ? null : i._bodyInit);
            });
          }),
          (self.fetch.polyfill = !0);
      }
    })();
  },
  function (t, e, r) {
    var n = r(10);
    -1 !== window.location.hostname.indexOf("appmate-dev") &&
      ((n.app.host = "https://appmate-restapi.serveo.net/v1"),
      (n.session.cacheScripts = !1)),
      (t.exports = n);
  },
  function (t, e) {
    t.exports = {
      version: "1.4.44",
      app: { host: "https://api.appmate.io/v1", autoLoad: !0 },
      cdn: { host: "https://cdn.appmate.io/legacy-toolkit/{VERSION}" },
      shop: { domain: "" },
      session: { customer: "", expiration: 90, cacheScripts: !1 },
      wishlist: {
        productsPerPage: 100,
        loginRequired: !1,
        handle: "/pages/wishlist",
        proxyHandle: "/a/wk",
        share: {
          handle: "/pages/shared-wishlist",
          title: "My Wishlist",
          description: "Check out some of my favourite things.",
          imageTitle: !1,
          hashTags: "wishlist",
          twitterUser: !1,
        },
      },
      globals: {},
    };
  },
  function (t, e, r) {
    function n(t, e) {
      o(t, e);
    }
    var o = r(12);
    t.exports = n;
  },
  function (t, e, r) {
    (function (e) {
      /*!
       * @description Recursive object extending
       * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
       * @license MIT
       *
       * The MIT License (MIT)
       *
       * Copyright (c) 2013-2015 Viacheslav Lotsmanov
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy of
       * this software and associated documentation files (the "Software"), to deal in
       * the Software without restriction, including without limitation the rights to
       * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
       * the Software, and to permit persons to whom the Software is furnished to do so,
       * subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
       * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
       * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
       * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
       * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
       */
      "use strict";
      function r(t) {
        return t instanceof e || t instanceof Date || t instanceof RegExp
          ? !0
          : !1;
      }
      function n(t) {
        if (t instanceof e) {
          var r = new e(t.length);
          return t.copy(r), r;
        }
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof RegExp) return new RegExp(t);
        throw new Error("Unexpected situation");
      }
      function o(t) {
        var e = [];
        return (
          t.forEach(function (t, s) {
            "object" == typeof t && null !== t
              ? Array.isArray(t)
                ? (e[s] = o(t))
                : r(t)
                ? (e[s] = n(t))
                : (e[s] = i({}, t))
              : (e[s] = t);
          }),
          e
        );
      }
      var i = (t.exports = function () {
        if (arguments.length < 1 || "object" != typeof arguments[0]) return !1;
        if (arguments.length < 2) return arguments[0];
        var t,
          e,
          s = arguments[0],
          u = Array.prototype.slice.call(arguments, 1);
        return (
          u.forEach(function (u) {
            "object" != typeof u ||
              null === u ||
              Array.isArray(u) ||
              Object.keys(u).forEach(function (a) {
                return (
                  (e = s[a]),
                  (t = u[a]),
                  t === s
                    ? void 0
                    : "object" != typeof t || null === t
                    ? void (s[a] = t)
                    : Array.isArray(t)
                    ? void (s[a] = o(t))
                    : r(t)
                    ? void (s[a] = n(t))
                    : "object" != typeof e || null === e || Array.isArray(e)
                    ? void (s[a] = i({}, t))
                    : void (s[a] = i(e, t))
                );
              });
          }),
          s
        );
      });
    }.call(e, r(13).Buffer));
  },
  function (t, e, r) {
    (function (t, n) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      "use strict";
      function o() {
        try {
          var t = new Uint8Array(1);
          return (
            (t.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            }),
            42 === t.foo() &&
              "function" == typeof t.subarray &&
              0 === t.subarray(1, 1).byteLength
          );
        } catch (e) {
          return !1;
        }
      }
      function i() {
        return t.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(e, r) {
        if (i() < r) throw new RangeError("Invalid typed array length");
        return (
          t.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(r)), (e.__proto__ = t.prototype))
            : (null === e && (e = new t(r)), (e.length = r)),
          e
        );
      }
      function t(e, r, n) {
        if (!(t.TYPED_ARRAY_SUPPORT || this instanceof t))
          return new t(e, r, n);
        if ("number" == typeof e) {
          if ("string" == typeof r)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return c(this, e);
        }
        return u(this, e, r, n);
      }
      function u(t, e, r, n) {
        if ("number" == typeof e)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
          ? p(t, e, r, n)
          : "string" == typeof e
          ? h(t, e, r)
          : d(t, e);
      }
      function a(t) {
        if ("number" != typeof t)
          throw new TypeError('"size" argument must be a number');
        if (0 > t) throw new RangeError('"size" argument must not be negative');
      }
      function f(t, e, r, n) {
        return (
          a(e),
          0 >= e
            ? s(t, e)
            : void 0 !== r
            ? "string" == typeof n
              ? s(t, e).fill(r, n)
              : s(t, e).fill(r)
            : s(t, e)
        );
      }
      function c(e, r) {
        if ((a(r), (e = s(e, 0 > r ? 0 : 0 | y(r))), !t.TYPED_ARRAY_SUPPORT))
          for (var n = 0; r > n; ++n) e[n] = 0;
        return e;
      }
      function h(e, r, n) {
        if (
          (("string" != typeof n || "" === n) && (n = "utf8"), !t.isEncoding(n))
        )
          throw new TypeError('"encoding" must be a valid string encoding');
        var o = 0 | w(r, n);
        e = s(e, o);
        var i = e.write(r, n);
        return i !== o && (e = e.slice(0, i)), e;
      }
      function l(t, e) {
        var r = e.length < 0 ? 0 : 0 | y(e.length);
        t = s(t, r);
        for (var n = 0; r > n; n += 1) t[n] = 255 & e[n];
        return t;
      }
      function p(e, r, n, o) {
        if ((r.byteLength, 0 > n || r.byteLength < n))
          throw new RangeError("'offset' is out of bounds");
        if (r.byteLength < n + (o || 0))
          throw new RangeError("'length' is out of bounds");
        return (
          (r =
            void 0 === n && void 0 === o
              ? new Uint8Array(r)
              : void 0 === o
              ? new Uint8Array(r, n)
              : new Uint8Array(r, n, o)),
          t.TYPED_ARRAY_SUPPORT
            ? ((e = r), (e.__proto__ = t.prototype))
            : (e = l(e, r)),
          e
        );
      }
      function d(e, r) {
        if (t.isBuffer(r)) {
          var n = 0 | y(r.length);
          return (e = s(e, n)), 0 === e.length ? e : (r.copy(e, 0, 0, n), e);
        }
        if (r) {
          if (
            ("undefined" != typeof ArrayBuffer &&
              r.buffer instanceof ArrayBuffer) ||
            "length" in r
          )
            return "number" != typeof r.length || K(r.length)
              ? s(e, 0)
              : l(e, r);
          if ("Buffer" === r.type && Q(r.data)) return l(e, r.data);
        }
        throw new TypeError(
          "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
        );
      }
      function y(t) {
        if (t >= i())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              i().toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function g(e) {
        return +e != e && (e = 0), t.alloc(+e);
      }
      function w(e, r) {
        if (t.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var o = !1; ; )
          switch (r) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return X(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return G(e).length;
            default:
              if (o) return X(e).length;
              (r = ("" + r).toLowerCase()), (o = !0);
          }
      }
      function v(t, e, r) {
        var n = !1;
        if (((void 0 === e || 0 > e) && (e = 0), e > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), 0 >= r))
          return "";
        if (((r >>>= 0), (e >>>= 0), e >= r)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return L(this, e, r);
            case "utf8":
            case "utf-8":
              return B(this, e, r);
            case "ascii":
              return O(this, e, r);
            case "latin1":
            case "binary":
              return I(this, e, r);
            case "base64":
              return x(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return C(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (n = !0);
          }
      }
      function m(t, e, r) {
        var n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function b(e, r, n, o, i) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof n
            ? ((o = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : -2147483648 > n && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = i ? 0 : e.length - 1),
          0 > n && (n = e.length + n),
          n >= e.length)
        ) {
          if (i) return -1;
          n = e.length - 1;
        } else if (0 > n) {
          if (!i) return -1;
          n = 0;
        }
        if (("string" == typeof r && (r = t.from(r, o)), t.isBuffer(r)))
          return 0 === r.length ? -1 : _(e, r, n, o, i);
        if ("number" == typeof r)
          return (
            (r = 255 & r),
            t.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, r, n)
                : Uint8Array.prototype.lastIndexOf.call(e, r, n)
              : _(e, [r], n, o, i)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function _(t, e, r, n, o) {
        function i(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        var s = 1,
          u = t.length,
          a = e.length;
        if (
          void 0 !== n &&
          ((n = String(n).toLowerCase()),
          "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (u /= 2), (a /= 2), (r /= 2);
        }
        var f;
        if (o) {
          var c = -1;
          for (f = r; u > f; f++)
            if (i(t, f) === i(e, -1 === c ? 0 : f - c)) {
              if ((-1 === c && (c = f), f - c + 1 === a)) return c * s;
            } else -1 !== c && (f -= f - c), (c = -1);
        } else
          for (r + a > u && (r = u - a), f = r; f >= 0; f--) {
            for (var h = !0, l = 0; a > l; l++)
              if (i(t, f + l) !== i(e, l)) {
                h = !1;
                break;
              }
            if (h) return f;
          }
        return -1;
      }
      function E(t, e, r, n) {
        r = Number(r) || 0;
        var o = t.length - r;
        n ? ((n = Number(n)), n > o && (n = o)) : (n = o);
        var i = e.length;
        if (i % 2 !== 0) throw new TypeError("Invalid hex string");
        n > i / 2 && (n = i / 2);
        for (var s = 0; n > s; ++s) {
          var u = parseInt(e.substr(2 * s, 2), 16);
          if (isNaN(u)) return s;
          t[r + s] = u;
        }
        return s;
      }
      function A(t, e, r, n) {
        return V(X(e, t.length - r), t, r, n);
      }
      function T(t, e, r, n) {
        return V(J(e), t, r, n);
      }
      function R(t, e, r, n) {
        return T(t, e, r, n);
      }
      function S(t, e, r, n) {
        return V(G(e), t, r, n);
      }
      function P(t, e, r, n) {
        return V(W(e, t.length - r), t, r, n);
      }
      function x(t, e, r) {
        return 0 === e && r === t.length
          ? Z.fromByteArray(t)
          : Z.fromByteArray(t.slice(e, r));
      }
      function B(t, e, r) {
        r = Math.min(t.length, r);
        for (var n = [], o = e; r > o; ) {
          var i = t[o],
            s = null,
            u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
          if (r >= o + u) {
            var a, f, c, h;
            switch (u) {
              case 1:
                128 > i && (s = i);
                break;
              case 2:
                (a = t[o + 1]),
                  128 === (192 & a) &&
                    ((h = ((31 & i) << 6) | (63 & a)), h > 127 && (s = h));
                break;
              case 3:
                (a = t[o + 1]),
                  (f = t[o + 2]),
                  128 === (192 & a) &&
                    128 === (192 & f) &&
                    ((h = ((15 & i) << 12) | ((63 & a) << 6) | (63 & f)),
                    h > 2047 && (55296 > h || h > 57343) && (s = h));
                break;
              case 4:
                (a = t[o + 1]),
                  (f = t[o + 2]),
                  (c = t[o + 3]),
                  128 === (192 & a) &&
                    128 === (192 & f) &&
                    128 === (192 & c) &&
                    ((h =
                      ((15 & i) << 18) |
                      ((63 & a) << 12) |
                      ((63 & f) << 6) |
                      (63 & c)),
                    h > 65535 && 1114112 > h && (s = h));
            }
          }
          null === s
            ? ((s = 65533), (u = 1))
            : s > 65535 &&
              ((s -= 65536),
              n.push(((s >>> 10) & 1023) | 55296),
              (s = 56320 | (1023 & s))),
            n.push(s),
            (o += u);
        }
        return U(n);
      }
      function U(t) {
        var e = t.length;
        if (tt >= e) return String.fromCharCode.apply(String, t);
        for (var r = "", n = 0; e > n; )
          r += String.fromCharCode.apply(String, t.slice(n, (n += tt)));
        return r;
      }
      function O(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; r > o; ++o) n += String.fromCharCode(127 & t[o]);
        return n;
      }
      function I(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; r > o; ++o) n += String.fromCharCode(t[o]);
        return n;
      }
      function L(t, e, r) {
        var n = t.length;
        (!e || 0 > e) && (e = 0), (!r || 0 > r || r > n) && (r = n);
        for (var o = "", i = e; r > i; ++i) o += z(t[i]);
        return o;
      }
      function C(t, e, r) {
        for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2)
          o += String.fromCharCode(n[i] + 256 * n[i + 1]);
        return o;
      }
      function D(t, e, r) {
        if (t % 1 !== 0 || 0 > t) throw new RangeError("offset is not uint");
        if (t + e > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function k(e, r, n, o, i, s) {
        if (!t.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (r > i || s > r)
          throw new RangeError('"value" argument is out of bounds');
        if (n + o > e.length) throw new RangeError("Index out of range");
      }
      function M(t, e, r, n) {
        0 > e && (e = 65535 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 2); i > o; ++o)
          t[r + o] =
            (e & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
      }
      function Y(t, e, r, n) {
        0 > e && (e = 4294967295 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 4); i > o; ++o)
          t[r + o] = (e >>> (8 * (n ? o : 3 - o))) & 255;
      }
      function j(t, e, r, n, o, i) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (0 > r) throw new RangeError("Index out of range");
      }
      function N(t, e, r, n, o) {
        return (
          o || j(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38),
          $.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function q(t, e, r, n, o) {
        return (
          o || j(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308),
          $.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      function F(t) {
        if (((t = H(t).replace(et, "")), t.length < 2)) return "";
        for (; t.length % 4 !== 0; ) t += "=";
        return t;
      }
      function H(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function z(t) {
        return 16 > t ? "0" + t.toString(16) : t.toString(16);
      }
      function X(t, e) {
        e = e || 1 / 0;
        for (var r, n = t.length, o = null, i = [], s = 0; n > s; ++s) {
          if (((r = t.charCodeAt(s)), r > 55295 && 57344 > r)) {
            if (!o) {
              if (r > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (56320 > r) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
              continue;
            }
            r = (((o - 55296) << 10) | (r - 56320)) + 65536;
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), 128 > r)) {
            if ((e -= 1) < 0) break;
            i.push(r);
          } else if (2048 > r) {
            if ((e -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (65536 > r) {
            if ((e -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(1114112 > r)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return i;
      }
      function J(t) {
        for (var e = [], r = 0; r < t.length; ++r)
          e.push(255 & t.charCodeAt(r));
        return e;
      }
      function W(t, e) {
        for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
          (r = t.charCodeAt(s)),
            (n = r >> 8),
            (o = r % 256),
            i.push(o),
            i.push(n);
        return i;
      }
      function G(t) {
        return Z.toByteArray(F(t));
      }
      function V(t, e, r, n) {
        for (var o = 0; n > o && !(o + r >= e.length || o >= t.length); ++o)
          e[o + r] = t[o];
        return o;
      }
      function K(t) {
        return t !== t;
      }
      var Z = r(14),
        $ = r(15),
        Q = r(16);
      (e.Buffer = t),
        (e.SlowBuffer = g),
        (e.INSPECT_MAX_BYTES = 50),
        (t.TYPED_ARRAY_SUPPORT =
          void 0 !== n.TYPED_ARRAY_SUPPORT ? n.TYPED_ARRAY_SUPPORT : o()),
        (e.kMaxLength = i()),
        (t.poolSize = 8192),
        (t._augment = function (e) {
          return (e.__proto__ = t.prototype), e;
        }),
        (t.from = function (t, e, r) {
          return u(null, t, e, r);
        }),
        t.TYPED_ARRAY_SUPPORT &&
          ((t.prototype.__proto__ = Uint8Array.prototype),
          (t.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            t[Symbol.species] === t &&
            Object.defineProperty(t, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (t.alloc = function (t, e, r) {
          return f(null, t, e, r);
        }),
        (t.allocUnsafe = function (t) {
          return c(null, t);
        }),
        (t.allocUnsafeSlow = function (t) {
          return c(null, t);
        }),
        (t.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (t.compare = function (e, r) {
          if (!t.isBuffer(e) || !t.isBuffer(r))
            throw new TypeError("Arguments must be Buffers");
          if (e === r) return 0;
          for (
            var n = e.length, o = r.length, i = 0, s = Math.min(n, o);
            s > i;
            ++i
          )
            if (e[i] !== r[i]) {
              (n = e[i]), (o = r[i]);
              break;
            }
          return o > n ? -1 : n > o ? 1 : 0;
        }),
        (t.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (t.concat = function (e, r) {
          if (!Q(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return t.alloc(0);
          var n;
          if (void 0 === r)
            for (r = 0, n = 0; n < e.length; ++n) r += e[n].length;
          var o = t.allocUnsafe(r),
            i = 0;
          for (n = 0; n < e.length; ++n) {
            var s = e[n];
            if (!t.isBuffer(s))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            s.copy(o, i), (i += s.length);
          }
          return o;
        }),
        (t.byteLength = w),
        (t.prototype._isBuffer = !0),
        (t.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; t > e; e += 2) m(this, e, e + 1);
          return this;
        }),
        (t.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; t > e; e += 4)
            m(this, e, e + 3), m(this, e + 1, e + 2);
          return this;
        }),
        (t.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; t > e; e += 8)
            m(this, e, e + 7),
              m(this, e + 1, e + 6),
              m(this, e + 2, e + 5),
              m(this, e + 3, e + 4);
          return this;
        }),
        (t.prototype.toString = function () {
          var t = 0 | this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length
            ? B(this, 0, t)
            : v.apply(this, arguments);
        }),
        (t.prototype.equals = function (e) {
          if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e ? !0 : 0 === t.compare(this, e);
        }),
        (t.prototype.inspect = function () {
          var t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
              this.length > r && (t += " ... ")),
            "<Buffer " + t + ">"
          );
        }),
        (t.prototype.compare = function (e, r, n, o, i) {
          if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === r && (r = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === o && (o = 0),
            void 0 === i && (i = this.length),
            0 > r || n > e.length || 0 > o || i > this.length)
          )
            throw new RangeError("out of range index");
          if (o >= i && r >= n) return 0;
          if (o >= i) return -1;
          if (r >= n) return 1;
          if (((r >>>= 0), (n >>>= 0), (o >>>= 0), (i >>>= 0), this === e))
            return 0;
          for (
            var s = i - o,
              u = n - r,
              a = Math.min(s, u),
              f = this.slice(o, i),
              c = e.slice(r, n),
              h = 0;
            a > h;
            ++h
          )
            if (f[h] !== c[h]) {
              (s = f[h]), (u = c[h]);
              break;
            }
          return u > s ? -1 : s > u ? 1 : 0;
        }),
        (t.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (t.prototype.indexOf = function (t, e, r) {
          return b(this, t, e, r, !0);
        }),
        (t.prototype.lastIndexOf = function (t, e, r) {
          return b(this, t, e, r, !1);
        }),
        (t.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (n = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (e = 0 | e),
              isFinite(r)
                ? ((r = 0 | r), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          var o = this.length - e;
          if (
            ((void 0 === r || r > o) && (r = o),
            (t.length > 0 && (0 > r || 0 > e)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var i = !1; ; )
            switch (n) {
              case "hex":
                return E(this, t, e, r);
              case "utf8":
              case "utf-8":
                return A(this, t, e, r);
              case "ascii":
                return T(this, t, e, r);
              case "latin1":
              case "binary":
                return R(this, t, e, r);
              case "base64":
                return S(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return P(this, t, e, r);
              default:
                if (i) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (i = !0);
            }
        }),
        (t.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var tt = 4096;
      (t.prototype.slice = function (e, r) {
        var n = this.length;
        (e = ~~e),
          (r = void 0 === r ? n : ~~r),
          0 > e ? ((e += n), 0 > e && (e = 0)) : e > n && (e = n),
          0 > r ? ((r += n), 0 > r && (r = 0)) : r > n && (r = n),
          e > r && (r = e);
        var o;
        if (t.TYPED_ARRAY_SUPPORT)
          (o = this.subarray(e, r)), (o.__proto__ = t.prototype);
        else {
          var i = r - e;
          o = new t(i, void 0);
          for (var s = 0; i > s; ++s) o[s] = this[s + e];
        }
        return o;
      }),
        (t.prototype.readUIntLE = function (t, e, r) {
          (t = 0 | t), (e = 0 | e), r || D(t, e, this.length);
          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
            n += this[t + i] * o;
          return n;
        }),
        (t.prototype.readUIntBE = function (t, e, r) {
          (t = 0 | t), (e = 0 | e), r || D(t, e, this.length);
          for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); )
            n += this[t + --e] * o;
          return n;
        }),
        (t.prototype.readUInt8 = function (t, e) {
          return e || D(t, 1, this.length), this[t];
        }),
        (t.prototype.readUInt16LE = function (t, e) {
          return e || D(t, 2, this.length), this[t] | (this[t + 1] << 8);
        }),
        (t.prototype.readUInt16BE = function (t, e) {
          return e || D(t, 2, this.length), (this[t] << 8) | this[t + 1];
        }),
        (t.prototype.readUInt32LE = function (t, e) {
          return (
            e || D(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          );
        }),
        (t.prototype.readUInt32BE = function (t, e) {
          return (
            e || D(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
        (t.prototype.readIntLE = function (t, e, r) {
          (t = 0 | t), (e = 0 | e), r || D(t, e, this.length);
          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
            n += this[t + i] * o;
          return (o *= 128), n >= o && (n -= Math.pow(2, 8 * e)), n;
        }),
        (t.prototype.readIntBE = function (t, e, r) {
          (t = 0 | t), (e = 0 | e), r || D(t, e, this.length);
          for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256); )
            i += this[t + --n] * o;
          return (o *= 128), i >= o && (i -= Math.pow(2, 8 * e)), i;
        }),
        (t.prototype.readInt8 = function (t, e) {
          return (
            e || D(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (t.prototype.readInt16LE = function (t, e) {
          e || D(t, 2, this.length);
          var r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (t.prototype.readInt16BE = function (t, e) {
          e || D(t, 2, this.length);
          var r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (t.prototype.readInt32LE = function (t, e) {
          return (
            e || D(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (t.prototype.readInt32BE = function (t, e) {
          return (
            e || D(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (t.prototype.readFloatLE = function (t, e) {
          return e || D(t, 4, this.length), $.read(this, t, !0, 23, 4);
        }),
        (t.prototype.readFloatBE = function (t, e) {
          return e || D(t, 4, this.length), $.read(this, t, !1, 23, 4);
        }),
        (t.prototype.readDoubleLE = function (t, e) {
          return e || D(t, 8, this.length), $.read(this, t, !0, 52, 8);
        }),
        (t.prototype.readDoubleBE = function (t, e) {
          return e || D(t, 8, this.length), $.read(this, t, !1, 52, 8);
        }),
        (t.prototype.writeUIntLE = function (t, e, r, n) {
          if (((t = +t), (e = 0 | e), (r = 0 | r), !n)) {
            var o = Math.pow(2, 8 * r) - 1;
            k(this, t, e, r, o, 0);
          }
          var i = 1,
            s = 0;
          for (this[e] = 255 & t; ++s < r && (i *= 256); )
            this[e + s] = (t / i) & 255;
          return e + r;
        }),
        (t.prototype.writeUIntBE = function (t, e, r, n) {
          if (((t = +t), (e = 0 | e), (r = 0 | r), !n)) {
            var o = Math.pow(2, 8 * r) - 1;
            k(this, t, e, r, o, 0);
          }
          var i = r - 1,
            s = 1;
          for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
            this[e + i] = (t / s) & 255;
          return e + r;
        }),
        (t.prototype.writeUInt8 = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 1, 255, 0),
            t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[r] = 255 & e),
            r + 1
          );
        }),
        (t.prototype.writeUInt16LE = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 2, 65535, 0),
            t.TYPED_ARRAY_SUPPORT
              ? ((this[r] = 255 & e), (this[r + 1] = e >>> 8))
              : M(this, e, r, !0),
            r + 2
          );
        }),
        (t.prototype.writeUInt16BE = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 2, 65535, 0),
            t.TYPED_ARRAY_SUPPORT
              ? ((this[r] = e >>> 8), (this[r + 1] = 255 & e))
              : M(this, e, r, !1),
            r + 2
          );
        }),
        (t.prototype.writeUInt32LE = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 4, 4294967295, 0),
            t.TYPED_ARRAY_SUPPORT
              ? ((this[r + 3] = e >>> 24),
                (this[r + 2] = e >>> 16),
                (this[r + 1] = e >>> 8),
                (this[r] = 255 & e))
              : Y(this, e, r, !0),
            r + 4
          );
        }),
        (t.prototype.writeUInt32BE = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 4, 4294967295, 0),
            t.TYPED_ARRAY_SUPPORT
              ? ((this[r] = e >>> 24),
                (this[r + 1] = e >>> 16),
                (this[r + 2] = e >>> 8),
                (this[r + 3] = 255 & e))
              : Y(this, e, r, !1),
            r + 4
          );
        }),
        (t.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e = 0 | e), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            k(this, t, e, r, o - 1, -o);
          }
          var i = 0,
            s = 1,
            u = 0;
          for (this[e] = 255 & t; ++i < r && (s *= 256); )
            0 > t && 0 === u && 0 !== this[e + i - 1] && (u = 1),
              (this[e + i] = (((t / s) >> 0) - u) & 255);
          return e + r;
        }),
        (t.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e = 0 | e), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            k(this, t, e, r, o - 1, -o);
          }
          var i = r - 1,
            s = 1,
            u = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
            0 > t && 0 === u && 0 !== this[e + i + 1] && (u = 1),
              (this[e + i] = (((t / s) >> 0) - u) & 255);
          return e + r;
        }),
        (t.prototype.writeInt8 = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 1, 127, -128),
            t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            0 > e && (e = 255 + e + 1),
            (this[r] = 255 & e),
            r + 1
          );
        }),
        (t.prototype.writeInt16LE = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 2, 32767, -32768),
            t.TYPED_ARRAY_SUPPORT
              ? ((this[r] = 255 & e), (this[r + 1] = e >>> 8))
              : M(this, e, r, !0),
            r + 2
          );
        }),
        (t.prototype.writeInt16BE = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 2, 32767, -32768),
            t.TYPED_ARRAY_SUPPORT
              ? ((this[r] = e >>> 8), (this[r + 1] = 255 & e))
              : M(this, e, r, !1),
            r + 2
          );
        }),
        (t.prototype.writeInt32LE = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 4, 2147483647, -2147483648),
            t.TYPED_ARRAY_SUPPORT
              ? ((this[r] = 255 & e),
                (this[r + 1] = e >>> 8),
                (this[r + 2] = e >>> 16),
                (this[r + 3] = e >>> 24))
              : Y(this, e, r, !0),
            r + 4
          );
        }),
        (t.prototype.writeInt32BE = function (e, r, n) {
          return (
            (e = +e),
            (r = 0 | r),
            n || k(this, e, r, 4, 2147483647, -2147483648),
            0 > e && (e = 4294967295 + e + 1),
            t.TYPED_ARRAY_SUPPORT
              ? ((this[r] = e >>> 24),
                (this[r + 1] = e >>> 16),
                (this[r + 2] = e >>> 8),
                (this[r + 3] = 255 & e))
              : Y(this, e, r, !1),
            r + 4
          );
        }),
        (t.prototype.writeFloatLE = function (t, e, r) {
          return N(this, t, e, !0, r);
        }),
        (t.prototype.writeFloatBE = function (t, e, r) {
          return N(this, t, e, !1, r);
        }),
        (t.prototype.writeDoubleLE = function (t, e, r) {
          return q(this, t, e, !0, r);
        }),
        (t.prototype.writeDoubleBE = function (t, e, r) {
          return q(this, t, e, !1, r);
        }),
        (t.prototype.copy = function (e, r, n, o) {
          if (
            (n || (n = 0),
            o || 0 === o || (o = this.length),
            r >= e.length && (r = e.length),
            r || (r = 0),
            o > 0 && n > o && (o = n),
            o === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (0 > r) throw new RangeError("targetStart out of bounds");
          if (0 > n || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (0 > o) throw new RangeError("sourceEnd out of bounds");
          o > this.length && (o = this.length),
            e.length - r < o - n && (o = e.length - r + n);
          var i,
            s = o - n;
          if (this === e && r > n && o > r)
            for (i = s - 1; i >= 0; --i) e[i + r] = this[i + n];
          else if (1e3 > s || !t.TYPED_ARRAY_SUPPORT)
            for (i = 0; s > i; ++i) e[i + r] = this[i + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), r);
          return s;
        }),
        (t.prototype.fill = function (e, r, n, o) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof r
                ? ((o = r), (r = 0), (n = this.length))
                : "string" == typeof n && ((o = n), (n = this.length)),
              1 === e.length)
            ) {
              var i = e.charCodeAt(0);
              256 > i && (e = i);
            }
            if (void 0 !== o && "string" != typeof o)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof o && !t.isEncoding(o))
              throw new TypeError("Unknown encoding: " + o);
          } else "number" == typeof e && (e = 255 & e);
          if (0 > r || this.length < r || this.length < n)
            throw new RangeError("Out of range index");
          if (r >= n) return this;
          (r >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0);
          var s;
          if ("number" == typeof e) for (s = r; n > s; ++s) this[s] = e;
          else {
            var u = t.isBuffer(e) ? e : X(new t(e, o).toString()),
              a = u.length;
            for (s = 0; n - r > s; ++s) this[s + r] = u[s % a];
          }
          return this;
        });
      var et = /[^+\/0-9A-Za-z-_]/g;
    }.call(
      e,
      r(13).Buffer,
      (function () {
        return this;
      })()
    ));
  },
  function (t, e) {
    "use strict";
    function r(t) {
      var e = t.length;
      if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
    }
    function n(t) {
      return (3 * t.length) / 4 - r(t);
    }
    function o(t) {
      var e,
        n,
        o,
        i,
        s,
        u = t.length;
      (i = r(t)), (s = new c((3 * u) / 4 - i)), (n = i > 0 ? u - 4 : u);
      var a = 0;
      for (e = 0; n > e; e += 4)
        (o =
          (f[t.charCodeAt(e)] << 18) |
          (f[t.charCodeAt(e + 1)] << 12) |
          (f[t.charCodeAt(e + 2)] << 6) |
          f[t.charCodeAt(e + 3)]),
          (s[a++] = (o >> 16) & 255),
          (s[a++] = (o >> 8) & 255),
          (s[a++] = 255 & o);
      return (
        2 === i
          ? ((o = (f[t.charCodeAt(e)] << 2) | (f[t.charCodeAt(e + 1)] >> 4)),
            (s[a++] = 255 & o))
          : 1 === i &&
            ((o =
              (f[t.charCodeAt(e)] << 10) |
              (f[t.charCodeAt(e + 1)] << 4) |
              (f[t.charCodeAt(e + 2)] >> 2)),
            (s[a++] = (o >> 8) & 255),
            (s[a++] = 255 & o)),
        s
      );
    }
    function i(t) {
      return (
        a[(t >> 18) & 63] + a[(t >> 12) & 63] + a[(t >> 6) & 63] + a[63 & t]
      );
    }
    function s(t, e, r) {
      for (var n, o = [], s = e; r > s; s += 3)
        (n = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2]), o.push(i(n));
      return o.join("");
    }
    function u(t) {
      for (
        var e,
          r = t.length,
          n = r % 3,
          o = "",
          i = [],
          u = 16383,
          f = 0,
          c = r - n;
        c > f;
        f += u
      )
        i.push(s(t, f, f + u > c ? c : f + u));
      return (
        1 === n
          ? ((e = t[r - 1]),
            (o += a[e >> 2]),
            (o += a[(e << 4) & 63]),
            (o += "=="))
          : 2 === n &&
            ((e = (t[r - 2] << 8) + t[r - 1]),
            (o += a[e >> 10]),
            (o += a[(e >> 4) & 63]),
            (o += a[(e << 2) & 63]),
            (o += "=")),
        i.push(o),
        i.join("")
      );
    }
    (e.byteLength = n), (e.toByteArray = o), (e.fromByteArray = u);
    for (
      var a = [],
        f = [],
        c = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        l = 0,
        p = h.length;
      p > l;
      ++l
    )
      (a[l] = h[l]), (f[h.charCodeAt(l)] = l);
    (f["-".charCodeAt(0)] = 62), (f["_".charCodeAt(0)] = 63);
  },
  function (t, e) {
    (e.read = function (t, e, r, n, o) {
      var i,
        s,
        u = 8 * o - n - 1,
        a = (1 << u) - 1,
        f = a >> 1,
        c = -7,
        h = r ? o - 1 : 0,
        l = r ? -1 : 1,
        p = t[e + h];
      for (
        h += l, i = p & ((1 << -c) - 1), p >>= -c, c += u;
        c > 0;
        i = 256 * i + t[e + h], h += l, c -= 8
      );
      for (
        s = i & ((1 << -c) - 1), i >>= -c, c += n;
        c > 0;
        s = 256 * s + t[e + h], h += l, c -= 8
      );
      if (0 === i) i = 1 - f;
      else {
        if (i === a) return s ? NaN : (p ? -1 : 1) * (1 / 0);
        (s += Math.pow(2, n)), (i -= f);
      }
      return (p ? -1 : 1) * s * Math.pow(2, i - n);
    }),
      (e.write = function (t, e, r, n, o, i) {
        var s,
          u,
          a,
          f = 8 * i - o - 1,
          c = (1 << f) - 1,
          h = c >> 1,
          l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          p = n ? 0 : i - 1,
          d = n ? 1 : -1,
          y = 0 > e || (0 === e && 0 > 1 / e) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((u = isNaN(e) ? 1 : 0), (s = c))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (a = Math.pow(2, -s)) < 1 && (s--, (a *= 2)),
                (e += s + h >= 1 ? l / a : l * Math.pow(2, 1 - h)),
                e * a >= 2 && (s++, (a /= 2)),
                s + h >= c
                  ? ((u = 0), (s = c))
                  : s + h >= 1
                  ? ((u = (e * a - 1) * Math.pow(2, o)), (s += h))
                  : ((u = e * Math.pow(2, h - 1) * Math.pow(2, o)), (s = 0)));
          o >= 8;
          t[r + p] = 255 & u, p += d, u /= 256, o -= 8
        );
        for (
          s = (s << o) | u, f += o;
          f > 0;
          t[r + p] = 255 & s, p += d, s /= 256, f -= 8
        );
        t[r + p - d] |= 128 * y;
      });
  },
  function (t, e) {
    var r = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == r.call(t);
      };
  },
  function (t, e, r) {
    function n(t, e) {
      (this.url = t), (this.cache = e);
    }
    var o = r(18),
      i = r(20);
    (n.prototype.load = function (t, e) {
      this.cache === !0
        ? this.loadScript(this.url, t, e)
        : this.addScript(this.url, t, e);
    }),
      (n.prototype.loadScript = function (t, e, r) {
        var n = new o({ url: t, cache: this.cache });
        i.debug("Load script", t),
          n.get(
            function (t) {
              this.injectScript(t), e();
            }.bind(this),
            r
          );
      }),
      (n.prototype.addScript = function (t, e, r) {
        var n = document.createElement("script");
        (n.src = t),
          (n.onload = function () {
            e();
          }),
          (n.onerror = function () {
            r(new Error("Script Error: " + this.url));
          }),
          i.debug("Add script", n),
          document.head.appendChild(n);
      }),
      (n.prototype.injectScript = function (t) {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.text = t),
          document.head.appendChild(e);
      }),
      (t.exports = n);
  },
  function (t, e, r) {
    function n(t) {
      if (t.data && t.data.expires) {
        var e = new Date().getTime(),
          r = t.data.expires;
        return s.debug("Data expires in", r - e), e > r;
      }
      return !0;
    }
    function o(t) {
      (this.config = t),
        (this.request = new u()),
        (this.storage = new i("appmate-xhr"));
    }
    var i = r(19).TinyStore,
      s = r(20),
      u = window.XMLHttpRequest;
    (o.prototype.fromCache = function () {
      return this.storage.get(this.config.url);
    }),
      (o.prototype.cache = function (t) {
        this.storage.set(this.config.url, t);
      }),
      (o.prototype.clearCache = function () {
        this.storage.clear();
      }),
      (o.prototype.setHeader = function (t, e) {
        s.debug("Set header", t, e), this.request.setRequestHeader(t, e);
      }),
      (o.prototype.get = function (t, e) {
        var r = !1,
          o = this.fromCache();
        if (this.config.cache && o) {
          r = !0;
          var i = JSON.parse(o);
          if ((t(i), this.config.refresh === !1 && !n(i)))
            return void s.debug("Do not refresh " + this.config.url);
        }
        this.request.open("GET", this.config.url);
        for (var u in this.config.headers)
          this.setHeader(u, this.config.headers[u]);
        (this.request.onerror = function () {
          this.clearCache(),
            s.error("XHR Error:", this.request.responseText),
            e(this.request.responseText);
        }.bind(this)),
          (this.request.onload = function () {
            var n = this.request.status;
            if ((n >= 200 && 300 > n) || 304 === n) {
              var o = !0,
                i = this.request.getResponseHeader("content-type"),
                u = this.request.responseText;
              -1 !== i.indexOf("json") &&
                ((u = JSON.parse(u)), (o = u.success === !0)),
                o
                  ? (this.config.cache && this.cache(JSON.stringify(u)),
                    r || t(u))
                  : (this.clearCache(), e(u));
            } else
              this.clearCache(),
                s.error("XHR Error:", this.request.responseText),
                e(this.request.responseText);
          }.bind(this)),
          this.request.send();
      }),
      (t.exports = o);
  },
  function (t, e) {
    !(function (t) {
      function e(t, e) {
        if (
          ((this.session = {}),
          (this.store = "undefined" != typeof e ? e : localStorage),
          (this.name = t || "TinyStore"),
          (this.enabled = r(this.store)),
          this.enabled)
        )
          try {
            this.session = JSON.parse(this.store[this.name]) || {};
          } catch (n) {}
      }
      function r(t) {
        if (!t) return !1;
        var e = typeof t,
          r = "function" == typeof t.getItem && "function" == typeof t.setItem,
          n = "object" === e || "function" === e;
        return r || n ? !0 : !1;
      }
      (e.prototype.save = function () {
        return (
          this.enabled &&
            (this.store[this.name] = JSON.stringify(this.session)),
          this.session
        );
      }),
        (e.prototype.set = function (t, e) {
          return (this.session[t] = e), this.save(), this.session[t];
        }),
        (e.prototype.get = function (t) {
          return this.session[t];
        }),
        (e.prototype.remove = function (t) {
          var e = this.session[t];
          return delete this.session[t], this.save(), e;
        }),
        (e.prototype.clear = function () {
          (this.session = {}), this.enabled && delete this.store[this.name];
        }),
        (t.TinyStore = e);
    })(this);
  },
  function (t, e) {
    var r = { all: -1, debug: 1, info: 2, warn: 4, error: 5, off: 100 },
      n = r.error;
    window.localStorage &&
      window.localStorage.logLevel &&
      (n = window.localStorage.logLevel);
    var o = {
      debug: function (t) {
        n <= r.debug && console.log.apply(console, arguments);
      },
      info: function (t) {
        n <= r.info && console.info.apply(console, arguments);
      },
      error: function (t) {
        n <= r.error && console.error.apply(console, arguments);
      },
    };
    (o.log = o.debug), o.debug("Init logger with level %s", n), (t.exports = o);
  },
  function (t, e) {
    function r() {
      return (
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
      );
    }
    t.exports = { touch: r() };
  },
]);
