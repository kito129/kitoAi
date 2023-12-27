import {
  __async,
  __spreadValues
} from "./chunk-HSNDBVJ3.js";

// node_modules/pocketbase/dist/pocketbase.es.mjs
var ClientResponseError = class _ClientResponseError extends Error {
  constructor(e2) {
    super("ClientResponseError"), this.url = "", this.status = 0, this.response = {}, this.isAbort = false, this.originalError = null, Object.setPrototypeOf(this, _ClientResponseError.prototype), null !== e2 && "object" == typeof e2 && (this.url = "string" == typeof e2.url ? e2.url : "", this.status = "number" == typeof e2.status ? e2.status : 0, this.isAbort = !!e2.isAbort, this.originalError = e2.originalError, null !== e2.response && "object" == typeof e2.response ? this.response = e2.response : null !== e2.data && "object" == typeof e2.data ? this.response = e2.data : this.response = {}), this.originalError || e2 instanceof _ClientResponseError || (this.originalError = e2), "undefined" != typeof DOMException && e2 instanceof DOMException && (this.isAbort = true), this.name = "ClientResponseError " + this.status, this.message = this.response?.message, this.message || (this.isAbort ? this.message = "The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation." : this.originalError?.cause?.message?.includes("ECONNREFUSED ::1") ? this.message = "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : this.message = "Something went wrong while processing your request.");
  }
  get data() {
    return this.response;
  }
  toJSON() {
    return __spreadValues({}, this);
  }
};
var e = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function cookieParse(e2, t2) {
  const s2 = {};
  if ("string" != typeof e2)
    return s2;
  const i2 = Object.assign({}, t2 || {}).decode || defaultDecode;
  let n = 0;
  for (; n < e2.length; ) {
    const t3 = e2.indexOf("=", n);
    if (-1 === t3)
      break;
    let r = e2.indexOf(";", n);
    if (-1 === r)
      r = e2.length;
    else if (r < t3) {
      n = e2.lastIndexOf(";", t3 - 1) + 1;
      continue;
    }
    const o = e2.slice(n, t3).trim();
    if (void 0 === s2[o]) {
      let n2 = e2.slice(t3 + 1, r).trim();
      34 === n2.charCodeAt(0) && (n2 = n2.slice(1, -1));
      try {
        s2[o] = i2(n2);
      } catch (e3) {
        s2[o] = n2;
      }
    }
    n = r + 1;
  }
  return s2;
}
function cookieSerialize(t2, s2, i2) {
  const n = Object.assign({}, i2 || {}), r = n.encode || defaultEncode;
  if (!e.test(t2))
    throw new TypeError("argument name is invalid");
  const o = r(s2);
  if (o && !e.test(o))
    throw new TypeError("argument val is invalid");
  let a = t2 + "=" + o;
  if (null != n.maxAge) {
    const e2 = n.maxAge - 0;
    if (isNaN(e2) || !isFinite(e2))
      throw new TypeError("option maxAge is invalid");
    a += "; Max-Age=" + Math.floor(e2);
  }
  if (n.domain) {
    if (!e.test(n.domain))
      throw new TypeError("option domain is invalid");
    a += "; Domain=" + n.domain;
  }
  if (n.path) {
    if (!e.test(n.path))
      throw new TypeError("option path is invalid");
    a += "; Path=" + n.path;
  }
  if (n.expires) {
    if (!function isDate(e2) {
      return "[object Date]" === Object.prototype.toString.call(e2) || e2 instanceof Date;
    }(n.expires) || isNaN(n.expires.valueOf()))
      throw new TypeError("option expires is invalid");
    a += "; Expires=" + n.expires.toUTCString();
  }
  if (n.httpOnly && (a += "; HttpOnly"), n.secure && (a += "; Secure"), n.priority) {
    switch ("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority) {
      case "low":
        a += "; Priority=Low";
        break;
      case "medium":
        a += "; Priority=Medium";
        break;
      case "high":
        a += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (n.sameSite) {
    switch ("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
      case true:
        a += "; SameSite=Strict";
        break;
      case "lax":
        a += "; SameSite=Lax";
        break;
      case "strict":
        a += "; SameSite=Strict";
        break;
      case "none":
        a += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return a;
}
function defaultDecode(e2) {
  return -1 !== e2.indexOf("%") ? decodeURIComponent(e2) : e2;
}
function defaultEncode(e2) {
  return encodeURIComponent(e2);
}
var t;
function getTokenPayload(e2) {
  if (e2)
    try {
      const s2 = decodeURIComponent(t(e2.split(".")[1]).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
      return JSON.parse(s2) || {};
    } catch (e3) {
    }
  return {};
}
function isTokenExpired(e2, t2 = 0) {
  let s2 = getTokenPayload(e2);
  return !(Object.keys(s2).length > 0 && (!s2.exp || s2.exp - t2 > Date.now() / 1e3));
}
t = "function" == typeof atob ? atob : (e2) => {
  let t2 = String(e2).replace(/=+$/, "");
  if (t2.length % 4 == 1)
    throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var s2, i2, n = 0, r = 0, o = ""; i2 = t2.charAt(r++); ~i2 && (s2 = n % 4 ? 64 * s2 + i2 : i2, n++ % 4) ? o += String.fromCharCode(255 & s2 >> (-2 * n & 6)) : 0)
    i2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i2);
  return o;
};
var s = "pb_auth";
var BaseAuthStore = class {
  constructor() {
    this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = [];
  }
  get token() {
    return this.baseToken;
  }
  get model() {
    return this.baseModel;
  }
  get isValid() {
    return !isTokenExpired(this.token);
  }
  get isAdmin() {
    return "admin" === getTokenPayload(this.token).type;
  }
  get isAuthRecord() {
    return "authRecord" === getTokenPayload(this.token).type;
  }
  save(e2, t2) {
    this.baseToken = e2 || "", this.baseModel = t2 || null, this.triggerChange();
  }
  clear() {
    this.baseToken = "", this.baseModel = null, this.triggerChange();
  }
  loadFromCookie(e2, t2 = s) {
    const i2 = cookieParse(e2 || "")[t2] || "";
    let n = {};
    try {
      n = JSON.parse(i2), (null === typeof n || "object" != typeof n || Array.isArray(n)) && (n = {});
    } catch (e3) {
    }
    this.save(n.token || "", n.model || null);
  }
  exportToCookie(e2, t2 = s) {
    const i2 = { secure: true, sameSite: true, httpOnly: true, path: "/" }, n = getTokenPayload(this.token);
    i2.expires = n?.exp ? new Date(1e3 * n.exp) : /* @__PURE__ */ new Date("1970-01-01"), e2 = Object.assign({}, i2, e2);
    const r = { token: this.token, model: this.model ? JSON.parse(JSON.stringify(this.model)) : null };
    let o = cookieSerialize(t2, JSON.stringify(r), e2);
    const a = "undefined" != typeof Blob ? new Blob([o]).size : o.length;
    if (r.model && a > 4096) {
      r.model = { id: r?.model?.id, email: r?.model?.email };
      const s2 = ["collectionId", "username", "verified"];
      for (const e3 in this.model)
        s2.includes(e3) && (r.model[e3] = this.model[e3]);
      o = cookieSerialize(t2, JSON.stringify(r), e2);
    }
    return o;
  }
  onChange(e2, t2 = false) {
    return this._onChangeCallbacks.push(e2), t2 && e2(this.token, this.model), () => {
      for (let t3 = this._onChangeCallbacks.length - 1; t3 >= 0; t3--)
        if (this._onChangeCallbacks[t3] == e2)
          return delete this._onChangeCallbacks[t3], void this._onChangeCallbacks.splice(t3, 1);
    };
  }
  triggerChange() {
    for (const e2 of this._onChangeCallbacks)
      e2 && e2(this.token, this.model);
  }
};
var LocalAuthStore = class extends BaseAuthStore {
  constructor(e2 = "pocketbase_auth") {
    super(), this.storageFallback = {}, this.storageKey = e2, this._bindStorageEvent();
  }
  get token() {
    return (this._storageGet(this.storageKey) || {}).token || "";
  }
  get model() {
    return (this._storageGet(this.storageKey) || {}).model || null;
  }
  save(e2, t2) {
    this._storageSet(this.storageKey, { token: e2, model: t2 }), super.save(e2, t2);
  }
  clear() {
    this._storageRemove(this.storageKey), super.clear();
  }
  _storageGet(e2) {
    if ("undefined" != typeof window && window?.localStorage) {
      const t2 = window.localStorage.getItem(e2) || "";
      try {
        return JSON.parse(t2);
      } catch (e3) {
        return t2;
      }
    }
    return this.storageFallback[e2];
  }
  _storageSet(e2, t2) {
    if ("undefined" != typeof window && window?.localStorage) {
      let s2 = t2;
      "string" != typeof t2 && (s2 = JSON.stringify(t2)), window.localStorage.setItem(e2, s2);
    } else
      this.storageFallback[e2] = t2;
  }
  _storageRemove(e2) {
    "undefined" != typeof window && window?.localStorage && window.localStorage?.removeItem(e2), delete this.storageFallback[e2];
  }
  _bindStorageEvent() {
    "undefined" != typeof window && window?.localStorage && window.addEventListener && window.addEventListener("storage", (e2) => {
      if (e2.key != this.storageKey)
        return;
      const t2 = this._storageGet(this.storageKey) || {};
      super.save(t2.token || "", t2.model || null);
    });
  }
};
var BaseService = class {
  constructor(e2) {
    this.client = e2;
  }
};
var SettingsService = class extends BaseService {
  getAll(e2) {
    return e2 = Object.assign({ method: "GET" }, e2), this.client.send("/api/settings", e2);
  }
  update(e2, t2) {
    return t2 = Object.assign({ method: "PATCH", body: e2 }, t2), this.client.send("/api/settings", t2);
  }
  testS3(e2 = "storage", t2) {
    return t2 = Object.assign({ method: "POST", body: { filesystem: e2 } }, t2), this.client.send("/api/settings/test/s3", t2).then(() => true);
  }
  testEmail(e2, t2, s2) {
    return s2 = Object.assign({ method: "POST", body: { email: e2, template: t2 } }, s2), this.client.send("/api/settings/test/email", s2).then(() => true);
  }
  generateAppleClientSecret(e2, t2, s2, i2, n, r) {
    return r = Object.assign({ method: "POST", body: { clientId: e2, teamId: t2, keyId: s2, privateKey: i2, duration: n } }, r), this.client.send("/api/settings/apple/generate-client-secret", r);
  }
};
var CrudService = class extends BaseService {
  decode(e2) {
    return e2;
  }
  getFullList(e2, t2) {
    if ("number" == typeof e2)
      return this._getFullList(e2, t2);
    let s2 = 500;
    return (t2 = Object.assign({}, e2, t2)).batch && (s2 = t2.batch, delete t2.batch), this._getFullList(s2, t2);
  }
  getList(e2 = 1, t2 = 30, s2) {
    return (s2 = Object.assign({ method: "GET" }, s2)).query = Object.assign({ page: e2, perPage: t2 }, s2.query), this.client.send(this.baseCrudPath, s2).then((e3) => (e3.items = e3.items?.map((e4) => this.decode(e4)) || [], e3));
  }
  getFirstListItem(e2, t2) {
    return (t2 = Object.assign({ requestKey: "one_by_filter_" + this.baseCrudPath + "_" + e2 }, t2)).query = Object.assign({ filter: e2, skipTotal: 1 }, t2.query), this.getList(1, 1, t2).then((e3) => {
      if (!e3?.items?.length)
        throw new ClientResponseError({ status: 404, data: { code: 404, message: "The requested resource wasn't found.", data: {} } });
      return e3.items[0];
    });
  }
  getOne(e2, t2) {
    return t2 = Object.assign({ method: "GET" }, t2), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e2), t2).then((e3) => this.decode(e3));
  }
  create(e2, t2) {
    return t2 = Object.assign({ method: "POST", body: e2 }, t2), this.client.send(this.baseCrudPath, t2).then((e3) => this.decode(e3));
  }
  update(e2, t2, s2) {
    return s2 = Object.assign({ method: "PATCH", body: t2 }, s2), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e2), s2).then((e3) => this.decode(e3));
  }
  delete(e2, t2) {
    return t2 = Object.assign({ method: "DELETE" }, t2), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e2), t2).then(() => true);
  }
  _getFullList(e2 = 500, t2) {
    (t2 = t2 || {}).query = Object.assign({ skipTotal: 1 }, t2.query);
    let s2 = [], request = (i2) => __async(this, null, function* () {
      return this.getList(i2, e2 || 500, t2).then((e3) => {
        const t3 = e3.items;
        return s2 = s2.concat(t3), t3.length == e3.perPage ? request(i2 + 1) : s2;
      });
    });
    return request(1);
  }
};
function normalizeLegacyOptionsArgs(e2, t2, s2, i2) {
  const n = void 0 !== i2;
  return n || void 0 !== s2 ? n ? (console.warn(e2), t2.body = Object.assign({}, t2.body, s2), t2.query = Object.assign({}, t2.query, i2), t2) : Object.assign(t2, s2) : t2;
}
function resetAutoRefresh(e2) {
  e2._resetAutoRefresh?.();
}
var AdminService = class extends CrudService {
  get baseCrudPath() {
    return "/api/admins";
  }
  update(e2, t2, s2) {
    return super.update(e2, t2, s2).then((e3) => (this.client.authStore.model?.id === e3.id && void 0 === this.client.authStore.model?.collectionId && this.client.authStore.save(this.client.authStore.token, e3), e3));
  }
  delete(e2, t2) {
    return super.delete(e2, t2).then((t3) => (t3 && this.client.authStore.model?.id === e2 && void 0 === this.client.authStore.model?.collectionId && this.client.authStore.clear(), t3));
  }
  authResponse(e2) {
    const t2 = this.decode(e2?.admin || {});
    return e2?.token && e2?.admin && this.client.authStore.save(e2.token, t2), Object.assign({}, e2, { token: e2?.token || "", admin: t2 });
  }
  authWithPassword(e2, t2, s2, i2) {
    return __async(this, null, function* () {
      let n = { method: "POST", body: { identity: e2, password: t2 } };
      n = normalizeLegacyOptionsArgs("This form of authWithPassword(email, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(email, pass, options?).", n, s2, i2);
      const r = n.autoRefreshThreshold;
      delete n.autoRefreshThreshold, n.autoRefresh || resetAutoRefresh(this.client);
      let o = yield this.client.send(this.baseCrudPath + "/auth-with-password", n);
      return o = this.authResponse(o), r && function registerAutoRefresh(e3, t3, s3, i3) {
        resetAutoRefresh(e3);
        const n2 = e3.beforeSend, r2 = e3.authStore.model, o2 = e3.authStore.onChange((t4, s4) => {
          (!t4 || s4?.id != r2?.id || (s4?.collectionId || r2?.collectionId) && s4?.collectionId != r2?.collectionId) && resetAutoRefresh(e3);
        });
        e3._resetAutoRefresh = function() {
          o2(), e3.beforeSend = n2, delete e3._resetAutoRefresh;
        }, e3.beforeSend = (r3, o3) => __async(this, null, function* () {
          const a = e3.authStore.token;
          if (o3.query?.autoRefresh)
            return n2 ? n2(r3, o3) : { url: r3, sendOptions: o3 };
          let c = e3.authStore.isValid;
          if (c && isTokenExpired(e3.authStore.token, t3))
            try {
              yield s3();
            } catch (e4) {
              c = false;
            }
          c || (yield i3());
          const l = o3.headers || {};
          for (let t4 in l)
            if ("authorization" == t4.toLowerCase() && a == l[t4] && e3.authStore.token) {
              l[t4] = e3.authStore.token;
              break;
            }
          return o3.headers = l, n2 ? n2(r3, o3) : { url: r3, sendOptions: o3 };
        });
      }(this.client, r, () => this.authRefresh({ autoRefresh: true }), () => this.authWithPassword(e2, t2, Object.assign({ autoRefresh: true }, n))), o;
    });
  }
  authRefresh(e2, t2) {
    let s2 = { method: "POST" };
    return s2 = normalizeLegacyOptionsArgs("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", s2, e2, t2), this.client.send(this.baseCrudPath + "/auth-refresh", s2).then(this.authResponse.bind(this));
  }
  requestPasswordReset(e2, t2, s2) {
    let i2 = { method: "POST", body: { email: e2 } };
    return i2 = normalizeLegacyOptionsArgs("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", i2, t2, s2), this.client.send(this.baseCrudPath + "/request-password-reset", i2).then(() => true);
  }
  confirmPasswordReset(e2, t2, s2, i2, n) {
    let r = { method: "POST", body: { token: e2, password: t2, passwordConfirm: s2 } };
    return r = normalizeLegacyOptionsArgs("This form of confirmPasswordReset(resetToken, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(resetToken, password, passwordConfirm, options?).", r, i2, n), this.client.send(this.baseCrudPath + "/confirm-password-reset", r).then(() => true);
  }
};
var RealtimeService = class extends BaseService {
  constructor() {
    super(...arguments), this.clientId = "", this.eventSource = null, this.subscriptions = {}, this.lastSentTopics = [], this.maxConnectTimeout = 15e3, this.reconnectAttempts = 0, this.maxReconnectAttempts = 1 / 0, this.predefinedReconnectIntervals = [200, 300, 500, 1e3, 1200, 1500, 2e3], this.pendingConnects = [];
  }
  get isConnected() {
    return !!this.eventSource && !!this.clientId && !this.pendingConnects.length;
  }
  subscribe(e2, t2) {
    return __async(this, null, function* () {
      if (!e2)
        throw new Error("topic must be set.");
      const listener = function(e3) {
        const s2 = e3;
        let i2;
        try {
          i2 = JSON.parse(s2?.data);
        } catch {
        }
        t2(i2 || {});
      };
      return this.subscriptions[e2] || (this.subscriptions[e2] = []), this.subscriptions[e2].push(listener), this.isConnected ? 1 === this.subscriptions[e2].length ? yield this.submitSubscriptions() : this.eventSource?.addEventListener(e2, listener) : yield this.connect(), () => __async(this, null, function* () {
        return this.unsubscribeByTopicAndListener(e2, listener);
      });
    });
  }
  unsubscribe(e2) {
    return __async(this, null, function* () {
      if (this.hasSubscriptionListeners(e2)) {
        if (e2) {
          for (let t2 of this.subscriptions[e2])
            this.eventSource?.removeEventListener(e2, t2);
          delete this.subscriptions[e2];
        } else
          this.subscriptions = {};
        this.hasSubscriptionListeners() ? this.hasSubscriptionListeners(e2) || (yield this.submitSubscriptions()) : this.disconnect();
      }
    });
  }
  unsubscribeByPrefix(e2) {
    return __async(this, null, function* () {
      let t2 = false;
      for (let s2 in this.subscriptions)
        if (s2.startsWith(e2)) {
          t2 = true;
          for (let e3 of this.subscriptions[s2])
            this.eventSource?.removeEventListener(s2, e3);
          delete this.subscriptions[s2];
        }
      t2 && (this.hasSubscriptionListeners() ? yield this.submitSubscriptions() : this.disconnect());
    });
  }
  unsubscribeByTopicAndListener(e2, t2) {
    return __async(this, null, function* () {
      if (!Array.isArray(this.subscriptions[e2]) || !this.subscriptions[e2].length)
        return;
      let s2 = false;
      for (let i2 = this.subscriptions[e2].length - 1; i2 >= 0; i2--)
        this.subscriptions[e2][i2] === t2 && (s2 = true, delete this.subscriptions[e2][i2], this.subscriptions[e2].splice(i2, 1), this.eventSource?.removeEventListener(e2, t2));
      s2 && (this.subscriptions[e2].length || delete this.subscriptions[e2], this.hasSubscriptionListeners() ? this.hasSubscriptionListeners(e2) || (yield this.submitSubscriptions()) : this.disconnect());
    });
  }
  hasSubscriptionListeners(e2) {
    if (this.subscriptions = this.subscriptions || {}, e2)
      return !!this.subscriptions[e2]?.length;
    for (let e3 in this.subscriptions)
      if (this.subscriptions[e3]?.length)
        return true;
    return false;
  }
  submitSubscriptions() {
    return __async(this, null, function* () {
      if (this.clientId)
        return this.addAllSubscriptionListeners(), this.lastSentTopics = this.getNonEmptySubscriptionTopics(), this.client.send("/api/realtime", { method: "POST", body: { clientId: this.clientId, subscriptions: this.lastSentTopics }, requestKey: this.getSubscriptionsCancelKey() }).catch((e2) => {
          if (!e2?.isAbort)
            throw e2;
        });
    });
  }
  getSubscriptionsCancelKey() {
    return "realtime_" + this.clientId;
  }
  getNonEmptySubscriptionTopics() {
    const e2 = [];
    for (let t2 in this.subscriptions)
      this.subscriptions[t2].length && e2.push(t2);
    return e2;
  }
  addAllSubscriptionListeners() {
    if (this.eventSource) {
      this.removeAllSubscriptionListeners();
      for (let e2 in this.subscriptions)
        for (let t2 of this.subscriptions[e2])
          this.eventSource.addEventListener(e2, t2);
    }
  }
  removeAllSubscriptionListeners() {
    if (this.eventSource)
      for (let e2 in this.subscriptions)
        for (let t2 of this.subscriptions[e2])
          this.eventSource.removeEventListener(e2, t2);
  }
  connect() {
    return __async(this, null, function* () {
      if (!(this.reconnectAttempts > 0))
        return new Promise((e2, t2) => {
          this.pendingConnects.push({ resolve: e2, reject: t2 }), this.pendingConnects.length > 1 || this.initConnect();
        });
    });
  }
  initConnect() {
    this.disconnect(true), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(() => {
      this.connectErrorHandler(new Error("EventSource connect took too long."));
    }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildUrl("/api/realtime")), this.eventSource.onerror = (e2) => {
      this.connectErrorHandler(new Error("Failed to establish realtime connection."));
    }, this.eventSource.addEventListener("PB_CONNECT", (e2) => {
      const t2 = e2;
      this.clientId = t2?.lastEventId, this.submitSubscriptions().then(() => __async(this, null, function* () {
        let e3 = 3;
        for (; this.hasUnsentSubscriptions() && e3 > 0; )
          e3--, yield this.submitSubscriptions();
      })).then(() => {
        for (let e3 of this.pendingConnects)
          e3.resolve();
        this.pendingConnects = [], this.reconnectAttempts = 0, clearTimeout(this.reconnectTimeoutId), clearTimeout(this.connectTimeoutId);
      }).catch((e3) => {
        this.clientId = "", this.connectErrorHandler(e3);
      });
    });
  }
  hasUnsentSubscriptions() {
    const e2 = this.getNonEmptySubscriptionTopics();
    if (e2.length != this.lastSentTopics.length)
      return true;
    for (const t2 of e2)
      if (!this.lastSentTopics.includes(t2))
        return true;
    return false;
  }
  connectErrorHandler(e2) {
    if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
      for (let t3 of this.pendingConnects)
        t3.reject(new ClientResponseError(e2));
      return this.pendingConnects = [], void this.disconnect();
    }
    this.disconnect(true);
    const t2 = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
    this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(() => {
      this.initConnect();
    }, t2);
  }
  disconnect(e2 = false) {
    if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), this.client.cancelRequest(this.getSubscriptionsCancelKey()), this.eventSource?.close(), this.eventSource = null, this.clientId = "", !e2) {
      this.reconnectAttempts = 0;
      for (let e3 of this.pendingConnects)
        e3.resolve();
      this.pendingConnects = [];
    }
  }
};
var RecordService = class extends CrudService {
  constructor(e2, t2) {
    super(e2), this.collectionIdOrName = t2;
  }
  get baseCrudPath() {
    return this.baseCollectionPath + "/records";
  }
  get baseCollectionPath() {
    return "/api/collections/" + encodeURIComponent(this.collectionIdOrName);
  }
  subscribeOne(e2, t2) {
    return __async(this, null, function* () {
      return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."), this.client.realtime.subscribe(this.collectionIdOrName + "/" + e2, t2);
    });
  }
  subscribe(e2, t2) {
    return __async(this, null, function* () {
      if ("function" == typeof e2)
        return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."), this.client.realtime.subscribe(this.collectionIdOrName, e2);
      if (!t2)
        throw new Error("Missing subscription callback.");
      if ("" === e2)
        throw new Error("Missing topic.");
      let s2 = this.collectionIdOrName;
      return "*" !== e2 && (s2 += "/" + e2), this.client.realtime.subscribe(s2, t2);
    });
  }
  unsubscribe(e2) {
    return __async(this, null, function* () {
      return "*" === e2 ? this.client.realtime.unsubscribe(this.collectionIdOrName) : e2 ? this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e2) : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName);
    });
  }
  getFullList(e2, t2) {
    if ("number" == typeof e2)
      return super.getFullList(e2, t2);
    const s2 = Object.assign({}, e2, t2);
    return super.getFullList(s2);
  }
  getList(e2 = 1, t2 = 30, s2) {
    return super.getList(e2, t2, s2);
  }
  getFirstListItem(e2, t2) {
    return super.getFirstListItem(e2, t2);
  }
  getOne(e2, t2) {
    return super.getOne(e2, t2);
  }
  create(e2, t2) {
    return super.create(e2, t2);
  }
  update(e2, t2, s2) {
    return super.update(e2, t2, s2).then((e3) => (this.client.authStore.model?.id !== e3?.id || this.client.authStore.model?.collectionId !== this.collectionIdOrName && this.client.authStore.model?.collectionName !== this.collectionIdOrName || this.client.authStore.save(this.client.authStore.token, e3), e3));
  }
  delete(e2, t2) {
    return super.delete(e2, t2).then((t3) => (!t3 || this.client.authStore.model?.id !== e2 || this.client.authStore.model?.collectionId !== this.collectionIdOrName && this.client.authStore.model?.collectionName !== this.collectionIdOrName || this.client.authStore.clear(), t3));
  }
  authResponse(e2) {
    const t2 = this.decode(e2?.record || {});
    return this.client.authStore.save(e2?.token, t2), Object.assign({}, e2, { token: e2?.token || "", record: t2 });
  }
  listAuthMethods(e2) {
    return e2 = Object.assign({ method: "GET" }, e2), this.client.send(this.baseCollectionPath + "/auth-methods", e2).then((e3) => Object.assign({}, e3, { usernamePassword: !!e3?.usernamePassword, emailPassword: !!e3?.emailPassword, authProviders: Array.isArray(e3?.authProviders) ? e3?.authProviders : [] }));
  }
  authWithPassword(e2, t2, s2, i2) {
    let n = { method: "POST", body: { identity: e2, password: t2 } };
    return n = normalizeLegacyOptionsArgs("This form of authWithPassword(usernameOrEmail, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(usernameOrEmail, pass, options?).", n, s2, i2), this.client.send(this.baseCollectionPath + "/auth-with-password", n).then((e3) => this.authResponse(e3));
  }
  authWithOAuth2Code(e2, t2, s2, i2, n, r, o) {
    let a = { method: "POST", body: { provider: e2, code: t2, codeVerifier: s2, redirectUrl: i2, createData: n } };
    return a = normalizeLegacyOptionsArgs("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, options?).", a, r, o), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", a).then((e3) => this.authResponse(e3));
  }
  authWithOAuth2(...e2) {
    return __async(this, null, function* () {
      if (e2.length > 1 || "string" == typeof e2?.[0])
        return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."), this.authWithOAuth2Code(e2?.[0] || "", e2?.[1] || "", e2?.[2] || "", e2?.[3] || "", e2?.[4] || {}, e2?.[5] || {}, e2?.[6] || {});
      const t2 = e2?.[0] || {}, s2 = (yield this.listAuthMethods()).authProviders.find((e3) => e3.name === t2.provider);
      if (!s2)
        throw new ClientResponseError(new Error(`Missing or invalid provider "${t2.provider}".`));
      const i2 = this.client.buildUrl("/api/oauth2-redirect"), n = new RealtimeService(this.client);
      let r = null;
      function cleanup() {
        r?.close(), n.unsubscribe();
      }
      return t2.urlCallback || (r = openBrowserPopup(void 0)), new Promise((e3, o) => __async(this, null, function* () {
        try {
          yield n.subscribe("@oauth2", (r2) => __async(this, null, function* () {
            const a2 = n.clientId;
            try {
              if (!r2.state || a2 !== r2.state)
                throw new Error("State parameters don't match.");
              const n2 = Object.assign({}, t2);
              delete n2.provider, delete n2.scopes, delete n2.createData, delete n2.urlCallback;
              const o2 = yield this.authWithOAuth2Code(s2.name, r2.code, s2.codeVerifier, i2, t2.createData, n2);
              e3(o2);
            } catch (e4) {
              o(new ClientResponseError(e4));
            }
            cleanup();
          }));
          const a = { state: n.clientId };
          t2.scopes?.length && (a.scope = t2.scopes.join(" "));
          const c = this._replaceQueryParams(s2.authUrl + i2, a);
          let l = t2.urlCallback || function(e4) {
            r ? r.location.href = e4 : r = openBrowserPopup(e4);
          };
          yield l(c);
        } catch (e4) {
          cleanup(), o(new ClientResponseError(e4));
        }
      }));
    });
  }
  authRefresh(e2, t2) {
    let s2 = { method: "POST" };
    return s2 = normalizeLegacyOptionsArgs("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", s2, e2, t2), this.client.send(this.baseCollectionPath + "/auth-refresh", s2).then((e3) => this.authResponse(e3));
  }
  requestPasswordReset(e2, t2, s2) {
    let i2 = { method: "POST", body: { email: e2 } };
    return i2 = normalizeLegacyOptionsArgs("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", i2, t2, s2), this.client.send(this.baseCollectionPath + "/request-password-reset", i2).then(() => true);
  }
  confirmPasswordReset(e2, t2, s2, i2, n) {
    let r = { method: "POST", body: { token: e2, password: t2, passwordConfirm: s2 } };
    return r = normalizeLegacyOptionsArgs("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).", r, i2, n), this.client.send(this.baseCollectionPath + "/confirm-password-reset", r).then(() => true);
  }
  requestVerification(e2, t2, s2) {
    let i2 = { method: "POST", body: { email: e2 } };
    return i2 = normalizeLegacyOptionsArgs("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).", i2, t2, s2), this.client.send(this.baseCollectionPath + "/request-verification", i2).then(() => true);
  }
  confirmVerification(e2, t2, s2) {
    let i2 = { method: "POST", body: { token: e2 } };
    return i2 = normalizeLegacyOptionsArgs("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).", i2, t2, s2), this.client.send(this.baseCollectionPath + "/confirm-verification", i2).then(() => true);
  }
  requestEmailChange(e2, t2, s2) {
    let i2 = { method: "POST", body: { newEmail: e2 } };
    return i2 = normalizeLegacyOptionsArgs("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).", i2, t2, s2), this.client.send(this.baseCollectionPath + "/request-email-change", i2).then(() => true);
  }
  confirmEmailChange(e2, t2, s2, i2) {
    let n = { method: "POST", body: { token: e2, password: t2 } };
    return n = normalizeLegacyOptionsArgs("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).", n, s2, i2), this.client.send(this.baseCollectionPath + "/confirm-email-change", n).then(() => true);
  }
  listExternalAuths(e2, t2) {
    return t2 = Object.assign({ method: "GET" }, t2), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e2) + "/external-auths", t2);
  }
  unlinkExternalAuth(e2, t2, s2) {
    return s2 = Object.assign({ method: "DELETE" }, s2), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e2) + "/external-auths/" + encodeURIComponent(t2), s2).then(() => true);
  }
  _replaceQueryParams(e2, t2 = {}) {
    let s2 = e2, i2 = "";
    e2.indexOf("?") >= 0 && (s2 = e2.substring(0, e2.indexOf("?")), i2 = e2.substring(e2.indexOf("?") + 1));
    const n = {}, r = i2.split("&");
    for (const e3 of r) {
      if ("" == e3)
        continue;
      const t3 = e3.split("=");
      n[decodeURIComponent(t3[0].replace(/\+/g, " "))] = decodeURIComponent((t3[1] || "").replace(/\+/g, " "));
    }
    for (let e3 in t2)
      t2.hasOwnProperty(e3) && (null == t2[e3] ? delete n[e3] : n[e3] = t2[e3]);
    i2 = "";
    for (let e3 in n)
      n.hasOwnProperty(e3) && ("" != i2 && (i2 += "&"), i2 += encodeURIComponent(e3.replace(/%20/g, "+")) + "=" + encodeURIComponent(n[e3].replace(/%20/g, "+")));
    return "" != i2 ? s2 + "?" + i2 : s2;
  }
};
function openBrowserPopup(e2) {
  if ("undefined" == typeof window || !window?.open)
    throw new ClientResponseError(new Error("Not in a browser context - please pass a custom urlCallback function."));
  let t2 = 1024, s2 = 768, i2 = window.innerWidth, n = window.innerHeight;
  t2 = t2 > i2 ? i2 : t2, s2 = s2 > n ? n : s2;
  let r = i2 / 2 - t2 / 2, o = n / 2 - s2 / 2;
  return window.open(e2, "popup_window", "width=" + t2 + ",height=" + s2 + ",top=" + o + ",left=" + r + ",resizable,menubar=no");
}
var CollectionService = class extends CrudService {
  get baseCrudPath() {
    return "/api/collections";
  }
  import(e2, t2 = false, s2) {
    return __async(this, null, function* () {
      return s2 = Object.assign({ method: "PUT", body: { collections: e2, deleteMissing: t2 } }, s2), this.client.send(this.baseCrudPath + "/import", s2).then(() => true);
    });
  }
};
var LogService = class extends BaseService {
  getRequestsList(e2 = 1, t2 = 30, s2) {
    return (s2 = Object.assign({ method: "GET" }, s2)).query = Object.assign({ page: e2, perPage: t2 }, s2.query), this.client.send("/api/logs/requests", s2);
  }
  getRequest(e2, t2) {
    return t2 = Object.assign({ method: "GET" }, t2), this.client.send("/api/logs/requests/" + encodeURIComponent(e2), t2);
  }
  getRequestsStats(e2) {
    return e2 = Object.assign({ method: "GET" }, e2), this.client.send("/api/logs/requests/stats", e2);
  }
};
var HealthService = class extends BaseService {
  check(e2) {
    return e2 = Object.assign({ method: "GET" }, e2), this.client.send("/api/health", e2);
  }
};
var FileService = class extends BaseService {
  getUrl(e2, t2, s2 = {}) {
    if (!t2 || !e2?.id || !e2?.collectionId && !e2?.collectionName)
      return "";
    const i2 = [];
    i2.push("api"), i2.push("files"), i2.push(encodeURIComponent(e2.collectionId || e2.collectionName)), i2.push(encodeURIComponent(e2.id)), i2.push(encodeURIComponent(t2));
    let n = this.client.buildUrl(i2.join("/"));
    if (Object.keys(s2).length) {
      false === s2.download && delete s2.download;
      const e3 = new URLSearchParams(s2);
      n += (n.includes("?") ? "&" : "?") + e3;
    }
    return n;
  }
  getToken(e2) {
    return e2 = Object.assign({ method: "POST" }, e2), this.client.send("/api/files/token", e2).then((e3) => e3?.token || "");
  }
};
var BackupService = class extends BaseService {
  getFullList(e2) {
    return e2 = Object.assign({ method: "GET" }, e2), this.client.send("/api/backups", e2);
  }
  create(e2, t2) {
    return t2 = Object.assign({ method: "POST", body: { name: e2 } }, t2), this.client.send("/api/backups", t2).then(() => true);
  }
  upload(e2, t2) {
    return t2 = Object.assign({ method: "POST", body: e2 }, t2), this.client.send("/api/backups/upload", t2).then(() => true);
  }
  delete(e2, t2) {
    return t2 = Object.assign({ method: "DELETE" }, t2), this.client.send(`/api/backups/${encodeURIComponent(e2)}`, t2).then(() => true);
  }
  restore(e2, t2) {
    return t2 = Object.assign({ method: "POST" }, t2), this.client.send(`/api/backups/${encodeURIComponent(e2)}/restore`, t2).then(() => true);
  }
  getDownloadUrl(e2, t2) {
    return this.client.buildUrl(`/api/backups/${encodeURIComponent(t2)}?token=${encodeURIComponent(e2)}`);
  }
};
var i = ["requestKey", "$cancelKey", "$autoCancel", "fetch", "headers", "body", "query", "params", "cache", "credentials", "headers", "integrity", "keepalive", "method", "mode", "redirect", "referrer", "referrerPolicy", "signal", "window"];
var Client = class {
  constructor(e2 = "/", t2, s2 = "en-US") {
    this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = true, this.baseUrl = e2, this.lang = s2, this.authStore = t2 || new LocalAuthStore(), this.admins = new AdminService(this), this.collections = new CollectionService(this), this.files = new FileService(this), this.logs = new LogService(this), this.settings = new SettingsService(this), this.realtime = new RealtimeService(this), this.health = new HealthService(this), this.backups = new BackupService(this);
  }
  collection(e2) {
    return this.recordServices[e2] || (this.recordServices[e2] = new RecordService(this, e2)), this.recordServices[e2];
  }
  autoCancellation(e2) {
    return this.enableAutoCancellation = !!e2, this;
  }
  cancelRequest(e2) {
    return this.cancelControllers[e2] && (this.cancelControllers[e2].abort(), delete this.cancelControllers[e2]), this;
  }
  cancelAllRequests() {
    for (let e2 in this.cancelControllers)
      this.cancelControllers[e2].abort();
    return this.cancelControllers = {}, this;
  }
  filter(e2, t2) {
    if (!t2)
      return e2;
    for (let s2 in t2) {
      let i2 = t2[s2];
      switch (typeof i2) {
        case "boolean":
        case "number":
          i2 = "" + i2;
          break;
        case "string":
          i2 = "'" + i2.replace(/'/g, "\\'") + "'";
          break;
        default:
          i2 = null === i2 ? "null" : i2 instanceof Date ? "'" + i2.toISOString().replace("T", " ") + "'" : "'" + JSON.stringify(i2).replace(/'/g, "\\'") + "'";
      }
      e2 = e2.replaceAll("{:" + s2 + "}", i2);
    }
    return e2;
  }
  getFileUrl(e2, t2, s2 = {}) {
    return this.files.getUrl(e2, t2, s2);
  }
  buildUrl(e2) {
    let t2 = this.baseUrl;
    return "undefined" == typeof window || !window.location || t2.startsWith("https://") || t2.startsWith("http://") || (t2 = window.location.origin?.endsWith("/") ? window.location.origin.substring(0, window.location.origin.length - 1) : window.location.origin || "", this.baseUrl.startsWith("/") || (t2 += window.location.pathname || "/", t2 += t2.endsWith("/") ? "" : "/"), t2 += this.baseUrl), e2 && (t2 += t2.endsWith("/") ? "" : "/", t2 += e2.startsWith("/") ? e2.substring(1) : e2), t2;
  }
  send(e2, t2) {
    return __async(this, null, function* () {
      t2 = this.initSendOptions(e2, t2);
      let s2 = this.buildUrl(e2);
      if (this.beforeSend) {
        const e3 = Object.assign({}, yield this.beforeSend(s2, t2));
        void 0 !== e3.url || void 0 !== e3.options ? (s2 = e3.url || s2, t2 = e3.options || t2) : Object.keys(e3).length && (t2 = e3, console?.warn && console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."));
      }
      if (void 0 !== t2.query) {
        const e3 = this.serializeQueryParams(t2.query);
        e3 && (s2 += (s2.includes("?") ? "&" : "?") + e3), delete t2.query;
      }
      "application/json" == this.getHeader(t2.headers, "Content-Type") && t2.body && "string" != typeof t2.body && (t2.body = JSON.stringify(t2.body));
      return (t2.fetch || fetch)(s2, t2).then((e3) => __async(this, null, function* () {
        let t3 = {};
        try {
          t3 = yield e3.json();
        } catch (e4) {
        }
        if (this.afterSend && (t3 = yield this.afterSend(e3, t3)), e3.status >= 400)
          throw new ClientResponseError({ url: e3.url, status: e3.status, data: t3 });
        return t3;
      })).catch((e3) => {
        throw new ClientResponseError(e3);
      });
    });
  }
  initSendOptions(e2, t2) {
    (t2 = Object.assign({ method: "GET" }, t2)).query = t2.query || {}, t2.body = this.convertToFormDataIfNeeded(t2.body);
    for (let e3 in t2)
      i.includes(e3) || (t2.query[e3] = t2[e3], delete t2[e3]);
    if (t2.query = Object.assign({}, t2.params, t2.query), void 0 === t2.requestKey && (false === t2.$autoCancel || false === t2.query.$autoCancel ? t2.requestKey = null : (t2.$cancelKey || t2.query.$cancelKey) && (t2.requestKey = t2.$cancelKey || t2.query.$cancelKey)), delete t2.$autoCancel, delete t2.query.$autoCancel, delete t2.$cancelKey, delete t2.query.$cancelKey, null !== this.getHeader(t2.headers, "Content-Type") || this.isFormData(t2.body) || (t2.headers = Object.assign({}, t2.headers, { "Content-Type": "application/json" })), null === this.getHeader(t2.headers, "Accept-Language") && (t2.headers = Object.assign({}, t2.headers, { "Accept-Language": this.lang })), this.authStore.token && null === this.getHeader(t2.headers, "Authorization") && (t2.headers = Object.assign({}, t2.headers, { Authorization: this.authStore.token })), this.enableAutoCancellation && null !== t2.requestKey) {
      const s2 = t2.requestKey || (t2.method || "GET") + e2;
      delete t2.requestKey, this.cancelRequest(s2);
      const i2 = new AbortController();
      this.cancelControllers[s2] = i2, t2.signal = i2.signal;
    }
    return t2;
  }
  convertToFormDataIfNeeded(e2) {
    if ("undefined" == typeof FormData || void 0 === e2 || "object" != typeof e2 || null === e2 || this.isFormData(e2) || !this.hasBlobField(e2))
      return e2;
    const t2 = new FormData();
    for (let s2 in e2) {
      const i2 = Array.isArray(e2[s2]) ? e2[s2] : [e2[s2]];
      for (let e3 of i2)
        t2.append(s2, e3);
    }
    return t2;
  }
  hasBlobField(e2) {
    for (let t2 in e2) {
      const s2 = Array.isArray(e2[t2]) ? e2[t2] : [e2[t2]];
      for (let e3 of s2)
        if ("undefined" != typeof Blob && e3 instanceof Blob || "undefined" != typeof File && e3 instanceof File)
          return true;
    }
    return false;
  }
  getHeader(e2, t2) {
    e2 = e2 || {}, t2 = t2.toLowerCase();
    for (let s2 in e2)
      if (s2.toLowerCase() == t2)
        return e2[s2];
    return null;
  }
  isFormData(e2) {
    return e2 && ("FormData" === e2.constructor.name || "undefined" != typeof FormData && e2 instanceof FormData);
  }
  serializeQueryParams(e2) {
    const t2 = [];
    for (const s2 in e2) {
      if (null === e2[s2])
        continue;
      const i2 = e2[s2], n = encodeURIComponent(s2);
      if (Array.isArray(i2))
        for (const e3 of i2)
          t2.push(n + "=" + encodeURIComponent(e3));
      else
        i2 instanceof Date ? t2.push(n + "=" + encodeURIComponent(i2.toISOString())) : null !== typeof i2 && "object" == typeof i2 ? t2.push(n + "=" + encodeURIComponent(JSON.stringify(i2))) : t2.push(n + "=" + encodeURIComponent(i2));
    }
    return t2.join("&");
  }
};
var AsyncAuthStore = class extends BaseAuthStore {
  constructor(e2) {
    super(), this.queue = [], this.saveFunc = e2.save, this.clearFunc = e2.clear, this._enqueue(() => this._loadInitial(e2.initial));
  }
  save(e2, t2) {
    super.save(e2, t2);
    let s2 = "";
    try {
      s2 = JSON.stringify({ token: e2, model: t2 });
    } catch (e3) {
      console.warn("AsyncAuthStore: failed to stringify the new state");
    }
    this._enqueue(() => this.saveFunc(s2));
  }
  clear() {
    super.clear(), this.clearFunc ? this._enqueue(() => this.clearFunc()) : this._enqueue(() => this.saveFunc(""));
  }
  _loadInitial(e2) {
    return __async(this, null, function* () {
      try {
        if (e2 = yield e2) {
          let t2;
          "string" == typeof e2 ? t2 = JSON.parse(e2) || {} : "object" == typeof e2 && (t2 = e2), this.save(t2.token || "", t2.model || null);
        }
      } catch (e3) {
      }
    });
  }
  _enqueue(e2) {
    this.queue.push(e2), 1 == this.queue.length && this._dequeue();
  }
  _dequeue() {
    this.queue.length && this.queue[0]().finally(() => {
      this.queue.shift(), this.queue.length && this._dequeue();
    });
  }
};
export {
  AdminService,
  AsyncAuthStore,
  BaseAuthStore,
  ClientResponseError,
  CollectionService,
  CrudService,
  LocalAuthStore,
  LogService,
  RealtimeService,
  RecordService,
  cookieParse,
  cookieSerialize,
  Client as default,
  getTokenPayload,
  isTokenExpired
};
//# sourceMappingURL=pocketbase.js.map
