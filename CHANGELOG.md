## Unreleased

> Oct 23, 2023

* :tada: **Enhancement** Added placeholder to FhiSelect

## 4.1.0

> Oct 20, 2023

* :nut_and_bolt: **New** Added `FhiSelect`
* :tada: **Enhancement** Updated packages

## 4.0.2

> Oct 20, 2023

* :bug: **Bugfix** `apiClient` will no longer stringify FormData.
* :bug: **Bugfix** Updated packages to remove vulnerabilities.

## 4.0.1

> Oct 9, 2023

* :bug: **Bugfix** useApi now resets data and error before calling. This fixes a bug where the previous data and error was shown while loading new data. 

## 4.0.0

> Apr 12, 2023

* :boom: **Breaking** updated to `@folkehelseinstituttet/style` v5 [Changelog](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/blob/main/CHANGELOG.md#500)
* :tada: **Enhancement** Updated storybook to v7

## 3.2.0

> Mar 28, 2023

* :tada: **Enhancement** Added type to `useApi`
* :tada: **Enhancement** Added `isRequested` to apiClient to check if Request has been called
* :tada: **Enhancement** Added `PATCH` to apiClient
* :tada: **Enhancement** Added new optional prop to FhiTableStructure: `onClick`
* :bug: **Bugfix** Fixed button onClick type

## 3.1.0

> Mar 16, 2023

* :tada: **Enhancement** Added new optional props to FhiTable: `compact` `striped` `hover`
* :tada: **Enhancement** Added new optional prop to table elements: `selected`
* :tada: **Enhancement** Added `flat` and `icon` styles for FhiButton
* :nut_and_bolt: **New** Added `FhiSpinner`

## 3.0.0

> Feb 17, 2023

* :boom: **Breaking** updated to `@folkehelseinstituttet/style` v4 [Changelog](https://github.com/folkehelseinstituttet/Fhi.Frontend.Style/blob/main/CHANGELOG.md#400)
* :boom: **Breaking** Removed JS friendly Theme variables as variables in `@folkehelseinstituttet/style` where renamed and moved in new version. If you are using `FhiTheme` today, you will have to replace it with your own object that contains the variables you are using in the your project
* :bug: **Bugfix** Fixed Accordion item `onOpen` function that broke in V2.0.0

## 2.0.0

> Jan 11, 2023

* :tada: **Enhancement** Updated all dependencies
* :boom: **Breaking** Updated design on `FhiHeader`
* :tada: **Enhancement** Removed `logo`, `logoLight` and `faIcons` props from `FhiHeader`
* :boom: **Breaking** Updated design on `FhiAccordion`
* :tada: **Enhancement** Removed `arrowIcon` prop from `FhiAccordion`
* :nut_and_bolt: **New** Added `flush` and `alternate` variations to `FhiAccordion`
* :nut_and_bolt: **New** Added `FhiTabs` with new design
* :boom: **Breaking** Replaced `FhiTabBar` with `FhiTabs`
* :boom: **Breaking** Updated design on `FhiToast`
* :nut_and_bolt: **New** Added `title` to `FhiToast`
* :bug: **Bugfix** Fixed delay for `FhiToast` (Added option for 0 delay that makes toast stay until closed by user)



## 1.3.0

> Aug 02, 2022

* :nut_and_bolt: **New** Added delete-functions to 'apiClient'

## 1.2.1

> Aug 01, 2022

* :tada: **Enhancement** Updated dependencies

## 1.2.0

> May 25, 2022

* :tada: **Enhancement** Added repository in package.json
* :nut_and_bolt: **New** Added `apiClient`
* :nut_and_bolt: **New** Added `useApi` hook

## 1.1.0

> May 12, 2022

* :tada: **Enhancement** OnClick is now optional on `FhiButton`
* :nut_and_bolt: **New** Added onOpen optional function on items in `FhiAccordion`

## 1.0.0

> May 05, 2022

* :boom: **Breaking** Replaced text with children i `FhiButton`
* :tada: **Enhancement** Added option to set sumbit-type to `FhiButton`
* :tada: **Enhancement** Added prop for iconLight in `FhiHeader`
* :tada: **Enhancement** Fixed margin/padding bottom on `FhiHeader`
* :nut_and_bolt: **New** Added `FhiTabBar`
* :nut_and_bolt: **New** Added `FhiAccordion`
* :nut_and_bolt: **New** Added [`FhiToast`](./src/components/FhiToast/README.md)


## 0.3.0

> May 04, 2022

* :nut_and_bolt: **New** Added Typescript definitions


## 0.2.0

> May 03, 2022

* :tada: **Enhancement** Added disabled-option to `FhiButton`


## 0.1.0

> Apr 29, 2022

* :boom: **Breaking** Created `@folkehelseinstituttet/react-components`
* :nut_and_bolt: **New** Added `FhiButton` to package
* :nut_and_bolt: **New** Added `FhiTable` to package
* :nut_and_bolt: **New** Added `FhiDetails` to package
* :nut_and_bolt: **New** Added `FhiTheme` to package
* :nut_and_bolt: **New** Added `FhiHeader` to package


## Examples

* :nut_and_bolt: **New**
* :tada: **Enhancement**
* :bug: **Bugfix**
* :boom: **Breaking**