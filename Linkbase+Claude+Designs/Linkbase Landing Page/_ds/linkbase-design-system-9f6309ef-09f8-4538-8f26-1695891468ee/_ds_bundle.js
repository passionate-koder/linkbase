/* @ds-bundle: {"format":4,"namespace":"LinkbaseDesignSystem_9f6309","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Accordion","sourcePath":"components/disclosure/Accordion.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"LinkRow","sourcePath":"components/links/LinkRow.jsx"},{"name":"ProfileLinkButton","sourcePath":"components/links/ProfileLinkButton.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ProfileHeader","sourcePath":"components/profile/ProfileHeader.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"e89203e82793","components/buttons/IconButton.jsx":"83ceac24debb","components/data-display/Avatar.jsx":"6719ebed04c5","components/data-display/Badge.jsx":"e66488c57c6e","components/data-display/Card.jsx":"ef6a43745e34","components/disclosure/Accordion.jsx":"d93cc5c51b05","components/forms/Input.jsx":"e74d7efbb8d8","components/forms/Toggle.jsx":"c5ee88f644b8","components/links/LinkRow.jsx":"c3ebd70d2404","components/links/ProfileLinkButton.jsx":"ef56189b4e2d","components/navigation/SidebarNav.jsx":"475e40839a3e","components/navigation/Tabs.jsx":"ac37c075fe9f","components/profile/ProfileHeader.jsx":"686745ee78ef","ui_kits/admin/AdminApp.jsx":"3f4a08d4e4ea","ui_kits/marketing/MarketingApp.jsx":"ff513d3565b4","ui_kits/profile/ProfileApp.jsx":"db4d79f368d1","ui_kits/shared-icons.js":"cce3ae01d1a3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LinkbaseDesignSystem_9f6309 = window.LinkbaseDesignSystem_9f6309 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('lb-button-css')) {
  const s = document.createElement('style');
  s.id = 'lb-button-css';
  s.textContent = `
.lb-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--font-sans);font-weight:var(--fw-semibold);line-height:1;
  border:1px solid transparent;border-radius:var(--radius-pill);cursor:pointer;
  white-space:nowrap;transition:background .15s ease,color .15s ease,transform .08s ease,border-color .15s ease;
  text-decoration:none;user-select:none;}
.lb-btn:active{transform:scale(.98);}
.lb-btn:disabled{opacity:.4;cursor:not-allowed;transform:none;}
.lb-btn--sm{height:36px;padding:0 16px;font-size:var(--text-sm);}
.lb-btn--md{height:44px;padding:0 20px;font-size:var(--text-base);}
.lb-btn--lg{height:56px;padding:0 28px;font-size:var(--text-lg);}
.lb-btn--full{width:100%;}
.lb-btn--primary{background:var(--btn-primary-bg);color:var(--btn-primary-fg);}
.lb-btn--primary:hover:not(:disabled){background:var(--gray-700);}
.lb-btn--secondary{background:var(--btn-secondary-bg);color:var(--btn-secondary-fg);}
.lb-btn--secondary:hover:not(:disabled){background:var(--gray-200);}
.lb-btn--green{background:var(--accent-action);color:#fff;}
.lb-btn--green:hover:not(:disabled){background:var(--kale);}
.lb-btn--outline{background:var(--white);color:var(--ink);border-color:var(--border-strong);}
.lb-btn--outline:hover:not(:disabled){background:var(--surface-hover);}
.lb-btn--ghost{background:transparent;color:var(--ink);}
.lb-btn--ghost:hover:not(:disabled){background:var(--gray-100);}
.lb-btn__icon{display:inline-flex;align-items:center;}
.lb-btn__icon svg{width:1.1em;height:1.1em;display:block;}`;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  as = 'button',
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = ['lb-btn', `lb-btn--${variant}`, `lb-btn--${size}`, fullWidth ? 'lb-btn--full' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "lb-btn__icon"
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    className: "lb-btn__icon"
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('lb-iconbtn-css')) {
  const s = document.createElement('style');
  s.id = 'lb-iconbtn-css';
  s.textContent = `
.lb-iconbtn{display:inline-flex;align-items:center;justify-content:center;
  border:1px solid transparent;border-radius:var(--radius-pill);cursor:pointer;
  transition:background .15s ease,transform .08s ease,border-color .15s ease;
  color:var(--ink);background:var(--gray-100);}
.lb-iconbtn:active{transform:scale(.94);}
.lb-iconbtn:disabled{opacity:.4;cursor:not-allowed;transform:none;}
.lb-iconbtn svg{display:block;}
.lb-iconbtn--sm{width:32px;height:32px;}
.lb-iconbtn--sm svg{width:16px;height:16px;}
.lb-iconbtn--md{width:44px;height:44px;}
.lb-iconbtn--md svg{width:20px;height:20px;}
.lb-iconbtn--lg{width:52px;height:52px;}
.lb-iconbtn--lg svg{width:22px;height:22px;}
.lb-iconbtn--soft{background:var(--gray-100);}
.lb-iconbtn--soft:hover:not(:disabled){background:var(--gray-200);}
.lb-iconbtn--solid{background:var(--ink);color:#fff;}
.lb-iconbtn--solid:hover:not(:disabled){background:var(--gray-700);}
.lb-iconbtn--white{background:var(--white);color:var(--ink);box-shadow:var(--shadow-sm);}
.lb-iconbtn--white:hover:not(:disabled){background:var(--surface-hover);}
.lb-iconbtn--ghost{background:transparent;color:var(--gray-500);}
.lb-iconbtn--ghost:hover:not(:disabled){background:var(--gray-100);color:var(--ink);}`;
  document.head.appendChild(s);
}
function IconButton({
  children,
  variant = 'soft',
  size = 'md',
  label,
  className = '',
  ...rest
}) {
  const cls = ['lb-iconbtn', `lb-iconbtn--${variant}`, `lb-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
if (typeof document !== 'undefined' && !document.getElementById('lb-avatar-css')) {
  const s = document.createElement('style');
  s.id = 'lb-avatar-css';
  s.textContent = `
.lb-avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;
  border-radius:50%;overflow:hidden;background:var(--gray-300);color:var(--gray-500);
  font-family:var(--font-sans);font-weight:var(--fw-bold);flex:none;}
.lb-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.lb-avatar--xs{width:32px;height:32px;font-size:13px;}
.lb-avatar--sm{width:44px;height:44px;font-size:16px;}
.lb-avatar--md{width:64px;height:64px;font-size:22px;}
.lb-avatar--lg{width:96px;height:96px;font-size:34px;}
.lb-avatar--xl{width:128px;height:128px;font-size:46px;}
.lb-avatar__ph{width:60%;height:60%;color:var(--gray-500);}`;
  document.head.appendChild(s);
}
function Avatar({
  src,
  alt = '',
  name,
  size = 'md',
  className = ''
}) {
  const initial = name ? name.trim().charAt(0).toUpperCase() : null;
  return /*#__PURE__*/React.createElement("span", {
    className: `lb-avatar lb-avatar--${size} ${className}`
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || name || ''
  }) : initial ? initial : /*#__PURE__*/React.createElement("svg", {
    className: "lb-avatar__ph",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.7-8 6v1h16v-1c0-3.3-3.6-6-8-6Z"
  })));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('lb-badge-css')) {
  const s = document.createElement('style');
  s.id = 'lb-badge-css';
  s.textContent = `
.lb-badge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-sans);
  font-weight:var(--fw-semibold);border-radius:var(--radius-pill);white-space:nowrap;line-height:1;}
.lb-badge svg{width:1em;height:1em;display:block;}
.lb-badge--sm{height:24px;padding:0 10px;font-size:var(--text-xs);}
.lb-badge--md{height:34px;padding:0 16px;font-size:var(--text-sm);}
.lb-badge--white{background:var(--white);color:var(--ink);box-shadow:var(--shadow-sm);}
.lb-badge--dark{background:var(--ink);color:#fff;}
.lb-badge--green{background:var(--accent);color:var(--accent-ink);}
.lb-badge--soft{background:var(--gray-100);color:var(--gray-600);}`;
  document.head.appendChild(s);
}
function Badge({
  children,
  variant = 'soft',
  size = 'md',
  leftIcon,
  className = '',
  ...rest
}) {
  const cls = ['lb-badge', `lb-badge--${variant}`, `lb-badge--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), leftIcon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('lb-card-css')) {
  const s = document.createElement('style');
  s.id = 'lb-card-css';
  s.textContent = `
.lb-card{background:var(--surface-card);border-radius:var(--radius-xl);font-family:var(--font-sans);}
.lb-card--bordered{border:1px solid var(--border-subtle);}
.lb-card--shadow{box-shadow:var(--shadow-card);}
.lb-card--flat{box-shadow:none;border:none;}
.lb-card--pad-none{padding:0;}
.lb-card--pad-sm{padding:16px;}
.lb-card--pad-md{padding:24px;}
.lb-card--pad-lg{padding:32px;}`;
  document.head.appendChild(s);
}
function Card({
  children,
  elevation = 'shadow',
  padding = 'md',
  className = '',
  ...rest
}) {
  const cls = ['lb-card', `lb-card--${elevation}`, `lb-card--pad-${padding}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/Accordion.jsx
try { (() => {
if (typeof document !== 'undefined' && !document.getElementById('lb-accordion-css')) {
  const s = document.createElement('style');
  s.id = 'lb-accordion-css';
  s.textContent = `
.lb-accordion{display:flex;flex-direction:column;gap:12px;font-family:var(--font-sans);width:100%;}
.lb-acc-item{border-radius:var(--radius-md);overflow:hidden;background:var(--surface-card);
  border:1px solid var(--border-subtle);}
.lb-acc-item--onDark{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12);}
.lb-acc-head{display:flex;align-items:center;justify-content:space-between;gap:16px;width:100%;
  padding:20px 22px;background:none;border:none;cursor:pointer;text-align:left;
  font-size:var(--text-lg);font-weight:var(--fw-semibold);color:var(--ink);}
.lb-acc-item--onDark .lb-acc-head{color:#fff;}
.lb-acc-chev{flex:none;transition:transform .2s ease;color:currentColor;}
.lb-acc-chev svg{width:22px;height:22px;display:block;}
.lb-acc-item--open .lb-acc-chev{transform:rotate(180deg);}
.lb-acc-body{overflow:hidden;transition:height .2s ease;}
.lb-acc-body__inner{padding:0 22px 22px;font-size:var(--text-base);line-height:var(--leading-relaxed);
  color:var(--gray-600);}
.lb-acc-item--onDark .lb-acc-body__inner{color:rgba(255,255,255,.75);}`;
  document.head.appendChild(s);
}
const Chevron = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
function Accordion({
  items = [],
  onDark = false,
  defaultOpen = -1,
  className = ''
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: `lb-accordion ${className}`
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `lb-acc-item ${onDark ? 'lb-acc-item--onDark' : ''} ${isOpen ? 'lb-acc-item--open' : ''}`
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "lb-acc-head",
      "aria-expanded": isOpen,
      onClick: () => setOpen(isOpen ? -1 : i)
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      className: "lb-acc-chev"
    }, Chevron)), /*#__PURE__*/React.createElement("div", {
      className: "lb-acc-body",
      style: {
        height: isOpen ? 'auto' : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "lb-acc-body__inner"
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('lb-input-css')) {
  const s = document.createElement('style');
  s.id = 'lb-input-css';
  s.textContent = `
.lb-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans);width:100%;}
.lb-field__label{font-size:var(--text-sm);font-weight:var(--fw-semibold);color:var(--ink);}
.lb-input{display:flex;align-items:center;gap:2px;width:100%;height:52px;
  background:var(--gray-100);border:1px solid transparent;border-radius:var(--radius-md);
  padding:0 16px;transition:background .15s ease,border-color .15s ease,box-shadow .15s ease;}
.lb-input:focus-within{background:var(--white);border-color:var(--border-strong);box-shadow:var(--focus-ring);}
.lb-input__prefix{color:var(--gray-500);font-size:var(--text-base);white-space:nowrap;}
.lb-input input{flex:1;min-width:0;border:none;outline:none;background:transparent;
  font-family:inherit;font-size:var(--text-base);color:var(--ink);font-weight:var(--fw-medium);}
.lb-input input::placeholder{color:var(--gray-400);font-weight:var(--fw-regular);}
.lb-input--invalid{border-color:var(--berry);}
.lb-field__hint{font-size:var(--text-xs);color:var(--gray-500);}
.lb-field__hint--error{color:var(--berry);}`;
  document.head.appendChild(s);
}
function Input({
  label,
  prefix,
  hint,
  error,
  className = '',
  id,
  ...rest
}) {
  const inputId = id || (label ? `lb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    className: `lb-field ${className}`,
    htmlFor: inputId
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "lb-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: `lb-input ${error ? 'lb-input--invalid' : ''}`
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "lb-input__prefix"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: `lb-field__hint ${error ? 'lb-field__hint--error' : ''}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
if (typeof document !== 'undefined' && !document.getElementById('lb-toggle-css')) {
  const s = document.createElement('style');
  s.id = 'lb-toggle-css';
  s.textContent = `
.lb-toggle{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-sans);}
.lb-toggle input{position:absolute;opacity:0;width:0;height:0;}
.lb-toggle__track{position:relative;width:48px;height:28px;border-radius:var(--radius-pill);
  background:var(--gray-300);transition:background .2s ease;flex:none;}
.lb-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;
  background:#fff;box-shadow:var(--shadow-sm);transition:transform .2s ease;}
.lb-toggle input:checked + .lb-toggle__track{background:var(--accent-action);}
.lb-toggle input:checked + .lb-toggle__track .lb-toggle__thumb{transform:translateX(20px);}
.lb-toggle input:focus-visible + .lb-toggle__track{box-shadow:var(--focus-ring);}
.lb-toggle input:disabled + .lb-toggle__track{opacity:.4;}
.lb-toggle__label{font-size:var(--text-base);font-weight:var(--fw-medium);color:var(--ink);}`;
  document.head.appendChild(s);
}
function Toggle({
  checked,
  defaultChecked,
  onChange,
  disabled,
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `lb-toggle ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "lb-toggle__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lb-toggle__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "lb-toggle__label"
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/links/LinkRow.jsx
try { (() => {
if (typeof document !== 'undefined' && !document.getElementById('lb-linkrow-css')) {
  const s = document.createElement('style');
  s.id = 'lb-linkrow-css';
  s.textContent = `
.lb-linkrow{display:flex;align-items:center;gap:16px;width:100%;
  background:var(--surface-card);border:1px solid var(--border-subtle);
  border-radius:var(--radius-lg);padding:14px 16px;font-family:var(--font-sans);
  box-shadow:var(--shadow-xs);transition:box-shadow .15s ease,border-color .15s ease;}
.lb-linkrow:hover{box-shadow:var(--shadow-sm);}
.lb-linkrow__thumb{width:52px;height:52px;border-radius:var(--radius-md);overflow:hidden;
  flex:none;background:var(--gray-100);display:flex;align-items:center;justify-content:center;}
.lb-linkrow__thumb img{width:100%;height:100%;object-fit:cover;display:block;}
.lb-linkrow__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;}
.lb-linkrow__title{font-size:var(--text-base);font-weight:var(--fw-bold);color:var(--ink);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.lb-linkrow__meta{font-size:var(--text-sm);color:var(--gray-500);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.lb-linkrow__meta b{font-weight:var(--fw-semibold);color:var(--gray-600);}
.lb-linkrow__action{flex:none;display:flex;align-items:center;justify-content:center;
  width:36px;height:36px;border-radius:50%;border:none;background:none;cursor:pointer;
  color:var(--gray-500);transition:background .15s ease;}
.lb-linkrow__action:hover{background:var(--gray-100);color:var(--ink);}
.lb-linkrow__action svg{width:20px;height:20px;display:block;}`;
  document.head.appendChild(s);
}
const Kebab = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "5",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "19",
  r: "1"
}));
function LinkRow({
  title,
  clicks = 0,
  domain,
  thumb,
  thumbIcon,
  onMenu,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `lb-linkrow ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "lb-linkrow__thumb"
  }, thumb ? /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: ""
  }) : thumbIcon), /*#__PURE__*/React.createElement("div", {
    className: "lb-linkrow__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lb-linkrow__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "lb-linkrow__meta"
  }, /*#__PURE__*/React.createElement("b", null, clicks, " clicks"), domain ? ` · ${domain}` : '')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lb-linkrow__action",
    "aria-label": "Link options",
    onClick: onMenu
  }, Kebab));
}
Object.assign(__ds_scope, { LinkRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/links/LinkRow.jsx", error: String((e && e.message) || e) }); }

// components/links/ProfileLinkButton.jsx
try { (() => {
if (typeof document !== 'undefined' && !document.getElementById('lb-plink-css')) {
  const s = document.createElement('style');
  s.id = 'lb-plink-css';
  s.textContent = `
.lb-plink{position:relative;display:flex;align-items:center;justify-content:center;
  width:100%;min-height:60px;padding:16px 48px;background:var(--surface-card);
  border-radius:var(--radius-lg);box-shadow:var(--shadow-xs);cursor:pointer;
  font-family:var(--font-sans);text-decoration:none;
  transition:transform .12s ease,box-shadow .15s ease;}
.lb-plink:hover{transform:scale(1.015);box-shadow:var(--shadow-sm);}
.lb-plink:active{transform:scale(.99);}
.lb-plink--media{flex-direction:column;padding:0;overflow:hidden;gap:0;}
.lb-plink__thumb{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;}
.lb-plink__title{font-size:var(--text-base);font-weight:var(--fw-bold);color:var(--ink);
  text-align:center;line-height:var(--leading-snug);}
.lb-plink--media .lb-plink__title{padding:14px 40px;width:100%;box-sizing:border-box;}
.lb-plink__thumb-left{position:absolute;left:10px;top:50%;transform:translateY(-50%);
  width:44px;height:44px;border-radius:var(--radius-sm);object-fit:cover;}
.lb-plink__menu{position:absolute;right:14px;top:50%;transform:translateY(-50%);
  display:flex;align-items:center;justify-content:center;width:28px;height:28px;
  border:none;background:none;cursor:pointer;color:var(--gray-400);border-radius:50%;}
.lb-plink--media .lb-plink__menu{top:auto;bottom:12px;transform:none;}
.lb-plink__menu:hover{background:var(--gray-100);color:var(--ink);}
.lb-plink__menu svg{width:18px;height:18px;display:block;}`;
  document.head.appendChild(s);
}
const Kebab = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "5",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "19",
  r: "1"
}));
function ProfileLinkButton({
  title,
  href = '#',
  thumb,
  media = false,
  leftThumb,
  onMenu,
  className = ''
}) {
  const isMedia = media && thumb;
  return /*#__PURE__*/React.createElement("a", {
    className: `lb-plink ${isMedia ? 'lb-plink--media' : ''} ${className}`,
    href: href,
    onClick: e => {
      if (href === '#') e.preventDefault();
    }
  }, isMedia && /*#__PURE__*/React.createElement("img", {
    className: "lb-plink__thumb",
    src: thumb,
    alt: ""
  }), !isMedia && leftThumb && /*#__PURE__*/React.createElement("img", {
    className: "lb-plink__thumb-left",
    src: leftThumb,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "lb-plink__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lb-plink__menu",
    "aria-label": "Share this link",
    onClick: e => {
      e.preventDefault();
      onMenu && onMenu();
    }
  }, Kebab));
}
Object.assign(__ds_scope, { ProfileLinkButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/links/ProfileLinkButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
if (typeof document !== 'undefined' && !document.getElementById('lb-sidenav-css')) {
  const s = document.createElement('style');
  s.id = 'lb-sidenav-css';
  s.textContent = `
.lb-sidenav{display:flex;flex-direction:column;align-items:center;gap:22px;
  width:var(--sidebar-width);padding:24px 0;font-family:var(--font-sans);}
.lb-sidenav__item{display:flex;flex-direction:column;align-items:center;gap:6px;
  background:none;border:none;cursor:pointer;padding:0;color:var(--gray-500);}
.lb-sidenav__icon{display:flex;align-items:center;justify-content:center;
  width:48px;height:48px;border-radius:50%;background:transparent;
  transition:background .15s ease,color .15s ease;color:inherit;}
.lb-sidenav__icon svg{width:22px;height:22px;display:block;}
.lb-sidenav__label{font-size:var(--text-xs);font-weight:var(--fw-semibold);color:inherit;}
.lb-sidenav__item:hover .lb-sidenav__icon{background:var(--gray-100);color:var(--ink);}
.lb-sidenav__item--active{color:var(--ink);}
.lb-sidenav__item--active .lb-sidenav__icon{background:var(--ink);color:#fff;}
.lb-sidenav__item--active:hover .lb-sidenav__icon{background:var(--ink);color:#fff;}`;
  document.head.appendChild(s);
}
function SidebarNav({
  items = [],
  active,
  onSelect,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: `lb-sidenav ${className}`
  }, items.map(it => {
    const isActive = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      className: `lb-sidenav__item ${isActive ? 'lb-sidenav__item--active' : ''}`,
      onClick: () => onSelect && onSelect(it.id),
      "aria-current": isActive ? 'page' : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "lb-sidenav__icon"
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      className: "lb-sidenav__label"
    }, it.label));
  }));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
if (typeof document !== 'undefined' && !document.getElementById('lb-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'lb-tabs-css';
  s.textContent = `
.lb-tabs{display:flex;gap:24px;border-bottom:1px solid var(--border-subtle);font-family:var(--font-sans);}
.lb-tabs__tab{position:relative;background:none;border:none;cursor:pointer;padding:0 0 14px;
  font-size:var(--text-lg);font-weight:var(--fw-semibold);color:var(--gray-400);
  transition:color .15s ease;}
.lb-tabs__tab:hover{color:var(--gray-600);}
.lb-tabs__tab--active{color:var(--ink);}
.lb-tabs__tab--active::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;
  background:var(--ink);border-radius:2px;}`;
  document.head.appendChild(s);
}
function Tabs({
  tabs = [],
  active,
  onSelect,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `lb-tabs ${className}`,
    role: "tablist"
  }, tabs.map(t => {
    const id = typeof t === 'string' ? t : t.id;
    const label = typeof t === 'string' ? t : t.label;
    const isActive = id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      "aria-selected": isActive,
      className: `lb-tabs__tab ${isActive ? 'lb-tabs__tab--active' : ''}`,
      onClick: () => onSelect && onSelect(id)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/profile/ProfileHeader.jsx
try { (() => {
if (typeof document !== 'undefined' && !document.getElementById('lb-pheader-css')) {
  const s = document.createElement('style');
  s.id = 'lb-pheader-css';
  s.textContent = `
.lb-pheader{display:flex;flex-direction:column;align-items:center;gap:16px;
  text-align:center;font-family:var(--font-sans);width:100%;}
.lb-pheader__name{font-size:var(--text-2xl);font-weight:var(--fw-extrabold);color:var(--ink);
  letter-spacing:var(--tracking-tight);}
.lb-pheader__bio{font-size:var(--text-base);color:var(--gray-600);max-width:400px;
  line-height:var(--leading-normal);}
.lb-pheader__socials{display:flex;align-items:center;gap:18px;margin-top:2px;}
.lb-pheader__social{display:flex;align-items:center;justify-content:center;
  color:var(--ink);cursor:pointer;transition:opacity .15s ease;}
.lb-pheader__social:hover{opacity:.6;}
.lb-pheader__social svg{width:26px;height:26px;display:block;}`;
  document.head.appendChild(s);
}
function ProfileHeader({
  avatar,
  name,
  bio,
  socials,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: `lb-pheader ${className}`
  }, avatar, /*#__PURE__*/React.createElement("h1", {
    className: "lb-pheader__name"
  }, name), bio && /*#__PURE__*/React.createElement("p", {
    className: "lb-pheader__bio"
  }, bio), socials && socials.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "lb-pheader__socials"
  }, socials.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "lb-pheader__social",
    href: s.href || '#',
    "aria-label": s.label,
    onClick: e => {
      if (!s.href || s.href === '#') e.preventDefault();
    }
  }, s.icon))));
}
Object.assign(__ds_scope, { ProfileHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/profile/ProfileHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminApp.jsx
try { (() => {
/* Linkbase admin console — content editor recreation.
   Composes design-system primitives from window.LinkbaseDesignSystem_9f6309. */
const DS = window.LinkbaseDesignSystem_9f6309;
const {
  Button,
  IconButton,
  SidebarNav,
  Tabs,
  Avatar,
  LinkRow,
  ProfileHeader,
  ProfileLinkButton,
  Toggle,
  Badge,
  Card
} = DS;
const Icon = window.LB.Icon;
const NAV = [{
  id: 'content',
  label: 'Content',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "layout-grid",
    size: 22
  })
}, {
  id: 'header',
  label: 'Header',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "contact",
    size: 22
  })
}, {
  id: 'design',
  label: 'Design',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "paintbrush",
    size: 22
  })
}, {
  id: 'settings',
  label: 'Settings',
  icon: /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 22
  })
}];
const START_LINKS = [{
  id: 1,
  title: 'Ghulam Abbas | Full Stack Developer | Building Real-World Apps',
  clicks: 0,
  domain: 'udemy.com',
  icon: 'graduation-cap'
}, {
  id: 2,
  title: 'Instagram',
  clicks: 0,
  domain: 'instagram.com',
  icon: 'instagram'
}];
function PromoBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--black)',
      color: '#fff',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 17
    }
  }, "Elevate your design with better themes and styles."), /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "sm",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 16
    })
  }, "Upgrade"));
}
function UrlBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 28px'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Back",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 22
  })), /*#__PURE__*/React.createElement(Badge, {
    variant: "soft",
    size: "md",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "asterisk",
      size: 16
    }),
    style: {
      height: 44,
      gap: 10,
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, "linkbase.to/gabbasdev", /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 15
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 16
    })
  }, "Enhance"));
}
function PhonePreview({
  links,
  footerOn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      background: 'var(--surface-page)',
      borderRadius: 28,
      padding: 20,
      boxShadow: 'var(--shadow-float)',
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "asterisk",
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Share",
    variant: "white",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(.9)',
      transformOrigin: 'top center'
    }
  }, /*#__PURE__*/React.createElement(ProfileHeader, {
    avatar: /*#__PURE__*/React.createElement(Avatar, {
      name: "gabbasdev",
      size: "lg"
    }),
    name: "gabbasdev",
    socials: [{
      label: 'Instagram',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "instagram",
        size: 24
      })
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 6
    }
  }, links.map(l => /*#__PURE__*/React.createElement(ProfileLinkButton, {
    key: l.id,
    title: l.title
  }))), footerOn && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "dark"
  }, "Join gabbasdev on Linkbase")));
}
function AdminApp() {
  const [nav, setNav] = React.useState('content');
  const [tab, setTab] = React.useState('links');
  const [footerOn, setFooterOn] = React.useState(true);
  const [links, setLinks] = React.useState(START_LINKS);
  const addLink = () => {
    const n = links.length + 1;
    setLinks([{
      id: Date.now(),
      title: 'New link ' + n,
      clicks: 0,
      domain: 'example.com',
      icon: 'link'
    }, ...links]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--black)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(PromoBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      borderRadius: '24px 24px 0 0',
      minHeight: 'calc(100vh - 56px)'
    }
  }, /*#__PURE__*/React.createElement(UrlBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      padding: '0 28px 40px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    items: NAV,
    active: nav,
    onSelect: setNav
  }), /*#__PURE__*/React.createElement(Card, {
    elevation: "shadow",
    padding: "lg",
    style: {
      flex: 1,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 30,
      fontWeight: 800,
      color: 'var(--ink)'
    }
  }, "Content"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Reorder",
    variant: "soft"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "list-checks",
    size: 20
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Archive",
    variant: "soft"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "archive",
    size: 20
  })))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['Links', 'Shop'],
    active: tab,
    onSelect: setTab
  }), tab === 'links' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      margin: '22px 0 20px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "gabbasdev",
    size: "md"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--ink)'
    }
  }, "gabbasdev"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Instagram",
    variant: "soft",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Add social",
    variant: "soft",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    }),
    onClick: addLink
  }, "Add"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "folder-plus",
      size: 18
    })
  }, "New collection")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, links.map(l => /*#__PURE__*/React.createElement(LinkRow, {
    key: l.id,
    title: l.title,
    clicks: l.clicks,
    domain: l.domain,
    thumbIcon: /*#__PURE__*/React.createElement(Icon, {
      name: l.icon,
      size: 22,
      style: {
        color: 'var(--gray-500)'
      }
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      margin: '24px 0'
    }
  }), /*#__PURE__*/React.createElement(Card, {
    elevation: "bordered",
    padding: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--ink)'
    }
  }, "Linkbase footer"), /*#__PURE__*/React.createElement(Toggle, {
    checked: footerOn,
    onChange: e => setFooterOn(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 26,
      color: 'var(--ink)'
    }
  }, "Link", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green)'
    }
  }, "base")))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 0',
      textAlign: 'center',
      color: 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shopping-bag",
    size: 40,
    style: {
      margin: '0 auto 12px',
      color: 'var(--gray-400)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--ink)',
      fontSize: 18
    }
  }, "Start selling on Linkbase"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, "Add products and collect payments from your page."))), /*#__PURE__*/React.createElement(PhonePreview, {
    links: links,
    footerOn: footerOn
  }))));
}
window.AdminApp = AdminApp;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(AdminApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingApp.jsx
try { (() => {
/* Linkbase marketing landing page — the "color block" section system. */
const DS = window.LinkbaseDesignSystem_9f6309;
const {
  Button,
  Input,
  Accordion,
  Badge
} = DS;
const Icon = window.LB.Icon;
const C = {
  chartreuse: 'var(--chartreuse)',
  cobalt: 'var(--cobalt)',
  berry: 'var(--berry)',
  sage: 'var(--sage)',
  grape: 'var(--grape)',
  blush: 'var(--blush)',
  mustard: 'var(--mustard)'
};

/* Media placeholder — no Linktree photography is used. */
function Ph({
  bg = 'var(--gray-200)',
  h = 220,
  r = 20,
  label = 'image',
  icon = 'image',
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      height: h,
      borderRadius: r,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: dark ? 'rgba(255,255,255,.7)' : 'var(--gray-500)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 30
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.05em'
    }
  }, label));
}
const H1 = {
  fontFamily: 'var(--font-display)',
  fontWeight: 900,
  letterSpacing: '-.02em',
  lineHeight: 1.02,
  margin: 0
};
const wrap = {
  maxWidth: 1120,
  margin: '0 auto',
  padding: '0 32px'
};
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 76
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 26,
      color: 'var(--ink)'
    }
  }, "Link", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green)'
    }
  }, "base")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      fontWeight: 600,
      fontSize: 15
    }
  }, ['Products', 'Templates', 'Marketplace', 'Learn', 'Pricing'].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--ink)',
      textDecoration: 'none'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Sign up free")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: C.chartreuse
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center',
      padding: '40px 32px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...H1,
      fontSize: 68,
      color: 'var(--ink)'
    }
  }, "A link in bio built for you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--ink)',
      maxWidth: 440,
      margin: '20px 0 28px',
      lineHeight: 1.5
    }
  }, "Join 70M+ people using Linkbase for their link in bio. One link to help you share everything you create, curate and sell."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "yourname",
    prefix: "linkbase.to/"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get started"))), /*#__PURE__*/React.createElement(Ph, {
    bg: "var(--cobalt)",
    h: 360,
    label: "hero visual",
    icon: "smartphone",
    dark: true
  })));
}
function Feature({
  bg,
  dark,
  eyebrow,
  title,
  body,
  cta,
  media,
  flip
}) {
  const text = /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      opacity: .7,
      marginBottom: 10,
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H1,
      fontSize: 40,
      color: dark ? '#fff' : 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      margin: '18px 0 26px',
      maxWidth: 420,
      color: dark ? 'rgba(255,255,255,.85)' : 'var(--gray-700)'
    }
  }, body), /*#__PURE__*/React.createElement(Button, {
    variant: dark ? 'green' : 'primary',
    size: "md"
  }, cta));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center',
      padding: '90px 32px'
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, media, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, media)));
}
function LogoCloud() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H1,
      fontSize: 34,
      textAlign: 'center',
      color: 'var(--ink)'
    }
  }, "The only link in bio trusted by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--cobalt)'
    }
  }, "70M+ creators")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 18,
      marginTop: 40
    }
  }, ['photo', 'photo', 'brand', 'brand'].map((l, i) => /*#__PURE__*/React.createElement(Ph, {
    key: i,
    bg: "var(--gray-100)",
    h: 150,
    r: 24,
    label: l,
    icon: l === 'brand' ? 'building-2' : 'user'
  })))));
}
function FeatureGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '20px 0 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.blush,
      borderRadius: 24,
      padding: 26
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    bg: "rgba(255,255,255,.5)",
    h: 150,
    r: 16,
    label: "content",
    icon: "layout-grid"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginTop: 18,
      color: 'var(--ink)'
    }
  }, "Share every type of content in limitless ways")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.cobalt,
      borderRadius: 24,
      padding: 26
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    bg: "rgba(255,255,255,.12)",
    h: 150,
    r: 16,
    label: "grow",
    icon: "trending-up",
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginTop: 18,
      color: '#fff'
    }
  }, "Grow, own and engage your audience across every channel")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.chartreuse,
      borderRadius: 24,
      padding: 26
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    bg: "rgba(255,255,255,.5)",
    h: 150,
    r: 16,
    label: "sell",
    icon: "shopping-bag"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginTop: 18,
      color: 'var(--ink)'
    }
  }, "Sell products and collect payments simply")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.mustard,
      borderRadius: 24,
      padding: 26
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    bg: "rgba(255,255,255,.35)",
    h: 150,
    r: 16,
    label: "analyze",
    icon: "bar-chart-3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginTop: 18,
      color: 'var(--ink)'
    }
  }, "Understand your audience with rich analytics"))));
}
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '40px 0 90px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto 28px'
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    bg: "var(--berry)",
    h: 120,
    r: 999,
    label: "",
    icon: "user",
    dark: true
  })), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      ...H1,
      fontSize: 30,
      color: 'var(--ink)',
      margin: 0
    }
  }, "\"Linkbase simplifies the process for creators to share multiple parts of themselves in one inclusive link.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      color: 'var(--gray-600)',
      fontWeight: 600
    }
  }, "Riley Garcia \xB7 Creator")));
}
function FAQ() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: C.berry,
      padding: '90px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H1,
      fontSize: 40,
      color: C.chartreuse,
      textAlign: 'center',
      marginBottom: 36
    }
  }, "Questions? Answered."), /*#__PURE__*/React.createElement(Accordion, {
    onDark: true,
    defaultOpen: 0,
    items: [{
      q: 'Why should creators use Linkbase?',
      a: 'Your link in bio is the front door to everything you do. Linkbase puts all of it — videos, shops, socials — behind one link you can share anywhere.'
    }, {
      q: 'Is Linkbase free to use?',
      a: 'Yes. Every account gets a free page with unlimited links. Paid plans add themes, analytics and monetization.'
    }, {
      q: 'Can I sell products from my Linkbase?',
      a: 'Add a Shop tab to sell products and collect payments right from your page.'
    }, {
      q: 'Do I need a website too?',
      a: 'No. Your Linkbase page works as a lightweight site on its own.'
    }]
  })));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: C.grape,
      padding: '100px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...H1,
      fontSize: 46,
      color: '#fff'
    }
  }, "Jumpstart your corner of the internet today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      maxWidth: 460,
      margin: '32px auto 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "yourname",
    prefix: "linkbase.to/"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "green",
    size: "lg"
  }, "Get started"))));
}
function Footer() {
  const cols = {
    Company: ['About', 'Blog', 'Press', 'Careers', 'Contact'],
    Community: ['Creators', 'Templates', 'What\'s new', 'Marketplace'],
    Support: ['Help topics', 'Getting started', 'Trust center', 'Report'],
    Legal: ['Terms', 'Privacy', 'Cookie notice', 'Trademark']
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: '#fff',
      padding: '70px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32
    }
  }, Object.entries(cols).map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,.7)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 50,
      paddingTop: 28,
      borderTop: '1px solid rgba(255,255,255,.14)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 22
    }
  }, "Link", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--green-bright)'
    }
  }, "base")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, ['instagram', 'youtube', 'twitter', 'music-2'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 22
  }))))));
}
function MarketingApp() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Feature, {
    bg: C.cobalt,
    dark: true,
    eyebrow: "Customize",
    title: "Create and customize your Linkbase in minutes",
    body: "Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.",
    cta: "Get started",
    media: /*#__PURE__*/React.createElement(Ph, {
      bg: "rgba(255,255,255,.12)",
      h: 320,
      label: "editor",
      icon: "smartphone",
      dark: true
    })
  }), /*#__PURE__*/React.createElement(Feature, {
    bg: C.berry,
    dark: true,
    flip: true,
    eyebrow: "Share",
    title: "Share your Linkbase from anywhere you like",
    body: "Add your unique Linkbase URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.",
    cta: "Get started",
    media: /*#__PURE__*/React.createElement(Ph, {
      bg: "rgba(255,255,255,.1)",
      h: 320,
      label: "collage",
      icon: "qr-code",
      dark: true
    })
  }), /*#__PURE__*/React.createElement(Feature, {
    bg: C.sage,
    title: "Analyze your audience and keep them engaged",
    body: "Track your engagement over time, monitor revenue and learn what's converting your audience. Make informed updates on the fly to keep them coming back.",
    cta: "Get started",
    media: /*#__PURE__*/React.createElement(Ph, {
      bg: "var(--white)",
      h: 320,
      label: "analytics",
      icon: "bar-chart-3"
    })
  }), /*#__PURE__*/React.createElement(LogoCloud, null), /*#__PURE__*/React.createElement(FeatureGrid, null), /*#__PURE__*/React.createElement(Testimonial, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.MarketingApp = MarketingApp;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(MarketingApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/profile/ProfileApp.jsx
try { (() => {
/* Linkbase public profile page — the shared link-in-bio view. */
const DS = window.LinkbaseDesignSystem_9f6309;
const {
  Avatar,
  IconButton,
  ProfileHeader,
  ProfileLinkButton,
  Badge
} = DS;
const Icon = window.LB.Icon;
const LINKS = [{
  id: 1,
  title: 'Coding With Abbas | YouTube'
}, {
  id: 2,
  title: 'Coding Courses | Udemy'
}, {
  id: 3,
  title: 'X Profile'
}, {
  id: 4,
  title: 'Instagram'
}];
function ProfileApp() {
  const [banner, setBanner] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 620,
      padding: '20px 20px 160px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "asterisk",
    size: 20
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Share",
    variant: "white"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "share",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(ProfileHeader, {
    avatar: /*#__PURE__*/React.createElement(Avatar, {
      name: "gabbasdev",
      size: "xl"
    }),
    name: "gabbasdev",
    socials: [{
      label: 'YouTube',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "youtube",
        size: 24
      })
    }, {
      label: 'Instagram',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "instagram",
        size: 24
      })
    }, {
      label: 'X',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "twitter",
        size: 22
      })
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 32
    }
  }, LINKS.map(l => /*#__PURE__*/React.createElement(ProfileLinkButton, {
    key: l.id,
    title: l.title
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 40,
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--gray-600)'
    }
  }, ['Cookie Preferences', 'Report', 'Privacy', 'More from Linkbase'].map((t, i, a) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: t
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, t), i < a.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gray-400)'
    }
  }, "\xB7"))))), banner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      height: 180,
      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.92) 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 12,
      paddingBottom: 26,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 16px 12px 20px',
      boxShadow: 'var(--shadow-pop)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, "linkbase.to/you"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setBanner(false),
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'var(--gray-100)',
      width: 28,
      height: 28,
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontWeight: 700,
      fontSize: 15
    }
  }, "Join gabbasdev on Linkbase today"))));
}
window.ProfileApp = ProfileApp;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ProfileApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/profile/ProfileApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shared-icons.js
try { (() => {
/* Shared Lucide icon renderer for Linkbase UI kits.
   Builds real Lucide icon SVGs as React elements (survives re-renders, unlike
   lucide.createIcons() DOM replacement). Requires React + the lucide UMD build
   loaded first. Icons are Lucide (MIT) — SUBSTITUTED for Linktree's private icon set. */
(function () {
  window.LB = window.LB || {};
  function pascal(name) {
    return String(name).split(/[-_]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
  }
  window.LB.Icon = function Icon(props) {
    var name = props.name,
      size = props.size || 20,
      strokeWidth = props.strokeWidth || 2;
    var R = window.React,
      L = window.lucide;
    var key = pascal(name);
    var node = L && (L.icons ? L.icons[key] || L.icons[name] : L[key] || L[name]);
    if (node && node.iconNode) node = node.iconNode;
    var style = Object.assign({
      display: 'block',
      flex: 'none'
    }, props.style || {});
    if (!node || !Array.isArray(node)) {
      return R.createElement('span', {
        style: Object.assign({
          width: size,
          height: size
        }, style)
      });
    }
    // Lucide UMD shape: ["svg", {attrs}, [ [tag, attrs], ... ]].
    // iconNode shape: [ [tag, attrs], ... ]. Normalize to the children array.
    var kids = typeof node[0] === 'string' && Array.isArray(node[2]) ? node[2] : node;
    var children = kids.map(function (c, i) {
      return R.createElement(c[0], Object.assign({
        key: i
      }, c[1]));
    });
    return R.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: props.className,
      style: style
    }, children);
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared-icons.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.LinkRow = __ds_scope.LinkRow;

__ds_ns.ProfileLinkButton = __ds_scope.ProfileLinkButton;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ProfileHeader = __ds_scope.ProfileHeader;

})();
