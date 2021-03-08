!(function (n, a) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = n.document
        ? a(n, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return a(t);
          })
    : a(n);
})("undefined" == typeof window ? this : window, function (L, C) {
  "use strict";

  function q(a, e, t) {
    var l,
      s,
      d = (t = t || x).createElement("script");
    if (((d.text = a), e))
      for (l in n)
        (s = e[l] || (e.getAttribute && e.getAttribute(l))) &&
          d.setAttribute(l, s);
    t.head.appendChild(d).parentNode.removeChild(d);
  }

  function b(t) {
    return null == t
      ? t + ""
      : "object" == typeof t || "function" == typeof t
      ? i[r.call(t)] || "object"
      : typeof t;
  }

  function w(a) {
    var e = !!a && "length" in a && a.length,
      t = b(a);
    return (
      !y(a) &&
      !m(a) &&
      ("array" === t ||
        0 === e ||
        ("number" == typeof e && 0 < e && e - 1 in a))
    );
  }

  function p(n, e) {
    return n.nodeName && n.nodeName.toLowerCase() === e.toLowerCase();
  }

  function A(t, a, n) {
    return y(a)
      ? E.grep(t, function (o, e) {
          return !!a.call(o, e, o) !== n;
        })
      : a.nodeType
      ? E.grep(t, function (t) {
          return (t === a) !== n;
        })
      : "string" == typeof a
      ? E.filter(a, t, n)
      : E.grep(t, function (t) {
          return -1 < u.call(a, t) !== n;
        });
  }

  function D(n, a) {
    for (; (n = n[a]) && 1 !== n.nodeType; );

    return n;
  }

  function O(t) {
    return t;
  }

  function R(t) {
    throw t;
  }

  function M(a, e, t, n) {
    var o;

    try {
      a && y((o = a.promise))
        ? o.call(a).done(e).fail(t)
        : a && y((o = a.then))
        ? o.call(a, e, t)
        : e.apply(void 0, [a].slice(n));
    } catch (n) {
      t.apply(void 0, [n]);
    }
  }

  function e() {
    x.removeEventListener("DOMContentLoaded", e),
      L.removeEventListener("load", e),
      E.ready();
  }

  function I(n, e) {
    return e.toUpperCase();
  }

  function B(t) {
    return t.replace(H, "ms-").replace(_, I);
  }

  function W() {
    this.expando = E.expando + W.uid++;
  }

  function U(a, e, t) {
    var o, l;
    if (void 0 === t && 1 === a.nodeType)
      if (
        ((o = "data-" + e.replace(Y, "-$&").toLowerCase()),
        "string" == typeof (t = a.getAttribute(o)))
      ) {
        try {
          t =
            "true" === (l = t) ||
            ("false" !== l &&
              ("null" === l
                ? null
                : l === +l + ""
                ? +l
                : Q.test(l)
                ? JSON.parse(l)
                : l));
        } catch (t) {}

        V.set(a, e, t);
      } else t = void 0;
    return t;
  }

  function X(d, e, t, p) {
    var r,
      f,
      g = 20,
      m = p
        ? function () {
            return p.cur();
          }
        : function () {
            return E.css(d, e, "");
          },
      s = m(),
      h = (t && t[3]) || (E.cssNumber[e] ? "" : "px"),
      y =
        d.nodeType &&
        (E.cssNumber[e] || ("px" !== h && +s)) &&
        J.exec(E.css(d, e));

    if (y && y[3] !== h) {
      for (s /= 2, h = h || y[3], y = +s || 1; g--; )
        E.style(d, e, y + h),
          0 >= (1 - f) * (1 - (f = m() / s || 0.5)) && (g = 0),
          (y /= f);

      (y *= 2), E.style(d, e, y + h), (t = t || []);
    }

    return (
      t &&
        ((y = +y || +s || 0),
        (r = t[1] ? y + (t[1] + 1) * t[2] : +t[2]),
        p && ((p.unit = h), (p.start = y), (p.end = r))),
      r
    );
  }

  function G(d, e) {
    for (var t, p, g, m, h, y, b, _ = [], l = 0, v = d.length; l < v; l++)
      (p = d[l]).style &&
        ((t = p.style.display),
        e
          ? ("none" === t &&
              ((_[l] = F.get(p, "display") || null),
              _[l] || (p.style.display = "")),
            "" === p.style.display &&
              oe(p) &&
              (_[l] =
                ((b = h = m = void 0),
                (h = (g = p).ownerDocument),
                (y = g.nodeName),
                (b = ae[y]) ||
                  ((m = h.body.appendChild(h.createElement(y))),
                  (b = E.css(m, "display")),
                  m.parentNode.removeChild(m),
                  "none" === b && (b = "block"),
                  (ae[y] = b)))))
          : "none" !== t && ((_[l] = "none"), F.set(p, "display", t)));

    for (l = 0; l < v; l++) null != _[l] && (d[l].style.display = _[l]);

    return d;
  }

  function Z(a, e) {
    var t;
    return (
      (t =
        "undefined" == typeof a.getElementsByTagName
          ? "undefined" == typeof a.querySelectorAll
            ? []
            : a.querySelectorAll(e || "*")
          : a.getElementsByTagName(e || "*")),
      void 0 === e || (e && p(a, e)) ? E.merge([a], t) : t
    );
  }

  function le(a, e) {
    for (var t = 0, o = a.length; t < o; t++)
      F.set(a[t], "globalEval", !e || F.get(e[t], "globalEval"));
  }

  function se(g, e, t, n, r) {
    for (
      var i,
        m,
        y,
        _,
        v,
        w,
        C = e.createDocumentFragment(),
        f = [],
        p = 0,
        x = g.length;
      p < x;
      p++
    )
      if ((i = g[p]) || 0 === i)
        if ("object" === b(i)) E.merge(f, i.nodeType ? [i] : i);
        else if (ge.test(i)) {
          for (
            m = m || C.appendChild(e.createElement("div")),
              y = (pe.exec(i) || ["", ""])[1].toLowerCase(),
              _ = he[y] || he._default,
              m.innerHTML = _[1] + E.htmlPrefilter(i) + _[2],
              w = _[0];
            w--;

          )
            m = m.lastChild;

          E.merge(f, m.childNodes), ((m = C.firstChild).textContent = "");
        } else f.push(e.createTextNode(i));

    for (C.textContent = "", p = 0; (i = f[p++]); )
      if (n && -1 < E.inArray(i, n)) r && r.push(i);
      else if (
        ((v = ne(i)), (m = Z(C.appendChild(i), "script")), v && le(m), t)
      )
        for (w = 0; (i = m[w++]); ) de.test(i.type || "") && t.push(i);

    return C;
  }

  function ye() {
    return !0;
  }

  function be() {
    return !1;
  }

  function ve(n, e) {
    return (
      (n ===
        (function () {
          try {
            return x.activeElement;
          } catch (t) {}
        })()) ==
      ("focus" === e)
    );
  }

  function we(l, e, t, d, c, p) {
    var o, u;

    if ("object" == typeof e) {
      for (u in ("string" != typeof t && ((d = d || t), (t = void 0)), e))
        we(l, u, t, d, e[u], p);

      return l;
    }

    if (
      (null == d && null == c
        ? ((c = t), (d = t = void 0))
        : null == c &&
          ("string" == typeof t
            ? ((c = d), (d = void 0))
            : ((c = d), (d = t), (t = void 0))),
      !1 === c)
    )
      c = be;
    else if (!c) return l;
    return (
      1 === p &&
        ((o = c),
        ((c = function (t) {
          return E().off(t), o.apply(this, arguments);
        }).guid = o.guid || (o.guid = E.guid++))),
      l.each(function () {
        E.event.add(this, e, c, d, t);
      })
    );
  }

  function Ee(t, a, l) {
    l
      ? (F.set(t, a, !1),
        E.event.add(t, a, {
          namespace: !1,
          handler: function (o) {
            var e,
              i,
              s = F.get(this, a);
            if (!(1 & o.isTrigger && this[a]))
              s.length &&
                (F.set(this, a, {
                  value: E.event.trigger(
                    E.extend(s[0], E.Event.prototype),
                    s.slice(1),
                    this
                  )
                }),
                o.stopImmediatePropagation());
            else if (s.length)
              (E.event.special[a] || {}).delegateType && o.stopPropagation();
            else if (
              ((s = gt.call(arguments)),
              F.set(this, a, s),
              (e = l(this, a)),
              this[a](),
              s !== (i = F.get(this, a)) || e ? F.set(this, a, !1) : (i = {}),
              s !== i)
            )
              return o.stopImmediatePropagation(), o.preventDefault(), i.value;
          }
        }))
      : void 0 === F.get(t, a) && E.event.add(t, a, ye);
  }

  function Ce(n, e) {
    return (
      (p(n, "table") &&
        p(11 === e.nodeType ? e.firstChild : e, "tr") &&
        E(n).children("tbody")[0]) ||
      n
    );
  }

  function xe(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }

  function Se(t) {
    return (
      "true/" === (t.type || "").slice(0, 5)
        ? (t.type = t.type.slice(5))
        : t.removeAttribute("type"),
      t
    );
  }

  function Ne(l, e) {
    var t, d, c, p, u, f;

    if (1 === e.nodeType) {
      if (F.hasData(l) && (f = F.get(l).events))
        for (c in (F.remove(e, "handle events"), f))
          for (t = 0, d = f[c].length; t < d; t++) E.event.add(e, c, f[c][t]);
      V.hasData(l) && ((p = V.access(l)), (u = E.extend({}, p)), V.set(e, u));
    }
  }

  function Ae(p, n, g, i) {
    n = mt(n);

    var o,
      m,
      b,
      _,
      w,
      C,
      x = 0,
      T = p.length,
      f = n[0],
      d = y(f);

    if (d || (1 < T && "string" == typeof f && !v.checkClone && Te.test(f)))
      return p.each(function (a) {
        var e = p.eq(a);
        d && (n[0] = f.call(this, a, e.html())), Ae(e, n, g, i);
      });

    if (
      T &&
      ((m = (o = se(n, p[0].ownerDocument, !1, p, i)).firstChild),
      1 === o.childNodes.length && (o = m),
      m || i)
    ) {
      for (_ = (b = E.map(Z(o, "script"), xe)).length; x < T; x++)
        (w = o),
          x !== T - 1 &&
            ((w = E.clone(w, !0, !0)), _ && E.merge(b, Z(w, "script"))),
          g.call(p[x], w, x);

      if (_)
        for (C = b[b.length - 1].ownerDocument, E.map(b, Se), x = 0; x < _; x++)
          (w = b[x]),
            de.test(w.type || "") &&
              !F.access(w, "globalEval") &&
              E.contains(C, w) &&
              (w.src && "module" !== (w.type || "").toLowerCase()
                ? E._evalUrl &&
                  !w.noModule &&
                  E._evalUrl(
                    w.src,
                    {
                      nonce: w.nonce || w.getAttribute("nonce")
                    },
                    C
                  )
                : q(w.textContent.replace(De, ""), w, C));
    }

    return p;
  }

  function ke(a, e, t) {
    for (var n, l = e ? E.filter(e, a) : a, i = 0; null != (n = l[i]); i++)
      t || 1 !== n.nodeType || E.cleanData(Z(n)),
        n.parentNode &&
          (t && ne(n) && le(Z(n, "script")), n.parentNode.removeChild(n));

    return a;
  }

  function Le(l, e, t) {
    var d,
      c,
      p,
      u,
      f = l.style;
    return (
      (t = t || Me(l)) &&
        ("" !== (u = t.getPropertyValue(e) || t[e]) ||
          ne(l) ||
          (u = E.style(l, e)),
        !v.pixelBoxStyles() &&
          je.test(u) &&
          We.test(e) &&
          ((d = f.width),
          (c = f.minWidth),
          (p = f.maxWidth),
          (f.minWidth = f.maxWidth = f.width = u),
          (u = t.width),
          (f.width = d),
          (f.minWidth = c),
          (f.maxWidth = p))),
      void 0 === u ? u : u + ""
    );
  }

  function Oe(n, e) {
    return {
      get: function () {
        return n()
          ? void delete this.get
          : (this.get = e).apply(this, arguments);
      }
    };
  }

  function qe(n) {
    var e = E.cssProps[n] || ze[n];
    return (
      e ||
      (n in _e
        ? n
        : (ze[n] =
            (function (a) {
              for (
                var o = a[0].toUpperCase() + a.slice(1), t = Fe.length;
                t--;

              )
                if ((a = Fe[t] + o) in _e) return a;
            })(n) || n))
    );
  }

  function Pe(a, e, t) {
    var n = J.exec(e);
    return n ? Math.max(0, n[2] - (t || 0)) + (n[3] || "px") : e;
  }

  function He(l, e, t, n, r, i) {
    var o = "width" === e ? 1 : 0,
      d = 0,
      c = 0;
    if (t === (n ? "border" : "content")) return 0;

    for (; 4 > o; o += 2)
      "margin" === t && (c += E.css(l, t + ee[o], !0, r)),
        n
          ? ("content" === t && (c -= E.css(l, "padding" + ee[o], !0, r)),
            "margin" !== t &&
              (c -= E.css(l, "border" + ee[o] + "Width", !0, r)))
          : ((c += E.css(l, "padding" + ee[o], !0, r)),
            "padding" === t
              ? (d += E.css(l, "border" + ee[o] + "Width", !0, r))
              : (c += E.css(l, "border" + ee[o] + "Width", !0, r)));

    return (
      !n &&
        0 <= i &&
        (c +=
          Math.max(
            0,
            Math.ceil(
              l["offset" + e[0].toUpperCase() + e.slice(1)] - i - c - d - 0.5
            )
          ) || 0),
      c
    );
  }

  function Re(l, e, t) {
    var n = Me(l),
      r =
        (!v.boxSizingReliable() || t) &&
        "border-box" === E.css(l, "boxSizing", !1, n),
      d = r,
      c = Le(l, e, n),
      u = "offset" + e[0].toUpperCase() + e.slice(1);

    if (je.test(c)) {
      if (!t) return c;
      c = "auto";
    }

    return (
      ((!v.boxSizingReliable() && r) ||
        (!v.reliableTrDimensions() && p(l, "tr")) ||
        "auto" === c ||
        (!parseFloat(c) && "inline" === E.css(l, "display", !1, n))) &&
        l.getClientRects().length &&
        ((r = "border-box" === E.css(l, "boxSizing", !1, n)),
        (d = u in l) && (c = l[u])),
      (c = parseFloat(c) || 0) +
        He(l, e, t || (r ? "border" : "content"), d, n, c) +
        "px"
    );
  }

  function Be(a, e, t, n, o) {
    return new Be.prototype.init(a, e, t, n, o);
  }

  function Ve() {
    vt &&
      (!1 === x.hidden && L.requestAnimationFrame
        ? L.requestAnimationFrame(Ve)
        : L.setTimeout(Ve, E.fx.interval),
      E.fx.tick());
  }

  function Xe() {
    return (
      L.setTimeout(function () {
        Qe = void 0;
      }),
      (Qe = Date.now())
    );
  }

  function Ke(a, e) {
    var o,
      l = 0,
      s = {
        height: a
      };

    for (e = e ? 1 : 0; 4 > l; l += 2 - e)
      s["margin" + (o = ee[l])] = s["padding" + o] = a;

    return e && (s.opacity = s.width = a), s;
  }

  function $e(l, e, t) {
    for (
      var n,
        s = (Je.tweeners[e] || []).concat(Je.tweeners["*"]),
        i = 0,
        d = s.length;
      i < d;
      i++
    )
      if ((n = s[i].call(t, e, l))) return n;
  }

  function Je(d, o, e) {
    var t,
      p,
      f = 0,
      g = Je.prefilters.length,
      m = E.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (p) return !1;

        for (
          var a = Qe || Xe(),
            e = Math.max(0, s.startTime + s.duration - a),
            t = 1 - (e / s.duration || 0),
            n = 0,
            o = s.tweens.length;
          n < o;
          n++
        )
          s.tweens[n].run(t);

        return (
          m.notifyWith(d, [s, t, e]),
          1 > t && o
            ? e
            : (o || m.notifyWith(d, [s, 1, 0]), m.resolveWith(d, [s]), !1)
        );
      },
      s = m.promise({
        elem: d,
        props: E.extend({}, o),
        opts: E.extend(
          !0,
          {
            specialEasing: {},
            easing: E.easing._default
          },
          e
        ),
        originalProperties: o,
        originalOptions: e,
        startTime: Qe || Xe(),
        duration: e.duration,
        tweens: [],
        createTween: function (a, e) {
          var t = E.Tween(
            d,
            s.opts,
            a,
            e,
            s.opts.specialEasing[a] || s.opts.easing
          );
          return s.tweens.push(t), t;
        },
        stop: function (a) {
          var e = 0,
            o = a ? s.tweens.length : 0;
          if (p) return this;

          for (p = !0; e < o; e++) s.tweens[e].run(1);

          return (
            a
              ? (m.notifyWith(d, [s, 1, 0]), m.resolveWith(d, [s, a]))
              : m.rejectWith(d, [s, a]),
            this
          );
        }
      }),
      l = s.props;

    for (
      !(function (l, e) {
        var t, s, d, c, p;

        for (t in l)
          if (
            ((d = e[(s = B(t))]),
            (c = l[t]),
            Array.isArray(c) && ((d = c[1]), (c = l[t] = c[0])),
            t !== s && ((l[s] = c), delete l[t]),
            (p = E.cssHooks[s]) && ("expand" in p))
          )
            for (t in ((c = p.expand(c)), delete l[s], c))
              (t in l) || ((l[t] = c[t]), (e[t] = d));
          else e[s] = d;
      })(l, s.opts.specialEasing);
      f < g;
      f++
    )
      if ((t = Je.prefilters[f].call(s, d, l, s.opts)))
        return (
          y(t.stop) &&
            (E._queueHooks(s.elem, s.opts.queue).stop = t.stop.bind(t)),
          t
        );

    return (
      E.map(l, $e, s),
      y(s.opts.start) && s.opts.start.call(d, s),
      s
        .progress(s.opts.progress)
        .done(s.opts.done, s.opts.complete)
        .fail(s.opts.fail)
        .always(s.opts.always),
      E.fx.timer(
        E.extend(i, {
          elem: d,
          anim: s,
          queue: s.opts.queue
        })
      ),
      s
    );
  }

  function Ze(t) {
    return (t.match(N) || []).join(" ");
  }

  function et(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }

  function at(t) {
    return Array.isArray(t) ? t : ("string" == typeof t && t.match(N)) || [];
  }

  function ot(a, n, o, l) {
    if (Array.isArray(n))
      E.each(n, function (n, e) {
        o || Et.test(a)
          ? l(a, e)
          : ot(
              a + "[" + ("object" == typeof e && null != e ? n : "") + "]",
              e,
              o,
              l
            );
      });
    else if (o || "object" !== b(n)) l(a, n);
    else for (var e in n) ot(a + "[" + e + "]", n[e], o, l);
  }

  function lt(e) {
    return function (a, o) {
      "string" != typeof a && ((o = a), (a = "*"));
      var l,
        s = 0,
        d = a.toLowerCase().match(N) || [];
      if (y(o))
        for (; (l = d[s++]); )
          "+" === l[0]
            ? ((l = l.slice(1) || "*"), (e[l] = e[l] || []).unshift(o))
            : (e[l] = e[l] || []).push(o);
    };
  }

  function st(n, r, i, o) {
    function a(t) {
      var d;
      return (
        (l[t] = !0),
        E.each(n[t] || [], function (c, e) {
          var t = e(r, i, o);
          return "string" != typeof t || s || l[t]
            ? s
              ? !(d = t)
              : void 0
            : (r.dataTypes.unshift(t), a(t), !1);
        }),
        d
      );
    }

    var l = {},
      s = n === Lt;
    return a(r.dataTypes[0]) || (!l["*"] && a("*"));
  }

  function ct(a, e) {
    var t,
      o,
      l = E.ajaxSettings.flatOptions || {};

    for (t in e) void 0 !== e[t] && ((l[t] ? a : o || (o = {}))[t] = e[t]);

    return o && E.extend(!0, a, o), a;
  }

  var ut = [],
    ft = Object.getPrototypeOf,
    gt = ut.slice,
    mt = ut.flat
      ? function (t) {
          return ut.flat.call(t);
        }
      : function (t) {
          return ut.concat.apply([], t);
        },
    s = ut.push,
    u = ut.indexOf,
    i = {},
    r = i.toString,
    g = i.hasOwnProperty,
    o = g.toString,
    a = o.call(Object),
    v = {},
    y = function (t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    m = function (t) {
      return null != t && t === t.window;
    },
    x = L.document,
    n = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    },
    t = "3.5.1",
    E = function (n, e) {
      return new E.fn.init(n, e);
    };

  (E.fn = E.prototype = {
    jquery: t,
    constructor: E,
    length: 0,
    toArray: function () {
      return gt.call(this);
    },
    get: function (t) {
      return null == t
        ? gt.call(this)
        : 0 > t
        ? this[t + this.length]
        : this[t];
    },
    pushStack: function (n) {
      var e = E.merge(this.constructor(), n);
      return (e.prevObject = this), e;
    },
    each: function (t) {
      return E.each(this, t);
    },
    map: function (a) {
      return this.pushStack(
        E.map(this, function (n, e) {
          return a.call(n, e, n);
        })
      );
    },
    slice: function () {
      return this.pushStack(gt.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        E.grep(this, function (n, e) {
          return (e + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        E.grep(this, function (n, e) {
          return e % 2;
        })
      );
    },
    eq: function (a) {
      var e = this.length,
        t = +a + (0 > a ? e : 0);
      return this.pushStack(0 <= t && t < e ? [this[t]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: ut.sort,
    splice: ut.splice
  }),
    (E.extend = E.fn.extend = function () {
      var d,
        c,
        p,
        f,
        g,
        m,
        h = arguments[0] || {},
        b = 1,
        _ = arguments.length,
        u = !1;

      for (
        "boolean" == typeof h && ((u = h), (h = arguments[b] || {}), b++),
          "object" == typeof h || y(h) || (h = {}),
          b === _ && ((h = this), b--);
        b < _;
        b++
      )
        if (null != (d = arguments[b]))
          for (c in d)
            (f = d[c]),
              "__proto__" !== c &&
                h !== f &&
                (u && f && (E.isPlainObject(f) || (g = Array.isArray(f)))
                  ? ((p = h[c]),
                    (m =
                      g && !Array.isArray(p)
                        ? []
                        : g || E.isPlainObject(p)
                        ? p
                        : {}),
                    (g = !1),
                    (h[c] = E.extend(u, m, f)))
                  : void 0 !== f && (h[c] = f));

      return h;
    }),
    E.extend({
      expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isPlainObject: function (l) {
        var e, i;
        return (
          l &&
          "[object Object]" === r.call(l) &&
          (!(e = ft(l)) ||
            ("function" ==
              typeof (i = g.call(e, "constructor") && e.constructor) &&
              o.call(i) === a))
        );
      },
      isEmptyObject: function (n) {
        for (var e in n) return !1;

        return !0;
      },
      globalEval: function (a, e, t) {
        q(
          a,
          {
            nonce: e && e.nonce
          },
          t
        );
      },
      each: function (a, e) {
        var t,
          o = 0;
        if (w(a))
          for (t = a.length; o < t && !1 !== e.call(a[o], o, a[o]); o++);
        else for (o in a) if (!1 === e.call(a[o], o, a[o])) break;
        return a;
      },
      makeArray: function (a, e) {
        var t = e || [];
        return (
          null != a &&
            (w(Object(a))
              ? E.merge(t, "string" == typeof a ? [a] : a)
              : s.call(t, a)),
          t
        );
      },
      inArray: function (a, e, t) {
        return null == e ? -1 : u.call(e, a, t);
      },
      merge: function (a, e) {
        for (var t = +e.length, n = 0, o = a.length; n < t; n++) a[o++] = e[n];

        return (a.length = o), a;
      },
      grep: function (a, e, t) {
        for (var n = [], l = 0, r = a.length; l < r; l++)
          !e(a[l], l) != !t && n.push(a[l]);

        return n;
      },
      map: function (l, e, t) {
        var n,
          s,
          d = 0,
          c = [];
        if (w(l))
          for (n = l.length; d < n; d++)
            null != (s = e(l[d], d, t)) && c.push(s);
        else for (d in l) null != (s = e(l[d], d, t)) && c.push(s);
        return mt(c);
      },
      guid: 1,
      support: v
    }),
    "function" == typeof Symbol &&
      (E.fn[Symbol.iterator] = ut[Symbol.iterator]),
    E.each(
      [
        "Boolean",
        "Number",
        "String",
        "Function",
        "Array",
        "Date",
        "RegExp",
        "Object",
        "Error",
        "Symbol"
      ],
      function (n, e) {
        i["[object " + e + "]"] = e.toLowerCase();
      }
    );

  var l = (function (_) {
    function I(d, t, g, m) {
      var r,
        h,
        y,
        b,
        _,
        v,
        w,
        E = t && t.ownerDocument,
        C = t ? t.nodeType : 9;

      if (
        ((g = g || []),
        "string" != typeof d || !d || (1 !== C && 9 !== C && 11 !== C))
      )
        return g;

      if (!m && (xe(t), (t = t || Te), Ne)) {
        if (11 !== C && (_ = K.exec(d)))
          if (!(r = _[1])) {
            if (_[2]) return L.apply(g, t.getElementsByTagName(d)), g;
            if (
              (r = _[3]) &&
              ge.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(g, t.getElementsByClassName(r)), g;
          } else if (9 === C) {
            if (!(y = t.getElementById(r))) return g;
            if (y.id === r) return g.push(y), g;
          } else if (E && (y = E.getElementById(r)) && Le(t, y) && y.id === r)
            return g.push(y), g;

        if (
          ge.qsa &&
          !x[d + " "] &&
          (!Ae || !Ae.test(d)) &&
          (1 !== C || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((w = d), (E = t), 1 === C && (z.test(d) || Re.test(d)))) {
            for (
              ((E = (Z.test(d) && Y(t.parentNode)) || t) === t && ge.scope) ||
                ((b = t.getAttribute("id"))
                  ? (b = b.replace(ne, re))
                  : t.setAttribute("id", (b = je))),
                h = (v = be(d)).length;
              h--;

            )
              v[h] = (b ? "#" + b : ":scope") + " " + le(v[h]);

            w = v.join(",");
          }

          try {
            return L.apply(g, E.querySelectorAll(w)), g;
          } catch (t) {
            x(d, !0);
          } finally {
            b === je && t.removeAttribute("id");
          }
        }
      }

      return ve(d.replace(P, "$1"), t, g, m);
    }

    function n() {
      var a = [];
      return function o(e, t) {
        return (
          a.push(e + " ") > me.cacheLength && delete o[a.shift()],
          (o[e + " "] = t)
        );
      };
    }

    function R(t) {
      return (t[je] = !0), t;
    }

    function M(n) {
      var e = Te.createElement("fieldset");

      try {
        return !!n(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }

    function B(a, e) {
      for (var t = a.split("|"), n = t.length; n--; ) me.attrHandle[t[n]] = e;
    }

    function W(a, e) {
      var t = e && a,
        o =
          t &&
          1 === a.nodeType &&
          1 === e.nodeType &&
          a.sourceIndex - e.sourceIndex;
      if (o) return o;
      if (t) for (; (t = t.nextSibling); ) if (t === e) return -1;
      return a ? 1 : -1;
    }

    function F(n) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === n;
      };
    }

    function Q(a) {
      return function (n) {
        var e = n.nodeName.toLowerCase();
        return ("input" === e || "button" === e) && n.type === a;
      };
    }

    function V(n) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === n
                : t.disabled === n
              : t.isDisabled === n || (t.isDisabled !== !n && oe(t) === n)
            : t.disabled === n
          : "label" in t && t.disabled === n;
      };
    }

    function X(l) {
      return R(function (a) {
        return (
          (a = +a),
          R(function (o, e) {
            for (var t, s = l([], o.length, a), r = s.length; r--; )
              o[(t = s[r])] && (o[t] = !(e[t] = o[t]));
          })
        );
      });
    }

    function Y(t) {
      return t && "undefined" != typeof t.getElementsByTagName && t;
    }

    function J() {}

    function le(a) {
      for (var e = 0, o = a.length, n = ""; e < o; e++) n += a[e].value;

      return n;
    }

    function se(o, n, e) {
      var s = n.dir,
        d = n.next,
        l = d || s,
        c = e && "parentNode" === l,
        u = Ie++;
      return n.first
        ? function (a, l, t) {
            for (; (a = a[s]); ) if (1 === a.nodeType || c) return o(a, l, t);

            return !1;
          }
        : function (p, f, t) {
            var n,
              g,
              m,
              h = [Oe, u];

            if (t) {
              for (; (p = p[s]); )
                if ((1 === p.nodeType || c) && o(p, f, t)) return !0;
            } else
              for (; (p = p[s]); )
                if (1 === p.nodeType || c)
                  if (
                    ((g =
                      (m = p[je] || (p[je] = {}))[p.uniqueID] ||
                      (m[p.uniqueID] = {})),
                    d && d === p.nodeName.toLowerCase())
                  )
                    p = p[s] || p;
                  else {
                    if ((n = g[l]) && n[0] === Oe && n[1] === u)
                      return (h[2] = n[2]);
                    if (((g[l] = h)[2] = o(p, f, t))) return !0;
                  }

            return !1;
          };
    }

    function de(a) {
      return 1 < a.length
        ? function (o, e, t) {
            for (var n = a.length; n--; ) if (!a[n](o, e, t)) return !1;

            return !0;
          }
        : a[0];
    }

    function ce(l, e, t, n, r) {
      for (var i, d = [], a = 0, c = l.length; a < c; a++)
        (i = l[a]) &&
          ((t && !t(i, n, r)) || (d.push(i), null != e && e.push(a)));

      return d;
    }

    function pe(m, d, h, g, b, t) {
      return (
        g && !g[je] && (g = pe(g)),
        b && !b[je] && (b = pe(b, t)),
        R(function (y, e, t, n) {
          var r,
            _,
            v,
            w = [],
            s = [],
            u = e.length,
            l =
              y ||
              (function (a, e, t) {
                for (var n = 0, o = e.length; n < o; n++) I(a, e[n], t);

                return t;
              })(d || "*", t.nodeType ? [t] : t, []),
            c = m && (y || !d) ? ce(l, w, m, t, n) : l,
            f = h ? (b || (y ? m : u || g) ? [] : e) : c;

          if ((h && h(c, f, t, n), g))
            for (r = ce(f, s), g(r, [], t, n), _ = r.length; _--; )
              (v = r[_]) && (f[s[_]] = !(c[s[_]] = v));
          if (!y)
            (f = ce(f === e ? f.splice(u, f.length) : f)),
              b ? b(null, e, f, n) : L.apply(e, f);
          else if (b || m) {
            if (b) {
              for (r = [], _ = f.length; _--; )
                (v = f[_]) && r.push((c[_] = v));

              b(null, (f = []), r, n);
            }

            for (_ = f.length; _--; )
              (v = f[_]) &&
                -1 < (r = b ? O(y, v) : w[_]) &&
                (y[r] = !(e[r] = v));
          }
        })
      );
    }

    function ue(d) {
      for (
        var p,
          f,
          g,
          m = d.length,
          h = me.relative[d[0].type],
          o = h || me.relative[" "],
          a = h ? 1 : 0,
          y = se(
            function (t) {
              return t === p;
            },
            o,
            !0
          ),
          u = se(
            function (t) {
              return -1 < O(p, t);
            },
            o,
            !0
          ),
          l = [
            function (a, e, t) {
              var n =
                (!h && (t || e !== we)) ||
                ((p = e).nodeType ? y(a, e, t) : u(a, e, t));
              return (p = null), n;
            }
          ];
        a < m;
        a++
      )
        if ((f = me.relative[d[a].type])) l = [se(de(l), f)];
        else {
          if ((f = me.filter[d[a].type].apply(null, d[a].matches))[je]) {
            for (g = ++a; g < m && !me.relative[d[g].type]; g++);

            return pe(
              1 < a && de(l),
              1 < a &&
                le(
                  d.slice(0, a - 1).concat({
                    value: " " === d[a - 2].type ? "*" : ""
                  })
                ).replace(P, "$1"),
              f,
              a < g && ue(d.slice(a, g)),
              g < m && ue((d = d.slice(g))),
              g < m && le(d)
            );
          }

          l.push(f);
        }

      return de(l);
    }

    var fe,
      ge,
      me,
      he,
      ye,
      be,
      _e,
      ve,
      we,
      Ee,
      Ce,
      xe,
      Te,
      Se,
      Ne,
      Ae,
      De,
      ke,
      Le,
      je = "sizzle" + 1 * new Date(),
      S = _.document,
      Oe = 0,
      Ie = 0,
      p = n(),
      m = n(),
      qe = n(),
      x = n(),
      N = function (n, e) {
        return n === e && (Ce = !0), 0;
      },
      A = {}.hasOwnProperty,
      j = [],
      Pe = j.pop,
      q = j.push,
      L = j.push,
      He = j.slice,
      O = function (a, e) {
        for (var t = 0, o = a.length; t < o; t++) if (a[t] === e) return t;

        return -1;
      },
      P = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
      Re = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
      z = /[\x20\t\r\n\f]|>/,
      U = {
        ID: /^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)/,
        CLASS: /^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)/,
        TAG: /^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+|[*])/,
        ATTR: /^\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\]/,
        PSEUDO: /^:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
        CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
        bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
        needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
      },
      G = /^[^{]+\{\s*\[native \w/,
      K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Z = /[+~]/,
      ee = /\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\([^\r\n\f])/g,
      te = function (a, e) {
        var t = "0x" + a.slice(1) - 65536;
        return (
          e ||
          (0 > t
            ? String.fromCharCode(t + 65536)
            : String.fromCharCode(55296 | (t >> 10), 56320 | (1023 & t)))
        );
      },
      ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      re = function (n, e) {
        return e
          ? "\0" === n
            ? "\uFFFD"
            : n.slice(0, -1) +
              "\\" +
              n.charCodeAt(n.length - 1).toString(16) +
              " "
          : "\\" + n;
      },
      ie = function () {
        xe();
      },
      oe = se(
        function (t) {
          return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
        },
        {
          dir: "parentNode",
          next: "legend"
        }
      );

    try {
      L.apply((j = He.call(S.childNodes)), S.childNodes),
        j[S.childNodes.length].nodeType;
    } catch (t) {
      L = {
        apply: j.length
          ? function (n, e) {
              q.apply(n, He.call(e));
            }
          : function (a, e) {
              for (var t = a.length, o = 0; (a[t++] = e[o++]); );

              a.length = t - 1;
            }
      };
    }

    for (fe in ((ge = I.support = {}),
    (ye = I.isXML = function (a) {
      var e = a.namespaceURI,
        t = (a.ownerDocument || a).documentElement;
      return !/HTML$/i.test(e || (t && t.nodeName) || "HTML");
    }),
    (xe = I.setDocument = function (a) {
      var e,
        o,
        l = a ? a.ownerDocument || a : S;
      return (
        l != Te &&
          9 === l.nodeType &&
          l.documentElement &&
          ((Se = (Te = l).documentElement),
          (Ne = !ye(Te)),
          S != Te &&
            (o = Te.defaultView) &&
            o.top !== o &&
            (o.addEventListener
              ? o.addEventListener("unload", ie, !1)
              : o.attachEvent && o.attachEvent("onunload", ie)),
          (ge.scope = M(function (t) {
            return (
              Se.appendChild(t).appendChild(Te.createElement("div")),
              "undefined" != typeof t.querySelectorAll &&
                !t.querySelectorAll(":scope fieldset div").length
            );
          })),
          (ge.attributes = M(function (t) {
            return (t.className = "i"), !t.getAttribute("className");
          })),
          (ge.getElementsByTagName = M(function (t) {
            return (
              t.appendChild(Te.createComment("")),
              !t.getElementsByTagName("*").length
            );
          })),
          (ge.getElementsByClassName = G.test(Te.getElementsByClassName)),
          (ge.getById = M(function (t) {
            return (
              (Se.appendChild(t).id = je),
              !Te.getElementsByName || !Te.getElementsByName(je).length
            );
          })),
          ge.getById
            ? ((me.filter.ID = function (n) {
                var a = n.replace(ee, te);
                return function (t) {
                  return t.getAttribute("id") === a;
                };
              }),
              (me.find.ID = function (a, e) {
                if ("undefined" != typeof e.getElementById && Ne) {
                  var t = e.getElementById(a);
                  return t ? [t] : [];
                }
              }))
            : ((me.filter.ID = function (t) {
                var a = t.replace(ee, te);
                return function (n) {
                  var e =
                    "undefined" != typeof n.getAttributeNode &&
                    n.getAttributeNode("id");
                  return e && e.value === a;
                };
              }),
              (me.find.ID = function (a, e) {
                if ("undefined" != typeof e.getElementById && Ne) {
                  var t,
                    l,
                    s,
                    d = e.getElementById(a);

                  if (d) {
                    if ((t = d.getAttributeNode("id")) && t.value === a)
                      return [d];

                    for (s = e.getElementsByName(a), l = 0; (d = s[l++]); )
                      if ((t = d.getAttributeNode("id")) && t.value === a)
                        return [d];
                  }

                  return [];
                }
              })),
          (me.find.TAG = ge.getElementsByTagName
            ? function (n, e) {
                return "undefined" == typeof e.getElementsByTagName
                  ? ge.qsa
                    ? e.querySelectorAll(n)
                    : void 0
                  : e.getElementsByTagName(n);
              }
            : function (a, e) {
                var t,
                  l = [],
                  r = 0,
                  s = e.getElementsByTagName(a);

                if ("*" === a) {
                  for (; (t = s[r++]); ) 1 === t.nodeType && l.push(t);

                  return l;
                }

                return s;
              }),
          (me.find.CLASS =
            ge.getElementsByClassName &&
            function (n, e) {
              if ("undefined" != typeof e.getElementsByClassName && Ne)
                return e.getElementsByClassName(n);
            }),
          (De = []),
          (Ae = []),
          (ge.qsa = G.test(Te.querySelectorAll)) &&
            (M(function (n) {
              var e;
              (Se.appendChild(n).innerHTML =
                "<a id='" +
                je +
                "'></a><select id='" +
                je +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                n.querySelectorAll("[msallowcapture^='']").length &&
                  Ae.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                n.querySelectorAll("[selected]").length ||
                  Ae.push(
                    "\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"
                  ),
                n.querySelectorAll("[id~=" + je + "-]").length || Ae.push("~="),
                (e = Te.createElement("input")).setAttribute("name", ""),
                n.appendChild(e),
                n.querySelectorAll("[name='']").length ||
                  Ae.push(
                    "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                  ),
                n.querySelectorAll(":checked").length || Ae.push(":checked"),
                n.querySelectorAll("a#" + je + "+*").length ||
                  Ae.push(".#.+[+~]"),
                n.querySelectorAll("\\\f"),
                Ae.push("[\\r\\n\\f]");
            }),
            M(function (n) {
              n.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var e = Te.createElement("input");
              e.setAttribute("type", "hidden"),
                n.appendChild(e).setAttribute("name", "D"),
                n.querySelectorAll("[name=d]").length &&
                  Ae.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                2 !== n.querySelectorAll(":enabled").length &&
                  Ae.push(":enabled", ":disabled"),
                (Se.appendChild(n).disabled = !0),
                2 !== n.querySelectorAll(":disabled").length &&
                  Ae.push(":enabled", ":disabled"),
                n.querySelectorAll("*,:x"),
                Ae.push(",.*:");
            })),
          (ge.matchesSelector = G.test(
            (ke =
              Se.matches ||
              Se.webkitMatchesSelector ||
              Se.mozMatchesSelector ||
              Se.oMatchesSelector ||
              Se.msMatchesSelector)
          )) &&
            M(function (t) {
              (ge.disconnectedMatch = ke.call(t, "*")),
                ke.call(t, "[s!='']:x"),
                De.push(
                  "!=",
                  ":((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
                );
            }),
          (Ae = Ae.length && new RegExp(Ae.join("|"))),
          (De = De.length && new RegExp(De.join("|"))),
          (e = G.test(Se.compareDocumentPosition)),
          (Le =
            e || G.test(Se.contains)
              ? function (a, e) {
                  var t = 9 === a.nodeType ? a.documentElement : a,
                    n = e && e.parentNode;
                  return (
                    a === n ||
                    (n &&
                      1 === n.nodeType &&
                      (t.contains
                        ? t.contains(n)
                        : a.compareDocumentPosition &&
                          16 & a.compareDocumentPosition(n)))
                  );
                }
              : function (n, e) {
                  if (e) for (; (e = e.parentNode); ) if (e === n) return !0;
                  return !1;
                }),
          (N = e
            ? function (a, e) {
                if (a === e) return (Ce = !0), 0;
                var t = !a.compareDocumentPosition - !e.compareDocumentPosition;
                return (
                  t ||
                  (1 &
                    (t =
                      (a.ownerDocument || a) == (e.ownerDocument || e)
                        ? a.compareDocumentPosition(e)
                        : 1) ||
                  (!ge.sortDetached && e.compareDocumentPosition(a) === t)
                    ? a == Te || (a.ownerDocument == S && Le(S, a))
                      ? -1
                      : e == Te || (e.ownerDocument == S && Le(S, e))
                      ? 1
                      : Ee
                      ? O(Ee, a) - O(Ee, e)
                      : 0
                    : 4 & t
                    ? -1
                    : 1)
                );
              }
            : function (l, e) {
                if (l === e) return (Ce = !0), 0;
                var t,
                  d = 0,
                  c = l.parentNode,
                  i = e.parentNode,
                  o = [l],
                  a = [e];
                if (!c || !i)
                  return l == Te
                    ? -1
                    : e == Te
                    ? 1
                    : c
                    ? -1
                    : i
                    ? 1
                    : Ee
                    ? O(Ee, l) - O(Ee, e)
                    : 0;
                if (c === i) return W(l, e);

                for (t = l; (t = t.parentNode); ) o.unshift(t);

                for (t = e; (t = t.parentNode); ) a.unshift(t);

                for (; o[d] === a[d]; ) d++;

                return d ? W(o[d], a[d]) : o[d] == S ? -1 : a[d] == S ? 1 : 0;
              })),
        Te
      );
    }),
    (I.matches = function (n, e) {
      return I(n, null, null, e);
    }),
    (I.matchesSelector = function (a, o) {
      if (
        (xe(a),
        ge.matchesSelector &&
          Ne &&
          !x[o + " "] &&
          (!De || !De.test(o)) &&
          (!Ae || !Ae.test(o)))
      )
        try {
          var e = ke.call(a, o);
          if (
            e ||
            ge.disconnectedMatch ||
            (a.document && 11 !== a.document.nodeType)
          )
            return e;
        } catch (t) {
          x(o, !0);
        }
      return 0 < I(o, Te, null, [a]).length;
    }),
    (I.contains = function (n, e) {
      return (n.ownerDocument || n) != Te && xe(n), Le(n, e);
    }),
    (I.attr = function (a, e) {
      (a.ownerDocument || a) != Te && xe(a);
      var t = me.attrHandle[e.toLowerCase()],
        n = t && A.call(me.attrHandle, e.toLowerCase()) ? t(a, e, !Ne) : void 0;
      return void 0 === n
        ? ge.attributes || !Ne
          ? a.getAttribute(e)
          : (n = a.getAttributeNode(e)) && n.specified
          ? n.value
          : null
        : n;
    }),
    (I.escape = function (t) {
      return (t + "").replace(ne, re);
    }),
    (I.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (I.uniqueSort = function (a) {
      var e,
        o = [],
        n = 0,
        l = 0;

      if (
        ((Ce = !ge.detectDuplicates),
        (Ee = !ge.sortStable && a.slice(0)),
        a.sort(N),
        Ce)
      ) {
        for (; (e = a[l++]); ) e === a[l] && (n = o.push(l));

        for (; n--; ) a.splice(o[n], 1);
      }

      return (Ee = null), a;
    }),
    (he = I.getText = function (a) {
      var o,
        l = "",
        s = 0,
        d = a.nodeType;
      if (!d) for (; (o = a[s++]); ) l += he(o);
      else if (1 === d || 9 === d || 11 === d) {
        if ("string" == typeof a.textContent) return a.textContent;

        for (a = a.firstChild; a; a = a.nextSibling) l += he(a);
      } else if (3 === d || 4 === d) return a.nodeValue;
      return l;
    }),
    ((me = I.selectors = {
      cacheLength: 50,
      createPseudo: R,
      match: U,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (t) {
          return (
            (t[1] = t[1].replace(ee, te)),
            (t[3] = (t[3] || t[4] || t[5] || "").replace(ee, te)),
            "~=" === t[2] && (t[3] = " " + t[3] + " "),
            t.slice(0, 4)
          );
        },
        CHILD: function (t) {
          return (
            (t[1] = t[1].toLowerCase()),
            "nth" === t[1].slice(0, 3)
              ? (t[3] || I.error(t[0]),
                (t[4] = +(t[4]
                  ? t[5] + (t[6] || 1)
                  : 2 * ("even" === t[3] || "odd" === t[3]))),
                (t[5] = +(t[7] + t[8] || "odd" === t[3])))
              : t[3] && I.error(t[0]),
            t
          );
        },
        PSEUDO: function (a) {
          var e,
            o = !a[6] && a[2];
          return U.CHILD.test(a[0])
            ? null
            : (a[3]
                ? (a[2] = a[4] || a[5] || "")
                : o &&
                  /:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/.test(
                    o
                  ) &&
                  (e = be(o, !0)) &&
                  (e = o.indexOf(")", o.length - e) - o.length) &&
                  ((a[0] = a[0].slice(0, e)), (a[2] = o.slice(0, e))),
              a.slice(0, 3));
        }
      },
      filter: {
        TAG: function (n) {
          var a = n.replace(ee, te).toLowerCase();
          return "*" === n
            ? function () {
                return !0;
              }
            : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === a;
              };
        },
        CLASS: function (n) {
          var a = p[n + " "];
          return (
            a ||
            ((a = new RegExp(
              "(^|[\\x20\\t\\r\\n\\f])" +
                n +
                "(" +
                "[\\x20\\t\\r\\n\\f]" +
                "|$)"
            )) &&
              p(n, function (t) {
                return a.test(
                  ("string" == typeof t.className && t.className) ||
                    ("undefined" != typeof t.getAttribute &&
                      t.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (a, n, o) {
          return function (l) {
            var e = I.attr(l, a);
            return null == e
              ? "!=" === n
              : !n ||
                  ((e += ""),
                  "=" === n
                    ? e === o
                    : "!=" === n
                    ? e !== o
                    : "^=" === n
                    ? o && 0 === e.indexOf(o)
                    : "*=" === n
                    ? o && -1 < e.indexOf(o)
                    : "$=" === n
                    ? o && e.slice(-o.length) === o
                    : "~=" === n
                    ? -1 <
                      (" " + e.replace(/[\x20\t\r\n\f]+/g, " ") + " ").indexOf(
                        o
                      )
                    : "|=" == n &&
                      (e === o || e.slice(0, o.length + 1) === o + "-"));
          };
        },
        CHILD: function (n, a, e, t, g) {
          var h = "nth" !== n.slice(0, 3),
            y = "last" !== n.slice(-4),
            m = "of-type" === a;
          return 1 === t && 0 === g
            ? function (t) {
                return !!t.parentNode;
              }
            : function (b, e, _) {
                var v,
                  w,
                  E,
                  C,
                  x,
                  T,
                  S = h === y ? "previousSibling" : "nextSibling",
                  N = b.parentNode,
                  c = m && b.nodeName.toLowerCase(),
                  f = !_ && !m,
                  p = !1;

                if (N) {
                  if (h) {
                    for (; S; ) {
                      for (C = b; (C = C[S]); )
                        if (
                          m ? C.nodeName.toLowerCase() === c : 1 === C.nodeType
                        )
                          return !1;

                      T = S = "only" === n && !T && "nextSibling";
                    }

                    return !0;
                  }

                  if (((T = [y ? N.firstChild : N.lastChild]), y && f)) {
                    for (
                      p =
                        (x =
                          (v =
                            (w =
                              (E = (C = N)[je] || (C[je] = {}))[C.uniqueID] ||
                              (E[C.uniqueID] = {}))[n] || [])[0] === Oe &&
                          v[1]) && v[2],
                        C = x && N.childNodes[x];
                      (C = (++x && C && C[S]) || (p = x = 0) || T.pop());

                    )
                      if (1 === C.nodeType && ++p && C === b) {
                        w[n] = [Oe, x, p];
                        break;
                      }
                  } else if (
                    (f &&
                      (p = x =
                        (v =
                          (w =
                            (E = (C = b)[je] || (C[je] = {}))[C.uniqueID] ||
                            (E[C.uniqueID] = {}))[n] || [])[0] === Oe && v[1]),
                    !1 === p)
                  )
                    for (
                      ;
                      (C = (++x && C && C[S]) || (p = x = 0) || T.pop()) &&
                      !(
                        (m
                          ? C.nodeName.toLowerCase() === c
                          : 1 === C.nodeType) &&
                        ++p &&
                        (f &&
                          ((w =
                            (E = C[je] || (C[je] = {}))[C.uniqueID] ||
                            (E[C.uniqueID] = {}))[n] = [Oe, p]),
                        C === b)
                      );

                    );

                  return (p -= g) === t || (0 == p % t && 0 <= p / t);
                }
              };
        },
        PSEUDO: function (n, l) {
          var o,
            s =
              me.pseudos[n] ||
              me.setFilters[n.toLowerCase()] ||
              I.error("unsupported pseudo: " + n);
          return s[je]
            ? s(l)
            : 1 < s.length
            ? ((o = [n, n, "", l]),
              me.setFilters.hasOwnProperty(n.toLowerCase())
                ? R(function (a, e) {
                    for (var t, o = s(a, l), r = o.length; r--; )
                      a[(t = O(a, o[r]))] = !(e[t] = o[r]);
                  })
                : function (t) {
                    return s(t, 0, o);
                  })
            : s;
        }
      },
      pseudos: {
        not: R(function (t) {
          var a = [],
            o = [],
            l = _e(t.replace(P, "$1"));

          return l[je]
            ? R(function (s, e, t, n) {
                for (var r, d = l(s, null, n, []), o = s.length; o--; )
                  (r = d[o]) && (s[o] = !(e[o] = r));
              })
            : function (i, e, t) {
                return (a[0] = i), l(a, null, t, o), (a[0] = null), !o.pop();
              };
        }),
        has: R(function (n) {
          return function (t) {
            return 0 < I(n, t).length;
          };
        }),
        contains: R(function (n) {
          return (
            (n = n.replace(ee, te)),
            function (t) {
              return -1 < (t.textContent || he(t)).indexOf(n);
            }
          );
        }),
        lang: R(function (a) {
          return (
            /^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+$/.test(
              a || ""
            ) || I.error("unsupported lang: " + a),
            (a = a.replace(ee, te).toLowerCase()),
            function (n) {
              var o;

              do
                if (
                  (o = Ne
                    ? n.lang
                    : n.getAttribute("xml:lang") || n.getAttribute("lang"))
                )
                  return (
                    (o = o.toLowerCase()) === a || 0 === o.indexOf(a + "-")
                  );
              while ((n = n.parentNode) && 1 === n.nodeType);

              return !1;
            }
          );
        }),
        target: function (n) {
          var e = _.location && _.location.hash;
          return e && e.slice(1) === n.id;
        },
        root: function (t) {
          return t === Se;
        },
        focus: function (t) {
          return (
            t === Te.activeElement &&
            (!Te.hasFocus || Te.hasFocus()) &&
            !!(t.type || t.href || ~t.tabIndex)
          );
        },
        enabled: V(!1),
        disabled: V(!0),
        checked: function (n) {
          var e = n.nodeName.toLowerCase();
          return (
            ("input" === e && !!n.checked) || ("option" === e && !!n.selected)
          );
        },
        selected: function (t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
        },
        empty: function (t) {
          for (t = t.firstChild; t; t = t.nextSibling)
            if (6 > t.nodeType) return !1;

          return !0;
        },
        parent: function (t) {
          return !me.pseudos.empty(t);
        },
        header: function (t) {
          return /^h\d$/i.test(t.nodeName);
        },
        input: function (t) {
          return /^(?:input|select|textarea|button)$/i.test(t.nodeName);
        },
        button: function (n) {
          var e = n.nodeName.toLowerCase();
          return ("input" === e && "button" === n.type) || "button" === e;
        },
        text: function (n) {
          var e;
          return (
            "input" === n.nodeName.toLowerCase() &&
            "text" === n.type &&
            (null == (e = n.getAttribute("type")) || "text" === e.toLowerCase())
          );
        },
        first: X(function () {
          return [0];
        }),
        last: X(function (n, e) {
          return [e - 1];
        }),
        eq: X(function (a, e, t) {
          return [0 > t ? t + e : t];
        }),
        even: X(function (a, e) {
          for (var t = 0; t < e; t += 2) a.push(t);

          return a;
        }),
        odd: X(function (a, e) {
          for (var t = 1; t < e; t += 2) a.push(t);

          return a;
        }),
        lt: X(function (a, e, t) {
          for (var n = 0 > t ? t + e : e < t ? e : t; 0 <= --n; ) a.push(n);

          return a;
        }),
        gt: X(function (a, e, t) {
          for (var n = 0 > t ? t + e : t; ++n < e; ) a.push(n);

          return a;
        })
      }
    }).pseudos.nth = me.pseudos.eq),
    {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }))
      me.pseudos[fe] = F(fe);

    for (fe in {
      submit: !0,
      reset: !0
    })
      me.pseudos[fe] = Q(fe);

    return (
      (J.prototype = me.filters = me.pseudos),
      (me.setFilters = new J()),
      (be = I.tokenize = function (d, e) {
        var t,
          c,
          p,
          f,
          g,
          h,
          y,
          b = m[d + " "];
        if (b) return e ? 0 : b.slice(0);

        for (g = d, h = [], y = me.preFilter; g; ) {
          for (f in ((t && !(c = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/.exec(g))) ||
            (c && (g = g.slice(c[0].length) || g), h.push((p = []))),
          (t = !1),
          (c = Re.exec(g)) &&
            ((t = c.shift()),
            p.push({
              value: t,
              type: c[0].replace(P, " ")
            }),
            (g = g.slice(t.length))),
          me.filter))
            (c = U[f].exec(g)) &&
              (!y[f] || (c = y[f](c))) &&
              ((t = c.shift()),
              p.push({
                value: t,
                type: f,
                matches: c
              }),
              (g = g.slice(t.length)));

          if (!t) break;
        }

        return e ? g.length : g ? I.error(d) : m(d, h).slice(0);
      }),
      (_e = I.compile = function (l, e) {
        var s,
          d,
          p,
          b,
          _,
          c,
          u = [],
          i = [],
          o = qe[l + " "];

        if (!o) {
          for (e || (e = be(l)), s = e.length; s--; )
            (o = ue(e[s]))[je] ? u.push(o) : i.push(o);

          (o = qe(
            l,
            ((d = i),
            (b = 0 < (p = u).length),
            (_ = 0 < d.length),
            (c = function (m, e, t, y, r) {
              var i,
                v,
                w,
                E = 0,
                C = "0",
                x = m && [],
                c = [],
                T = we,
                S = m || (_ && me.find.TAG("*", r)),
                N = (Oe += null == T ? 1 : Math.random() || 0.1),
                h = S.length;

              for (
                r && (we = e == Te || e || r);
                C !== h && null != (i = S[C]);
                C++
              ) {
                if (_ && i) {
                  for (
                    v = 0, e || i.ownerDocument == Te || (xe(i), (t = !Ne));
                    (w = d[v++]);

                  )
                    if (w(i, e || Te, t)) {
                      y.push(i);
                      break;
                    }

                  r && (Oe = N);
                }

                b && ((i = !w && i) && E--, m && x.push(i));
              }

              if (((E += C), b && C !== E)) {
                for (v = 0; (w = p[v++]); ) w(x, c, e, t);

                if (m) {
                  if (0 < E) for (; C--; ) x[C] || c[C] || (c[C] = Pe.call(y));
                  c = ce(c);
                }

                L.apply(y, c),
                  r &&
                    !m &&
                    0 < c.length &&
                    1 < E + p.length &&
                    I.uniqueSort(y);
              }

              return r && ((Oe = N), (we = T)), x;
            }),
            b ? R(c) : c)
          )).selector = l;
        }

        return o;
      }),
      (ve = I.select = function (d, p, f, g) {
        var m,
          h,
          y,
          b,
          _,
          v = "function" == typeof d && d,
          l = !g && be((d = v.selector || d));

        if (((f = f || []), 1 === l.length)) {
          if (
            2 < (h = l[0] = l[0].slice(0)).length &&
            "ID" === (y = h[0]).type &&
            9 === p.nodeType &&
            Ne &&
            me.relative[h[1].type]
          ) {
            if (!(p = (me.find.ID(y.matches[0].replace(ee, te), p) || [])[0]))
              return f;
            v && (p = p.parentNode), (d = d.slice(h.shift().value.length));
          }

          for (
            m = U.needsContext.test(d) ? 0 : h.length;
            m-- && !((y = h[m]), me.relative[(b = y.type)]);

          )
            if (
              (_ = me.find[b]) &&
              (g = _(
                y.matches[0].replace(ee, te),
                (Z.test(h[0].type) && Y(p.parentNode)) || p
              ))
            ) {
              if ((h.splice(m, 1), !(d = g.length && le(h))))
                return L.apply(f, g), f;
              break;
            }
        }

        return (
          (v || _e(d, l))(
            g,
            p,
            !Ne,
            f,
            !p || (Z.test(d) && Y(p.parentNode)) || p
          ),
          f
        );
      }),
      (ge.sortStable = je.split("").sort(N).join("") === je),
      (ge.detectDuplicates = !!Ce),
      xe(),
      (ge.sortDetached = M(function (t) {
        return 1 & t.compareDocumentPosition(Te.createElement("fieldset"));
      })),
      M(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        B("type|href|height|width", function (a, e, t) {
          if (!t) return a.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (ge.attributes &&
        M(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        B("value", function (a, e, t) {
          if (!t && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      M(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        B(
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          function (a, e, t) {
            var n;
            if (!t)
              return !0 === a[e]
                ? e.toLowerCase()
                : (n = a.getAttributeNode(e)) && n.specified
                ? n.value
                : null;
          }
        ),
      I
    );
  })(L);

  (E.find = l),
    (E.expr = l.selectors),
    (E.expr[":"] = E.expr.pseudos),
    (E.uniqueSort = E.unique = l.uniqueSort),
    (E.text = l.getText),
    (E.isXMLDoc = l.isXML),
    (E.contains = l.contains),
    (E.escapeSelector = l.escape);

  var d = function (a, o, t) {
      for (var n = []; (a = a[o]) && 9 !== a.nodeType; )
        if (1 === a.nodeType) {
          if (void 0 !== t && E(a).is(t)) break;
          n.push(a);
        }

      return n;
    },
    c = function (a, o) {
      for (var t = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== o && t.push(a);

      return t;
    },
    f = E.expr.match.needsContext,
    h = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  (E.filter = function (a, o, t) {
    var n = o[0];
    return (
      t && (a = ":not(" + a + ")"),
      1 === o.length && 1 === n.nodeType
        ? E.find.matchesSelector(n, a)
          ? [n]
          : []
        : E.find.matches(
            a,
            E.grep(o, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    E.fn.extend({
      find: function (a) {
        var e,
          o,
          l = this.length,
          r = this;
        if ("string" != typeof a)
          return this.pushStack(
            E(a).filter(function () {
              for (e = 0; e < l; e++) if (E.contains(r[e], this)) return !0;
            })
          );

        for (o = this.pushStack([]), e = 0; e < l; e++) E.find(a, r[e], o);

        return 1 < l ? E.uniqueSort(o) : o;
      },
      filter: function (t) {
        return this.pushStack(A(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(A(this, t || [], !0));
      },
      is: function (t) {
        return !!A(this, "string" == typeof t && f.test(t) ? E(t) : t || [], !1)
          .length;
      }
    });
  var T;
  ((E.fn.init = function (a, e, o) {
    var l, s;
    if (!a) return this;

    if (((o = o || T), "string" == typeof a)) {
      if (
        !(l =
          "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length
            ? [null, a, null]
            : /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/.exec(a)) ||
        (!l[1] && e)
      )
        return !e || e.jquery ? (e || o).find(a) : this.constructor(e).find(a);

      if (l[1]) {
        if (
          ((e = e instanceof E ? e[0] : e),
          E.merge(
            this,
            E.parseHTML(l[1], e && e.nodeType ? e.ownerDocument || e : x, !0)
          ),
          h.test(l[1]) && E.isPlainObject(e))
        )
          for (l in e) y(this[l]) ? this[l](e[l]) : this.attr(l, e[l]);
        return this;
      }

      return (
        (s = x.getElementById(l[2])) && ((this[0] = s), (this.length = 1)), this
      );
    }

    return a.nodeType
      ? ((this[0] = a), (this.length = 1), this)
      : y(a)
      ? void 0 === o.ready
        ? a(E)
        : o.ready(a)
      : E.makeArray(a, this);
  }).prototype = E.fn),
    (T = E(x));
  var S = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  E.fn.extend({
    has: function (a) {
      var o = E(a, this),
        t = o.length;
      return this.filter(function () {
        for (var n = 0; n < t; n++) if (E.contains(this, o[n])) return !0;
      });
    },
    closest: function (l, e) {
      var t,
        s = 0,
        d = this.length,
        i = [],
        o = "string" != typeof l && E(l);
      if (!f.test(l))
        for (; s < d; s++)
          for (t = this[s]; t && t !== e; t = t.parentNode)
            if (
              11 > t.nodeType &&
              (o
                ? -1 < o.index(t)
                : 1 === t.nodeType && E.find.matchesSelector(t, l))
            ) {
              i.push(t);
              break;
            }
      return this.pushStack(1 < i.length ? E.uniqueSort(i) : i);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? u.call(E(t), this[0])
          : u.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (n, e) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(n, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }
  }),
    E.each(
      {
        parent: function (n) {
          var e = n.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return d(t, "parentNode");
        },
        parentsUntil: function (a, e, t) {
          return d(a, "parentNode", t);
        },
        next: function (t) {
          return D(t, "nextSibling");
        },
        prev: function (t) {
          return D(t, "previousSibling");
        },
        nextAll: function (t) {
          return d(t, "nextSibling");
        },
        prevAll: function (t) {
          return d(t, "previousSibling");
        },
        nextUntil: function (a, e, t) {
          return d(a, "nextSibling", t);
        },
        prevUntil: function (a, e, t) {
          return d(a, "previousSibling", t);
        },
        siblings: function (t) {
          return c((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return c(t.firstChild);
        },
        contents: function (t) {
          return null != t.contentDocument && ft(t.contentDocument)
            ? t.contentDocument
            : (p(t, "template") && (t = t.content || t),
              E.merge([], t.childNodes));
        }
      },
      function (a, o) {
        E.fn[a] = function (l, e) {
          var i = E.map(this, o, l);
          return (
            "Until" !== a.slice(-5) && (e = l),
            e && "string" == typeof e && (i = E.filter(e, i)),
            1 < this.length &&
              (S[a] || E.uniqueSort(i),
              /^(?:parents|prev(?:Until|All))/.test(a) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var N = /[^\x20\t\r\n\f]+/g;
  (E.Callbacks = function (d) {
    var p, g;
    d =
      "string" == typeof d
        ? ((p = d),
          (g = {}),
          E.each(p.match(N) || [], function (n, e) {
            g[e] = !0;
          }),
          g)
        : E.extend({}, d);

    var m,
      h,
      _,
      v,
      w = [],
      C = [],
      x = -1,
      T = function () {
        for (v = v || d.once, _ = m = !0; C.length; x = -1)
          for (h = C.shift(); ++x < w.length; )
            !1 === w[x].apply(h[0], h[1]) &&
              d.stopOnFalse &&
              ((x = w.length), (h = !1));

        d.memory || (h = !1), (m = !1), v && (w = h ? [] : "");
      },
      c = {
        add: function () {
          return (
            w &&
              (h && !m && ((x = w.length - 1), C.push(h)),
              (function a(t) {
                E.each(t, function (n, e) {
                  y(e)
                    ? (d.unique && c.has(e)) || w.push(e)
                    : e && e.length && "string" !== b(e) && a(e);
                });
              })(arguments),
              h && !m && T()),
            this
          );
        },
        remove: function () {
          return (
            E.each(arguments, function (a, e) {
              for (var t; -1 < (t = E.inArray(e, w, t)); )
                w.splice(t, 1), t <= x && x--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? -1 < E.inArray(t, w) : 0 < w.length;
        },
        empty: function () {
          return w && (w = []), this;
        },
        disable: function () {
          return (v = C = []), (w = h = ""), this;
        },
        disabled: function () {
          return !w;
        },
        lock: function () {
          return (v = C = []), h || m || (w = h = ""), this;
        },
        locked: function () {
          return !!v;
        },
        fireWith: function (n, e) {
          return (
            v ||
              ((e = [n, (e = e || []).slice ? e.slice() : e]),
              C.push(e),
              m || T()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!_;
        }
      };

    return c;
  }),
    E.extend({
      Deferred: function (t) {
        var d = [
            [
              "notify",
              "progress",
              E.Callbacks("memory"),
              E.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ],
          e = "pending",
          o = {
            state: function () {
              return e;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            catch: function (t) {
              return o.then(null, t);
            },
            pipe: function () {
              var o = arguments;
              return E.Deferred(function (l) {
                E.each(d, function (i, r) {
                  var t = y(o[r[4]]) && o[r[4]];
                  a[r[1]](function () {
                    var n = t && t.apply(this, arguments);
                    n && y(n.promise)
                      ? n
                          .promise()
                          .progress(l.notify)
                          .done(l.resolve)
                          .fail(l.reject)
                      : l[r[0] + "With"](this, t ? [n] : arguments);
                  });
                }),
                  (o = null);
              }).promise();
            },
            then: function (a, t, n) {
              function i(d, c, o, a) {
                return function () {
                  var s = this,
                    p = arguments,
                    u = function () {
                      var n, r;

                      if (!(d < l)) {
                        if ((n = o.apply(s, p)) === c.promise())
                          throw new TypeError("Thenable self-resolution");
                        (r =
                          n &&
                          ("object" == typeof n || "function" == typeof n) &&
                          n.then),
                          y(r)
                            ? a
                              ? r.call(n, i(l, c, O, a), i(l, c, R, a))
                              : (l++,
                                r.call(
                                  n,
                                  i(l, c, O, a),
                                  i(l, c, R, a),
                                  i(l, c, O, c.notifyWith)
                                ))
                            : (o !== O && ((s = void 0), (p = [n])),
                              (a || c.resolveWith)(s, p));
                      }
                    },
                    f = a
                      ? u
                      : function () {
                          try {
                            u();
                          } catch (t) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(t, f.stackTrace),
                              l <= d + 1 &&
                                (o !== R && ((s = void 0), (p = [t])),
                                c.rejectWith(s, p));
                          }
                        };

                  d
                    ? f()
                    : (E.Deferred.getStackHook &&
                        (f.stackTrace = E.Deferred.getStackHook()),
                      L.setTimeout(f));
                };
              }

              var l = 0;
              return E.Deferred(function (o) {
                d[0][3].add(i(0, o, y(n) ? n : O, o.notifyWith)),
                  d[1][3].add(i(0, o, y(a) ? a : O)),
                  d[2][3].add(i(0, o, y(t) ? t : R));
              }).promise();
            },
            promise: function (t) {
              return null == t ? o : E.extend(t, o);
            }
          },
          a = {};
        return (
          E.each(d, function (l, i) {
            var t = i[2],
              n = i[5];
            (o[i[1]] = t.add),
              n &&
                t.add(
                  function () {
                    e = n;
                  },
                  d[3 - l][2].disable,
                  d[3 - l][3].disable,
                  d[0][2].lock,
                  d[0][3].lock
                ),
              t.add(i[3].fire),
              (a[i[0]] = function () {
                return (
                  a[i[0] + "With"](this === a ? void 0 : this, arguments), this
                );
              }),
              (a[i[0] + "With"] = t.fireWith);
          }),
          o.promise(a),
          t && t.call(a, a),
          a
        );
      },
      when: function (l) {
        var s = arguments.length,
          e = s,
          d = Array(e),
          r = gt.call(arguments),
          i = E.Deferred(),
          o = function (n) {
            return function (t) {
              (d[n] = this),
                (r[n] = 1 < arguments.length ? gt.call(arguments) : t),
                --s || i.resolveWith(d, r);
            };
          };

        if (
          1 >= s &&
          (M(l, i.done(o(e)).resolve, i.reject, !s),
          "pending" === i.state() || y(r[e] && r[e].then))
        )
          return i.then();

        for (; e--; ) M(r[e], o(e), i.reject);

        return i.promise();
      }
    });
  (E.Deferred.exceptionHook = function (n, e) {
    L.console &&
      L.console.warn &&
      n &&
      /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/.test(n.name) &&
      L.console.warn("jQuery.Deferred exception: " + n.message, n.stack, e);
  }),
    (E.readyException = function (t) {
      L.setTimeout(function () {
        throw t;
      });
    });
  var k = E.Deferred();
  (E.fn.ready = function (t) {
    return (
      k.then(t)["catch"](function (t) {
        E.readyException(t);
      }),
      this
    );
  }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --E.readyWait : E.isReady) ||
          ((E.isReady = !0) !== t && 0 < --E.readyWait) ||
          k.resolveWith(x, [E]);
      }
    }),
    (E.ready.then = k.then),
    "complete" !== x.readyState &&
    ("loading" === x.readyState || x.documentElement.doScroll)
      ? (x.addEventListener("DOMContentLoaded", e),
        L.addEventListener("load", e))
      : L.setTimeout(E.ready);

  var P = function (d, e, c, n, r, p, o) {
      var f = 0,
        g = d.length,
        u = null == c;
      if ("object" === b(c))
        for (f in ((r = !0), c)) P(d, e, f, c[f], !0, p, o);
      else if (
        void 0 !== n &&
        ((r = !0),
        y(n) || (o = !0),
        u &&
          (o
            ? (e.call(d, n), (e = null))
            : ((u = e),
              (e = function (a, e, t) {
                return u.call(E(a), t);
              }))),
        e)
      )
        for (; f < g; f++) e(d[f], c, o ? n : n.call(d[f], f, e(d[f], c)));
      return r ? d : u ? e.call(d) : g ? e(d[0], c) : p;
    },
    H = /^-ms-/,
    _ = /-([a-z])/g,
    z = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };

  (W.uid = 1),
    (W.prototype = {
      cache: function (n) {
        var e = n[this.expando];
        return (
          e ||
            ((e = {}),
            z(n) &&
              (n.nodeType
                ? (n[this.expando] = e)
                : Object.defineProperty(n, this.expando, {
                    value: e,
                    configurable: !0
                  }))),
          e
        );
      },
      set: function (a, e, t) {
        var n,
          o = this.cache(a);
        if ("string" == typeof e) o[B(e)] = t;
        else for (n in e) o[B(n)] = e[n];
        return o;
      },
      get: function (n, e) {
        return void 0 === e
          ? this.cache(n)
          : n[this.expando] && n[this.expando][B(e)];
      },
      access: function (a, e, t) {
        return void 0 === e || (e && "string" == typeof e && void 0 === t)
          ? this.get(a, e)
          : (this.set(a, e, t), void 0 === t ? e : t);
      },
      remove: function (a, e) {
        var o,
          l = a[this.expando];

        if (void 0 !== l) {
          if (void 0 !== e)
            for (
              o = (e = Array.isArray(e)
                ? e.map(B)
                : ((e = B(e)) in l)
                ? [e]
                : e.match(N) || []).length;
              o--;

            )
              delete l[e[o]];
          (void 0 === e || E.isEmptyObject(l)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (n) {
        var e = n[this.expando];
        return void 0 !== e && !E.isEmptyObject(e);
      }
    });
  var F = new W(),
    V = new W(),
    Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Y = /[A-Z]/g;
  E.extend({
    hasData: function (t) {
      return V.hasData(t) || F.hasData(t);
    },
    data: function (a, e, t) {
      return V.access(a, e, t);
    },
    removeData: function (n, e) {
      V.remove(n, e);
    },
    _data: function (a, e, t) {
      return F.access(a, e, t);
    },
    _removeData: function (n, e) {
      F.remove(n, e);
    }
  }),
    E.fn.extend({
      data: function (l, n) {
        var e,
          s,
          d,
          c = this[0],
          o = c && c.attributes;

        if (void 0 === l) {
          if (
            this.length &&
            ((d = V.get(c)), 1 === c.nodeType && !F.get(c, "hasDataAttrs"))
          ) {
            for (e = o.length; e--; )
              o[e] &&
                0 === (s = o[e].name).indexOf("data-") &&
                ((s = B(s.slice(5))), U(c, s, d[s]));

            F.set(c, "hasDataAttrs", !0);
          }

          return d;
        }

        return "object" == typeof l
          ? this.each(function () {
              V.set(this, l);
            })
          : P(
              this,
              function (n) {
                var e;
                return c && void 0 === n
                  ? void 0 === (e = V.get(c, l))
                    ? void 0 === (e = U(c, l))
                      ? void 0
                      : e
                    : e
                  : void this.each(function () {
                      V.set(this, l, n);
                    });
              },
              null,
              n,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          V.remove(this, t);
        });
      }
    }),
    E.extend({
      queue: function (a, e, o) {
        var n;
        if (a)
          return (
            (e = (e || "fx") + "queue"),
            (n = F.get(a, e)),
            o &&
              (!n || Array.isArray(o)
                ? (n = F.access(a, e, E.makeArray(o)))
                : n.push(o)),
            n || []
          );
      },
      dequeue: function (a, e) {
        e = e || "fx";

        var l = E.queue(a, e),
          n = l.length,
          s = l.shift(),
          d = E._queueHooks(a, e);

        "inprogress" === s && ((s = l.shift()), n--),
          s &&
            ("fx" === e && l.unshift("inprogress"),
            delete d.stop,
            s.call(
              a,
              function () {
                E.dequeue(a, e);
              },
              d
            )),
          !n && d && d.empty.fire();
      },
      _queueHooks: function (a, e) {
        var t = e + "queueHooks";
        return (
          F.get(a, t) ||
          F.access(a, t, {
            empty: E.Callbacks("once memory").add(function () {
              F.remove(a, [e + "queue", t]);
            })
          })
        );
      }
    }),
    E.fn.extend({
      queue: function (a, o) {
        var l = 2;
        return (
          "string" != typeof a && ((o = a), (a = "fx"), l--),
          arguments.length < l
            ? E.queue(this[0], a)
            : void 0 === o
            ? this
            : this.each(function () {
                var t = E.queue(this, a, o);
                E._queueHooks(this, a),
                  "fx" === a && "inprogress" !== t[0] && E.dequeue(this, a);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          E.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (l, d) {
        var c,
          p = 1,
          u = E.Deferred(),
          i = this,
          o = this.length,
          f = function () {
            --p || u.resolveWith(i, [i]);
          };

        for (
          "string" != typeof l && ((d = l), (l = void 0)), l = l || "fx";
          o--;

        )
          (c = F.get(i[o], l + "queueHooks")) &&
            c.empty &&
            (p++, c.empty.add(f));

        return f(), u.promise(d);
      }
    });

  var K = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    J = new RegExp("^(?:([+-])=|)(" + K + ")([a-z%]*)$", "i"),
    ee = ["Top", "Right", "Bottom", "Left"],
    te = x.documentElement,
    ne = function (t) {
      return E.contains(t.ownerDocument, t);
    },
    re = {
      composed: !0
    };

  te.getRootNode &&
    (ne = function (t) {
      return (
        E.contains(t.ownerDocument, t) || t.getRootNode(re) === t.ownerDocument
      );
    });

  var oe = function (n, a) {
      return (
        "none" === (n = a || n).style.display ||
        ("" === n.style.display && ne(n) && "none" === E.css(n, "display"))
      );
    },
    ae = {};

  E.fn.extend({
    show: function () {
      return G(this, !0);
    },
    hide: function () {
      return G(this);
    },
    toggle: function (t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            oe(this) ? E(this).show() : E(this).hide();
          });
    }
  });
  var ue,
    ht,
    yt = /^(?:checkbox|radio)$/i,
    pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    de = /^$|^module$|\/(?:java|ecma)script/i;
  (ue = x.createDocumentFragment().appendChild(x.createElement("div"))),
    (ht = x.createElement("input")).setAttribute("type", "radio"),
    ht.setAttribute("checked", "checked"),
    ht.setAttribute("name", "t"),
    ue.appendChild(ht),
    (v.checkClone = ue.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ue.innerHTML = "<textarea>x</textarea>"),
    (v.noCloneChecked = !!ue.cloneNode(!0).lastChild.defaultValue),
    (ue.innerHTML = "<option></option>"),
    (v.option = !!ue.lastChild);
  var he = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead),
    (he.th = he.td),
    v.option ||
      (he.optgroup = he.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
      ]);
  var ge = /<|&#?\w+;/,
    me = /^([^.]*)(?:\.(.+)|)/;
  (E.event = {
    global: {},
    add: function (m, t, y, b, r) {
      var _,
        w,
        C,
        x,
        T,
        S,
        A,
        D,
        k,
        L,
        j,
        O = F.get(m);

      if (z(m))
        for (
          y.handler && ((y = (_ = y).handler), (r = _.selector)),
            r && E.find.matchesSelector(te, r),
            y.guid || (y.guid = E.guid++),
            (x = O.events) || (x = O.events = Object.create(null)),
            (w = O.handle) ||
              (w = O.handle = function (t) {
                return "undefined" != typeof E && E.event.triggered !== t.type
                  ? E.event.dispatch.apply(m, arguments)
                  : void 0;
              }),
            T = (t = (t || "").match(N) || [""]).length;
          T--;

        )
          (k = j = (C = me.exec(t[T]) || [])[1]),
            (L = (C[2] || "").split(".").sort()),
            k &&
              ((A = E.event.special[k] || {}),
              (k = (r ? A.delegateType : A.bindType) || k),
              (A = E.event.special[k] || {}),
              (S = E.extend(
                {
                  type: k,
                  origType: j,
                  data: b,
                  handler: y,
                  guid: y.guid,
                  selector: r,
                  needsContext: r && E.expr.match.needsContext.test(r),
                  namespace: L.join(".")
                },
                _
              )),
              (D = x[k]) ||
                (((D = x[k] = []).delegateCount = 0),
                (A.setup && !1 !== A.setup.call(m, b, L, w)) ||
                  (m.addEventListener && m.addEventListener(k, w))),
              A.add &&
                (A.add.call(m, S), S.handler.guid || (S.handler.guid = y.guid)),
              r ? D.splice(D.delegateCount++, 0, S) : D.push(S),
              (E.event.global[k] = !0));
    },
    remove: function (m, e, y, n, r) {
      var i,
        b,
        _,
        w,
        C,
        x,
        T,
        S,
        A,
        D,
        k,
        L = F.hasData(m) && F.get(m);

      if (L && (w = L.events)) {
        for (C = (e = (e || "").match(N) || [""]).length; C--; )
          if (
            ((A = k = (_ = me.exec(e[C]) || [])[1]),
            (D = (_[2] || "").split(".").sort()),
            A)
          ) {
            for (
              T = E.event.special[A] || {},
                S = w[(A = (n ? T.delegateType : T.bindType) || A)] || [],
                _ =
                  _[2] &&
                  new RegExp("(^|\\.)" + D.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                b = i = S.length;
              i--;

            )
              (x = S[i]),
                (!r && k !== x.origType) ||
                  (y && y.guid !== x.guid) ||
                  (_ && !_.test(x.namespace)) ||
                  (n && n !== x.selector && ("**" !== n || !x.selector)) ||
                  (S.splice(i, 1),
                  x.selector && S.delegateCount--,
                  T.remove && T.remove.call(m, x));

            b &&
              !S.length &&
              ((T.teardown && !1 !== T.teardown.call(m, D, L.handle)) ||
                E.removeEvent(m, A, L.handle),
              delete w[A]);
          } else for (A in w) E.event.remove(m, A + e[C], y, n, !0);

        E.isEmptyObject(w) && F.remove(m, "handle events");
      }
    },
    dispatch: function (d) {
      var e,
        p,
        f,
        g,
        m,
        h,
        y = Array(arguments.length),
        s = E.event.fix(d),
        u = (F.get(this, "events") || Object.create(null))[s.type] || [],
        l = E.event.special[s.type] || {};

      for (y[0] = s, e = 1; e < arguments.length; e++) y[e] = arguments[e];

      if (
        ((s.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, s))
      ) {
        for (
          h = E.event.handlers.call(this, s, u), e = 0;
          (g = h[e++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = g.elem, p = 0;
            (m = g.handlers[p++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== m.namespace &&
              !s.rnamespace.test(m.namespace)) ||
              ((s.handleObj = m),
              (s.data = m.data),
              void 0 !==
                (f = (
                  (E.event.special[m.origType] || {}).handle || m.handler
                ).apply(g.elem, y)) &&
                !1 === (s.result = f) &&
                (s.preventDefault(), s.stopPropagation()));

        return l.postDispatch && l.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (d, e) {
      var t,
        c,
        p,
        f,
        g,
        m = [],
        s = e.delegateCount,
        u = d.target;
      if (s && u.nodeType && !("click" === d.type && 1 <= d.button))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ("click" !== d.type || !0 !== u.disabled)) {
            for (f = [], g = {}, t = 0; t < s; t++)
              void 0 === g[(p = (c = e[t]).selector + " ")] &&
                (g[p] = c.needsContext
                  ? -1 < E(p, this).index(u)
                  : E.find(p, this, null, [u]).length),
                g[p] && f.push(c);

            f.length &&
              m.push({
                elem: u,
                handlers: f
              });
          }
      return (
        (u = this),
        s < e.length &&
          m.push({
            elem: u,
            handlers: e.slice(s)
          }),
        m
      );
    },
    addProp: function (n, t) {
      Object.defineProperty(E.Event.prototype, n, {
        enumerable: !0,
        configurable: !0,
        get: y(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[n];
            },
        set: function (t) {
          Object.defineProperty(this, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function (t) {
      return t[E.expando] ? t : new E.Event(t);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (n) {
          var e = this || n;
          return (
            yt.test(e.type) && e.click && p(e, "input") && Ee(e, "click", ye),
            !1
          );
        },
        trigger: function (n) {
          var e = this || n;
          return (
            yt.test(e.type) && e.click && p(e, "input") && Ee(e, "click"), !0
          );
        },
        _default: function (n) {
          var e = n.target;
          return (
            (yt.test(e.type) &&
              e.click &&
              p(e, "input") &&
              F.get(e, "click")) ||
            p(e, "a")
          );
        }
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        }
      }
    }
  }),
    (E.removeEvent = function (a, e, t) {
      a.removeEventListener && a.removeEventListener(e, t);
    }),
    (E.Event = function (n, e) {
      return this instanceof E.Event
        ? void (n && n.type
            ? ((this.originalEvent = n),
              (this.type = n.type),
              (this.isDefaultPrevented =
                n.defaultPrevented ||
                (void 0 === n.defaultPrevented && !1 === n.returnValue)
                  ? ye
                  : be),
              (this.target =
                n.target && 3 === n.target.nodeType
                  ? n.target.parentNode
                  : n.target),
              (this.currentTarget = n.currentTarget),
              (this.relatedTarget = n.relatedTarget))
            : (this.type = n),
          e && E.extend(this, e),
          (this.timeStamp = (n && n.timeStamp) || Date.now()),
          (this[E.expando] = !0))
        : new E.Event(n, e);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: be,
      isPropagationStopped: be,
      isImmediatePropagationStopped: be,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = ye),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = ye),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = ye),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (n) {
          var e = n.button;
          return null == n.which && /^key/.test(n.type)
            ? null == n.charCode
              ? n.keyCode
              : n.charCode
            : !n.which &&
              void 0 !== e &&
              /^(?:mouse|pointer|contextmenu|drag|drop)|click/.test(n.type)
            ? 1 & e
              ? 1
              : 2 & e
              ? 3
              : 4 & e
              ? 2
              : 0
            : n.which;
        }
      },
      E.event.addProp
    ),
    E.each(
      {
        focus: "focusin",
        blur: "focusout"
      },
      function (n, e) {
        E.event.special[n] = {
          setup: function () {
            return Ee(this, n, ve), !1;
          },
          trigger: function () {
            return Ee(this, n), !0;
          },
          delegateType: e
        };
      }
    ),
    E.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function (t, a) {
        E.event.special[t] = {
          delegateType: a,
          bindType: a,
          handle: function (o) {
            var e,
              l = o.relatedTarget,
              n = o.handleObj;
            return (
              (l && (l === this || E.contains(this, l))) ||
                ((o.type = n.origType),
                (e = n.handler.apply(this, arguments)),
                (o.type = a)),
              e
            );
          }
        };
      }
    ),
    E.fn.extend({
      on: function (a, e, t, n) {
        return we(this, a, e, t, n);
      },
      one: function (a, e, t, n) {
        return we(this, a, e, t, n, 1);
      },
      off: function (a, e, o) {
        var l, s;
        if (a && a.preventDefault && a.handleObj)
          return (
            (l = a.handleObj),
            E(a.delegateTarget).off(
              l.namespace ? l.origType + "." + l.namespace : l.origType,
              l.selector,
              l.handler
            ),
            this
          );

        if ("object" == typeof a) {
          for (s in a) this.off(s, e, a[s]);

          return this;
        }

        return (
          (!1 !== e && "function" != typeof e) || ((o = e), (e = void 0)),
          !1 === o && (o = be),
          this.each(function () {
            E.event.remove(this, a, o, e);
          })
        );
      }
    });
  var Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
    De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  E.extend({
    htmlPrefilter: function (t) {
      return t;
    },
    clone: function (d, e, t) {
      var n,
        p,
        g,
        m,
        h,
        y,
        b,
        _ = d.cloneNode(!0),
        c = ne(d);

      if (
        !(
          v.noCloneChecked ||
          (1 !== d.nodeType && 11 !== d.nodeType) ||
          E.isXMLDoc(d)
        )
      )
        for (m = Z(_), n = 0, p = (g = Z(d)).length; n < p; n++)
          (h = g[n]),
            (y = m[n]),
            "input" === (b = y.nodeName.toLowerCase()) && yt.test(h.type)
              ? (y.checked = h.checked)
              : ("input" !== b && "textarea" !== b) ||
                (y.defaultValue = h.defaultValue);
      if (e)
        if (t)
          for (g = g || Z(d), m = m || Z(_), n = 0, p = g.length; n < p; n++)
            Ne(g[n], m[n]);
        else Ne(d, _);
      return 0 < (m = Z(_, "script")).length && le(m, !c && Z(d, "script")), _;
    },
    cleanData: function (a) {
      for (var e, l, s, d = E.event.special, i = 0; void 0 !== (l = a[i]); i++)
        if (z(l)) {
          if ((e = l[F.expando])) {
            if (e.events)
              for (s in e.events)
                d[s] ? E.event.remove(l, s) : E.removeEvent(l, s, e.handle);
            l[F.expando] = void 0;
          }

          l[V.expando] && (l[V.expando] = void 0);
        }
    }
  }),
    E.fn.extend({
      detach: function (t) {
        return ke(this, t, !0);
      },
      remove: function (t) {
        return ke(this, t);
      },
      text: function (t) {
        return P(
          this,
          function (t) {
            return void 0 === t
              ? E.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return Ae(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ce(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return Ae(this, arguments, function (n) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = Ce(this, n);
            e.insertBefore(n, e.firstChild);
          }
        });
      },
      before: function () {
        return Ae(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return Ae(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var n, a = 0; null != (n = this[a]); a++)
          1 === n.nodeType && (E.cleanData(Z(n, !1)), (n.textContent = ""));

        return this;
      },
      clone: function (n, a) {
        return (
          (n = null != n && n),
          (a = null == a ? n : a),
          this.map(function () {
            return E.clone(this, n, a);
          })
        );
      },
      html: function (t) {
        return P(
          this,
          function (a) {
            var o = this[0] || {},
              l = 0,
              i = this.length;
            if (void 0 === a && 1 === o.nodeType) return o.innerHTML;

            if (
              "string" == typeof a &&
              !/<script|<style|<link/i.test(a) &&
              !he[(pe.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = E.htmlPrefilter(a);

              try {
                for (; l < i; l++)
                  1 === (o = this[l] || {}).nodeType &&
                    (E.cleanData(Z(o, !1)), (o.innerHTML = a));

                o = 0;
              } catch (t) {}
            }

            o && this.empty().append(a);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ae(
          this,
          arguments,
          function (n) {
            var e = this.parentNode;
            0 > E.inArray(this, a) &&
              (E.cleanData(Z(this)), e && e.replaceChild(n, this));
          },
          a
        );
      }
    }),
    E.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function (t, l) {
        E.fn[t] = function (a) {
          for (var e, d = [], n = E(a), r = n.length - 1, i = 0; i <= r; i++)
            (e = i == r ? this : this.clone(!0)),
              E(n[i])[l](e),
              s.apply(d, e.get());

          return this.pushStack(d);
        };
      }
    );

  var je = new RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"),
    Me = function (n) {
      var e = n.ownerDocument.defaultView;
      return (e && e.opener) || (e = L), e.getComputedStyle(n);
    },
    Ie = function (a, e, t) {
      var n,
        l,
        s = {};

      for (l in e) (s[l] = a.style[l]), (a.style[l] = e[l]);

      for (l in ((n = t.call(a)), e)) a.style[l] = s[l];

      return n;
    },
    We = new RegExp(ee.join("|"), "i");

  !(function () {
    function d() {
      if (u) {
        (y.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          te.appendChild(y).appendChild(u);
        var n = L.getComputedStyle(u);
        (t = "1%" !== n.top),
          (h = 12 === c(n.marginLeft)),
          (u.style.right = "60%"),
          (g = 36 === c(n.right)),
          (p = 36 === c(n.width)),
          (u.style.position = "absolute"),
          (f = 12 === c(u.offsetWidth / 3)),
          te.removeChild(y),
          (u = null);
      }
    }

    function c(t) {
      return Math.round(parseFloat(t));
    }

    var t,
      p,
      f,
      g,
      m,
      h,
      y = x.createElement("div"),
      u = x.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
      E.extend(v, {
        boxSizingReliable: function () {
          return d(), p;
        },
        pixelBoxStyles: function () {
          return d(), g;
        },
        pixelPosition: function () {
          return d(), t;
        },
        reliableMarginLeft: function () {
          return d(), h;
        },
        scrollboxSize: function () {
          return d(), f;
        },
        reliableTrDimensions: function () {
          var a, o, l, i;
          return (
            null == m &&
              ((a = x.createElement("table")),
              (o = x.createElement("tr")),
              (l = x.createElement("div")),
              (a.style.cssText = "position:absolute;left:-11111px"),
              (o.style.height = "1px"),
              (l.style.height = "9px"),
              te.appendChild(a).appendChild(o).appendChild(l),
              (i = L.getComputedStyle(o)),
              (m = 3 < parseInt(i.height)),
              te.removeChild(a)),
            m
          );
        }
      }));
  })();
  var Fe = ["Webkit", "Moz", "ms"],
    _e = x.createElement("div").style,
    ze = {},
    Ue = /^--/,
    Ge = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ye = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  E.extend({
    cssHooks: {
      opacity: {
        get: function (a, e) {
          if (e) {
            var t = Le(a, "opacity");
            return "" === t ? "1" : t;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (d, e, c, p) {
      if (d && 3 !== d.nodeType && 8 !== d.nodeType && d.style) {
        var r,
          f,
          g,
          m = B(e),
          s = Ue.test(e),
          u = d.style;
        if (
          (s || (e = qe(m)), (g = E.cssHooks[e] || E.cssHooks[m]), void 0 === c)
        )
          return g && "get" in g && void 0 !== (r = g.get(d, !1, p)) ? r : u[e];
        "string" == (f = typeof c) &&
          (r = J.exec(c)) &&
          r[1] &&
          ((c = X(d, e, r)), (f = "number")),
          null != c &&
            c == c &&
            ("number" !== f ||
              s ||
              (c += (r && r[3]) || (E.cssNumber[m] ? "" : "px")),
            v.clearCloneStyle ||
              "" !== c ||
              0 !== e.indexOf("background") ||
              (u[e] = "inherit"),
            (g && "set" in g && void 0 === (c = g.set(d, c, p))) ||
              (s ? u.setProperty(e, c) : (u[e] = c)));
      }
    },
    css: function (l, e, d, n) {
      var r,
        c,
        p,
        u = B(e);
      return (
        Ue.test(e) || (e = qe(u)),
        (p = E.cssHooks[e] || E.cssHooks[u]) &&
          "get" in p &&
          (r = p.get(l, !0, d)),
        void 0 === r && (r = Le(l, e, n)),
        "normal" === r && e in Ye && (r = Ye[e]),
        "" === d || d
          ? ((c = parseFloat(r)), !0 === d || isFinite(c) ? c || 0 : r)
          : r
      );
    }
  }),
    E.each(["height", "width"], function (t, l) {
      E.cssHooks[l] = {
        get: function (a, e, t) {
          if (e)
            return !/^(none|table(?!-c[ea]).+)/.test(E.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? Re(a, l, t)
              : Ie(a, Ge, function () {
                  return Re(a, l, t);
                });
        },
        set: function (d, e, c) {
          var n,
            p = Me(d),
            i = !v.scrollboxSize() && "absolute" === p.position,
            o = (i || c) && "border-box" === E.css(d, "boxSizing", !1, p),
            a = c ? He(d, l, c, o, p) : 0;
          return (
            o &&
              i &&
              (a -= Math.ceil(
                d["offset" + l[0].toUpperCase() + l.slice(1)] -
                  parseFloat(p[l]) -
                  He(d, l, "border", !1, p) -
                  0.5
              )),
            a &&
              (n = J.exec(e)) &&
              "px" !== (n[3] || "px") &&
              ((d.style[l] = e), (e = E.css(d, l))),
            Pe(0, e, a)
          );
        }
      };
    }),
    (E.cssHooks.marginLeft = Oe(v.reliableMarginLeft, function (n, e) {
      if (e)
        return (
          (parseFloat(Le(n, "marginLeft")) ||
            n.getBoundingClientRect().left -
              Ie(
                n,
                {
                  marginLeft: 0
                },
                function () {
                  return n.getBoundingClientRect().left;
                }
              )) + "px"
        );
    })),
    E.each(
      {
        margin: "",
        padding: "",
        border: "Width"
      },
      function (a, l) {
        (E.cssHooks[a + l] = {
          expand: function (o) {
            for (
              var e = 0, i = {}, n = "string" == typeof o ? o.split(" ") : [o];
              4 > e;
              e++
            )
              i[a + ee[e] + l] = n[e] || n[e - 2] || n[0];

            return i;
          }
        }),
          "margin" !== a && (E.cssHooks[a + l].set = Pe);
      }
    ),
    E.fn.extend({
      css: function (n, e) {
        return P(
          this,
          function (l, e, t) {
            var n,
              s,
              d = {},
              o = 0;

            if (Array.isArray(e)) {
              for (n = Me(l), s = e.length; o < s; o++)
                d[e[o]] = E.css(l, e[o], !1, n);

              return d;
            }

            return void 0 === t ? E.css(l, e) : E.style(l, e, t);
          },
          n,
          e,
          1 < arguments.length
        );
      }
    }),
    (((E.Tween = Be).prototype = {
      constructor: Be,
      init: function (a, e, t, n, l, i) {
        (this.elem = a),
          (this.prop = t),
          (this.easing = l || E.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = i || (E.cssNumber[t] ? "" : "px"));
      },
      cur: function () {
        var t = Be.propHooks[this.prop];
        return t && t.get ? t.get(this) : Be.propHooks._default.get(this);
      },
      run: function (a) {
        var e,
          o = Be.propHooks[this.prop];
        return (
          (this.pos = this.options.duration
            ? (e = E.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (e = a)),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          o && o.set ? o.set(this) : Be.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = Be.prototype),
    ((Be.propHooks = {
      _default: {
        get: function (n) {
          var e;
          return 1 !== n.elem.nodeType ||
            (null != n.elem[n.prop] && null == n.elem.style[n.prop])
            ? n.elem[n.prop]
            : (e = E.css(n.elem, n.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (t) {
          E.fx.step[t.prop]
            ? E.fx.step[t.prop](t)
            : 1 === t.elem.nodeType &&
              (E.cssHooks[t.prop] || null != t.elem.style[qe(t.prop)])
            ? E.style(t.elem, t.prop, t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        }
      }
    }).scrollTop = Be.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      }
    }),
    (E.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing"
    }),
    (E.fx = Be.prototype.init),
    (E.fx.step = {});
  var Qe, vt, xt, Nt;
  (E.Animation = E.extend(Je, {
    tweeners: {
      "*": [
        function (a, e) {
          var t = this.createTween(a, e);
          return X(t.elem, a, J.exec(e), t), t;
        }
      ]
    },
    tweener: function (a, o) {
      y(a) ? ((o = a), (a = ["*"])) : (a = a.match(N));

      for (var l, s = 0, d = a.length; s < d; s++)
        (l = a[s]),
          (Je.tweeners[l] = Je.tweeners[l] || []),
          Je.tweeners[l].unshift(o);
    },
    prefilters: [
      function (m, e, t) {
        var n,
          y,
          b,
          _,
          w,
          C,
          x,
          T,
          S = "width" in e || "height" in e,
          f = this,
          p = {},
          d = m.style,
          h = m.nodeType && oe(m),
          N = F.get(m, "fxshow");

        for (n in (t.queue ||
          (null == (_ = E._queueHooks(m, "fx")).unqueued &&
            ((_.unqueued = 0),
            (w = _.empty.fire),
            (_.empty.fire = function () {
              _.unqueued || w();
            })),
          _.unqueued++,
          f.always(function () {
            f.always(function () {
              _.unqueued--, E.queue(m, "fx").length || _.empty.fire();
            });
          })),
        e))
          if (((y = e[n]), /^(?:toggle|show|hide)$/.test(y))) {
            if (
              (delete e[n],
              (b = b || "toggle" === y),
              y === (h ? "hide" : "show"))
            ) {
              if ("show" !== y || !N || void 0 === N[n]) continue;
              h = !0;
            }

            p[n] = (N && N[n]) || E.style(m, n);
          }

        if ((C = !E.isEmptyObject(e)) || !E.isEmptyObject(p))
          for (n in (S &&
            1 === m.nodeType &&
            ((t.overflow = [d.overflow, d.overflowX, d.overflowY]),
            null == (x = N && N.display) && (x = F.get(m, "display")),
            "none" === (T = E.css(m, "display")) &&
              (x
                ? (T = x)
                : (G([m], !0),
                  (x = m.style.display || x),
                  (T = E.css(m, "display")),
                  G([m]))),
            ("inline" === T || ("inline-block" === T && null != x)) &&
              "none" === E.css(m, "float") &&
              (C ||
                (f.done(function () {
                  d.display = x;
                }),
                null == x && ((T = d.display), (x = "none" === T ? "" : T))),
              (d.display = "inline-block"))),
          t.overflow &&
            ((d.overflow = "hidden"),
            f.always(function () {
              (d.overflow = t.overflow[0]),
                (d.overflowX = t.overflow[1]),
                (d.overflowY = t.overflow[2]);
            })),
          (C = !1),
          p))
            C ||
              (N
                ? "hidden" in N && (h = N.hidden)
                : (N = F.access(m, "fxshow", {
                    display: x
                  })),
              b && (N.hidden = !h),
              h && G([m], !0),
              f.done(function () {
                for (n in (h || G([m]), F.remove(m, "fxshow"), p))
                  E.style(m, n, p[n]);
              })),
              (C = $e(h ? N[n] : 0, n, f)),
              n in N ||
                ((N[n] = C.start), h && ((C.end = C.start), (C.start = 0)));
      }
    ],
    prefilter: function (n, e) {
      e ? Je.prefilters.unshift(n) : Je.prefilters.push(n);
    }
  })),
    (E.speed = function (a, e, t) {
      var n =
        a && "object" == typeof a
          ? E.extend({}, a)
          : {
              complete: t || (!t && e) || (y(a) && a),
              duration: a,
              easing: (t && e) || (e && !y(e) && e)
            };
      return (
        E.fx.off
          ? (n.duration = 0)
          : "number" != typeof n.duration &&
            (n.duration in E.fx.speeds
              ? (n.duration = E.fx.speeds[n.duration])
              : (n.duration = E.fx.speeds._default)),
        (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          y(n.old) && n.old.call(this), n.queue && E.dequeue(this, n.queue);
        }),
        n
      );
    }),
    E.fn.extend({
      fadeTo: function (a, e, t, n) {
        return this.filter(oe).css("opacity", 0).show().end().animate(
          {
            opacity: e
          },
          a,
          t,
          n
        );
      },
      animate: function (l, t, e, n) {
        var r = E.isEmptyObject(l),
          i = E.speed(t, e, n),
          o = function () {
            var t = Je(this, E.extend({}, l), i);
            (r || F.get(this, "finish")) && t.stop(!0);
          };

        return (
          (o.finish = o),
          r || !1 === i.queue ? this.each(o) : this.queue(i.queue, o)
        );
      },
      stop: function (l, t, s) {
        var d = function (n) {
          var e = n.stop;
          delete n.stop, e(s);
        };

        return (
          "string" != typeof l && ((s = t), (t = l), (l = void 0)),
          t && this.queue(l || "fx", []),
          this.each(function () {
            var a = !0,
              o = null != l && l + "queueHooks",
              i = E.timers,
              n = F.get(this);
            if (o) n[o] && n[o].stop && d(n[o]);
            else
              for (o in n)
                n[o] && n[o].stop && /queueHooks$/.test(o) && d(n[o]);

            for (o = i.length; o--; )
              i[o].elem !== this ||
                (null != l && i[o].queue !== l) ||
                (i[o].anim.stop(s), (a = !1), i.splice(o, 1));

            (!a && s) || E.dequeue(this, l);
          })
        );
      },
      finish: function (l) {
        return (
          !1 !== l && (l = l || "fx"),
          this.each(function () {
            var a,
              s = F.get(this),
              t = s[l + "queue"],
              n = s[l + "queueHooks"],
              r = E.timers,
              i = t ? t.length : 0;

            for (
              s.finish = !0,
                E.queue(this, l, []),
                n && n.stop && n.stop.call(this, !0),
                a = r.length;
              a--;

            )
              r[a].elem === this &&
                r[a].queue === l &&
                (r[a].anim.stop(!0), r.splice(a, 1));

            for (a = 0; a < i; a++)
              t[a] && t[a].finish && t[a].finish.call(this);

            delete s.finish;
          })
        );
      }
    }),
    E.each(["toggle", "show", "hide"], function (t, a) {
      var o = E.fn[a];

      E.fn[a] = function (l, e, t) {
        return null == l || "boolean" == typeof l
          ? o.apply(this, arguments)
          : this.animate(Ke(a, !0), l, e, t);
      };
    }),
    E.each(
      {
        slideDown: Ke("show"),
        slideUp: Ke("hide"),
        slideToggle: Ke("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      },
      function (t, a) {
        E.fn[t] = function (o, e, t) {
          return this.animate(a, o, e, t);
        };
      }
    ),
    (E.timers = []),
    (E.fx.tick = function () {
      var a,
        o = 0,
        l = E.timers;

      for (Qe = Date.now(); o < l.length; o++)
        (a = l[o])() || l[o] !== a || l.splice(o--, 1);

      l.length || E.fx.stop(), (Qe = void 0);
    }),
    (E.fx.timer = function (t) {
      E.timers.push(t), E.fx.start();
    }),
    (E.fx.interval = 13),
    (E.fx.start = function () {
      vt || ((vt = !0), Ve());
    }),
    (E.fx.stop = function () {
      vt = null;
    }),
    (E.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }),
    (E.fn.delay = function (a, t) {
      return (
        (a = (E.fx && E.fx.speeds[a]) || a),
        (t = t || "fx"),
        this.queue(t, function (o, e) {
          var t = L.setTimeout(o, a);

          e.stop = function () {
            L.clearTimeout(t);
          };
        })
      );
    }),
    (xt = x.createElement("input")),
    (Nt = x.createElement("select").appendChild(x.createElement("option"))),
    (xt.type = "checkbox"),
    (v.checkOn = "" !== xt.value),
    (v.optSelected = Nt.selected),
    ((xt = x.createElement("input")).value = "t"),
    (xt.type = "radio"),
    (v.radioValue = "t" === xt.value);
  var At,
    Dt = E.expr.attrHandle;
  E.fn.extend({
    attr: function (n, e) {
      return P(this, E.attr, n, e, 1 < arguments.length);
    },
    removeAttr: function (t) {
      return this.each(function () {
        E.removeAttr(this, t);
      });
    }
  }),
    E.extend({
      attr: function (a, e, t) {
        var n,
          l,
          s = a.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return "undefined" == typeof a.getAttribute
            ? E.prop(a, e, t)
            : ((1 === s && E.isXMLDoc(a)) ||
                (l =
                  E.attrHooks[e.toLowerCase()] ||
                  (E.expr.match.bool.test(e) ? At : void 0)),
              void 0 === t
                ? l && "get" in l && null !== (n = l.get(a, e))
                  ? n
                  : null == (n = E.find.attr(a, e))
                  ? void 0
                  : n
                : null === t
                ? void E.removeAttr(a, e)
                : l && "set" in l && void 0 !== (n = l.set(a, t, e))
                ? n
                : (a.setAttribute(e, t + ""), t));
      },
      attrHooks: {
        type: {
          set: function (a, e) {
            if (!v.radioValue && "radio" === e && p(a, "input")) {
              var t = a.value;
              return a.setAttribute("type", e), t && (a.value = t), e;
            }
          }
        }
      },
      removeAttr: function (a, e) {
        var t,
          o = 0,
          l = e && e.match(N);
        if (l && 1 === a.nodeType) for (; (t = l[o++]); ) a.removeAttribute(t);
      }
    }),
    (At = {
      set: function (a, e, t) {
        return !1 === e ? E.removeAttr(a, t) : a.setAttribute(t, t), t;
      }
    }),
    E.each(E.expr.match.bool.source.match(/\w+/g), function (n, e) {
      var l = Dt[e] || E.find.attr;

      Dt[e] = function (a, e, t) {
        var n,
          s,
          d = e.toLowerCase();
        return (
          t ||
            ((s = Dt[d]),
            (Dt[d] = n),
            (n = null == l(a, e, t) ? null : d),
            (Dt[d] = s)),
          n
        );
      };
    });
  E.fn.extend({
    prop: function (n, e) {
      return P(this, E.prop, n, e, 1 < arguments.length);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[E.propFix[t] || t];
      });
    }
  }),
    E.extend({
      prop: function (a, e, l) {
        var n,
          s,
          d = a.nodeType;
        if (3 !== d && 8 !== d && 2 !== d)
          return (
            (1 === d && E.isXMLDoc(a)) ||
              ((e = E.propFix[e] || e), (s = E.propHooks[e])),
            void 0 === l
              ? s && "get" in s && null !== (n = s.get(a, e))
                ? n
                : a[e]
              : s && "set" in s && void 0 !== (n = s.set(a, l, e))
              ? n
              : (a[e] = l)
          );
      },
      propHooks: {
        tabIndex: {
          get: function (n) {
            var e = E.find.attr(n, "tabindex");
            return e
              ? parseInt(e, 10)
              : /^(?:input|select|textarea|button)$/i.test(n.nodeName) ||
                (/^(?:a|area)$/i.test(n.nodeName) && n.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }),
    v.optSelected ||
      (E.propHooks.selected = {
        get: function (n) {
          var e = n.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (n) {
          var e = n.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
      }),
    E.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      }
    ),
    E.fn.extend({
      addClass: function (l) {
        var t,
          d,
          c,
          p,
          f,
          g,
          m,
          h = 0;
        if (y(l))
          return this.each(function (t) {
            E(this).addClass(l.call(this, t, et(this)));
          });
        if ((t = at(l)).length)
          for (; (d = this[h++]); )
            if (((p = et(d)), (c = 1 === d.nodeType && " " + Ze(p) + " "))) {
              for (g = 0; (f = t[g++]); )
                0 > c.indexOf(" " + f + " ") && (c += f + " ");

              p !== (m = Ze(c)) && d.setAttribute("class", m);
            }
        return this;
      },
      removeClass: function (l) {
        var t,
          d,
          c,
          p,
          f,
          g,
          m,
          h = 0;
        if (y(l))
          return this.each(function (t) {
            E(this).removeClass(l.call(this, t, et(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = at(l)).length)
          for (; (d = this[h++]); )
            if (((p = et(d)), (c = 1 === d.nodeType && " " + Ze(p) + " "))) {
              for (g = 0; (f = t[g++]); )
                for (; -1 < c.indexOf(" " + f + " "); )
                  c = c.replace(" " + f + " ", " ");

              p !== (m = Ze(c)) && d.setAttribute("class", m);
            }
        return this;
      },
      toggleClass: function (l, n) {
        var i = typeof l,
          o = "string" == i || Array.isArray(l);
        return "boolean" == typeof n && o
          ? n
            ? this.addClass(l)
            : this.removeClass(l)
          : y(l)
          ? this.each(function (t) {
              E(this).toggleClass(l.call(this, t, et(this), n), n);
            })
          : this.each(function () {
              var a, s, d, c;
              if (o)
                for (s = 0, d = E(this), c = at(l); (a = c[s++]); )
                  d.hasClass(a) ? d.removeClass(a) : d.addClass(a);
              else
                (void 0 !== l && "boolean" !== i) ||
                  ((a = et(this)) && F.set(this, "__className__", a),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      a || !1 === l ? "" : F.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (a) {
        var e,
          o,
          l = 0;

        for (e = " " + a + " "; (o = this[l++]); )
          if (1 === o.nodeType && -1 < (" " + Ze(et(o)) + " ").indexOf(e))
            return !0;

        return !1;
      }
    });
  E.fn.extend({
    val: function (a) {
      var n,
        o,
        l,
        s = this[0];
      return arguments.length
        ? ((l = y(a)),
          this.each(function (o) {
            var e;
            1 === this.nodeType &&
              (null == (e = l ? a.call(this, o, E(this).val()) : a)
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : Array.isArray(e) &&
                  (e = E.map(e, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((n =
                E.valHooks[this.type] ||
                E.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in n &&
                void 0 !== n.set(this, e, "value")) ||
                (this.value = e));
          }))
        : s
        ? (n = E.valHooks[s.type] || E.valHooks[s.nodeName.toLowerCase()]) &&
          "get" in n &&
          void 0 !== (o = n.get(s, "value"))
          ? o
          : "string" == typeof (o = s.value)
          ? o.replace(/\r/g, "")
          : null == o
          ? ""
          : o
        : void 0;
    }
  }),
    E.extend({
      valHooks: {
        option: {
          get: function (n) {
            var e = E.find.attr(n, "value");
            return null == e ? Ze(E.text(n)) : e;
          }
        },
        select: {
          get: function (l) {
            var e,
              d,
              c,
              f = l.options,
              i = l.selectedIndex,
              o = "select-one" === l.type,
              a = o ? null : [],
              s = o ? i + 1 : f.length;

            for (c = 0 > i ? s : o ? i : 0; c < s; c++)
              if (
                ((d = f[c]).selected || c === i) &&
                !d.disabled &&
                (!d.parentNode.disabled || !p(d.parentNode, "optgroup"))
              ) {
                if (((e = E(d).val()), o)) return e;
                a.push(e);
              }

            return a;
          },
          set: function (l, e) {
            for (
              var t, s, d = l.options, i = E.makeArray(e), o = d.length;
              o--;

            )
              ((s = d[o]).selected =
                -1 < E.inArray(E.valHooks.option.get(s), i)) && (t = !0);

            return t, i;
          }
        }
      }
    }),
    E.each(["radio", "checkbox"], function () {
      (E.valHooks[this] = {
        set: function (n, e) {
          if (Array.isArray(e))
            return (n.checked = -1 < E.inArray(E(n).val(), e));
        }
      }),
        v.checkOn ||
          (E.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    }),
    (v.focusin = "onfocusin" in L);

  var dt = /^(?:focusinfocus|focusoutblur)$/,
    bt = function (t) {
      t.stopPropagation();
    };

  E.extend(E.event, {
    trigger: function (b, _, v, w) {
      var r,
        C,
        T,
        S,
        N,
        A,
        D,
        k,
        j = [v || x],
        p = g.call(b, "type") ? b.type : b,
        O = g.call(b, "namespace") ? b.namespace.split(".") : [];

      if (
        ((C = k = T = v = v || x),
        3 !== v.nodeType &&
          8 !== v.nodeType &&
          !dt.test(p + E.event.triggered) &&
          (-1 < p.indexOf(".") && ((p = (O = p.split(".")).shift()), O.sort()),
          (N = 0 > p.indexOf(":") && "on" + p),
          ((b = b[E.expando]
            ? b
            : new E.Event(p, "object" == typeof b && b)).isTrigger = w ? 2 : 3),
          (b.namespace = O.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + O.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = v),
          (_ = null == _ ? [b] : E.makeArray(_, [b])),
          (D = E.event.special[p] || {}),
          w || !D.trigger || !1 !== D.trigger.apply(v, _)))
      ) {
        if (!w && !D.noBubble && !m(v)) {
          for (
            S = D.delegateType || p, dt.test(S + p) || (C = C.parentNode);
            C;
            C = C.parentNode
          )
            j.push(C), (T = C);

          T === (v.ownerDocument || x) &&
            j.push(T.defaultView || T.parentWindow || L);
        }

        for (r = 0; (C = j[r++]) && !b.isPropagationStopped(); )
          (k = C),
            (b.type = 1 < r ? S : D.bindType || p),
            (A =
              (F.get(C, "events") || Object.create(null))[b.type] &&
              F.get(C, "handle")) && A.apply(C, _),
            (A = N && C[N]) &&
              A.apply &&
              z(C) &&
              ((b.result = A.apply(C, _)),
              !1 === b.result && b.preventDefault());

        return (
          (b.type = p),
          w ||
            b.isDefaultPrevented() ||
            (D._default && !1 !== D._default.apply(j.pop(), _)) ||
            !z(v) ||
            (N &&
              y(v[p]) &&
              !m(v) &&
              ((T = v[N]) && (v[N] = null),
              (E.event.triggered = p),
              b.isPropagationStopped() && k.addEventListener(p, bt),
              v[p](),
              b.isPropagationStopped() && k.removeEventListener(p, bt),
              (E.event.triggered = void 0),
              T && (v[N] = T))),
          b.result
        );
      }
    },
    simulate: function (a, e, t) {
      var n = E.extend(new E.Event(), t, {
        type: a,
        isSimulated: !0
      });
      E.event.trigger(n, null, e);
    }
  }),
    E.fn.extend({
      trigger: function (n, e) {
        return this.each(function () {
          E.event.trigger(n, e, this);
        });
      },
      triggerHandler: function (a, e) {
        var t = this[0];
        if (t) return E.event.trigger(a, e, t, !0);
      }
    }),
    v.focusin ||
      E.each(
        {
          focus: "focusin",
          blur: "focusout"
        },
        function (a, n) {
          var o = function (t) {
            E.event.simulate(n, t.target, E.event.fix(t));
          };

          E.event.special[n] = {
            setup: function () {
              var l = this.ownerDocument || this.document || this,
                e = F.access(l, n);
              e || l.addEventListener(a, o, !0), F.access(l, n, (e || 0) + 1);
            },
            teardown: function () {
              var l = this.ownerDocument || this.document || this,
                e = F.access(l, n) - 1;
              e
                ? F.access(l, n, e)
                : (l.removeEventListener(a, o, !0), F.remove(l, n));
            }
          };
        }
      );
  var wt = L.location,
    Tt = {
      guid: Date.now()
    },
    Ct = /\?/;

  E.parseXML = function (n) {
    var a;
    if (!n || "string" != typeof n) return null;

    try {
      a = new L.DOMParser().parseFromString(n, "text/xml");
    } catch (t) {
      a = void 0;
    }

    return (
      (a && !a.getElementsByTagName("parsererror").length) ||
        E.error("Invalid XML: " + n),
      a
    );
  };

  var Et = /\[\]$/,
    St = /\r?\n/g;
  (E.param = function (a, e) {
    var t,
      o = [],
      l = function (a, e) {
        var t = y(e) ? e() : e;
        o[o.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == t ? "" : t);
      };

    if (null == a) return "";
    if (Array.isArray(a) || (a.jquery && !E.isPlainObject(a)))
      E.each(a, function () {
        l(this.name, this.value);
      });
    else for (t in a) ot(t, a[t], e, l);
    return o.join("&");
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = E.prop(this, "elements");
          return t ? E.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !E(this).is(":disabled") &&
              /^(?:input|select|textarea|keygen)/i.test(this.nodeName) &&
              !/^(?:submit|button|image|reset|file)$/i.test(t) &&
              (this.checked || !yt.test(t))
            );
          })
          .map(function (a, o) {
            var e = E(this).val();
            return null == e
              ? null
              : Array.isArray(e)
              ? E.map(e, function (t) {
                  return {
                    name: o.name,
                    value: t.replace(St, "\r\n")
                  };
                })
              : {
                  name: o.name,
                  value: e.replace(St, "\r\n")
                };
          })
          .get();
      }
    });
  var kt = {},
    Lt = {},
    jt = "*/".concat("*"),
    Ot = x.createElement("a");
  (Ot.href = wt.href),
    E.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: wt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          wt.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": "*/*",
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": E.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (n, e) {
        return e ? ct(ct(n, E.ajaxSettings), e) : ct(E.ajaxSettings, n);
      },
      ajaxPrefilter: lt(kt),
      ajaxTransport: lt(Lt),
      ajax: function (_, C) {
        function S(d, c, t, n) {
          var r,
            p,
            f,
            g,
            h,
            _ = c;
          I ||
            ((I = !0),
            j && L.clearTimeout(j),
            (A = void 0),
            (k = n || ""),
            (W.readyState = 0 < d ? 4 : 0),
            (r = (200 <= d && 300 > d) || 304 === d),
            t &&
              (g = (function (l, e, t) {
                for (
                  var n, d, c, p, f = l.contents, s = l.dataTypes;
                  "*" === s[0];

                )
                  s.shift(),
                    void 0 === n &&
                      (n = l.mimeType || e.getResponseHeader("Content-Type"));

                if (n)
                  for (d in f)
                    if (f[d] && f[d].test(n)) {
                      s.unshift(d);
                      break;
                    }
                if (s[0] in t) c = s[0];
                else {
                  for (d in t) {
                    if (!s[0] || l.converters[d + " " + s[0]]) {
                      c = d;
                      break;
                    }

                    p || (p = d);
                  }

                  c = c || p;
                }
                return c ? (c !== s[0] && s.unshift(c), t[c]) : void 0;
              })(R, W, t)),
            !r &&
              -1 < E.inArray("script", R.dataTypes) &&
              (R.converters["text script"] = function () {}),
            (g = (function (d, e, p, n) {
              var r,
                f,
                g,
                m,
                h,
                y = {},
                l = d.dataTypes.slice();
              if (l[1])
                for (g in d.converters) y[g.toLowerCase()] = d.converters[g];

              for (f = l.shift(); f; )
                if (
                  (d.responseFields[f] && (p[d.responseFields[f]] = e),
                  !h && n && d.dataFilter && (e = d.dataFilter(e, d.dataType)),
                  (h = f),
                  (f = l.shift()))
                )
                  if ("*" === f) f = h;
                  else if ("*" !== h && h !== f) {
                    if (!(g = y[h + " " + f] || y["* " + f]))
                      for (r in y)
                        if (
                          (m = r.split(" "))[1] === f &&
                          (g = y[h + " " + m[0]] || y["* " + m[0]])
                        ) {
                          !0 === g
                            ? (g = y[r])
                            : !0 !== y[r] && ((f = m[0]), l.unshift(m[1]));
                          break;
                        }
                    if (!0 !== g)
                      if (g && d.throws) e = g(e);
                      else
                        try {
                          e = g(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: g
                              ? t
                              : "No conversion from " + h + " to " + f
                          };
                        }
                  }

              return {
                state: "success",
                data: e
              };
            })(R, g, W, r)),
            r
              ? (R.ifModified &&
                  ((h = W.getResponseHeader("Last-Modified")) &&
                    (E.lastModified[D] = h),
                  (h = W.getResponseHeader("etag")) && (E.etag[D] = h)),
                204 === d || "HEAD" === R.type
                  ? (_ = "nocontent")
                  : 304 === d
                  ? (_ = "notmodified")
                  : ((_ = g.state), (p = g.data), (r = !(f = g.error))))
              : ((f = _), (!d && _) || ((_ = "error"), 0 > d && (d = 0))),
            (W.status = d),
            (W.statusText = (c || _) + ""),
            r ? m.resolveWith(v, [p, _, W]) : m.rejectWith(v, [W, _, f]),
            W.statusCode(b),
            (b = void 0),
            q && y.trigger(r ? "ajaxSuccess" : "ajaxError", [W, R, r ? p : f]),
            M.fireWith(v, [W, _]),
            q &&
              (y.trigger("ajaxComplete", [W, R]),
              --E.active || E.event.trigger("ajaxStop")));
        }

        "object" == typeof _ && ((C = _), (_ = void 0)), (C = C || {});
        var A,
          D,
          k,
          l,
          j,
          O,
          I,
          q,
          P,
          H,
          R = E.ajaxSetup({}, C),
          v = R.context || R,
          y = R.context && (v.nodeType || v.jquery) ? E(v) : E.event,
          m = E.Deferred(),
          M = E.Callbacks("once memory"),
          b = R.statusCode || {},
          B = {},
          a = {},
          s = "canceled",
          W = {
            readyState: 0,
            getResponseHeader: function (n) {
              var e;

              if (I) {
                if (!l)
                  for (l = {}; (e = /^(.*?):[ \t]*([^\r\n]*)$/gm.exec(k)); )
                    l[e[1].toLowerCase() + " "] = (
                      l[e[1].toLowerCase() + " "] || []
                    ).concat(e[2]);
                e = l[n.toLowerCase() + " "];
              }

              return null == e ? null : e.join(", ");
            },
            getAllResponseHeaders: function () {
              return I ? k : null;
            },
            setRequestHeader: function (n, o) {
              return (
                null == I &&
                  ((n = a[n.toLowerCase()] = a[n.toLowerCase()] || n),
                  (B[n] = o)),
                this
              );
            },
            overrideMimeType: function (t) {
              return null == I && (R.mimeType = t), this;
            },
            statusCode: function (n) {
              if (n)
                if (I) W.always(n[W.status]);
                else for (var e in n) b[e] = [b[e], n[e]];
              return this;
            },
            abort: function (n) {
              var e = n || s;
              return A && A.abort(e), S(0, e), this;
            }
          };

        if (
          (m.promise(W),
          (R.url = ((_ || R.url || wt.href) + "").replace(
            /^\/\//,
            wt.protocol + "//"
          )),
          (R.type = C.method || C.type || R.method || R.type),
          (R.dataTypes = (R.dataType || "*").toLowerCase().match(N) || [""]),
          null == R.crossDomain)
        ) {
          O = x.createElement("a");

          try {
            (O.href = R.url),
              (O.href = O.href),
              (R.crossDomain =
                Ot.protocol + "//" + Ot.host != O.protocol + "//" + O.host);
          } catch (t) {
            R.crossDomain = !0;
          }
        }

        if (
          (R.data &&
            R.processData &&
            "string" != typeof R.data &&
            (R.data = E.param(R.data, R.traditional)),
          st(kt, R, C, W),
          I)
        )
          return W;

        for (P in ((q = E.event && R.global) &&
          0 == E.active++ &&
          E.event.trigger("ajaxStart"),
        (R.type = R.type.toUpperCase()),
        (R.hasContent = !/^(?:GET|HEAD)$/.test(R.type)),
        (D = R.url.replace(/#.*$/, "")),
        R.hasContent
          ? R.data &&
            R.processData &&
            0 ===
              (R.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (R.data = R.data.replace(/%20/g, "+"))
          : ((H = R.url.slice(D.length)),
            R.data &&
              (R.processData || "string" == typeof R.data) &&
              ((D += (Ct.test(D) ? "&" : "?") + R.data), delete R.data),
            !1 === R.cache &&
              ((D = D.replace(/([?&])_=[^&]*/, "$1")),
              (H = (Ct.test(D) ? "&" : "?") + "_=" + Tt.guid++ + H)),
            (R.url = D + H)),
        R.ifModified &&
          (E.lastModified[D] &&
            W.setRequestHeader("If-Modified-Since", E.lastModified[D]),
          E.etag[D] && W.setRequestHeader("If-None-Match", E.etag[D])),
        ((R.data && R.hasContent && !1 !== R.contentType) || C.contentType) &&
          W.setRequestHeader("Content-Type", R.contentType),
        W.setRequestHeader(
          "Accept",
          R.dataTypes[0] && R.accepts[R.dataTypes[0]]
            ? R.accepts[R.dataTypes[0]] +
                ("*" === R.dataTypes[0] ? "" : ", */*; q=0.01")
            : R.accepts["*"]
        ),
        R.headers))
          W.setRequestHeader(P, R.headers[P]);

        if (R.beforeSend && (!1 === R.beforeSend.call(v, W, R) || I))
          return W.abort();

        if (
          ((s = "abort"),
          M.add(R.complete),
          W.done(R.success),
          W.fail(R.error),
          (A = st(Lt, R, C, W)))
        ) {
          if (((W.readyState = 1), q && y.trigger("ajaxSend", [W, R]), I))
            return W;
          R.async &&
            0 < R.timeout &&
            (j = L.setTimeout(function () {
              W.abort("timeout");
            }, R.timeout));

          try {
            (I = !1), A.send(B, S);
          } catch (t) {
            if (I) throw t;
            S(-1, t);
          }
        } else S(-1, "No Transport");

        return W;
      },
      getJSON: function (a, e, t) {
        return E.get(a, e, t, "json");
      },
      getScript: function (n, e) {
        return E.get(n, void 0, e, "script");
      }
    }),
    E.each(["get", "post"], function (t, a) {
      E[a] = function (o, e, l, i) {
        return (
          y(e) && ((i = i || l), (l = e), (e = void 0)),
          E.ajax(
            E.extend(
              {
                url: o,
                type: a,
                dataType: i,
                data: e,
                success: l
              },
              E.isPlainObject(o) && o
            )
          )
        );
      };
    }),
    E.ajaxPrefilter(function (n) {
      for (var e in n.headers)
        "content-type" === e.toLowerCase() &&
          (n.contentType = n.headers[e] || "");
    }),
    (E._evalUrl = function (a, o, t) {
      return E.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {}
        },
        dataFilter: function (n) {
          E.globalEval(n, o, t);
        }
      });
    }),
    E.fn.extend({
      wrapAll: function (n) {
        var a;
        return (
          this[0] &&
            (y(n) && (n = n.call(this[0])),
            (a = E(n, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && a.insertBefore(this[0]),
            a
              .map(function () {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;

                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (a) {
        return y(a)
          ? this.each(function (t) {
              E(this).wrapInner(a.call(this, t));
            })
          : this.each(function () {
              var n = E(this),
                e = n.contents();
              e.length ? e.wrapAll(a) : n.append(a);
            });
      },
      wrap: function (a) {
        var t = y(a);
        return this.each(function (n) {
          E(this).wrapAll(t ? a.call(this, n) : a);
        });
      },
      unwrap: function (t) {
        return (
          this.parent(t)
            .not("body")
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (E.expr.pseudos.hidden = function (t) {
      return !E.expr.pseudos.visible(t);
    }),
    (E.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (E.ajaxSettings.xhr = function () {
      try {
        return new L.XMLHttpRequest();
      } catch (t) {}
    });

  var It = {
      0: 200,
      1223: 204
    },
    _t = E.ajaxSettings.xhr();

  (v.cors = !!_t && "withCredentials" in _t),
    (v.ajax = _t = !!_t),
    E.ajaxTransport(function (l) {
      var i, s;
      if (v.cors || (_t && !l.crossDomain))
        return {
          send: function (a, o) {
            var e,
              t = l.xhr();
            if (
              (t.open(l.type, l.url, l.async, l.username, l.password),
              l.xhrFields)
            )
              for (e in l.xhrFields) t[e] = l.xhrFields[e];

            for (e in (l.mimeType &&
              t.overrideMimeType &&
              t.overrideMimeType(l.mimeType),
            l.crossDomain ||
              a["X-Requested-With"] ||
              (a["X-Requested-With"] = "XMLHttpRequest"),
            a))
              t.setRequestHeader(e, a[e]);

            (i = function (n) {
              return function () {
                i &&
                  ((i = s = t.onload = t.onerror = t.onabort = t.ontimeout = t.onreadystatechange = null),
                  "abort" === n
                    ? t.abort()
                    : "error" === n
                    ? "number" == typeof t.status
                      ? o(t.status, t.statusText)
                      : o(0, "error")
                    : o(
                        It[t.status] || t.status,
                        t.statusText,
                        "text" !== (t.responseType || "text") ||
                          "string" != typeof t.responseText
                          ? {
                              binary: t.response
                            }
                          : {
                              text: t.responseText
                            },
                        t.getAllResponseHeaders()
                      ));
              };
            }),
              (t.onload = i()),
              (s = t.onerror = t.ontimeout = i("error")),
              void 0 === t.onabort
                ? (t.onreadystatechange = function () {
                    4 === t.readyState &&
                      L.setTimeout(function () {
                        i && s();
                      });
                  })
                : (t.onabort = s),
              (i = i("abort"));

            try {
              t.send((l.hasContent && l.data) || null);
            } catch (t) {
              if (i) throw t;
            }
          },
          abort: function () {
            i && i();
          }
        };
    }),
    E.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    E.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (t) {
          return E.globalEval(t), t;
        }
      }
    }),
    E.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    E.ajaxTransport("script", function (a) {
      var n, o;
      if (a.crossDomain || a.scriptAttrs)
        return {
          send: function (l, i) {
            (n = E("<script>")
              .attr(a.scriptAttrs || {})
              .prop({
                charset: a.scriptCharset,
                src: a.url
              })
              .on(
                "load error",
                (o = function (t) {
                  n.remove(),
                    (o = null),
                    t && i("error" === t.type ? 404 : 200, t.type);
                })
              )),
              x.head.appendChild(n[0]);
          },
          abort: function () {
            o && o();
          }
        };
    });
  var qt,
    Pt = [],
    Ht = /(=)\?(?=&|$)|\?\?/;
  E.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Pt.pop() || E.expando + "_" + Tt.guid++;
      return (this[t] = !0), t;
    }
  }),
    E.ajaxPrefilter("json jsonp", function (l, e, t) {
      var n,
        s,
        d,
        c =
          !1 !== l.jsonp &&
          (Ht.test(l.url)
            ? "url"
            : "string" == typeof l.data &&
              0 ===
                (l.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ht.test(l.data) &&
              "data");
      if (c || "jsonp" === l.dataTypes[0])
        return (
          (n = l.jsonpCallback = y(l.jsonpCallback)
            ? l.jsonpCallback()
            : l.jsonpCallback),
          c
            ? (l[c] = l[c].replace(Ht, "$1" + n))
            : !1 !== l.jsonp &&
              (l.url += (Ct.test(l.url) ? "&" : "?") + l.jsonp + "=" + n),
          (l.converters["script json"] = function () {
            return d || E.error(n + " was not called"), d[0];
          }),
          (l.dataTypes[0] = "json"),
          (s = L[n]),
          (L[n] = function () {
            d = arguments;
          }),
          t.always(function () {
            void 0 === s ? E(L).removeProp(n) : (L[n] = s),
              l[n] && ((l.jsonpCallback = e.jsonpCallback), Pt.push(n)),
              d && y(s) && s(d[0]),
              (d = s = void 0);
          }),
          "script"
        );
    }),
    (v.createHTMLDocument =
      (((qt = x.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === qt.childNodes.length)),
    (E.parseHTML = function (a, e, l) {
      return "string" == typeof a
        ? ("boolean" == typeof e && ((l = e), (e = !1)),
          e ||
            (v.createHTMLDocument
              ? (((s = (e = x.implementation.createHTMLDocument(
                  ""
                )).createElement("base")).href = x.location.href),
                e.head.appendChild(s))
              : (e = x)),
          (c = !l && []),
          (d = h.exec(a))
            ? [e.createElement(d[1])]
            : ((d = se([a], e, c)),
              c && c.length && E(c).remove(),
              E.merge([], d.childNodes)))
        : [];
      var s, d, c;
    }),
    (E.fn.load = function (l, d, c) {
      var p,
        u,
        f,
        g = this,
        a = l.indexOf(" ");
      return (
        -1 < a && ((p = Ze(l.slice(a))), (l = l.slice(0, a))),
        y(d)
          ? ((c = d), (d = void 0))
          : d && "object" == typeof d && (u = "POST"),
        0 < g.length &&
          E.ajax({
            url: l,
            type: u || "GET",
            dataType: "html",
            data: d
          })
            .done(function (t) {
              (f = arguments),
                g.html(p ? E("<div>").append(E.parseHTML(t)).find(p) : t);
            })
            .always(
              c &&
                function (n, e) {
                  g.each(function () {
                    c.apply(this, f || [n.responseText, e, n]);
                  });
                }
            ),
        this
      );
    }),
    (E.expr.pseudos.animated = function (n) {
      return E.grep(E.timers, function (t) {
        return n === t.elem;
      }).length;
    }),
    (E.offset = {
      setOffset: function (d, e, p) {
        var n,
          g,
          m,
          h,
          b,
          _,
          v = E.css(d, "position"),
          l = E(d),
          c = {};

        "static" === v && (d.style.position = "relative"),
          (b = l.offset()),
          (m = E.css(d, "top")),
          (_ = E.css(d, "left")),
          ("absolute" === v || "fixed" === v) && -1 < (m + _).indexOf("auto")
            ? ((h = (n = l.position()).top), (g = n.left))
            : ((h = parseFloat(m) || 0), (g = parseFloat(_) || 0)),
          y(e) && (e = e.call(d, p, E.extend({}, b))),
          null != e.top && (c.top = e.top - b.top + h),
          null != e.left && (c.left = e.left - b.left + g),
          "using" in e
            ? e.using.call(d, c)
            : ("number" == typeof c.top && (c.top += "px"),
              "number" == typeof c.left && (c.left += "px"),
              l.css(c));
      }
    }),
    E.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (t) {
                E.offset.setOffset(this, a, t);
              });
        var t,
          o,
          l = this[0];
        return l
          ? l.getClientRects().length
            ? ((t = l.getBoundingClientRect()),
              (o = l.ownerDocument.defaultView),
              {
                top: t.top + o.pageYOffset,
                left: t.left + o.pageXOffset
              })
            : {
                top: 0,
                left: 0
              }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var a,
            o,
            l,
            s = this[0],
            r = {
              top: 0,
              left: 0
            };
          if ("fixed" === E.css(s, "position")) o = s.getBoundingClientRect();
          else {
            for (
              o = this.offset(),
                l = s.ownerDocument,
                a = s.offsetParent || l.documentElement;
              a &&
              (a === l.body || a === l.documentElement) &&
              "static" === E.css(a, "position");

            )
              a = a.parentNode;

            a &&
              a !== s &&
              1 === a.nodeType &&
              (((r = E(a).offset()).top += E.css(a, "borderTopWidth", !0)),
              (r.left += E.css(a, "borderLeftWidth", !0)));
          }
          return {
            top: o.top - r.top - E.css(s, "marginTop", !0),
            left: o.left - r.left - E.css(s, "marginLeft", !0)
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === E.css(t, "position");

          )
            t = t.offsetParent;

          return t || te;
        });
      }
    }),
    E.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      },
      function (n, a) {
        var l = "pageYOffset" === a;

        E.fn[n] = function (t) {
          return P(
            this,
            function (o, e, t) {
              var n;
              return (m(o) ? (n = o) : 9 === o.nodeType && (n = o.defaultView),
              void 0 === t)
                ? n
                  ? n[a]
                  : o[e]
                : void (n
                    ? n.scrollTo(l ? n.pageXOffset : t, l ? t : n.pageYOffset)
                    : (o[e] = t));
            },
            n,
            t,
            arguments.length
          );
        };
      }
    ),
    E.each(["top", "left"], function (t, a) {
      E.cssHooks[a] = Oe(v.pixelPosition, function (n, e) {
        if (e)
          return (e = Le(n, a)), je.test(e) ? E(n).position()[a] + "px" : e;
      });
    }),
    E.each(
      {
        Height: "height",
        Width: "width"
      },
      function (l, a) {
        E.each(
          {
            padding: "inner" + l,
            content: a,
            "": "outer" + l
          },
          function (s, d) {
            E.fn[d] = function (o, e) {
              var t = arguments.length && (s || "boolean" != typeof o),
                c = s || (!0 === o || !0 === e ? "margin" : "border");
              return P(
                this,
                function (a, e, t) {
                  var n;
                  return m(a)
                    ? 0 === d.indexOf("outer")
                      ? a["inner" + l]
                      : a.document.documentElement["client" + l]
                    : 9 === a.nodeType
                    ? ((n = a.documentElement),
                      Math.max(
                        a.body["scroll" + l],
                        n["scroll" + l],
                        a.body["offset" + l],
                        n["offset" + l],
                        n["client" + l]
                      ))
                    : void 0 === t
                    ? E.css(a, e, c)
                    : E.style(a, e, t, c);
                },
                a,
                t ? o : void 0,
                t
              );
            };
          }
        );
      }
    ),
    E.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function (n, a) {
        E.fn[a] = function (t) {
          return this.on(a, t);
        };
      }
    ),
    E.fn.extend({
      bind: function (a, e, t) {
        return this.on(a, null, e, t);
      },
      unbind: function (n, e) {
        return this.off(n, null, e);
      },
      delegate: function (a, e, t, n) {
        return this.on(e, a, t, n);
      },
      undelegate: function (a, e, t) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(e, a || "**", t);
      },
      hover: function (n, e) {
        return this.mouseenter(n).mouseleave(e || n);
      }
    }),
    E.each(
      [
        "blur",
        "focus",
        "focusin",
        "focusout",
        "resize",
        "scroll",
        "click",
        "dblclick",
        "mousedown",
        "mouseup",
        "mousemove",
        "mouseover",
        "mouseout",
        "mouseenter",
        "mouseleave",
        "change",
        "select",
        "submit",
        "keydown",
        "keypress",
        "keyup",
        "contextmenu"
      ],
      function (t, a) {
        E.fn[a] = function (n, e) {
          return 0 < arguments.length
            ? this.on(a, null, n, e)
            : this.trigger(a);
        };
      }
    );
  (E.proxy = function (a, o) {
    var l, s, d;
    if (("string" == typeof o && ((l = a[o]), (o = a), (a = l)), y(a)))
      return (
        (s = gt.call(arguments, 2)),
        ((d = function () {
          return a.apply(o || this, s.concat(gt.call(arguments)));
        }).guid = a.guid = a.guid || E.guid++),
        d
      );
  }),
    (E.holdReady = function (t) {
      t ? E.readyWait++ : E.ready(!0);
    }),
    (E.isArray = Array.isArray),
    (E.parseJSON = JSON.parse),
    (E.nodeName = p),
    (E.isFunction = y),
    (E.isWindow = m),
    (E.camelCase = B),
    (E.type = b),
    (E.now = Date.now),
    (E.isNumeric = function (n) {
      var e = E.type(n);
      return ("number" === e || "string" === e) && !isNaN(n - parseFloat(n));
    }),
    (E.trim = function (t) {
      return null == t
        ? ""
        : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return E;
      });
  var Rt = L.jQuery,
    Mt = L.$;
  return (
    (E.noConflict = function (t) {
      return L.$ === E && (L.$ = Mt), t && L.jQuery === E && (L.jQuery = Rt), E;
    }),
    "undefined" == typeof C && (L.jQuery = L.$ = E),
    E
  );
});
!(function (n, a) {
  "object" == typeof exports && "undefined" != typeof module
    ? a(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], a)
    : a(
        ((n =
          "undefined" == typeof globalThis
            ? n || self
            : globalThis).bootstrap = {}),
        n.jQuery
      );
})(this, function (s, t) {
  "use strict";

  function e(e) {
    return e && "object" == typeof e && "default" in e
      ? e
      : {
          default: e
        };
  }

  function p(a, t) {
    for (var e, o = 0; o < t.length; o++)
      (e = t[o]),
        (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        "value" in e && (e.writable = !0),
        Object.defineProperty(a, e.key, e);
  }

  function u(a, t, e) {
    return t && p(a.prototype, t), e && p(a, e), a;
  }

  function m() {
    return (m =
      Object.assign ||
      function (a) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var l in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, l) && (a[l] = t[l]);

        return a;
      }).apply(this, arguments);
  }

  function o(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }

  function w(a, t) {
    if (1 !== a.nodeType) return [];
    var e = a.ownerDocument.defaultView.getComputedStyle(a, null);
    return t ? e[t] : e;
  }

  function A(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }

  function O(a) {
    if (!a) return document.body;

    switch (a.nodeName) {
      case "HTML":
      case "BODY":
        return a.ownerDocument.body;

      case "#document":
        return a.body;
    }

    var t = w(a),
      e = t.overflow,
      n = t.overflowX,
      l = t.overflowY;
    return /(auto|scroll|overlay)/.test(e + l + n) ? a : O(A(a));
  }

  function x(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }

  function j(e) {
    return 11 === e ? D : 10 === e ? k : D || k;
  }

  function I(a) {
    if (!a) return document.documentElement;

    for (
      var o = j(10) ? document.body : null, e = a.offsetParent || null;
      e === o && a.nextElementSibling;

    )
      e = (a = a.nextElementSibling).offsetParent;

    var l = e && e.nodeName;
    return l && "BODY" !== l && "HTML" !== l
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(e.nodeName) &&
        "static" === w(e, "position")
        ? I(e)
        : e
      : a
      ? a.ownerDocument.documentElement
      : document.documentElement;
  }

  function R(e) {
    return null === e.parentNode ? e : R(e.parentNode);
  }

  function H(d, t) {
    if (!(d && d.nodeType && t && t.nodeType)) return document.documentElement;
    var e = d.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = e ? d : t,
      i = e ? t : d,
      o = document.createRange();
    o.setStart(n, 0), o.setEnd(i, 0);
    var r,
      c,
      p = o.commonAncestorContainer;
    if ((d !== p && t !== p) || n.contains(i))
      return "BODY" === (c = (r = p).nodeName) ||
        ("HTML" !== c && I(r.firstElementChild) !== r)
        ? I(p)
        : p;
    var l = R(d);
    return l.host ? H(l.host, t) : H(d, R(t).host);
  }

  function M(a) {
    var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
      e = "top" === t ? "scrollTop" : "scrollLeft",
      n = a.nodeName;

    if ("BODY" === n || "HTML" === n) {
      var l = a.ownerDocument.documentElement,
        o = a.ownerDocument.scrollingElement || l;
      return o[e];
    }

    return a[e];
  }

  function q(a, t) {
    var e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = M(t, "top"),
      l = M(t, "left"),
      o = e ? -1 : 1;
    return (
      (a.top += n * o),
      (a.bottom += n * o),
      (a.left += l * o),
      (a.right += l * o),
      a
    );
  }

  function n(a, t) {
    var e = "x" === t ? "Left" : "Top",
      n = "Left" == e ? "Right" : "Bottom";
    return (
      parseFloat(a["border" + e + "Width"]) +
      parseFloat(a["border" + n + "Width"])
    );
  }

  function r(a, t, e, n) {
    return Math.max(
      t["offset" + a],
      t["scroll" + a],
      e["client" + a],
      e["offset" + a],
      e["scroll" + a],
      j(10)
        ? parseInt(e["offset" + a]) +
            parseInt(n["margin" + ("Height" === a ? "Top" : "Left")]) +
            parseInt(n["margin" + ("Height" === a ? "Bottom" : "Right")])
        : 0
    );
  }

  function B(a) {
    var t = a.body,
      e = a.documentElement,
      n = j(10) && getComputedStyle(e);
    return {
      height: r("Height", t, e, n),
      width: r("Width", t, e, n)
    };
  }

  function W(e) {
    return z({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function F(d) {
    var t = {};

    try {
      if (j(10)) {
        t = d.getBoundingClientRect();
        var c = M(d, "top"),
          p = M(d, "left");
        (t.top += c), (t.left += p), (t.bottom += c), (t.right += p);
      } else t = d.getBoundingClientRect();
    } catch (e) {}

    var i = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top
      },
      o = "HTML" === d.nodeName ? B(d.ownerDocument) : {},
      r = o.width || d.clientWidth || i.width,
      a = o.height || d.clientHeight || i.height,
      s = d.offsetWidth - r,
      g = d.offsetHeight - a;

    if (s || g) {
      var m = w(d);
      (s -= n(m, "x")), (g -= n(m, "y")), (i.width -= s), (i.height -= g);
    }

    return W(i);
  }

  function U(p, t) {
    var e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = j(10),
      i = "HTML" === t.nodeName,
      o = F(p),
      r = F(t),
      a = O(p),
      s = w(t),
      l = parseFloat(s.borderTopWidth),
      u = parseFloat(s.borderLeftWidth);
    e && i && ((r.top = Math.max(r.top, 0)), (r.left = Math.max(r.left, 0)));
    var f = W({
      top: o.top - r.top - l,
      left: o.left - r.left - u,
      width: o.width,
      height: o.height
    });

    if (((f.marginTop = 0), (f.marginLeft = 0), !n && i)) {
      var g = parseFloat(s.marginTop),
        c = parseFloat(s.marginLeft);
      (f.top -= l - g),
        (f.bottom -= l - g),
        (f.left -= u - c),
        (f.right -= u - c),
        (f.marginTop = g),
        (f.marginLeft = c);
    }

    return (
      (n && !e ? t.contains(a) : t === a && "BODY" !== a.nodeName) &&
        (f = q(f, t)),
      f
    );
  }

  function Q(d) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      e = d.ownerDocument.documentElement,
      n = U(d, e),
      i = Math.max(e.clientWidth, window.innerWidth || 0),
      o = Math.max(e.clientHeight, window.innerHeight || 0),
      r = t ? 0 : M(e),
      a = t ? 0 : M(e, "left"),
      s = {
        top: r - n.top + n.marginTop,
        left: a - n.left + n.marginLeft,
        width: i,
        height: o
      };
    return W(s);
  }

  function K(a) {
    var t = a.nodeName;
    if ("BODY" === t || "HTML" === t) return !1;
    if ("fixed" === w(a, "position")) return !0;
    var e = A(a);
    return !!e && K(e);
  }

  function G(n) {
    if (!n || !n.parentElement || j()) return document.documentElement;

    for (var t = n.parentElement; t && "none" === w(t, "transform"); )
      t = t.parentElement;

    return t || document.documentElement;
  }

  function J(p, t, e, g) {
    var i = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      o = {
        top: 0,
        left: 0
      },
      m = i ? G(p) : H(p, x(t));
    if ("viewport" === g) o = Q(m, i);
    else {
      var a;
      "scrollParent" === g
        ? "BODY" === (a = O(A(t))).nodeName &&
          (a = p.ownerDocument.documentElement)
        : (a = "window" === g ? p.ownerDocument.documentElement : g);
      var h = U(a, m, i);
      if ("HTML" !== a.nodeName || K(m)) o = h;
      else {
        var l = B(p.ownerDocument),
          u = l.height,
          f = l.width;
        (o.top += h.top - h.marginTop),
          (o.bottom = u + h.top),
          (o.left += h.left - h.marginLeft),
          (o.right = f + h.left);
      }
    }
    var d = "number" == typeof (e = e || 0);
    return (
      (o.left += d ? e : e.left || 0),
      (o.top += d ? e : e.top || 0),
      (o.right -= d ? e : e.right || 0),
      (o.bottom -= d ? e : e.bottom || 0),
      o
    );
  }

  function Z(e) {
    return e.width * e.height;
  }

  function ee(c, t, p, e, n) {
    var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === c.indexOf("auto")) return c;
    var i = J(p, e, o, n),
      a = {
        top: {
          width: i.width,
          height: t.top - i.top
        },
        right: {
          width: i.right - t.right,
          height: i.height
        },
        bottom: {
          width: i.width,
          height: i.bottom - t.bottom
        },
        left: {
          width: t.left - i.left,
          height: i.height
        }
      },
      r = Object.keys(a)
        .map(function (e) {
          return z(
            {
              key: e
            },
            a[e],
            {
              area: Z(a[e])
            }
          );
        })
        .sort(function (n, t) {
          return t.area - n.area;
        }),
      l = r.filter(function (n) {
        var t = n.width,
          e = n.height;
        return t >= p.clientWidth && e >= p.clientHeight;
      }),
      s = 0 < l.length ? l[0].key : r[0].key,
      u = c.split("-")[1];
    return s + (u ? "-" + u : "");
  }

  function le(a, t, e) {
    var n =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      l = n ? G(t) : H(t, x(e));
    return U(e, l, n);
  }

  function ie(a) {
    var t = a.ownerDocument.defaultView.getComputedStyle(a),
      e = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
      n = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
    return {
      width: a.offsetWidth + n,
      height: a.offsetHeight + e
    };
  }

  function ye(n) {
    var a = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return n.replace(/left|right|bottom|top/g, function (e) {
      return a[e];
    });
  }

  function be(d, t, e) {
    e = e.split("-")[0];
    var c = ie(d),
      i = {
        width: c.width,
        height: c.height
      },
      o = -1 !== ["right", "left"].indexOf(e),
      r = o ? "top" : "left",
      a = o ? "left" : "top",
      s = o ? "height" : "width",
      l = o ? "width" : "height";
    return (
      (i[r] = t[r] + t[s] / 2 - c[s] / 2),
      (i[a] = e === a ? t[a] - c[l] : t[ye(a)]),
      i
    );
  }

  function we(n, t) {
    return Array.prototype.find ? n.find(t) : n.filter(t)[0];
  }

  function Ee(a, l, t) {
    return (
      (void 0 === t
        ? a
        : a.slice(
            0,
            (function (a, o, e) {
              if (Array.prototype.findIndex)
                return a.findIndex(function (n) {
                  return n[o] === e;
                });
              var t = we(a, function (n) {
                return n[o] === e;
              });
              return a.indexOf(t);
            })(a, "name", t)
          )
      ).forEach(function (e) {
        e.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var t = e.function || e.fn;
        e.enabled &&
          o(t) &&
          ((l.offsets.popper = W(l.offsets.popper)),
          (l.offsets.reference = W(l.offsets.reference)),
          (l = t(l, e)));
      }),
      l
    );
  }

  function Ce() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      (e.offsets.reference = le(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (e.placement = ee(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.positionFixed = this.options.positionFixed),
        (e.offsets.popper = be(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (e = Ee(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }

  function xe(n, a) {
    return n.some(function (e) {
      var t = e.name;
      return e.enabled && t === a;
    });
  }

  function Te(a) {
    for (
      var t = [!1, "ms", "Webkit", "Moz", "O"],
        e = a.charAt(0).toUpperCase() + a.slice(1),
        n = 0;
      n < t.length;
      n++
    ) {
      var l = t[n],
        o = l ? "" + l + e : a;
      if ("undefined" != typeof document.body.style[o]) return o;
    }

    return null;
  }

  function Se() {
    return (
      (this.state.isDestroyed = !0),
      xe(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[Te("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }

  function Ne(n) {
    var t = n.ownerDocument;
    return t ? t.defaultView : window;
  }

  function Ae(a, t, e, n) {
    (e.updateBound = n),
      Ne(a).addEventListener("resize", e.updateBound, {
        passive: !0
      });
    var l = O(a);
    return (
      (function l(t, e, n, i) {
        var o = "BODY" === t.nodeName,
          r = o ? t.ownerDocument.defaultView : t;
        r.addEventListener(e, n, {
          passive: !0
        }),
          o || l(O(r.parentNode), e, n, i),
          i.push(r);
      })(l, "scroll", e.updateBound, e.scrollParents),
      (e.scrollElement = l),
      (e.eventsEnabled = !0),
      e
    );
  }

  function De() {
    this.state.eventsEnabled ||
      (this.state = Ae(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }

  function ke() {
    var n, a;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((n = this.reference),
        (a = this.state),
        Ne(n).removeEventListener("resize", a.updateBound),
        a.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", a.updateBound);
        }),
        (a.updateBound = null),
        (a.scrollParents = []),
        (a.scrollElement = null),
        (a.eventsEnabled = !1),
        a)));
  }

  function Le(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function je(a, t) {
    Object.keys(t).forEach(function (e) {
      var n = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) &&
        Le(t[e]) &&
        (n = "px"),
        (a.style[e] = t[e] + n);
    });
  }

  function Oe(a, l, e) {
    var n = we(a, function (e) {
        return e.name === l;
      }),
      t =
        !!n &&
        a.some(function (a) {
          return a.name === e && a.enabled && a.order < n.order;
        });

    if (!t) {
      var o = "`" + l + "`";
      console.warn(
        "`" +
          e +
          "`" +
          " modifier is required by " +
          o +
          " modifier in order to work, be sure to include it before " +
          o +
          "!"
      );
    }

    return t;
  }

  function Ie(a) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      e = Me.indexOf(a),
      n = Me.slice(e + 1).concat(Me.slice(0, e));
    return t ? n.reverse() : n;
  }

  function qe(d, c, e, t) {
    var p = [0, 0],
      n = -1 !== ["right", "left"].indexOf(t),
      o = d.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      a = o.indexOf(
        we(o, function (e) {
          return -1 !== e.search(/,|\s/);
        })
      );
    o[a] &&
      -1 === o[a].indexOf(",") &&
      console.warn(
        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
      );
    var i = /\s*,\s*|\s+/,
      l =
        -1 === a
          ? [o]
          : [
              o.slice(0, a).concat([o[a].split(i)[0]]),
              [o[a].split(i)[1]].concat(o.slice(a + 1))
            ];
    return (
      (l = l.map(function (l, t) {
        var i = (1 === t ? !n : n) ? "height" : "width",
          o = !1;
        return l
          .reduce(function (n, t) {
            return "" === n[n.length - 1] && -1 !== ["+", "-"].indexOf(t)
              ? ((n[n.length - 1] = t), (o = !0), n)
              : o
              ? ((n[n.length - 1] += t), (o = !1), n)
              : n.concat(t);
          }, [])
          .map(function (n) {
            return (function (l, t, e, n) {
              var i = l.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +i[1],
                r = i[2];
              if (!o) return l;

              if (0 === r.indexOf("%")) {
                var a;

                switch (r) {
                  case "%p":
                    a = e;
                    break;

                  case "%":
                  case "%r":
                  default:
                    a = n;
                }

                return (W(a)[t] / 100) * o;
              }

              return "vh" === r || "vw" === r
                ? (("vh" === r
                    ? Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      )
                    : Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )) /
                    100) *
                    o
                : o;
            })(n, i, c, e);
          });
      })).forEach(function (a, t) {
        a.forEach(function (e, n) {
          Le(e) && (p[t] += e * ("-" === a[n - 1] ? -1 : 1));
        });
      }),
      p
    );
  }

  function Pe(d, c, e) {
    if (0 === d.length) return d;
    if (e && "function" == typeof e) return e(d);

    for (
      var t = new window.DOMParser().parseFromString(d, "text/html"),
        n = Object.keys(c),
        o = [].slice.call(t.body.querySelectorAll("*")),
        i = function (e) {
          var r = o[e],
            t = r.nodeName.toLowerCase();
          if (-1 === n.indexOf(r.nodeName.toLowerCase()))
            return r.parentNode.removeChild(r), "continue";
          var a = [].slice.call(r.attributes),
            i = [].concat(c["*"] || [], c[t] || []);
          a.forEach(function (e) {
            (function (a, t) {
              var e = a.nodeName.toLowerCase();
              if (-1 !== t.indexOf(e))
                return (
                  -1 === Ke.indexOf(e) ||
                  !!(a.nodeValue.match($e) || a.nodeValue.match(Ge))
                );

              for (
                var n = t.filter(function (e) {
                    return e instanceof RegExp;
                  }),
                  l = 0,
                  i = n.length;
                l < i;
                l++
              )
                if (e.match(n[l])) return !0;

              return !1;
            })(e, i) || r.removeAttribute(e.nodeName);
          });
        },
        a = 0,
        r = o.length;
      a < r;
      a++
    )
      i(a);

    return t.body.innerHTML;
  }

  var He = e(t),
    Re = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (e) {
        do e += ~~(1e6 * Math.random());
        while (document.getElementById(e));

        return e;
      },
      getSelectorFromElement: function (a) {
        var t = a.getAttribute("data-target");

        if (!t || "#" === t) {
          var o = a.getAttribute("href");
          t = o && "#" !== o ? o.trim() : "";
        }

        try {
          return document.querySelector(t) ? t : null;
        } catch (e) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (a) {
        if (!a) return 0;
        var t = He.default(a).css("transition-duration"),
          l = He.default(a).css("transition-delay"),
          i = parseFloat(t),
          o = parseFloat(l);
        return i || o
          ? ((t = t.split(",")[0]),
            (l = l.split(",")[0]),
            1e3 * (parseFloat(t) + parseFloat(l)))
          : 0;
      },
      reflow: function (e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function (e) {
        He.default(e).trigger("transitionend");
      },
      supportsTransitionEnd: function () {
        return !0;
      },
      isElement: function (e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function (l, t, e) {
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var i = e[n],
              o = t[n],
              r =
                o && Re.isElement(o)
                  ? "element"
                  : null === (a = o) || "undefined" == typeof a
                  ? "" + a
                  : {}.toString
                      .call(a)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase();
            if (!new RegExp(i).test(r))
              throw new Error(
                l.toUpperCase() +
                  ': Option "' +
                  n +
                  '" provided type "' +
                  r +
                  '" but expected type "' +
                  i +
                  '".'
              );
          }

        var a;
      },
      findShadowRoot: function (n) {
        if (!document.documentElement.attachShadow) return null;

        if ("function" == typeof n.getRootNode) {
          var t = n.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }

        return n instanceof ShadowRoot
          ? n
          : n.parentNode
          ? Re.findShadowRoot(n.parentNode)
          : null;
      },
      jQueryDetection: function () {
        if ("undefined" == typeof He.default)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = He.default.fn.jquery.split(" ")[0].split(".");
        if (
          (2 > e[0] && 9 > e[1]) ||
          (1 === e[0] && 9 === e[1] && 1 > e[2]) ||
          4 <= e[0]
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      }
    };
  Re.jQueryDetection(),
    (He.default.fn.emulateTransitionEnd = function (a) {
      var t = this,
        e = !1;
      return (
        He.default(this).one(Re.TRANSITION_END, function () {
          e = !0;
        }),
        setTimeout(function () {
          e || Re.triggerTransitionEnd(t);
        }, a),
        this
      );
    }),
    (He.default.event.special[Re.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (e) {
        if (He.default(e.target).is(this))
          return e.handleObj.handler.apply(this, arguments);
      }
    });

  var l = He.default.fn.alert,
    i = (function () {
      function a(e) {
        this._element = e;
      }

      var t = a.prototype;
      return (
        (t.close = function (n) {
          var t = this._element;
          n && (t = this._getRootElement(n)),
            this._triggerCloseEvent(t).isDefaultPrevented() ||
              this._removeElement(t);
        }),
        (t.dispose = function () {
          He.default.removeData(this._element, "bs.alert"),
            (this._element = null);
        }),
        (t._getRootElement = function (a) {
          var t = Re.getSelectorFromElement(a),
            e = !1;
          return (
            t && (e = document.querySelector(t)),
            e || (e = He.default(a).closest(".alert")[0]),
            e
          );
        }),
        (t._triggerCloseEvent = function (n) {
          var t = He.default.Event("close.bs.alert");
          return He.default(n).trigger(t), t;
        }),
        (t._removeElement = function (a) {
          var t = this;

          if (
            (He.default(a).removeClass("show"), He.default(a).hasClass("fade"))
          ) {
            var e = Re.getTransitionDurationFromElement(a);
            He.default(a)
              .one(Re.TRANSITION_END, function (e) {
                return t._destroyElement(a, e);
              })
              .emulateTransitionEnd(e);
          } else this._destroyElement(a);
        }),
        (t._destroyElement = function (e) {
          He.default(e).detach().trigger("closed.bs.alert").remove();
        }),
        (a._jQueryInterface = function (t) {
          return this.each(function () {
            var e = He.default(this),
              n = e.data("bs.alert");
            n || ((n = new a(this)), e.data("bs.alert", n)),
              "close" === t && n[t](this);
          });
        }),
        (a._handleDismiss = function (n) {
          return function (t) {
            t && t.preventDefault(), n.close(this);
          };
        }),
        u(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          }
        ]),
        a
      );
    })();

  He.default(document).on(
    "click.bs.alert.data-api",
    '[data-dismiss="alert"]',
    i._handleDismiss(new i())
  ),
    (He.default.fn.alert = i._jQueryInterface),
    (He.default.fn.alert.Constructor = i),
    (He.default.fn.alert.noConflict = function () {
      return (He.default.fn.alert = l), i._jQueryInterface;
    });

  var d = He.default.fn.button,
    c = (function () {
      function a(e) {
        (this._element = e), (this.shouldAvoidTriggerChange = !1);
      }

      var t = a.prototype;
      return (
        (t.toggle = function () {
          var a = !0,
            l = !0,
            i = He.default(this._element).closest('[data-toggle="buttons"]')[0];

          if (i) {
            var n = this._element.querySelector('input:not([type="hidden"])');

            if (n) {
              if ("radio" === n.type)
                if (n.checked && this._element.classList.contains("active"))
                  a = !1;
                else {
                  var o = i.querySelector(".active");
                  o && He.default(o).removeClass("active");
                }
              a &&
                (("checkbox" !== n.type && "radio" !== n.type) ||
                  (n.checked = !this._element.classList.contains("active")),
                this.shouldAvoidTriggerChange ||
                  He.default(n).trigger("change")),
                n.focus(),
                (l = !1);
            }
          }

          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (l &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            a && He.default(this._element).toggleClass("active"));
        }),
        (t.dispose = function () {
          He.default.removeData(this._element, "bs.button"),
            (this._element = null);
        }),
        (a._jQueryInterface = function (t, e) {
          return this.each(function () {
            var n = He.default(this),
              o = n.data("bs.button");
            o || ((o = new a(this)), n.data("bs.button", o)),
              (o.shouldAvoidTriggerChange = e),
              "toggle" === t && o[t]();
          });
        }),
        u(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          }
        ]),
        a
      );
    })();

  He.default(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (a) {
      var t = a.target,
        l = t;
      if (
        (He.default(t).hasClass("btn") ||
          (t = He.default(t).closest(".btn")[0]),
        !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
      )
        a.preventDefault();
      else {
        var n = t.querySelector('input:not([type="hidden"])');
        if (
          n &&
          (n.hasAttribute("disabled") || n.classList.contains("disabled"))
        )
          return void a.preventDefault();
        ("INPUT" !== l.tagName && "LABEL" === t.tagName) ||
          c._jQueryInterface.call(
            He.default(t),
            "toggle",
            "INPUT" === l.tagName
          );
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (n) {
        var t = He.default(n.target).closest(".btn")[0];
        He.default(t).toggleClass("focus", /^focus(in)?$/.test(n.type));
      }
    ),
    He.default(window).on("load.bs.button.data-api", function () {
      for (
        var l = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          d = 0,
          c = l.length;
        d < c;
        d++
      ) {
        var n = l[d],
          i = n.querySelector('input:not([type="hidden"])');
        i.checked || i.hasAttribute("checked")
          ? n.classList.add("active")
          : n.classList.remove("active");
      }

      for (
        var o,
          p = 0,
          u = (l = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        p < u;
        p++
      )
        (o = l[p]),
          "true" === o.getAttribute("aria-pressed")
            ? o.classList.add("active")
            : o.classList.remove("active");
    }),
    (He.default.fn.button = c._jQueryInterface),
    (He.default.fn.button.Constructor = c),
    (He.default.fn.button.noConflict = function () {
      return (He.default.fn.button = d), c._jQueryInterface;
    });

  var f = He.default.fn.carousel,
    g = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    h = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    _ = {
      TOUCH: "touch",
      PEN: "pen"
    },
    b = (function () {
      function a(n, t) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(t)),
          (this._element = n),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = !!(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }

      var t = a.prototype;
      return (
        (t.next = function () {
          this._isSliding || this._slide("next");
        }),
        (t.nextWhenVisible = function () {
          var e = He.default(this._element);
          !document.hidden &&
            e.is(":visible") &&
            "hidden" !== e.css("visibility") &&
            this.next();
        }),
        (t.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (t.pause = function (e) {
          e || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (Re.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (t.cycle = function (e) {
          e || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._updateInterval(),
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              )));
        }),
        (t.to = function (a) {
          var t = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );

          var e = this._getItemIndex(this._activeElement);

          if (!(a > this._items.length - 1 || 0 > a))
            if (this._isSliding)
              He.default(this._element).one("slid.bs.carousel", function () {
                return t.to(a);
              });
            else {
              if (e === a) return this.pause(), void this.cycle();
              var n = a > e ? "next" : "prev";

              this._slide(n, this._items[a]);
            }
        }),
        (t.dispose = function () {
          He.default(this._element).off(".bs.carousel"),
            He.default.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (t._getConfig = function (e) {
          return (e = m({}, g, e)), Re.typeCheckConfig("carousel", e, h), e;
        }),
        (t._handleSwipe = function () {
          var n = Math.abs(this.touchDeltaX);

          if (!(40 >= n)) {
            var t = n / this.touchDeltaX;
            (this.touchDeltaX = 0), 0 < t && this.prev(), 0 > t && this.next();
          }
        }),
        (t._addEventListeners = function () {
          var n = this;
          this._config.keyboard &&
            He.default(this._element).on("keydown.bs.carousel", function (t) {
              return n._keydown(t);
            }),
            "hover" === this._config.pause &&
              He.default(this._element)
                .on("mouseenter.bs.carousel", function (t) {
                  return n.pause(t);
                })
                .on("mouseleave.bs.carousel", function (t) {
                  return n.cycle(t);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (t._addTouchEventListeners = function () {
          var a = this;

          if (this._touchSupported) {
            var o = function (t) {
                a._pointerEvent && _[t.originalEvent.pointerType.toUpperCase()]
                  ? (a.touchStartX = t.originalEvent.clientX)
                  : a._pointerEvent ||
                    (a.touchStartX = t.originalEvent.touches[0].clientX);
              },
              e = function (t) {
                a._pointerEvent &&
                  _[t.originalEvent.pointerType.toUpperCase()] &&
                  (a.touchDeltaX = t.originalEvent.clientX - a.touchStartX),
                  a._handleSwipe(),
                  "hover" === a._config.pause &&
                    (a.pause(),
                    a.touchTimeout && clearTimeout(a.touchTimeout),
                    (a.touchTimeout = setTimeout(function (t) {
                      return a.cycle(t);
                    }, 500 + a._config.interval)));
              };

            He.default(this._element.querySelectorAll(".carousel-item img")).on(
              "dragstart.bs.carousel",
              function (e) {
                return e.preventDefault();
              }
            ),
              this._pointerEvent
                ? (He.default(this._element).on(
                    "pointerdown.bs.carousel",
                    function (e) {
                      return o(e);
                    }
                  ),
                  He.default(this._element).on(
                    "pointerup.bs.carousel",
                    function (n) {
                      return e(n);
                    }
                  ),
                  this._element.classList.add("pointer-event"))
                : (He.default(this._element).on(
                    "touchstart.bs.carousel",
                    function (e) {
                      return o(e);
                    }
                  ),
                  He.default(this._element).on(
                    "touchmove.bs.carousel",
                    function (t) {
                      return (function (t) {
                        a.touchDeltaX =
                          t.originalEvent.touches &&
                          1 < t.originalEvent.touches.length
                            ? 0
                            : t.originalEvent.touches[0].clientX -
                              a.touchStartX;
                      })(t);
                    }
                  ),
                  He.default(this._element).on(
                    "touchend.bs.carousel",
                    function (n) {
                      return e(n);
                    }
                  ));
          }
        }),
        (t._keydown = function (e) {
          if (!/input|textarea/i.test(e.target.tagName))
            switch (e.which) {
              case 37:
                e.preventDefault(), this.prev();
                break;

              case 39:
                e.preventDefault(), this.next();
            }
        }),
        (t._getItemIndex = function (e) {
          return (
            (this._items =
              e && e.parentNode
                ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(e)
          );
        }),
        (t._getItemByDirection = function (n, t) {
          var e = this._getItemIndex(t),
            o = this._items.length - 1;

          if (
            (("prev" === n && 0 === e) || ("next" === n && e === o)) &&
            !this._config.wrap
          )
            return t;
          var l = (e + ("prev" === n ? -1 : 1)) % this._items.length;
          return -1 == l ? this._items[this._items.length - 1] : this._items[l];
        }),
        (t._triggerSlideEvent = function (a, t) {
          var e = this._getItemIndex(a),
            n = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            o = He.default.Event("slide.bs.carousel", {
              relatedTarget: a,
              direction: t,
              from: n,
              to: e
            });

          return He.default(this._element).trigger(o), o;
        }),
        (t._setActiveIndicatorElement = function (a) {
          if (this._indicatorsElement) {
            var t = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            He.default(t).removeClass("active");

            var e = this._indicatorsElement.children[this._getItemIndex(a)];

            e && He.default(e).addClass("active");
          }
        }),
        (t._updateInterval = function () {
          var n =
            this._activeElement ||
            this._element.querySelector(".active.carousel-item");

          if (n) {
            var t = parseInt(n.getAttribute("data-interval"), 10);
            t
              ? ((this._config.defaultInterval =
                  this._config.defaultInterval || this._config.interval),
                (this._config.interval = t))
              : (this._config.interval =
                  this._config.defaultInterval || this._config.interval);
          }
        }),
        (t._slide = function (l, t) {
          var e,
            i,
            g,
            m = this,
            a = this._element.querySelector(".active.carousel-item"),
            s = this._getItemIndex(a),
            u = t || (a && this._getItemByDirection(l, a)),
            f = this._getItemIndex(u),
            d = !!this._interval;

          if (
            ("next" === l
              ? ((e = "carousel-item-left"),
                (i = "carousel-item-next"),
                (g = "left"))
              : ((e = "carousel-item-right"),
                (i = "carousel-item-prev"),
                (g = "right")),
            u && He.default(u).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(u, g).isDefaultPrevented() &&
            a &&
            u
          ) {
            (this._isSliding = !0),
              d && this.pause(),
              this._setActiveIndicatorElement(u),
              (this._activeElement = u);
            var c = He.default.Event("slid.bs.carousel", {
              relatedTarget: u,
              direction: g,
              from: s,
              to: f
            });

            if (He.default(this._element).hasClass("slide")) {
              He.default(u).addClass(i),
                Re.reflow(u),
                He.default(a).addClass(e),
                He.default(u).addClass(e);
              var h = Re.getTransitionDurationFromElement(a);
              He.default(a)
                .one(Re.TRANSITION_END, function () {
                  He.default(u)
                    .removeClass(e + " " + i)
                    .addClass("active"),
                    He.default(a).removeClass("active " + i + " " + e),
                    (m._isSliding = !1),
                    setTimeout(function () {
                      return He.default(m._element).trigger(c);
                    }, 0);
                })
                .emulateTransitionEnd(h);
            } else
              He.default(a).removeClass("active"),
                He.default(u).addClass("active"),
                (this._isSliding = !1),
                He.default(this._element).trigger(c);

            d && this.cycle();
          }
        }),
        (a._jQueryInterface = function (t) {
          return this.each(function () {
            var e = He.default(this).data("bs.carousel"),
              l = m({}, g, He.default(this).data());
            "object" == typeof t && (l = m({}, l, t));
            var i = "string" == typeof t ? t : l.slide;
            if (
              (e ||
                ((e = new a(this, l)), He.default(this).data("bs.carousel", e)),
              "number" == typeof t)
            )
              e.to(t);
            else if ("string" == typeof i) {
              if ("undefined" == typeof e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            } else l.interval && l.ride && (e.pause(), e.cycle());
          });
        }),
        (a._dataApiClickHandler = function (t) {
          var e = Re.getSelectorFromElement(this);

          if (e) {
            var n = He.default(e)[0];

            if (n && He.default(n).hasClass("carousel")) {
              var o = m({}, He.default(n).data(), He.default(this).data()),
                l = this.getAttribute("data-slide-to");
              l && (o.interval = !1),
                a._jQueryInterface.call(He.default(n), o),
                l && He.default(n).data("bs.carousel").to(l),
                t.preventDefault();
            }
          }
        }),
        u(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          },
          {
            key: "Default",
            get: function () {
              return g;
            }
          }
        ]),
        a
      );
    })();

  He.default(document).on(
    "click.bs.carousel.data-api",
    "[data-slide], [data-slide-to]",
    b._dataApiClickHandler
  ),
    He.default(window).on("load.bs.carousel.data-api", function () {
      for (
        var a,
          l = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          t = 0,
          i = l.length;
        t < i;
        t++
      )
        (a = He.default(l[t])), b._jQueryInterface.call(a, a.data());
    }),
    (He.default.fn.carousel = b._jQueryInterface),
    (He.default.fn.carousel.Constructor = b),
    (He.default.fn.carousel.noConflict = function () {
      return (He.default.fn.carousel = f), b._jQueryInterface;
    });

  var y = He.default.fn.collapse,
    v = {
      toggle: !0,
      parent: ""
    },
    E = {
      toggle: "boolean",
      parent: "(string|element)"
    },
    C = (function () {
      function l(l, t) {
        (this._isTransitioning = !1),
          (this._element = l),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                l.id +
                '"],[data-toggle="collapse"][data-target="#' +
                l.id +
                '"]'
            )
          ));

        for (
          var e = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            n = 0,
            d = e.length;
          n < d;
          n++
        ) {
          var o = e[n],
            r = Re.getSelectorFromElement(o),
            a = [].slice
              .call(document.querySelectorAll(r))
              .filter(function (t) {
                return t === l;
              });
          null !== r &&
            0 < a.length &&
            ((this._selector = r), this._triggerArray.push(o));
        }

        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }

      var t = l.prototype;
      return (
        (t.toggle = function () {
          He.default(this._element).hasClass("show")
            ? this.hide()
            : this.show();
        }),
        (t.show = function () {
          var t,
            i,
            d = this;

          if (
            !this._isTransitioning &&
            !He.default(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (e) {
                    return "string" == typeof d._config.parent
                      ? e.getAttribute("data-parent") === d._config.parent
                      : e.classList.contains("collapse");
                  })).length &&
              (t = null),
            !(
              t &&
              (i = He.default(t).not(this._selector).data("bs.collapse")) &&
              i._isTransitioning
            ))
          ) {
            var o = He.default.Event("show.bs.collapse");

            if (
              (He.default(this._element).trigger(o), !o.isDefaultPrevented())
            ) {
              t &&
                (l._jQueryInterface.call(
                  He.default(t).not(this._selector),
                  "hide"
                ),
                i || He.default(t).data("bs.collapse", null));

              var r = this._getDimension();

              He.default(this._element)
                .removeClass("collapse")
                .addClass("collapsing"),
                (this._element.style[r] = 0),
                this._triggerArray.length &&
                  He.default(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                s = Re.getTransitionDurationFromElement(this._element);
              He.default(this._element)
                .one(Re.TRANSITION_END, function () {
                  He.default(d._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (d._element.style[r] = ""),
                    d.setTransitioning(!1),
                    He.default(d._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(s),
                (this._element.style[r] = this._element[a] + "px");
            }
          }
        }),
        (t.hide = function () {
          var l = this;

          if (
            !this._isTransitioning &&
            He.default(this._element).hasClass("show")
          ) {
            var t = He.default.Event("hide.bs.collapse");

            if (
              (He.default(this._element).trigger(t), !t.isDefaultPrevented())
            ) {
              var e = this._getDimension();

              (this._element.style[e] =
                this._element.getBoundingClientRect()[e] + "px"),
                Re.reflow(this._element),
                He.default(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var n = this._triggerArray.length;
              if (0 < n)
                for (var o = 0; o < n; o++) {
                  var i = this._triggerArray[o],
                    a = Re.getSelectorFromElement(i);
                  null !== a &&
                    (He.default(
                      [].slice.call(document.querySelectorAll(a))
                    ).hasClass("show") ||
                      He.default(i)
                        .addClass("collapsed")
                        .attr("aria-expanded", !1));
                }
              this.setTransitioning(!0), (this._element.style[e] = "");
              var s = Re.getTransitionDurationFromElement(this._element);
              He.default(this._element)
                .one(Re.TRANSITION_END, function () {
                  l.setTransitioning(!1),
                    He.default(l._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(s);
            }
          }
        }),
        (t.setTransitioning = function (e) {
          this._isTransitioning = e;
        }),
        (t.dispose = function () {
          He.default.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (t._getConfig = function (e) {
          return (
            ((e = m({}, v, e)).toggle = !!e.toggle),
            Re.typeCheckConfig("collapse", e, E),
            e
          );
        }),
        (t._getDimension = function () {
          return He.default(this._element).hasClass("width")
            ? "width"
            : "height";
        }),
        (t._getParent = function () {
          var t,
            a = this;
          Re.isElement(this._config.parent)
            ? ((t = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var n =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            o = [].slice.call(t.querySelectorAll(n));
          return (
            He.default(o).each(function (t, e) {
              a._addAriaAndCollapsedClass(l._getTargetFromElement(e), [e]);
            }),
            t
          );
        }),
        (t._addAriaAndCollapsedClass = function (a, t) {
          var e = He.default(a).hasClass("show");
          t.length &&
            He.default(t).toggleClass("collapsed", !e).attr("aria-expanded", e);
        }),
        (l._getTargetFromElement = function (n) {
          var t = Re.getSelectorFromElement(n);
          return t ? document.querySelector(t) : null;
        }),
        (l._jQueryInterface = function (t) {
          return this.each(function () {
            var e = He.default(this),
              n = e.data("bs.collapse"),
              a = m({}, v, e.data(), "object" == typeof t && t ? t : {});

            if (
              (!n &&
                a.toggle &&
                "string" == typeof t &&
                /show|hide/.test(t) &&
                (a.toggle = !1),
              n || ((n = new l(this, a)), e.data("bs.collapse", n)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        u(l, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          },
          {
            key: "Default",
            get: function () {
              return v;
            }
          }
        ]),
        l
      );
    })();

  He.default(document).on(
    "click.bs.collapse.data-api",
    '[data-toggle="collapse"]',
    function (a) {
      "A" === a.currentTarget.tagName && a.preventDefault();
      var l = He.default(this),
        e = Re.getSelectorFromElement(this),
        t = [].slice.call(document.querySelectorAll(e));
      He.default(t).each(function () {
        var e = He.default(this),
          t = e.data("bs.collapse") ? "toggle" : l.data();

        C._jQueryInterface.call(e, t);
      });
    }
  ),
    (He.default.fn.collapse = C._jQueryInterface),
    (He.default.fn.collapse.Constructor = C),
    (He.default.fn.collapse.noConflict = function () {
      return (He.default.fn.collapse = y), C._jQueryInterface;
    });

  var T =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    S = (function () {
      for (var n = ["Edge", "Trident", "Firefox"], t = 0; t < n.length; t += 1)
        if (T && 0 <= navigator.userAgent.indexOf(n[t])) return 1;

      return 0;
    })(),
    N =
      T && window.Promise
        ? function (n) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                window.Promise.resolve().then(function () {
                  (t = !1), n();
                }));
            };
          }
        : function (n) {
            var t = !1;
            return function () {
              t ||
                ((t = !0),
                setTimeout(function () {
                  (t = !1), n();
                }, S));
            };
          },
    D = T && window.MSInputMethodContext && document.documentMode,
    k = T && /MSIE 10/.test(navigator.userAgent),
    L = function (n, t) {
      if (!(n instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    P = (function () {
      function a(a, t) {
        for (var e, o = 0; o < t.length; o++)
          (e = t[o]),
            (e.enumerable = e.enumerable || !1),
            (e.configurable = !0),
            "value" in e && (e.writable = !0),
            Object.defineProperty(a, e.key, e);
      }

      return function (t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t;
      };
    })(),
    V = function (a, t, e) {
      return (
        t in a
          ? Object.defineProperty(a, t, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (a[t] = e),
        a
      );
    },
    z =
      Object.assign ||
      function (a) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var l in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, l) && (a[l] = t[l]);

        return a;
      },
    X = T && /Firefox/i.test(navigator.userAgent),
    Y = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start"
    ],
    Me = Y.slice(3),
    Be = (function () {
      function a(t, e) {
        var n = this,
          l =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        L(this, a),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(n.update);
          }),
          (this.update = N(this.update.bind(this))),
          (this.options = z({}, a.Defaults, l)),
          (this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
          }),
          (this.reference = t && t.jquery ? t[0] : t),
          (this.popper = e && e.jquery ? e[0] : e),
          (this.options.modifiers = {}),
          Object.keys(z({}, a.Defaults.modifiers, l.modifiers)).forEach(
            function (t) {
              n.options.modifiers[t] = z(
                {},
                a.Defaults.modifiers[t] || {},
                l.modifiers ? l.modifiers[t] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return z(
                {
                  name: e
                },
                n.options.modifiers[e]
              );
            })
            .sort(function (n, t) {
              return n.order - t.order;
            })),
          this.modifiers.forEach(function (e) {
            e.enabled &&
              o(e.onLoad) &&
              e.onLoad(n.reference, n.popper, n.options, e, n.state);
          }),
          this.update();
        var i = this.options.eventsEnabled;
        i && this.enableEventListeners(), (this.state.eventsEnabled = i);
      }

      return (
        P(a, [
          {
            key: "update",
            value: function () {
              return Ce.call(this);
            }
          },
          {
            key: "destroy",
            value: function () {
              return Se.call(this);
            }
          },
          {
            key: "enableEventListeners",
            value: function () {
              return De.call(this);
            }
          },
          {
            key: "disableEventListeners",
            value: function () {
              return ke.call(this);
            }
          }
        ]),
        a
      );
    })();

  (Be.Utils = ("undefined" == typeof window ? global : window).PopperUtils),
    (Be.placements = Y),
    (Be.Defaults = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (d) {
            var t = d.placement,
              e = t.split("-")[0],
              n = t.split("-")[1];

            if (n) {
              var i = d.offsets,
                o = i.reference,
                r = i.popper,
                a = -1 !== ["bottom", "top"].indexOf(e),
                s = a ? "left" : "top",
                l = a ? "width" : "height",
                c = {
                  start: V({}, s, o[s]),
                  end: V({}, s, o[s] + o[l] - r[l])
                };
              d.offsets.popper = z({}, r, c[n]);
            }

            return d;
          }
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (d, t) {
            var e,
              c = t.offset,
              n = d.placement,
              i = d.offsets,
              o = i.popper,
              r = i.reference,
              a = n.split("-")[0];
            return (
              (e = Le(+c) ? [+c, 0] : qe(c, o, r, a)),
              "left" === a
                ? ((o.top += e[0]), (o.left -= e[1]))
                : "right" === a
                ? ((o.top += e[0]), (o.left += e[1]))
                : "top" === a
                ? ((o.left += e[0]), (o.top -= e[1]))
                : "bottom" === a && ((o.left += e[0]), (o.top += e[1])),
              (d.popper = o),
              d
            );
          },
          offset: 0
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (c, p) {
            var e = p.boundariesElement || I(c.instance.popper);
            c.instance.reference === e && (e = I(e));
            var t = Te("transform"),
              i = c.instance.popper.style,
              o = i.top,
              r = i.left,
              a = i[t];
            (i.top = ""), (i.left = ""), (i[t] = "");
            var s = J(
              c.instance.popper,
              c.instance.reference,
              p.padding,
              e,
              c.positionFixed
            );
            (i.top = o), (i.left = r), (i[t] = a), (p.boundaries = s);
            var l = p.priority,
              u = c.offsets.popper,
              g = {
                primary: function (e) {
                  var t = u[e];
                  return (
                    u[e] < s[e] &&
                      !p.escapeWithReference &&
                      (t = Math.max(u[e], s[e])),
                    V({}, e, t)
                  );
                },
                secondary: function (e) {
                  var t = "right" === e ? "left" : "top",
                    n = u[t];
                  return (
                    u[e] > s[e] &&
                      !p.escapeWithReference &&
                      (n = Math.min(
                        u[t],
                        s[e] - ("right" === e ? u.width : u.height)
                      )),
                    V({}, t, n)
                  );
                }
              };
            return (
              l.forEach(function (n) {
                var t =
                  -1 === ["left", "top"].indexOf(n) ? "secondary" : "primary";
                u = z({}, u, g[t](n));
              }),
              (c.offsets.popper = u),
              c
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent"
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (d) {
            var t = d.offsets,
              e = t.popper,
              n = t.reference,
              i = d.placement.split("-")[0],
              o = Math.floor,
              r = -1 !== ["top", "bottom"].indexOf(i),
              a = r ? "right" : "bottom",
              s = r ? "left" : "top",
              l = r ? "width" : "height";
            return (
              e[a] < o(n[s]) && (d.offsets.popper[s] = o(n[s]) - e[l]),
              e[s] > o(n[a]) && (d.offsets.popper[s] = o(n[a])),
              d
            );
          }
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (y, t) {
            var e;
            if (!Oe(y.instance.modifiers, "arrow", "keepTogether")) return y;
            var E = t.element;

            if ("string" == typeof E) {
              if (!(E = y.instance.popper.querySelector(E))) return y;
            } else if (!y.instance.popper.contains(E))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                y
              );

            var C = y.placement.split("-")[0],
              o = y.offsets,
              r = o.popper,
              a = o.reference,
              s = -1 !== ["left", "right"].indexOf(C),
              l = s ? "height" : "width",
              u = s ? "Top" : "Left",
              f = u.toLowerCase(),
              d = s ? "left" : "top",
              c = s ? "bottom" : "right",
              h = ie(E)[l];
            a[c] - h < r[f] && (y.offsets.popper[f] -= r[f] - (a[c] - h)),
              a[f] + h > r[c] && (y.offsets.popper[f] += a[f] + h - r[c]),
              (y.offsets.popper = W(y.offsets.popper));

            var p = a[f] + a[l] / 2 - h / 2,
              m = w(y.instance.popper),
              g = parseFloat(m["margin" + u]),
              v = parseFloat(m["border" + u + "Width"]),
              _ = p - y.offsets.popper[f] - g - v;

            return (
              (_ = Math.max(Math.min(r[l] - h, _), 0)),
              (y.arrowElement = E),
              (y.offsets.arrow =
                (V((e = {}), f, Math.round(_)), V(e, d, ""), e)),
              y
            );
          },
          element: "[x-arrow]"
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (E, C) {
            if (xe(E.instance.modifiers, "inner")) return E;
            if (E.flipped && E.placement === E.originalPlacement) return E;
            var e = J(
                E.instance.popper,
                E.instance.reference,
                C.padding,
                C.boundariesElement,
                E.positionFixed
              ),
              n = E.placement.split("-")[0],
              x = ye(n),
              T = E.placement.split("-")[1] || "",
              S = [];

            switch (C.behavior) {
              case "flip":
                S = [n, x];
                break;

              case "clockwise":
                S = Ie(n);
                break;

              case "counterclockwise":
                S = Ie(n, !0);
                break;

              default:
                S = C.behavior;
            }

            return (
              S.forEach(function (t, a) {
                if (n !== t || S.length === a + 1) return E;
                (n = E.placement.split("-")[0]), (x = ye(n));
                var o = E.offsets.popper,
                  l = E.offsets.reference,
                  i = Math.floor,
                  r =
                    ("left" === n && i(o.right) > i(l.left)) ||
                    ("right" === n && i(o.left) < i(l.right)) ||
                    ("top" === n && i(o.bottom) > i(l.top)) ||
                    ("bottom" === n && i(o.top) < i(l.bottom)),
                  s = i(o.left) < i(e.left),
                  d = i(o.right) > i(e.right),
                  c = i(o.top) < i(e.top),
                  p = i(o.bottom) > i(e.bottom),
                  u =
                    ("left" === n && s) ||
                    ("right" === n && d) ||
                    ("top" === n && c) ||
                    ("bottom" === n && p),
                  f = -1 !== ["top", "bottom"].indexOf(n),
                  g =
                    !!C.flipVariations &&
                    ((f && "start" === T && s) ||
                      (f && "end" === T && d) ||
                      (!f && "start" === T && c) ||
                      (!f && "end" === T && p)),
                  m =
                    !!C.flipVariationsByContent &&
                    ((f && "start" === T && d) ||
                      (f && "end" === T && s) ||
                      (!f && "start" === T && p) ||
                      (!f && "end" === T && c)),
                  h = g || m;
                (r || u || h) &&
                  ((E.flipped = !0),
                  (r || u) && (n = S[a + 1]),
                  h &&
                    (T = (function (e) {
                      return "end" === e ? "start" : "start" === e ? "end" : e;
                    })(T)),
                  (E.placement = n + (T ? "-" + T : "")),
                  (E.offsets.popper = z(
                    {},
                    E.offsets.popper,
                    be(E.instance.popper, E.offsets.reference, E.placement)
                  )),
                  (E = Ee(E.instance.modifiers, E, "flip")));
              }),
              E
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (l) {
            var t = l.placement,
              e = t.split("-")[0],
              n = l.offsets,
              i = n.popper,
              o = n.reference,
              r = -1 !== ["left", "right"].indexOf(e),
              a = -1 === ["top", "left"].indexOf(e);
            return (
              (i[r ? "left" : "top"] =
                o[e] - (a ? i[r ? "width" : "height"] : 0)),
              (l.placement = ye(t)),
              (l.offsets.popper = W(i)),
              l
            );
          }
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (a) {
            if (!Oe(a.instance.modifiers, "hide", "preventOverflow")) return a;
            var t = a.offsets.reference,
              e = we(a.instance.modifiers, function (e) {
                return "preventOverflow" === e.name;
              }).boundaries;

            if (
              t.bottom < e.top ||
              t.left > e.right ||
              t.top > e.bottom ||
              t.right < e.left
            ) {
              if (!0 === a.hide) return a;
              (a.hide = !0), (a.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === a.hide) return a;
              (a.hide = !1), (a.attributes["x-out-of-boundaries"] = !1);
            }

            return a;
          }
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (y, t) {
            var e = t.x,
              n = t.y,
              i = y.offsets.popper,
              o = we(y.instance.modifiers, function (e) {
                return "applyStyle" === e.name;
              }).gpuAcceleration;
            void 0 !== o &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );

            var r,
              b,
              w = void 0 === o ? t.gpuAcceleration : o,
              a = I(y.instance.popper),
              s = F(a),
              l = {
                position: i.position
              },
              u = (function (p, t) {
                var e = p.offsets,
                  n = e.popper,
                  i = e.reference,
                  o = Math.round,
                  r = Math.floor,
                  a = function (e) {
                    return e;
                  },
                  s = o(i.width),
                  l = o(n.width),
                  u = -1 !== ["left", "right"].indexOf(p.placement),
                  f = -1 !== p.placement.indexOf("-"),
                  d = t ? (u || f || s % 2 == l % 2 ? o : r) : a,
                  c = t ? o : a;

                return {
                  left: d(
                    1 == s % 2 && 1 == l % 2 && !f && t ? n.left - 1 : n.left
                  ),
                  top: c(n.top),
                  bottom: c(n.bottom),
                  right: d(n.right)
                };
              })(y, 2 > window.devicePixelRatio || !X),
              f = "bottom" === e ? "top" : "bottom",
              d = "right" === n ? "left" : "right",
              c = Te("transform");

            if (
              ((b =
                "bottom" == f
                  ? "HTML" === a.nodeName
                    ? -a.clientHeight + u.bottom
                    : -s.height + u.bottom
                  : u.top),
              (r =
                "right" == d
                  ? "HTML" === a.nodeName
                    ? -a.clientWidth + u.right
                    : -s.width + u.right
                  : u.left),
              w && c)
            )
              (l[c] = "translate3d(" + r + "px, " + b + "px, 0)"),
                (l[f] = 0),
                (l[d] = 0),
                (l.willChange = "transform");
            else {
              var h = "bottom" === f ? -1 : 1,
                g = "right" === d ? -1 : 1;
              (l[f] = b * h), (l[d] = r * g), (l.willChange = f + ", " + d);
            }
            var v = {
              "x-placement": y.placement
            };
            return (
              (y.attributes = z({}, v, y.attributes)),
              (y.styles = z({}, l, y.styles)),
              (y.arrowStyles = z({}, y.offsets.arrow, y.arrowStyles)),
              y
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right"
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (a) {
            var o, l;
            return (
              je(a.instance.popper, a.styles),
              (o = a.instance.popper),
              (l = a.attributes),
              Object.keys(l).forEach(function (e) {
                !1 === l[e] ? o.removeAttribute(e) : o.setAttribute(e, l[e]);
              }),
              a.arrowElement &&
                Object.keys(a.arrowStyles).length &&
                je(a.arrowElement, a.arrowStyles),
              a
            );
          },
          onLoad: function (l, t, e, n, i) {
            var o = le(i, t, l, e.positionFixed),
              r = ee(
                e.placement,
                o,
                t,
                l,
                e.modifiers.flip.boundariesElement,
                e.modifiers.flip.padding
              );
            return (
              t.setAttribute("x-placement", r),
              je(t, {
                position: e.positionFixed ? "fixed" : "absolute"
              }),
              e
            );
          },
          gpuAcceleration: void 0
        }
      }
    });

  var We = He.default.fn.dropdown,
    ze = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null
    },
    Fe = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)"
    },
    Ue = (function () {
      function i(n, t) {
        (this._element = n),
          (this._popper = null),
          (this._config = this._getConfig(t)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }

      var t = i.prototype;
      return (
        (t.toggle = function () {
          if (
            !this._element.disabled &&
            !He.default(this._element).hasClass("disabled")
          ) {
            var t = He.default(this._menu).hasClass("show");
            i._clearMenus(), t || this.show(!0);
          }
        }),
        (t.show = function (t) {
          if (
            (void 0 === t && (t = !1),
            !(
              this._element.disabled ||
              He.default(this._element).hasClass("disabled") ||
              He.default(this._menu).hasClass("show")
            ))
          ) {
            var l = {
                relatedTarget: this._element
              },
              n = He.default.Event("show.bs.dropdown", l),
              o = i._getParentFromElement(this._element);

            if ((He.default(o).trigger(n), !n.isDefaultPrevented())) {
              if (!this._inNavbar && t) {
                if ("undefined" == typeof Be)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                  );
                var r = this._element;
                "parent" === this._config.reference
                  ? (r = o)
                  : Re.isElement(this._config.reference) &&
                    ((r = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (r = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    He.default(o).addClass("position-static"),
                  (this._popper = new Be(
                    r,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }

              "ontouchstart" in document.documentElement &&
                0 === He.default(o).closest(".navbar-nav").length &&
                He.default(document.body)
                  .children()
                  .on("mouseover", null, He.default.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                He.default(this._menu).toggleClass("show"),
                He.default(o)
                  .toggleClass("show")
                  .trigger(He.default.Event("shown.bs.dropdown", l));
            }
          }
        }),
        (t.hide = function () {
          if (
            !this._element.disabled &&
            !He.default(this._element).hasClass("disabled") &&
            He.default(this._menu).hasClass("show")
          ) {
            var t = {
                relatedTarget: this._element
              },
              e = He.default.Event("hide.bs.dropdown", t),
              n = i._getParentFromElement(this._element);

            He.default(n).trigger(e),
              e.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                He.default(this._menu).toggleClass("show"),
                He.default(n)
                  .toggleClass("show")
                  .trigger(He.default.Event("hidden.bs.dropdown", t)));
          }
        }),
        (t.dispose = function () {
          He.default.removeData(this._element, "bs.dropdown"),
            He.default(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function () {
          var n = this;
          He.default(this._element).on("click.bs.dropdown", function (t) {
            t.preventDefault(), t.stopPropagation(), n.toggle();
          });
        }),
        (t._getConfig = function (e) {
          return (
            (e = m(
              {},
              this.constructor.Default,
              He.default(this._element).data(),
              e
            )),
            Re.typeCheckConfig("dropdown", e, this.constructor.DefaultType),
            e
          );
        }),
        (t._getMenuElement = function () {
          if (!this._menu) {
            var t = i._getParentFromElement(this._element);

            t && (this._menu = t.querySelector(".dropdown-menu"));
          }

          return this._menu;
        }),
        (t._getPlacement = function () {
          var n = He.default(this._element.parentNode),
            t = "bottom-start";
          return (
            n.hasClass("dropup")
              ? (t = He.default(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : n.hasClass("dropright")
              ? (t = "right-start")
              : n.hasClass("dropleft")
              ? (t = "left-start")
              : He.default(this._menu).hasClass("dropdown-menu-right") &&
                (t = "bottom-end"),
            t
          );
        }),
        (t._detectNavbar = function () {
          return 0 < He.default(this._element).closest(".navbar").length;
        }),
        (t._getOffset = function () {
          var n = this,
            t = {};
          return (
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = m(
                      {},
                      t.offsets,
                      n._config.offset(t.offsets, n._element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (t._getPopperConfig = function () {
          var e = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: {
                enabled: this._config.flip
              },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          };
          return (
            "static" === this._config.display &&
              (e.modifiers.applyStyle = {
                enabled: !1
              }),
            m({}, e, this._config.popperConfig)
          );
        }),
        (i._jQueryInterface = function (t) {
          return this.each(function () {
            var e = He.default(this).data("bs.dropdown");

            if (
              (e ||
                ((e = new i(this, "object" == typeof t ? t : null)),
                He.default(this).data("bs.dropdown", e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        (i._clearMenus = function (t) {
          if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
            for (
              var e = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                n = 0,
                d = e.length;
              n < d;
              n++
            ) {
              var r = i._getParentFromElement(e[n]),
                a = He.default(e[n]).data("bs.dropdown"),
                s = {
                  relatedTarget: e[n]
                };

              if ((t && "click" === t.type && (s.clickEvent = t), a)) {
                var l = a._menu;

                if (
                  He.default(r).hasClass("show") &&
                  !(
                    t &&
                    (("click" === t.type &&
                      /input|textarea/i.test(t.target.tagName)) ||
                      ("keyup" === t.type && 9 === t.which)) &&
                    He.default.contains(r, t.target)
                  )
                ) {
                  var c = He.default.Event("hide.bs.dropdown", s);
                  He.default(r).trigger(c),
                    c.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        He.default(document.body)
                          .children()
                          .off("mouseover", null, He.default.noop),
                      e[n].setAttribute("aria-expanded", "false"),
                      a._popper && a._popper.destroy(),
                      He.default(l).removeClass("show"),
                      He.default(r)
                        .removeClass("show")
                        .trigger(He.default.Event("hidden.bs.dropdown", s)));
                }
              }
            }
        }),
        (i._getParentFromElement = function (a) {
          var t,
            o = Re.getSelectorFromElement(a);
          return o && (t = document.querySelector(o)), t || a.parentNode;
        }),
        (i._dataApiKeydownHandler = function (t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) ||
                      He.default(t.target).closest(".dropdown-menu").length))
                )
              : !!/38|40|27/.test(t.which)) &&
            !this.disabled &&
            !He.default(this).hasClass("disabled")
          ) {
            var e = i._getParentFromElement(this),
              n = He.default(e).hasClass("show");

            if (n || 27 !== t.which) {
              if (
                (t.preventDefault(),
                t.stopPropagation(),
                !n || 27 === t.which || 32 === t.which)
              )
                return (
                  27 === t.which &&
                    He.default(
                      e.querySelector('[data-toggle="dropdown"]')
                    ).trigger("focus"),
                  void He.default(this).trigger("click")
                );
              var o = [].slice
                .call(
                  e.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (e) {
                  return He.default(e).is(":visible");
                });

              if (0 !== o.length) {
                var l = o.indexOf(t.target);
                38 === t.which && 0 < l && l--,
                  40 === t.which && l < o.length - 1 && l++,
                  0 > l && (l = 0),
                  o[l].focus();
              }
            }
          }
        }),
        u(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          },
          {
            key: "Default",
            get: function () {
              return ze;
            }
          },
          {
            key: "DefaultType",
            get: function () {
              return Fe;
            }
          }
        ]),
        i
      );
    })();

  He.default(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      Ue._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Ue._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ue._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (e) {
      e.preventDefault(),
        e.stopPropagation(),
        Ue._jQueryInterface.call(He.default(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
      e.stopPropagation();
    }),
    (He.default.fn.dropdown = Ue._jQueryInterface),
    (He.default.fn.dropdown.Constructor = Ue),
    (He.default.fn.dropdown.noConflict = function () {
      return (He.default.fn.dropdown = We), Ue._jQueryInterface;
    });

  var Qe = He.default.fn.modal,
    Ve = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
    Xe = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    },
    Ye = (function () {
      function a(n, t) {
        (this._config = this._getConfig(t)),
          (this._element = n),
          (this._dialog = n.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }

      var t = a.prototype;
      return (
        (t.toggle = function (e) {
          return this._isShown ? this.hide() : this.show(e);
        }),
        (t.show = function (a) {
          var o = this;

          if (!this._isShown && !this._isTransitioning) {
            He.default(this._element).hasClass("fade") &&
              (this._isTransitioning = !0);
            var e = He.default.Event("show.bs.modal", {
              relatedTarget: a
            });
            He.default(this._element).trigger(e),
              this._isShown ||
                e.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                He.default(this._element).on(
                  "click.dismiss.bs.modal",
                  '[data-dismiss="modal"]',
                  function (e) {
                    return o.hide(e);
                  }
                ),
                He.default(this._dialog).on(
                  "mousedown.dismiss.bs.modal",
                  function () {
                    He.default(o._element).one(
                      "mouseup.dismiss.bs.modal",
                      function (e) {
                        He.default(e.target).is(o._element) &&
                          (o._ignoreBackdropClick = !0);
                      }
                    );
                  }
                ),
                this._showBackdrop(function () {
                  return o._showElement(a);
                }));
          }
        }),
        (t.hide = function (a) {
          var l = this;

          if (
            (a && a.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var e = He.default.Event("hide.bs.modal");

            if (
              (He.default(this._element).trigger(e),
              this._isShown && !e.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var t = He.default(this._element).hasClass("fade");

              if (
                (t && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                He.default(document).off("focusin.bs.modal"),
                He.default(this._element).removeClass("show"),
                He.default(this._element).off("click.dismiss.bs.modal"),
                He.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                t)
              ) {
                var n = Re.getTransitionDurationFromElement(this._element);
                He.default(this._element)
                  .one(Re.TRANSITION_END, function (e) {
                    return l._hideModal(e);
                  })
                  .emulateTransitionEnd(n);
              } else this._hideModal();
            }
          }
        }),
        (t.dispose = function () {
          [window, this._element, this._dialog].forEach(function (e) {
            return He.default(e).off(".bs.modal");
          }),
            He.default(document).off("focusin.bs.modal"),
            He.default.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (t.handleUpdate = function () {
          this._adjustDialog();
        }),
        (t._getConfig = function (e) {
          return (e = m({}, Ve, e)), Re.typeCheckConfig("modal", e, Xe), e;
        }),
        (t._triggerBackdropTransition = function () {
          var a = this,
            t = He.default.Event("hidePrevented.bs.modal");

          if ((He.default(this._element).trigger(t), !t.isDefaultPrevented())) {
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            e || (this._element.style.overflowY = "hidden"),
              this._element.classList.add("modal-static");
            var n = Re.getTransitionDurationFromElement(this._dialog);
            He.default(this._element).off(Re.TRANSITION_END),
              He.default(this._element)
                .one(Re.TRANSITION_END, function () {
                  a._element.classList.remove("modal-static"),
                    e ||
                      He.default(a._element)
                        .one(Re.TRANSITION_END, function () {
                          a._element.style.overflowY = "";
                        })
                        .emulateTransitionEnd(a._element, n);
                })
                .emulateTransitionEnd(n),
              this._element.focus();
          }
        }),
        (t._showElement = function (l) {
          var t = this,
            e = He.default(this._element).hasClass("fade"),
            n = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            He.default(this._dialog).hasClass("modal-dialog-scrollable") && n
              ? (n.scrollTop = 0)
              : (this._element.scrollTop = 0),
            e && Re.reflow(this._element),
            He.default(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();

          var o = He.default.Event("shown.bs.modal", {
              relatedTarget: l
            }),
            i = function () {
              t._config.focus && t._element.focus(),
                (t._isTransitioning = !1),
                He.default(t._element).trigger(o);
            };

          if (e) {
            var a = Re.getTransitionDurationFromElement(this._dialog);
            He.default(this._dialog)
              .one(Re.TRANSITION_END, i)
              .emulateTransitionEnd(a);
          } else i();
        }),
        (t._enforceFocus = function () {
          var n = this;
          He.default(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (t) {
              document !== t.target &&
                n._element !== t.target &&
                0 === He.default(n._element).has(t.target).length &&
                n._element.focus();
            });
        }),
        (t._setEscapeEvent = function () {
          var n = this;
          this._isShown
            ? He.default(this._element).on(
                "keydown.dismiss.bs.modal",
                function (t) {
                  n._config.keyboard && 27 === t.which
                    ? (t.preventDefault(), n.hide())
                    : n._config.keyboard ||
                      27 !== t.which ||
                      n._triggerBackdropTransition();
                }
              )
            : this._isShown ||
              He.default(this._element).off("keydown.dismiss.bs.modal");
        }),
        (t._setResizeEvent = function () {
          var n = this;
          this._isShown
            ? He.default(window).on("resize.bs.modal", function (t) {
                return n.handleUpdate(t);
              })
            : He.default(window).off("resize.bs.modal");
        }),
        (t._hideModal = function () {
          var e = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              He.default(document.body).removeClass("modal-open"),
                e._resetAdjustments(),
                e._resetScrollbar(),
                He.default(e._element).trigger("hidden.bs.modal");
            });
        }),
        (t._removeBackdrop = function () {
          this._backdrop &&
            (He.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (t._showBackdrop = function (l) {
          var i = this,
            e = He.default(this._element).hasClass("fade") ? "fade" : "";

          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              e && this._backdrop.classList.add(e),
              He.default(this._backdrop).appendTo(document.body),
              He.default(this._element).on(
                "click.dismiss.bs.modal",
                function (e) {
                  i._ignoreBackdropClick
                    ? (i._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      ("static" === i._config.backdrop
                        ? i._triggerBackdropTransition()
                        : i.hide());
                }
              ),
              e && Re.reflow(this._backdrop),
              He.default(this._backdrop).addClass("show"),
              !l)
            )
              return;
            if (!e) return void l();
            var t = Re.getTransitionDurationFromElement(this._backdrop);
            He.default(this._backdrop)
              .one(Re.TRANSITION_END, l)
              .emulateTransitionEnd(t);
          } else if (!this._isShown && this._backdrop) {
            He.default(this._backdrop).removeClass("show");

            var n = function () {
              i._removeBackdrop(), l && l();
            };

            if (He.default(this._element).hasClass("fade")) {
              var o = Re.getTransitionDurationFromElement(this._backdrop);
              He.default(this._backdrop)
                .one(Re.TRANSITION_END, n)
                .emulateTransitionEnd(o);
            } else n();
          } else l && l();
        }),
        (t._adjustDialog = function () {
          var e =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            e &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !e &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (t._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (t._checkScrollbar = function () {
          var e = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(e.left + e.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (t._setScrollbar = function () {
          var a = this;

          if (this._isBodyOverflowing) {
            var t = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              e = [].slice.call(document.querySelectorAll(".sticky-top"));
            He.default(t).each(function (t, e) {
              var n = e.style.paddingRight,
                o = He.default(e).css("padding-right");
              He.default(e)
                .data("padding-right", n)
                .css("padding-right", parseFloat(o) + a._scrollbarWidth + "px");
            }),
              He.default(e).each(function (t, e) {
                var n = e.style.marginRight,
                  o = He.default(e).css("margin-right");
                He.default(e)
                  .data("margin-right", n)
                  .css(
                    "margin-right",
                    parseFloat(o) - a._scrollbarWidth + "px"
                  );
              });
            var n = document.body.style.paddingRight,
              o = He.default(document.body).css("padding-right");
            He.default(document.body)
              .data("padding-right", n)
              .css(
                "padding-right",
                parseFloat(o) + this._scrollbarWidth + "px"
              );
          }

          He.default(document.body).addClass("modal-open");
        }),
        (t._resetScrollbar = function () {
          var a = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          He.default(a).each(function (a, t) {
            var e = He.default(t).data("padding-right");
            He.default(t).removeData("padding-right"),
              (t.style.paddingRight = e || "");
          });
          var t = [].slice.call(document.querySelectorAll(".sticky-top"));
          He.default(t).each(function (a, t) {
            var e = He.default(t).data("margin-right");
            "undefined" != typeof e &&
              He.default(t).css("margin-right", e).removeData("margin-right");
          });
          var e = He.default(document.body).data("padding-right");
          He.default(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = e || "");
        }),
        (t._getScrollbarWidth = function () {
          var n = document.createElement("div");
          (n.className = "modal-scrollbar-measure"),
            document.body.appendChild(n);
          var t = n.getBoundingClientRect().width - n.clientWidth;
          return document.body.removeChild(n), t;
        }),
        (a._jQueryInterface = function (t, e) {
          return this.each(function () {
            var n = He.default(this).data("bs.modal"),
              l = m(
                {},
                Ve,
                He.default(this).data(),
                "object" == typeof t && t ? t : {}
              );

            if (
              (n ||
                ((n = new a(this, l)), He.default(this).data("bs.modal", n)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t](e);
            } else l.show && n.show(e);
          });
        }),
        u(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          },
          {
            key: "Default",
            get: function () {
              return Ve;
            }
          }
        ]),
        a
      );
    })();

  He.default(document).on(
    "click.bs.modal.data-api",
    '[data-toggle="modal"]',
    function (a) {
      var t,
        l = this,
        n = Re.getSelectorFromElement(this);
      n && (t = document.querySelector(n));
      var o = He.default(t).data("bs.modal")
        ? "toggle"
        : m({}, He.default(t).data(), He.default(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || a.preventDefault();
      var i = He.default(t).one("show.bs.modal", function (e) {
        e.isDefaultPrevented() ||
          i.one("hidden.bs.modal", function () {
            He.default(l).is(":visible") && l.focus();
          });
      });

      Ye._jQueryInterface.call(He.default(t), o, this);
    }
  ),
    (He.default.fn.modal = Ye._jQueryInterface),
    (He.default.fn.modal.Constructor = Ye),
    (He.default.fn.modal.noConflict = function () {
      return (He.default.fn.modal = Qe), Ye._jQueryInterface;
    });

  var Ke = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href"
    ],
    $e = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    Ge = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Je = "tooltip",
    Ze = He.default.fn[Je],
    et = ["sanitize", "whiteList", "sanitizeFn"],
    tt = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)"
    },
    nt = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    },
    at = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      },
      popperConfig: null
    },
    ot = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    },
    lt = (function () {
      function a(n, t) {
        if ("undefined" == typeof Be)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = n),
          (this.config = this._getConfig(t)),
          (this.tip = null),
          this._setListeners();
      }

      var t = a.prototype;
      return (
        (t.enable = function () {
          this._isEnabled = !0;
        }),
        (t.disable = function () {
          this._isEnabled = !1;
        }),
        (t.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (t.toggle = function (a) {
          if (this._isEnabled)
            if (a) {
              var t = this.constructor.DATA_KEY,
                e = He.default(a.currentTarget).data(t);
              e ||
                ((e = new this.constructor(
                  a.currentTarget,
                  this._getDelegateConfig()
                )),
                He.default(a.currentTarget).data(t, e)),
                (e._activeTrigger.click = !e._activeTrigger.click),
                e._isWithActiveTrigger()
                  ? e._enter(null, e)
                  : e._leave(null, e);
            } else {
              if (He.default(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);

              this._enter(null, this);
            }
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            He.default.removeData(this.element, this.constructor.DATA_KEY),
            He.default(this.element).off(this.constructor.EVENT_KEY),
            He.default(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && He.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (t.show = function () {
          var l = this;
          if ("none" === He.default(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var t = He.default.Event(this.constructor.Event.SHOW);

          if (this.isWithContent() && this._isEnabled) {
            He.default(this.element).trigger(t);
            var e = Re.findShadowRoot(this.element),
              n = He.default.contains(
                null === e ? this.element.ownerDocument.documentElement : e,
                this.element
              );
            if (t.isDefaultPrevented() || !n) return;
            var o = this.getTipElement(),
              i = Re.getUID(this.constructor.NAME);
            o.setAttribute("id", i),
              this.element.setAttribute("aria-describedby", i),
              this.setContent(),
              this.config.animation && He.default(o).addClass("fade");

            var a =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              r = this._getAttachment(a);

            this.addAttachmentClass(r);

            var s = this._getContainer();

            He.default(o).data(this.constructor.DATA_KEY, this),
              He.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || He.default(o).appendTo(s),
              He.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new Be(
                this.element,
                o,
                this._getPopperConfig(r)
              )),
              He.default(o).addClass("show"),
              He.default(o).addClass(this.config.customClass),
              "ontouchstart" in document.documentElement &&
                He.default(document.body)
                  .children()
                  .on("mouseover", null, He.default.noop);

            var p = function () {
              l.config.animation && l._fixTransition();
              var t = l._hoverState;
              (l._hoverState = null),
                He.default(l.element).trigger(l.constructor.Event.SHOWN),
                "out" === t && l._leave(null, l);
            };

            if (He.default(this.tip).hasClass("fade")) {
              var d = Re.getTransitionDurationFromElement(this.tip);
              He.default(this.tip)
                .one(Re.TRANSITION_END, p)
                .emulateTransitionEnd(d);
            } else p();
          }
        }),
        (t.hide = function (l) {
          var t = this,
            e = this.getTipElement(),
            n = He.default.Event(this.constructor.Event.HIDE),
            o = function () {
              "show" !== t._hoverState &&
                e.parentNode &&
                e.parentNode.removeChild(e),
                t._cleanTipClass(),
                t.element.removeAttribute("aria-describedby"),
                He.default(t.element).trigger(t.constructor.Event.HIDDEN),
                null !== t._popper && t._popper.destroy(),
                l && l();
            };

          if ((He.default(this.element).trigger(n), !n.isDefaultPrevented())) {
            if (
              (He.default(e).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                He.default(document.body)
                  .children()
                  .off("mouseover", null, He.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              He.default(this.tip).hasClass("fade"))
            ) {
              var i = Re.getTransitionDurationFromElement(e);
              He.default(e).one(Re.TRANSITION_END, o).emulateTransitionEnd(i);
            } else o();

            this._hoverState = "";
          }
        }),
        (t.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (t.isWithContent = function () {
          return !!this.getTitle();
        }),
        (t.addAttachmentClass = function (e) {
          He.default(this.getTipElement()).addClass("bs-tooltip-" + e);
        }),
        (t.getTipElement = function () {
          return (
            (this.tip = this.tip || He.default(this.config.template)[0]),
            this.tip
          );
        }),
        (t.setContent = function () {
          var e = this.getTipElement();
          this.setElementContent(
            He.default(e.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            He.default(e).removeClass("fade show");
        }),
        (t.setElementContent = function (n, t) {
          "object" == typeof t && (t.nodeType || t.jquery)
            ? this.config.html
              ? He.default(t).parent().is(n) || n.empty().append(t)
              : n.text(He.default(t).text())
            : this.config.html
            ? (this.config.sanitize &&
                (t = Pe(t, this.config.whiteList, this.config.sanitizeFn)),
              n.html(t))
            : n.text(t);
        }),
        (t.getTitle = function () {
          var e = this.element.getAttribute("data-original-title");
          return (
            e ||
              (e =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            e
          );
        }),
        (t._getPopperConfig = function (n) {
          var a = this;
          return m(
            {},
            {
              placement: n,
              modifiers: {
                offset: this._getOffset(),
                flip: {
                  behavior: this.config.fallbackPlacement
                },
                arrow: {
                  element: ".arrow"
                },
                preventOverflow: {
                  boundariesElement: this.config.boundary
                }
              },
              onCreate: function (e) {
                e.originalPlacement !== e.placement &&
                  a._handlePopperPlacementChange(e);
              },
              onUpdate: function (e) {
                return a._handlePopperPlacementChange(e);
              }
            },
            this.config.popperConfig
          );
        }),
        (t._getOffset = function () {
          var n = this,
            t = {};
          return (
            "function" == typeof this.config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = m(
                      {},
                      t.offsets,
                      n.config.offset(t.offsets, n.element) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (t._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : Re.isElement(this.config.container)
            ? He.default(this.config.container)
            : He.default(document).find(this.config.container);
        }),
        (t._getAttachment = function (e) {
          return nt[e.toUpperCase()];
        }),
        (t._setListeners = function () {
          var a = this;
          this.config.trigger.split(" ").forEach(function (t) {
            if ("click" === t)
              He.default(a.element).on(
                a.constructor.Event.CLICK,
                a.config.selector,
                function (t) {
                  return a.toggle(t);
                }
              );
            else if ("manual" !== t) {
              var e =
                  "hover" === t
                    ? a.constructor.Event.MOUSEENTER
                    : a.constructor.Event.FOCUSIN,
                n =
                  "hover" === t
                    ? a.constructor.Event.MOUSELEAVE
                    : a.constructor.Event.FOCUSOUT;
              He.default(a.element)
                .on(e, a.config.selector, function (t) {
                  return a._enter(t);
                })
                .on(n, a.config.selector, function (t) {
                  return a._leave(t);
                });
            }
          }),
            (this._hideModalHandler = function () {
              a.element && a.hide();
            }),
            He.default(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = m({}, this.config, {
                  trigger: "manual",
                  selector: ""
                }))
              : this._fixTitle();
        }),
        (t._fixTitle = function () {
          var e = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== e) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (t._enter = function (a, t) {
          var o = this.constructor.DATA_KEY;
          (t = t || He.default(a.currentTarget).data(o)) ||
            ((t = new this.constructor(
              a.currentTarget,
              this._getDelegateConfig()
            )),
            He.default(a.currentTarget).data(o, t)),
            a &&
              (t._activeTrigger["focusin" === a.type ? "focus" : "hover"] = !0),
            He.default(t.getTipElement()).hasClass("show") ||
            "show" === t._hoverState
              ? (t._hoverState = "show")
              : (clearTimeout(t._timeout),
                (t._hoverState = "show"),
                t.config.delay && t.config.delay.show
                  ? (t._timeout = setTimeout(function () {
                      "show" === t._hoverState && t.show();
                    }, t.config.delay.show))
                  : t.show());
        }),
        (t._leave = function (a, t) {
          var o = this.constructor.DATA_KEY;
          (t = t || He.default(a.currentTarget).data(o)) ||
            ((t = new this.constructor(
              a.currentTarget,
              this._getDelegateConfig()
            )),
            He.default(a.currentTarget).data(o, t)),
            a &&
              (t._activeTrigger[
                "focusout" === a.type ? "focus" : "hover"
              ] = !1),
            t._isWithActiveTrigger() ||
              (clearTimeout(t._timeout),
              (t._hoverState = "out"),
              t.config.delay && t.config.delay.hide
                ? (t._timeout = setTimeout(function () {
                    "out" === t._hoverState && t.hide();
                  }, t.config.delay.hide))
                : t.hide());
        }),
        (t._isWithActiveTrigger = function () {
          for (var e in this._activeTrigger)
            if (this._activeTrigger[e]) return !0;

          return !1;
        }),
        (t._getConfig = function (n) {
          var a = He.default(this.element).data();
          return (
            Object.keys(a).forEach(function (e) {
              -1 !== et.indexOf(e) && delete a[e];
            }),
            "number" ==
              typeof (n = m(
                {},
                this.constructor.Default,
                a,
                "object" == typeof n && n ? n : {}
              )).delay &&
              (n.delay = {
                show: n.delay,
                hide: n.delay
              }),
            "number" == typeof n.title && (n.title = n.title.toString()),
            "number" == typeof n.content && (n.content = n.content.toString()),
            Re.typeCheckConfig(Je, n, this.constructor.DefaultType),
            n.sanitize &&
              (n.template = Pe(n.template, n.whiteList, n.sanitizeFn)),
            n
          );
        }),
        (t._getDelegateConfig = function () {
          var n = {};
          if (this.config)
            for (var t in this.config)
              this.constructor.Default[t] !== this.config[t] &&
                (n[t] = this.config[t]);
          return n;
        }),
        (t._cleanTipClass = function () {
          var n = He.default(this.getTipElement()),
            t = n.attr("class").match(/(^|\s)bs-tooltip\S+/g);
          null !== t && t.length && n.removeClass(t.join(""));
        }),
        (t._handlePopperPlacementChange = function (e) {
          (this.tip = e.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement));
        }),
        (t._fixTransition = function () {
          var n = this.getTipElement(),
            t = this.config.animation;
          null === n.getAttribute("x-placement") &&
            (He.default(n).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = t));
        }),
        (a._jQueryInterface = function (t) {
          return this.each(function () {
            var e = He.default(this),
              n = e.data("bs.tooltip");

            if (
              (n || !/dispose|hide/.test(t)) &&
              (n ||
                ((n = new a(this, "object" == typeof t && t)),
                e.data("bs.tooltip", n)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        u(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          },
          {
            key: "Default",
            get: function () {
              return at;
            }
          },
          {
            key: "NAME",
            get: function () {
              return Je;
            }
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            }
          },
          {
            key: "Event",
            get: function () {
              return ot;
            }
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            }
          },
          {
            key: "DefaultType",
            get: function () {
              return tt;
            }
          }
        ]),
        a
      );
    })();

  (He.default.fn[Je] = lt._jQueryInterface),
    (He.default.fn[Je].Constructor = lt),
    (He.default.fn[Je].noConflict = function () {
      return (He.default.fn[Je] = Ze), lt._jQueryInterface;
    });

  var te = He.default.fn.popover,
    ne = m({}, lt.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    oe = m({}, lt.DefaultType, {
      content: "(string|element|function)"
    }),
    re = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    },
    ae = (function (l) {
      function i() {
        return l.apply(this, arguments) || this;
      }

      var t, o;
      (o = l),
        ((t = i).prototype = Object.create(o.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = o);
      var r = i.prototype;
      return (
        (r.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (r.addAttachmentClass = function (e) {
          He.default(this.getTipElement()).addClass("bs-popover-" + e);
        }),
        (r.getTipElement = function () {
          return (
            (this.tip = this.tip || He.default(this.config.template)[0]),
            this.tip
          );
        }),
        (r.setContent = function () {
          var n = He.default(this.getTipElement());
          this.setElementContent(n.find(".popover-header"), this.getTitle());

          var t = this._getContent();

          "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(n.find(".popover-body"), t),
            n.removeClass("fade show");
        }),
        (r._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (r._cleanTipClass = function () {
          var n = He.default(this.getTipElement()),
            t = n.attr("class").match(/(^|\s)bs-popover\S+/g);
          null !== t && 0 < t.length && n.removeClass(t.join(""));
        }),
        (i._jQueryInterface = function (a) {
          return this.each(function () {
            var t = He.default(this).data("bs.popover"),
              o = "object" == typeof a ? a : null;

            if (
              (t || !/dispose|hide/.test(a)) &&
              (t ||
                ((t = new i(this, o)), He.default(this).data("bs.popover", t)),
              "string" == typeof a)
            ) {
              if ("undefined" == typeof t[a])
                throw new TypeError('No method named "' + a + '"');
              t[a]();
            }
          });
        }),
        u(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          },
          {
            key: "Default",
            get: function () {
              return ne;
            }
          },
          {
            key: "NAME",
            get: function () {
              return "popover";
            }
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            }
          },
          {
            key: "Event",
            get: function () {
              return re;
            }
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            }
          },
          {
            key: "DefaultType",
            get: function () {
              return oe;
            }
          }
        ]),
        i
      );
    })(lt);

  (He.default.fn.popover = ae._jQueryInterface),
    (He.default.fn.popover.Constructor = ae),
    (He.default.fn.popover.noConflict = function () {
      return (He.default.fn.popover = te), ae._jQueryInterface;
    });

  var se = He.default.fn.scrollspy,
    ue = {
      offset: 10,
      method: "auto",
      target: ""
    },
    fe = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
    de = (function () {
      function a(a, t) {
        var e = this;
        (this._element = a),
          (this._scrollElement = "BODY" === a.tagName ? window : a),
          (this._config = this._getConfig(t)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          He.default(this._scrollElement).on(
            "scroll.bs.scrollspy",
            function (n) {
              return e._process(n);
            }
          ),
          this.refresh(),
          this._process();
      }

      var t = a.prototype;
      return (
        (t.refresh = function () {
          var a = this,
            t =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            l = "auto" === this._config.method ? t : this._config.method,
            n = "position" === l ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (o) {
                var t,
                  i = Re.getSelectorFromElement(o);

                if ((i && (t = document.querySelector(i)), t)) {
                  var r = t.getBoundingClientRect();
                  if (r.width || r.height)
                    return [He.default(t)[l]().top + n, i];
                }

                return null;
              })
              .filter(function (e) {
                return e;
              })
              .sort(function (n, t) {
                return n[0] - t[0];
              })
              .forEach(function (t) {
                a._offsets.push(t[0]), a._targets.push(t[1]);
              });
        }),
        (t.dispose = function () {
          He.default.removeData(this._element, "bs.scrollspy"),
            He.default(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (t._getConfig = function (n) {
          if (
            "string" !=
              typeof (n = m({}, ue, "object" == typeof n && n ? n : {}))
                .target &&
            Re.isElement(n.target)
          ) {
            var a = He.default(n.target).attr("id");
            a ||
              ((a = Re.getUID("scrollspy")),
              He.default(n.target).attr("id", a)),
              (n.target = "#" + a);
          }

          return Re.typeCheckConfig("scrollspy", n, fe), n;
        }),
        (t._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (t._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (t._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (t._process = function () {
          var a = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            e = this._config.offset + t - this._getOffsetHeight();

          if ((this._scrollHeight !== t && this.refresh(), a >= e)) {
            var n = this._targets[this._targets.length - 1];
            this._activeTarget !== n && this._activate(n);
          } else {
            if (
              this._activeTarget &&
              a < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();

            for (var l = this._offsets.length; l--; )
              this._activeTarget !== this._targets[l] &&
                a >= this._offsets[l] &&
                ("undefined" == typeof this._offsets[l + 1] ||
                  a < this._offsets[l + 1]) &&
                this._activate(this._targets[l]);
          }
        }),
        (t._activate = function (a) {
          (this._activeTarget = a), this._clear();

          var t = this._selector.split(",").map(function (t) {
              return (
                t + '[data-target="' + a + '"],' + t + '[href="' + a + '"]'
              );
            }),
            e = He.default(
              [].slice.call(document.querySelectorAll(t.join(",")))
            );

          e.hasClass("dropdown-item")
            ? (e
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              e.addClass("active"))
            : (e.addClass("active"),
              e
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              e
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            He.default(this._scrollElement).trigger("activate.bs.scrollspy", {
              relatedTarget: a
            });
        }),
        (t._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (e) {
              return e.classList.contains("active");
            })
            .forEach(function (e) {
              return e.classList.remove("active");
            });
        }),
        (a._jQueryInterface = function (t) {
          return this.each(function () {
            var e = He.default(this).data("bs.scrollspy");

            if (
              (e ||
                ((e = new a(this, "object" == typeof t && t)),
                He.default(this).data("bs.scrollspy", e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        u(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          },
          {
            key: "Default",
            get: function () {
              return ue;
            }
          }
        ]),
        a
      );
    })();

  He.default(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var a,
        o = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        t = o.length;
      t--;

    )
      (a = He.default(o[t])), de._jQueryInterface.call(a, a.data());
  }),
    (He.default.fn.scrollspy = de._jQueryInterface),
    (He.default.fn.scrollspy.Constructor = de),
    (He.default.fn.scrollspy.noConflict = function () {
      return (He.default.fn.scrollspy = se), de._jQueryInterface;
    });

  var ce = He.default.fn.tab,
    he = (function () {
      function a(e) {
        this._element = e;
      }

      var t = a.prototype;
      return (
        (t.show = function () {
          var l = this;

          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                He.default(this._element).hasClass("active")) ||
              He.default(this._element).hasClass("disabled")
            )
          ) {
            var t,
              i,
              d = He.default(this._element).closest(".nav, .list-group")[0],
              o = Re.getSelectorFromElement(this._element);

            if (d) {
              var r =
                "UL" === d.nodeName || "OL" === d.nodeName
                  ? "> li > .active"
                  : ".active";
              i = (i = He.default.makeArray(He.default(d).find(r)))[
                i.length - 1
              ];
            }

            var a = He.default.Event("hide.bs.tab", {
                relatedTarget: this._element
              }),
              s = He.default.Event("show.bs.tab", {
                relatedTarget: i
              });

            if (
              (i && He.default(i).trigger(a),
              He.default(this._element).trigger(s),
              !s.isDefaultPrevented() && !a.isDefaultPrevented())
            ) {
              o && (t = document.querySelector(o)),
                this._activate(this._element, d);

              var c = function () {
                var t = He.default.Event("hidden.bs.tab", {
                    relatedTarget: l._element
                  }),
                  e = He.default.Event("shown.bs.tab", {
                    relatedTarget: i
                  });
                He.default(i).trigger(t), He.default(l._element).trigger(e);
              };

              t ? this._activate(t, t.parentNode, c) : c();
            }
          }
        }),
        (t.dispose = function () {
          He.default.removeData(this._element, "bs.tab"),
            (this._element = null);
        }),
        (t._activate = function (l, t, e) {
          var n = this,
            o = (t && ("UL" === t.nodeName || "OL" === t.nodeName)
              ? He.default(t).find("> li > .active")
              : He.default(t).children(".active"))[0],
            i = e && o && He.default(o).hasClass("fade"),
            a = function () {
              return n._transitionComplete(l, o, e);
            };

          if (o && i) {
            var r = Re.getTransitionDurationFromElement(o);
            He.default(o)
              .removeClass("show")
              .one(Re.TRANSITION_END, a)
              .emulateTransitionEnd(r);
          } else a();
        }),
        (t._transitionComplete = function (l, t, e) {
          if (t) {
            He.default(t).removeClass("active");
            var n = He.default(t.parentNode).find(
              "> .dropdown-menu .active"
            )[0];
            n && He.default(n).removeClass("active"),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !1);
          }

          if (
            (He.default(l).addClass("active"),
            "tab" === l.getAttribute("role") &&
              l.setAttribute("aria-selected", !0),
            Re.reflow(l),
            l.classList.contains("fade") && l.classList.add("show"),
            l.parentNode && He.default(l.parentNode).hasClass("dropdown-menu"))
          ) {
            var o = He.default(l).closest(".dropdown")[0];

            if (o) {
              var i = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
              He.default(i).addClass("active");
            }

            l.setAttribute("aria-expanded", !0);
          }

          e && e();
        }),
        (a._jQueryInterface = function (t) {
          return this.each(function () {
            var e = He.default(this),
              n = e.data("bs.tab");

            if (
              (n || ((n = new a(this)), e.data("bs.tab", n)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        u(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          }
        ]),
        a
      );
    })();

  He.default(document).on(
    "click.bs.tab.data-api",
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function (e) {
      e.preventDefault(), he._jQueryInterface.call(He.default(this), "show");
    }
  ),
    (He.default.fn.tab = he._jQueryInterface),
    (He.default.fn.tab.Constructor = he),
    (He.default.fn.tab.noConflict = function () {
      return (He.default.fn.tab = ce), he._jQueryInterface;
    });

  var pe = He.default.fn.toast,
    me = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    ge = {
      animation: !0,
      autohide: !0,
      delay: 500
    },
    ve = (function () {
      function a(n, t) {
        (this._element = n),
          (this._config = this._getConfig(t)),
          (this._timeout = null),
          this._setListeners();
      }

      var t = a.prototype;
      return (
        (t.show = function () {
          var a = this,
            t = He.default.Event("show.bs.toast");

          if ((He.default(this._element).trigger(t), !t.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade");

            var e = function () {
              a._element.classList.remove("showing"),
                a._element.classList.add("show"),
                He.default(a._element).trigger("shown.bs.toast"),
                a._config.autohide &&
                  (a._timeout = setTimeout(function () {
                    a.hide();
                  }, a._config.delay));
            };

            if (
              (this._element.classList.remove("hide"),
              Re.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var n = Re.getTransitionDurationFromElement(this._element);
              He.default(this._element)
                .one(Re.TRANSITION_END, e)
                .emulateTransitionEnd(n);
            } else e();
          }
        }),
        (t.hide = function () {
          if (this._element.classList.contains("show")) {
            var e = He.default.Event("hide.bs.toast");
            He.default(this._element).trigger(e),
              e.isDefaultPrevented() || this._close();
          }
        }),
        (t.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            He.default(this._element).off("click.dismiss.bs.toast"),
            He.default.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (t._getConfig = function (e) {
          return (
            (e = m(
              {},
              ge,
              He.default(this._element).data(),
              "object" == typeof e && e ? e : {}
            )),
            Re.typeCheckConfig("toast", e, this.constructor.DefaultType),
            e
          );
        }),
        (t._setListeners = function () {
          var e = this;
          He.default(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return e.hide();
            }
          );
        }),
        (t._close = function () {
          var a = this,
            t = function () {
              a._element.classList.add("hide"),
                He.default(a._element).trigger("hidden.bs.toast");
            };

          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var e = Re.getTransitionDurationFromElement(this._element);
            He.default(this._element)
              .one(Re.TRANSITION_END, t)
              .emulateTransitionEnd(e);
          } else t();
        }),
        (t._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (a._jQueryInterface = function (t) {
          return this.each(function () {
            var e = He.default(this),
              n = e.data("bs.toast");

            if (
              (n ||
                ((n = new a(this, "object" == typeof t && t)),
                e.data("bs.toast", n)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t](this);
            }
          });
        }),
        u(a, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.0";
            }
          },
          {
            key: "DefaultType",
            get: function () {
              return me;
            }
          },
          {
            key: "Default",
            get: function () {
              return ge;
            }
          }
        ]),
        a
      );
    })();

  (He.default.fn.toast = ve._jQueryInterface),
    (He.default.fn.toast.Constructor = ve),
    (He.default.fn.toast.noConflict = function () {
      return (He.default.fn.toast = pe), ve._jQueryInterface;
    }),
    (s.Alert = i),
    (s.Button = c),
    (s.Carousel = b),
    (s.Collapse = C),
    (s.Dropdown = Ue),
    (s.Modal = Ye),
    (s.Popover = ae),
    (s.Scrollspy = de),
    (s.Tab = he),
    (s.Toast = ve),
    (s.Tooltip = lt),
    (s.Util = Re),
    Object.defineProperty(s, "__esModule", {
      value: !0
    });
}),
  !(function (n) {
    var e = (function (n, _, d) {
      "use strict";

      var T, A;
      if (
        ((function () {
          var a,
            o = {
              lazyClass: "lazyload",
              loadedClass: "lazyloaded",
              loadingClass: "lazyloading",
              preloadClass: "lazypreload",
              errorClass: "lazyerror",
              autosizesClass: "lazyautosizes",
              fastLoadedClass: "ls-is-cached",
              iframeLoadMode: 0,
              srcAttr: "data-src",
              srcsetAttr: "data-srcset",
              sizesAttr: "data-sizes",
              minSize: 40,
              customMedia: {},
              init: !0,
              expFactor: 1.5,
              hFac: 0.8,
              loadMode: 2,
              loadHidden: !0,
              ricTimeout: 0,
              throttleDelay: 125
            };

          for (a in ((A = n.lazySizesConfig || n.lazysizesConfig || {}), o))
            a in A || (A[a] = o[a]);
        })(),
        !_ || !_.getElementsByClassName)
      )
        return {
          init: function () {},
          cfg: A,
          noSupport: !0
        };

      var S = _.documentElement,
        l = n.HTMLPictureElement,
        i = n.addEventListener.bind(n),
        p = n.setTimeout,
        c = n.requestAnimationFrame || p,
        u = n.requestIdleCallback,
        g = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        r = {},
        m = Array.prototype.forEach,
        f = function (n, e) {
          return (
            r[e] || (r[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
            r[e].test(n.getAttribute("class") || "") && r[e]
          );
        },
        h = function (n, e) {
          f(n, e) ||
            n.setAttribute(
              "class",
              (n.getAttribute("class") || "").trim() + " " + e
            );
        },
        y = function (n, e) {
          var t;
          (t = f(n, e)) &&
            n.setAttribute(
              "class",
              (n.getAttribute("class") || "").replace(t, " ")
            );
        },
        b = function (n, t, a) {
          var l = a ? "addEventListener" : "removeEventListener";
          a && b(n, t),
            o.forEach(function (a) {
              n[l](a, t);
            });
        },
        v = function (o, e, t, l, i) {
          var r = _.createEvent("Event");

          return (
            t || (t = {}),
            (t.instance = T),
            r.initEvent(e, !l, !i),
            (r.detail = t),
            o.dispatchEvent(r),
            r
          );
        },
        w = function (o, e) {
          var t;
          !l && (t = n.picturefill || A.pf)
            ? (e &&
                e.src &&
                !o.getAttribute("srcset") &&
                o.setAttribute("srcset", e.src),
              t({
                reevaluate: !0,
                elements: [o]
              }))
            : e && e.src && (o.src = e.src);
        },
        E = function (n, e) {
          return (getComputedStyle(n, null) || {})[e];
        },
        C = function (n, e, o) {
          for (
            o = o || n.offsetWidth;
            o < A.minSize && e && !n._lazysizesWidth;

          )
            (o = e.offsetWidth), (e = e.parentNode);

          return o;
        },
        x = (function () {
          var o,
            l,
            d = [],
            t = [],
            r = d,
            u = function () {
              var n = r;

              for (r = d.length ? t : d, o = !0, l = !1; n.length; )
                n.shift()();

              o = !1;
            },
            s = function (n, e) {
              o && !e
                ? n.apply(this, arguments)
                : (r.push(n), !l && ((l = !0), (_.hidden ? p : c)(u)));
            };

          return (s._lsFlush = u), s;
        })(),
        D = function (n, t) {
          return t
            ? function () {
                x(n);
              }
            : function () {
                var a = this,
                  e = arguments;
                x(function () {
                  n.apply(a, e);
                });
              };
        },
        j = function (o) {
          var l,
            c = 0,
            f = A.throttleDelay,
            r = A.ricTimeout,
            e = function () {
              (l = !1), (c = d.now()), o();
            },
            g =
              u && 49 < r
                ? function () {
                    u(e, {
                      timeout: r
                    }),
                      r !== A.ricTimeout && (r = A.ricTimeout);
                  }
                : D(function () {
                    p(e);
                  }, !0);

          return function (n) {
            var a;
            (n = true === n) && (r = 33);
            l ||
              ((l = !0),
              (a = f - (d.now() - c)),
              0 > a && (a = 0),
              n || 9 > a ? g() : p(g, a));
          };
        },
        O = function (o) {
          var e,
            l,
            s = 99,
            i = function () {
              (e = null), o();
            },
            r = function () {
              var t = d.now() - l;
              t < s ? p(r, s - t) : (u || i)(i);
            };

          return function () {
            (l = d.now()), e || (e = p(r, s));
          };
        },
        a = (function () {
          var k,
            I,
            q,
            P,
            u,
            H,
            U,
            Q,
            V,
            X,
            Y,
            K,
            G = "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent),
            J = 0,
            Z = 0,
            ee = -1,
            te = function (t) {
              Z--, (t && !(0 > Z) && t.target) || (Z = 0);
            },
            L = function (t) {
              return (
                null == K && (K = "hidden" == E(_.body, "visibility")),
                K ||
                  "hidden" != E(t.parentNode, "visibility") ||
                  "hidden" != E(t, "visibility")
              );
            },
            ne = function (n, e) {
              var t,
                o = n,
                l = L(n);

              for (
                Q -= e, Y += e, V -= e, X += e;
                l && (o = o.offsetParent) && o != _.body && o != S;

              )
                (l = 0 < (E(o, "opacity") || 1)),
                  l &&
                    "visible" != E(o, "overflow") &&
                    ((t = o.getBoundingClientRect()),
                    (l =
                      X > t.left &&
                      V < t.right &&
                      Y > t.top - 1 &&
                      Q < t.bottom + 1));

              return l;
            },
            W = function () {
              var p,
                g,
                m,
                h,
                y,
                b,
                v,
                w,
                E,
                C,
                x,
                N,
                D = T.elements;

              if ((P = A.loadMode) && 8 > Z && (p = D.length)) {
                for (g = 0, ee++; g < p; g++)
                  if (D[g] && !D[g]._lazyRace) {
                    if (!G || (T.prematureUnveil && T.prematureUnveil(D[g]))) {
                      ie(D[g]);
                      continue;
                    }

                    if (
                      (((w = D[g].getAttribute("data-expand")) &&
                        (b = 1 * w)) ||
                        (b = J),
                      C ||
                        ((C =
                          !A.expand || 1 > A.expand
                            ? 500 < S.clientHeight && 500 < S.clientWidth
                              ? 500
                              : 370
                            : A.expand),
                        (T._defEx = C),
                        (x = C * A.expFactor),
                        (N = A.hFac),
                        (K = null),
                        J < x && 1 > Z && 2 < ee && 2 < P && !_.hidden
                          ? ((J = x), (ee = 0))
                          : 1 < P && 1 < ee && 6 > Z
                          ? (J = C)
                          : (J = 0)),
                      E !== b &&
                        ((H = innerWidth + b * N),
                        (U = innerHeight + b),
                        (v = -1 * b),
                        (E = b)),
                      (m = D[g].getBoundingClientRect()),
                      !(
                        (Y = m.bottom) >= v &&
                        (Q = m.top) <= U &&
                        (X = m.right) >= v * N &&
                        (V = m.left) <= H &&
                        (Y || X || V || Q) &&
                        (A.loadHidden || L(D[g])) &&
                        ((I && 3 > Z && !w && (3 > P || 4 > ee)) || ne(D[g], b))
                      ))
                    )
                      !y &&
                        I &&
                        !h &&
                        4 > Z &&
                        4 > ee &&
                        2 < P &&
                        (k[0] || A.preloadAfterLoad) &&
                        (k[0] ||
                          (!w &&
                            (Y ||
                              X ||
                              V ||
                              Q ||
                              "auto" != D[g].getAttribute(A.sizesAttr)))) &&
                        (h = k[0] || D[g]);
                    else if ((ie(D[g]), (y = !0), 9 < Z)) break;
                  }

                h && !y && ie(h);
              }
            },
            t = j(W),
            a = function (n) {
              var e = n.target;
              return e._lazyCache
                ? void delete e._lazyCache
                : void (te(n),
                  h(e, A.loadedClass),
                  y(e, A.loadingClass),
                  b(e, oe),
                  v(e, "lazyloaded"));
            },
            ae = D(a),
            oe = function (t) {
              ae({
                target: t.target
              });
            },
            B = function (n, e) {
              var t = n.getAttribute("data-load-mode") || A.iframeLoadMode;
              0 == t
                ? n.contentWindow.location.replace(e)
                : 1 == t && (n.src = e);
            },
            le = function (n) {
              var e,
                o = n.getAttribute(A.srcsetAttr);
              (e =
                A.customMedia[
                  n.getAttribute("data-media") || n.getAttribute("media")
                ]) && n.setAttribute("media", e),
                n.setAttribute("srcset", o);
            },
            F = D(function (d, t, e, c, i) {
              var r, _, E, C, T, S;

              (T = v(d, "lazybeforeunveil", t)).defaultPrevented ||
                (c && (e ? h(d, A.autosizesClass) : d.setAttribute("sizes", c)),
                (_ = d.getAttribute(A.srcsetAttr)),
                (r = d.getAttribute(A.srcAttr)),
                i && ((E = d.parentNode), (C = E && g.test(E.nodeName || ""))),
                (S = t.firesLoad || ("src" in d && (_ || r || C))),
                (T = {
                  target: d
                }),
                h(d, A.loadingClass),
                S && (clearTimeout(q), (q = p(te, 2500)), b(d, oe, !0)),
                C && m.call(E.getElementsByTagName("source"), le),
                _
                  ? d.setAttribute("srcset", _)
                  : r &&
                    !C &&
                    (/^iframe$/i.test(d.nodeName) ? B(d, r) : (d.src = r)),
                i &&
                  (_ || C) &&
                  w(d, {
                    src: r
                  })),
                d._lazyRace && delete d._lazyRace,
                y(d, A.lazyClass),
                x(function () {
                  var t = d.complete && 1 < d.naturalWidth;
                  (!S || t) &&
                    (t && h(d, A.fastLoadedClass),
                    a(T),
                    (d._lazyCache = !0),
                    p(function () {
                      "_lazyCache" in d && delete d._lazyCache;
                    }, 9)),
                    "lazy" == d.loading && Z--;
                }, !0);
            }),
            ie = function (n) {
              if (!n._lazyRace) {
                var e,
                  o = /^img$/i.test(n.nodeName),
                  a = n.getAttribute(A.sizesAttr) || n.getAttribute("sizes"),
                  l = "auto" == a;
                ((l || !I) &&
                  o &&
                  (n.getAttribute("src") || n.srcset) &&
                  !n.complete &&
                  !f(n, A.errorClass) &&
                  f(n, A.lazyClass)) ||
                  ((e = v(n, "lazyunveilread").detail),
                  l && N.updateElem(n, !0, n.offsetWidth),
                  (n._lazyRace = !0),
                  Z++,
                  F(n, e, l, a, o));
              }
            },
            s = O(function () {
              (A.loadMode = 3), t();
            }),
            r = function () {
              3 == A.loadMode && (A.loadMode = 2), s();
            },
            o = function () {
              return I
                ? void 0
                : 999 > d.now() - u
                ? void p(o, 999)
                : void ((I = !0), (A.loadMode = 3), t(), i("scroll", r, !0));
            };

          return {
            _: function () {
              (u = d.now()),
                (T.elements = _.getElementsByClassName(A.lazyClass)),
                (k = _.getElementsByClassName(
                  A.lazyClass + " " + A.preloadClass
                )),
                i("scroll", t, !0),
                i("resize", t, !0),
                i("pageshow", function (n) {
                  if (n.persisted) {
                    var e = _.querySelectorAll("." + A.loadingClass);

                    e.length &&
                      e.forEach &&
                      c(function () {
                        e.forEach(function (t) {
                          t.complete && ie(t);
                        });
                      });
                  }
                }),
                n.MutationObserver
                  ? new MutationObserver(t).observe(S, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0
                    })
                  : (S.addEventListener("DOMNodeInserted", t, !0),
                    S.addEventListener("DOMAttrModified", t, !0),
                    setInterval(t, 999)),
                i("hashchange", t, !0),
                [
                  "focus",
                  "mouseover",
                  "click",
                  "load",
                  "transitionend",
                  "animationend"
                ].forEach(function (n) {
                  _.addEventListener(n, t, !0);
                }),
                /d$|^c/.test(_.readyState)
                  ? o()
                  : (i("load", o),
                    _.addEventListener("DOMContentLoaded", t),
                    p(o, 2e4)),
                T.elements.length ? (W(), x._lsFlush()) : t();
            },
            checkElems: t,
            unveil: ie,
            _aLSL: r
          };
        })(),
        N = (function () {
          var o,
            l = D(function (o, e, t, a) {
              var l, d, c;
              if (
                ((o._lazysizesWidth = a),
                (a += "px"),
                o.setAttribute("sizes", a),
                g.test(e.nodeName || ""))
              )
                for (
                  l = e.getElementsByTagName("source"), d = 0, c = l.length;
                  d < c;
                  d++
                )
                  l[d].setAttribute("sizes", a);
              t.detail.dataAttr || w(o, t.detail);
            }),
            n = function (n, e, t) {
              var o,
                s = n.parentNode;
              s &&
                ((t = C(n, s, t)),
                (o = v(n, "lazybeforesizes", {
                  width: t,
                  dataAttr: !!e
                })),
                !o.defaultPrevented &&
                  ((t = o.detail.width),
                  t && t !== n._lazysizesWidth && l(n, s, o, t)));
            },
            r = function () {
              var a,
                l = o.length;
              if (l) for (a = 0; a < l; a++) n(o[a]);
            },
            e = O(r);

          return {
            _: function () {
              (o = _.getElementsByClassName(A.autosizesClass)), i("resize", e);
            },
            checkElems: e,
            updateElem: n
          };
        })(),
        e = function () {
          !e.i && _.getElementsByClassName && ((e.i = !0), N._(), a._());
        };

      return (
        p(function () {
          A.init && e();
        }),
        (T = {
          cfg: A,
          autoSizer: N,
          loader: a,
          init: e,
          uP: w,
          aC: h,
          rC: y,
          hC: f,
          fire: v,
          gW: C,
          rAF: x
        })
      );
    })(n, n.document, Date);

    (n.lazySizes = e),
      "object" == typeof module && module.exports && (module.exports = e);
  })("undefined" == typeof window ? {} : window);
let root = {
  widthScreen: 0,
  heightScreen: 0,
  function: {
    getScreenSize: function () {
      (root.widthScreen = screen.width), (root.heightScreen = screen.height);
    },
    bottomSpaceHandler: function () {
      if (992 > root.widthScreen) {
        let e = $("nav").height();
        $("body").css("padding-bottom", `${e}px`);
      } else $("body").css("padding-bottom", `0px`);
    },
    init: function () {
      this.getScreenSize(), this.bottomSpaceHandler();
    }
  },
  event: function () {
    $(window).resize(function () {
      root.function.init();
    });
  }
};
let searchInput = {
  function: {
    placeholderHandler: function () {
      return 767 < root.widthScreen
        ? void $("header input").attr("placeholder", "Type about product ...")
        : void $("header input").attr("placeholder", "Search...");
    },
    init: async function () {
      this.placeholderHandler();
    }
  },
  event: function () {
    $(window).resize(function () {
      searchInput.function.init();
    });
  }
};
let navbar = {
  function: {
    displayCategoryList: function () {
      $("nav button .position-absolute").fadeIn(300);
    },
    hideCategoryList: function () {
      $("nav button .position-absolute").fadeOut(300);
    },
    scrollToSearch: function () {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        300,
        () => {
          setTimeout(() => {
            $("header form input").focus();
          }, 100);
        }
      );
    },
    init: async function () {
      this.hideCategoryList();
    }
  },
  event: function () {
    $("nav button").hover(function () {
      navbar.function.displayCategoryList();
    }),
      $("nav button").mouseleave(function () {
        navbar.function.hideCategoryList();
      }),
      $(".search-btn").click(function (t) {
        t.preventDefault(), navbar.function.scrollToSearch();
      });
  }
};
$(document).ready(function () {
  root.function.init(),
    root.event(),
    searchInput.function.init(),
    searchInput.event(),
    navbar.function.init(),
    navbar.event();
});