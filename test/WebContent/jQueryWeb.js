/* jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 */
(function(e, t) {
	var n, r, i = typeof t,
		o = e.location,
		a = e.document,
		s = a.documentElement,
		l = e.jQuery,
		u = e.$,
		c = {},
		p = [],
		f = "1.10.2",
		d = p.concat,
		h = p.push,
		g = p.slice,
		m = p.indexOf,
		y = c.toString,
		v = c.hasOwnProperty,
		b = f.trim,
		x = function(e, t) {
			return new x.fn.init(e, t, r)
		},
		w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		T = /\S+/g,
		C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		E = /^[\],:{}\s]*$/,
		S = /(?:^|:|,)(?:\s*\[)+/g,
		A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		D = /^-ms-/,
		L = /-([\da-z])/gi,
		H = function(e, t) {
			return t.toUpperCase()
		},
		q = function(e) {
			(a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
		},
		_ = function() {
			a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
		};
	x.fn = x.prototype = {
		jquery: f,
		constructor: x,
		init: function(e, n, r) {
			var i, o;
			if (!e) return this;
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
				if (i[1]) {
					if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))
						for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					return this
				}
				if (o = a.getElementById(i[2]), o && o.parentNode) {
					if (o.id !== i[2]) return r.find(e);
					this.length = 1, this[0] = o
				}
				return this.context = a, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
		},
		selector: "",
		length: 0,
		toArray: function() {
			return g.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return x.each(this, e, t)
		},
		ready: function(e) {
			return x.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(g.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(x.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: h,
		sort: [].sort,
		splice: [].splice
	}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
		var e, n, r, i, o, a, s = arguments[0] || {},
			l = 1,
			u = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)
			if (null != (o = arguments[l]))
				for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
		return s
	}, x.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		noConflict: function(t) {
			return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? x.readyWait++ : x.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--x.readyWait : !x.isReady) {
				if (!a.body) return setTimeout(x.ready);
				x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === x.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === x.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			var n;
			if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
			try {
				if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (r) {
				return !1
			}
			if (x.support.ownLast)
				for (n in e) return v.call(e, n);
			for (n in e);
			return n === t || v.call(e, n)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || a;
			var r = k.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
		},
		parseJSON: function(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
		},
		parseXML: function(n) {
			var r, i;
			if (!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
		},
		noop: function() {},
		globalEval: function(t) {
			t && x.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(D, "ms-").replace(L, H)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e);
			if (n) {
				if (a) {
					for (; o > i; i++)
						if (r = t.apply(e[i], n), r === !1) break
				} else
					for (i in e)
						if (r = t.apply(e[i], n), r === !1) break
			} else if (a) {
				for (; o > i; i++)
					if (r = t.call(e[i], i, e[i]), r === !1) break
			} else
				for (i in e)
					if (r = t.call(e[i], i, e[i]), r === !1) break;
			return e
		},
		trim: b && !b.call("\ufeff\u00a0") ? function(e) {
			return null == e ? "" : b.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(C, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (m) return m.call(t, e, n);
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, n) {
			var r = n.length,
				i = e.length,
				o = 0;
			if ("number" == typeof r)
				for (; r > o; o++) e[i++] = n[o];
			else
				while (n[o] !== t) e[i++] = n[o++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				o = 0,
				a = e.length;
			for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e),
				s = [];
			if (a)
				for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
			else
				for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
			return d.apply([], s)
		},
		guid: 1,
		proxy: function(e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
				return e.apply(n || this, r.concat(g.call(arguments)))
			}, i.guid = e.guid = e.guid || x.guid++, i) : t
		},
		access: function(e, n, r, i, o, a, s) {
			var l = 0,
				u = e.length,
				c = null == r;
			if ("object" === x.type(r)) {
				o = !0;
				for (l in r) x.access(e, n, l, r[l], !0, a, s)
			} else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
					return c.call(x(e), n)
				})), n))
				for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
			return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
		},
		now: function() {
			return (new Date).getTime()
		},
		swap: function(e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		}
	}), x.ready.promise = function(t) {
		if (!n)
			if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);
			else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);
		else {
			a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
			var r = !1;
			try {
				r = null == e.frameElement && a.documentElement
			} catch (i) {}
			r && r.doScroll && function o() {
				if (!x.isReady) {
					try {
						r.doScroll("left")
					} catch (e) {
						return setTimeout(o, 50)
					}
					_(), x.ready()
				}
			}()
		}
		return n.promise(t)
	}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		c["[object " + t + "]"] = t.toLowerCase()
	});

	function M(e) {
		var t = e.length,
			n = x.type(e);
		return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	r = x(a),
		function(e, t) {
			var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
				w = e.document,
				T = 0,
				C = 0,
				N = st(),
				k = st(),
				E = st(),
				S = !1,
				A = function(e, t) {
					return e === t ? (S = !0, 0) : 0
				},
				j = typeof t,
				D = 1 << 31,
				L = {}.hasOwnProperty,
				H = [],
				q = H.pop,
				_ = H.push,
				M = H.push,
				O = H.slice,
				F = H.indexOf || function(e) {
					var t = 0,
						n = this.length;
					for (; n > t; t++)
						if (this[t] === e) return t;
					return -1
				},
				B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				P = "[\\x20\\t\\r\\n\\f]",
				R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				W = R.replace("w", "w#"),
				$ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
				I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
				z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
				X = RegExp("^" + P + "*," + P + "*"),
				U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
				V = RegExp(P + "*[+~]"),
				Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
				J = RegExp(I),
				G = RegExp("^" + W + "$"),
				Q = {
					ID: RegExp("^#(" + R + ")"),
					CLASS: RegExp("^\\.(" + R + ")"),
					TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
					ATTR: RegExp("^" + $),
					PSEUDO: RegExp("^" + I),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
					bool: RegExp("^(?:" + B + ")$", "i"),
					needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
				},
				K = /^[^{]+\{\s*\[native \w/,
				Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				et = /^(?:input|select|textarea|button)$/i,
				tt = /^h\d$/i,
				nt = /'|\\/g,
				rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
				it = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
				};
			try {
				M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
			} catch (ot) {
				M = {
					apply: H.length ? function(e, t) {
						_.apply(e, O.call(t))
					} : function(e, t) {
						var n = e.length,
							r = 0;
						while (e[n++] = t[r++]);
						e.length = n - 1
					}
				}
			}

			function at(e, t, n, i) {
				var o, a, s, l, u, c, d, m, y, x;
				if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
				if (1 !== (l = t.nodeType) && 9 !== l) return [];
				if (h && !i) {
					if (o = Z.exec(e))
						if (s = o[1]) {
							if (9 === l) {
								if (a = t.getElementById(s), !a || !a.parentNode) return n;
								if (a.id === s) return n.push(a), n
							} else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n
						} else {
							if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
							if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n
						}
					if (r.qsa && (!g || !g.test(e))) {
						if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
							c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
							while (u--) c[u] = m + yt(c[u]);
							y = V.test(e) && t.parentNode || t, x = c.join(",")
						}
						if (x) try {
							return M.apply(n, y.querySelectorAll(x)), n
						} catch (T) {} finally {
							d || t.removeAttribute("id")
						}
					}
				}
				return kt(e.replace(z, "$1"), t, n, i)
			}

			function st() {
				var e = [];

				function t(n, r) {
					return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
				}
				return t
			}

			function lt(e) {
				return e[b] = !0, e
			}

			function ut(e) {
				var t = f.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function ct(e, t) {
				var n = e.split("|"),
					r = e.length;
				while (r--) o.attrHandle[n[r]] = t
			}

			function pt(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
				if (r) return r;
				if (n)
					while (n = n.nextSibling)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function ft(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function dt(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function ht(e) {
				return lt(function(t) {
					return t = +t, lt(function(n, r) {
						var i, o = e([], n.length, t),
							a = o.length;
						while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			s = at.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, r = at.support = {}, p = at.setDocument = function(e) {
				var n = e ? e.ownerDocument || e : w,
					i = n.defaultView;
				return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
					p()
				}), r.attributes = ut(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), r.getElementsByTagName = ut(function(e) {
					return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
				}), r.getElementsByClassName = ut(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), r.getById = ut(function(e) {
					return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
				}), r.getById ? (o.find.ID = function(e, t) {
					if (typeof t.getElementById !== j && h) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, o.filter.ID = function(e) {
					var t = e.replace(rt, it);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete o.find.ID, o.filter.ID = function(e) {
					var t = e.replace(rt, it);
					return function(e) {
						var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), o.find.TAG = r.getElementsByTagName ? function(e, n) {
					return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						while (n = o[i++]) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, o.find.CLASS = r.getElementsByClassName && function(e, n) {
					return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
				}, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
				}), ut(function(e) {
					var t = n.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
				})), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
					r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
				}), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						while (t = t.parentNode)
							if (t === e) return !0;
					return !1
				}, A = d.compareDocumentPosition ? function(e, t) {
					if (e === t) return S = !0, 0;
					var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
					return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, t) {
					var r, i = 0,
						o = e.parentNode,
						a = t.parentNode,
						s = [e],
						l = [t];
					if (e === t) return S = !0, 0;
					if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
					if (o === a) return pt(e, t);
					r = e;
					while (r = r.parentNode) s.unshift(r);
					r = t;
					while (r = r.parentNode) l.unshift(r);
					while (s[i] === l[i]) i++;
					return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
				}, n) : f
			}, at.matches = function(e, t) {
				return at(e, null, null, t)
			}, at.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
					var n = y.call(e, t);
					if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (i) {}
				return at(t, f, null, [e]).length > 0
			}, at.contains = function(e, t) {
				return (e.ownerDocument || e) !== f && p(e), v(e, t)
			}, at.attr = function(e, n) {
				(e.ownerDocument || e) !== f && p(e);
				var i = o.attrHandle[n.toLowerCase()],
					a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
				return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
			}, at.error = function(e) {
				throw Error("Syntax error, unrecognized expression: " + e)
			}, at.uniqueSort = function(e) {
				var t, n = [],
					i = 0,
					o = 0;
				if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
					while (t = e[o++]) t === e[o] && (i = n.push(o));
					while (i--) e.splice(n[i], 1)
				}
				return e
			}, a = at.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					for (; t = e[r]; r++) n += a(t);
				return n
			}, o = at.selectors = {
				cacheLength: 50,
				createPseudo: lt,
				match: Q,
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
					ATTR: function(e) {
						return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
					},
					PSEUDO: function(e) {
						var n, r = !e[5] && e[2];
						return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(rt, it).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = N[e + " "];
						return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, n) {
						return function(r) {
							var i = at.attr(r, e);
							return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ? function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								y = s && t.nodeName.toLowerCase(),
								v = !l && !s;
							if (m) {
								if (o) {
									while (g) {
										p = t;
										while (p = p[g])
											if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
										h = g = "only" === e && !h && "nextSibling"
									}
									return !0
								}
								if (h = [a ? m.firstChild : m.lastChild], a && v) {
									c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
									while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
										if (1 === p.nodeType && ++f && p === t) {
											c[e] = [T, d, f];
											break
										}
								} else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];
								else
									while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
										if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
								return f -= i, f === r || 0 === f % r && f / r >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
						return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
							var i, o = r(e, t),
								a = o.length;
							while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
						}) : function(e) {
							return r(e, 0, n)
						}) : r
					}
				},
				pseudos: {
					not: lt(function(e) {
						var t = [],
							n = [],
							r = l(e.replace(z, "$1"));
						return r[b] ? lt(function(e, t, n, i) {
							var o, a = r(e, null, i, []),
								s = e.length;
							while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function(e, i, o) {
							return t[0] = e, r(t, null, o, n), !n.pop()
						}
					}),
					has: lt(function(e) {
						return function(t) {
							return at(e, t).length > 0
						}
					}),
					contains: lt(function(e) {
						return function(t) {
							return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
						}
					}),
					lang: lt(function(e) {
						return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === d
					},
					focus: function(e) {
						return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !o.pseudos.empty(e)
					},
					header: function(e) {
						return tt.test(e.nodeName)
					},
					input: function(e) {
						return et.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: ht(function() {
						return [0]
					}),
					last: ht(function(e, t) {
						return [t - 1]
					}),
					eq: ht(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: ht(function(e, t) {
						var n = 0;
						for (; t > n; n += 2) e.push(n);
						return e
					}),
					odd: ht(function(e, t) {
						var n = 1;
						for (; t > n; n += 2) e.push(n);
						return e
					}),
					lt: ht(function(e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; --r >= 0;) e.push(r);
						return e
					}),
					gt: ht(function(e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; t > ++r;) e.push(r);
						return e
					})
				}
			}, o.pseudos.nth = o.pseudos.eq;
			for (n in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) o.pseudos[n] = ft(n);
			for (n in {
					submit: !0,
					reset: !0
				}) o.pseudos[n] = dt(n);

			function gt() {}
			gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

			function mt(e, t) {
				var n, r, i, a, s, l, u, c = k[e + " "];
				if (c) return t ? 0 : c.slice(0);
				s = e, l = [], u = o.preFilter;
				while (s) {
					(!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace(z, " ")
					}), s = s.slice(n.length));
					for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
						value: n,
						type: a,
						matches: r
					}), s = s.slice(n.length));
					if (!n) break
				}
				return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
			}

			function yt(e) {
				var t = 0,
					n = e.length,
					r = "";
				for (; n > t; t++) r += e[t].value;
				return r
			}

			function vt(e, t, n) {
				var r = t.dir,
					o = n && "parentNode" === r,
					a = C++;
				return t.first ? function(t, n, i) {
					while (t = t[r])
						if (1 === t.nodeType || o) return e(t, n, i)
				} : function(t, n, s) {
					var l, u, c, p = T + " " + a;
					if (s) {
						while (t = t[r])
							if ((1 === t.nodeType || o) && e(t, n, s)) return !0
					} else
						while (t = t[r])
							if (1 === t.nodeType || o)
								if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
									if ((l = u[1]) === !0 || l === i) return l === !0
								} else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0
				}
			}

			function bt(e) {
				return e.length > 1 ? function(t, n, r) {
					var i = e.length;
					while (i--)
						if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function xt(e, t, n, r, i) {
				var o, a = [],
					s = 0,
					l = e.length,
					u = null != t;
				for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
				return a
			}

			function wt(e, t, n, r, i, o) {
				return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
					var u, c, p, f = [],
						d = [],
						h = a.length,
						g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
						m = !e || !o && t ? g : xt(g, f, e, s, l),
						y = n ? i || (o ? e : h || r) ? [] : a : m;
					if (n && n(m, y, s, l), r) {
						u = xt(y, d), r(u, [], s, l), c = u.length;
						while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
					}
					if (o) {
						if (i || e) {
							if (i) {
								u = [], c = y.length;
								while (c--)(p = y[c]) && u.push(m[c] = p);
								i(null, y = [], u, l)
							}
							c = y.length;
							while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
						}
					} else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
				})
			}

			function Tt(e) {
				var t, n, r, i = e.length,
					a = o.relative[e[0].type],
					s = a || o.relative[" "],
					l = a ? 1 : 0,
					c = vt(function(e) {
						return e === t
					}, s, !0),
					p = vt(function(e) {
						return F.call(t, e) > -1
					}, s, !0),
					f = [function(e, n, r) {
						return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
					}];
				for (; i > l; l++)
					if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];
					else {
						if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
							for (r = ++l; i > r; r++)
								if (o.relative[e[r].type]) break;
							return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
								value: " " === e[l - 2].type ? "*" : ""
							})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
						}
						f.push(n)
					}
				return bt(f)
			}

			function Ct(e, t) {
				var n = 0,
					r = t.length > 0,
					a = e.length > 0,
					s = function(s, l, c, p, d) {
						var h, g, m, y = [],
							v = 0,
							b = "0",
							x = s && [],
							w = null != d,
							C = u,
							N = s || a && o.find.TAG("*", d && l.parentNode || l),
							k = T += null == C ? 1 : Math.random() || .1;
						for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
							if (a && h) {
								g = 0;
								while (m = e[g++])
									if (m(h, l, c)) {
										p.push(h);
										break
									}
								w && (T = k, i = ++n)
							}
							r && ((h = !m && h) && v--, s && x.push(h))
						}
						if (v += b, r && b !== v) {
							g = 0;
							while (m = t[g++]) m(x, y, l, c);
							if (s) {
								if (v > 0)
									while (b--) x[b] || y[b] || (y[b] = q.call(p));
								y = xt(y)
							}
							M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
						}
						return w && (T = k, u = C), x
					};
				return r ? lt(s) : s
			}
			l = at.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = E[e + " "];
				if (!o) {
					t || (t = mt(e)), n = t.length;
					while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
					o = E(e, Ct(i, r))
				}
				return o
			};

			function Nt(e, t, n) {
				var r = 0,
					i = t.length;
				for (; i > r; r++) at(e, t[r], n);
				return n
			}

			function kt(e, t, n, i) {
				var a, s, u, c, p, f = mt(e);
				if (!i && 1 === f.length) {
					if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
						if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
						e = e.slice(s.shift().value.length)
					}
					a = Q.needsContext.test(e) ? 0 : s.length;
					while (a--) {
						if (u = s[a], o.relative[c = u.type]) break;
						if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
							if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
							break
						}
					}
				}
				return l(e, f)(i, t, !h, n, V.test(e)), n
			}
			r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
				return 1 & e.compareDocumentPosition(f.createElement("div"))
			}), ut(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || ct("type|href|height|width", function(e, n, r) {
				return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
			}), r.attributes && ut(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || ct("value", function(e, n, r) {
				return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
			}), ut(function(e) {
				return null == e.getAttribute("disabled")
			}) || ct(B, function(e, n, r) {
				var i;
				return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
			}), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
		}(e);
	var O = {};

	function F(e) {
		var t = O[e] = {};
		return x.each(e.match(T) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	x.Callbacks = function(e) {
		e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
		var n, r, i, o, a, s, l = [],
			u = !e.once && [],
			c = function(t) {
				for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)
					if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						r = !1;
						break
					}
				n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
			},
			p = {
				add: function() {
					if (l) {
						var t = l.length;
						(function i(t) {
							x.each(t, function(t, n) {
								var r = x.type(n);
								"function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
							})
						})(arguments), n ? o = l.length : r && (s = t, c(r))
					}
					return this
				},
				remove: function() {
					return l && x.each(arguments, function(e, t) {
						var r;
						while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
					}), this
				},
				has: function(e) {
					return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], o = 0, this
				},
				disable: function() {
					return l = u = r = t, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return u = t, r || p.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
				},
				fire: function() {
					return p.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return p
	}, x.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", x.Callbacks("once memory"), "resolved"],
					["reject", "fail", x.Callbacks("once memory"), "rejected"],
					["notify", "progress", x.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return x.Deferred(function(n) {
							x.each(t, function(t, o) {
								var a = o[0],
									s = x.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? x.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, x.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t = 0,
				n = g.call(arguments),
				r = n.length,
				i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : x.Deferred(),
				a = function(e, t, n) {
					return function(r) {
						t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				},
				s, l, u;
			if (r > 1)
				for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
			return i || o.resolveWith(u, n), o.promise()
		}
	}), x.support = function(t) {
		var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
		s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
		try {
			delete d.test
		} catch (h) {
			t.deleteExpando = !1
		}
		o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (f in {
				submit: !0,
				change: !0,
				focusin: !0
			}) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
		d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
		for (f in x(t)) break;
		return t.ownLast = "0" !== f, x(function() {
			var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				l = a.getElementsByTagName("body")[0];
			l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === d.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
		}), n = s = l = u = r = o = null, t
	}({});
	var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		P = /([A-Z])/g;

	function R(e, n, r, i) {
		if (x.acceptData(e)) {
			var o, a, s = x.expando,
				l = e.nodeType,
				u = l ? x.cache : e,
				c = l ? e[s] : e[s] && s;
			if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
				toJSON: x.noop
			}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
		}
	}

	function W(e, t, n) {
		if (x.acceptData(e)) {
			var r, i, o = e.nodeType,
				a = o ? x.cache : e,
				s = o ? e[x.expando] : x.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
					while (i--) delete r[t[i]];
					if (n ? !I(r) : !x.isEmptyObject(r)) return
				}(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
			}
		}
	}
	x.extend({
		cache: {},
		noData: {
			applet: !0,
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
		},
		data: function(e, t, n) {
			return R(e, t, n)
		},
		removeData: function(e, t) {
			return W(e, t)
		},
		_data: function(e, t, n) {
			return R(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return W(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), x.fn.extend({
		data: function(e, n) {
			var r, i, o = null,
				a = 0,
				s = this[0];
			if (e === t) {
				if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
					for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
					x._data(s, "parsedAttrs", !0)
				}
				return o
			}
			return "object" == typeof e ? this.each(function() {
				x.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				x.data(this, e, n)
			}) : s ? $(s, e, x.data(s, e)) : null
		},
		removeData: function(e) {
			return this.each(function() {
				x.removeData(this, e)
			})
		}
	});

	function $(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(P, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
				} catch (o) {}
				x.data(e, n, r)
			} else r = t
		}
		return r
	}

	function I(e) {
		var t;
		for (t in e)
			if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	x.extend({
		queue: function(e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = x.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = x._queueHooks(e, t),
				a = function() {
					x.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return x._data(e, n) || x._data(e, n, {
				empty: x.Callbacks("once memory").add(function() {
					x._removeData(e, t + "queue"), x._removeData(e, n)
				})
			})
		}
	}), x.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = x.queue(this, e, n);
				x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				x.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
				o = x.Deferred(),
				a = this,
				s = this.length,
				l = function() {
					--i || o.resolveWith(a, [a])
				};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
			return l(), o.promise(n)
		}
	});
	var z, X, U = /[\t\r\n\f]/g,
		V = /\r/g,
		Y = /^(?:input|select|textarea|button|object)$/i,
		J = /^(?:a|area)$/i,
		G = /^(?:checked|selected)$/i,
		Q = x.support.getSetAttribute,
		K = x.support.input;
	x.fn.extend({
		attr: function(e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				x.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = x.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).addClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(T) || []; s > a; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
						o = 0;
						while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
						n.className = x.trim(r)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				l = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).removeClass(e.call(this, t, this.className))
			});
			if (l)
				for (t = (e || "").match(T) || []; s > a; a++)
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
						o = 0;
						while (i = t[o++])
							while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
						n.className = e ? x.trim(r) : ""
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) {
					var t, r = 0,
						o = x(this),
						a = e.match(T) || [];
					while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				} else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; r > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, r, i, o = this[0]; {
				if (arguments.length) return i = x.isFunction(e), this.each(function(n) {
					var o;
					1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
						return null == e ? "" : e + ""
					})), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				});
				if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
			}
		}
	}), x.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = x.find.attr(e, "value");
					return null != t ? t : e.text
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						o = "select-one" === e.type || 0 > i,
						a = o ? null : [],
						s = o ? i + 1 : r.length,
						l = 0 > i ? s : o ? i : 0;
					for (; s > l; l++)
						if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
							if (t = x(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = x.makeArray(t),
						a = i.length;
					while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, n, r) {
			var o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(T);
			if (o && 1 === e.nodeType)
				while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = x.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), X = {
		set: function(e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
		var r = x.expr.attrHandle[n] || x.find.attr;
		x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
			var o = x.expr.attrHandle[n],
				a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
			return x.expr.attrHandle[n] = o, a
		} : function(e, n, r) {
			return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
		}
	}), K && Q || (x.attrHooks.value = {
		set: function(e, n, r) {
			return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
		}
	}), Q || (z = {
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
		var i;
		return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
	}, x.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && r.specified ? r.value : t
		},
		set: z.set
	}, x.attrHooks.contenteditable = {
		set: function(e, t, n) {
			z.set(e, "" === t ? !1 : t, n)
		}
	}, x.each(["width", "height"], function(e, n) {
		x.attrHooks[n] = {
			set: function(e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		}
	})), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
		x.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), x.support.style || (x.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), x.support.optSelected || (x.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		x.propFix[this.toLowerCase()] = this
	}), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
		x.valHooks[this] = {
			set: function(e, n) {
				return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
			}
		}, x.support.checkOn || (x.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
		et = /^key/,
		tt = /^(?:mouse|contextmenu)|click/,
		nt = /^(?:focusinfocus|focusoutblur)$/,
		rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}

	function ot() {
		return !1
	}

	function at() {
		try {
			return a.activeElement
		} catch (e) {}
	}
	x.event = {
		global: {},
		add: function(e, n, r, o, a) {
			var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
			if (v) {
				r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
					return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
				}, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
				while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
					type: g,
					origType: y,
					data: o,
					handler: r,
					guid: r.guid,
					selector: a,
					needsContext: a && x.expr.match.needsContext.test(a),
					namespace: m.join(".")
				}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
			if (m && (c = m.events)) {
				t = (t || "").match(T) || [""], u = t.length;
				while (u--)
					if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
						p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
						while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
						l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
					} else
						for (d in c) x.event.remove(e, d + t[u], n, r, !0);
				x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
			}
		},
		trigger: function(n, r, i, o) {
			var s, l, u, c, p, f, d, h = [i || a],
				g = v.call(n, "type") ? n.type : n,
				m = v.call(n, "namespace") ? n.namespace.split(".") : [];
			if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
				if (!o && !p.noBubble && !x.isWindow(i)) {
					for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u;
					f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
				}
				d = 0;
				while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
				if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
					f = i[l], f && (i[l] = null), x.event.triggered = g;
					try {
						i[g]()
					} catch (y) {}
					x.event.triggered = t, f && (i[l] = f)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = x.event.fix(e);
			var n, r, i, o, a, s = [],
				l = g.call(arguments),
				u = (x._data(this, "events") || {})[e.type] || [],
				c = x.event.special[e.type] || {};
			if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u), n = 0;
				while ((o = s[n++]) && !e.isPropagationStopped()) {
					e.currentTarget = o.elem, a = 0;
					while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, a, s = [],
				l = n.delegateCount,
				u = e.target;
			if (l && u.nodeType && (!e.button || "click" !== e.type))
				for (; u != this; u = u.parentNode || this)
					if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
						for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
						o.length && s.push({
							elem: u,
							handlers: o
						})
					}
			return n.length > l && s.push({
				elem: this,
				handlers: n.slice(l)
			}), s
		},
		fix: function(e) {
			if (e[x.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				s = this.fixHooks[i];
			s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
			while (t--) n = r[t], e[n] = o[n];
			return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, o, s = n.button,
					l = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== at() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === at() && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				},
				_default: function(e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = x.extend(new x.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, x.removeEvent = a.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	}, x.Event = function(e, n) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
	}, x.Event.prototype = {
		isDefaultPrevented: ot,
		isPropagationStopped: ot,
		isImmediatePropagationStopped: ot,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = it, this.stopPropagation()
		}
	}, x.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		x.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), x.support.submitBubbles || (x.event.special.submit = {
		setup: function() {
			return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
				r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), x._data(r, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
		}
	}), x.support.changeBubbles || (x.event.special.change = {
		setup: function() {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), x.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
			})), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
				}), x._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function(e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function() {
			return x.event.remove(this, "._change"), !Z.test(this.nodeName)
		}
	}), x.support.focusinBubbles || x.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				x.event.simulate(t, e.target, x.event.fix(e), !0)
			};
		x.event.special[t] = {
			setup: function() {
				0 === n++ && a.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && a.removeEventListener(e, r, !0)
			}
		}
	}), x.fn.extend({
		on: function(e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (a in e) this.on(a, n, r, e[a], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
			else if (!i) return this;
			return 1 === o && (s = i, i = function(e) {
				return x().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
				x.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
				x.event.remove(this, e, r, n)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var r = this[0];
			return r ? x.event.trigger(e, n, r, !0) : t
		}
	});
	var st = /^.[^:#\[\.,]*$/,
		lt = /^(?:parents|prev(?:Until|All))/,
		ut = x.expr.match.needsContext,
		ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	x.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
				for (t = 0; i > t; t++)
					if (x.contains(r[t], this)) return !0
			}));
			for (t = 0; i > t; t++) x.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t, n = x(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; r > t; t++)
					if (x.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(ft(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(ft(this, e || [], !1))
		},
		is: function(e) {
			return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
			for (; i > r; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? x.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
				r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});

	function pt(e, t) {
		do e = e[t]; while (e && 1 !== e.nodeType);
		return e
	}
	x.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return x.dir(e, "parentNode", n)
		},
		next: function(e) {
			return pt(e, "nextSibling")
		},
		prev: function(e) {
			return pt(e, "previousSibling")
		},
		nextAll: function(e) {
			return x.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return x.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return x.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return x.sibling(e.firstChild)
		},
		contents: function(e) {
			return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
		}
	}, function(e, t) {
		x.fn[e] = function(n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
		}
	}), x.extend({
		filter: function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, n, r) {
			var i = [],
				o = e[n];
			while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
			return i
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});

	function ft(e, t, n) {
		if (x.isFunction(t)) return x.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return x.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (st.test(t)) return x.filter(t, e, n);
			t = x.filter(t, e)
		}
		return x.grep(e, function(e) {
			return x.inArray(e, t) >= 0 !== n
		})
	}

	function dt(e) {
		var t = ht.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			while (t.length) n.createElement(t.pop());
		return n
	}
	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		gt = / jQuery\d+="(?:null|\d+)"/g,
		mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
		yt = /^\s+/,
		vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bt = /<([\w:]+)/,
		xt = /<tbody/i,
		wt = /<|&#?\w+;/,
		Tt = /<(?:script|style|link)/i,
		Ct = /^(?:checkbox|radio)$/i,
		Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		kt = /^$|\/(?:java|ecma)script/i,
		Et = /^true\/(.*)/,
		St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		At = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		jt = dt(a),
		Dt = jt.appendChild(a.createElement("div"));
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
		text: function(e) {
			return x.access(this, function(e) {
				return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Lt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = e ? x.filter(e, this) : this,
				i = 0;
			for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			var e, t = 0;
			for (; null != (e = this[t]); t++) {
				1 === e.nodeType && x.cleanData(Ft(e, !1));
				while (e.firstChild) e.removeChild(e.firstChild);
				e.options && x.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return x.clone(this, e, t)
			})
		},
		html: function(e) {
			return x.access(this, function(e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
				if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = x.map(this, function(e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = d.apply([], e);
			var r, i, o, a, s, l, u = 0,
				c = this.length,
				p = this,
				f = c - 1,
				h = e[0],
				g = x.isFunction(h);
			if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function(r) {
				var i = p.eq(r);
				g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
				for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
				if (o)
					for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
				l = r = null
			}
			return this
		}
	});

	function Lt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function Ht(e) {
		return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
	}

	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function _t(e, t) {
		var n, r = 0;
		for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
	}

	function Mt(e, t) {
		if (1 === t.nodeType && x.hasData(e)) {
			var n, r, i, o = x._data(e),
				a = x._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s)
					for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r])
			}
			a.data && (a.data = x.extend({}, a.data))
		}
	}

	function Ot(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
				i = x._data(t);
				for (r in i.events) x.removeEvent(t, r, i.handle);
				t.removeAttribute(x.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	x.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		x.fn[e] = function(e) {
			var n, r = 0,
				i = [],
				o = x(e),
				a = o.length - 1;
			for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
			return this.pushStack(i)
		}
	});

	function Ft(e, n) {
		var r, o, a = 0,
			s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!s)
			for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
		return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
	}

	function Bt(e) {
		Ct.test(e.type) && (e.defaultChecked = e.checked)
	}
	x.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
			if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
				for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]);
			if (t)
				if (n)
					for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]);
				else Mt(e, o);
			return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
		},
		buildFragment: function(e, t, n, r) {
			var i, o, a, s, l, u, c, p = e.length,
				f = dt(t),
				d = [],
				h = 0;
			for (; p > h; h++)
				if (o = e[h], o || 0 === o)
					if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);
					else if (wt.test(o)) {
				s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
				while (i--) s = s.lastChild;
				if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
					o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
					while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
				}
				x.merge(d, s.childNodes), s.textContent = "";
				while (s.firstChild) s.removeChild(s.firstChild);
				s = f.lastChild
			} else d.push(t.createTextNode(o));
			s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
			while (o = d[h++])
				if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
					i = 0;
					while (o = s[i++]) kt.test(o.type || "") && n.push(o)
				}
			return s = null, f
		},
		cleanData: function(e, t) {
			var n, r, o, a, s = 0,
				l = x.expando,
				u = x.cache,
				c = x.support.deleteExpando,
				f = x.event.special;
			for (; null != (n = e[s]); s++)
				if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
					if (a.events)
						for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
					u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
				}
		},
		_evalUrl: function(e) {
			return x.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	}), x.fn.extend({
		wrapAll: function(e) {
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return x.isFunction(e) ? this.each(function(t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = x(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = x.isFunction(e);
			return this.each(function(n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		zt = /^(top|right|bottom|left)$/,
		Xt = /^(none|table(?!-c[ea]).+)/,
		Ut = /^margin/,
		Vt = RegExp("^(" + w + ")(.*)$", "i"),
		Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
		Jt = RegExp("^([+-])=(" + w + ")", "i"),
		Gt = {
			BODY: "block"
		},
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Kt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Zt = ["Top", "Right", "Bottom", "Left"],
		en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if (t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = en.length;
		while (i--)
			if (t = en[i] + n, t in e) return t;
		return r
	}

	function nn(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}

	function rn(e, t) {
		var n, r, i, o = [],
			a = 0,
			s = e.length;
		for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}
	x.fn.extend({
		css: function(e, n) {
			return x.access(this, function(e, n, r) {
				var i, o, a = {},
					s = 0;
				if (x.isArray(n)) {
					for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? x.style(e, n, r) : x.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return rn(this, !0)
		},
		hide: function() {
			return rn(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				nn(this) ? x(this).show() : x(this).hide()
			})
		}
	}), x.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
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
			"float": x.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, l = x.camelCase(n),
					u = e.style;
				if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
				if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					u[n] = r
				} catch (c) {}
			}
		},
		css: function(e, n, r, i) {
			var o, a, s, l = x.camelCase(n);
			return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
		}
	}), e.getComputedStyle ? (Rt = function(t) {
		return e.getComputedStyle(t, null)
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s.getPropertyValue(n) || s[n] : t,
			u = e.style;
		return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
	}) : a.documentElement.currentStyle && (Rt = function(e) {
		return e.currentStyle
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			l = s ? s[n] : t,
			u = e.style;
		return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
	});

	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
			a = 0;
		for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
		return a
	}

	function sn(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Rt(e),
			a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
			r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function ln(e) {
		var t = a,
			n = Gt[e];
		return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
	}

	function un(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
			r = x.css(n[0], "display");
		return n.remove(), r
	}
	x.each(["height", "width"], function(e, n) {
		x.cssHooks[n] = {
			get: function(e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			},
			set: function(e, t, r) {
				var i = r && Rt(e);
				return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), x.support.opacity || (x.cssHooks.opacity = {
		get: function(e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), x(function() {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? x.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
			x.cssHooks[n] = {
				get: function(e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
	}, x.expr.filters.visible = function(e) {
		return !x.expr.filters.hidden(e)
	}), x.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		x.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
					i = {},
					o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ut.test(e) || (x.cssHooks[e + t].set = on)
	});
	var cn = /%20/g,
		pn = /\[\]$/,
		fn = /\r?\n/g,
		dn = /^(?:submit|button|image|reset|file)$/i,
		hn = /^(?:input|select|textarea|keygen)/i;
	x.fn.extend({
		serialize: function() {
			return x.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
			}).map(function(e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(fn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(fn, "\r\n")
				}
			}).get()
		}
	}), x.param = function(e, n) {
		var r, i = [],
			o = function(e, t) {
				t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
			o(this.name, this.value)
		});
		else
			for (r in e) gn(r, e[r], n, o);
		return i.join("&").replace(cn, "+")
	};

	function gn(e, t, n, r) {
		var i;
		if (x.isArray(t)) x.each(t, function(t, i) {
			n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== x.type(t)) r(e, t);
		else
			for (i in t) gn(e + "[" + i + "]", t[i], n, r)
	}
	x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		x.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), x.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var mn, yn, vn = x.now(),
		bn = /\?/,
		xn = /#.*$/,
		wn = /([?&])_=[^&]*/,
		Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Nn = /^(?:GET|HEAD)$/,
		kn = /^\/\//,
		En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Sn = x.fn.load,
		An = {},
		jn = {},
		Dn = "*/".concat("*");
	try {
		yn = o.href
	} catch (Ln) {
		yn = a.createElement("a"), yn.href = "", yn = yn.href
	}
	mn = En.exec(yn.toLowerCase()) || [];

	function Hn(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(T) || [];
			if (x.isFunction(n))
				while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function qn(e, n, r, i) {
		var o = {},
			a = e === jn;

		function s(l) {
			var u;
			return o[l] = !0, x.each(e[l] || [], function(e, l) {
				var c = l(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), u
		}
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}

	function _n(e, n) {
		var r, i, o = x.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && x.extend(!0, e, r), e
	}
	x.fn.load = function(e, n, r) {
		if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
		var i, o, a, s = this,
			l = e.indexOf(" ");
		return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
		}).complete(r && function(e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		x.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), x.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: Cn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": x.parseJSON,
				"text xml": x.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function(e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
				f = p.context || p,
				d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
				h = x.Deferred(),
				g = x.Callbacks("once memory"),
				m = p.statusCode || {},
				y = {},
				v = {},
				b = 0,
				w = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!c) {
								c = {};
								while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
							}
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = v[n] = v[n] || e, y[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (p.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > b)
								for (t in e) m[t] = [m[t], e[t]];
							else C.always(e[C.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return u && u.abort(t), k(0, t), this
					}
				};
			if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
			l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
			for (i in p.headers) C.setRequestHeader(i, p.headers[i]);
			if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
			w = "abort";
			for (i in {
					success: 1,
					error: 1,
					complete: 1
				}) C[i](p[i]);
			if (u = qn(jn, p, n, C)) {
				C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
					C.abort("timeout")
				}, p.timeout));
				try {
					b = 1, u.send(y, k)
				} catch (N) {
					if (!(2 > b)) throw N;
					k(-1, N)
				}
			} else k(-1, "No Transport");

			function k(e, n, r, i) {
				var c, y, v, w, T, N = n;
				2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
			}
			return C
		},
		getJSON: function(e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript: function(e, n) {
			return x.get(e, t, n, "script")
		}
	}), x.each(["get", "post"], function(e, n) {
		x[n] = function(e, r, i, o) {
			return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	});

	function Mn(e, n, r) {
		var i, o, a, s, l = e.contents,
			u = e.dataTypes;
		while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o)
			for (s in l)
				if (l[s] && l[s].test(o)) {
					u.unshift(s);
					break
				}
		if (u[0] in r) a = u[0];
		else {
			for (s in r) {
				if (!u[0] || e.converters[s + " " + u[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== u[0] && u.unshift(a), r[a]) : t
	}

	function On(e, t, n, r) {
		var i, o, a, s, l, u = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
		o = c.shift();
		while (o)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
				if ("*" === o) o = l;
				else if ("*" !== l && l !== o) {
			if (a = u[l + " " + o] || u["* " + o], !a)
				for (i in u)
					if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
						a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (p) {
					return {
						state: "parsererror",
						error: a ? p : "No conversion from " + l + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}
	x.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return x.globalEval(e), e
			}
		}
	}), x.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), x.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, r = a.head || x("head")[0] || a.documentElement;
			return {
				send: function(t, i) {
					n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Fn = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Fn.pop() || x.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), x.ajaxPrefilter("json jsonp", function(n, r, i) {
		var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || x.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		}, i.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0,
		$n = e.ActiveXObject && function() {
			var e;
			for (e in Pn) Pn[e](t, !0)
		};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}

	function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	x.ajaxSettings.xhr = e.ActiveXObject ? function() {
		return !this.isLocal && In() || zn()
	} : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
		if (!n.crossDomain || x.support.cors) {
			var r;
			return {
				send: function(i, o) {
					var a, s, l = n.xhr();
					if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
						for (s in n.xhrFields) l[s] = n.xhrFields[s];
					n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i) l.setRequestHeader(s, i[s])
					} catch (u) {}
					l.send(n.hasContent && n.data || null), r = function(e, i) {
						var s, u, c, p;
						try {
							if (r && (i || 4 === l.readyState))
								if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();
								else {
									p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
									try {
										c = l.statusText
									} catch (f) {
										c = ""
									}
									s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
								}
						} catch (d) {
							i || o(-1, d)
						}
						p && o(s, c, p, u)
					}, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
				},
				abort: function() {
					r && r(t, !0)
				}
			}
		}
	});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
		Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
		Jn = /queueHooks$/,
		Gn = [nr],
		Qn = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Yn.exec(t),
					o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
					a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
					s = 1,
					l = 20;
				if (a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};

	function Kn() {
		return setTimeout(function() {
			Xn = t
		}), Xn = x.now()
	}

	function Zn(e, t, n) {
		var r, i = (Qn[t] || []).concat(Qn["*"]),
			o = 0,
			a = i.length;
		for (; a > o; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function er(e, t, n) {
		var r, i, o = 0,
			a = Gn.length,
			s = x.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (i) return !1;
				var t = Xn || Kn(),
					n = Math.max(0, u.startTime + u.duration - t),
					r = n / u.duration || 0,
					o = 1 - r,
					a = 0,
					l = u.tweens.length;
				for (; l > a; a++) u.tweens[a].run(o);
				return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: x.extend({}, t),
				opts: x.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Xn || Kn(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? u.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (tr(c, u.opts.specialEasing); a > o; o++)
			if (r = Gn[o].call(u, e, c, u.opts)) return r;
		return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}

	function tr(e, t) {
		var n, r, i, o, a;
		for (n in e)
			if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}
	x.Animation = x.extend(er, {
		tweener: function(e, t) {
			x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
				i = e.length;
			for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	});

	function nr(e, t, n) {
		var r, i, o, a, s, l, u = this,
			c = {},
			p = e.style,
			f = e.nodeType && nn(e),
			d = x._data(e, "fxshow");
		n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, u.always(function() {
			u.always(function() {
				s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t)
			if (i = t[r], Vn.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
				c[r] = d && d[r] || x.style(e, r)
			}
		if (!x.isEmptyObject(c)) {
			d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
				x(e).hide()
			}), u.done(function() {
				var t;
				x._removeData(e, "fxshow");
				for (t in c) x.style(e, t, c[t])
			});
			for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}
	x.Tween = rr, rr.prototype = {
		constructor: rr,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, x.each(["toggle", "show", "hide"], function(e, t) {
		var n = x.fn[t];
		x.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), x.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = x.isEmptyObject(e),
				o = x.speed(t, n, r),
				a = function() {
					var t = er(this, x.extend({}, e), o);
					(i || x._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, n, r) {
			var i = function(e) {
				var t = e.stop;
				delete e.stop, t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = x.timers,
					a = x._data(this);
				if (n) a[n] && a[n].stop && i(a[n]);
				else
					for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && x.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = x._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = x.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});

	function ir(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	x.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		x.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), x.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {
			complete: n || !n && t || x.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !x.isFunction(t) && t
		};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
		}, r
	}, x.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
		var e, n = x.timers,
			r = 0;
		for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		n.length || x.fx.stop(), Xn = t
	}, x.fx.timer = function(e) {
		e() && x.timers.push(e) && x.fx.start()
	}, x.fx.interval = 13, x.fx.start = function() {
		Un || (Un = setInterval(x.fx.tick, x.fx.interval))
	}, x.fx.stop = function() {
		clearInterval(Un), Un = null
	}, x.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
		return x.grep(x.timers, function(t) {
			return e === t.elem
		}).length
	}), x.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			x.offset.setOffset(this, e, t)
		});
		var n, r, o = {
				top: 0,
				left: 0
			},
			a = this[0],
			s = a && a.ownerDocument;
		if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
			top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : o
	}, x.offset = {
		setOffset: function(e, t, n) {
			var r = x.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i = x(e),
				o = i.offset(),
				a = x.css(e, "top"),
				s = x.css(e, "left"),
				l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
				u = {},
				c = {},
				p, f;
			l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
		}
	}, x.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
						top: 0,
						left: 0
					},
					r = this[0];
				return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - x.css(r, "marginTop", !0),
					left: t.left - n.left - x.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || s;
				while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
				return e || s
			})
		}
	}), x.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var r = /Y/.test(n);
		x.fn[e] = function(i) {
			return x.access(this, function(e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	});

	function or(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	x.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		x.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(r, i) {
			x.fn[i] = function(i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (i === !0 || o === !0 ? "margin" : "border");
				return x.access(this, function(n, r, i) {
					var o;
					return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), x.fn.size = function() {
		return this.length
	}, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
		return x
	}))
})(window);
jQuery.noConflict();;

