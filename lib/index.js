'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: 0,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing;


      var frozenColumns = allVisibleColumns.filter(function (c) {
        return c.frozen;
      });
      var notFrozenColumns = allVisibleColumns.filter(function (c) {
        return !c.frozen;
      });

      // Pagination
      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        return [rows.map(function (row, i) {
          index++;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            ;
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };
      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));
      var frozenColumnMinWidth = _utils2.default.sum(frozenColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));
      var notFrozenColumnsMinWidth = _utils2.default.sum(notFrozenColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));
      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth
      });

      // Visual Components

      var makeHeaderGroups = function makeHeaderGroups() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils2.default.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: width + 'px',
          maxWidth: maxWidth + 'px'
        };

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaders = function makeHeaders() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        var columns = options.useFrozenColumns ? frozenColumns : notFrozenColumns;
        var rowMinWidth = options.useFrozenColumns ? frozenColumnMinWidth : notFrozenColumnsMinWidth;
        var sizeStyles = options.useFrozenColumns ? { width: rowMinWidth + 'px' } : { minWidth: rowMinWidth + 'px' };
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: _extends({}, theadProps.style, sizeStyles)
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            columns.map(makeHeader)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(column, e, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(column, e, true);
          }
        }, resizerProps)) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            }),
            toggleSort: function toggleSort(e) {
              isSortable && _this2.sortColumn(column, e.shiftKey);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: 'rt-resizable-header-content' },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeFilters = function makeFilters() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        var columns = options.useFrozenColumns ? frozenColumns : notFrozenColumns;
        var rowMinWidth = options.useFrozenColumns ? frozenColumnMinWidth : notFrozenColumnsMinWidth;
        var sizeStyles = options.useFrozenColumns ? { width: rowMinWidth + 'px' } : { minWidth: rowMinWidth + 'px' };
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style, sizeStyles)
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            columns.map(makeFilter)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            })
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: ++rowIndex,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        var columns = options.useFrozenColumns ? frozenColumns : notFrozenColumns;
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            columns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this2));
              var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this2));

              var classes = [tdProps.className, column.className, columnProps.className];

              var styles = _extends({}, tdProps.style, column.style, columnProps.style);

              var cellInfo = _extends({}, rowInfo, {
                isExpanded: isExpanded,
                column: _extends({}, column),
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized: resized,
                show: show,
                width: width,
                maxWidth: maxWidth,
                tdProps: tdProps,
                columnProps: columnProps,
                classes: classes,
                styles: styles
              });

              var value = cellInfo.value;

              var interactionProps = void 0;
              var isBranch = void 0;
              var isPreview = void 0;

              var onExpanderClick = function onExpanderClick(e) {
                var newExpanded = _utils2.default.clone(expanded);
                if (isExpanded) {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this2.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(ResolvedExpanderComponent, props),
                  _react2.default.createElement(ResolvedPivotValueComponent, props)
                );
              };
              var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                interactionProps = {
                  onClick: onExpanderClick
                };
                // If pivoted, has no subRows, and does not have a subComponent, do not make expandable
                if (cellInfo.pivoted) {
                  if (!cellInfo.subRows) {
                    if (!SubComponent) {
                      cellInfo.expandable = false;
                      interactionProps = {};
                    }
                  }
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              // Return the cell
              return _react2.default.createElement(
                TdComponent,
                _extends({
                  key: i2 + '-' + column.id,
                  className: (0, _classnames2.default)(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: width + ' 0 auto',
                    width: width + 'px',
                    maxWidth: maxWidth + 'px'
                  })
                }, interactionProps, tdProps.rest, columnProps.rest),
                resolvedCell
              );
            })
          ),
          rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
            return makePageRow(d, i, rowInfo.nestingPath);
          }),
          SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var columns = options.useFrozenColumns ? frozenColumns : notFrozenColumns;
        var state = _extends({}, finalState, {
          columns: columns
        });
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: i }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            {
              className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
              style: trProps.style || {}
            },
            columns.map(makePadColumn)
          )
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: flex + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            })
          }, tdProps.rest),
          _utils2.default.normalizeComponent(PadRowComponent)
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        var columns = options.useFrozenColumns ? frozenColumns : notFrozenColumns;
        var rowMinWidth = options.useFrozenColumns ? frozenColumnMinWidth : notFrozenColumnsMinWidth;
        var sizeStyles = options.useFrozenColumns ? { width: rowMinWidth + 'px' } : { minWidth: rowMinWidth + 'px' };
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style, sizeStyles)
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            columns.map(makeColumnFooter)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: width + 'px',
              maxWidth: maxWidth + 'px'
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style
        }, paginationProps.rest));
      };

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);
      var resizerProps = getResizerProps(finalState, undefined, undefined, this);

      var makeTable = function makeTable() {
        var pagination = makePagination();

        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? _react2.default.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          _react2.default.createElement(
            'div',
            { style: { display: 'flex' } },
            _react2.default.createElement(
              TableComponent,
              _extends({
                className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : '', 'frozen-columns'),
                style: _extends({}, tableProps.style, {
                  flexBasis: frozenColumnMinWidth,
                  flexGrow: 0,
                  boxShadow: 'rgba(0, 0, 0, 0.02) -1px 0px inset'
                })
              }, tableProps.rest),
              hasHeaderGroups ? makeHeaderGroups({ useFrozenColumns: true }) : null,
              makeHeaders({ useFrozenColumns: true }),
              hasFilters ? makeFilters({ useFrozenColumns: true }) : null,
              _react2.default.createElement(
                TbodyComponent,
                _extends({
                  className: (0, _classnames2.default)(tBodyProps.className),
                  style: _extends({}, tBodyProps.style, {
                    width: frozenColumnMinWidth + 'px'
                  })
                }, tBodyProps.rest),
                pageRows.map(function (d, i) {
                  return makePageRow(d, i, [], { useFrozenColumns: true });
                }),
                padRows.map(function (d, i) {
                  return makePadRow(d, i, { useFrozenColumns: true });
                })
              ),
              hasColumnFooter ? makeColumnFooters({ useFrozenColumns: true }) : null
            ),
            _react2.default.createElement(
              TableComponent,
              _extends({
                className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
                style: tableProps.style
              }, tableProps.rest),
              hasHeaderGroups ? makeHeaderGroups() : null,
              makeHeaders(),
              hasFilters ? makeFilters() : null,
              _react2.default.createElement(
                TbodyComponent,
                _extends({
                  className: (0, _classnames2.default)(tBodyProps.className),
                  style: _extends({}, tBodyProps.style, {
                    minWidth: notFrozenColumnsMinWidth + 'px'
                  })
                }, tBodyProps.rest),
                pageRows.map(function (d, i) {
                  return makePageRow(d, i);
                }),
                padRows.map(makePadRow)
              ),
              hasColumnFooter ? makeColumnFooters() : null
            )
          ),
          showPagination && showPaginationBottom ? _react2.default.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          !pageRows.length && _react2.default.createElement(
            NoDataComponent,
            noDataProps,
            _utils2.default.normalizeComponent(noDataText)
          ),
          _react2.default.createElement(LoadingComponent, _extends({
            loading: loading,
            loadingText: loadingText
          }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwicGFnZVNpemUiLCJkZWZhdWx0UGFnZVNpemUiLCJzb3J0ZWQiLCJkZWZhdWx0U29ydGVkIiwiZXhwYW5kZWQiLCJkZWZhdWx0RXhwYW5kZWQiLCJmaWx0ZXJlZCIsImRlZmF1bHRGaWx0ZXJlZCIsInJlc2l6ZWQiLCJkZWZhdWx0UmVzaXplZCIsImN1cnJlbnRseVJlc2l6aW5nIiwic2tpcE5leHRTb3J0IiwicmVzb2x2ZWRTdGF0ZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJnZXRQcm9wcyIsImdldFRhYmxlUHJvcHMiLCJnZXRUaGVhZEdyb3VwUHJvcHMiLCJnZXRUaGVhZEdyb3VwVHJQcm9wcyIsImdldFRoZWFkR3JvdXBUaFByb3BzIiwiZ2V0VGhlYWRQcm9wcyIsImdldFRoZWFkVHJQcm9wcyIsImdldFRoZWFkVGhQcm9wcyIsImdldFRoZWFkRmlsdGVyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRyUHJvcHMiLCJnZXRUaGVhZEZpbHRlclRoUHJvcHMiLCJnZXRUYm9keVByb3BzIiwiZ2V0VHJHcm91cFByb3BzIiwiZ2V0VHJQcm9wcyIsImdldFRkUHJvcHMiLCJnZXRUZm9vdFByb3BzIiwiZ2V0VGZvb3RUclByb3BzIiwiZ2V0VGZvb3RUZFByb3BzIiwiZ2V0UGFnaW5hdGlvblByb3BzIiwiZ2V0TG9hZGluZ1Byb3BzIiwiZ2V0Tm9EYXRhUHJvcHMiLCJnZXRSZXNpemVyUHJvcHMiLCJzaG93UGFnaW5hdGlvbiIsInNob3dQYWdpbmF0aW9uVG9wIiwic2hvd1BhZ2luYXRpb25Cb3R0b20iLCJtYW51YWwiLCJsb2FkaW5nVGV4dCIsIm5vRGF0YVRleHQiLCJzb3J0YWJsZSIsInJlc2l6YWJsZSIsImZpbHRlcmFibGUiLCJwaXZvdElES2V5IiwicGl2b3RWYWxLZXkiLCJwaXZvdEJ5Iiwic3ViUm93c0tleSIsImFnZ3JlZ2F0ZWRLZXkiLCJvcmlnaW5hbEtleSIsImluZGV4S2V5IiwiZ3JvdXBlZEJ5UGl2b3RLZXkiLCJsb2FkaW5nIiwicGFnZXMiLCJvbkV4cGFuZGVkQ2hhbmdlIiwiVGFibGVDb21wb25lbnQiLCJUaGVhZENvbXBvbmVudCIsIlRib2R5Q29tcG9uZW50IiwiVHJHcm91cENvbXBvbmVudCIsIlRyQ29tcG9uZW50IiwiVGhDb21wb25lbnQiLCJUZENvbXBvbmVudCIsIlRmb290Q29tcG9uZW50IiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsIkxvYWRpbmdDb21wb25lbnQiLCJTdWJDb21wb25lbnQiLCJOb0RhdGFDb21wb25lbnQiLCJSZXNpemVyQ29tcG9uZW50IiwiRXhwYW5kZXJDb21wb25lbnQiLCJQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RDb21wb25lbnQiLCJBZ2dyZWdhdGVkQ29tcG9uZW50IiwiRmlsdGVyQ29tcG9uZW50IiwiUGFkUm93Q29tcG9uZW50IiwicmVzb2x2ZWREYXRhIiwiYWxsVmlzaWJsZUNvbHVtbnMiLCJoZWFkZXJHcm91cHMiLCJoYXNIZWFkZXJHcm91cHMiLCJzb3J0ZWREYXRhIiwiZnJvemVuQ29sdW1ucyIsImZpbHRlciIsImMiLCJmcm96ZW4iLCJub3RGcm96ZW5Db2x1bW5zIiwic3RhcnRSb3ciLCJlbmRSb3ciLCJwYWdlUm93cyIsInNsaWNlIiwibWluUm93cyIsInBhZFJvd3MiLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93TWluV2lkdGgiLCJzdW0iLCJyZXNpemVkQ29sdW1uIiwiZmluZCIsIngiLCJpZCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwid2lkdGgiLCJtaW5XaWR0aCIsImZyb3plbkNvbHVtbk1pbldpZHRoIiwibm90RnJvemVuQ29sdW1uc01pbldpZHRoIiwicm93SW5kZXgiLCJmaW5hbFN0YXRlIiwibWFrZUhlYWRlckdyb3VwcyIsIm9wdGlvbnMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJzcGxpdFByb3BzIiwidW5kZWZpbmVkIiwidGhlYWRHcm91cFRyUHJvcHMiLCJyZXN0IiwibWFrZUhlYWRlckdyb3VwIiwiY29sdW1uIiwicmVzaXplZFZhbHVlIiwiY29sIiwiZmxleCIsImNvbHVtbnMiLCJtYXhXaWR0aCIsInRoZWFkR3JvdXBUaFByb3BzIiwiY29sdW1uSGVhZGVyUHJvcHMiLCJnZXRIZWFkZXJQcm9wcyIsImNsYXNzZXMiLCJoZWFkZXJDbGFzc05hbWUiLCJzdHlsZXMiLCJoZWFkZXJTdHlsZSIsImZsZXhTdHlsZXMiLCJub3JtYWxpemVDb21wb25lbnQiLCJIZWFkZXIiLCJkYXRhIiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwidXNlRnJvemVuQ29sdW1ucyIsInNpemVTdHlsZXMiLCJtYWtlSGVhZGVyIiwicmVzaXplZENvbCIsInNvcnQiLCJzaG93IiwidGhlYWRUaFByb3BzIiwiaXNSZXNpemFibGUiLCJyZXNpemVyIiwiZSIsInJlc2l6ZXJQcm9wcyIsImlzU29ydGFibGUiLCJkZXNjIiwiaW5jbHVkZXMiLCJzaGlmdEtleSIsIm1ha2VGaWx0ZXJzIiwidGhlYWRGaWx0ZXJQcm9wcyIsInRoZWFkRmlsdGVyVHJQcm9wcyIsIm1ha2VGaWx0ZXIiLCJ0aGVhZEZpbHRlclRoUHJvcHMiLCJSZXNvbHZlZEZpbHRlckNvbXBvbmVudCIsIkZpbHRlciIsImlzRmlsdGVyYWJsZSIsIm9uQ2hhbmdlIiwibWFrZVBhZ2VSb3ciLCJyb3dJbmZvIiwib3JpZ2luYWwiLCJ2aWV3SW5kZXgiLCJsZXZlbCIsIm5lc3RpbmdQYXRoIiwiYWdncmVnYXRlZCIsImdyb3VwZWRCeVBpdm90Iiwic3ViUm93cyIsImlzRXhwYW5kZWQiLCJ0ckdyb3VwUHJvcHMiLCJ0clByb3BzIiwiam9pbiIsImkyIiwidGRQcm9wcyIsImNvbHVtblByb3BzIiwiY2VsbEluZm8iLCJwaXZvdGVkIiwiZXhwYW5kZXIiLCJpbnRlcmFjdGlvblByb3BzIiwiaXNCcmFuY2giLCJpc1ByZXZpZXciLCJvbkV4cGFuZGVyQ2xpY2siLCJuZXdFeHBhbmRlZCIsImNsb25lIiwic2V0Iiwic2V0U3RhdGVXaXRoRGF0YSIsInJlc29sdmVkQ2VsbCIsIkNlbGwiLCJSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJBZ2dyZWdhdGVkIiwiYWdncmVnYXRlIiwiUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCIsIkV4cGFuZGVyIiwiUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IiwiUGl2b3RWYWx1ZSIsIkRlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlBpdm90IiwiZXhwYW5kYWJsZSIsIm9uQ2xpY2siLCJpbmRleE9mIiwibWFrZVBhZFJvdyIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVyIiwidEZvb3RUZFByb3BzIiwiY29sdW1uRm9vdGVyUHJvcHMiLCJnZXRGb290ZXJQcm9wcyIsIm1ha2VQYWdpbmF0aW9uIiwicGFnaW5hdGlvblByb3BzIiwicm9vdFByb3BzIiwidGFibGVQcm9wcyIsInRCb2R5UHJvcHMiLCJsb2FkaW5nUHJvcHMiLCJub0RhdGFQcm9wcyIsIm1ha2VUYWJsZSIsInBhZ2luYXRpb24iLCJkaXNwbGF5IiwiZmxleEJhc2lzIiwiZmxleEdyb3ciLCJib3hTaGFkb3ciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBSkE7OztBQU1PLElBQU1BLHdFQUFOOztJQUVjQyxVOzs7QUFHbkIsc0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJILElBQW5CLE9BQXJCO0FBQ0EsVUFBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSixJQUFwQixPQUF0QjtBQUNBLFVBQUtLLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkwsSUFBcEIsT0FBdEI7QUFDQSxVQUFLTSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JOLElBQWhCLE9BQWxCO0FBQ0EsVUFBS08sUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNQLElBQWQsT0FBaEI7QUFDQSxVQUFLUSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JSLElBQWhCLE9BQWxCO0FBQ0EsVUFBS1MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCVCxJQUFsQixPQUFwQjtBQUNBLFVBQUtV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OEJBQUQ7QUFBQTtBQUNFLDZCQUFXLDBCQUFXZ0UsV0FBVy9OLFNBQXRCLENBRGI7QUFFRSxzQ0FDSytOLFdBQVc5TixLQURoQjtBQUVFOEcsOEJBQWFFLHdCQUFiO0FBRkY7QUFGRixtQkFNTThHLFdBQVdyRyxJQU5qQjtBQVFLL0MseUJBQVNpQixHQUFULENBQWEsVUFBQ1AsQ0FBRCxFQUFJUyxDQUFKO0FBQUEseUJBQVUwRSxZQUFZbkYsQ0FBWixFQUFlUyxDQUFmLENBQVY7QUFBQSxpQkFBYixDQVJMO0FBU0toQix3QkFBUWMsR0FBUixDQUFZc0gsVUFBWjtBQVRMLGVBWEo7QUFzQksvSCxnQ0FBa0JpSSxtQkFBbEIsR0FBd0M7QUF0QjdDO0FBL0JGLFdBYkY7QUFxRUc1TCw0QkFBa0JFLG9CQUFsQixHQUNHO0FBQUE7QUFBQSxjQUFLLFdBQVUsbUJBQWY7QUFDQ3lNO0FBREQsV0FESCxHQUlHLElBekVOO0FBMEVHLFdBQUN4SixTQUFTTyxNQUFWLElBQ0M7QUFBQywyQkFBRDtBQUFxQitJLHVCQUFyQjtBQUNHLDRCQUFFdkYsa0JBQUYsQ0FBcUI3RyxVQUFyQjtBQURILFdBM0VKO0FBOEVFLHdDQUFDLGdCQUFEO0FBQ0UscUJBQVNZLE9BRFg7QUFFRSx5QkFBYWI7QUFGZixhQUdNb00sWUFITjtBQTlFRixTQURGO0FBc0ZELE9BekZEOztBQTJGQTtBQUNBLGFBQU9qTyxXQUFXQSxTQUFTb0gsVUFBVCxFQUFxQitHLFNBQXJCLEVBQWdDLElBQWhDLENBQVgsR0FBbURBLFdBQTFEO0FBQ0Q7Ozs7RUEvZ0NxQyx1QkFBUSwwQ0FBUixDOztBQUFuQnJRLFUsQ0FDWjJRLFk7a0JBRFkzUSxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IExpZmVjeWNsZSBmcm9tICcuL2xpZmVjeWNsZSdcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcydcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXG5cbmV4cG9ydCBjb25zdCBSZWFjdFRhYmxlRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RUYWJsZSBleHRlbmRzIE1ldGhvZHMoTGlmZWN5Y2xlKENvbXBvbmVudCkpIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdlU2l6ZTogcHJvcHMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgc29ydGVkOiBwcm9wcy5kZWZhdWx0U29ydGVkLFxuICAgICAgZXhwYW5kZWQ6IHByb3BzLmRlZmF1bHRFeHBhbmRlZCxcbiAgICAgIGZpbHRlcmVkOiBwcm9wcy5kZWZhdWx0RmlsdGVyZWQsXG4gICAgICByZXNpemVkOiBwcm9wcy5kZWZhdWx0UmVzaXplZCxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHNraXBOZXh0U29ydDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCByZXNvbHZlZFN0YXRlID0gdGhpcy5nZXRSZXNvbHZlZFN0YXRlKClcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlLFxuICAgICAgZ2V0UHJvcHMsXG4gICAgICBnZXRUYWJsZVByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkUHJvcHMsXG4gICAgICBnZXRUaGVhZFRyUHJvcHMsXG4gICAgICBnZXRUaGVhZFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzLFxuICAgICAgZ2V0VGJvZHlQcm9wcyxcbiAgICAgIGdldFRyR3JvdXBQcm9wcyxcbiAgICAgIGdldFRyUHJvcHMsXG4gICAgICBnZXRUZFByb3BzLFxuICAgICAgZ2V0VGZvb3RQcm9wcyxcbiAgICAgIGdldFRmb290VHJQcm9wcyxcbiAgICAgIGdldFRmb290VGRQcm9wcyxcbiAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyxcbiAgICAgIGdldExvYWRpbmdQcm9wcyxcbiAgICAgIGdldE5vRGF0YVByb3BzLFxuICAgICAgZ2V0UmVzaXplclByb3BzLFxuICAgICAgc2hvd1BhZ2luYXRpb24sXG4gICAgICBzaG93UGFnaW5hdGlvblRvcCxcbiAgICAgIHNob3dQYWdpbmF0aW9uQm90dG9tLFxuICAgICAgbWFudWFsLFxuICAgICAgbG9hZGluZ1RleHQsXG4gICAgICBub0RhdGFUZXh0LFxuICAgICAgc29ydGFibGUsXG4gICAgICByZXNpemFibGUsXG4gICAgICBmaWx0ZXJhYmxlLFxuICAgICAgLy8gUGl2b3RpbmcgU3RhdGVcbiAgICAgIHBpdm90SURLZXksXG4gICAgICBwaXZvdFZhbEtleSxcbiAgICAgIHBpdm90QnksXG4gICAgICBzdWJSb3dzS2V5LFxuICAgICAgYWdncmVnYXRlZEtleSxcbiAgICAgIG9yaWdpbmFsS2V5LFxuICAgICAgaW5kZXhLZXksXG4gICAgICBncm91cGVkQnlQaXZvdEtleSxcbiAgICAgIC8vIFN0YXRlXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZVNpemUsXG4gICAgICBwYWdlLFxuICAgICAgc29ydGVkLFxuICAgICAgZmlsdGVyZWQsXG4gICAgICByZXNpemVkLFxuICAgICAgZXhwYW5kZWQsXG4gICAgICBwYWdlcyxcbiAgICAgIG9uRXhwYW5kZWRDaGFuZ2UsXG4gICAgICAvLyBDb21wb25lbnRzXG4gICAgICBUYWJsZUNvbXBvbmVudCxcbiAgICAgIFRoZWFkQ29tcG9uZW50LFxuICAgICAgVGJvZHlDb21wb25lbnQsXG4gICAgICBUckdyb3VwQ29tcG9uZW50LFxuICAgICAgVHJDb21wb25lbnQsXG4gICAgICBUaENvbXBvbmVudCxcbiAgICAgIFRkQ29tcG9uZW50LFxuICAgICAgVGZvb3RDb21wb25lbnQsXG4gICAgICBQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgICAgTG9hZGluZ0NvbXBvbmVudCxcbiAgICAgIFN1YkNvbXBvbmVudCxcbiAgICAgIE5vRGF0YUNvbXBvbmVudCxcbiAgICAgIFJlc2l6ZXJDb21wb25lbnQsXG4gICAgICBFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgIFBpdm90VmFsdWVDb21wb25lbnQsXG4gICAgICBQaXZvdENvbXBvbmVudCxcbiAgICAgIEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICBGaWx0ZXJDb21wb25lbnQsXG4gICAgICBQYWRSb3dDb21wb25lbnQsXG4gICAgICAvLyBEYXRhIG1vZGVsXG4gICAgICByZXNvbHZlZERhdGEsXG4gICAgICBhbGxWaXNpYmxlQ29sdW1ucyxcbiAgICAgIGhlYWRlckdyb3VwcyxcbiAgICAgIGhhc0hlYWRlckdyb3VwcyxcbiAgICAgIC8vIFNvcnRlZCBEYXRhXG4gICAgICBzb3J0ZWREYXRhLFxuICAgICAgY3VycmVudGx5UmVzaXppbmcsXG4gICAgfSA9IHJlc29sdmVkU3RhdGVcblxuICAgIGNvbnN0IGZyb3plbkNvbHVtbnMgPSBhbGxWaXNpYmxlQ29sdW1ucy5maWx0ZXIoYyA9PiBjLmZyb3plbilcbiAgICBjb25zdCBub3RGcm96ZW5Db2x1bW5zID0gYWxsVmlzaWJsZUNvbHVtbnMuZmlsdGVyKGMgPT4gIWMuZnJvemVuKVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGNvbnN0IHN0YXJ0Um93ID0gcGFnZVNpemUgKiBwYWdlXG4gICAgY29uc3QgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZVxuICAgIGxldCBwYWdlUm93cyA9IG1hbnVhbCA/IHJlc29sdmVkRGF0YSA6IHNvcnRlZERhdGEuc2xpY2Uoc3RhcnRSb3csIGVuZFJvdylcbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzKClcbiAgICBjb25zdCBwYWRSb3dzID0gXy5yYW5nZShNYXRoLm1heChtaW5Sb3dzIC0gcGFnZVJvd3MubGVuZ3RoLCAwKSlcblxuICAgIGNvbnN0IGhhc0NvbHVtbkZvb3RlciA9IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLkZvb3RlcilcbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gZmlsdGVyYWJsZSB8fCBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5maWx0ZXJhYmxlKVxuXG4gICAgY29uc3QgcmVjdXJzZVJvd3NWaWV3SW5kZXggPSAocm93cywgcGF0aCA9IFtdLCBpbmRleCA9IC0xKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICAgIGNvbnN0IHJvd1dpdGhWaWV3SW5kZXggPSB7XG4gICAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgICBfdmlld0luZGV4OiBpbmRleCxcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGguY29uY2F0KFtpXSlcbiAgICAgICAgICBpZiAocm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSAmJiBfLmdldChleHBhbmRlZCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICAgIDtbcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSwgaW5kZXhdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgoXG4gICAgICAgICAgICAgIHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sXG4gICAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByb3dXaXRoVmlld0luZGV4XG4gICAgICAgIH0pLFxuICAgICAgICBpbmRleCxcbiAgICAgIF1cbiAgICB9XG4gICAgO1twYWdlUm93c10gPSByZWN1cnNlUm93c1ZpZXdJbmRleChwYWdlUm93cylcblxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcbiAgICBjb25zdCBjYW5OZXh0ID0gcGFnZSArIDEgPCBwYWdlc1xuXG4gICAgY29uc3Qgcm93TWluV2lkdGggPSBfLnN1bShcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLm1hcChkID0+IHtcbiAgICAgICAgY29uc3QgcmVzaXplZENvbHVtbiA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGQuaWQpIHx8IHt9XG4gICAgICAgIHJldHVybiBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sdW1uLnZhbHVlLCBkLndpZHRoLCBkLm1pbldpZHRoKVxuICAgICAgfSlcbiAgICApXG4gICAgY29uc3QgZnJvemVuQ29sdW1uTWluV2lkdGggPSBfLnN1bShcbiAgICAgIGZyb3plbkNvbHVtbnMubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCByZXNpemVkQ29sdW1uID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gZC5pZCkgfHwge31cbiAgICAgICAgcmV0dXJuIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2x1bW4udmFsdWUsIGQud2lkdGgsIGQubWluV2lkdGgpXG4gICAgICB9KVxuICAgIClcbiAgICBjb25zdCBub3RGcm96ZW5Db2x1bW5zTWluV2lkdGggPSBfLnN1bShcbiAgICAgIG5vdEZyb3plbkNvbHVtbnMubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCByZXNpemVkQ29sdW1uID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gZC5pZCkgfHwge31cbiAgICAgICAgcmV0dXJuIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2x1bW4udmFsdWUsIGQud2lkdGgsIGQubWluV2lkdGgpXG4gICAgICB9KVxuICAgIClcbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgICByb3dNaW5XaWR0aCxcbiAgICB9XG5cbiAgICAvLyBWaXN1YWwgQ29tcG9uZW50c1xuXG4gICAgY29uc3QgbWFrZUhlYWRlckdyb3VwcyA9IChvcHRpb25zID0ge30pID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRHcm91cFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyR3JvdXBzJywgdGhlYWRHcm91cFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRoZWFkR3JvdXBQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGhlYWRHcm91cFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dGhlYWRHcm91cFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkR3JvdXBUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkR3JvdXBUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hlYWRlckdyb3Vwcy5tYXAobWFrZUhlYWRlckdyb3VwKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRWYWx1ZSA9IGNvbCA9PlxuICAgICAgICAocmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sLmlkKSB8fCB7fSkudmFsdWVcbiAgICAgIGNvbnN0IGZsZXggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKFxuICAgICAgICAgIGNvbCA9PiAoY29sLndpZHRoIHx8IHJlc2l6ZWRWYWx1ZShjb2wpID8gMCA6IGNvbC5taW5XaWR0aClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgY29uc3Qgd2lkdGggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PlxuICAgICAgICAgIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRWYWx1ZShjb2wpLCBjb2wud2lkdGgsIGNvbC5taW5XaWR0aClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PlxuICAgICAgICAgIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRWYWx1ZShjb2wpLCBjb2wud2lkdGgsIGNvbC5tYXhXaWR0aClcbiAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmxleFN0eWxlcyA9IHtcbiAgICAgICAgZmxleDogYCR7ZmxleH0gMCBhdXRvYCxcbiAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgbWF4V2lkdGg6IGAke21heFdpZHRofXB4YCxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtpICsgJy0nICsgY29sdW1uLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgLi4uZmxleFN0eWxlcyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVycyA9IChvcHRpb25zID0ge30pID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBvcHRpb25zLnVzZUZyb3plbkNvbHVtbnMgPyBmcm96ZW5Db2x1bW5zIDogbm90RnJvemVuQ29sdW1uc1xuICAgICAgY29uc3Qgcm93TWluV2lkdGggPSBvcHRpb25zLnVzZUZyb3plbkNvbHVtbnMgPyBmcm96ZW5Db2x1bW5NaW5XaWR0aCA6IG5vdEZyb3plbkNvbHVtbnNNaW5XaWR0aFxuICAgICAgY29uc3Qgc2l6ZVN0eWxlcyA9IG9wdGlvbnMudXNlRnJvemVuQ29sdW1ucyA/IHt3aWR0aDogYCR7cm93TWluV2lkdGh9cHhgfSA6IHttaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctaGVhZGVyJywgdGhlYWRQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50aGVhZFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgLi4uc2l6ZVN0eWxlc1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRoZWFkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29sdW1ucy5tYXAobWFrZUhlYWRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNvcnQgPSBzb3J0ZWQuZmluZChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1pbldpZHRoXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5tYXhXaWR0aFxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZFRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNSZXNpemFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4ucmVzaXphYmxlLCByZXNpemFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgcmVzaXplciA9IGlzUmVzaXphYmxlXG4gICAgICAgID8gKDxSZXNpemVyQ29tcG9uZW50XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIGZhbHNlKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChjb2x1bW4sIGUsIHRydWUpfVxuICAgICAgICAgIHsuLi5yZXNpemVyUHJvcHN9XG4gICAgICAgIC8+KVxuICAgICAgICA6IG51bGxcblxuICAgICAgY29uc3QgaXNTb3J0YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5zb3J0YWJsZSwgc29ydGFibGUsIGZhbHNlKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICdydC1yZXNpemFibGUtaGVhZGVyJyxcbiAgICAgICAgICAgIHNvcnQgPyAoc29ydC5kZXNjID8gJy1zb3J0LWRlc2MnIDogJy1zb3J0LWFzYycpIDogJycsXG4gICAgICAgICAgICBpc1NvcnRhYmxlICYmICctY3Vyc29yLXBvaW50ZXInLFxuICAgICAgICAgICAgIXNob3cgJiYgJy1oaWRkZW4nLFxuICAgICAgICAgICAgcGl2b3RCeSAmJlxuICAgICAgICAgICAgICBwaXZvdEJ5LnNsaWNlKDAsIC0xKS5pbmNsdWRlcyhjb2x1bW4uaWQpICYmXG4gICAgICAgICAgICAgICdydC1oZWFkZXItcGl2b3QnXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICAgICAgbWF4V2lkdGg6IGAke21heFdpZHRofXB4YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRvZ2dsZVNvcnQ9e2UgPT4ge1xuICAgICAgICAgICAgaXNTb3J0YWJsZSAmJiB0aGlzLnNvcnRDb2x1bW4oY29sdW1uLCBlLnNoaWZ0S2V5KVxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncnQtcmVzaXphYmxlLWhlYWRlci1jb250ZW50Jz5cbiAgICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Jlc2l6ZXJ9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlcnMgPSAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEZpbHRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5zID0gb3B0aW9ucy51c2VGcm96ZW5Db2x1bW5zID8gZnJvemVuQ29sdW1ucyA6IG5vdEZyb3plbkNvbHVtbnNcbiAgICAgIGNvbnN0IHJvd01pbldpZHRoID0gb3B0aW9ucy51c2VGcm96ZW5Db2x1bW5zID8gZnJvemVuQ29sdW1uTWluV2lkdGggOiBub3RGcm96ZW5Db2x1bW5zTWluV2lkdGhcbiAgICAgIGNvbnN0IHNpemVTdHlsZXMgPSBvcHRpb25zLnVzZUZyb3plbkNvbHVtbnMgPyB7d2lkdGg6IGAke3Jvd01pbldpZHRofXB4YH0gOiB7bWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWZpbHRlcnMnLCB0aGVhZEZpbHRlclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRoZWFkRmlsdGVyUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAuLi5zaXplU3R5bGVzXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkRmlsdGVyVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb2x1bW5zLm1hcChtYWtlRmlsdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RoZWFkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXIgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWluV2lkdGhcbiAgICAgIClcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1heFdpZHRoXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRoUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkRmlsdGVyVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkRmlsdGVyVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaWx0ZXJlZC5maW5kKGZpbHRlciA9PiBmaWx0ZXIuaWQgPT09IGNvbHVtbi5pZClcblxuICAgICAgY29uc3QgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQgPSBjb2x1bW4uRmlsdGVyIHx8IEZpbHRlckNvbXBvbmVudFxuXG4gICAgICBjb25zdCBpc0ZpbHRlcmFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgY29sdW1uLmZpbHRlcmFibGUsXG4gICAgICAgIGZpbHRlcmFibGUsXG4gICAgICAgIGZhbHNlXG4gICAgICApXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgIG1heFdpZHRoOiBgJHttYXhXaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0ZpbHRlcmFibGVcbiAgICAgICAgICAgID8gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgIFJlc29sdmVkRmlsdGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogdmFsdWUgPT4gdGhpcy5maWx0ZXJDb2x1bW4oY29sdW1uLCB2YWx1ZSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlZmF1bHRQcm9wcy5jb2x1bW4uRmlsdGVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2VSb3cgPSAocm93LCBpLCBwYXRoID0gW10sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgY29uc3Qgcm93SW5mbyA9IHtcbiAgICAgICAgb3JpZ2luYWw6IHJvd1tvcmlnaW5hbEtleV0sXG4gICAgICAgIHJvdzogcm93LFxuICAgICAgICBpbmRleDogcm93W2luZGV4S2V5XSxcbiAgICAgICAgdmlld0luZGV4OiArK3Jvd0luZGV4LFxuICAgICAgICBsZXZlbDogcGF0aC5sZW5ndGgsXG4gICAgICAgIG5lc3RpbmdQYXRoOiBwYXRoLmNvbmNhdChbaV0pLFxuICAgICAgICBhZ2dyZWdhdGVkOiByb3dbYWdncmVnYXRlZEtleV0sXG4gICAgICAgIGdyb3VwZWRCeVBpdm90OiByb3dbZ3JvdXBlZEJ5UGl2b3RLZXldLFxuICAgICAgICBzdWJSb3dzOiByb3dbc3ViUm93c0tleV0sXG4gICAgICB9XG4gICAgICBjb25zdCBpc0V4cGFuZGVkID0gXy5nZXQoZXhwYW5kZWQsIHJvd0luZm8ubmVzdGluZ1BhdGgpXG4gICAgICBjb25zdCB0ckdyb3VwUHJvcHMgPSBnZXRUckdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5zID0gb3B0aW9ucy51c2VGcm96ZW5Db2x1bW5zID8gZnJvemVuQ29sdW1ucyA6IG5vdEZyb3plbkNvbHVtbnNcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17cm93SW5mby5uZXN0aW5nUGF0aC5qb2luKCdfJyl9IHsuLi50ckdyb3VwUHJvcHN9PlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICB0clByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgcm93Ll92aWV3SW5kZXggJSAyID8gJy1ldmVuJyA6ICctb2RkJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbiwgaTIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgICAgICAgICAgY29uc3Qgc2hvdyA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgICAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgICAgICAgICAgY29sdW1uLm1pbldpZHRoXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgICAgICAgICBjb2x1bW4ubWF4V2lkdGhcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICAgIGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICAgICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpXG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAgICAgICAgIHRkUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAgICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAgICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgY2VsbEluZm8gPSB7XG4gICAgICAgICAgICAgICAgLi4ucm93SW5mbyxcbiAgICAgICAgICAgICAgICBpc0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgIGNvbHVtbjogeyAuLi5jb2x1bW4gfSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcm93SW5mby5yb3dbY29sdW1uLmlkXSxcbiAgICAgICAgICAgICAgICBwaXZvdGVkOiBjb2x1bW4ucGl2b3RlZCxcbiAgICAgICAgICAgICAgICBleHBhbmRlcjogY29sdW1uLmV4cGFuZGVyLFxuICAgICAgICAgICAgICAgIHJlc2l6ZWQsXG4gICAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgICAgICAgICB0ZFByb3BzLFxuICAgICAgICAgICAgICAgIGNvbHVtblByb3BzLFxuICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgc3R5bGVzLFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjZWxsSW5mby52YWx1ZVxuXG4gICAgICAgICAgICAgIGxldCBpbnRlcmFjdGlvblByb3BzXG4gICAgICAgICAgICAgIGxldCBpc0JyYW5jaFxuICAgICAgICAgICAgICBsZXQgaXNQcmV2aWV3XG5cbiAgICAgICAgICAgICAgY29uc3Qgb25FeHBhbmRlckNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcbiAgICAgICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwge30pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IG5ld0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZSAmJlxuICAgICAgICAgICAgICAgICAgICAgIG9uRXhwYW5kZWRDaGFuZ2UobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSBzdGFuZGFyZCBjZWxsXG4gICAgICAgICAgICAgIGxldCByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBjb2x1bW4uQ2VsbCxcbiAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBSZW5kZXJlcnNcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fFxuICAgICAgICAgICAgICAgICghY29sdW1uLmFnZ3JlZ2F0ZSA/IEFnZ3JlZ2F0ZWRDb21wb25lbnQgOiBjb2x1bW4uQ2VsbClcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLlBpdm90VmFsdWUgfHwgUGl2b3RWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgUGl2b3RDb21wb25lbnQgfHxcbiAgICAgICAgICAgICAgICAocHJvcHMgPT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIGNvbHVtbi5QaXZvdCB8fCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudFxuXG4gICAgICAgICAgICAgIC8vIElzIHRoaXMgY2VsbCBleHBhbmRhYmxlP1xuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCB8fCBjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAgIC8vIE1ha2UgaXQgZXhwYW5kYWJsZSBieSBkZWZ1YWx0XG4gICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzID0ge1xuICAgICAgICAgICAgICAgICAgb25DbGljazogb25FeHBhbmRlckNsaWNrLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBwaXZvdGVkLCBoYXMgbm8gc3ViUm93cywgYW5kIGRvZXMgbm90IGhhdmUgYSBzdWJDb21wb25lbnQsIGRvIG5vdCBtYWtlIGV4cGFuZGFibGVcbiAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY2VsbEluZm8ucGl2b3RlZCkge1xuICAgICAgICAgICAgICAgIC8vIElzIHRoaXMgY29sdW1uIGEgYnJhbmNoP1xuICAgICAgICAgICAgICAgIGlzQnJhbmNoID1cbiAgICAgICAgICAgICAgICAgIHJvd0luZm8ucm93W3Bpdm90SURLZXldID09PSBjb2x1bW4uaWQgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cbiAgICAgICAgICAgICAgICBpc1ByZXZpZXcgPVxuICAgICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPlxuICAgICAgICAgICAgICAgICAgICBwaXZvdEJ5LmluZGV4T2Yocm93SW5mby5yb3dbcGl2b3RJREtleV0pICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgICAvLyBQaXZvdCBDZWxsIFJlbmRlciBPdmVycmlkZVxuICAgICAgICAgICAgICAgIGlmIChpc0JyYW5jaCkge1xuICAgICAgICAgICAgICAgICAgLy8gaXNQaXZvdFxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgIFJlc29sdmVkUGl2b3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcm93W3Bpdm90VmFsS2V5XSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgICAvLyBTaG93IHRoZSBwaXZvdCBwcmV2aWV3XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjZWxsSW5mby5hZ2dyZWdhdGVkKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mbyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGlmIChwaXZvdEJ5KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFJldHVybiB0aGUgY2VsbFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAga2V5PXtpMiArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgIXNob3cgJiYgJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgJiYgJ3J0LWV4cGFuZGFibGUnLFxuICAgICAgICAgICAgICAgICAgICAoaXNCcmFuY2ggfHwgaXNQcmV2aWV3KSAmJiAncnQtcGl2b3QnXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IGAke21heFdpZHRofXB4YCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25Qcm9wc31cbiAgICAgICAgICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cmVzb2x2ZWRDZWxsfVxuICAgICAgICAgICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgICAge3Jvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgICAgcm93SW5mby5zdWJSb3dzLm1hcCgoZCwgaSkgPT5cbiAgICAgICAgICAgICAgbWFrZVBhZ2VSb3coZCwgaSwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAge1N1YkNvbXBvbmVudCAmJlxuICAgICAgICAgICAgIXJvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgICAgU3ViQ29tcG9uZW50KHJvd0luZm8pfVxuICAgICAgICA8L1RyR3JvdXBDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZFJvdyA9IChyb3csIGksIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgY29sdW1ucyA9IG9wdGlvbnMudXNlRnJvemVuQ29sdW1ucyA/IGZyb3plbkNvbHVtbnMgOiBub3RGcm96ZW5Db2x1bW5zXG4gICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgLi4uZmluYWxTdGF0ZSxcbiAgICAgICAgY29sdW1uc1xuICAgICAgfVxuICAgICAgY29uc3QgdHJHcm91cFByb3BzID0gZ2V0VHJHcm91cFByb3BzKFxuICAgICAgICBmaW5hbFN0YXRlLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpc1xuICAgICAgKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17aX0gey4uLnRyR3JvdXBQcm9wc30+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICctcGFkUm93JyxcbiAgICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGUgfHwge319XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbHVtbnMubWFwKG1ha2VQYWRDb2x1bW4pfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVHJHcm91cENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNob3cgPVxuICAgICAgICB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGxldCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aFxuICAgICAgKVxuICAgICAgbGV0IGZsZXggPSB3aWR0aFxuICAgICAgbGV0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQoXG4gICAgICAgIHJlc2l6ZWRDb2wudmFsdWUsXG4gICAgICAgIGNvbHVtbi53aWR0aCxcbiAgICAgICAgY29sdW1uLm1heFdpZHRoXG4gICAgICApXG4gICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2kgKyAnLScgKyBjb2x1bW4uaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMsICFzaG93ICYmICdoaWRkZW4nKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogYCR7ZmxleH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICBtYXhXaWR0aDogYCR7bWF4V2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChQYWRSb3dDb21wb25lbnQpfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdEZvb3RQcm9wcyA9IGdldFRmb290UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0Rm9vdFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBvcHRpb25zLnVzZUZyb3plbkNvbHVtbnMgPyBmcm96ZW5Db2x1bW5zIDogbm90RnJvemVuQ29sdW1uc1xuICAgICAgY29uc3Qgcm93TWluV2lkdGggPSBvcHRpb25zLnVzZUZyb3plbkNvbHVtbnMgPyBmcm96ZW5Db2x1bW5NaW5XaWR0aCA6IG5vdEZyb3plbkNvbHVtbnNNaW5XaWR0aFxuICAgICAgY29uc3Qgc2l6ZVN0eWxlcyA9IG9wdGlvbnMudXNlRnJvemVuQ29sdW1ucyA/IHt3aWR0aDogYCR7cm93TWluV2lkdGh9cHhgfSA6IHttaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRmb290Q29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXt0Rm9vdFByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udEZvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIC4uLnNpemVTdHlsZXNcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udEZvb3RUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbHVtbnMubWFwKG1ha2VDb2x1bW5Gb290ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGZvb3RDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzaG93ID1cbiAgICAgICAgdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKFxuICAgICAgICByZXNpemVkQ29sLnZhbHVlLFxuICAgICAgICBjb2x1bW4ud2lkdGgsXG4gICAgICAgIGNvbHVtbi5taW5XaWR0aFxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChcbiAgICAgICAgcmVzaXplZENvbC52YWx1ZSxcbiAgICAgICAgY29sdW1uLndpZHRoLFxuICAgICAgICBjb2x1bW4ubWF4V2lkdGhcbiAgICAgIClcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGZvb3RUZFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkZvb3RlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17aSArICctJyArIGNvbHVtbi5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJ2hpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICBtYXhXaWR0aDogYCR7bWF4V2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLnRGb290VGRQcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi5jb2x1bW5Gb290ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5Gb290ZXIsIHtcbiAgICAgICAgICAgIGRhdGE6IHNvcnRlZERhdGEsXG4gICAgICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb25Qcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0UGFnaW5hdGlvblByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2luYXRpb25Db21wb25lbnRcbiAgICAgICAgICB7Li4ucmVzb2x2ZWRTdGF0ZX1cbiAgICAgICAgICBwYWdlcz17cGFnZXN9XG4gICAgICAgICAgY2FuUHJldmlvdXM9e2NhblByZXZpb3VzfVxuICAgICAgICAgIGNhbk5leHQ9e2Nhbk5leHR9XG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXt0aGlzLm9uUGFnZUNoYW5nZX1cbiAgICAgICAgICBvblBhZ2VTaXplQ2hhbmdlPXt0aGlzLm9uUGFnZVNpemVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPXtwYWdpbmF0aW9uUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXtwYWdpbmF0aW9uUHJvcHMuc3R5bGV9XG4gICAgICAgICAgey4uLnBhZ2luYXRpb25Qcm9wcy5yZXN0fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHJvb3RQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIClcbiAgICBjb25zdCB0YWJsZVByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgZ2V0VGFibGVQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICApXG4gICAgY29uc3QgdEJvZHlQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgIGdldFRib2R5UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgKVxuICAgIGNvbnN0IGxvYWRpbmdQcm9wcyA9IGdldExvYWRpbmdQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCBub0RhdGFQcm9wcyA9IGdldE5vRGF0YVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgIGNvbnN0IHJlc2l6ZXJQcm9wcyA9IGdldFJlc2l6ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcblxuICAgIGNvbnN0IG1ha2VUYWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBtYWtlUGFnaW5hdGlvbigpXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcFxuICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT0ncGFnaW5hdGlvbi10b3AnPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICAgIDxUYWJsZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgdGFibGVQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcgPyAncnQtcmVzaXppbmcnIDogJycsXG4gICAgICAgICAgICAgICAgJ2Zyb3plbi1jb2x1bW5zJ1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLnRhYmxlUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgZmxleEJhc2lzOiBmcm96ZW5Db2x1bW5NaW5XaWR0aCxcbiAgICAgICAgICAgICAgICBmbGV4R3JvdzogMCxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMDIpIC0xcHggMHB4IGluc2V0J1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2hhc0hlYWRlckdyb3VwcyA/IG1ha2VIZWFkZXJHcm91cHMoe3VzZUZyb3plbkNvbHVtbnM6IHRydWV9KSA6IG51bGx9XG4gICAgICAgICAgICAgICAge21ha2VIZWFkZXJzKHt1c2VGcm96ZW5Db2x1bW5zOiB0cnVlfSl9XG4gICAgICAgICAgICAgICAge2hhc0ZpbHRlcnMgPyBtYWtlRmlsdGVycyh7dXNlRnJvemVuQ29sdW1uczogdHJ1ZX0pIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8VGJvZHlDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAuLi50Qm9keVByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7ZnJvemVuQ29sdW1uTWluV2lkdGh9cHhgLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHsuLi50Qm9keVByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGksIFtdLCB7dXNlRnJvemVuQ29sdW1uczogdHJ1ZX0pKX1cbiAgICAgICAgICAgICAgICAgICAge3BhZFJvd3MubWFwKChkLCBpKSA9PiBtYWtlUGFkUm93KGQsIGksIHt1c2VGcm96ZW5Db2x1bW5zOiB0cnVlfSkpfVxuICAgICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAge2hhc0NvbHVtbkZvb3RlciA/IG1ha2VDb2x1bW5Gb290ZXJzKHt1c2VGcm96ZW5Db2x1bW5zOiB0cnVlfSkgOiBudWxsfVxuICAgICAgICAgICAgPC9UYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgIDxUYWJsZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgdGFibGVQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY3VycmVudGx5UmVzaXppbmcgPyAncnQtcmVzaXppbmcnIDogJydcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICAgIHsuLi50YWJsZVByb3BzLnJlc3R9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGFzSGVhZGVyR3JvdXBzID8gbWFrZUhlYWRlckdyb3VwcygpIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7bWFrZUhlYWRlcnMoKX1cbiAgICAgICAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRCb2R5UHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRCb2R5UHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBgJHtub3RGcm96ZW5Db2x1bW5zTWluV2lkdGh9cHhgLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHsuLi50Qm9keVByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwYWdlUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGkpKX1cbiAgICAgICAgICAgICAgICAgICAge3BhZFJvd3MubWFwKG1ha2VQYWRSb3cpfVxuICAgICAgICAgICAgICAgIDwvVGJvZHlDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAge2hhc0NvbHVtbkZvb3RlciA/IG1ha2VDb2x1bW5Gb290ZXJzKCkgOiBudWxsfVxuICAgICAgICAgICAgPC9UYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2hvd1BhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25Cb3R0b21cbiAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9J3BhZ2luYXRpb24tYm90dG9tJz5cbiAgICAgICAgICAgICAge3BhZ2luYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICB7IXBhZ2VSb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgPE5vRGF0YUNvbXBvbmVudCB7Li4ubm9EYXRhUHJvcHN9PlxuICAgICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQobm9EYXRhVGV4dCl9XG4gICAgICAgICAgICA8L05vRGF0YUNvbXBvbmVudD59XG4gICAgICAgICAgPExvYWRpbmdDb21wb25lbnRcbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICBsb2FkaW5nVGV4dD17bG9hZGluZ1RleHR9XG4gICAgICAgICAgICB7Li4ubG9hZGluZ1Byb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIGNoaWxkUHJvcHMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIHRvIGEgZnVuY3Rpb24tYXMtYS1jaGlsZFxuICAgIHJldHVybiBjaGlsZHJlbiA/IGNoaWxkcmVuKGZpbmFsU3RhdGUsIG1ha2VUYWJsZSwgdGhpcykgOiBtYWtlVGFibGUoKVxuICB9XG59XG4iXX0=