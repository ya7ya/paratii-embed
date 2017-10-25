function addClass(t, e) {
    var n = (" " + t.className + " ").replace(/\s+/g, " "),
        i = (" " + e + " ").replace(/\s+/g, " ");
    n.indexOf(i) < 0 && (t.className = (n + i).replace(/\s+/g, " ").replace(/^ | $/g, ""))
}

function removeClass(t, e) {
    if (t) {
        var n = (" " + t.className + " ").replace(/\s+/g, " "),
            i = (" " + e + " ").replace(/\s+/g, " ");
        n.indexOf(i) >= 0 && (t.className = n.replace(i, " ").replace(/\s+/g, " ").replace(/^ | $/g, ""))
    }
}

function getElement(t, e, n) {
    var i, r;
    return i = document.createElement(t), e && (i.className = e), n && (r = document.createTextNode(n), i.appendChild(r)), i
}

function VideosPlayer(t) {
        function e(t) {
            r && clearTimeout(r);
            var e, n;
            n = 200, "mousedown" == t.type && (i.enable_drag = !0, n = 0, i.was_paused = i.$video.paused, i.was_paused || i.$video.pause()), e = i.PercentualThumb(t.clientX, i.$track.left, i.$track.width), i.PositionThumb(e, i.$thumb), i.PositionVideo(e), r = setTimeout(function() {
                i.PositionVideo(e)
            }, n)
        }

        function n(t) {
            var e;
            "mousedown" == t.type && (i.enable_volume = !0), e = i.PercentualThumb(t.clientX, i.$volume.left, i.$volume.width), e /= 100, e > 1 && (e = 1), e < 0 && (e = 0), i.$video.volume = e
        }
        if (t.element) {
            var i, r;
            i = this, this.$element = t.element, this.$video = t.video, this.was_paused = !0, this.enable_drag = !1, this.enable_volume = !1,
                function() {
                    var t, e, n;
                    t = '<svg class="svg svg-pause" viewBox="0 0 68 63.8"><path class="path" d="M37.5 16.4h9v31h-9zM21.5 16.4h9v31h-9z"/></svg>', e = '<svg class="svg svg-play" viewBox="0 0 68 63.8"><path class="path" d="M20.4 14.6v34.6l27.2-17.3z"/></svg>', n = '<svg class="svg svg-mute" viewBox="0 0 68 63.8"><path class="path" d="M37.6 16.2v3.7c5.2 1.5 8.9 6.3 8.9 12s-3.8 10.5-8.9 12v3.7c7.2-1.6 12.5-8 12.5-15.7s-5.3-14.1-12.5-15.7zm4.5 15.7c0-3.2-1.8-5.9-4.5-7.2v14.4c2.6-1.3 4.5-4 4.5-7.2zm-24.2-5.4v10.7h7.2l8.9 8.9V17.6l-8.9 8.9h-7.2z"/></svg>', i.$track = getElement("div", "medias-controls-track"), i.$thumb = getElement("button", "medias-controls-thumb medias-controls-track-thumb"), i.$timeline = getElement("div", "medias-controls-track-timeline"), i.$loadedline = getElement("div", "medias-controls-track-loadedline"), i.$button = getElement("button", "medias-controls-button medias-controls-play-button"), i.$mute = getElement("button", "medias-controls-button medias-controls-mute-button"), i.$volume = getElement("div", "medias-controls-volume"), i.$vthumb = getElement("button", "medias-controls-thumb medias-controls-volume-thumb"), i.$vtimeline = getElement("div", "medias-controls-volume-timeline"), i.$track.appendChild(i.$loadedline), i.$track.appendChild(i.$timeline), i.$track.appendChild(i.$thumb), i.$element.appendChild(i.$track), i.$button.innerHTML = t + e, i.$element.appendChild(i.$button), i.$mute.innerHTML = n, i.$element.appendChild(i.$mute), i.$volume.appendChild(i.$vtimeline), i.$volume.appendChild(i.$vthumb), i.$element.appendChild(i.$volume)
                }(), this.setBoundings(), window.onresize = function(t) {
                    i.setBoundings()
                }, this.$button.onclick = this.playpause.bind(this), this.$mute.onclick = function() {
                    NaN != i.$video.duration && (i.$video.volume = !i.$video.volume)
                }, this.$volume.onmousedown = function(t) {
                    NaN != i.$video.duration && n(t)
                }, this.$volume.onmousemove = function(t) {
                    i.enable_volume && NaN != i.$video.duration && n(t)
                }, this.$volume.onmouseout = function() {
                    i.enable_volume = !1
                }, this.$volume.onmouseup = function() {
                    i.enable_volume = !1
                }, this.$track.onmousedown = function(t) {
                    NaN != i.$video.duration && e(t)
                }, this.$timeline.onmousemove = function(t) {
                    i.enable_drag && NaN != i.$video.duration && e(t)
                }, this.$track.onmouseout = function() {
                    i.enable_drag = !1
                }, this.$track.onmouseup = function() {
                    i.enable_drag = !1
                }
        } else console.error("need an element")
    }! function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }(void 0 !== window ? window : this, function(t, e) {
        "use strict";

        function n(t, e) {
            e = e || nt;
            var n = e.createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(t) {
            var e = !!t && "length" in t && t.length,
                n = ft.type(t);
            return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function r(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function a(t, e, n) {
            return ft.isFunction(e) ? ft.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? ft.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? ft.grep(t, function(t) {
                return ot.call(e, t) > -1 !== n
            }) : St.test(e) ? ft.filter(e, t, n) : (e = ft.filter(e, t), ft.grep(t, function(t) {
                return ot.call(e, t) > -1 !== n && 1 === t.nodeType
            }))
        }

        function s(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = {};
            return ft.each(t.match(At) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function l(t) {
            return t
        }

        function h(t) {
            throw t
        }

        function p(t, e, n, i) {
            var r;
            try {
                t && ft.isFunction(r = t.promise) ? r.call(t).done(e).fail(n) : t && ft.isFunction(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }

        function c() {
            nt.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), ft.ready()
        }

        function u() {
            this.expando = ft.expando + u.uid++
        }

        function m(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Lt.test(t) ? JSON.parse(t) : t)
        }

        function d(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Bt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = m(n)
                    } catch (t) {}
                    Nt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function f(t, e, n, i) {
            var r, a = 1,
                s = 20,
                o = i ? function() {
                    return i.cur()
                } : function() {
                    return ft.css(t, e, "")
                },
                l = o(),
                h = n && n[3] || (ft.cssNumber[e] ? "" : "px"),
                p = (ft.cssNumber[e] || "px" !== h && +l) && Ot.exec(ft.css(t, e));
            if (p && p[3] !== h) {
                h = h || p[3], n = n || [], p = +l || 1;
                do {
                    a = a || ".5", p /= a, ft.style(t, e, p + h)
                } while (a !== (a = o() / l) && 1 !== a && --s)
            }
            return n && (p = +p || +l || 0, r = n[1] ? p + (n[1] + 1) * n[2] : +n[2], i && (i.unit = h, i.start = p, i.end = r)), r
        }

        function y(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                r = Yt[i];
            return r || (e = n.body.appendChild(n.createElement(i)), r = ft.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), Yt[i] = r, r)
        }

        function v(t, e) {
            for (var n, i, r = [], a = 0, s = t.length; a < s; a++) i = t[a], i.style && (n = i.style.display, e ? ("none" === n && (r[a] = Vt.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && Ht(i) && (r[a] = y(i))) : "none" !== n && (r[a] = "none", Vt.set(i, "display", n)));
            for (a = 0; a < s; a++) null != r[a] && (t[a].style.display = r[a]);
            return t
        }

        function g(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && r(t, e) ? ft.merge([t], n) : n
        }

        function b(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Vt.set(t[n], "globalEval", !e || Vt.get(e[n], "globalEval"))
        }

        function x(t, e, n, i, r) {
            for (var a, s, o, l, h, p, c = e.createDocumentFragment(), u = [], m = 0, d = t.length; m < d; m++)
                if ((a = t[m]) || 0 === a)
                    if ("object" === ft.type(a)) ft.merge(u, a.nodeType ? [a] : a);
                    else if (Zt.test(a)) {
                for (s = s || c.appendChild(e.createElement("div")), o = (Xt.exec(a) || ["", ""])[1].toLowerCase(), l = qt[o] || qt._default, s.innerHTML = l[1] + ft.htmlPrefilter(a) + l[2], p = l[0]; p--;) s = s.lastChild;
                ft.merge(u, s.childNodes), s = c.firstChild, s.textContent = ""
            } else u.push(e.createTextNode(a));
            for (c.textContent = "", m = 0; a = u[m++];)
                if (i && ft.inArray(a, i) > -1) r && r.push(a);
                else if (h = ft.contains(a.ownerDocument, a), s = g(c.appendChild(a), "script"), h && b(s), n)
                for (p = 0; a = s[p++];) Wt.test(a.type || "") && n.push(a);
            return c
        }

        function k() {
            return !0
        }

        function _() {
            return !1
        }

        function E() {
            try {
                return nt.activeElement
            } catch (t) {}
        }

        function w(t, e, n, i, r, a) {
            var s, o;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (o in e) w(t, o, n, i, e[o], a);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = _;
            else if (!r) return t;
            return 1 === a && (s = r, r = function(t) {
                return ft().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = ft.guid++)), t.each(function() {
                ft.event.add(this, e, r, i, n)
            })
        }

        function S(t, e) {
            return r(t, "table") && r(11 !== e.nodeType ? e : e.firstChild, "tr") ? ft(">tbody", t)[0] || t : t
        }

        function P(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function C(t) {
            var e = ie.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function D(t, e) {
            var n, i, r, a, s, o, l, h;
            if (1 === e.nodeType) {
                if (Vt.hasData(t) && (a = Vt.access(t), s = Vt.set(e, a), h = a.events)) {
                    delete s.handle, s.events = {};
                    for (r in h)
                        for (n = 0, i = h[r].length; n < i; n++) ft.event.add(e, r, h[r][n])
                }
                Nt.hasData(t) && (o = Nt.access(t), l = ft.extend({}, o), Nt.set(e, l))
            }
        }

        function T(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function A(t, e, i, r) {
            e = at.apply([], e);
            var a, s, o, l, h, p, c = 0,
                u = t.length,
                m = u - 1,
                d = e[0],
                f = ft.isFunction(d);
            if (f || u > 1 && "string" == typeof d && !mt.checkClone && ne.test(d)) return t.each(function(n) {
                var a = t.eq(n);
                f && (e[0] = d.call(this, n, a.html())), A(a, e, i, r)
            });
            if (u && (a = x(e, t[0].ownerDocument, !1, t, r), s = a.firstChild, 1 === a.childNodes.length && (a = s), s || r)) {
                for (o = ft.map(g(a, "script"), P), l = o.length; c < u; c++) h = a, c !== m && (h = ft.clone(h, !0, !0), l && ft.merge(o, g(h, "script"))), i.call(t[c], h, c);
                if (l)
                    for (p = o[o.length - 1].ownerDocument, ft.map(o, C), c = 0; c < l; c++) h = o[c], Wt.test(h.type || "") && !Vt.access(h, "globalEval") && ft.contains(p, h) && (h.src ? ft._evalUrl && ft._evalUrl(h.src) : n(h.textContent.replace(re, ""), p))
            }
            return t
        }

        function M(t, e, n) {
            for (var i, r = e ? ft.filter(e, t) : t, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || ft.cleanData(g(i)), i.parentNode && (n && ft.contains(i.ownerDocument, i) && b(g(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function F(t, e, n) {
            var i, r, a, s, o = t.style;
            return n = n || oe(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)), !mt.pixelMarginRight() && se.test(s) && ae.test(e) && (i = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
        }

        function I(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function z(t) {
            if (t in me) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = ue.length; n--;)
                if ((t = ue[n] + e) in me) return t
        }

        function V(t) {
            var e = ft.cssProps[t];
            return e || (e = ft.cssProps[t] = z(t) || t), e
        }

        function N(t, e, n) {
            var i = Ot.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function L(t, e, n, i, r) {
            var a, s = 0;
            for (a = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; a < 4; a += 2) "margin" === n && (s += ft.css(t, n + jt[a], !0, r)), i ? ("content" === n && (s -= ft.css(t, "padding" + jt[a], !0, r)), "margin" !== n && (s -= ft.css(t, "border" + jt[a] + "Width", !0, r))) : (s += ft.css(t, "padding" + jt[a], !0, r), "padding" !== n && (s += ft.css(t, "border" + jt[a] + "Width", !0, r)));
            return s
        }

        function B(t, e, n) {
            var i, r = oe(t),
                a = F(t, e, r),
                s = "border-box" === ft.css(t, "boxSizing", !1, r);
            return se.test(a) ? a : (i = s && (mt.boxSizingReliable() || a === t.style[e]), "auto" === a && (a = t["offset" + e[0].toUpperCase() + e.slice(1)]), (a = parseFloat(a) || 0) + L(t, e, n || (s ? "border" : "content"), i, r) + "px")
        }

        function R(t, e, n, i, r) {
            return new R.prototype.init(t, e, n, i, r)
        }

        function O() {
            fe && (!1 === nt.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(O) : t.setTimeout(O, ft.fx.interval), ft.fx.tick())
        }

        function j() {
            return t.setTimeout(function() {
                de = void 0
            }), de = ft.now()
        }

        function H(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = jt[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function $(t, e, n) {
            for (var i, r = (X.tweeners[e] || []).concat(X.tweeners["*"]), a = 0, s = r.length; a < s; a++)
                if (i = r[a].call(n, e, t)) return i
        }

        function Y(t, e, n) {
            var i, r, a, s, o, l, h, p, c = "width" in e || "height" in e,
                u = this,
                m = {},
                d = t.style,
                f = t.nodeType && Ht(t),
                y = Vt.get(t, "fxshow");
            n.queue || (s = ft._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
                s.unqueued || o()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, ft.queue(t, "fx").length || s.empty.fire()
                })
            }));
            for (i in e)
                if (r = e[i], ye.test(r)) {
                    if (delete e[i], a = a || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r || !y || void 0 === y[i]) continue;
                        f = !0
                    }
                    m[i] = y && y[i] || ft.style(t, i)
                }
            if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(m)) {
                c && 1 === t.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], h = y && y.display, null == h && (h = Vt.get(t, "display")), p = ft.css(t, "display"), "none" === p && (h ? p = h : (v([t], !0), h = t.style.display || h, p = ft.css(t, "display"), v([t]))), ("inline" === p || "inline-block" === p && null != h) && "none" === ft.css(t, "float") && (l || (u.done(function() {
                    d.display = h
                }), null == h && (p = d.display, h = "none" === p ? "" : p)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", u.always(function() {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                })), l = !1;
                for (i in m) l || (y ? "hidden" in y && (f = y.hidden) : y = Vt.access(t, "fxshow", {
                    display: h
                }), a && (y.hidden = !f), f && v([t], !0), u.done(function() {
                    f || v([t]), Vt.remove(t, "fxshow");
                    for (i in m) ft.style(t, i, m[i])
                })), l = $(f ? y[i] : 0, i, u), i in y || (y[i] = l.start, f && (l.end = l.start, l.start = 0))
            }
        }

        function G(t, e) {
            var n, i, r, a, s;
            for (n in t)
                if (i = ft.camelCase(n), r = e[i], a = t[n], Array.isArray(a) && (r = a[1], a = t[n] = a[0]), n !== i && (t[i] = a, delete t[n]), (s = ft.cssHooks[i]) && "expand" in s) {
                    a = s.expand(a), delete t[i];
                    for (n in a) n in t || (t[n] = a[n], e[n] = r)
                } else e[i] = r
        }

        function X(t, e, n) {
            var i, r, a = 0,
                s = X.prefilters.length,
                o = ft.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = de || j(), n = Math.max(0, h.startTime + h.duration - e), i = n / h.duration || 0, a = 1 - i, s = 0, l = h.tweens.length; s < l; s++) h.tweens[s].run(a);
                    return o.notifyWith(t, [h, a, n]), a < 1 && l ? n : (l || o.notifyWith(t, [h, 1, 0]), o.resolveWith(t, [h]), !1)
                },
                h = o.promise({
                    elem: t,
                    props: ft.extend({}, e),
                    opts: ft.extend(!0, {
                        specialEasing: {},
                        easing: ft.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: de || j(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ft.Tween(t, h.opts, e, n, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? h.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) h.tweens[n].run(1);
                        return e ? (o.notifyWith(t, [h, 1, 0]), o.resolveWith(t, [h, e])) : o.rejectWith(t, [h, e]), this
                    }
                }),
                p = h.props;
            for (G(p, h.opts.specialEasing); a < s; a++)
                if (i = X.prefilters[a].call(h, t, p, h.opts)) return ft.isFunction(i.stop) && (ft._queueHooks(h.elem, h.opts.queue).stop = ft.proxy(i.stop, i)), i;
            return ft.map(p, $, h), ft.isFunction(h.opts.start) && h.opts.start.call(t, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), ft.fx.timer(ft.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h
        }

        function W(t) {
            return (t.match(At) || []).join(" ")
        }

        function q(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function Z(t, e, n, i) {
            var r;
            if (Array.isArray(e)) ft.each(e, function(e, r) {
                n || Ce.test(t) ? i(t, r) : Z(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== ft.type(e)) i(t, e);
            else
                for (r in e) Z(t + "[" + r + "]", e[r], n, i)
        }

        function K(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    a = e.toLowerCase().match(At) || [];
                if (ft.isFunction(n))
                    for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function U(t, e, n, i) {
            function r(o) {
                var l;
                return a[o] = !0, ft.each(t[o] || [], function(t, o) {
                    var h = o(e, n, i);
                    return "string" != typeof h || s || a[h] ? s ? !(l = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
                }), l
            }
            var a = {},
                s = t === Re;
            return r(e.dataTypes[0]) || !a["*"] && r("*")
        }

        function Q(t, e) {
            var n, i, r = ft.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && ft.extend(!0, t, i), t
        }

        function J(t, e, n) {
            for (var i, r, a, s, o = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (r in o)
                    if (o[r] && o[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) a = l[0];
            else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        a = r;
                        break
                    }
                    s || (s = r)
                }
                a = a || s
            }
            if (a) return a !== l[0] && l.unshift(a), n[a]
        }

        function tt(t, e, n, i) {
            var r, a, s, o, l, h = {},
                p = t.dataTypes.slice();
            if (p[1])
                for (s in t.converters) h[s.toLowerCase()] = t.converters[s];
            for (a = p.shift(); a;)
                if (t.responseFields[a] && (n[t.responseFields[a]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = p.shift())
                    if ("*" === a) a = l;
                    else if ("*" !== l && l !== a) {
                if (!(s = h[l + " " + a] || h["* " + a]))
                    for (r in h)
                        if (o = r.split(" "), o[1] === a && (s = h[l + " " + o[0]] || h["* " + o[0]])) {
                            !0 === s ? s = h[r] : !0 !== h[r] && (a = o[0], p.unshift(o[1]));
                            break
                        }
                if (!0 !== s)
                    if (s && t.throws) e = s(e);
                    else try {
                        e = s(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: s ? t : "No conversion from " + l + " to " + a
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }
        var et = [],
            nt = t.document,
            it = Object.getPrototypeOf,
            rt = et.slice,
            at = et.concat,
            st = et.push,
            ot = et.indexOf,
            lt = {},
            ht = lt.toString,
            pt = lt.hasOwnProperty,
            ct = pt.toString,
            ut = ct.call(Object),
            mt = {},
            dt = "3.2.1",
            ft = function(t, e) {
                return new ft.fn.init(t, e)
            },
            yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            vt = /^-ms-/,
            gt = /-([a-z])/g,
            bt = function(t, e) {
                return e.toUpperCase()
            };
        ft.fn = ft.prototype = {
            jquery: dt,
            constructor: ft,
            length: 0,
            toArray: function() {
                return rt.call(this)
            },
            get: function(t) {
                return null == t ? rt.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = ft.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return ft.each(this, t)
            },
            map: function(t) {
                return this.pushStack(ft.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(rt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: st,
            sort: et.sort,
            splice: et.splice
        }, ft.extend = ft.fn.extend = function() {
            var t, e, n, i, r, a, s = arguments[0] || {},
                o = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof s && (h = s, s = arguments[o] || {}, o++), "object" == typeof s || ft.isFunction(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
                if (null != (t = arguments[o]))
                    for (e in t) n = s[e], i = t[e], s !== i && (h && i && (ft.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && ft.isPlainObject(n) ? n : {}, s[e] = ft.extend(h, a, i)) : void 0 !== i && (s[e] = i));
            return s
        }, ft.extend({
            expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === ft.type(t)
            },
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = ft.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== ht.call(t) || (e = it(t)) && ("function" != typeof(n = pt.call(e, "constructor") && e.constructor) || ct.call(n) !== ut))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ht.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                n(t)
            },
            camelCase: function(t) {
                return t.replace(vt, "ms-").replace(gt, bt)
            },
            each: function(t, e) {
                var n, r = 0;
                if (i(t))
                    for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
                else
                    for (r in t)
                        if (!1 === e.call(t[r], r, t[r])) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(yt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ft.merge(n, "string" == typeof t ? [t] : t) : st.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : ot.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i = [], r = 0, a = t.length, s = !n; r < a; r++) !e(t[r], r) !== s && i.push(t[r]);
                return i
            },
            map: function(t, e, n) {
                var r, a, s = 0,
                    o = [];
                if (i(t))
                    for (r = t.length; s < r; s++) null != (a = e(t[s], s, n)) && o.push(a);
                else
                    for (s in t) null != (a = e(t[s], s, n)) && o.push(a);
                return at.apply([], o)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, r;
                if ("string" == typeof e && (n = t[e], e = t, t = n), ft.isFunction(t)) return i = rt.call(arguments, 2), r = function() {
                    return t.apply(e || this, i.concat(rt.call(arguments)))
                }, r.guid = t.guid = t.guid || ft.guid++, r
            },
            now: Date.now,
            support: mt
        }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = et[Symbol.iterator]), ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            lt["[object " + e + "]"] = e.toLowerCase()
        });
        var xt = function(t) {
            function e(t, e, n, i) {
                var r, a, s, o, l, p, u, m = e && e.ownerDocument,
                    d = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
                if (!i && ((e ? e.ownerDocument || e : R) !== M && A(e), e = e || M, I)) {
                    if (11 !== d && (l = ft.exec(t)))
                        if (r = l[1]) {
                            if (9 === d) {
                                if (!(s = e.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (m && (s = m.getElementById(r)) && L(e, s) && s.id === r) return n.push(s), n
                        } else {
                            if (l[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(r)), n
                        }
                    if (x.qsa && !Y[t + " "] && (!z || !z.test(t))) {
                        if (1 !== d) m = e, u = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((o = e.getAttribute("id")) ? o = o.replace(bt, xt) : e.setAttribute("id", o = B), p = w(t), a = p.length; a--;) p[a] = "#" + o + " " + c(p[a]);
                            u = p.join(","), m = yt.test(t) && h(e.parentNode) || e
                        }
                        if (u) try {
                            return K.apply(n, m.querySelectorAll(u)), n
                        } catch (t) {} finally {
                            o === B && e.removeAttribute("id")
                        }
                    }
                }
                return P(t.replace(at, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[B] = !0, t
            }

            function r(t) {
                var e = M.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function a(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function o(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && _t(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function l(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var r, a = t([], n.length, e), s = a.length; s--;) n[r = a[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function h(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function p() {}

            function c(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function u(t, e, n) {
                var i = e.dir,
                    r = e.next,
                    a = r || i,
                    s = n && "parentNode" === a,
                    o = j++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || s) return t(e, n, r);
                    return !1
                } : function(e, n, l) {
                    var h, p, c, u = [O, o];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || s)
                                if (c = e[B] || (e[B] = {}), p = c[e.uniqueID] || (c[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((h = p[a]) && h[0] === O && h[1] === o) return u[2] = h[2];
                                    if (p[a] = u, u[2] = t(e, n, l)) return !0
                                } return !1
                }
            }

            function m(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function d(t, n, i) {
                for (var r = 0, a = n.length; r < a; r++) e(t, n[r], i);
                return i
            }

            function f(t, e, n, i, r) {
                for (var a, s = [], o = 0, l = t.length, h = null != e; o < l; o++)(a = t[o]) && (n && !n(a, i, r) || (s.push(a), h && e.push(o)));
                return s
            }

            function y(t, e, n, r, a, s) {
                return r && !r[B] && (r = y(r)), a && !a[B] && (a = y(a, s)), i(function(i, s, o, l) {
                    var h, p, c, u = [],
                        m = [],
                        y = s.length,
                        v = i || d(e || "*", o.nodeType ? [o] : o, []),
                        g = !t || !i && e ? v : f(v, u, t, o, l),
                        b = n ? a || (i ? t : y || r) ? [] : s : g;
                    if (n && n(g, b, o, l), r)
                        for (h = f(b, m), r(h, [], o, l), p = h.length; p--;)(c = h[p]) && (b[m[p]] = !(g[m[p]] = c));
                    if (i) {
                        if (a || t) {
                            if (a) {
                                for (h = [], p = b.length; p--;)(c = b[p]) && h.push(g[p] = c);
                                a(null, b = [], h, l)
                            }
                            for (p = b.length; p--;)(c = b[p]) && (h = a ? Q(i, c) : u[p]) > -1 && (i[h] = !(s[h] = c))
                        }
                    } else b = f(b === s ? b.splice(y, b.length) : b), a ? a(null, s, b, l) : K.apply(s, b)
                })
            }

            function v(t) {
                for (var e, n, i, r = t.length, a = k.relative[t[0].type], s = a || k.relative[" "], o = a ? 1 : 0, l = u(function(t) {
                        return t === e
                    }, s, !0), h = u(function(t) {
                        return Q(e, t) > -1
                    }, s, !0), p = [function(t, n, i) {
                        var r = !a && (i || n !== C) || ((e = n).nodeType ? l(t, n, i) : h(t, n, i));
                        return e = null, r
                    }]; o < r; o++)
                    if (n = k.relative[t[o].type]) p = [u(m(p), n)];
                    else {
                        if (n = k.filter[t[o].type].apply(null, t[o].matches), n[B]) {
                            for (i = ++o; i < r && !k.relative[t[i].type]; i++);
                            return y(o > 1 && m(p), o > 1 && c(t.slice(0, o - 1).concat({
                                value: " " === t[o - 2].type ? "*" : ""
                            })).replace(at, "$1"), n, o < i && v(t.slice(o, i)), i < r && v(t = t.slice(i)), i < r && c(t))
                        }
                        p.push(n)
                    }
                return m(p)
            }

            function g(t, n) {
                var r = n.length > 0,
                    a = t.length > 0,
                    s = function(i, s, o, l, h) {
                        var p, c, u, m = 0,
                            d = "0",
                            y = i && [],
                            v = [],
                            g = C,
                            b = i || a && k.find.TAG("*", h),
                            x = O += null == g ? 1 : Math.random() || .1,
                            _ = b.length;
                        for (h && (C = s === M || s || h); d !== _ && null != (p = b[d]); d++) {
                            if (a && p) {
                                for (c = 0, s || p.ownerDocument === M || (A(p), o = !I); u = t[c++];)
                                    if (u(p, s || M, o)) {
                                        l.push(p);
                                        break
                                    }
                                h && (O = x)
                            }
                            r && ((p = !u && p) && m--, i && y.push(p))
                        }
                        if (m += d, r && d !== m) {
                            for (c = 0; u = n[c++];) u(y, v, s, o);
                            if (i) {
                                if (m > 0)
                                    for (; d--;) y[d] || v[d] || (v[d] = q.call(l));
                                v = f(v)
                            }
                            K.apply(l, v), h && !i && v.length > 0 && m + n.length > 1 && e.uniqueSort(l)
                        }
                        return h && (O = x, C = g), y
                    };
                return r ? i(s) : s
            }
            var b, x, k, _, E, w, S, P, C, D, T, A, M, F, I, z, V, N, L, B = "sizzle" + 1 * new Date,
                R = t.document,
                O = 0,
                j = 0,
                H = n(),
                $ = n(),
                Y = n(),
                G = function(t, e) {
                    return t === e && (T = !0), 0
                },
                X = {}.hasOwnProperty,
                W = [],
                q = W.pop,
                Z = W.push,
                K = W.push,
                U = W.slice,
                Q = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                rt = new RegExp(tt + "+", "g"),
                at = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                st = new RegExp("^" + tt + "*," + tt + "*"),
                ot = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ht = new RegExp(it),
                pt = new RegExp("^" + et + "$"),
                ct = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et + "|[*])"),
                    ATTR: new RegExp("^" + nt),
                    PSEUDO: new RegExp("^" + it),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                ut = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                dt = /^[^{]+\{\s*\[native \w/,
                ft = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                gt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                xt = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                kt = function() {
                    A()
                },
                _t = u(function(t) {
                    return !0 === t.disabled && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                K.apply(W = U.call(R.childNodes), R.childNodes), W[R.childNodes.length].nodeType
            } catch (t) {
                K = {
                    apply: W.length ? function(t, e) {
                        Z.apply(t, U.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, E = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, A = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : R;
                return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, F = M.documentElement, I = !E(M), R !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), x.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = r(function(t) {
                    return t.appendChild(M.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = dt.test(M.getElementsByClassName), x.getById = r(function(t) {
                    return F.appendChild(t).id = B, !M.getElementsByName || !M.getElementsByName(B).length
                }), x.getById ? (k.filter.ID = function(t) {
                    var e = t.replace(vt, gt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, k.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && I) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (k.filter.ID = function(t) {
                    var e = t.replace(vt, gt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, k.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && I) {
                        var n, i, r, a = e.getElementById(t);
                        if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === t) return [a];
                            for (r = e.getElementsByName(t), i = 0; a = r[i++];)
                                if ((n = a.getAttributeNode("id")) && n.value === t) return [a]
                        }
                        return []
                    }
                }), k.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        a = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }, k.find.CLASS = x.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && I) return e.getElementsByClassName(t)
                }, V = [], z = [], (x.qsa = dt.test(M.querySelectorAll)) && (r(function(t) {
                    F.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || z.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + B + "-]").length || z.push("~="), t.querySelectorAll(":checked").length || z.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || z.push(".#.+[+~]")
                }), r(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = M.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && z.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && z.push(":enabled", ":disabled"), F.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && z.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), z.push(",.*:")
                })), (x.matchesSelector = dt.test(N = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && r(function(t) {
                    x.disconnectedMatch = N.call(t, "*"), N.call(t, "[s!='']:x"), V.push("!=", it)
                }), z = z.length && new RegExp(z.join("|")), V = V.length && new RegExp(V.join("|")), e = dt.test(F.compareDocumentPosition), L = e || dt.test(F.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, G = e ? function(t, e) {
                    if (t === e) return T = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === M || t.ownerDocument === R && L(R, t) ? -1 : e === M || e.ownerDocument === R && L(R, e) ? 1 : D ? Q(D, t) - Q(D, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return T = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        a = e.parentNode,
                        o = [t],
                        l = [e];
                    if (!r || !a) return t === M ? -1 : e === M ? 1 : r ? -1 : a ? 1 : D ? Q(D, t) - Q(D, e) : 0;
                    if (r === a) return s(t, e);
                    for (n = t; n = n.parentNode;) o.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; o[i] === l[i];) i++;
                    return i ? s(o[i], l[i]) : o[i] === R ? -1 : l[i] === R ? 1 : 0
                }, M) : M
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== M && A(t), n = n.replace(lt, "='$1']"), x.matchesSelector && I && !Y[n + " "] && (!V || !V.test(n)) && (!z || !z.test(n))) try {
                    var i = N.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, M, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== M && A(t), L(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== M && A(t);
                var n = k.attrHandle[e.toLowerCase()],
                    i = n && X.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                return void 0 !== i ? i : x.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function(t) {
                return (t + "").replace(bt, xt)
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if (T = !x.detectDuplicates, D = !x.sortStable && t.slice(0), t.sort(G), T) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return D = null, t
            }, _ = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += _(e);
                return n
            }, k = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ct,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(vt, gt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, gt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ct.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = w(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(vt, gt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = H[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(r) {
                            var a = e.attr(r, t);
                            return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var a = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            o = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var h, p, c, u, m, d, f = a !== s ? "nextSibling" : "previousSibling",
                                y = e.parentNode,
                                v = o && e.nodeName.toLowerCase(),
                                g = !l && !o,
                                b = !1;
                            if (y) {
                                if (a) {
                                    for (; f;) {
                                        for (u = e; u = u[f];)
                                            if (o ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        d = f = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [s ? y.firstChild : y.lastChild], s && g) {
                                    for (u = y, c = u[B] || (u[B] = {}), p = c[u.uniqueID] || (c[u.uniqueID] = {}), h = p[t] || [], m = h[0] === O && h[1], b = m && h[2], u = m && y.childNodes[m]; u = ++m && u && u[f] || (b = m = 0) || d.pop();)
                                        if (1 === u.nodeType && ++b && u === e) {
                                            p[t] = [O, m, b];
                                            break
                                        }
                                } else if (g && (u = e, c = u[B] || (u[B] = {}), p = c[u.uniqueID] || (c[u.uniqueID] = {}), h = p[t] || [], m = h[0] === O && h[1], b = m), !1 === b)
                                    for (;
                                        (u = ++m && u && u[f] || (b = m = 0) || d.pop()) && ((o ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++b || (g && (c = u[B] || (u[B] = {}), p = c[u.uniqueID] || (c[u.uniqueID] = {}), p[t] = [O, b]), u !== e)););
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var r, a = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return a[B] ? a(n) : a.length > 1 ? (r = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, r = a(t, n), s = r.length; s--;) i = Q(t, r[s]), t[i] = !(e[i] = r[s])
                        }) : function(t) {
                            return a(t, 0, r)
                        }) : a
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            r = S(t.replace(at, "$1"));
                        return r[B] ? i(function(t, e, n, i) {
                            for (var a, s = r(t, null, i, []), o = t.length; o--;)(a = s[o]) && (t[o] = !(e[o] = a))
                        }) : function(t, i, a) {
                            return e[0] = t, r(e, null, a, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(vt, gt),
                            function(e) {
                                return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, gt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === F
                    },
                    focus: function(t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: o(!1),
                    disabled: o(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !k.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ut.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(t, e) {
                        return [e - 1]
                    }),
                    eq: l(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: l(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: l(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: l(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: l(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[b] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[b] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(b);
            return p.prototype = k.filters = k.pseudos, k.setFilters = new p, w = e.tokenize = function(t, n) {
                var i, r, a, s, o, l, h, p = $[t + " "];
                if (p) return n ? 0 : p.slice(0);
                for (o = t, l = [], h = k.preFilter; o;) {
                    i && !(r = st.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(a = [])), i = !1, (r = ot.exec(o)) && (i = r.shift(), a.push({
                        value: i,
                        type: r[0].replace(at, " ")
                    }), o = o.slice(i.length));
                    for (s in k.filter) !(r = ct[s].exec(o)) || h[s] && !(r = h[s](r)) || (i = r.shift(), a.push({
                        value: i,
                        type: s,
                        matches: r
                    }), o = o.slice(i.length));
                    if (!i) break
                }
                return n ? o.length : o ? e.error(t) : $(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var n, i = [],
                    r = [],
                    a = Y[t + " "];
                if (!a) {
                    for (e || (e = w(t)), n = e.length; n--;) a = v(e[n]), a[B] ? i.push(a) : r.push(a);
                    a = Y(t, g(r, i)), a.selector = t
                }
                return a
            }, P = e.select = function(t, e, n, i) {
                var r, a, s, o, l, p = "function" == typeof t && t,
                    u = !i && w(t = p.selector || t);
                if (n = n || [], 1 === u.length) {
                    if (a = u[0] = u[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && 9 === e.nodeType && I && k.relative[a[1].type]) {
                        if (!(e = (k.find.ID(s.matches[0].replace(vt, gt), e) || [])[0])) return n;
                        p && (e = e.parentNode), t = t.slice(a.shift().value.length)
                    }
                    for (r = ct.needsContext.test(t) ? 0 : a.length; r-- && (s = a[r], !k.relative[o = s.type]);)
                        if ((l = k.find[o]) && (i = l(s.matches[0].replace(vt, gt), yt.test(a[0].type) && h(e.parentNode) || e))) {
                            if (a.splice(r, 1), !(t = i.length && c(a))) return K.apply(n, i), n;
                            break
                        }
                }
                return (p || S(t, u))(i, e, !I, n, !e || yt.test(t) && h(e.parentNode) || e), n
            }, x.sortStable = B.split("").sort(G).join("") === B, x.detectDuplicates = !!T, A(), x.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(M.createElement("fieldset"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || a("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || a(J, function(t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ft.find = xt, ft.expr = xt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = xt.uniqueSort, ft.text = xt.getText, ft.isXMLDoc = xt.isXML, ft.contains = xt.contains, ft.escapeSelector = xt.escape;
        var kt = function(t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && ft(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            _t = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            Et = ft.expr.match.needsContext,
            wt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            St = /^.[^:#\[\.,]*$/;
        ft.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [i] : [] : ft.find.matches(t, ft.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ft.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    r = this;
                if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (ft.contains(r[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) ft.find(t, r[e], n);
                return i > 1 ? ft.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(a(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(a(this, t || [], !0))
            },
            is: function(t) {
                return !!a(this, "string" == typeof t && Et.test(t) ? ft(t) : t || [], !1).length
            }
        });
        var Pt, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (ft.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || Pt, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ct.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), wt.test(i[1]) && ft.isPlainObject(e))
                        for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = nt.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ft) : ft.makeArray(t, this)
        }).prototype = ft.fn, Pt = ft(nt);
        var Dt = /^(?:parents|prev(?:Until|All))/,
            Tt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ft.fn.extend({
            has: function(t) {
                var e = ft(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (ft.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    r = this.length,
                    a = [],
                    s = "string" != typeof t && ft(t);
                if (!Et.test(t))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                                a.push(n);
                                break
                            }
                return this.pushStack(a.length > 1 ? ft.uniqueSort(a) : a)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ot.call(ft(t), this[0]) : ot.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ft.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return kt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return kt(t, "parentNode", n)
            },
            next: function(t) {
                return s(t, "nextSibling")
            },
            prev: function(t) {
                return s(t, "previousSibling")
            },
            nextAll: function(t) {
                return kt(t, "nextSibling")
            },
            prevAll: function(t) {
                return kt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return kt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return kt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return _t((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return _t(t.firstChild)
            },
            contents: function(t) {
                return r(t, "iframe") ? t.contentDocument : (r(t, "template") && (t = t.content || t), ft.merge([], t.childNodes))
            }
        }, function(t, e) {
            ft.fn[t] = function(n, i) {
                var r = ft.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ft.filter(i, r)), this.length > 1 && (Tt[t] || ft.uniqueSort(r), Dt.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var At = /[^\x20\t\r\n\f]+/g;
        ft.Callbacks = function(t) {
            t = "string" == typeof t ? o(t) : ft.extend({}, t);
            var e, n, i, r, a = [],
                s = [],
                l = -1,
                h = function() {
                    for (r = r || t.once, i = e = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && t.stopOnFalse && (l = a.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (a = n ? [] : "")
                },
                p = {
                    add: function() {
                        return a && (n && !e && (l = a.length - 1, s.push(n)), function e(n) {
                            ft.each(n, function(n, i) {
                                ft.isFunction(i) ? t.unique && p.has(i) || a.push(i) : i && i.length && "string" !== ft.type(i) && e(i)
                            })
                        }(arguments), n && !e && h()), this
                    },
                    remove: function() {
                        return ft.each(arguments, function(t, e) {
                            for (var n;
                                (n = ft.inArray(e, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? ft.inArray(t, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return r = s = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return r = s = [], n || e || (a = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || h()), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return p
        }, ft.extend({
            Deferred: function(e) {
                var n = [
                        ["notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2],
                        ["resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return r.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return ft.Deferred(function(e) {
                                ft.each(n, function(n, i) {
                                    var r = ft.isFunction(t[i[4]]) && t[i[4]];
                                    a[i[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(e, i, r) {
                            function a(e, n, i, r) {
                                return function() {
                                    var o = this,
                                        p = arguments,
                                        c = function() {
                                            var t, c;
                                            if (!(e < s)) {
                                                if ((t = i.apply(o, p)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                c = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(c) ? r ? c.call(t, a(s, n, l, r), a(s, n, h, r)) : (s++, c.call(t, a(s, n, l, r), a(s, n, h, r), a(s, n, l, n.notifyWith))) : (i !== l && (o = void 0, p = [t]), (r || n.resolveWith)(o, p))
                                            }
                                        },
                                        u = r ? c : function() {
                                            try {
                                                c()
                                            } catch (t) {
                                                ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= s && (i !== h && (o = void 0, p = [t]), n.rejectWith(o, p))
                                            }
                                        };
                                    e ? u() : (ft.Deferred.getStackHook && (u.stackTrace = ft.Deferred.getStackHook()), t.setTimeout(u))
                                }
                            }
                            var s = 0;
                            return ft.Deferred(function(t) {
                                n[0][3].add(a(0, t, ft.isFunction(r) ? r : l, t.notifyWith)), n[1][3].add(a(0, t, ft.isFunction(e) ? e : l)), n[2][3].add(a(0, t, ft.isFunction(i) ? i : h))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ft.extend(t, r) : r
                        }
                    },
                    a = {};
                return ft.each(n, function(t, e) {
                    var s = e[2],
                        o = e[5];
                    r[e[1]] = s.add, o && s.add(function() {
                        i = o
                    }, n[3 - t][2].disable, n[0][2].lock), s.add(e[3].fire), a[e[0]] = function() {
                        return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[e[0] + "With"] = s.fireWith
                }), r.promise(a), e && e.call(a, a), a
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    r = rt.call(arguments),
                    a = ft.Deferred(),
                    s = function(t) {
                        return function(n) {
                            i[t] = this, r[t] = arguments.length > 1 ? rt.call(arguments) : n, --e || a.resolveWith(i, r)
                        }
                    };
                if (e <= 1 && (p(t, a.done(s(n)).resolve, a.reject, !e), "pending" === a.state() || ft.isFunction(r[n] && r[n].then))) return a.then();
                for (; n--;) p(r[n], s(n), a.reject);
                return a.promise()
            }
        });
        var Mt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        ft.Deferred.exceptionHook = function(e, n) {
            t.console && t.console.warn && e && Mt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
        }, ft.readyException = function(e) {
            t.setTimeout(function() {
                throw e
            })
        };
        var Ft = ft.Deferred();
        ft.fn.ready = function(t) {
            return Ft.then(t).catch(function(t) {
                ft.readyException(t)
            }), this
        }, ft.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, !0 !== t && --ft.readyWait > 0 || Ft.resolveWith(nt, [ft]))
            }
        }), ft.ready.then = Ft.then, "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll ? t.setTimeout(ft.ready) : (nt.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
        var It = function(t, e, n, i, r, a, s) {
                var o = 0,
                    l = t.length,
                    h = null == n;
                if ("object" === ft.type(n)) {
                    r = !0;
                    for (o in n) It(t, e, o, n[o], !0, a, s)
                } else if (void 0 !== i && (r = !0, ft.isFunction(i) || (s = !0), h && (s ? (e.call(t, i), e = null) : (h = e, e = function(t, e, n) {
                        return h.call(ft(t), n)
                    })), e))
                    for (; o < l; o++) e(t[o], n, s ? i : i.call(t[o], o, e(t[o], n)));
                return r ? t : h ? e.call(t) : l ? e(t[0], n) : a
            },
            zt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        u.uid = 1, u.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, zt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[ft.camelCase(e)] = n;
                else
                    for (i in e) r[ft.camelCase(i)] = e[i];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(ft.camelCase) : (e = ft.camelCase(e), e = e in i ? [e] : e.match(At) || []), n = e.length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || ft.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !ft.isEmptyObject(e)
            }
        };
        var Vt = new u,
            Nt = new u,
            Lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Bt = /[A-Z]/g;
        ft.extend({
            hasData: function(t) {
                return Nt.hasData(t) || Vt.hasData(t)
            },
            data: function(t, e, n) {
                return Nt.access(t, e, n)
            },
            removeData: function(t, e) {
                Nt.remove(t, e)
            },
            _data: function(t, e, n) {
                return Vt.access(t, e, n)
            },
            _removeData: function(t, e) {
                Vt.remove(t, e)
            }
        }), ft.fn.extend({
            data: function(t, e) {
                var n, i, r, a = this[0],
                    s = a && a.attributes;
                if (void 0 === t) {
                    if (this.length && (r = Nt.get(a), 1 === a.nodeType && !Vt.get(a, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ft.camelCase(i.slice(5)), d(a, i, r[i])));
                        Vt.set(a, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    Nt.set(this, t)
                }) : It(this, function(e) {
                    var n;
                    if (a && void 0 === e) {
                        if (void 0 !== (n = Nt.get(a, t))) return n;
                        if (void 0 !== (n = d(a, t))) return n
                    } else this.each(function() {
                        Nt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Nt.remove(this, t)
                })
            }
        }), ft.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Vt.get(t, e), n && (!i || Array.isArray(n) ? i = Vt.access(t, e, ft.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ft.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    a = ft._queueHooks(t, e),
                    s = function() {
                        ft.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete a.stop, r.call(t, s, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Vt.get(t, n) || Vt.access(t, n, {
                    empty: ft.Callbacks("once memory").add(function() {
                        Vt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), ft.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = ft.queue(this, t, e);
                    ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ft.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = ft.Deferred(),
                    a = this,
                    s = this.length,
                    o = function() {
                        --i || r.resolveWith(a, [a])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = Vt.get(a[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(o));
                return o(), r.promise(e)
            }
        });
        var Rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ot = new RegExp("^(?:([+-])=|)(" + Rt + ")([a-z%]*)$", "i"),
            jt = ["Top", "Right", "Bottom", "Left"],
            Ht = function(t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display")
            },
            $t = function(t, e, n, i) {
                var r, a, s = {};
                for (a in e) s[a] = t.style[a], t.style[a] = e[a];
                r = n.apply(t, i || []);
                for (a in e) t.style[a] = s[a];
                return r
            },
            Yt = {};
        ft.fn.extend({
            show: function() {
                return v(this, !0)
            },
            hide: function() {
                return v(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Ht(this) ? ft(this).show() : ft(this).hide()
                })
            }
        });
        var Gt = /^(?:checkbox|radio)$/i,
            Xt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Wt = /^$|\/(?:java|ecma)script/i,
            qt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        qt.optgroup = qt.option, qt.tbody = qt.tfoot = qt.colgroup = qt.caption = qt.thead, qt.th = qt.td;
        var Zt = /<|&#?\w+;/;
        ! function() {
            var t = nt.createDocumentFragment(),
                e = t.appendChild(nt.createElement("div")),
                n = nt.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), mt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", mt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Kt = nt.documentElement,
            Ut = /^key/,
            Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Jt = /^([^.]*)(?:\.(.+)|)/;
        ft.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var a, s, o, l, h, p, c, u, m, d, f, y = Vt.get(t);
                if (y)
                    for (n.handler && (a = n, n = a.handler, r = a.selector), r && ft.find.matchesSelector(Kt, r), n.guid || (n.guid = ft.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function(e) {
                            return void 0 !== ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(At) || [""], h = e.length; h--;) o = Jt.exec(e[h]) || [], m = f = o[1], d = (o[2] || "").split(".").sort(), m && (c = ft.event.special[m] || {}, m = (r ? c.delegateType : c.bindType) || m, c = ft.event.special[m] || {}, p = ft.extend({
                        type: m,
                        origType: f,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ft.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, a), (u = l[m]) || (u = l[m] = [], u.delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, d, s) || t.addEventListener && t.addEventListener(m, s)), c.add && (c.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), r ? u.splice(u.delegateCount++, 0, p) : u.push(p), ft.event.global[m] = !0)
            },
            remove: function(t, e, n, i, r) {
                var a, s, o, l, h, p, c, u, m, d, f, y = Vt.hasData(t) && Vt.get(t);
                if (y && (l = y.events)) {
                    for (e = (e || "").match(At) || [""], h = e.length; h--;)
                        if (o = Jt.exec(e[h]) || [], m = f = o[1], d = (o[2] || "").split(".").sort(), m) {
                            for (c = ft.event.special[m] || {}, m = (i ? c.delegateType : c.bindType) || m, u = l[m] || [], o = o[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = u.length; a--;) p = u[a], !r && f !== p.origType || n && n.guid !== p.guid || o && !o.test(p.namespace) || i && i !== p.selector && ("**" !== i || !p.selector) || (u.splice(a, 1), p.selector && u.delegateCount--, c.remove && c.remove.call(t, p));
                            s && !u.length && (c.teardown && !1 !== c.teardown.call(t, d, y.handle) || ft.removeEvent(t, m, y.handle), delete l[m])
                        } else
                            for (m in l) ft.event.remove(t, m + e[h], n, i, !0);
                    ft.isEmptyObject(l) && Vt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, r, a, s, o = ft.event.fix(t),
                    l = new Array(arguments.length),
                    h = (Vt.get(this, "events") || {})[o.type] || [],
                    p = ft.event.special[o.type] || {};
                for (l[0] = o, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (o.delegateTarget = this, !p.preDispatch || !1 !== p.preDispatch.call(this, o)) {
                    for (s = ft.event.handlers.call(this, o, h), e = 0;
                        (r = s[e++]) && !o.isPropagationStopped();)
                        for (o.currentTarget = r.elem, n = 0;
                            (a = r.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (i = ((ft.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), o.stopPropagation()));
                    return p.postDispatch && p.postDispatch.call(this, o), o.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, a, s, o = [],
                    l = e.delegateCount,
                    h = t.target;
                if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                    for (; h !== this; h = h.parentNode || this)
                        if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                            for (a = [], s = {}, n = 0; n < l; n++) i = e[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? ft(r, this).index(h) > -1 : ft.find(r, this, null, [h]).length), s[r] && a.push(i);
                            a.length && o.push({
                                elem: h,
                                handlers: a
                            })
                        }
                return h = this, l < e.length && o.push({
                    elem: h,
                    handlers: e.slice(l)
                }), o
            },
            addProp: function(t, e) {
                Object.defineProperty(ft.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: ft.isFunction(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[ft.expando] ? t : new ft.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== E() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === E() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return r(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, ft.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, ft.Event = function(t, e) {
            return this instanceof ft.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? k : _, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), void(this[ft.expando] = !0)) : new ft.Event(t, e)
        }, ft.Event.prototype = {
            constructor: ft.Event,
            isDefaultPrevented: _,
            isPropagationStopped: _,
            isImmediatePropagationStopped: _,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = k, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = k, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = k, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ft.each({
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
            which: function(t) {
                var e = t.button;
                return null == t.which && Ut.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Qt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, ft.event.addProp), ft.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            ft.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        a = t.handleObj;
                    return r && (r === i || ft.contains(i, r)) || (t.type = a.origType, n = a.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ft.fn.extend({
            on: function(t, e, n, i) {
                return w(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return w(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = _), this.each(function() {
                    ft.event.remove(this, t, n, e)
                })
            }
        });
        var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ee = /<script|<style|<link/i,
            ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ie = /^true\/(.*)/,
            re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        ft.extend({
            htmlPrefilter: function(t) {
                return t.replace(te, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, r, a, s, o = t.cloneNode(!0),
                    l = ft.contains(t.ownerDocument, t);
                if (!(mt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t)))
                    for (s = g(o), a = g(t), i = 0, r = a.length; i < r; i++) T(a[i], s[i]);
                if (e)
                    if (n)
                        for (a = a || g(t), s = s || g(o), i = 0, r = a.length; i < r; i++) D(a[i], s[i]);
                    else D(t, o);
                return s = g(o, "script"), s.length > 0 && b(s, !l && g(t, "script")), o
            },
            cleanData: function(t) {
                for (var e, n, i, r = ft.event.special, a = 0; void 0 !== (n = t[a]); a++)
                    if (zt(n)) {
                        if (e = n[Vt.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, e.handle);
                            n[Vt.expando] = void 0
                        }
                        n[Nt.expando] && (n[Nt.expando] = void 0)
                    }
            }
        }), ft.fn.extend({
            detach: function(t) {
                return M(this, t, !0)
            },
            remove: function(t) {
                return M(this, t)
            },
            text: function(t) {
                return It(this, function(t) {
                    return void 0 === t ? ft.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return A(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        S(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return A(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = S(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return A(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return A(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(g(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ft.clone(this, t, e)
                })
            },
            html: function(t) {
                return It(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ee.test(t) && !qt[(Xt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = ft.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (ft.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return A(this, arguments, function(e) {
                    var n = this.parentNode;
                    ft.inArray(this, t) < 0 && (ft.cleanData(g(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), ft.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ft.fn[t] = function(t) {
                for (var n, i = [], r = ft(t), a = r.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), ft(r[s])[e](n), st.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ae = /^margin/,
            se = new RegExp("^(" + Rt + ")(?!px)[a-z%]+$", "i"),
            oe = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            };
        ! function() {
            function e() {
                if (o) {
                    o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Kt.appendChild(s);
                    var e = t.getComputedStyle(o);
                    n = "1%" !== e.top, a = "2px" === e.marginLeft, i = "4px" === e.width, o.style.marginRight = "50%", r = "4px" === e.marginRight, Kt.removeChild(s), o = null
                }
            }
            var n, i, r, a, s = nt.createElement("div"),
                o = nt.createElement("div");
            o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", mt.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), ft.extend(mt, {
                pixelPosition: function() {
                    return e(), n
                },
                boxSizingReliable: function() {
                    return e(), i
                },
                pixelMarginRight: function() {
                    return e(), r
                },
                reliableMarginLeft: function() {
                    return e(), a
                }
            }))
        }();
        var le = /^(none|table(?!-c[ea]).+)/,
            he = /^--/,
            pe = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ce = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ue = ["Webkit", "Moz", "ms"],
            me = nt.createElement("div").style;
        ft.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = F(t, "opacity");
                            return "" === n ? "1" : n
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
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, a, s, o = ft.camelCase(e),
                        l = he.test(e),
                        h = t.style;
                    return l || (e = V(o)), s = ft.cssHooks[e] || ft.cssHooks[o], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : h[e] : (a = typeof n, "string" === a && (r = Ot.exec(n)) && r[1] && (n = f(t, e, r), a = "number"), void(null != n && n === n && ("number" === a && (n += r && r[3] || (ft.cssNumber[o] ? "" : "px")), mt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (h[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? h.setProperty(e, n) : h[e] = n))))
                }
            },
            css: function(t, e, n, i) {
                var r, a, s, o = ft.camelCase(e);
                return he.test(e) || (e = V(o)), s = ft.cssHooks[e] || ft.cssHooks[o], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = F(t, e, i)), "normal" === r && e in ce && (r = ce[e]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
            }
        }), ft.each(["height", "width"], function(t, e) {
            ft.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return !le.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? B(t, e, i) : $t(t, pe, function() {
                        return B(t, e, i)
                    })
                },
                set: function(t, n, i) {
                    var r, a = i && oe(t),
                        s = i && L(t, e, i, "border-box" === ft.css(t, "boxSizing", !1, a), a);
                    return s && (r = Ot.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ft.css(t, e)), N(t, n, s)
                }
            }
        }), ft.cssHooks.marginLeft = I(mt.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(F(t, "marginLeft")) || t.getBoundingClientRect().left - $t(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), ft.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ft.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + jt[i] + e] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, ae.test(t) || (ft.cssHooks[t + e].set = N)
        }), ft.fn.extend({
            css: function(t, e) {
                return It(this, function(t, e, n) {
                    var i, r, a = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (i = oe(t), r = e.length; s < r; s++) a[e[s]] = ft.css(t, e[s], !1, i);
                        return a
                    }
                    return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), ft.Tween = R, R.prototype = {
            constructor: R,
            init: function(t, e, n, i, r, a) {
                this.elem = t, this.prop = n, this.easing = r || ft.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = a || (ft.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = R.propHooks[this.prop];
                return t && t.get ? t.get(this) : R.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = R.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ft.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, ft.fx = R.prototype.init, ft.fx.step = {};
        var de, fe, ye = /^(?:toggle|show|hide)$/,
            ve = /queueHooks$/;
        ft.Animation = ft.extend(X, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return f(n.elem, t, Ot.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    ft.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(At);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(e)
                },
                prefilters: [Y],
                prefilter: function(t, e) {
                    e ? X.prefilters.unshift(t) : X.prefilters.push(t)
                }
            }), ft.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? ft.extend({}, t) : {
                    complete: n || !n && e || ft.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !ft.isFunction(e) && e
                };
                return ft.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ft.fx.speeds ? i.duration = ft.fx.speeds[i.duration] : i.duration = ft.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue)
                }, i
            }, ft.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Ht).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var r = ft.isEmptyObject(t),
                        a = ft.speed(e, n, i),
                        s = function() {
                            var e = X(this, ft.extend({}, t), a);
                            (r || Vt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            a = ft.timers,
                            s = Vt.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && ve.test(r) && i(s[r]);
                        for (r = a.length; r--;) a[r].elem !== this || null != t && a[r].queue !== t || (a[r].anim.stop(n), e = !1, a.splice(r, 1));
                        !e && n || ft.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = Vt.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            a = ft.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, ft.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), ft.each(["toggle", "show", "hide"], function(t, e) {
                var n = ft.fn[e];
                ft.fn[e] = function(t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(H(e, !0), t, i, r)
                }
            }), ft.each({
                slideDown: H("show"),
                slideUp: H("hide"),
                slideToggle: H("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                ft.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), ft.timers = [], ft.fx.tick = function() {
                var t, e = 0,
                    n = ft.timers;
                for (de = ft.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || ft.fx.stop(), de = void 0
            }, ft.fx.timer = function(t) {
                ft.timers.push(t), ft.fx.start()
            }, ft.fx.interval = 13, ft.fx.start = function() {
                fe || (fe = !0, O())
            }, ft.fx.stop = function() {
                fe = null
            }, ft.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ft.fn.delay = function(e, n) {
                return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                    var r = t.setTimeout(n, e);
                    i.stop = function() {
                        t.clearTimeout(r)
                    }
                })
            },
            function() {
                var t = nt.createElement("input"),
                    e = nt.createElement("select"),
                    n = e.appendChild(nt.createElement("option"));
                t.type = "checkbox", mt.checkOn = "" !== t.value, mt.optSelected = n.selected, t = nt.createElement("input"), t.value = "t", t.type = "radio", mt.radioValue = "t" === t.value
            }();
        var ge, be = ft.expr.attrHandle;
        ft.fn.extend({
            attr: function(t, e) {
                return It(this, ft.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ft.removeAttr(this, t)
                })
            }
        }), ft.extend({
            attr: function(t, e, n) {
                var i, r, a = t.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return void 0 === t.getAttribute ? ft.prop(t, e, n) : (1 === a && ft.isXMLDoc(t) || (r = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? ge : void 0)), void 0 !== n ? null === n ? void ft.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ft.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!mt.radioValue && "radio" === e && r(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0,
                    r = e && e.match(At);
                if (r && 1 === t.nodeType)
                    for (; n = r[i++];) t.removeAttribute(n)
            }
        }), ge = {
            set: function(t, e, n) {
                return !1 === e ? ft.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = be[e] || ft.find.attr;
            be[e] = function(t, e, i) {
                var r, a, s = e.toLowerCase();
                return i || (a = be[s], be[s] = r, r = null != n(t, e, i) ? s : null, be[s] = a), r
            }
        });
        var xe = /^(?:input|select|textarea|button)$/i,
            ke = /^(?:a|area)$/i;
        ft.fn.extend({
            prop: function(t, e) {
                return It(this, ft.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[ft.propFix[t] || t]
                })
            }
        }), ft.extend({
            prop: function(t, e, n) {
                var i, r, a = t.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, r = ft.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ft.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : xe.test(t.nodeName) || ke.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), mt.optSelected || (ft.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ft.propFix[this.toLowerCase()] = this
        }), ft.fn.extend({
            addClass: function(t) {
                var e, n, i, r, a, s, o, l = 0;
                if (ft.isFunction(t)) return this.each(function(e) {
                    ft(this).addClass(t.call(this, e, q(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(At) || []; n = this[l++];)
                        if (r = q(n), i = 1 === n.nodeType && " " + W(r) + " ") {
                            for (s = 0; a = e[s++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            o = W(i), r !== o && n.setAttribute("class", o)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, a, s, o, l = 0;
                if (ft.isFunction(t)) return this.each(function(e) {
                    ft(this).removeClass(t.call(this, e, q(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(At) || []; n = this[l++];)
                        if (r = q(n), i = 1 === n.nodeType && " " + W(r) + " ") {
                            for (s = 0; a = e[s++];)
                                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                            o = W(i), r !== o && n.setAttribute("class", o)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                    ft(this).toggleClass(t.call(this, n, q(this), e), e)
                }) : this.each(function() {
                    var e, i, r, a;
                    if ("string" === n)
                        for (i = 0, r = ft(this), a = t.match(At) || []; e = a[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = q(this), e && Vt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Vt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + W(q(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var _e = /\r/g;
        ft.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = ft.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, ft(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = ft.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = ft.valHooks[r.type] || ft.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(_e, "") : null == n ? "" : n)) : void 0
            }
        }), ft.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ft.find.attr(t, "value");
                        return null != e ? e : W(ft.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, a = t.options,
                            s = t.selectedIndex,
                            o = "select-one" === t.type,
                            l = o ? null : [],
                            h = o ? s + 1 : a.length;
                        for (i = s < 0 ? h : o ? s : 0; i < h; i++)
                            if (n = a[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                                if (e = ft(n).val(), o) return e;
                                l.push(e)
                            }
                        return l
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, a = ft.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = ft.inArray(ft.valHooks.option.get(i), a) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), a
                    }
                }
            }
        }), ft.each(["radio", "checkbox"], function() {
            ft.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = ft.inArray(ft(t).val(), e) > -1
                }
            }, mt.checkOn || (ft.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Ee = /^(?:focusinfocus|focusoutblur)$/;
        ft.extend(ft.event, {
            trigger: function(e, n, i, r) {
                var a, s, o, l, h, p, c, u = [i || nt],
                    m = pt.call(e, "type") ? e.type : e,
                    d = pt.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = o = i = i || nt, 3 !== i.nodeType && 8 !== i.nodeType && !Ee.test(m + ft.event.triggered) && (m.indexOf(".") > -1 && (d = m.split("."), m = d.shift(), d.sort()), h = m.indexOf(":") < 0 && "on" + m, e = e[ft.expando] ? e : new ft.Event(m, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ft.makeArray(n, [e]), c = ft.event.special[m] || {}, r || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                    if (!r && !c.noBubble && !ft.isWindow(i)) {
                        for (l = c.delegateType || m, Ee.test(l + m) || (s = s.parentNode); s; s = s.parentNode) u.push(s), o = s;
                        o === (i.ownerDocument || nt) && u.push(o.defaultView || o.parentWindow || t)
                    }
                    for (a = 0;
                        (s = u[a++]) && !e.isPropagationStopped();) e.type = a > 1 ? l : c.bindType || m, p = (Vt.get(s, "events") || {})[e.type] && Vt.get(s, "handle"), p && p.apply(s, n), (p = h && s[h]) && p.apply && zt(s) && (e.result = p.apply(s, n), !1 === e.result && e.preventDefault());
                    return e.type = m, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), n) || !zt(i) || h && ft.isFunction(i[m]) && !ft.isWindow(i) && (o = i[h], o && (i[h] = null), ft.event.triggered = m, i[m](), ft.event.triggered = void 0, o && (i[h] = o)), e.result
                }
            },
            simulate: function(t, e, n) {
                var i = ft.extend(new ft.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                ft.event.trigger(i, null, e)
            }
        }), ft.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    ft.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return ft.event.trigger(t, e, n, !0)
            }
        }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            ft.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ft.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), mt.focusin = "onfocusin" in t, mt.focusin || ft.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                ft.event.simulate(e, t.target, ft.event.fix(t))
            };
            ft.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = Vt.access(i, e);
                    r || i.addEventListener(t, n, !0), Vt.access(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = Vt.access(i, e) - 1;
                    r ? Vt.access(i, e, r) : (i.removeEventListener(t, n, !0), Vt.remove(i, e))
                }
            }
        });
        var we = t.location,
            Se = ft.now(),
            Pe = /\?/;
        ft.parseXML = function(e) {
            var n;
            if (!e || "string" != typeof e) return null;
            try {
                n = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), n
        };
        var Ce = /\[\]$/,
            De = /\r?\n/g,
            Te = /^(?:submit|button|image|reset|file)$/i,
            Ae = /^(?:input|select|textarea|keygen)/i;
        ft.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    var n = ft.isFunction(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (n in t) Z(n, t[n], e, r);
            return i.join("&")
        }, ft.fn.extend({
            serialize: function() {
                return ft.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ft.prop(this, "elements");
                    return t ? ft.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ft(this).is(":disabled") && Ae.test(this.nodeName) && !Te.test(t) && (this.checked || !Gt.test(t))
                }).map(function(t, e) {
                    var n = ft(this).val();
                    return null == n ? null : Array.isArray(n) ? ft.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(De, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(De, "\r\n")
                    }
                }).get()
            }
        });
        var Me = /%20/g,
            Fe = /#.*$/,
            Ie = /([?&])_=[^&]*/,
            ze = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ve = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ne = /^(?:GET|HEAD)$/,
            Le = /^\/\//,
            Be = {},
            Re = {},
            Oe = "*/".concat("*"),
            je = nt.createElement("a");
        je.href = we.href, ft.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: we.href,
                type: "GET",
                isLocal: Ve.test(we.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Oe,
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
                    "text xml": ft.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Q(Q(t, ft.ajaxSettings), e) : Q(ft.ajaxSettings, t)
            },
            ajaxPrefilter: K(Be),
            ajaxTransport: K(Re),
            ajax: function(e, n) {
                function i(e, n, i, o) {
                    var h, u, m, x, k, _ = n;
                    p || (p = !0, l && t.clearTimeout(l), r = void 0, s = o || "", E.readyState = e > 0 ? 4 : 0, h = e >= 200 && e < 300 || 304 === e, i && (x = J(d, E, i)), x = tt(d, x, E, h), h ? (d.ifModified && (k = E.getResponseHeader("Last-Modified"), k && (ft.lastModified[a] = k), (k = E.getResponseHeader("etag")) && (ft.etag[a] = k)), 204 === e || "HEAD" === d.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, u = x.data, m = x.error, h = !m)) : (m = _, !e && _ || (_ = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || _) + "", h ? v.resolveWith(f, [u, _, E]) : v.rejectWith(f, [E, _, m]), E.statusCode(b), b = void 0, c && y.trigger(h ? "ajaxSuccess" : "ajaxError", [E, d, h ? u : m]), g.fireWith(f, [E, _]), c && (y.trigger("ajaxComplete", [E, d]), --ft.active || ft.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var r, a, s, o, l, h, p, c, u, m, d = ft.ajaxSetup({}, n),
                    f = d.context || d,
                    y = d.context && (f.nodeType || f.jquery) ? ft(f) : ft.event,
                    v = ft.Deferred(),
                    g = ft.Callbacks("once memory"),
                    b = d.statusCode || {},
                    x = {},
                    k = {},
                    _ = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (p) {
                                if (!o)
                                    for (o = {}; e = ze.exec(s);) o[e[1].toLowerCase()] = e[2];
                                e = o[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return p ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == p && (t = k[t.toLowerCase()] = k[t.toLowerCase()] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == p && (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (p) E.always(t[E.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || _;
                            return r && r.abort(e), i(0, e), this
                        }
                    };
                if (v.promise(E), d.url = ((e || d.url || we.href) + "").replace(Le, we.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(At) || [""], null == d.crossDomain) {
                    h = nt.createElement("a");
                    try {
                        h.href = d.url, h.href = h.href, d.crossDomain = je.protocol + "//" + je.host != h.protocol + "//" + h.host
                    } catch (t) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = ft.param(d.data, d.traditional)), U(Be, d, n, E), p) return E;
                c = ft.event && d.global, c && 0 == ft.active++ && ft.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ne.test(d.type), a = d.url.replace(Fe, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Me, "+")) : (m = d.url.slice(a.length), d.data && (a += (Pe.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (a = a.replace(Ie, "$1"), m = (Pe.test(a) ? "&" : "?") + "_=" + Se++ +m), d.url = a + m), d.ifModified && (ft.lastModified[a] && E.setRequestHeader("If-Modified-Since", ft.lastModified[a]), ft.etag[a] && E.setRequestHeader("If-None-Match", ft.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && E.setRequestHeader("Content-Type", d.contentType), E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers) E.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (!1 === d.beforeSend.call(f, E, d) || p)) return E.abort();
                if (_ = "abort", g.add(d.complete), E.done(d.success), E.fail(d.error), r = U(Re, d, n, E)) {
                    if (E.readyState = 1, c && y.trigger("ajaxSend", [E, d]), p) return E;
                    d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                        E.abort("timeout")
                    }, d.timeout));
                    try {
                        p = !1, r.send(x, i)
                    } catch (t) {
                        if (p) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return E
            },
            getJSON: function(t, e, n) {
                return ft.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return ft.get(t, void 0, e, "script")
            }
        }), ft.each(["get", "post"], function(t, e) {
            ft[e] = function(t, n, i, r) {
                return ft.isFunction(n) && (r = r || i, i = n, n = void 0), ft.ajax(ft.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, ft.isPlainObject(t) && t))
            }
        }), ft._evalUrl = function(t) {
            return ft.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, ft.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return ft.isFunction(t) ? this.each(function(e) {
                    ft(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ft(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ft.isFunction(t);
                return this.each(function(n) {
                    ft(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    ft(this).replaceWith(this.childNodes)
                }), this
            }
        }), ft.expr.pseudos.hidden = function(t) {
            return !ft.expr.pseudos.visible(t)
        }, ft.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, ft.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var He = {
                0: 200,
                1223: 204
            },
            $e = ft.ajaxSettings.xhr();
        mt.cors = !!$e && "withCredentials" in $e, mt.ajax = $e = !!$e, ft.ajaxTransport(function(e) {
            var n, i;
            if (mt.cors || $e && !e.crossDomain) return {
                send: function(r, a) {
                    var s, o = e.xhr();
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) o[s] = e.xhrFields[s];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) o.setRequestHeader(s, r[s]);
                    n = function(t) {
                        return function() {
                            n && (n = i = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === t ? o.abort() : "error" === t ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(He[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                binary: o.response
                            } : {
                                text: o.responseText
                            }, o.getAllResponseHeaders()))
                        }
                    }, o.onload = n(), i = o.onerror = n("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function() {
                        4 === o.readyState && t.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (n) throw t
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), ft.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), ft.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return ft.globalEval(t), t
                }
            }
        }), ft.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), ft.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, r) {
                        e = ft("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), nt.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ye = [],
            Ge = /(=)\?(?=&|$)|\?\?/;
        ft.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ye.pop() || ft.expando + "_" + Se++;
                return this[t] = !0, t
            }
        }), ft.ajaxPrefilter("json jsonp", function(e, n, i) {
            var r, a, s, o = !1 !== e.jsonp && (Ge.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ge.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Ge, "$1" + r) : !1 !== e.jsonp && (e.url += (Pe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || ft.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", a = t[r], t[r] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === a ? ft(t).removeProp(r) : t[r] = a, e[r] && (e.jsonpCallback = n.jsonpCallback, Ye.push(r)), s && ft.isFunction(a) && a(s[0]), s = a = void 0
            }), "script"
        }), mt.createHTMLDocument = function() {
            var t = nt.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), ft.parseHTML = function(t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, r, a;
            return e || (mt.createHTMLDocument ? (e = nt.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = nt.location.href, e.head.appendChild(i)) : e = nt), r = wt.exec(t), a = !n && [], r ? [e.createElement(r[1])] : (r = x([t], e, a), a && a.length && ft(a).remove(), ft.merge([], r.childNodes))
        }, ft.fn.load = function(t, e, n) {
            var i, r, a, s = this,
                o = t.indexOf(" ");
            return o > -1 && (i = W(t.slice(o)), t = t.slice(0, o)), ft.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ft.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                a = arguments, s.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(this, a || [t.responseText, e, t])
                })
            }), this
        }, ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ft.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ft.expr.pseudos.animated = function(t) {
            return ft.grep(ft.timers, function(e) {
                return t === e.elem
            }).length
        }, ft.offset = {
            setOffset: function(t, e, n) {
                var i, r, a, s, o, l, h, p = ft.css(t, "position"),
                    c = ft(t),
                    u = {};
                "static" === p && (t.style.position = "relative"), o = c.offset(), a = ft.css(t, "top"), l = ft.css(t, "left"), h = ("absolute" === p || "fixed" === p) && (a + l).indexOf("auto") > -1, h ? (i = c.position(), s = i.top, r = i.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, o))), null != e.top && (u.top = e.top - o.top + s), null != e.left && (u.left = e.left - o.left + r), "using" in e ? e.using.call(t, u) : c.css(u)
            }
        }, ft.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    ft.offset.setOffset(this, t, e)
                });
                var e, n, i, r, a = this[0];
                return a ? a.getClientRects().length ? (i = a.getBoundingClientRect(), e = a.ownerDocument, n = e.documentElement, r = e.defaultView, {
                    top: i.top + r.pageYOffset - n.clientTop,
                    left: i.left + r.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === ft.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), r(t[0], "html") || (i = t.offset()), i = {
                        top: i.top + ft.css(t[0], "borderTopWidth", !0),
                        left: i.left + ft.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - i.top - ft.css(n, "marginTop", !0),
                        left: e.left - i.left - ft.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === ft.css(t, "position");) t = t.offsetParent;
                    return t || Kt
                })
            }
        }), ft.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            ft.fn[t] = function(i) {
                return It(this, function(t, i, r) {
                    var a;
                    return ft.isWindow(t) ? a = t : 9 === t.nodeType && (a = t.defaultView), void 0 === r ? a ? a[e] : t[i] : void(a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : t[i] = r)
                }, t, i, arguments.length)
            }
        }), ft.each(["top", "left"], function(t, e) {
            ft.cssHooks[e] = I(mt.pixelPosition, function(t, n) {
                if (n) return n = F(t, e), se.test(n) ? ft(t).position()[e] + "px" : n
            })
        }), ft.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            ft.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                ft.fn[i] = function(r, a) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        o = n || (!0 === r || !0 === a ? "margin" : "border");
                    return It(this, function(e, n, r) {
                        var a;
                        return ft.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement, Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === r ? ft.css(e, n, o) : ft.style(e, n, r, o)
                    }, e, s ? r : void 0, s)
                }
            })
        }), ft.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), ft.holdReady = function(t) {
            t ? ft.readyWait++ : ft.ready(!0)
        }, ft.isArray = Array.isArray, ft.parseJSON = JSON.parse, ft.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ft
        });
        var Xe = t.jQuery,
            We = t.$;
        return ft.noConflict = function(e) {
            return t.$ === ft && (t.$ = We), e && t.jQuery === ft && (t.jQuery = Xe), ft
        }, e || (t.jQuery = t.$ = ft), ft
    }),
    function(t) {
        "use strict";
        var e = function(e, n, i, r) {
            this.target = e, this.url = n, this.html = [], this.effectQueue = [], this.options = t.extend({
                ssl: !1,
                host: "www.feedrapp.info",
                limit: null,
                key: null,
                layoutTemplate: "<ul>{entries}</ul>",
                entryTemplate: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>',
                tokens: {},
                outputMode: "json",
                dateFormat: "dddd MMM Do",
                dateLocale: "en",
                effect: "show",
                offsetStart: !1,
                offsetEnd: !1,
                error: function() {
                    console.log("jQuery RSS: url doesn't link to RSS-Feed")
                },
                onData: function() {},
                success: function() {}
            }, i || {}), this.callback = r || this.options.success
        };
        e.htmlTags = ["doctype", "html", "head", "title", "base", "link", "meta", "style", "script", "noscript", "body", "article", "nav", "aside", "section", "header", "footer", "h1-h6", "hgroup", "address", "p", "hr", "pre", "blockquote", "ol", "ul", "li", "dl", "dt", "dd", "figure", "figcaption", "div", "table", "caption", "thead", "tbody", "tfoot", "tr", "th", "td", "col", "colgroup", "form", "fieldset", "legend", "label", "input", "button", "select", "datalist", "optgroup", "option", "textarea", "keygen", "output", "progress", "meter", "details", "summary", "command", "menu", "del", "ins", "img", "iframe", "embed", "object", "param", "video", "audio", "source", "canvas", "track", "map", "area", "a", "em", "strong", "i", "b", "u", "s", "small", "abbr", "q", "cite", "dfn", "sub", "sup", "time", "code", "kbd", "samp", "var", "mark", "bdi", "bdo", "ruby", "rt", "rp", "span", "br", "wbr"], e.prototype.load = function(e) {
            var n = "http" + (this.options.ssl ? "s" : ""),
                i = n + "://" + this.options.host,
                r = i + "?callback=?&q=" + encodeURIComponent(this.url);
            this.options.offsetStart && this.options.offsetEnd && (this.options.limit = this.options.offsetEnd), null !== this.options.limit && (r += "&num=" + this.options.limit), null !== this.options.key && (r += "&key=" + this.options.key), t.getJSON(r, e)
        }, e.prototype.render = function() {
            var e = this;
            this.load(function(n) {
                try {
                    e.feed = n.responseData.feed, e.entries = n.responseData.feed.entries
                } catch (t) {
                    return e.entries = [], e.feed = null, e.options.error.call(e)
                }
                var i = e.generateHTMLForEntries();
                if (e.target.append(i.layout), 0 !== i.entries.length) {
                    t.isFunction(e.options.onData) && e.options.onData.call(e);
                    var r = t(i.layout).is("entries") ? i.layout : t("entries", i.layout);
                    e.appendEntriesAndApplyEffects(r, i.entries)
                }
                e.effectQueue.length > 0 ? e.executeEffectQueue(e.callback) : t.isFunction(e.callback) && e.callback.call(e)
            })
        }, e.prototype.appendEntriesAndApplyEffects = function(e, n) {
            var i = this;
            t.each(n, function(t, n) {
                var r = i.wrapContent(n);
                "show" === i.options.effect ? e.before(r) : (r.css({
                    display: "none"
                }), e.before(r), i.applyEffect(r, i.options.effect))
            }), e.remove()
        }, e.prototype.generateHTMLForEntries = function() {
            var e = this,
                n = {
                    entries: [],
                    layout: null
                };
            return t(this.entries).each(function() {
                var t, i = this,
                    r = e.options.offsetStart,
                    a = e.options.offsetEnd;
                r && a ? index >= r && index <= a && e.isRelevant(i, n.entries) && (t = e.evaluateStringForEntry(e.options.entryTemplate, i), n.entries.push(t)) : e.isRelevant(i, n.entries) && (t = e.evaluateStringForEntry(e.options.entryTemplate, i), n.entries.push(t))
            }), this.options.entryTemplate ? n.layout = this.wrapContent(this.options.layoutTemplate.replace("{entries}", "<entries></entries>")) : n.layout = this.wrapContent("<div><entries></entries></div>"), n
        }, e.prototype.wrapContent = function(e) {
            return t(0 !== t.trim(e).indexOf("<") ? "<div>" + e + "</div>" : e)
        }, e.prototype.applyEffect = function(t, e, n) {
            var i = this;
            switch (e) {
                case "slide":
                    t.slideDown("slow", n);
                    break;
                case "slideFast":
                    t.slideDown(n);
                    break;
                case "slideSynced":
                    i.effectQueue.push({
                        element: t,
                        effect: "slide"
                    });
                    break;
                case "slideFastSynced":
                    i.effectQueue.push({
                        element: t,
                        effect: "slideFast"
                    })
            }
        }, e.prototype.executeEffectQueue = function(t) {
            var e = this;
            this.effectQueue.reverse();
            var n = function() {
                var i = e.effectQueue.pop();
                i ? e.applyEffect(i.element, i.effect, n) : t && t()
            };
            n()
        }, e.prototype.evaluateStringForEntry = function(e, n) {
            var i = e,
                r = this;
            return t(e.match(/(\{.*?\})/g)).each(function() {
                var t = this.toString();
                i = i.replace(t, r.getValueForToken(t, n))
            }), i
        }, e.prototype.isRelevant = function(t, e) {
            var n = this.getTokenMap(t);
            return !this.options.filter || (!this.options.filterLimit || this.options.filterLimit !== e.length) && this.options.filter(t, n)
        }, e.prototype.getFormattedDate = function(t) {
            if (this.options.dateFormatFunction) return this.options.dateFormatFunction(t);
            if ("undefined" != typeof moment) {
                var e = moment(new Date(t));
                return e = e.locale ? e.locale(this.options.dateLocale) : e.lang(this.options.dateLocale), e.format(this.options.dateFormat)
            }
            return t
        }, e.prototype.getTokenMap = function(n) {
            if (!this.feedTokens) {
                var i = JSON.parse(JSON.stringify(this.feed));
                delete i.entries, this.feedTokens = i
            }
            return t.extend({
                feed: this.feedTokens,
                url: n.link,
                author: n.author,
                date: this.getFormattedDate(n.publishedDate),
                title: n.title,
                body: n.content,
                shortBody: n.contentSnippet,
                bodyPlain: function(t) {
                    for (var n = t.content.replace(/<script[\\r\\\s\S]*<\/script>/gim, "").replace(/<\/?[^>]+>/gi, ""), i = 0; i < e.htmlTags.length; i++) n = n.replace(new RegExp("<" + e.htmlTags[i], "gi"), "");
                    return n
                }(n),
                shortBodyPlain: n.contentSnippet.replace(/<\/?[^>]+>/gi, ""),
                index: t.inArray(n, this.entries),
                totalEntries: this.entries.length,
                teaserImage: function(t) {
                    try {
                        return t.content.match(/(<img.*?>)/gi)[0]
                    } catch (t) {
                        return ""
                    }
                }(n),
                teaserImageUrl: function(t) {
                    try {
                        return t.content.match(/(<img.*?>)/gi)[0].match(/src="(.*?)"/)[1]
                    } catch (t) {
                        return ""
                    }
                }(n)
            }, this.options.tokens)
        }, e.prototype.getValueForToken = function(t, e) {
            var n = this.getTokenMap(e),
                i = t.replace(/[\{\}]/g, ""),
                r = n[i];
            if (void 0 !== r) return "function" == typeof r ? r(e, n) : r;
            throw new Error("Unknown token: " + t + ", url:" + this.url)
        }, t.fn.rss = function(t, n, i) {
            return new e(this, t, n, i).render(), this
        }
    }(jQuery),
    function(t) {
        function e(t, e, n, i) {
            var r = n.lang();
            return r[t].call ? r[t](n, i) : r[t][e]
        }

        function n(t, e) {
            return function(n) {
                return s(t.call(this, n), e)
            }
        }

        function i(t, e, n) {
            this._d = t, this._isUTC = !!e, this._a = t._a || null, this._lang = n || !1
        }

        function r(t) {
            var e = this._data = {},
                n = t.years || t.y || 0,
                i = t.months || t.M || 0,
                r = t.weeks || t.w || 0,
                s = t.days || t.d || 0,
                o = t.hours || t.h || 0,
                l = t.minutes || t.m || 0,
                h = t.seconds || t.s || 0,
                p = t.milliseconds || t.ms || 0;
            this._milliseconds = p + 1e3 * h + 6e4 * l + 36e5 * o, this._days = s + 7 * r, this._months = i + 12 * n, e.milliseconds = p % 1e3, h += a(p / 1e3), e.seconds = h % 60, l += a(h / 60), e.minutes = l % 60, o += a(l / 60), e.hours = o % 24, s += a(o / 24), s += 7 * r, e.days = s % 30, i += a(s / 30), e.months = i % 12, n += a(i / 12), e.years = n, this._lang = !1
        }

        function a(t) {
            return t < 0 ? Math.ceil(t) : Math.floor(t)
        }

        function s(t, e) {
            for (var n = t + ""; n.length < e;) n = "0" + n;
            return n
        }

        function o(t, e, n) {
            var i, r = e._milliseconds,
                a = e._days,
                s = e._months;
            r && t._d.setTime(+t + r * n), a && t.date(t.date() + a * n), s && (i = t.date(), t.date(1).month(t.month() + s * n).date(Math.min(i, t.daysInMonth())))
        }

        function l(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }

        function h(t, e) {
            var n, i = Math.min(t.length, e.length),
                r = Math.abs(t.length - e.length),
                a = 0;
            for (n = 0; n < i; n++) ~~t[n] != ~~e[n] && a++;
            return a + r
        }

        function p(t, e, n, i) {
            var r, a, s = [];
            for (r = 0; r < 7; r++) s[r] = t[r] = null == t[r] ? 2 === r ? 1 : 0 : t[r];
            return t[7] = s[7] = e, null != t[8] && (s[8] = t[8]), t[3] += n || 0, t[4] += i || 0, a = new Date(0), e ? (a.setUTCFullYear(t[0], t[1], t[2]), a.setUTCHours(t[3], t[4], t[5], t[6])) : (a.setFullYear(t[0], t[1], t[2]), a.setHours(t[3], t[4], t[5], t[6])), a._a = s, a
        }

        function c(t, e) {
            var n, i, r = [];
            for (!e && A && (e = require("./lang/" + t)), n = 0; n < M.length; n++) e[M[n]] = e[M[n]] || D.en[M[n]];
            for (n = 0; n < 12; n++) i = S([2e3, n]), r[n] = new RegExp("^" + (e.months[n] || e.months(i, "")) + "|^" + (e.monthsShort[n] || e.monthsShort(i, "")).replace(".", ""), "i");
            return e.monthsParse = e.monthsParse || r, D[t] = e, e
        }

        function u(t) {
            var e = "string" == typeof t && t || t && t._lang || null;
            return e ? D[e] || c(e) : S
        }

        function m(t) {
            return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function d(t) {
            var e, n, i = t.match(I);
            for (e = 0, n = i.length; e < n; e++) U[i[e]] ? i[e] = U[i[e]] : i[e] = m(i[e]);
            return function(r) {
                var a = "";
                for (e = 0; e < n; e++) a += "function" == typeof i[e].call ? i[e].call(r, t) : i[e];
                return a
            }
        }

        function f(t, e) {
            function n(e) {
                return t.lang().longDateFormat[e] || e
            }
            for (var i = 5; i-- && z.test(e);) e = e.replace(z, n);
            return q[e] || (q[e] = d(e)), q[e](t)
        }

        function y(t) {
            switch (t) {
                case "DDDD":
                    return B;
                case "YYYY":
                    return R;
                case "S":
                case "SS":
                case "SSS":
                case "DDD":
                    return L;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                case "a":
                case "A":
                    return O;
                case "Z":
                case "ZZ":
                    return j;
                case "T":
                    return H;
                case "MM":
                case "DD":
                case "YY":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                    return N;
                default:
                    return new RegExp(t.replace("\\", ""))
            }
        }

        function v(t, e, n, i) {
            var r, a;
            switch (t) {
                case "M":
                case "MM":
                    n[1] = null == e ? 0 : ~~e - 1;
                    break;
                case "MMM":
                case "MMMM":
                    for (r = 0; r < 12; r++)
                        if (u().monthsParse[r].test(e)) {
                            n[1] = r, a = !0;
                            break
                        }
                    a || (n[8] = !1);
                    break;
                case "D":
                case "DD":
                case "DDD":
                case "DDDD":
                    null != e && (n[2] = ~~e);
                    break;
                case "YY":
                    n[0] = ~~e + (~~e > 70 ? 1900 : 2e3);
                    break;
                case "YYYY":
                    n[0] = ~~Math.abs(e);
                    break;
                case "a":
                case "A":
                    i.isPm = "pm" === (e + "").toLowerCase();
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    n[3] = ~~e;
                    break;
                case "m":
                case "mm":
                    n[4] = ~~e;
                    break;
                case "s":
                case "ss":
                    n[5] = ~~e;
                    break;
                case "S":
                case "SS":
                case "SSS":
                    n[6] = ~~(1e3 * ("0." + e));
                    break;
                case "Z":
                case "ZZ":
                    i.isUTC = !0, r = (e + "").match(G), r && r[1] && (i.tzh = ~~r[1]), r && r[2] && (i.tzm = ~~r[2]), r && "+" === r[0] && (i.tzh = -i.tzh, i.tzm = -i.tzm)
            }
            null == e && (n[8] = !1)
        }

        function g(t, e) {
            var n, i, r = [0, 0, 1, 0, 0, 0, 0],
                a = {
                    tzh: 0,
                    tzm: 0
                },
                s = e.match(I);
            for (n = 0; n < s.length; n++) i = (y(s[n]).exec(t) || [])[0], i && (t = t.slice(t.indexOf(i) + i.length)), U[s[n]] && v(s[n], i, r, a);
            return a.isPm && r[3] < 12 && (r[3] += 12), !1 === a.isPm && 12 === r[3] && (r[3] = 0), p(r, a.isUTC, a.tzh, a.tzm)
        }

        function b(t, e) {
            var n, r, a, s, o, l = t.match(V) || [],
                p = 99;
            for (a = 0; a < e.length; a++) s = g(t, e[a]), r = f(new i(s), e[a]).match(V) || [], (o = h(l, r)) < p && (p = o, n = s);
            return n
        }

        function x(t) {
            var e, n = "YYYY-MM-DDT";
            if ($.exec(t)) {
                for (e = 0; e < 4; e++)
                    if (Y[e][1].exec(t)) {
                        n += Y[e][0];
                        break
                    }
                return j.exec(t) ? g(t, n + " Z") : g(t, n)
            }
            return new Date(t)
        }

        function k(t, e, n, i, r) {
            var a = r.relativeTime[t];
            return "function" == typeof a ? a(e || 1, !!n, t, i) : a.replace(/%d/i, e || 1)
        }

        function _(t, e, n) {
            var i = C(Math.abs(t) / 1e3),
                r = C(i / 60),
                a = C(r / 60),
                s = C(a / 24),
                o = C(s / 365),
                l = i < 45 && ["s", i] || 1 === r && ["m"] || r < 45 && ["mm", r] || 1 === a && ["h"] || a < 22 && ["hh", a] || 1 === s && ["d"] || s <= 25 && ["dd", s] || s <= 45 && ["M"] || s < 345 && ["MM", C(s / 30)] || 1 === o && ["y"] || ["yy", o];
            return l[2] = e, l[3] = t > 0, l[4] = n, k.apply({}, l)
        }

        function E(t, e) {
            S.fn[t] = function(t) {
                var n = this._isUTC ? "UTC" : "";
                return null != t ? (this._d["set" + n + e](t), this) : this._d["get" + n + e]()
            }
        }

        function w(t, e) {
            S.duration.fn["as" + t] = function() {
                return +this / e
            }
        }
        for (var S, P, C = Math.round, D = {}, T = "en", A = "undefined" != typeof module && module.exports, M = "months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"), F = /^\/?Date\((\-?\d+)/i, I = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g, z = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g, V = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi, N = /\d\d?/, L = /\d{1,3}/, B = /\d{3}/, R = /\d{1,4}/, O = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i, j = /Z|[\+\-]\d\d:?\d\d/i, H = /T/i, $ = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, Y = [
                ["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/],
                ["HH:mm:ss", /T\d\d:\d\d:\d\d/],
                ["HH:mm", /T\d\d:\d\d/],
                ["HH", /T\d\d/]
            ], G = /([\+\-]|\d\d)/gi, X = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), W = {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }, q = {}, Z = "DDD w M D d".split(" "), K = "M D H h m s w".split(" "), U = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(t) {
                    return e("monthsShort", this.month(), this, t)
                },
                MMMM: function(t) {
                    return e("months", this.month(), this, t)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return ~~((new Date(this.year(), this.month(), this.date()) - new Date(this.year(), 0, 1)) / 864e5 + 1.5)
                },
                d: function() {
                    return this.day()
                },
                dd: function(t) {
                    return e("weekdaysMin", this.day(), this, t)
                },
                ddd: function(t) {
                    return e("weekdaysShort", this.day(), this, t)
                },
                dddd: function(t) {
                    return e("weekdays", this.day(), this, t)
                },
                w: function() {
                    var t = new Date(this.year(), this.month(), this.date() - this.day() + 5);
                    return ~~((t - new Date(t.getFullYear(), 0, 4)) / 864e5 / 7 + 1.5)
                },
                YY: function() {
                    return s(this.year() % 100, 2)
                },
                YYYY: function() {
                    return s(this.year(), 4)
                },
                a: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.lang().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return ~~(this.milliseconds() / 100)
                },
                SS: function() {
                    return s(~~(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return s(this.milliseconds(), 3)
                },
                Z: function() {
                    var t = -this.zone(),
                        e = "+";
                    return t < 0 && (t = -t, e = "-"), e + s(~~(t / 60), 2) + ":" + s(~~t % 60, 2)
                },
                ZZ: function() {
                    var t = -this.zone(),
                        e = "+";
                    return t < 0 && (t = -t, e = "-"), e + s(~~(10 * t / 6), 4)
                }
            }; Z.length;) P = Z.pop(), U[P + "o"] = function(t) {
            return function(e) {
                var n = t.call(this, e);
                return n + this.lang().ordinal(n)
            }
        }(U[P]);
        for (; K.length;) P = K.pop(), U[P + P] = n(U[P], 2);
        for (U.DDDD = n(U.DDD, 3), S = function(e, n) {
                if (null === e || "" === e) return null;
                var r, a;
                return S.isMoment(e) ? new i(new Date(+e._d), e._isUTC, e._lang) : (n ? r = l(n) ? b(e, n) : g(e, n) : (a = F.exec(e), r = e === t ? new Date : a ? new Date(+a[1]) : e instanceof Date ? e : l(e) ? p(e) : "string" == typeof e ? x(e) : new Date(e)), new i(r))
            }, S.utc = function(t, e) {
                return l(t) ? new i(p(t, !0), !0) : ("string" == typeof t && !j.exec(t) && (t += " +0000", e && (e += " Z")), S(t, e).utc())
            }, S.unix = function(t) {
                return S(1e3 * t)
            }, S.duration = function(t, e) {
                var n, i = S.isDuration(t),
                    a = "number" == typeof t,
                    s = i ? t._data : a ? {} : t;
                return a && (e ? s[e] = t : s.milliseconds = t), n = new r(s), i && (n._lang = t._lang), n
            }, S.humanizeDuration = function(t, e, n) {
                return S.duration(t, !0 === e ? null : e).humanize(!0 === e || n)
            }, S.version = "1.7.2", S.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", S.lang = function(t, e) {
                var n;
                if (!t) return T;
                if ((e || !D[t]) && c(t, e), D[t]) {
                    for (n = 0; n < M.length; n++) S[M[n]] = D[t][M[n]];
                    S.monthsParse = D[t].monthsParse, T = t
                }
            }, S.langData = u, S.isMoment = function(t) {
                return t instanceof i
            }, S.isDuration = function(t) {
                return t instanceof r
            }, S.lang("en", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D YYYY",
                    LLL: "MMMM D YYYY LT",
                    LLLL: "dddd, MMMM D YYYY LT"
                },
                meridiem: function(t, e, n) {
                    return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                ordinal: function(t) {
                    var e = t % 10;
                    return 1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th"
                }
            }), S.fn = i.prototype = {
                clone: function() {
                    return S(this)
                },
                valueOf: function() {
                    return +this._d
                },
                unix: function() {
                    return Math.floor(+this._d / 1e3)
                },
                toString: function() {
                    return this._d.toString()
                },
                toDate: function() {
                    return this._d
                },
                toArray: function() {
                    var t = this;
                    return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds(), !!this._isUTC]
                },
                isValid: function() {
                    return this._a ? null != this._a[8] ? !!this._a[8] : !h(this._a, (this._a[7] ? S.utc(this._a) : S(this._a)).toArray()) : !isNaN(this._d.getTime())
                },
                utc: function() {
                    return this._isUTC = !0, this
                },
                local: function() {
                    return this._isUTC = !1, this
                },
                format: function(t) {
                    return f(this, t || S.defaultFormat)
                },
                add: function(t, e) {
                    return o(this, e ? S.duration(+e, t) : S.duration(t), 1), this
                },
                subtract: function(t, e) {
                    return o(this, e ? S.duration(+e, t) : S.duration(t), -1), this
                },
                diff: function(t, e, n) {
                    var i, r = this._isUTC ? S(t).utc() : S(t).local(),
                        a = 6e4 * (this.zone() - r.zone()),
                        s = this._d - r._d - a,
                        o = this.year() - r.year(),
                        l = this.month() - r.month(),
                        h = this.date() - r.date();
                    return i = "months" === e ? 12 * o + l + h / 30 : "years" === e ? o + (l + h / 30) / 12 : "seconds" === e ? s / 1e3 : "minutes" === e ? s / 6e4 : "hours" === e ? s / 36e5 : "days" === e ? s / 864e5 : "weeks" === e ? s / 6048e5 : s, n ? i : C(i)
                },
                from: function(t, e) {
                    return S.duration(this.diff(t)).lang(this._lang).humanize(!e)
                },
                fromNow: function(t) {
                    return this.from(S(), t)
                },
                calendar: function() {
                    var t = this.diff(S().sod(), "days", !0),
                        e = this.lang().calendar,
                        n = e.sameElse,
                        i = t < -6 ? n : t < -1 ? e.lastWeek : t < 0 ? e.lastDay : t < 1 ? e.sameDay : t < 2 ? e.nextDay : t < 7 ? e.nextWeek : n;
                    return this.format("function" == typeof i ? i.apply(this) : i)
                },
                isLeapYear: function() {
                    var t = this.year();
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                },
                isDST: function() {
                    return this.zone() < S([this.year()]).zone() || this.zone() < S([this.year(), 5]).zone()
                },
                day: function(t) {
                    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                    return null == t ? e : this.add({
                        d: t - e
                    })
                },
                startOf: function(t) {
                    switch (t.replace(/s$/, "")) {
                        case "year":
                            this.month(0);
                        case "month":
                            this.date(1);
                        case "day":
                            this.hours(0);
                        case "hour":
                            this.minutes(0);
                        case "minute":
                            this.seconds(0);
                        case "second":
                            this.milliseconds(0)
                    }
                    return this
                },
                endOf: function(t) {
                    return this.startOf(t).add(t.replace(/s?$/, "s"), 1).subtract("ms", 1)
                },
                sod: function() {
                    return this.clone().startOf("day")
                },
                eod: function() {
                    return this.clone().endOf("day")
                },
                zone: function() {
                    return this._isUTC ? 0 : this._d.getTimezoneOffset()
                },
                daysInMonth: function() {
                    return S.utc([this.year(), this.month() + 1, 0]).date()
                },
                lang: function(e) {
                    return e === t ? u(this) : (this._lang = e, this)
                }
            }, P = 0; P < X.length; P++) E(X[P].toLowerCase(), X[P]);
        E("year", "FullYear"), S.duration.fn = r.prototype = {
            weeks: function() {
                return a(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + 2592e6 * this._months
            },
            humanize: function(t) {
                var e = +this,
                    n = this.lang().relativeTime,
                    i = _(e, !t, this.lang()),
                    r = e <= 0 ? n.past : n.future;
                return t && (i = "function" == typeof r ? r(i) : r.replace(/%s/i, i)), i
            },
            lang: S.fn.lang
        };
        for (P in W) W.hasOwnProperty(P) && (w(P, W[P]), function(t) {
            S.duration.fn[t] = function() {
                return this._data[t]
            }
        }(P.toLowerCase()));
        w("Weeks", 6048e5), A && (module.exports = S), "undefined" == typeof ender && (this.moment = S), "function" == typeof define && define.amd && define("moment", [], function() {
            return S
        })
    }.call(this);
var window = void 0 === window ? {} : window;
! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof module && module.exports ? module.exports = e() : t.bodymovin = e()
}(window, function() {
    function ProjectInterface() {
        return {}
    }

    function roundValues(t) {
        bm_rnd = t ? Math.round : function(t) {
            return t
        }
    }

    function roundTo2Decimals(t) {
        return Math.round(1e4 * t) / 1e4
    }

    function roundTo3Decimals(t) {
        return Math.round(100 * t) / 100
    }

    function styleDiv(t) {
        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
    }

    function styleUnselectableDiv(t) {
        t.style.userSelect = "none", t.style.MozUserSelect = "none", t.style.webkitUserSelect = "none", t.style.oUserSelect = "none"
    }

    function BMEnterFrameEvent(t, e, n, i) {
        this.type = t, this.currentTime = e, this.totalTime = n, this.direction = 0 > i ? -1 : 1
    }

    function BMCompleteEvent(t, e) {
        this.type = t, this.direction = 0 > e ? -1 : 1
    }

    function BMCompleteLoopEvent(t, e, n, i) {
        this.type = t, this.currentLoop = e, this.totalLoops = n, this.direction = 0 > i ? -1 : 1
    }

    function BMSegmentStartEvent(t, e, n) {
        this.type = t, this.firstFrame = e, this.totalFrames = n
    }

    function BMDestroyEvent(t, e) {
        this.type = t, this.target = e
    }

    function _addEventListener(t, e) {
        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
            function() {
                this.removeEventListener(t, e)
            }.bind(this)
    }

    function _removeEventListener(t, e) {
        if (e) {
            if (this._cbs[t]) {
                for (var n = 0, i = this._cbs[t].length; i > n;) this._cbs[t][n] === e && (this._cbs[t].splice(n, 1), n -= 1, i -= 1), n += 1;
                this._cbs[t].length || (this._cbs[t] = null)
            }
        } else this._cbs[t] = null
    }

    function _triggerEvent(t, e) {
        if (this._cbs[t])
            for (var n = this._cbs[t].length, i = 0; n > i; i++) this._cbs[t][i](e)
    }

    function randomString(t, e) {
        void 0 === e && (e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
        var n, i = "";
        for (n = t; n > 0; --n) i += e[Math.round(Math.random() * (e.length - 1))];
        return i
    }

    function HSVtoRGB(t, e, n) {
        var i, r, a, s, o, l, h, p;
        switch (1 === arguments.length && (e = t.s, n = t.v, t = t.h), s = Math.floor(6 * t), o = 6 * t - s, l = n * (1 - e), h = n * (1 - o * e), p = n * (1 - (1 - o) * e), s % 6) {
            case 0:
                i = n, r = p, a = l;
                break;
            case 1:
                i = h, r = n, a = l;
                break;
            case 2:
                i = l, r = n, a = p;
                break;
            case 3:
                i = l, r = h, a = n;
                break;
            case 4:
                i = p, r = l, a = n;
                break;
            case 5:
                i = n, r = l, a = h
        }
        return [i, r, a]
    }

    function RGBtoHSV(t, e, n) {
        1 === arguments.length && (e = t.g, n = t.b, t = t.r);
        var i, r = Math.max(t, e, n),
            a = Math.min(t, e, n),
            s = r - a,
            o = 0 === r ? 0 : s / r,
            l = r / 255;
        switch (r) {
            case a:
                i = 0;
                break;
            case t:
                i = e - n + s * (n > e ? 6 : 0), i /= 6 * s;
                break;
            case e:
                i = n - t + 2 * s, i /= 6 * s;
                break;
            case n:
                i = t - e + 4 * s, i /= 6 * s
        }
        return [i, o, l]
    }

    function addSaturationToRGB(t, e) {
        var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return n[1] += e, n[1] > 1 ? n[1] = 1 : n[1] <= 0 && (n[1] = 0), HSVtoRGB(n[0], n[1], n[2])
    }

    function addBrightnessToRGB(t, e) {
        var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return n[2] += e, n[2] > 1 ? n[2] = 1 : n[2] < 0 && (n[2] = 0), HSVtoRGB(n[0], n[1], n[2])
    }

    function addHueToRGB(t, e) {
        var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return n[0] += e / 360, n[0] > 1 ? n[0] -= 1 : n[0] < 0 && (n[0] += 1), HSVtoRGB(n[0], n[1], n[2])
    }

    function componentToHex(t) {
        var e = t.toString(16);
        return 1 == e.length ? "0" + e : e
    }

    function fillToRgba(t, e) {
        if (!cachedColors[t]) {
            var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            cachedColors[t] = parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16)
        }
        return "rgba(" + cachedColors[t] + "," + e + ")"
    }

    function RenderedFrame(t, e) {
        this.tr = t, this.o = e
    }

    function LetterProps(t, e, n, i, r, a) {
        this.o = t, this.sw = e, this.sc = n, this.fc = i, this.m = r, this.props = a
    }

    function iterateDynamicProperties(t) {
        var e, n = this.dynamicProperties;
        for (e = 0; n > e; e += 1) this.dynamicProperties[e].getValue(t)
    }

    function reversePath(t) {
        var e, n, i = [],
            r = [],
            a = [],
            s = {},
            o = 0;
        t.c && (i[0] = t.o[0], r[0] = t.i[0], a[0] = t.v[0], o = 1), n = t.i.length;
        var l = n - 1;
        for (e = o; n > e; e += 1) i.push(t.o[l]), r.push(t.i[l]), a.push(t.v[l]), l -= 1;
        return s.i = i, s.o = r, s.v = a, s
    }

    function Matrix() {}

    function matrixManagerFunction() {
        var t = new Matrix,
            e = function(e, n, i, r, a) {
                return t.reset().translate(r, a).rotate(e).scale(n, i).toCSS()
            };
        return {
            getMatrix: function(t) {
                return e(t.tr.r[2], t.tr.s[0], t.tr.s[1], t.tr.p[0], t.tr.p[1])
            }
        }
    }

    function createElement(t, e, n) {
        if (!e) {
            var i = Object.create(t.prototype, n),
                r = {};
            return i && "[object Function]" === r.toString.call(i.init) && i.init(), i
        }
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.prototype._parent = t.prototype
    }

    function extendPrototype(t, e) {
        for (var n in t.prototype) t.prototype.hasOwnProperty(n) && (e.prototype[n] = t.prototype[n])
    }

    function bezFunction() {
        function t(t, e, n, i, r, a) {
            var s = t * i + e * r + n * a - r * i - a * t - n * e;
            return s > -1e-4 && 1e-4 > s
        }

        function e(e, n, i, r, a, s, o, l, h) {
            if (0 === i && 0 === s && 0 === h) return t(e, n, r, a, o, l);
            var p, c = Math.sqrt(Math.pow(r - e, 2) + Math.pow(a - n, 2) + Math.pow(s - i, 2)),
                u = Math.sqrt(Math.pow(o - e, 2) + Math.pow(l - n, 2) + Math.pow(h - i, 2)),
                m = Math.sqrt(Math.pow(o - r, 2) + Math.pow(l - a, 2) + Math.pow(h - s, 2));
            return (p = c > u ? c > m ? c - u - m : m - u - c : m > u ? m - u - c : u - c - m) > -1e-4 && 1e-4 > p
        }

        function n(t) {
            this.segmentLength = 0, this.points = new Array(t)
        }

        function i(t, e) {
            this.partialLength = t, this.point = e
        }

        function r(t, e) {
            var n = e.segments,
                i = n.length,
                r = bm_floor((i - 1) * t),
                a = t * e.addedLength,
                s = 0;
            if (a == n[r].l) return n[r].p;
            for (var o = n[r].l > a ? -1 : 1, l = !0; l;) n[r].l <= a && n[r + 1].l > a ? (s = (a - n[r].l) / (n[r + 1].l - n[r].l), l = !1) : r += o, (0 > r || r >= i - 1) && (l = !1);
            return n[r].p + (n[r + 1].p - n[r].p) * s
        }

        function a() {
            this.pt1 = new Array(2), this.pt2 = new Array(2), this.pt3 = new Array(2), this.pt4 = new Array(2)
        }

        function s(t, e, n, i, s, o, l) {
            var h = new a;
            s = 0 > s ? 0 : s > 1 ? 1 : s;
            var p = r(s, l);
            o = o > 1 ? 1 : o;
            var c, u = r(o, l),
                m = t.length,
                d = 1 - p,
                f = 1 - u;
            for (c = 0; m > c; c += 1) h.pt1[c] = Math.round(1e3 * (d * d * d * t[c] + (p * d * d + d * p * d + d * d * p) * n[c] + (p * p * d + d * p * p + p * d * p) * i[c] + p * p * p * e[c])) / 1e3, h.pt3[c] = Math.round(1e3 * (d * d * f * t[c] + (p * d * f + d * p * f + d * d * u) * n[c] + (p * p * f + d * p * u + p * d * u) * i[c] + p * p * u * e[c])) / 1e3, h.pt4[c] = Math.round(1e3 * (d * f * f * t[c] + (p * f * f + d * u * f + d * f * u) * n[c] + (p * u * f + d * u * u + p * f * u) * i[c] + p * u * u * e[c])) / 1e3, h.pt2[c] = Math.round(1e3 * (f * f * f * t[c] + (u * f * f + f * u * f + f * f * u) * n[c] + (u * u * f + f * u * u + u * f * u) * i[c] + u * u * u * e[c])) / 1e3;
            return h
        }
        return {
            getBezierLength: (Math, function() {
                function t(t, e) {
                    this.l = t, this.p = e
                }
                return function(e, n, i, r) {
                    var a, s, o, l, h, p, c = defaultCurveSegments,
                        u = 0,
                        m = [],
                        d = [],
                        f = {
                            addedLength: 0,
                            segments: []
                        };
                    for (o = i.length, a = 0; c > a; a += 1) {
                        for (h = a / (c - 1), p = 0, s = 0; o > s; s += 1) l = bm_pow(1 - h, 3) * e[s] + 3 * bm_pow(1 - h, 2) * h * i[s] + 3 * (1 - h) * bm_pow(h, 2) * r[s] + bm_pow(h, 3) * n[s], m[s] = l, null !== d[s] && (p += bm_pow(m[s] - d[s], 2)), d[s] = m[s];
                        p && (p = bm_sqrt(p), u += p), f.segments.push(new t(u, h))
                    }
                    return f.addedLength = u, f
                }
            }()),
            getNewSegment: s,
            buildBezierData: function() {
                var e = {};
                return function(r) {
                    var a = r.s,
                        s = r.e,
                        o = r.to,
                        l = r.ti,
                        h = (a.join("_") + "_" + s.join("_") + "_" + o.join("_") + "_" + l.join("_")).replace(/\./g, "p");
                    if (e[h]) return void(r.bezierData = e[h]);
                    var p, c, u, m, d, f, y, v = defaultCurveSegments,
                        g = 0,
                        b = null;
                    2 === a.length && (a[0] != s[0] || a[1] != s[1]) && t(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && t(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) && (v = 2);
                    var x = new n(v);
                    for (u = o.length, p = 0; v > p; p += 1) {
                        for (y = new Array(u), d = p / (v - 1), f = 0, c = 0; u > c; c += 1) m = bm_pow(1 - d, 3) * a[c] + 3 * bm_pow(1 - d, 2) * d * (a[c] + o[c]) + 3 * (1 - d) * bm_pow(d, 2) * (s[c] + l[c]) + bm_pow(d, 3) * s[c], y[c] = m, null !== b && (f += bm_pow(y[c] - b[c], 2));
                        f = bm_sqrt(f), g += f, x.points[p] = new i(f, y), b = y
                    }
                    x.segmentLength = g, r.bezierData = x, e[h] = x
                }
            }(),
            pointOnLine2D: t,
            pointOnLine3D: e
        }
    }

    function dataFunctionManager() {
        function t(r, a, o) {
            var l, h, p, c, u, m, d = r.length;
            for (h = 0; d > h; h += 1)
                if ("ks" in (l = r[h]) && !l.completed) {
                    if (l.completed = !0, l.tt && (r[h - 1].td = l.tt), [], -1, l.hasMask) {
                        var f = l.masksProperties;
                        for (c = f.length, p = 0; c > p; p += 1)
                            if (f[p].pt.k.i) i(f[p].pt.k);
                            else
                                for (m = f[p].pt.k.length, u = 0; m > u; u += 1) f[p].pt.k[u].s && i(f[p].pt.k[u].s[0]), f[p].pt.k[u].e && i(f[p].pt.k[u].e[0])
                    }
                    0 === l.ty ? (l.layers = e(l.refId, a), t(l.layers, a, o)) : 4 === l.ty ? n(l.shapes) : 5 == l.ty && s(l, o)
                }
        }

        function e(t, e) {
            for (var n = 0, i = e.length; i > n;) {
                if (e[n].id === t) return e[n].layers.__used ? JSON.parse(JSON.stringify(e[n].layers)) : (e[n].layers.__used = !0, e[n].layers);
                n += 1
            }
        }

        function n(t) {
            var e, r, a, s = t.length;
            for (e = s - 1; e >= 0; e -= 1)
                if ("sh" == t[e].ty) {
                    if (t[e].ks.k.i) i(t[e].ks.k);
                    else
                        for (a = t[e].ks.k.length, r = 0; a > r; r += 1) t[e].ks.k[r].s && i(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && i(t[e].ks.k[r].e[0]);
                    !0
                } else "gr" == t[e].ty && n(t[e].it)
        }

        function i(t) {
            var e, n = t.i.length;
            for (e = 0; n > e; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
        }

        function r(t, e) {
            var n = e ? e.split(".") : [100, 100, 100];
            return t[0] > n[0] || !(n[0] > t[0]) && (t[1] > n[1] || !(n[1] > t[1]) && (t[2] > n[2] || !(n[2] > t[2]) && void 0))
        }

        function a(e, n) {
            e.__complete || (h(e), o(e), l(e), p(e), t(e.layers, e.assets, n), e.__complete = !0)
        }

        function s(t, e) {
            var n, i, r = t.t.d.k,
                a = r.length;
            for (i = 0; a > i; i += 1) {
                var s = t.t.d.k[i].s;
                n = [];
                var o, l, h, p, c, u, m, d = 0,
                    f = t.t.m.g,
                    y = 0,
                    v = 0,
                    g = 0,
                    b = [],
                    x = 0,
                    k = 0,
                    _ = e.getFontByName(s.f),
                    E = 0,
                    w = _.fStyle.split(" "),
                    S = "normal",
                    P = "normal";
                for (l = w.length, o = 0; l > o; o += 1) "italic" === w[o].toLowerCase() ? P = "italic" : "bold" === w[o].toLowerCase() ? S = "700" : "black" === w[o].toLowerCase() ? S = "900" : "medium" === w[o].toLowerCase() ? S = "500" : "regular" === w[o].toLowerCase() || "normal" === w[o].toLowerCase() ? S = "400" : ("light" === w[o].toLowerCase() || "thin" === w[o].toLowerCase()) && (S = "200");
                if (s.fWeight = S, s.fStyle = P, l = s.t.length, s.sz) {
                    var C = s.sz[0],
                        D = -1;
                    for (o = 0; l > o; o += 1) h = !1, " " === s.t.charAt(o) ? D = o : 13 === s.t.charCodeAt(o) && (x = 0, h = !0), e.chars ? (m = e.getCharData(s.t.charAt(o), _.fStyle, _.fFamily), E = h ? 0 : m.w * s.s / 100) : E = e.measureText(s.t.charAt(o), s.f, s.s), x + E > C ? (-1 === D ? (s.t = s.t.substr(0, o) + "\r" + s.t.substr(o), l += 1) : (o = D, s.t = s.t.substr(0, o) + "\r" + s.t.substr(o + 1)), D = -1, x = 0) : x += E;
                    l = s.t.length
                }
                for (x = 0, E = 0, o = 0; l > o; o += 1)
                    if (h = !1, " " === s.t.charAt(o) ? p = " " : 13 === s.t.charCodeAt(o) ? (b.push(x), k = x > k ? x : k, x = 0, p = "", h = !0, g += 1) : p = s.t.charAt(o), e.chars ? (m = e.getCharData(s.t.charAt(o), _.fStyle, e.getFontByName(s.f).fFamily), E = h ? 0 : m.w * s.s / 100) : E = e.measureText(p, s.f, s.s), x += E, n.push({
                            l: E,
                            an: E,
                            add: y,
                            n: h,
                            anIndexes: [],
                            val: p,
                            line: g
                        }), 2 == f) {
                        if (y += E, "" == p || " " == p || o == l - 1) {
                            for (("" == p || " " == p) && (y -= E); o >= v;) n[v].an = y, n[v].ind = d, n[v].extra = E, v += 1;
                            d += 1, y = 0
                        }
                    } else if (3 == f) {
                    if (y += E, "" == p || o == l - 1) {
                        for ("" == p && (y -= E); o >= v;) n[v].an = y, n[v].ind = d, n[v].extra = E, v += 1;
                        y = 0, d += 1
                    }
                } else n[d].ind = d, n[d].extra = 0, d += 1;
                if (s.l = n, k = x > k ? x : k, b.push(x), s.sz) s.boxWidth = s.sz[0], s.justifyOffset = 0;
                else switch (s.boxWidth = k, s.j) {
                    case 1:
                        s.justifyOffset = -s.boxWidth;
                        break;
                    case 2:
                        s.justifyOffset = -s.boxWidth / 2;
                        break;
                    default:
                        s.justifyOffset = 0
                }
                s.lineWidths = b;
                var T = t.t.a;
                u = T.length;
                var A, M, F = [];
                for (c = 0; u > c; c += 1) {
                    for (T[c].a.sc && (s.strokeColorAnim = !0), T[c].a.sw && (s.strokeWidthAnim = !0), (T[c].a.fc || T[c].a.fh || T[c].a.fs || T[c].a.fb) && (s.fillColorAnim = !0), M = 0, A = T[c].s.b, o = 0; l > o; o += 1) n[o].anIndexes[c] = M, (1 == A && "" != n[o].val || 2 == A && "" != n[o].val && " " != n[o].val || 3 == A && (n[o].n || " " == n[o].val || o == l - 1) || 4 == A && (n[o].n || o == l - 1)) && (1 === T[c].s.rn && F.push(M), M += 1);
                    t.t.a[c].s.totalChars = M;
                    var I, z = -1;
                    if (1 === T[c].s.rn)
                        for (o = 0; l > o; o += 1) z != n[o].anIndexes[c] && (z = n[o].anIndexes[c], I = F.splice(Math.floor(Math.random() * F.length), 1)[0]), n[o].anIndexes[c] = I
                }
                0 !== u || "m" in t.t.p || (t.singleShape = !0), s.yOffset = s.lh || 1.2 * s.s, s.ls = s.ls || 0, s.ascent = _.ascent * s.s / 100
            }
        }
        var o = function() {
                function t(t) {
                    var e = t.t.d;
                    t.t.d = {
                        k: [{
                            s: e,
                            t: 0
                        }]
                    }
                }

                function e(e) {
                    var n, i = e.length;
                    for (n = 0; i > n; n += 1) 5 === e[n].ty && t(e[n])
                }
                var n = [4, 4, 14];
                return function(t) {
                    if (r(n, t.v) && (e(t.layers), t.assets)) {
                        var i, a = t.assets.length;
                        for (i = 0; a > i; i += 1) t.assets[i].layers && e(t.assets[i].layers)
                    }
                }
            }(),
            l = function() {
                var t = [4, 7, 99];
                return function(e) {
                    if (e.chars && !r(t, e.v)) {
                        var n, a, s, o, l = e.chars.length;
                        for (n = 0; l > n; n += 1)
                            if (e.chars[n].data && e.chars[n].data.shapes)
                                for (o = e.chars[n].data.shapes[0].it, s = o.length, a = 0; s > a; a += 1) o[a].ks.k, i(o[a].ks.k)
                    }
                }
            }(),
            h = function() {
                function t(e) {
                    var n, i, r, a = e.length;
                    for (n = 0; a > n; n += 1)
                        if ("gr" === e[n].ty) t(e[n].it);
                        else if ("fl" === e[n].ty || "st" === e[n].ty)
                        if (e[n].c.k && e[n].c.k[0].i)
                            for (r = e[n].c.k.length, i = 0; r > i; i += 1) e[n].c.k[i].s && (e[n].c.k[i].s[0] /= 255, e[n].c.k[i].s[1] /= 255, e[n].c.k[i].s[2] /= 255, e[n].c.k[i].s[3] /= 255), e[n].c.k[i].e && (e[n].c.k[i].e[0] /= 255, e[n].c.k[i].e[1] /= 255, e[n].c.k[i].e[2] /= 255, e[n].c.k[i].e[3] /= 255);
                        else e[n].c.k[0] /= 255, e[n].c.k[1] /= 255, e[n].c.k[2] /= 255, e[n].c.k[3] /= 255
                }

                function e(e) {
                    var n, i = e.length;
                    for (n = 0; i > n; n += 1) 4 === e[n].ty && t(e[n].shapes)
                }
                var n = [4, 1, 9];
                return function(t) {
                    if (r(n, t.v) && (e(t.layers), t.assets)) {
                        var i, a = t.assets.length;
                        for (i = 0; a > i; i += 1) t.assets[i].layers && e(t.assets[i].layers)
                    }
                }
            }(),
            p = function() {
                function t(e) {
                    var n, i, r, a = e.length;
                    for (n = a - 1; n >= 0; n -= 1)
                        if ("sh" == e[n].ty) {
                            if (e[n].ks.k.i) e[n].ks.k.c = e[n].closed;
                            else
                                for (r = e[n].ks.k.length, i = 0; r > i; i += 1) e[n].ks.k[i].s && (e[n].ks.k[i].s[0].c = e[n].closed), e[n].ks.k[i].e && (e[n].ks.k[i].e[0].c = e[n].closed);
                            !0
                        } else "gr" == e[n].ty && t(e[n].it)
                }

                function e(e) {
                    var n, i, r, a, s, o, l = e.length;
                    for (i = 0; l > i; i += 1) {
                        if (n = e[i], n.hasMask) {
                            var h = n.masksProperties;
                            for (a = h.length, r = 0; a > r; r += 1)
                                if (h[r].pt.k.i) h[r].pt.k.c = h[r].cl;
                                else
                                    for (o = h[r].pt.k.length, s = 0; o > s; s += 1) h[r].pt.k[s].s && (h[r].pt.k[s].s[0].c = h[r].cl), h[r].pt.k[s].e && (h[r].pt.k[s].e[0].c = h[r].cl)
                        }
                        4 === n.ty && t(n.shapes)
                    }
                }
                var n = [4, 4, 18];
                return function(t) {
                    if (r(n, t.v) && (e(t.layers), t.assets)) {
                        var i, a = t.assets.length;
                        for (i = 0; a > i; i += 1) t.assets[i].layers && e(t.assets[i].layers)
                    }
                }
            }(),
            c = {};
        return c.completeData = a, c
    }

    function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = Array.apply(null, {
            length: this._maxLength
        }), this.o = Array.apply(null, {
            length: this._maxLength
        }), this.i = Array.apply(null, {
            length: this._maxLength
        })
    }

    function ShapeModifier() {}

    function TrimModifier() {}

    function RoundCornersModifier() {}

    function RepeaterModifier() {}

    function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = Array.apply(null, {
            length: this._maxLength
        })
    }

    function BaseRenderer() {}

    function SVGRenderer(t, e) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !e || !1 !== e.hideOnTransparent
        }, this.globalData.renderConfig = this.renderConfig, this.elements = [], this.pendingElements = [], this.destroyed = !1
    }

    function MaskElement(t, e, n) {
        this.dynamicProperties = [], this.data = t, this.element = e, this.globalData = n, this.paths = [], this.storedData = [], this.masksProperties = this.data.masksProperties, this.viewData = new Array(this.masksProperties.length), this.maskElement = null, this.firstFrame = !0;
        var i, r, a, s, o, l, h, p, c = this.globalData.defs,
            u = this.masksProperties.length,
            m = this.masksProperties,
            d = 0,
            f = [],
            y = randomString(10),
            v = "clipPath",
            g = "clip-path";
        for (i = 0; u > i; i++)
            if (("a" !== m[i].mode && "n" !== m[i].mode || m[i].inv || 100 !== m[i].o.k) && (v = "mask", g = "mask"), "s" != m[i].mode && "i" != m[i].mode || 0 != d ? o = null : (o = document.createElementNS(svgNS, "rect"), o.setAttribute("fill", "#ffffff"), o.setAttribute("width", this.element.comp.data.w), o.setAttribute("height", this.element.comp.data.h), f.push(o)), r = document.createElementNS(svgNS, "path"), "n" != m[i].mode) {
                if (d += 1, "s" == m[i].mode ? r.setAttribute("fill", "#000000") : r.setAttribute("fill", "#ffffff"), r.setAttribute("clip-rule", "nonzero"), 0 !== m[i].x.k) {
                    v = "mask", g = "mask", p = PropertyFactory.getProp(this.element, m[i].x, 0, null, this.dynamicProperties);
                    var b = "fi_" + randomString(10);
                    l = document.createElementNS(svgNS, "filter"), l.setAttribute("id", b), h = document.createElementNS(svgNS, "feMorphology"), h.setAttribute("operator", "dilate"), h.setAttribute("in", "SourceGraphic"), h.setAttribute("radius", "0"), l.appendChild(h), c.appendChild(l), "s" == m[i].mode ? r.setAttribute("stroke", "#000000") : r.setAttribute("stroke", "#ffffff")
                } else h = null, p = null;
                if (this.storedData[i] = {
                        elem: r,
                        x: p,
                        expan: h,
                        lastPath: "",
                        lastOperator: "",
                        filterId: b,
                        lastRadius: 0
                    }, "i" == m[i].mode) {
                    s = f.length;
                    var x = document.createElementNS(svgNS, "g");
                    for (a = 0; s > a; a += 1) x.appendChild(f[a]);
                    var k = document.createElementNS(svgNS, "mask");
                    k.setAttribute("mask-type", "alpha"), k.setAttribute("id", y + "_" + d), k.appendChild(r), c.appendChild(k), x.setAttribute("mask", "url(#" + y + "_" + d + ")"), f.length = 0, f.push(x)
                } else f.push(r);
                m[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                    elem: r,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, m[i].o, 0, .01, this.dynamicProperties),
                    prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3, this.dynamicProperties, null)
                }, o && (this.viewData[i].invRect = o), this.viewData[i].prop.k || this.drawPath(m[i], this.viewData[i].prop.v, this.viewData[i])
            } else this.viewData[i] = {
                op: PropertyFactory.getProp(this.element, m[i].o, 0, .01, this.dynamicProperties),
                prop: ShapePropertyFactory.getShapeProp(this.element, m[i], 3, this.dynamicProperties, null),
                elem: r
            }, c.appendChild(r);
        for (this.maskElement = document.createElementNS(svgNS, v), u = f.length, i = 0; u > i; i += 1) this.maskElement.appendChild(f[i]);
        this.maskElement.setAttribute("id", y), d > 0 && this.element.maskedElement.setAttribute(g, "url(#" + y + ")"), c.appendChild(this.maskElement)
    }

    function BaseElement() {}

    function SVGBaseElement(t, e, n, i, r) {
        this.globalData = n, this.comp = i, this.data = t, this.matteElement = null, this.transformedElement = null, this.isTransparent = !1, this.parentContainer = e, this.layerId = r ? r.layerId : "ly_" + randomString(10), this.placeholder = r, this.init()
    }

    function IShapeElement(t, e, n, i, r) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this._parent.constructor.call(this, t, e, n, i, r)
    }

    function ITextElement(t, e, n, i) {}

    function SVGTextElement(t, e, n, i, r) {
        this.textSpans = [], this.renderType = "svg", this._parent.constructor.call(this, t, e, n, i, r)
    }

    function SVGTintFilter(t, e) {
        this.filterManager = e;
        var n = document.createElementNS(svgNS, "feColorMatrix");
        if (n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), n.setAttribute("result", "f1"), t.appendChild(n), n = document.createElementNS(svgNS, "feColorMatrix"), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", "f2"), t.appendChild(n), this.matrixFilter = n, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
            var i = document.createElementNS(svgNS, "feMerge");
            t.appendChild(i);
            var r;
            r = document.createElementNS(svgNS, "feMergeNode"), r.setAttribute("in", "SourceGraphic"), i.appendChild(r), r = document.createElementNS(svgNS, "feMergeNode"), r.setAttribute("in", "f2"), i.appendChild(r)
        }
    }

    function SVGFillFilter(t, e) {
        this.filterManager = e;
        var n = document.createElementNS(svgNS, "feColorMatrix");
        n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(n), this.matrixFilter = n
    }

    function SVGStrokeEffect(t, e) {
        this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
    }

    function SVGTritoneFilter(t, e) {
        this.filterManager = e;
        var n = document.createElementNS(svgNS, "feColorMatrix");
        n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), n.setAttribute("result", "f1"), t.appendChild(n);
        var i = document.createElementNS(svgNS, "feComponentTransfer");
        i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
        var r = document.createElementNS(svgNS, "feFuncR");
        r.setAttribute("type", "table"), i.appendChild(r), this.feFuncR = r;
        var a = document.createElementNS(svgNS, "feFuncG");
        a.setAttribute("type", "table"), i.appendChild(a), this.feFuncG = a;
        var s = document.createElementNS(svgNS, "feFuncB");
        s.setAttribute("type", "table"), i.appendChild(s), this.feFuncB = s
    }

    function SVGProLevelsFilter(t, e) {
        this.filterManager = e;
        var n = this.filterManager.effectElements,
            i = document.createElementNS(svgNS, "feComponentTransfer");
        (n[9].p.k || 0 !== n[9].p.v || n[10].p.k || 1 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 0 !== n[12].p.v || n[13].p.k || 1 !== n[13].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (n[16].p.k || 0 !== n[16].p.v || n[17].p.k || 1 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 0 !== n[19].p.v || n[20].p.k || 1 !== n[20].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (n[23].p.k || 0 !== n[23].p.v || n[24].p.k || 1 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 0 !== n[26].p.v || n[27].p.k || 1 !== n[27].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (n[30].p.k || 0 !== n[30].p.v || n[31].p.k || 1 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 0 !== n[33].p.v || n[34].p.k || 1 !== n[34].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = document.createElementNS(svgNS, "feComponentTransfer")), (n[2].p.k || 0 !== n[2].p.v || n[3].p.k || 1 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 0 !== n[5].p.v || n[6].p.k || 1 !== n[6].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i))
    }

    function SVGDropShadowEffect(t, e) {
        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
        var n = document.createElementNS(svgNS, "feGaussianBlur");
        n.setAttribute("in", "SourceAlpha"), n.setAttribute("result", "drop_shadow_1"), n.setAttribute("stdDeviation", "0"), this.feGaussianBlur = n, t.appendChild(n);
        var i = document.createElementNS(svgNS, "feOffset");
        i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i);
        var r = document.createElementNS(svgNS, "feFlood");
        r.setAttribute("flood-color", "#00ff00"), r.setAttribute("flood-opacity", "1"), r.setAttribute("result", "drop_shadow_3"), this.feFlood = r, t.appendChild(r);
        var a = document.createElementNS(svgNS, "feComposite");
        a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
        var s = document.createElementNS(svgNS, "feMerge");
        t.appendChild(s);
        var o;
        o = document.createElementNS(svgNS, "feMergeNode"), s.appendChild(o), o = document.createElementNS(svgNS, "feMergeNode"), o.setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = s, this.originalNodeAdded = !1, s.appendChild(o)
    }

    function SVGMatte3Effect(t, e, n) {
        this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = n, n.matteElement = document.createElementNS(svgNS, "g"), n.matteElement.appendChild(n.layerElement), n.matteElement.appendChild(n.transformedElement), n.baseElement = n.matteElement
    }

    function SVGEffects(t) {
        var e, n = t.data.ef.length,
            i = randomString(10),
            r = filtersFactory.createFilter(i),
            a = 0;
        this.filters = [];
        var s;
        for (e = 0; n > e; e += 1) 20 === t.data.ef[e].ty ? (a += 1, s = new SVGTintFilter(r, t.effects.effectElements[e]), this.filters.push(s)) : 21 === t.data.ef[e].ty ? (a += 1, s = new SVGFillFilter(r, t.effects.effectElements[e]), this.filters.push(s)) : 22 === t.data.ef[e].ty ? (s = new SVGStrokeEffect(t, t.effects.effectElements[e]), this.filters.push(s)) : 23 === t.data.ef[e].ty ? (a += 1, s = new SVGTritoneFilter(r, t.effects.effectElements[e]), this.filters.push(s)) : 24 === t.data.ef[e].ty ? (a += 1, s = new SVGProLevelsFilter(r, t.effects.effectElements[e]), this.filters.push(s)) : 25 === t.data.ef[e].ty ? (a += 1, s = new SVGDropShadowEffect(r, t.effects.effectElements[e]), this.filters.push(s)) : 28 === t.data.ef[e].ty && (s = new SVGMatte3Effect(r, t.effects.effectElements[e], t), this.filters.push(s));
        a && (t.globalData.defs.appendChild(r), t.layerElement.setAttribute("filter", "url(#" + i + ")"))
    }

    function ICompElement(t, e, n, i, r) {
        this._parent.constructor.call(this, t, e, n, i, r), this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? Array.apply(null, {
            length: this.layers.length
        }) : [], this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, n.frameRate, this.dynamicProperties)), this.data.xt ? (this.layerElement = document.createElementNS(svgNS, "g"), this.buildAllItems()) : n.progressiveLoad || this.buildAllItems()
    }

    function IImageElement(t, e, n, i, r) {
        this.assetData = n.getAssetData(t.refId), this._parent.constructor.call(this, t, e, n, i, r)
    }

    function ISolidElement(t, e, n, i, r) {
        this._parent.constructor.call(this, t, e, n, i, r)
    }

    function CanvasRenderer(t, e) {
        this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet"
        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.contextData = {
            saved: Array.apply(null, {
                length: 15
            }),
            savedOp: Array.apply(null, {
                length: 15
            }),
            cArrPos: 0,
            cTr: new Matrix,
            cO: 1
        };
        var n;
        for (n = 0; 15 > n; n += 1) this.contextData.saved[n] = Array.apply(null, {
            length: 16
        });
        this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1
    }

    function HybridRenderer(t) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0
    }

    function CVBaseElement(t, e, n) {
        this.globalData = n, this.data = t, this.comp = e, this.canvasContext = n.canvasContext, this.init()
    }

    function CVCompElement(t, e, n) {
        this._parent.constructor.call(this, t, e, n);
        var i = {};
        for (var r in n) n.hasOwnProperty(r) && (i[r] = n[r]);
        i.renderer = this, i.compHeight = this.data.h, i.compWidth = this.data.w, this.renderConfig = {
            clearCanvas: !0
        }, this.contextData = {
            saved: Array.apply(null, {
                length: 15
            }),
            savedOp: Array.apply(null, {
                length: 15
            }),
            cArrPos: 0,
            cTr: new Matrix,
            cO: 1
        }, this.completeLayers = !1;
        var a;
        for (a = 0; 15 > a; a += 1) this.contextData.saved[a] = Array.apply(null, {
            length: 16
        });
        this.transformMat = new Matrix, this.parentGlobalData = this.globalData;
        var s = document.createElement("canvas");
        i.canvasContext = s.getContext("2d"), this.canvasContext = i.canvasContext, s.width = this.data.w, s.height = this.data.h, this.canvas = s, this.globalData = i, this.layers = t.layers, this.pendingElements = [], this.elements = Array.apply(null, {
            length: this.layers.length
        }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, n.frameRate, this.dynamicProperties)), (this.data.xt || !n.progressiveLoad) && this.buildAllItems()
    }

    function CVImageElement(t, e, n) {
        this.assetData = n.getAssetData(t.refId), this._parent.constructor.call(this, t, e, n), this.globalData.addPendingElement()
    }

    function CVMaskElement(t, e) {
        this.data = t, this.element = e, this.dynamicProperties = [], this.masksProperties = this.data.masksProperties, this.viewData = new Array(this.masksProperties.length);
        var n, i = this.masksProperties.length;
        for (n = 0; i > n; n++) this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3, this.dynamicProperties, null)
    }

    function CVShapeElement(t, e, n) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this._parent.constructor.call(this, t, e, n)
    }

    function CVSolidElement(t, e, n) {
        this._parent.constructor.call(this, t, e, n)
    }

    function CVTextElement(t, e, n) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
        }, this._parent.constructor.call(this, t, e, n)
    }

    function HBaseElement(t, e, n, i, r) {
        this.globalData = n, this.comp = i, this.data = t, this.matteElement = null, this.parentContainer = e, this.layerId = r ? r.layerId : "ly_" + randomString(10), this.placeholder = r, this.init()
    }

    function HSolidElement(t, e, n, i, r) {
        this._parent.constructor.call(this, t, e, n, i, r)
    }

    function HCompElement(t, e, n, i, r) {
        this._parent.constructor.call(this, t, e, n, i, r), this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = Array.apply(null, {
            length: this.layers.length
        }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, n.frameRate, this.dynamicProperties)), this.data.hasMask && (this.supports3d = !1), this.data.xt && (this.layerElement = document.createElement("div")), this.buildAllItems()
    }

    function HShapeElement(t, e, n, i, r) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this._parent.constructor.call(this, t, e, n, i, r), this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }
    }

    function HTextElement(t, e, n, i, r) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }, this.renderType = "svg", this.isMasked = !1, this._parent.constructor.call(this, t, e, n, i, r)
    }

    function HImageElement(t, e, n, i, r) {
        this.assetData = n.getAssetData(t.refId), this._parent.constructor.call(this, t, e, n, i, r)
    }

    function HCameraElement(t, e, n, i, r) {
        if (this._parent.constructor.call(this, t, e, n, i, r), this.pe = PropertyFactory.getProp(this, t.pe, 0, 0, this.dynamicProperties), t.ks.p.s ? (this.px = PropertyFactory.getProp(this, t.ks.p.x, 1, 0, this.dynamicProperties), this.py = PropertyFactory.getProp(this, t.ks.p.y, 1, 0, this.dynamicProperties), this.pz = PropertyFactory.getProp(this, t.ks.p.z, 1, 0, this.dynamicProperties)) : this.p = PropertyFactory.getProp(this, t.ks.p, 1, 0, this.dynamicProperties), t.ks.a && (this.a = PropertyFactory.getProp(this, t.ks.a, 1, 0, this.dynamicProperties)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var a, s = t.ks.or.k.length;
            for (a = 0; s > a; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null
        }
        this.or = PropertyFactory.getProp(this, t.ks.or, 1, degToRads, this.dynamicProperties), this.or.sh = !0, this.rx = PropertyFactory.getProp(this, t.ks.rx, 0, degToRads, this.dynamicProperties), this.ry = PropertyFactory.getProp(this, t.ks.ry, 0, degToRads, this.dynamicProperties), this.rz = PropertyFactory.getProp(this, t.ks.rz, 0, degToRads, this.dynamicProperties), this.mat = new Matrix
    }

    function SliderEffect(t, e, n) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
    }

    function AngleEffect(t, e, n) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
    }

    function ColorEffect(t, e, n) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, n)
    }

    function PointEffect(t, e, n) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, n)
    }

    function LayerIndexEffect(t, e, n) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
    }

    function MaskIndexEffect(t, e, n) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
    }

    function CheckboxEffect(t, e, n) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
    }

    function NoValueEffect() {
        this.p = {}
    }

    function EffectsManager(t, e, n) {
        var i = t.ef;
        this.effectElements = [];
        var r, a, s = i.length;
        for (r = 0; s > r; r++) a = new GroupEffect(i[r], e, n), this.effectElements.push(a)
    }

    function GroupEffect(t, e, n) {
        this.dynamicProperties = [], this.init(t, e, this.dynamicProperties), this.dynamicProperties.length && n.push(this)
    }

    function play(t) {
        animationManager.play(t)
    }

    function pause(t) {
        animationManager.pause(t)
    }

    function togglePause(t) {
        animationManager.togglePause(t)
    }

    function setSpeed(t, e) {
        animationManager.setSpeed(t, e)
    }

    function setDirection(t, e) {
        animationManager.setDirection(t, e)
    }

    function stop(t) {
        animationManager.stop(t)
    }

    function moveFrame(t) {
        animationManager.moveFrame(t)
    }

    function searchAnimations() {
        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
    }

    function registerAnimation(t) {
        return animationManager.registerAnimation(t)
    }

    function resize() {
        animationManager.resize()
    }

    function start() {
        animationManager.start()
    }

    function goToAndStop(t, e, n) {
        animationManager.goToAndStop(t, e, n)
    }

    function setSubframeRendering(t) {
        subframeEnabled = t
    }

    function loadAnimation(t) {
        return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
    }

    function destroy(t) {
        return animationManager.destroy(t)
    }

    function setQuality(t) {
        if ("string" == typeof t) switch (t) {
            case "high":
                defaultCurveSegments = 200;
                break;
            case "medium":
                defaultCurveSegments = 50;
                break;
            case "low":
                defaultCurveSegments = 10
        } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
        roundValues(!(defaultCurveSegments >= 50))
    }

    function inBrowser() {
        return "undefined" != typeof navigator
    }

    function installPlugin(t, e) {
        "expressions" === t && (expressionsPlugin = e)
    }

    function getFactory(t) {
        switch (t) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix
        }
    }

    function checkReady() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
    }

    function getQueryVariable(t) {
        for (var e = queryString.split("&"), n = 0; n < e.length; n++) {
            var i = e[n].split("=");
            if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
        }
    }
    var svgNS = "http://www.w3.org/2000/svg",
        subframeEnabled = !0,
        expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        cachedColors = {},
        bm_rounder = Math.round,
        bm_rnd, bm_pow = Math.pow,
        bm_sqrt = Math.sqrt,
        bm_abs = Math.abs,
        bm_floor = Math.floor,
        bm_max = Math.max,
        bm_min = Math.min,
        blitter = 10,
        BMMath = {};
    ! function() {
        var t, e = Object.getOwnPropertyNames(Math),
            n = e.length;
        for (t = 0; n > t; t += 1) BMMath[e[t]] = Math[e[t]]
    }(), BMMath.random = Math.random, BMMath.abs = function(t) {
        if ("object" == typeof t && t.length) {
            var e, n = Array.apply(null, {
                    length: t.length
                }),
                i = t.length;
            for (e = 0; i > e; e += 1) n[e] = Math.abs(t[e]);
            return n
        }
        return Math.abs(t)
    };
    var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = .5519;
    roundValues(!1);
    var rgbToHex = function() {
            var t, e, n = [];
            for (t = 0; 256 > t; t += 1) e = t.toString(16), n[t] = 1 == e.length ? "0" + e : e;
            return function(t, e, i) {
                return 0 > t && (t = 0), 0 > e && (e = 0), 0 > i && (i = 0), "#" + n[t] + n[e] + n[i]
            }
        }(),
        fillColorToString = function() {
            var t = [];
            return function(e, n) {
                return void 0 !== n && (e[3] = n), t[e[0]] || (t[e[0]] = {}), t[e[0]][e[1]] || (t[e[0]][e[1]] = {}), t[e[0]][e[1]][e[2]] || (t[e[0]][e[1]][e[2]] = {}), t[e[0]][e[1]][e[2]][e[3]] || (t[e[0]][e[1]][e[2]][e[3]] = "rgba(" + e.join(",") + ")"), t[e[0]][e[1]][e[2]][e[3]]
            }
        }(),
        Matrix = function() {
            function t() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function e(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    n = Math.sin(t);
                return this._t(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function n(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    n = Math.sin(t);
                return this._t(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1)
            }

            function i(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    n = Math.sin(t);
                return this._t(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1)
            }

            function r(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    n = Math.sin(t);
                return this._t(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function a(t, e) {
                return this._t(1, e, t, 1, 0, 0)
            }

            function s(t, e) {
                return this.shear(Math.tan(t), Math.tan(e))
            }

            function o(t, e) {
                var n = Math.cos(e),
                    i = Math.sin(e);
                return this._t(n, i, 0, 0, -i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, Math.tan(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function l(t, e, n) {
                return n = isNaN(n) ? 1 : n, 1 == t && 1 == e && 1 == n ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1)
            }

            function h(t, e, n, i, r, a, s, o, l, h, p, c, u, m, d, f) {
                return this.props[0] = t, this.props[1] = e, this.props[2] = n, this.props[3] = i, this.props[4] = r, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = c, this.props[12] = u, this.props[13] = m, this.props[14] = d, this.props[15] = f, this
            }

            function p(t, e, n) {
                return n = n || 0, 0 !== t || 0 !== e || 0 !== n ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, n, 1) : this
            }

            function c(t, e, n, i, r, a, s, o, l, h, p, c, u, m, d, f) {
                if (1 === t && 0 === e && 0 === n && 0 === i && 0 === r && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c) return (0 !== u || 0 !== m || 0 !== d) && (this.props[12] = this.props[12] * t + this.props[13] * r + this.props[14] * l + this.props[15] * u, this.props[13] = this.props[12] * e + this.props[13] * a + this.props[14] * h + this.props[15] * m, this.props[14] = this.props[12] * n + this.props[13] * s + this.props[14] * p + this.props[15] * d, this.props[15] = this.props[12] * i + this.props[13] * o + this.props[14] * c + this.props[15] * f), this._identityCalculated = !1, this;
                var y = this.props[0],
                    v = this.props[1],
                    g = this.props[2],
                    b = this.props[3],
                    x = this.props[4],
                    k = this.props[5],
                    _ = this.props[6],
                    E = this.props[7],
                    w = this.props[8],
                    S = this.props[9],
                    P = this.props[10],
                    C = this.props[11],
                    D = this.props[12],
                    T = this.props[13],
                    A = this.props[14],
                    M = this.props[15];
                return this.props[0] = y * t + v * r + g * l + b * u, this.props[1] = y * e + v * a + g * h + b * m, this.props[2] = y * n + v * s + g * p + b * d, this.props[3] = y * i + v * o + g * c + b * f, this.props[4] = x * t + k * r + _ * l + E * u, this.props[5] = x * e + k * a + _ * h + E * m, this.props[6] = x * n + k * s + _ * p + E * d, this.props[7] = x * i + k * o + _ * c + E * f, this.props[8] = w * t + S * r + P * l + C * u, this.props[9] = w * e + S * a + P * h + C * m, this.props[10] = w * n + S * s + P * p + C * d, this.props[11] = w * i + S * o + P * c + C * f, this.props[12] = D * t + T * r + A * l + M * u, this.props[13] = D * e + T * a + A * h + M * m, this.props[14] = D * n + T * s + A * p + M * d, this.props[15] = D * i + T * o + A * c + M * f, this._identityCalculated = !1, this
            }

            function u() {
                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function m(t) {
                var e;
                for (e = 0; 16 > e; e += 1) t.props[e] = this.props[e]
            }

            function d(t) {
                var e;
                for (e = 0; 16 > e; e += 1) this.props[e] = t[e]
            }

            function f(t, e, n) {
                return {
                    x: t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12],
                    y: t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13],
                    z: t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]
                }
            }

            function y(t, e, n) {
                return t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12]
            }

            function v(t, e, n) {
                return t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13]
            }

            function g(t, e, n) {
                return t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]
            }

            function b(t) {
                var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                    n = this.props[5] / e,
                    i = -this.props[1] / e,
                    r = -this.props[4] / e,
                    a = this.props[0] / e,
                    s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                    o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
                return [t[0] * n + t[1] * r + s, t[0] * i + t[1] * a + o, 0]
            }

            function x(t) {
                var e, n = t.length,
                    i = [];
                for (e = 0; n > e; e += 1) i[e] = b(t[e]);
                return i
            }

            function k(t, e, n, i) {
                if (i && 2 === i) {
                    var r = point_pool.newPoint();
                    return r[0] = t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12], r[1] = t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13], r
                }
                return [t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]]
            }

            function _(t, e) {
                return this.isIdentity() ? t + "," + e : bm_rnd(t * this.props[0] + e * this.props[4] + this.props[12]) + "," + bm_rnd(t * this.props[1] + e * this.props[5] + this.props[13])
            }

            function E() {
                return [this.props[0], this.props[1], this.props[2], this.props[3], this.props[4], this.props[5], this.props[6], this.props[7], this.props[8], this.props[9], this.props[10], this.props[11], this.props[12], this.props[13], this.props[14], this.props[15]]
            }

            function w() {
                return isSafari ? "matrix3d(" + roundTo2Decimals(this.props[0]) + "," + roundTo2Decimals(this.props[1]) + "," + roundTo2Decimals(this.props[2]) + "," + roundTo2Decimals(this.props[3]) + "," + roundTo2Decimals(this.props[4]) + "," + roundTo2Decimals(this.props[5]) + "," + roundTo2Decimals(this.props[6]) + "," + roundTo2Decimals(this.props[7]) + "," + roundTo2Decimals(this.props[8]) + "," + roundTo2Decimals(this.props[9]) + "," + roundTo2Decimals(this.props[10]) + "," + roundTo2Decimals(this.props[11]) + "," + roundTo2Decimals(this.props[12]) + "," + roundTo2Decimals(this.props[13]) + "," + roundTo2Decimals(this.props[14]) + "," + roundTo2Decimals(this.props[15]) + ")" : (this.cssParts[1] = this.props.join(","), this.cssParts.join(""))
            }

            function S() {
                return "matrix(" + this.props[0] + "," + this.props[1] + "," + this.props[4] + "," + this.props[5] + "," + this.props[12] + "," + this.props[13] + ")"
            }

            function P() {
                return "" + this.toArray()
            }
            return function() {
                this.reset = t, this.rotate = e, this.rotateX = n, this.rotateY = i, this.rotateZ = r, this.skew = s, this.skewFromAxis = o, this.shear = a, this.scale = l, this.setTransform = h, this.translate = p, this.transform = c, this.applyToPoint = f, this.applyToX = y, this.applyToY = v, this.applyToZ = g, this.applyToPointArray = k, this.applyToPointStringified = _, this.toArray = E, this.toCSS = w, this.to2dCSS = S, this.toString = P, this.clone = m, this.cloneFromProps = d, this.inversePoints = x, this.inversePoint = b, this._t = this.transform, this.isIdentity = u, this._identity = !0, this._identityCalculated = !1, this.props = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this.cssParts = ["matrix3d(", "", ")"]
            }
        }();
    ! function(t, e) {
        function n(n, h, p) {
            var v = [];
            h = 1 == h ? {
                entropy: !0
            } : h || {};
            var g = s(a(h.entropy ? [n, l(t)] : null == n ? o() : n, 3), v),
                b = new i(v),
                x = function() {
                    for (var t = b.g(u), e = d, n = 0; f > t;) t = (t + n) * c, e *= c, n = b.g(1);
                    for (; t >= y;) t /= 2, e /= 2, n >>>= 1;
                    return (t + n) / e
                };
            return x.int32 = function() {
                return 0 | b.g(4)
            }, x.quick = function() {
                return b.g(4) / 4294967296
            }, x.double = x, s(l(b.S), t), (h.pass || p || function(t, n, i, a) {
                return a && (a.S && r(a, b), t.state = function() {
                    return r(b, {})
                }), i ? (e[m] = t, n) : t
            })(x, g, "global" in h ? h.global : this == e, h.state)
        }

        function i(t) {
            var e, n = t.length,
                i = this,
                r = 0,
                a = i.i = i.j = 0,
                s = i.S = [];
            for (n || (t = [n++]); c > r;) s[r] = r++;
            for (r = 0; c > r; r++) s[r] = s[a = v & a + t[r % n] + (e = s[r])], s[a] = e;
            (i.g = function(t) {
                for (var e, n = 0, r = i.i, a = i.j, s = i.S; t--;) e = s[r = v & r + 1], n = n * c + s[v & (s[r] = s[a = v & a + e]) + (s[a] = e)];
                return i.i = r, i.j = a, n
            })(c)
        }

        function r(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
        }

        function a(t, e) {
            var n, i = [],
                r = typeof t;
            if (e && "object" == r)
                for (n in t) try {
                    i.push(a(t[n], e - 1))
                } catch (t) {}
            return i.length ? i : "string" == r ? t : t + "\0"
        }

        function s(t, e) {
            for (var n, i = t + "", r = 0; r < i.length;) e[v & r] = v & (n ^= 19 * e[v & r]) + i.charCodeAt(r++);
            return l(e)
        }

        function o() {
            try {
                if (h) return l(h.randomBytes(c));
                var e = new Uint8Array(c);
                return (p.crypto || p.msCrypto).getRandomValues(e), l(e)
            } catch (e) {
                var n = p.navigator,
                    i = n && n.plugins;
                return [+new Date, p, i, p.screen, l(t)]
            }
        }

        function l(t) {
            return String.fromCharCode.apply(0, t)
        }
        var h, p = this,
            c = 256,
            u = 6,
            m = "random",
            d = e.pow(c, u),
            f = e.pow(2, 52),
            y = 2 * f,
            v = c - 1;
        e["seed" + m] = n, s(e.random(), t)
    }([], BMMath);
    var BezierFactory = function() {
            function t(t, e, n, i, r) {
                var a = r || ("bez_" + t + "_" + e + "_" + n + "_" + i).replace(/\./g, "p");
                if (p[a]) return p[a];
                var s = new l([t, e, n, i]);
                return p[a] = s, s
            }

            function e(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function n(t, e) {
                return 3 * e - 6 * t
            }

            function i(t) {
                return 3 * t
            }

            function r(t, r, a) {
                return ((e(r, a) * t + n(r, a)) * t + i(r)) * t
            }

            function a(t, r, a) {
                return 3 * e(r, a) * t * t + 2 * n(r, a) * t + i(r)
            }

            function s(t, e, n, i, a) {
                var s, o, l = 0;
                do {
                    o = e + (n - e) / 2, s = r(o, i, a) - t, s > 0 ? n = o : e = o
                } while (Math.abs(s) > u && ++l < m);
                return o
            }

            function o(t, e, n, i) {
                for (var s = 0; c > s; ++s) {
                    var o = a(e, n, i);
                    if (0 === o) return e;
                    e -= (r(e, n, i) - t) / o
                }
                return e
            }

            function l(t) {
                this._p = t, this._mSampleValues = y ? new Float32Array(d) : new Array(d), this._precomputed = !1, this.get = this.get.bind(this)
            }
            var h = {};
            h.getBezierEasing = t;
            var p = {},
                c = 4,
                u = 1e-7,
                m = 10,
                d = 11,
                f = 1 / (d - 1),
                y = "function" == typeof Float32Array;
            return l.prototype = {
                get: function(t) {
                    var e = this._p[0],
                        n = this._p[1],
                        i = this._p[2],
                        a = this._p[3];
                    return this._precomputed || this._precompute(), e === n && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : r(this._getTForX(t), n, a)
                },
                _precompute: function() {
                    var t = this._p[0],
                        e = this._p[1],
                        n = this._p[2],
                        i = this._p[3];
                    this._precomputed = !0, (t !== e || n !== i) && this._calcSampleValues()
                },
                _calcSampleValues: function() {
                    for (var t = this._p[0], e = this._p[2], n = 0; d > n; ++n) this._mSampleValues[n] = r(n * f, t, e)
                },
                _getTForX: function(t) {
                    for (var e = this._p[0], n = this._p[2], i = this._mSampleValues, r = 0, l = 1, h = d - 1; l !== h && i[l] <= t; ++l) r += f;
                    --l;
                    var p = (t - i[l]) / (i[l + 1] - i[l]),
                        c = r + p * f,
                        u = a(c, e, n);
                    return u >= .001 ? o(t, c, e, n) : 0 === u ? c : s(t, r, r + f, e, n)
                }
            }, h
        }(),
        MatrixManager = matrixManagerFunction;
    ! function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
            var i = (new Date).getTime(),
                r = Math.max(0, 16 - (i - t)),
                a = window.setTimeout(function() {
                    e(i + r)
                }, r);
            return t = i + r, a
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }();
    var bez = bezFunction(),
        dataManager = dataFunctionManager(),
        FontManager = function() {
            function t(t, e) {
                var n = document.createElement("span");
                n.style.fontFamily = e;
                var i = document.createElement("span");
                i.innerHTML = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", n.appendChild(i), document.body.appendChild(n);
                var r = i.offsetWidth;
                return i.style.fontFamily = t + ", " + e, {
                    node: i,
                    w: r,
                    parent: n
                }
            }

            function e() {
                var t, n, i, r = this.fonts.length,
                    a = r;
                for (t = 0; r > t; t += 1)
                    if (this.fonts[t].loaded) a -= 1;
                    else if ("t" === this.fonts[t].fOrigin || 2 === this.fonts[t].origin) {
                    if (window.Typekit && window.Typekit.load && 0 === this.typekitLoaded) {
                        this.typekitLoaded = 1;
                        try {
                            window.Typekit.load({
                                async: !0,
                                active: function() {
                                    this.typekitLoaded = 2
                                }.bind(this)
                            })
                        } catch (t) {}
                    }
                    2 === this.typekitLoaded && (this.fonts[t].loaded = !0)
                } else "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (n = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, n.offsetWidth !== i ? (a -= 1, this.fonts[t].loaded = !0) : (n = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, n.offsetWidth !== i && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                0 !== a && Date.now() - this.initTime < l ? setTimeout(e.bind(this), 20) : setTimeout(function() {
                    this.loaded = !0
                }.bind(this), 0)
            }

            function n(t, e) {
                var n = document.createElementNS(svgNS, "text");
                n.style.fontSize = "100px", n.style.fontFamily = e.fFamily, n.textContent = "1", e.fClass ? (n.style.fontFamily = "inherit", n.className = e.fClass) : n.style.fontFamily = e.fFamily, t.appendChild(n);
                var i = document.createElement("canvas").getContext("2d");
                return i.font = "100px " + e.fFamily, i
            }

            function i(i, r) {
                if (!i) return void(this.loaded = !0);
                if (this.chars) return this.loaded = !0, void(this.fonts = i.list);
                var a, s = i.list,
                    o = s.length;
                for (a = 0; o > a; a += 1) {
                    if (s[a].loaded = !1, s[a].monoCase = t(s[a].fFamily, "monospace"), s[a].sansCase = t(s[a].fFamily, "sans-serif"), s[a].fPath) {
                        if ("p" === s[a].fOrigin || 3 === s[a].origin) {
                            var l = document.createElement("style");
                            l.type = "text/css", l.innerHTML = "@font-face {font-family: " + s[a].fFamily + "; font-style: normal; src: url('" + s[a].fPath + "');}", r.appendChild(l)
                        } else if ("g" === s[a].fOrigin || 1 === s[a].origin) {
                            var h = document.createElement("link");
                            h.type = "text/css", h.rel = "stylesheet", h.href = s[a].fPath, r.appendChild(h)
                        } else if ("t" === s[a].fOrigin || 2 === s[a].origin) {
                            var p = document.createElement("script");
                            p.setAttribute("src", s[a].fPath), r.appendChild(p)
                        }
                    } else s[a].loaded = !0;
                    s[a].helper = n(r, s[a]), this.fonts.push(s[a])
                }
                e.bind(this)()
            }

            function r(t) {
                if (t) {
                    this.chars || (this.chars = []);
                    var e, n, i, r = t.length,
                        a = this.chars.length;
                    for (e = 0; r > e; e += 1) {
                        for (n = 0, i = !1; a > n;) this.chars[n].style === t[e].style && this.chars[n].fFamily === t[e].fFamily && this.chars[n].ch === t[e].ch && (i = !0), n += 1;
                        i || (this.chars.push(t[e]), a += 1)
                    }
                }
            }

            function a(t, e, n) {
                for (var i = 0, r = this.chars.length; r > i;) {
                    if (this.chars[i].ch === t && this.chars[i].style === e && this.chars[i].fFamily === n) return this.chars[i];
                    i += 1
                }
            }

            function s(t, e, n) {
                return this.getFontByName(e).helper.measureText(t).width * n / 100
            }

            function o(t) {
                for (var e = 0, n = this.fonts.length; n > e;) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1
                }
                return "sans-serif"
            }
            var l = 5e3,
                h = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.loaded = !1, this.initTime = Date.now()
                };
            return h.prototype.addChars = r, h.prototype.addFonts = i, h.prototype.getCharData = a, h.prototype.getFontByName = o, h.prototype.measureText = s, h
        }(),
        PropertyFactory = function() {
            function t() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    this.mdf = !1;
                    var t = this.comp.renderedFrame - this.offsetTime;
                    if (!(t === this.lastFrame || this.lastFrame !== h && (this.lastFrame >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime || this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime))) {
                        for (var e, n, i = this.lastFrame < t ? this._lastIndex : 0, r = this.keyframes.length - 1, a = !0; a;) {
                            if (e = this.keyframes[i], n = this.keyframes[i + 1], i == r - 1 && t >= n.t - this.offsetTime) {
                                e.h && (e = n);
                                break
                            }
                            if (n.t - this.offsetTime > t) break;
                            r - 1 > i ? i += 1 : a = !1
                        }
                        this._lastIndex = i;
                        var s, o, l, p, c, u;
                        if (e.to) {
                            e.bezierData || bez.buildBezierData(e);
                            var m = e.bezierData;
                            if (t >= n.t - this.offsetTime || t < e.t - this.offsetTime) {
                                var d = t >= n.t - this.offsetTime ? m.points.length - 1 : 0;
                                for (o = m.points[d].point.length, s = 0; o > s; s += 1) this.pv[s] = m.points[d].point[s], this.v[s] = this.mult ? this.pv[s] * this.mult : this.pv[s], this.lastPValue[s] !== this.pv[s] && (this.mdf = !0, this.lastPValue[s] = this.pv[s]);
                                this._lastBezierData = null
                            } else {
                                e.__fnct ? u = e.__fnct : (u = BezierFactory.getBezierEasing(e.o.x, e.o.y, e.i.x, e.i.y, e.n).get, e.__fnct = u), l = u((t - (e.t - this.offsetTime)) / (n.t - this.offsetTime - (e.t - this.offsetTime)));
                                var f, y = m.segmentLength * l,
                                    v = this.lastFrame < t && this._lastBezierData === m ? this._lastAddedLength : 0;
                                for (c = this.lastFrame < t && this._lastBezierData === m ? this._lastPoint : 0, a = !0, p = m.points.length; a;) {
                                    if (v += m.points[c].partialLength, 0 === y || 0 === l || c == m.points.length - 1) {
                                        for (o = m.points[c].point.length, s = 0; o > s; s += 1) this.pv[s] = m.points[c].point[s], this.v[s] = this.mult ? this.pv[s] * this.mult : this.pv[s], this.lastPValue[s] !== this.pv[s] && (this.mdf = !0, this.lastPValue[s] = this.pv[s]);
                                        break
                                    }
                                    if (y >= v && y < v + m.points[c + 1].partialLength) {
                                        for (f = (y - v) / m.points[c + 1].partialLength, o = m.points[c].point.length, s = 0; o > s; s += 1) this.pv[s] = m.points[c].point[s] + (m.points[c + 1].point[s] - m.points[c].point[s]) * f, this.v[s] = this.mult ? this.pv[s] * this.mult : this.pv[s], this.lastPValue[s] !== this.pv[s] && (this.mdf = !0, this.lastPValue[s] = this.pv[s]);
                                        break
                                    }
                                    p - 1 > c ? c += 1 : a = !1
                                }
                                this._lastPoint = c, this._lastAddedLength = v - m.points[c].partialLength, this._lastBezierData = m
                            }
                        } else {
                            var g, b, x, k, _;
                            for (r = e.s.length, i = 0; r > i; i += 1) {
                                if (1 !== e.h && (t >= n.t - this.offsetTime ? l = 1 : t < e.t - this.offsetTime ? l = 0 : (e.o.x instanceof Array ? (e.__fnct || (e.__fnct = []), e.__fnct[i] ? u = e.__fnct[i] : (g = e.o.x[i] || e.o.x[0], b = e.o.y[i] || e.o.y[0], x = e.i.x[i] || e.i.x[0], k = e.i.y[i] || e.i.y[0], u = BezierFactory.getBezierEasing(g, b, x, k).get, e.__fnct[i] = u)) : e.__fnct ? u = e.__fnct : (g = e.o.x, b = e.o.y, x = e.i.x, k = e.i.y, u = BezierFactory.getBezierEasing(g, b, x, k).get, e.__fnct = u), l = u((t - (e.t - this.offsetTime)) / (n.t - this.offsetTime - (e.t - this.offsetTime))))), this.sh && 1 !== e.h) {
                                    var E = e.s[i],
                                        w = e.e[i]; - 180 > E - w ? E += 360 : E - w > 180 && (E -= 360), _ = E + (w - E) * l
                                } else _ = 1 === e.h ? e.s[i] : e.s[i] + (e.e[i] - e.s[i]) * l;
                                1 === r ? (this.v = this.mult ? _ * this.mult : _, this.pv = _, this.lastPValue != this.pv && (this.mdf = !0, this.lastPValue = this.pv)) : (this.v[i] = this.mult ? _ * this.mult : _, this.pv[i] = _, this.lastPValue[i] !== this.pv[i] && (this.mdf = !0, this.lastPValue[i] = this.pv[i]))
                            }
                        }
                    }
                    this.lastFrame = t, this.frameId = this.elem.globalData.frameId
                }
            }

            function e() {}

            function n(t, n, i) {
                this.mult = i, this.v = i ? n.k * i : n.k, this.pv = n.k, this.mdf = !1, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.getValue = e
            }

            function i(t, n, i) {
                this.mult = i, this.data = n, this.mdf = !1, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1, this.v = Array.apply(null, {
                    length: n.k.length
                }), this.pv = Array.apply(null, {
                    length: n.k.length
                }), this.lastValue = Array.apply(null, {
                    length: n.k.length
                });
                var r = Array.apply(null, {
                    length: n.k.length
                });
                this.vel = r.map(function() {
                    return 0
                });
                var a, s = n.k.length;
                for (a = 0; s > a; a += 1) this.v[a] = i ? n.k[a] * i : n.k[a], this.pv[a] = n.k[a];
                this.getValue = e
            }

            function r(e, n, i) {
                this.keyframes = n.k, this.offsetTime = e.data.st, this.lastValue = -99999, this.lastPValue = -99999, this.frameId = -1, this._lastIndex = 0, this.k = !0, this.kf = !0, this.data = n, this.mult = i, this.elem = e, this.comp = e.comp, this.lastFrame = h, this.v = i ? n.k[0].s[0] * i : n.k[0].s[0], this.pv = n.k[0].s[0], this.getValue = t
            }

            function a(e, n, i) {
                var r, a, s, o, l, p = n.k.length;
                for (r = 0; p - 1 > r; r += 1) n.k[r].to && n.k[r].s && n.k[r].e && (a = n.k[r].s, s = n.k[r].e, o = n.k[r].to, l = n.k[r].ti, (2 === a.length && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || 3 === a.length && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (n.k[r].to = null, n.k[r].ti = null));
                this.keyframes = n.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this.mult = i, this.elem = e, this.comp = e.comp, this.getValue = t, this.frameId = -1, this._lastIndex = 0, this.v = Array.apply(null, {
                    length: n.k[0].s.length
                }), this.pv = Array.apply(null, {
                    length: n.k[0].s.length
                }), this.lastValue = Array.apply(null, {
                    length: n.k[0].s.length
                }), this.lastPValue = Array.apply(null, {
                    length: n.k[0].s.length
                }), this.lastFrame = h
            }

            function s(t, e, s, o, l) {
                var h;
                if (2 === s) h = new p(t, e, l);
                else if (0 === e.a) h = 0 === s ? new n(t, e, o) : new i(t, e, o);
                else if (1 === e.a) h = 0 === s ? new r(t, e, o) : new a(t, e, o);
                else if (e.k.length)
                    if ("number" == typeof e.k[0]) h = new i(t, e, o);
                    else switch (s) {
                        case 0:
                            h = new r(t, e, o);
                            break;
                        case 1:
                            h = new a(t, e, o)
                    } else h = new n(t, e, o);
                return h.k && l.push(h), h
            }

            function o(t, e, n, i) {
                return new u(t, e, n, i)
            }

            function l(t, e, n) {
                return new m(t, e, n)
            }
            var h = -999999,
                p = function() {
                    function t() {
                        return this.p ? ExpressionValue(this.p) : [this.px.v, this.py.v, this.pz ? this.pz.v : 0]
                    }

                    function e() {
                        return ExpressionValue(this.px)
                    }

                    function n() {
                        return ExpressionValue(this.py)
                    }

                    function i() {
                        return ExpressionValue(this.a)
                    }

                    function r() {
                        return ExpressionValue(this.or)
                    }

                    function a() {
                        return this.r ? ExpressionValue(this.r, 1 / degToRads) : ExpressionValue(this.rz, 1 / degToRads)
                    }

                    function s() {
                        return ExpressionValue(this.s, 100)
                    }

                    function o() {
                        return ExpressionValue(this.o, 100)
                    }

                    function l() {
                        return ExpressionValue(this.sk)
                    }

                    function h() {
                        return ExpressionValue(this.sa)
                    }

                    function p(t) {
                        var e, n = this.dynamicProperties.length;
                        for (e = 0; n > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
                        this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }

                    function c() {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.mdf = !1;
                            var t, e = this.dynamicProperties.length;
                            for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                            if (this.mdf) {
                                if (this.v.reset(), this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented && this.p.keyframes && this.p.getValueAtTime) {
                                    var n, i;
                                    this.p.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / this.elem.globalData.frameRate, 0), i = this.p.getValueAtTime(this.p.keyframes[0].t / this.elem.globalData.frameRate, 0)) : this.p.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / this.elem.globalData.frameRate, 0), i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / this.elem.globalData.frameRate, 0)) : (n = this.p.pv, i = this.p.getValueAtTime((this.p.lastFrame + this.p.offsetTime - .01) / this.elem.globalData.frameRate, this.p.offsetTime)), this.v.rotate(-Math.atan2(n[1] - i[1], n[0] - i[0]))
                                }
                                this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function u() {
                        this.inverted = !0, this.iv = new Matrix, this.k || (this.data.p.s ? this.iv.translate(this.px.v, this.py.v, -this.pz.v) : this.iv.translate(this.p.v[0], this.p.v[1], -this.p.v[2]), this.r ? this.iv.rotate(-this.r.v) : this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.s && this.iv.scale(this.s.v[0], this.s.v[1], 1), this.a && this.iv.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]))
                    }

                    function m() {}
                    return function(d, f, y) {
                        this.elem = d, this.frameId = -1, this.type = "transform", this.dynamicProperties = [], this.mdf = !1, this.data = f, this.getValue = c, this.applyToMatrix = p, this.setInverted = u, this.autoOrient = m, this.v = new Matrix, f.p.s ? (this.px = PropertyFactory.getProp(d, f.p.x, 0, 0, this.dynamicProperties), this.py = PropertyFactory.getProp(d, f.p.y, 0, 0, this.dynamicProperties), f.p.z && (this.pz = PropertyFactory.getProp(d, f.p.z, 0, 0, this.dynamicProperties))) : this.p = PropertyFactory.getProp(d, f.p, 1, 0, this.dynamicProperties), f.r ? this.r = PropertyFactory.getProp(d, f.r, 0, degToRads, this.dynamicProperties) : f.rx && (this.rx = PropertyFactory.getProp(d, f.rx, 0, degToRads, this.dynamicProperties), this.ry = PropertyFactory.getProp(d, f.ry, 0, degToRads, this.dynamicProperties), this.rz = PropertyFactory.getProp(d, f.rz, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(d, f.or, 1, degToRads, this.dynamicProperties)), f.sk && (this.sk = PropertyFactory.getProp(d, f.sk, 0, degToRads, this.dynamicProperties), this.sa = PropertyFactory.getProp(d, f.sa, 0, degToRads, this.dynamicProperties)), f.a && (this.a = PropertyFactory.getProp(d, f.a, 1, 0, this.dynamicProperties)), f.s && (this.s = PropertyFactory.getProp(d, f.s, 1, .01, this.dynamicProperties)), this.o = f.o ? PropertyFactory.getProp(d, f.o, 0, .01, y) : {
                            mdf: !1,
                            v: 1
                        }, this.dynamicProperties.length ? y.push(this) : (this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? f.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), Object.defineProperty(this, "position", {
                            get: t
                        }), Object.defineProperty(this, "xPosition", {
                            get: e
                        }), Object.defineProperty(this, "yPosition", {
                            get: n
                        }), Object.defineProperty(this, "orientation", {
                            get: r
                        }), Object.defineProperty(this, "anchorPoint", {
                            get: i
                        }), Object.defineProperty(this, "rotation", {
                            get: a
                        }), Object.defineProperty(this, "scale", {
                            get: s
                        }), Object.defineProperty(this, "opacity", {
                            get: o
                        }), Object.defineProperty(this, "skew", {
                            get: l
                        }), Object.defineProperty(this, "skewAxis", {
                            get: h
                        })
                    }
                }(),
                c = function() {
                    function t(t) {
                        if (this.prop.getValue(), this.cmdf = !1, this.omdf = !1, this.prop.mdf || t) {
                            var e, n, i, r = 4 * this.data.p;
                            for (e = 0; r > e; e += 1) n = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * n), this.c[e] !== i && (this.c[e] = i, this.cmdf = !0);
                            if (this.o.length)
                                for (r = this.prop.v.length, e = 4 * this.data.p; r > e; e += 1) n = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this.omdf = !0)
                        }
                    }

                    function e(e, n, i) {
                        this.prop = s(e, n.k, 1, null, []), this.data = n, this.k = this.prop.k, this.c = Array.apply(null, {
                            length: 4 * n.p
                        });
                        var r = n.k.k[0].s ? n.k.k[0].s.length - 4 * n.p : n.k.k.length - 4 * n.p;
                        this.o = Array.apply(null, {
                            length: r
                        }), this.cmdf = !1, this.omdf = !1, this.getValue = t, this.prop.k && i.push(this), this.getValue(!0)
                    }
                    return function(t, n, i) {
                        return new e(t, n, i)
                    }
                }(),
                u = function() {
                    function t(t) {
                        var e = 0,
                            n = this.dataProps.length;
                        if (this.elem.globalData.frameId !== this.frameId || t) {
                            for (this.mdf = !1, this.frameId = this.elem.globalData.frameId; n > e;) {
                                if (this.dataProps[e].p.mdf) {
                                    this.mdf = !0;
                                    break
                                }
                                e += 1
                            }
                            if (this.mdf || t)
                                for ("svg" === this.renderer && (this.dasharray = ""), e = 0; n > e; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dasharray += " " + this.dataProps[e].p.v : this.dasharray[e] = this.dataProps[e].p.v : this.dashoffset = this.dataProps[e].p.v
                        }
                    }
                    return function(e, n, i, r) {
                        this.elem = e, this.frameId = -1, this.dataProps = new Array(n.length), this.renderer = i, this.mdf = !1, this.k = !1, this.dasharray = "svg" === this.renderer ? "" : new Array(n.length - 1), this.dashoffset = 0;
                        var a, s, o = n.length;
                        for (a = 0; o > a; a += 1) s = PropertyFactory.getProp(e, n[a].v, 0, 0, r), this.k = !!s.k || this.k, this.dataProps[a] = {
                            n: n[a].n,
                            p: s
                        };
                        this.getValue = t, this.k ? r.push(this) : this.getValue(!0)
                    }
                }(),
                m = function() {
                    function t() {
                        if (this.dynamicProperties.length) {
                            var t, e = this.dynamicProperties.length;
                            for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0)
                        }
                        var n = this.data.totalChars,
                            i = 2 === this.data.r ? 1 : 100 / n,
                            r = this.o.v / i,
                            a = this.s.v / i + r,
                            s = this.e.v / i + r;
                        if (a > s) {
                            var o = a;
                            a = s, s = o
                        }
                        this.finalS = a, this.finalE = s
                    }

                    function e(t) {
                        var e = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                            a = 0,
                            s = this.finalS,
                            o = this.finalE,
                            l = this.data.sh;
                        if (2 == l) a = o === s ? t >= o ? 1 : 0 : n(0, i(.5 / (o - s) + (t - s) / (o - s), 1)), a = e(a);
                        else if (3 == l) a = o === s ? t >= o ? 0 : 1 : 1 - n(0, i(.5 / (o - s) + (t - s) / (o - s), 1)), a = e(a);
                        else if (4 == l) o === s ? a = 0 : (a = n(0, i(.5 / (o - s) + (t - s) / (o - s), 1)), .5 > a ? a *= 2 : a = 1 - 2 * (a - .5)), a = e(a);
                        else if (5 == l) {
                            if (o === s) a = 0;
                            else {
                                var h = o - s;
                                t = i(n(0, t + .5 - s), o - s);
                                var p = -h / 2 + t,
                                    c = h / 2;
                                a = Math.sqrt(1 - p * p / (c * c))
                            }
                            a = e(a)
                        } else 6 == l ? (o === s ? a = 0 : (t = i(n(0, t + .5 - s), o - s), a = (1 + Math.cos(Math.PI + 2 * Math.PI * t / (o - s))) / 2), a = e(a)) : (t >= r(s) && (a = 0 > t - s ? 1 - (s - t) : n(0, i(o - t, 1))), a = e(a));
                        return a * this.a.v
                    }
                    var n = Math.max,
                        i = Math.min,
                        r = Math.floor;
                    return function(n, i, r) {
                        this.mdf = !1, this.k = !1, this.data = i, this.dynamicProperties = [], this.getValue = t, this.getMult = e, this.comp = n.comp, this.finalS = 0, this.finalE = 0, this.s = PropertyFactory.getProp(n, i.s || {
                            k: 0
                        }, 0, 0, this.dynamicProperties), this.e = "e" in i ? PropertyFactory.getProp(n, i.e, 0, 0, this.dynamicProperties) : {
                            v: 2 === i.r ? i.totalChars : 100
                        }, this.o = PropertyFactory.getProp(n, i.o || {
                            k: 0
                        }, 0, 0, this.dynamicProperties), this.xe = PropertyFactory.getProp(n, i.xe || {
                            k: 0
                        }, 0, 0, this.dynamicProperties), this.ne = PropertyFactory.getProp(n, i.ne || {
                            k: 0
                        }, 0, 0, this.dynamicProperties), this.a = PropertyFactory.getProp(n, i.a, 0, .01, this.dynamicProperties), this.dynamicProperties.length ? r.push(this) : this.getValue()
                    }
                }(),
                d = {};
            return d.getProp = s, d.getDashProp = o, d.getTextSelectorProp = l, d.getGradientProp = c, d
        }();
    ShapePath.prototype.setPathData = function(t, e) {
        for (this.c = t; e > this._maxLength;) this.doubleArrayLength();
        for (var n = 0; e > n;) this.v[n] = point_pool.newPoint(), this.o[n] = point_pool.newPoint(), this.i[n] = point_pool.newPoint(), n += 1;
        this._length = e
    }, ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(Array.apply(null, {
            length: this._maxLength
        })), this.i = this.i.concat(Array.apply(null, {
            length: this._maxLength
        })), this.o = this.o.concat(Array.apply(null, {
            length: this._maxLength
        })), this._maxLength *= 2
    }, ShapePath.prototype.setXYAt = function(t, e, n, i, r) {
        var a;
        switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), n) {
            case "v":
                a = this.v;
                break;
            case "i":
                a = this.i;
                break;
            case "o":
                a = this.o
        }(!a[i] || a[i] && !r) && (a[i] = point_pool.newPoint()), a[i][0] = t, a[i][1] = e
    }, ShapePath.prototype.setTripleAt = function(t, e, n, i, r, a, s, o) {
        this.setXYAt(t, e, "v", s, o), this.setXYAt(n, i, "o", s, o), this.setXYAt(r, a, "i", s, o)
    };
    var ShapePropertyFactory = function() {
            function t() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    this.mdf = !1;
                    var t = this.comp.renderedFrame - this.offsetTime;
                    if (this.lastFrame === s || !(this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime || this.lastFrame > this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t > this.keyframes[this.keyframes.length - 1].t - this.offsetTime)) {
                        var e, n, i;
                        if (t < this.keyframes[0].t - this.offsetTime) e = this.keyframes[0].s[0], i = !0, this._lastIndex = 0;
                        else if (t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime) e = 1 === this.keyframes[this.keyframes.length - 2].h ? this.keyframes[this.keyframes.length - 1].s[0] : this.keyframes[this.keyframes.length - 2].e[0], i = !0;
                        else {
                            for (var r, a, o, l, h, p, c = this.lastFrame < s ? this._lastIndex : 0, u = this.keyframes.length - 1, m = !0; m && (r = this.keyframes[c], a = this.keyframes[c + 1], !(a.t - this.offsetTime > t));) u - 1 > c ? c += 1 : m = !1;
                            i = 1 === r.h, this._lastIndex = c;
                            var d;
                            if (!i) {
                                if (t >= a.t - this.offsetTime) d = 1;
                                else if (t < r.t - this.offsetTime) d = 0;
                                else {
                                    var f;
                                    r.__fnct ? f = r.__fnct : (f = BezierFactory.getBezierEasing(r.o.x, r.o.y, r.i.x, r.i.y).get, r.__fnct = f), d = f((t - (r.t - this.offsetTime)) / (a.t - this.offsetTime - (r.t - this.offsetTime)))
                                }
                                n = r.e[0]
                            }
                            e = r.s[0]
                        }
                        l = this.v._length, p = e.i[0].length;
                        var y, v = !1;
                        for (o = 0; l > o; o += 1)
                            for (h = 0; p > h; h += 1) i ? (y = e.i[o][h], this.v.i[o][h] !== y && (this.v.i[o][h] = y, this.pv.i[o][h] = y, v = !0), y = e.o[o][h], this.v.o[o][h] !== y && (this.v.o[o][h] = y, this.pv.o[o][h] = y, v = !0), y = e.v[o][h], this.v.v[o][h] !== y && (this.v.v[o][h] = y, this.pv.v[o][h] = y, v = !0)) : (y = e.i[o][h] + (n.i[o][h] - e.i[o][h]) * d, this.v.i[o][h] !== y && (this.v.i[o][h] = y, this.pv.i[o][h] = y, v = !0), y = e.o[o][h] + (n.o[o][h] - e.o[o][h]) * d, this.v.o[o][h] !== y && (this.v.o[o][h] = y, this.pv.o[o][h] = y, v = !0), y = e.v[o][h] + (n.v[o][h] - e.v[o][h]) * d, this.v.v[o][h] !== y && (this.v.v[o][h] = y, this.pv.v[o][h] = y, v = !0));
                        this.mdf = v, this.v.c = e.c, this.paths = this.localShapeCollection
                    }
                    this.lastFrame = t, this.frameId = this.elem.globalData.frameId
                }
            }

            function e() {
                return this.v
            }

            function n() {
                this.paths = this.localShapeCollection, this.k || (this.mdf = !1)
            }

            function i(t, i, r) {
                this.comp = t.comp, this.k = !1, this.mdf = !1, this.v = shape_pool.newShape();
                var a = 3 === r ? i.pt.k : i.ks.k;
                this.v.v = a.v, this.v.i = a.i, this.v.o = a.o, this.v.c = a.c, this.v._length = this.v.v.length, this.getValue = e, this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = n
            }

            function r(e, i, r) {
                this.comp = e.comp, this.elem = e, this.offsetTime = e.data.st, this._lastIndex = 0, this.getValue = t, this.keyframes = 3 === r ? i.pt.k : i.ks.k, this.k = !0, this.kf = !0;
                var a = this.keyframes[0].s[0].i.length;
                this.keyframes[0].s[0].i[0].length, this.v = shape_pool.newShape(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = s, this.reset = n
            }

            function a(t, e, n, a) {
                var s;
                if (3 === n || 4 === n) {
                    var p = 3 === n ? e.pt : e.ks,
                        c = p.k;
                    s = 1 === p.a || c.length ? new r(t, e, n) : new i(t, e, n)
                } else 5 === n ? s = new h(t, e) : 6 === n ? s = new o(t, e) : 7 === n && (s = new l(t, e));
                return s.k && a.push(s), s
            }
            var s = -999999,
                o = function() {
                    function t() {
                        var t = this.p.v[0],
                            e = this.p.v[1],
                            n = this.s.v[0] / 2,
                            r = this.s.v[1] / 2;
                        3 !== this.d ? (this.v.v[0][0] = t, this.v.v[0][1] = e - r, this.v.v[1][0] = t + n, this.v.v[1][1] = e, this.v.v[2][0] = t, this.v.v[2][1] = e + r, this.v.v[3][0] = t - n, this.v.v[3][1] = e, this.v.i[0][0] = t - n * i, this.v.i[0][1] = e - r, this.v.i[1][0] = t + n, this.v.i[1][1] = e - r * i, this.v.i[2][0] = t + n * i, this.v.i[2][1] = e + r, this.v.i[3][0] = t - n, this.v.i[3][1] = e + r * i, this.v.o[0][0] = t + n * i, this.v.o[0][1] = e - r, this.v.o[1][0] = t + n, this.v.o[1][1] = e + r * i, this.v.o[2][0] = t - n * i, this.v.o[2][1] = e + r, this.v.o[3][0] = t - n, this.v.o[3][1] = e - r * i) : (this.v.v[0][0] = t, this.v.v[0][1] = e - r, this.v.v[1][0] = t - n, this.v.v[1][1] = e, this.v.v[2][0] = t, this.v.v[2][1] = e + r, this.v.v[3][0] = t + n, this.v.v[3][1] = e, this.v.i[0][0] = t + n * i, this.v.i[0][1] = e - r, this.v.i[1][0] = t - n, this.v.i[1][1] = e - r * i, this.v.i[2][0] = t - n * i, this.v.i[2][1] = e + r, this.v.i[3][0] = t + n, this.v.i[3][1] = e + r * i, this.v.o[0][0] = t - n * i, this.v.o[0][1] = e - r, this.v.o[1][0] = t - n, this.v.o[1][1] = e + r * i, this.v.o[2][0] = t + n * i, this.v.o[2][1] = e + r, this.v.o[3][0] = t + n, this.v.o[3][1] = e - r * i)
                    }

                    function e(t) {
                        var e, n = this.dynamicProperties.length;
                        if (this.elem.globalData.frameId !== this.frameId) {
                            for (this.mdf = !1, this.frameId = this.elem.globalData.frameId, e = 0; n > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
                            this.mdf && this.convertEllToPath()
                        }
                    }
                    var i = roundCorner;
                    return function(i, r) {
                        this.v = shape_pool.newShape(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = r.d, this.dynamicProperties = [], this.elem = i, this.comp = i.comp, this.frameId = -1, this.mdf = !1, this.getValue = e, this.convertEllToPath = t, this.reset = n, this.p = PropertyFactory.getProp(i, r.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(i, r.s, 1, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertEllToPath()
                    }
                }(),
                l = function() {
                    function t() {
                        var t, e = Math.floor(this.pt.v),
                            n = 2 * Math.PI / e,
                            i = this.or.v,
                            r = this.os.v,
                            a = 2 * Math.PI * i / (4 * e),
                            s = -Math.PI / 2,
                            o = 3 === this.data.d ? -1 : 1;
                        for (s += this.r.v, this.v._length = 0, t = 0; e > t; t += 1) {
                            var l = i * Math.cos(s),
                                h = i * Math.sin(s),
                                p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                            l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - p * a * r * o, h - c * a * r * o, l + p * a * r * o, h + c * a * r * o, t, !0), s += n * o
                        }
                        this.paths.length = 0, this.paths[0] = this.v
                    }

                    function e() {
                        var t, e, n, i, r = 2 * Math.floor(this.pt.v),
                            a = 2 * Math.PI / r,
                            s = !0,
                            o = this.or.v,
                            l = this.ir.v,
                            h = this.os.v,
                            p = this.is.v,
                            c = 2 * Math.PI * o / (2 * r),
                            u = 2 * Math.PI * l / (2 * r),
                            m = -Math.PI / 2;
                        m += this.r.v;
                        var d = 3 === this.data.d ? -1 : 1;
                        for (this.v._length = 0, t = 0; r > t; t += 1) {
                            e = s ? o : l, n = s ? h : p, i = s ? c : u;
                            var f = e * Math.cos(m),
                                y = e * Math.sin(m),
                                v = 0 === f && 0 === y ? 0 : y / Math.sqrt(f * f + y * y),
                                g = 0 === f && 0 === y ? 0 : -f / Math.sqrt(f * f + y * y);
                            f += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(f, y, f - v * i * n * d, y - g * i * n * d, f + v * i * n * d, y + g * i * n * d, t, !0), s = !s, m += a * d
                        }
                    }

                    function i() {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                            var t, e = this.dynamicProperties.length;
                            for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                            this.mdf && this.convertToPath()
                        }
                    }
                    return function(r, a) {
                        this.v = shape_pool.newShape(), this.v.setPathData(!0, 0), this.elem = r, this.comp = r.comp, this.data = a, this.frameId = -1, this.d = a.d, this.dynamicProperties = [], this.mdf = !1, this.getValue = i, this.reset = n, 1 === a.sy ? (this.ir = PropertyFactory.getProp(r, a.ir, 0, 0, this.dynamicProperties), this.is = PropertyFactory.getProp(r, a.is, 0, .01, this.dynamicProperties), this.convertToPath = e) : this.convertToPath = t, this.pt = PropertyFactory.getProp(r, a.pt, 0, 0, this.dynamicProperties), this.p = PropertyFactory.getProp(r, a.p, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(r, a.r, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(r, a.or, 0, 0, this.dynamicProperties), this.os = PropertyFactory.getProp(r, a.os, 0, .01, this.dynamicProperties), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : this.convertToPath()
                    }
                }(),
                h = function() {
                    function t(t) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                            var e, n = this.dynamicProperties.length;
                            for (e = 0; n > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
                            this.mdf && this.convertRectToPath()
                        }
                    }

                    function e() {
                        var t = this.p.v[0],
                            e = this.p.v[1],
                            n = this.s.v[0] / 2,
                            i = this.s.v[1] / 2,
                            r = bm_min(n, i, this.r.v),
                            a = r * (1 - roundCorner);
                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + n, e - i + r, t + n, e - i + r, t + n, e - i + a, 0, !0), this.v.setTripleAt(t + n, e + i - r, t + n, e + i - a, t + n, e + i - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + n - r, e + i, t + n - r, e + i, t + n - a, e + i, 2, !0), this.v.setTripleAt(t - n + r, e + i, t - n + a, e + i, t - n + r, e + i, 3, !0), this.v.setTripleAt(t - n, e + i - r, t - n, e + i - r, t - n, e + i - a, 4, !0), this.v.setTripleAt(t - n, e - i + r, t - n, e - i + a, t - n, e - i + r, 5, !0), this.v.setTripleAt(t - n + r, e - i, t - n + r, e - i, t - n + a, e - i, 6, !0), this.v.setTripleAt(t + n - r, e - i, t + n - a, e - i, t + n - r, e - i, 7, !0)) : (this.v.setTripleAt(t - n, e + i, t - n + a, e + i, t - n, e + i, 2), this.v.setTripleAt(t - n, e - i, t - n, e - i + a, t - n, e - i, 3))) : (this.v.setTripleAt(t + n, e - i + r, t + n, e - i + a, t + n, e - i + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + n - r, e - i, t + n - r, e - i, t + n - a, e - i, 1, !0), this.v.setTripleAt(t - n + r, e - i, t - n + a, e - i, t - n + r, e - i, 2, !0), this.v.setTripleAt(t - n, e - i + r, t - n, e - i + r, t - n, e - i + a, 3, !0), this.v.setTripleAt(t - n, e + i - r, t - n, e + i - a, t - n, e + i - r, 4, !0), this.v.setTripleAt(t - n + r, e + i, t - n + r, e + i, t - n + a, e + i, 5, !0), this.v.setTripleAt(t + n - r, e + i, t + n - a, e + i, t + n - r, e + i, 6, !0), this.v.setTripleAt(t + n, e + i - r, t + n, e + i - r, t + n, e + i - a, 7, !0)) : (this.v.setTripleAt(t - n, e - i, t - n + a, e - i, t - n, e - i, 1, !0), this.v.setTripleAt(t - n, e + i, t - n, e + i - a, t - n, e + i, 2, !0), this.v.setTripleAt(t + n, e + i, t + n - a, e + i, t + n, e + i, 3, !0)))
                    }
                    return function(i, r) {
                        this.v = shape_pool.newShape(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = i, this.comp = i.comp, this.frameId = -1, this.d = r.d, this.dynamicProperties = [], this.mdf = !1, this.getValue = t, this.convertRectToPath = e, this.reset = n, this.p = PropertyFactory.getProp(i, r.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(i, r.s, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(i, r.r, 0, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertRectToPath()
                    }
                }(),
                p = {};
            return p.getShapeProp = a, p
        }(),
        ShapeModifiers = function() {
            function t(t, e) {
                i[t] || (i[t] = e)
            }

            function e(t, e, n, r) {
                return new i[t](e, n, r)
            }
            var n = {},
                i = {};
            return n.registerModifier = t, n.getModifier = e, n
        }();
    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
        this.closed || (this.shapes.push({
            shape: t.sh,
            data: t,
            localShapeCollection: shapeCollection_pool.newShapeCollection()
        }), this.addShapeToModifier(t.sh))
    }, ShapeModifier.prototype.init = function(t, e, n) {
        this.elem = t, this.frameId = -1, this.shapes = [], this.dynamicProperties = [], this.mdf = !1, this.closed = !1, this.k = !1, this.comp = t.comp, this.initModifierProperties(t, e), this.dynamicProperties.length ? (this.k = !0, n.push(this)) : this.getValue(!0)
    }, extendPrototype(ShapeModifier, TrimModifier), TrimModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = !!t, this.frameId = this.elem.globalData.frameId;
            var e, n = this.dynamicProperties.length;
            for (e = 0; n > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
            if (this.mdf || t) {
                var i = this.o.v % 360 / 360;
                0 > i && (i += 1);
                var r = this.s.v + i,
                    a = this.e.v + i;
                if (r > a) {
                    var s = r;
                    r = a, a = s
                }
                this.sValue = r, this.eValue = a, this.oValue = i
            }
        }
    }, TrimModifier.prototype.initModifierProperties = function(t, e) {
        this.sValue = 0, this.eValue = 0, this.oValue = 0, this.getValue = this.processKeys, this.s = PropertyFactory.getProp(t, e.s, 0, .01, this.dynamicProperties), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this.dynamicProperties), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this.dynamicProperties), this.m = e.m, this.dynamicProperties.length || this.getValue(!0)
    }, TrimModifier.prototype.getSegmentsLength = function(t) {
        var e, n = t.c,
            i = t.v,
            r = t.o,
            a = t.i,
            s = t._length,
            o = [],
            l = 0;
        for (e = 0; s - 1 > e; e += 1) o[e] = bez.getBezierLength(i[e], i[e + 1], r[e], a[e + 1]), l += o[e].addedLength;
        return n && (o[e] = bez.getBezierLength(i[e], i[0], r[e], a[0]), l += o[e].addedLength), {
            lengths: o,
            totalLength: l
        }
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, n, i, r) {
        var a = [];
        1 >= e ? a.push({
            s: t,
            e: e
        }) : t >= 1 ? a.push({
            s: t - 1,
            e: e - 1
        }) : (a.push({
            s: t,
            e: 1
        }), a.push({
            s: 0,
            e: e - 1
        }));
        var s, o, l = [],
            h = a.length;
        for (s = 0; h > s; s += 1)
            if (o = a[s], o.e * r < i || o.s * r > i + n);
            else {
                var p, c;
                p = o.s * r <= i ? 0 : (o.s * r - i) / n, c = o.e * r >= i + n ? 1 : (o.e * r - i) / n, l.push([p, c])
            }
        return l.length || l.push([0, 0]), l
    }, TrimModifier.prototype.processShapes = function(t) {
        var e, n, i, r, a, s, o, l = this.shapes.length,
            h = this.sValue,
            p = this.eValue,
            c = 0;
        if (p === h)
            for (n = 0; l > n; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape.mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection;
        else if (1 === p && 0 === h || 0 === p && 1 === h) {
            if (this.mdf)
                for (n = 0; l > n; n += 1) this.shapes[n].shape.mdf = !0
        } else {
            var u, m, d = [];
            for (n = 0; l > n; n += 1)
                if (u = this.shapes[n], u.shape.mdf || this.mdf || t || 2 === this.m) {
                    if (e = u.shape.paths, r = e._length, o = 0, !u.shape.mdf && u.pathsData) o = u.totalShapeLength;
                    else {
                        for (a = [], i = 0; r > i; i += 1) s = this.getSegmentsLength(e.shapes[i]), a.push(s), o += s.totalLength;
                        u.totalShapeLength = o, u.pathsData = a
                    }
                    c += o, u.shape.mdf = !0
                } else u.shape.paths = u.localShapeCollection;
            var i, r, f = h,
                y = p,
                v = 0;
            for (n = l - 1; n >= 0; n -= 1)
                if (u = this.shapes[n], u.shape.mdf) {
                    if (m = u.localShapeCollection, m.releaseShapes(), 2 === this.m && l > 1) {
                        var g = this.calculateShapeEdges(h, p, u.totalShapeLength, v, c);
                        v += u.totalShapeLength
                    } else g = [
                        [f, y]
                    ];
                    for (r = g.length, i = 0; r > i; i += 1) {
                        f = g[i][0], y = g[i][1], d.length = 0, 1 >= y ? d.push({
                            s: u.totalShapeLength * f,
                            e: u.totalShapeLength * y
                        }) : f >= 1 ? d.push({
                            s: u.totalShapeLength * (f - 1),
                            e: u.totalShapeLength * (y - 1)
                        }) : (d.push({
                            s: u.totalShapeLength * f,
                            e: u.totalShapeLength
                        }), d.push({
                            s: 0,
                            e: u.totalShapeLength * (y - 1)
                        }));
                        var b = this.addShapes(u, d[0]);
                        if (d[0].s !== d[0].e) {
                            if (d.length > 1)
                                if (u.shape.v.c) {
                                    var x = b.pop();
                                    this.addPaths(b, m), b = this.addShapes(u, d[1], x)
                                } else this.addPaths(b, m), b = this.addShapes(u, d[1]);
                            this.addPaths(b, m)
                        }
                    }
                    u.shape.paths = m
                }
        }
        this.dynamicProperties.length || (this.mdf = !1)
    }, TrimModifier.prototype.addPaths = function(t, e) {
        var n, i = t.length;
        for (n = 0; i > n; n += 1) e.addShape(t[n])
    }, TrimModifier.prototype.addSegment = function(t, e, n, i, r, a, s) {
        r.setXYAt(e[0], e[1], "o", a), r.setXYAt(n[0], n[1], "i", a + 1), s && r.setXYAt(t[0], t[1], "v", a), r.setXYAt(i[0], i[1], "v", a + 1)
    }, TrimModifier.prototype.addShapes = function(t, e, n) {
        var i, r, a, s, o, l, h, p, c = t.pathsData,
            u = t.shape.paths.shapes,
            m = t.shape.paths._length,
            d = 0,
            f = [],
            y = !0;
        for (n ? (o = n._length, p = n._length) : (n = shape_pool.newShape(), o = 0, p = 0), f.push(n), i = 0; m > i; i += 1) {
            for (l = c[i].lengths, n.c = u[i].c, a = u[i].c ? l.length : l.length + 1, r = 1; a > r; r += 1)
                if (s = l[r - 1], d + s.addedLength < e.s) d += s.addedLength, n.c = !1;
                else {
                    if (d > e.e) {
                        n.c = !1;
                        break
                    }
                    e.s <= d && e.e >= d + s.addedLength ? (this.addSegment(u[i].v[r - 1], u[i].o[r - 1], u[i].i[r], u[i].v[r], n, o, y), y = !1) : (h = bez.getNewSegment(u[i].v[r - 1], u[i].v[r], u[i].o[r - 1], u[i].i[r], (e.s - d) / s.addedLength, (e.e - d) / s.addedLength, l[r - 1]), this.addSegment(h.pt1, h.pt3, h.pt4, h.pt2, n, o, y), y = !1, n.c = !1), d += s.addedLength, o += 1
                }
            if (u[i].c) {
                if (s = l[r - 1], d <= e.e) {
                    var v = l[r - 1].addedLength;
                    e.s <= d && e.e >= d + v ? (this.addSegment(u[i].v[r - 1], u[i].o[r - 1], u[i].i[0], u[i].v[0], n, o, y), y = !1) : (h = bez.getNewSegment(u[i].v[r - 1], u[i].v[0], u[i].o[r - 1], u[i].i[0], (e.s - d) / v, (e.e - d) / v, l[r - 1]), this.addSegment(h.pt1, h.pt3, h.pt4, h.pt2, n, o, y), y = !1, n.c = !1)
                } else n.c = !1;
                d += s.addedLength, o += 1
            }
            if (n._length && (n.setXYAt(n.v[p][0], n.v[p][1], "i", p), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], "o", n._length - 1)), d > e.e) break;
            m - 1 > i && (n = shape_pool.newShape(), y = !0, f.push(n), o = 0)
        }
        return f
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype(ShapeModifier, RoundCornersModifier), RoundCornersModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = !!t, this.frameId = this.elem.globalData.frameId;
            var e, n = this.dynamicProperties.length;
            for (e = 0; n > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
        }
    }, RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this.dynamicProperties), this.dynamicProperties.length || this.getValue(!0)
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
        var n = shape_pool.newShape();
        n.c = t.c;
        var i, r, a, s, o, l, h, p, c, u, m, d, f, y = t._length,
            v = 0;
        for (i = 0; y > i; i += 1) r = t.v[i], s = t.o[i], a = t.i[i], r[0] === s[0] && r[1] === s[1] && r[0] === a[0] && r[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)), h = l ? Math.min(l / 2, e) / l : 0, p = d = r[0] + (o[0] - r[0]) * h, c = f = r[1] - (r[1] - o[1]) * h, u = p - (p - r[0]) * roundCorner, m = c - (c - r[1]) * roundCorner, n.setTripleAt(p, c, u, m, d, f, v), v += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2)), h = l ? Math.min(l / 2, e) / l : 0, p = u = r[0] + (o[0] - r[0]) * h, c = m = r[1] + (o[1] - r[1]) * h, d = p - (p - r[0]) * roundCorner, f = c - (c - r[1]) * roundCorner, n.setTripleAt(p, c, u, m, d, f, v), v += 1) : (n.setTripleAt(r[0], r[1], s[0], s[1], a[0], a[1], v), v += 1) : (n.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], v), v += 1);
        return n
    }, RoundCornersModifier.prototype.processShapes = function(t) {
        var e, n, i, r, a = this.shapes.length,
            s = this.rd.v;
        if (0 !== s) {
            var o, l;
            for (n = 0; a > n; n += 1) {
                if (o = this.shapes[n], o.shape.paths, l = o.localShapeCollection, o.shape.mdf || this.mdf || t)
                    for (l.releaseShapes(), o.shape.mdf = !0, e = o.shape.paths.shapes, r = o.shape.paths._length, i = 0; r > i; i += 1) l.addShape(this.processPath(e[i], s));
                o.shape.paths = o.localShapeCollection
            }
        }
        this.dynamicProperties.length || (this.mdf = !1)
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), RepeaterModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = !!t;
            var e, n = this.dynamicProperties.length;
            for (e = 0; n > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
        }
    }, RepeaterModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this.dynamicProperties), this.o = PropertyFactory.getProp(t, e.o, 0, null, this.dynamicProperties), this.tr = PropertyFactory.getProp(t, e.tr, 2, null, this.dynamicProperties), this.data = e, this.dynamicProperties.length || this.getValue(!0), this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, n, i, r, a) {
        var s = a ? -1 : 1,
            o = i.s.v[0] + (1 - i.s.v[0]) * (1 - r),
            l = i.s.v[1] + (1 - i.s.v[1]) * (1 - r);
        t.translate(i.p.v[0] * s * r, i.p.v[1] * s * r, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * s * r), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), n.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), n.scale(a ? 1 / o : o, a ? 1 / l : l), n.translate(i.a.v[0], i.a.v[1], i.a.v[2])
    }, RepeaterModifier.prototype.init = function(t, e, n, i, r) {
        this.elem = t, this.arr = e, this.pos = n, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.dynamicProperties = [], this.frameId = -1, this.initModifierProperties(t, e[n]);
        for (var a = 0; n > 0;) n -= 1, this._elements.unshift(e[n]), a += 1;
        this.dynamicProperties.length ? (this.k = !0, r.push(this)) : this.getValue(!0)
    }, RepeaterModifier.prototype.resetElements = function(t) {
        var e, n = t.length;
        for (e = 0; n > e; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
    }, RepeaterModifier.prototype.cloneElements = function(t) {
        var e = (t.length, JSON.parse(JSON.stringify(t)));
        return this.resetElements(e), e
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
        var n, i = t.length;
        for (n = 0; i > n; n += 1) t[n]._render = e, "gr" === t[n].ty && this.changeGroupRender(t[n].it, e)
    }, RepeaterModifier.prototype.processShapes = function(t) {
        if (this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.dynamicProperties.length || t || (this.mdf = !1), this.mdf)) {
            var e = Math.ceil(this.c.v);
            if (this._groups.length < e) {
                for (; this._groups.length < e;) {
                    var n = {
                        it: this.cloneElements(this._elements),
                        ty: "gr"
                    };
                    n.it.push({
                        a: {
                            a: 0,
                            ix: 1,
                            k: [0, 0]
                        },
                        nm: "Transform",
                        o: {
                            a: 0,
                            ix: 7,
                            k: 100
                        },
                        p: {
                            a: 0,
                            ix: 2,
                            k: [0, 0]
                        },
                        r: {
                            a: 0,
                            ix: 6,
                            k: 0
                        },
                        s: {
                            a: 0,
                            ix: 3,
                            k: [100, 100]
                        },
                        sa: {
                            a: 0,
                            ix: 5,
                            k: 0
                        },
                        sk: {
                            a: 0,
                            ix: 4,
                            k: 0
                        },
                        ty: "tr"
                    }), this.arr.splice(0, 0, n), this._groups.splice(0, 0, n), this._currentCopies += 1
                }
                this.elem.reloadShapes()
            }
            var i, r, a = 0;
            for (i = 0; i <= this._groups.length - 1; i += 1) r = e > a, this._groups[i]._render = r, this.changeGroupRender(this._groups[i].it, r), a += 1;
            this._currentCopies = e, this.elem.firstFrame = !0;
            var s = this.o.v,
                o = s % 1,
                l = s > 0 ? Math.floor(s) : Math.ceil(s),
                h = (this.tr.v.props, this.pMatrix.props),
                p = this.rMatrix.props,
                c = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var u = 0;
            if (s > 0) {
                for (; l > u;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), u += 1;
                o && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, o, !1), u += o)
            } else if (0 > s) {
                for (; u > l;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), u -= 1;
                o && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -o, !0), u -= o)
            }
            i = 1 === this.data.m ? 0 : this._currentCopies - 1;
            var m = 1 === this.data.m ? 1 : -1;
            for (a = this._currentCopies; a;) {
                if (0 !== u) {
                    (0 !== i && 1 === m || i !== this._currentCopies - 1 && -1 === m) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15]);
                    var d, f = this.elemsData[i].it,
                        y = f[f.length - 1].transform.mProps.v.props,
                        v = y.length;
                    for (d = 0; v > d; d += 1) y[d] = this.matrix.props[d];
                    this.matrix.reset()
                } else {
                    this.matrix.reset();
                    var d, f = this.elemsData[i].it,
                        y = f[f.length - 1].transform.mProps.v.props,
                        v = y.length;
                    for (d = 0; v > d; d += 1) y[d] = this.matrix.props[d]
                }
                u += 1, a -= 1, i += m
            }
        }
    }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(Array.apply(null, {
            length: this._maxLength
        })), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
    }, ShapeCollection.prototype.releaseShapes = function() {
        var t;
        for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
        this._length = 0
    };
    var ImagePreloader = function() {
            function t() {
                this.loadedAssets += 1, this.loadedAssets, this.totalImages
            }

            function e(t) {
                var e = "";
                if (this.assetsPath) {
                    var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), e = this.assetsPath + n
                } else e = this.path, e += t.u ? t.u : "", e += t.p;
                return e
            }

            function n(e) {
                var n = document.createElement("img");
                n.addEventListener("load", t.bind(this), !1), n.addEventListener("error", t.bind(this), !1), n.src = e
            }

            function i(t) {
                this.totalAssets = t.length;
                var i;
                for (i = 0; i < this.totalAssets; i += 1) t[i].layers || (n.bind(this)(e.bind(this)(t[i])), this.totalImages += 1)
            }

            function r(t) {
                this.path = t || ""
            }

            function a(t) {
                this.assetsPath = t || ""
            }
            return function() {
                this.loadAssets = i, this.setAssetsPath = a, this.setPath = r, this.assetsPath = "", this.path = "", this.totalAssets = 0, this.totalImages = 0, this.loadedAssets = 0
            }
        }(),
        featureSupport = function() {
            var t = {
                maskType: !0
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
        }(),
        filtersFactory = function() {
            function t(t) {
                var e = document.createElementNS(svgNS, "filter");
                return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
            }

            function e() {
                var t = document.createElementNS(svgNS, "feColorMatrix");
                return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }
            var n = {};
            return n.createFilter = t, n.createAlphaToLuminanceFilter = e, n
        }(),
        pooling = function() {
            function t(t) {
                return t.concat(Array.apply(null, {
                    length: t.length
                }))
            }
            return {
                double: t
            }
        }(),
        point_pool = function() {
            function t() {
                var t;
                return i ? (i -= 1, t = a[i]) : t = [.1, .1], t
            }

            function e(t) {
                i === r && (a = pooling.double(a), r *= 2), a[i] = t, i += 1
            }
            var n = {
                    newPoint: t,
                    release: e
                },
                i = 0,
                r = 8,
                a = Array.apply(null, {
                    length: r
                });
            return n
        }(),
        shape_pool = function() {
            function t() {
                var t;
                return a ? (a -= 1, t = o[a]) : t = new ShapePath, t
            }

            function e(t) {
                a === s && (o = pooling.double(o), s *= 2);
                var e, n = t._length;
                for (e = 0; n > e; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                t._length = 0, t.c = !1, o[a] = t, a += 1
            }

            function n(t, n) {
                for (; n--;) e(t[n])
            }

            function i(e, n) {
                var i, r = e._length,
                    a = t();
                a._length = e._length, a.c = e.c;
                var s;
                for (i = 0; r > i; i += 1) n ? (s = n.applyToPointArray(e.v[i][0], e.v[i][1], 0, 2), a.setXYAt(s[0], s[1], "v", i), point_pool.release(s), s = n.applyToPointArray(e.o[i][0], e.o[i][1], 0, 2), a.setXYAt(s[0], s[1], "o", i), point_pool.release(s), s = n.applyToPointArray(e.i[i][0], e.i[i][1], 0, 2), a.setXYAt(s[0], s[1], "i", i), point_pool.release(s)) : a.setTripleAt(e.v[i][0], e.v[i][1], e.o[i][0], e.o[i][1], e.i[i][0], e.i[i][1], i);
                return a
            }
            var r = {
                    clone: i,
                    newShape: t,
                    release: e,
                    releaseArray: n
                },
                a = 0,
                s = 4,
                o = Array.apply(null, {
                    length: s
                });
            return r
        }(),
        shapeCollection_pool = function() {
            function t() {
                var t;
                return r ? (r -= 1, t = s[r]) : t = new ShapeCollection, t
            }

            function e(t) {
                var e, n = t._length;
                for (e = 0; n > e; e += 1) shape_pool.release(t.shapes[e]);
                t._length = 0, r === a && (s = pooling.double(s), a *= 2), s[r] = t, r += 1
            }

            function n(t, n) {
                e(t), r === a && (s = pooling.double(s), a *= 2), s[r] = t, r += 1
            }
            var i = {
                    newShapeCollection: t,
                    release: e,
                    clone: n
                },
                r = 0,
                a = 4,
                s = Array.apply(null, {
                    length: a
                });
            return i
        }();
    BaseRenderer.prototype.checkLayers = function(t) {
        var e, n, i = this.layers.length;
        for (this.completeLayers = !0, e = i - 1; e >= 0; e--) this.elements[e] || (n = this.layers[e], n.ip - n.st <= t - this.layers[e].st && n.op - n.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = !!this.elements[e] && this.completeLayers;
        this.checkPendingElements()
    }, BaseRenderer.prototype.createItem = function(t) {
        switch (t.ty) {
            case 2:
                return this.createImage(t);
            case 0:
                return this.createComp(t);
            case 1:
                return this.createSolid(t);
            case 4:
                return this.createShape(t);
            case 5:
                return this.createText(t);
            case 13:
                return this.createCamera(t);
            case 99:
                return null
        }
        return this.createBase(t)
    }, BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.")
    }, BaseRenderer.prototype.buildAllItems = function() {

    }, BaseRenderer.prototype.includeLayers = function(t) {
        this.completeLayers = !1;
        var e, n, i = t.length,
            r = this.layers.length;
        for (e = 0; i > e; e += 1)
            for (n = 0; r > n;) {
                if (this.layers[n].id == t[e].id) {
                    this.layers[n] = t[e];
                    break
                }
                n += 1
            }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
        this.globalData.projectInterface = t
    }, BaseRenderer.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems()
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, n) {
        n = n || [];
        for (var i = this.elements, r = this.layers, a = 0, s = r.length; s > a;) r[a].ind == e && (i[a] && !0 !== i[a] ? void 0 !== r[a].parent ? (n.push(i[a]), i[a]._isParent = !0, this.buildElementParenting(t, r[a].parent, n)) : (n.push(i[a]), i[a]._isParent = !0, t.setHierarchy(n)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
    }, BaseRenderer.prototype.addPendingElement = function(t) {
        this.pendingElements.push(t)
    }, extendPrototype(BaseRenderer, SVGRenderer), SVGRenderer.prototype.createBase = function(t) {
        return new SVGBaseElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createShape = function(t) {
        return new IShapeElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createText = function(t) {
        return new SVGTextElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createImage = function(t) {
        return new IImageElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createComp = function(t) {
        return new ICompElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createSolid = function(t) {
        return new ISolidElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.configAnimation = function(t) {

    }, SVGRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; e > t; t++) this.elements[t] && this.elements[t].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            e[t] = !0;
            var n = this.createItem(this.layers[t]);
            e[t] = n, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(n), n.initExpressions()), this.appendElementInPos(n, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? n.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(n)))
        }
    }, SVGRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
                for (var e = 0, n = this.elements.length; n > e;) {
                    if (this.elements[e] === t) {
                        t.setMatte(this.elements[e - 1].layerId);
                        break
                    }
                    e += 1
                }
        }
    }, SVGRenderer.prototype.renderFrame = function(t) {
        
    }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
        var n = t.getBaseElement();
        if (n) {
            for (var i, r = 0; e > r;) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (i = this.elements[r].getBaseElement()), r += 1;
            i ? this.layerElement.insertBefore(n, i) : this.layerElement.appendChild(n)
        }
    }, SVGRenderer.prototype.hide = function() {
        this.layerElement.style.display = "none"
    }, SVGRenderer.prototype.show = function() {
        this.layerElement.style.display = "block"
    }, SVGRenderer.prototype.searchExtraCompositions = function(t) {
        var e, n = t.length,
            i = document.createElementNS(svgNS, "g");
        for (e = 0; n > e; e += 1)
            if (t[e].xt) {
                var r = this.createComp(t[e], i, this.globalData.comp, null);
                r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
            }
    }, MaskElement.prototype.getMaskProperty = function(t) {
        return this.viewData[t].prop
    }, MaskElement.prototype.prepareFrame = function() {
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue()
    }, MaskElement.prototype.renderFrame = function(t) {
        var e, n = this.masksProperties.length;
        for (e = 0; n > e; e++)
            if ((this.viewData[e].prop.mdf || this.firstFrame) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op.mdf || this.firstFrame) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp.mdf || this.firstFrame) && (this.viewData[e].invRect.setAttribute("x", -t.props[12]), this.viewData[e].invRect.setAttribute("y", -t.props[13])), this.storedData[e].x && (this.storedData[e].x.mdf || this.firstFrame))) {
                var i = this.storedData[e].expan;
                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(#" + this.storedData[e].filterId + ")")), i.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        this.firstFrame = !1
    }, MaskElement.prototype.getMaskelement = function() {
        return this.maskElement
    }, MaskElement.prototype.createLayerSolidPath = function() {
        var t = "M0,0 ";
        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
    }, MaskElement.prototype.drawPath = function(t, e, n) {
        var i, r, a = " M" + e.v[0][0] + "," + e.v[0][1];
        for (r = e._length, i = 1; r > i; i += 1) a += " C" + bm_rnd(e.o[i - 1][0]) + "," + bm_rnd(e.o[i - 1][1]) + " " + bm_rnd(e.i[i][0]) + "," + bm_rnd(e.i[i][1]) + " " + bm_rnd(e.v[i][0]) + "," + bm_rnd(e.v[i][1]);
        e.c && r > 1 && (a += " C" + bm_rnd(e.o[i - 1][0]) + "," + bm_rnd(e.o[i - 1][1]) + " " + bm_rnd(e.i[0][0]) + "," + bm_rnd(e.i[0][1]) + " " + bm_rnd(e.v[0][0]) + "," + bm_rnd(e.v[0][1])), n.lastPath !== a && (n.elem && (e.c ? t.inv ? n.elem.setAttribute("d", this.solidPath + a) : n.elem.setAttribute("d", a) : n.elem.setAttribute("d", "")), n.lastPath = a)
    }, MaskElement.prototype.getMask = function(t) {
        for (var e = 0, n = this.masksProperties.length; n > e;) {
            if (this.masksProperties[e].nm === t) return {
                maskPath: this.viewData[e].prop.pv
            };
            e += 1
        }
    }, MaskElement.prototype.destroy = function() {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.paths = null, this.masksProperties = null
    }, BaseElement.prototype.checkMasks = function() {
        if (!this.data.hasMask) return !1;
        for (var t = 0, e = this.data.masksProperties.length; e > t;) {
            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
            t += 1
        }
        return !1
    }, BaseElement.prototype.checkParenting = function() {
        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent)
    }, BaseElement.prototype.prepareFrame = function(t) {
        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isVisible && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !0, this.firstFrame = !0, this.data.hasMask && (this.maskManager.firstFrame = !0)) : !1 !== this.isVisible && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !1);
        var e, n = this.dynamicProperties.length;
        for (e = 0; n > e; e += 1)(this.isVisible || this._isParent && "transform" === this.dynamicProperties[e].type) && (this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.elemMdf = !0, this.globalData.mdf = !0));
        return this.data.hasMask && this.isVisible && this.maskManager.prepareFrame(t * this.data.sr), this.currentFrameNum = t * this.data.sr, this.isVisible
    }, BaseElement.prototype.globalToLocal = function(t) {
        var e = [];
        e.push(this.finalTransform);
        for (var n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : n = !1;
        var r, a, s = e.length;
        for (r = 0; s > r; r += 1) a = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
        return t
    }, BaseElement.prototype.initExpressions = function() {
        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.layerInterface.registerMaskInterface(this.maskManager);
        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? this.layerInterface.shapeInterface = ShapeExpressionInterface.createShapeInterface(this.shapesData, this.itemsData, this.layerInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this))
    }, BaseElement.prototype.setBlendMode = function() {
        var t = "";
        switch (this.data.bm) {
            case 1:
                t = "multiply";
                break;
            case 2:
                t = "screen";
                break;
            case 3:
                t = "overlay";
                break;
            case 4:
                t = "darken";
                break;
            case 5:
                t = "lighten";
                break;
            case 6:
                t = "color-dodge";
                break;
            case 7:
                t = "color-burn";
                break;
            case 8:
                t = "hard-light";
                break;
            case 9:
                t = "soft-light";
                break;
            case 10:
                t = "difference";
                break;
            case 11:
                t = "exclusion";
                break;
            case 12:
                t = "hue";
                break;
            case 13:
                t = "saturation";
                break;
            case 14:
                t = "color";
                break;
            case 15:
                t = "luminosity"
        }(this.baseElement || this.layerElement).style["mix-blend-mode"] = t
    }, BaseElement.prototype.init = function() {
        this.data.sr || (this.data.sr = 1), this.dynamicProperties = [], this.data.ef && (this.effects = new EffectsManager(this.data, this, this.dynamicProperties)), this.hidden = !1, this.firstFrame = !0, this.isVisible = !1, this._isParent = !1, this.currentFrameNum = -99999, this.lastNum = -99999, this.data.ks && (this.finalTransform = {
            mProp: PropertyFactory.getProp(this, this.data.ks, 2, null, this.dynamicProperties),
            matMdf: !1,
            opMdf: !1,
            mat: new Matrix,
            opacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.finalTransform.op = this.finalTransform.mProp.o, this.transform = this.finalTransform.mProp, 11 !== this.data.ty && this.createElements(), this.data.hasMask && this.addMasks(this.data)), this.elemMdf = !1
    }, BaseElement.prototype.getType = function() {
        return this.type
    }, BaseElement.prototype.resetHierarchy = function() {
        this.hierarchy ? this.hierarchy.length = 0 : this.hierarchy = []
    }, BaseElement.prototype.getHierarchy = function() {
        return this.hierarchy || (this.hierarchy = []), this.hierarchy
    }, BaseElement.prototype.setHierarchy = function(t) {
        this.hierarchy = t
    }, BaseElement.prototype.getLayerSize = function() {
        return 5 === this.data.ty ? {
            w: this.data.textData.width,
            h: this.data.textData.height
        } : {
            w: this.data.width,
            h: this.data.height
        }
    }, BaseElement.prototype.hide = function() {}, BaseElement.prototype.mHelper = new Matrix, createElement(BaseElement, SVGBaseElement), SVGBaseElement.prototype.createElements = function() {
        this.layerElement = document.createElementNS(svgNS, "g"), this.transformedElement = this.layerElement, this.data.hasMask && (this.maskedElement = this.layerElement);
        var t = null;
        if (this.data.td) {
            if (3 == this.data.td || 1 == this.data.td) {
                var e = document.createElementNS(svgNS, "mask");
                if (e.setAttribute("id", this.layerId), e.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e), !featureSupport.maskType && 1 == this.data.td) {
                    e.setAttribute("mask-type", "luminance");
                    var n = randomString(10),
                        i = filtersFactory.createFilter(n);
                    this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    var r = document.createElementNS(svgNS, "g");
                    r.appendChild(this.layerElement), t = r, e.appendChild(r), r.setAttribute("filter", "url(#" + n + ")")
                }
            } else if (2 == this.data.td) {
                var a = document.createElementNS(svgNS, "mask");
                a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                var s = document.createElementNS(svgNS, "g");
                a.appendChild(s);
                var n = randomString(10),
                    i = filtersFactory.createFilter(n),
                    o = document.createElementNS(svgNS, "feColorMatrix");
                o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"), i.appendChild(o), this.globalData.defs.appendChild(i);
                var l = document.createElementNS(svgNS, "rect");
                if (l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), s.setAttribute("filter", "url(#" + n + ")"), s.appendChild(l), s.appendChild(this.layerElement), t = s, !featureSupport.maskType) {
                    a.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    var r = document.createElementNS(svgNS, "g");
                    s.appendChild(l), r.appendChild(this.layerElement), t = r, s.appendChild(r)
                }
                this.globalData.defs.appendChild(a)
            }
        } else(this.data.hasMask || this.data.tt) && this.data.tt ? (this.matteElement = document.createElementNS(svgNS, "g"), this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (!this.data.ln && !this.data.cl || 4 !== this.data.ty && 0 !== this.data.ty || (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)), 0 === this.data.ty) {
            var h = document.createElementNS(svgNS, "clipPath"),
                p = document.createElementNS(svgNS, "path");
            p.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var c = "cp_" + randomString(8);
            if (h.setAttribute("id", c), h.appendChild(p), this.globalData.defs.appendChild(h), this.checkMasks()) {
                var u = document.createElementNS(svgNS, "g");
                u.setAttribute("clip-path", "url(#" + c + ")"), u.appendChild(this.layerElement), this.transformedElement = u, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
            } else this.layerElement.setAttribute("clip-path", "url(#" + c + ")")
        }
        0 !== this.data.bm && this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null), this.data.ef && (this.effectsManager = new SVGEffects(this)), this.checkParenting()
    }, SVGBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, SVGBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty || this.data.hd || !this.isVisible) return !1;
        this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.firstFrame || this.finalTransform.op.mdf, this.finalTransform.matMdf = this.firstFrame || this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v;
        var e, n = this.finalTransform.mat;
        if (this.hierarchy) {
            var i = 0,
                r = this.hierarchy.length;
            if (!this.finalTransform.matMdf)
                for (; r > i;) {
                    if (this.hierarchy[i].finalTransform.mProp.mdf) {
                        this.finalTransform.matMdf = !0;
                        break
                    }
                    i += 1
                }
            if (this.finalTransform.matMdf)
                for (e = this.finalTransform.mProp.v.props, n.cloneFromProps(e), i = 0; r > i; i += 1) e = this.hierarchy[i].finalTransform.mProp.v.props, n.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
        } else this.isVisible && (n = this.finalTransform.mProp.v);
        return this.finalTransform.matMdf && this.layerElement && this.transformedElement.setAttribute("transform", n.to2dCSS()), this.finalTransform.opMdf && this.layerElement && (this.finalTransform.op.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.hidden && this.isTransparent && (this.isTransparent = !1, this.show()), this.transformedElement.setAttribute("opacity", this.finalTransform.op.v)), this.data.hasMask && this.maskManager.renderFrame(n), this.effectsManager && this.effectsManager.renderFrame(this.firstFrame), this.isVisible
    }, SVGBaseElement.prototype.destroy = function() {
        this.layerElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && this.maskManager.destroy()
    }, SVGBaseElement.prototype.getBaseElement = function() {
        return this.baseElement
    }, SVGBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new MaskElement(t, this, this.globalData)
    }, SVGBaseElement.prototype.setMatte = function(t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(#" + t + ")")
    }, SVGBaseElement.prototype.hide = function() {
        this.hidden || (this.layerElement.style.display = "none", this.hidden = !0)
    }, SVGBaseElement.prototype.show = function() {
        this.isVisible && !this.isTransparent && (this.hidden = !1, this.layerElement.style.display = "block")
    }, createElement(SVGBaseElement, IShapeElement), IShapeElement.prototype.identityMatrix = new Matrix, IShapeElement.prototype.lcEnum = {
        1: "butt",
        2: "round",
        3: "butt"
    }, IShapeElement.prototype.ljEnum = {
        1: "miter",
        2: "round",
        3: "butt"
    }, IShapeElement.prototype.searchProcessedElement = function(t) {
        for (var e = this.processedElements.length; e;)
            if (e -= 1, this.processedElements[e].elem === t) return this.processedElements[e].pos;
        return 0
    }, IShapeElement.prototype.addProcessedElement = function(t, e) {
        for (var n = this.processedElements.length; n;)
            if (n -= 1, this.processedElements[n].elem === t) {
                this.processedElements[n].pos = e;
                break
            }
        0 === n && this.processedElements.push({
            elem: t,
            pos: e
        })
    }, IShapeElement.prototype.buildExpressionInterface = function() {}, IShapeElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [], !0), (!this.data.hd || this.data.td) && styleUnselectableDiv(this.layerElement)
    }, IShapeElement.prototype.setGradientData = function(t, e, n) {
        var i, r = "gr_" + randomString(10);
        i = 1 === e.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient"), i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
        var a, s, o, l = [];
        for (o = 4 * e.g.p, s = 0; o > s; s += 4) a = document.createElementNS(svgNS, "stop"), i.appendChild(a), l.push(a);
        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(#" + r + ")"), this.globalData.defs.appendChild(i), n.gf = i, n.cst = l
    }, IShapeElement.prototype.setGradientOpacity = function(t, e, n) {
        if (t.g.k.k[0].s && t.g.k.k[0].s.length > 4 * t.g.p || t.g.k.k.length > 4 * t.g.p) {
            var i, r, a, s, o = document.createElementNS(svgNS, "mask"),
                l = document.createElementNS(svgNS, "path");
            o.appendChild(l);
            var h = "op_" + randomString(10),
                p = "mk_" + randomString(10);
            o.setAttribute("id", p), i = 1 === t.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient"), i.setAttribute("id", h), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var c = [];
            for (a = 4 * t.g.p; s > a; a += 2) r = document.createElementNS(svgNS, "stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), i.appendChild(r), c.push(r);
            return l.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(#" + h + ")"), this.globalData.defs.appendChild(i), this.globalData.defs.appendChild(o), e.of = i, e.ost = c, n.msElem = l, p
        }
    }, IShapeElement.prototype.createStyleElement = function(t, e, n) {
        var i = {},
            r = {
                data: t,
                type: t.ty,
                d: "",
                ld: "",
                lvl: e,
                mdf: !1,
                closed: !1
            },
            a = document.createElementNS(svgNS, "path");
        if (i.o = PropertyFactory.getProp(this, t.o, 0, .01, n), ("st" == t.ty || "gs" == t.ty) && (a.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), a.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), a.setAttribute("fill-opacity", "0"), 1 == t.lj && a.setAttribute("stroke-miterlimit", t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, n), t.d)) {
            var s = PropertyFactory.getDashProp(this, t.d, "svg", n);
            s.k || (a.setAttribute("stroke-dasharray", s.dasharray), a.setAttribute("stroke-dashoffset", s.dashoffset)), i.d = s
        }
        if ("fl" == t.ty || "st" == t.ty) i.c = PropertyFactory.getProp(this, t.c, 1, 255, n);
        else {
            i.g = PropertyFactory.getGradientProp(this, t.g, n), 2 == t.t && (i.h = PropertyFactory.getProp(this, t.h, 1, .01, n), i.a = PropertyFactory.getProp(this, t.a, 1, degToRads, n)), i.s = PropertyFactory.getProp(this, t.s, 1, null, n), i.e = PropertyFactory.getProp(this, t.e, 1, null, n), this.setGradientData(a, t, i, r);
            var o = this.setGradientOpacity(t, i, r);
            o && a.setAttribute("mask", "url(#" + o + ")")
        }
        return i.elem = a, 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), r.pElem = a, this.stylesList.push(r), i.style = r, i
    }, IShapeElement.prototype.createGroupElement = function(t) {
        var e = {
                it: [],
                prevViewData: []
            },
            n = document.createElementNS(svgNS, "g");
        return e.gr = n, t.ln && e.gr.setAttribute("id", t.ln), e
    }, IShapeElement.prototype.createTransformElement = function(t, e) {
        return {
            transform: {
                op: PropertyFactory.getProp(this, t.o, 0, .01, e),
                mProps: PropertyFactory.getProp(this, t, 2, null, e)
            },
            elements: []
        }
    }, IShapeElement.prototype.createShapeElement = function(t, e, n, i) {
        var r = {
                elements: [],
                caches: [],
                styles: [],
                transformers: e,
                lStr: ""
            },
            a = 4;
        return "rc" == t.ty ? a = 5 : "el" == t.ty ? a = 6 : "sr" == t.ty && (a = 7), r.sh = ShapePropertyFactory.getShapeProp(this, t, a, i), r.lvl = n, this.shapes.push(r.sh), this.addShapeToModifiers(r), r
    };
    var cont = 0;
    IShapeElement.prototype.setElementStyles = function() {
        var t, e = this.stylesList.length,
            n = [];
        for (t = 0; e > t; t += 1) this.stylesList[t].closed || n.push(this.stylesList[t]);
        return n
    }, IShapeElement.prototype.reloadShapes = function() {
        this.firstFrame = !0;
        var t, e = this.itemsData.length;
        for (t = 0; e > t; t += 1) this.prevViewData[t] = this.itemsData[t];
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [], !0);
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue();
        this.renderModifiers()
    }, IShapeElement.prototype.searchShapes = function(t, e, n, i, r, a, s, o) {
        var l, h, p, c, u, m, d = [].concat(s),
            f = t.length - 1,
            y = [],
            v = [];
        for (l = f; l >= 0; l -= 1) {
            if (m = this.searchProcessedElement(t[l]), m ? e[l] = n[m - 1] : t[l]._render = o, "fl" == t[l].ty || "st" == t[l].ty || "gf" == t[l].ty || "gs" == t[l].ty) m ? e[l].style.closed = !1 : e[l] = this.createStyleElement(t[l], a, r), t[l]._render && i.appendChild(e[l].elem), y.push(e[l].style);
            else if ("gr" == t[l].ty) {
                if (m)
                    for (p = e[l].it.length, h = 0; p > h; h += 1) e[l].prevViewData[h] = e[l].it[h];
                else e[l] = this.createGroupElement(t[l]);
                this.searchShapes(t[l].it, e[l].it, e[l].prevViewData, e[l].gr, r, a + 1, d, o), t[l]._render && i.appendChild(e[l].gr)
            } else "tr" == t[l].ty ? (m || (e[l] = this.createTransformElement(t[l], r)), c = e[l].transform, d.push(c)) : "sh" == t[l].ty || "rc" == t[l].ty || "el" == t[l].ty || "sr" == t[l].ty ? (m || (e[l] = this.createShapeElement(t[l], d, a, r)), e[l].elements = this.setElementStyles()) : "tm" == t[l].ty || "rd" == t[l].ty || "ms" == t[l].ty ? (m ? (u = e[l], u.closed = !1) : (u = ShapeModifiers.getModifier(t[l].ty), u.init(this, t[l], r), e[l] = u, this.shapeModifiers.push(u)), v.push(u)) : "rp" == t[l].ty && (m ? (u = e[l], u.closed = !0) : (u = ShapeModifiers.getModifier(t[l].ty), e[l] = u, u.init(this, t, l, e, r), this.shapeModifiers.push(u), o = !1), v.push(u));
            this.addProcessedElement(t[l], l + 1)
        }
        for (f = y.length, l = 0; f > l; l += 1) y[l].closed = !0;
        for (f = v.length, l = 0; f > l; l += 1) v[l].closed = !0
    }, IShapeElement.prototype.addShapeToModifiers = function(t) {
        var e, n = this.shapeModifiers.length;
        for (e = 0; n > e; e += 1) this.shapeModifiers[e].addShape(t)
    }, IShapeElement.prototype.renderModifiers = function() {
        if (this.shapeModifiers.length) {
            var t, e = this.shapes.length;
            for (t = 0; e > t; t += 1) this.shapes[t].reset();
            for (e = this.shapeModifiers.length, t = e - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this.firstFrame)
        }
    }, IShapeElement.prototype.renderFrame = function(t) {
        if (!1 === this._parent.renderFrame.call(this, t)) return void this.hide();
        this.hidden && (this.layerElement.style.display = "block", this.hidden = !1), this.renderModifiers();
        var e, n = this.stylesList.length;
        for (e = 0; n > e; e += 1) this.stylesList[e].d = "", this.stylesList[e].mdf = !1;
        for (this.renderShape(this.shapesData, this.itemsData, null), e = 0; n > e; e += 1) "0" === this.stylesList[e].ld && (this.stylesList[e].ld = "1", this.stylesList[e].pElem.style.display = "block"), (this.stylesList[e].mdf || this.firstFrame) && (this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].msElem && this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d));
        this.firstFrame && (this.firstFrame = !1)
    }, IShapeElement.prototype.hide = function() {
        if (!this.hidden) {
            this.layerElement.style.display = "none";
            var t, e = this.stylesList.length;
            for (t = e - 1; t >= 0; t -= 1) "0" !== this.stylesList[t].ld && (this.stylesList[t].ld = "0", this.stylesList[t].pElem.style.display = "none", this.stylesList[t].pElem.parentNode && (this.stylesList[t].parent = this.stylesList[t].pElem.parentNode));
            this.hidden = !0
        }
    }, IShapeElement.prototype.renderShape = function(t, e, n) {
        var i, r, a = t.length - 1;
        for (i = a; i >= 0; i -= 1) r = t[i].ty, "tr" == r ? ((this.firstFrame || e[i].transform.op.mdf && n) && n.setAttribute("opacity", e[i].transform.op.v), (this.firstFrame || e[i].transform.mProps.mdf && n) && n.setAttribute("transform", e[i].transform.mProps.v.to2dCSS())) : "sh" == r || "el" == r || "rc" == r || "sr" == r ? this.renderPath(t[i], e[i]) : "fl" == r ? this.renderFill(t[i], e[i]) : "gf" == r ? this.renderGradient(t[i], e[i]) : "gs" == r ? (this.renderGradient(t[i], e[i]), this.renderStroke(t[i], e[i])) : "st" == r ? this.renderStroke(t[i], e[i]) : "gr" == r && this.renderShape(t[i].it, e[i].it, e[i].gr)
    }, IShapeElement.prototype.buildShapeString = function(t, e, n, i) {
        var r, a = "";
        for (r = 1; e > r; r += 1) 1 === r && (a += " M" + i.applyToPointStringified(t.v[0][0], t.v[0][1])), a += " C" + i.applyToPointStringified(t.o[r - 1][0], t.o[r - 1][1]) + " " + i.applyToPointStringified(t.i[r][0], t.i[r][1]) + " " + i.applyToPointStringified(t.v[r][0], t.v[r][1]);
        return 1 === e && (a += " M" + i.applyToPointStringified(t.v[0][0], t.v[0][1])), n && e && (a += " C" + i.applyToPointStringified(t.o[r - 1][0], t.o[r - 1][1]) + " " + i.applyToPointStringified(t.i[0][0], t.i[0][1]) + " " + i.applyToPointStringified(t.v[0][0], t.v[0][1]), a += "z"), a
    }, IShapeElement.prototype.renderPath = function(t, e) {
        var n, i, r, a, s, o, l = e.elements.length,
            h = e.lvl;
        if (t._render)
            for (o = 0; l > o; o += 1)
                if (e.elements[o].data._render) {
                    a = e.sh.mdf || this.firstFrame, r = "M0 0";
                    var p = e.sh.paths;
                    if (i = p._length, e.elements[o].lvl < h) {
                        for (var c, u = this.mHelper.reset(), m = h - e.elements[o].lvl, d = e.transformers.length - 1; m > 0;) a = e.transformers[d].mProps.mdf || a, c = e.transformers[d].mProps.v.props, u.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), m--, d--;
                        if (a) {
                            for (n = 0; i > n; n += 1)(s = p.shapes[n]) && s._length && (r += this.buildShapeString(s, s._length, s.c, u));
                            e.caches[o] = r
                        } else r = e.caches[o]
                    } else if (a) {
                        for (n = 0; i > n; n += 1)(s = p.shapes[n]) && s._length && (r += this.buildShapeString(s, s._length, s.c, this.identityMatrix));
                        e.caches[o] = r
                    } else r = e.caches[o];
                    e.elements[o].d += r, e.elements[o].mdf = a || e.elements[o].mdf
                } else e.elements[o].mdf = !0
    }, IShapeElement.prototype.renderFill = function(t, e) {
        var n = e.style;
        (e.c.mdf || this.firstFrame) && n.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || this.firstFrame) && n.pElem.setAttribute("fill-opacity", e.o.v)
    }, IShapeElement.prototype.renderGradient = function(t, e) {
        var n = e.gf,
            i = e.of,
            r = e.s.v,
            a = e.e.v;
        if (e.o.mdf || this.firstFrame) {
            var s = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
            e.elem.setAttribute(s, e.o.v)
        }
        if (e.s.mdf || this.firstFrame) {
            var o = 1 === t.t ? "x1" : "cx",
                l = "x1" === o ? "y1" : "cy";
            n.setAttribute(o, r[0]), n.setAttribute(l, r[1]), i && (i.setAttribute(o, r[0]), i.setAttribute(l, r[1]))
        }
        var h, p, c, u;
        if (e.g.cmdf || this.firstFrame) {
            h = e.cst;
            var m = e.g.c;
            for (c = h.length, p = 0; c > p; p += 1) u = h[p], u.setAttribute("offset", m[4 * p] + "%"),
                u.setAttribute("stop-color", "rgb(" + m[4 * p + 1] + "," + m[4 * p + 2] + "," + m[4 * p + 3] + ")")
        }
        if (i && (e.g.omdf || this.firstFrame)) {
            h = e.ost;
            var d = e.g.o;
            for (c = h.length, p = 0; c > p; p += 1) u = h[p], u.setAttribute("offset", d[2 * p] + "%"), u.setAttribute("stop-opacity", d[2 * p + 1])
        }
        if (1 === t.t)(e.e.mdf || this.firstFrame) && (n.setAttribute("x2", a[0]), n.setAttribute("y2", a[1]), i && (i.setAttribute("x2", a[0]), i.setAttribute("y2", a[1])));
        else {
            var f;
            if ((e.s.mdf || e.e.mdf || this.firstFrame) && (f = Math.sqrt(Math.pow(r[0] - a[0], 2) + Math.pow(r[1] - a[1], 2)), n.setAttribute("r", f), i && i.setAttribute("r", f)), e.e.mdf || e.h.mdf || e.a.mdf || this.firstFrame) {
                f || (f = Math.sqrt(Math.pow(r[0] - a[0], 2) + Math.pow(r[1] - a[1], 2)));
                var y = Math.atan2(a[1] - r[1], a[0] - r[0]),
                    v = e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v,
                    g = f * v,
                    b = Math.cos(y + e.a.v) * g + r[0],
                    x = Math.sin(y + e.a.v) * g + r[1];
                n.setAttribute("fx", b), n.setAttribute("fy", x), i && (i.setAttribute("fx", b), i.setAttribute("fy", x))
            }
        }
    }, IShapeElement.prototype.renderStroke = function(t, e) {
        var n = e.style,
            i = e.d;
        i && i.k && (i.mdf || this.firstFrame) && (n.pElem.setAttribute("stroke-dasharray", i.dasharray), n.pElem.setAttribute("stroke-dashoffset", i.dashoffset)), e.c && (e.c.mdf || this.firstFrame) && n.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || this.firstFrame) && n.pElem.setAttribute("stroke-opacity", e.o.v), (e.w.mdf || this.firstFrame) && (n.pElem.setAttribute("stroke-width", e.w.v), n.msElem && n.msElem.setAttribute("stroke-width", e.w.v))
    }, IShapeElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent), this.shapeData = null, this.itemsData = null, this.parentContainer = null, this.placeholder = null
    }, ITextElement.prototype.init = function() {
        this._parent.init.call(this), this.lettersChangedFlag = !1, this.currentTextDocumentData = {};
        var t = this.data;
        this.viewData = {
            m: {
                a: PropertyFactory.getProp(this, t.t.m.a, 1, 0, this.dynamicProperties)
            }
        };
        var e = this.data.t;
        if (e.a.length) {
            this.viewData.a = Array.apply(null, {
                length: e.a.length
            });
            var n, i, r, a = e.a.length;
            for (n = 0; a > n; n += 1) r = e.a[n], i = {
                a: {},
                s: {}
            }, "r" in r.a && (i.a.r = PropertyFactory.getProp(this, r.a.r, 0, degToRads, this.dynamicProperties)), "rx" in r.a && (i.a.rx = PropertyFactory.getProp(this, r.a.rx, 0, degToRads, this.dynamicProperties)), "ry" in r.a && (i.a.ry = PropertyFactory.getProp(this, r.a.ry, 0, degToRads, this.dynamicProperties)), "sk" in r.a && (i.a.sk = PropertyFactory.getProp(this, r.a.sk, 0, degToRads, this.dynamicProperties)), "sa" in r.a && (i.a.sa = PropertyFactory.getProp(this, r.a.sa, 0, degToRads, this.dynamicProperties)), "s" in r.a && (i.a.s = PropertyFactory.getProp(this, r.a.s, 1, .01, this.dynamicProperties)), "a" in r.a && (i.a.a = PropertyFactory.getProp(this, r.a.a, 1, 0, this.dynamicProperties)), "o" in r.a && (i.a.o = PropertyFactory.getProp(this, r.a.o, 0, .01, this.dynamicProperties)), "p" in r.a && (i.a.p = PropertyFactory.getProp(this, r.a.p, 1, 0, this.dynamicProperties)), "sw" in r.a && (i.a.sw = PropertyFactory.getProp(this, r.a.sw, 0, 0, this.dynamicProperties)), "sc" in r.a && (i.a.sc = PropertyFactory.getProp(this, r.a.sc, 1, 0, this.dynamicProperties)), "fc" in r.a && (i.a.fc = PropertyFactory.getProp(this, r.a.fc, 1, 0, this.dynamicProperties)), "fh" in r.a && (i.a.fh = PropertyFactory.getProp(this, r.a.fh, 0, 0, this.dynamicProperties)), "fs" in r.a && (i.a.fs = PropertyFactory.getProp(this, r.a.fs, 0, .01, this.dynamicProperties)), "fb" in r.a && (i.a.fb = PropertyFactory.getProp(this, r.a.fb, 0, .01, this.dynamicProperties)), "t" in r.a && (i.a.t = PropertyFactory.getProp(this, r.a.t, 0, 0, this.dynamicProperties)), i.s = PropertyFactory.getTextSelectorProp(this, r.s, this.dynamicProperties), i.s.t = r.s.t, this.viewData.a[n] = i
        } else this.viewData.a = [];
        e.p && "m" in e.p ? (this.viewData.p = {
            f: PropertyFactory.getProp(this, e.p.f, 0, 0, this.dynamicProperties),
            l: PropertyFactory.getProp(this, e.p.l, 0, 0, this.dynamicProperties),
            r: e.p.r,
            m: this.maskManager.getMaskProperty(e.p.m)
        }, this.maskPath = !0) : this.maskPath = !1
    }, ITextElement.prototype.prepareFrame = function(t) {
        var e = 0,
            n = this.data.t.d.k.length,
            i = this.data.t.d.k[e].s;
        for (e += 1; n > e && !(this.data.t.d.k[e].t > t);) i = this.data.t.d.k[e].s, e += 1;
        this.lettersChangedFlag = !1, i !== this.currentTextDocumentData && (this.currentTextDocumentData = i, this.lettersChangedFlag = !0, this.buildNewText()), this._parent.prepareFrame.call(this, t)
    }, ITextElement.prototype.createPathShape = function(t, e) {
        var n, i, r = e.length,
            a = "";
        for (n = 0; r > n; n += 1) i = e[n].ks.k, a += this.buildShapeString(i, i.i.length, !0, t);
        return a
    }, ITextElement.prototype.getMeasures = function() {
        var t, e, n, i, r = this.mHelper,
            a = this.renderType,
            s = this.data,
            o = this.currentTextDocumentData,
            l = o.l;
        if (this.maskPath) {
            var h = this.viewData.p.m;
            if (!this.viewData.p.n || this.viewData.p.mdf) {
                var p = h.v;
                this.viewData.p.r && (p = reversePath(p));
                var c = {
                    tLength: 0,
                    segments: []
                };
                i = p.v.length - 1;
                var u, m = 0;
                for (n = 0; i > n; n += 1) u = {
                    s: p.v[n],
                    e: p.v[n + 1],
                    to: [p.o[n][0] - p.v[n][0], p.o[n][1] - p.v[n][1]],
                    ti: [p.i[n + 1][0] - p.v[n + 1][0], p.i[n + 1][1] - p.v[n + 1][1]]
                }, bez.buildBezierData(u), c.tLength += u.bezierData.segmentLength, c.segments.push(u), m += u.bezierData.segmentLength;
                n = i, h.v.c && (u = {
                    s: p.v[n],
                    e: p.v[0],
                    to: [p.o[n][0] - p.v[n][0], p.o[n][1] - p.v[n][1]],
                    ti: [p.i[0][0] - p.v[0][0], p.i[0][1] - p.v[0][1]]
                }, bez.buildBezierData(u), c.tLength += u.bezierData.segmentLength, c.segments.push(u), m += u.bezierData.segmentLength), this.viewData.p.pi = c
            }
            var d, f, y, c = this.viewData.p.pi,
                v = this.viewData.p.f.v,
                g = 0,
                b = 1,
                x = 0,
                k = !0,
                _ = c.segments;
            if (0 > v && h.v.c)
                for (c.tLength < Math.abs(v) && (v = -Math.abs(v) % c.tLength), g = _.length - 1, y = _[g].bezierData.points, b = y.length - 1; 0 > v;) v += y[b].partialLength, 0 > (b -= 1) && (g -= 1, y = _[g].bezierData.points, b = y.length - 1);
            y = _[g].bezierData.points, f = y[b - 1], d = y[b];
            var E, w, S = d.partialLength
        }
        i = l.length, t = 0, e = 0;
        var P, C, D, T, A, M = 1.2 * o.s * .714,
            F = !0,
            I = this.viewData,
            z = Array.apply(null, {
                length: i
            });
        T = I.a.length;
        var V, N, L, B, R, O, j, H, $, Y, G, X, W, q, Z, K, U = -1,
            Q = v,
            J = g,
            tt = b,
            et = -1,
            nt = 0;
        for (n = 0; i > n; n += 1)
            if (r.reset(), O = 1, l[n].n) t = 0, e += o.yOffset, e += F ? 1 : 0, v = Q, F = !1, nt = 0, this.maskPath && (g = J, b = tt, y = _[g].bezierData.points, f = y[b - 1], d = y[b], S = d.partialLength, x = 0), z[n] = this.emptyProp;
            else {
                if (this.maskPath) {
                    if (et !== l[n].line) {
                        switch (o.j) {
                            case 1:
                                v += m - o.lineWidths[l[n].line];
                                break;
                            case 2:
                                v += (m - o.lineWidths[l[n].line]) / 2
                        }
                        et = l[n].line
                    }
                    U !== l[n].ind && (l[U] && (v += l[U].extra), v += l[n].an / 2, U = l[n].ind), v += I.m.a.v[0] * l[n].an / 200;
                    var it = 0;
                    for (D = 0; T > D; D += 1) P = I.a[D].a, "p" in P && (C = I.a[D].s, N = C.getMult(l[n].anIndexes[D], s.t.a[D].s.totalChars), it += N.length ? P.p.v[0] * N[0] : P.p.v[0] * N), "a" in P && (C = I.a[D].s, N = C.getMult(l[n].anIndexes[D], s.t.a[D].s.totalChars), it += N.length ? P.a.v[0] * N[0] : P.a.v[0] * N);
                    for (k = !0; k;) x + S >= v + it || !y ? (E = (v + it - x) / d.partialLength, B = f.point[0] + (d.point[0] - f.point[0]) * E, R = f.point[1] + (d.point[1] - f.point[1]) * E, r.translate(-I.m.a.v[0] * l[n].an / 200, -I.m.a.v[1] * M / 100), k = !1) : y && (x += d.partialLength, b += 1, b >= y.length && (b = 0, g += 1, _[g] ? y = _[g].bezierData.points : h.v.c ? (b = 0, g = 0, y = _[g].bezierData.points) : (x -= d.partialLength, y = null)), y && (f = d, d = y[b], S = d.partialLength));
                    L = l[n].an / 2 - l[n].add, r.translate(-L, 0, 0)
                } else L = l[n].an / 2 - l[n].add, r.translate(-L, 0, 0), r.translate(-I.m.a.v[0] * l[n].an / 200, -I.m.a.v[1] * M / 100, 0);
                for (nt += l[n].l / 2, D = 0; T > D; D += 1) "t" in (P = I.a[D].a) && (C = I.a[D].s, N = C.getMult(l[n].anIndexes[D], s.t.a[D].s.totalChars), this.maskPath ? v += N.length ? P.t * N[0] : P.t * N : t += N.length ? P.t.v * N[0] : P.t.v * N);
                for (nt += l[n].l / 2, o.strokeWidthAnim && (H = o.sw || 0), o.strokeColorAnim && (j = o.sc ? [o.sc[0], o.sc[1], o.sc[2]] : [0, 0, 0]), o.fillColorAnim && ($ = [o.fc[0], o.fc[1], o.fc[2]]), D = 0; T > D; D += 1) "a" in (P = I.a[D].a) && (C = I.a[D].s, N = C.getMult(l[n].anIndexes[D], s.t.a[D].s.totalChars), N.length ? r.translate(-P.a.v[0] * N[0], -P.a.v[1] * N[1], P.a.v[2] * N[2]) : r.translate(-P.a.v[0] * N, -P.a.v[1] * N, P.a.v[2] * N));
                for (D = 0; T > D; D += 1) "s" in (P = I.a[D].a) && (C = I.a[D].s, N = C.getMult(l[n].anIndexes[D], s.t.a[D].s.totalChars), N.length ? r.scale(1 + (P.s.v[0] - 1) * N[0], 1 + (P.s.v[1] - 1) * N[1], 1) : r.scale(1 + (P.s.v[0] - 1) * N, 1 + (P.s.v[1] - 1) * N, 1));
                for (D = 0; T > D; D += 1) {
                    if (P = I.a[D].a, C = I.a[D].s, N = C.getMult(l[n].anIndexes[D], s.t.a[D].s.totalChars), "sk" in P && (N.length ? r.skewFromAxis(-P.sk.v * N[0], P.sa.v * N[1]) : r.skewFromAxis(-P.sk.v * N, P.sa.v * N)), "r" in P && r.rotateZ(N.length ? -P.r.v * N[2] : -P.r.v * N), "ry" in P && r.rotateY(N.length ? P.ry.v * N[1] : P.ry.v * N), "rx" in P && r.rotateX(N.length ? P.rx.v * N[0] : P.rx.v * N), "o" in P && (O += N.length ? (P.o.v * N[0] - O) * N[0] : (P.o.v * N - O) * N), o.strokeWidthAnim && "sw" in P && (H += N.length ? P.sw.v * N[0] : P.sw.v * N), o.strokeColorAnim && "sc" in P)
                        for (Y = 0; 3 > Y; Y += 1) j[Y] = Math.round(N.length ? 255 * (j[Y] + (P.sc.v[Y] - j[Y]) * N[0]) : 255 * (j[Y] + (P.sc.v[Y] - j[Y]) * N));
                    if (o.fillColorAnim) {
                        if ("fc" in P)
                            for (Y = 0; 3 > Y; Y += 1) $[Y] = N.length ? $[Y] + (P.fc.v[Y] - $[Y]) * N[0] : $[Y] + (P.fc.v[Y] - $[Y]) * N;
                        "fh" in P && ($ = N.length ? addHueToRGB($, P.fh.v * N[0]) : addHueToRGB($, P.fh.v * N)), "fs" in P && ($ = N.length ? addSaturationToRGB($, P.fs.v * N[0]) : addSaturationToRGB($, P.fs.v * N)), "fb" in P && ($ = N.length ? addBrightnessToRGB($, P.fb.v * N[0]) : addBrightnessToRGB($, P.fb.v * N))
                    }
                }
                for (D = 0; T > D; D += 1) "p" in (P = I.a[D].a) && (C = I.a[D].s, N = C.getMult(l[n].anIndexes[D], s.t.a[D].s.totalChars), this.maskPath ? N.length ? r.translate(0, P.p.v[1] * N[0], -P.p.v[2] * N[1]) : r.translate(0, P.p.v[1] * N, -P.p.v[2] * N) : N.length ? r.translate(P.p.v[0] * N[0], P.p.v[1] * N[1], -P.p.v[2] * N[2]) : r.translate(P.p.v[0] * N, P.p.v[1] * N, -P.p.v[2] * N));
                if (o.strokeWidthAnim && (G = 0 > H ? 0 : H), o.strokeColorAnim && (X = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), o.fillColorAnim && (W = "rgb(" + Math.round(255 * $[0]) + "," + Math.round(255 * $[1]) + "," + Math.round(255 * $[2]) + ")"), this.maskPath) {
                    if (r.translate(0, -o.ls), r.translate(0, I.m.a.v[1] * M / 100 + e, 0), s.t.p.p) {
                        w = (d.point[1] - f.point[1]) / (d.point[0] - f.point[0]);
                        var rt = 180 * Math.atan(w) / Math.PI;
                        d.point[0] < f.point[0] && (rt += 180), r.rotate(-rt * Math.PI / 180)
                    }
                    r.translate(B, R, 0), v -= I.m.a.v[0] * l[n].an / 200, l[n + 1] && U !== l[n + 1].ind && (v += l[n].an / 2, v += o.tr / 1e3 * o.s)
                } else {
                    switch (r.translate(t, e, 0), o.ps && r.translate(o.ps[0], o.ps[1] + o.ascent, 0), o.j) {
                        case 1:
                            r.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[l[n].line]), 0, 0);
                            break;
                        case 2:
                            r.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[l[n].line]) / 2, 0, 0)
                    }
                    r.translate(0, -o.ls), r.translate(L, 0, 0), r.translate(I.m.a.v[0] * l[n].an / 200, I.m.a.v[1] * M / 100, 0), t += l[n].l + o.tr / 1e3 * o.s
                }
                "html" === a ? q = r.toCSS() : "svg" === a ? q = r.to2dCSS() : Z = [r.props[0], r.props[1], r.props[2], r.props[3], r.props[4], r.props[5], r.props[6], r.props[7], r.props[8], r.props[9], r.props[10], r.props[11], r.props[12], r.props[13], r.props[14], r.props[15]], K = O, V = this.renderedLetters[n], !V || V.o === K && V.sw === G && V.sc === X && V.fc === W ? "svg" !== a && "html" !== a || V && V.m === q ? "canvas" !== a || V && V.props[0] === Z[0] && V.props[1] === Z[1] && V.props[4] === Z[4] && V.props[5] === Z[5] && V.props[12] === Z[12] && V.props[13] === Z[13] ? A = V : (this.lettersChangedFlag = !0, A = new LetterProps(K, G, X, W, null, Z)) : (this.lettersChangedFlag = !0, A = new LetterProps(K, G, X, W, q)) : (this.lettersChangedFlag = !0, A = new LetterProps(K, G, X, W, q, Z)), this.renderedLetters[n] = A
            }
    }, ITextElement.prototype.buildShapeString = IShapeElement.prototype.buildShapeString, ITextElement.prototype.emptyProp = new LetterProps, createElement(SVGBaseElement, SVGTextElement), SVGTextElement.prototype.init = ITextElement.prototype.init, SVGTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape, SVGTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, SVGTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame, SVGTextElement.prototype.buildShapeString = ITextElement.prototype.buildShapeString, SVGTextElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, SVGTextElement.prototype.buildNewText = function() {
        var t, e, n = this.currentTextDocumentData;
        this.renderedLetters = Array.apply(null, {
            length: this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0
        }), n.fc ? this.layerElement.setAttribute("fill", "rgb(" + Math.round(255 * n.fc[0]) + "," + Math.round(255 * n.fc[1]) + "," + Math.round(255 * n.fc[2]) + ")") : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), n.sc && (this.layerElement.setAttribute("stroke", "rgb(" + Math.round(255 * n.sc[0]) + "," + Math.round(255 * n.sc[1]) + "," + Math.round(255 * n.sc[2]) + ")"), this.layerElement.setAttribute("stroke-width", n.sw)), this.layerElement.setAttribute("font-size", n.s);
        var i = this.globalData.fontManager.getFontByName(n.f);
        if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
        else {
            this.layerElement.setAttribute("font-family", i.fFamily);
            var r = n.fWeight,
                a = n.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", r)
        }
        var s = n.l || [];
        if (e = s.length) {
            var o, l, h = this.mHelper,
                p = "",
                c = this.data.singleShape;
            if (c) var u = 0,
                m = 0,
                d = n.lineWidths,
                f = n.boxWidth,
                y = !0;
            var v = 0;
            for (t = 0; e > t; t += 1) {
                if (this.globalData.fontManager.chars ? c && 0 !== t || (o = this.textSpans[v] ? this.textSpans[v] : document.createElementNS(svgNS, "path")) : o = this.textSpans[v] ? this.textSpans[v] : document.createElementNS(svgNS, "text"), o.style.display = "inherit", o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), c && s[t].n && (u = 0, m += n.yOffset, m += y ? 1 : 0, y = !1), h.reset(), this.globalData.fontManager.chars && h.scale(n.s / 100, n.s / 100), c) {
                    switch (n.ps && h.translate(n.ps[0], n.ps[1] + n.ascent, 0), h.translate(0, -n.ls, 0), n.j) {
                        case 1:
                            h.translate(n.justifyOffset + (f - d[s[t].line]), 0, 0);
                            break;
                        case 2:
                            h.translate(n.justifyOffset + (f - d[s[t].line]) / 2, 0, 0)
                    }
                    h.translate(u, m, 0)
                }
                if (this.globalData.fontManager.chars) {
                    var g, b = this.globalData.fontManager.getCharData(n.t.charAt(t), i.fStyle, this.globalData.fontManager.getFontByName(n.f).fFamily);
                    g = b ? b.data : null, g && g.shapes && (l = g.shapes[0].it, c || (p = ""), p += this.createPathShape(h, l), c || o.setAttribute("d", p)), c || this.layerElement.appendChild(o)
                } else o.textContent = s[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.layerElement.appendChild(o), c && o.setAttribute("transform", h.to2dCSS());
                c && (u += s[t].l || 0, u += n.tr / 1e3 * n.s), this.textSpans[v] = o, v += 1
            }
            if (!c)
                for (; v < this.textSpans.length;) this.textSpans[v].style.display = "none", v += 1;
            c && this.globalData.fontManager.chars && (o.setAttribute("d", p), this.layerElement.appendChild(o))
        }
    }, SVGTextElement.prototype.renderFrame = function(t) {
        if (!1 === this._parent.renderFrame.call(this, t)) return void this.hide();
        if (this.hidden && this.show(), !this.data.singleShape && (this.getMeasures(), this.lettersChangedFlag)) {
            var e, n, i = this.renderedLetters,
                r = this.currentTextDocumentData.l;
            n = r.length;
            var a;
            for (e = 0; n > e; e += 1) r[e].n || (a = i[e], this.textSpans[e].setAttribute("transform", a.m), this.textSpans[e].setAttribute("opacity", a.o), a.sw && this.textSpans[e].setAttribute("stroke-width", a.sw), a.sc && this.textSpans[e].setAttribute("stroke", a.sc), a.fc && this.textSpans[e].setAttribute("fill", a.fc));
            this.firstFrame && (this.firstFrame = !1)
        }
    }, SVGTextElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent)
    }, SVGTintFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[0].p.v,
                n = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v / 100;
            this.matrixFilter.setAttribute("values", n[0] - e[0] + " 0 0 0 " + e[0] + " " + (n[1] - e[1]) + " 0 0 0 " + e[1] + " " + (n[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
        }
    }, SVGFillFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[2].p.v,
                n = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + n + " 0")
        }
    }, SVGStrokeEffect.prototype.initialize = function() {
        var t, e, n, i, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, n = 0) : (n = this.filterManager.effectElements[0].p.v - 1, i = n + 1), e = document.createElementNS(svgNS, "g"), e.setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1), n; i > n; n += 1) t = document.createElementNS(svgNS, "path"), e.appendChild(t), this.paths.push({
            p: t,
            m: n
        });
        if (3 === this.filterManager.effectElements[10].p.v) {
            var a = document.createElementNS(svgNS, "mask"),
                s = "stms_" + randomString(10);
            a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
            var o = document.createElementNS(svgNS, "g");
            o.setAttribute("mask", "url(#" + s + ")"), r[0] && o.appendChild(r[0]), this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
                for (var r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
        }
        this.initialized = !0, this.pathMasker = e
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
        this.initialized || this.initialize();
        var e, n, i, r = this.paths.length;
        for (e = 0; r > e; e += 1)
            if (n = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager.mdf || n.prop.mdf) && i.setAttribute("d", n.lastPath), t || this.filterManager.effectElements[9].p.mdf || this.filterManager.effectElements[4].p.mdf || this.filterManager.effectElements[7].p.mdf || this.filterManager.effectElements[8].p.mdf || n.prop.mdf) {
                var a;
                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                    var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                        o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                        l = i.getTotalLength();
                    a = "0 0 0 " + l * s + " ";
                    var h, p = l * (o - s),
                        c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                        u = Math.floor(p / c);
                    for (h = 0; u > h; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                    a += "0 " + 10 * l + " 0 0"
                } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                i.setAttribute("stroke-dasharray", a)
            }
        if ((t || this.filterManager.effectElements[4].p.mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p.mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p.mdf)) {
            var m = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * m[0]) + "," + bm_floor(255 * m[1]) + "," + bm_floor(255 * m[2]) + ")")
        }
    }, SVGTritoneFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[0].p.v,
                n = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v,
                r = i[0] + " " + n[0] + " " + e[0],
                a = i[1] + " " + n[1] + " " + e[1],
                s = i[2] + " " + n[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", r), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
        }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
        var n = document.createElementNS(svgNS, t);
        return n.setAttribute("type", "table"), e.appendChild(n), n
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, n, i, r) {
        for (var a, s, o = 0, l = Math.min(t, e), h = Math.max(t, e), p = Array.call(null, {
                length: 256
            }), c = 0, u = r - i, m = e - t; 256 >= o;) a = o / 256, s = l >= a ? 0 > m ? r : i : a >= h ? 0 > m ? i : r : i + u * Math.pow((a - t) / m, 1 / n), p[c++] = s, o += 256 / 255;
        return p.join(" ")
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e, n = this.filterManager.effectElements;
            this.feFuncRComposed && (t || n[2].p.mdf || n[3].p.mdf || n[4].p.mdf || n[5].p.mdf || n[6].p.mdf) && (e = this.getTableValue(n[2].p.v, n[3].p.v, n[4].p.v, n[5].p.v, n[6].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || n[9].p.mdf || n[10].p.mdf || n[11].p.mdf || n[12].p.mdf || n[13].p.mdf) && (e = this.getTableValue(n[9].p.v, n[10].p.v, n[11].p.v, n[12].p.v, n[13].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || n[16].p.mdf || n[17].p.mdf || n[18].p.mdf || n[19].p.mdf || n[20].p.mdf) && (e = this.getTableValue(n[16].p.v, n[17].p.v, n[18].p.v, n[19].p.v, n[20].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || n[23].p.mdf || n[24].p.mdf || n[25].p.mdf || n[26].p.mdf || n[27].p.mdf) && (e = this.getTableValue(n[23].p.v, n[24].p.v, n[25].p.v, n[26].p.v, n[27].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || n[30].p.mdf || n[31].p.mdf || n[32].p.mdf || n[33].p.mdf || n[34].p.mdf) && (e = this.getTableValue(n[30].p.v, n[31].p.v, n[32].p.v, n[33].p.v, n[34].p.v), this.feFuncA.setAttribute("tableValues", e))
        }
    }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            if ((t || this.filterManager.effectElements[4].p.mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p.mdf) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p.mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p.mdf || this.filterManager.effectElements[3].p.mdf) {
                var n = this.filterManager.effectElements[3].p.v,
                    i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                    r = n * Math.cos(i),
                    a = n * Math.sin(i);
                this.feOffset.setAttribute("dx", r), this.feOffset.setAttribute("dy", a)
            }
        }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
        var n = document.createElementNS(svgNS, "mask");
        n.setAttribute("id", e.layerId), n.setAttribute("mask-type", "alpha"), n.appendChild(e.layerElement), t.setMatte(e.layerId), e.data.hd = !1, t.globalData.defs.appendChild(n)
    }, SVGMatte3Effect.prototype.initialize = function() {
        for (var t = this.filterManager.effectElements[0].p.v, e = 0, n = this.elem.comp.elements.length; n > e;) this.elem.comp.elements[e].data.ind === t && this.setElementAsMask(this.elem, this.elem.comp.elements[e]), e += 1;
        this.initialized = !0
    }, SVGMatte3Effect.prototype.renderFrame = function() {
        this.initialized || this.initialize()
    }, SVGEffects.prototype.renderFrame = function(t) {
        var e, n = this.filters.length;
        for (e = 0; n > e; e += 1) this.filters[e].renderFrame(t)
    }, createElement(SVGBaseElement, ICompElement), ICompElement.prototype.hide = function() {
        if (!this.hidden) {
            this._parent.hide.call(this);
            var t, e = this.elements.length;
            for (t = 0; e > t; t += 1) this.elements[t] && this.elements[t].hide()
        }
    }, ICompElement.prototype.prepareFrame = function(t) {
        if (this._parent.prepareFrame.call(this, t), !1 !== this.isVisible || this.data.xt) {
            if (this.tm) {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            } else this.renderedFrame = t / this.data.sr;
            var n, i = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), n = 0; i > n; n += 1)(this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(this.renderedFrame - this.layers[n].st)
        }
    }, ICompElement.prototype.renderFrame = function(t) {
        var e, n = this._parent.renderFrame.call(this, t),
            i = this.layers.length;
        if (!1 === n) return void this.hide();
        for (this.hidden && this.show(), e = 0; i > e; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
        this.firstFrame && (this.firstFrame = !1)
    }, ICompElement.prototype.setElements = function(t) {
        this.elements = t
    }, ICompElement.prototype.getElements = function() {
        return this.elements
    }, ICompElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent);
        var t, e = this.layers.length;
        for (t = 0; e > t; t += 1) this.elements[t] && this.elements[t].destroy()
    }, ICompElement.prototype.checkLayers = SVGRenderer.prototype.checkLayers, ICompElement.prototype.buildItem = SVGRenderer.prototype.buildItem, ICompElement.prototype.buildAllItems = SVGRenderer.prototype.buildAllItems, ICompElement.prototype.buildElementParenting = SVGRenderer.prototype.buildElementParenting, ICompElement.prototype.createItem = SVGRenderer.prototype.createItem, ICompElement.prototype.createImage = SVGRenderer.prototype.createImage, ICompElement.prototype.createComp = SVGRenderer.prototype.createComp, ICompElement.prototype.createSolid = SVGRenderer.prototype.createSolid, ICompElement.prototype.createShape = SVGRenderer.prototype.createShape, ICompElement.prototype.createText = SVGRenderer.prototype.createText, ICompElement.prototype.createBase = SVGRenderer.prototype.createBase, ICompElement.prototype.appendElementInPos = SVGRenderer.prototype.appendElementInPos, ICompElement.prototype.checkPendingElements = SVGRenderer.prototype.checkPendingElements, ICompElement.prototype.addPendingElement = SVGRenderer.prototype.addPendingElement, createElement(SVGBaseElement, IImageElement), IImageElement.prototype.createElements = function() {
        var t = this.globalData.getAssetsPath(this.assetData);
        this._parent.createElements.call(this), this.innerElem = document.createElementNS(svgNS, "image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", "xMidYMid slice"), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.maskedElement = this.innerElem, this.layerElement.appendChild(this.innerElem), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, IImageElement.prototype.renderFrame = function(t) {
        return !1 === this._parent.renderFrame.call(this, t) ? void this.hide() : (this.hidden && this.show(), void(this.firstFrame && (this.firstFrame = !1)))
    }, IImageElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent), this.innerElem = null
    }, createElement(SVGBaseElement, ISolidElement), ISolidElement.prototype.createElements = function() {
        this._parent.createElements.call(this);
        var t = document.createElementNS(svgNS, "rect");
        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t), this.innerElem = t, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, ISolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, ISolidElement.prototype.destroy = IImageElement.prototype.destroy;
    var animationManager = function() {
            function t(t) {
                for (var e = 0, n = t.target; w > e;) _[e].animation === n && (_.splice(e, 1), e -= 1, w -= 1, n.isPaused || i()), e += 1
            }

            function e(t, e) {
                if (!t) return null;
                for (var n = 0; w > n;) {
                    if (_[n].elem == t && null !== _[n].elem) return _[n].animation;
                    n += 1
                }
                var i = new AnimationItem;
                return r(i, t), i.setData(t, e), i
            }

            function n() {
                P += 1, x()
            }

            function i() {
                0 === (P -= 1) && (S = !0)
            }

            function r(e, r) {
                e.addEventListener("destroy", t), e.addEventListener("_active", n), e.addEventListener("_idle", i), _.push({
                    elem: r,
                    animation: e
                }), w += 1
            }

            function a(t) {
                var e = new AnimationItem;
                return r(e, null), e.setParams(t), e
            }

            function s(t, e) {
                var n;
                for (n = 0; w > n; n += 1) _[n].animation.setSpeed(t, e)
            }

            function o(t, e) {
                var n;
                for (n = 0; w > n; n += 1) _[n].animation.setDirection(t, e)
            }

            function l(t) {
                var e;
                for (e = 0; w > e; e += 1) _[e].animation.play(t)
            }

            function h(t, e) {
                E = Date.now();
                var n;
                for (n = 0; w > n; n += 1) _[n].animation.moveFrame(t, e)
            }

            function p(t) {
                var e, n = t - E;
                for (e = 0; w > e; e += 1) _[e].animation.advanceTime(n);
                E = t, S || requestAnimationFrame(p)
            }

            function c(t) {
                E = t, requestAnimationFrame(p)
            }

            function u(t) {
                var e;
                for (e = 0; w > e; e += 1) _[e].animation.pause(t)
            }

            function m(t, e, n) {
                var i;
                for (i = 0; w > i; i += 1) _[i].animation.goToAndStop(t, e, n)
            }

            function d(t) {
                var e;
                for (e = 0; w > e; e += 1) _[e].animation.stop(t)
            }

            function f(t) {
                var e;
                for (e = 0; w > e; e += 1) _[e].animation.togglePause(t)
            }

            function y(t) {
                var e;
                for (e = w - 1; e >= 0; e -= 1) _[e].animation.destroy(t)
            }

            function v(t, n, i) {
                var r, a = document.getElementsByClassName("bodymovin"),
                    s = a.length;
                for (r = 0; s > r; r += 1) i && a[r].setAttribute("data-bm-type", i), e(a[r], t);
                if (n && 0 === s) {
                    i || (i = "svg");
                    var o = document.getElementsByTagName("body")[0];
                    o.innerHTML = "";
                    var l = document.createElement("div");
                    l.style.width = "100%", l.style.height = "100%", l.setAttribute("data-bm-type", i), o.appendChild(l), e(l, t)
                }
            }

            function g() {
                var t;
                for (t = 0; w > t; t += 1) _[t].animation.resize()
            }

            function b() {
                requestAnimationFrame(c)
            }

            function x() {
                S && (S = !1, requestAnimationFrame(c))
            }
            var k = {},
                _ = [],
                E = 0,
                w = 0,
                S = !0,
                P = 0;
            return setTimeout(b, 0), k.registerAnimation = e, k.loadAnimation = a, k.setSpeed = s, k.setDirection = o, k.play = l, k.moveFrame = h, k.pause = u, k.stop = d, k.togglePause = f, k.searchAnimations = v, k.resize = g, k.start = b, k.goToAndStop = m, k.destroy = y, k
        }(),
        AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.pendingElements = 0, this.playCount = 0, this.prerenderFramesFlag = !0, this.animationData = {}, this.layers = [], this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = randomString(10), this.scaleMode = "fit", this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this.pendingSegment = !1, this._idle = !0, this.projectInterface = ProjectInterface()
        };
    AnimationItem.prototype.setParams = function(t) {
            var e = this;
            t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var n = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
            switch (n) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this, t.rendererSettings);
                    break;
                case "svg":
                    this.renderer = new SVGRenderer(this, t.rendererSettings);
                    break;
                case "hybrid":
                case "html":
                default:
                    this.renderer = new HybridRenderer(this, t.rendererSettings)
            }
            if (this.renderer.setProjectInterface(this.projectInterface), this.animType = n, "" === t.loop || null === t.loop || (this.loop = !1 !== t.loop && (!0 === t.loop || parseInt(t.loop))), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.prerenderFramesFlag = !("prerender" in t) || t.prerender, this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, t.animationData) e.configAnimation(t.animationData);
            else if (t.path) {
                "json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), t.path += "data.json");
                var i = new XMLHttpRequest;
                this.path = -1 != t.path.lastIndexOf("\\") ? t.path.substr(0, t.path.lastIndexOf("\\") + 1) : t.path.substr(0, t.path.lastIndexOf("/") + 1), this.assetsPath = t.assetsPath, this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), i.open("GET", t.path, !0), i.send(), i.onreadystatechange = function() {
                    if (4 == i.readyState)
                        if (200 == i.status) e.configAnimation(JSON.parse(i.responseText));
                        else try {
                            var t = JSON.parse(i.responseText);
                            e.configAnimation(t)
                        } catch (t) {}
                }
            }
        }, AnimationItem.prototype.setData = function(t, e) {
            var n = {
                    wrapper: t,
                    animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
                },
                i = t.attributes;
            n.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", n.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
            var r = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
            "" === r || (n.loop = "false" !== r && ("true" === r || parseInt(r)));
            var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
            n.autoplay = "false" !== a, n.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (n.prerender = !1), console.log("animElements:", n), this.setParams(n)
        },
        AnimationItem.prototype.includeLayers = function(t) {
            t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip), this.animationData.tf = this.totalFrames);
            var e, n, i = this.animationData.layers,
                r = i.length,
                a = t.layers,
                s = a.length;
            for (n = 0; s > n; n += 1)
                for (e = 0; r > e;) {
                    if (i[e].id == a[n].id) {
                        i[e] = a[n];
                        break
                    }
                    e += 1
                }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (r = t.assets.length, e = 0; r > e; e += 1) this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.renderFrame(null), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.animationData.tf);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var n = new XMLHttpRequest,
                i = this,
                r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, n.open("GET", r, !0), n.send(), n.onreadystatechange = function() {
                if (4 == n.readyState)
                    if (200 == n.status) i.includeLayers(JSON.parse(n.responseText));
                    else try {
                        var t = JSON.parse(n.responseText);
                        i.includeLayers(t)
                    } catch (t) {}
            }
        }, AnimationItem.prototype.loadSegments = function() {
            this.animationData.segments || (this.timeCompleted = this.animationData.tf), this.loadNextSegment()
        }, AnimationItem.prototype.configAnimation = function(t) {
            this.renderer && this.renderer.destroyed || (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.animationData.tf = this.totalFrames, this.renderer.configAnimation(t), t.assets || (t.assets = []), t.comps && (t.assets = t.assets.concat(t.comps), t.comps = null), this.renderer.searchExtraCompositions(t.assets), this.layers = this.animationData.layers, this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.imagePreloader = new ImagePreloader, this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(t.assets), this.loadSegments(), this.updaFrameModifier(), this.renderer.globalData.fontManager ? this.waitForFontsLoaded() : (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded()))
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
            function t() {
                this.renderer.globalData.fontManager.loaded ? (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded()) : setTimeout(t.bind(this), 20)
            }
            return function() {
                t.bind(this)()
            }
        }(), AnimationItem.prototype.addPendingElement = function() {
            this.pendingElements += 1
        }, AnimationItem.prototype.elementLoaded = function() {
            this.pendingElements--, this.checkLoaded()
        }, AnimationItem.prototype.checkLoaded = function() {
            0 === this.pendingElements && (expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                this.trigger("DOMLoaded")
            }.bind(this), 0), this.isLoaded = !0, this.gotoFrame(), this.autoplay && this.play())
        }, AnimationItem.prototype.resize = function() {
            this.renderer.updateContainerSize()
        }, AnimationItem.prototype.setSubframe = function(t) {
            this.subframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.subframeEnabled ? this.currentRawFrame : Math.floor(this.currentRawFrame), this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
        }, AnimationItem.prototype.renderFrame = function() {
            !1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame)
        }, AnimationItem.prototype.play = function(t) {
            t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
            t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this.pendingSegment || (this._idle = !0, this.trigger("_idle")))
        }, AnimationItem.prototype.togglePause = function(t) {
            t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
            t && this.name != t || (this.pause(), this.currentFrame = this.currentRawFrame = 0, this.playCount = 0, this.gotoFrame())
        }, AnimationItem.prototype.goToAndStop = function(t, e, n) {
            n && this.name != n || (this.setCurrentRawFrameValue(e ? t : t * this.frameModifier), this.pause())
        }, AnimationItem.prototype.goToAndPlay = function(t, e, n) {
            this.goToAndStop(t, e, n), this.play()
        }, AnimationItem.prototype.advanceTime = function(t) {
            return this.pendingSegment ? (this.pendingSegment = !1, this.adjustSegment(this.segments.shift()), void(this.isPaused && this.play())) : void(!0 !== this.isPaused && !1 !== this.isLoaded && this.setCurrentRawFrameValue(this.currentRawFrame + t * this.frameModifier))
        }, AnimationItem.prototype.updateAnimation = function(t) {
            this.setCurrentRawFrameValue(this.totalFrames * t)
        }, AnimationItem.prototype.moveFrame = function(t, e) {
            e && this.name != e || this.setCurrentRawFrameValue(this.currentRawFrame + t)
        }, AnimationItem.prototype.adjustSegment = function(t) {
            this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .01)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(0)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
            var n = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? n = t : this.currentRawFrame + this.firstFrame > e && (n = e - t - .01)), this.firstFrame = t, this.totalFrames = e - t, -1 !== n && this.goToAndStop(n, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
            if ("object" == typeof t[0]) {
                var n, i = t.length;
                for (n = 0; i > n; n += 1) this.segments.push(t[n])
            } else this.segments.push(t);
            e && this.adjustSegment(this.segments.shift()), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
            this.segments.length = 0, this.segments.push([this.animationData.ip * this.frameRate, Math.floor(this.animationData.op - this.animationData.ip + this.animationData.ip * this.frameRate)]), t && this.adjustSegment(this.segments.shift())
        }, AnimationItem.prototype.checkSegments = function() {
            this.segments.length && (this.pendingSegment = !0)
        }, AnimationItem.prototype.remove = function(t) {
            t && this.name != t || this.renderer.destroy()
        }, AnimationItem.prototype.destroy = function(t) {
            t && this.name != t || this.renderer && this.renderer.destroyed || (this.renderer.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
            if (this.currentRawFrame = t, this.currentRawFrame >= this.totalFrames) {
                if (this.checkSegments(), !1 === this.loop) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
                if (this.trigger("loopComplete"), this.playCount += 1, !0 !== this.loop && this.playCount == this.loop || this.pendingSegment) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
                this.currentRawFrame = this.currentRawFrame % this.totalFrames
            } else if (this.currentRawFrame < 0) return this.checkSegments(), this.playCount -= 1, this.playCount < 0 && (this.playCount = 0), !1 === this.loop || this.pendingSegment ? (this.currentRawFrame = 0, this.gotoFrame(), this.pause(), void this.trigger("complete")) : (this.trigger("loopComplete"), this.currentRawFrame = (this.totalFrames + this.currentRawFrame) % this.totalFrames, void this.gotoFrame());
            this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
            this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
            this.playDirection = 0 > t ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
        }, AnimationItem.prototype.getPath = function() {
            return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
            var e = "";
            if (this.assetsPath) {
                var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), e = this.assetsPath + n
            } else e = this.path, e += t.u ? t.u : "", e += t.p;
            return e
        }, AnimationItem.prototype.getAssetData = function(t) {
            for (var e = 0, n = this.assets.length; n > e;) {
                if (t == this.assets[e].id) return this.assets[e];
                e += 1
            }
        }, AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
            this.renderer.show()
        }, AnimationItem.prototype.getAssets = function() {
            return this.assets
        }, AnimationItem.prototype.trigger = function(t) {
            if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult));
                    break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                default:
                    this.triggerEvent(t)
            }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.addEventListener = _addEventListener, AnimationItem.prototype.removeEventListener = _removeEventListener, AnimationItem.prototype.triggerEvent = _triggerEvent, extendPrototype(BaseRenderer, CanvasRenderer), CanvasRenderer.prototype.createBase = function(t) {
            return new CVBaseElement(t, this, this.globalData)
        }, CanvasRenderer.prototype.createShape = function(t) {
            return new CVShapeElement(t, this, this.globalData)
        }, CanvasRenderer.prototype.createText = function(t) {
            return new CVTextElement(t, this, this.globalData)
        }, CanvasRenderer.prototype.createImage = function(t) {
            return new CVImageElement(t, this, this.globalData)
        }, CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t, this, this.globalData)
        }, CanvasRenderer.prototype.createSolid = function(t) {
            return new CVSolidElement(t, this, this.globalData)
        }, CanvasRenderer.prototype.ctxTransform = function(t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) {
                if (!this.renderConfig.clearCanvas) return void this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
                this.transformMat.cloneFromProps(t), this.transformMat.transform(this.contextData.cTr.props[0], this.contextData.cTr.props[1], this.contextData.cTr.props[2], this.contextData.cTr.props[3], this.contextData.cTr.props[4], this.contextData.cTr.props[5], this.contextData.cTr.props[6], this.contextData.cTr.props[7], this.contextData.cTr.props[8], this.contextData.cTr.props[9], this.contextData.cTr.props[10], this.contextData.cTr.props[11], this.contextData.cTr.props[12], this.contextData.cTr.props[13], this.contextData.cTr.props[14], this.contextData.cTr.props[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                var e = this.contextData.cTr.props;
                this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
            }
        }, CanvasRenderer.prototype.ctxOpacity = function(t) {
            if (1 !== t) {
                if (!this.renderConfig.clearCanvas) return void(this.canvasContext.globalAlpha *= 0 > t ? 0 : t);
                this.contextData.cO *= 0 > t ? 0 : t, this.canvasContext.globalAlpha = this.contextData.cO
            }
        }, CanvasRenderer.prototype.reset = function() {
            return this.renderConfig.clearCanvas ? (this.contextData.cArrPos = 0, this.contextData.cTr.reset(), void(this.contextData.cO = 1)) : void this.canvasContext.restore()
        }, CanvasRenderer.prototype.save = function(t) {
            if (!this.renderConfig.clearCanvas) return void this.canvasContext.save();
            t && this.canvasContext.save();
            var e = this.contextData.cTr.props;
            (null === this.contextData.saved[this.contextData.cArrPos] || void 0 === this.contextData.saved[this.contextData.cArrPos]) && (this.contextData.saved[this.contextData.cArrPos] = new Array(16));
            var n, i = this.contextData.saved[this.contextData.cArrPos];
            for (n = 0; 16 > n; n += 1) i[n] = e[n];
            this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
        }, CanvasRenderer.prototype.restore = function(t) {
            if (!this.renderConfig.clearCanvas) return void this.canvasContext.restore();
            t && this.canvasContext.restore(), this.contextData.cArrPos -= 1;
            var e, n = this.contextData.saved[this.contextData.cArrPos],
                i = this.contextData.cTr.props;
            for (e = 0; 16 > e; e += 1) i[e] = n[e];
            this.canvasContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]), n = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = n, this.canvasContext.globalAlpha = n
        }, CanvasRenderer.prototype.configAnimation = function(t) {
            this.animationItem.wrapper ? (this.animationItem.container = document.createElement("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d")) : this.canvasContext = this.renderConfig.context, this.data = t, this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.totalFrames = Math.floor(t.tf), this.globalData.compWidth = t.w, this.globalData.compHeight = t.h, this.globalData.frameRate = t.fr, this.globalData.frameId = 0, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.layers = t.layers, this.transformCanvas = {}, this.transformCanvas.w = t.w, this.transformCanvas.h = t.h, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, document.body), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.addPendingElement = this.animationItem.addPendingElement.bind(this.animationItem), this.globalData.transformCanvas = this.transformCanvas, this.elements = Array.apply(null, {
                length: t.layers.length
            }), this.updateContainerSize()
        }, CanvasRenderer.prototype.updateContainerSize = function() {
            var t, e;
            this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr);
            var n, i;
            if (-1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var r = this.renderConfig.preserveAspectRatio.split(" "),
                    a = r[1] || "meet",
                    s = r[0] || "xMidYMid",
                    o = s.substr(0, 4),
                    l = s.substr(4);
                n = t / e, i = this.transformCanvas.w / this.transformCanvas.h, i > n && "meet" === a || n > i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (n > i && "meet" === a || i > n && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (n > i && "meet" === a || i > n && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (i > n && "meet" === a || n > i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (i > n && "meet" === a || n > i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
            } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
            var h, p = this.elements.length;
            for (h = 0; p > h; h += 1) this.elements[h] && 0 === this.elements[h].data.ty && this.elements[h].resize(this.globalData.transformCanvas)
        }, CanvasRenderer.prototype.destroy = function() {
            this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = "");
            var t, e = this.layers ? this.layers.length : 0;
            for (t = e - 1; t >= 0; t -= 1) this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRenderer.prototype.renderFrame = function(t) {
            if (!(this.renderedFrame == t && !0 === this.renderConfig.clearCanvas || this.destroyed || null === t)) {
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem.firstFrame, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, !0 === this.renderConfig.clearCanvas ? (this.reset(), this.canvasContext.save(), this.canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)) : this.save(), this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip();
                var e, n = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = 0; n > e; e++)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                for (e = n - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
                !0 !== this.renderConfig.clearCanvas ? this.restore() : this.canvasContext.restore()
            }
        }, CanvasRenderer.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!e[t] && 99 != this.layers[t].ty) {
                var n = this.createItem(this.layers[t], this, this.globalData);
                e[t] = n, n.initExpressions(), 0 === this.layers[t].ty && n.resize(this.globalData.transformCanvas)
            }
        }, CanvasRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, CanvasRenderer.prototype.hide = function() {
            this.animationItem.container.style.display = "none"
        }, CanvasRenderer.prototype.show = function() {
            this.animationItem.container.style.display = "block"
        }, CanvasRenderer.prototype.searchExtraCompositions = function(t) {
            var e, n = t.length;
            for (document.createElementNS(svgNS, "g"), e = 0; n > e; e += 1)
                if (t[e].xt) {
                    var i = this.createComp(t[e], this.globalData.comp, this.globalData);
                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                }
        }, extendPrototype(BaseRenderer, HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length;) {
                this.pendingElements.pop().checkParenting()
            }
        }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
            var n = t.getBaseElement();
            if (n) {
                var i = this.layers[e];
                if (i.ddd && this.supports3d) this.addTo3dContainer(n, e);
                else {
                    for (var r, a = 0; e > a;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a].getBaseElement()), a += 1;
                    r ? i.ddd && this.supports3d || this.layerElement.insertBefore(n, r) : i.ddd && this.supports3d || this.layerElement.appendChild(n)
                }
            }
        }, HybridRenderer.prototype.createBase = function(t) {
            return new SVGBaseElement(t, this.layerElement, this.globalData, this)
        }, HybridRenderer.prototype.createShape = function(t) {
            return this.supports3d ? new HShapeElement(t, this.layerElement, this.globalData, this) : new IShapeElement(t, this.layerElement, this.globalData, this)
        }, HybridRenderer.prototype.createText = function(t) {
            return this.supports3d ? new HTextElement(t, this.layerElement, this.globalData, this) : new SVGTextElement(t, this.layerElement, this.globalData, this)
        }, HybridRenderer.prototype.createCamera = function(t) {
            return this.camera = new HCameraElement(t, this.layerElement, this.globalData, this), this.camera
        }, HybridRenderer.prototype.createImage = function(t) {
            return this.supports3d ? new HImageElement(t, this.layerElement, this.globalData, this) : new IImageElement(t, this.layerElement, this.globalData, this)
        }, HybridRenderer.prototype.createComp = function(t) {
            return this.supports3d ? new HCompElement(t, this.layerElement, this.globalData, this) : new ICompElement(t, this.layerElement, this.globalData, this)
        }, HybridRenderer.prototype.createSolid = function(t) {
            return this.supports3d ? new HSolidElement(t, this.layerElement, this.globalData, this) : new ISolidElement(t, this.layerElement, this.globalData, this)
        }, HybridRenderer.prototype.getThreeDContainer = function(t) {
            var e = document.createElement("div");
            styleDiv(e), e.style.width = this.globalData.compSize.w + "px", e.style.height = this.globalData.compSize.h + "px", e.style.transformOrigin = e.style.mozTransformOrigin = e.style.webkitTransformOrigin = "50% 50%";
            var n = document.createElement("div");
            styleDiv(n), n.style.transform = n.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", e.appendChild(n), this.resizerElem.appendChild(e);
            var i = {
                container: n,
                perspectiveElem: e,
                startPos: t,
                endPos: t
            };
            return this.threeDElements.push(i), i
        }, HybridRenderer.prototype.build3dContainers = function() {
            var t, e, n = this.layers.length;
            for (t = 0; n > t; t += 1) this.layers[t].ddd ? (e || (e = this.getThreeDContainer(t)), e.endPos = Math.max(e.endPos, t)) : e = null
        }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
            for (var n = 0, i = this.threeDElements.length; i > n;) {
                if (e <= this.threeDElements[n].endPos) {
                    for (var r, a = this.threeDElements[n].startPos; e > a;) this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a].getBaseElement()), a += 1;
                    r ? this.threeDElements[n].container.insertBefore(t, r) : this.threeDElements[n].container.appendChild(t);
                    break
                }
                n += 1
            }
        }, HybridRenderer.prototype.configAnimation = function(t) {
            var e = document.createElement("div"),
                n = this.animationItem.wrapper;
            e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", n.appendChild(e), e.style.overflow = "hidden";
            var i = document.createElementNS(svgNS, "svg");
            i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
            var r = document.createElementNS(svgNS, "defs");
            i.appendChild(r), this.globalData.defs = r, this.data = t, this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.frameId = 0, this.globalData.compSize = {
                w: t.w,
                h: t.h
            }, this.globalData.frameRate = t.fr, this.layers = t.layers, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, i), this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRenderer.prototype.destroy = function() {
            this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
            var t, e = this.layers ? this.layers.length : 0;
            for (t = 0; e > t; t++) this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRenderer.prototype.updateContainerSize = function() {
            var t, e, n, i, r = this.animationItem.wrapper.offsetWidth,
                a = this.animationItem.wrapper.offsetHeight,
                s = r / a;
            this.globalData.compSize.w / this.globalData.compSize.h > s ? (t = r / this.globalData.compSize.w, e = r / this.globalData.compSize.w, n = 0, i = (a - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, n = (r - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + n + "," + i + ",0,1)"
        }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
            this.resizerElem.style.display = "none"
        }, HybridRenderer.prototype.show = function() {
            this.resizerElem.style.display = "block"
        }, HybridRenderer.prototype.initItems = function() {
            if (this.buildAllItems(), this.camera) this.camera.setup();
            else {
                var t, e = this.globalData.compSize.w,
                    n = this.globalData.compSize.h,
                    i = this.threeDElements.length;
                for (t = 0; i > t; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2)) + "px"
            }
        }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
            var e, n = t.length,
                i = document.createElement("div");
            for (e = 0; n > e; e += 1)
                if (t[e].xt) {
                    var r = this.createComp(t[e], i, this.globalData.comp, null);
                    r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                }
        }, createElement(BaseElement, CVBaseElement), CVBaseElement.prototype.createElements = function() {
            this.checkParenting()
        }, CVBaseElement.prototype.checkBlendMode = function(t) {
            if (t.blendMode !== this.data.bm) {
                t.blendMode = this.data.bm;
                var e = "";
                switch (this.data.bm) {
                    case 0:
                        e = "normal";
                        break;
                    case 1:
                        e = "multiply";
                        break;
                    case 2:
                        e = "screen";
                        break;
                    case 3:
                        e = "overlay";
                        break;
                    case 4:
                        e = "darken";
                        break;
                    case 5:
                        e = "lighten";
                        break;
                    case 6:
                        e = "color-dodge";
                        break;
                    case 7:
                        e = "color-burn";
                        break;
                    case 8:
                        e = "hard-light";
                        break;
                    case 9:
                        e = "soft-light";
                        break;
                    case 10:
                        e = "difference";
                        break;
                    case 11:
                        e = "exclusion";
                        break;
                    case 12:
                        e = "hue";
                        break;
                    case 13:
                        e = "saturation";
                        break;
                    case 14:
                        e = "color";
                        break;
                    case 15:
                        e = "luminosity"
                }
                t.canvasContext.globalCompositeOperation = e
            }
        }, CVBaseElement.prototype.renderFrame = function(t) {
            if (3 === this.data.ty) return !1;
            if (this.checkBlendMode(0 === this.data.ty ? this.parentGlobalData : this.globalData), !this.isVisible) return this.isVisible;
            this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v;
            var e, n = this.finalTransform.mat;
            if (this.hierarchy) {
                var i, r = this.hierarchy.length;
                for (e = this.finalTransform.mProp.v.props, n.cloneFromProps(e), i = 0; r > i; i += 1) this.finalTransform.matMdf = !!this.hierarchy[i].finalTransform.mProp.mdf || this.finalTransform.matMdf, e = this.hierarchy[i].finalTransform.mProp.v.props, n.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
            } else t ? (e = this.finalTransform.mProp.v.props, n.cloneFromProps(e)) : n.cloneFromProps(this.finalTransform.mProp.v.props);
            return t && (e = t.mat.props, n.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = !!t.opMdf || this.finalTransform.opMdf, this.finalTransform.matMdf = !!t.matMdf || this.finalTransform.matMdf), this.data.hasMask && (this.globalData.renderer.save(!0), this.maskManager.renderFrame(0 === this.data.ty ? null : n)), this.data.hd && (this.isVisible = !1), this.isVisible
        }, CVBaseElement.prototype.addMasks = function(t) {
            this.maskManager = new CVMaskElement(t, this, this.globalData)
        }, CVBaseElement.prototype.destroy = function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager && this.maskManager.destroy()
        }, CVBaseElement.prototype.mHelper = new Matrix, createElement(CVBaseElement, CVCompElement), CVCompElement.prototype.ctxTransform = CanvasRenderer.prototype.ctxTransform, CVCompElement.prototype.ctxOpacity = CanvasRenderer.prototype.ctxOpacity, CVCompElement.prototype.save = CanvasRenderer.prototype.save, CVCompElement.prototype.restore = CanvasRenderer.prototype.restore, CVCompElement.prototype.reset = function() {
            this.contextData.cArrPos = 0, this.contextData.cTr.reset(), this.contextData.cO = 1
        }, CVCompElement.prototype.resize = function(t) {
            var e = Math.max(t.sx, t.sy);
            this.canvas.width = this.data.w * e, this.canvas.height = this.data.h * e, this.transformCanvas = {
                sc: e,
                w: this.data.w * e,
                h: this.data.h * e,
                props: [e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            };
            var n, i = this.elements.length;
            for (n = 0; i > n; n += 1) this.elements[n] && 0 === this.elements[n].data.ty && this.elements[n].resize(t)
        }, CVCompElement.prototype.prepareFrame = function(t) {
            if (this.globalData.frameId = this.parentGlobalData.frameId, this.globalData.mdf = !1, this._parent.prepareFrame.call(this, t), !1 !== this.isVisible || this.data.xt) {
                var e = t;
                this.tm && (e = this.tm.v) === this.data.op && (e = this.data.op - 1), this.renderedFrame = e / this.data.sr;
                var n, i = this.elements.length;
                for (this.completeLayers || this.checkLayers(t), n = 0; i > n; n += 1)(this.completeLayers || this.elements[n]) && (this.elements[n].prepareFrame(e / this.data.sr - this.layers[n].st), 0 === this.elements[n].data.ty && this.elements[n].globalData.mdf && (this.globalData.mdf = !0));
                this.globalData.mdf && !this.data.xt && (this.canvasContext.clearRect(0, 0, this.data.w, this.data.h), this.ctxTransform(this.transformCanvas.props))
            }
        }, CVCompElement.prototype.renderFrame = function(t) {
            if (!1 !== this._parent.renderFrame.call(this, t)) {
                if (this.globalData.mdf) {
                    var e, n = this.layers.length;
                    for (e = n - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
                this.data.hasMask && this.globalData.renderer.restore(!0), this.firstFrame && (this.firstFrame = !1), this.parentGlobalData.renderer.save(), this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props), this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity), this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas, 0, 0, this.data.w, this.data.h), this.parentGlobalData.renderer.restore(), this.globalData.mdf && this.reset()
            }
        }, CVCompElement.prototype.setElements = function(t) {
            this.elements = t
        }, CVCompElement.prototype.getElements = function() {
            return this.elements
        }, CVCompElement.prototype.destroy = function() {
            var t, e = this.layers.length;
            for (t = e - 1; t >= 0; t -= 1) this.elements[t].destroy();
            this.layers = null, this.elements = null, this._parent.destroy.call(this._parent)
        }, CVCompElement.prototype.checkLayers = CanvasRenderer.prototype.checkLayers, CVCompElement.prototype.buildItem = CanvasRenderer.prototype.buildItem, CVCompElement.prototype.checkPendingElements = CanvasRenderer.prototype.checkPendingElements, CVCompElement.prototype.addPendingElement = CanvasRenderer.prototype.addPendingElement, CVCompElement.prototype.buildAllItems = CanvasRenderer.prototype.buildAllItems, CVCompElement.prototype.createItem = CanvasRenderer.prototype.createItem, CVCompElement.prototype.createImage = CanvasRenderer.prototype.createImage, CVCompElement.prototype.createComp = CanvasRenderer.prototype.createComp, CVCompElement.prototype.createSolid = CanvasRenderer.prototype.createSolid, CVCompElement.prototype.createShape = CanvasRenderer.prototype.createShape, CVCompElement.prototype.createText = CanvasRenderer.prototype.createText, CVCompElement.prototype.createBase = CanvasRenderer.prototype.createBase, CVCompElement.prototype.buildElementParenting = CanvasRenderer.prototype.buildElementParenting, createElement(CVBaseElement, CVImageElement), CVImageElement.prototype.createElements = function() {
            var t = function() {
                    if (this.globalData.elementLoaded(), this.assetData.w !== this.img.width || this.assetData.h !== this.img.height) {
                        var t = document.createElement("canvas");
                        t.width = this.assetData.w, t.height = this.assetData.h;
                        var e, n, i = t.getContext("2d"),
                            r = this.img.width,
                            a = this.img.height,
                            s = r / a,
                            o = this.assetData.w / this.assetData.h;
                        s > o ? (n = a, e = n * o) : (e = r, n = e / o), i.drawImage(this.img, (r - e) / 2, (a - n) / 2, e, n, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                    }
                }.bind(this),
                e = function() {
                    this.failed = !0, this.globalData.elementLoaded()
                }.bind(this);
            this.img = new Image, this.img.addEventListener("load", t, !1), this.img.addEventListener("error", e, !1);
            var n = this.globalData.getAssetsPath(this.assetData);
            this.img.src = n, this._parent.createElements.call(this)
        }, CVImageElement.prototype.renderFrame = function(t) {
            if (!this.failed && !1 !== this._parent.renderFrame.call(this, t)) {
                var e = this.canvasContext;
                this.globalData.renderer.save();
                var n = this.finalTransform.mat.props;
                this.globalData.renderer.ctxTransform(n), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.drawImage(this.img, 0, 0), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
            }
        }, CVImageElement.prototype.destroy = function() {
            this.img = null, this._parent.destroy.call(this._parent)
        }, CVMaskElement.prototype.getMaskProperty = function(t) {
            return this.viewData[t]
        }, CVMaskElement.prototype.prepareFrame = function(t) {
            var e, n = this.dynamicProperties.length;
            for (e = 0; n > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.element.globalData.mdf = !0)
        }, CVMaskElement.prototype.renderFrame = function(t) {
            var e, n, i, r, a, s = this.element.canvasContext,
                o = this.data.masksProperties.length,
                l = !1;
            for (e = 0; o > e; e++)
                if ("n" !== this.masksProperties[e].mode) {
                    !1 === l && (s.beginPath(), l = !0), this.masksProperties[e].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compWidth, 0), s.lineTo(this.element.globalData.compWidth, this.element.globalData.compHeight), s.lineTo(0, this.element.globalData.compHeight), s.lineTo(0, 0)), a = this.viewData[e].v, n = t ? t.applyToPointArray(a.v[0][0], a.v[0][1], 0) : a.v[0], s.moveTo(n[0], n[1]);
                    var h, p = a._length;
                    for (h = 1; p > h; h++) n = t ? t.applyToPointArray(a.o[h - 1][0], a.o[h - 1][1], 0) : a.o[h - 1], i = t ? t.applyToPointArray(a.i[h][0], a.i[h][1], 0) : a.i[h], r = t ? t.applyToPointArray(a.v[h][0], a.v[h][1], 0) : a.v[h], s.bezierCurveTo(n[0], n[1], i[0], i[1], r[0], r[1]);
                    n = t ? t.applyToPointArray(a.o[h - 1][0], a.o[h - 1][1], 0) : a.o[h - 1], i = t ? t.applyToPointArray(a.i[0][0], a.i[0][1], 0) : a.i[0], r = t ? t.applyToPointArray(a.v[0][0], a.v[0][1], 0) : a.v[0], s.bezierCurveTo(n[0], n[1], i[0], i[1], r[0], r[1])
                }
            l && s.clip()
        }, CVMaskElement.prototype.getMask = function(t) {
            for (var e = 0, n = this.masksProperties.length; n > e;) {
                if (this.masksProperties[e].nm === t) return {
                    maskPath: this.viewData[e].pv
                };
                e += 1
            }
        }, CVMaskElement.prototype.destroy = function() {
            this.element = null
        }, createElement(CVBaseElement, CVShapeElement), CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            mat: new Matrix,
            matMdf: !1,
            opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createElements = function() {
            this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.dynamicProperties, !0)
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
            var n = {
                    data: t,
                    type: t.ty,
                    elements: []
                },
                i = {};
            if (("fl" == t.ty || "st" == t.ty) && (i.c = PropertyFactory.getProp(this, t.c, 1, 255, e), i.c.k || (n.co = "rgb(" + bm_floor(i.c.v[0]) + "," + bm_floor(i.c.v[1]) + "," + bm_floor(i.c.v[2]) + ")")), i.o = PropertyFactory.getProp(this, t.o, 0, .01, e), "st" == t.ty) {
                if (n.lc = this.lcEnum[t.lc] || "round", n.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (n.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, e), i.w.k || (n.wi = i.w.v), t.d) {
                    var r = PropertyFactory.getDashProp(this, t.d, "canvas", e);
                    i.d = r, i.d.k || (n.da = i.d.dasharray, n.do = i.d.dashoffset)
                }
            } else n.r = 2 === t.r ? "evenodd" : "nonzero";
            return this.stylesList.push(n), i.style = n, i
        }, CVShapeElement.prototype.createGroupElement = function(t) {
            return {
                it: [],
                prevViewData: []
            }
        }, CVShapeElement.prototype.createTransformElement = function(t, e) {
            return {
                transform: {
                    mat: new Matrix,
                    opacity: 1,
                    matMdf: !1,
                    opMdf: !1,
                    op: PropertyFactory.getProp(this, t.o, 0, .01, e),
                    mProps: PropertyFactory.getProp(this, t, 2, null, e)
                },
                elements: []
            }
        }, CVShapeElement.prototype.createShapeElement = function(t, e) {
            var n = {
                    nodes: [],
                    trNodes: [],
                    tr: [0, 0, 0, 0, 0, 0]
                },
                i = 4;
            "rc" == t.ty ? i = 5 : "el" == t.ty ? i = 6 : "sr" == t.ty && (i = 7), n.sh = ShapePropertyFactory.getShapeProp(this, t, i, e), this.shapes.push(n.sh), this.addShapeToModifiers(n), jLen = this.stylesList.length;
            var r = !1,
                a = !1;
            for (j = 0; j < jLen; j += 1) this.stylesList[j].closed || (this.stylesList[j].elements.push(n), "st" === this.stylesList[j].type ? r = !0 : a = !0);
            return n.st = r, n.fl = a, n
        }, CVShapeElement.prototype.reloadShapes = function() {
            this.firstFrame = !0;
            var t, e = this.itemsData.length;
            for (t = 0; e > t; t += 1) this.prevViewData[t] = this.itemsData[t];
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.dynamicProperties, !0);
            var t, e = this.dynamicProperties.length;
            for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers()
        }, CVShapeElement.prototype.searchShapes = function(t, e, n, i, r) {
            var a, s, o, l, h = t.length - 1,
                p = [],
                c = [];
            for (a = h; a >= 0; a -= 1) {
                if (l = this.searchProcessedElement(t[a]), l ? e[a] = n[l - 1] : t[a]._render = r, "fl" == t[a].ty || "st" == t[a].ty) l ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], i), p.push(e[a].style);
                else if ("gr" == t[a].ty) {
                    if (l)
                        for (o = e[a].it.length, s = 0; o > s; s += 1) e[a].prevViewData[s] = e[a].it[s];
                    else e[a] = this.createGroupElement(t[a]);
                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, r)
                } else if ("tr" == t[a].ty) l || (e[a] = this.createTransformElement(t[a], i));
                else if ("sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty) l || (e[a] = this.createShapeElement(t[a], i));
                else if ("tm" == t[a].ty || "rd" == t[a].ty) {
                    if (l) u = e[a], u.closed = !1;
                    else {
                        var u = ShapeModifiers.getModifier(t[a].ty);
                        u.init(this, t[a], i), e[a] = u, this.shapeModifiers.push(u)
                    }
                    c.push(u)
                } else "rp" == t[a].ty && (l ? (u = e[a], u.closed = !0) : (u = ShapeModifiers.getModifier(t[a].ty), e[a] = u, u.init(this, t, a, e, i), this.shapeModifiers.push(u), r = !1), c.push(u));
                this.addProcessedElement(t[a], a + 1)
            }
            for (h = p.length, a = 0; h > a; a += 1) p[a].closed = !0;
            for (h = c.length, a = 0; h > a; a += 1) c[a].closed = !0
        }, CVShapeElement.prototype.addShapeToModifiers = IShapeElement.prototype.addShapeToModifiers, CVShapeElement.prototype.renderModifiers = IShapeElement.prototype.renderModifiers, CVShapeElement.prototype.lcEnum = IShapeElement.prototype.lcEnum, CVShapeElement.prototype.ljEnum = IShapeElement.prototype.ljEnum, CVShapeElement.prototype.searchProcessedElement = IShapeElement.prototype.searchProcessedElement, CVShapeElement.prototype.addProcessedElement = IShapeElement.prototype.addProcessedElement, CVShapeElement.prototype.renderFrame = function(t) {
            !1 !== this._parent.renderFrame.call(this, t) && (this.transformHelper.mat.reset(), this.transformHelper.opacity = this.finalTransform.opacity, this.transformHelper.matMdf = !1, this.transformHelper.opMdf = this.finalTransform.opMdf, this.renderModifiers(), this.renderShape(this.transformHelper, null, null, !0), this.data.hasMask && this.globalData.renderer.restore(!0))
        }, CVShapeElement.prototype.renderShape = function(t, e, n, i) {
            var r, a;
            if (!e)
                for (e = this.shapesData, a = this.stylesList.length, r = 0; a > r; r += 1) this.stylesList[r].d = "", this.stylesList[r].mdf = !1;
            n || (n = this.itemsData), a = e.length - 1;
            var s, o;
            for (s = t, r = a; r >= 0; r -= 1)
                if ("tr" == e[r].ty) {
                    s = n[r].transform;
                    var l = n[r].transform.mProps.v.props;
                    if (s.matMdf = s.mProps.mdf, s.opMdf = s.op.mdf, o = s.mat, o.cloneFromProps(l), t) {
                        var h = t.mat.props;
                        s.opacity = t.opacity, s.opacity *= n[r].transform.op.v, s.matMdf = !!t.matMdf || s.matMdf, s.opMdf = !!t.opMdf || s.opMdf, o.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15])
                    } else s.opacity = s.op.o
                } else "sh" == e[r].ty || "el" == e[r].ty || "rc" == e[r].ty || "sr" == e[r].ty ? this.renderPath(e[r], n[r], s) : "fl" == e[r].ty ? this.renderFill(e[r], n[r], s) : "st" == e[r].ty ? this.renderStroke(e[r], n[r], s) : "gr" == e[r].ty ? this.renderShape(s, e[r].it, n[r].it) : e[r].ty;
            if (i) {
                a = this.stylesList.length;
                var p, c, u, m, d, f, y, v = this.globalData.renderer,
                    g = this.globalData.canvasContext;
                for (v.save(), v.ctxTransform(this.finalTransform.mat.props), r = 0; a > r; r += 1)
                    if (("st" !== (y = this.stylesList[r].type) || 0 !== this.stylesList[r].wi) && this.stylesList[r].data._render) {
                        for (v.save(), d = this.stylesList[r].elements, "st" === y ? (g.strokeStyle = this.stylesList[r].co, g.lineWidth = this.stylesList[r].wi, g.lineCap = this.stylesList[r].lc, g.lineJoin = this.stylesList[r].lj, g.miterLimit = this.stylesList[r].ml || 0) : g.fillStyle = this.stylesList[r].co, v.ctxOpacity(this.stylesList[r].coOp), "st" !== y && g.beginPath(), c = d.length, p = 0; c > p; p += 1) {
                            for ("st" === y && (g.beginPath(), this.stylesList[r].da ? (g.setLineDash(this.stylesList[r].da), g.lineDashOffset = this.stylesList[r].do, this.globalData.isDashed = !0) : this.globalData.isDashed && (g.setLineDash(this.dashResetter), this.globalData.isDashed = !1)), f = d[p].trNodes, m = f.length, u = 0; m > u; u += 1) "m" == f[u].t ? g.moveTo(f[u].p[0], f[u].p[1]) : "c" == f[u].t ? g.bezierCurveTo(f[u].p1[0], f[u].p1[1], f[u].p2[0], f[u].p2[1], f[u].p3[0], f[u].p3[1]) : g.closePath();
                            "st" === y && g.stroke()
                        }
                        "st" !== y && g.fill(this.stylesList[r].r), v.restore()
                    }
                v.restore(), this.firstFrame && (this.firstFrame = !1)
            }
        }, CVShapeElement.prototype.renderPath = function(t, e, n) {
            var i, r, a, s;
            if (n.matMdf || e.sh.mdf || this.firstFrame) {
                var o = e.sh.paths;
                s = o._length;
                var l = e.trNodes;
                for (l.length = 0, a = 0; s > a; a += 1) {
                    var h = o.shapes[a];
                    if (h && h.v) {
                        for (i = h._length, r = 1; i > r; r += 1) 1 == r && l.push({
                            t: "m",
                            p: n.mat.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), l.push({
                            t: "c",
                            p1: n.mat.applyToPointArray(h.o[r - 1][0], h.o[r - 1][1], 0),
                            p2: n.mat.applyToPointArray(h.i[r][0], h.i[r][1], 0),
                            p3: n.mat.applyToPointArray(h.v[r][0], h.v[r][1], 0)
                        });
                        1 == i && l.push({
                            t: "m",
                            p: n.mat.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), h.c && i && (l.push({
                            t: "c",
                            p1: n.mat.applyToPointArray(h.o[r - 1][0], h.o[r - 1][1], 0),
                            p2: n.mat.applyToPointArray(h.i[0][0], h.i[0][1], 0),
                            p3: n.mat.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), l.push({
                            t: "z"
                        })), e.lStr = l
                    }
                }
                if (e.st)
                    for (r = 0; 16 > r; r += 1) e.tr[r] = n.mat.props[r];
                e.trNodes = l
            }
        }, CVShapeElement.prototype.renderFill = function(t, e, n) {
            var i = e.style;
            (e.c.mdf || this.firstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || n.opMdf || this.firstFrame) && (i.coOp = e.o.v * n.opacity)
        }, CVShapeElement.prototype.renderStroke = function(t, e, n) {
            var i = e.style,
                r = e.d;
            r && (r.mdf || this.firstFrame) && (i.da = r.dasharray, i.do = r.dashoffset), (e.c.mdf || this.firstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || n.opMdf || this.firstFrame) && (i.coOp = e.o.v * n.opacity), (e.w.mdf || this.firstFrame) && (i.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemData.length = 0, this._parent.destroy.call(this._parent)
        }, createElement(CVBaseElement, CVSolidElement), CVSolidElement.prototype.renderFrame = function(t) {
            if (!1 !== this._parent.renderFrame.call(this, t)) {
                var e = this.canvasContext;
                this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.fillStyle = this.data.sc, e.fillRect(0, 0, this.data.sw, this.data.sh), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
            }
        }, createElement(CVBaseElement, CVTextElement), CVTextElement.prototype.init = ITextElement.prototype.init, CVTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, CVTextElement.prototype.getMult = ITextElement.prototype.getMult, CVTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame, CVTextElement.prototype.tHelper = document.createElement("canvas").getContext("2d"), CVTextElement.prototype.createElements = function() {
            this._parent.createElements.call(this)
        }, CVTextElement.prototype.buildNewText = function() {
            var t = this.currentTextDocumentData;
            this.renderedLetters = Array.apply(null, {
                length: this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0
            });
            var e = !1;
            t.fc ? (e = !0, this.values.fill = "rgb(" + Math.round(255 * t.fc[0]) + "," + Math.round(255 * t.fc[1]) + "," + Math.round(255 * t.fc[2]) + ")") : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var n = !1;
            t.sc && (n = !0, this.values.stroke = "rgb(" + Math.round(255 * t.sc[0]) + "," + Math.round(255 * t.sc[1]) + "," + Math.round(255 * t.sc[2]) + ")", this.values.sWidth = t.sw);
            var i, r, a = this.globalData.fontManager.getFontByName(t.f),
                s = t.l,
                o = this.mHelper;
            this.stroke = n, this.values.fValue = t.s + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, r = t.t.length, this.tHelper.font = this.values.fValue;
            var l, h, p, c, u, m, d, f, y, v, g = this.data.singleShape;
            if (g) var b = 0,
                x = 0,
                k = t.lineWidths,
                _ = t.boxWidth,
                E = !0;
            var w = 0;
            for (i = 0; r > i; i += 1) {
                l = this.globalData.fontManager.getCharData(t.t.charAt(i), a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                var h;
                if (h = l ? l.data : null, o.reset(), g && s[i].n && (b = 0, x += t.yOffset, x += E ? 1 : 0, E = !1), h && h.shapes) {
                    if (u = h.shapes[0].it, d = u.length, o.scale(t.s / 100, t.s / 100), g) {
                        switch (t.ps && o.translate(t.ps[0], t.ps[1] + t.ascent, 0), o.translate(0, -t.ls, 0), t.j) {
                            case 1:
                                o.translate(t.justifyOffset + (_ - k[s[i].line]), 0, 0);
                                break;
                            case 2:
                                o.translate(t.justifyOffset + (_ - k[s[i].line]) / 2, 0, 0)
                        }
                        o.translate(b, x, 0)
                    }
                    for (y = new Array(d), m = 0; d > m; m += 1) {
                        for (c = u[m].ks.k.i.length, f = u[m].ks.k, v = [], p = 1; c > p; p += 1) 1 == p && v.push(o.applyToX(f.v[0][0], f.v[0][1], 0), o.applyToY(f.v[0][0], f.v[0][1], 0)), v.push(o.applyToX(f.o[p - 1][0], f.o[p - 1][1], 0), o.applyToY(f.o[p - 1][0], f.o[p - 1][1], 0), o.applyToX(f.i[p][0], f.i[p][1], 0), o.applyToY(f.i[p][0], f.i[p][1], 0), o.applyToX(f.v[p][0], f.v[p][1], 0), o.applyToY(f.v[p][0], f.v[p][1], 0));
                        v.push(o.applyToX(f.o[p - 1][0], f.o[p - 1][1], 0), o.applyToY(f.o[p - 1][0], f.o[p - 1][1], 0), o.applyToX(f.i[0][0], f.i[0][1], 0), o.applyToY(f.i[0][0], f.i[0][1], 0), o.applyToX(f.v[0][0], f.v[0][1], 0), o.applyToY(f.v[0][0], f.v[0][1], 0)), y[m] = v
                    }
                } else y = [];
                g && (b += s[i].l), this.textSpans[w] ? this.textSpans[w].elem = y : this.textSpans[w] = {
                    elem: y
                }, w += 1
            }
        }, CVTextElement.prototype.renderFrame = function(t) {
            if (!1 !== this._parent.renderFrame.call(this, t)) {
                var e = this.canvasContext,
                    n = this.finalTransform.mat.props;
                this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(n), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.font = this.values.fValue, e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4, this.data.singleShape || this.getMeasures();
                var i, r, a, s, o, l, h = this.renderedLetters,
                    p = this.currentTextDocumentData.l;
                r = p.length;
                var c, u, m, d = null,
                    f = null,
                    y = null;
                for (i = 0; r > i; i += 1)
                    if (!p[i].n) {
                        if (c = h[i], c && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(c.props), this.globalData.renderer.ctxOpacity(c.o)), this.fill) {
                            for (c && c.fc ? d !== c.fc && (d = c.fc, e.fillStyle = c.fc) : d !== this.values.fill && (d = this.values.fill, e.fillStyle = this.values.fill), u = this.textSpans[i].elem, s = u.length, this.globalData.canvasContext.beginPath(), a = 0; s > a; a += 1)
                                for (m = u[a], l = m.length, this.globalData.canvasContext.moveTo(m[0], m[1]), o = 2; l > o; o += 6) this.globalData.canvasContext.bezierCurveTo(m[o], m[o + 1], m[o + 2], m[o + 3], m[o + 4], m[o + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                        }
                        if (this.stroke) {
                            for (c && c.sw ? y !== c.sw && (y = c.sw, e.lineWidth = c.sw) : y !== this.values.sWidth && (y = this.values.sWidth, e.lineWidth = this.values.sWidth), c && c.sc ? f !== c.sc && (f = c.sc, e.strokeStyle = c.sc) : f !== this.values.stroke && (f = this.values.stroke, e.strokeStyle = this.values.stroke), u = this.textSpans[i].elem, s = u.length, this.globalData.canvasContext.beginPath(), a = 0; s > a; a += 1)
                                for (m = u[a], l = m.length, this.globalData.canvasContext.moveTo(m[0], m[1]), o = 2; l > o; o += 6) this.globalData.canvasContext.bezierCurveTo(m[o], m[o + 1], m[o + 2], m[o + 3], m[o + 4], m[o + 5]);
                            this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                        }
                        c && this.globalData.renderer.restore()
                    }
                this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
            }
        }, createElement(BaseElement, HBaseElement), HBaseElement.prototype.checkBlendMode = function() {}, HBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, HBaseElement.prototype.getBaseElement = function() {
            return this.baseElement
        }, HBaseElement.prototype.createElements = function() {
            this.data.hasMask ? (this.layerElement = document.createElementNS(svgNS, "svg"), styleDiv(this.layerElement), this.baseElement = this.layerElement, this.maskedElement = this.layerElement) : this.layerElement = this.parentContainer, this.transformedElement = this.layerElement, !this.data.ln || 4 !== this.data.ty && 0 !== this.data.ty || (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(svgNS, "g"), this.baseElement = this.layerElement), this.layerElement.setAttribute("id", this.data.ln)), this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null), this.checkParenting()
        }, HBaseElement.prototype.renderFrame = function(t) {
            if (3 === this.data.ty) return !1;
            if (this.currentFrameNum === this.lastNum || !this.isVisible) return this.isVisible;
            this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v, this.firstFrame && (this.finalTransform.opMdf = !0, this.finalTransform.matMdf = !0);
            var e, n = this.finalTransform.mat;
            if (this.hierarchy) {
                var i, r = this.hierarchy.length;
                for (e = this.finalTransform.mProp.v.props, n.cloneFromProps(e), i = 0; r > i; i += 1) this.finalTransform.matMdf = !!this.hierarchy[i].finalTransform.mProp.mdf || this.finalTransform.matMdf, e = this.hierarchy[i].finalTransform.mProp.v.props, n.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
            } else this.isVisible && this.finalTransform.matMdf && (t ? (e = this.finalTransform.mProp.v.props, n.cloneFromProps(e)) : n.cloneFromProps(this.finalTransform.mProp.v.props));
            return this.data.hasMask && this.maskManager.renderFrame(n), t && (e = t.mat.props, n.cloneFromProps(e), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = !!t.opMdf || this.finalTransform.opMdf, this.finalTransform.matMdf = !!t.matMdf || this.finalTransform.matMdf), this.finalTransform.matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = n.toCSS(), this.finalMat = n), this.finalTransform.opMdf && (this.transformedElement.style.opacity = this.finalTransform.opacity), this.isVisible
        }, HBaseElement.prototype.destroy = function() {
            this.layerElement = null, this.transformedElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
        }, HBaseElement.prototype.getDomElement = function() {
            return this.layerElement
        }, HBaseElement.prototype.addMasks = function(t) {
            this.maskManager = new MaskElement(t, this, this.globalData)
        }, HBaseElement.prototype.hide = function() {}, HBaseElement.prototype.setMatte = function() {}, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, createElement(HBaseElement, HSolidElement), HSolidElement.prototype.createElements = function() {
            var t = document.createElement("div");
            styleDiv(t);
            var e = document.createElementNS(svgNS, "svg");
            styleDiv(e), e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), t.appendChild(e), this.layerElement = t, this.transformedElement = t, this.baseElement = t, this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), 0 !== this.data.bm && this.setBlendMode();
            var n = document.createElementNS(svgNS, "rect");
            n.setAttribute("width", this.data.sw), n.setAttribute("height", this.data.sh), n.setAttribute("fill", this.data.sc), e.appendChild(n), this.data.hasMask && (this.maskedElement = n), this.checkParenting()
        }, HSolidElement.prototype.hide = SVGBaseElement.prototype.hide, HSolidElement.prototype.show = SVGBaseElement.prototype.show, HSolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, HSolidElement.prototype.destroy = IImageElement.prototype.destroy, createElement(HBaseElement, HCompElement), HCompElement.prototype.createElements = function() {
            var t = document.createElement("div");
            if (styleDiv(t), this.data.ln && t.setAttribute("id", this.data.ln), t.style.clip = "rect(0px, " + this.data.w + "px, " + this.data.h + "px, 0px)", this.data.hasMask) {
                var e = document.createElementNS(svgNS, "svg");
                styleDiv(e), e.setAttribute("width", this.data.w), e.setAttribute("height", this.data.h);
                var n = document.createElementNS(svgNS, "g");
                e.appendChild(n), t.appendChild(e), this.maskedElement = n, this.baseElement = t, this.layerElement = n, this.transformedElement = t
            } else this.layerElement = t, this.baseElement = this.layerElement, this.transformedElement = t;
            this.checkParenting()
        }, HCompElement.prototype.hide = ICompElement.prototype.hide, HCompElement.prototype.prepareFrame = ICompElement.prototype.prepareFrame, HCompElement.prototype.setElements = ICompElement.prototype.setElements, HCompElement.prototype.getElements = ICompElement.prototype.getElements, HCompElement.prototype.destroy = ICompElement.prototype.destroy, HCompElement.prototype.renderFrame = function(t) {
            var e, n = this._parent.renderFrame.call(this, t),
                i = this.layers.length;
            if (!1 === n) return void this.hide();
            for (this.hidden = !1, e = 0; i > e; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            this.firstFrame && (this.firstFrame = !1)
        }, HCompElement.prototype.checkLayers = BaseRenderer.prototype.checkLayers, HCompElement.prototype.buildItem = HybridRenderer.prototype.buildItem, HCompElement.prototype.checkPendingElements = HybridRenderer.prototype.checkPendingElements, HCompElement.prototype.addPendingElement = HybridRenderer.prototype.addPendingElement, HCompElement.prototype.buildAllItems = BaseRenderer.prototype.buildAllItems, HCompElement.prototype.createItem = HybridRenderer.prototype.createItem, HCompElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, HCompElement.prototype.createImage = HybridRenderer.prototype.createImage, HCompElement.prototype.createComp = HybridRenderer.prototype.createComp, HCompElement.prototype.createSolid = HybridRenderer.prototype.createSolid, HCompElement.prototype.createShape = HybridRenderer.prototype.createShape, HCompElement.prototype.createText = HybridRenderer.prototype.createText, HCompElement.prototype.createBase = HybridRenderer.prototype.createBase, HCompElement.prototype.appendElementInPos = HybridRenderer.prototype.appendElementInPos, createElement(HBaseElement, HShapeElement);
    var parent = HShapeElement.prototype._parent;
    extendPrototype(IShapeElement, HShapeElement), HShapeElement.prototype._parent = parent, HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderFrame, HShapeElement.prototype.createElements = function() {
        var t = document.createElement("div");
        styleDiv(t);
        var e = document.createElementNS(svgNS, "svg");
        styleDiv(e);
        var n = this.comp.data ? this.comp.data : this.globalData.compSize;
        if (e.setAttribute("width", n.w), e.setAttribute("height", n.h), this.data.hasMask) {
            var i = document.createElementNS(svgNS, "g");
            t.appendChild(e), e.appendChild(i), this.maskedElement = i, this.layerElement = i, this.shapesContainer = i
        } else t.appendChild(e), this.layerElement = e, this.shapesContainer = document.createElementNS(svgNS, "g"), this.layerElement.appendChild(this.shapesContainer);
        this.data.hd || (this.baseElement = t), this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [], !0), this.buildExpressionInterface(), this.layerElement = t, this.transformedElement = t, this.shapeCont = e, 0 !== this.data.bm && this.setBlendMode(), this.checkParenting()
    }, HShapeElement.prototype.renderFrame = function(t) {
        var e = this.firstFrame;
        if (this._renderShapeFrame(), this.isVisible && (this.elemMdf || e)) {
            var n = this.shapeCont.getBBox(),
                i = !1;
            this.currentBBox.w !== n.width && (this.currentBBox.w = n.width, this.shapeCont.setAttribute("width", n.width), i = !0), this.currentBBox.h !== n.height && (this.currentBBox.h = n.height, this.shapeCont.setAttribute("height", n.height), i = !0), (i || this.currentBBox.x !== n.x || this.currentBBox.y !== n.y) && (this.currentBBox.w = n.width, this.currentBBox.h = n.height, this.currentBBox.x = n.x, this.currentBBox.y = n.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
        }
    }, createElement(HBaseElement, HTextElement), HTextElement.prototype.init = ITextElement.prototype.init, HTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, HTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape, HTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame, HTextElement.prototype.buildShapeString = ITextElement.prototype.buildShapeString, HTextElement.prototype.createElements = function() {
        this.isMasked = this.checkMasks();
        var t = document.createElement("div");
        if (styleDiv(t), this.layerElement = t, this.transformedElement = t, this.isMasked) {
            this.renderType = "svg";
            var e = document.createElementNS(svgNS, "svg");
            styleDiv(e), this.cont = e, this.compW = this.comp.data.w, this.compH = this.comp.data.h, e.setAttribute("width", this.compW), e.setAttribute("height", this.compH);
            var n = document.createElementNS(svgNS, "g");
            e.appendChild(n), t.appendChild(e), this.maskedElement = n, this.innerElem = n
        } else this.renderType = "html", this.innerElem = t;
        this.baseElement = t, this.checkParenting()
    }, HTextElement.prototype.buildNewText = function() {
        var t = this.currentTextDocumentData;
        this.renderedLetters = Array.apply(null, {
            length: this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0
        }), this.innerElem.style.color = this.innerElem.style.fill = t.fc ? "rgb(" + Math.round(255 * t.fc[0]) + "," + Math.round(255 * t.fc[1]) + "," + Math.round(255 * t.fc[2]) + ")" : "rgba(0,0,0,0)", t.sc && (this.innerElem.style.stroke = "rgb(" + Math.round(255 * t.sc[0]) + "," + Math.round(255 * t.sc[1]) + "," + Math.round(255 * t.sc[2]) + ")", this.innerElem.style.strokeWidth = t.sw + "px");
        var e = this.globalData.fontManager.getFontByName(t.f);
        if (!this.globalData.fontManager.chars)
            if (this.innerElem.style.fontSize = t.s + "px", this.innerElem.style.lineHeight = t.s + "px", e.fClass) this.innerElem.className = e.fClass;
            else {
                this.innerElem.style.fontFamily = e.fFamily;
                var n = t.fWeight,
                    i = t.fStyle;
                this.innerElem.style.fontStyle = i, this.innerElem.style.fontWeight = n
            }
        var r, a, s = t.l;
        a = s.length;
        var o, l, h, p, c = this.mHelper,
            u = "",
            m = 0;
        for (r = 0; a > r; r += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? o = this.textPaths[m] : (o = document.createElementNS(svgNS, "path"), o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? (l = this.textSpans[m], h = l.children[0]) : (l = document.createElement("div"), h = document.createElementNS(svgNS, "svg"), h.appendChild(o), styleDiv(l)))) : this.isMasked ? o = this.textPaths[m] ? this.textPaths[m] : document.createElementNS(svgNS, "text") : this.textSpans[m] ? (l = this.textSpans[m], o = this.textPaths[m]) : (l = document.createElement("span"), styleDiv(l), o = document.createElement("span"), styleDiv(o), l.appendChild(o)), this.globalData.fontManager.chars) {
                var d, f = this.globalData.fontManager.getCharData(t.t.charAt(r), e.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                if (d = f ? f.data : null, c.reset(), d && d.shapes && (p = d.shapes[0].it, c.scale(t.s / 100, t.s / 100), u = this.createPathShape(c, p), o.setAttribute("d", u)), this.isMasked) this.innerElem.appendChild(o);
                else if (this.innerElem.appendChild(l), d && d.shapes) {
                    document.body.appendChild(h);
                    var y = h.getBBox();
                    h.setAttribute("width", y.width), h.setAttribute("height", y.height), h.setAttribute("viewBox", y.x + " " + y.y + " " + y.width + " " + y.height), h.style.transform = h.style.webkitTransform = "translate(" + y.x + "px," + y.y + "px)", s[r].yOffset = y.y, l.appendChild(h)
                } else h.setAttribute("width", 1), h.setAttribute("height", 1)
            } else o.textContent = s[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(l), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.s / 1.2 + "px,0)");
            this.textSpans[m] = this.isMasked ? o : l, this.textSpans[m].style.display = "block", this.textPaths[m] = o, m += 1
        }
        for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
    }, HTextElement.prototype.hide = SVGTextElement.prototype.hide, HTextElement.prototype.renderFrame = function(t) {
        if (!1 === this._parent.renderFrame.call(this, t)) return void this.hide();
        if (this.hidden && (this.hidden = !1, this.innerElem.style.display = "block", this.layerElement.style.display = "block"), this.data.singleShape) {
            if (!this.firstFrame && !this.lettersChangedFlag) return;
            this.isMasked && this.finalTransform.matMdf && (this.cont.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
        }
        if (this.getMeasures(), this.lettersChangedFlag) {
            var e, n, i = this.renderedLetters,
                r = this.currentTextDocumentData.l;
            n = r.length;
            var a;
            for (e = 0; n > e; e += 1) r[e].n || (a = i[e], this.isMasked ? this.textSpans[e].setAttribute("transform", a.m) : this.textSpans[e].style.transform = this.textSpans[e].style.webkitTransform = a.m, this.textSpans[e].style.opacity = a.o, a.sw && this.textPaths[e].setAttribute("stroke-width", a.sw), a.sc && this.textPaths[e].setAttribute("stroke", a.sc), a.fc && (this.textPaths[e].setAttribute("fill", a.fc), this.textPaths[e].style.color = a.fc));
            if (this.isVisible && (this.elemMdf || this.firstFrame) && this.innerElem.getBBox) {
                var s = this.innerElem.getBBox();
                this.currentBBox.w !== s.width && (this.currentBBox.w = s.width, this.cont.setAttribute("width", s.width)), this.currentBBox.h !== s.height && (this.currentBBox.h = s.height, this.cont.setAttribute("height", s.height)), (this.currentBBox.w !== s.width || this.currentBBox.h !== s.height || this.currentBBox.x !== s.x || this.currentBBox.y !== s.y) && (this.currentBBox.w = s.width, this.currentBBox.h = s.height, this.currentBBox.x = s.x, this.currentBBox.y = s.y, this.cont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
            }
            this.firstFrame && (this.firstFrame = !1)
        }
    }, HTextElement.prototype.destroy = SVGTextElement.prototype.destroy, createElement(HBaseElement, HImageElement), HImageElement.prototype.createElements = function() {
        var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
        if (this.data.hasMask) {
            var n = document.createElement("div");
            styleDiv(n);
            var i = document.createElementNS(svgNS, "svg");
            styleDiv(i), i.setAttribute("width", this.assetData.w), i.setAttribute("height", this.assetData.h), n.appendChild(i), this.imageElem = document.createElementNS(svgNS, "image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), i.appendChild(this.imageElem), this.layerElement = n, this.transformedElement = n, this.baseElement = n, this.innerElem = n, this.maskedElement = this.imageElem
        } else styleDiv(e), this.layerElement = e, this.baseElement = e, this.innerElem = e, this.transformedElement = e;
        e.src = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.checkParenting()
    }, HImageElement.prototype.hide = HSolidElement.prototype.hide, HImageElement.prototype.renderFrame = HSolidElement.prototype.renderFrame, HImageElement.prototype.destroy = HSolidElement.prototype.destroy, createElement(HBaseElement, HCameraElement), HCameraElement.prototype.setup = function() {
        var t, e, n = this.comp.threeDElements.length;
        for (t = 0; n > t; t += 1) e = this.comp.threeDElements[t], e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"
    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
        var t, e, n = this.firstFrame;
        if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; e > t; t += 1) n = !!this.hierarchy[t].finalTransform.mProp.mdf || n;
        if (n || this.p && this.p.mdf || this.px && (this.px.mdf || this.py.mdf || this.pz.mdf) || this.rx.mdf || this.ry.mdf || this.rz.mdf || this.or.mdf || this.a && this.a.mdf) {
            if (this.mat.reset(), this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                var i = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]],
                    r = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                    a = [i[0] / r, i[1] / r, i[2] / r],
                    s = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                    o = Math.atan2(a[1], s),
                    l = Math.atan2(a[0], -a[2]);
                this.mat.rotateY(l).rotateX(-o)
            }
            if (this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v), this.hierarchy) {
                var h;
                for (e = this.hierarchy.length, t = 0; e > t; t += 1) h = this.hierarchy[t].finalTransform.mProp.iv.props, this.mat.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], -h[12], -h[13], h[14], h[15])
            }
            e = this.comp.threeDElements.length;
            var p;
            for (t = 0; e > t; t += 1) p = this.comp.threeDElements[t], p.container.style.transform = p.container.style.webkitTransform = this.mat.toCSS()
        }
        this.firstFrame = !1
    }, HCameraElement.prototype.destroy = function() {};
    var Expressions = function() {
        function t(t) {
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer)
        }
        var e = {};
        return e.initExpressions = t, e
    }();
    expressionsPlugin = Expressions,
        function() {
            function t() {
                return this.pv
            }

            function e(t, e) {
                t *= this.elem.globalData.frameRate;
                var n, i, r = 0,
                    a = this.keyframes.length - 1,
                    s = 1,
                    o = !0;
                e = void 0 === e ? this.offsetTime : 0;
                for (var l = "object" == typeof this.pv ? [this.pv.length] : 0; o;) {
                    if (n = this.keyframes[r], i = this.keyframes[r + 1], r == a - 1 && t >= i.t - e) {
                        n.h && (n = i);
                        break
                    }
                    if (i.t - e > t) break;
                    a - 1 > r ? r += s : o = !1
                }
                var h, p, c, u, m, d = 0;
                if (n.to) {
                    n.bezierData || bez.buildBezierData(n);
                    var f = n.bezierData;
                    if (t >= i.t - e || t < n.t - e) {
                        var y = t >= i.t - e ? f.points.length - 1 : 0;
                        for (p = f.points[y].point.length, h = 0; p > h; h += 1) l[h] = f.points[y].point[h]
                    } else {
                        n.__fnct ? m = n.__fnct : (m = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, n.__fnct = m), c = m((t - (n.t - e)) / (i.t - e - (n.t - e)));
                        var v, g = f.segmentLength * c,
                            b = 0;
                        for (s = 1, o = !0, u = f.points.length; o;) {
                            if (b += f.points[d].partialLength * s, 0 === g || 0 === c || d == f.points.length - 1) {
                                for (p = f.points[d].point.length, h = 0; p > h; h += 1) l[h] = f.points[d].point[h];
                                break
                            }
                            if (g >= b && g < b + f.points[d + 1].partialLength) {
                                for (v = (g - b) / f.points[d + 1].partialLength, p = f.points[d].point.length, h = 0; p > h; h += 1) l[h] = f.points[d].point[h] + (f.points[d + 1].point[h] - f.points[d].point[h]) * v;
                                break
                            }
                            u - 1 > d && 1 == s || d > 0 && -1 == s ? d += s : o = !1
                        }
                    }
                } else {
                    var x, k, _, E, w, S = !1;
                    for (a = n.s.length, r = 0; a > r; r += 1) {
                        if (1 !== n.h && (n.o.x instanceof Array ? (S = !0, n.__fnct || (n.__fnct = []), n.__fnct[r] || (x = n.o.x[r] || n.o.x[0], k = n.o.y[r] || n.o.y[0], _ = n.i.x[r] || n.i.x[0], E = n.i.y[r] || n.i.y[0])) : (S = !1, n.__fnct || (x = n.o.x, k = n.o.y, _ = n.i.x, E = n.i.y)), S ? n.__fnct[r] ? m = n.__fnct[r] : (m = BezierFactory.getBezierEasing(x, k, _, E).get, n.__fnct[r] = m) : n.__fnct ? m = n.__fnct : (m = BezierFactory.getBezierEasing(x, k, _, E).get, n.__fnct = m), c = t >= i.t - e ? 1 : t < n.t - e ? 0 : m((t - (n.t - e)) / (i.t - e - (n.t - e)))), this.sh && 1 !== n.h) {
                            var P = n.s[r],
                                C = n.e[r]; - 180 > P - C ? P += 360 : P - C > 180 && (P -= 360), w = P + (C - P) * c
                        } else w = 1 === n.h ? n.s[r] : n.s[r] + (n.e[r] - n.s[r]) * c;
                        1 === a ? l = w : l[r] = w
                    }
                }
                return l
            }

            function n(t) {
                if (void 0 !== this.vel) return this.vel;
                var e, n = -.01,
                    i = this.getValueAtTime(t, 0),
                    r = this.getValueAtTime(t + n, 0);
                if (i.length) {
                    e = Array.apply(null, {
                        length: i.length
                    });
                    var a;
                    for (a = 0; a < i.length; a += 1) e[a] = (r[a] - i[a]) / n
                } else e = (r - i) / n;
                return e
            }

            function i(t) {
                this.propertyGroup = t
            }

            function r(t, e, n) {
                e.x && (n.k = !0, n.x = !0, n.getValue && (n.getPreValue = n.getValue), n.getValue = ExpressionManager.initiateExpression.bind(n)(t, e, n))
            }

            function a(t) {
                console.log("time:", t)
            }

            function s(t) {}
            var o = function() {
                    function a(t, e) {
                        return this.textIndex = t + 1, this.textTotal = e, this.getValue(), this.v
                    }
                    return function(s, o) {
                        this.pv = 1, this.comp = s.comp, this.elem = s, this.mult = .01, this.type = "textSelector", this.textTotal = o.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], r.bind(this)(s, o, this), this.getMult = a, this.getVelocityAtTime = n, this.getValueAtTime = this.kf ? e.bind(this) : t.bind(this), this.setGroupProperty = i
                    }
                }(),
                l = PropertyFactory.getProp;
            PropertyFactory.getProp = function(o, h, p, c, u) {
                var m = l(o, h, p, c, u);
                m.getVelocityAtTime = n, m.getValueAtTime = 2 === p ? m.dynamicProperties.length ? a.bind(m) : s.bind(m) : m.kf ? e.bind(m) : t.bind(m), m.setGroupProperty = i;
                var d = m.k;
                return void 0 !== h.ix && Object.defineProperty(m, "propertyIndex", {
                    get: function() {
                        return h.ix
                    }
                }), r(o, h, m), !d && m.x && u.push(m), m
            };
            var h = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(n, a, s, o, l) {
                var p = h(n, a, s, o, l);
                p.setGroupProperty = i, p.getValueAtTime = p.kf ? e : t;
                var c = p.k;
                return void 0 !== a.ix && Object.defineProperty(p, "propertyIndex", {
                    get: function() {
                        return a.ix
                    }
                }), 3 === s ? r(n, a.pt, p) : 4 === s && r(n, a.ks, p), !c && p.x && o.push(p), p
            };
            var p = PropertyFactory.getTextSelectorProp;
            PropertyFactory.getTextSelectorProp = function(t, e, n) {
                return 1 === e.t ? new o(t, e, n) : p(t, e, n)
            }
        }();
    var ExpressionManager = function() {
            function duplicatePropertyValue(t, e) {
                if (e = e || 1, "number" == typeof t || t instanceof Number) return t * e;
                if (t.i) return JSON.parse(JSON.stringify(t));
                var n, i = Array.apply(null, {
                        length: t.length
                    }),
                    r = t.length;
                for (n = 0; r > n; n += 1) i[n] = t[n] * e;
                return i
            }

            function shapesEqual(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var n, i = t._length;
                for (n = 0; i > n; n += 1)
                    if (t.v[n][0] !== e.v[n][0] || t.v[n][1] !== e.v[n][1] || t.o[n][0] !== e.o[n][0] || t.o[n][1] !== e.o[n][1] || t.i[n][0] !== e.i[n][0] || t.i[n][1] !== e.i[n][1]) return !1;
                return !0
            }

            function $bm_neg(t) {
                var e = typeof t;
                if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                if (t.constructor === Array) {
                    var n, i = t.length,
                        r = [];
                    for (n = 0; i > n; n += 1) r[n] = -t[n];
                    return r
                }
            }

            function sum(t, e) {
                var n = typeof t,
                    i = typeof e;
                if ("string" === n || "string" === i) return t + e;
                if (("number" === n || "boolean" === n || "string" === n || t instanceof Number) && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return t + e;
                if (t.constructor === Array && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return t[0] = t[0] + e, t;
                if (("number" === n || "boolean" === n || "string" === n || t instanceof Number) && e.constructor === Array) return e[0] = t + e[0], e;
                if (t.constructor === Array && e.constructor === Array) {
                    for (var r = 0, a = t.length, s = e.length, o = []; a > r || s > r;) o[r] = ("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? t[r] + e[r] : void 0 == e[r] ? t[r] : t[r] || e[r], r += 1;
                    return o
                }
                return 0
            }

            function sub(t, e) {
                var n = typeof t,
                    i = typeof e;
                if (("number" === n || "boolean" === n || "string" === n || t instanceof Number) && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return "string" === n && (t = parseInt(t)), "string" === i && (e = parseInt(e)), t - e;
                if (t.constructor === Array && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return t[0] = t[0] - e, t;
                if (("number" === n || "boolean" === n || "string" === n || t instanceof Number) && e.constructor === Array) return e[0] = t - e[0], e;
                if (t.constructor === Array && e.constructor === Array) {
                    for (var r = 0, a = t.length, s = e.length, o = []; a > r || s > r;) o[r] = "number" == typeof t[r] || t[r] instanceof Number ? t[r] - e[r] : void 0 == e[r] ? t[r] : t[r] || e[r], r += 1;
                    return o
                }
                return 0
            }

            function mul(t, e) {
                var n, i = typeof t,
                    r = typeof e;
                if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return t * e;
                var a, s;
                if (t.constructor === Array && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) {
                    for (s = t.length, n = Array.apply(null, {
                            length: s
                        }), a = 0; s > a; a += 1) n[a] = t[a] * e;
                    return n
                }
                if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && e.constructor === Array) {
                    for (s = e.length, n = Array.apply(null, {
                            length: s
                        }), a = 0; s > a; a += 1) n[a] = t * e[a];
                    return n
                }
                return 0
            }

            function div(t, e) {
                var n, i = typeof t,
                    r = typeof e;
                if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return t / e;
                var a, s;
                if (t.constructor === Array && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) {
                    for (s = t.length, n = Array.apply(null, {
                            length: s
                        }), a = 0; s > a; a += 1) n[a] = t[a] / e;
                    return n
                }
                if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && e.constructor === Array) {
                    for (s = e.length, n = Array.apply(null, {
                            length: s
                        }), a = 0; s > a; a += 1) n[a] = t / e[a];
                    return n
                }
                return 0
            }

            function mod(t, e) {
                return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e
            }

            function clamp(t, e, n) {
                if (e > n) {
                    var i = n;
                    n = e, e = i
                }
                return Math.min(Math.max(t, e), n)
            }

            function radiansToDegrees(t) {
                return t / degToRads
            }

            function degreesToRadians(t) {
                return t * degToRads
            }

            function length(t, e) {
                if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                e || (e = helperLengthArray);
                var n, i = Math.min(t.length, e.length),
                    r = 0;
                for (n = 0; i > n; n += 1) r += Math.pow(e[n] - t[n], 2);
                return Math.sqrt(r)
            }

            function normalize(t) {
                return div(t, length(t))
            }

            function rgbToHsl(t) {
                var e, n, i = t[0],
                    r = t[1],
                    a = t[2],
                    s = Math.max(i, r, a),
                    o = Math.min(i, r, a),
                    l = (s + o) / 2;
                if (s == o) e = n = 0;
                else {
                    var h = s - o;
                    switch (n = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
                        case i:
                            e = (r - a) / h + (a > r ? 6 : 0);
                            break;
                        case r:
                            e = (a - i) / h + 2;
                            break;
                        case a:
                            e = (i - r) / h + 4
                    }
                    e /= 6
                }
                return [e, n, l, t[3]]
            }

            function hslToRgb(t) {
                function e(t, e, n) {
                    return 0 > n && (n += 1), n > 1 && (n -= 1), 1 / 6 > n ? t + 6 * (e - t) * n : .5 > n ? e : 2 / 3 > n ? t + (e - t) * (2 / 3 - n) * 6 : t
                }
                var n, i, r, a = t[0],
                    s = t[1],
                    o = t[2];
                if (0 == s) n = i = r = o;
                else {
                    var l = .5 > o ? o * (1 + s) : o + s - o * s,
                        h = 2 * o - l;
                    n = e(h, l, a + 1 / 3), i = e(h, l, a), r = e(h, l, a - 1 / 3)
                }
                return [n, i, r, t[3]]
            }

            function linear(t, e, n, i, r) {
                if (void 0 === i || void 0 === r) return linear(t, 0, 1, e, n);
                if (e >= t) return i;
                if (t >= n) return r;
                var a = n === e ? 0 : (t - e) / (n - e);
                if (!i.length) return i + (r - i) * a;
                var s, o = i.length,
                    l = Array.apply(null, {
                        length: o
                    });
                for (s = 0; o > s; s += 1) l[s] = i[s] + (r[s] - i[s]) * a;
                return l
            }

            function random(t, e) {
                if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                    var n, i = e.length;
                    t || (t = Array.apply(null, {
                        length: i
                    }));
                    var r = Array.apply(null, {
                            length: i
                        }),
                        a = BMMath.random();
                    for (n = 0; i > n; n += 1) r[n] = t[n] + a * (e[n] - t[n]);
                    return r
                }
                return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function initiateExpression(elem, data, property) {
                function lookAt(t, e) {
                    var n = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                        i = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads;
                    return [-Math.atan2(n[1], n[2]) / degToRads, i, 0]
                }

                function easeOut(t, e, n) {
                    return -(n - e) * t * (t - 2) + e
                }

                function nearestKey(t) {
                    var e, n, i, r = data.k.length;
                    if (data.k.length && "number" != typeof data.k[0])
                        if (n = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) n = 1, i = data.k[0].t;
                        else {
                            for (e = 0; r - 1 > e; e += 1) {
                                if (t === data.k[e].t) {
                                    n = e + 1, i = data.k[e].t;
                                    break
                                }
                                if (t > data.k[e].t && t < data.k[e + 1].t) {
                                    t - data.k[e].t > data.k[e + 1].t - t ? (n = e + 2, i = data.k[e + 1].t) : (n = e + 1, i = data.k[e].t);
                                    break
                                }
                            } - 1 === n && (n = e + 1, i = data.k[e].t)
                        } else n = 0, i = 0;
                    var a = {};
                    return a.index = n, a.time = i / elem.comp.globalData.frameRate, a
                }

                function key(t) {
                    var e, n, i;
                    if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                    t -= 1, e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate
                    };
                    var r;
                    for (r = t !== data.k.length - 1 || data.k[t].h ? data.k[t].s : data.k[t - 1].e, i = r.length, n = 0; i > n; n += 1) e[n] = r[n];
                    return e
                }

                function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate), t / e
                }

                function timeToFrames(t, e) {
                    return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                }

                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t)
                }

                function execute() {
                    if (_needsRandom && seedRandom(randSeed), this.frameExpressionId !== elem.globalData.frameId || "textSelector" === this.type) {
                        if (this.lock) return this.v = duplicatePropertyValue(this.pv, this.mult), !0;
                        "textSelector" === this.type && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer)), transform || (transform = elem.layerInterface("ADBE Transform Group"), anchorPoint = transform.anchorPoint), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !(!elem.hierarchy || !elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), this.lock = !0, this.getPreValue && this.getPreValue(), value = this.pv, time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), bindedFn(), this.frameExpressionId = elem.globalData.frameId;
                        var t, e;
                        if (this.mult)
                            if ("number" == typeof this.v || this.v instanceof Number || "string" == typeof this.v) this.v *= this.mult;
                            else if (1 === this.v.length) this.v = this.v[0] * this.mult;
                        else
                            for (e = this.v.length, value === this.v && (this.v = 2 === e ? [value[0], value[1]] : [value[0], value[1], value[2]]), t = 0; e > t; t += 1) this.v[t] *= this.mult;
                        if (1 === this.v.length && (this.v = this.v[0]), "number" == typeof this.v || this.v instanceof Number || "string" == typeof this.v) this.lastValue !== this.v && (this.lastValue = this.v, this.mdf = !0);
                        else if (this.v._length) shapesEqual(this.v, this.localShapeCollection.shapes[0]) || (this.mdf = !0, this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(shape_pool.clone(this.v)));
                        else
                            for (e = this.v.length, t = 0; e > t; t += 1) this.v[t] !== this.lastValue[t] && (this.lastValue[t] = this.v[t], this.mdf = !0);
                        this.lock = !1
                    }
                }
                var val = data.x,
                    needsVelocity = /velocity(?![\w\d])/.test(val),
                    _needsRandom = -1 !== val.indexOf("random"),
                    elemType = elem.data.ty,
                    transform, content, effect, thisComp = elem.comp,
                    thisProperty = property;
                elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                    outPoint = elem.data.op / elem.comp.globalData.frameRate,
                    width = elem.data.sw ? elem.data.sw : 0,
                    height = elem.data.sh ? elem.data.sh : 0,
                    toWorld, fromWorld, anchorPoint, thisLayer, thisComp, fn = new Function,
                    fn = eval("[function(){" + val + ";this.v = $bm_rt;}]")[0],
                    bindedFn = fn.bind(this),
                    numKeys = property.kf ? data.k.length : 0,
                    wiggle = function(t, e) {
                        var n, i, r = this.pv.length ? this.pv.length : 1,
                            a = Array.apply(null, {
                                len: r
                            });
                        for (i = 0; r > i; i += 1) a[i] = 0;
                        t = 5;
                        var s = Math.floor(time * t);
                        for (n = 0, i = 0; s > n;) {
                            for (i = 0; r > i; i += 1) a[i] += -e + 2 * e * BMMath.random();
                            n += 1
                        }
                        var o = time * t,
                            l = o - Math.floor(o),
                            h = Array.apply({
                                length: r
                            });
                        if (r > 1) {
                            for (i = 0; r > i; i += 1) h[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * l;
                            return h
                        }
                        return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l
                    }.bind(this),
                    loopIn = function(t, e, n) {
                        if (!this.k) return this.pv;
                        var i = time * elem.comp.globalData.frameRate,
                            r = this.keyframes,
                            a = r[0].t;
                        if (i >= a) return this.pv;
                        var s, o;
                        n ? (s = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - a), o = a + s) : ((!e || e > r.length - 1) && (e = r.length - 1), o = r[e].t, s = o - a);
                        var l, h, p;
                        if ("pingpong" === t) {
                            if (Math.floor((a - i) / s) % 2 == 0) return this.getValueAtTime(((a - i) % s + a) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                                    u = this.getValueAtTime(o / this.comp.globalData.frameRate, 0),
                                    m = this.getValueAtTime((s - (a - i) % s + a) / this.comp.globalData.frameRate, 0),
                                    d = Math.floor((a - i) / s) + 1;
                                if (this.pv.length) {
                                    for (p = new Array(c.length), h = p.length, l = 0; h > l; l += 1) p[l] = m[l] - (u[l] - c[l]) * d;
                                    return p
                                }
                                return m - (u - c) * d
                            }
                            if ("continue" === t) {
                                var f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                                    y = this.getValueAtTime((a + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (p = new Array(f.length), h = p.length, l = 0; h > l; l += 1) p[l] = f[l] + (f[l] - y[l]) * (a - i) / .001;
                                    return p
                                }
                                return f + (f - y) * (a - i) / .001
                            }
                        }
                        return this.getValueAtTime((s - (a - i) % s + a) / this.comp.globalData.frameRate, 0)
                    }.bind(this),
                    loopInDuration = function(t, e) {
                        return loopIn(t, e, !0)
                    }.bind(this),
                    loopOut = function(t, e, n) {
                        if (!this.k || !this.keyframes) return this.pv;
                        var i = time * elem.comp.globalData.frameRate,
                            r = this.keyframes,
                            a = r[r.length - 1].t;
                        if (a >= i) return this.pv;
                        var s, o;
                        n ? (s = e ? Math.abs(a - elem.comp.globalData.frameRate * e) : Math.max(0, a - this.elem.data.ip), o = a - s) : ((!e || e > r.length - 1) && (e = r.length - 1), o = r[r.length - 1 - e].t, s = a - o);
                        var l, h, p;
                        if ("pingpong" === t) {
                            if (Math.floor((i - o) / s) % 2 != 0) return this.getValueAtTime((s - (i - o) % s + o) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(o / this.comp.globalData.frameRate, 0),
                                    u = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                                    m = this.getValueAtTime(((i - o) % s + o) / this.comp.globalData.frameRate, 0),
                                    d = Math.floor((i - o) / s);
                                if (this.pv.length) {
                                    for (p = new Array(c.length), h = p.length, l = 0; h > l; l += 1) p[l] = (u[l] - c[l]) * d + m[l];
                                    return p
                                }
                                return (u - c) * d + m
                            }
                            if ("continue" === t) {
                                var f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                                    y = this.getValueAtTime((a - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (p = new Array(f.length), h = p.length, l = 0; h > l; l += 1) p[l] = f[l] + (f[l] - y[l]) * ((i - a) / this.comp.globalData.frameRate) / 5e-4;
                                    return p
                                }
                                return f + (i - a) / .001 * (f - y)
                            }
                        }
                        return this.getValueAtTime(((i - o) % s + o) / this.comp.globalData.frameRate, 0)
                    }.bind(this),
                    loop_out = loopOut,
                    loopOutDuration = function(t, e) {
                        return loopOut(t, e, !0)
                    }.bind(this),
                    valueAtTime = function(t) {
                        return this.getValueAtTime(t, 0)
                    }.bind(this),
                    velocityAtTime;
                this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                    time, velocity, value, textIndex, textTotal, selectorValue, index = elem.data.ind,
                    hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                    parent, randSeed = Math.floor(1e6 * Math.random());
                return execute
            }
            var ob = {},
                Math = BMMath,
                window = null,
                document = null,
                add = sum,
                radians_to_degrees = radiansToDegrees,
                degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];
            return ob.initiateExpression = initiateExpression, ob
        }(),
        ShapeExpressionInterface = function() {
            function t(t, e, n) {
                return d(t, e, n)
            }

            function e(t, e, n) {
                return y(t, e, n)
            }

            function n(t, e, n) {
                return v(t, e, n)
            }

            function i(t, e, n) {
                return g(t, e, n)
            }

            function r(t, e, n) {
                return b(t, e, n)
            }

            function a(t, e, n) {
                return x(t, e, n)
            }

            function s(t, e, n) {
                return k(t, e, n)
            }

            function o(t, e, n) {
                return _(t, e, n)
            }

            function l(t, e, n) {
                return E(t, e, n)
            }

            function h(t, e, n) {
                return w(t, e, n)
            }

            function p(t, e, n) {
                return S(t, e, n)
            }

            function c(t, e, n) {
                return P(t, e, n)
            }

            function u(t, e, n) {
                var i, r = [],
                    a = t ? t.length : 0;
                for (i = 0; a > i; i += 1) "gr" == t[i].ty ? r.push(ShapeExpressionInterface.createGroupInterface(t[i], e[i], n)) : "fl" == t[i].ty ? r.push(ShapeExpressionInterface.createFillInterface(t[i], e[i], n)) : "st" == t[i].ty ? r.push(ShapeExpressionInterface.createStrokeInterface(t[i], e[i], n)) : "tm" == t[i].ty ? r.push(ShapeExpressionInterface.createTrimInterface(t[i], e[i], n)) : "tr" == t[i].ty || ("el" == t[i].ty ? r.push(ShapeExpressionInterface.createEllipseInterface(t[i], e[i], n)) : "sr" == t[i].ty ? r.push(ShapeExpressionInterface.createStarInterface(t[i], e[i], n)) : "sh" == t[i].ty ? r.push(ShapeExpressionInterface.createPathInterface(t[i], e[i], n)) : "rc" == t[i].ty ? r.push(ShapeExpressionInterface.createRectInterface(t[i], e[i], n)) : "rd" == t[i].ty ? r.push(ShapeExpressionInterface.createRoundedInterface(t[i], e[i], n)) : "rp" == t[i].ty && r.push(ShapeExpressionInterface.createRepatearInterface(t[i], e[i], n)));
                return r
            }
            var m = {
                    createShapeInterface: t,
                    createGroupInterface: e,
                    createTrimInterface: r,
                    createStrokeInterface: i,
                    createTransformInterface: a,
                    createEllipseInterface: s,
                    createStarInterface: o,
                    createRectInterface: l,
                    createRoundedInterface: h,
                    createRepatearInterface: p,
                    createPathInterface: c,
                    createFillInterface: n
                },
                d = function() {
                    return function(t, e, n) {
                        function i(t) {
                            if ("number" == typeof t) return r[t - 1];
                            for (var e = 0, n = r.length; n > e;) {
                                if (r[e]._name === t) return r[e];
                                e += 1
                            }
                        }
                        var r;
                        return i.propertyGroup = n, r = u(t, e, i), i
                    }
                }(),
                f = function() {
                    return function(t, e, n) {
                        var i, r = function(t) {
                            for (var e = 0, n = i.length; n > e;) {
                                if (i[e]._name === t || i[e].mn === t || i[e].propertyIndex === t || i[e].ix === t || i[e].ind === t) return i[e];
                                e += 1
                            }
                            return "number" == typeof t ? i[t - 1] : void 0
                        };
                        return r.propertyGroup = function(t) {
                            return 1 === t ? r : n(t - 1)
                        }, i = u(t.it, e.it, r.propertyGroup), r.numProperties = i.length, r.propertyIndex = t.cix, r
                    }
                }(),
                y = function() {
                    return function(t, e, n) {
                        var i = function(t) {
                            switch (t) {
                                case "ADBE Vectors Group":
                                case "Contents":
                                case 2:
                                    return i.content;
                                case "ADBE Vector Transform Group":
                                case 3:
                                default:
                                    return i.transform
                            }
                        };
                        i.propertyGroup = function(t) {
                            return 1 === t ? i : n(t - 1)
                        };
                        var r = f(t, e, i.propertyGroup),
                            a = ShapeExpressionInterface.createTransformInterface(t.it[t.it.length - 1], e.it[e.it.length - 1], i.propertyGroup);
                        return i.content = r, i.transform = a, Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i
                    }
                }(),
                v = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : void 0
                        }
                        return Object.defineProperty(i, "color", {
                            get: function() {
                                return ExpressionValue(e.c, 1 / e.c.mult, "color")
                            }
                        }), Object.defineProperty(i, "opacity", {
                            get: function() {
                                return ExpressionValue(e.o, 100)
                            }
                        }), Object.defineProperty(i, "_name", {
                            value: t.nm
                        }), Object.defineProperty(i, "mn", {
                            value: t.mn
                        }), e.c.setGroupProperty(n), e.o.setGroupProperty(n), i
                    }
                }(),
                g = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return 1 === t ? m : n(t - 1)
                        }

                        function r(t) {
                            return 1 === t ? l : i(t - 1)
                        }

                        function a(t) {
                            return "Color" === t || "color" === t ? a.color : "Opacity" === t || "opacity" === t ? a.opacity : "Stroke Width" === t || "stroke width" === t ? a.strokeWidth : void 0
                        }
                        var s, o = t.d ? t.d.length : 0,
                            l = {};
                        for (s = 0; o > s; s += 1)(function(n) {
                            Object.defineProperty(l, t.d[n].nm, {
                                get: function() {
                                    return ExpressionValue(e.d.dataProps[n].p)
                                }
                            })
                        })(s), e.d.dataProps[s].p.setGroupProperty(r);
                        return Object.defineProperty(a, "color", {
                            get: function() {
                                return ExpressionValue(e.c, 1 / e.c.mult, "color")
                            }
                        }), Object.defineProperty(a, "opacity", {
                            get: function() {
                                return ExpressionValue(e.o, 100)
                            }
                        }), Object.defineProperty(a, "strokeWidth", {
                            get: function() {
                                return ExpressionValue(e.w)
                            }
                        }), Object.defineProperty(a, "dash", {
                            get: function() {
                                return l
                            }
                        }), Object.defineProperty(a, "_name", {
                            value: t.nm
                        }), Object.defineProperty(a, "mn", {
                            value: t.mn
                        }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), e.w.setGroupProperty(i), a
                    }
                }(),
                b = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return 1 == t ? r : n(--t)
                        }

                        function r(e) {
                            return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : void 0
                        }
                        return r.propertyIndex = t.ix, e.s.setGroupProperty(i), e.e.setGroupProperty(i), e.o.setGroupProperty(i), r.propertyIndex = t.ix, Object.defineProperty(r, "start", {
                            get: function() {
                                return ExpressionValue(e.s, 1 / e.s.mult)
                            }
                        }), Object.defineProperty(r, "end", {
                            get: function() {
                                return ExpressionValue(e.e, 1 / e.e.mult)
                            }
                        }), Object.defineProperty(r, "offset", {
                            get: function() {
                                return ExpressionValue(e.o)
                            }
                        }), Object.defineProperty(r, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                }(),
                x = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return 1 == t ? r : n(--t)
                        }

                        function r(e) {
                            return t.a.ix === e ? r.anchorPoint : t.o.ix === e ? r.opacity : t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.s.ix === e ? r.scale : t.sk && t.sk.ix === e ? r.skew : t.sa && t.sa.ix === e ? r.skewAxis : "Opacity" === e ? r.opacity : "Position" === e ? r.position : "Anchor Point" === e ? r.anchorPoint : "Scale" === e ? r.scale : "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : "Skew" === e ? r.skew : "Skew Axis" === e ? r.skewAxis : void 0
                        }
                        return e.transform.mProps.o.setGroupProperty(i), e.transform.mProps.p.setGroupProperty(i), e.transform.mProps.a.setGroupProperty(i), e.transform.mProps.s.setGroupProperty(i), e.transform.mProps.r.setGroupProperty(i), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(i), e.transform.mProps.sa.setGroupProperty(i)), e.transform.op.setGroupProperty(i), Object.defineProperty(r, "opacity", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.o, 1 / e.transform.mProps.o.mult)
                            }
                        }), Object.defineProperty(r, "position", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.p)
                            }
                        }), Object.defineProperty(r, "anchorPoint", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.a)
                            }
                        }), Object.defineProperty(r, "scale", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.s, 1 / e.transform.mProps.s.mult)
                            }
                        }), Object.defineProperty(r, "rotation", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.r, 1 / e.transform.mProps.r.mult)
                            }
                        }), Object.defineProperty(r, "skew", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.sk)
                            }
                        }), Object.defineProperty(r, "skewAxis", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.sa)
                            }
                        }), Object.defineProperty(r, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), r.ty = "tr", r.mn = t.mn, r
                    }
                }(),
                k = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return 1 == t ? r : n(--t)
                        }

                        function r(e) {
                            return t.p.ix === e ? r.position : t.s.ix === e ? r.size : void 0
                        }
                        r.propertyIndex = t.ix;
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return a.s.setGroupProperty(i), a.p.setGroupProperty(i), Object.defineProperty(r, "size", {
                            get: function() {
                                return ExpressionValue(a.s)
                            }
                        }), Object.defineProperty(r, "position", {
                            get: function() {
                                return ExpressionValue(a.p)
                            }
                        }), Object.defineProperty(r, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                }(),
                _ = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return 1 == t ? r : n(--t)
                        }

                        function r(e) {
                            return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : void 0 : r.innerRadius
                        }
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return r.propertyIndex = t.ix, a.or.setGroupProperty(i), a.os.setGroupProperty(i), a.pt.setGroupProperty(i), a.p.setGroupProperty(i), a.r.setGroupProperty(i), t.ir && (a.ir.setGroupProperty(i), a.is.setGroupProperty(i)), Object.defineProperty(r, "position", {
                            get: function() {
                                return ExpressionValue(a.p)
                            }
                        }), Object.defineProperty(r, "rotation", {
                            get: function() {
                                return ExpressionValue(a.r, 1 / a.r.mult)
                            }
                        }), Object.defineProperty(r, "points", {
                            get: function() {
                                return ExpressionValue(a.pt)
                            }
                        }), Object.defineProperty(r, "outerRadius", {
                            get: function() {
                                return ExpressionValue(a.or)
                            }
                        }), Object.defineProperty(r, "outerRoundness", {
                            get: function() {
                                return ExpressionValue(a.os)
                            }
                        }), Object.defineProperty(r, "innerRadius", {
                            get: function() {
                                return a.ir ? ExpressionValue(a.ir) : 0
                            }
                        }), Object.defineProperty(r, "innerRoundness", {
                            get: function() {
                                return a.is ? ExpressionValue(a.is, 1 / a.is.mult) : 0
                            }
                        }), Object.defineProperty(r, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                }(),
                E = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return 1 == t ? r : n(--t)
                        }

                        function r(e) {
                            return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e ? r.size : void 0
                        }
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return r.propertyIndex = t.ix, a.p.setGroupProperty(i), a.s.setGroupProperty(i), a.r.setGroupProperty(i), Object.defineProperty(r, "position", {
                            get: function() {
                                return ExpressionValue(a.p)
                            }
                        }), Object.defineProperty(r, "roundness", {
                            get: function() {
                                return ExpressionValue(a.r)
                            }
                        }), Object.defineProperty(r, "size", {
                            get: function() {
                                return ExpressionValue(a.s)
                            }
                        }), Object.defineProperty(r, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                }(),
                w = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return 1 == t ? r : n(--t)
                        }

                        function r(e) {
                            return t.r.ix === e || "Round Corners 1" === e ? r.radius : void 0
                        }
                        var a = e;
                        return r.propertyIndex = t.ix, a.rd.setGroupProperty(i), Object.defineProperty(r, "radius", {
                            get: function() {
                                return ExpressionValue(a.rd)
                            }
                        }), Object.defineProperty(r, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                }(),
                S = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return 1 == t ? r : n(--t)
                        }

                        function r(e) {
                            return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : void 0
                        }
                        var a = e;
                        return r.propertyIndex = t.ix, a.c.setGroupProperty(i), a.o.setGroupProperty(i), Object.defineProperty(r, "copies", {
                            get: function() {
                                return ExpressionValue(a.c)
                            }
                        }), Object.defineProperty(r, "offset", {
                            get: function() {
                                return ExpressionValue(a.o)
                            }
                        }), Object.defineProperty(r, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), r.mn = t.mn, r
                    }
                }(),
                P = function() {
                    return function(t, e, n) {
                        function i(t) {
                            return 1 == t ? r : n(--t)
                        }

                        function r(t) {
                            return "Shape" === t || "shape" === t || "Path" === t || "path" === t || 2 === t ? r.path : void 0
                        }
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return a.setGroupProperty(i), Object.defineProperty(r, "path", {
                            get: function() {
                                return a.k && a.getValue(), a.v
                            }
                        }), Object.defineProperty(r, "shape", {
                            get: function() {
                                return a.k && a.getValue(), a.v
                            }
                        }), Object.defineProperty(r, "_name", {
                            value: t.nm
                        }), Object.defineProperty(r, "ix", {
                            value: t.ix
                        }), Object.defineProperty(r, "mn", {
                            value: t.mn
                        }), r
                    }
                }();
            return m
        }(),
        TextExpressionInterface = function() {
            return function(t) {
                function e() {}
                return Object.defineProperty(e, "sourceText", {
                    get: function() {
                        return t.currentTextDocumentData.t ? t.currentTextDocumentData.t : ""
                    }
                }), e
            }
        }(),
        LayerExpressionInterface = function() {
            function t(t, e) {
                var n = new Matrix;
                n.reset();
                var i;
                if (i = this._elem.finalTransform.mProp, i.applyToMatrix(n), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var r, a = this._elem.hierarchy.length;
                    for (r = 0; a > r; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(n);
                    return n.applyToPointArray(t[0], t[1], t[2] || 0)
                }
                return n.applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function e(t, e) {
                var n = new Matrix;
                n.reset();
                var i;
                if (i = this._elem.finalTransform.mProp, i.applyToMatrix(n), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var r, a = this._elem.hierarchy.length;
                    for (r = 0; a > r; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(n);
                    return n.inversePoint(t)
                }
                return n.inversePoint(t)
            }

            function n(t) {
                var e = new Matrix;
                if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var n, i = this._elem.hierarchy.length;
                    for (n = 0; i > n; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                    return e.inversePoint(t)
                }
                return e.inversePoint(t)
            }
            return function(i) {
                function r(t) {
                    s.mask = t.getMask.bind(t)
                }

                function a(t) {
                    s.effect = t
                }

                function s(t) {
                    switch (t) {
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return s.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return o;
                        case 4:
                        case "ADBE Effect Parade":
                            return s.effect
                    }
                }
                var o = TransformExpressionInterface(i.transform);
                return s.toWorld = t, s.fromWorld = e, s.toComp = t, s.fromComp = n, s._elem = i, Object.defineProperty(s, "hasParent", {
                    get: function() {
                        return !!i.hierarchy
                    }
                }), Object.defineProperty(s, "parent", {
                    get: function() {
                        return i.hierarchy[0].layerInterface
                    }
                }), Object.defineProperty(s, "rotation", {
                    get: function() {
                        return o.rotation
                    }
                }), Object.defineProperty(s, "scale", {
                    get: function() {
                        return o.scale
                    }
                }), Object.defineProperty(s, "position", {
                    get: function() {
                        return o.position
                    }
                }), Object.defineProperty(s, "anchorPoint", {
                    get: function() {
                        return o.anchorPoint
                    }
                }), Object.defineProperty(s, "transform", {
                    get: function() {
                        return o
                    }
                }), Object.defineProperty(s, "width", {
                    get: function() {
                        return 0 === i.data.ty ? i.data.w : 100
                    }
                }), Object.defineProperty(s, "height", {
                    get: function() {
                        return 0 === i.data.ty ? i.data.h : 100
                    }
                }), Object.defineProperty(s, "source", {
                    get: function() {
                        return i.data.refId
                    }
                }), Object.defineProperty(s, "_name", {
                    value: i.data.nm
                }), Object.defineProperty(s, "content", {
                    get: function() {
                        return s.shapeInterface
                    }
                }), Object.defineProperty(s, "active", {
                    get: function() {
                        return i.isVisible
                    }
                }), Object.defineProperty(s, "text", {
                    get: function() {
                        return s.textInterface
                    }
                }), s.registerMaskInterface = r, s.registerEffectsInterface = a, s
            }
        }(),
        CompExpressionInterface = function() {
            return function(t) {
                function e(e) {
                    for (var n = 0, i = t.layers.length; i > n;) {
                        if (t.layers[n].nm === e || t.layers[n].ind === e) return t.elements[n].layerInterface;
                        n += 1
                    }
                    return {
                        active: !1
                    }
                }
            }
        }(),
        TransformExpressionInterface = function() {
            return function(t) {
                function e(n) {
                    switch (n) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return t.position;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity
                    }
                }
                return Object.defineProperty(e, "rotation", {
                    get: function() {
                        return t.rotation
                    }
                }), Object.defineProperty(e, "scale", {
                    get: function() {
                        return t.scale
                    }
                }), Object.defineProperty(e, "position", {
                    get: function() {
                        return t.position
                    }
                }), Object.defineProperty(e, "xPosition", {
                    get: function() {
                        return t.xPosition
                    }
                }), Object.defineProperty(e, "yPosition", {
                    get: function() {
                        return t.yPosition
                    }
                }), Object.defineProperty(e, "anchorPoint", {
                    get: function() {
                        return t.anchorPoint
                    }
                }), Object.defineProperty(e, "opacity", {
                    get: function() {
                        return t.opacity
                    }
                }), Object.defineProperty(e, "skew", {
                    get: function() {
                        return t.skew
                    }
                }), Object.defineProperty(e, "skewAxis", {
                    get: function() {
                        return t.skewAxis
                    }
                }), e
            }
        }(),
        ProjectInterface = function() {
            function t(t) {
                this.compositions.push(t)
            }
            return function() {
                function e(t) {
                    for (var e = 0, n = this.compositions.length; n > e;) {
                        if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                        e += 1
                    }
                }
                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
        }(),
        EffectsExpressionInterface = function() {
            function t(t, n) {
                if (t.effects) {
                    var i, r = [],
                        a = t.data.ef,
                        s = t.effects.effectElements.length;
                    for (i = 0; s > i; i += 1) r.push(e(a[i], t.effects.effectElements[i], n, t));
                    return function(e) {
                        for (var n = t.data.ef, i = 0, a = n.length; a > i;) {
                            if (e === n[i].nm || e === n[i].mn || e === n[i].ix) return r[i];
                            i += 1
                        }
                    }
                }
            }

            function e(t, i, r, a) {
                var s, o = [],
                    l = t.ef.length;
                for (s = 0; l > s; s += 1) o.push(5 === t.ef[s].ty ? e(t.ef[s], i.effectElements[s], r, a) : n(i.effectElements[s], t.ef[s].ty, a));
                var h = function(e) {
                    for (var n = t.ef, i = 0, r = n.length; r > i;) {
                        if (e === n[i].nm || e === n[i].mn || e === n[i].ix) return 5 === n[i].ty ? o[i] : o[i]();
                        i += 1
                    }
                    return o[0]()
                };
                return "ADBE Color Control" === t.mn && Object.defineProperty(h, "color", {
                    get: function() {
                        return o[0]()
                    }
                }), Object.defineProperty(h, "numProperties", {
                    get: function() {
                        return t.np
                    }
                }), h.active = 0 !== t.en, h
            }

            function n(t, e, n) {
                return function() {
                    return 10 === e ? n.comp.compInterface(t.p.v) : ExpressionValue(t.p)
                }
            }
            return {
                createEffectsInterface: t
            }
        }(),
        ExpressionValue = function() {
            return function(t, e, n) {
                var i;
                t.k && t.getValue();
                var r, a, s;
                if (n) {
                    if ("color" === n) {
                        for (a = 4, i = Array.apply(null, {
                                length: a
                            }), s = Array.apply(null, {
                                length: a
                            }), r = 0; a > r; r += 1) i[r] = s[r] = e && 3 > r ? t.v[r] * e : 1;
                        i.value = s
                    }
                } else if ("number" == typeof t.v || t.v instanceof Number) i = new Number(e ? t.v * e : t.v), i.value = e ? t.v * e : t.v;
                else {
                    for (a = t.v.length, i = Array.apply(null, {
                            length: a
                        }), s = Array.apply(null, {
                            length: a
                        }), r = 0; a > r; r += 1) i[r] = s[r] = e ? t.v[r] * e : t.v[r];
                    i.value = s
                }
                return i.numKeys = t.keyframes ? t.keyframes.length : 0, i.key = function(e) {
                    return i.numKeys ? t.keyframes[e - 1].t : 0
                }, i.valueAtTime = t.getValueAtTime, i.propertyGroup = t.propertyGroup, i
            }
        }();
    GroupEffect.prototype.getValue = function() {
        this.mdf = !1;
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.mdf = !!this.dynamicProperties[t].mdf || this.mdf
    }, GroupEffect.prototype.init = function(t, e, n) {
        this.data = t, this.mdf = !1, this.effectElements = [];
        var i, r, a = this.data.ef.length,
            s = this.data.ef;
        for (i = 0; a > i; i += 1) switch (s[i].ty) {
            case 0:
                r = new SliderEffect(s[i], e, n), this.effectElements.push(r);
                break;
            case 1:
                r = new AngleEffect(s[i], e, n), this.effectElements.push(r);
                break;
            case 2:
                r = new ColorEffect(s[i], e, n), this.effectElements.push(r);
                break;
            case 3:
                r = new PointEffect(s[i], e, n), this.effectElements.push(r);
                break;
            case 4:
            case 7:
                r = new CheckboxEffect(s[i], e, n), this.effectElements.push(r);
                break;
            case 10:
                r = new LayerIndexEffect(s[i], e, n), this.effectElements.push(r);
                break;
            case 11:
                r = new MaskIndexEffect(s[i], e, n), this.effectElements.push(r);
                break;
            case 5:
                r = new EffectsManager(s[i], e, n), this.effectElements.push(r);
                break;
            case 6:
                r = new NoValueEffect(s[i], e, n), this.effectElements.push(r)
        }
    };
    var bodymovinjs = {};
    bodymovinjs.play = play, bodymovinjs.pause = pause, bodymovinjs.togglePause = togglePause, bodymovinjs.setSpeed = setSpeed, bodymovinjs.setDirection = setDirection, bodymovinjs.stop = stop, bodymovinjs.moveFrame = moveFrame, bodymovinjs.searchAnimations = searchAnimations, bodymovinjs.registerAnimation = registerAnimation, bodymovinjs.loadAnimation = loadAnimation, bodymovinjs.setSubframeRendering = setSubframeRendering, bodymovinjs.resize = resize, bodymovinjs.start = start, bodymovinjs.goToAndStop = goToAndStop, bodymovinjs.destroy = destroy, bodymovinjs.setQuality = setQuality, bodymovinjs.inBrowser = inBrowser, bodymovinjs.installPlugin = installPlugin, bodymovinjs.__getFactory = getFactory, bodymovinjs.version = "4.10.1";
    var standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";
    if (standalone) {
        var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
                src: ""
            },
            queryString = myScript.src.replace(/^[^\?]+\??/, "");
        renderer = getQueryVariable("renderer")
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return bodymovinjs
});
var animationData1 = {
        v: "4.10.1",
        fr: 24,
        ip: 0,
        op: 288,
        w: 2710,
        h: 2054,
        nm: "3Cubo",
        ddd: 0,
        assets: [{
            id: "image_0",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "8_cubos_para_animacao_3.png"
        }, {
            id: "image_1",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "12_cubos_para_animacao_3.png"
        }, {
            id: "image_2",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "3_cubos_para_animacao_3.png"
        }, {
            id: "image_3",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "1_cubos_para_animacao_3.png"
        }, {
            id: "image_4",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "2_cubos_para_animacao_3.png"
        }, {
            id: "image_5",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "4_cubos_para_animacao_3.png"
        }, {
            id: "image_6",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "5_cubos_para_animacao_3.png"
        }, {
            id: "image_7",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "6_cubos_para_animacao_3.png"
        }, {
            id: "image_8",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "7_cubos_para_animacao_3.png"
        }, {
            id: "image_9",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "10_cubos_para_animacao_3.png"
        }, {
            id: "image_10",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "11_cubos_para_animacao_3.png"
        }, {
            id: "image_11",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "13_cubos_para_animacao_3.png"
        }, {
            id: "image_12",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "9_cubos_para_animacao_3.png"
        }, {
            id: "image_13",
            w: 1003,
            h: 882,
            u: "images/cubes/",
            p: "14_cubos_para_animacao_3.png"
        }, {
            id: "comp_29",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "8/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_0",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [220.5, 141, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_30",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "12/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_1",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [78.5, -59, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_31",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "3/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_2",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-19.5, 95, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_32",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "1/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_3",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [220.5, 326, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_33",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "2/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_4",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [60.5, 418, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_34",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "4/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_5",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [60.5, 232, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_35",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "5/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_6",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-19.5, 279, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_36",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "6/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_7",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-99.5, 325, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_37",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "7/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_8",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [140.5, 279, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_38",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "10/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_9",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-99.5, 48, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_39",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "11/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_10",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-259.5, -44, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_40",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "13/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_11",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [300.5, -90, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_41",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "9/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_12",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-99.5, -44, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_42",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "14/cubos_para_animacao_3.ai",
                cl: "ai",
                refId: "image_13",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [380.5, -229, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [501.5, 441, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }],
        layers: [{
            ddd: 0,
            ind: 2,
            ty: 0,
            nm: "12 MATTE",
            td: 1,
            refId: "comp_29",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1216, 980, 0],
                        e: [1216, 980, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            ef: [{
                ty: 21,
                nm: "Fill",
                np: 9,
                mn: "ADBE Fill",
                ix: 1,
                en: 1,
                ef: [{
                    ty: 10,
                    nm: "Fill Mask",
                    mn: "ADBE Fill-0001",
                    ix: 1,
                    v: {
                        a: 0,
                        k: 0,
                        ix: 1
                    }
                }, {
                    ty: 7,
                    nm: "All Masks",
                    mn: "ADBE Fill-0007",
                    ix: 2,
                    v: {
                        a: 0,
                        k: 0,
                        ix: 2
                    }
                }, {
                    ty: 2,
                    nm: "Color",
                    mn: "ADBE Fill-0002",
                    ix: 3,
                    v: {
                        a: 0,
                        k: [.338823318481, 1, 0, 1],
                        ix: 3
                    }
                }, {
                    ty: 7,
                    nm: "Invert",
                    mn: "ADBE Fill-0006",
                    ix: 4,
                    v: {
                        a: 0,
                        k: 0,
                        ix: 4
                    }
                }, {
                    ty: 0,
                    nm: "Horizontal Feather",
                    mn: "ADBE Fill-0003",
                    ix: 5,
                    v: {
                        a: 0,
                        k: 0,
                        ix: 5
                    }
                }, {
                    ty: 0,
                    nm: "Vertical Feather",
                    mn: "ADBE Fill-0004",
                    ix: 6,
                    v: {
                        a: 0,
                        k: 0,
                        ix: 6
                    }
                }, {
                    ty: 0,
                    nm: "Opacity",
                    mn: "ADBE Fill-0005",
                    ix: 7,
                    v: {
                        a: 0,
                        k: 1,
                        ix: 7
                    }
                }]
            }],
            w: 163,
            h: 188,
            ip: 24,
            op: 96,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 3,
            ty: 0,
            nm: "12",
            tt: 2,
            refId: "comp_30",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1016, 956.5, 0],
                        e: [1255.874, 1095.063, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 72,
                        s: [1255.874, 1095.063, 0],
                        e: [1255.874, 1095.063, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 96,
                        s: [1255.874, 1095.063, 0],
                        e: [1255.874, 958.563, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 122,
                        s: [1255.874, 958.563, 0],
                        e: [1255.984, 958.073, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 123,
                        s: [1255.984, 958.073, 0],
                        e: [1016.531, 818.702, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 192,
                        s: [1016.531, 818.702, 0],
                        e: [1015.5, 956.75, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 240
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [41.5, 47.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 83,
            h: 95,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 4,
            ty: 0,
            nm: "8",
            refId: "comp_29",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1216, 980, 0],
                        e: [1216, 980, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 5,
            ty: 0,
            nm: "3",
            refId: "comp_31",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1456, 1026, 0],
                        e: [1616.5, 934, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 48,
                        s: [1616.5, 934, 0],
                        e: [1617.648, 749.216, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 120,
                        s: [1617.648, 749.216, 0],
                        e: [1616.648, 749.216, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 168,
                        s: [1616.648, 749.216, 0],
                        e: [1617.648, 749.216, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 192,
                        s: [1617.648, 749.216, 0],
                        e: [1455.794, 841.276, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 226,
                        s: [1455.794, 841.276, 0],
                        e: [1456, 1026, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutCirc(t, b, c, d) {\n    if ((t /= d / 2) < 1)\n        return sum(mul(div($bm_neg(c), 2), sub(Math.sqrt(sub(1, mul(t, t))), 1)), b);\n    return sum(mul(div(c, 2), sum(Math.sqrt(sub(1, mul(t -= 2, t))), 1)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutCirc(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutCirc(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutCirc(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutCirc(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [81.5, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 6,
            ty: 0,
            nm: "1",
            refId: "comp_32",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 48,
                        s: [1214.5, 795, 0],
                        e: [1134.5, 749.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 96,
                        s: [1134.5, 749.5, 0],
                        e: [896.917, 888.8, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 169,
                        s: [896.917, 888.8, 0],
                        e: [975.005, 935.694, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 211,
                        s: [975.005, 935.694, 0],
                        e: [1214.5, 795, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 288,
                        s: [1214.5, 795, 0],
                        e: [1214.5, 795, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 311
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutCirc(t, b, c, d) {\n    if ((t /= d / 2) < 1)\n        return sum(mul(div($bm_neg(c), 2), sub(Math.sqrt(sub(1, mul(t, t))), 1)), b);\n    return sum(mul(div(c, 2), sum(Math.sqrt(sub(1, mul(t -= 2, t))), 1)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutCirc(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutCirc(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutCirc(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutCirc(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [80, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 7,
            ty: 0,
            nm: "2",
            refId: "comp_33",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1376, 703, 0],
                        e: [1376, 703, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 144,
                        s: [1376, 703, 0],
                        e: [1456.25, 748.75, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 168,
                        s: [1456.25, 748.75, 0],
                        e: [1375.866, 795.521, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 192,
                        s: [1375.866, 795.521, 0],
                        e: [1296, 750, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 216,
                        s: [1296, 750, 0],
                        e: [1376, 703, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 240
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 8,
            ty: 0,
            nm: "4",
            refId: "comp_34",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1374.5, 888.5, 0],
                        e: [1374.5, 888.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [80, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 9,
            ty: 0,
            nm: "5",
            refId: "comp_35",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1457.5, 841.5, 0],
                        e: [1457.5, 841.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 48,
                        s: [1457.5, 841.5, 0],
                        e: [1457.5, 841.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [83, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 10,
            ty: 0,
            nm: "6",
            refId: "comp_36",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1537.5, 795.5, 0],
                        e: [1537.5, 795.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [83, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 11,
            ty: 0,
            nm: "7",
            refId: "comp_37",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1297.5, 841.5, 0],
                        e: [1297.5, 841.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [83, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 12,
            ty: 0,
            nm: "10",
            refId: "comp_38",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1536, 1071, 0],
                        e: [1536, 1071, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 96,
                        s: [1536, 1071, 0],
                        e: [1616, 1023.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 119,
                        s: [1616, 1023.5, 0],
                        e: [1616, 1023.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 216,
                        s: [1616, 1023.5, 0],
                        e: [1536, 1071, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 240,
                        s: [1536, 1071, 0],
                        e: [1536, 1071, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 92, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 13,
            ty: 0,
            nm: "11",
            refId: "comp_39",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 60,
                        s: [1697, 1163.5, 0],
                        e: [1335, 1374.5, 0],
                        to: [-1, .83333331346512, 0],
                        ti: [-1.1132572889328, -3.9699695110321, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 132,
                        s: [1335, 1374.5, 0],
                        e: [1335, 1374.5, 0],
                        to: [.26433750987053, .94264990091324, 0],
                        ti: [-1.1132572889328, -3.9699695110321, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 203,
                        s: [1335, 1374.5, 0],
                        e: [1696, 1165, 0],
                        to: [.26433750987053, .94264990091324, 0],
                        ti: [.93084019422531, .93084019422531, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 14,
            ty: 0,
            nm: "13",
            refId: "comp_40",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1136, 1211, 0],
                        e: [1136, 1211, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 15,
            ty: 0,
            nm: "9",
            refId: "comp_41",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1536, 1167, 0],
                        e: [1536, 1167, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 96, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 16,
            ty: 0,
            nm: "14",
            refId: "comp_42",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1056, 1349.5, 0],
                        e: [1256.214, 1233.566, 0],
                        to: [.49252608418465, -.46330609917641, 0],
                        ti: [.33089584112167, -.14881624281406, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 76,
                        s: [1256.214, 1233.566, 0],
                        e: [1336.425, 1279.706, 0],
                        to: [-.54923409223557, .24701112508774, 0],
                        ti: [.1836601793766, -.57984405755997, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 144,
                        s: [1336.425, 1279.706, 0],
                        e: [1135.28, 1395.659, 0],
                        to: [-.12676401436329, .40021392703056, 0],
                        ti: [1.36300265789032, .78127503395081, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 216,
                        s: [1135.28, 1395.659, 0],
                        e: [1056.125, 1348.625, 0],
                        to: [-.34935969114304, -.20025347173214, 0],
                        ti: [.04166666790843, .33333334326744, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }]
    },
    animationData2 = {
        v: "4.10.1",
        fr: 24,
        ip: 0,
        op: 288,
        w: 2407,
        h: 1745,
        nm: "4Cubo",
        ddd: 0,
        assets: [{
            id: "image_0",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "5_cubos_para_animacao_4.png"
        }, {
            id: "image_1",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "12_cubos_para_animacao_4.png"
        }, {
            id: "image_2",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "18_cubos_para_animacao_4.png"
        }, {
            id: "image_3",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "1_cubos_para_animacao_4.png"
        }, {
            id: "image_4",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "7_cubos_para_animacao_4.png"
        }, {
            id: "image_5",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "2_cubos_para_animacao_4.png"
        }, {
            id: "image_6",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "6_cubos_para_animacao_4.png"
        }, {
            id: "image_7",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "3_cubos_para_animacao_4.png"
        }, {
            id: "image_8",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "4_cubos_para_animacao_4.png"
        }, {
            id: "image_9",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "8_cubos_para_animacao_4.png"
        }, {
            id: "image_10",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "9_cubos_para_animacao_4.png"
        }, {
            id: "image_11",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "10_cubos_para_animacao_4.png"
        }, {
            id: "image_12",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "11_cubos_para_animacao_4.png"
        }, {
            id: "image_13",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "13_cubos_para_animacao_4.png"
        }, {
            id: "image_14",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "14_cubos_para_animacao_4.png"
        }, {
            id: "image_15",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "15_cubos_para_animacao_4.png"
        }, {
            id: "image_16",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "16_cubos_para_animacao_4.png"
        }, {
            id: "image_17",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "17_cubos_para_animacao_4.png"
        }, {
            id: "image_18",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "19_cubos_para_animacao_4.png"
        }, {
            id: "image_19",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "20_cubos_para_animacao_4.png"
        }, {
            id: "image_20",
            w: 1522,
            h: 1104,
            u: "images/cubes/",
            p: "21_cubos_para_animacao_4.png"
        }, {
            id: "comp_4",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "5/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_0",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [322, -117, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_5",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "12/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_1",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [202, 391, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_6",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "18/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_2",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-38, 160, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_7",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "1/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_3",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [482, 229, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_8",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "7/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_4",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [362, -164, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_9",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "2/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_5",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [563, 90, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_10",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "6/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_6",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [282, -25, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_11",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "3/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_7",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [523, 137, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_12",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "4/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_8",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [483, -25, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_13",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "8/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_9",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [60, 6, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_14",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "9/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_10",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-18, -129, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_15",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "10/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_11",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [62, -152, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_16",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "11/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_12",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [42, 483, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_17",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "13/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_13",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [42, 298, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_18",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "14/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_14",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-38, 345, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_19",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "15/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_15",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-118, 391, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_20",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "16/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_16",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [122, 345, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_21",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "17/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_17",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [202, 206, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_22",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "19/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_18",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-118, 21, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_23",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "20/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_19",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-118, 114, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_24",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "21/cubos_para_animacao_4.ai",
                cl: "ai",
                refId: "image_20",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-278, 21, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [761, 552, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }],
        layers: [{
            ddd: 0,
            ind: 2,
            ty: 0,
            nm: "5",
            refId: "comp_4",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [923, 1036.5, 0],
                        e: [923, 1036.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 48,
                        s: [923, 1036.5, 0],
                        e: [722.375, 922, 0],
                        to: [-.83333331346512, 1, 0],
                        ti: [.12190612405539, -.17799399793148, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 96,
                        s: [722.375, 922, 0],
                        e: [722, 1107, 0],
                        to: [-.04545404389501, .06636702269316, 0],
                        ti: [-.1875, -30.8333339691162, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 144,
                        s: [722, 1107, 0],
                        e: [722, 1107, 0],
                        to: [.1875, 30.8333339691162, 0],
                        ti: [-.1875, -30.8333339691162, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 168,
                        s: [722, 1107, 0],
                        e: [722.375, 922, 0],
                        to: [.1875, 30.8333339691162, 0],
                        ti: [.12190612405539, -.17799399793148, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 216,
                        s: [722.375, 922, 0],
                        e: [923, 1036.5, 0],
                        to: [-.04545404389501, .06636702269316, 0],
                        ti: [-33.4375, -19.0833339691162, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutExpo(t, b, c, d) {\n    if (t == 0)\n        return b;\n    if (t == d)\n        return sum(b, c);\n    if ((t /= d / 2) < 1)\n        return sum(mul(div(c, 2), Math.pow(2, mul(10, sub(t, 1)))), b);\n    return sum(mul(div(c, 2), sum($bm_neg(Math.pow(2, mul(-10, --t))), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutExpo(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutExpo(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [41.5, 47, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 83,
            h: 96,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 3,
            ty: 0,
            nm: "12",
            refId: "comp_5",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1081.5, 575.5, 0],
                        e: [1161, 621.75, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 48,
                        s: [1161, 621.75, 0],
                        e: [1081.334, 668.262, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 96,
                        s: [1081.334, 668.262, 0],
                        e: [1401.438, 851.982, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 192,
                        s: [1401.438, 851.982, 0],
                        e: [1402.783, 761.628, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 240,
                        s: [1402.783, 761.628, 0],
                        e: [1081.5, 575.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutExpo(t, b, c, d) {\n    if (t == 0)\n        return b;\n    if (t == d)\n        return sum(b, c);\n    if ((t /= d / 2) < 1)\n        return sum(mul(div(c, 2), Math.pow(2, mul(10, sub(t, 1)))), b);\n    return sum(mul(div(c, 2), sum($bm_neg(Math.pow(2, mul(-10, --t))), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutExpo(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutExpo(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [80, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 4,
            ty: 0,
            nm: "18",
            refId: "comp_6",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1321.5, 806.5, 0],
                        e: [1001, 991, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 48,
                        s: [1001, 991, 0],
                        e: [1001, 991, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 168,
                        s: [1001, 991, 0],
                        e: [1321.5, 806.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 216
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutExpo(t, b, c, d) {\n    if (t == 0)\n        return b;\n    if (t == d)\n        return sum(b, c);\n    if ((t /= d / 2) < 1)\n        return sum(mul(div(c, 2), Math.pow(2, mul(10, sub(t, 1)))), b);\n    return sum(mul(div(c, 2), sum($bm_neg(Math.pow(2, mul(-10, --t))), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutExpo(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutExpo(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [80, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 5,
            ty: 0,
            nm: "1",
            refId: "comp_7",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [803, 737, 0],
                        e: [1163, 529, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 120,
                        s: [1163, 529, 0],
                        e: [1243.263, 574.892, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 144,
                        s: [1243.263, 574.892, 0],
                        e: [801.596, 829.512, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 255,
                        s: [801.596, 829.512, 0],
                        e: [803, 737, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 6,
            ty: 0,
            nm: "7",
            refId: "comp_8",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [923, 1130, 0],
                        e: [923, 1130, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 7,
            ty: 0,
            nm: "2",
            refId: "comp_9",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [722, 876, 0],
                        e: [722, 876, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 8,
            ty: 0,
            nm: "6",
            refId: "comp_10",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1003, 991, 0],
                        e: [1003, 1084, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 48,
                        s: [1003, 1084, 0],
                        e: [923.5, 1037.078, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 144,
                        s: [923.5, 1037.078, 0],
                        e: [1003, 991, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 9,
            ty: 0,
            nm: "3",
            refId: "comp_11",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [722, 782.5, 0],
                        e: [722, 782.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [41.5, 47, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 83,
            h: 95,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 10,
            ty: 0,
            nm: "4",
            refId: "comp_12",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [762, 945, 0],
                        e: [1002, 807.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 72,
                        s: [1002, 807.5, 0],
                        e: [1002, 807.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 216,
                        s: [1002, 807.5, 0],
                        e: [762, 945, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutExpo(t, b, c, d) {\n    if (t == 0)\n        return b;\n    if (t == d)\n        return sum(b, c);\n    if ((t /= d / 2) < 1)\n        return sum(mul(div(c, 2), Math.pow(2, mul(10, sub(t, 1)))), b);\n    return sum(mul(div(c, 2), sum($bm_neg(Math.pow(2, mul(-10, --t))), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutExpo(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutExpo(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [41.5, 47.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 83,
            h: 95,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 11,
            ty: 0,
            nm: "8",
            refId: "comp_13",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .457,
                            y: 1
                        },
                        o: {
                            x: .704,
                            y: 0
                        },
                        n: "0p457_1_0p704_0",
                        t: 0,
                        s: [1164, 945, 0],
                        e: [1262.5, 1003.5, 0],
                        to: [16.4166660308838, 9.75, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .222,
                            y: 1
                        },
                        o: {
                            x: .374,
                            y: 0
                        },
                        n: "0p222_1_0p374_0",
                        t: 72,
                        s: [1262.5, 1003.5, 0],
                        e: [1221.507, 1026.438, 0],
                        to: [0, 0, 0],
                        ti: [-.68039184808731, -.14306853711605, 0]
                    }, {
                        i: {
                            x: .279,
                            y: 1
                        },
                        o: {
                            x: .454,
                            y: 0
                        },
                        n: "0p279_1_0p454_0",
                        t: 106,
                        s: [1221.507, 1026.438, 0],
                        e: [1223.538, 1072.288, 0],
                        to: [1.19750368595123, .25180357694626, 0],
                        ti: [-.06681876629591, -.24568864703178, 0]
                    }, {
                        i: {
                            x: .497,
                            y: 1
                        },
                        o: {
                            x: .761,
                            y: 0
                        },
                        n: "0p497_1_0p761_0",
                        t: 145,
                        s: [1223.538, 1072.288, 0],
                        e: [1082.333, 992.54, 0],
                        to: [.20646513998508, .75916010141373, 0],
                        ti: [1.79345703125, 1.01760673522949, 0]
                    }, {
                        i: {
                            x: .381,
                            y: 1
                        },
                        o: {
                            x: .599,
                            y: 0
                        },
                        n: "0p381_1_0p599_0",
                        t: 234,
                        s: [1082.333, 992.54, 0],
                        e: [1164, 945, 0],
                        to: [-.474290817976, -.26911243796349, 0],
                        ti: [3.64951777458191, 2.16747999191284, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [41.5, 47.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 83,
            h: 95,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 12,
            ty: 0,
            nm: "9",
            refId: "comp_14",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1263, 1049, 0],
                        e: [1263, 1049, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [41.5, 47.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 83,
            h: 95,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 13,
            ty: 0,
            nm: "10",
            refId: "comp_15",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1223, 1118, 0],
                        e: [1223, 1118, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 14,
            ty: 0,
            nm: "11",
            refId: "comp_16",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1243, 483, 0],
                        e: [1243, 483, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 15,
            ty: 0,
            nm: "13",
            refId: "comp_17",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1243, 668, 0],
                        e: [1243, 668, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 16,
            ty: 0,
            nm: "14",
            refId: "comp_18",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1324.5, 621.5, 0],
                        e: [1324.5, 621.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 48,
                        s: [1324.5, 621.5, 0],
                        e: [1324.5, 806.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 96,
                        s: [1324.5, 806.5, 0],
                        e: [1324.5, 806.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 120,
                        s: [1324.5, 806.5, 0],
                        e: [1324.5, 621.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 30.8333339691162, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 168,
                        s: [1324.5, 621.5, 0],
                        e: [1324.5, 621.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [83, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 17,
            ty: 0,
            nm: "15",
            refId: "comp_19",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1404.5, 575.5, 0],
                        e: [1724.5, 761, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 96,
                        s: [1724.5, 761, 0],
                        e: [1564.079, 852.881, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 144,
                        s: [1564.079, 852.881, 0],
                        e: [1724.5, 761, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 185,
                        s: [1724.5, 761, 0],
                        e: [1724.5, 761, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 216,
                        s: [1724.5, 761, 0],
                        e: [1404.5, 575.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [83, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 18,
            ty: 0,
            nm: "16",
            refId: "comp_20",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1163, 621.5, 0],
                        e: [1163, 621.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 94, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 19,
            ty: 0,
            nm: "17",
            refId: "comp_21",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1083, 760, 0],
                        e: [1083, 760, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 20,
            ty: 0,
            nm: "19",
            refId: "comp_22",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1403, 946.5, 0],
                        e: [1483, 993, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 72,
                        s: [1483, 993, 0],
                        e: [1483, 993, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 216,
                        s: [1483, 993, 0],
                        e: [1403, 946.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 95, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 21,
            ty: 0,
            nm: "20",
            refId: "comp_23",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1403, 851.5, 0],
                        e: [1403, 851.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 72,
                        s: [1403, 851.5, 0],
                        e: [1484, 805.5, 0],
                        to: [13.5, -7.66666650772095, 0],
                        ti: [-13.5, 7.66666650772095, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 120,
                        s: [1484, 805.5, 0],
                        e: [1484, 805.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 240,
                        s: [1484, 805.5, 0],
                        e: [1403, 851.5, 0],
                        to: [-13.5, 7.66666650772095, 0],
                        ti: [13.5, -7.66666650772095, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 22,
            ty: 0,
            nm: "21",
            refId: "comp_24",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 100,
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1563, 945, 0],
                        e: [1563, 945, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }]
    },
    animationData3 = {
        v: "4.9.0",
        fr: 24,
        ip: 0,
        op: 288,
        w: 1215,
        h: 1098,
        nm: "1Cubo",
        ddd: 0,
        assets: [{
            id: "image_0",
            w: 635,
            h: 573,
            u: "images/cubes/",
            p: "1_cubos_para_animacao_1.png"
        }, {
            id: "image_1",
            w: 635,
            h: 573,
            u: "images/cubes/",
            p: "2_cubos_para_animacao_1.png"
        }, {
            id: "image_2",
            w: 635,
            h: 573,
            u: "images/cubes/",
            p: "3_cubos_para_animacao_1.png"
        }, {
            id: "image_3",
            w: 635,
            h: 573,
            u: "images/cubes/",
            p: "4_cubos_para_animacao_1.png"
        }, {
            id: "image_4",
            w: 635,
            h: 573,
            u: "images/cubes/",
            p: "5_cubos_para_animacao_1.png"
        }, {
            id: "comp_82",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "1/cubos_para_animacao_1.ai",
                cl: "ai",
                refId: "image_0",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    r: {
                        a: 0,
                        k: 0
                    },
                    p: {
                        a: 0,
                        k: [97.5, 23.5, 0]
                    },
                    a: {
                        a: 0,
                        k: [317.5, 286.5, 0]
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100]
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_83",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "2/cubos_para_animacao_1.ai",
                cl: "ai",
                refId: "image_1",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    r: {
                        a: 0,
                        k: 0
                    },
                    p: {
                        a: 0,
                        k: [55.5, 116.5, 0]
                    },
                    a: {
                        a: 0,
                        k: [317.5, 286.5, 0]
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100]
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_84",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "3/cubos_para_animacao_1.ai",
                cl: "ai",
                refId: "image_2",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    r: {
                        a: 0,
                        k: 0
                    },
                    p: {
                        a: 0,
                        k: [57.5, -137.5, 0]
                    },
                    a: {
                        a: 0,
                        k: [317.5, 286.5, 0]
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100]
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_85",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "4/cubos_para_animacao_1.ai",
                cl: "ai",
                refId: "image_3",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    r: {
                        a: 0,
                        k: 0
                    },
                    p: {
                        a: 0,
                        k: [137.5, -22.5, 0]
                    },
                    a: {
                        a: 0,
                        k: [317.5, 286.5, 0]
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100]
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_86",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "5/cubos_para_animacao_1.ai",
                cl: "ai",
                refId: "image_4",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100
                    },
                    r: {
                        a: 0,
                        k: 0
                    },
                    p: {
                        a: 0,
                        k: [55.5, 23.5, 0]
                    },
                    a: {
                        a: 0,
                        k: [317.5, 286.5, 0]
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100]
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }],
        layers: [{
            ddd: 0,
            ind: 2,
            ty: 0,
            nm: "1",
            refId: "comp_82",
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 59,
                        s: [0],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 76,
                        s: [100],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 141,
                        s: [100],
                        e: [0]
                    }, {
                        t: 154
                    }]
                },
                r: {
                    a: 0,
                    k: 0
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 57,
                        s: [551.5, 163, 0],
                        e: [551.5, 573, 0],
                        to: [0, 68.3333358764648, 0],
                        ti: [0, -68.3333358764648, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 114,
                        s: [551.5, 573, 0],
                        e: [551.5, 573, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 133,
                        s: [551.5, 573, 0],
                        e: [551.5, 163, 0],
                        to: [0, -68.3333358764648, 0],
                        ti: [0, 68.3333358764648, 0]
                    }, {
                        t: 196
                    }],
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_outBounce(t, b, c, d) {\n    if ((t /= d) < 1 / 2.75) {\n        return sum(mul(c, mul(mul(7.5625, t), t)), b);\n    } else if (t < 2 / 2.75) {\n        return sum(mul(c, sum(mul(mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);\n    } else if (t < 2.5 / 2.75) {\n        return sum(mul(c, sum(mul(mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);\n    } else {\n        return sum(mul(c, sum(mul(mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);\n    }\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_outBounce(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_outBounce(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_outBounce(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_outBounce(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [41.5, 47.5, 0]
                },
                s: {
                    a: 0,
                    k: [100, 100, 100]
                }
            },
            ao: 0,
            w: 83,
            h: 95,
            ip: 57,
            op: 345,
            st: 57,
            bm: 0
        }, {
            ddd: 0,
            ind: 3,
            ty: 0,
            nm: "2",
            refId: "comp_83",
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 45,
                        s: [0],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 67,
                        s: [100],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 145,
                        s: [100],
                        e: [0]
                    }, {
                        t: 164
                    }]
                },
                r: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 0,
                        s: [-166],
                        e: [0]
                    }, {
                        t: 91
                    }],
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutQuint(t, b, c, d) {\n    if ((t /= d / 2) < 1)\n        return sum(mul(mul(mul(mul(mul(div(c, 2), t), t), t), t), t), b);\n    return sum(mul(div(c, 2), sum(mul(mul(mul(mul(t -= 2, t), t), t), t), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutQuint(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutQuint(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutQuint(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutQuint(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [633, 224.5, 0],
                        e: [633, 526.5, 0],
                        to: [0, 50.3333320617676, 0],
                        ti: [0, -50.3333320617676, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 110,
                        s: [633, 526.5, 0],
                        e: [633, 526.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 133,
                        s: [633, 526.5, 0],
                        e: [633, 224.5, 0],
                        to: [0, -50.3333320617676, 0],
                        ti: [0, 50.3333320617676, 0]
                    }, {
                        t: 186
                    }],
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutExpo(t, b, c, d) {\n    if (t == 0)\n        return b;\n    if (t == d)\n        return sum(b, c);\n    if ((t /= d / 2) < 1)\n        return sum(mul(div(c, 2), Math.pow(2, mul(10, sub(t, 1)))), b);\n    return sum(mul(div(c, 2), sum($bm_neg(Math.pow(2, mul(-10, --t))), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutExpo(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutExpo(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [81, 94, 0]
                },
                s: {
                    a: 0,
                    k: [100, 100, 100]
                }
            },
            ao: 0,
            w: 162,
            h: 188,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 4,
            ty: 0,
            nm: "3",
            refId: "comp_84",
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 35,
                        s: [0],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 47,
                        s: [100],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 147,
                        s: [100],
                        e: [0]
                    }, {
                        t: 162
                    }]
                },
                r: {
                    a: 0,
                    k: 0
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [985.5, 962.5, 0],
                        e: [591.5, 734.5, 0],
                        to: [-65.6666641235352, -38, 0],
                        ti: [65.6666641235352, 38, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 92,
                        s: [591.5, 734.5, 0],
                        e: [591.5, 734.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 125,
                        s: [591.5, 734.5, 0],
                        e: [33.5, 412.205, 0],
                        to: [-93, -53.7158393859863, 0],
                        ti: [93, 53.7158393859863, 0]
                    }, {
                        t: 190
                    }],
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutExpo(t, b, c, d) {\n    if (t == 0)\n        return b;\n    if (t == d)\n        return sum(b, c);\n    if ((t /= d / 2) < 1)\n        return sum(mul(div(c, 2), Math.pow(2, mul(10, sub(t, 1)))), b);\n    return sum(mul(div(c, 2), sum($bm_neg(Math.pow(2, mul(-10, --t))), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutExpo(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutExpo(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [41.5, 48, 0]
                },
                s: {
                    a: 0,
                    k: [100, 100, 100]
                }
            },
            ao: 0,
            w: 83,
            h: 96,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 5,
            ty: 3,
            nm: "Null 1",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 0
                },
                r: {
                    a: 0,
                    k: 0
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 158,
                        s: [395, 755, 0],
                        e: [395, 295, 0],
                        to: [0, -76.6666641235352, 0],
                        ti: [0, 76.6666641235352, 0]
                    }, {
                        t: 206
                    }],
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inExpo(t, b, c, d) {\n    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inExpo(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inExpo(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inExpo(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inExpo(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [0, 0, 0]
                },
                s: {
                    a: 0,
                    k: [100, 100, 100]
                }
            },
            ao: 0,
            ip: 133,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 6,
            ty: 0,
            nm: "4",
            parent: 5,
            refId: "comp_85",
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 0,
                        s: [0],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 15,
                        s: [100],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 179,
                        s: [100],
                        e: [0]
                    }, {
                        t: 206
                    }]
                },
                r: {
                    a: 0,
                    k: 0
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [-87.5, 51, 0],
                        e: [156.5, -90, 0],
                        to: [40.6666679382324, -23.5, 0],
                        ti: [-40.6666679382324, 23.5, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 73,
                        s: [156.5, -90, 0],
                        e: [156.5, -90, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 133,
                        s: [156.5, -90, 0],
                        e: [-42.5, 26.5, 0],
                        to: [-33.1666679382324, 19.4166660308838, 0],
                        ti: [33.1666679382324, -19.4166660308838, 0]
                    }, {
                        t: 158
                    }],
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_outBounce(t, b, c, d) {\n    if ((t /= d) < 1 / 2.75) {\n        return sum(mul(c, mul(mul(7.5625, t), t)), b);\n    } else if (t < 2 / 2.75) {\n        return sum(mul(c, sum(mul(mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);\n    } else if (t < 2.5 / 2.75) {\n        return sum(mul(c, sum(mul(mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);\n    } else {\n        return sum(mul(c, sum(mul(mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);\n    }\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_outBounce(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_outBounce(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_outBounce(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_outBounce(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [81.5, 93.5, 0]
                },
                s: {
                    a: 0,
                    k: [100, 100, 100]
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 7,
            ty: 3,
            nm: "Null 2",
            sr: 1,
            ks: {
                o: {
                    a: 0,
                    k: 0
                },
                r: {
                    a: 0,
                    k: 0
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 159,
                        s: [633, 619, 0],
                        e: [633, 859, 0],
                        to: [0, 40, 0],
                        ti: [0, -40, 0]
                    }, {
                        t: 218
                    }],
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inExpo(t, b, c, d) {\n    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inExpo(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inExpo(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inExpo(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inExpo(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [0, 0, 0]
                },
                s: {
                    a: 0,
                    k: [100, 100, 100]
                }
            },
            ao: 0,
            ip: 159,
            op: 266,
            st: -22,
            bm: 0
        }, {
            ddd: 0,
            ind: 8,
            ty: 0,
            nm: "5",
            parent: 7,
            refId: "comp_86",
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 0,
                        s: [0],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 15,
                        s: [100],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 181,
                        s: [100],
                        e: [0]
                    }, {
                        t: 218
                    }]
                },
                r: {
                    a: 0,
                    k: 0
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [394.75, -228.75, 0],
                        e: [0, 1.5, 0],
                        to: [-65.7916641235352, 38.375, 0],
                        ti: [65.7916641235352, -38.375, 0]
                    }, {
                        t: 73
                    }],
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_outBounce(t, b, c, d) {\n    if ((t /= d) < 1 / 2.75) {\n        return sum(mul(c, mul(mul(7.5625, t), t)), b);\n    } else if (t < 2 / 2.75) {\n        return sum(mul(c, sum(mul(mul(7.5625, t -= 1.5 / 2.75), t), 0.75)), b);\n    } else if (t < 2.5 / 2.75) {\n        return sum(mul(c, sum(mul(mul(7.5625, t -= 2.25 / 2.75), t), 0.9375)), b);\n    } else {\n        return sum(mul(c, sum(mul(mul(7.5625, t -= 2.625 / 2.75), t), 0.984375)), b);\n    }\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_outBounce(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_outBounce(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_outBounce(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_outBounce(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [81, 95, 0]
                },
                s: {
                    a: 0,
                    k: [100, 100, 100]
                }
            },
            ao: 0,
            w: 162,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }]
    },
    animationData5 = {
        v: "4.10.1",
        fr: 24,
        ip: 0,
        op: 288,
        w: 1172,
        h: 942,
        nm: "2Cubo",
        ddd: 0,
        assets: [{
            id: "image_0",
            w: 635,
            h: 573,
            u: "images/cubes/",
            p: "1_cubos_para_animacao_2.png"
        }, {
            id: "image_1",
            w: 635,
            h: 573,
            u: "images/cubes/",
            p: "2_cubos_para_animacao_2.png"
        }, {
            id: "image_2",
            w: 635,
            h: 573,
            u: "images/cubes/",
            p: "3_cubos_para_animacao_2.png"
        }, {
            id: "comp_25",
            layers: [{
                ddd: 0,
                ind: 2,
                ty: 2,
                nm: "1/cubos_para_animacao_2.ai",
                cl: "ai",
                refId: "image_0",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [159.5, 187.5, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [317.5, 286.5, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                hasMask: !0,
                masksProperties: [{
                    inv: !1,
                    mode: "n",
                    pt: {
                        a: 0,
                        k: {
                            i: [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            o: [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            v: [
                                [160, 238],
                                [159.5, 145.5],
                                [240, 193],
                                [319, 146],
                                [239.5, 100.5],
                                [160.5, 145.75],
                                [160.25, 238],
                                [239.75, 285.5],
                                [240, 192.5],
                                [319.25, 148],
                                [319.75, 239],
                                [240.5, 285.5]
                            ],
                            c: !1
                        },
                        ix: 1
                    },
                    o: {
                        a: 0,
                        k: 100,
                        ix: 3
                    },
                    x: {
                        a: 0,
                        k: 0,
                        ix: 4
                    },
                    nm: "Mask 1"
                }],
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_26",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "2/cubos_para_animacao_2.ai",
                cl: "ai",
                refId: "image_1",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [79.5, 47.5, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [317.5, 286.5, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_27",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "3/cubos_para_animacao_2.ai",
                cl: "ai",
                refId: "image_2",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [79.5, 139.5, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [317.5, 286.5, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }, {
            id: "comp_28",
            layers: [{
                ddd: 0,
                ind: 1,
                ty: 4,
                nm: "4/cubos_para_animacao_2 Outlines",
                sr: 1,
                ks: {
                    o: {
                        a: 0,
                        k: 100,
                        ix: 11
                    },
                    r: {
                        a: 0,
                        k: 0,
                        ix: 10
                    },
                    p: {
                        a: 0,
                        k: [-80.5, 47.5, 0],
                        ix: 2
                    },
                    a: {
                        a: 0,
                        k: [317.5, 286.5, 0],
                        ix: 1
                    },
                    s: {
                        a: 0,
                        k: [100, 100, 100],
                        ix: 6
                    }
                },
                ao: 0,
                shapes: [{
                    ty: "gr",
                    it: [{
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                            a: 0,
                            k: {
                                i: [
                                    [0, 0],
                                    [0, 0]
                                ],
                                o: [
                                    [0, 0],
                                    [0, 0]
                                ],
                                v: [
                                    [479, 332],
                                    [479, 425]
                                ],
                                c: !1
                            },
                            ix: 2
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1
                    }, {
                        ty: "st",
                        c: {
                            a: 0,
                            k: [.493999974868, .438999998803, 1, 1],
                            ix: 3
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 4
                        },
                        w: {
                            a: 0,
                            k: 2,
                            ix: 5
                        },
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1
                    }, {
                        ty: "fl",
                        c: {
                            a: 0,
                            k: [.097999999102, .144999994016, .322000002394, 1],
                            ix: 4
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 5
                        },
                        r: 1,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1
                    }, {
                        ty: "tr",
                        p: {
                            a: 0,
                            k: [0, 0],
                            ix: 2
                        },
                        a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1
                        },
                        s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 6
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 7
                        },
                        sk: {
                            a: 0,
                            k: 0,
                            ix: 4
                        },
                        sa: {
                            a: 0,
                            k: 0,
                            ix: 5
                        },
                        nm: "Transform"
                    }],
                    nm: "Shape 2",
                    np: 3,
                    cix: 2,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: !1
                }, {
                    ty: "gr",
                    it: [{
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                            a: 0,
                            k: {
                                i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0]
                                ],
                                o: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0]
                                ],
                                v: [
                                    [399, 286],
                                    [479, 331.5],
                                    [559, 286]
                                ],
                                c: !1
                            },
                            ix: 2
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1
                    }, {
                        ty: "st",
                        c: {
                            a: 0,
                            k: [.493999974868, .438999998803, 1, 1],
                            ix: 3
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 4
                        },
                        w: {
                            a: 0,
                            k: 2,
                            ix: 5
                        },
                        lc: 1,
                        lj: 1,
                        ml: 4,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1
                    }, {
                        ty: "fl",
                        c: {
                            a: 0,
                            k: [.097999999102, .144999994016, .322000002394, 1],
                            ix: 4
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 5
                        },
                        r: 1,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1
                    }, {
                        ty: "tr",
                        p: {
                            a: 0,
                            k: [0, 0],
                            ix: 2
                        },
                        a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1
                        },
                        s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 6
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 7
                        },
                        sk: {
                            a: 0,
                            k: 0,
                            ix: 4
                        },
                        sa: {
                            a: 0,
                            k: 0,
                            ix: 5
                        },
                        nm: "Transform"
                    }],
                    nm: "Shape 1",
                    np: 3,
                    cix: 2,
                    ix: 2,
                    mn: "ADBE Vector Group",
                    hd: !1
                }, {
                    ty: "gr",
                    it: [{
                        ty: "st",
                        c: {
                            a: 0,
                            k: [.493999974868, .438999998803, 1, 1],
                            ix: 3
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 4
                        },
                        w: {
                            a: 0,
                            k: 2,
                            ix: 5
                        },
                        lc: 2,
                        lj: 2,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1
                    }, {
                        ty: "tr",
                        p: {
                            a: 0,
                            k: [0, 0],
                            ix: 2
                        },
                        a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1
                        },
                        s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 6
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 7
                        },
                        sk: {
                            a: 0,
                            k: 0,
                            ix: 4
                        },
                        sa: {
                            a: 0,
                            k: 0,
                            ix: 5
                        },
                        nm: "Transform"
                    }],
                    nm: "Group 1",
                    np: 1,
                    cix: 2,
                    ix: 3,
                    mn: "ADBE Vector Group",
                    hd: !1
                }, {
                    ty: "gr",
                    it: [{
                        ty: "st",
                        c: {
                            a: 0,
                            k: [.493999974868, .438999998803, 1, 1],
                            ix: 3
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 4
                        },
                        w: {
                            a: 0,
                            k: 2,
                            ix: 5
                        },
                        lc: 2,
                        lj: 2,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1
                    }, {
                        ty: "fl",
                        c: {
                            a: 0,
                            k: [.097999999102, .144999994016, .322000002394, 1],
                            ix: 4
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 5
                        },
                        r: 1,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1
                    }, {
                        ty: "tr",
                        p: {
                            a: 0,
                            k: [479.038, 309.487],
                            ix: 2
                        },
                        a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1
                        },
                        s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 6
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 7
                        },
                        sk: {
                            a: 0,
                            k: 0,
                            ix: 4
                        },
                        sa: {
                            a: 0,
                            k: 0,
                            ix: 5
                        },
                        nm: "Transform"
                    }],
                    nm: "Group 2",
                    np: 2,
                    cix: 2,
                    ix: 4,
                    mn: "ADBE Vector Group",
                    hd: !1
                }, {
                    ty: "gr",
                    it: [{
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                            a: 0,
                            k: {
                                i: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0]
                                ],
                                o: [
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0],
                                    [0, 0]
                                ],
                                v: [
                                    [-80, -46.15],
                                    [-80, 46.25],
                                    [0, 92.35],
                                    [80, 46.25],
                                    [80, -46.15],
                                    [0, -92.35]
                                ],
                                c: !0
                            },
                            ix: 2
                        },
                        nm: "Path 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: !1
                    }, {
                        ty: "st",
                        c: {
                            a: 0,
                            k: [.493999974868, .438999998803, 1, 1],
                            ix: 3
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 4
                        },
                        w: {
                            a: 0,
                            k: 2,
                            ix: 5
                        },
                        lc: 2,
                        lj: 2,
                        nm: "Stroke 1",
                        mn: "ADBE Vector Graphic - Stroke",
                        hd: !1
                    }, {
                        ty: "fl",
                        c: {
                            a: 0,
                            k: [.097999999102, .144999994016, .322000002394, 1],
                            ix: 4
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 5
                        },
                        r: 1,
                        nm: "Fill 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: !1
                    }, {
                        ty: "tr",
                        p: {
                            a: 0,
                            k: [479.038, 332.537],
                            ix: 2
                        },
                        a: {
                            a: 0,
                            k: [0, 0],
                            ix: 1
                        },
                        s: {
                            a: 0,
                            k: [100, 100],
                            ix: 3
                        },
                        r: {
                            a: 0,
                            k: 0,
                            ix: 6
                        },
                        o: {
                            a: 0,
                            k: 100,
                            ix: 7
                        },
                        sk: {
                            a: 0,
                            k: 0,
                            ix: 4
                        },
                        sa: {
                            a: 0,
                            k: 0,
                            ix: 5
                        },
                        nm: "Transform"
                    }],
                    nm: "Group 3",
                    np: 3,
                    cix: 2,
                    ix: 5,
                    mn: "ADBE Vector Group",
                    hd: !1
                }],
                ip: 0,
                op: 288,
                st: 0,
                bm: 0
            }]
        }],
        layers: [{
            ddd: 0,
            ind: 2,
            ty: 0,
            nm: "1",
            refId: "comp_25",
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 48,
                        s: [0],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 72,
                        s: [100],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 170,
                        s: [100],
                        e: [0]
                    }, {
                        t: 190
                    }],
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .279,
                            y: 1
                        },
                        o: {
                            x: .317,
                            y: .194
                        },
                        n: "0p279_1_0p317_0p194",
                        t: 0,
                        s: [189.5, 193, 0],
                        e: [506.5, 377, 0],
                        to: [52.8333320617676, 30.6666660308838, 0],
                        ti: [-52.8333320617676, -30.6666660308838, 0]
                    }, {
                        i: {
                            x: .279,
                            y: .279
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p279_0p279_0p167_0p167",
                        t: 95,
                        s: [506.5, 377, 0],
                        e: [506.5, 377, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .73,
                            y: .649
                        },
                        o: {
                            x: .905,
                            y: 0
                        },
                        n: "0p73_0p649_0p905_0",
                        t: 121,
                        s: [506.5, 377, 0],
                        e: [189.5, 193, 0],
                        to: [-52.8333320617676, -30.6666660308838, 0],
                        ti: [52.8333320617676, 30.6666660308838, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutQuart(t, b, c, d) {\n    if ((t /= d / 2) < 1)\n        return sum(mul(mul(mul(mul(div(c, 2), t), t), t), t), b);\n    return sum(mul(div($bm_neg(c), 2), sub(mul(mul(mul(t -= 2, t), t), t), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutQuart(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutQuart(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutQuart(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutQuart(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [80, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833, .833, .833],
                            y: [.833, .833, .833]
                        },
                        o: {
                            x: [.167, .167, .167],
                            y: [.167, .167, .167]
                        },
                        n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        t: 76,
                        s: [100, 100, 100],
                        e: [50, 50, 100]
                    }, {
                        i: {
                            x: [.833, .833, .833],
                            y: [.833, .833, .833]
                        },
                        o: {
                            x: [.167, .167, .167],
                            y: [.167, .167, .167]
                        },
                        n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        t: 84,
                        s: [50, 50, 100],
                        e: [50, 50, 100]
                    }, {
                        i: {
                            x: [.833, .833, .833],
                            y: [.833, .833, .833]
                        },
                        o: {
                            x: [.167, .167, .167],
                            y: [.167, .167, .167]
                        },
                        n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        t: 106,
                        s: [50, 50, 100],
                        e: [100, 100, 100]
                    }, {
                        t: 116
                    }],
                    ix: 6,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutBack(t, b, c, d) {\n    if ((t /= d / 2) < 1)\n        return sum(mul(div(c, 2), mul(mul(t, t), sub(mul(sum(s *= 1.525, 1), t), s))), b);\n    return sum(mul(div(c, 2), sum(mul(mul(t -= 2, t), sum(mul(sum(s *= 1.525, 1), t), s)), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutBack(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutBack(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutBack(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutBack(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                }
            },
            ao: 0,
            w: 163,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 3,
            ty: 0,
            nm: "2",
            refId: "comp_26",
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 48,
                        s: [0],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 66,
                        s: [100],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 147,
                        s: [100],
                        e: [0]
                    }, {
                        t: 160
                    }],
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [587.5, 758.5, 0],
                        e: [587.5, 518.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 95,
                        s: [587.5, 518.5, 0],
                        e: [587.5, 518.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 131,
                        s: [587.5, 518.5, 0],
                        e: [587.5, 758.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        t: 186
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutQuart(t, b, c, d) {\n    if ((t /= d / 2) < 1)\n        return sum(mul(mul(mul(mul(div(c, 2), t), t), t), t), b);\n    return sum(mul(div($bm_neg(c), 2), sub(mul(mul(mul(t -= 2, t), t), t), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutQuart(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutQuart(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutQuart(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutQuart(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [81, 95, 0],
                    ix: 1
                },
                s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6
                }
            },
            ao: 0,
            w: 162,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 4,
            ty: 0,
            nm: "3",
            refId: "comp_27",
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 48,
                        s: [0],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 62,
                        s: [100],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 166,
                        s: [100],
                        e: [0]
                    }, {
                        t: 179
                    }],
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .292,
                            y: 1
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p292_1_0p167_0p167",
                        t: 0,
                        s: [935.5, 218.5, 0],
                        e: [587.5, 423.5, 0],
                        to: [-58, 34.1666679382324, 0],
                        ti: [58, -34.1666679382324, 0]
                    }, {
                        i: {
                            x: .292,
                            y: .292
                        },
                        o: {
                            x: .333,
                            y: .333
                        },
                        n: "0p292_0p292_0p333_0p333",
                        t: 95,
                        s: [587.5, 423.5, 0],
                        e: [587.5, 423.5, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .333,
                            y: 0
                        },
                        n: "0p833_0p833_0p333_0",
                        t: 118,
                        s: [587.5, 423.5, 0],
                        e: [935.5, 218.5, 0],
                        to: [58, -34.1666679382324, 0],
                        ti: [-58, 34.1666679382324, 0]
                    }, {
                        t: 287
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutQuart(t, b, c, d) {\n    if ((t /= d / 2) < 1)\n        return sum(mul(mul(mul(mul(div(c, 2), t), t), t), t), b);\n    return sum(mul(div($bm_neg(c), 2), sub(mul(mul(mul(t -= 2, t), t), t), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutQuart(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutQuart(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutQuart(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutQuart(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [81, 92, 0],
                    ix: 1
                },
                s: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833, .833, .833],
                            y: [.833, .833, .833]
                        },
                        o: {
                            x: [.167, .167, .167],
                            y: [.167, .167, .167]
                        },
                        n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        t: 146,
                        s: [100, 100, 100],
                        e: [50, 50, 100]
                    }, {
                        t: 181
                    }],
                    ix: 6,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutExpo(t, b, c, d) {\n    if (t == 0)\n        return b;\n    if (t == d)\n        return sum(b, c);\n    if ((t /= d / 2) < 1)\n        return sum(mul(div(c, 2), Math.pow(2, mul(10, sub(t, 1)))), b);\n    return sum(mul(div(c, 2), sum($bm_neg(Math.pow(2, mul(-10, --t))), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutExpo(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutExpo(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutExpo(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                }
            },
            ao: 0,
            w: 162,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }, {
            ddd: 0,
            ind: 5,
            ty: 0,
            nm: "4",
            refId: "comp_28",
            sr: 1,
            ks: {
                o: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 48,
                        s: [0],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 62,
                        s: [100],
                        e: [100]
                    }, {
                        i: {
                            x: [.833],
                            y: [.833]
                        },
                        o: {
                            x: [.167],
                            y: [.167]
                        },
                        n: ["0p833_0p833_0p167_0p167"],
                        t: 168,
                        s: [100],
                        e: [0]
                    }, {
                        t: 179
                    }],
                    ix: 11
                },
                r: {
                    a: 0,
                    k: 0,
                    ix: 10
                },
                p: {
                    a: 1,
                    k: [{
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 0,
                        s: [1036.5, 682, 0],
                        e: [747.5, 517, 0],
                        to: [-48.1666679382324, -27.5, 0],
                        ti: [48.1666679382324, 27.5, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 95,
                        s: [747.5, 517, 0],
                        e: [747.5, 517, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0]
                    }, {
                        i: {
                            x: .833,
                            y: .833
                        },
                        o: {
                            x: .167,
                            y: .167
                        },
                        n: "0p833_0p833_0p167_0p167",
                        t: 146,
                        s: [747.5, 517, 0],
                        e: [1036.5, 682, 0],
                        to: [48.1666679382324, 27.5, 0],
                        ti: [-48.1666679382324, -27.5, 0]
                    }, {
                        t: 257
                    }],
                    ix: 2,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutQuart(t, b, c, d) {\n    if ((t /= d / 2) < 1)\n        return sum(mul(mul(mul(mul(div(c, 2), t), t), t), t), b);\n    return sum(mul(div($bm_neg(c), 2), sub(mul(mul(mul(t -= 2, t), t), t), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutQuart(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutQuart(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutQuart(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutQuart(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                },
                a: {
                    a: 0,
                    k: [81, 93.5, 0],
                    ix: 1
                },
                s: {
                    a: 1,
                    k: [{
                        i: {
                            x: [.833, .833, .833],
                            y: [.833, .833, .833]
                        },
                        o: {
                            x: [.167, .167, .167],
                            y: [.167, .167, .167]
                        },
                        n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        t: 81,
                        s: [100, 100, 100],
                        e: [50, 50, 100]
                    }, {
                        i: {
                            x: [.833, .833, .833],
                            y: [.833, .833, .833]
                        },
                        o: {
                            x: [.167, .167, .167],
                            y: [.167, .167, .167]
                        },
                        n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        t: 101,
                        s: [50, 50, 100],
                        e: [50, 50, 100]
                    }, {
                        i: {
                            x: [.833, .833, .833],
                            y: [.833, .833, .833]
                        },
                        o: {
                            x: [.167, .167, .167],
                            y: [.167, .167, .167]
                        },
                        n: ["0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167", "0p833_0p833_0p167_0p167"],
                        t: 123,
                        s: [50, 50, 100],
                        e: [100, 100, 100]
                    }, {
                        t: 149
                    }],
                    ix: 6,
                    x: "var $bm_rt;\nvar p = 0.8;\nvar a = 50;\nvar s = 1.70158;\nfunction easeandwizz_inOutBack(t, b, c, d) {\n    if ((t /= d / 2) < 1)\n        return sum(mul(div(c, 2), mul(mul(t, t), sub(mul(sum(s *= 1.525, 1), t), s))), b);\n    return sum(mul(div(c, 2), sum(mul(mul(t -= 2, t), sum(mul(sum(s *= 1.525, 1), t), s)), 2)), b);\n}\nfunction easeAndWizz() {\n    var t, d, sX, eX, sY, eY, sZ, eZ, val1;\n    var n = 0;\n    if (numKeys > 0) {\n        n = nearestKey(time).index;\n        if (key(n).time > time) {\n            n--;\n        }\n    }\n    try {\n        var key1 = key(n);\n        var key2 = key(sum(n, 1));\n    } catch (e) {\n        return null;\n    }\n    var dim = 1;\n    try {\n        key(1)[1].length;\n        dim = 2;\n        key(1)[2].length;\n        dim = 3;\n    } catch (e) {\n    }\n    t = sub(time, key1.time);\n    d = sub(key2.time, key1.time);\n    sX = key1[0];\n    eX = sub(key2[0], key1[0]);\n    if (dim >= 2) {\n        sY = key1[1];\n        eY = sub(key2[1], key1[1]);\n        if (dim >= 3) {\n            sZ = key1[2];\n            eZ = sub(key2[2], key1[2]);\n        }\n    }\n    if (time < key1.time || time > key2.time) {\n        return value;\n    } else {\n        val1 = easeandwizz_inOutBack(t, sX, eX, d, a, p, s);\n        switch (dim) {\n        case 1:\n            return val1;\n            break;\n        case 2:\n            val2 = easeandwizz_inOutBack(t, sY, eY, d, a, p, s);\n            return [\n                val1,\n                val2\n            ];\n            break;\n        case 3:\n            val2 = easeandwizz_inOutBack(t, sY, eY, d, a, p, s);\n            val3 = easeandwizz_inOutBack(t, sZ, eZ, d, a, p, s);\n            return [\n                val1,\n                val2,\n                val3\n            ];\n            break;\n        default:\n            return null;\n        }\n    }\n}\n$bm_rt = easeAndWizz() || value;"
                }
            },
            ao: 0,
            w: 162,
            h: 187,
            ip: 0,
            op: 288,
            st: 0,
            bm: 0
        }]
    },
    TxtType = function(t, e, n) {
        this.toRotate = e, this.el = t, this.loopNum = 0, this.period = parseInt(n, 10) || 2e3, this.txt = "", this.tick(), this.isDeleting = !1
    };
TxtType.prototype.tick = function() {
        var t = this.loopNum % this.toRotate.length,
            e = this.toRotate[t];
        this.isDeleting ? this.txt = e.substring(0, this.txt.length - 1) : this.txt = e.substring(0, this.txt.length + 1), this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
        var n = this,
            i = 200 - 100 * Math.random();
        this.isDeleting && (i /= 2), this.isDeleting || this.txt !== e ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.loopNum++, i = 500) : (i = this.period, this.isDeleting = !0), setTimeout(function() {
            n.tick()
        }, i)
    }, VideosPlayer.prototype.percentual = function(t, e) {
        return t / e * 100
    }, VideosPlayer.prototype.setBoundings = function() {
        this.$track.width = this.$track.offsetWidth, this.$track.left = this.$track.getBoundingClientRect().left, this.$volume.width = this.$volume.offsetWidth, this.$volume.left = this.$volume.getBoundingClientRect().left
    }, VideosPlayer.prototype.playpause = function() {
        this.$video.paused ? this.$video.play() : this.$video.pause()
    }, VideosPlayer.prototype.PercentualThumb = function(t, e, n) {
        var i, r;
        return i = t - e, r = n, this.percentual(i, r)
    }, VideosPlayer.prototype.PercentualVideo = function() {
        return this.percentual(this.$video.currentTime, this.$video.duration)
    },
    VideosPlayer.prototype.PositionThumb = function(t, e) {
        this.$video.duration && (e.style.left = t + "%")
    }, VideosPlayer.prototype.PositionVideo = function(t) {
        if (this.$video.duration) {
            var e = this.$video.duration / 100 * t;
            e < 0 && (e = 0), e > this.$video.duration && (e = this.$video.duration), this.$video.currentTime = e, this.$video.play()
        }
    }, VideosPlayer.prototype.durationchange = function(t) {
        this.enable_drag || this.PositionThumb(this.PercentualVideo(), this.$thumb)
    }, VideosPlayer.prototype.timeupdate = function(t) {
        this.enable_drag || this.PositionThumb(this.PercentualVideo(), this.$thumb)
    }, VideosPlayer.prototype.volumechange = function(t) {
        this.PositionThumb(100 * this.$video.volume, this.$vthumb)
    }, VideosPlayer.prototype.playing = function(t, e, n) {
        addClass(this.$element, "playing")
    }, VideosPlayer.prototype.ended = function(t, e, n) {
        removeClass(this.$element, "playing")
    }, VideosPlayer.prototype.pause = function(t, e, n) {
        removeClass(this.$element, "playing")
    }, VideosPlayer.prototype.RemoveEvents = function(t) {
        this.$video.removeEventListener("timeupdate", this.timeupdate.bind(this)), this.$video.removeEventListener("durationchange", this.durationchange.bind(this)), this.$video.removeEventListener("volumechange", this.volumechange.bind(this)), this.$video.removeEventListener("playing", this.playing.bind(this)), this.$video.removeEventListener("ended", this.ended.bind(this)), this.$video.removeEventListener("pause", this.pause.bind(this))
    }, VideosPlayer.prototype.AddEvents = function(t) {
        this.$video.addEventListener("timeupdate", this.timeupdate.bind(this)), this.$video.addEventListener("durationchange", this.durationchange.bind(this)), this.$video.addEventListener("volumechange", this.volumechange.bind(this)), this.$video.addEventListener("playing", this.playing.bind(this)), this.$video.addEventListener("ended", this.ended.bind(this)), this.$video.addEventListener("pause", this.pause.bind(this))
    }, VideosPlayer.prototype.update = function(t) {
        this.$video = t, this.RemoveEvents(), this.AddEvents(), this.PositionThumb(100 * this.$video.volume, this.$vthumb), NaN != this.$video.duration && this.PositionThumb(this.PercentualVideo(), this.$thumb)
    }, VideosPlayer.prototype.set = function(t) {
        t && this.update(t)
    },
    function() {
        "use strict";

        function t() {
            c.body = document.body, c.$window = $(window), c.$body = $("body"), c.$main = $("main.around-main"), c.$interview = $("div.interviews-modal"), c.$title = $("h1.main-header-title"), c.state = {
                ismobile: c.$body.hasClass("ismobile"),
                isandroid: c.$body.hasClass("AndroidOS"),
                isios: c.$body.hasClass("iOS")
            }, c.methods = {
                validate: {
                    email: function(t) {
                        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(t)
                    }
                }
            }
        }

        function e() {
            function t() {
                r.addClass("open")
            }

            function e() {
                r.removeClass("open")
            }

            function n(t) {
                var e;
                e = 0, c.$interview.hasClass("show") && (c.methods.closeInterview && c.methods.closeInterview(), e = 500), c.methods.pauseVideo && c.methods.pauseVideo(), setTimeout(function() {
                    $("html,body").animate({
                        scrollTop: t - c.$title.height() / 2
                    }, 600)
                }, e)
            }

            function i(t) {
                t.preventDefault();
                var i = $($(this).attr("href"));
                i.length && (n(i.offset().top), e())
            }
            var r, a, s, o;
            r = $("div.main-nav"), a = $("button.main-header-button"), o = $("button.main-nav-button"), s = $("span.main-nav-bg"), a.on("click", t), s.on("click", e), o.on("click", e), r.on("click", "a.main-nav-link", i), $(document).keyup(function(t) {
                27 == t.keyCode && e()
            })
        }

        function n() {
            var t;
            t = $("#discover"), t.find("div.discover-entry").rss("https://medium.com/feed/paratii", {
                dateFormat: "MMM D",
                limit: 3,
                layoutTemplate: '<ul class="discover-list">{entries}</ul>',
                entryTemplate: '<li class="discover-item"><a class="discover-link" href="{url}" target="_blank"><article class="discover-article" role="article"><time class="discover-time" datetime="{date}">{date}</time><h3 class="discover-item-title">{title}</h3></article></a></li>'
            })
        }

        function i() {
            function t(t) {
                var e;
                e = $(t.target), s ? (e.hasClass("subscribe-form-01") ? (o = i.val(), p = c.methods.validate.email(o), l = i.data("alert"), h = e.attr("action") + "?email=" + o) : (u = r.val(), m = a.val(), p = u.length > 2 && c.methods.validate.email(m), l = r.data("alert") || a.data("alert"), h = e.attr("action") + "?who=" + u + "&why=" + m), p || (t.preventDefault(), alert(l))) : t.preventDefault()
            }
            var e, n, i, r, a, s, o, l, h, p, u, m;
            c.$subscribe = $(".subscribe"), $("form.subscribe-form-01").length && function() {
                    e = $("form.subscribe-form-01"), i = e.find('input[name="EMAIL"]'), e.on("submit", t)
                }(), $("form.subscribe-form-02").length && function() {
                    n = $("form.subscribe-form-02 "), r = n.find("input.who"), a = n.find("input.why"), n.on("submit", t)
                }(),
                function() {
                    s = !0, c.$subscribe.removeClass("wait")
                }()
        }

        function r() {
            function t() {
                p && clearTimeout(p), h && clearInterval(h), o.animate({
                    scrollTop: 0
                })
            }

            function e() {
                s.find("img.interviews-article-gif").attr("src", "").attr("src", l)
            }

            function n(n) {
                t(), s && s.removeClass("ontop"), u = window.scrollY, s = $(n), l = s.find("img.interviews-article-gif").attr("src"), o.addClass("show"), s.addClass("ontop active"), p = setTimeout(function() {
                    window.innerWidth < 769 && c.$body.addClass("no-scroll"), e(), h = setInterval(e, 8e3)
                }, 1e3)
            }

            function i() {
                t(), window.innerWidth < 769 && c.$body.removeClass("no-scroll"), o.removeClass("show"), a.removeClass("active"), c.body.scrollTop = u
            }
            var r, a, s, o, l, h, p, u;
            u = 0, r = $("section.interviews"), o = r.find("div.interviews-modal"), a = o.find("article.interviews-article"), r.on("click", "a.interviews-nav-link", function(t) {
                t.preventDefault(), n($(this).attr("href")), ga("send", "event", "Interviews", "open-modal", $(this).data("title"))
            }), r.on("click", "button.interviews-button-back", i), c.methods.closeInterview = i
        }

        function a() {
            var t;
            t = $("section.chapters"), t.on("click", "a.chapters-button", function(t) {
                t.preventDefault(), $(this).toggleClass("open")
            }), t.on("mouseout", "a.chapters-button", function(t) {
                t.preventDefault(), $(this).removeClass("open")
            })
        }

        function s() {
            var t, e, n;
            t = document.getElementsByClassName("teasers-text-typewrite")[0], e = t.getAttribute("data-type"), n = t.getAttribute("data-period"), e = JSON.parse(e), new TxtType(t, e, n);
            var i = document.createElement("style");
            i.type = "text/css", i.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}", document.body.appendChild(i)
        }


        function l() {
            var t = {
                container: document.getElementById("cube-animation-1"),
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: window.animationData1
            };
            bodymovin.loadAnimation(t);
            var e = {
                container: document.getElementById("cube-animation-2"),
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: window.animationData2
            };
            bodymovin.loadAnimation(e);
            var n = {
                container: document.getElementById("cube-animation-3"),
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: window.animationData3
            };
            bodymovin.loadAnimation(n);
            var i = {
                container: document.getElementById("cube-animation-5"),
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: window.animationData5
            };
            bodymovin.loadAnimation(i)
        }

        function h(t) {
            function e() {
                t && t()
            }

            function n() {
                4 == a.readyState && (clearInterval(s), r.addClass("end"), $(a).css({
                    minWidth: a.videoWidth
                }), a.addEventListener("ended", i), setTimeout(function() {
                    a.play()
                }, 400))
            }

            function i() {
                r.find("video").remove(), e()
            }
            var r, a, s;
            r = $(".intro"), a = c.state.ismobile ? r.find("img")[0] : r.find("video")[0], c.state.ismobile ? function() {
                var t = new Image;
                t.onload = function() {
                    r.addClass("end"), setTimeout(function() {
                        $(a).addClass("show"), setTimeout(e, 3e3)
                    }, 400)
                }, t.src = a.src
            }() : (n(), a.load(), s = setInterval(n, 100))
        }

        function p() {
            c.body.scrollTop = 0, c.$body.addClass("start"), setTimeout(s, 1e3), l()
        }
        var c = {};
        ! function() {
            t(), c.body.scrollTop = 0, $("div.main-nav").length && e(), $("section.chapters").length && a(), $("section.interviews").length && r(), $("section.subscribe").length && i(), $("#discover").length && n(), $(".intro").length ? h(p) : p()
        }()
    }();