/*
 * jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other
 * contributors | jquery.org/license
 */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0),
	function(e, t, n) {
		function r(n) {
			var r = t.console;
			i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
		}

		function a(t, a, i, o) {
			if (Object.defineProperty) try {
				return Object.defineProperty(t, a, {
					configurable: !0,
					enumerable: !0,
					get: function() {
						return r(o), i
					},
					set: function(e) {
						r(o), i = e
					}
				}), n
			} catch (s) {}
			e._definePropertyBroken = !0, t[a] = i
		}
		var i = {};
		e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
			i = {}, e.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
		var o = e("<input/>", {
				size: 1
			}).attr("size") && e.attrFn,
			s = e.attr,
			u = e.attrHooks.value && e.attrHooks.value.get || function() {
				return null
			},
			c = e.attrHooks.value && e.attrHooks.value.set || function() {
				return n
			},
			l = /^(?:input|button)$/i,
			d = /^[238]$/,
			p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			f = /^(?:checked|selected)$/i;
		a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, a, i, u) {
			var c = a.toLowerCase(),
				g = t && t.nodeType;
			return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {
				get: function(t, r) {
					var a, i = e.prop(t, r);
					return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
				},
				set: function(t, n, r) {
					var a;
					return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
				}
			}, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
		}, e.attrHooks.value = {
			get: function(e, t) {
				var n = (e.nodeName || "").toLowerCase();
				return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
			},
			set: function(e, t) {
				var a = (e.nodeName || "").toLowerCase();
				return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
			}
		};
		var g, h, v = e.fn.init,
			m = e.parseJSON,
			y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
		e.fn.init = function(t, n, a) {
			var i;
			return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
		}, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
			return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
		}, e.uaMatch = function(e) {
			e = e.toLowerCase();
			var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
			return {
				browser: t[1] || "",
				version: t[2] || "0"
			}
		}, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function() {
			function t(e, n) {
				return new t.fn.init(e, n)
			}
			e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, a) {
				return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
			}, t.fn.init.prototype = t.fn;
			var n = t(document);
			return r("jQuery.sub() is deprecated"), t
		}, e.ajaxSetup({
			converters: {
				"text json": e.parseJSON
			}
		});
		var b = e.fn.data;
		e.fn.data = function(t) {
			var a, i, o = this[0];
			return !o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
		};
		var j = /\/(java|ecma)script/i,
			w = e.fn.andSelf || e.fn.addBack;
		e.fn.andSelf = function() {
			return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
		}, e.clean || (e.clean = function(t, a, i, o) {
			a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
			var s, u, c, l, d = [];
			if (e.merge(d, e.buildFragment(t, a).childNodes), i)
				for (c = function(e) {
						return !e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
					}, s = 0; null != (u = d[s]); s++) e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
			return d
		});
		var Q = e.event.add,
			x = e.event.remove,
			k = e.event.trigger,
			N = e.fn.toggle,
			T = e.fn.live,
			M = e.fn.die,
			S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			C = RegExp("\\b(?:" + S + ")\\b"),
			H = /(?:^|\s)hover(\.\S+|)\b/,
			A = function(t) {
				return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
			};
		e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, a, i) {
			e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
		}, e.event.remove = function(e, t, n, r, a) {
			x.call(this, e, A(t) || "", n, r, a)
		}, e.fn.error = function() {
			var e = Array.prototype.slice.call(arguments, 0);
			return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
		}, e.fn.toggle = function(t, n) {
			if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments);
			r("jQuery.fn.toggle(handler, handler...) is deprecated");
			var a = arguments,
				i = t.guid || e.guid++,
				o = 0,
				s = function(n) {
					var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
					return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
				};
			for (s.guid = i; a.length > o;) a[o++].guid = i;
			return this.click(s)
		}, e.fn.live = function(t, n, a) {
			return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
		}, e.fn.die = function(t, n) {
			return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
		}, e.event.trigger = function(e, t, n, a) {
			return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
		}, e.each(S.split("|"), function(t, n) {
			e.event.special[n] = {
				setup: function() {
					var t = this;
					return t !== document && (e.event.add(document, n + "." + e.guid, function() {
						e.event.trigger(n, null, t, !0)
					}), e._data(this, n, e.guid++)), !1
				},
				teardown: function() {
					return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
				}
			}
		})
	}(jQuery, window);;

