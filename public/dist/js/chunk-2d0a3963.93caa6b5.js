(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-2d0a3963"],
	{
		"038b": function (t, e, n) {
			"use strict";
			n.r(e);
			var c = n("7a23"),
				r = { class: "px-5 mx-5" };
			function a(t, e, n, a, o, u) {
				var b = Object(c["B"])("CommonComment");
				return (
					Object(c["t"])(),
					Object(c["f"])("div", r, [
						Object(c["i"])(
							b,
							{
								api: function () {
									return a.getEventCommentApi(t.threadId);
								},
								showAll: !0,
							},
							null,
							8,
							["api"]
						),
					])
				);
			}
			var o = n("5530"),
				u = n("6c02"),
				b = n("f727"),
				d = {
					setup: function (t) {
						var e = Object(u["c"])(),
							n = Object(c["x"])({ threadId: e.query.threadId });
						return Object(o["a"])(Object(o["a"])({}, Object(c["F"])(n)), {}, { getEventCommentApi: b["e"] });
					},
				},
				i = n("6b0d"),
				p = n.n(i);
			const s = p()(d, [["render", a]]);
			e["default"] = s;
		},
	},
]);
//# sourceMappingURL=chunk-2d0a3963.93caa6b5.js.map
