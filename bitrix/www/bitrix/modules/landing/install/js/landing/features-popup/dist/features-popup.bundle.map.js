{"version":3,"sources":["features-popup.bundle.js"],"names":["this","BX","exports","main_core_events","main_core","main_popup","landing_pageobject","_","t","_t","_t2","_t3","_t4","_t5","_t6","_t7","_t8","_cache","babelHelpers","classPrivateFieldLooseKey","_getPopup","_getContent","FeaturesPopup","EventEmitter","constructor","_options","super","Object","defineProperty","value","_getContent2","_getPopup2","writable","Cache","MemoryCache","setEventNamespace","subscribeFromOptions","events","setOptions","Event","bind","PageObject","getEditorWindow","document","hide","options","classPrivateFieldLooseBase","set","getOptions","get","show","emit","close","isShown","static","Type","isArray","map","optionsItem","createContentBlock","getTitle","isStringFilled","title","Tag","render","Text","encode","getLink","isPlainObject","link","label","isFunction","onClick","getActionButton","actionButton","getTextBlock","getIcon","icon","className","blockClass","result","theme","block","id","getRandom","backgroundColor","Dom","style","remember","Popup","bindElement","content","width","autoHide","closeByEsc","noAllPaddings","angle","position","offset","minWidth","contentBackground","background","items","createRow","Themes","Highlight","Landing","Main"],"mappings":"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","file":"features-popup.bundle.map.js"}