import {
  ScrollingModule,
  ViewportRuler
} from "./chunk-OA3AL6YQ.js";
import {
  DataSource,
  _DisposeViewRepeaterStrategy,
  _RecycleViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY,
  isDataSource
} from "./chunk-4E4Q7JSH.js";
import {
  Directionality,
  MatCommonModule,
  Platform,
  _isNumberValue,
  coerceBooleanProperty
} from "./chunk-S53TFTOW.js";
import "./chunk-NDVXJ4OQ.js";
import "./chunk-7XPTLBEL.js";
import "./chunk-B3AE4HNY.js";
import {
  DOCUMENT
} from "./chunk-W6DKRSU4.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-LG5KWGQH.js";
import {
  BehaviorSubject,
  Subject,
  combineLatest,
  from,
  isObservable,
  map,
  merge,
  of,
  take,
  takeUntil
} from "./chunk-AFRS2OIU.js";
import "./chunk-HSNDBVJ3.js";

// node_modules/@angular/cdk/fesm2022/table.mjs
var _c0 = [[["caption"]], [["colgroup"], ["col"]]];
var _c1 = ["caption", "colgroup, col"];
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("text-align", ctx_r0.justify);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("text-align", ctx_r1.justify);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}
function mixinHasStickyInput(base) {
  return class extends base {
    /** Whether sticky positioning should be applied. */
    get sticky() {
      return this._sticky;
    }
    set sticky(v) {
      const prevValue = this._sticky;
      this._sticky = coerceBooleanProperty(v);
      this._hasStickyChanged = prevValue !== this._sticky;
    }
    /** Whether the sticky value has changed since this was last called. */
    hasStickyChanged() {
      const hasStickyChanged = this._hasStickyChanged;
      this._hasStickyChanged = false;
      return hasStickyChanged;
    }
    /** Resets the dirty check for cases where the sticky state has been used without checking. */
    resetStickyChanged() {
      this._hasStickyChanged = false;
    }
    constructor(...args) {
      super(...args);
      this._sticky = false;
      this._hasStickyChanged = false;
    }
  };
}
var CDK_TABLE = new InjectionToken("CDK_TABLE");
var TEXT_COLUMN_OPTIONS = new InjectionToken("text-column-options");
var _CdkCellDef = class _CdkCellDef {
  constructor(template) {
    this.template = template;
  }
};
_CdkCellDef.ɵfac = function CdkCellDef_Factory(t) {
  return new (t || _CdkCellDef)(ɵɵdirectiveInject(TemplateRef));
};
_CdkCellDef.ɵdir = ɵɵdefineDirective({
  type: _CdkCellDef,
  selectors: [["", "cdkCellDef", ""]]
});
var CdkCellDef = _CdkCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkCellDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CdkHeaderCellDef = class _CdkHeaderCellDef {
  constructor(template) {
    this.template = template;
  }
};
_CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) {
  return new (t || _CdkHeaderCellDef)(ɵɵdirectiveInject(TemplateRef));
};
_CdkHeaderCellDef.ɵdir = ɵɵdefineDirective({
  type: _CdkHeaderCellDef,
  selectors: [["", "cdkHeaderCellDef", ""]]
});
var CdkHeaderCellDef = _CdkHeaderCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderCellDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CdkFooterCellDef = class _CdkFooterCellDef {
  constructor(template) {
    this.template = template;
  }
};
_CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) {
  return new (t || _CdkFooterCellDef)(ɵɵdirectiveInject(TemplateRef));
};
_CdkFooterCellDef.ɵdir = ɵɵdefineDirective({
  type: _CdkFooterCellDef,
  selectors: [["", "cdkFooterCellDef", ""]]
});
var CdkFooterCellDef = _CdkFooterCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterCellDef]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var CdkColumnDefBase = class {
};
var _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
var _CdkColumnDef = class _CdkColumnDef extends _CdkColumnDefBase {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Whether this column should be sticky positioned on the end of the row. Should make sure
   * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
   * has been changed.
   */
  get stickyEnd() {
    return this._stickyEnd;
  }
  set stickyEnd(value) {
    if (value !== this._stickyEnd) {
      this._stickyEnd = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(_table) {
    super();
    this._table = _table;
    this._stickyEnd = false;
  }
  /**
   * Overridable method that sets the css classes that will be added to every cell in this
   * column.
   * In the future, columnCssClassName will change from type string[] to string and this
   * will set a single string value.
   * @docs-private
   */
  _updateColumnCssClassName() {
    this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setNameInput(value) {
    if (value) {
      this._name = value;
      this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
      this._updateColumnCssClassName();
    }
  }
};
_CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) {
  return new (t || _CdkColumnDef)(ɵɵdirectiveInject(CDK_TABLE, 8));
};
_CdkColumnDef.ɵdir = ɵɵdefineDirective({
  type: _CdkColumnDef,
  selectors: [["", "cdkColumnDef", ""]],
  contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CdkCellDef, 5);
      ɵɵcontentQuery(dirIndex, CdkHeaderCellDef, 5);
      ɵɵcontentQuery(dirIndex, CdkFooterCellDef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cell = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerCell = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerCell = _t.first);
    }
  },
  inputs: {
    sticky: "sticky",
    name: ["cdkColumnDef", "name"],
    stickyEnd: ["stickyEnd", "stickyEnd", booleanAttribute]
  },
  features: [ɵɵProvidersFeature([{
    provide: "MAT_SORT_HEADER_COLUMN_DEF",
    useExisting: _CdkColumnDef
  }]), ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var CdkColumnDef = _CdkColumnDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkColumnDef, [{
    type: Directive,
    args: [{
      selector: "[cdkColumnDef]",
      inputs: ["sticky"],
      providers: [{
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: CdkColumnDef
      }]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    name: [{
      type: Input,
      args: ["cdkColumnDef"]
    }],
    stickyEnd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cell: [{
      type: ContentChild,
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: ContentChild,
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: ContentChild,
      args: [CdkFooterCellDef]
    }]
  });
})();
var BaseCdkCell = class {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
};
var _CdkHeaderCell = class _CdkHeaderCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
  }
};
_CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) {
  return new (t || _CdkHeaderCell)(ɵɵdirectiveInject(CdkColumnDef), ɵɵdirectiveInject(ElementRef));
};
_CdkHeaderCell.ɵdir = ɵɵdefineDirective({
  type: _CdkHeaderCell,
  selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
  features: [ɵɵInheritDefinitionFeature]
});
var CdkHeaderCell = _CdkHeaderCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCell, [{
    type: Directive,
    args: [{
      selector: "cdk-header-cell, th[cdk-header-cell]",
      host: {
        "class": "cdk-header-cell",
        "role": "columnheader"
      }
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _CdkFooterCell = class _CdkFooterCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
    if (columnDef._table?._elementRef.nativeElement.nodeType === 1) {
      const tableRole = columnDef._table._elementRef.nativeElement.getAttribute("role");
      const role = tableRole === "grid" || tableRole === "treegrid" ? "gridcell" : "cell";
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
};
_CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) {
  return new (t || _CdkFooterCell)(ɵɵdirectiveInject(CdkColumnDef), ɵɵdirectiveInject(ElementRef));
};
_CdkFooterCell.ɵdir = ɵɵdefineDirective({
  type: _CdkFooterCell,
  selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
  hostAttrs: [1, "cdk-footer-cell"],
  features: [ɵɵInheritDefinitionFeature]
});
var CdkFooterCell = _CdkFooterCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCell, [{
    type: Directive,
    args: [{
      selector: "cdk-footer-cell, td[cdk-footer-cell]",
      host: {
        "class": "cdk-footer-cell"
      }
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _CdkCell = class _CdkCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
    if (columnDef._table?._elementRef.nativeElement.nodeType === 1) {
      const tableRole = columnDef._table._elementRef.nativeElement.getAttribute("role");
      const role = tableRole === "grid" || tableRole === "treegrid" ? "gridcell" : "cell";
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
};
_CdkCell.ɵfac = function CdkCell_Factory(t) {
  return new (t || _CdkCell)(ɵɵdirectiveInject(CdkColumnDef), ɵɵdirectiveInject(ElementRef));
};
_CdkCell.ɵdir = ɵɵdefineDirective({
  type: _CdkCell,
  selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
  hostAttrs: [1, "cdk-cell"],
  features: [ɵɵInheritDefinitionFeature]
});
var CdkCell = _CdkCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCell, [{
    type: Directive,
    args: [{
      selector: "cdk-cell, td[cdk-cell]",
      host: {
        "class": "cdk-cell"
      }
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _Schedule = class {
  constructor() {
    this.tasks = [];
    this.endTasks = [];
  }
};
var _COALESCED_STYLE_SCHEDULER = new InjectionToken("_COALESCED_STYLE_SCHEDULER");
var __CoalescedStyleScheduler = class __CoalescedStyleScheduler {
  constructor(_ngZone) {
    this._ngZone = _ngZone;
    this._currentSchedule = null;
    this._destroyed = new Subject();
  }
  /**
   * Schedules the specified task to run at the end of the current VM turn.
   */
  schedule(task) {
    this._createScheduleIfNeeded();
    this._currentSchedule.tasks.push(task);
  }
  /**
   * Schedules the specified task to run after other scheduled tasks at the end of the current
   * VM turn.
   */
  scheduleEnd(task) {
    this._createScheduleIfNeeded();
    this._currentSchedule.endTasks.push(task);
  }
  /** Prevent any further tasks from running. */
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  _createScheduleIfNeeded() {
    if (this._currentSchedule) {
      return;
    }
    this._currentSchedule = new _Schedule();
    this._getScheduleObservable().pipe(takeUntil(this._destroyed)).subscribe(() => {
      while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
        const schedule = this._currentSchedule;
        this._currentSchedule = new _Schedule();
        for (const task of schedule.tasks) {
          task();
        }
        for (const task of schedule.endTasks) {
          task();
        }
      }
      this._currentSchedule = null;
    });
  }
  _getScheduleObservable() {
    return this._ngZone.isStable ? from(Promise.resolve(void 0)) : this._ngZone.onStable.pipe(take(1));
  }
};
__CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) {
  return new (t || __CoalescedStyleScheduler)(ɵɵinject(NgZone));
};
__CoalescedStyleScheduler.ɵprov = ɵɵdefineInjectable({
  token: __CoalescedStyleScheduler,
  factory: __CoalescedStyleScheduler.ɵfac
});
var _CoalescedStyleScheduler = __CoalescedStyleScheduler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CoalescedStyleScheduler, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
var CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var _BaseRowDef = class _BaseRowDef {
  constructor(template, _differs) {
    this.template = template;
    this._differs = _differs;
  }
  ngOnChanges(changes) {
    if (!this._columnsDiffer) {
      const columns = changes["columns"] && changes["columns"].currentValue || [];
      this._columnsDiffer = this._differs.find(columns).create();
      this._columnsDiffer.diff(columns);
    }
  }
  /**
   * Returns the difference between the current columns and the columns from the last diff, or null
   * if there is no difference.
   */
  getColumnsDiff() {
    return this._columnsDiffer.diff(this.columns);
  }
  /** Gets this row def's relevant cell template from the provided column def. */
  extractCellTemplate(column) {
    if (this instanceof CdkHeaderRowDef) {
      return column.headerCell.template;
    }
    if (this instanceof CdkFooterRowDef) {
      return column.footerCell.template;
    } else {
      return column.cell.template;
    }
  }
};
_BaseRowDef.ɵfac = function BaseRowDef_Factory(t) {
  return new (t || _BaseRowDef)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers));
};
_BaseRowDef.ɵdir = ɵɵdefineDirective({
  type: _BaseRowDef,
  features: [ɵɵNgOnChangesFeature]
});
var BaseRowDef = _BaseRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseRowDef, [{
    type: Directive
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }], null);
})();
var CdkHeaderRowDefBase = class extends BaseRowDef {
};
var _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
var _CdkHeaderRowDef = class _CdkHeaderRowDef extends _CdkHeaderRowDefBase {
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
};
_CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) {
  return new (t || _CdkHeaderRowDef)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(CDK_TABLE, 8));
};
_CdkHeaderRowDef.ɵdir = ɵɵdefineDirective({
  type: _CdkHeaderRowDef,
  selectors: [["", "cdkHeaderRowDef", ""]],
  inputs: {
    columns: ["cdkHeaderRowDef", "columns"],
    sticky: ["cdkHeaderRowDefSticky", "sticky"]
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var CdkHeaderRowDef = _CdkHeaderRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderRowDef]",
      inputs: ["columns: cdkHeaderRowDef", "sticky: cdkHeaderRowDefSticky"]
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], null);
})();
var CdkFooterRowDefBase = class extends BaseRowDef {
};
var _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
var _CdkFooterRowDef = class _CdkFooterRowDef extends _CdkFooterRowDefBase {
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
};
_CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) {
  return new (t || _CdkFooterRowDef)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(CDK_TABLE, 8));
};
_CdkFooterRowDef.ɵdir = ɵɵdefineDirective({
  type: _CdkFooterRowDef,
  selectors: [["", "cdkFooterRowDef", ""]],
  inputs: {
    columns: ["cdkFooterRowDef", "columns"],
    sticky: ["cdkFooterRowDefSticky", "sticky"]
  },
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var CdkFooterRowDef = _CdkFooterRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterRowDef]",
      inputs: ["columns: cdkFooterRowDef", "sticky: cdkFooterRowDefSticky"]
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], null);
})();
var _CdkRowDef = class _CdkRowDef extends BaseRowDef {
  // TODO(andrewseguin): Add an input for providing a switch function to determine
  //   if this template should be used.
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
  }
};
_CdkRowDef.ɵfac = function CdkRowDef_Factory(t) {
  return new (t || _CdkRowDef)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(CDK_TABLE, 8));
};
_CdkRowDef.ɵdir = ɵɵdefineDirective({
  type: _CdkRowDef,
  selectors: [["", "cdkRowDef", ""]],
  inputs: {
    columns: ["cdkRowDefColumns", "columns"],
    when: ["cdkRowDefWhen", "when"]
  },
  features: [ɵɵInheritDefinitionFeature]
});
var CdkRowDef = _CdkRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkRowDef]",
      inputs: ["columns: cdkRowDefColumns", "when: cdkRowDefWhen"]
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], null);
})();
var _CdkCellOutlet = class _CdkCellOutlet {
  constructor(_viewContainer) {
    this._viewContainer = _viewContainer;
    _CdkCellOutlet.mostRecentCellOutlet = this;
  }
  ngOnDestroy() {
    if (_CdkCellOutlet.mostRecentCellOutlet === this) {
      _CdkCellOutlet.mostRecentCellOutlet = null;
    }
  }
};
_CdkCellOutlet.mostRecentCellOutlet = null;
_CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) {
  return new (t || _CdkCellOutlet)(ɵɵdirectiveInject(ViewContainerRef));
};
_CdkCellOutlet.ɵdir = ɵɵdefineDirective({
  type: _CdkCellOutlet,
  selectors: [["", "cdkCellOutlet", ""]]
});
var CdkCellOutlet = _CdkCellOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkCellOutlet]"
    }]
  }], () => [{
    type: ViewContainerRef
  }], null);
})();
var _CdkHeaderRow = class _CdkHeaderRow {
};
_CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) {
  return new (t || _CdkHeaderRow)();
};
_CdkHeaderRow.ɵcmp = ɵɵdefineComponent({
  type: _CdkHeaderRow,
  selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-header-row"],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var CdkHeaderRow = _CdkHeaderRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRow, [{
    type: Component,
    args: [{
      selector: "cdk-header-row, tr[cdk-header-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, null);
})();
var _CdkFooterRow = class _CdkFooterRow {
};
_CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) {
  return new (t || _CdkFooterRow)();
};
_CdkFooterRow.ɵcmp = ɵɵdefineComponent({
  type: _CdkFooterRow,
  selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-footer-row"],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var CdkFooterRow = _CdkFooterRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRow, [{
    type: Component,
    args: [{
      selector: "cdk-footer-row, tr[cdk-footer-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-footer-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, null);
})();
var _CdkRow = class _CdkRow {
};
_CdkRow.ɵfac = function CdkRow_Factory(t) {
  return new (t || _CdkRow)();
};
_CdkRow.ɵcmp = ɵɵdefineComponent({
  type: _CdkRow,
  selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
  hostAttrs: ["role", "row", 1, "cdk-row"],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function CdkRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var CdkRow = _CdkRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRow, [{
    type: Component,
    args: [{
      selector: "cdk-row, tr[cdk-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, null);
})();
var _CdkNoDataRow = class _CdkNoDataRow {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._contentClassName = "cdk-no-data-row";
  }
};
_CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) {
  return new (t || _CdkNoDataRow)(ɵɵdirectiveInject(TemplateRef));
};
_CdkNoDataRow.ɵdir = ɵɵdefineDirective({
  type: _CdkNoDataRow,
  selectors: [["ng-template", "cdkNoDataRow", ""]]
});
var CdkNoDataRow = _CdkNoDataRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkNoDataRow]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
var StickyStyler = class {
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true, _positionListener) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this.direction = direction;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this._positionListener = _positionListener;
    this._cachedCellWidths = [];
    this._borderCellCss = {
      "top": `${_stickCellCss}-border-elem-top`,
      "bottom": `${_stickCellCss}-border-elem-bottom`,
      "left": `${_stickCellCss}-border-elem-left`,
      "right": `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */
  clearStickyPositioning(rows, stickyDirections) {
    const elementsToClear = [];
    for (const row of rows) {
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row);
      for (let i = 0; i < row.children.length; i++) {
        elementsToClear.push(row.children[i]);
      }
    }
    this._coalescedStyleScheduler.schedule(() => {
      for (const element of elementsToClear) {
        this._removeStickyStyle(element, stickyDirections);
      }
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   */
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true) {
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some((state) => state) || stickyEndStates.some((state) => state))) {
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: []
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: []
        });
      }
      return;
    }
    const firstRow = rows[0];
    const numCells = firstRow.children.length;
    const cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
    const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
    const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
    const lastStickyStart = stickyStartStates.lastIndexOf(true);
    const firstStickyEnd = stickyEndStates.indexOf(true);
    this._coalescedStyleScheduler.schedule(() => {
      const isRtl = this.direction === "rtl";
      const start = isRtl ? "right" : "left";
      const end = isRtl ? "left" : "right";
      for (const row of rows) {
        for (let i = 0; i < numCells; i++) {
          const cell = row.children[i];
          if (stickyStartStates[i]) {
            this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
          }
          if (stickyEndStates[i]) {
            this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
          }
        }
      }
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
        });
      }
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */
  stickRows(rowsToStick, stickyStates, position) {
    if (!this._isBrowser) {
      return;
    }
    const rows = position === "bottom" ? rowsToStick.slice().reverse() : rowsToStick;
    const states = position === "bottom" ? stickyStates.slice().reverse() : stickyStates;
    const stickyOffsets = [];
    const stickyCellHeights = [];
    const elementsToStick = [];
    for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
      if (!states[rowIndex]) {
        continue;
      }
      stickyOffsets[rowIndex] = stickyOffset;
      const row = rows[rowIndex];
      elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
      const height = row.getBoundingClientRect().height;
      stickyOffset += height;
      stickyCellHeights[rowIndex] = height;
    }
    const borderedRowIndex = states.lastIndexOf(true);
    this._coalescedStyleScheduler.schedule(() => {
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }
        const offset = stickyOffsets[rowIndex];
        const isBorderedRowIndex = rowIndex === borderedRowIndex;
        for (const element of elementsToStick[rowIndex]) {
          this._addStickyStyle(element, position, offset, isBorderedRowIndex);
        }
      }
      if (position === "top") {
        this._positionListener?.stickyHeaderRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      } else {
        this._positionListener?.stickyFooterRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      }
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    const tfoot = tableElement.querySelector("tfoot");
    this._coalescedStyleScheduler.schedule(() => {
      if (stickyStates.some((state) => !state)) {
        this._removeStickyStyle(tfoot, ["bottom"]);
      } else {
        this._addStickyStyle(tfoot, "bottom", 0, false);
      }
    });
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */
  _removeStickyStyle(element, stickyDirections) {
    for (const dir of stickyDirections) {
      element.style[dir] = "";
      element.classList.remove(this._borderCellCss[dir]);
    }
    const hasDirection = STICKY_DIRECTIONS.some((dir) => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      element.style.zIndex = "";
      if (this._needsPositionStickyOnElement) {
        element.style.position = "";
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += "position: -webkit-sticky; position: sticky; ";
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : "";
  }
  /** Gets the widths for each cell in the provided row. */
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i = 0; i < firstRowCells.length; i++) {
      let cell = firstRowCells[i];
      cellWidths.push(cell.getBoundingClientRect().width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
};
function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for theprovided row data: ${JSON.stringify(data)}`);
}
function getTableMissingRowDefsError() {
  return Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");
}
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
var STICKY_POSITIONING_LISTENER = new InjectionToken("CDK_SPL");
var _CdkRecycleRows = class _CdkRecycleRows {
};
_CdkRecycleRows.ɵfac = function CdkRecycleRows_Factory(t) {
  return new (t || _CdkRecycleRows)();
};
_CdkRecycleRows.ɵdir = ɵɵdefineDirective({
  type: _CdkRecycleRows,
  selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
  features: [ɵɵProvidersFeature([{
    provide: _VIEW_REPEATER_STRATEGY,
    useClass: _RecycleViewRepeaterStrategy
  }])]
});
var CdkRecycleRows = _CdkRecycleRows;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRecycleRows, [{
    type: Directive,
    args: [{
      selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], null, null);
})();
var _DataRowOutlet = class _DataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  }
};
_DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) {
  return new (t || _DataRowOutlet)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef));
};
_DataRowOutlet.ɵdir = ɵɵdefineDirective({
  type: _DataRowOutlet,
  selectors: [["", "rowOutlet", ""]]
});
var DataRowOutlet = _DataRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[rowOutlet]"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var _HeaderRowOutlet = class _HeaderRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  }
};
_HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) {
  return new (t || _HeaderRowOutlet)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef));
};
_HeaderRowOutlet.ɵdir = ɵɵdefineDirective({
  type: _HeaderRowOutlet,
  selectors: [["", "headerRowOutlet", ""]]
});
var HeaderRowOutlet = _HeaderRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[headerRowOutlet]"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var _FooterRowOutlet = class _FooterRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  }
};
_FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) {
  return new (t || _FooterRowOutlet)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef));
};
_FooterRowOutlet.ɵdir = ɵɵdefineDirective({
  type: _FooterRowOutlet,
  selectors: [["", "footerRowOutlet", ""]]
});
var FooterRowOutlet = _FooterRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[footerRowOutlet]"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var _NoDataRowOutlet = class _NoDataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
  }
};
_NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) {
  return new (t || _NoDataRowOutlet)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef));
};
_NoDataRowOutlet.ɵdir = ɵɵdefineDirective({
  type: _NoDataRowOutlet,
  selectors: [["", "noDataRowOutlet", ""]]
});
var NoDataRowOutlet = _NoDataRowOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[noDataRowOutlet]"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var CDK_TABLE_TEMPLATE = (
  // Note that according to MDN, the `caption` element has to be projected as the **first**
  // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
  `
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`
);
var _CdkTable = class _CdkTable {
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
   * relative to the function to know if a row should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  get trackBy() {
    return this._trackByFn;
  }
  set trackBy(fn) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._trackByFn = fn;
  }
  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *   - Simple data array (each object represents one table row)
   *   - Stream that emits a data array each time the array changes
   *   - `DataSource` object that implements the connect/disconnect interface.
   *
   * If a data array is provided, the table must be notified when the array's objects are
   * added, removed, or moved. This can be done by calling the `renderRows()` function which will
   * render the diff since the last table render. If the data array reference is changed, the table
   * will automatically trigger an update to the rows.
   *
   * When providing an Observable stream, the table will trigger an update automatically when the
   * stream emits a new array of data.
   *
   * Finally, when providing a `DataSource` object, the table will use the Observable stream
   * provided by the connect function and trigger updates when that stream emits new data array
   * values. During the table's ngOnDestroy or when the data source is removed from the table, the
   * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
   * subscriptions registered during the connect process).
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  /**
   * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
   * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
   * dataobject will render the first row that evaluates its when predicate to true, in the order
   * defined in the table, or otherwise the default row which does not have a when predicate.
   */
  get multiTemplateDataRows() {
    return this._multiTemplateDataRows;
  }
  set multiTemplateDataRows(value) {
    this._multiTemplateDataRows = value;
    if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
      this._forceRenderDataRows();
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
   * and optimize rendering sticky styles for native tables. No-op for flex tables.
   */
  get fixedLayout() {
    return this._fixedLayout;
  }
  set fixedLayout(value) {
    this._fixedLayout = value;
    this._forceRecalculateCellWidths = true;
    this._stickyColumnStylesNeedReset = true;
  }
  constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener, _ngZone) {
    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._platform = _platform;
    this._viewRepeater = _viewRepeater;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._viewportRuler = _viewportRuler;
    this._stickyPositioningListener = _stickyPositioningListener;
    this._ngZone = _ngZone;
    this._onDestroy = new Subject();
    this._columnDefsByName = /* @__PURE__ */ new Map();
    this._customColumnDefs = /* @__PURE__ */ new Set();
    this._customRowDefs = /* @__PURE__ */ new Set();
    this._customHeaderRowDefs = /* @__PURE__ */ new Set();
    this._customFooterRowDefs = /* @__PURE__ */ new Set();
    this._headerRowDefChanged = true;
    this._footerRowDefChanged = true;
    this._stickyColumnStylesNeedReset = true;
    this._forceRecalculateCellWidths = true;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    this.stickyCssClass = "cdk-table-sticky";
    this.needsPositionStickyOnElement = true;
    this._isShowingNoDataRow = false;
    this._multiTemplateDataRows = false;
    this._fixedLayout = false;
    this.contentChanged = new EventEmitter();
    this.viewChange = new BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
    if (!role) {
      this._elementRef.nativeElement.setAttribute("role", "table");
    }
    this._document = _document;
    this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === "TABLE";
  }
  ngOnInit() {
    this._setupStickyStyler();
    if (this._isNativeHtmlTable) {
      this._applyNativeTableSections();
    }
    this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
      return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
    });
    this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this._forceRecalculateCellWidths = true;
    });
  }
  ngAfterContentChecked() {
    this._cacheRowDefs();
    this._cacheColumnDefs();
    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingRowDefsError();
    }
    const columnsChanged = this._renderUpdatedColumns();
    const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
    this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
    this._forceRecalculateCellWidths = rowDefsChanged;
    if (this._headerRowDefChanged) {
      this._forceRenderHeaderRows();
      this._headerRowDefChanged = false;
    }
    if (this._footerRowDefChanged) {
      this._forceRenderFooterRows();
      this._footerRowDefChanged = false;
    }
    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    } else if (this._stickyColumnStylesNeedReset) {
      this.updateStickyColumnStyles();
    }
    this._checkStickyStates();
  }
  ngOnDestroy() {
    [this._rowOutlet.viewContainer, this._headerRowOutlet.viewContainer, this._footerRowOutlet.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach((def) => {
      def.clear();
    });
    this._headerRowDefs = [];
    this._footerRowDefs = [];
    this._defaultRowDef = null;
    this._onDestroy.next();
    this._onDestroy.complete();
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }
  /**
   * Renders rows based on the table's latest set of data, which was either provided directly as an
   * input or retrieved through an Observable stream (directly or from a DataSource).
   * Checks for differences in the data since the last diff to perform only the necessary
   * changes (add/remove/move rows).
   *
   * If the table's data source is a DataSource or Observable, this will be invoked automatically
   * each time the provided Observable stream emits a new data array. Otherwise if your data is
   * an array, this function will need to be called to render any changes.
   */
  renderRows() {
    this._renderRows = this._getAllRenderRows();
    const changes = this._dataDiffer.diff(this._renderRows);
    if (!changes) {
      this._updateNoDataRow();
      this.contentChanged.next();
      return;
    }
    const viewContainer = this._rowOutlet.viewContainer;
    this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
      if (change.operation === 1 && change.context) {
        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
      }
    });
    this._updateRowIndexContext();
    changes.forEachIdentityChange((record) => {
      const rowView = viewContainer.get(record.currentIndex);
      rowView.context.$implicit = record.item.data;
    });
    this._updateNoDataRow();
    if (this._ngZone && NgZone.isInAngularZone()) {
      this._ngZone.onStable.pipe(take(1), takeUntil(this._onDestroy)).subscribe(() => {
        this.updateStickyColumnStyles();
      });
    } else {
      this.updateStickyColumnStyles();
    }
    this.contentChanged.next();
  }
  /** Adds a column definition that was not included as part of the content children. */
  addColumnDef(columnDef) {
    this._customColumnDefs.add(columnDef);
  }
  /** Removes a column definition that was not included as part of the content children. */
  removeColumnDef(columnDef) {
    this._customColumnDefs.delete(columnDef);
  }
  /** Adds a row definition that was not included as part of the content children. */
  addRowDef(rowDef) {
    this._customRowDefs.add(rowDef);
  }
  /** Removes a row definition that was not included as part of the content children. */
  removeRowDef(rowDef) {
    this._customRowDefs.delete(rowDef);
  }
  /** Adds a header row definition that was not included as part of the content children. */
  addHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.add(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Removes a header row definition that was not included as part of the content children. */
  removeHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.delete(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Adds a footer row definition that was not included as part of the content children. */
  addFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.add(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Removes a footer row definition that was not included as part of the content children. */
  removeFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.delete(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Sets a no data row definition that was not included as a part of the content children. */
  setNoDataRow(noDataRow) {
    this._customNoDataRow = noDataRow;
  }
  /**
   * Updates the header sticky styles. First resets all applied styles with respect to the cells
   * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
   * automatically called when the header row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyHeaderRowStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    const tableElement = this._elementRef.nativeElement;
    const thead = tableElement.querySelector("thead");
    if (thead) {
      thead.style.display = headerRows.length ? "" : "none";
    }
    const stickyStates = this._headerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
    this._stickyStyler.stickRows(headerRows, stickyStates, "top");
    this._headerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the footer sticky styles. First resets all applied styles with respect to the cells
   * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
   * automatically called when the footer row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyFooterRowStyles() {
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    const tableElement = this._elementRef.nativeElement;
    const tfoot = tableElement.querySelector("tfoot");
    if (tfoot) {
      tfoot.style.display = footerRows.length ? "" : "none";
    }
    const stickyStates = this._footerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
    this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
    this._footerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the column sticky styles. First resets all applied styles with respect to the cells
   * sticking to the left and right. Then sticky styles are added for the left and right according
   * to the column definitions for each cell in each row. This is automatically called when
   * the data source provides a new set of data or when a column definition changes its sticky
   * input. May be called manually for cases where the cell content changes outside of these events.
   */
  updateStickyColumnStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    const dataRows = this._getRenderedRows(this._rowOutlet);
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
      this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ["left", "right"]);
      this._stickyColumnStylesNeedReset = false;
    }
    headerRows.forEach((headerRow, i) => {
      this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
    });
    this._rowDefs.forEach((rowDef) => {
      const rows = [];
      for (let i = 0; i < dataRows.length; i++) {
        if (this._renderRows[i].rowDef === rowDef) {
          rows.push(dataRows[i]);
        }
      }
      this._addStickyColumnStyles(rows, rowDef);
    });
    footerRows.forEach((footerRow, i) => {
      this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
    });
    Array.from(this._columnDefsByName.values()).forEach((def) => def.resetStickyChanged());
  }
  /**
   * Get the list of RenderRow objects to render according to the current list of data and defined
   * row definitions. If the previous list already contained a particular pair, it should be reused
   * so that the differ equates their references.
   */
  _getAllRenderRows() {
    const renderRows = [];
    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < this._data.length; i++) {
      let data = this._data[i];
      const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, /* @__PURE__ */ new WeakMap());
      }
      for (let j = 0; j < renderRowsForData.length; j++) {
        let renderRow = renderRowsForData[j];
        const cache = this._cachedRenderRowsMap.get(renderRow.data);
        if (cache.has(renderRow.rowDef)) {
          cache.get(renderRow.rowDef).push(renderRow);
        } else {
          cache.set(renderRow.rowDef, [renderRow]);
        }
        renderRows.push(renderRow);
      }
    }
    return renderRows;
  }
  /**
   * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
   * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
   * `(T, CdkRowDef)` pair.
   */
  _getRenderRowsForData(data, dataIndex, cache) {
    const rowDefs = this._getRowDefs(data, dataIndex);
    return rowDefs.map((rowDef) => {
      const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift();
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return {
          data,
          rowDef,
          dataIndex
        };
      }
    });
  }
  /** Update the map containing the content's column definitions. */
  _cacheColumnDefs() {
    this._columnDefsByName.clear();
    const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
    columnDefs.forEach((columnDef) => {
      if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableDuplicateColumnNameError(columnDef.name);
      }
      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }
  /** Update the list of all available row definitions that can be used. */
  _cacheRowDefs() {
    this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
    this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
    this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
    const defaultRowDefs = this._rowDefs.filter((def) => !def.when);
    if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMultipleDefaultRowDefsError();
    }
    this._defaultRowDef = defaultRowDefs[0];
  }
  /**
   * Check if the header, data, or footer rows have changed what columns they want to display or
   * whether the sticky states have changed for the header or footer. If there is a diff, then
   * re-render that section.
   */
  _renderUpdatedColumns() {
    const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
    const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
    if (dataColumnsChanged) {
      this._forceRenderDataRows();
    }
    const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
    if (headerColumnsChanged) {
      this._forceRenderHeaderRows();
    }
    const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
    if (footerColumnsChanged) {
      this._forceRenderFooterRows();
    }
    return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the row outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    this._data = [];
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
    if (this._renderChangeSubscription) {
      this._renderChangeSubscription.unsubscribe();
      this._renderChangeSubscription = null;
    }
    if (!dataSource) {
      if (this._dataDiffer) {
        this._dataDiffer.diff([]);
      }
      this._rowOutlet.viewContainer.clear();
    }
    this._dataSource = dataSource;
  }
  /** Set up a subscription for the data provided by the data source. */
  _observeRenderChanges() {
    if (!this.dataSource) {
      return;
    }
    let dataStream;
    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if (isObservable(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = of(this.dataSource);
    }
    if (dataStream === void 0 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableUnknownDataSourceError();
    }
    this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe((data) => {
      this._data = data || [];
      this.renderRows();
    });
  }
  /**
   * Clears any existing content in the header row outlet and creates a new embedded view
   * in the outlet using the header row definition.
   */
  _forceRenderHeaderRows() {
    if (this._headerRowOutlet.viewContainer.length > 0) {
      this._headerRowOutlet.viewContainer.clear();
    }
    this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
    this.updateStickyHeaderRowStyles();
  }
  /**
   * Clears any existing content in the footer row outlet and creates a new embedded view
   * in the outlet using the footer row definition.
   */
  _forceRenderFooterRows() {
    if (this._footerRowOutlet.viewContainer.length > 0) {
      this._footerRowOutlet.viewContainer.clear();
    }
    this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
    this.updateStickyFooterRowStyles();
  }
  /** Adds the sticky column styles for the rows according to the columns' stick states. */
  _addStickyColumnStyles(rows, rowDef) {
    const columnDefs = Array.from(rowDef.columns || []).map((columnName) => {
      const columnDef = this._columnDefsByName.get(columnName);
      if (!columnDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnName);
      }
      return columnDef;
    });
    const stickyStartStates = columnDefs.map((columnDef) => columnDef.sticky);
    const stickyEndStates = columnDefs.map((columnDef) => columnDef.stickyEnd);
    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
  }
  /** Gets the list of rows that have been rendered in the row outlet. */
  _getRenderedRows(rowOutlet) {
    const renderedRows = [];
    for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
      const viewRef = rowOutlet.viewContainer.get(i);
      renderedRows.push(viewRef.rootNodes[0]);
    }
    return renderedRows;
  }
  /**
   * Get the matching row definitions that should be used for this row data. If there is only
   * one row definition, it is returned. Otherwise, find the row definitions that has a when
   * predicate that returns true with the data. If none return true, return the default row
   * definition.
   */
  _getRowDefs(data, dataIndex) {
    if (this._rowDefs.length == 1) {
      return [this._rowDefs[0]];
    }
    let rowDefs = [];
    if (this.multiTemplateDataRows) {
      rowDefs = this._rowDefs.filter((def) => !def.when || def.when(dataIndex, data));
    } else {
      let rowDef = this._rowDefs.find((def) => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
      if (rowDef) {
        rowDefs.push(rowDef);
      }
    }
    if (!rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingMatchingRowDefError(data);
    }
    return rowDefs;
  }
  _getEmbeddedViewArgs(renderRow, index) {
    const rowDef = renderRow.rowDef;
    const context = {
      $implicit: renderRow.data
    };
    return {
      templateRef: rowDef.template,
      context,
      index
    };
  }
  /**
   * Creates a new row template in the outlet and fills it with the set of cell templates.
   * Optionally takes a context to provide to the row and cells, as well as an optional index
   * of where to place the new row template in the outlet.
   */
  _renderRow(outlet, rowDef, index, context = {}) {
    const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
    this._renderCellTemplateForItem(rowDef, context);
    return view;
  }
  _renderCellTemplateForItem(rowDef, context) {
    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (CdkCellOutlet.mostRecentCellOutlet) {
        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */
  _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      if (this.multiTemplateDataRows) {
        context.dataIndex = this._renderRows[renderIndex].dataIndex;
        context.renderIndex = renderIndex;
      } else {
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }
  /** Gets the column definitions for the provided row def. */
  _getCellTemplates(rowDef) {
    if (!rowDef || !rowDef.columns) {
      return [];
    }
    return Array.from(rowDef.columns, (columnId) => {
      const column = this._columnDefsByName.get(columnId);
      if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnId);
      }
      return rowDef.extractCellTemplate(column);
    });
  }
  /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
  _applyNativeTableSections() {
    const documentFragment = this._document.createDocumentFragment();
    const sections = [{
      tag: "thead",
      outlets: [this._headerRowOutlet]
    }, {
      tag: "tbody",
      outlets: [this._rowOutlet, this._noDataRowOutlet]
    }, {
      tag: "tfoot",
      outlets: [this._footerRowOutlet]
    }];
    for (const section of sections) {
      const element = this._document.createElement(section.tag);
      element.setAttribute("role", "rowgroup");
      for (const outlet of section.outlets) {
        element.appendChild(outlet.elementRef.nativeElement);
      }
      documentFragment.appendChild(element);
    }
    this._elementRef.nativeElement.appendChild(documentFragment);
  }
  /**
   * Forces a re-render of the data rows. Should be called in cases where there has been an input
   * change that affects the evaluation of which rows should be rendered, e.g. toggling
   * `multiTemplateDataRows` or adding/removing row definitions.
   */
  _forceRenderDataRows() {
    this._dataDiffer.diff([]);
    this._rowOutlet.viewContainer.clear();
    this.renderRows();
  }
  /**
   * Checks if there has been a change in sticky states since last check and applies the correct
   * sticky styles. Since checking resets the "dirty" state, this should only be performed once
   * during a change detection and after the inputs are settled (after content check).
   */
  _checkStickyStates() {
    const stickyCheckReducer = (acc, d) => {
      return acc || d.hasStickyChanged();
    };
    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyHeaderRowStyles();
    }
    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyFooterRowStyles();
    }
    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
      this._stickyColumnStylesNeedReset = true;
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Creates the sticky styler that will be used for sticky rows and columns. Listens
   * for directionality changes and provides the latest direction to the styler. Re-applies column
   * stickiness when directionality changes.
   */
  _setupStickyStyler() {
    const direction = this._dir ? this._dir.value : "ltr";
    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
    (this._dir ? this._dir.change : of()).pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      this._stickyStyler.direction = value;
      this.updateStickyColumnStyles();
    });
  }
  /** Filters definitions that belong to this table from a QueryList. */
  _getOwnDefs(items) {
    return items.filter((item) => !item._table || item._table === this);
  }
  /** Creates or removes the no data row, depending on whether any data is being shown. */
  _updateNoDataRow() {
    const noDataRow = this._customNoDataRow || this._noDataRow;
    if (!noDataRow) {
      return;
    }
    const shouldShow = this._rowOutlet.viewContainer.length === 0;
    if (shouldShow === this._isShowingNoDataRow) {
      return;
    }
    const container = this._noDataRowOutlet.viewContainer;
    if (shouldShow) {
      const view = container.createEmbeddedView(noDataRow.templateRef);
      const rootNode = view.rootNodes[0];
      if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
        rootNode.setAttribute("role", "row");
        rootNode.classList.add(noDataRow._contentClassName);
      }
    } else {
      container.clear();
    }
    this._isShowingNoDataRow = shouldShow;
    this._changeDetectorRef.markForCheck();
  }
};
_CdkTable.ɵfac = function CdkTable_Factory(t) {
  return new (t || _CdkTable)(ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵinjectAttribute("role"), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(_VIEW_REPEATER_STRATEGY), ɵɵdirectiveInject(_COALESCED_STYLE_SCHEDULER), ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(STICKY_POSITIONING_LISTENER, 12), ɵɵdirectiveInject(NgZone, 8));
};
_CdkTable.ɵcmp = ɵɵdefineComponent({
  type: _CdkTable,
  selectors: [["cdk-table"], ["table", "cdk-table", ""]],
  contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CdkNoDataRow, 5);
      ɵɵcontentQuery(dirIndex, CdkColumnDef, 5);
      ɵɵcontentQuery(dirIndex, CdkRowDef, 5);
      ɵɵcontentQuery(dirIndex, CdkHeaderRowDef, 5);
      ɵɵcontentQuery(dirIndex, CdkFooterRowDef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._noDataRow = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentColumnDefs = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentRowDefs = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentHeaderRowDefs = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentFooterRowDefs = _t);
    }
  },
  viewQuery: function CdkTable_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(DataRowOutlet, 7);
      ɵɵviewQuery(HeaderRowOutlet, 7);
      ɵɵviewQuery(FooterRowOutlet, 7);
      ɵɵviewQuery(NoDataRowOutlet, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._rowOutlet = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._headerRowOutlet = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._footerRowOutlet = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._noDataRowOutlet = _t.first);
    }
  },
  hostAttrs: ["ngSkipHydration", "", 1, "cdk-table"],
  hostVars: 2,
  hostBindings: function CdkTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("cdk-table-fixed-layout", ctx.fixedLayout);
    }
  },
  inputs: {
    trackBy: "trackBy",
    dataSource: "dataSource",
    multiTemplateDataRows: ["multiTemplateDataRows", "multiTemplateDataRows", booleanAttribute],
    fixedLayout: ["fixedLayout", "fixedLayout", booleanAttribute]
  },
  outputs: {
    contentChanged: "contentChanged"
  },
  exportAs: ["cdkTable"],
  features: [ɵɵProvidersFeature([
    {
      provide: CDK_TABLE,
      useExisting: _CdkTable
    },
    {
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _DisposeViewRepeaterStrategy
    },
    {
      provide: _COALESCED_STYLE_SCHEDULER,
      useClass: _CoalescedStyleScheduler
    },
    // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }
  ]), ɵɵInputTransformsFeature],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 0,
  consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function CdkTable_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵprojection(0);
      ɵɵprojection(1, 1);
      ɵɵelementContainer(2, 0)(3, 1)(4, 2)(5, 3);
    }
  },
  dependencies: [DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, NoDataRowOutlet],
  styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
  encapsulation: 2
});
var CdkTable = _CdkTable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTable, [{
    type: Component,
    args: [{
      selector: "cdk-table, table[cdk-table]",
      exportAs: "cdkTable",
      template: CDK_TABLE_TEMPLATE,
      host: {
        "class": "cdk-table",
        "[class.cdk-table-fixed-layout]": "fixedLayout",
        "ngSkipHydration": ""
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [
        {
          provide: CDK_TABLE,
          useExisting: CdkTable
        },
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}"]
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: _CoalescedStyleScheduler,
    decorators: [{
      type: Inject,
      args: [_COALESCED_STYLE_SCHEDULER]
    }]
  }, {
    type: ViewportRuler
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [STICKY_POSITIONING_LISTENER]
    }]
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], {
    trackBy: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    multiTemplateDataRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixedLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentChanged: [{
      type: Output
    }],
    _rowOutlet: [{
      type: ViewChild,
      args: [DataRowOutlet, {
        static: true
      }]
    }],
    _headerRowOutlet: [{
      type: ViewChild,
      args: [HeaderRowOutlet, {
        static: true
      }]
    }],
    _footerRowOutlet: [{
      type: ViewChild,
      args: [FooterRowOutlet, {
        static: true
      }]
    }],
    _noDataRowOutlet: [{
      type: ViewChild,
      args: [NoDataRowOutlet, {
        static: true
      }]
    }],
    _contentColumnDefs: [{
      type: ContentChildren,
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: ContentChildren,
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: ContentChildren,
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: ContentChildren,
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: ContentChild,
      args: [CdkNoDataRow]
    }]
  });
})();
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
var _CdkTextColumn = class _CdkTextColumn {
  /** Column name that should be used to reference this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    this._syncColumnDefName();
  }
  constructor(_table, _options) {
    this._table = _table;
    this._options = _options;
    this.justify = "start";
    this._options = _options || {};
  }
  ngOnInit() {
    this._syncColumnDefName();
    if (this.headerText === void 0) {
      this.headerText = this._createDefaultHeaderText();
    }
    if (!this.dataAccessor) {
      this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
    }
    if (this._table) {
      this.columnDef.cell = this.cell;
      this.columnDef.headerCell = this.headerCell;
      this._table.addColumnDef(this.columnDef);
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTableTextColumnMissingParentTableError();
    }
  }
  ngOnDestroy() {
    if (this._table) {
      this._table.removeColumnDef(this.columnDef);
    }
  }
  /**
   * Creates a default header text. Use the options' header text transformation function if one
   * has been provided. Otherwise simply capitalize the column name.
   */
  _createDefaultHeaderText() {
    const name = this.name;
    if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableTextColumnMissingNameError();
    }
    if (this._options && this._options.defaultHeaderTextTransform) {
      return this._options.defaultHeaderTextTransform(name);
    }
    return name[0].toUpperCase() + name.slice(1);
  }
  /** Synchronizes the column definition name with the text column name. */
  _syncColumnDefName() {
    if (this.columnDef) {
      this.columnDef.name = this.name;
    }
  }
};
_CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) {
  return new (t || _CdkTextColumn)(ɵɵdirectiveInject(CdkTable, 8), ɵɵdirectiveInject(TEXT_COLUMN_OPTIONS, 8));
};
_CdkTextColumn.ɵcmp = ɵɵdefineComponent({
  type: _CdkTextColumn,
  selectors: [["cdk-text-column"]],
  viewQuery: function CdkTextColumn_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkColumnDef, 7);
      ɵɵviewQuery(CdkCellDef, 7);
      ɵɵviewQuery(CdkHeaderCellDef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.columnDef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cell = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerCell = _t.first);
    }
  },
  inputs: {
    name: "name",
    headerText: "headerText",
    dataAccessor: "dataAccessor",
    justify: "justify"
  },
  decls: 3,
  vars: 0,
  consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
  template: function CdkTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0, 0);
      ɵɵtemplate(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
      ɵɵelementContainerEnd();
    }
  },
  dependencies: [CdkCellDef, CdkHeaderCellDef, CdkColumnDef, CdkCell, CdkHeaderCell],
  encapsulation: 2
});
var CdkTextColumn = _CdkTextColumn;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextColumn, [{
    type: Component,
    args: [{
      selector: "cdk-text-column",
      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default
    }]
  }], () => [{
    type: CdkTable,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [TEXT_COLUMN_OPTIONS]
    }]
  }], {
    name: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    dataAccessor: [{
      type: Input
    }],
    justify: [{
      type: Input
    }],
    columnDef: [{
      type: ViewChild,
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: ViewChild,
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: ViewChild,
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
var _CdkTableModule = class _CdkTableModule {
};
_CdkTableModule.ɵfac = function CdkTableModule_Factory(t) {
  return new (t || _CdkTableModule)();
};
_CdkTableModule.ɵmod = ɵɵdefineNgModule({
  type: _CdkTableModule,
  declarations: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet],
  imports: [ScrollingModule],
  exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet]
});
_CdkTableModule.ɵinj = ɵɵdefineInjector({
  imports: [ScrollingModule]
});
var CdkTableModule = _CdkTableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableModule, [{
    type: NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      declarations: EXPORTED_DECLARATIONS,
      imports: [ScrollingModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/table.mjs
var _c02 = [[["caption"]], [["colgroup"], ["col"]]];
var _c12 = ["caption", "colgroup, col"];
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("text-align", ctx_r0.justify);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("text-align", ctx_r1.justify);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
  }
}
var _MatRecycleRows = class _MatRecycleRows {
};
_MatRecycleRows.ɵfac = function MatRecycleRows_Factory(t) {
  return new (t || _MatRecycleRows)();
};
_MatRecycleRows.ɵdir = ɵɵdefineDirective({
  type: _MatRecycleRows,
  selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
  features: [ɵɵProvidersFeature([{
    provide: _VIEW_REPEATER_STRATEGY,
    useClass: _RecycleViewRepeaterStrategy
  }])]
});
var MatRecycleRows = _MatRecycleRows;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRecycleRows, [{
    type: Directive,
    args: [{
      selector: "mat-table[recycleRows], table[mat-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], null, null);
})();
var _MatTable = class _MatTable extends CdkTable {
  constructor() {
    super(...arguments);
    this.stickyCssClass = "mat-mdc-table-sticky";
    this.needsPositionStickyOnElement = false;
  }
  ngOnInit() {
    super.ngOnInit();
    if (this._isNativeHtmlTable) {
      const tbody = this._elementRef.nativeElement.querySelector("tbody");
      tbody.classList.add("mdc-data-table__content");
    }
  }
};
_MatTable.ɵfac = (() => {
  let ɵMatTable_BaseFactory;
  return function MatTable_Factory(t) {
    return (ɵMatTable_BaseFactory || (ɵMatTable_BaseFactory = ɵɵgetInheritedFactory(_MatTable)))(t || _MatTable);
  };
})();
_MatTable.ɵcmp = ɵɵdefineComponent({
  type: _MatTable,
  selectors: [["mat-table"], ["table", "mat-table", ""]],
  hostAttrs: ["ngSkipHydration", "", 1, "mat-mdc-table", "mdc-data-table__table"],
  hostVars: 2,
  hostBindings: function MatTable_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("mdc-table-fixed-layout", ctx.fixedLayout);
    }
  },
  exportAs: ["matTable"],
  features: [ɵɵProvidersFeature([
    {
      provide: CdkTable,
      useExisting: _MatTable
    },
    {
      provide: CDK_TABLE,
      useExisting: _MatTable
    },
    {
      provide: _COALESCED_STYLE_SCHEDULER,
      useClass: _CoalescedStyleScheduler
    },
    // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
    //  is only included in the build if used.
    {
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _DisposeViewRepeaterStrategy
    },
    // Prevent nested tables from seeing this table's StickyPositioningListener.
    {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }
  ]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c12,
  decls: 6,
  vars: 0,
  consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
  template: function MatTable_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c02);
      ɵɵprojection(0);
      ɵɵprojection(1, 1);
      ɵɵelementContainer(2, 0)(3, 1)(4, 2)(5, 3);
    }
  },
  dependencies: [DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, NoDataRowOutlet],
  styles: [".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],
  encapsulation: 2
});
var MatTable = _MatTable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTable, [{
    type: Component,
    args: [{
      selector: "mat-table, table[mat-table]",
      exportAs: "matTable",
      template: `
    <ng-content select="caption"></ng-content>
    <ng-content select="colgroup, col"></ng-content>
    <ng-container headerRowOutlet></ng-container>
    <ng-container rowOutlet></ng-container>
    <ng-container noDataRowOutlet></ng-container>
    <ng-container footerRowOutlet></ng-container>
  `,
      host: {
        "class": "mat-mdc-table mdc-data-table__table",
        "[class.mdc-table-fixed-layout]": "fixedLayout",
        "ngSkipHydration": ""
      },
      providers: [
        {
          provide: CdkTable,
          useExisting: MatTable
        },
        {
          provide: CDK_TABLE,
          useExisting: MatTable
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      styles: [".mat-mdc-table-sticky{position:sticky !important}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color)}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-header-headline-font, Roboto, sans-serif);line-height:var(--mat-table-header-headline-line-height);font-size:var(--mat-table-header-headline-size, 14px);font-weight:var(--mat-table-header-headline-weight, 500)}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, Roboto, sans-serif);line-height:var(--mat-table-row-item-label-text-line-height);font-size:var(--mat-table-row-item-label-text-size, 14px);font-weight:var(--mat-table-row-item-label-text-weight)}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, rgba(0, 0, 0, 0.87));font-family:var(--mat-table-footer-supporting-text-font, Roboto, sans-serif);line-height:var(--mat-table-footer-supporting-text-line-height);font-size:var(--mat-table-footer-supporting-text-size, 14px);font-weight:var(--mat-table-footer-supporting-text-weight);letter-spacing:var(--mat-table-footer-supporting-text-tracking)}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking);font-weight:inherit;line-height:inherit}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, rgba(0, 0, 0, 0.12));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking);line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking)}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"]
    }]
  }], null, null);
})();
var _MatCellDef = class _MatCellDef extends CdkCellDef {
};
_MatCellDef.ɵfac = (() => {
  let ɵMatCellDef_BaseFactory;
  return function MatCellDef_Factory(t) {
    return (ɵMatCellDef_BaseFactory || (ɵMatCellDef_BaseFactory = ɵɵgetInheritedFactory(_MatCellDef)))(t || _MatCellDef);
  };
})();
_MatCellDef.ɵdir = ɵɵdefineDirective({
  type: _MatCellDef,
  selectors: [["", "matCellDef", ""]],
  features: [ɵɵProvidersFeature([{
    provide: CdkCellDef,
    useExisting: _MatCellDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatCellDef = _MatCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCellDef, [{
    type: Directive,
    args: [{
      selector: "[matCellDef]",
      providers: [{
        provide: CdkCellDef,
        useExisting: MatCellDef
      }]
    }]
  }], null, null);
})();
var _MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
};
_MatHeaderCellDef.ɵfac = (() => {
  let ɵMatHeaderCellDef_BaseFactory;
  return function MatHeaderCellDef_Factory(t) {
    return (ɵMatHeaderCellDef_BaseFactory || (ɵMatHeaderCellDef_BaseFactory = ɵɵgetInheritedFactory(_MatHeaderCellDef)))(t || _MatHeaderCellDef);
  };
})();
_MatHeaderCellDef.ɵdir = ɵɵdefineDirective({
  type: _MatHeaderCellDef,
  selectors: [["", "matHeaderCellDef", ""]],
  features: [ɵɵProvidersFeature([{
    provide: CdkHeaderCellDef,
    useExisting: _MatHeaderCellDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatHeaderCellDef = _MatHeaderCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderCellDef]",
      providers: [{
        provide: CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }]
    }]
  }], null, null);
})();
var _MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
};
_MatFooterCellDef.ɵfac = (() => {
  let ɵMatFooterCellDef_BaseFactory;
  return function MatFooterCellDef_Factory(t) {
    return (ɵMatFooterCellDef_BaseFactory || (ɵMatFooterCellDef_BaseFactory = ɵɵgetInheritedFactory(_MatFooterCellDef)))(t || _MatFooterCellDef);
  };
})();
_MatFooterCellDef.ɵdir = ɵɵdefineDirective({
  type: _MatFooterCellDef,
  selectors: [["", "matFooterCellDef", ""]],
  features: [ɵɵProvidersFeature([{
    provide: CdkFooterCellDef,
    useExisting: _MatFooterCellDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatFooterCellDef = _MatFooterCellDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterCellDef]",
      providers: [{
        provide: CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }]
    }]
  }], null, null);
})();
var _MatColumnDef = class _MatColumnDef extends CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
};
_MatColumnDef.ɵfac = (() => {
  let ɵMatColumnDef_BaseFactory;
  return function MatColumnDef_Factory(t) {
    return (ɵMatColumnDef_BaseFactory || (ɵMatColumnDef_BaseFactory = ɵɵgetInheritedFactory(_MatColumnDef)))(t || _MatColumnDef);
  };
})();
_MatColumnDef.ɵdir = ɵɵdefineDirective({
  type: _MatColumnDef,
  selectors: [["", "matColumnDef", ""]],
  inputs: {
    sticky: "sticky",
    name: ["matColumnDef", "name"]
  },
  features: [ɵɵProvidersFeature([{
    provide: CdkColumnDef,
    useExisting: _MatColumnDef
  }, {
    provide: "MAT_SORT_HEADER_COLUMN_DEF",
    useExisting: _MatColumnDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatColumnDef = _MatColumnDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatColumnDef, [{
    type: Directive,
    args: [{
      selector: "[matColumnDef]",
      inputs: ["sticky"],
      providers: [{
        provide: CdkColumnDef,
        useExisting: MatColumnDef
      }, {
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: MatColumnDef
      }]
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["matColumnDef"]
    }]
  });
})();
var _MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
};
_MatHeaderCell.ɵfac = (() => {
  let ɵMatHeaderCell_BaseFactory;
  return function MatHeaderCell_Factory(t) {
    return (ɵMatHeaderCell_BaseFactory || (ɵMatHeaderCell_BaseFactory = ɵɵgetInheritedFactory(_MatHeaderCell)))(t || _MatHeaderCell);
  };
})();
_MatHeaderCell.ɵdir = ɵɵdefineDirective({
  type: _MatHeaderCell,
  selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
  hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
  features: [ɵɵInheritDefinitionFeature]
});
var MatHeaderCell = _MatHeaderCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCell, [{
    type: Directive,
    args: [{
      selector: "mat-header-cell, th[mat-header-cell]",
      host: {
        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
        "role": "columnheader"
      }
    }]
  }], null, null);
})();
var _MatFooterCell = class _MatFooterCell extends CdkFooterCell {
};
_MatFooterCell.ɵfac = (() => {
  let ɵMatFooterCell_BaseFactory;
  return function MatFooterCell_Factory(t) {
    return (ɵMatFooterCell_BaseFactory || (ɵMatFooterCell_BaseFactory = ɵɵgetInheritedFactory(_MatFooterCell)))(t || _MatFooterCell);
  };
})();
_MatFooterCell.ɵdir = ɵɵdefineDirective({
  type: _MatFooterCell,
  selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
  hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
  features: [ɵɵInheritDefinitionFeature]
});
var MatFooterCell = _MatFooterCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCell, [{
    type: Directive,
    args: [{
      selector: "mat-footer-cell, td[mat-footer-cell]",
      host: {
        "class": "mat-mdc-footer-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var _MatCell = class _MatCell extends CdkCell {
};
_MatCell.ɵfac = (() => {
  let ɵMatCell_BaseFactory;
  return function MatCell_Factory(t) {
    return (ɵMatCell_BaseFactory || (ɵMatCell_BaseFactory = ɵɵgetInheritedFactory(_MatCell)))(t || _MatCell);
  };
})();
_MatCell.ɵdir = ɵɵdefineDirective({
  type: _MatCell,
  selectors: [["mat-cell"], ["td", "mat-cell", ""]],
  hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
  features: [ɵɵInheritDefinitionFeature]
});
var MatCell = _MatCell;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCell, [{
    type: Directive,
    args: [{
      selector: "mat-cell, td[mat-cell]",
      host: {
        "class": "mat-mdc-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var _MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
};
_MatHeaderRowDef.ɵfac = (() => {
  let ɵMatHeaderRowDef_BaseFactory;
  return function MatHeaderRowDef_Factory(t) {
    return (ɵMatHeaderRowDef_BaseFactory || (ɵMatHeaderRowDef_BaseFactory = ɵɵgetInheritedFactory(_MatHeaderRowDef)))(t || _MatHeaderRowDef);
  };
})();
_MatHeaderRowDef.ɵdir = ɵɵdefineDirective({
  type: _MatHeaderRowDef,
  selectors: [["", "matHeaderRowDef", ""]],
  inputs: {
    columns: ["matHeaderRowDef", "columns"],
    sticky: ["matHeaderRowDefSticky", "sticky"]
  },
  features: [ɵɵProvidersFeature([{
    provide: CdkHeaderRowDef,
    useExisting: _MatHeaderRowDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatHeaderRowDef = _MatHeaderRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderRowDef]",
      providers: [{
        provide: CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: ["columns: matHeaderRowDef", "sticky: matHeaderRowDefSticky"]
    }]
  }], null, null);
})();
var _MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
};
_MatFooterRowDef.ɵfac = (() => {
  let ɵMatFooterRowDef_BaseFactory;
  return function MatFooterRowDef_Factory(t) {
    return (ɵMatFooterRowDef_BaseFactory || (ɵMatFooterRowDef_BaseFactory = ɵɵgetInheritedFactory(_MatFooterRowDef)))(t || _MatFooterRowDef);
  };
})();
_MatFooterRowDef.ɵdir = ɵɵdefineDirective({
  type: _MatFooterRowDef,
  selectors: [["", "matFooterRowDef", ""]],
  inputs: {
    columns: ["matFooterRowDef", "columns"],
    sticky: ["matFooterRowDefSticky", "sticky"]
  },
  features: [ɵɵProvidersFeature([{
    provide: CdkFooterRowDef,
    useExisting: _MatFooterRowDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatFooterRowDef = _MatFooterRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterRowDef]",
      providers: [{
        provide: CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: ["columns: matFooterRowDef", "sticky: matFooterRowDefSticky"]
    }]
  }], null, null);
})();
var _MatRowDef = class _MatRowDef extends CdkRowDef {
};
_MatRowDef.ɵfac = (() => {
  let ɵMatRowDef_BaseFactory;
  return function MatRowDef_Factory(t) {
    return (ɵMatRowDef_BaseFactory || (ɵMatRowDef_BaseFactory = ɵɵgetInheritedFactory(_MatRowDef)))(t || _MatRowDef);
  };
})();
_MatRowDef.ɵdir = ɵɵdefineDirective({
  type: _MatRowDef,
  selectors: [["", "matRowDef", ""]],
  inputs: {
    columns: ["matRowDefColumns", "columns"],
    when: ["matRowDefWhen", "when"]
  },
  features: [ɵɵProvidersFeature([{
    provide: CdkRowDef,
    useExisting: _MatRowDef
  }]), ɵɵInheritDefinitionFeature]
});
var MatRowDef = _MatRowDef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRowDef, [{
    type: Directive,
    args: [{
      selector: "[matRowDef]",
      providers: [{
        provide: CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: ["columns: matRowDefColumns", "when: matRowDefWhen"]
    }]
  }], null, null);
})();
var _MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
};
_MatHeaderRow.ɵfac = (() => {
  let ɵMatHeaderRow_BaseFactory;
  return function MatHeaderRow_Factory(t) {
    return (ɵMatHeaderRow_BaseFactory || (ɵMatHeaderRow_BaseFactory = ɵɵgetInheritedFactory(_MatHeaderRow)))(t || _MatHeaderRow);
  };
})();
_MatHeaderRow.ɵcmp = ɵɵdefineComponent({
  type: _MatHeaderRow,
  selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
  exportAs: ["matHeaderRow"],
  features: [ɵɵProvidersFeature([{
    provide: CdkHeaderRow,
    useExisting: _MatHeaderRow
  }]), ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatHeaderRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatHeaderRow = _MatHeaderRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRow, [{
    type: Component,
    args: [{
      selector: "mat-header-row, tr[mat-header-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-header-row mdc-data-table__header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matHeaderRow",
      providers: [{
        provide: CdkHeaderRow,
        useExisting: MatHeaderRow
      }]
    }]
  }], null, null);
})();
var _MatFooterRow = class _MatFooterRow extends CdkFooterRow {
};
_MatFooterRow.ɵfac = (() => {
  let ɵMatFooterRow_BaseFactory;
  return function MatFooterRow_Factory(t) {
    return (ɵMatFooterRow_BaseFactory || (ɵMatFooterRow_BaseFactory = ɵɵgetInheritedFactory(_MatFooterRow)))(t || _MatFooterRow);
  };
})();
_MatFooterRow.ɵcmp = ɵɵdefineComponent({
  type: _MatFooterRow,
  selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
  exportAs: ["matFooterRow"],
  features: [ɵɵProvidersFeature([{
    provide: CdkFooterRow,
    useExisting: _MatFooterRow
  }]), ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatFooterRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatFooterRow = _MatFooterRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRow, [{
    type: Component,
    args: [{
      selector: "mat-footer-row, tr[mat-footer-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-footer-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matFooterRow",
      providers: [{
        provide: CdkFooterRow,
        useExisting: MatFooterRow
      }]
    }]
  }], null, null);
})();
var _MatRow = class _MatRow extends CdkRow {
};
_MatRow.ɵfac = (() => {
  let ɵMatRow_BaseFactory;
  return function MatRow_Factory(t) {
    return (ɵMatRow_BaseFactory || (ɵMatRow_BaseFactory = ɵɵgetInheritedFactory(_MatRow)))(t || _MatRow);
  };
})();
_MatRow.ɵcmp = ɵɵdefineComponent({
  type: _MatRow,
  selectors: [["mat-row"], ["tr", "mat-row", ""]],
  hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
  exportAs: ["matRow"],
  features: [ɵɵProvidersFeature([{
    provide: CdkRow,
    useExisting: _MatRow
  }]), ɵɵInheritDefinitionFeature],
  decls: 1,
  vars: 0,
  consts: [["cdkCellOutlet", ""]],
  template: function MatRow_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
    }
  },
  dependencies: [CdkCellOutlet],
  encapsulation: 2
});
var MatRow = _MatRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRow, [{
    type: Component,
    args: [{
      selector: "mat-row, tr[mat-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matRow",
      providers: [{
        provide: CdkRow,
        useExisting: MatRow
      }]
    }]
  }], null, null);
})();
var _MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
  constructor() {
    super(...arguments);
    this._contentClassName = "mat-mdc-no-data-row";
  }
};
_MatNoDataRow.ɵfac = (() => {
  let ɵMatNoDataRow_BaseFactory;
  return function MatNoDataRow_Factory(t) {
    return (ɵMatNoDataRow_BaseFactory || (ɵMatNoDataRow_BaseFactory = ɵɵgetInheritedFactory(_MatNoDataRow)))(t || _MatNoDataRow);
  };
})();
_MatNoDataRow.ɵdir = ɵɵdefineDirective({
  type: _MatNoDataRow,
  selectors: [["ng-template", "matNoDataRow", ""]],
  features: [ɵɵProvidersFeature([{
    provide: CdkNoDataRow,
    useExisting: _MatNoDataRow
  }]), ɵɵInheritDefinitionFeature]
});
var MatNoDataRow = _MatNoDataRow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[matNoDataRow]",
      providers: [{
        provide: CdkNoDataRow,
        useExisting: MatNoDataRow
      }]
    }]
  }], null, null);
})();
var _MatTextColumn = class _MatTextColumn extends CdkTextColumn {
};
_MatTextColumn.ɵfac = (() => {
  let ɵMatTextColumn_BaseFactory;
  return function MatTextColumn_Factory(t) {
    return (ɵMatTextColumn_BaseFactory || (ɵMatTextColumn_BaseFactory = ɵɵgetInheritedFactory(_MatTextColumn)))(t || _MatTextColumn);
  };
})();
_MatTextColumn.ɵcmp = ɵɵdefineComponent({
  type: _MatTextColumn,
  selectors: [["mat-text-column"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 0,
  consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
  template: function MatTextColumn_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0, 0);
      ɵɵtemplate(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
      ɵɵelementContainerEnd();
    }
  },
  dependencies: [MatHeaderCellDef, MatColumnDef, MatCellDef, MatHeaderCell, MatCell],
  encapsulation: 2
});
var MatTextColumn = _MatTextColumn;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTextColumn, [{
    type: Component,
    args: [{
      selector: "mat-text-column",
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default
    }]
  }], null, null);
})();
var EXPORTED_DECLARATIONS2 = [
  // Table
  MatTable,
  MatRecycleRows,
  // Template defs
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatFooterCellDef,
  MatFooterRowDef,
  // Cell directives
  MatHeaderCell,
  MatCell,
  MatFooterCell,
  // Row directives
  MatHeaderRow,
  MatRow,
  MatFooterRow,
  MatNoDataRow,
  MatTextColumn
];
var _MatTableModule = class _MatTableModule {
};
_MatTableModule.ɵfac = function MatTableModule_Factory(t) {
  return new (t || _MatTableModule)();
};
_MatTableModule.ɵmod = ɵɵdefineNgModule({
  type: _MatTableModule,
  declarations: [
    // Table
    MatTable,
    MatRecycleRows,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn
  ],
  imports: [MatCommonModule, CdkTableModule],
  exports: [
    MatCommonModule,
    // Table
    MatTable,
    MatRecycleRows,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn
  ]
});
_MatTableModule.ɵinj = ɵɵdefineInjector({
  imports: [MatCommonModule, CdkTableModule, MatCommonModule]
});
var MatTableModule = _MatTableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkTableModule],
      exports: [MatCommonModule, EXPORTED_DECLARATIONS2],
      declarations: EXPORTED_DECLARATIONS2
    }]
  }], null, null);
})();
var MAX_SAFE_INTEGER = 9007199254740991;
var MatTableDataSource = class extends DataSource {
  /** Array of data that should be rendered by the table, where each object represents one row. */
  get data() {
    return this._data.value;
  }
  set data(data) {
    data = Array.isArray(data) ? data : [];
    this._data.next(data);
    if (!this._renderChangesSubscription) {
      this._filterData(data);
    }
  }
  /**
   * Filter term that should be used to filter out objects from the data array. To override how
   * data objects match to this filter string, provide a custom function for filterPredicate.
   */
  get filter() {
    return this._filter.value;
  }
  set filter(filter) {
    this._filter.next(filter);
    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }
  /**
   * Instance of the MatSort directive used by the table to control its sorting. Sort changes
   * emitted by the MatSort will trigger an update to the table's rendered data.
   */
  get sort() {
    return this._sort;
  }
  set sort(sort) {
    this._sort = sort;
    this._updateChangeSubscription();
  }
  /**
   * Instance of the paginator component used by the table to control what page of the data is
   * displayed. Page changes emitted by the paginator will trigger an update to the
   * table's rendered data.
   *
   * Note that the data source uses the paginator's properties to calculate which page of data
   * should be displayed. If the paginator receives its properties as template inputs,
   * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
   * initialized before assigning it to this data source.
   */
  get paginator() {
    return this._paginator;
  }
  set paginator(paginator) {
    this._paginator = paginator;
    this._updateChangeSubscription();
  }
  constructor(initialData = []) {
    super();
    this._renderData = new BehaviorSubject([]);
    this._filter = new BehaviorSubject("");
    this._internalPageChanges = new Subject();
    this._renderChangesSubscription = null;
    this.sortingDataAccessor = (data, sortHeaderId) => {
      const value = data[sortHeaderId];
      if (_isNumberValue(value)) {
        const numberValue = Number(value);
        return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
      }
      return value;
    };
    this.sortData = (data, sort) => {
      const active = sort.active;
      const direction = sort.direction;
      if (!active || direction == "") {
        return data;
      }
      return data.sort((a, b) => {
        let valueA = this.sortingDataAccessor(a, active);
        let valueB = this.sortingDataAccessor(b, active);
        const valueAType = typeof valueA;
        const valueBType = typeof valueB;
        if (valueAType !== valueBType) {
          if (valueAType === "number") {
            valueA += "";
          }
          if (valueBType === "number") {
            valueB += "";
          }
        }
        let comparatorResult = 0;
        if (valueA != null && valueB != null) {
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          }
        } else if (valueA != null) {
          comparatorResult = 1;
        } else if (valueB != null) {
          comparatorResult = -1;
        }
        return comparatorResult * (direction == "asc" ? 1 : -1);
      });
    };
    this.filterPredicate = (data, filter) => {
      const dataStr = Object.keys(data).reduce((currentTerm, key) => {
        return currentTerm + data[key] + "◬";
      }, "").toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };
    this._data = new BehaviorSubject(initialData);
    this._updateChangeSubscription();
  }
  /**
   * Subscribe to changes that should trigger an update to the table's rendered rows. When the
   * changes occur, process the current state of the filter, sort, and pagination along with
   * the provided base data and send it to the table for rendering.
   */
  _updateChangeSubscription() {
    const sortChange = this._sort ? merge(this._sort.sortChange, this._sort.initialized) : of(null);
    const pageChange = this._paginator ? merge(this._paginator.page, this._internalPageChanges, this._paginator.initialized) : of(null);
    const dataStream = this._data;
    const filteredData = combineLatest([dataStream, this._filter]).pipe(map(([data]) => this._filterData(data)));
    const orderedData = combineLatest([filteredData, sortChange]).pipe(map(([data]) => this._orderData(data)));
    const paginatedData = combineLatest([orderedData, pageChange]).pipe(map(([data]) => this._pageData(data)));
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = paginatedData.subscribe((data) => this._renderData.next(data));
  }
  /**
   * Returns a filtered data array where each filter object contains the filter string within
   * the result of the filterPredicate function. If no filter is set, returns the data array
   * as provided.
   */
  _filterData(data) {
    this.filteredData = this.filter == null || this.filter === "" ? data : data.filter((obj) => this.filterPredicate(obj, this.filter));
    if (this.paginator) {
      this._updatePaginator(this.filteredData.length);
    }
    return this.filteredData;
  }
  /**
   * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
   * data array as provided. Uses the default data accessor for data lookup, unless a
   * sortDataAccessor function is defined.
   */
  _orderData(data) {
    if (!this.sort) {
      return data;
    }
    return this.sortData(data.slice(), this.sort);
  }
  /**
   * Returns a paged slice of the provided data array according to the provided paginator's page
   * index and length. If there is no paginator provided, returns the data array as provided.
   */
  _pageData(data) {
    if (!this.paginator) {
      return data;
    }
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.slice(startIndex, startIndex + this.paginator.pageSize);
  }
  /**
   * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
   * index does not exceed the paginator's last page. Values are changed in a resolved promise to
   * guard against making property changes within a round of change detection.
   */
  _updatePaginator(filteredDataLength) {
    Promise.resolve().then(() => {
      const paginator = this.paginator;
      if (!paginator) {
        return;
      }
      paginator.length = filteredDataLength;
      if (paginator.pageIndex > 0) {
        const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
        const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
        if (newPageIndex !== paginator.pageIndex) {
          paginator.pageIndex = newPageIndex;
          this._internalPageChanges.next();
        }
      }
    });
  }
  /**
   * Used by the MatTable. Called when it connects to the data source.
   * @docs-private
   */
  connect() {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }
    return this._renderData;
  }
  /**
   * Used by the MatTable. Called when it disconnects from the data source.
   * @docs-private
   */
  disconnect() {
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = null;
  }
};
export {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterCell,
  MatFooterCellDef,
  MatFooterRow,
  MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRecycleRows,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
  MatTextColumn
};
//# sourceMappingURL=@angular_material_table.js.map
