(()=>{var e,t={255:(e,t,l)=>{"use strict";const a=window.React,o=window.wp.editor,r=window.wp.blocks,n=window.wp.plugins,i=window.wp.components,c=window.wp.element,s=window.wp.i18n;var d=l(967),m=l.n(d);const C=window.wp.blockEditor,g={filled:{light:(0,a.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)(i.Path,{fill:"currentColor",d:"M13 2a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V2Zm0 19a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Zm6.777-16.777a1 1 0 0 1 0 1.414l-.71.71a1 1 0 1 1-1.414-1.414l.71-.71a1 1 0 0 1 1.414 0ZM6.347 19.067a1 1 0 1 0-1.414-1.414l-.71.71a1 1 0 1 0 1.414 1.414l.71-.71ZM20 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM2 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H2Zm15.653 6.653a1 1 0 0 1 1.414 0l.71.71a1 1 0 0 1-1.414 1.414l-.71-.71a1 1 0 0 1 0-1.414ZM5.637 4.223a1 1 0 1 0-1.414 1.414l.71.71a1 1 0 0 0 1.414-1.414l-.71-.71Zm2.12 3.534a6 6 0 1 1 8.486 8.486 6 6 0 0 1-8.486-8.486Z"})),dark:(0,a.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)(i.Path,{fill:"currentColor",d:"M12.056 3.6a1 1 0 0 0-.908-1.564c-5.123.434-9.144 4.728-9.144 9.962 0 5.522 4.476 9.998 9.998 9.998 5.234 0 9.528-4.021 9.962-9.144a1 1 0 0 0-1.564-.908A6 6 0 0 1 12.055 3.6Z"}))},stroke:{light:(0,a.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)(i.Path,{fill:"currentColor",fillRule:"evenodd",d:"M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM4.223 4.223a1 1 0 0 1 1.414 0l.71.71a1 1 0 1 1-1.414 1.414l-.71-.71a1 1 0 0 1 0-1.414Zm15.554 0a1 1 0 0 1 0 1.414l-.71.71a1 1 0 0 1-1.414-1.414l.71-.71a1 1 0 0 1 1.414 0ZM9.172 9.172a4 4 0 1 0 5.656 5.656 4 4 0 0 0-5.656-5.656ZM7.757 7.757a6 6 0 1 1 8.486 8.486 6 6 0 0 1-8.486-8.486ZM1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM6.347 17.653a1 1 0 0 1 0 1.414l-.71.71a1 1 0 0 1-1.414-1.414l.71-.71a1 1 0 0 1 1.414 0Zm11.306 0a1 1 0 0 1 1.414 0l.71.71a1 1 0 0 1-1.414 1.414l-.71-.71a1 1 0 0 1 0-1.414ZM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z",clipRule:"evenodd"})),dark:(0,a.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)(i.Path,{fill:"currentColor",fillRule:"evenodd",d:"M12.097 2.53a1 1 0 0 1-.041 1.07 6 6 0 0 0 8.345 8.344 1 1 0 0 1 1.563.908c-.434 5.122-4.728 9.144-9.962 9.144-5.522 0-9.998-4.476-9.998-9.998 0-5.234 4.021-9.528 9.144-9.962a1 1 0 0 1 .949.494ZM9.424 4.424a7.998 7.998 0 1 0 10.152 10.152A8 8 0 0 1 9.424 4.424Z",clipRule:"evenodd"}))},circle:{light:(0,a.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)(i.Path,{fill:"currentColor",fillRule:"evenodd",d:"M12 4a8 8 0 1 0 0 16V4ZM2 12C2 6.477 6.477 2 12 2c.375 0 .745.02 1.11.061C18.11 2.614 22 6.852 22 12s-3.89 9.386-8.89 9.939c-.365.04-.735.061-1.11.061-5.523 0-10-4.477-10-10Z",clipRule:"evenodd"})),dark:(0,a.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)(i.Path,{fill:"currentColor",fillRule:"evenodd",d:"M12 4a8 8 0 1 0 0 16V4ZM2 12C2 6.477 6.477 2 12 2c.375 0 .745.02 1.11.061C18.11 2.614 22 6.852 22 12s-3.89 9.386-8.89 9.939c-.365.04-.735.061-1.11.061-5.523 0-10-4.477-10-10Z",clipRule:"evenodd"}))},eye:{light:(0,a.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)(i.Path,{fill:"currentColor",fillRule:"evenodd",d:"M12 6c-3.127 0-6.367 1.79-8.638 5.606a.77.77 0 0 0 0 .788C5.633 16.209 8.873 18 12 18s6.367-1.79 8.638-5.606a.77.77 0 0 0 0-.788C18.367 7.791 15.127 6 12 6Zm0-2c3.952 0 7.79 2.272 10.357 6.583a2.77 2.77 0 0 1 0 2.834C19.79 17.727 15.952 20 12 20c-3.952 0-7.79-2.272-10.357-6.583a2.77 2.77 0 0 1 0-2.834C4.21 6.273 8.048 4 12 4Zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",clipRule:"evenodd"})),dark:(0,a.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)(i.Path,{fill:"currentColor",d:"M4.728 12.253a1 1 0 0 0-1.456 1.37c1.182 1.258 2.5 2.227 3.896 2.898l-1.024 1.694a1 1 0 0 0 1.712 1.034l1.214-2.01c.636.178 1.28.297 1.93.357V20a1 1 0 1 0 2 0v-2.404c.65-.06 1.294-.18 1.93-.356l1.214 2.01a1 1 0 1 0 1.712-1.035l-1.024-1.694c1.395-.671 2.714-1.64 3.896-2.898a1 1 0 1 0-1.457-1.37c-2.153 2.29-4.736 3.39-7.271 3.39s-5.118-1.1-7.272-3.39Z"}))}},u=JSON.parse('{"u2":"tabor/dark-mode-toggle"}'),w=(0,a.createElement)(i.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(i.Path,{d:"M12.0892 4.39878C12.1655 4.53014 12.203 4.6805 12.1972 4.83233C12.1914 4.98417 12.1425 5.13122 12.0563 5.25634C11.4189 6.1822 11.126 7.30208 11.2284 8.42145C11.3309 9.54081 11.8222 10.5889 12.6171 11.3837C13.4119 12.1785 14.4601 12.6697 15.5795 12.772C16.6989 12.8743 17.8187 12.5812 18.7445 11.9437C18.8695 11.8578 19.0164 11.8091 19.1681 11.8033C19.3197 11.7975 19.4699 11.8349 19.6011 11.9112C19.7324 11.9874 19.8392 12.0993 19.9093 12.2339C19.9795 12.3685 20.0099 12.5202 19.9972 12.6715C19.6493 16.7766 16.2079 20 12.013 20C7.58734 20 4 16.4127 4 11.987C4 7.79217 7.22268 4.35069 11.3286 4.00286C11.4798 3.99005 11.6316 4.02046 11.7663 4.09055C11.9009 4.16064 12.0129 4.26753 12.0892 4.39878ZM9.94684 5.91675C8.91633 6.26831 7.99235 6.87657 7.26205 7.68418C6.53175 8.49178 6.01921 9.4721 5.77277 10.5327C5.52632 11.5933 5.5541 12.6991 5.85348 13.746C6.15286 14.7929 6.71397 15.7462 7.48389 16.5161C8.25381 17.2861 9.20717 17.8472 10.254 18.1465C11.3009 18.4459 12.4068 18.4737 13.4673 18.2273C14.5279 17.9808 15.5082 17.4683 16.3159 16.738C17.1235 16.0077 17.7317 15.0837 18.0833 14.0532C16.9494 14.4394 15.7301 14.5002 14.5634 14.2288C13.3967 13.9574 12.3294 13.3646 11.4824 12.5176C10.6355 11.6706 10.0427 10.6033 9.77125 9.43664C9.49985 8.26997 9.56067 7.05061 9.94684 5.91675Z",fill:"currentColor"})),p=(0,a.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},(0,a.createElement)(i.Path,{fill:"currentColor",fillRule:"evenodd",d:"M12.5 3C12.7291 3 12.9487 3.09099 13.1107 3.25295C13.2726 3.41492 13.3636 3.63459 13.3636 3.86364V4.72727C13.3636 4.95632 13.2726 5.17599 13.1107 5.33796C12.9487 5.49992 12.7291 5.59091 12.5 5.59091C12.2709 5.59091 12.0513 5.49992 11.8893 5.33796C11.7274 5.17599 11.6364 4.95632 11.6364 4.72727V3.86364C11.6364 3.63459 11.7274 3.41492 11.8893 3.25295C12.0513 3.09099 12.2709 3 12.5 3ZM5.7835 5.7835C5.94546 5.62159 6.16509 5.53064 6.39409 5.53064C6.6231 5.53064 6.84273 5.62159 7.00468 5.7835L7.61786 6.39668C7.70035 6.47635 7.76614 6.57165 7.81141 6.67701C7.85667 6.78238 7.88049 6.89571 7.88149 7.01038C7.88249 7.12505 7.86063 7.23878 7.81721 7.34491C7.77379 7.45105 7.70966 7.54748 7.62857 7.62857C7.54748 7.70966 7.45105 7.77379 7.34491 7.81721C7.23878 7.86063 7.12505 7.88249 7.01038 7.88149C6.89571 7.88049 6.78238 7.85667 6.67701 7.81141C6.57165 7.76614 6.47635 7.70035 6.39668 7.61786L5.7835 7.00468C5.62159 6.84273 5.53064 6.6231 5.53064 6.39409C5.53064 6.16509 5.62159 5.94546 5.7835 5.7835ZM19.2165 5.7835C19.3784 5.94546 19.4694 6.16509 19.4694 6.39409C19.4694 6.6231 19.3784 6.84273 19.2165 7.00468L18.6033 7.61786C18.4404 7.77518 18.2223 7.86223 17.9958 7.86026C17.7694 7.8583 17.5528 7.76747 17.3927 7.60734C17.2325 7.44722 17.1417 7.23061 17.1397 7.00416C17.1378 6.77772 17.2248 6.55957 17.3821 6.39668L17.9953 5.7835C18.1573 5.62159 18.3769 5.53064 18.6059 5.53064C18.8349 5.53064 19.0545 5.62159 19.2165 5.7835ZM10.0576 10.0576C9.72769 10.3763 9.46452 10.7575 9.28347 11.179C9.10242 11.6004 9.00712 12.0537 9.00313 12.5124C8.99915 12.9711 9.08656 13.426 9.26025 13.8506C9.43395 14.2751 9.69046 14.6608 10.0148 14.9852C10.3392 15.3095 10.7249 15.566 11.1494 15.7397C11.574 15.9134 12.0289 16.0009 12.4876 15.9969C12.9463 15.9929 13.3996 15.8976 13.821 15.7165C14.2425 15.5355 14.6237 15.2723 14.9424 14.9424C15.5716 14.2908 15.9198 13.4182 15.912 12.5124C15.9041 11.6067 15.5408 10.7402 14.9003 10.0997C14.2598 9.45922 13.3933 9.09591 12.4876 9.08804C11.5818 9.08016 10.7092 9.42836 10.0576 10.0576ZM8.83559 8.83559C9.80745 7.86373 11.1256 7.31774 12.5 7.31774C13.8744 7.31774 15.1925 7.86373 16.1644 8.83559C17.1363 9.80745 17.6823 11.1256 17.6823 12.5C17.6823 13.8744 17.1363 15.1925 16.1644 16.1644C15.1925 17.1363 13.8744 17.6823 12.5 17.6823C11.1256 17.6823 9.80745 17.1363 8.83559 16.1644C7.86373 15.1925 7.31774 13.8744 7.31774 12.5C7.31774 11.1256 7.86373 9.80745 8.83559 8.83559ZM3 12.5C3 12.2709 3.09099 12.0513 3.25295 11.8893C3.41492 11.7274 3.63459 11.6364 3.86364 11.6364H4.72727C4.95632 11.6364 5.17599 11.7274 5.33796 11.8893C5.49992 12.0513 5.59091 12.2709 5.59091 12.5C5.59091 12.7291 5.49992 12.9487 5.33796 13.1107C5.17599 13.2726 4.95632 13.3636 4.72727 13.3636H3.86364C3.63459 13.3636 3.41492 13.2726 3.25295 13.1107C3.09099 12.9487 3 12.7291 3 12.5ZM19.4091 12.5C19.4091 12.2709 19.5001 12.0513 19.662 11.8893C19.824 11.7274 20.0437 11.6364 20.2727 11.6364H21.1364C21.3654 11.6364 21.5851 11.7274 21.747 11.8893C21.909 12.0513 22 12.2709 22 12.5C22 12.7291 21.909 12.9487 21.747 13.1107C21.5851 13.2726 21.3654 13.3636 21.1364 13.3636H20.2727C20.0437 13.3636 19.824 13.2726 19.662 13.1107C19.5001 12.9487 19.4091 12.7291 19.4091 12.5ZM7.61786 17.3821C7.77977 17.5441 7.87072 17.7637 7.87072 17.9927C7.87072 18.2217 7.77977 18.4414 7.61786 18.6033L7.00468 19.2165C6.8418 19.3738 6.62364 19.4609 6.3972 19.4589C6.17076 19.4569 5.95415 19.3661 5.79402 19.206C5.6339 19.0459 5.54307 18.8292 5.5411 18.6028C5.53913 18.3764 5.62618 18.1582 5.7835 17.9953L6.39668 17.3821C6.55864 17.2202 6.77827 17.1293 7.00727 17.1293C7.23628 17.1293 7.45591 17.2202 7.61786 17.3821ZM17.3821 17.3821C17.5441 17.2202 17.7637 17.1293 17.9927 17.1293C18.2217 17.1293 18.4414 17.2202 18.6033 17.3821L19.2165 17.9953C19.3738 18.1582 19.4609 18.3764 19.4589 18.6028C19.4569 18.8292 19.3661 19.0459 19.206 19.206C19.0459 19.3661 18.8292 19.4569 18.6028 19.4589C18.3764 19.4609 18.1582 19.3738 17.9953 19.2165L17.3821 18.6033C17.2202 18.4414 17.1293 18.2217 17.1293 17.9927C17.1293 17.7637 17.2202 17.5441 17.3821 17.3821ZM12.5 19.4091C12.7291 19.4091 12.9487 19.5001 13.1107 19.662C13.2726 19.824 13.3636 20.0437 13.3636 20.2727V21.1364C13.3636 21.3654 13.2726 21.5851 13.1107 21.747C12.9487 21.909 12.7291 22 12.5 22C12.2709 22 12.0513 21.909 11.8893 21.747C11.7274 21.5851 11.6364 21.3654 11.6364 21.1364V20.2727C11.6364 20.0437 11.7274 19.824 11.8893 19.662C12.0513 19.5001 12.2709 19.4091 12.5 19.4091Z",clipRule:"evenodd"})),h=(0,a.createElement)(i.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(i.Path,{d:"M12.056 5.25626C12.2319 5.00102 12.2448 4.6672 12.0891 4.39911C11.9335 4.13101 11.6372 3.9767 11.3283 4.00287C7.22296 4.35074 4 7.79206 4 11.987C4 16.4125 7.58755 20 12.013 20C16.208 20 19.6495 16.777 19.9971 12.6714C20.0233 12.3625 19.869 12.0663 19.6009 11.9106C19.3328 11.755 18.999 11.768 18.7437 11.9439C17.9695 12.4776 17.0318 12.79 16.0186 12.79C13.3629 12.79 11.2099 10.637 11.2099 7.98124C11.2099 6.96821 11.5223 6.03055 12.056 5.25626Z",fill:"currentColor"}));(0,r.registerBlockType)(u.u2,{icon:h,example:{viewportWidth:300,attributes:{size:"large"}},edit:function({attributes:e,setAttributes:t}){const{className:l,icon:o,size:r}=e,n=(0,C.useBlockProps)({className:m()({[`is-${r}`]:r})}),d=(0,C.__experimentalUseColorProps)(e),u=(0,C.__experimentalUseBorderProps)(e),w=(0,C.__experimentalGetSpacingClassesAndStyles)(e),p=g[o]?.light||g.filled?.light,h=g[o]?.dark||g.filled?.dark;return(0,c.useEffect)((()=>{const e={"is-style-stroke":"stroke","is-style-circle":"circle","is-style-eye":"eye"},a=Object.keys(e).find((e=>l?.includes(e)));t(a?{icon:e[a]}:{icon:void 0})}),[l,t]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(C.InspectorControls,{group:"styles"},(0,a.createElement)(i.__experimentalToolsPanel,{label:(0,s.__)("Size","dark-mode-toggle-block")},(0,a.createElement)(i.__experimentalToolsPanelItem,{label:(0,s.__)("Size","dark-mode-toggle-block"),isShownByDefault:!0,hasValue:()=>!!r,onDeselect:()=>t({size:void 0})},(0,a.createElement)(i.__experimentalToggleGroupControl,{label:(0,s.__)("Size","dark-mode-toggle-block"),hideLabelFromVision:!0,value:r,onChange:e=>{t({size:e})},isBlock:!0,size:"__unstable-large",__nextHasNoMarginBottom:!0},(0,a.createElement)(i.__experimentalToggleGroupControlOption,{value:"small"
/* translators: S stands for 'small' and is a size label. */,label:(0,s.__)("S","dark-mode-toggle-block"),"aria-label":(0,s.__)("Small","dark-mode-toggle-block")}),(0,a.createElement)(i.__experimentalToggleGroupControlOption,{value:"medium"
/* translators: M stands for 'medium' and is a size label. */,label:(0,s.__)("M","dark-mode-toggle-block"),"aria-label":(0,s.__)("Medium","dark-mode-toggle-block")}),(0,a.createElement)(i.__experimentalToggleGroupControlOption,{value:"large"
/* translators: M stands for 'medium' and is a size label. */,label:(0,s.__)("L","dark-mode-toggle-block"),"aria-label":(0,s.__)("Large","dark-mode-toggle-block")}))))),(0,a.createElement)("div",{...n},(0,a.createElement)(i.Disabled,null,(0,a.createElement)("label",{className:"wp-block-tabor-dark-mode-toggle__label",htmlFor:"theme-toggle"},(0,a.createElement)("input",{type:"checkbox",className:"wp-block-tabor-dark-mode-toggle__input",id:"theme-toggle","aria-label":(0,s.__)("Toggle dark mode","dark-mode-toggle-block")}),(0,a.createElement)("span",{className:m()(l,"wp-block-tabor-dark-mode-toggle__track",d.className,u.className),style:{...u.style,...d.style,...w.style}},(0,a.createElement)("span",{className:"wp-block-tabor-dark-mode-toggle__selector",style:{...d.style.text}},(0,a.createElement)("span",{className:"wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--light","aria-hidden":"true"},(0,a.createElement)(i.Icon,{icon:p,size:16})),(0,a.createElement)("span",{className:"wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--dark","aria-hidden":"true"},(0,a.createElement)(i.Icon,{icon:h,size:16}))))))))},save:function({attributes:e}){const{className:t,icon:l,size:o}=e,r=(0,C.__experimentalGetColorClassesAndStyles)(e),n=(0,C.__experimentalGetBorderClassesAndStyles)(e),i=(0,C.__experimentalGetSpacingClassesAndStyles)(e),c=g[l]?.light||g.filled?.light,d=g[l]?.dark||g.filled?.dark,u=m()(t,{[`is-${o}`]:o});return(0,a.createElement)("div",{...C.useBlockProps.save({className:u})},(0,a.createElement)("label",{className:"wp-block-tabor-dark-mode-toggle__label",htmlFor:"theme-toggle"},(0,a.createElement)("input",{type:"checkbox",className:"wp-block-tabor-dark-mode-toggle__input",id:"theme-toggle","aria-label":(0,s.__)("Toggle dark mode","dark-mode-toggle-block")}),(0,a.createElement)("span",{className:m()("wp-block-tabor-dark-mode-toggle__track",r.className,n.className),style:{...n.style,...r.style,...i.style}},(0,a.createElement)("span",{className:"wp-block-tabor-dark-mode-toggle__selector",style:{...r.style}},(0,a.createElement)("span",{className:"wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--light","aria-hidden":"true"},c),(0,a.createElement)("span",{className:"wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--dark","aria-hidden":"true"},d)))))}}),(0,n.registerPlugin)("dark-mode-preview",{render:function(){const[e,t]=(0,c.useState)(!1),[l,r]=(0,c.useState)(null),n=(0,c.useCallback)((()=>{if(!l?.contentDocument?.body)return;const{classList:a}=l.contentDocument.body;e?a.remove("theme-dark"):a.add("theme-dark"),t(!e)}),[l,e]);return(0,c.useEffect)((()=>{const e=()=>{const e=document.querySelector('[name="editor-canvas"]');return!!e&&(r(e),!0)};if(e())return;const t=new MutationObserver((()=>{e()&&t.disconnect()}));return t.observe(document.body,{childList:!0,subtree:!0}),()=>t.disconnect()}),[]),(0,a.createElement)(o.PluginPreviewMenuItem,{icon:e?p:w,onClick:n},e?(0,s.__)("Preview light mode"):(0,s.__)("Preview dark mode"))}})},967:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=n(e,r(l)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=n(t,l));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(l=function(){return o}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,o,r)=>{if(!l){var n=1/0;for(d=0;d<e.length;d++){for(var[l,o,r]=e[d],i=!0,c=0;c<l.length;c++)(!1&r||n>=r)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(i=!1,r<n&&(n=r));if(i){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[l,o,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[n,i,c]=l,s=0;if(n.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var d=c(a)}for(t&&t(l);s<n.length;s++)r=n[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},l=globalThis.webpackChunkdark_mode_toggle_block=globalThis.webpackChunkdark_mode_toggle_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[431],(()=>a(255)));o=a.O(o)})();