var gridContainer = jQuery('.thumbs');
var colW;
var gridGutter = 0;
var thumbWidth = 350;
var themeColumns = 3;
var catptionOffset = -20;
var stickyNav = jQuery('#header .bottom .surround');
var stickyNavOffsetTop;
var topOffest = (jQuery('body').hasClass('admin-bar')) ? 28 : 0;
var OS;

function setSlideNav() {
	jQuery(".menuToggle").pageslide({
		direction: "right"
	});
}
jQuery.noConflict();
jQuery(document).ready(function() {
	jQuery('img').attr('title', '');
	setSlideNav();
});
jQuery(window).load(function() {
	jQuery('body').width(jQuery('body').width() + 1).width('auto');
});



/* ! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a, b) {
	function G(a) {
		var b = F[a] = {};
		return p.each(a.split(s), function(a, c) {
			b[c] = !0
		}), b
	}

	function J(a, c, d) {
		if (d === b && a.nodeType === 1) {
			var e = "data-" + c.replace(I, "-$1").toLowerCase();
			d = a.getAttribute(e);
			if (typeof d == "string") {
				try {
					d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : H.test(d) ? p.parseJSON(d) : d
				} catch (f) {}
				p.data(a, c, d)
			} else d = b
		}
		return d
	}

	function K(a) {
		var b;
		for (b in a) {
			if (b === "data" && p.isEmptyObject(a[b])) continue;
			if (b !== "toJSON") return !1
		}
		return !0
	}

	function ba() {
		return !1
	}

	function bb() {
		return !0
	}

	function bh(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}

	function bi(a, b) {
		do a = a[b]; while (a && a.nodeType !== 1);
		return a
	}

	function bj(a, b, c) {
		b = b || 0;
		if (p.isFunction(b)) return p.grep(a, function(a, d) {
			var e = !!b.call(a, d, a);
			return e === c
		});
		if (b.nodeType) return p.grep(a, function(a, d) {
			return a === b === c
		});
		if (typeof b == "string") {
			var d = p.grep(a, function(a) {
				return a.nodeType === 1
			});
			if (be.test(b)) return p.filter(b, d, !c);
			b = p.filter(b, d)
		}
		return p.grep(a, function(a, d) {
			return p.inArray(a, b) >= 0 === c
		})
	}

	function bk(a) {
		var b = bl.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement)
			while (b.length) c.createElement(b.pop());
		return c
	}

	function bC(a, b) {
		return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
	}

	function bD(a, b) {
		if (b.nodeType !== 1 || !p.hasData(a)) return;
		var c, d, e, f = p._data(a),
			g = p._data(b, f),
			h = f.events;
		if (h) {
			delete g.handle, g.events = {};
			for (c in h)
				for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d])
		}
		g.data && (g.data = p.extend({}, g.data))
	}

	function bE(a, b) {
		var c;
		if (b.nodeType !== 1) return;
		b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), p.support.html5Clone && a.innerHTML && !p.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && bv.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute(p.expando)
	}

	function bF(a) {
		return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
	}

	function bG(a) {
		bv.test(a.type) && (a.defaultChecked = a.checked)
	}

	function bY(a, b) {
		if (b in a) return b;
		var c = b.charAt(0).toUpperCase() + b.slice(1),
			d = b,
			e = bW.length;
		while (e--) {
			b = bW[e] + c;
			if (b in a) return b
		}
		return d
	}

	function bZ(a, b) {
		return a = b || a, p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
	}

	function b$(a, b) {
		var c, d, e = [],
			f = 0,
			g = a.length;
		for (; f < g; f++) {
			c = a[f];
			if (!c.style) continue;
			e[f] = p._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && bZ(c) && (e[f] = p._data(c, "olddisplay", cc(c.nodeName)))) : (d = bH(c, "display"), !e[f] && d !== "none" && p._data(c, "olddisplay", d))
		}
		for (f = 0; f < g; f++) {
			c = a[f];
			if (!c.style) continue;
			if (!b || c.style.display === "none" || c.style.display === "") c.style.display = b ? e[f] || "" : "none"
		}
		return a
	}

	function b_(a, b, c) {
		var d = bP.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function ca(a, b, c, d) {
		var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
			f = 0;
		for (; e < 4; e += 2) c === "margin" && (f += p.css(a, c + bV[e], !0)), d ? (c === "content" && (f -= parseFloat(bH(a, "padding" + bV[e])) || 0), c !== "margin" && (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0)) : (f += parseFloat(bH(a, "padding" + bV[e])) || 0, c !== "padding" && (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
		return f
	}

	function cb(a, b, c) {
		var d = b === "width" ? a.offsetWidth : a.offsetHeight,
			e = !0,
			f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
		if (d <= 0 || d == null) {
			d = bH(a, b);
			if (d < 0 || d == null) d = a.style[b];
			if (bQ.test(d)) return d;
			e = f && (p.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
		}
		return d + ca(a, b, c || (f ? "border" : "content"), e) + "px"
	}

	function cc(a) {
		if (bS[a]) return bS[a];
		var b = p("<" + a + ">").appendTo(e.body),
			c = b.css("display");
		b.remove();
		if (c === "none" || c === "") {
			bI = e.body.appendChild(bI || p.extend(e.createElement("iframe"), {
				frameBorder: 0,
				width: 0,
				height: 0
			}));
			if (!bJ || !bI.createElement) bJ = (bI.contentWindow || bI.contentDocument).document, bJ.write("<!doctype html><html><body>"), bJ.close();
			b = bJ.body.appendChild(bJ.createElement(a)), c = bH(b, "display"), e.body.removeChild(bI)
		}
		return bS[a] = c, c
	}

	function ci(a, b, c, d) {
		var e;
		if (p.isArray(b)) p.each(b, function(b, e) {
			c || ce.test(a) ? d(a, e) : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
		});
		else if (!c && p.type(b) === "object")
			for (e in b) ci(a + "[" + e + "]", b[e], c, d);
		else d(a, b)
	}

	function cz(a) {
		return function(b, c) {
			typeof b != "string" && (c = b, b = "*");
			var d, e, f, g = b.toLowerCase().split(s),
				h = 0,
				i = g.length;
			if (p.isFunction(c))
				for (; h < i; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
		}
	}

	function cA(a, c, d, e, f, g) {
		f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
		var h, i = a[f],
			j = 0,
			k = i ? i.length : 0,
			l = a === cv;
		for (; j < k && (l || !h); j++) h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = cA(a, c, d, e, h, g)));
		return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h
	}

	function cB(a, c) {
		var d, e, f = p.ajaxSettings.flatOptions || {};
		for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
		e && p.extend(!0, a, e)
	}

	function cC(a, c, d) {
		var e, f, g, h, i = a.contents,
			j = a.dataTypes,
			k = a.responseFields;
		for (f in k) f in d && (c[k[f]] = d[f]);
		while (j[0] === "*") j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
		if (e)
			for (f in i)
				if (i[f] && i[f].test(e)) {
					j.unshift(f);
					break
				}
		if (j[0] in d) g = j[0];
		else {
			for (f in d) {
				if (!j[0] || a.converters[f + " " + j[0]]) {
					g = f;
					break
				}
				h || (h = f)
			}
			g = g || h
		}
		if (g) return g !== j[0] && j.unshift(g), d[g]
	}

	function cD(a, b) {
		var c, d, e, f, g = a.dataTypes.slice(),
			h = g[0],
			i = {},
			j = 0;
		a.dataFilter && (b = a.dataFilter(b, a.dataType));
		if (g[1])
			for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
		for (; e = g[++j];)
			if (e !== "*") {
				if (h !== "*" && h !== e) {
					c = i[h + " " + e] || i["* " + e];
					if (!c)
						for (d in i) {
							f = d.split(" ");
							if (f[1] === e) {
								c = i[h + " " + f[0]] || i["* " + f[0]];
								if (c) {
									c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
									break
								}
							}
						}
					if (c !== !0)
						if (c && a["throws"]) b = c(b);
						else try {
							b = c(b)
						} catch (k) {
							return {
								state: "parsererror",
								error: c ? k : "No conversion from " + h + " to " + e
							}
						}
				}
				h = e
			}
		return {
			state: "success",
			data: b
		}
	}

	function cL() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function cM() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}

	function cU() {
		return setTimeout(function() {
			cN = b
		}, 0), cN = p.now()
	}

	function cV(a, b) {
		p.each(b, function(b, c) {
			var d = (cT[b] || []).concat(cT["*"]),
				e = 0,
				f = d.length;
			for (; e < f; e++)
				if (d[e].call(a, b, c)) return
		})
	}

	function cW(a, b, c) {
		var d, e = 0,
			f = 0,
			g = cS.length,
			h = p.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				var b = cN || cU(),
					c = Math.max(0, j.startTime + j.duration - b),
					d = 1 - (c / j.duration || 0),
					e = 0,
					f = j.tweens.length;
				for (; e < f; e++) j.tweens[e].run(d);
				return h.notifyWith(a, [j, d, c]), d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: p.extend({}, b),
				opts: p.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: cN || cU(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c, d) {
					var e = p.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(e), e
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					for (; c < d; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		cX(k, j.opts.specialEasing);
		for (; e < g; e++) {
			d = cS[e].call(j, a, k, j.opts);
			if (d) return d
		}
		return cV(j, k), p.isFunction(j.opts.start) && j.opts.start.call(a, j), p.fx.timer(p.extend(i, {
			anim: j,
			queue: j.opts.queue,
			elem: a
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	function cX(a, b) {
		var c, d, e, f, g;
		for (c in a) {
			d = p.camelCase(c), e = b[d], f = a[c], p.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = p.cssHooks[d];
			if (g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
		}
	}

	function cY(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this,
			m = a.style,
			n = {},
			o = [],
			q = a.nodeType && bZ(a);
		c.queue || (j = p._queueHooks(a, "fx"), j.unqueued == null && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function() {
			j.unqueued || k()
		}), j.unqueued++, l.always(function() {
			l.always(function() {
				j.unqueued--, p.queue(a, "fx").length || j.empty.fire()
			})
		})), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], p.css(a, "display") === "inline" && p.css(a, "float") === "none" && (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline" ? m.display = "inline-block" : m.zoom = 1)), c.overflow && (m.overflow = "hidden", p.support.shrinkWrapBlocks || l.done(function() {
			m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
		}));
		for (d in b) {
			f = b[d];
			if (cP.exec(f)) {
				delete b[d];
				if (f === (q ? "hide" : "show")) continue;
				o.push(d)
			}
		}
		g = o.length;
		if (g) {
			h = p._data(a, "fxshow") || p._data(a, "fxshow", {}), q ? p(a).show() : l.done(function() {
				p(a).hide()
			}), l.done(function() {
				var b;
				p.removeData(a, "fxshow", !0);
				for (b in n) p.style(a, b, n[b])
			});
			for (d = 0; d < g; d++) e = o[d], i = l.createTween(e, q ? h[e] : 0), n[e] = h[e] || p.style(a, e), e in h || (h[e] = i.start, q && (i.end = i.start, i.start = e === "width" || e === "height" ? 1 : 0))
		}
	}

	function cZ(a, b, c, d, e) {
		return new cZ.prototype.init(a, b, c, d, e)
	}

	function c$(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		b = b ? 1 : 0;
		for (; e < 4; e += 2 - b) c = bV[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function da(a) {
		return p.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}
	var c, d, e = a.document,
		f = a.location,
		g = a.navigator,
		h = a.jQuery,
		i = a.$,
		j = Array.prototype.push,
		k = Array.prototype.slice,
		l = Array.prototype.indexOf,
		m = Object.prototype.toString,
		n = Object.prototype.hasOwnProperty,
		o = String.prototype.trim,
		p = function(a, b) {
			return new p.fn.init(a, b, c)
		},
		q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
		r = /\S/,
		s = /\s+/,
		t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^[\],:{}\s]*$/,
		x = /(?:^|:|,)(?:\s*\[)+/g,
		y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
		A = /^-ms-/,
		B = /-([\da-z])/gi,
		C = function(a, b) {
			return (b + "").toUpperCase()
		},
		D = function() {
			e.addEventListener ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready()) : e.readyState === "complete" && (e.detachEvent("onreadystatechange", D), p.ready())
		},
		E = {};
	p.fn = p.prototype = {
		constructor: p,
		init: function(a, c, d) {
			var f, g, h, i;
			if (!a) return this;
			if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
			if (typeof a == "string") {
				a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = u.exec(a);
				if (f && (f[1] || !c)) {
					if (f[1]) return c = c instanceof p ? c[0] : c, i = c && c.nodeType ? c.ownerDocument || c : e, a = p.parseHTML(f[1], i, !0), v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0), p.merge(this, a);
					g = e.getElementById(f[2]);
					if (g && g.parentNode) {
						if (g.id !== f[2]) return d.find(a);
						this.length = 1, this[0] = g
					}
					return this.context = e, this.selector = a, this
				}
				return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
			}
			return p.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), p.makeArray(a, this))
		},
		selector: "",
		jquery: "1.8.2",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return k.call(this)
		},
		get: function(a) {
			return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
		},
		pushStack: function(a, b, c) {
			var d = p.merge(this.constructor(), a);
			return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
		},
		each: function(a, b) {
			return p.each(this, a, b)
		},
		ready: function(a) {
			return p.ready.promise().done(a), this
		},
		eq: function(a) {
			return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		slice: function() {
			return this.pushStack(k.apply(this, arguments), "slice", k.call(arguments).join(","))
		},
		map: function(a) {
			return this.pushStack(p.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: j,
		sort: [].sort,
		splice: [].splice
	}, p.fn.init.prototype = p.fn, p.extend = p.fn.extend = function() {
		var a, c, d, e, f, g, h = arguments[0] || {},
			i = 1,
			j = arguments.length,
			k = !1;
		typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !p.isFunction(h) && (h = {}), j === i && (h = this, --i);
		for (; i < j; i++)
			if ((a = arguments[i]) != null)
				for (c in a) {
					d = h[c], e = a[c];
					if (h === e) continue;
					k && e && (p.isPlainObject(e) || (f = p.isArray(e))) ? (f ? (f = !1, g = d && p.isArray(d) ? d : []) : g = d && p.isPlainObject(d) ? d : {}, h[c] = p.extend(k, g, e)) : e !== b && (h[c] = e)
				}
			return h
	}, p.extend({
		noConflict: function(b) {
			return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? p.readyWait++ : p.ready(!0)
		},
		ready: function(a) {
			if (a === !0 ? --p.readyWait : p.isReady) return;
			if (!e.body) return setTimeout(p.ready, 1);
			p.isReady = !0;
			if (a !== !0 && --p.readyWait > 0) return;
			d.resolveWith(e, [p]), p.fn.trigger && p(e).trigger("ready").off("ready")
		},
		isFunction: function(a) {
			return p.type(a) === "function"
		},
		isArray: Array.isArray || function(a) {
			return p.type(a) === "array"
		},
		isWindow: function(a) {
			return a != null && a == a.window
		},
		isNumeric: function(a) {
			return !isNaN(parseFloat(a)) && isFinite(a)
		},
		type: function(a) {
			return a == null ? String(a) : E[m.call(a)] || "object"
		},
		isPlainObject: function(a) {
			if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a)) return !1;
			try {
				if (a.constructor && !n.call(a, "constructor") && !n.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			var d;
			for (d in a);
			return d === b || n.call(a, d)
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		error: function(a) {
			throw new Error(a)
		},
		parseHTML: function(a, b, c) {
			var d;
			return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || e, (d = v.exec(a)) ? [b.createElement(d[1])] : (d = p.buildFragment([a], b, c ? null : []), p.merge([], (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes)))
		},
		parseJSON: function(b) {
			if (!b || typeof b != "string") return null;
			b = p.trim(b);
			if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
			if (w.test(b.replace(y, "@").replace(z, "]").replace(x, ""))) return (new Function("return " + b))();
			p.error("Invalid JSON: " + b)
		},
		parseXML: function(c) {
			var d, e;
			if (!c || typeof c != "string") return null;
			try {
				a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
			} catch (f) {
				d = b
			}
			return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + c), d
		},
		noop: function() {},
		globalEval: function(b) {
			b && r.test(b) && (a.execScript || function(b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function(a) {
			return a.replace(A, "ms-").replace(B, C)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, c, d) {
			var e, f = 0,
				g = a.length,
				h = g === b || p.isFunction(a);
			if (d) {
				if (h) {
					for (e in a)
						if (c.apply(a[e], d) === !1) break
				} else
					for (; f < g;)
						if (c.apply(a[f++], d) === !1) break
			} else if (h) {
				for (e in a)
					if (c.call(a[e], e, a[e]) === !1) break
			} else
				for (; f < g;)
					if (c.call(a[f], f, a[f++]) === !1) break;
			return a
		},
		trim: o && !o.call("﻿ ") ? function(a) {
			return a == null ? "" : o.call(a)
		} : function(a) {
			return a == null ? "" : (a + "").replace(t, "")
		},
		makeArray: function(a, b) {
			var c, d = b || [];
			return a != null && (c = p.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || p.isWindow(a) ? j.call(d, a) : p.merge(d, a)), d
		},
		inArray: function(a, b, c) {
			var d;
			if (b) {
				if (l) return l.call(b, a, c);
				d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
				for (; c < d; c++)
					if (c in b && b[c] === a) return c
			}
			return -1
		},
		merge: function(a, c) {
			var d = c.length,
				e = a.length,
				f = 0;
			if (typeof d == "number")
				for (; f < d; f++) a[e++] = c[f];
			else
				while (c[f] !== b) a[e++] = c[f++];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			var d, e = [],
				f = 0,
				g = a.length;
			c = !!c;
			for (; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
			return e
		},
		map: function(a, c, d) {
			var e, f, g = [],
				h = 0,
				i = a.length,
				j = a instanceof p || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || p.isArray(a));
			if (j)
				for (; h < i; h++) e = c(a[h], h, d), e != null && (g[g.length] = e);
			else
				for (f in a) e = c(a[f], f, d), e != null && (g[g.length] = e);
			return g.concat.apply([], g)
		},
		guid: 1,
		proxy: function(a, c) {
			var d, e, f;
			return typeof c == "string" && (d = a[c], c = a, a = d), p.isFunction(a) ? (e = k.call(arguments, 2), f = function() {
				return a.apply(c, e.concat(k.call(arguments)))
			}, f.guid = a.guid = a.guid || p.guid++, f) : b
		},
		access: function(a, c, d, e, f, g, h) {
			var i, j = d == null,
				k = 0,
				l = a.length;
			if (d && typeof d == "object") {
				for (k in d) p.access(a, c, k, d[k], 1, g, e);
				f = 1
			} else if (e !== b) {
				i = h === b && p.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
					return i.call(p(a), c)
				}) : (c.call(a, e), c = null));
				if (c)
					for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
				f = 1
			}
			return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
		},
		now: function() {
			return (new Date).getTime()
		}
	}), p.ready.promise = function(b) {
		if (!d) {
			d = p.Deferred();
			if (e.readyState === "complete") setTimeout(p.ready, 1);
			else if (e.addEventListener) e.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", p.ready, !1);
			else {
				e.attachEvent("onreadystatechange", D), a.attachEvent("onload", p.ready);
				var c = !1;
				try {
					c = a.frameElement == null && e.documentElement
				} catch (f) {}
				c && c.doScroll && function g() {
					if (!p.isReady) {
						try {
							c.doScroll("left")
						} catch (a) {
							return setTimeout(g, 50)
						}
						p.ready()
					}
				}()
			}
		}
		return d.promise(b)
	}, p.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
		E["[object " + b + "]"] = b.toLowerCase()
	}), c = p(e);
	var F = {};
	p.Callbacks = function(a) {
		a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
		var c, d, e, f, g, h, i = [],
			j = !a.once && [],
			k = function(b) {
				c = a.memory && b, d = !0, h = f || 0, f = 0, g = i.length, e = !0;
				for (; i && h < g; h++)
					if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
						c = !1;
						break
					}
				e = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
			},
			l = {
				add: function() {
					if (i) {
						var b = i.length;
						(function d(b) {
							p.each(b, function(b, c) {
								var e = p.type(c);
								e === "function" && (!a.unique || !l.has(c)) ? i.push(c) : c && c.length && e !== "string" && d(c)
							})
						})(arguments), e ? g = i.length : c && (f = b, k(c))
					}
					return this
				},
				remove: function() {
					return i && p.each(arguments, function(a, b) {
						var c;
						while ((c = p.inArray(b, i, c)) > -1) i.splice(c, 1), e && (c <= g && g--, c <= h && h--)
					}), this
				},
				has: function(a) {
					return p.inArray(a, i) > -1
				},
				empty: function() {
					return i = [], this
				},
				disable: function() {
					return i = j = c = b, this
				},
				disabled: function() {
					return !i
				},
				lock: function() {
					return j = b, c || l.disable(), this
				},
				locked: function() {
					return !j
				},
				fireWith: function(a, b) {
					return b = b || [], b = [a, b.slice ? b.slice() : b], i && (!d || j) && (e ? j.push(b) : k(b)), this
				},
				fire: function() {
					return l.fireWith(this, arguments), this
				},
				fired: function() {
					return !!d
				}
			};
		return l
	}, p.extend({
		Deferred: function(a) {
			var b = [
					["resolve", "done", p.Callbacks("once memory"), "resolved"],
					["reject", "fail", p.Callbacks("once memory"), "rejected"],
					["notify", "progress", p.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return p.Deferred(function(c) {
							p.each(b, function(b, d) {
								var f = d[0],
									g = a[b];
								e[d[1]](p.isFunction(g) ? function() {
									var a = g.apply(this, arguments);
									a && p.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
								} : c[f])
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return a != null ? p.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, p.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b = 0,
				c = k.call(arguments),
				d = c.length,
				e = d !== 1 || a && p.isFunction(a.promise) ? d : 0,
				f = e === 1 ? a : p.Deferred(),
				g = function(a, b, c) {
					return function(d) {
						b[a] = this, c[a] = arguments.length > 1 ? k.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
					}
				},
				h, i, j;
			if (d > 1) {
				h = new Array(d), i = new Array(d), j = new Array(d);
				for (; b < d; b++) c[b] && p.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
			}
			return e || f.resolveWith(j, c), f.promise()
		}
	}), p.support = function() {
		var b, c, d, f, g, h, i, j, k, l, m, n = e.createElement("div");
		n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = n.getElementsByTagName("*"), d = n.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5";
		if (!c || !c.length) return {};
		f = e.createElement("select"), g = f.appendChild(e.createElement("option")), h = n.getElementsByTagName("input")[0], b = {
			leadingWhitespace: n.firstChild.nodeType === 3,
			tbody: !n.getElementsByTagName("tbody").length,
			htmlSerialize: !!n.getElementsByTagName("link").length,
			style: /top/.test(d.getAttribute("style")),
			hrefNormalized: d.getAttribute("href") === "/a",
			opacity: /^0.5/.test(d.style.opacity),
			cssFloat: !!d.style.cssFloat,
			checkOn: h.value === "on",
			optSelected: g.selected,
			getSetAttribute: n.className !== "t",
			enctype: !!e.createElement("form").enctype,
			html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			boxModel: e.compatMode === "CSS1Compat",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, h.checked = !0, b.noCloneChecked = h.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled;
		try {
			delete n.test
		} catch (o) {
			b.deleteExpando = !1
		}!n.addEventListener && n.attachEvent && n.fireEvent && (n.attachEvent("onclick", m = function() {
			b.noCloneEvent = !1
		}), n.cloneNode(!0).fireEvent("onclick"), n.detachEvent("onclick", m)), h = e.createElement("input"), h.value = "t", h.setAttribute("type", "radio"), b.radioValue = h.value === "t", h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), n.appendChild(h), i = e.createDocumentFragment(), i.appendChild(n.lastChild), b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = h.checked, i.removeChild(h), i.appendChild(n);
		if (n.attachEvent)
			for (k in {
					submit: !0,
					change: !0,
					focusin: !0
				}) j = "on" + k, l = j in n, l || (n.setAttribute(j, "return;"), l = typeof n[j] == "function"), b[k + "Bubbles"] = l;
		return p(function() {
			var c, d, f, g, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
				i = e.getElementsByTagName("body")[0];
			if (!i) return;
			c = e.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", i.insertBefore(c, i.firstChild), d = e.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", b.reliableHiddenOffsets = l && f[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
				width: "4px"
			}).width === "4px", g = e.createElement("div"), g.style.cssText = d.style.cssText = h, g.style.marginRight = g.style.width = "0", d.style.width = "1px", d.appendChild(g), b.reliableMarginRight = !parseFloat((a.getComputedStyle(g, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), i.removeChild(c), c = d = f = g = null
		}), i.removeChild(n), c = d = f = g = h = i = n = null, b
	}();
	var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		I = /([A-Z])/g;
	p.extend({
		cache: {},
		deletedIds: [],
		uuid: 0,
		expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			return a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando], !!a && !K(a)
		},
		data: function(a, c, d, e) {
			if (!p.acceptData(a)) return;
			var f, g, h = p.expando,
				i = typeof c == "string",
				j = a.nodeType,
				k = j ? p.cache : a,
				l = j ? a[h] : a[h] && h;
			if ((!l || !k[l] || !e && !k[l].data) && i && d === b) return;
			l || (j ? a[h] = l = p.deletedIds.pop() || p.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = p.noop));
			if (typeof c == "object" || typeof c == "function") e ? k[l] = p.extend(k[l], c) : k[l].data = p.extend(k[l].data, c);
			return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[p.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[p.camelCase(c)])) : g = f, g
		},
		removeData: function(a, b, c) {
			if (!p.acceptData(a)) return;
			var d, e, f, g = a.nodeType,
				h = g ? p.cache : a,
				i = g ? a[p.expando] : p.expando;
			if (!h[i]) return;
			if (b) {
				d = c ? h[i] : h[i].data;
				if (d) {
					p.isArray(b) || (b in d ? b = [b] : (b = p.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
					for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
					if (!(c ? K : p.isEmptyObject)(d)) return
				}
			}
			if (!c) {
				delete h[i].data;
				if (!K(h[i])) return
			}
			g ? p.cleanData([a], !0) : p.support.deleteExpando || h != h.window ? delete h[i] : h[i] = null
		},
		_data: function(a, b, c) {
			return p.data(a, b, c, !0)
		},
		acceptData: function(a) {
			var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
			return !b || b !== !0 && a.getAttribute("classid") === b
		}
	}), p.fn.extend({
		data: function(a, c) {
			var d, e, f, g, h, i = this[0],
				j = 0,
				k = null;
			if (a === b) {
				if (this.length) {
					k = p.data(i);
					if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
						f = i.attributes;
						for (h = f.length; j < h; j++) g = f[j].name, g.indexOf("data-") || (g = p.camelCase(g.substring(5)), J(i, g, k[g]));
						p._data(i, "parsedAttrs", !0)
					}
				}
				return k
			}
			return typeof a == "object" ? this.each(function() {
				p.data(this, a)
			}) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", p.access(this, function(c) {
				if (c === b) return k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = p.data(i, a), k = J(i, a, k)), k === b && d[1] ? this.data(d[0]) : k;
				d[1] = c, this.each(function() {
					var b = p(this);
					b.triggerHandler("setData" + e, d), p.data(this, a, c), b.triggerHandler("changeData" + e, d)
				})
			}, null, c, arguments.length > 1, null, !1))
		},
		removeData: function(a) {
			return this.each(function() {
				p.removeData(this, a)
			})
		}
	}), p.extend({
		queue: function(a, b, c) {
			var d;
			if (a) return b = (b || "fx") + "queue", d = p._data(a, b), c && (!d || p.isArray(c) ? d = p._data(a, b, p.makeArray(c)) : d.push(c)), d || []
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = p.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = p._queueHooks(a, b),
				g = function() {
					p.dequeue(a, b)
				};
			e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return p._data(a, c) || p._data(a, c, {
				empty: p.Callbacks("once memory").add(function() {
					p.removeData(a, b + "queue", !0), p.removeData(a, c, !0)
				})
			})
		}
	}), p.fn.extend({
		queue: function(a, c) {
			var d = 2;
			return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? p.queue(this[0], a) : c === b ? this : this.each(function() {
				var b = p.queue(this, a, c);
				p._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				p.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			return a = p.fx ? p.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			var d, e = 1,
				f = p.Deferred(),
				g = this,
				h = this.length,
				i = function() {
					--e || f.resolveWith(g, [g])
				};
			typeof a != "string" && (c = a, a = b), a = a || "fx";
			while (h--) d = p._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
			return i(), f.promise(c)
		}
	});
	var L, M, N, O = /[\t\r\n]/g,
		P = /\r/g,
		Q = /^(?:button|input)$/i,
		R = /^(?:button|input|object|select|textarea)$/i,
		S = /^a(?:rea|)$/i,
		T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		U = p.support.getSetAttribute;
	p.fn.extend({
		attr: function(a, b) {
			return p.access(this, p.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				p.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return p.access(this, p.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return a = p.propFix[a] || a, this.each(function() {
				try {
					this[a] = b, delete this[a]
				} catch (c) {}
			})
		},
		addClass: function(a) {
			var b, c, d, e, f, g, h;
			if (p.isFunction(a)) return this.each(function(b) {
				p(this).addClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string") {
				b = a.split(s);
				for (c = 0, d = this.length; c < d; c++) {
					e = this[c];
					if (e.nodeType === 1)
						if (!e.className && b.length === 1) e.className = a;
						else {
							f = " " + e.className + " ";
							for (g = 0, h = b.length; g < h; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
							e.className = p.trim(f)
						}
				}
			}
			return this
		},
		removeClass: function(a) {
			var c, d, e, f, g, h, i;
			if (p.isFunction(a)) return this.each(function(b) {
				p(this).removeClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string" || a === b) {
				c = (a || "").split(s);
				for (h = 0, i = this.length; h < i; h++) {
					e = this[h];
					if (e.nodeType === 1 && e.className) {
						d = (" " + e.className + " ").replace(O, " ");
						for (f = 0, g = c.length; f < g; f++)
							while (d.indexOf(" " + c[f] + " ") >= 0) d = d.replace(" " + c[f] + " ", " ");
						e.className = a ? p.trim(d) : ""
					}
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = typeof b == "boolean";
			return p.isFunction(a) ? this.each(function(c) {
				p(this).toggleClass(a.call(this, c, this.className, b), b)
			}) : this.each(function() {
				if (c === "string") {
					var e, f = 0,
						g = p(this),
						h = b,
						i = a.split(s);
					while (e = i[f++]) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
				} else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || ""
			})
		},
		hasClass: function(a) {
			var b = " " + a + " ",
				c = 0,
				d = this.length;
			for (; c < d; c++)
				if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0) return !0;
			return !1
		},
		val: function(a) {
			var c, d, e, f = this[0];
			if (!arguments.length) {
				if (f) return c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(P, "") : d == null ? "" : d);
				return
			}
			return e = p.isFunction(a), this.each(function(d) {
				var f, g = p(this);
				if (this.nodeType !== 1) return;
				e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : p.isArray(f) && (f = p.map(f, function(a) {
					return a == null ? "" : a + ""
				})), c = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
				if (!c || !("set" in c) || c.set(this, f, "value") === b) this.value = f
			})
		}
	}), p.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					var b, c, d, e, f = a.selectedIndex,
						g = [],
						h = a.options,
						i = a.type === "select-one";
					if (f < 0) return null;
					c = i ? f : 0, d = i ? f + 1 : h.length;
					for (; c < d; c++) {
						e = h[c];
						if (e.selected && (p.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !p.nodeName(e.parentNode, "optgroup"))) {
							b = p(e).val();
							if (i) return b;
							g.push(b)
						}
					}
					return i && !g.length && h.length ? p(h[f]).val() : g
				},
				set: function(a, b) {
					var c = p.makeArray(b);
					return p(a).find("option").each(function() {
						this.selected = p.inArray(p(this).val(), c) >= 0
					}), c.length || (a.selectedIndex = -1), c
				}
			}
		},
		attrFn: {},
		attr: function(a, c, d, e) {
			var f, g, h, i = a.nodeType;
			if (!a || i === 3 || i === 8 || i === 2) return;
			if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
			if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
			h = i !== 1 || !p.isXMLDoc(a), h && (c = c.toLowerCase(), g = p.attrHooks[c] || (T.test(c) ? M : L));
			if (d !== b) {
				if (d === null) {
					p.removeAttr(a, c);
					return
				}
				return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d)
			}
			return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
		},
		removeAttr: function(a, b) {
			var c, d, e, f, g = 0;
			if (b && a.nodeType === 1) {
				d = b.split(s);
				for (; g < d.length; g++) e = d[g], e && (c = p.propFix[e] || e, f = T.test(e), f || p.attr(a, e, ""), a.removeAttribute(U ? e : c), f && c in a && (a[c] = !1))
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (Q.test(a.nodeName) && a.parentNode) p.error("type property can't be changed");
					else if (!p.support.radioValue && b === "radio" && p.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			},
			value: {
				get: function(a, b) {
					return L && p.nodeName(a, "button") ? L.get(a, b) : b in a ? a.value : null
				},
				set: function(a, b, c) {
					if (L && p.nodeName(a, "button")) return L.set(a, b, c);
					a.value = b
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, c, d) {
			var e, f, g, h = a.nodeType;
			if (!a || h === 3 || h === 8 || h === 2) return;
			return g = h !== 1 || !p.isXMLDoc(a), g && (c = p.propFix[c] || c, f = p.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var c = a.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b
				}
			}
		}
	}), M = {
		get: function(a, c) {
			var d, e = p.prop(a, c);
			return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
		},
		set: function(a, b, c) {
			var d;
			return b === !1 ? p.removeAttr(a, c) : (d = p.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
		}
	}, U || (N = {
		name: !0,
		id: !0,
		coords: !0
	}, L = p.valHooks.button = {
		get: function(a, c) {
			var d;
			return d = a.getAttributeNode(c), d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
		},
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			return d || (d = e.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
		}
	}, p.each(["width", "height"], function(a, b) {
		p.attrHooks[b] = p.extend(p.attrHooks[b], {
			set: function(a, c) {
				if (c === "") return a.setAttribute(b, "auto"), c
			}
		})
	}), p.attrHooks.contenteditable = {
		get: L.get,
		set: function(a, b, c) {
			b === "" && (b = "false"), L.set(a, b, c)
		}
	}), p.support.hrefNormalized || p.each(["href", "src", "width", "height"], function(a, c) {
		p.attrHooks[c] = p.extend(p.attrHooks[c], {
			get: function(a) {
				var d = a.getAttribute(c, 2);
				return d === null ? b : d
			}
		})
	}), p.support.style || (p.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || b
		},
		set: function(a, b) {
			return a.style.cssText = b + ""
		}
	}), p.support.optSelected || (p.propHooks.selected = p.extend(p.propHooks.selected, {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	})), p.support.enctype || (p.propFix.enctype = "encoding"), p.support.checkOn || p.each(["radio", "checkbox"], function() {
		p.valHooks[this] = {
			get: function(a) {
				return a.getAttribute("value") === null ? "on" : a.value
			}
		}
	}), p.each(["radio", "checkbox"], function() {
		p.valHooks[this] = p.extend(p.valHooks[this], {
			set: function(a, b) {
				if (p.isArray(b)) return a.checked = p.inArray(p(a).val(), b) >= 0
			}
		})
	});
	var V = /^(?:textarea|input|select)$/i,
		W = /^([^\.]*|)(?:\.(.+)|)$/,
		X = /(?:^|\s)hover(\.\S+|)\b/,
		Y = /^key/,
		Z = /^(?:mouse|contextmenu)|click/,
		$ = /^(?:focusinfocus|focusoutblur)$/,
		_ = function(a) {
			return p.event.special.hover ? a : a.replace(X, "mouseenter$1 mouseleave$1")
		};
	p.event = {
			add: function(a, c, d, e, f) {
				var g, h, i, j, k, l, m, n, o, q, r;
				if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a))) return;
				d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = p.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
					return typeof p != "undefined" && (!a || p.event.triggered !== a.type) ? p.event.dispatch.apply(h.elem, arguments) : b
				}, h.elem = a), c = p.trim(_(c)).split(" ");
				for (j = 0; j < c.length; j++) {
					k = W.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), r = p.event.special[l] || {}, l = (f ? r.delegateType : r.bindType) || l, r = p.event.special[l] || {}, n = p.extend({
						type: l,
						origType: k[1],
						data: e,
						handler: d,
						guid: d.guid,
						selector: f,
						needsContext: f && p.expr.match.needsContext.test(f),
						namespace: m.join(".")
					}, o), q = i[l];
					if (!q) {
						q = i[l] = [], q.delegateCount = 0;
						if (!r.setup || r.setup.call(a, e, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
					}
					r.add && (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? q.splice(q.delegateCount++, 0, n) : q.push(n), p.event.global[l] = !0
				}
				a = null
			},
			global: {},
			remove: function(a, b, c, d, e) {
				var f, g, h, i, j, k, l, m, n, o, q, r = p.hasData(a) && p._data(a);
				if (!r || !(m = r.events)) return;
				b = p.trim(_(b || "")).split(" ");
				for (f = 0; f < b.length; f++) {
					g = W.exec(b[f]) || [], h = i = g[1], j = g[2];
					if (!h) {
						for (h in m) p.event.remove(a, h + b[f], c, d, !0);
						continue
					}
					n = p.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
					for (l = 0; l < o.length; l++) q = o[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || d === "**" && q.selector) && (o.splice(l--, 1), q.selector && o.delegateCount--, n.remove && n.remove.call(a, q));
					o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) && p.removeEvent(a, h, r.handle), delete m[h])
				}
				p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0))
			},
			customEvent: {
				getData: !0,
				setData: !0,
				changeData: !0
			},
			trigger: function(c, d, f, g) {
				if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
					var h, i, j, k, l, m, n, o, q, r, s = c.type || c,
						t = [];
					if ($.test(s + p.event.triggered)) return;
					s.indexOf("!") >= 0 && (s = s.slice(0, -1), i = !0), s.indexOf(".") >= 0 && (t = s.split("."), s = t.shift(), t.sort());
					if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
					c = typeof c == "object" ? c[p.expando] ? c : new p.Event(s, c) : new p.Event(s), c.type = s, c.isTrigger = !0, c.exclusive = i, c.namespace = t.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = s.indexOf(":") < 0 ? "on" + s : "";
					if (!f) {
						h = p.cache;
						for (j in h) h[j].events && h[j].events[s] && p.event.trigger(c, d, h[j].handle.elem, !0);
						return
					}
					c.result = b, c.target || (c.target = f), d = d != null ? p.makeArray(d) : [], d.unshift(c), n = p.event.special[s] || {};
					if (n.trigger && n.trigger.apply(f, d) === !1) return;
					q = [
						[f, n.bindType || s]
					];
					if (!g && !n.noBubble && !p.isWindow(f)) {
						r = n.delegateType || s, k = $.test(r + s) ? f : f.parentNode;
						for (l = f; k; k = k.parentNode) q.push([k, r]), l = k;
						l === (f.ownerDocument || e) && q.push([l.defaultView || l.parentWindow || a, r])
					}
					for (j = 0; j < q.length && !c.isPropagationStopped(); j++) k = q[j][0], c.type = q[j][1], o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle"), o && o.apply(k, d), o = m && k[m], o && p.acceptData(k) && o.apply && o.apply(k, d) === !1 && c.preventDefault();
					return c.type = s, !g && !c.isDefaultPrevented() && (!n._default || n._default.apply(f.ownerDocument, d) === !1) && (s !== "click" || !p.nodeName(f, "a")) && p.acceptData(f) && m && f[s] && (s !== "focus" && s !== "blur" || c.target.offsetWidth !== 0) && !p.isWindow(f) && (l = f[m], l && (f[m] = null), p.event.triggered = s, f[s](), p.event.triggered = b, l && (f[m] = l)), c.result
				}
				return
			},
			dispatch: function(c) {
				c = p.event.fix(c || a.event);
				var d, e, f, g, h, i, j, l, m, n, o = (p._data(this, "events") || {})[c.type] || [],
					q = o.delegateCount,
					r = k.call(arguments),
					s = !c.exclusive && !c.namespace,
					t = p.event.special[c.type] || {},
					u = [];
				r[0] = c, c.delegateTarget = this;
				if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
				if (q && (!c.button || c.type !== "click"))
					for (f = c.target; f != this; f = f.parentNode || this)
						if (f.disabled !== !0 || c.type !== "click") {
							h = {}, j = [];
							for (d = 0; d < q; d++) l = o[d], m = l.selector, h[m] === b && (h[m] = l.needsContext ? p(m, this).index(f) >= 0 : p.find(m, this, null, [f]).length), h[m] && j.push(l);
							j.length && u.push({
								elem: f,
								matches: j
							})
						}
				o.length > q && u.push({
					elem: this,
					matches: o.slice(q)
				});
				for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
					i = u[d], c.currentTarget = i.elem;
					for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
						l = i.matches[e];
						if (s || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) c.data = l.data, c.handleObj = l, g = ((p.event.special[l.origType] || {}).handle || l.handler).apply(i.elem, r), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()))
					}
				}
				return t.postDispatch && t.postDispatch.call(this, c), c.result
			},
			props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(a, b) {
					return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(a, c) {
					var d, f, g, h = c.button,
						i = c.fromElement;
					return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || e, f = d.documentElement, g = d.body, a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? c.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0), a
				}
			},
			fix: function(a) {
				if (a[p.expando]) return a;
				var b, c, d = a,
					f = p.event.fixHooks[a.type] || {},
					g = f.props ? this.props.concat(f.props) : this.props;
				a = p.Event(d);
				for (b = g.length; b;) c = g[--b], a[c] = d[c];
				return a.target || (a.target = d.srcElement || e), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, f.filter ? f.filter(a, d) : a
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					delegateType: "focusin"
				},
				blur: {
					delegateType: "focusout"
				},
				beforeunload: {
					setup: function(a, b, c) {
						p.isWindow(this) && (this.onbeforeunload = c)
					},
					teardown: function(a, b) {
						this.onbeforeunload === b && (this.onbeforeunload = null)
					}
				}
			},
			simulate: function(a, b, c, d) {
				var e = p.extend(new p.Event, c, {
					type: a,
					isSimulated: !0,
					originalEvent: {}
				});
				d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
			}
		}, p.event.handle = p.event.dispatch, p.removeEvent = e.removeEventListener ? function(a, b, c) {
			a.removeEventListener && a.removeEventListener(b, c, !1)
		} : function(a, b, c) {
			var d = "on" + b;
			a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
		}, p.Event = function(a, b) {
			if (this instanceof p.Event) a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? bb : ba) : this.type = a, b && p.extend(this, b), this.timeStamp = a && a.timeStamp || p.now(), this[p.expando] = !0;
			else return new p.Event(a, b)
		}, p.Event.prototype = {
			preventDefault: function() {
				this.isDefaultPrevented = bb;
				var a = this.originalEvent;
				if (!a) return;
				a.preventDefault ? a.preventDefault() : a.returnValue = !1
			},
			stopPropagation: function() {
				this.isPropagationStopped = bb;
				var a = this.originalEvent;
				if (!a) return;
				a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = bb, this.stopPropagation()
			},
			isDefaultPrevented: ba,
			isPropagationStopped: ba,
			isImmediatePropagationStopped: ba
		}, p.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(a, b) {
			p.event.special[a] = {
				delegateType: b,
				bindType: b,
				handle: function(a) {
					var c, d = this,
						e = a.relatedTarget,
						f = a.handleObj,
						g = f.selector;
					if (!e || e !== d && !p.contains(d, e)) a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
					return c
				}
			}
		}), p.support.submitBubbles || (p.event.special.submit = {
			setup: function() {
				if (p.nodeName(this, "form")) return !1;
				p.event.add(this, "click._submit keypress._submit", function(a) {
					var c = a.target,
						d = p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
					d && !p._data(d, "_submit_attached") && (p.event.add(d, "submit._submit", function(a) {
						a._submit_bubble = !0
					}), p._data(d, "_submit_attached", !0))
				})
			},
			postDispatch: function(a) {
				a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && p.event.simulate("submit", this.parentNode, a, !0))
			},
			teardown: function() {
				if (p.nodeName(this, "form")) return !1;
				p.event.remove(this, "._submit")
			}
		}), p.support.changeBubbles || (p.event.special.change = {
			setup: function() {
				if (V.test(this.nodeName)) {
					if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function(a) {
						a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
					}), p.event.add(this, "click._change", function(a) {
						this._just_changed && !a.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, a, !0)
					});
					return !1
				}
				p.event.add(this, "beforeactivate._change", function(a) {
					var b = a.target;
					V.test(b.nodeName) && !p._data(b, "_change_attached") && (p.event.add(b, "change._change", function(a) {
						this.parentNode && !a.isSimulated && !a.isTrigger && p.event.simulate("change", this.parentNode, a, !0)
					}), p._data(b, "_change_attached", !0))
				})
			},
			handle: function(a) {
				var b = a.target;
				if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
			},
			teardown: function() {
				return p.event.remove(this, "._change"), !V.test(this.nodeName)
			}
		}), p.support.focusinBubbles || p.each({
			focus: "focusin",
			blur: "focusout"
		}, function(a, b) {
			var c = 0,
				d = function(a) {
					p.event.simulate(b, a.target, p.event.fix(a), !0)
				};
			p.event.special[b] = {
				setup: function() {
					c++ === 0 && e.addEventListener(a, d, !0)
				},
				teardown: function() {
					--c === 0 && e.removeEventListener(a, d, !0)
				}
			}
		}), p.fn.extend({
			on: function(a, c, d, e, f) {
				var g, h;
				if (typeof a == "object") {
					typeof c != "string" && (d = d || c, c = b);
					for (h in a) this.on(h, c, d, a[h], f);
					return this
				}
				d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
				if (e === !1) e = ba;
				else if (!e) return this;
				return f === 1 && (g = e, e = function(a) {
					return p().off(a), g.apply(this, arguments)
				}, e.guid = g.guid || (g.guid = p.guid++)), this.each(function() {
					p.event.add(this, a, e, d, c)
				})
			},
			one: function(a, b, c, d) {
				return this.on(a, b, c, d, 1)
			},
			off: function(a, c, d) {
				var e, f;
				if (a && a.preventDefault && a.handleObj) return e = a.handleObj, p(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
				if (typeof a == "object") {
					for (f in a) this.off(f, c, a[f]);
					return this
				}
				if (c === !1 || typeof c == "function") d = c, c = b;
				return d === !1 && (d = ba), this.each(function() {
					p.event.remove(this, a, d, c)
				})
			},
			bind: function(a, b, c) {
				return this.on(a, null, b, c)
			},
			unbind: function(a, b) {
				return this.off(a, null, b)
			},
			live: function(a, b, c) {
				return p(this.context).on(a, this.selector, b, c), this
			},
			die: function(a, b) {
				return p(this.context).off(a, this.selector || "**", b), this
			},
			delegate: function(a, b, c, d) {
				return this.on(b, a, c, d)
			},
			undelegate: function(a, b, c) {
				return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
			},
			trigger: function(a, b) {
				return this.each(function() {
					p.event.trigger(a, b, this)
				})
			},
			triggerHandler: function(a, b) {
				if (this[0]) return p.event.trigger(a, b, this[0], !0)
			},
			toggle: function(a) {
				var b = arguments,
					c = a.guid || p.guid++,
					d = 0,
					e = function(c) {
						var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
						return p._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
					};
				e.guid = c;
				while (d < b.length) b[d++].guid = c;
				return this.click(e)
			},
			hover: function(a, b) {
				return this.mouseenter(a).mouseleave(b || a)
			}
		}), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
			p.fn[b] = function(a, c) {
				return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
			}, Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks), Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks)
		}),
		function(a, b) {
			function bc(a, b, c, d) {
				c = c || [], b = b || r;
				var e, f, i, j, k = b.nodeType;
				if (!a || typeof a != "string") return c;
				if (k !== 1 && k !== 9) return [];
				i = g(b);
				if (!i && !d)
					if (e = P.exec(a))
						if (j = e[1]) {
							if (k === 9) {
								f = b.getElementById(j);
								if (!f || !f.parentNode) return c;
								if (f.id === j) return c.push(f), c
							} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(j)) && h(b, f) && f.id === j) return c.push(f), c
						} else {
							if (e[2]) return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c;
							if ((j = e[3]) && _ && b.getElementsByClassName) return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c
						}
				return bp(a.replace(L, "$1"), b, c, d, i)
			}

			function bd(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return c === "input" && b.type === a
				}
			}

			function be(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return (c === "input" || c === "button") && b.type === a
				}
			}

			function bf(a) {
				return z(function(b) {
					return b = +b, z(function(c, d) {
						var e, f = a([], c.length, b),
							g = f.length;
						while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					})
				})
			}

			function bg(a, b, c) {
				if (a === b) return c;
				var d = a.nextSibling;
				while (d) {
					if (d === b) return -1;
					d = d.nextSibling
				}
				return 1
			}

			function bh(a, b) {
				var c, d, f, g, h, i, j, k = C[o][a];
				if (k) return b ? 0 : k.slice(0);
				h = a, i = [], j = e.preFilter;
				while (h) {
					if (!c || (d = M.exec(h))) d && (h = h.slice(d[0].length)), i.push(f = []);
					c = !1;
					if (d = N.exec(h)) f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = d[0].replace(L, " ");
					for (g in e.filter)(d = W[g].exec(h)) && (!j[g] || (d = j[g](d, r, !0))) && (f.push(c = new q(d.shift())), h = h.slice(c.length), c.type = g, c.matches = d);
					if (!c) break
				}
				return b ? h.length : h ? bc.error(a) : C(a, i).slice(0)
			}

			function bi(a, b, d) {
				var e = b.dir,
					f = d && b.dir === "parentNode",
					g = u++;
				return b.first ? function(b, c, d) {
					while (b = b[e])
						if (f || b.nodeType === 1) return a(b, c, d)
				} : function(b, d, h) {
					if (!h) {
						var i, j = t + " " + g + " ",
							k = j + c;
						while (b = b[e])
							if (f || b.nodeType === 1) {
								if ((i = b[o]) === k) return b.sizset;
								if (typeof i == "string" && i.indexOf(j) === 0) {
									if (b.sizset) return b
								} else {
									b[o] = k;
									if (a(b, d, h)) return b.sizset = !0, b;
									b.sizset = !1
								}
							}
					} else
						while (b = b[e])
							if (f || b.nodeType === 1)
								if (a(b, d, h)) return b
				}
			}

			function bj(a) {
				return a.length > 1 ? function(b, c, d) {
					var e = a.length;
					while (e--)
						if (!a[e](b, c, d)) return !1;
					return !0
				} : a[0]
			}

			function bk(a, b, c, d, e) {
				var f, g = [],
					h = 0,
					i = a.length,
					j = b != null;
				for (; h < i; h++)
					if (f = a[h])
						if (!c || c(f, d, e)) g.push(f), j && b.push(h);
				return g
			}

			function bl(a, b, c, d, e, f) {
				return d && !d[o] && (d = bl(d)), e && !e[o] && (e = bl(e, f)), z(function(f, g, h, i) {
					if (f && e) return;
					var j, k, l, m = [],
						n = [],
						o = g.length,
						p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
						q = a && (f || !b) ? bk(p, m, a, h, i) : p,
						r = c ? e || (f ? a : o || d) ? [] : g : q;
					c && c(q, r, h, i);
					if (d) {
						l = bk(r, n), d(l, [], h, i), j = l.length;
						while (j--)
							if (k = l[j]) r[n[j]] = !(q[n[j]] = k)
					}
					if (f) {
						j = a && r.length;
						while (j--)
							if (k = r[j]) f[m[j]] = !(g[m[j]] = k)
					} else r = bk(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : w.apply(g, r)
				})
			}

			function bm(a) {
				var b, c, d, f = a.length,
					g = e.relative[a[0].type],
					h = g || e.relative[" "],
					i = g ? 1 : 0,
					j = bi(function(a) {
						return a === b
					}, h, !0),
					k = bi(function(a) {
						return y.call(b, a) > -1
					}, h, !0),
					m = [function(a, c, d) {
						return !g && (d || c !== l) || ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
					}];
				for (; i < f; i++)
					if (c = e.relative[a[i].type]) m = [bi(bj(m), c)];
					else {
						c = e.filter[a[i].type].apply(null, a[i].matches);
						if (c[o]) {
							d = ++i;
							for (; d < f; d++)
								if (e.relative[a[d].type]) break;
							return bl(i > 1 && bj(m), i > 1 && a.slice(0, i - 1).join("").replace(L, "$1"), c, i < d && bm(a.slice(i, d)), d < f && bm(a = a.slice(d)), d < f && a.join(""))
						}
						m.push(c)
					}
				return bj(m)
			}

			function bn(a, b) {
				var d = b.length > 0,
					f = a.length > 0,
					g = function(h, i, j, k, m) {
						var n, o, p, q = [],
							s = 0,
							u = "0",
							x = h && [],
							y = m != null,
							z = l,
							A = h || f && e.find.TAG("*", m && i.parentNode || i),
							B = t += z == null ? 1 : Math.E;
						y && (l = i !== r && i, c = g.el);
						for (;
							(n = A[u]) != null; u++) {
							if (f && n) {
								for (o = 0; p = a[o]; o++)
									if (p(n, i, j)) {
										k.push(n);
										break
									}
								y && (t = B, c = ++g.el)
							}
							d && ((n = !p && n) && s--, h && x.push(n))
						}
						s += u;
						if (d && u !== s) {
							for (o = 0; p = b[o]; o++) p(x, q, i, j);
							if (h) {
								if (s > 0)
									while (u--) !x[u] && !q[u] && (q[u] = v.call(k));
								q = bk(q)
							}
							w.apply(k, q), y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k)
						}
						return y && (t = B, l = z), x
					};
				return g.el = 0, d ? z(g) : g
			}

			function bo(a, b, c, d) {
				var e = 0,
					f = b.length;
				for (; e < f; e++) bc(a, b[e], c, d);
				return c
			}

			function bp(a, b, c, d, f) {
				var g, h, j, k, l, m = bh(a),
					n = m.length;
				if (!d && m.length === 1) {
					h = m[0] = m[0].slice(0);
					if (h.length > 2 && (j = h[0]).type === "ID" && b.nodeType === 9 && !f && e.relative[h[1].type]) {
						b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
						if (!b) return c;
						a = a.slice(h.shift().length)
					}
					for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
						j = h[g];
						if (e.relative[k = j.type]) break;
						if (l = e.find[k])
							if (d = l(j.matches[0].replace(V, ""), R.test(h[0].type) && b.parentNode || b, f)) {
								h.splice(g, 1), a = d.length && h.join("");
								if (!a) return w.apply(c, x.call(d, 0)), c;
								break
							}
					}
				}
				return i(a, m)(d, b, f, c, R.test(a)), c
			}

			function bq() {}
			var c, d, e, f, g, h, i, j, k, l, m = !0,
				n = "undefined",
				o = ("sizcache" + Math.random()).replace(".", ""),
				q = String,
				r = a.document,
				s = r.documentElement,
				t = 0,
				u = 0,
				v = [].pop,
				w = [].push,
				x = [].slice,
				y = [].indexOf || function(a) {
					var b = 0,
						c = this.length;
					for (; b < c; b++)
						if (this[b] === a) return b;
					return -1
				},
				z = function(a, b) {
					return a[o] = b == null || b, a
				},
				A = function() {
					var a = {},
						b = [];
					return z(function(c, d) {
						return b.push(c) > e.cacheLength && delete a[b.shift()], a[c] = d
					}, a)
				},
				B = A(),
				C = A(),
				D = A(),
				E = "[\\x20\\t\\r\\n\\f]",
				F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
				G = F.replace("w", "w#"),
				H = "([*^$|!~]?=)",
				I = "\\[" + E + "*(" + F + ")" + E + "*(?:" + H + E + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + G + ")|)|)" + E + "*\\]",
				J = ":(" + F + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)",
				K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)",
				L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
				M = new RegExp("^" + E + "*," + E + "*"),
				N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
				O = new RegExp(J),
				P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
				Q = /^:not/,
				R = /[\x20\t\r\n\f]*[+~]/,
				S = /:not\($/,
				T = /h\d/i,
				U = /input|select|textarea|button/i,
				V = /\\(?!\\)/g,
				W = {
					ID: new RegExp("^#(" + F + ")"),
					CLASS: new RegExp("^\\.(" + F + ")"),
					NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
					TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + I),
					PSEUDO: new RegExp("^" + J),
					POS: new RegExp(K, "i"),
					CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"),
					needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i")
				},
				X = function(a) {
					var b = r.createElement("div");
					try {
						return a(b)
					} catch (c) {
						return !1
					} finally {
						b = null
					}
				},
				Y = X(function(a) {
					return a.appendChild(r.createComment("")), !a.getElementsByTagName("*").length
				}),
				Z = X(function(a) {
					return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== n && a.firstChild.getAttribute("href") === "#"
				}),
				$ = X(function(a) {
					a.innerHTML = "<select></select>";
					var b = typeof a.lastChild.getAttribute("multiple");
					return b !== "boolean" && b !== "string"
				}),
				_ = X(function(a) {
					return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2)
				}),
				ba = X(function(a) {
					a.id = o + 0, a.innerHTML = "<a name='" + o + "'></a><div name='" + o + "'></div>", s.insertBefore(a, s.firstChild);
					var b = r.getElementsByName && r.getElementsByName(o).length === 2 + r.getElementsByName(o + 0).length;
					return d = !r.getElementById(o), s.removeChild(a), b
				});
			try {
				x.call(s.childNodes, 0)[0].nodeType
			} catch (bb) {
				x = function(a) {
					var b, c = [];
					for (; b = this[a]; a++) c.push(b);
					return c
				}
			}
			bc.matches = function(a, b) {
				return bc(a, null, null, b)
			}, bc.matchesSelector = function(a, b) {
				return bc(b, null, null, [a]).length > 0
			}, f = bc.getText = function(a) {
				var b, c = "",
					d = 0,
					e = a.nodeType;
				if (e) {
					if (e === 1 || e === 9 || e === 11) {
						if (typeof a.textContent == "string") return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) c += f(a)
					} else if (e === 3 || e === 4) return a.nodeValue
				} else
					for (; b = a[d]; d++) c += f(b);
				return c
			}, g = bc.isXML = function(a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return b ? b.nodeName !== "HTML" : !1
			}, h = bc.contains = s.contains ? function(a, b) {
				var c = a.nodeType === 9 ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
			} : s.compareDocumentPosition ? function(a, b) {
				return b && !!(a.compareDocumentPosition(b) & 16)
			} : function(a, b) {
				while (b = b.parentNode)
					if (b === a) return !0;
				return !1
			}, bc.attr = function(a, b) {
				var c, d = g(a);
				return d || (b = b.toLowerCase()), (c = e.attrHandle[b]) ? c(a) : d || $ ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
			}, e = bc.selectors = {
				cacheLength: 50,
				createPseudo: z,
				match: W,
				attrHandle: Z ? {} : {
					href: function(a) {
						return a.getAttribute("href", 2)
					},
					type: function(a) {
						return a.getAttribute("type")
					}
				},
				find: {
					ID: d ? function(a, b, c) {
						if (typeof b.getElementById !== n && !c) {
							var d = b.getElementById(a);
							return d && d.parentNode ? [d] : []
						}
					} : function(a, c, d) {
						if (typeof c.getElementById !== n && !d) {
							var e = c.getElementById(a);
							return e ? e.id === a || typeof e.getAttributeNode !== n && e.getAttributeNode("id").value === a ? [e] : b : []
						}
					},
					TAG: Y ? function(a, b) {
						if (typeof b.getElementsByTagName !== n) return b.getElementsByTagName(a)
					} : function(a, b) {
						var c = b.getElementsByTagName(a);
						if (a === "*") {
							var d, e = [],
								f = 0;
							for (; d = c[f]; f++) d.nodeType === 1 && e.push(d);
							return e
						}
						return c
					},
					NAME: ba && function(a, b) {
						if (typeof b.getElementsByName !== n) return b.getElementsByName(name)
					},
					CLASS: _ && function(a, b, c) {
						if (typeof b.getElementsByClassName !== n && !c) return b.getElementsByClassName(a)
					}
				},
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
					ATTR: function(a) {
						return a[1] = a[1].replace(V, ""), a[3] = (a[4] || a[5] || "").replace(V, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
					},
					CHILD: function(a) {
						return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || bc.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && bc.error(a[0]), a
					},
					PSEUDO: function(a) {
						var b, c;
						if (W.CHILD.test(a[0])) return null;
						if (a[3]) a[2] = a[3];
						else if (b = a[4]) O.test(b) && (c = bh(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b;
						return a.slice(0, 3)
					}
				},
				filter: {
					ID: d ? function(a) {
						return a = a.replace(V, ""),
							function(b) {
								return b.getAttribute("id") === a
							}
					} : function(a) {
						return a = a.replace(V, ""),
							function(b) {
								var c = typeof b.getAttributeNode !== n && b.getAttributeNode("id");
								return c && c.value === a
							}
					},
					TAG: function(a) {
						return a === "*" ? function() {
							return !0
						} : (a = a.replace(V, "").toLowerCase(), function(b) {
							return b.nodeName && b.nodeName.toLowerCase() === a
						})
					},
					CLASS: function(a) {
						var b = B[o][a];
						return b || (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))),
							function(a) {
								return b.test(a.className || typeof a.getAttribute !== n && a.getAttribute("class") || "")
							}
					},
					ATTR: function(a, b, c) {
						return function(d, e) {
							var f = bc.attr(d, a);
							return f == null ? b === "!=" : b ? (f += "", b === "=" ? f === c : b === "!=" ? f !== c : b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c) > -1 : b === "$=" ? c && f.substr(f.length - c.length) === c : b === "~=" ? (" " + f + " ").indexOf(c) > -1 : b === "|=" ? f === c || f.substr(0, c.length + 1) === c + "-" : !1) : !0
						}
					},
					CHILD: function(a, b, c, d) {
						return a === "nth" ? function(a) {
							var b, e, f = a.parentNode;
							if (c === 1 && d === 0) return !0;
							if (f) {
								e = 0;
								for (b = f.firstChild; b; b = b.nextSibling)
									if (b.nodeType === 1) {
										e++;
										if (a === b) break
									}
							}
							return e -= d, e === c || e % c === 0 && e / c >= 0
						} : function(b) {
							var c = b;
							switch (a) {
								case "only":
								case "first":
									while (c = c.previousSibling)
										if (c.nodeType === 1) return !1;
									if (a === "first") return !0;
									c = b;
								case "last":
									while (c = c.nextSibling)
										if (c.nodeType === 1) return !1;
									return !0
							}
						}
					},
					PSEUDO: function(a, b) {
						var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || bc.error("unsupported pseudo: " + a);
						return d[o] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? z(function(a, c) {
							var e, f = d(a, b),
								g = f.length;
							while (g--) e = y.call(a, f[g]), a[e] = !(c[e] = f[g])
						}) : function(a) {
							return d(a, 0, c)
						}) : d
					}
				},
				pseudos: {
					not: z(function(a) {
						var b = [],
							c = [],
							d = i(a.replace(L, "$1"));
						return d[o] ? z(function(a, b, c, e) {
							var f, g = d(a, null, e, []),
								h = a.length;
							while (h--)
								if (f = g[h]) a[h] = !(b[h] = f)
						}) : function(a, e, f) {
							return b[0] = a, d(b, null, f, c), !c.pop()
						}
					}),
					has: z(function(a) {
						return function(b) {
							return bc(a, b).length > 0
						}
					}),
					contains: z(function(a) {
						return function(b) {
							return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
						}
					}),
					enabled: function(a) {
						return a.disabled === !1
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						var b = a.nodeName.toLowerCase();
						return b === "input" && !!a.checked || b === "option" && !!a.selected
					},
					selected: function(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					parent: function(a) {
						return !e.pseudos.empty(a)
					},
					empty: function(a) {
						var b;
						a = a.firstChild;
						while (a) {
							if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) return !1;
							a = a.nextSibling
						}
						return !0
					},
					header: function(a) {
						return T.test(a.nodeName)
					},
					text: function(a) {
						var b, c;
						return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
					},
					radio: bd("radio"),
					checkbox: bd("checkbox"),
					file: bd("file"),
					password: bd("password"),
					image: bd("image"),
					submit: be("submit"),
					reset: be("reset"),
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return b === "input" && a.type === "button" || b === "button"
					},
					input: function(a) {
						return U.test(a.nodeName)
					},
					focus: function(a) {
						var b = a.ownerDocument;
						return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && (!!a.type || !!a.href)
					},
					active: function(a) {
						return a === a.ownerDocument.activeElement
					},
					first: bf(function(a, b, c) {
						return [0]
					}),
					last: bf(function(a, b, c) {
						return [b - 1]
					}),
					eq: bf(function(a, b, c) {
						return [c < 0 ? c + b : c]
					}),
					even: bf(function(a, b, c) {
						for (var d = 0; d < b; d += 2) a.push(d);
						return a
					}),
					odd: bf(function(a, b, c) {
						for (var d = 1; d < b; d += 2) a.push(d);
						return a
					}),
					lt: bf(function(a, b, c) {
						for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
						return a
					}),
					gt: bf(function(a, b, c) {
						for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
						return a
					})
				}
			}, j = s.compareDocumentPosition ? function(a, b) {
				return a === b ? (k = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
			} : function(a, b) {
				if (a === b) return k = !0, 0;
				if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
				var c, d, e = [],
					f = [],
					g = a.parentNode,
					h = b.parentNode,
					i = g;
				if (g === h) return bg(a, b);
				if (!g) return -1;
				if (!h) return 1;
				while (i) e.unshift(i), i = i.parentNode;
				i = h;
				while (i) f.unshift(i), i = i.parentNode;
				c = e.length, d = f.length;
				for (var j = 0; j < c && j < d; j++)
					if (e[j] !== f[j]) return bg(e[j], f[j]);
				return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1)
			}, [0, 0].sort(j), m = !k, bc.uniqueSort = function(a) {
				var b, c = 1;
				k = m, a.sort(j);
				if (k)
					for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
				return a
			}, bc.error = function(a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			}, i = bc.compile = function(a, b) {
				var c, d = [],
					e = [],
					f = D[o][a];
				if (!f) {
					b || (b = bh(a)), c = b.length;
					while (c--) f = bm(b[c]), f[o] ? d.push(f) : e.push(f);
					f = D(a, bn(e, d))
				}
				return f
			}, r.querySelectorAll && function() {
				var a, b = bp,
					c = /'|\\/g,
					d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
					e = [":focus"],
					f = [":active", ":focus"],
					h = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector;
				X(function(a) {
					a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || e.push("\\[" + E + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || e.push(":checked")
				}), X(function(a) {
					a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + E + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
				}), e = new RegExp(e.join("|")), bp = function(a, d, f, g, h) {
					if (!g && !h && (!e || !e.test(a))) {
						var i, j, k = !0,
							l = o,
							m = d,
							n = d.nodeType === 9 && a;
						if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
							i = bh(a), (k = d.getAttribute("id")) ? l = k.replace(c, "\\$&") : d.setAttribute("id", l), l = "[id='" + l + "'] ", j = i.length;
							while (j--) i[j] = l + i[j].join("");
							m = R.test(a) && d.parentNode || d, n = i.join(",")
						}
						if (n) try {
							return w.apply(f, x.call(m.querySelectorAll(n), 0)), f
						} catch (p) {} finally {
							k || d.removeAttribute("id")
						}
					}
					return b(a, d, f, g, h)
				}, h && (X(function(b) {
					a = h.call(b, "div");
					try {
						h.call(b, "[test!='']:sizzle"), f.push("!=", J)
					} catch (c) {}
				}), f = new RegExp(f.join("|")), bc.matchesSelector = function(b, c) {
					c = c.replace(d, "='$1']");
					if (!g(b) && !f.test(c) && (!e || !e.test(c))) try {
						var i = h.call(b, c);
						if (i || a || b.document && b.document.nodeType !== 11) return i
					} catch (j) {}
					return bc(c, null, null, [b]).length > 0
				})
			}(), e.pseudos.nth = e.pseudos.eq, e.filters = bq.prototype = e.pseudos, e.setFilters = new bq, bc.attr = p.attr, p.find = bc, p.expr = bc.selectors, p.expr[":"] = p.expr.pseudos, p.unique = bc.uniqueSort, p.text = bc.getText, p.isXMLDoc = bc.isXML, p.contains = bc.contains
		}(a);
	var bc = /Until$/,
		bd = /^(?:parents|prev(?:Until|All))/,
		be = /^.[^:#\[\.,]*$/,
		bf = p.expr.match.needsContext,
		bg = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	p.fn.extend({
		find: function(a) {
			var b, c, d, e, f, g, h = this;
			if (typeof a != "string") return p(a).filter(function() {
				for (b = 0, c = h.length; b < c; b++)
					if (p.contains(h[b], this)) return !0
			});
			g = this.pushStack("", "find", a);
			for (b = 0, c = this.length; b < c; b++) {
				d = g.length, p.find(a, this[b], g);
				if (b > 0)
					for (e = d; e < g.length; e++)
						for (f = 0; f < d; f++)
							if (g[f] === g[e]) {
								g.splice(e--, 1);
								break
							}
			}
			return g
		},
		has: function(a) {
			var b, c = p(a, this),
				d = c.length;
			return this.filter(function() {
				for (b = 0; b < d; b++)
					if (p.contains(this, c[b])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(bj(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(bj(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && (typeof a == "string" ? bf.test(a) ? p(a, this.context).index(this[0]) >= 0 : p.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			var c, d = 0,
				e = this.length,
				f = [],
				g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
			for (; d < e; d++) {
				c = this[d];
				while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
					if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
						f.push(c);
						break
					}
					c = c.parentNode
				}
			}
			return f = f.length > 1 ? p.unique(f) : f, this.pushStack(f, "closest", a)
		},
		index: function(a) {
			return a ? typeof a == "string" ? p.inArray(this[0], p(a)) : p.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(a, b) {
			var c = typeof a == "string" ? p(a, b) : p.makeArray(a && a.nodeType ? [a] : a),
				d = p.merge(this.get(), c);
			return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d))
		},
		addBack: function(a) {
			return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
		}
	}), p.fn.andSelf = p.fn.addBack, p.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b : null
		},
		parents: function(a) {
			return p.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return p.dir(a, "parentNode", c)
		},
		next: function(a) {
			return bi(a, "nextSibling")
		},
		prev: function(a) {
			return bi(a, "previousSibling")
		},
		nextAll: function(a) {
			return p.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return p.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return p.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return p.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return p.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return p.sibling(a.firstChild)
		},
		contents: function(a) {
			return p.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : p.merge([], a.childNodes)
		}
	}, function(a, b) {
		p.fn[a] = function(c, d) {
			var e = p.map(this, b, c);
			return bc.test(a) || (d = c), d && typeof d == "string" && (e = p.filter(d, e)), e = this.length > 1 && !bg[a] ? p.unique(e) : e, this.length > 1 && bd.test(a) && (e = e.reverse()), this.pushStack(e, a, k.call(arguments).join(","))
		}
	}), p.extend({
		filter: function(a, b, c) {
			return c && (a = ":not(" + a + ")"), b.length === 1 ? p.find.matchesSelector(b[0], a) ? [b[0]] : [] : p.find.matches(a, b)
		},
		dir: function(a, c, d) {
			var e = [],
				f = a[c];
			while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !p(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
			return e
		},
		sibling: function(a, b) {
			var c = [];
			for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
			return c
		}
	});
	var bl = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		bm = / jQuery\d+="(?:null|\d+)"/g,
		bn = /^\s+/,
		bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bp = /<([\w:]+)/,
		bq = /<tbody/i,
		br = /<|&#?\w+;/,
		bs = /<(?:script|style|link)/i,
		bt = /<(?:script|object|embed|option|style)/i,
		bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
		bv = /^(?:checkbox|radio)$/,
		bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
		bx = /\/(java|ecma)script/i,
		by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
		bz = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		bA = bk(e),
		bB = bA.appendChild(e.createElement("div"));
	bz.optgroup = bz.option, bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead, bz.th = bz.td, p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]), p.fn.extend({
			text: function(a) {
				return p.access(this, function(a) {
					return a === b ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
				}, null, a, arguments.length)
			},
			wrapAll: function(a) {
				if (p.isFunction(a)) return this.each(function(b) {
					p(this).wrapAll(a.call(this, b))
				});
				if (this[0]) {
					var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
						var a = this;
						while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
						return a
					}).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				return p.isFunction(a) ? this.each(function(b) {
					p(this).wrapInner(a.call(this, b))
				}) : this.each(function() {
					var b = p(this),
						c = b.contents();
					c.length ? c.wrapAll(a) : b.append(a)
				})
			},
			wrap: function(a) {
				var b = p.isFunction(a);
				return this.each(function(c) {
					p(this).wrapAll(b ? a.call(this, c) : a)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
				}).end()
			},
			append: function() {
				return this.domManip(arguments, !0, function(a) {
					(this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
				})
			},
			prepend: function() {
				return this.domManip(arguments, !0, function(a) {
					(this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
				})
			},
			before: function() {
				if (!bh(this[0])) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this)
				});
				if (arguments.length) {
					var a = p.clean(arguments);
					return this.pushStack(p.merge(a, this), "before", this.selector)
				}
			},
			after: function() {
				if (!bh(this[0])) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this.nextSibling)
				});
				if (arguments.length) {
					var a = p.clean(arguments);
					return this.pushStack(p.merge(this, a), "after", this.selector)
				}
			},
			remove: function(a, b) {
				var c, d = 0;
				for (;
					(c = this[d]) != null; d++)
					if (!a || p.filter(a, [c]).length) !b && c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
				return this
			},
			empty: function() {
				var a, b = 0;
				for (;
					(a = this[b]) != null; b++) {
					a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
					while (a.firstChild) a.removeChild(a.firstChild)
				}
				return this
			},
			clone: function(a, b) {
				return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
					return p.clone(this, a, b)
				})
			},
			html: function(a) {
				return p.access(this, function(a) {
					var c = this[0] || {},
						d = 0,
						e = this.length;
					if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
					if (typeof a == "string" && !bs.test(a) && (p.support.htmlSerialize || !bu.test(a)) && (p.support.leadingWhitespace || !bn.test(a)) && !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]) {
						a = a.replace(bo, "<$1></$2>");
						try {
							for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (p.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
							c = 0
						} catch (f) {}
					}
					c && this.empty().append(a)
				}, null, a, arguments.length)
			},
			replaceWith: function(a) {
				return bh(this[0]) ? this.length ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a) : this : p.isFunction(a) ? this.each(function(b) {
					var c = p(this),
						d = c.html();
					c.replaceWith(a.call(this, b, d))
				}) : (typeof a != "string" && (a = p(a).detach()), this.each(function() {
					var b = this.nextSibling,
						c = this.parentNode;
					p(this).remove(), b ? p(b).before(a) : p(c).append(a)
				}))
			},
			detach: function(a) {
				return this.remove(a, !0)
			},
			domManip: function(a, c, d) {
				a = [].concat.apply([], a);
				var e, f, g, h, i = 0,
					j = a[0],
					k = [],
					l = this.length;
				if (!p.support.checkClone && l > 1 && typeof j == "string" && bw.test(j)) return this.each(function() {
					p(this).domManip(a, c, d)
				});
				if (p.isFunction(j)) return this.each(function(e) {
					var f = p(this);
					a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
				});
				if (this[0]) {
					e = p.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
					if (f) {
						c = c && p.nodeName(f, "tr");
						for (h = e.cacheable || l - 1; i < l; i++) d.call(c && p.nodeName(this[i], "table") ? bC(this[i], "tbody") : this[i], i === h ? g : p.clone(g, !0, !0))
					}
					g = f = null, k.length && p.each(k, function(a, b) {
						b.src ? p.ajax ? p.ajax({
							url: b.src,
							type: "GET",
							dataType: "script",
							async: !1,
							global: !1,
							"throws": !0
						}) : p.error("no ajax") : p.globalEval((b.text || b.textContent || b.innerHTML || "").replace(by, "")), b.parentNode && b.parentNode.removeChild(b)
					})
				}
				return this
			}
		}), p.buildFragment = function(a, c, d) {
			var f, g, h, i = a[0];
			return c = c || e, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof i == "string" && i.length < 512 && c === e && i.charAt(0) === "<" && !bt.test(i) && (p.support.checkClone || !bw.test(i)) && (p.support.html5Clone || !bu.test(i)) && (g = !0, f = p.fragments[i], h = f !== b), f || (f = c.createDocumentFragment(), p.clean(a, c, f, d), g && (p.fragments[i] = h && f)), {
				fragment: f,
				cacheable: g
			}
		}, p.fragments = {}, p.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(a, b) {
			p.fn[a] = function(c) {
				var d, e = 0,
					f = [],
					g = p(c),
					h = g.length,
					i = this.length === 1 && this[0].parentNode;
				if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) return g[b](this[0]), this;
				for (; e < h; e++) d = (e > 0 ? this.clone(!0) : this).get(), p(g[e])[b](d), f = f.concat(d);
				return this.pushStack(f, a, g.selector)
			}
		}), p.extend({
			clone: function(a, b, c) {
				var d, e, f, g;
				p.support.html5Clone || p.isXMLDoc(a) || !bu.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bB.innerHTML = a.outerHTML, bB.removeChild(g = bB.firstChild));
				if ((!p.support.noCloneEvent || !p.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !p.isXMLDoc(a)) {
					bE(a, g), d = bF(a), e = bF(g);
					for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f])
				}
				if (b) {
					bD(a, g);
					if (c) {
						d = bF(a), e = bF(g);
						for (f = 0; d[f]; ++f) bD(d[f], e[f])
					}
				}
				return d = e = null, g
			},
			clean: function(a, b, c, d) {
				var f, g, h, i, j, k, l, m, n, o, q, r, s = b === e && bA,
					t = [];
				if (!b || typeof b.createDocumentFragment == "undefined") b = e;
				for (f = 0;
					(h = a[f]) != null; f++) {
					typeof h == "number" && (h += "");
					if (!h) continue;
					if (typeof h == "string")
						if (!br.test(h)) h = b.createTextNode(h);
						else {
							s = s || bk(b), l = b.createElement("div"), s.appendChild(l), h = h.replace(bo, "<$1></$2>"), i = (bp.exec(h) || ["", ""])[1].toLowerCase(), j = bz[i] || bz._default, k = j[0], l.innerHTML = j[1] + h + j[2];
							while (k--) l = l.lastChild;
							if (!p.support.tbody) {
								m = bq.test(h), n = i === "table" && !m ? l.firstChild && l.firstChild.childNodes : j[1] === "<table>" && !m ? l.childNodes : [];
								for (g = n.length - 1; g >= 0; --g) p.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
							}!p.support.leadingWhitespace && bn.test(h) && l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild), h = l.childNodes, l.parentNode.removeChild(l)
						}
					h.nodeType ? t.push(h) : p.merge(t, h)
				}
				l && (h = l = s = null);
				if (!p.support.appendChecked)
					for (f = 0;
						(h = t[f]) != null; f++) p.nodeName(h, "input") ? bG(h) : typeof h.getElementsByTagName != "undefined" && p.grep(h.getElementsByTagName("input"), bG);
				if (c) {
					q = function(a) {
						if (!a.type || bx.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
					};
					for (f = 0;
						(h = t[f]) != null; f++)
						if (!p.nodeName(h, "script") || !q(h)) c.appendChild(h), typeof h.getElementsByTagName != "undefined" && (r = p.grep(p.merge([], h.getElementsByTagName("script")), q), t.splice.apply(t, [f + 1, 0].concat(r)), f += r.length)
				}
				return t
			},
			cleanData: function(a, b) {
				var c, d, e, f, g = 0,
					h = p.expando,
					i = p.cache,
					j = p.support.deleteExpando,
					k = p.event.special;
				for (;
					(e = a[g]) != null; g++)
					if (b || p.acceptData(e)) {
						d = e[h], c = d && i[d];
						if (c) {
							if (c.events)
								for (f in c.events) k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
							i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, p.deletedIds.push(d))
						}
					}
			}
		}),
		function() {
			var a, b;
			p.uaMatch = function(a) {
				a = a.toLowerCase();
				var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
				return {
					browser: b[1] || "",
					version: b[2] || "0"
				}
			}, a = p.uaMatch(g.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), p.browser = b, p.sub = function() {
				function a(b, c) {
					return new a.fn.init(b, c)
				}
				p.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function c(c, d) {
					return d && d instanceof p && !(d instanceof a) && (d = a(d)), p.fn.init.call(this, c, d, b)
				}, a.fn.init.prototype = a.fn;
				var b = a(e);
				return a
			}
		}();
	var bH, bI, bJ, bK = /alpha\([^)]*\)/i,
		bL = /opacity=([^)]*)/,
		bM = /^(top|right|bottom|left)$/,
		bN = /^(none|table(?!-c[ea]).+)/,
		bO = /^margin/,
		bP = new RegExp("^(" + q + ")(.*)$", "i"),
		bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
		bR = new RegExp("^([-+])=(" + q + ")", "i"),
		bS = {},
		bT = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		bU = {
			letterSpacing: 0,
			fontWeight: 400
		},
		bV = ["Top", "Right", "Bottom", "Left"],
		bW = ["Webkit", "O", "Moz", "ms"],
		bX = p.fn.toggle;
	p.fn.extend({
		css: function(a, c) {
			return p.access(this, function(a, c, d) {
				return d !== b ? p.style(a, c, d) : p.css(a, c)
			}, a, c, arguments.length > 1)
		},
		show: function() {
			return b$(this, !0)
		},
		hide: function() {
			return b$(this)
		},
		toggle: function(a, b) {
			var c = typeof a == "boolean";
			return p.isFunction(a) && p.isFunction(b) ? bX.apply(this, arguments) : this.each(function() {
				(c ? a : bZ(this)) ? p(this).show(): p(this).hide()
			})
		}
	}), p.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = bH(a, "opacity");
						return c === "" ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": p.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, c, d, e) {
			if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
			var f, g, h, i = p.camelCase(c),
				j = a.style;
			c = p.cssProps[i] || (p.cssProps[i] = bY(j, i)), h = p.cssHooks[c] || p.cssHooks[i];
			if (d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
			g = typeof d, g === "string" && (f = bR.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c)), g = "number");
			if (d == null || g === "number" && isNaN(d)) return;
			g === "number" && !p.cssNumber[i] && (d += "px");
			if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) try {
				j[c] = d
			} catch (k) {}
		},
		css: function(a, c, d, e) {
			var f, g, h, i = p.camelCase(c);
			return c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i)), h = p.cssHooks[c] || p.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = bH(a, c)), f === "normal" && c in bU && (f = bU[c]), d || e !== b ? (g = parseFloat(f), d || p.isNumeric(g) ? g || 0 : f) : f
		},
		swap: function(a, b, c) {
			var d, e, f = {};
			for (e in b) f[e] = a.style[e], a.style[e] = b[e];
			d = c.call(a);
			for (e in b) a.style[e] = f[e];
			return d
		}
	}), a.getComputedStyle ? bH = function(b, c) {
		var d, e, f, g, h = a.getComputedStyle(b, null),
			i = b.style;
		return h && (d = h[c], d === "" && !p.contains(b.ownerDocument, b) && (d = p.style(b, c)), bQ.test(d) && bO.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
	} : e.documentElement.currentStyle && (bH = function(a, b) {
		var c, d, e = a.currentStyle && a.currentStyle[b],
			f = a.style;
		return e == null && f && f[b] && (e = f[b]), bQ.test(e) && !bM.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
	}), p.each(["height", "width"], function(a, b) {
		p.cssHooks[b] = {
			get: function(a, c, d) {
				if (c) return a.offsetWidth === 0 && bN.test(bH(a, "display")) ? p.swap(a, bT, function() {
					return cb(a, b, d)
				}) : cb(a, b, d)
			},
			set: function(a, c, d) {
				return b_(a, c, d ? ca(a, b, d, p.support.boxSizing && p.css(a, "boxSizing") === "border-box") : 0)
			}
		}
	}), p.support.opacity || (p.cssHooks.opacity = {
		get: function(a, b) {
			return bL.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1;
			if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
				c.removeAttribute("filter");
				if (d && !d.filter) return
			}
			c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e
		}
	}), p(function() {
		p.support.reliableMarginRight || (p.cssHooks.marginRight = {
			get: function(a, b) {
				return p.swap(a, {
					display: "inline-block"
				}, function() {
					if (b) return bH(a, "marginRight")
				})
			}
		}), !p.support.pixelPosition && p.fn.position && p.each(["top", "left"], function(a, b) {
			p.cssHooks[b] = {
				get: function(a, c) {
					if (c) {
						var d = bH(a, b);
						return bQ.test(d) ? p(a).position()[b] + "px" : d
					}
				}
			}
		})
	}), p.expr && p.expr.filters && (p.expr.filters.hidden = function(a) {
		return a.offsetWidth === 0 && a.offsetHeight === 0 || !p.support.reliableHiddenOffsets && (a.style && a.style.display || bH(a, "display")) === "none"
	}, p.expr.filters.visible = function(a) {
		return !p.expr.filters.hidden(a)
	}), p.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		p.cssHooks[a + b] = {
			expand: function(c) {
				var d, e = typeof c == "string" ? c.split(" ") : [c],
					f = {};
				for (d = 0; d < 4; d++) f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
				return f
			}
		}, bO.test(a) || (p.cssHooks[a + b].set = b_)
	});
	var cd = /%20/g,
		ce = /\[\]$/,
		cf = /\r?\n/g,
		cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		ch = /^(?:select|textarea)/i;
	p.fn.extend({
		serialize: function() {
			return p.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? p.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || ch.test(this.nodeName) || cg.test(this.type))
			}).map(function(a, b) {
				var c = p(this).val();
				return c == null ? null : p.isArray(c) ? p.map(c, function(a, c) {
					return {
						name: b.name,
						value: a.replace(cf, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(cf, "\r\n")
				}
			}).get()
		}
	}), p.param = function(a, c) {
		var d, e = [],
			f = function(a, b) {
				b = p.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
		if (p.isArray(a) || a.jquery && !p.isPlainObject(a)) p.each(a, function() {
			f(this.name, this.value)
		});
		else
			for (d in a) ci(d, a[d], c, f);
		return e.join("&").replace(cd, "+")
	};
	var cj, ck, cl = /#.*$/,
		cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		co = /^(?:GET|HEAD)$/,
		cp = /^\/\//,
		cq = /\?/,
		cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		cs = /([?&])_=[^&]*/,
		ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		cu = p.fn.load,
		cv = {},
		cw = {},
		cx = ["*/"] + ["*"];
	try {
		ck = f.href
	} catch (cy) {
		ck = e.createElement("a"), ck.href = "", ck = ck.href
	}
	cj = ct.exec(ck.toLowerCase()) || [], p.fn.load = function(a, c, d) {
		if (typeof a != "string" && cu) return cu.apply(this, arguments);
		if (!this.length) return this;
		var e, f, g, h = this,
			i = a.indexOf(" ");
		return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), p.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"), p.ajax({
			url: a,
			type: f,
			dataType: "html",
			data: c,
			complete: function(a, b) {
				d && h.each(d, g || [a.responseText, b, a])
			}
		}).done(function(a) {
			g = arguments, h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a)
		}), this
	}, p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		p.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), p.each(["get", "post"], function(a, c) {
		p[c] = function(a, d, e, f) {
			return p.isFunction(d) && (f = f || e, e = d, d = b), p.ajax({
				type: c,
				url: a,
				data: d,
				success: e,
				dataType: f
			})
		}
	}), p.extend({
		getScript: function(a, c) {
			return p.get(a, b, c, "script")
		},
		getJSON: function(a, b, c) {
			return p.get(a, b, c, "json")
		},
		ajaxSetup: function(a, b) {
			return b ? cB(a, p.ajaxSettings) : (b = a, a = p.ajaxSettings), cB(a, b), a
		},
		ajaxSettings: {
			url: ck,
			isLocal: cn.test(cj[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": cx
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": a.String,
				"text html": !0,
				"text json": p.parseJSON,
				"text xml": p.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: cz(cv),
		ajaxTransport: cz(cw),
		ajax: function(a, c) {
			function y(a, c, f, i) {
				var k, s, t, u, w, y = c;
				if (v === 2) return;
				v = 2, h && clearTimeout(h), g = b, e = i || "", x.readyState = a > 0 ? 4 : 0, f && (u = cC(l, x, f));
				if (a >= 200 && a < 300 || a === 304) l.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (p.lastModified[d] = w), w = x.getResponseHeader("Etag"), w && (p.etag[d] = w)), a === 304 ? (y = "notmodified", k = !0) : (k = cD(l, u), y = k.state, s = k.data, t = k.error, k = !t);
				else {
					t = y;
					if (!y || a) y = "error", a < 0 && (a = 0)
				}
				x.status = a, x.statusText = (c || y) + "", k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]), x.statusCode(r), r = b, j && n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]), q.fireWith(m, [x, y]), j && (n.trigger("ajaxComplete", [x, l]), --p.active || p.event.trigger("ajaxStop"))
			}
			typeof a == "object" && (c = a, a = b), c = c || {};
			var d, e, f, g, h, i, j, k, l = p.ajaxSetup({}, c),
				m = l.context || l,
				n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
				o = p.Deferred(),
				q = p.Callbacks("once memory"),
				r = l.statusCode || {},
				t = {},
				u = {},
				v = 0,
				w = "canceled",
				x = {
					readyState: 0,
					setRequestHeader: function(a, b) {
						if (!v) {
							var c = a.toLowerCase();
							a = u[c] = u[c] || a, t[a] = b
						}
						return this
					},
					getAllResponseHeaders: function() {
						return v === 2 ? e : null
					},
					getResponseHeader: function(a) {
						var c;
						if (v === 2) {
							if (!f) {
								f = {};
								while (c = cm.exec(e)) f[c[1].toLowerCase()] = c[2]
							}
							c = f[a.toLowerCase()]
						}
						return c === b ? null : c
					},
					overrideMimeType: function(a) {
						return v || (l.mimeType = a), this
					},
					abort: function(a) {
						return a = a || w, g && g.abort(a), y(0, a), this
					}
				};
			o.promise(x), x.success = x.done, x.error = x.fail, x.complete = q.add, x.statusCode = function(a) {
				if (a) {
					var b;
					if (v < 2)
						for (b in a) r[b] = [r[b], a[b]];
					else b = a[x.status], x.always(b)
				}
				return this
			}, l.url = ((a || l.url) + "").replace(cl, "").replace(cp, cj[1] + "//"), l.dataTypes = p.trim(l.dataType || "*").toLowerCase().split(s), l.crossDomain == null && (i = ct.exec(l.url.toLowerCase()) || !1, l.crossDomain = i && i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !== cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443)), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), cA(cv, l, c, x);
			if (v === 2) return x;
			j = l.global, l.type = l.type.toUpperCase(), l.hasContent = !co.test(l.type), j && p.active++ === 0 && p.event.trigger("ajaxStart");
			if (!l.hasContent) {
				l.data && (l.url += (cq.test(l.url) ? "&" : "?") + l.data, delete l.data), d = l.url;
				if (l.cache === !1) {
					var z = p.now(),
						A = l.url.replace(cs, "$1_=" + z);
					l.url = A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "")
				}
			}(l.data && l.hasContent && l.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", l.contentType), l.ifModified && (d = d || l.url, p.lastModified[d] && x.setRequestHeader("If-Modified-Since", p.lastModified[d]), p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])), x.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "") : l.accepts["*"]);
			for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
			if (!l.beforeSend || l.beforeSend.call(m, x, l) !== !1 && v !== 2) {
				w = "abort";
				for (k in {
						success: 1,
						error: 1,
						complete: 1
					}) x[k](l[k]);
				g = cA(cw, l, c, x);
				if (!g) y(-1, "No Transport");
				else {
					x.readyState = 1, j && n.trigger("ajaxSend", [x, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
						x.abort("timeout")
					}, l.timeout));
					try {
						v = 1, g.send(t, y)
					} catch (B) {
						if (v < 2) y(-1, B);
						else throw B
					}
				}
				return x
			}
			return x.abort()
		},
		active: 0,
		lastModified: {},
		etag: {}
	});
	var cE = [],
		cF = /\?/,
		cG = /(=)\?(?=&|$)|\?\?/,
		cH = p.now();
	p.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = cE.pop() || p.expando + "_" + cH++;
			return this[a] = !0, a
		}
	}), p.ajaxPrefilter("json jsonp", function(c, d, e) {
		var f, g, h, i = c.data,
			j = c.url,
			k = c.jsonp !== !1,
			l = k && cG.test(j),
			m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && cG.test(i);
		if (c.dataTypes[0] === "jsonp" || l || m) return f = c.jsonpCallback = p.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(cG, "$1" + f) : m ? c.data = i.replace(cG, "$1" + f) : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
			return h || p.error(f + " was not called"), h[0]
		}, c.dataTypes[0] = "json", a[f] = function() {
			h = arguments
		}, e.always(function() {
			a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, cE.push(f)), h && p.isFunction(g) && g(h[0]), h = g = b
		}), "script"
	}), p.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				return p.globalEval(a), a
			}
		}
	}), p.ajaxPrefilter("script", function(a) {
		a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), p.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
			return {
				send: function(f, g) {
					c = e.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
						if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || g(200, "success")
					}, d.insertBefore(c, d.firstChild)
				},
				abort: function() {
					c && c.onload(0, 1)
				}
			}
		}
	});
	var cI, cJ = a.ActiveXObject ? function() {
			for (var a in cI) cI[a](0, 1)
		} : !1,
		cK = 0;
	p.ajaxSettings.xhr = a.ActiveXObject ? function() {
			return !this.isLocal && cL() || cM()
		} : cL,
		function(a) {
			p.extend(p.support, {
				ajax: !!a,
				cors: !!a && "withCredentials" in a
			})
		}(p.ajaxSettings.xhr()), p.support.ajax && p.ajaxTransport(function(c) {
			if (!c.crossDomain || p.support.cors) {
				var d;
				return {
					send: function(e, f) {
						var g, h, i = c.xhr();
						c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
						if (c.xhrFields)
							for (h in c.xhrFields) i[h] = c.xhrFields[h];
						c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
						try {
							for (h in e) i.setRequestHeader(h, e[h])
						} catch (j) {}
						i.send(c.hasContent && c.data || null), d = function(a, e) {
							var h, j, k, l, m;
							try {
								if (d && (e || i.readyState === 4)) {
									d = b, g && (i.onreadystatechange = p.noop, cJ && delete cI[g]);
									if (e) i.readyState !== 4 && i.abort();
									else {
										h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
										try {
											l.text = i.responseText
										} catch (a) {}
										try {
											j = i.statusText
										} catch (n) {
											j = ""
										}!h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
									}
								}
							} catch (o) {
								e || f(-1, o)
							}
							l && f(h, j, l, k)
						}, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++cK, cJ && (cI || (cI = {}, p(a).unload(cJ)), cI[g] = d), i.onreadystatechange = d) : d()
					},
					abort: function() {
						d && d(0, 1)
					}
				}
			}
		});
	var cN, cO, cP = /^(?:toggle|show|hide)$/,
		cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
		cR = /queueHooks$/,
		cS = [cY],
		cT = {
			"*": [function(a, b) {
				var c, d, e = this.createTween(a, b),
					f = cQ.exec(b),
					g = e.cur(),
					h = +g || 0,
					i = 1,
					j = 20;
				if (f) {
					c = +f[2], d = f[3] || (p.cssNumber[a] ? "" : "px");
					if (d !== "px" && h) {
						h = p.css(e.elem, a, !0) || c || 1;
						do i = i || ".5", h = h / i, p.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && i !== 1 && --j)
					}
					e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
				}
				return e
			}]
		};
	p.Animation = p.extend(cW, {
		tweener: function(a, b) {
			p.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			var c, d = 0,
				e = a.length;
			for (; d < e; d++) c = a[d], cT[c] = cT[c] || [], cT[c].unshift(b)
		},
		prefilter: function(a, b) {
			b ? cS.unshift(a) : cS.push(a)
		}
	}), p.Tween = cZ, cZ.prototype = {
		constructor: cZ,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (p.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = cZ.propHooks[this.prop];
			return a && a.get ? a.get(this) : cZ.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = cZ.propHooks[this.prop];
			return this.options.duration ? this.pos = b = p.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : cZ.propHooks._default.set(this), this
		}
	}, cZ.prototype.init.prototype = cZ.prototype, cZ.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = p.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
			},
			set: function(a) {
				p.fx.step[a.prop] ? p.fx.step[a.prop](a) : a.elem.style && (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop]) ? p.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, p.each(["toggle", "show", "hide"], function(a, b) {
		var c = p.fn[b];
		p.fn[b] = function(d, e, f) {
			return d == null || typeof d == "boolean" || !a && p.isFunction(d) && p.isFunction(e) ? c.apply(this, arguments) : this.animate(c$(b, !0), d, e, f)
		}
	}), p.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(bZ).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = p.isEmptyObject(a),
				f = p.speed(b, c, d),
				g = function() {
					var b = cW(this, p.extend({}, a), f);
					e && b.stop(!0)
				};
			return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function(a, c, d) {
			var e = function(a) {
				var b = a.stop;
				delete a.stop, b(d)
			};
			return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				var b = !0,
					c = a != null && a + "queueHooks",
					f = p.timers,
					g = p._data(this);
				if (c) g[c] && g[c].stop && e(g[c]);
				else
					for (c in g) g[c] && g[c].stop && cR.test(c) && e(g[c]);
				for (c = f.length; c--;) f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
				(b || !d) && p.dequeue(this, a)
			})
		}
	}), p.each({
		slideDown: c$("show"),
		slideUp: c$("hide"),
		slideToggle: c$("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		p.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), p.speed = function(a, b, c) {
		var d = a && typeof a == "object" ? p.extend({}, a) : {
			complete: c || !c && b || p.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !p.isFunction(b) && b
		};
		d.duration = p.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in p.fx.speeds ? p.fx.speeds[d.duration] : p.fx.speeds._default;
		if (d.queue == null || d.queue === !0) d.queue = "fx";
		return d.old = d.complete, d.complete = function() {
			p.isFunction(d.old) && d.old.call(this), d.queue && p.dequeue(this, d.queue)
		}, d
	}, p.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, p.timers = [], p.fx = cZ.prototype.init, p.fx.tick = function() {
		var a, b = p.timers,
			c = 0;
		for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
		b.length || p.fx.stop()
	}, p.fx.timer = function(a) {
		a() && p.timers.push(a) && !cO && (cO = setInterval(p.fx.tick, p.fx.interval))
	}, p.fx.interval = 13, p.fx.stop = function() {
		clearInterval(cO), cO = null
	}, p.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, p.fx.step = {}, p.expr && p.expr.filters && (p.expr.filters.animated = function(a) {
		return p.grep(p.timers, function(b) {
			return a === b.elem
		}).length
	});
	var c_ = /^(?:body|html)$/i;
	p.fn.offset = function(a) {
		if (arguments.length) return a === b ? this : this.each(function(b) {
			p.offset.setOffset(this, a, b)
		});
		var c, d, e, f, g, h, i, j = {
				top: 0,
				left: 0
			},
			k = this[0],
			l = k && k.ownerDocument;
		if (!l) return;
		return (d = l.body) === k ? p.offset.bodyOffset(k) : (c = l.documentElement, p.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()), e = da(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
			top: j.top + h - f,
			left: j.left + i - g
		}) : j)
	}, p.offset = {
		bodyOffset: function(a) {
			var b = a.offsetTop,
				c = a.offsetLeft;
			return p.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(p.css(a, "marginTop")) || 0, c += parseFloat(p.css(a, "marginLeft")) || 0), {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			var d = p.css(a, "position");
			d === "static" && (a.style.position = "relative");
			var e = p(a),
				f = e.offset(),
				g = p.css(a, "top"),
				h = p.css(a, "left"),
				i = (d === "absolute" || d === "fixed") && p.inArray("auto", [g, h]) > -1,
				j = {},
				k = {},
				l, m;
			i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), p.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
		}
	}, p.fn.extend({
		position: function() {
			if (!this[0]) return;
			var a = this[0],
				b = this.offsetParent(),
				c = this.offset(),
				d = c_.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			return c.top -= parseFloat(p.css(a, "marginTop")) || 0, c.left -= parseFloat(p.css(a, "marginLeft")) || 0, d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0, {
				top: c.top - d.top,
				left: c.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || e.body;
				while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static") a = a.offsetParent;
				return a || e.body
			})
		}
	}), p.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, c) {
		var d = /Y/.test(c);
		p.fn[a] = function(e) {
			return p.access(this, function(a, e, f) {
				var g = da(a);
				if (f === b) return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
				g ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop()) : a[e] = f
			}, a, e, arguments.length, null)
		}
	}), p.each({
		Height: "height",
		Width: "width"
	}, function(a, c) {
		p.each({
			padding: "inner" + a,
			content: c,
			"": "outer" + a
		}, function(d, e) {
			p.fn[e] = function(e, f) {
				var g = arguments.length && (d || typeof e != "boolean"),
					h = d || (e === !0 || f === !0 ? "margin" : "border");
				return p.access(this, function(c, d, e) {
					var f;
					return p.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? p.css(c, d, e, h) : p.style(c, d, e, h)
				}, c, g ? e : b, g, null)
			}
		})
	}), a.jQuery = a.$ = p, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return p
	})
})(window);