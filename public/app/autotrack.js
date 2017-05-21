(function () {
  var f, aa = typeof Object.defineProperties === 'function' ? Object.defineProperty : function (a, b, c) { if (c.get || c.set) throw new TypeError('ES3 does not support getters and setters.'); a != Array.prototype && a != Object.prototype && (a[b] = c.value) }, k = typeof window !== 'undefined' && window === this ? this : typeof global !== 'undefined' && global != null ? global : this; function ba () { ba = function () {}; k.Symbol || (k.Symbol = ca) } var da = 0; function ca (a) { return 'jscomp_symbol_' + (a || '') + da++ }
  function l () { ba(); var a = k.Symbol.iterator; a || (a = k.Symbol.iterator = k.Symbol('iterator')); typeof Array.prototype[a] !== 'function' && aa(Array.prototype, a, {configurable: !0, writable: !0, value: function () { return ea(this) }}); l = function () {} } function ea (a) { var b = 0; return fa(function () { return b < a.length ? {done: !1, value: a[b++]} : {done: !0} }) } function fa (a) { l(); a = {next: a}; a[k.Symbol.iterator] = function () { return this }; return a }
  function m (a) { if (!(a instanceof Array)) { l(); var b = a[Symbol.iterator]; a = b ? b.call(a) : ea(a); for (var c = []; !(b = a.next()).done;)c.push(b.value); a = c } return a } function ha (a, b) { function c () {}c.prototype = b.prototype; a.prototype = new c(); a.prototype.constructor = a; for (var d in b) if (Object.defineProperties) { var e = Object.getOwnPropertyDescriptor(b, d); e && Object.defineProperty(a, d, e) } else a[d] = b[d] }
  var n = window.Element.prototype, ia = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector; function ja (a, b) { if (a && a.nodeType == 1 && b) { if (typeof b === 'string' || b.nodeType == 1) return a == b || ka(a, b); if ('length' in b) for (var c = 0, d; d = b[c]; c++) if (a == d || ka(a, d)) return !0 } return !1 } function ka (a, b) { if (typeof b !== 'string') return !1; if (ia) return ia.call(a, b); b = a.parentNode.querySelectorAll(b); for (var c = 0, d; d = b[c]; c++) if (d == a) return !0; return !1 }
  function la (a) { for (var b = []; a && a.parentNode && a.parentNode.nodeType == 1;)a = a.parentNode, b.push(a); return b }
  function p (a, b, c) { function d (a) { var d; if (h.composed && typeof a.composedPath === 'function') for (var e = a.composedPath(), g = 0, E; E = e[g]; g++)E.nodeType == 1 && ja(E, b) && (d = E); else a: { if ((d = a.target) && d.nodeType == 1 && b) for (d = [d].concat(la(d)), e = 0; g = d[e]; e++) if (ja(g, b)) { d = g; break a }d = void 0 }d && c.call(d, a, d) } var e = document, h = {composed: !0, S: !0}, h = void 0 === h ? {} : h; e.addEventListener(a, d, h.S); return {j: function () { e.removeEventListener(a, d, h.S) }} }
  function ma (a) { var b = {}; if (!a || a.nodeType != 1) return b; a = a.attributes; if (!a.length) return {}; for (var c = 0, d; d = a[c]; c++)b[d.name] = d.value; return b } var na = /:(80|443)$/, q = document.createElement('a'), r = {}
  function t (a) { a = a && a != '.' ? a : location.href; if (r[a]) return r[a]; q.href = a; if (a.charAt(0) == '.' || a.charAt(0) == '/') return t(q.href); var b = q.port == '80' || q.port == '443' ? '' : q.port, b = b == '0' ? '' : b, c = q.host.replace(na, ''); return r[a] = {hash: q.hash, host: c, hostname: q.hostname, href: q.href, origin: q.origin ? q.origin : q.protocol + '//' + c, pathname: q.pathname.charAt(0) == '/' ? q.pathname : '/' + q.pathname, port: b, protocol: q.protocol, search: q.search} } var u = []
  function oa (a, b) { var c = this; this.context = a; this.P = b; this.f = (this.c = /Task$/.test(b)) ? a.get(b) : a[b]; this.b = []; this.a = []; this.i = function (a) { for (var b = [], d = 0; d < arguments.length; ++d)b[d - 0] = arguments[d]; return c.a[c.a.length - 1].apply(null, [].concat(m(b))) }; this.c ? a.set(b, this.i) : a[b] = this.i } function v (a, b, c) { a = pa(a, b); a.b.push(c); qa(a) } function w (a, b, c) { a = pa(a, b); c = a.b.indexOf(c); c > -1 && (a.b.splice(c, 1), a.b.length > 0 ? qa(a) : a.j()) }
  function qa (a) { a.a = []; for (var b, c = 0; b = a.b[c]; c++) { var d = a.a[c - 1] || a.f.bind(a.context); a.a.push(b(d)) } }oa.prototype.j = function () { var a = u.indexOf(this); a > -1 && (u.splice(a, 1), this.c ? this.context.set(this.P, this.f) : this.context[this.P] = this.f) }; function pa (a, b) { var c = u.filter(function (c) { return c.context == a && c.P == b })[0]; c || (c = new oa(a, b), u.push(c)); return c }
  function x (a, b, c, d, e, h) { if (typeof d === 'function') { var g = c.get('buildHitTask'); return {buildHitTask: function (c) { c.set(a, null, !0); c.set(b, null, !0); d(c, e, h); g(c) }} } return y({}, a, b) } function z (a, b) { var c = ma(a), d = {}; Object.keys(c).forEach(function (a) { if (!a.indexOf(b) && a != b + 'on') { var e = c[a]; e == 'true' && (e = !0); e == 'false' && (e = !1); a = ra(a.slice(b.length)); d[a] = e } }); return d }
  function sa (a) { document.readyState == 'loading' ? document.addEventListener('DOMContentLoaded', function c () { document.removeEventListener('DOMContentLoaded', c); a() }) : a() } function ta (a, b) { var c; return function (d) { for (var e = [], h = 0; h < arguments.length; ++h)e[h - 0] = arguments[h]; clearTimeout(c); c = setTimeout(function () { return a.apply(null, [].concat(m(e))) }, b) } } function ua (a) { function b () { c || (c = !0, a()) } var c = !1; setTimeout(b, 2E3); return b } var A = {}
  function va (a, b) { function c () { clearTimeout(e.timeout); e.send && w(a, 'send', e.send); delete A[d]; e.R.forEach(function (a) { return a() }) } var d = a.get('trackingId'), e = A[d] = A[d] || {}; clearTimeout(e.timeout); e.timeout = setTimeout(c, 0); e.R = e.R || []; e.R.push(b); e.send || (e.send = function (a) { return function (b) { for (var d = [], e = 0; e < arguments.length; ++e)d[e - 0] = arguments[e]; c(); a.apply(null, [].concat(m(d))) } }, v(a, 'send', e.send)) }
  var y = Object.assign || function (a, b) { for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d]; for (var d = 0, e = c.length; d < e; d++) { var h = Object(c[d]), g; for (g in h)Object.prototype.hasOwnProperty.call(h, g) && (a[g] = h[g]) } return a }; function ra (a) { return a.replace(/[\-\_]+(\w?)/g, function (a, c) { return c.toUpperCase() }) } function B (a) { return typeof a === 'object' && a !== null }
  function C (a, b) { var c = window.GoogleAnalyticsObject || 'ga'; window[c] = window[c] || function (a) { for (var b = [], d = 0; d < arguments.length; ++d)b[d - 0] = arguments[d]; (window[c].q = window[c].q || []).push(b) }; window.gaDevIds = window.gaDevIds || []; window.gaDevIds.indexOf('i5iSjo') < 0 && window.gaDevIds.push('i5iSjo'); window[c]('provide', a, b); window.gaplugins = window.gaplugins || {}; window.gaplugins[a.charAt(0).toUpperCase() + a.slice(1)] = b } var F = {T: 1, U: 2, V: 3, X: 4, Y: 5, Z: 6, $: 7, aa: 8, ba: 9, W: 10}, G = Object.keys(F).length
  function H (a, b) { a.set('\x26_av', '2.3.2'); var c = a.get('\x26_au'), c = parseInt(c || '0', 16).toString(2); if (c.length < G) for (var d = G - c.length; d;)c = '0' + c, d--; b = G - b; c = c.substr(0, b) + 1 + c.substr(b + 1); a.set('\x26_au', parseInt(c || '0', 2).toString(16)) } function I (a, b) { H(a, F.T); this.a = y({}, b); this.i = a; this.b = this.a.stripQuery && this.a.queryDimensionIndex ? 'dimension' + this.a.queryDimensionIndex : null; this.f = this.f.bind(this); this.c = this.c.bind(this); v(a, 'get', this.f); v(a, 'buildHitTask', this.c) }
  I.prototype.f = function (a) { var b = this; return function (c) { if (c == 'page' || c == b.b) { var d = {location: a('location'), page: a('page')}; return wa(b, d)[c] } return a(c) } }; I.prototype.c = function (a) { var b = this; return function (c) { var d = wa(b, {location: c.get('location'), page: c.get('page')}); c.set(d, null, !0); a(c) } }
  function wa (a, b) {
    var c = t(b.page || b.location), d = c.pathname; if (a.a.indexFilename) { var e = d.split('/'); a.a.indexFilename == e[e.length - 1] && (e[e.length - 1] = '', d = e.join('/')) }a.a.trailingSlash == 'remove' ? d = d.replace(/\/+$/, '') : a.a.trailingSlash == 'add' && (/\.\w+$/.test(d) || d.substr(-1) == '/' || (d += '/')); d = {page: d + (a.a.stripQuery ? '' : c.search)}; b.location && (d.location = b.location); a.b && (d[a.b] = c.search.slice(1) || '(not set)'); return typeof a.a.urlFieldsFilter === 'function' ? (b = a.a.urlFieldsFilter(d, t), c = {}, c.page = b.page,
c.location = b.location, c[a.b] = b[a.b], c) : d
  }I.prototype.remove = function () { w(this.i, 'get', this.f); w(this.i, 'buildHitTask', this.c) }; C('cleanUrlTracker', I); function J (a, b) { var c = this; H(a, F.U); if (window.addEventListener) { this.a = y({events: ['click'], fieldsObj: {}, attributePrefix: 'ga-'}, b); this.f = a; this.c = this.c.bind(this); var d = '[' + this.a.attributePrefix + 'on]'; this.b = {}; this.a.events.forEach(function (a) { c.b[a] = p(a, d, c.c) }) } }
  J.prototype.c = function (a, b) { var c = this.a.attributePrefix; if (!(b.getAttribute(c + 'on').split(/\s*,\s*/).indexOf(a.type) < 0)) { var c = z(b, c), d = y({}, this.a.fieldsObj, c); this.f.send(c.hitType || 'event', x({transport: 'beacon'}, d, this.f, this.a.hitFilter, b, a)) } }; J.prototype.remove = function () { var a = this; Object.keys(this.b).forEach(function (b) { a.b[b].j() }) }; C('eventTracker', J)
  function xa (a, b) { var c = this; H(a, F.V); window.IntersectionObserver && window.MutationObserver && (this.a = y({rootMargin: '0px', fieldsObj: {}, attributePrefix: 'ga-'}, b), this.c = a, this.M = this.M.bind(this), this.O = this.O.bind(this), this.K = this.K.bind(this), this.L = this.L.bind(this), this.b = null, this.items = [], this.h = {}, this.g = {}, sa(function () { c.a.elements && c.observeElements(c.a.elements) })) }f = xa.prototype
  f.observeElements = function (a) { var b = this; a = K(this, a); this.items = this.items.concat(a.items); this.h = y({}, a.h, this.h); this.g = y({}, a.g, this.g); a.items.forEach(function (a) { var c = b.g[a.threshold] = b.g[a.threshold] || new IntersectionObserver(b.O, {rootMargin: b.a.rootMargin, threshold: [+a.threshold]}); (a = b.h[a.id] || (b.h[a.id] = document.getElementById(a.id))) && c.observe(a) }); this.b || (this.b = new MutationObserver(this.M), this.b.observe(document.body, {childList: !0, subtree: !0})); requestAnimationFrame(function () {}) }
  f.unobserveElements = function (a) { var b = [], c = []; this.items.forEach(function (d) { a.some(function (a) { a = ya(a); return a.id === d.id && a.threshold === d.threshold && a.trackFirstImpressionOnly === d.trackFirstImpressionOnly }) ? c.push(d) : b.push(d) }); if (b.length) { var d = K(this, b), e = K(this, c); this.items = d.items; this.h = d.h; this.g = d.g; c.forEach(function (a) { if (!d.h[a.id]) { var b = e.g[a.threshold], c = e.h[a.id]; c && b.unobserve(c); d.g[a.threshold] || e.g[a.threshold].disconnect() } }) } else this.unobserveAllElements() }
  f.unobserveAllElements = function () { var a = this; Object.keys(this.g).forEach(function (b) { a.g[b].disconnect() }); this.b.disconnect(); this.b = null; this.items = []; this.h = {}; this.g = {} }; function K (a, b) { var c = [], d = {}, e = {}; b.length && b.forEach(function (b) { b = ya(b); c.push(b); e[b.id] = a.h[b.id] || null; d[b.threshold] = a.g[b.threshold] || null }); return {items: c, h: e, g: d} }f.M = function (a) { for (var b = 0, c; c = a[b]; b++) { for (var d = 0, e; e = c.removedNodes[d]; d++)L(this, e, this.L); for (d = 0; e = c.addedNodes[d]; d++)L(this, e, this.K) } }
  function L (a, b, c) { b.nodeType == 1 && b.id in a.h && c(b.id); for (var d = 0, e; e = b.childNodes[d]; d++)L(a, e, c) }
  f.O = function (a) {
    for (var b = [], c = 0, d; d = a[c]; c++) {
      for (var e = 0, h; h = this.items[e]; e++) {
        var g; if (g = d.target.id === h.id)(g = h.threshold) ? g = d.intersectionRatio >= g : (g = d.intersectionRect, g = g.top > 0 || g.bottom > 0 || g.left > 0 || g.right > 0); if (g) {
          var D = h.id; g = document.getElementById(D); var D = {transport: 'beacon', eventCategory: 'Viewport', eventAction: 'impression', eventLabel: D, nonInteraction: !0}, Ia = y({}, this.a.fieldsObj, z(g, this.a.attributePrefix)); this.c.send('event', x(D, Ia, this.c, this.a.hitFilter, g)); h.trackFirstImpressionOnly &&
b.push(h)
        }
      }
    }b.length && this.unobserveElements(b)
  }; f.K = function (a) { var b = this, c = this.h[a] = document.getElementById(a); this.items.forEach(function (d) { a == d.id && b.g[d.threshold].observe(c) }) }; f.L = function (a) { var b = this, c = this.h[a]; this.items.forEach(function (d) { a == d.id && b.g[d.threshold].unobserve(c) }); this.h[a] = null }; f.remove = function () { this.unobserveAllElements() }; C('impressionTracker', xa); function ya (a) { typeof a === 'string' && (a = {id: a}); return y({threshold: 0, trackFirstImpressionOnly: !0}, a) }
  function za () { this.a = {} } function Aa (a, b) { (a.a.externalSet = a.a.externalSet || []).push(b) }za.prototype.ca = function (a, b) { for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d]; (this.a[a] = this.a[a] || []).forEach(function (a) { return a.apply(null, [].concat(m(c))) }) }; var M = {}, N = !1, O; function P (a, b) { b = void 0 === b ? {} : b; this.a = {}; this.b = a; this.w = b; this.l = null }ha(P, za); function Q (a, b, c) { a = ['autotrack', a, b].join(':'); M[a] || (M[a] = new P(a, c), N || (window.addEventListener('storage', Ba), N = !0)); return M[a] }
  function R () { if (O != null) return O; try { window.localStorage.setItem('autotrack', 'autotrack'), window.localStorage.removeItem('autotrack'), O = !0 } catch (a) { O = !1 } return O }P.prototype.get = function () { if (this.l) return this.l; if (R()) try { this.l = S(window.localStorage.getItem(this.b)) } catch (a) {} return this.l = y({}, this.w, this.l) }; P.prototype.set = function (a) { this.l = y({}, this.w, this.l, a); if (R()) try { var b = JSON.stringify(this.l); window.localStorage.setItem(this.b, b) } catch (c) {} }
  function Ca (a) { a.l = {}; if (R()) try { window.localStorage.removeItem(a.b) } catch (b) {} }P.prototype.j = function () { delete M[this.b]; Object.keys(M).length || (window.removeEventListener('storage', Ba), N = !1) }; function Ba (a) { var b = M[a.key]; if (b) { var c = y({}, b.w, S(a.oldValue)); a = y({}, b.w, S(a.newValue)); b.l = a; b.ca('externalSet', a, c) } } function S (a) { var b = {}; if (a) try { b = JSON.parse(a) } catch (c) {} return b } var Da = {}
  function T (a, b, c) { this.f = a; this.timeout = b || U; this.timeZone = c; this.b = this.b.bind(this); v(a, 'sendHitTask', this.b); try { this.c = new Intl.DateTimeFormat('en-US', {timeZone: this.timeZone}) } catch (d) {} this.a = Q(a.get('trackingId'), 'session', {hitTime: 0, isExpired: !1}) }T.prototype.isExpired = function (a) { a = a || this.a.get(); if (a.isExpired) return !0; var b = new Date(), c = (a = a.hitTime) && new Date(a); return a && (b - c > 6E4 * this.timeout || this.c && this.c.format(b) != this.c.format(c)) ? !0 : !1 }
  T.prototype.b = function (a) { var b = this; return function (c) { a(c); var d = b.a.get(), e = b.isExpired(d); c = c.get('sessionControl'); d.hitTime = +new Date(); if (c == 'start' || e)d.isExpired = !1; c == 'end' && (d.isExpired = !0); b.a.set(d) } }; T.prototype.j = function () { w(this.f, 'sendHitTask', this.b); this.a.j(); delete Da[this.f.get('trackingId')] }; var U = 30
  function V (a, b) { H(a, F.W); window.addEventListener && (this.a = y({increaseThreshold: 20, sessionTimeout: U, fieldsObj: {}}, b), this.c = a, this.b = Ea(this), this.f = ta(this.f.bind(this), 500), this.m = this.m.bind(this), this.i = Q(a.get('trackingId'), 'plugins/max-scroll-tracker'), this.s = new T(a, this.a.sessionTimeout, this.a.timeZone), v(a, 'set', this.m), Fa(this)) } function Fa (a) { (a.i.get()[a.b] || 0) < 100 && window.addEventListener('scroll', a.f) }
  V.prototype.f = function () {
    var a = document.documentElement, b = document.body, a = Math.min(100, Math.max(0, Math.round(window.pageYOffset / (Math.max(a.offsetHeight, a.scrollHeight, b.offsetHeight, b.scrollHeight) - window.innerHeight) * 100))); if (this.s.isExpired())Ca(this.i); else if (b = this.i.get()[this.b] || 0, a > b && (a != 100 && b != 100 || window.removeEventListener('scroll', this.f), b = a - b, a == 100 || b >= this.a.increaseThreshold)) {
      var c = {}; this.i.set((c[this.b] = a, c)); a = {transport: 'beacon',
        eventCategory: 'Max Scroll',
        eventAction: 'increase',
        eventValue: b,
        eventLabel: String(a),
        nonInteraction: !0}; this.a.maxScrollMetricIndex && (a['metric' + this.a.maxScrollMetricIndex] = b); this.c.send('event', x(a, this.a.fieldsObj, this.c, this.a.hitFilter))
    }
  }; V.prototype.m = function (a) { var b = this; return function (c, d) { a(c, d); var e = {}; (B(c) ? c : (e[c] = d, e)).page && (c = b.b, b.b = Ea(b), b.b != c && Fa(b)) } }; function Ea (a) { a = t(a.c.get('page') || a.c.get('location')); return a.pathname + a.search }
  V.prototype.remove = function () { this.s.j(); window.removeEventListener('scroll', this.f); w(this.c, 'set', this.m) }; C('maxScrollTracker', V); var Ga = {}; function W (a, b) { H(a, F.X); window.matchMedia && (this.a = y({changeTemplate: this.changeTemplate, changeTimeout: 1E3, fieldsObj: {}}, b), B(this.a.definitions) && (b = this.a.definitions, this.a.definitions = Array.isArray(b) ? b : [b], this.b = a, this.c = [], Ha(this))) }
  function Ha (a) { a.a.definitions.forEach(function (b) { if (b.name && b.dimensionIndex) { var c = Ja(b); a.b.set('dimension' + b.dimensionIndex, c); Ka(a, b) } }) } function Ja (a) { var b; a.items.forEach(function (a) { La(a.media).matches && (b = a) }); return b ? b.name : '(not set)' }
  function Ka (a, b) { b.items.forEach(function (c) { c = La(c.media); var d = ta(function () { var c = Ja(b), d = a.b.get('dimension' + b.dimensionIndex); c !== d && (a.b.set('dimension' + b.dimensionIndex, c), c = {transport: 'beacon', eventCategory: b.name, eventAction: 'change', eventLabel: a.a.changeTemplate(d, c), nonInteraction: !0}, a.b.send('event', x(c, a.a.fieldsObj, a.b, a.a.hitFilter))) }, a.a.changeTimeout); c.addListener(d); a.c.push({fa: c, da: d}) }) }W.prototype.remove = function () { for (var a = 0, b; b = this.c[a]; a++)b.fa.removeListener(b.da) }
  W.prototype.changeTemplate = function (a, b) { return a + ' \x3d\x3e ' + b }; C('mediaQueryTracker', W); function La (a) { return Ga[a] || (Ga[a] = window.matchMedia(a)) } function X (a, b) { H(a, F.Y); window.addEventListener && (this.a = y({formSelector: 'form', shouldTrackOutboundForm: this.shouldTrackOutboundForm, fieldsObj: {}, attributePrefix: 'ga-'}, b), this.b = a, this.c = p('submit', this.a.formSelector, this.f.bind(this))) }
  X.prototype.f = function (a, b) { var c = {transport: 'beacon', eventCategory: 'Outbound Form', eventAction: 'submit', eventLabel: t(b.action).href}; if (this.a.shouldTrackOutboundForm(b, t)) { navigator.sendBeacon || (a.preventDefault(), c.hitCallback = ua(function () { b.submit() })); var d = y({}, this.a.fieldsObj, z(b, this.a.attributePrefix)); this.b.send('event', x(c, d, this.b, this.a.hitFilter, b, a)) } }
  X.prototype.shouldTrackOutboundForm = function (a, b) { a = b(a.action); return a.hostname != location.hostname && a.protocol.slice(0, 4) == 'http' }; X.prototype.remove = function () { this.c.j() }; C('outboundFormTracker', X)
  function Y (a, b) { var c = this; H(a, F.Z); window.addEventListener && (this.a = y({events: ['click'], linkSelector: 'a, area', shouldTrackOutboundLink: this.shouldTrackOutboundLink, fieldsObj: {}, attributePrefix: 'ga-'}, b), this.f = a, this.c = this.c.bind(this), this.b = {}, this.a.events.forEach(function (a) { c.b[a] = p(a, c.a.linkSelector, c.c) })) }
  Y.prototype.c = function (a, b) {
    if (this.a.shouldTrackOutboundLink(b, t)) {
      var c = b.getAttribute('href') || b.getAttribute('xlink:href'), d = t(c), e = {transport: 'beacon', eventCategory: 'Outbound Link', eventAction: a.type, eventLabel: d.href}; navigator.sendBeacon || a.type != 'click' || b.target == '_blank' || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey || a.which > 1 || window.addEventListener('click', function (a) { a.defaultPrevented || (a.preventDefault(), e.hitCallback = ua(function () { location.href = c })) }); d = y({}, this.a.fieldsObj, z(b, this.a.attributePrefix))
      this.f.send('event', x(e, d, this.f, this.a.hitFilter, b, a))
    }
  }; Y.prototype.shouldTrackOutboundLink = function (a, b) { a = a.getAttribute('href') || a.getAttribute('xlink:href'); b = b(a); return b.hostname != location.hostname && b.protocol.slice(0, 4) == 'http' }; Y.prototype.remove = function () { var a = this; Object.keys(this.b).forEach(function (b) { a.b[b].j() }) }; C('outboundLinkTracker', Y); var Z = (function Ma (b) { return b ? (b ^ 16 * Math.random() >> b / 4).toString(16) : '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, Ma) }())
  function Na (a, b) {
    var c = this; H(a, F.$); document.visibilityState && (this.a = y({sessionTimeout: U, visibleThreshold: 5E3, sendInitialPageview: !1, fieldsObj: {}}, b), this.b = a, this.i = this.f = null, this.s = !1, this.v = this.v.bind(this), this.o = this.o.bind(this), this.G = this.G.bind(this), this.N = this.N.bind(this), this.c = Q(a.get('trackingId'), 'plugins/page-visibility-tracker'), Aa(this.c, this.N), this.m = new T(a, this.a.sessionTimeout, this.a.timeZone), v(a, 'set', this.v), window.addEventListener('unload', this.G), document.addEventListener('visibilitychange',
this.o), this.o(), va(this.b, function () { if (document.visibilityState == 'visible')c.a.sendInitialPageview && (Oa(c, {ea: !0}), c.s = !0); else if (c.a.sendInitialPageview && c.a.pageLoadsMetricIndex) { var a = {}, a = (a.transport = 'beacon', a.eventCategory = 'Page Visibility', a.eventAction = 'page load', a.eventLabel = '(not set)', a['metric' + c.a.pageLoadsMetricIndex] = 1, a.nonInteraction = !0, a); c.b.send('event', x(a, c.a.fieldsObj, c.b, c.a.hitFilter)) } }))
  }f = Na.prototype
  f.o = function () {
    var a = this; if (document.visibilityState == 'visible' || document.visibilityState == 'hidden') {
      var b = Pa(this, this.c.get()), c = {time: +new Date(), state: document.visibilityState, pageId: Z}; this.f && document.visibilityState == 'visible' && this.a.sendInitialPageview && !this.s && (Oa(this), this.s = !0); this.i && document.visibilityState == 'hidden' && clearTimeout(this.i); this.m.isExpired() ? this.f == 'hidden' && document.visibilityState == 'visible' ? (clearTimeout(this.i), this.i = setTimeout(function () { a.c.set(c); Oa(a, {hitTime: c.time}) },
this.a.visibleThreshold)) : document.visibilityState == 'hidden' && Ca(this.c) : (b.pageId == Z && b.state == 'visible' && Qa(this, b), this.c.set(c)); this.f = document.visibilityState
    }
  }; function Pa (a, b) { a.f == 'visible' && b.state == 'hidden' && b.pageId != Z && (b.state = 'visible', b.pageId = Z, a.c.set(b)); return b }
  function Qa (a, b, c) { c = (c || {}).hitTime; var d = {hitTime: c}, d = (d || {}).hitTime; (b = b.time && !a.m.isExpired() ? (d || +new Date()) - b.time : 0) && b >= a.a.visibleThreshold && (b = Math.round(b / 1E3), d = {transport: 'beacon', nonInteraction: !0, eventCategory: 'Page Visibility', eventAction: 'track', eventValue: b, eventLabel: '(not set)'}, c && (d.queueTime = +new Date() - c), a.a.visibleMetricIndex && (d['metric' + a.a.visibleMetricIndex] = b), a.b.send('event', x(d, a.a.fieldsObj, a.b, a.a.hitFilter))) }
  function Oa (a, b) { var c = b || {}; b = c.hitTime; var c = c.ea, d = {transport: 'beacon'}; b && (d.queueTime = +new Date() - b); c && a.a.pageLoadsMetricIndex && (d['metric' + a.a.pageLoadsMetricIndex] = 1); a.b.send('pageview', x(d, a.a.fieldsObj, a.b, a.a.hitFilter)) }f.v = function (a) { var b = this; return function (c, d) { var e = {}, e = B(c) ? c : (e[c] = d, e); e.page && e.page !== b.b.get('page') && b.f == 'visible' && b.o(); a(c, d) } }; f.N = function (a, b) { a.time != b.time && b.pageId == Z && b.state == 'visible' && Qa(this, b, {hitTime: a.time}) }
  f.G = function () { this.f != 'hidden' && this.o() }; f.remove = function () { this.c.j(); this.m.j(); w(this.b, 'set', this.v); window.removeEventListener('unload', this.G); document.removeEventListener('visibilitychange', this.o) }; C('pageVisibilityTracker', Na)
  function Ra (a, b) { H(a, F.aa); window.addEventListener && (this.a = y({fieldsObj: {}, hitFilter: null}, b), this.b = a, this.u = this.u.bind(this), this.J = this.J.bind(this), this.D = this.D.bind(this), this.A = this.A.bind(this), this.B = this.B.bind(this), this.F = this.F.bind(this), document.readyState != 'complete' ? window.addEventListener('load', this.u) : this.u()) }f = Ra.prototype
  f.u = function () { if (window.FB) try { window.FB.Event.subscribe('edge.create', this.B), window.FB.Event.subscribe('edge.remove', this.F) } catch (a) {}window.twttr && this.J() }; f.J = function () { var a = this; try { window.twttr.ready(function () { window.twttr.events.bind('tweet', a.D); window.twttr.events.bind('follow', a.A) }) } catch (b) {} }; function Sa (a) { try { window.twttr.ready(function () { window.twttr.events.unbind('tweet', a.D); window.twttr.events.unbind('follow', a.A) }) } catch (b) {} }
  f.D = function (a) { if (a.region == 'tweet') { var b = {transport: 'beacon', socialNetwork: 'Twitter', socialAction: 'tweet', socialTarget: a.data.url || a.target.getAttribute('data-url') || location.href}; this.b.send('social', x(b, this.a.fieldsObj, this.b, this.a.hitFilter, a.target, a)) } }
  f.A = function (a) { if (a.region == 'follow') { var b = {transport: 'beacon', socialNetwork: 'Twitter', socialAction: 'follow', socialTarget: a.data.screen_name || a.target.getAttribute('data-screen-name')}; this.b.send('social', x(b, this.a.fieldsObj, this.b, this.a.hitFilter, a.target, a)) } }; f.B = function (a) { this.b.send('social', x({transport: 'beacon', socialNetwork: 'Facebook', socialAction: 'like', socialTarget: a}, this.a.fieldsObj, this.b, this.a.hitFilter)) }
  f.F = function (a) { this.b.send('social', x({transport: 'beacon', socialNetwork: 'Facebook', socialAction: 'unlike', socialTarget: a}, this.a.fieldsObj, this.b, this.a.hitFilter)) }; f.remove = function () { window.removeEventListener('load', this.u); try { window.FB.Event.unsubscribe('edge.create', this.B), window.FB.Event.unsubscribe('edge.remove', this.F) } catch (a) {}Sa(this) }; C('socialWidgetTracker', Ra)
  function Ta (a, b) { H(a, F.ba); history.pushState && window.addEventListener && (this.a = y({shouldTrackUrlChange: this.shouldTrackUrlChange, trackReplaceState: !1, fieldsObj: {}, hitFilter: null}, b), this.b = a, this.c = location.pathname + location.search, this.H = this.H.bind(this), this.I = this.I.bind(this), this.C = this.C.bind(this), v(history, 'pushState', this.H), v(history, 'replaceState', this.I), window.addEventListener('popstate', this.C)) }f = Ta.prototype
  f.H = function (a) { var b = this; return function (c) { for (var d = [], e = 0; e < arguments.length; ++e)d[e - 0] = arguments[e]; a.apply(null, [].concat(m(d))); Ua(b, !0) } }; f.I = function (a) { var b = this; return function (c) { for (var d = [], e = 0; e < arguments.length; ++e)d[e - 0] = arguments[e]; a.apply(null, [].concat(m(d))); Ua(b, !1) } }; f.C = function () { Ua(this, !0) }
  function Ua (a, b) { setTimeout(function () { var c = a.c, d = location.pathname + location.search; c != d && a.a.shouldTrackUrlChange.call(a, d, c) && (a.c = d, a.b.set({page: d, title: document.title}), (b || a.a.trackReplaceState) && a.b.send('pageview', x({transport: 'beacon'}, a.a.fieldsObj, a.b, a.a.hitFilter))) }, 0) }f.shouldTrackUrlChange = function (a, b) { return !(!a || !b) }; f.remove = function () { w(history, 'pushState', this.H); w(history, 'replaceState', this.I); window.removeEventListener('popstate', this.C) }; C('urlChangeTracker', Ta)
})()
// # sourceMappingURL=autotrack.js.map
