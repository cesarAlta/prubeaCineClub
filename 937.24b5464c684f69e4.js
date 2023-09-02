"use strict";(self.webpackChunkfCineClub=self.webpackChunkfCineClub||[]).push([[937],{937:(Pn,ce,d)=>{d.r(ce),d.d(ce,{AuthModule:()=>In});var C=d(895),j=d(199),o=d(256),Vt=d(76),At=d(751),bt=d(742),Dt=d(421),Mt=d(669),Et=d(403),Ft=d(268),wt=d(810),Ot=d(4);let he=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),m=(()=>{class n extends he{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),Gt={provide:h,useExisting:(0,o.Gpc)(()=>O),multi:!0},Bt=new o.OlP("CompositionEventMode");let O=(()=>{class n extends he{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function xt(){const n=(0,C.q)()?(0,C.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Bt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Gt]),o.qOj]}),n})();const kt=!1;function f(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function pe(n){return null!=n&&"number"==typeof n.length}const l=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators"),It=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class ge{static min(t){return function me(n){return t=>{if(f(t.value)||f(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function _e(n){return t=>{if(f(t.value)||f(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return function ye(n){return f(n.value)?{required:!0}:null}(t)}static requiredTrue(t){return function ve(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function Ce(n){return f(n.value)||It.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Ve(n){return t=>f(t.value)||!pe(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function Ae(n){return t=>pe(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function be(n){if(!n)return S;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(f(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return Ne(t)}static composeAsync(t){return Oe(t)}}function S(n){return null}function De(n){return null!=n}function Me(n){const t=(0,o.QGY)(n)?(0,Vt.D)(n):n;if(kt&&!(0,o.CqO)(t)){let e="Expected async validator to return Promise or Observable.";throw"object"==typeof n&&(e+=" Are you using a synchronous validator where an async validator is expected?"),new o.vHH(-1101,e)}return t}function Ee(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Fe(n,t){return t.map(e=>e(n))}function we(n){return n.map(t=>function Tt(n){return!n.validate}(t)?t:e=>t.validate(e))}function Ne(n){if(!n)return null;const t=n.filter(De);return 0==t.length?null:function(e){return Ee(Fe(e,t))}}function q(n){return null!=n?Ne(we(n)):null}function Oe(n){if(!n)return null;const t=n.filter(De);return 0==t.length?null:function(e){return function Nt(...n){const t=(0,Mt.jO)(n),{args:e,keys:r}=(0,bt.D)(n),i=new At.y(s=>{const{length:a}=e;if(!a)return void s.complete();const c=new Array(a);let v=a,A=a;for(let L=0;L<a;L++){let de=!1;(0,Dt.Xf)(e[L]).subscribe((0,Et.x)(s,Tn=>{de||(de=!0,A--),c[L]=Tn},()=>v--,void 0,()=>{(!v||!de)&&(A||s.next(r?(0,wt.n)(r,c):c),s.complete())}))}});return t?i.pipe((0,Ft.Z)(t)):i}(Fe(e,t).map(Me)).pipe((0,Ot.U)(Ee))}}function Y(n){return null!=n?Oe(we(n)):null}function Se(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ge(n){return n._rawValidators}function xe(n){return n._rawAsyncValidators}function $(n){return n?Array.isArray(n)?n:[n]:[]}function G(n,t){return Array.isArray(n)?n.includes(t):n===t}function Be(n,t){const e=$(t);return $(n).forEach(i=>{G(e,i)||e.push(i)}),e}function ke(n,t){return $(t).filter(e=>!G(n,e))}class Ie{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=q(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Y(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class u extends Ie{get formDirective(){return null}get path(){return null}}class g extends Ie{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Te{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Pe=(()=>{class n extends Te{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(g,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),He=(()=>{class n extends Te{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();function Ue(n,t){return n?`with name: '${t}'`:`at index: ${t}`}const Z=!1,b="VALID",B="INVALID",V="PENDING",D="DISABLED";function J(n){return(k(n)?n.validators:n)||null}function Q(n,t){return(k(t)?t.asyncValidators:n)||null}function k(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}function Re(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,Z?function Rt(n){return`\n    There are no form controls registered with this ${n?"group":"array"} yet. If you're using ngModel,\n    you may want to check next tick (e.g. use setTimeout).\n  `}(t):"");if(!r[e])throw new o.vHH(1001,Z?function Lt(n,t){return`Cannot find form control ${Ue(n,t)}`}(t,e):"")}function Le(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,Z?function jt(n,t){return`Must supply a value for form control ${Ue(n,t)}`}(t,i):"")})}class I{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===B}get pending(){return this.status==V}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Be(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Be(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(ke(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(ke(t,this._rawAsyncValidators))}hasValidator(t){return G(this._rawValidators,t)}hasAsyncValidator(t){return G(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=V,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=b,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===V)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;const e=Me(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(B)?B:b}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){k(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function qt(n){return Array.isArray(n)?q(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Yt(n){return Array.isArray(n)?Y(n):n||null}(this._rawAsyncValidators)}}class M extends I{constructor(t,e,r){super(J(e),Q(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Le(this,!0,t),Object.keys(t).forEach(r=>{Re(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}class je extends M{}const _=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>E}),E="always";function F(n,t,e=E){K(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function Wt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&qe(n,t)})}(n,t),function Zt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function zt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&qe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function $t(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function P(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),U(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function H(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function K(n,t){const e=Ge(n);null!==t.validator?n.setValidators(Se(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=xe(n);null!==t.asyncValidator?n.setAsyncValidators(Se(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();H(t._rawValidators,i),H(t._rawAsyncValidators,i)}function U(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Ge(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=xe(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return H(t._rawValidators,r),H(t._rawAsyncValidators,r),e}function qe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function We(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function ze(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const N=class extends I{constructor(t=null,e,r){super(J(e),Q(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),k(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=ze(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){We(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){We(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){ze(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let Xe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const re=new o.OlP("NgModelWithFormControlWarning"),dn={provide:u,useExisting:(0,o.Gpc)(()=>R)};let R=(()=>{class n extends u{constructor(e,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(U(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return F(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){P(e.control||null,e,!1),function Xt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function $e(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(P(r||null,e),(n=>n instanceof N)(i)&&(F(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function Ye(n,t){K(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function Jt(n,t){return U(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){K(this.form,this),this._oldForm&&U(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(l,10),o.Y36(p,10),o.Y36(_,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([dn]),o.qOj,o.TTD]}),n})();const fn={provide:g,useExisting:(0,o.Gpc)(()=>se)};let se=(()=>{class n extends g{set isDisabled(e){}constructor(e,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function te(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function Kt(n){return Object.getPrototypeOf(n.constructor)===m}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){this._added||this._setUpControl(),function ee(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function T(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(p,10),o.Y36(h,10),o.Y36(re,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([fn]),o.qOj,o.TTD]}),n})(),_t=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[tt]}),n})();class yt extends I{constructor(t,e,r){super(J(e),Q(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){Le(this,!1,t),t.forEach((r,i)=>{Re(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}}function vt(n){return!!n&&(void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn)}let wn=(()=>{class n{constructor(){this.useNonNullable=!1}get nonNullable(){const e=new n;return e.useNonNullable=!0,e}group(e,r=null){const i=this._reduceControls(e);let s={};return vt(r)?s=r:null!==r&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new M(i,s)}record(e,r=null){const i=this._reduceControls(e);return new je(i,r)}control(e,r,i){let s={};return this.useNonNullable?(vt(r)?s=r:(s.validators=r,s.asyncValidators=i),new N(e,{...s,nonNullable:!0})):new N(e,r,i)}array(e,r,i){const s=e.map(a=>this._createControl(a));return new yt(s,r,i)}_reduceControls(e){const r={};return Object.keys(e).forEach(i=>{r[i]=this._createControl(e[i])}),r}_createControl(e){return e instanceof N||e instanceof I?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Nn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:_,useValue:e.callSetDisabledState??E}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[_t]}),n})(),On=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:re,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:_,useValue:e.callSetDisabledState??E}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[_t]}),n})();function Sn(n,t){1&n&&(o.TgZ(0,"span",20),o._uU(1," Campo obligatorio "),o.qZA())}function Gn(n,t){1&n&&(o.TgZ(0,"span",20),o._uU(1," Campo obligatorio "),o.qZA())}const Ct=function(n){return{"is-invalid":n}};function xn(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"form",7)(1,"div",8)(2,"label",9),o._uU(3,"Usuario"),o.qZA(),o._UZ(4,"input",10),o.YNc(5,Sn,2,0,"span",11),o.TgZ(6,"div",12),o._uU(7," Ingrese su nombre de usuario "),o.qZA()(),o.TgZ(8,"div",8)(9,"label",13),o._uU(10,"Password"),o.qZA(),o._UZ(11,"input",14),o.YNc(12,Gn,2,0,"span",11),o.TgZ(13,"span",15)(14,"a",16),o._uU(15,"Olvide mi contrase\xf1a"),o.qZA()()(),o.TgZ(16,"div",17)(17,"button",18),o.NdJ("click",function(){o.CHM(e);const i=o.oxw();return o.KtG(i.onSubmit())}),o._uU(18," Ingresar "),o.qZA(),o._uU(19," \xa0 "),o.TgZ(20,"button",19),o.NdJ("click",function(){o.CHM(e);const i=o.oxw();return o.KtG(i.goBack())}),o._uU(21," Cancelar "),o.qZA()()()}if(2&n){const e=o.oxw();o.Q6J("formGroup",e.frLogin),o.xp6(4),o.Q6J("ngClass",o.VKq(5,Ct,(e.frLogin.controls.name.touched||e.submitted)&&e.frLogin.controls.name.errors)),o.xp6(1),o.Q6J("ngIf",(e.frLogin.controls.name.touched||e.submitted)&&(null==e.frLogin.controls.name.errors?null:e.frLogin.controls.name.errors.required)),o.xp6(6),o.Q6J("ngClass",o.VKq(7,Ct,(e.frLogin.controls.pass.touched||e.submitted)&&e.frLogin.controls.pass.errors)),o.xp6(1),o.Q6J("ngIf",(e.frLogin.controls.pass.touched||e.submitted)&&(null==e.frLogin.controls.pass.errors?null:e.frLogin.controls.pass.errors.required))}}const Bn=[{path:"",children:[{path:"login",component:(()=>{var n;class t{constructor(r,i){this.fb=r,this.location=i,this.submitted=!1}ngOnInit(){this.frLogin=this.fb.group({name:[null,ge.required],pass:[null,ge.required]})}onSubmit(){this.submitted=!0}goBack(){this.location.back()}}return(n=t).\u0275fac=function(r){return new(r||n)(o.Y36(wn),o.Y36(C.Ye))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:7,vars:1,consts:[[2,"height","70vh","width","100%","background-color","bisque"],[1,"col-10","col-sm-6","col-md-4","col-lg-3","col-xl-2","mx-auto","my-3"],[1,"position-absolute","top-50","start-50","translate-middle"],[1,"position-relative","border","rounded","p-4","shadow",2,"background-color","#ffffff"],[1,"position-absolute","top-0","end-0","m-1"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["name","formLog","class","text-dark",3,"formGroup",4,"ngIf"],["name","formLog",1,"text-dark",3,"formGroup"],[1,"mb-3"],["for","flUserName",1,"form-label"],["type","text","id","flUserName","aria-describedby","user","formControlName","name",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],["id","userName",1,"form-text"],["for","flUserPass",1,"form-label"],["type","password","id","flUserPass","formControlName","pass",1,"form-control",3,"ngClass"],[1,"d-flex","justify-content-end"],["routerLink","recuperar"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","btn-sm","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-danger"]],template:function(r,i){1&r&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"button",5),o.NdJ("click",function(){return i.goBack()}),o.qZA()(),o.YNc(6,xn,22,9,"form",6),o.qZA()()()()),2&r&&(o.xp6(6),o.Q6J("ngIf",i.frLogin))},dependencies:[C.mk,C.O5,Xe,O,Pe,He,R,se,j.rH]}),t})()}]}];let kn=(()=>{var n;class t{}return(n=t).\u0275fac=function(r){return new(r||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[j.Bz.forChild(Bn),j.Bz]}),t})(),In=(()=>{var n;class t{}return(n=t).\u0275fac=function(r){return new(r||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[C.ez,On,Nn,kn]}),t})()}}]);